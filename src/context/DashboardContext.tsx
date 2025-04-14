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
    useDevice, // Assuming this hook exists and returns { data, isLoading }
    useEntities, // Assuming this hook exists and returns { data, isLoading }
    useEntity,
    callService, // Correctly importing callService
    type EntityName,
    type Area,
    type Device, // Assuming these types are exported
    type Entity, // Assuming these types are exported
    type HassEntityWithService, // Keep using this for state access
    // Removed MediaPlayerEntity import - use HassEntityWithService and check domain/attributes
  } from '@hakit/core';
  
  // Define the structure for prioritized content
  export type PrioritizedContent = {
    id: string; // Unique key for react list rendering
    priority: 'critical' | 'high' | 'medium' | 'low';
    type:
      | 'alert'
      | 'room'
      | 'media'
      | 'global_info'
      | 'quick_action'
      | 'overview'; // Added overview for default state
    data: any; // entityId, areaId, entityIds, etc.
  };
  
  // Define the context value shape
  interface DashboardContextProps {
    loading: boolean;
    areas: Record<string, Area>;
    devices: Record<string, Device>;
    entities: Record<string, Entity>;
    entityAreaMap: Record<EntityName, string | null>; // Map entity_id to area_id
    activeAreaId: string | null;
    activeAreaName: string | null;
    prioritizedContent: PrioritizedContent[];
    getEntitiesInArea: (areaId: string) => HassEntityWithService<any>[];
  }
  
  const DashboardContext = createContext<DashboardContextProps | undefined>(
    undefined,
  );
  
  // --- Configuration ---
  const CRITICAL_ALERT_ENTITIES: EntityName[] = [
    'alarm_control_panel.alarmo',
    // Add your actual critical sensor IDs
  ];
  const MOTION_SENSOR_ENTITIES: EntityName[] = [
    'binary_sensor.motion_livingroom',
    'binary_sensor.motion_kitchen',
    'binary_sensor.motion_office',
    'binary_sensor.motion_bedroom',
    'binary_sensor.motion_wardrobe',
    'binary_sensor.motion_hallway',
    'binary_sensor.motion_bathroom',
    // Add all other relevant motion sensor IDs
  ];
  const MEDIA_PLAYER_ENTITIES: EntityName[] = [
    'media_player.kok',
    'media_player.tv_vardagsrum',
    'media_player.hogtalare',
    'media_player.sovrum',
    'media_player.vardagsrum',
    // Add all other relevant media player IDs
  ];
  
  const ACTIVE_AREA_TIMEOUT = 5 * 60 * 1000; // 5 minutes in milliseconds
  // --- End Configuration ---
  
  
  export const DashboardProvider: React.FC<{ children: ReactNode }> = ({
    children,
  }) => {
    const { useStore } = useHass();
    const allHassEntities = useStore(state => state.entities);
    // Correct usage assuming these return { data, isLoading }
    const { data: areasData, isLoading: areasLoading } = useAreas();
    const { data: devicesData, isLoading: devicesLoading } = useDevice();
    const { data: entitiesData, isLoading: entitiesLoading } = useEntities();
  
    // Use default empty objects if data is initially undefined
    const areas = useMemo(() => areasData ?? {}, [areasData]);
    const devices = useMemo(() => devicesData ?? {}, [devicesData]);
    const entities = useMemo(() => entitiesData ?? {}, [entitiesData]);
  
    const [loading, setLoading] = useState(true);
    const [entityAreaMap, setEntityAreaMap] = useState<
      Record<EntityName, string | null>
    >({});
    const [activeAreaId, setActiveAreaId] = useState<string | null>(null);
    const [activeAreaTimestamp, setActiveAreaTimestamp] = useState<number>(0);
    const [activeAlerts, setActiveAlerts] = useState<EntityName[]>([]);
    const [activeMediaPlayers, setActiveMediaPlayers] = useState<EntityName[]>([]);
    const [prioritizedContent, setPrioritizedContent] = useState<PrioritizedContent[]>([]);
  
    // 1. Initial Data Loading and Mapping
    useEffect(() => {
      const isLoading = areasLoading || devicesLoading || entitiesLoading;
      setLoading(isLoading);
      // Check if data exists before proceeding
      if (!isLoading && areasData && devicesData && entitiesData) {
        console.log("Registry data loaded:", { areas: areasData, devices: devicesData, entities: entitiesData });
        const newEntityAreaMap: Record<EntityName, string | null> = {};
  
        // Use the memoized data which defaults to {} if null/undefined
        Object.values(entities).forEach((entity) => {
          if (!entity || !entity.entity_id) return; // Basic check
  
          const entityId = entity.entity_id as EntityName; // Cast here
  
          if (entity.device_id) {
            const device = devices[entity.device_id];
            if (device && device.area_id) {
              newEntityAreaMap[entityId] = device.area_id;
            } else if (entity.area_id) { // Check entity's area_id as fallback
              newEntityAreaMap[entityId] = entity.area_id;
            } else {
              newEntityAreaMap[entityId] = null;
            }
          } else if (entity.area_id) {
            newEntityAreaMap[entityId] = entity.area_id;
          } else {
            newEntityAreaMap[entityId] = null;
          }
        });
        console.log("Generated Entity Area Map:", newEntityAreaMap);
        setEntityAreaMap(newEntityAreaMap);
      }
    }, [areasData, devicesData, entitiesData, areasLoading, devicesLoading, entitiesLoading, areas, devices, entities]); // Include memoized versions too
  
    // 2. Motion Sensor Logic
    useEffect(() => {
      // Ensure map is populated before running logic
      if (loading || Object.keys(entityAreaMap).length === 0) return;
  
      let latestMotionTime = activeAreaTimestamp;
      let latestMotionAreaId: string | null = activeAreaId; // Use a different variable name
  
      MOTION_SENSOR_ENTITIES.forEach((entityId) => {
        const entity = allHassEntities[entityId];
        if (entity && entity.state === 'on' && entity.last_changed) {
             const lastChangedTime = new Date(entity.last_changed).getTime();
             if (lastChangedTime > latestMotionTime) {
                 latestMotionTime = lastChangedTime;
                 latestMotionAreaId = entityAreaMap[entityId] ?? null; // Find area from map
                 console.log(`New motion detected in area: ${latestMotionAreaId} from ${entityId} at ${new Date(lastChangedTime).toLocaleTimeString()}`);
             }
        }
      });
  
      // Update state if necessary
      if (latestMotionAreaId !== activeAreaId || latestMotionTime > activeAreaTimestamp) {
          setActiveAreaId(latestMotionAreaId);
          setActiveAreaTimestamp(latestMotionTime);
      }
  
      // Timeout logic
      const currentTimestamp = activeAreaTimestamp; // Capture timestamp for timeout closure
      const timerId = setTimeout(() => {
        // Check against the timestamp captured when the timer was set
        if (Date.now() - currentTimestamp >= ACTIVE_AREA_TIMEOUT && currentTimestamp !== 0) {
          console.log("Active area timed out.");
          setActiveAreaId(null);
          setActiveAreaTimestamp(0); // Reset timestamp
        }
      }, ACTIVE_AREA_TIMEOUT + 500); // Check slightly after timeout expected
  
      return () => clearTimeout(timerId);
  
    }, [allHassEntities, entityAreaMap, loading, activeAreaId, activeAreaTimestamp]); // Rerun when HASS entities update
  
    // 3. Alert Monitoring Logic
    useEffect(() => {
      if (loading) return;
      const currentAlerts: EntityName[] = [];
      CRITICAL_ALERT_ENTITIES.forEach((entityId) => {
        const entity = allHassEntities[entityId];
        // Check entity exists before accessing properties
        if (entity && entity.attributes) {
          // Entity might not have `domain` directly, but entity_id format tells us
          const domain = entity.entity_id.split('.')[0];
          const isAlerting =
            (domain === 'binary_sensor' && entity.state === 'on' && entity.attributes.device_class && ['door', 'window', 'leak', 'smoke', 'gas', 'safety', 'problem'].includes(entity.attributes.device_class)) ||
            (domain === 'alarm_control_panel' && ['triggered', 'arming', 'pending'].includes(entity.state));
  
          if (isAlerting) {
            currentAlerts.push(entityId);
          }
        }
      });
      if (JSON.stringify(currentAlerts) !== JSON.stringify(activeAlerts)) {
          console.log("Updating active alerts:", currentAlerts);
          setActiveAlerts(currentAlerts);
      }
    }, [allHassEntities, loading, activeAlerts]);
  
    // 4. Media Player Monitoring Logic
    useEffect(() => {
      if (loading) return;
      const currentMediaPlayers: EntityName[] = [];
      MEDIA_PLAYER_ENTITIES.forEach((entityId) => {
        // Cast carefully, or just check properties
        const entity = allHassEntities[entityId] as HassEntityWithService<any>;
        if (entity && entity.attributes && ['playing', 'paused', 'buffering', 'on'].includes(entity.state)) {
          if (entity.attributes.media_title || entity.attributes.media_artist || entity.attributes.app_name) {
             currentMediaPlayers.push(entityId);
          }
        }
      });
      if (JSON.stringify(currentMediaPlayers) !== JSON.stringify(activeMediaPlayers)) {
           console.log("Updating active media players:", currentMediaPlayers);
           setActiveMediaPlayers(currentMediaPlayers);
      }
    }, [allHassEntities, loading, activeMediaPlayers]);
  
    // 5. Prioritization Engine Logic
    useEffect(() => {
      // Ensure necessary registry data is loaded
      if (loading || Object.keys(areas).length === 0 || Object.keys(entities).length === 0) return;
  
      const newContent: PrioritizedContent[] = [];
  
      // --- Critical Alerts ---
      activeAlerts.forEach((entityId, index) => {
        newContent.push({
          id: `alert-${entityId}-${index}`,
          priority: 'critical',
          type: 'alert',
          data: { entityId },
        });
      });
  
      // --- Active Room Context ---
      if (activeAreaId && areas[activeAreaId]) {
        newContent.push({
          id: `room-${activeAreaId}`,
          priority: 'high',
          type: 'room',
          data: { areaId: activeAreaId },
        });
      }
  
      // --- Active Media Players ---
      activeMediaPlayers.forEach((entityId, index) => {
        const playerAreaId = entityAreaMap[entityId];
        const priority = playerAreaId === activeAreaId ? 'high' : 'medium';
        newContent.push({
          id: `media-${entityId}-${index}`,
          priority: priority,
          type: 'media',
          data: { entityId },
        });
      });
  
       // --- Default / Overview State ---
       if (newContent.filter(item => item.priority === 'high' || item.priority === 'critical').length === 0) {
           newContent.push({
               id: 'overview-default',
               priority: 'medium',
               type: 'overview',
               data: {}
           })
       }
  
      // --- Global Info (Always present, low priority) ---
      newContent.push({
        id: 'global-info',
        priority: 'low',
        type: 'global_info',
        data: {},
      });
  
      // --- Quick Actions ---
      newContent.push({
        id: 'quick-actions',
        priority: 'low',
        type: 'quick_action',
        data: {
          actions: [
            { type: 'scene', entityId: 'scene.allt_slackt' },
            { type: 'script', entityId: 'script.godnatt' },
            // Add more default actions
          ],
        },
      });
  
      // Sort by priority
      const priorityOrder = { critical: 1, high: 2, medium: 3, overview: 3.5, low: 4 };
      newContent.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  
      console.log("Prioritized Content Updated:", newContent);
      setPrioritizedContent(newContent);
  
    }, [loading, activeAreaId, activeAlerts, activeMediaPlayers, areas, entities, entityAreaMap]); // Depend on loaded registry data
  
    // Helper function to get entities for an area
    const getEntitiesInArea = useCallback((areaId: string): HassEntityWithService<any>[] => {
        if (loading || !allHassEntities || Object.keys(entityAreaMap).length === 0) return [];
        // Filter allHassEntities from the store directly using the map
        return Object.values(allHassEntities).filter(entity => entity && entityAreaMap[entity.entity_id as EntityName] === areaId) as HassEntityWithService<any>[];
    }, [loading, allHassEntities, entityAreaMap]);
  
  
    const value: DashboardContextProps = useMemo(() => ({
        loading,
        areas, // Use the memoized/defaulted versions
        devices,
        entities,
        entityAreaMap,
        activeAreaId,
        activeAreaName: activeAreaId && areas[activeAreaId] ? areas[activeAreaId]?.name ?? 'Unknown Area' : null,
        prioritizedContent,
        getEntitiesInArea,
      }),
      [ loading, areas, devices, entities, entityAreaMap, activeAreaId, prioritizedContent, getEntitiesInArea]
    );
  
    return (
      <DashboardContext.Provider value={value}>
        {children}
      </DashboardContext.Provider>
    );
  };
  
  // Custom hook to use the context
  export const useDashboard = (): DashboardContextProps => {
    const context = useContext(DashboardContext);
    if (context === undefined) {
      throw new Error('useDashboard must be used within a DashboardProvider');
    }
    return context;
  };