// "use client"
// // import Image from 'next/image'
// // import { MoreHorizontal } from "lucide-react"
// // import { ArrowUpDown } from "lucide-react"
// import { Checkbox } from "@/components/ui/checkbox"
 
// // import { Button } from "@/components/ui/button";
// import SorttableColumn from '../../../../../components/DateTableColumns/SortableColumn'
// import ImageColumn from '../../../../../components/DateTableColumns/ImageColumn'
// import DateColumn from '../../../../../components/DateTableColumns/DateColumn'
// import ActionColumn from '../../../../../components/DateTableColumns/ActionColumn'


// export const columns = [
//     {
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
//     accessorKey: "title",
//     header: ({ column }) => (<SorttableColumn column={column} title="Title"/>)
//   },
//   {
//     accessorKey: "imageUrl",
//     header: "Product Image",
//     cell: ({ row }) => (<ImageColumn row={row} accessorKey="imageUrl" />)
//   },
//   {
//     accessorKey: "isActive",
//     header: "Active",
//   },
//   {
//     accessorKey: "createdAt",
//     header: "Data Created",
//     cell: ({ row }) => (<DateColumn row={row} accessorKey="createdAt"/> ),
//   },
//   {
//     id: "actions",
//     cell: ({ row }) => {
//       const product =row.original
//       return (<ActionColumn row={row} title="Product" editEndpoint = {`products/update/${product.id}`} endpoint= {`products/${product.id}`} />);
//      }
//   },
// ];




// rtl


"use client";
import { Checkbox } from "@/components/ui/checkbox";
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
        aria-label="حدد الكل"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="حدد الصف"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (<SorttableColumn column={column} title="اسم القسم الفرعي" />)
  },
  {
    accessorKey: "category.title",
    header: ({ column }) => (<SorttableColumn column={column} title="القسم الرئيسي" />)
  },
  {
    accessorKey: "imageUrl",
    header: "صورة القسم",
    cell: ({ row }) => (<ImageColumn row={row} accessorKey="imageUrl" />)
  },
  {
    accessorKey: "isActive",
    header: "الحالة",
    cell: ({ row }) => (
      <div className={`px-4 py-1 rounded-full text-xs ${row.original.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
        {row.original.isActive ? 'نشط' : 'غير نشط'}
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "تاريخ الإنشاء",
    cell: ({ row }) => (<DateColumn row={row} accessorKey="createdAt" />),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const subCategory = row.original;
      return (
        <ActionColumn 
          row={row} 
          title="القسم الفرعي" 
          editEndpoint={`subcategory/update/${subCategory.id}`} 
          endpoint={`subcategory/${subCategory.id}`} 
        />
      );
    }
  },
];