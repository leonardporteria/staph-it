import { ColumnDef } from '@tanstack/react-table';
import { Review } from '@/lib/types';
import { Button } from '@/components/ui/button';

export const columns = (
  onEdit: (review: Review) => void,
  onDelete: (id: number) => void
): ColumnDef<Review>[] => [
  {
    accessorKey: 'name',
    header: 'Name',
    enableSorting: true,
  },
  {
    accessorKey: 'content',
    header: 'Content',
    enableSorting: true,
  },
  {
    accessorKey: 'rating',
    header: 'Rating',
    enableSorting: true,
  },
  {
    accessorKey: 'approved',
    header: 'Approved',
    cell: ({ getValue }) => (getValue() ? '✅' : '❌'),
    enableSorting: true,
  },
  {
    accessorKey: 'createdAt',
    header: 'Created At',
    cell: ({ getValue }) => new Date(getValue() as string).toLocaleDateString(),
    enableSorting: true,
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const review = row.original;
      return (
        <div className='flex gap-2'>
          <Button variant='outline' onClick={() => onEdit(review)}>
            Edit
          </Button>
          <Button variant='destructive' onClick={() => onDelete(review.id)}>
            Delete
          </Button>
        </div>
      );
    },
  },
];
