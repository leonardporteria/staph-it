'use client';

import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const sections = [
  {
    title: 'Product',
    links: [{ name: 'Sandatap', href: '/' }],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Team', href: '/team' },
    ],
  },
  {
    title: 'Resources',
    links: [{ name: 'Sandatap Archive', href: '/version-archive' }],
  },
];

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
}
const Footer = ({
  logo = {
    url: 'https://ui.shadcn.com/',
    src: '/images/veerline.png',
    alt: 'logo',
    title: 'veerline',
  },
}: FooterProps) => {
  return (
    <section className='p-4 border-t'>
      <div className='container'>
        <footer>
          <div className='flex  items-start justify-between gap-10 text-center '>
            <div className='flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 '>
              {/* Logo */}
              <div className='flex items-center gap-2 lg:justify-start'>
                <Link href='https://ui.shadcn.com/' target='_blank'>
                  <Image src={logo.src} alt={logo.alt} width={50} height={50} />
                </Link>
                <h2 className='text-xl font-semibold'>{logo.title}</h2>
              </div>
              <p className='text-sm text-muted-foreground'>Game Developers</p>
              <ul className='flex items-center space-x-6 text-muted-foreground'>
                <li className='font-medium hover:text-primary'>
                  <Link
                    href='https://www.instagram.com/sandatap_/'
                    target='_blank'
                  >
                    <FaInstagram className='size-6' />
                  </Link>
                </li>
                <li className='font-medium hover:text-primary'>
                  <Link
                    href='https://www.facebook.com/people/Sandatap/61576853789578/'
                    target='_blank'
                  >
                    <FaFacebook className='size-6' />
                  </Link>
                </li>
                <li className='font-medium hover:text-primary'>
                  <Link href='https://x.com/Sandatap_' target='_blank'>
                    <FaTwitter className='size-6' />
                  </Link>
                </li>
                <li className='font-medium hover:text-primary'>
                  <Link
                    href='mailto:veerline.sandatap@gmail.com'
                    target='_blank'
                  >
                    <FaEnvelope className='size-6' />
                  </Link>
                </li>
              </ul>
            </div>
            <div className='grid grid-cols-3 gap-6 lg:gap-20'>
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className='mb-6 font-bold'>{section.title}</h3>
                  <ul className='space-y-4 text-sm text-muted-foreground'>
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className='font-medium hover:text-primary'
                      >
                        <Link href={link.href}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className='mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left'>
            <p>© 2025 Veerline. All rights reserved.</p>
            <ul className='flex justify-center gap-4 lg:justify-start'>
              <li className='hover:text-primary'>
                <Link href='#' target='_blank'>
                  {' '}
                  Terms and Conditions
                </Link>
              </li>
              <li className='hover:text-primary'>
                <Link href='#' target='_blank'>
                  {' '}
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
