import { ReactNode } from 'react';

interface ContactLayoutProps {
  children: ReactNode;
}

export default function AboutLayout({ children }: ContactLayoutProps) {
  return <span>{children}</span>;
}
