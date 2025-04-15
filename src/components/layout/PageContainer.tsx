import React from 'react';
import { Column } from '@hakit/components';

const PageContainer: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Column gap="var(--ha-spacing-md)" style={{ padding: 'var(--ha-spacing-md)', minHeight: '100vh' }}>
    {children}
  </Column>
);

export default PageContainer;