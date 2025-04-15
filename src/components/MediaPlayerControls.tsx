import { CardBase, MediaPlayerCard } from '@hakit/components';
import { EntityName, FilterByDomain } from '@hakit/core';

interface MediaPlayerControlsProps {
  entityId: FilterByDomain<EntityName, "media_player">;
}

const MediaPlayerControls = ({ entityId }: MediaPlayerControlsProps) => {
  return (
    <CardBase>
      <MediaPlayerCard entity={entityId} />
    </CardBase>
  );
};

export default MediaPlayerControls;
