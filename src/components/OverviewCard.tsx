import { Row, Group, ButtonCard, CardBase } from '@hakit/components';
import { HassEntityWithService, EntityName, useHass } from '@hakit/core';

const OverviewCard = () => {
  const { useStore } = useHass();
  const allHassEntities = useStore((state) => state.entities);

  const lightsOn = Object.values(allHassEntities).filter((entity) =>
    entity && entity.entity_id.startsWith('light.') && entity.state === 'on'
  ) as HassEntityWithService<any>[];

  const activePlayers = Object.values(allHassEntities).filter((entity) =>
    entity &&
    entity.entity_id.startsWith('media_player.') &&
    entity.attributes &&
    ['playing', 'paused', 'buffering', 'on'].includes(entity.state) &&
    (entity.attributes.media_title ||
      entity.attributes.media_artist ||
      entity.attributes.app_name)
  ) as HassEntityWithService<any>[];

  if (lightsOn.length === 0 && activePlayers.length === 0) {
    return null;
  }

  return (
    <CardBase>
      <Group title="Home Overview">
        {lightsOn.length > 0 && (
          <Group title="Lights On">
            <Row gap="var(--ha-spacing-md)" wrap="wrap">
              {lightsOn.map((light) => (
                <ButtonCard
                  key={light.entity_id}
                  entity={light.entity_id as EntityName}
                  title={light.attributes?.friendly_name || light.entity_id.split('.')[1]}
                  icon="mdi:lightbulb"
                />
              ))}
            </Row>
          </Group>
        )}

        {activePlayers.length > 0 && (
          <Group title="Active Media">
            <Row gap="var(--ha-spacing-md)" wrap="wrap">
              {activePlayers.map((player) => (
                <ButtonCard
                  key={player.entity_id}
                  entity={player.entity_id as EntityName}
                  title={`${player.attributes?.media_title || player.attributes?.app_name || 'Unknown Media'}${player.attributes?.media_artist ? ` - ${player.attributes.media_artist}` : ''}`}
                  icon="mdi:play-circle"
                />
              ))}
            </Row>
          </Group>
        )}
      </Group>
    </CardBase>
  );
};

export default OverviewCard;
