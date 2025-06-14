'use client';

import { Github, Linkedin, Facebook } from 'lucide-react';
import Image from 'next/image';

import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
import { teamData } from '@/lib/teamdata';

export default function Home() {
  const team = teamData;

  return (
    <div className='space-y-10'>
      {/* Floating 3D Cards Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
        {team.map((member) => (
          <CardContainer key={member.id} className='inter-var w-full'>
            <CardBody className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border'>
              <CardItem
                translateZ='50'
                className='text-xl font-bold text-neutral-600 dark:text-white text-center'
              >
                {member.name}
              </CardItem>
              <CardItem
                as='p'
                translateZ='60'
                className='text-neutral-500 text-sm mt-2 dark:text-neutral-300 text-center'
              >
                {member.position}
              </CardItem>
              <CardItem translateZ='100' className='w-full mt-4'>
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={500}
                  height={500}
                  className='h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl'
                />
              </CardItem>
              <div className='flex justify-center items-center gap-4 mt-6'>
                {member.linkedIn && (
                  <CardItem
                    translateZ={20}
                    as='a'
                    href={member.linkedIn}
                    target='_blank'
                    className='text-sm dark:text-white'
                  >
                    <Linkedin className='size-4' />
                  </CardItem>
                )}
                {member.github && (
                  <CardItem
                    translateZ={20}
                    as='a'
                    href={member.github}
                    target='_blank'
                    className='text-sm dark:text-white'
                  >
                    <Github className='size-4' />
                  </CardItem>
                )}
                {member.facebook && (
                  <CardItem
                    translateZ={20}
                    as='a'
                    href={member.facebook}
                    target='_blank'
                    className='text-sm dark:text-white'
                  >
                    <Facebook className='size-4' />
                  </CardItem>
                )}
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
