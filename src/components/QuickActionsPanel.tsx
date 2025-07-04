import React from 'react';
import { CardBase, Row, Group, ButtonCard } from '@hakit/components';
import { EntityName } from '@hakit/core';

export interface Action {
  type: 'scene' | 'script' | 'light' | 'switch' | 'button';
  entityId: EntityName;
  label?: string;
  icon?: string;
}

interface QuickActionsPanelProps {
  actions: Action[];
}

const QuickActionsPanel: React.FC<QuickActionsPanelProps> = ({ actions }) => {
  return (
    <CardBase>
      <Group title='Quick Actions'>
        <Row wrap='wrap' gap='md'>
          {actions.map((action, i) => (
            <ButtonCard key={action.entityId + '-' + i} entity={action.entityId} title={action.label} icon={action.icon} />
          ))}
        </Row>
      </Group>
    </CardBase>
  );
};

export default QuickActionsPanel;
