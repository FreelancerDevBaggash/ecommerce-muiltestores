// "use client"
// import { useState } from "react";
// import * as React from "react"
// import {
//   ColumnDef,
//   ColumnFiltersState,
//   SortingState,
//   VisibilityState,
//   flexRender,
//   getCoreRowModel,
//   getFacetedRowModel,
//   getFacetedUniqueValues,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
// } from "@tanstack/react-table"

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import {DataTablePagination} from './DataTablePagination'
// import {DataTableToolbar} from './DataTableToolbar'



// export default function DataTable({
//   columns,
//   data,
//   filterKeys=["title"]
// }){
//   const [rowSelection, setRowSelection] = useState({})
//   const [columnVisibility, setColumnVisibility] = useState({})
//   const [columnFilters, setColumnFilters] = useState([])
//   const [sorting, setSorting] = useState([])

//   const table = useReactTable({
//     data,
//     columns,

//     enableRowSelection: true,
//     onRowSelectionChange: setRowSelection,
//     onSortingChange: setSorting,
//     onColumnFiltersChange: setColumnFilters,
//     onColumnVisibilityChange: setColumnVisibility,
//      getCoreRowModel: getCoreRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFacetedRowModel: getFacetedRowModel(),
//     getFacetedUniqueValues: getFacetedUniqueValues(),
//     state: {
//       sorting,
//       columnVisibility,
//       rowSelection,
//       columnFilters,
//     },
//   });

//   return (
//     <div className="space-y-4">
//          {table.getFilteredSelectedRowModel().rows.length} of{" "}
//           {table.getFilteredRowModel().rows.length} row(s) selected.
//       <DataTableToolbar table={table} filterKeys={filterKeys} />
//       <div className="rounded-md border">
//         <Table>
//           <TableHeader>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <TableRow key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => {
//                   return (
//                     <TableHead key={header.id} colSpan={header.colSpan}>
//                       {header.isPlaceholder
//                         ? null
//                         : flexRender(
//                             header.column.columnDef.header,
//                             header.getContext()
//                           )}
//                     </TableHead>
//                   )
//                 })}
//               </TableRow>
//             ))}
//           </TableHeader>
//           <TableBody>
//             {table.getRowModel().rows?.length ? (
//               table.getRowModel().rows.map((row) => (
//                 <TableRow
//                   key={row.id}
//                   data-state={row.getIsSelected() && "selected"}
//                 >
//                   {row.getVisibleCells().map((cell) => (
//                     <TableCell key={cell.id}>
//                       {flexRender(
//                         cell.column.columnDef.cell,
//                         cell.getContext()
//                       )}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell
//                   colSpan={columns.length}
//                   className="h-24 text-center"
//                 >
//                   No results.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>
//       <DataTablePagination table={table} />
//     </div>
//   )
// }

// rtl 
// "use client";
// import { useState } from "react";
// import * as React from "react";
// import {
//   ColumnDef,
//   ColumnFiltersState,
//   SortingState,
//   VisibilityState,
//   flexRender,
//   getCoreRowModel,
//   getFacetedRowModel,
//   getFacetedUniqueValues,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
// } from "@tanstack/react-table";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { DataTablePagination } from "./DataTablePagination";
// import { DataTableToolbar } from "./DataTableToolbar";

// export default function DataTable({ columns, data, filterKeys = ["title"] }) {
//   const [rowSelection, setRowSelection] = useState({});
//   const [columnVisibility, setColumnVisibility] = useState({});
//   const [columnFilters, setColumnFilters] = useState([]);
//   const [sorting, setSorting] = useState([]);

//   const table = useReactTable({
//     data,
//     columns,
//     enableRowSelection: true,
//     onRowSelectionChange: setRowSelection,
//     onSortingChange: setSorting,
//     onColumnFiltersChange: setColumnFilters,
//     onColumnVisibilityChange: setColumnVisibility,
//     getCoreRowModel: getCoreRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFacetedRowModel: getFacetedRowModel(),
//     getFacetedUniqueValues: getFacetedUniqueValues(),
//     state: {
//       sorting,
//       columnVisibility,
//       rowSelection,
//       columnFilters,
//     },
//   });

//   return (
//     <div className="space-y-4" dir="rtl">
//       <div className="text-sm text-slate-600 dark:text-slate-50">
//         {table.getFilteredSelectedRowModel().rows.length} من{" "}
//         {table.getFilteredRowModel().rows.length} صف تم تحديدهم.
//       </div>
//       <DataTableToolbar table={table} filterKeys={filterKeys} />
//       <div className="rounded-md border">
//         <Table>
//           <TableHeader>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <TableRow key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => (
//                   <TableHead key={header.id} colSpan={header.colSpan}>
//                     {header.isPlaceholder
//                       ? null
//                       : flexRender(
//                           header.column.columnDef.header,
//                           header.getContext()
//                         )}
//                   </TableHead>
//                 ))}
//               </TableRow>
//             ))}
//           </TableHeader>
//           <TableBody>
//             {table.getRowModel().rows?.length ? (
//               table.getRowModel().rows.map((row) => (
//                 <TableRow
//                   key={row.id}
//                   data-state={row.getIsSelected() && "selected"}
//                 >
//                   {row.getVisibleCells().map((cell) => (
//                     <TableCell key={cell.id}>
//                       {flexRender(
//                         cell.column.columnDef.cell,
//                         cell.getContext()
//                       )}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell
//                   colSpan={columns.length}
//                   className="h-24 text-center text-slate-600 dark:text-slate-50"
//                 >
//                   لا توجد نتائج.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>
//       <DataTablePagination table={table} />
//     </div>
//   );
// }

"use client"
import { useState } from "react"
import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { DataTablePagination } from "./DataTablePagination"
import { DataTableToolbar } from "./DataTableToolbar"

export default function DataTable({ columns, data, filterKeys = ["title"] }) {
  const [rowSelection, setRowSelection] = useState({})
  const [columnVisibility, setColumnVisibility] = useState({})
  const [columnFilters, setColumnFilters] = useState([])
  const [sorting, setSorting] = useState([])

  const table = useReactTable({
    data,
    columns,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
  })

  return (
    <div className="space-y-4" dir="rtl">
      <div className="text-sm text-slate-600 dark:text-slate-50">
        {(() => {
          try {
            const selectedRows = table?.getFilteredSelectedRowModel?.()?.rows ?? [];
            const allFilteredRows = table?.getFilteredRowModel?.()?.rows ?? [];

            return `${selectedRows.length} من ${allFilteredRows.length} صف تم تحديدهم.`;
          } catch (error) {
            console.error("خطأ أثناء حساب عدد الصفوف:", error);
            return "لا توجد بيانات حالياً";
          }
        })()}
      </div>
      <DataTableToolbar table={table} filterKeys={filterKeys} />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table?.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {(() => {
              const rows = table?.getRowModel?.()?.rows;
              return Array.isArray(rows) && rows.length > 0;
            })() ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center text-slate-600 dark:text-slate-50">
                  لا توجد نتائج.
                </TableCell>
              </TableRow>
            )}
          </TableBody>

        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  )
}
