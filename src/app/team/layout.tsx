import { ReactNode } from 'react';

interface TeamLayoutProps {
  children: ReactNode;
}

export default function AboutLayout({ children }: TeamLayoutProps) {
  return <span>{children}</span>;
}
