"use client"
import Image from 'next/image'
import { MoreHorizontal } from "lucide-react"
import { ArrowUpDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
 
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import SorttableColumn from '../../../../../components/DateTableColumns/SortableColumn'
import ImageColumn from '../../../../../components/DateTableColumns/ImageColumn'
import DateColumn from '../../../../../components/DateTableColumns/DateColumn'
import ActionColumn from '../../../../../components/DateTableColumns/ActionColumn'


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
    accessorKey: "العنوان",
    header: ({ column }) => (<SorttableColumn column={column} title="Title"/>)
  },
  {
    accessorKey: "imageUrl",
    header: "صورة اللافتة الاعلانية",
    cell: ({ row }) => (<ImageColumn row={row} accessorKey="imageUrl" />)
  },
  {
    accessorKey: "link",
    header: "رابط الاعلان",
  },
  {
    accessorKey: "isActive",
    header: "IsActive",
  },
  {
    accessorKey: "store.businessName",
    header: "اسم المتجر",
    cell: ({ row }) => row.original.store?.businessName || "_ "
  },
  {
    accessorKey: "createdAt",
    header: "تاريخ الانشاء",
    cell: ({ row }) => (<DateColumn row={row} accessorKey="createdAt" /> ),
  },
  {
    id: "actions",
    cell: ({ row }) =>  {
      const banner =row.original
      return (<ActionColumn row={row} title="Banner" editEndpoint = {`banners/update/${banner.id}`} endpoint= {`banners/${banner.id}`} />);
     }
  },
];
