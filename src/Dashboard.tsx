import { Column } from '@hakit/components';
import { useDashboard } from './context/DashboardContext';
import { useHass } from '@hakit/core';
import GlobalInfoBar from './components/GlobalInfoBar';
import OverviewCard from './components/OverviewCard';
import QuickActionsPanel from './components/QuickActionsPanel';
import { EntityName } from '@hakit/core';
import type { Action } from './components/QuickActionsPanel';
import DynamicEntityComponent from './components/registry/DynamicEntityComponent';
import { useMemo } from 'react';
import ComponentRegistryProvider from './components/registry/ComponentRegistry';

const Dashboard = () => {
  const { prioritizedContent, filteredEntities } = useDashboard();
  const { useStore } = useHass();
  const entities = useStore(state => state.entities);

  const quickActions: Action[] = useMemo(() => {
    const domains = ['scene', 'script', 'light', 'switch', 'button'];
    return Object.entries(entities)
      .filter(([entityId]) => domains.some(domain => entityId.startsWith(`${domain}.`)))
      .map(([entityId]) => ({
        type: entityId.split('.')[0] as Action['type'],
        entityId: entityId as EntityName,
        label: entityId.split('.')[1].replace(/_/g, ' '),
        icon: 'mdi:script',
      }));
  }, [entities]);

  return (
    <ComponentRegistryProvider>
      <Column gap='md' style={{ padding: 'var(--ha-spacing-md)', minHeight: '100vh' }}>
        <GlobalInfoBar />
        <OverviewCard />
        <QuickActionsPanel actions={quickActions} />

        {filteredEntities
          .filter(meta => !meta.area)
          .map(meta => (
            <DynamicEntityComponent key={meta.entity_id} meta={meta} />
          ))}

        {prioritizedContent.map(area =>
          area.area ? (
            <Column key={area.area} gap='sm'>
              {area.entities.map(meta => (
                <DynamicEntityComponent key={meta.entity_id} meta={meta} />
              ))}
            </Column>
          ) : null
        )}
      </Column>
    </ComponentRegistryProvider>
  );
};

export default Dashboard;
