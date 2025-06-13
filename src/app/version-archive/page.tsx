'use client';

import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import { versionArchiveData } from '@/lib/versionArchiveData';

export default function Home() {
  return (
    <div className='w-full'>
      <Timeline data={versionArchiveData} />
    </div>
  );
}
