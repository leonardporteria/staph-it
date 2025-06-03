'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Facebook, Instagram, Twitter } from 'lucide-react';

import { Review } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';

import { Team } from '@/lib/types';

import GameCard from '@/components/game-card';
import { games } from '@/lib/gamedata';

export default function Home() {
  const [topSliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 4, spacing: 15 },
  });

  const [bottomSliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 4, spacing: 15 },
    rtl: true, // reverse direction for bottom row
  });

  // Split games evenly between top and bottom row
  const half = Math.ceil(games.length / 2);
  const topGames = games.slice(0, half);
  const bottomGames = games.slice(half);

  const [reviews, setReviews] = useState<Review[]>([]);
  const [teamMembers, setTeamMembers] = useState<Team[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/reviews`
        );
        const data = await res.json();
        const approvedReviews = data.filter(
          (review: Review) => review.approved
        );
        setReviews(approvedReviews);
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      }
    };

    const fetchTeamMembers = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/teams`
        );
        const data = await res.json();
        setTeamMembers(data);
      } catch (error) {
        console.error('Failed to fetch team members:', error);
      }
    };

    fetchReviews();
    fetchTeamMembers();
  }, []);

  // Format team data for AnimatedTooltip
  const formattedTeam = teamMembers.map((member) => ({
    id: member.id,
    name: member.name,
    designation: member.position,
    image: member.imageUrl,
  }));

  return (
    <div className='w-full mb-10 rounded-3xl p-4'>
      <div className='h-[calc(100vh-128px)] w-full'>
        {/* // ! Hero */}
        <Image
          src='/images/sandatap-rect.png'
          alt='placeholder'
          className='w-full h-full object-cover pointer-events-none'
          width={800}
          height={500}
        />
      </div>

      {/* // ! Socials */}
      <div className='h-[calc(100vh-64px)] w-full flex items-center justify-center px-8'>
        <div className='relative w-full max-w-6xl h-full flex items-center justify-center'>
          {/* Placeholder Image */}
          <Image
            src='/images/phone-mockup.png'
            alt='placeholder'
            fill
            className='object-contain opacity-100 '
          />

          {/* Bottom Left Text */}
          <div className='absolute bottom-10 left-0 max-w-sm'>
            <h1 className='text-4xl font-bold leading-none '>
              CONNECT
              <br />
              WITH
              <br />
              US
            </h1>
            <p className='text-sm  mt-4'>
              Join our community to help us improve the gaming experience!
            </p>
          </div>

          {/* Top Right Text */}
          <div className='absolute top-10 right-0 text-right'>
            <h1 className='text-4xl font-bold leading-none '>
              FOLLOW
              <br />
              US
            </h1>
          </div>

          {/* Social Buttons */}
          <div className='flex flex-col absolute right-0 top-1/2 transform -translate-y-1/2 space-y-2'>
            <Button
              variant='default'
              className='px-4 py-1 text-sm rounded cursor-pointer'
            >
              <Facebook />
            </Button>
            <Button
              variant='default'
              className='px-4 py-1 text-sm rounded cursor-pointer'
            >
              <Twitter />
            </Button>
            <Button
              variant='default'
              className='px-4 py-1 text-sm rounded cursor-pointer'
            >
              <Instagram />
            </Button>
          </div>
        </div>
      </div>

      {/* // ! Hero */}
      <div>
        <h1>GET THE HIGHEST LEVELS</h1>
        <Button>Get it now</Button>
      </div>

      {/* // ! Carousel */}
      <section>
        <h2 className='text-4xl font-extrabold text-center mb-12'>
          Meet the Characters!
        </h2>

        {/* Top Row Carousel */}
        <div className='grid grid-cols-4'>
          {/* Top Slider spanning columns 2 to 4 */}
          <div
            ref={topSliderRef}
            className='keen-slider mb-8 col-span-3 col-start-2'
          >
            {topGames.map((game, i) => (
              <div key={i} className='keen-slider__slide'>
                <GameCard {...game} />
              </div>
            ))}
          </div>

          {/* Bottom Slider spanning columns 1 to 3 */}
          <div
            ref={bottomSliderRef}
            className='keen-slider col-span-3 col-start-1'
          >
            {bottomGames.map((game, i) => (
              <div key={i} className='keen-slider__slide'>
                <GameCard {...game} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ! // ! Video Preview */}
      <div className='relative bg-gradient-to-b from-[#1e0034] to-[#3c006e] text-white flex flex-col items-center justify-center py-20'>
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-8'>
          WATCH TOP <br /> PICK STREAMS
        </h2>

        <div className='relative w-[640px] max-w-full cursor-pointer'>
          <video
            className='w-[640px] max-w-full rounded-md'
            autoPlay
            loop
            muted
            playsInline
          >
            <source src='/videos/veerline.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* // ! Reviews */}
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl font-semibold my-4'>User Reviews</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl mb-10'>
          {reviews.map((review: Review) => (
            <div
              key={review.id}
              className='p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-black'
            >
              <p className='font-bold text-lg'>{review.name}</p>
              <p className='font-bold text-lg'>{review.content}</p>
              <p className='text-yellow-500'>Rating: {review.rating}/5</p>
            </div>
          ))}
          {reviews.length === 0 && (
            <p className='text-gray-500 col-span-full text-center'>
              No approved reviews yet.
            </p>
          )}
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <h1 className='text-2xl font-semibold my-4'>Meet the Team</h1>
        <div className='flex flex-row items-center justify-center mb-10 w-full'>
          <AnimatedTooltip items={formattedTeam} />
        </div>
        <Button asChild>
          <Link href='/team'>Meet the Team</Link>
        </Button>
      </div>
    </div>
  );
}
