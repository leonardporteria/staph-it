import { ColumnDef } from '@tanstack/react-table';
import { MediaAsset } from '@/lib/types';
import { Button } from '@/components/ui/button';

export const columns = (
  onEdit: (asset: MediaAsset) => void,
  onDelete: (id: number) => void
): ColumnDef<MediaAsset>[] => [
  {
    accessorKey: 'url',
    header: 'URL',
    cell: ({ getValue }) => (
      <a
        href={getValue() as string}
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-500 underline'
      >
        View
      </a>
    ),
    enableSorting: false,
  },
  {
    accessorKey: 'altText',
    header: 'Alt Text',
    enableSorting: true,
  },
  {
    accessorKey: 'uploadedById',
    header: 'Uploaded By',
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
      const asset = row.original;
      return (
        <div className='flex gap-2'>
          <Button variant='outline' onClick={() => onEdit(asset)}>
            Edit
          </Button>
          <Button variant='destructive' onClick={() => onDelete(asset.id)}>
            Delete
          </Button>
        </div>
      );
    },
  },
];
