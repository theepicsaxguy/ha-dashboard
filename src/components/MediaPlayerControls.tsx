import { CardBase, MediaPlayerCard, Group } from '@hakit/components';
import { EntityName, useEntity } from '@hakit/core';

interface MediaPlayerControlsProps {
  entityId: EntityName;
}

const MediaPlayerControls = ({ entityId }: MediaPlayerControlsProps) => {
  const entity = useEntity(entityId);
  const domain = entityId.split('.')[0];

  if (!entity || (domain !== 'media_player' && entity.attributes?.device_class !== 'media')) {
    return null;
  }

  return (
    <CardBase>
      <Group title={entity.attributes?.friendly_name || 'Media Player'}>
        <MediaPlayerCard entity={entityId as unknown as any} />
      </Group>
    </CardBase>
  );
};

export default MediaPlayerControls;
