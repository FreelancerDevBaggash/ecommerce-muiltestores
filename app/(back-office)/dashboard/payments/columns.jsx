"use client";
import { Checkbox } from "../../../../components/ui/checkbox";
import SorttableColumn from "../../../../components/DateTableColumns/SortableColumn";
import ImageColumn from "../../../../components/DateTableColumns/ImageColumn";
import DateColumn from "../../../../components/DateTableColumns/DateColumn";
import ActionColumn from "../../../../components/DateTableColumns/ActionColumn";

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
    header: ({ column }) => (
      <SorttableColumn column={column} title="PaymentProvider Name" />
    ),
  },
  {
    accessorKey: "imageUrl",
    header: "Logo Image",
    cell: ({ row }) => <ImageColumn row={row} accessorKey="imageUrl" />,
  },
  {
    accessorKey: "apiUrl",
    header: "API URL",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "isActive",
    header: "Active",
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const PaymentProvider = row.original;
      return (
        <ActionColumn
          row={row}
          title="PaymentProvider"
          editEndpoint={`payments/update/${PaymentProvider.id}`}
          endpoint={`PaymentProvider/${PaymentProvider.id}`}
        />
      );
    },
  },
];

// import { Checkbox } from "@/components/ui/checkbox";
// import SorttableColumn from "../../../../components/DateTableColumns/SortableColumn";
// import ImageColumn from "../../../../components/DateTableColumns/ImageColumn";
// import DateColumn from "../../../../components/DateTableColumns/DateColumn";
// import ActionColumn from "../../../../components/DateTableColumns/ActionColumn";

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
//         aria-label="تحديد الكل"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="تحديد الصف"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorKey: "name",
//     header: ({ column }) => (
//       <SorttableColumn column={column} title="اسم مزود الدفع" />
//     ),
//   },
//   {
//     accessorKey: "imageUrl",
//     header: "صورة الشعار",
//     cell: ({ row }) => <ImageColumn row={row} accessorKey="imageUrl" />,
//   },
//   {
//     accessorKey: "apiUrl",
//     header: "رابط API",
//   },
//   {
//     accessorKey: "description",
//     header: "الوصف",
//   },
//   {
//     accessorKey: "isActive",
//     header: "مفعل",
//   },
//   {
//     accessorKey: "createdAt",
//     header: "تاريخ الإنشاء",
//     cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
//   },
//   {
//     id: "actions",
//     cell: ({ row }) => {
//       const PaymentProvider = row.original;
//       return (
//         <ActionColumn
//           row={row}
//           title="مزود الدفع"
//           editEndpoint={`payments/update/${PaymentProvider.id}`}
//           endpoint={`PaymentProvider/${PaymentProvider.id}`}
//         />
//       );
//     },
//   },
// ];
