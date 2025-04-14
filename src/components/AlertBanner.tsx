import React from 'react';
import { ButtonCard, CardBase } from '@hakit/components';
import { useEntity, useService, EntityName, HassEntityWithService } from '@hakit/core';
import { motion, AnimatePresence } from 'framer-motion';

interface AlertBannerProps {
  entityId: EntityName;
}

const getAlertMessage = (entity: HassEntityWithService<any>): string => {
  if (!entity || !entity.attributes) return `Unknown Alert (${entity?.entity_id || 'N/A'})`;
  const name = entity.attributes.friendly_name || entity.entity_id;
  const domain = entity.entity_id.split('.')[0];

  switch (domain) {
    case 'binary_sensor':
      switch (entity.attributes.device_class) {
        case 'door':
        case 'window':
          return `${name} is Open!`;
        case 'leak':
          return `Leak Detected at ${name}!`;
        case 'smoke':
        case 'gas':
          return `Smoke/Gas Detected at ${name}!`;
        case 'safety':
        case 'problem':
          return `Problem Detected: ${name}`;
        default:
          return `${name} Alert Active (${entity.state})`;
      }
    case 'alarm_control_panel':
      switch (entity.state) {
        case 'triggered': return `ALARM TRIGGERED! (${name})`;
        case 'arming': return `Alarm Arming (${name})...`;
        case 'pending': return `Alarm Pending (${name})...`;
        default: return `Alarm Status: ${entity.state} (${name})`;
      }
    default:
      return `Alert: ${name} - ${entity.state}`;
  }
};

const AlertBanner: React.FC<AlertBannerProps> = ({ entityId }) => {
  const entity = useEntity(entityId);
  const alarmService = useService('alarm_control_panel');
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  if (!entity) {
    console.warn(`Alert entity ${entityId} not found.`);
    return null;
  }

  const handleDismiss = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const domain = entityId.split('.')[0];
      switch (domain) {
        case 'alarm_control_panel':
          await alarmService.alarmDisarm({ target: { entity_id: entityId } });
          break;
        // Add other domain-specific handlers here
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to dismiss alert');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <CardBase
          style={{
            background: 'var(--ha-error)',
            color: 'var(--ha-on-error)',
            borderRadius: 'var(--ha-card-border-radius)',
            marginBottom: 'var(--ha-spacing-md)',
            overflow: 'hidden'
          }}
        >
          <motion.div
            initial={false}
            animate={isLoading ? { opacity: 0.7 } : { opacity: 1 }}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 'var(--ha-spacing-md)',
              gap: 'var(--ha-spacing-md)'
            }}
          >
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold' }}>
                {getAlertMessage(entity)}
              </h3>
              {error && (
                <p style={{ 
                  margin: '0.5rem 0 0 0',
                  fontSize: '0.9rem',
                  opacity: 0.9 
                }}>
                  {error}
                </p>
              )}
            </div>
            
            <ButtonCard
              title="Dismiss"
              onClick={handleDismiss}
              disabled={isLoading}
              style={{
                background: 'rgba(0, 0, 0, 0.2)',
                borderRadius: 'var(--ha-card-border-radius)',
                padding: 'var(--ha-spacing-sm) var(--ha-spacing-md)',
                color: 'var(--ha-on-error)',
                cursor: isLoading ? 'wait' : 'pointer'
              }}
            />
          </motion.div>
        </CardBase>
      </motion.div>
    </AnimatePresence>
  );
};

export default AlertBanner;
