import { CardBase } from '@hakit/components';
import { motion, AnimatePresence } from 'framer-motion';
import { useDashboard, PrioritizedContent } from './context/DashboardContext';
import { EntityName } from '@hakit/core';

import AlertBanner from './components/AlertBanner';
import RoomContextCard from './components/RoomContextCard';
import MediaPlayerControls from './components/MediaPlayerControls';
import GlobalInfoBar from './components/GlobalInfoBar';
import QuickActionsPanel from './components/QuickActionsPanel';
import OverviewCard from './components/OverviewCard';

// Quick actions configuration with proper typing
const QUICK_ACTIONS = [
  { type: 'scene' as const, entityId: 'scene.evening' as EntityName, label: 'Evening', icon: 'mdi:weather-night' },
  { type: 'scene' as const, entityId: 'scene.morning' as EntityName, label: 'Morning', icon: 'mdi:weather-sunny' },
  { type: 'script' as const, entityId: 'script.all_off' as EntityName, label: 'All Off', icon: 'mdi:power' },
  { type: 'script' as const, entityId: 'script.film_mys' as EntityName, label: 'Movie Mode', icon: 'mdi:movie' }
];

function Dashboard() {
  const { loading, prioritizedContent } = useDashboard();

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="loading-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: 'var(--ha-background)',
          color: 'var(--ha-on-background)'
        }}
      >
        <CardBase
          style={{
            background: 'var(--ha-surface)',
            padding: 'var(--ha-spacing-xl)',
            borderRadius: 'var(--ha-card-border-radius)',
            textAlign: 'center'
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Loading...
          </motion.div>
        </CardBase>
      </motion.div>
    );
  }

  return (
    <div
      className="dashboard-container"
      style={{
        background: 'var(--ha-background)',
        minHeight: '100vh',
        padding: 'var(--ha-spacing-md)',
        color: 'var(--ha-on-background)'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--ha-spacing-md)'
      }}>
        {/* Global Info Bar - Always visible */}
        <GlobalInfoBar />

        {/* Dynamic Content */}
        <AnimatePresence mode="sync">
          {prioritizedContent.map((contentItem: PrioritizedContent) => {
            const key = contentItem.id;
            
            switch (contentItem.type) {
              case 'alert':
                return (
                  <motion.div
                    key={key}
                    layout
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <AlertBanner entityId={contentItem.data.entityId} />
                  </motion.div>
                );
              
              case 'room':
                return (
                  <motion.div
                    key={key}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <RoomContextCard areaId={contentItem.data.areaId} />
                  </motion.div>
                );
              
              case 'media':
                return (
                  <motion.div
                    key={key}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MediaPlayerControls entityId={contentItem.data.entityId} />
                  </motion.div>
                );
              
              case 'overview':
                return (
                  <motion.div
                    key={key}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <OverviewCard />
                  </motion.div>
                );
              
              default:
                return null;
            }
          })}
        </AnimatePresence>

        {/* Quick Actions - Always visible at the bottom */}
        <QuickActionsPanel actions={QUICK_ACTIONS} />
      </div>
    </div>
  );
}

export default Dashboard;
