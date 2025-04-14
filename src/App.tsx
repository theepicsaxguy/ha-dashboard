import { HassConnect } from '@hakit/core';
import { AnimatePresence } from 'framer-motion';
import Dashboard from './Dashboard';
import { DashboardProvider } from './context/DashboardContext';
import './styles/theme.css';

function App() {
  const hassUrl = import.meta.env.VITE_HA_URL;
  const hassToken = import.meta.env.VITE_HA_TOKEN;

  if (!hassUrl || !hassToken) {
    return (
      <div style={{
        background: 'var(--ha-background)',
        color: 'var(--ha-on-background)',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--ha-spacing-md)'
      }}>
        <div style={{
          background: 'var(--ha-surface)',
          padding: 'var(--ha-spacing-lg)',
          borderRadius: 'var(--ha-card-border-radius)',
          textAlign: 'center'
        }}>
          Home Assistant URL or Token is not set. Please check your .env file.
        </div>
      </div>
    );
  }

  return (
    <HassConnect hassUrl={hassUrl} hassToken={hassToken}>
      <DashboardProvider>
        <AnimatePresence mode="wait">
          <Dashboard />
        </AnimatePresence>
      </DashboardProvider>
    </HassConnect>
  );
}

export default App;
