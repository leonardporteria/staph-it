'use client';

import Link from 'next/link';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { usePathname } from 'next/navigation';
import { ModeToggle } from '@/components/mode-toggle';
import Image from 'next/image';
import clsx from 'clsx';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/version-archive', label: 'Version Archive' },
    { href: '/team', label: 'Team' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div className='p-4 w-full flex items-center justify-between sticky top-0 z-50 backdrop-blur-sm border-b bg-background/95 supports-[backdrop-filter]:bg-background/60'>
      <Link href='/'>
        <Image
          src='/sandatap-typog.png'
          alt='1to4'
          width={150}
          height={100}
          className='pointer-events-none'
        />
      </Link>

      <div className='flex items-center justify-center gap-8'>
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              'transition hover:underline',
              pathname === href && 'underline underline-offset-4 font-medium'
            )}
          >
            {label}
          </Link>
        ))}
      </div>
      <div className='flex items-center justify-center gap-4'>
        <HoverBorderGradient
          containerClassName='rounded-full'
          as='button'
          className='dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2'
        >
          <Link href='/contact'>Get .apk</Link>
        </HoverBorderGradient>
        <ModeToggle />
      </div>
    </div>
  );
}
