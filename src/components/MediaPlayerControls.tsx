import React from 'react';
// Correct Card import
import { Card, MediaPlayerCard, fallback } from '@hakit/components';
import { EntityName, useEntity, FilterByDomain } from '@hakit/core'; // Import FilterByDomain if needed
import { useDashboard } from '../context/DashboardContext';

interface MediaPlayerControlsProps {
  entityId: FilterByDomain<EntityName, 'media_player'>; // Use the specific type if required by MediaPlayerCard
}

const MediaPlayerControls: React.FC<MediaPlayerControlsProps> = ({ entityId }) => {
    const entity = useEntity(entityId);
    const { entityAreaMap, areas } = useDashboard();
    const areaId = entityAreaMap[entityId];
    const areaName = areaId && areas[areaId] ? areas[areaId].name : 'Unknown Location';

    if (!entity || !entity.attributes) {
        // Use fallback without props
        return fallback();
    }

    const isPlayingContent = entity.attributes.media_title || entity.attributes.media_artist || entity.attributes.app_name;

    if ( (entity.state === 'idle' || entity.state === 'off') && !isPlayingContent) {
        return null;
    }

    return (
         // Pass areaName to titleDetail if desired
         <Card className="media-player-card medium-priority" titleDetail={areaName}>
            {/* Pass the correctly typed entityId */}
            <MediaPlayerCard entity={entityId} />
        </Card>
    );
};

export default MediaPlayerControls;