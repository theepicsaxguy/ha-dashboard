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
    return Object.entries(entities)
      .filter(([entityId]) => entityId.startsWith('script.'))
      .map(([entityId]) => ({
        type: 'script',
        entityId: entityId as EntityName,
        label: entityId.replace('script.', '').replace(/_/g, ' '),
        icon: 'mdi:script'
      }));
  }, [entities]);

  return (
    <ComponentRegistryProvider>
      <Column gap="md" style={{ padding: 'var(--ha-spacing-md)', minHeight: '100vh' }}>
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
            <Column key={area.area} gap="sm">
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
