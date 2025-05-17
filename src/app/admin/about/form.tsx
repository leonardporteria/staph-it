'use client';

import { useEffect, useState } from 'react';
import { About } from '@/lib/types';
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

export function AboutForm({
  about,
  open,
  onOpenChange,
  onSubmit,
}: {
  about: About | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (about: Partial<About>) => void;
}) {
  const [form, setForm] = useState<Partial<About>>(about || {});

  useEffect(() => {
    if (open) {
      setForm(about || {});
    }
  }, [about, open]);

  const handleSave = () => {
    onSubmit(form);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>{about ? 'Edit' : 'New'} About Section</DialogTitle>
          <DialogDescription>
            Fill out the About section details.
          </DialogDescription>
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
            <Label htmlFor='subtitle' className='text-right'>
              Subtitle
            </Label>
            <Input
              id='subtitle'
              value={form.subtitle || ''}
              onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
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
