import { CardBase, MediaPlayerCard, Group } from '@hakit/components';
import { EntityName, FilterByDomain, useEntity } from '@hakit/core';

interface MediaPlayerControlsProps {
  entityId: FilterByDomain<EntityName, "media_player">;
}

const MediaPlayerControls = ({ entityId }: MediaPlayerControlsProps) => {
  const entity = useEntity(entityId);
  
  if (!entity) {
    return null;
  }
  
  return (
    <CardBase>
      <Group title={entity.attributes?.friendly_name || "Media Player"}>
        <MediaPlayerCard entity={entityId} />
      </Group>
    </CardBase>
  );
};

export default MediaPlayerControls;
