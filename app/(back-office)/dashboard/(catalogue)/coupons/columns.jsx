"use client"
import { Checkbox } from "@/components/ui/checkbox"
 
import { Button } from "@/components/ui/button";
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
    accessorKey: "title",
    header: ({ column }) => (<SorttableColumn column={column} title="Title"/>)
  },
  {
    accessorKey: "couponCode",
    header: "Coupon Code",
  },
    {
    accessorKey: "expiryDate",
    header: "Expiry Date",
    cell: ({ row }) => (<DateColumn row={row} accessorKey="expiryDate" /> ),
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
      const coupon =row.original
      return (<ActionColumn row={row} title="Coupon" editEndpoint = {`coupons/update/${coupon.id}`} endpoint= {`coupons/${coupon.id}`} />);
     }
  },
];
