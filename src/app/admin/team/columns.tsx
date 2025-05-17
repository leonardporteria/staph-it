import { ColumnDef } from '@tanstack/react-table';
import { Team } from '@/lib/types';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const columns = (
  onEdit: (member: Team) => void,
  onDelete: (id: number) => void
): ColumnDef<Team>[] => [
  {
    accessorKey: 'name',
    header: 'Name',
    enableSorting: true,
  },
  {
    accessorKey: 'role',
    header: 'Role',
    enableSorting: false,
  },
  {
    accessorKey: 'imageUrl',
    header: 'Image',
    cell: ({ getValue }) => (
      <Image
        src={getValue() as string}
        alt='Team Member'
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
      const member = row.original;
      return (
        <div className='flex gap-2'>
          <Button variant='outline' onClick={() => onEdit(member)}>
            Edit
          </Button>
          <Button variant='destructive' onClick={() => onDelete(member.id)}>
            Delete
          </Button>
        </div>
      );
    },
  },
];
