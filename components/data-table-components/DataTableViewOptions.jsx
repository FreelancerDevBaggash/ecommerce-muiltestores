// "use client"

// import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
// import { MixerHorizontalIcon } from "@radix-ui/react-icons"
// import { Table } from "@tanstack/react-table"

// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
// } from "@/components/ui/dropdown-menu"


// export function DataTableViewOptions({table}) {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button
//           variant="outline"
//           size="sm"
//           className="ml-auto hidden h-8 lg:flex"
//         >
//           <MixerHorizontalIcon className="mr-2 h-4 w-4" />
//           View
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end" className="w-[150px]">
//         <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         {table
//           .getAllColumns()
//           .filter(
//             (column) =>
//               typeof column.accessorFn !== "undefined" && column.getCanHide()
//           )
//           .map((column) => {
//             return (
//               <DropdownMenuCheckboxItem
//                 key={column.id}
//                 className="capitalize"
//                 checked={column.getIsVisible()}
//                 onCheckedChange={(value) => column.toggleVisibility(!!value)}
//               >
//                 {column.id}
//               </DropdownMenuCheckboxItem>
//             )
//           })}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }

// rtl

// "use client"

// import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
// import { MixerHorizontalIcon } from "@radix-ui/react-icons"
// import { Table } from "@tanstack/react-table"

// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
// } from "@/components/ui/dropdown-menu"


// export function DataTableViewOptions({ table }) {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button
//           variant="outline"
//           size="sm"
//           className="mr-auto hidden h-8 text-slate-500 lg:flex" // تعديل المسافة لتناسب RTL
//         >
//           <MixerHorizontalIcon className="ml-2 h-4 w-4" /> {/* تعديل مكان الأيقونة */}
//           عرض
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="start" className="w-[150px]"> {/* تعديل المحاذاة لتكون من اليسار */}
//         <DropdownMenuLabel>تبديل الأعمدة</DropdownMenuLabel> {/* تغيير النص إلى العربية */}
//         <DropdownMenuSeparator />
//         {table
//           .getAllColumns()
//           .filter(
//             (column) =>
//               typeof column.accessorFn !== "undefined" && column.getCanHide()
//           )
//           .map((column) => {
//             return (
//               <DropdownMenuCheckboxItem
//                 key={column.id}
//                 className="capitalize"
//                 checked={column.getIsVisible()}
//                 onCheckedChange={(value) => column.toggleVisibility(!!value)}
//               >
//                 {column.id}
//               </DropdownMenuCheckboxItem>
//             )
//           })}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }





"use client"

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { MixerHorizontalIcon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "../../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../../components/ui/dropdown-menu"


export function DataTableViewOptions({table}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
        >
          <MixerHorizontalIcon className="mr-2 h-4 w-4" />
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide()
          )
          .map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            )
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
