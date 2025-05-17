'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table';

import { User } from '@/lib/types';
import { columns as getColumns } from './columns';
import { UserForm } from './form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function UsersDataTable() {
  const [data, setData] = useState<User[]>([]);
  const [editing, setEditing] = useState<User | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');

  const fetchData = async () => {
    const res = await axios.get('http://localhost:5008/api/users');
    setData(res.data);
  };

  const handleCreate = () => {
    setEditing(null);
    setShowForm(true);
  };

  const handleEdit = (user: User) => {
    setEditing(user);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:5008/api/users/${id}`);
    fetchData();
  };

  const handleFormSubmit = async (user: Partial<User>) => {
    if (user.id) {
      await axios.put(`http://localhost:5008/api/users/${user.id}`, user);
    } else {
      await axios.post(`http://localhost:5008/api/users`, user);
    }
    setShowForm(false);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const table = useReactTable({
    data,
    columns: getColumns(handleEdit, handleDelete) as ColumnDef<User>[],
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
          placeholder='Search users...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-1/3'
        />
        <Button onClick={handleCreate}>+ New User</Button>
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

      <UserForm
        user={editing}
        open={showForm}
        onOpenChange={setShowForm}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}
