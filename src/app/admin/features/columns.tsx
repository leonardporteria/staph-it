import { ColumnDef } from '@tanstack/react-table';
import { Feature } from '@/lib/types';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const columns = (
  onEdit: (feature: Feature) => void,
  onDelete: (id: number) => void
): ColumnDef<Feature>[] => [
  {
    accessorKey: 'title',
    header: 'Title',
    enableSorting: true,
  },
  {
    accessorKey: 'description',
    header: 'Description',
    enableSorting: false,
  },
  {
    accessorKey: 'imageUrl',
    header: 'Image',
    cell: ({ getValue }) => (
      <Image
        src={getValue() as string}
        alt='Feature'
        width={100}
        height={100}
        className='h-12 w-12 object-cover rounded'
      />
    ),
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const feature = row.original;
      return (
        <div className='flex gap-2'>
          <Button variant='outline' onClick={() => onEdit(feature)}>
            Edit
          </Button>
          <Button variant='destructive' onClick={() => onDelete(feature.id)}>
            Delete
          </Button>
        </div>
      );
    },
  },
];
