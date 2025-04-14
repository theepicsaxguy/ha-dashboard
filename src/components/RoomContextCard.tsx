import React from 'react';
import { CardBase, ButtonCard } from '@hakit/components';
import { motion, AnimatePresence } from 'framer-motion';
import { useDashboard } from '../context/DashboardContext';
import { EntityName } from '@hakit/core';

interface RoomContextCardProps {
  areaId: string;
}

// Entity type mapping to ButtonCard configurations
const entityTypeConfigs: Record<string, { icon: string; color?: string }> = {
  light: { icon: 'mdi:lightbulb', color: '#ffdb4d' },
  climate: { icon: 'mdi:thermostat' },
  switch: { icon: 'mdi:power-socket' },
  media_player: { icon: 'mdi:play-circle' },
  cover: { icon: 'mdi:window-shutter' },
  fan: { icon: 'mdi:fan' },
};

const RoomContextCard = ({ areaId }: RoomContextCardProps) => {
  const { getEntitiesInArea, areas } = useDashboard();
  const area = areas.find(area => area.area_id === areaId);
  const entitiesInArea = React.useMemo(() => getEntitiesInArea(areaId), [areaId, getEntitiesInArea]);

  if (!area) {
    return null;
  }

  const sortedEntities = React.useMemo(() => {
    const displayDomains = Object.keys(entityTypeConfigs);
    return entitiesInArea
      .filter(
        (entity) =>
          entity && displayDomains.includes(entity.entity_id.split('.')[0])
      )
      .sort((a, b) => {
        if (!a || !b) return 0;
        const domainA = a.entity_id.split('.')[0];
        const domainB = b.entity_id.split('.')[0];
        const domainAIndex = displayDomains.indexOf(domainA);
        const domainBIndex = displayDomains.indexOf(domainB);
        if (domainAIndex !== domainBIndex) return domainAIndex - domainBIndex;
        const nameA = a.attributes?.friendly_name || a.entity_id;
        const nameB = b.attributes?.friendly_name || b.entity_id;
        return nameA.localeCompare(nameB);
      });
  }, [entitiesInArea]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <CardBase
        style={{
          background: 'var(--ha-surface)',
          borderRadius: 'var(--ha-card-border-radius)',
          padding: 'var(--ha-spacing-md)',
          marginBottom: 'var(--ha-spacing-md)'
        }}
      >
        <div style={{ marginBottom: 'var(--ha-spacing-md)' }}>
          <h2 style={{
            margin: 0,
            color: 'var(--ha-on-surface)',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}>
            {area.name}
          </h2>
        </div>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--ha-spacing-md)'
          }}
        >
          <AnimatePresence>
            {sortedEntities.map((entity) => {
              if (!entity) return null;
              const domain = entity.entity_id.split('.')[0] as keyof typeof entityTypeConfigs;
              const config = entityTypeConfigs[domain];
              
              if (!config) return null;

              return (
                <motion.div
                  key={entity.entity_id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <ButtonCard
                    entity={entity.entity_id as EntityName}
                    icon={config.icon}
                    style={{
                      background: 'var(--ha-surface-elevated)',
                      borderRadius: 'var(--ha-card-border-radius)',
                      padding: 'var(--ha-spacing-md)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 'var(--ha-spacing-sm)',
                      color: config.color || 'var(--ha-on-surface)'
                    }}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {sortedEntities.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              textAlign: 'center',
              padding: 'var(--ha-spacing-lg)',
              color: 'var(--ha-on-surface)',
              opacity: 0.7
            }}
          >
            No controllable devices in this room
          </motion.div>
        )}
      </CardBase>
    </motion.div>
  );
};

export default RoomContextCard;
