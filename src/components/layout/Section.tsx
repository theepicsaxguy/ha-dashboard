import React from 'react';
import { Group } from '@hakit/components';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <Group title={title}>
    {children}
  </Group>
);

export default Section;