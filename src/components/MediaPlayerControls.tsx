import { CardBase, MediaPlayerCard } from '@hakit/components';
import { EntityName, useEntity, FilterByDomain } from '@hakit/core';
import { motion } from 'framer-motion';
import { useDashboard } from '../context/DashboardContext';

interface MediaPlayerControlsProps {
  entityId: FilterByDomain<EntityName, 'media_player'>;
}

const MediaPlayerControls = ({ entityId }: MediaPlayerControlsProps) => {
  const entity = useEntity(entityId);
  const { entityAreaMap, areas } = useDashboard();
  const areaId = entityAreaMap[entityId];
  const areaName = areaId && areas[areaId] ? areas[areaId].name : 'Unknown Location';

  if (!entity || !entity.attributes) {
    return null;
  }

  const isPlayingContent =
    entity.attributes.media_title ||
    entity.attributes.media_artist ||
    entity.attributes.app_name;

  if ((entity.state === 'idle' || entity.state === 'off') && !isPlayingContent) {
    return null;
  }

  const mediaInfo = {
    title: entity.attributes.media_title || entity.attributes.app_name || 'Unknown Media',
    artist: entity.attributes.media_artist || '',
    albumArt: entity.attributes.entity_picture,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <CardBase
        style={{
          background: 'var(--ha-surface)',
          borderRadius: 'var(--ha-card-border-radius)',
          overflow: 'hidden',
          marginBottom: 'var(--ha-spacing-md)'
        }}
      >
        <div style={{ 
          padding: 'var(--ha-spacing-md)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--ha-spacing-md)'
          }}>
            {mediaInfo.albumArt && (
              <motion.img
                src={mediaInfo.albumArt}
                alt="Album Art"
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 8,
                  objectFit: 'cover'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
            <div>
              <motion.h3
                style={{
                  margin: 0,
                  color: 'var(--ha-on-surface)',
                  fontSize: '1.1rem',
                  fontWeight: 'bold'
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {mediaInfo.title}
              </motion.h3>
              {mediaInfo.artist && (
                <motion.p
                  style={{
                    margin: '4px 0 0 0',
                    color: 'var(--ha-on-surface)',
                    opacity: 0.7,
                    fontSize: '0.9rem'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 0.7, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {mediaInfo.artist}
                </motion.p>
              )}
              <motion.p
                style={{
                  margin: '4px 0 0 0',
                  color: 'var(--ha-on-surface)',
                  opacity: 0.5,
                  fontSize: '0.8rem'
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 0.5, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                {areaName}
              </motion.p>
            </div>
          </div>
        </div>

        <div style={{ padding: 'var(--ha-spacing-md)' }}>
          <MediaPlayerCard
            entity={entityId}
            style={{
              background: 'transparent',
              padding: 0
            }}
          />
        </div>
      </CardBase>
    </motion.div>
  );
};

export default MediaPlayerControls;
