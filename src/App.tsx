import { HassConnect } from '@hakit/core';
import Dashboard from './Dashboard';
import { DashboardProvider } from './context/DashboardContext'; // Import the provider

function App() {
  // Retrieve the Home Assistant URL and token from environment variables
  const hassUrl = import.meta.env.VITE_HA_URL;
  const hassToken = import.meta.env.VITE_HA_TOKEN;

  if (!hassUrl || !hassToken) {
    // Display a message if the environment variables are not set
    return (
      <div>
        Home Assistant URL or Token is not set. Please check your .env file.
      </div>
    );
  }

  return (
    // Establish connection with Home Assistant using the provided URL and token
    <HassConnect hassUrl={hassUrl} hassToken={hassToken}>
      {/* Wrap the Dashboard component with the DashboardProvider */}
      <DashboardProvider>
        <Dashboard />
      </DashboardProvider>
    </HassConnect>
  );
}

export default App;