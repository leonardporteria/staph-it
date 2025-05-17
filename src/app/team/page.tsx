'use client';

import { useEffect, useState } from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

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

export default function Home() {
  const [team, setTeam] = useState<Team[]>([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch('http://localhost:5008/api/teams');
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
