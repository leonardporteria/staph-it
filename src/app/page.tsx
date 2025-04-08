'use client';

import React from 'react';
import Link from 'next/link';

import FeatureCards from '@/components/feature-cards';

import { Button } from '@/components/ui/button';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

const people = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Software Engineer',
    image: '/1to4.png',
  },
  {
    id: 2,
    name: 'Robert Johnson',
    designation: 'Product Manager',
    image: '/1to4.png',
  },
  {
    id: 3,
    name: 'Jane Smith',
    designation: 'Data Scientist',
    image: '/1to4.png',
  },
  {
    id: 4,
    name: 'Emily Davis',
    designation: 'UX Designer',
    image: '/1to4.png',
  },
  {
    id: 5,
    name: 'Tyler Durden',
    designation: 'Soap Developer',
    image: '/1to4.png',
  },
  {
    id: 6,
    name: 'Dora',
    designation: 'The Explorer',
    image: '/1to4.png',
  },
];

export default function Home() {
  return (
    <div className='w-full mb-10 rounded-3xl p-4'>
      <div className=''>
        <div className='relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4'>
          <HoverBorderGradient
            containerClassName='rounded-full'
            as='button'
            className='dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2'
          >
            <Link href='/contact'>Download Now</Link>
          </HoverBorderGradient>
          <Button asChild variant='link'>
            <Link href='/version-archive'>Get other versions</Link>
          </Button>
        </div>
      </div>

      <FeatureCards />

      <div className='flex flex-col items-center'>
        <h1>Meet the team</h1>
        <div className='flex flex-row items-center justify-center mb-10 w-full'>
          <AnimatedTooltip items={people} />
        </div>
        <Button asChild>
          <Link href='/team'>Meet the Team</Link>
        </Button>
      </div>
    </div>
  );
}
