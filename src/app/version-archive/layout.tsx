import { ReactNode } from 'react';

interface VersionArchiveLayoutProps {
  children: ReactNode;
}

export default function AboutLayout({ children }: VersionArchiveLayoutProps) {
  return <span>{children}</span>;
}
