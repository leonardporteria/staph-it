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
import { About } from '@/lib/types';
import { columns as getColumns } from './columns';
import { AboutForm } from './form';

export default function AboutTable() {
  const [data, setData] = useState<About[]>([]);
  const [editing, setEditing] = useState<About | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');

  const fetchData = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/about`
    );
    setData(res.data);
  };

  const handleCreate = () => {
    setEditing(null);
    setShowForm(true);
  };

  const handleEdit = (about: About) => {
    setEditing(about);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    await axios.delete(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/about/${id}`
    );
    fetchData();
  };

  const handleFormSubmit = async (about: Partial<About>) => {
    if (about.id) {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/about/${about.id}`,
        about
      );
    } else {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/about`,
        about
      );
    }
    setShowForm(false);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const table = useReactTable({
    data,
    columns: getColumns(handleEdit, handleDelete) as ColumnDef<About>[],
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
          placeholder='Search about...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-1/3'
        />
        <Button onClick={handleCreate}>+ New About</Button>
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

      <AboutForm
        about={editing}
        open={showForm}
        onOpenChange={setShowForm}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}
