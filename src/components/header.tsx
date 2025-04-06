import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Header() {
  return (
    <div className='p-4 w-full flex items-center justify-between sticky top-0 z-50 backdrop-blur-sm border-b bg-background/95 supports-[backdrop-filter]:bg-background/60'>
      <Link href='/'>
        <Image
          src='/1to4_Typog.png'
          alt='1to4'
          width={150}
          height={100}
          className='pointer-events-none'
        />
      </Link>

      <div className='flex items-center justify-center gap-8'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/features'>Features</Link>
        <Link href='/version-archive'>Version Archive</Link>
        <Link href='/team'>Team</Link>

        <div className='flex items-center justify-center gap-4'>
          <Button asChild>
            <Link href='/contact'>Get in Touch</Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
