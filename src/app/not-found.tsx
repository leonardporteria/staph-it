import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className=' flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-6xl font-bold mb-4'>404</h1>
        <p className='text-2xl mb-4'>
          Oops! The page youre looking for could not be found
        </p>
        <Link href='/' className='text-lg '>
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
