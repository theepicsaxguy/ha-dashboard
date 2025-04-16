// filepath: /root/ha-dashboard/src/components/registry/DynamicEntityComponent.tsx

import { EntityMeta, useMatchingComponents } from '../../context/DashboardContext';

/**
 * Dynamically renders the correct component for an entity based on registry matching.
 * No logic based on entity types or names — everything is decided by the registry.
 */
const DynamicEntityComponent = ({ meta }: { meta: EntityMeta }) => {
  const matches = useMatchingComponents(meta);

  if (!matches.length) return null;

  // Render the first matching component (or iterate over all if needed)
  const { component: Component, props } = matches[0];
  return <Component {...props} />;
};

export default DynamicEntityComponent;
