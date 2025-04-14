// Remove duplicate React import if present
import React from 'react';
// Correct imports
import { Card, Button, SceneCard } from '@hakit/components';
// Correct import for callService
import { EntityName, callService } from '@hakit/core';

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

    const handleAction = (action: Action) => {
         const { type, entityId } = action;
         let serviceDomain: string | null = null;
         let serviceName: string | null = null;
         const serviceData = { entity_id: entityId };

         switch (type) {
            case 'scene':
                serviceDomain = 'scene';
                serviceName = 'turn_on';
                break;
            case 'script':
                serviceDomain = 'script';
                serviceName = 'turn_on'; // Default script service
                break;
            case 'light':
            case 'switch':
                 serviceDomain = type;
                 serviceName = 'toggle';
                 break;
            case 'button':
                 serviceDomain = 'button';
                 serviceName = 'press';
                 break;
            default:
                console.warn(`Unsupported quick action type: ${type}`);
         }

         if (serviceDomain && serviceName) {
             callService(serviceDomain, serviceName, serviceData)
                 .catch((err: any) => console.error(`Failed to call ${type} ${entityId}:`, err)); // Added type
         }
         // Removed special case for script - 'turn_on' should work
    };

    return (
        <Card className="quick-actions-panel low-priority" disableMargin disableRipples disableScale>
             <h3 style={{ padding: '0.5rem 1rem 0 1rem', margin: '0 0 0.5rem 0' }}>Quick Actions</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '0 1rem 1rem 1rem', justifyContent: 'center' }}>
                {actions.map((action) => {
                    // Extract name more reliably
                    const defaultLabel = action.entityId.includes('.') ? action.entityId.split('.')[1].replace(/_/g, ' ') : action.entityId;
                    const label = action.label || defaultLabel;

                    if (action.type === 'scene') {
                        // Ensure SceneCard props are correct
                        return <SceneCard key={action.entityId} entity={action.entityId} hideIcon hideState />;
                    } else {
                        return (
                            <Button
                                key={action.entityId}
                                onClick={() => handleAction(action)}
                                icon={action.icon}
                                entity={action.entityId}
                                title={label}
                                style={{textTransform: 'capitalize'}}
                            >
                                {label}
                            </Button>
                        );
                    }
                })}
            </div>
        </Card>
    );
};

export default QuickActionsPanel; // Ensure this is the only default export