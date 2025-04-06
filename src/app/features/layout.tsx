import { ReactNode } from 'react';

interface FeatureLayoutProps {
  children: ReactNode;
}

export default function AboutLayout({ children }: FeatureLayoutProps) {
  return <span>{children}</span>;
}
