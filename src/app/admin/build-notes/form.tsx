'use client';

import { useEffect, useState } from 'react';
import { BuildNote } from '@/lib/types';
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

export function BuildNoteForm({
  note,
  open,
  onOpenChange,
  onSubmit,
}: {
  note: BuildNote | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (note: Partial<BuildNote>) => void;
}) {
  const [form, setForm] = useState<Partial<BuildNote>>(note || {});

  useEffect(() => {
    if (open) {
      setForm(note || {});
    }
  }, [note, open]);

  const handleSave = () => {
    onSubmit(form);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>{note ? 'Edit' : 'New'} Build Note</DialogTitle>
          <DialogDescription>
            Fill out the details of the build note below.
          </DialogDescription>
        </DialogHeader>

        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='version' className='text-right'>
              Version
            </Label>
            <Input
              id='version'
              value={form.version || ''}
              onChange={(e) => setForm({ ...form, version: e.target.value })}
              className='col-span-3'
            />
          </div>

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
            <Label htmlFor='content' className='text-right'>
              Content
            </Label>
            <Textarea
              id='content'
              rows={4}
              value={form.content || ''}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className='col-span-3'
            />
          </div>

          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='releaseDate' className='text-right'>
              Release Date
            </Label>
            <Input
              id='releaseDate'
              type='date'
              value={form.releaseDate?.split('T')[0] || ''}
              onChange={(e) =>
                setForm({ ...form, releaseDate: e.target.value + 'T00:00:00' })
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
