import { ColumnDef } from '@tanstack/react-table';
import { User } from '@/lib/types';
import { Button } from '@/components/ui/button';

export const columns = (
  onEdit: (user: User) => void,
  onDelete: (id: number) => void
): ColumnDef<User>[] => [
  {
    accessorKey: 'email',
    header: 'Email',
    enableSorting: true,
  },
  {
    accessorKey: 'role',
    header: 'Role',
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
      const user = row.original;
      return (
        <div className='flex gap-2'>
          <Button variant='outline' onClick={() => onEdit(user)}>
            Edit
          </Button>
          <Button variant='destructive' onClick={() => onDelete(user.id)}>
            Delete
          </Button>
        </div>
      );
    },
  },
];
