'use client';
import { ThreeDMarquee } from '@/components/ui/3d-marquee';

export default function Home() {
  const images = [
    'https://assets.aceternity.com/cloudinary_bkp/3d-card.png',
    'https://assets.aceternity.com/animated-modal.png',
    'https://assets.aceternity.com/animated-testimonials.webp',
    'https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png',
    'https://assets.aceternity.com/github-globe.png',
    '/1to4_Typog.png',
    'https://assets.aceternity.com/layout-grid.png',
    'https://assets.aceternity.com/flip-text.png',
    'https://assets.aceternity.com/hero-highlight.png',
    'https://assets.aceternity.com/carousel.webp',
    'https://assets.aceternity.com/placeholders-and-vanish-input.png',
    '/1to4_Typog.png',
    'https://assets.aceternity.com/signup-form.png',
    'https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png',
    'https://assets.aceternity.com/spotlight-new.webp',
    'https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png',
    '/1to4_Typog.png',
    'https://assets.aceternity.com/tabs.png',
    'https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png',
    'https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png',
    'https://assets.aceternity.com/glowing-effect.webp',
    'https://assets.aceternity.com/hover-border-gradient.png',
    'https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png',
    '/1to4_Typog.png',
    'https://assets.aceternity.com/macbook-scroll.png',
    'https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png',
    'https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png',
    'https://assets.aceternity.com/multi-step-loader.png',
    'https://assets.aceternity.com/vortex.png',
    'https://assets.aceternity.com/wobble-card.png',
    'https://assets.aceternity.com/world-map.webp',
  ];
  return (
    <div className='w-full mb-10 rounded-3xl p-4'>
      <ThreeDMarquee images={images} />
    </div>
  );
}
