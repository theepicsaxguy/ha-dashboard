import React from 'react';
import { ButtonCard, fallback, CardBase } from '@hakit/components';
import { useEntity, CallServiceArgs, EntityName, HassEntityWithService } from '@hakit/core';
import { useDashboard } from '../context/DashboardContext';

interface AlertBannerProps {
  entityId: EntityName;
}

const getAlertMessage = (entity: HassEntityWithService<any>): string => {
    if (!entity || !entity.attributes) return `Unknown Alert (${entity?.entity_id || 'N/A'})`;
    const name = entity.attributes.friendly_name || entity.entity_id;
    const domain = entity.entity_id.split('.')[0]; // Derive domain from entity_id

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
                    return `${name} Alert Active (${entity.state})`; // Include state for context
            }
        case 'alarm_control_panel':
            switch(entity.state) {
                case 'triggered': return `ALARM TRIGGERED! (${name})`;
                case 'arming': return `Alarm Arming (${name})...`;
                case 'pending': return `Alarm Pending (${name})...`;
                default: return `Alarm Status: ${entity.state} (${name})`;
            }
        default:
            return `Alert: ${name} - ${entity.state}`;
    }
};

// Explicitly type the component as React.FC
const AlertBanner: React.FC<AlertBannerProps> = ({ entityId }) => {
    const entity = useEntity(entityId);
    // Removed unused getEntitiesInArea

    if (!entity) {
       console.warn(`Alert entity ${entityId} not found.`);
       return null; // Return null instead of fallback()
    }

    const message = getAlertMessage(entity);
    const isAlarmPanel = entity.entity_id.startsWith('alarm_control_panel.');

    // Simple dismiss for alarm panel example (replace with actual logic)
    const handleDismiss = () => {
        if (isAlarmPanel) {
            const code = prompt("Enter alarm code to disarm:");
            if (code) {
                callServiceArgs({
                    domain: 'alarm_control_panel',
                    service: 'alarm_disarm',
                    target: { entity_id: entityId },
                    service_data: { code }
                }).catch((err: Error) => console.error("Failed to disarm:", err));
            }
        } else {
            console.log(`Dismiss action for ${entityId} - not implemented`);
        }
    }

    return (
        <CardBase className="alert-banner critical" disablePadding> {/* disablePadding if content has its own */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: 'var(--ha-alert-error-color, #f44336)', color: 'white', borderRadius: 'var(--ha-CardBase-border-radius, 4px)'}}>
                <span>🚨 {message}</span>
                {isAlarmPanel && entity.state === 'triggered' && (
                     <ButtonCard onClick={handleDismiss} icon="mdi:shield-off-outline" title="Disarm">
                        Disarm
                     </ButtonCard>
                )}
            </div>
        </CardBase>
    );
};

export default AlertBanner;

function callServiceArgs(arg0: { domain: string; service: string; target: { entity_id: EntityName; }; service_data: { code: string; }; }) {
    throw new Error('Function not implemented.');
}
