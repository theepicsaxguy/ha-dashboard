import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import { useHass, HassEntityWithService, useAreas } from '@hakit/core';

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

// New EntityMeta structure for dynamic rendering
export type EntityType = 'light' | 'climate' | 'media' | 'binary_sensor' | 'sensor' | 'switch' | 'cover' | 'alarm' | 'script' | 'other';

export type EntityMeta = {
  entity_id: string;
  type: EntityType;
  area: string | null;
  area_id: string | null;
  tags: string[];
  isActive: boolean;
  score: number;
  reasons: string[];
};

// Component registry type for dynamic rendering
import type { ComponentType } from 'react';

type ComponentRegistryEntry = {
  types: EntityType[];
  tags?: string[];
  displayWhen: (meta: EntityMeta) => boolean;
  component: ComponentType<any>; // Updated to accept React components
  props?: (meta: EntityMeta) => Record<string, any>;
};

interface DashboardContextType {
  areas: Area[];
  getEntitiesInArea: (areaId: string) => Entity[];
  entityMetadata: EntityMeta[];
  filteredEntities: EntityMeta[];
  prioritizedContent: { area: string | null; entities: EntityMeta[] }[];
  componentRegistry: Record<string, ComponentRegistryEntry>;
  registerComponent: (id: string, config: ComponentRegistryEntry) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  // Use proper hooks from HAKit
  const areas = useAreas();
  const { useStore } = useHass();
  const allHassEntities = useStore(state => state.entities);

  // Initialize component registry with local state
  const [componentRegistry, setComponentRegistry] = React.useState<Record<string, ComponentRegistryEntry>>({});

  // Get formatted areas from Home Assistant registry
  const formattedAreas = useMemo(() => {
    return Object.entries(areas || {}).map(([id, area]) => ({
      area_id: id,
      name: (area as { name: string }).name,
    }));
  }, [areas]);

  // Cache entities by area
  const entitiesByArea = useMemo(() => {
    const map: Record<string, Entity[]> = {};
    Object.values(allHassEntities).forEach(entity => {
      if (!entity || !entity.attributes?.area_id) return;
      const area = entity.attributes.area_id;
      if (!map[area]) {
        map[area] = [];
      }
      map[area].push(entity as Entity);
    });
    return map;
  }, [allHassEntities]);

  const getEntitiesInArea = (areaId: string): Entity[] => {
    return entitiesByArea[areaId] || [];
  };

  // Helper function to determine entity type
  const getEntityType = (entityId: string): EntityType => {
    const domain = entityId.split('.')[0];

    switch (domain) {
      case 'light':
        return 'light';
      case 'climate':
        return 'climate';
      case 'media_player':
        return 'media';
      case 'binary_sensor':
        return 'binary_sensor';
      case 'sensor':
        return 'sensor';
      case 'switch':
        return 'switch';
      case 'cover':
        return 'cover';
      case 'alarm_control_panel':
        return 'alarm';
      case 'script':
        return 'script';
      default:
        return 'other';
    }
  };

  // Helper function to determine if an entity is active
  const isEntityActive = (entity: Entity): boolean => {
    if (!entity) return false;

    const { entity_id, state } = entity;
    const domain = entity_id.split('.')[0];

    switch (domain) {
      case 'light':
      case 'switch':
      case 'binary_sensor':
      case 'cover':
        return state === 'on' || state === 'open';
      case 'media_player':
        return ['playing', 'paused', 'buffering', 'on'].includes(state);
      case 'climate':
        return state !== 'off' && state !== 'unavailable';
      default:
        return state === 'on' || state === 'playing' || state === 'open';
    }
  };

  // Helper function to get entity tags
  const getEntityTags = (entity: Entity): string[] => {
    const tags: string[] = [];
    const { entity_id, attributes } = entity;
    const domain = entity_id.split('.')[0];

    tags.push(domain);

    if (attributes?.device_class) {
      tags.push(attributes.device_class);
    }

    // Add tags for specific conditions
    if (domain === 'binary_sensor' && entity.state === 'on') {
      if (attributes?.device_class === 'motion') tags.push('motion');
      if (attributes?.device_class === 'door') tags.push('door');
      if (attributes?.device_class === 'window') tags.push('window');
    }

    return tags;
  };

  // Generate entity metadata
  const entityMetadata = useMemo(() => {
    const metadata: EntityMeta[] = [];
    const now = new Date();
    const currentHour = now.getHours();

    // Process each entity
    Object.values(allHassEntities).forEach(entity => {
      if (!entity || !entity.attributes || !entity.attributes.area_id) return;

      const { entity_id, state, attributes } = entity;
      const domain = entity_id.split('.')[0];
      const type = getEntityType(entity_id);
      const isActive = isEntityActive(entity);
      const tags = getEntityTags(entity);
      const area = formattedAreas.find(a => a.area_id === attributes.area_id)?.name || null;

      // Calculate base score
      let score = 0;
      const reasons: string[] = [];

      // Core scoring logic
      if (isActive) {
        score += 30;
        reasons.push('Entity is active');
      }

      // Entity type specific scoring
      if (domain === 'binary_sensor' && state === 'on') {
        score += 40;
        reasons.push('Active binary sensor');

        if (attributes.device_class === 'motion') {
          score += 20;
          reasons.push('Motion detected');
        }
      }

      if (domain === 'media_player' && ['playing', 'paused'].includes(state)) {
        score += 35;
        reasons.push('Media is playing or paused');
      }

      if (domain === 'climate' && state !== 'off') {
        score += 25;
        reasons.push('Climate control is active');
      }

      // Time-based scoring
      if (domain === 'light' && isActive) {
        const isDaytime = currentHour >= 7 && currentHour < 19;
        if (!isDaytime) {
          score += 15;
          reasons.push('Light is on during evening/night hours');
        }
      }

      // Add to metadata collection
      metadata.push({
        entity_id,
        type,
        area,
        area_id: attributes.area_id,
        tags,
        isActive,
        score,
        reasons,
      });
    });

    return metadata;
  }, [allHassEntities, formattedAreas]);

  // Filter entities by minimum score
  const filteredEntities = useMemo(() => {
    return entityMetadata.filter(meta => meta.score > 0).sort((a, b) => b.score - a.score);
  }, [entityMetadata]);

  // Group by area and sort for prioritized content
  const prioritizedContent = useMemo(() => {
    const areaGroups: Record<string, EntityMeta[]> = {};

    // Group by area
    filteredEntities.forEach(entity => {
      const areaKey = entity.area_id || 'noArea';
      if (!areaGroups[areaKey]) {
        areaGroups[areaKey] = [];
      }
      areaGroups[areaKey].push(entity);
    });

    // Calculate area scores (sum of entity scores)
    const areaScores = Object.entries(areaGroups).map(([areaKey, entities]) => {
      const areaScore = entities.reduce((sum, entity) => sum + entity.score, 0);
      const areaName = entities[0].area || null;

      return {
        areaKey,
        areaName,
        score: areaScore,
        entities,
      };
    });

    // Sort areas by score
    return areaScores
      .sort((a, b) => b.score - a.score)
      .map(area => ({
        area: area.areaName,
        entities: area.entities.sort((a, b) => b.score - a.score),
      }));
  }, [filteredEntities]);

  // Register a new component in the registry
  const registerComponent = (id: string, config: ComponentRegistryEntry) => {
    setComponentRegistry(prev => ({
      ...prev,
      [id]: config,
    }));
  };

  // Memoize the context value
  const value = useMemo(
    () => ({
      areas: formattedAreas,
      getEntitiesInArea,
      entityMetadata,
      filteredEntities,
      prioritizedContent,
      componentRegistry,
      registerComponent,
    }),
    [formattedAreas, entityMetadata, filteredEntities, prioritizedContent, componentRegistry]
  );

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

// Helper hooks for component registration and selection
export const useRegisterComponent = (id: string, config: ComponentRegistryEntry) => {
  const { registerComponent } = useDashboard();

  React.useEffect(() => {
    registerComponent(id, config);
  }, [id, config, registerComponent]);
};

export const useMatchingComponents = (meta: EntityMeta) => {
  const { componentRegistry } = useDashboard();

  return useMemo(() => {
    return Object.entries(componentRegistry)
      .filter(([_, config]) => {
        // Check if component supports this entity type
        if (!config.types.includes(meta.type)) return false;

        // Check if tags match (if specified)
        if (config.tags && config.tags.length > 0) {
          if (!config.tags.some(tag => meta.tags.includes(tag))) {
            return false;
          }
        }

        // Call the displayWhen function
        return config.displayWhen(meta);
      })
      .map(([id, config]) => ({
        id,
        component: config.component,
        props: config.props ? config.props(meta) : { entityId: meta.entity_id },
      }));
  }, [componentRegistry, meta]);
};
