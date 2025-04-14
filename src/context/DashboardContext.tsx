import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
  ReactNode,
} from 'react';
import {
  useHass,
  useAreas,
  useDevice,
  useEntity,
  callService,
  type EntityName,
  type Area,
  type Device,
  type Entity,
  type HassEntityWithService,
} from '@hakit/core';

// Define the structure for prioritized content
export type PrioritizedContent = {
  id: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  type: 'alert' | 'room' | 'media' | 'global_info' | 'quick_action' | 'overview';
  data: any;
};

interface DashboardContextProps {
  loading: boolean;
  areas: Record<string, Area>;
  devices: Record<string, Device>;
  entities: Record<string, Entity>;
  entityAreaMap: Record<EntityName, string | null>;
  activeAreaId: string | null;
  activeAreaName: string | null;
  prioritizedContent: PrioritizedContent[];
  getEntitiesInArea: (areaId: string) => HassEntityWithService<any>[];
}

const DashboardContext = createContext<DashboardContextProps | undefined>(undefined);

// --- Configuration ---
const CRITICAL_ALERT_ENTITIES: EntityName[] = [
  'alarm_control_panel.alarmo',
  // Add your actual critical sensor IDs here
];
const MOTION_SENSOR_ENTITIES: EntityName[] = [
  'binary_sensor.motion_livingroom',
  'binary_sensor.motion_kitchen',
  'binary_sensor.motion_office',
  'binary_sensor.motion_bedroom',
  'binary_sensor.motion_wardrobe',
  'binary_sensor.motion_hallway',
  'binary_sensor.motion_bathroom',
  // Include any additional motion sensors
];
const MEDIA_PLAYER_ENTITIES: EntityName[] = [
  'media_player.kok',
  'media_player.tv_vardagsrum',
  'media_player.hogtalare',
  'media_player.sovrum',
  'media_player.vardagsrum',
  // Include additional media players
];

const ACTIVE_AREA_TIMEOUT = 5 * 60 * 1000; // 5 minutes in milliseconds
// --- End Configuration ---

export const DashboardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { useStore } = useHass();
  const allHassEntities = useStore((state) => state.entities);
  const { data: areasData, isLoading: areasLoading } = useAreas();
  const { data: devicesData, isLoading: devicesLoading } = useDevice();
  const { data: entitiesData, isLoading: entitiesLoading } = useEntities();

  const areas = useMemo(() => areasData ?? {}, [areasData]);
  const devices = useMemo(() => devicesData ?? {}, [devicesData]);
  const entities = useMemo(() => entitiesData ?? {}, [entitiesData]);

  const [loading, setLoading] = useState(true);
  const [entityAreaMap, setEntityAreaMap] = useState<Record<EntityName, string | null>>({});
  const [activeAreaId, setActiveAreaId] = useState<string | null>(null);
  const [activeAreaTimestamp, setActiveAreaTimestamp] = useState<number>(0);
  const [activeAlerts, setActiveAlerts] = useState<EntityName[]>([]);
  const [activeMediaPlayers, setActiveMediaPlayers] = useState<EntityName[]>([]);
  const [prioritizedContent, setPrioritizedContent] = useState<PrioritizedContent[]>([]);

  // 1. Initial Data Loading and Mapping
  useEffect(() => {
    const isLoading = areasLoading || devicesLoading || entitiesLoading;
    setLoading(isLoading);
    if (!isLoading && areasData && devicesData && entitiesData) {
      console.log("Registry data loaded:", { areas: areasData, devices: devicesData, entities: entitiesData });
      const newEntityAreaMap: Record<EntityName, string | null> = {};

      Object.values(entities).forEach((entity) => {
        if (!entity || !entity.entity_id) return;
        
        // Try to find area through device first
        if (entity.device_id && devices[entity.device_id]?.area_id) {
          newEntityAreaMap[entity.entity_id] = devices[entity.device_id].area_id;
        } else if (entity.area_id) {
          // Direct area assignment
          newEntityAreaMap[entity.entity_id] = entity.area_id;
        } else {
          newEntityAreaMap[entity.entity_id] = null;
        }
      });

      setEntityAreaMap(newEntityAreaMap);
    }
  }, [areasData, devicesData, entitiesData, areasLoading, devicesLoading, entitiesLoading]);

  // 2. Motion Sensor Monitoring
  useEffect(() => {
    if (!allHassEntities) return;

    const handleMotionUpdate = () => {
      const activeMotionSensors = MOTION_SENSOR_ENTITIES
        .filter(sensorId => allHassEntities[sensorId]?.state === 'on')
        .map(sensorId => ({
          entityId: sensorId,
          lastChanged: new Date(allHassEntities[sensorId]?.last_changed || 0).getTime()
        }))
        .sort((a, b) => b.lastChanged - a.lastChanged);

      if (activeMotionSensors.length > 0) {
        const mostRecentMotion = activeMotionSensors[0];
        const areaId = entityAreaMap[mostRecentMotion.entityId];
        if (areaId) {
          setActiveAreaId(areaId);
          setActiveAreaTimestamp(Date.now());
        }
      }
    };

    handleMotionUpdate();
    // Set up subscription to motion sensors
    const unsubscribeFns = MOTION_SENSOR_ENTITIES.map(entityId => 
      useStore.subscribe(
        state => state.entities[entityId]?.state,
        handleMotionUpdate
      )
    );

    return () => unsubscribeFns.forEach(fn => fn());
  }, [allHassEntities, entityAreaMap]);

  // 3. Area Timeout Management
  useEffect(() => {
    if (!activeAreaId || !activeAreaTimestamp) return;

    const timeoutId = setTimeout(() => {
      const timeSinceActivation = Date.now() - activeAreaTimestamp;
      if (timeSinceActivation >= ACTIVE_AREA_TIMEOUT) {
        setActiveAreaId(null);
        setActiveAreaTimestamp(0);
      }
    }, ACTIVE_AREA_TIMEOUT);

    return () => clearTimeout(timeoutId);
  }, [activeAreaId, activeAreaTimestamp]);

  // 4. Alert Monitoring
  useEffect(() => {
    if (!allHassEntities) return;

    const checkAlerts = () => {
      const alerts = CRITICAL_ALERT_ENTITIES.filter(entityId => {
        const entity = allHassEntities[entityId];
        if (!entity) return false;
        
        // Add custom logic for different entity types
        switch (entity.entity_id.split('.')[0]) {
          case 'alarm_control_panel':
            return entity.state === 'triggered';
          case 'binary_sensor':
            return entity.state === 'on';
          default:
            return false;
        }
      });

      setActiveAlerts(alerts);
    };

    checkAlerts();
    const unsubscribeFns = CRITICAL_ALERT_ENTITIES.map(entityId =>
      useStore.subscribe(
        state => state.entities[entityId]?.state,
        checkAlerts
      )
    );

    return () => unsubscribeFns.forEach(fn => fn());
  }, [allHassEntities]);

  // 5. Media Player Monitoring
  useEffect(() => {
    if (!allHassEntities) return;

    const checkMediaPlayers = () => {
      const activePlayers = MEDIA_PLAYER_ENTITIES.filter(entityId => {
        const entity = allHassEntities[entityId];
        return entity?.state !== 'off' && entity?.state !== 'idle';
      });

      setActiveMediaPlayers(activePlayers);
    };

    checkMediaPlayers();
    const unsubscribeFns = MEDIA_PLAYER_ENTITIES.map(entityId =>
      useStore.subscribe(
        state => state.entities[entityId]?.state,
        checkMediaPlayers
      )
    );

    return () => unsubscribeFns.forEach(fn => fn());
  }, [allHassEntities]);

  // 6. Content Prioritization
  useEffect(() => {
    const newContent: PrioritizedContent[] = [];

    // Priority 1: Critical Alerts
    activeAlerts.forEach(alertId => {
      newContent.push({
        id: `alert-${alertId}`,
        priority: 'critical',
        type: 'alert',
        data: { entityId: alertId }
      });
    });

    // Priority 2: Active Room
    if (activeAreaId) {
      newContent.push({
        id: `room-${activeAreaId}`,
        priority: 'high',
        type: 'room',
        data: { areaId: activeAreaId }
      });
    }

    // Priority 3: Active Media Players
    activeMediaPlayers.forEach(playerId => {
      newContent.push({
        id: `media-${playerId}`,
        priority: 'medium',
        type: 'media',
        data: { entityId: playerId }
      });
    });

    // Priority 4: Overview (if no active room)
    if (!activeAreaId) {
      newContent.push({
        id: 'overview',
        priority: 'low',
        type: 'overview',
        data: null
      });
    }

    setPrioritizedContent(newContent);
  }, [activeAlerts, activeAreaId, activeMediaPlayers]);

  const getEntitiesInArea = useCallback((areaId: string) => {
    if (!allHassEntities || !entityAreaMap) return [];

    return Object.entries(entityAreaMap)
      .filter(([_, entityAreaId]) => entityAreaId === areaId)
      .map(([entityId]) => allHassEntities[entityId])
      .filter((entity): entity is HassEntityWithService<any> => entity !== undefined);
  }, [allHassEntities, entityAreaMap]);

  const activeAreaName = useMemo(() => 
    activeAreaId ? areas[activeAreaId]?.name || null : null
  , [activeAreaId, areas]);

  const value = {
    loading,
    areas,
    devices,
    entities,
    entityAreaMap,
    activeAreaId,
    activeAreaName,
    prioritizedContent,
    getEntitiesInArea,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};
