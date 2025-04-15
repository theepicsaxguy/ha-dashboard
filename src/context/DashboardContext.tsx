import { createContext, useContext, ReactNode, useMemo } from 'react';
import { useHass, HassEntityWithService, EntityName, useAreas } from '@hakit/core';

// Define types that match what we expect from HAKit
type Entity = HassEntityWithService<any> & {
  entity_id: string;
  state: string;
  attributes?: any;
};

type Area = {
  area_id: string;
  name: string;
};

type PrioritizedContent = {
  id: string;
  type: 'alert' | 'room' | 'media';
  entityId?: EntityName;
  areaId?: string;
  priority: number;
};

interface DashboardContextType {
  areas: Area[];
  getEntitiesInArea: (areaId: string) => Entity[];
  prioritizedContent: PrioritizedContent[];
  activeAlerts: Entity[];
  activeMediaPlayers: Entity[];
  activeLights: Entity[];
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  // Use proper hooks from HAKit
  const areas = useAreas();
  const { useStore } = useHass();
  const allHassEntities = useStore((state) => state.entities);

  // Get entities for a specific area
  const getEntitiesInArea = (areaId: string): Entity[] => {
    return Object.values(allHassEntities).filter(entity => {
      if (!entity || !entity.attributes) return false;
      // Compare the entity's area_id from attributes
      return entity.attributes.area_id === areaId;
    }) as HassEntityWithService<any>[];
  };
  
  // Get formatted areas from Home Assistant registry
  const formattedAreas = useMemo(() => {
    return Object.entries(areas || {}).map(([id, area]) => ({
      area_id: id,
      name: (area as { name: string }).name,
    }));
  }, [areas]);
  
  // Find active alerts (binary sensors or alarm panels in 'on' state)
  const activeAlerts = useMemo(() => {
    return Object.values(allHassEntities).filter(entity => 
      entity && 
      (entity.entity_id.startsWith('binary_sensor.') || entity.entity_id.startsWith('alarm_control_panel.')) && 
      entity.state === 'on'
    ) as HassEntityWithService<any>[];
  }, [allHassEntities]);
  
  // Find active media players
  const activeMediaPlayers = useMemo(() => {
    return Object.values(allHassEntities).filter(entity => 
      entity && 
      entity.entity_id.startsWith('media_player.') && 
      ['playing', 'paused', 'buffering', 'on'].includes(entity.state) &&
      (entity.attributes?.media_title || entity.attributes?.media_artist || entity.attributes?.app_name)
    ) as HassEntityWithService<any>[];
  }, [allHassEntities]);
  
  // Find active lights
  const activeLights = useMemo(() => {
    return Object.values(allHassEntities).filter(entity => 
      entity && entity.entity_id.startsWith('light.') && entity.state === 'on'
    ) as HassEntityWithService<any>[];
  }, [allHassEntities]);
  
  // Compute prioritized content for dynamic UI ordering
  const prioritizedContent = useMemo(() => {
    const content: PrioritizedContent[] = [];
    
    // Add alerts with highest priority
    activeAlerts.forEach((alert, index) => {
      content.push({
        id: `alert-${alert.entity_id}`,
        type: 'alert',
        entityId: alert.entity_id as EntityName,
        priority: 100 - index
      });
    });
    
    // Add active media players with medium priority
    activeMediaPlayers.forEach((player, index) => {
      content.push({
        id: `media-${player.entity_id}`,
        type: 'media',
        entityId: player.entity_id as EntityName,
        priority: 70 - index
      });
    });
    
    // Areas with activity get priority based on number of active entities
    formattedAreas.forEach(area => {
      const areaEntities = getEntitiesInArea(area.area_id);
      const activeEntities = areaEntities.filter(entity => 
        entity.state === 'on' || 
        entity.state === 'playing' ||
        entity.state === 'open'
      );
      
      if (activeEntities.length > 0) {
        content.push({
          id: `room-${area.area_id}`,
          type: 'room',
          areaId: area.area_id,
          priority: 50 + activeEntities.length
        });
      }
    });
    
    // Sort by priority (highest first)
    return content.sort((a, b) => b.priority - a.priority);
  }, [activeAlerts, activeMediaPlayers, formattedAreas, allHassEntities]);
  
  const value = useMemo(() => ({
    areas: formattedAreas,
    getEntitiesInArea,
    prioritizedContent,
    activeAlerts,
    activeMediaPlayers,
    activeLights
  }), [formattedAreas, prioritizedContent, activeAlerts, activeMediaPlayers, activeLights]);
  
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
