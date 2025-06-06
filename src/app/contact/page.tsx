'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useForm as useFormspree, ValidationError } from '@formspree/react';
import { useState, useEffect, FormEvent } from 'react';

export default function ContactAndReview() {
  const [state, handleSubmit] = useFormspree(
    process.env.NEXT_PUBLIC_FORMSFREE_KEY || ''
  );
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    content: '',
    rating: 5,
    approved: false,
  });

  useEffect(() => {
    if (state.succeeded) {
      setContactSubmitted(true);
    }
  }, [state.succeeded]);

  const onContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  const onReviewSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/reviews`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reviewForm),
      }
    );

    if (response.ok) {
      setReviewSubmitted(true);
      setReviewForm({ name: '', content: '', rating: 5, approved: false });
    }
  };

  return (
    <Tabs defaultValue='contact' className='w-full max-w-3xl mx-auto p-4'>
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='contact'>Contact</TabsTrigger>
        <TabsTrigger value='review'>Leave a Review</TabsTrigger>
      </TabsList>

      {/* Contact Form */}
      <TabsContent value='contact'>
        <div className='grid grid-cols-2 gap-4 p-4'>
          <div>
            <h2 className='text-lg font-bold mb-2'>Contact Us</h2>
            <p>Got any suggestions?</p>
            <p>Is there a bug?</p>
            <p>Want to collaborate?</p>
            <p>Or just want to say hello to us?</p>
          </div>
          <div>
            {contactSubmitted ? (
              <div className='p-4 text-center bg-green-100 text-green-800 rounded-md'>
                Thank you! We&apos;ll get back to you soon.
              </div>
            ) : (
              <form onSubmit={onContactSubmit} className='space-y-4'>
                <div className='grid gap-4 sm:grid-cols-2'>
                  <div className='space-y-2'>
                    <label htmlFor='name'>Name</label>
                    <input
                      id='name'
                      name='name'
                      className='w-full border rounded px-3 py-2 text-sm'
                      placeholder='Your name'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='email'>Email</label>
                    <input
                      id='email'
                      type='email'
                      name='email'
                      className='w-full border rounded px-3 py-2 text-sm'
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
                  <label htmlFor='message'>Message</label>
                  <textarea
                    id='message'
                    name='message'
                    className='w-full min-h-[100px] border rounded px-3 py-2 text-sm'
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
                  disabled={state.submitting}
                  className='w-full'
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </TabsContent>

      {/* Review Form */}
      <TabsContent value='review'>
        <div className='p-4'>
          <h2 className='text-lg font-bold mb-4'>Leave a Review</h2>
          {reviewSubmitted ? (
            <div className='p-4 text-center bg-green-100 text-green-800 rounded-md'>
              Thank you for your review!
            </div>
          ) : (
            <form onSubmit={onReviewSubmit} className='space-y-4 max-w-md'>
              <div className='space-y-2'>
                <label htmlFor='review-name'>Name</label>
                <input
                  id='review-name'
                  name='name'
                  value={reviewForm.name}
                  onChange={(e) =>
                    setReviewForm({ ...reviewForm, name: e.target.value })
                  }
                  className='w-full border rounded px-3 py-2 text-sm'
                  placeholder='Your name'
                  required
                />
              </div>
              <div className='space-y-2'>
                <label htmlFor='review-content'>Review</label>
                <textarea
                  id='review-content'
                  name='content'
                  value={reviewForm.content}
                  onChange={(e) =>
                    setReviewForm({ ...reviewForm, content: e.target.value })
                  }
                  className='w-full min-h-[100px] border rounded px-3 py-2 text-sm'
                  placeholder='What do you think?'
                  required
                />
              </div>
              <div className='space-y-2'>
                <label htmlFor='review-rating'>Rating (1 to 5)</label>
                <input
                  id='review-rating'
                  name='rating'
                  type='number'
                  min='1'
                  max='5'
                  value={reviewForm.rating}
                  onChange={(e) =>
                    setReviewForm({
                      ...reviewForm,
                      rating: Number(e.target.value),
                    })
                  }
                  className='w-full border rounded px-3 py-2 text-sm'
                  required
                />
              </div>
              <Button type='submit' className='w-full'>
                Submit Review
              </Button>
            </form>
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
}
