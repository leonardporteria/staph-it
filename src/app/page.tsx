'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { Review } from '@/lib/types';
import FeatureCards from '@/components/feature-cards';
import { Button } from '@/components/ui/button';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

import { Team } from '@/lib/types';

export default function Home() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [teamMembers, setTeamMembers] = useState<Team[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch('http://localhost:5008/api/reviews');
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
        const res = await fetch('http://localhost:5008/api/teams');
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
      <div>
        <h1 className='text-center text-6xl m-5'>StaPH it</h1>

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
