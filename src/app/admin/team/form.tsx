'use client';

import { useEffect, useState } from 'react';
import { Team } from '@/lib/types';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
export function TeamForm({
  member,
  open,
  onOpenChange,
  onSubmit,
}: {
  member: Team | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (member: Partial<Team>) => void;
}) {
  const [form, setForm] = useState<Partial<Team>>(member || {});
  useEffect(() => {
    if (open) setForm(member || {});
  }, [member, open]);

  const handleSave = () => {
    onSubmit(form);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{member ? 'Edit' : 'New'} Team Member</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <InputWithLabel
            label='Name'
            value={form.name}
            onChange={(val) => setForm({ ...form, name: val })}
          />
          <InputWithLabel
            label='Description'
            value={form.description}
            onChange={(val) => setForm({ ...form, description: val })}
          />
          <InputWithLabel
            label='Position'
            value={form.position}
            onChange={(val) => setForm({ ...form, position: val })}
          />
          <InputWithLabel
            label='Shortcut'
            value={form.positionShortcut}
            onChange={(val) => setForm({ ...form, positionShortcut: val })}
          />
          <InputWithLabel
            label='LinkedIn'
            value={form.linkedIn}
            onChange={(val) => setForm({ ...form, linkedIn: val })}
          />
          <InputWithLabel
            label='Facebook'
            value={form.facebook}
            onChange={(val) => setForm({ ...form, facebook: val })}
          />
          <InputWithLabel
            label='Github'
            value={form.github}
            onChange={(val) => setForm({ ...form, github: val })}
          />
          <InputWithLabel
            label='Image URL'
            value={form.imageUrl}
            onChange={(val) => setForm({ ...form, imageUrl: val })}
          />
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

// Helper component
const InputWithLabel = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value?: string;
  onChange: (val: string) => void;
}) => (
  <div className='grid grid-cols-4 items-center gap-4'>
    <Label className='text-right'>{label}</Label>
    <Input
      className='col-span-3'
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);
