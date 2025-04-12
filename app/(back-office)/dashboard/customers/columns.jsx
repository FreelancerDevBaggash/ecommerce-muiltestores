"use client"
import Image from 'next/image'
import { MoreHorizontal } from "lucide-react"
import { ArrowUpDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
 
import { Button } from "@/components/ui/button";
import SorttableColumn from '../../../../components/DateTableColumns/SortableColumn'
import ImageColumn from '../../../../components/DateTableColumns/ImageColumn'
import DateColumn from '../../../../components/DateTableColumns/DateColumn'
import ActionColumn from '../../../../components/DateTableColumns/ActionColumn'


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
    header: ({ column }) => (<SorttableColumn column={column} title="Name"/>)
  },
  // {
  //   accessorKey: "imageUrl",
  //   header: "Vender Image",
  //   cell: ({ row }) => (<ImageColumn row={row} accessorKey="imageUrl" />)
  // },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "isActive",
    header: "Active",
  },
  {
    accessorKey: "createdAt",
    header: "Data Created",
    cell: ({ row }) => (<DateColumn row={row} accessorKey="createdAt"/> ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const customer =row.original
      return (<ActionColumn row={row} title="Customer" editEndpoint = {`customers/update/${customer.id}`} endpoint= {`customers/${customer.id}`} />);
     }
  },
];
