'use client';
import { Button } from '@/components/ui/button';

import { useForm, ValidationError } from '@formspree/react';
import { useState, FormEvent, useEffect } from 'react';

export default function Home() {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSFREE_KEY || ''
  );
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (state.succeeded) {
      setSubmitted(true);
    }
  }, [state.succeeded]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleSubmit(event);
  };

  return (
    <div className='p-4 w-full grid grid-cols-2'>
      <div>
        <h1>Contact Us</h1>
        <p>Got any suggestions?</p>
        <p>Is there a bug?</p>
        <p>Want to have a collaboration?</p>
        <p>Or just want to say hello to us!</p>
      </div>

      <div>
        {submitted ? (
          <div className='p-4 text-center bg-green-100 text-green-800 rounded-md'>
            Thank you for submitting! We will get back to you soon.
          </div>
        ) : (
          <form onSubmit={onSubmit} className='space-y-4'>
            <div className='grid gap-4 sm:grid-cols-2'>
              <div className='space-y-2'>
                <label htmlFor='name' className='text-sm font-medium'>
                  Name
                </label>
                <input
                  id='name'
                  name='name'
                  className='flex h-10 w-full rounded-md border px-3 py-2 text-sm'
                  placeholder='Your name'
                />
              </div>
              <div className='space-y-2'>
                <label htmlFor='email' className='text-sm font-medium'>
                  Email
                </label>
                <input
                  id='email'
                  type='email'
                  name='email'
                  className='flex h-10 w-full rounded-md border px-3 py-2 text-sm'
                  placeholder='Your email'
                />
                <ValidationError
                  prefix='Email'
                  field='email'
                  errors={state.errors}
                />
              </div>
            </div>
            <div className='space-y-2'>
              <label htmlFor='message' className='text-sm font-medium'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                className='flex min-h-[120px] w-full rounded-md border px-3 py-2 text-sm'
                placeholder='Your message'
              />
              <ValidationError
                prefix='Message'
                field='message'
                errors={state.errors}
              />
            </div>
            <Button
              type='submit'
              className='w-full'
              disabled={state.submitting}
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
