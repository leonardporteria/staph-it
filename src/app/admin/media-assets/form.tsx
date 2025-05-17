'use client';

import { useEffect, useState } from 'react';
import { MediaAsset } from '@/lib/types';
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

export function MediaAssetForm({
  asset,
  open,
  onOpenChange,
  onSubmit,
}: {
  asset: MediaAsset | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (asset: Partial<MediaAsset>) => void;
}) {
  const [form, setForm] = useState<Partial<MediaAsset>>(asset || {});

  useEffect(() => {
    if (open) {
      setForm(asset || {});
    }
  }, [asset, open]);

  const handleSave = () => {
    onSubmit(form);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>{asset ? 'Edit' : 'New'} Media Asset</DialogTitle>
          <DialogDescription>
            Enter the details of the media asset.
          </DialogDescription>
        </DialogHeader>

        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='url' className='text-right'>
              URL
            </Label>
            <Input
              id='url'
              value={form.url || ''}
              onChange={(e) => setForm({ ...form, url: e.target.value })}
              className='col-span-3'
            />
          </div>

          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='altText' className='text-right'>
              Alt Text
            </Label>
            <Input
              id='altText'
              value={form.altText || ''}
              onChange={(e) => setForm({ ...form, altText: e.target.value })}
              className='col-span-3'
            />
          </div>

          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='uploadedById' className='text-right'>
              Uploaded By (User ID)
            </Label>
            <Input
              id='uploadedById'
              type='number'
              value={form.uploadedById || ''}
              onChange={(e) =>
                setForm({ ...form, uploadedById: Number(e.target.value) })
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
