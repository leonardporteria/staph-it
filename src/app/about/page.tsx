'use client';
import { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface About {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export default function Home() {
  const [aboutItems, setAboutItems] = useState<About[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await fetch('http://localhost:5008/api/about');
        const data = await res.json();
        setAboutItems(data);
      } catch (error) {
        console.error('Failed to fetch about data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  return (
    <div className='p-2 grid grid-cols-2'>
      <div>
        <h1 className='text-xl font-bold'>Frequently Asked Questions</h1>
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Accordion type='single' collapsible className='w-full'>
            {aboutItems.map((item) => (
              <AccordionItem key={item.id} value={`item-${item.id}`}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>
                  <p className='font-semibold'>{item.subtitle}</p>
                  <p>{item.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </div>
  );
}
