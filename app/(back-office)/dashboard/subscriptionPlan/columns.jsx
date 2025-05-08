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
    accessorKey: "name",
    header: ({ column }) => (
      <SorttableColumn column={column} title="اسم الباقة" />
    ),
  },
  {
    accessorKey: "description",
    header: "الوصف",
  },
  {
    accessorKey: "monthlyPrice",
    header: "السعر شهري",
  },
  {
    accessorKey: "yearlyPrice",
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
    accessorKey: "features",
    header: "المميزات",
    cell: ({ row }) => {
      const feats = row.original.features || [];
      return (
        <details className="relative">
          <summary className="cursor-pointer text-indigo-600 dark:text-indigo-400 text-lg font-semibold">
            {feats.length > 0 ? `عرض ${feats.length} ميزة` : "لا توجد مميزات"}
          </summary>
          <ul className="absolute mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 space-y-2 z-10">
            {feats.map((f, i) => (
              <li key={i} className="text-gray-800 dark:text-gray-200 text-lg">
                • {f}
              </li>
            ))}
          </ul>
        </details>
      );
    },
  },
  {
    accessorKey: "limitations",
    header: "العبوب",
    cell: ({ row }) => {
      const feats = row.original.limitations || [];
      return (
        <details className="relative">
          <summary className="cursor-pointer text-indigo-600 dark:text-indigo-400 text-lg font-semibold">
            {feats.length > 0 ? `عرض ${feats.length} ميزة` : "لا توجد عيوب"}
          </summary>
          <ul className="absolute mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 space-y-2 z-10">
            {feats.map((f, i) => (
              <li key={i} className="text-gray-800 dark:text-gray-200 text-lg">
                • {f}
              </li>
            ))}
          </ul>
        </details>
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
