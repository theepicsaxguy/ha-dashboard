import React, { useMemo } from 'react';
// Correct component imports as named exports
import {
    Card as CardBase,
    fallback,
    LightCard,
    ClimateCard,
    SwitchCard,
    MediaPlayerCard,
    CoverCard,
    FabCard // Assuming FanCard was a typo for FabCard or doesn't exist, using Fab as placeholder
    // SensorCard // Still excluding generic sensors
} from '@hakit/components';
// Removed useArea, useEntity - not needed here. Removed EntityName, HassEntityWithService.
import { useAreas } from '@hakit/core'; // Import useAreas to get area name if needed (alternative to context)
import { useDashboard } from '../context/DashboardContext';

interface RoomContextCardProps {
  areaId: string;
}

// Update map, maybe FanCard exists under a different name or use a generic Button/Switch
const entityComponentMap: Record<string, React.FC<any>> = {
  light: LightCard,
  climate: ClimateCard,
  switch: SwitchCard,
  media_player: MediaPlayerCard,
  cover: CoverCard,
  fan: FabCard, // Placeholder - Check Hakit docs for Fan component name or use another component
};

const RoomContextCard: React.FC<RoomContextCardProps> = ({ areaId }) => {
  const { getEntitiesInArea, areas } = useDashboard(); // Get areas from context now
  const area = areas[areaId]; // Get area info directly from context data
  const entitiesInArea = useMemo(() => getEntitiesInArea(areaId), [areaId, getEntitiesInArea]);

  if (!area) {
    // Use fallback without props if it doesn't accept them
    return fallback();
  }

  // Filter and sort entities for display
  const sortedEntities = useMemo(() => {
    const displayDomains = Object.keys(entityComponentMap); // Use keys from our map
    return entitiesInArea
      .filter(entity => entity && displayDomains.includes(entity.entity_id.split('.')[0])) // Check domain from entity_id
      .sort((a, b) => {
        if (!a || !b) return 0; // Add null check
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

  console.log(`Rendering RoomContextCard for ${area.name} (${areaId}) with entities:`, sortedEntities.map(e => e.entity_id));

  return (
    <CardBase className="room-context-card high-priority">
      <h2 style={{ padding: '0 1rem', marginTop: '1rem', marginBottom: '0.5rem' }}>
         {area.name}
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '0 1rem 1rem 1rem' }}>
        {sortedEntities.length === 0 && <p>No controllable devices found in this area.</p>}
        {sortedEntities.map((entity) => {
          if (!entity) return null; // Add null check
          const domain = entity.entity_id.split('.')[0];
          const Component = entityComponentMap[domain];
          if (Component) {
            return (
                <div key={entity.entity_id} style={{ flex: '1 1 150px', minWidth: '140px' }}>
                     {/* Ensure entity prop type matches. May need casting if strict. */}
                     {/* Example cast: entity={entity.entity_id as FilterByDomain<EntityName, 'light'>} */}
                     <Component entity={entity.entity_id} />
                </div>
            );
          }
          return null;
        })}
      </div>
    </CardBase>
  );
};

export default RoomContextCard;