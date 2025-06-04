'use client';

import { useEffect, useState } from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import Image from 'next/image';

interface Team {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  position: string;
  positionShortcut: string;
  linkedIn: string;
  facebook: string;
  github: string;
  createdAt: string;
  updatedAt: string;
}

const content = [
  {
    title: 'Collaborative Editing',
    description:
      'Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.',
    content: (
      <div className='flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white'>
        Collaborative Editing
      </div>
    ),
  },
  {
    title: 'Real time changes',
    description:
      'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
    content: (
      <div className='flex h-full w-full items-center justify-center text-white'>
        <Image
          src='/linear.webp'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </div>
    ),
  },
  {
    title: 'Version control',
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className='flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white'>
        Version control
      </div>
    ),
  },
  {
    title: 'Running out of content',
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className='flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white'>
        Running out of content
      </div>
    ),
  },
];

export default function Home() {
  const [team, setTeam] = useState<Team[]>([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/teams`
        );
        const data = await res.json();
        setTeam(data);
      } catch (error) {
        console.error('Failed to fetch team members:', error);
      }
    };

    fetchTeam();
  }, []);

  return (
    <div className='container py-24 lg:py-32'>
      {/* Title */}
      <div className='max-w-2xl mx-auto text-center mb-10 lg:mb-14'>
        <h2 className='text-3xl font-bold md:text-4xl md:leading-tight'>
          Meet the crew
        </h2>
        <p className='mt-1 text-lg text-muted-foreground'>Creative people</p>
      </div>
      {/* End Title */}

      <div className='w-full py-4'>
        <StickyScroll content={content} />
      </div>
      {/* Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {team.map((member) => (
          <div key={member.id} className='flex flex-col items-center'>
            <Avatar className='size-20'>
              <AvatarImage src={member.imageUrl} alt={member.name} />
              <AvatarFallback>{member.name[0]}</AvatarFallback>
            </Avatar>
            <div className='mt-4 text-center'>
              <h3 className='font-medium'>{member.name}</h3>
              <p className='text-sm text-muted-foreground mt-1'>
                {member.position}
              </p>
            </div>
            <div className='mt-3 flex gap-2'>
              {member.facebook && (
                <Button size='icon' variant='ghost' asChild>
                  <a
                    href={member.facebook}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Twitter className='size-4' />
                  </a>
                </Button>
              )}
              {member.github && (
                <Button size='icon' variant='ghost' asChild>
                  <a
                    href={member.github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Github className='size-4' />
                  </a>
                </Button>
              )}
              {member.linkedIn && (
                <Button size='icon' variant='ghost' asChild>
                  <a
                    href={member.linkedIn}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Linkedin className='size-4' />
                  </a>
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* End Grid */}
    </div>
  );
}
