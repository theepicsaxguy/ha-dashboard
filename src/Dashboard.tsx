import { Column, Row } from '@hakit/components';
import { useDashboard } from './context/DashboardContext';
import { useHass } from '@hakit/core';
import GlobalInfoBar from './components/GlobalInfoBar';
import AlertBanner from './components/AlertBanner';
import RoomContextCard from './components/RoomContextCard';
import MediaPlayerControls from './components/MediaPlayerControls';
import OverviewCard from './components/OverviewCard';
import QuickActionsPanel from './components/QuickActionsPanel';
import { EntityName } from '@hakit/core';
import type { Action } from './components/QuickActionsPanel';

const Dashboard = () => {
  const { prioritizedContent, activeAlerts } = useDashboard();
  const { useStore } = useHass();
  const entities = useStore(state => state.entities);
  
  const quickActions: Action[] = Object.entries(entities)
    .filter(([entityId]) => entityId.startsWith('script.'))
    .map(([entityId]) => ({
      type: 'script',
      entityId: entityId as EntityName,
      label: entityId.replace('script.', '').replace(/_/g, ' '),
      icon: 'mdi:script'
    }));

  return (
    <Column gap="md" style={{ padding: 'var(--ha-spacing-md)', minHeight: '100vh' }}>
      <GlobalInfoBar />
      
      {/* Render alerts */}
      {activeAlerts.length > 0 && (
        <Row gap="md" wrap="wrap">
          {activeAlerts.map(alert => (
            <AlertBanner key={alert.entity_id} entityId={alert.entity_id as EntityName} />
          ))}
        </Row>
      )}
      
      {/* Overview Card with lights and media */}
      <OverviewCard />
      
      {/* Quick Actions */}
      <QuickActionsPanel actions={quickActions} />
      
      {/* Dynamic prioritized content */}
      <Column gap="md">
        {prioritizedContent.map(content => {
          if (content.type === 'media' && content.entityId) {
            return (
              <MediaPlayerControls 
                key={content.id} 
                entityId={content.entityId as any} 
              />
            );
          }
          
          if (content.type === 'room' && content.areaId) {
            return (
              <RoomContextCard 
                key={content.id} 
                areaId={content.areaId} 
              />
            );
          }
          
          return null;
        })}
      </Column>
    </Column>
  );
};

export default Dashboard;
