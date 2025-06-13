'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { aboutData } from '@/lib/aboutdata';

export default function Home() {
  const aboutItems = aboutData;

  return (
    <div className=' flex flex-col w-10/12 items-center justify-center'>
      <div>
        <h1 className='text-xl font-bold'>Frequently Asked Questions</h1>
      </div>
      <div className='w-full flex justify-center items-center'>
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
      </div>
    </div>
  );
}
