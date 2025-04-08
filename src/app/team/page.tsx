import { Twitter, Github, Linkedin } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const team = [
  {
    name: 'Kurt Carreon',
    role: 'Project Manager',
    image: '/1to4.png',
  },
  {
    name: 'Joaquin Gonzales',
    role: 'UI/UX Designer',
    image: '/1to4.png',
  },
  {
    name: 'Lovely Villacorte',
    role: 'Quality Assurance',
    image: '/1to4.png',
  },
  {
    name: 'Leonard Porteria',
    role: 'Fullstack Developer',
    image: '/1to4.png',
  },
  {
    name: 'Archer Shane Bigornia',
    role: 'Game Developer | Frontend',
    image: '/1to4.png',
  },
  {
    name: 'Noelle Escultero',
    role: 'Game Developer | Backend',
    image: '/1to4.png',
  },
];

export default function Home() {
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
          <div key={member.name} className='flex flex-col items-center'>
            <Avatar className='size-20'>
              <AvatarImage src={member.image} alt={member.name} />
              <AvatarFallback>{member.name[0]}</AvatarFallback>
            </Avatar>
            <div className='mt-4 text-center'>
              <h3 className='font-medium'>{member.name}</h3>
              <p className='text-sm text-muted-foreground mt-1'>
                {member.role}
              </p>
            </div>
            <div className='mt-3 flex gap-2'>
              <Button size='icon' variant='ghost'>
                <Twitter className='size-4' />
              </Button>
              <Button size='icon' variant='ghost'>
                <Github className='size-4' />
              </Button>
              <Button size='icon' variant='ghost'>
                <Linkedin className='size-4' />
              </Button>
            </div>
          </div>
        ))}
      </div>
      {/* End Grid */}
    </div>
  );
}
