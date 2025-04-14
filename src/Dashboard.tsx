import React from 'react';
// Correct import for CircularProgress
import { ControlSliderCircular } from '@hakit/components';
import { useDashboard, PrioritizedContent } from './context/DashboardContext';

import AlertBanner from './components/AlertBanner';
import RoomContextCard from './components/RoomContextCard';
import MediaPlayerControls from './components/MediaPlayerControls';
import GlobalInfoBar from './components/GlobalInfoBar';
// Correct the import path if QuickActionsPanel.tsx is directly in components/
import QuickActionsPanel from './components/QuickActionsPanel';
import OverviewCard from './components/OverviewCard';


function Dashboard() {
  const { loading, prioritizedContent } = useDashboard();

  if (loading) {
    return (
      // Use the class for styling spinner container
      <div className="loading-container">
        <CircularProgress />
      </div>
    );
  }

  console.log("Rendering Dashboard with prioritized content:", prioritizedContent);

  return (
    <div className="dashboard-container" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '1200px', margin: '0 auto' }}>
        {prioritizedContent.map((contentItem: PrioritizedContent) => {
             switch (contentItem.type) {
                 case 'alert':
                     return <AlertBanner key={contentItem.id} entityId={contentItem.data.entityId} />;
                 case 'room':
                     return <RoomContextCard key={contentItem.id} areaId={contentItem.data.areaId} />;
                 case 'media':
                     // Ensure entityId is passed correctly, might need casting if strict
                     return <MediaPlayerControls key={contentItem.id} entityId={contentItem.data.entityId as any} />;
                 case 'overview':
                      return <OverviewCard key={contentItem.id} />;
                 case 'global_info':
                     return <GlobalInfoBar key={contentItem.id} />;
                 case 'quick_action':
                     // Check data structure for actions
                     return <QuickActionsPanel key={contentItem.id} actions={contentItem.data.actions || []} />;
                 default:
                     console.warn(`Unhandled content type: ${contentItem.type}`);
                     return <div key={contentItem.id}>Unhandled: {contentItem.type}</div>;
             }
        })}
    </div>
  );
}

export default Dashboard;