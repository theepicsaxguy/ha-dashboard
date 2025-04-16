// filepath: /src/components/registry/ComponentRegistry.tsx

import React from 'react';
import { useRegisterComponent } from '../../context/DashboardContext';
import { EntityName } from '@hakit/core';
import { ButtonCard, ClimateCard, MediaPlayerCard, WeatherCard } from '@hakit/components';
import AlertBanner from '../AlertBanner';
import MediaPlayerControls from '../MediaPlayerControls';
import RoomContextCard from '../RoomContextCard';
import { EntityMeta } from '../../context/DashboardContext';

/**
 * Registers components with matching rules using the context registry system.
 */
const ComponentRegistryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useRegisterComponent('alertBanner', {
    types: ['binary_sensor', 'alarm'],
    displayWhen: (meta: EntityMeta) => meta.isActive && meta.score >= 40,
    component: AlertBanner,
    props: (meta) => ({ entityId: meta.entity_id as EntityName }),
  });

  useRegisterComponent('mediaPlayerControls', {
    types: ['media'],
    displayWhen: (meta: EntityMeta) => meta.isActive && meta.score >= 30,
    component: MediaPlayerControls,
    props: (meta) => ({ entityId: meta.entity_id as EntityName }),
  });

  useRegisterComponent('roomContextCard', {
    types: ['light', 'climate', 'media', 'binary_sensor', 'sensor', 'switch', 'cover'],
    displayWhen: () => false, // handled at area level
    component: RoomContextCard,
    props: (meta) => ({ areaId: meta.area_id }),
  });

  useRegisterComponent('buttonCard', {
    types: ['light', 'switch', 'cover'],
    displayWhen: (meta: EntityMeta) => meta.score >= 20,
    component: ButtonCard,
    props: (meta) => ({ entity: meta.entity_id as EntityName }),
  });

  useRegisterComponent('climateCard', {
    types: ['climate'],
    displayWhen: (meta: EntityMeta) => meta.score >= 20,
    component: ClimateCard,
    props: (meta) => ({ entity: meta.entity_id as EntityName }),
  });

  useRegisterComponent('mediaPlayerCard', {
    types: ['media'],
    displayWhen: (meta: EntityMeta) => meta.score < 30,
    component: MediaPlayerCard,
    props: (meta) => ({ entity: meta.entity_id as EntityName }),
  });

  useRegisterComponent('weatherCard', {
    types: ['sensor'],
    tags: ['weather'],
    displayWhen: (meta: EntityMeta) => meta.entity_id.includes('weather'),
    component: WeatherCard,
    props: (meta) => ({ entity: meta.entity_id as EntityName }),
  });

  return <>{children}</>;
};

export default ComponentRegistryProvider;
