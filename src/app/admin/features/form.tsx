'use client';

import { useEffect, useState } from 'react';
import { Feature } from '@/lib/types';
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

export function FeatureForm({
  feature,
  open,
  onOpenChange,
  onSubmit,
}: {
  feature: Feature | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (feature: Partial<Feature>) => void;
}) {
  const [form, setForm] = useState<Partial<Feature>>(feature || {});

  useEffect(() => {
    if (open) {
      setForm(feature || {});
    }
  }, [feature, open]);

  const handleSave = () => {
    onSubmit(form);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>{feature ? 'Edit' : 'New'} Feature</DialogTitle>
          <DialogDescription>Fill out the feature details.</DialogDescription>
        </DialogHeader>

        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='title' className='text-right'>
              Title
            </Label>
            <Input
              id='title'
              value={form.title || ''}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className='col-span-3'
            />
          </div>

          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='description' className='text-right'>
              Description
            </Label>
            <Textarea
              id='description'
              rows={3}
              value={form.description || ''}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className='col-span-3'
            />
          </div>

          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='imageUrl' className='text-right'>
              Image URL
            </Label>
            <Input
              id='imageUrl'
              value={form.imageUrl || ''}
              onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
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
