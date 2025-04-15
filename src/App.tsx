import { HassConnect} from '@hakit/core';
import { CardBase, ThemeProvider } from '@hakit/components';
import { ErrorBoundary } from 'react-error-boundary';
import Dashboard from './Dashboard';
import { DashboardProvider } from './context/DashboardContext';

function App() {
  // Retrieve the Home Assistant URL and token from environment variables
  const hassUrl = import.meta.env.VITE_HA_URL;
  const hassToken = import.meta.env.VITE_HA_TOKEN;

  if (!hassUrl || !hassToken) {
    // Display a message if the environment variables are not set using HAKit component
    return (
      <CardBase>
        Home Assistant URL or Token is not set. Please check your .env file.
      </CardBase>
    );
  }

  return (
    // Establish connection with Home Assistant using the provided URL and token
    <HassConnect hassUrl={hassUrl} hassToken={hassToken}>
      <ThemeProvider>
        <ErrorBoundary fallback={<CardBase>Something went wrong.</CardBase>}>
          {/* Wrap the Dashboard component with the DashboardProvider */}
          <DashboardProvider>
            <Dashboard />
          </DashboardProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </HassConnect>
  );
}

export default App;