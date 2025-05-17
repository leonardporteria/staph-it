import { ColumnDef } from '@tanstack/react-table';
import { About } from '@/lib/types';
import { Button } from '@/components/ui/button';

export const columns = (
  onEdit: (about: About) => void,
  onDelete: (id: number) => void
): ColumnDef<About>[] => [
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'subtitle',
    header: 'Subtitle',
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ getValue }) => {
      const text = getValue() as string;
      return <span>{text.length > 100 ? text.slice(0, 100) + '…' : text}</span>;
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const about = row.original;
      return (
        <div className='flex gap-2'>
          <Button variant='outline' onClick={() => onEdit(about)}>
            Edit
          </Button>
          <Button variant='destructive' onClick={() => onDelete(about.id)}>
            Delete
          </Button>
        </div>
      );
    },
  },
];
