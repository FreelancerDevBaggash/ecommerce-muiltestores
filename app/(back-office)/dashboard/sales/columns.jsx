// "use client"
// import Image from 'next/image'
// import { MoreHorizontal } from "lucide-react"
// import { ArrowUpDown } from "lucide-react"
// import { Checkbox } from "../../../../components/ui/checkbox"
// import React, { useState } from "react";

// import { Button } from "../../../../components/ui/button";
// import SorttableColumn from '../../../../components/DateTableColumns/SortableColumn'
// import ImageColumn from '../../../../components/DateTableColumns/ImageColumn'
// import DateColumn from '../../../../components/DateTableColumns/DateColumn'
// import ActionColumn from '../../../../components/DateTableColumns/ActionColumn'
// import ModalComponent from '../../../../components/Actions/ModalComponent'
// //import SaleInvoice from '../../../../../components/Order/s'
// import SaleInvoice from '../../../../components/Order/SaleInvoice'

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
//   // {
//   //   accessorKey: "productImage",
//   //   header: "Product Image",
//   //   cell: ({ row }) => (<ImageColumn row={row} accessorKey="productImage" />)
//   // },
//   {
//     accessorKey: "username",
//     header: ({ column }) => (<SorttableColumn column={column} title="Customer Name"/>)
//   },
//   {
//     accessorKey: "productPrice",
//     header: "Price",
    
//   },
//   {
//     accessorKey: "productQty",
//     header: "Qty",
    
//   },
//   {
//     accessorKey: "invoiceTotal",
//     header: "invoiceTotal",
    
//   },
//   {
//     accessorKey: "createdAt",
//     header: "Data Created",
//     cell: ({ row }) => (<DateColumn row={row} accessorKey="createdAt"/> ),
//   },
//   {
//     id: "viewOrder",
//     header: "View Invoice",
//     cell: ({ row }) => {
//       const [isModalOpen, setIsModalOpen] = useState(false);
//       const sale = row.original; // الحصول على بيانات الفاتورة

//       const handleOpenModal = () => setIsModalOpen(true);
//       const handleCloseModal = () => setIsModalOpen(false);

//       return (
//         <>
//           <Button onClick={handleOpenModal}>View Invoice</Button>
//           <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal}>
//             <SaleInvoice sale={sale} />

//           </ModalComponent>
//         </>
//       );
//     },
//   },
//   {
//     id: "actions",
//     cell: ({ row }) => {
//       const product =row.original
//       return (<ActionColumn row={row} title="Product" editEndpoint = {`products/update/${product.id}`} endpoint= {`products/${product.id}`} />);
//      }
//   },
// ];



//rtl 


"use client";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import { Checkbox } from "../../../../components/ui/checkbox";
import React, { useState } from "react";

import { Button } from "../../../../components/ui/button";
import SorttableColumn from "../../../../components/DateTableColumns/SortableColumn";
import ImageColumn from "../../../../components/DateTableColumns/ImageColumn";
import DateColumn from "../../../../components/DateTableColumns/DateColumn";
import ActionColumn from "../../../../components/DateTableColumns/ActionColumn";
import ModalComponent from "../../../../components/Actions/ModalComponent";
import SaleInvoice from "../../../../components/Order/SaleInvoice";

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
        aria-label="تحديد الكل"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="تحديد الصف"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  // {
  //   accessorKey: "productImage",
  //   header: "صورة المنتج",
  //   cell: ({ row }) => (<ImageColumn row={row} accessorKey="productImage" />)
  // },
  {
    accessorKey: "username",
    header: ({ column }) => (
      <SorttableColumn column={column} title="اسم العميل" />
    ),
  },
  {
    accessorKey: "productPrice",
    header: "السعر",
  },
  {
    accessorKey: "productQty",
    header: "الكمية",
  },
  {
    accessorKey: "invoiceTotal",
    header: "إجمالي الفاتورة",
  },
  {
    accessorKey: "createdAt",
    header: "تاريخ الإنشاء",
    cell: ({ row }) => (
      <DateColumn row={row} accessorKey="createdAt" />
    ),
  },
  {
    id: "viewOrder",
    header: "عرض الفاتورة",
    cell: ({ row }) => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const sale = row.original; // الحصول على بيانات الفاتورة

      const handleOpenModal = () => setIsModalOpen(true);
      const handleCloseModal = () => setIsModalOpen(false);

      return (
        <>
          <Button onClick={handleOpenModal}>عرض الفاتورة</Button>
          <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal}>
            <SaleInvoice sale={sale} />
          </ModalComponent>
        </>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;
      return (
        <ActionColumn
          row={row}
          title="المنتج"
          editEndpoint={`products/update/${product.id}`}
          endpoint={`products/${product.id}`}
        />
      );
    },
  },
];
