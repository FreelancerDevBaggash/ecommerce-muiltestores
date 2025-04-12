"use client";
import Image from 'next/image';
import { MoreHorizontal } from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import SorttableColumn from '../../../../components/DateTableColumns/SortableColumn';
import ImageColumn from '../../../../components/DateTableColumns/ImageColumn';
import DateColumn from '../../../../components/DateTableColumns/DateColumn';
import ActionColumn from '../../../../components/DateTableColumns/ActionColumn';

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (<SorttableColumn column={column} title="Name" />),
  },
  {
    accessorKey: "logoUrl",
    header: "Logo Image",
    cell: ({ row }) => (<ImageColumn row={row} accessorKey="logoUrl" />),
  },
  {
    accessorKey: "apiUrl",
    header: "API URL",
    cell: ({ row }) => row.getValue("apiUrl"),
  },
  {
    accessorKey: "apiKey",
    header: "API Key",
    cell: ({ row }) => row.getValue("apiKey"),
  },
  {
    accessorKey: "apiSecret",
    header: "API Secret",
    cell: ({ row }) => row.getValue("apiSecret"),
  },
  {
    accessorKey: "isActive",
    header: "Active",
    cell: ({ row }) => (row.getValue("isActive") ? "Active" : "Inactive"),
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => (<DateColumn row={row} accessorKey="createdAt" />),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const deliveringProviders = row.original;
      return (
        <ActionColumn
          row={row}
          title="Delivering Provider"
          editEndpoint={`deliveringProviders/update/${deliveringProviders.id}`}
          endpoint={`deliveringProviders/${deliveringProviders.id}`}
        />
      );
    },
  },
];
