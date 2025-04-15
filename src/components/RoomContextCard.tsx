import { ButtonCard, CardBase, Group, Row } from '@hakit/components';
import { useDashboard } from '../context/DashboardContext';
import { EntityName } from '@hakit/core';

interface RoomContextCardProps {
  areaId: string;
}

const RoomContextCard = ({ areaId }: RoomContextCardProps) => {
  const { getEntitiesInArea, areas } = useDashboard();
  const area = areas.find(area => area.area_id === areaId);
  const entities = getEntitiesInArea(areaId);

  if (!area) return null;

  return (
    <CardBase>
      <Group title={area.name}>
        <Row wrap="wrap" gap="var(--ha-spacing-md)">
          {entities.map((entity) => (
            <ButtonCard
              key={entity.entity_id}
              entity={entity.entity_id as EntityName}
            />
          ))}
          {entities.length === 0 && (
            <CardBase>No controllable devices in this room</CardBase>
          )}
        </Row>
      </Group>
    </CardBase>
  );
};

export default RoomContextCard;
