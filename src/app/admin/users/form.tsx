'use client';

import { useEffect, useState } from 'react';
import { User } from '@/lib/types';
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

export function UserForm({
  user,
  open,
  onOpenChange,
  onSubmit,
}: {
  user: User | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (user: Partial<User>) => void;
}) {
  const [form, setForm] = useState<Partial<User>>(user || {});

  useEffect(() => {
    if (open) setForm(user || {});
  }, [user, open]);

  const handleSave = () => {
    onSubmit(form);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{user ? 'Edit' : 'New'} User</DialogTitle>
          <DialogDescription>
            Manage user account information.
          </DialogDescription>
        </DialogHeader>

        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='email' className='text-right'>
              Email
            </Label>
            <Input
              id='email'
              value={form.email || ''}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className='col-span-3'
            />
          </div>

          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='role' className='text-right'>
              Role
            </Label>
            <Input
              id='role'
              value={form.role || ''}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className='col-span-3'
            />
          </div>

          {!user && (
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='password' className='text-right'>
                Password
              </Label>
              <Input
                id='password'
                type='password'
                onChange={(e) =>
                  setForm({ ...form, passwordHash: e.target.value })
                }
                className='col-span-3'
              />
            </div>
          )}
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
