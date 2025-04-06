import { ReactNode } from 'react';

interface AboutLayoutProps {
  children: ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return <span>{children}</span>;
}
