import { CardBase, ButtonCard } from '@hakit/components';
import { EntityName, useEntity } from '@hakit/core';

interface AlertBannerProps {
  entityId: EntityName;
}

const AlertBanner = ({ entityId }: AlertBannerProps) => {
  const entity = useEntity(entityId);

  if (!entity || entity.state === 'off') {
    return null;
  }

  return (
    <CardBase>
      <ButtonCard
        entity={entityId}
        title={entity.attributes?.friendly_name || entityId}
        icon="mdi:alert"
        color="var(--warning-color)"
      />
    </CardBase>
  );
};

export default AlertBanner;
