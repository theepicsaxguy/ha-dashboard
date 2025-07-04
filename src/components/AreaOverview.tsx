import { Column } from '@hakit/components';
import { useDashboard } from '../context/DashboardContext';
import RoomContextCard from './RoomContextCard';

const AreaOverview = () => {
  const { areas } = useDashboard();

  return (
    <Column gap='md'>
      {areas.map(area => (
        <RoomContextCard key={area.area_id} areaId={area.area_id} />
      ))}
    </Column>
  );
};

export default AreaOverview;
