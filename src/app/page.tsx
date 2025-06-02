'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Facebook, Instagram, Twitter } from 'lucide-react';

import { Review } from '@/lib/types';
import FeatureCards from '@/components/feature-cards';
import { Button } from '@/components/ui/button';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';

import { Team } from '@/lib/types';

export default function Home() {
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
          src='/sandatap-rect.png'
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
            src='/phone-mockup.png'
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

      {/* // ! Feature */}
      <FeatureCards />

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
