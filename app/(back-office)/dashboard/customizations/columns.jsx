"use client";
import { MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SorttableColumn from "../../../../components/DateTableColumns/SortableColumn";
import ColorColumn from "../../../../components/DateTableColumns/ColorColumn"; 
import DateColumn from "../../../../components/DateTableColumns/DateColumn";
import ActionColumn from "../../../../components/DateTableColumns/ActionColumn";
import FontFamilyColumn from "../../../../components/DateTableColumns/FontFamilyColumn"; // تأكد من استيراد FontFamilyColumn

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
    accessorKey: "primaryColor",
    header: ({ column }) => <SorttableColumn column={column} title="Primary Color" />,
    cell: ({ row }) => <ColorColumn color={row.original.primaryColor} />,
  },
  {
    accessorKey: "secondaryColor",
    header: "Secondary Color",
    cell: ({ row }) => <ColorColumn color={row.original.secondaryColor} />,
  },
  {
    accessorKey: "accentColor",
    header: "Accent Color",
    cell: ({ row }) => <ColorColumn color={row.original.accentColor} />,
  },
  {
    accessorKey: "backgroundColor",
    header: "Background Color",
    cell: ({ row }) => <ColorColumn color={row.original.backgroundColor} />,
  },
  {
    accessorKey: "fontFamily",
    header: "Font Family",
    cell: ({ row }) => <FontFamilyColumn font={row.original.fontFamily} />, // استخدم هنا المكون FontFamilyColumn
  },
  {
    accessorKey: "isActive",
    header: "Active",
    cell: ({ row }) => <Checkbox checked={row.original.isActive} disabled />,
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const customization = row.original;
      return (
        <ActionColumn
          row={row}
          title="Customization"
          editEndpoint={`customizations/update/${customization.id}`}
          endpoint={`customizations/${customization.id}`}
        />
      );
    },
  },
];
