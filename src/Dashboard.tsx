import { Column } from '@hakit/components';
import { DashboardProvider } from './context/DashboardContext';
import GlobalInfoBar from './components/GlobalInfoBar';
import AreaOverview from './components/AreaOverview';

const Dashboard = () => {
  return (
    <DashboardProvider>
      <Column gap="var(--ha-spacing-md)">
        <GlobalInfoBar />
        <AreaOverview />
      </Column>
    </DashboardProvider>
  );
};

export default Dashboard;
