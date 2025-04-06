'use client';
import { ThreeDMarquee } from '@/components/ui/3d-marquee';

export default function Home() {
  const images = [
    '/1to4_Typog.png',
    '/1to4_Typog.png',
    '/1to4.png',
    '/1to4_Typog.png',
    '/1to4_Typog.png',
    '/1to4.png',
    '/1to4_Typog.png',
    '/1to4_Typog.png',
    '/1to4_Typog.png',
    '/1to4.png',
    '/1to4_Typog.png',
    '/1to4_Typog.png',
    '/1to4.png',
    '/1to4_Typog.png',
    '/1to4.png',
    '/1to4_Typog.png',
    '/1to4.png',
    '/1to4_Typog.png',
    '/1to4.png',
    '/1to4.png',
    '/1to4_Typog.png',
    '/1to4.png',
    '/1to4.png',
    '/1to4_Typog.png',
    '/1to4.png',
    '/1to4.png',
    '/1to4.png',
    '/1to4_Typog.png',
    '/1to4.png',
    '/1to4_Typog.png',
    '/1to4.png',
  ];
  return (
    <div className='w-full mb-10 rounded-3xl p-4'>
      <ThreeDMarquee images={images} />
    </div>
  );
}
