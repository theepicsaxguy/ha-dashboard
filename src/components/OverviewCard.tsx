import { useMemo } from 'react';
import { CardBase, ButtonCard } from '@hakit/components';
import { HassEntityWithService, EntityName } from '@hakit/core';
import { motion, AnimatePresence } from 'framer-motion';
import { useDashboard } from '../context/DashboardContext';
import { useHass } from '@hakit/core';

const OverviewCard = () => {
  const { useStore } = useHass();
  const { entityAreaMap, areas } = useDashboard();
  const allHassEntities = useStore((state) => state.entities);

  const lightsOn = useMemo(() => {
    return Object.values(allHassEntities).filter((entity) =>
      entity && entity.entity_id.startsWith('light.') && entity.state === 'on'
    ) as HassEntityWithService<any>[];
  }, [allHassEntities]);

  const activePlayers = useMemo(() => {
    return Object.values(allHassEntities).filter((entity) =>
      entity &&
      entity.entity_id.startsWith('media_player.') &&
      entity.attributes &&
      ['playing', 'paused', 'buffering', 'on'].includes(entity.state) &&
      (entity.attributes.media_title ||
        entity.attributes.media_artist ||
        entity.attributes.app_name)
    ) as HassEntityWithService<any>[];
  }, [allHassEntities]);

  const hasContent = lightsOn.length > 0 || activePlayers.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <CardBase
        style={{
          background: 'var(--ha-surface)',
          borderRadius: 'var(--ha-card-border-radius)',
          padding: 'var(--ha-spacing-md)',
          marginBottom: 'var(--ha-spacing-md)'
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            margin: '0 0 var(--ha-spacing-md) 0',
            color: 'var(--ha-on-surface)',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}
        >
          Home Overview
        </motion.h2>

        <AnimatePresence>
          {!hasContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                textAlign: 'center',
                padding: 'var(--ha-spacing-xl)',
                color: 'var(--ha-on-surface)',
                opacity: 0.7
              }}
            >
              Everything is quiet
            </motion.div>
          )}

          {lightsOn.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              style={{ marginBottom: 'var(--ha-spacing-lg)' }}
            >
              <h3 style={{
                margin: '0 0 var(--ha-spacing-md) 0',
                color: 'var(--ha-on-surface)',
                fontSize: '1.1rem',
                opacity: 0.9
              }}>
                Lights On
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--ha-spacing-md)'
              }}>
                <AnimatePresence>
                  {lightsOn.map((light) => {
                    const areaId = entityAreaMap[light.entity_id as EntityName];
                    const areaName = areaId && areas[areaId] ? areas[areaId].name : null;
                    const title = `${light.attributes?.friendly_name || light.entity_id.split('.')[1]}${areaName ? ` (${areaName})` : ''}`;
                    
                    return (
                      <motion.div
                        key={light.entity_id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ButtonCard
                          entity={light.entity_id as EntityName}
                          icon="mdi:lightbulb"
                          title={title}
                          style={{
                            background: 'var(--ha-surface-elevated)',
                            borderRadius: 'var(--ha-card-border-radius)',
                            padding: 'var(--ha-spacing-md)',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 'var(--ha-spacing-sm)',
                            color: '#ffdb4d'
                          }}
                        />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {activePlayers.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h3 style={{
                margin: '0 0 var(--ha-spacing-md) 0',
                color: 'var(--ha-on-surface)',
                fontSize: '1.1rem',
                opacity: 0.9
              }}>
                Active Media
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'var(--ha-spacing-md)'
              }}>
                <AnimatePresence>
                  {activePlayers.map((player) => {
                    const areaId = entityAreaMap[player.entity_id as EntityName];
                    const areaName = areaId && areas[areaId] ? areas[areaId].name : null;
                    const mediaInfo = [
                      player.attributes?.media_title || player.attributes?.app_name || 'Unknown Media',
                      player.attributes?.media_artist,
                      areaName
                    ].filter(Boolean).join(' • ');
                    
                    return (
                      <motion.div
                        key={player.entity_id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ButtonCard
                          entity={player.entity_id as EntityName}
                          icon="mdi:play-circle"
                          title={mediaInfo}
                          style={{
                            background: 'var(--ha-surface-elevated)',
                            borderRadius: 'var(--ha-card-border-radius)',
                            padding: 'var(--ha-spacing-md)',
                            height: '100%'
                          }}
                        />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardBase>
    </motion.div>
  );
};

export default OverviewCard;
