import { useHass, useEntity, EntityName } from "@hakit/core";
import { ButtonCard, Row } from "@hakit/components";
import React, { ReactElement } from "react";

interface ScriptButtonProps {
  entityId: EntityName;
  title: string;  
  icon: string;
}

const ScriptButton = ({ entityId, title, icon }: ScriptButtonProps): ReactElement | null => {
  const entity = useEntity(entityId);
  
  if (!entity) {
    return null;
  }

  return (
    <ButtonCard
      entity={entityId}
      title={title}
      icon={icon}
    />
  );
};

const ScriptRow = (): ReactElement | null => {
  const { useStore } = useHass();
  const entities = useStore(state => state.entities);
  
  const scriptEntities = Object.entries(entities)
    .filter(([entityId]) => entityId.startsWith('script.'))
    .map(([entityId]) => ({
      entityId: entityId as EntityName,
      title: entityId.replace('script.', '').replace(/_/g, ' '),
      icon: 'mdi:script'
    }));

  if (!scriptEntities.length) {
    return null;
  }

  return (
    <Row gap="var(--ha-spacing)">
      {scriptEntities.map(config => (
        <ScriptButton
          key={config.entityId}
          entityId={config.entityId}
          title={config.title}
          icon={config.icon}
        />
      ))}
    </Row>
  );
};

export default ScriptRow;