'use client';

import { useEffect, useState } from 'react';
import { Review } from '@/lib/types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';

export function ReviewForm({
  review,
  open,
  onOpenChange,
  onSubmit,
}: {
  review: Review | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (review: Partial<Review>) => void;
}) {
  const [form, setForm] = useState<Partial<Review>>(review || {});

  useEffect(() => {
    if (open) setForm(review || {});
  }, [review, open]);

  const handleSave = () => {
    onSubmit(form);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{review ? 'Edit' : 'New'} Review</DialogTitle>
          <DialogDescription>Fill in the review details.</DialogDescription>
        </DialogHeader>

        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              Name
            </Label>
            <Input
              id='name'
              value={form.name || ''}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className='col-span-3'
            />
          </div>

          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='content' className='text-right'>
              Content
            </Label>
            <Textarea
              id='content'
              value={form.content || ''}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className='col-span-3'
            />
          </div>

          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='rating' className='text-right'>
              Rating
            </Label>
            <Input
              id='rating'
              type='number'
              min={1}
              max={5}
              value={form.rating || ''}
              onChange={(e) =>
                setForm({ ...form, rating: parseInt(e.target.value) })
              }
              className='col-span-3'
            />
          </div>

          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='approved' className='text-right'>
              Approved
            </Label>
            <Switch
              id='approved'
              checked={form.approved || false}
              onCheckedChange={(checked) =>
                setForm({ ...form, approved: checked })
              }
              className='col-span-3'
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant='outline' onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
