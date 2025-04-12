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
    accessorKey: "imageUrl",
    header: "Category Image",
    cell: ({ row }) => (<ImageColumn row={row} accessorKey="imageUrl" />)
  },
  {
    accessorKey: "title",
    header: ({ column }) => (<SorttableColumn column={column} title="Title"/>)
  },

  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
        const description = row.getValue("description")

        return (
            <div className='line-clamp-1'>
             {description}
            </div>
        )
      },
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
      const category =row.original
      return (<ActionColumn row={row} title="Category"
      editEndpoint = {`categories/update/${category.id}`}
      endpoint= {`categories/${category.id}`} />);
     }
  },
];


// "use client"

// import Image from 'next/image'
// import { Checkbox } from "@/components/ui/checkbox"
// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

// import { MoreHorizontal } from "lucide-react"
// import { ArrowUpDown } from "lucide-react"

// import SorttableColumn from '../../../../../components/DateTableColumns/SortableColumn'
// import ImageColumn from '../../../../../components/DateTableColumns/ImageColumn'
// import DateColumn from '../../../../../components/DateTableColumns/DateColumn'
// import ActionColumn from '../../../../../components/DateTableColumns/ActionColumn'

// export const columns = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         checked={
//           table.getIsAllPageRowsSelected() ||
//           (table.getIsSomePageRowsSelected() && "indeterminate")
//         }
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },

//   {
//     accessorKey: "imageUrl",
//     header: "Category Image",
//     cell: ({ row }) => <ImageColumn row={row} accessorKey="imageUrl" />,
//   },

//   {
//     accessorKey: "title",
//     header: ({ column }) => <SorttableColumn column={column} title="Title" />,
//   },

//   {
//     accessorKey: "description",
//     header: "Description",
//     cell: ({ row }) => {
//       const description = row.getValue("description")
//       return <div className="line-clamp-1 text-sm text-gray-600">{description}</div>
//     },
//   },

//   {
//     accessorKey: "productCode",
//     header: "Product Code",
//     cell: ({ row }) => (
//       <div className="text-blue-600 font-semibold">{row.getValue("productCode")}</div>
//     ),
//   },

//   {
//     accessorKey: "quantity",
//     header: "Quantity",
//     cell: ({ row }) => (
//       <div className="font-medium text-center">{row.getValue("quantity")}</div>
//     ),
//   },

//   {
//     accessorKey: "isActive",
//     header: "Active",
//     cell: ({ row }) => (
//       <div className="text-sm">
//         {row.getValue("isActive") ? "✅ Active" : "❌ Inactive"}
//       </div>
//     ),
//   },

//   {
//     accessorKey: "createdAt",
//     header: "Date Created",
//     cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
//   },

//   {
//     id: "actions",
//     cell: ({ row }) => {
//       const category = row.original
//       return (
//         <ActionColumn
//           row={row}
//           title="Category"
//           editEndpoint={`categories/update/${category.id}`}
//           endpoint={`categories/${category.id}`}
//         />
//       )
//     },
//   },
// ]
