import { createContext, useContext, ReactNode, useMemo } from 'react';
import { useAreas } from '@hakit/core';

// Define types that match what we expect from HAKit
type Entity = {
  entity_id: string;
  area_id?: string;
  [key: string]: any;
};

type Area = {
  area_id: string;
  name: string;
};

interface DashboardContextType {
  areas: Area[];
  getEntitiesInArea: (areaId: string) => Entity[];
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  // Use proper hooks from HAKit
  const areas = useAreas();
  
  // Get formatted areas from Home Assistant registry
  const formattedAreas = useMemo(() => {
    return Object.entries(areas || {}).map(([id, area]) => ({
      area_id: id,
      name: (area as { name: string }).name,
    }));
  }, [areas]);
  
  const getEntitiesInArea = (_areaId: string): Entity[] => {
    // Since we don't have a direct useEntities hook, we'll work with what's available
    // This is a simplified implementation that will need to be expanded with actual entities
    const entitiesInArea: Entity[] = [];
    
    // In a real implementation, you would fetch entities for the area
    // For now, we return an empty array which is handled by the UI
    
    return entitiesInArea;
  };
  
  const value = useMemo(() => ({
    areas: formattedAreas,
    getEntitiesInArea,
  }), [formattedAreas]);
  
  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};
