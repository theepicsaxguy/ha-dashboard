import React from 'react';
import { CardBase, ButtonCard } from '@hakit/components';
import { EntityName, useService } from '@hakit/core';
import { motion, AnimatePresence } from 'framer-motion';

interface Action {
  type: 'scene' | 'script' | 'light' | 'switch' | 'button';
  entityId: EntityName;
  label?: string;
  icon?: string;
}

interface QuickActionsPanelProps {
  actions: Action[];
}

const QuickActionsPanel: React.FC<QuickActionsPanelProps> = ({ actions }) => {
  const sceneService = useService('scene');
  const scriptService = useService('script');
  const lightService = useService('light');
  const switchService = useService('switch');
  const buttonService = useService('button');
  const [activeAction, setActiveAction] = React.useState<string | null>(null);

  const handleAction = async (action: Action) => {
    const { type, entityId } = action;
    setActiveAction(entityId);
    try {
      switch (type) {
        case 'scene':
          await sceneService.turnOn({ target: { entity_id: entityId } });
          break;
        case 'script':
          await scriptService.turnOn({ target: { entity_id: entityId } });
          break;
        case 'light':
          await lightService.toggle({ target: { entity_id: entityId } });
          break;
        case 'switch':
          await switchService.toggle({ target: { entity_id: entityId } });
          break;
        case 'button':
          await buttonService.press({ target: { entity_id: entityId } });
          break;
        default:
          console.warn(`Unsupported quick action type: ${type}`);
      }
    } catch (err) {
      console.error(`Failed to call ${type} ${entityId}:`, err);
    } finally {
      setActiveAction(null);
    }
  };

  if (!actions.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
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
            fontSize: '1.2rem',
            fontWeight: 'bold'
          }}
        >
          Quick Actions
        </motion.h2>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: 'var(--ha-spacing-md)'
          }}
        >
          <AnimatePresence>
            {actions.map((action) => (
              <motion.div
                key={action.entityId}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <ButtonCard
                  entity={action.entityId}
                  icon={action.icon}
                  title={action.label || action.entityId.split('.')[1]}
                  style={{
                    background: activeAction === action.entityId 
                      ? 'var(--ha-primary)'
                      : 'var(--ha-surface-elevated)',
                    borderRadius: 'var(--ha-card-border-radius)',
                    padding: 'var(--ha-spacing-md)',
                    color: activeAction === action.entityId 
                      ? 'var(--ha-on-primary)'
                      : 'var(--ha-on-surface)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--ha-spacing-sm)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onClick={() => handleAction(action)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </CardBase>
    </motion.div>
  );
};

export default QuickActionsPanel;
