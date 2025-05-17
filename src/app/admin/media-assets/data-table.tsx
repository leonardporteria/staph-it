'use client';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { MediaAsset } from '@/lib/types';
import { columns as getColumns } from './columns';
import { MediaAssetForm } from './form';

export default function MediaAssetsTable() {
  const [data, setData] = useState<MediaAsset[]>([]);
  const [editing, setEditing] = useState<MediaAsset | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');

  const fetchData = async () => {
    const res = await axios.get('http://localhost:5008/api/mediaassets');
    setData(res.data);
  };

  const handleCreate = () => {
    setEditing(null);
    setShowForm(true);
  };

  const handleEdit = (asset: MediaAsset) => {
    setEditing(asset);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:5008/api/mediaassets/${id}`);
    fetchData();
  };

  const handleFormSubmit = async (asset: Partial<MediaAsset>) => {
    if (asset.id) {
      await axios.put(
        `http://localhost:5008/api/mediaassets/${asset.id}`,
        asset
      );
    } else {
      await axios.post('http://localhost:5008/api/mediaassets', asset);
    }
    setShowForm(false);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const table = useReactTable({
    data,
    columns: getColumns(handleEdit, handleDelete) as ColumnDef<MediaAsset>[],
    state: { globalFilter: search },
    onGlobalFilterChange: setSearch,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className='space-y-4'>
      <div className='flex justify-between items-center'>
        <Input
          placeholder='Search media assets...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-1/3'
        />
        <Button onClick={handleCreate}>+ New Asset</Button>
      </div>

      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((group) => (
              <TableRow key={group.id}>
                {group.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className='cursor-pointer'
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getIsSorted() === 'asc' && ' 🔼'}
                    {header.column.getIsSorted() === 'desc' && ' 🔽'}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className='flex justify-end gap-2'>
        <Button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>

      <MediaAssetForm
        asset={editing}
        open={showForm}
        onOpenChange={setShowForm}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}
