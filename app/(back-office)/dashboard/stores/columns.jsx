"use client"
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
    accessorKey: "businessName",
    header: ({ column }) => (<SorttableColumn column={column} title="BusinessName"/>)
  },
  {
    accessorKey: "code",
    header: "Code",
  },
    {
    accessorKey: "storeType",
    header: "Store Type",
   // cell: ({ row }) => (<DateColumn row={row} accessorKey="storeType" /> ),
  },
  {
    accessorKey: "isActive",
    header: "IsActive",
  },
  {
    accessorKey: "createdAt",
    header: "Data Created",
    cell: ({ row }) => (<DateColumn row={row} accessorKey="createdAt" /> ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const store =row.original
      return (<ActionColumn row={row} title="Store"  endpoint= {`store/${store.id}`} />);
     }
  },
];
