'use client';

export default function AdminFooter() {
  return (
    <footer className='w-full h-16 bg-background border-t flex items-center justify-center px-6 mt-auto'>
      <p className='text-sm text-muted-foreground'>
        © {new Date().getFullYear()} Wantupor Admin. All rights reserved.
      </p>
    </footer>
  );
}
