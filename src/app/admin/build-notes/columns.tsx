import { ColumnDef } from '@tanstack/react-table';
import { BuildNote } from '@/lib/types';
import { Button } from '@/components/ui/button';

export const columns = (
  onEdit: (note: BuildNote) => void,
  onDelete: (id: number) => void
): ColumnDef<BuildNote>[] => [
  {
    accessorKey: 'version',
    header: 'Version',
    enableSorting: true,
  },
  {
    accessorKey: 'title',
    header: 'Title',
    enableSorting: true,
  },
  {
    accessorKey: 'releaseDate',
    header: 'Release Date',
    cell: ({ getValue }) => new Date(getValue() as string).toLocaleDateString(),
    enableSorting: true,
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const note = row.original;
      return (
        <div className='flex gap-2'>
          <Button variant='outline' onClick={() => onEdit(note)}>
            Edit
          </Button>
          <Button variant='destructive' onClick={() => onDelete(note.id)}>
            Delete
          </Button>
        </div>
      );
    },
  },
];
