// Remove duplicate React import if present at top
import React, { useMemo } from 'react';
// Fix imports
import { Card, LightCard, MediaPlayerCard, fallback } from '@hakit/components';
// Remove useEntities import, use context's allHassEntities instead
import { HassEntityWithService } from '@hakit/core';
import { useDashboard } from '../context/DashboardContext';
import { useHass } from '@hakit/core'; // Import useHass to get all entities

// Removed the duplicated QuickActionsPanel definition below

const OverviewCard: React.FC = () => {
    // Get all entities from the main store via useHass
    const { useStore } = useHass();
    const allHassEntities = useStore(state => state.entities);
    // Removed unused getEntitiesInArea, activeMediaPlayers from useDashboard

    const lightsOn = useMemo(() => {
        return Object.values(allHassEntities).filter(entity =>
            entity && entity.entity_id.startsWith('light.') && entity.state === 'on'
        ) as HassEntityWithService<any>[];
    }, [allHassEntities]);

    const activePlayers = useMemo(() => {
         return Object.values(allHassEntities).filter(entity =>
             entity && entity.entity_id.startsWith('media_player.') &&
             entity.attributes && // Check attributes exist
             ['playing', 'paused', 'buffering', 'on'].includes(entity.state) &&
             (entity.attributes.media_title || entity.attributes.media_artist || entity.attributes.app_name)
         ) as HassEntityWithService<any>[];
    }, [allHassEntities]);

    return (
        <Card className="overview-card medium-priority">
            <h2 style={{ padding: '0 1rem', marginTop: '1rem', marginBottom: '0.5rem' }}>
                Home Overview
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '0 1rem 1rem 1rem' }}>
                {/* Lights On Section */}
                {lightsOn.length > 0 && (
                    <div>
                        <h3>Lights On</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {lightsOn.map(light => (
                                <div key={light.entity_id} style={{ flex: '1 1 150px', minWidth: '140px' }}>
                                    <LightCard entity={light.entity_id} />
                                 </div>
                            ))}
                        </div>
                    </div>
                )}

                 {/* Active Media Section */}
                {activePlayers.length > 0 && (
                    <div>
                        <h3>Active Media</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {activePlayers.map(player => (
                                <div key={player.entity_id} style={{ flex: '1 1 250px', minWidth: '240px' }}>
                                    {/* Cast entity prop if MediaPlayerCard needs specific type */}
                                    <MediaPlayerCard entity={player.entity_id as any} />
                                 </div>
                            ))}
                        </div>
                    </div>
                )}

                {lightsOn.length === 0 && activePlayers.length === 0 && (
                    <p>Everything seems quiet.</p>
                )}
            </div>
        </Card>
    );
};

// Keep only one export default
export default OverviewCard;

// --- REMOVE THIS DUPLICATE SECTION ---
// /*
// ================================================
// FILE: src/components/QuickActionsPanel.tsx
// ================================================
// import React from 'react';
// import { Card, Button, SceneCard } from '@hakit/components';
// import { EntityName, callService } from '@hakit/core';
// // ... (rest of the duplicate code) ...
// export default QuickActionsPanel;
// */
// --- END OF REMOVED SECTION ---