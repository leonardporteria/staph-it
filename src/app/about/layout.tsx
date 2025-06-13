import { ReactNode } from 'react';

interface AboutLayoutProps {
  children: ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <span className='w-full flex flex-col items-center justify-center'>
      {children}
    </span>
  );
}
