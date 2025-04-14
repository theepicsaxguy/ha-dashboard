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
  // useDevices & useEntityRegistry are not exported, so we remove them.
  type EntityName,
  type Area,
  // type Device is not exported.
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
  areas: Area[]; // from useAreas
  devices: Record<string, any>; // no device hook; adjust as needed if you have a registry
  entities: Record<string, HassEntityWithService<any>>;
  entityAreaMap: Record<string, string | null>; // keyed by entity ID (string)
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
  const areas = useAreas();
  // Since useDevices is not exported, we define devices as an empty object.
  const devices = {};

  // Create a memoized map from the areas array
  const areasMap = useMemo(
    () =>
      Array.isArray(areas)
        ? areas.reduce((acc, area) => ({ ...acc, [area.area_id]: area }), {} as Record<string, Area>)
        : {},
    [areas]
  );

  const [loading, setLoading] = useState(true);
  const [entityAreaMap, setEntityAreaMap] = useState<Record<string, string | null>>({});
  const [activeAreaId, setActiveAreaId] = useState<string | null>(null);
  const [activeAreaTimestamp, setActiveAreaTimestamp] = useState<number>(0);
  const [activeAlerts, setActiveAlerts] = useState<EntityName[]>([]);
  const [activeMediaPlayers, setActiveMediaPlayers] = useState<EntityName[]>([]);
  const [prioritizedContent, setPrioritizedContent] = useState<PrioritizedContent[]>([]);

  // 1. Initial Data Loading and Mapping
  useEffect(() => {
    const isLoading = !areas || !allHassEntities;
    setLoading(isLoading);
    if (!isLoading) {
      console.log("Registry data loaded:", { areas, allHassEntities });
      const newEntityAreaMap: Record<string, string | null> = {};

      Object.values(allHassEntities).forEach((entity) => {
        if (!entity || !entity.entity_id) return;
        // Attempt to read device_id from entity attributes
        const deviceId = (entity as any).attributes?.device_id;
        if (deviceId && (devices as any)[deviceId]?.area_id) {
          newEntityAreaMap[entity.entity_id] = (devices as any)[deviceId].area_id;
        } else if ((entity as any).attributes?.area_id) {
          newEntityAreaMap[entity.entity_id] = (entity as any).attributes.area_id;
        } else {
          newEntityAreaMap[entity.entity_id] = null;
        }
      });
      setEntityAreaMap(newEntityAreaMap);
    }
  }, [areas, allHassEntities]);

  // 2. Motion Sensor Monitoring
  useEffect(() => {
    if (!allHassEntities) return;

    const handleMotionUpdate = () => {
      const activeMotionSensors = MOTION_SENSOR_ENTITIES
        .filter((sensorId) => allHassEntities[sensorId]?.state === 'on')
        .map((sensorId) => ({
          entityId: sensorId,
          lastChanged: new Date(allHassEntities[sensorId]?.last_changed || 0).getTime(),
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
    // Set up subscription to motion sensors: subscribe now takes a single callback.
    const unsubscribeFns = MOTION_SENSOR_ENTITIES.map(() =>
      useStore.subscribe(() => handleMotionUpdate())
    );

    return () => unsubscribeFns.forEach((fn) => fn());
  }, [allHassEntities, entityAreaMap, useStore]);

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
      const alerts = CRITICAL_ALERT_ENTITIES.filter((entityId) => {
        const entity = allHassEntities[entityId];
        if (!entity) return false;
        const domain = entity.entity_id.split('.')[0];
        if (domain === 'alarm_control_panel') {
          return entity.state === 'triggered';
        } else if (domain === 'binary_sensor') {
          return entity.state === 'on';
        }
        return false;
      });
      setActiveAlerts(alerts);
    };

    checkAlerts();
    const unsubscribeFns = CRITICAL_ALERT_ENTITIES.map(() =>
      useStore.subscribe(() => checkAlerts())
    );

    return () => unsubscribeFns.forEach((fn) => fn());
  }, [allHassEntities, useStore]);

  // 5. Media Player Monitoring
  useEffect(() => {
    if (!allHassEntities) return;

    const checkMediaPlayers = () => {
      const activePlayers = MEDIA_PLAYER_ENTITIES.filter((entityId) => {
        const entity = allHassEntities[entityId];
        return entity?.state !== 'off' && entity?.state !== 'idle';
      });
      setActiveMediaPlayers(activePlayers);
    };

    checkMediaPlayers();
    const unsubscribeFns = MEDIA_PLAYER_ENTITIES.map(() =>
      useStore.subscribe(() => checkMediaPlayers())
    );

    return () => unsubscribeFns.forEach((fn) => fn());
  }, [allHassEntities, useStore]);

  // 6. Content Prioritization
  useEffect(() => {
    const newContent: PrioritizedContent[] = [];

    // Priority 1: Critical Alerts
    activeAlerts.forEach((alertId) => {
      // Skip empty alert IDs to prevent empty keys
      if (!alertId || alertId.trim() === "") {
        console.warn("Found empty alertId, skipping");
        return;
      }
      newContent.push({
        id: `alert-${alertId}`,
        priority: 'critical',
        type: 'alert',
        data: { entityId: alertId },
      });
    });

    // Priority 2: Active Room
    if (activeAreaId && activeAreaId.trim() !== "") {
      newContent.push({
        id: `room-${activeAreaId}`,
        priority: 'high',
        type: 'room',
        data: { areaId: activeAreaId },
      });
    }

    // Priority 3: Active Media Players
    activeMediaPlayers.forEach((playerId) => {
      // Skip empty player IDs to prevent empty keys
      if (!playerId || playerId.trim() === "") {
        console.warn("Found empty playerId, skipping");
        return;
      }
      newContent.push({
        id: `media-${playerId}`,
        priority: 'medium',
        type: 'media',
        data: { entityId: playerId },
      });
    });

    // Priority 4: Overview (if no active room)
    if (!activeAreaId || activeAreaId.trim() === "") {
      newContent.push({
        id: 'overview',
        priority: 'low',
        type: 'overview',
        data: null,
      });
    }
    setPrioritizedContent(newContent);
  }, [activeAlerts, activeAreaId, activeMediaPlayers]);

  const getEntitiesInArea = useCallback(
    (areaId: string) => {
      if (!allHassEntities || !entityAreaMap) return [];
      return Object.entries(entityAreaMap)
        .filter(([_, mappedAreaId]) => mappedAreaId === areaId)
        .map(([entityId]) => allHassEntities[entityId])
        .filter((entity): entity is HassEntityWithService<any> => entity !== undefined);
    },
    [allHassEntities, entityAreaMap]
  );

  const activeAreaName = useMemo(
    () => (activeAreaId ? areasMap[activeAreaId]?.name || null : null),
    [activeAreaId, areasMap]
  );

  const value = {
    loading,
    areas,
    devices,
    entities: allHassEntities,
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
