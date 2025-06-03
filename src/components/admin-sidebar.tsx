'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ModeToggle } from '@/components/mode-toggle';
import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

export default function AdminSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const navLinks = [
    { href: '/admin', label: 'Dashboard' },
    { href: '/admin/about', label: 'About' },
    { href: '/admin/features', label: 'Featrues' },
    { href: '/admin/team', label: 'Team' },
    { href: '/admin/build-notes', label: 'Build notes' },
    { href: '/admin/media-assets', label: 'Media Assets' },
    { href: '/admin/reviews', label: 'Reviews' },
    { href: '/admin/users', label: 'Users' },
  ];

  return (
    <aside
      className={clsx(
        'h-screen bg-background border-r transition-all duration-300 ease-in-out p-4 flex flex-col justify-between sticky top-0 z-40',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* Top section */}
      <div>
        <div className='flex items-center justify-between mb-8'>
          {!collapsed && (
            <Link href='/'>
              <Image
                src='/veerline.png'
                alt='veerline'
                width={120}
                height={50}
                className='pointer-events-none'
              />
            </Link>
          )}
          <button onClick={() => setCollapsed(!collapsed)} className='ml-auto'>
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        <nav className='flex flex-col gap-4'>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                'transition-all text-sm font-medium rounded px-3 py-2',
                pathname === href ? 'bg-muted text-primary' : 'hover:bg-muted',
                collapsed && 'text-center px-2 py-2'
              )}
            >
              {collapsed ? label.charAt(0) : label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom section */}
      <div className='flex flex-col gap-4'>
        <Button>
          <Link
            href='/contact'
            className={clsx(
              'text-sm font-medium rounded bg-primary text-center',
              collapsed && 'text-xs'
            )}
          >
            {collapsed ? '<-' : 'Log Out'}
          </Link>
        </Button>
        <ModeToggle />
      </div>
    </aside>
  );
}
