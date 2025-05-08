"use client";
import React from "react";
import { Checkbox } from "../../../../components/ui/checkbox";
import SortableColumn from "../../../../components/DateTableColumns/SortableColumn";
import DateColumn from "../../../../components/DateTableColumns/DateColumn";
import ActionColumn from "../../../../components/DateTableColumns/ActionColumn";

// مكوّن العد التنازلي مع عرض الثواني
function Countdown({ endDate }) {
  const [timeLeft, setTimeLeft] = React.useState(getDiff(endDate));

  React.useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getDiff(endDate)), 1000);
    return () => clearInterval(timer);
  }, [endDate]);

  if (timeLeft.total <= 0) return <span>انتهى</span>;
  return (
    <span>
      {timeLeft.days} يوم، {timeLeft.hours} ساعة، {timeLeft.minutes} دقيقة، {timeLeft.seconds} ثانية
    </span>
  );
}

function getDiff(endDate) {
  const total = endDate - new Date();
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { total, days, hours, minutes, seconds };
}

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(val) => table.toggleAllPageRowsSelected(!!val)}
        aria-label="تحديد الكل"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(val) => row.toggleSelected(!!val)}
        aria-label="تحديد الصف"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => <SortableColumn column={column} title="اسم الخطة" />,
  },
  {
    accessorKey: "billingCycle",
    header: "الدورة",
  },
  {
    accessorKey: "startDate",
    header: "تاريخ البدء",
    cell: ({ row }) => <DateColumn row={row} accessorKey="startDate" />,  
  },
  {
    accessorKey: "endDate",
    header: "تاريخ الانتهاء",
    cell: ({ row }) => <DateColumn row={row} accessorKey="endDate" />,
  },
  {
    id: "timeLeft",
    header: "الوقت المتبقي",
    cell: ({ row }) => {
      const end = new Date(row.original.endDate);
      return <Countdown endDate={end} />;
    },
  },
  {
    accessorKey: "status",
    header: "الحالة",
  },
  {
    accessorKey: "features",
    header: "المميزات",
    cell: ({ row }) => {
      const feats = row.original.features || [];
      return feats.length ? (
        <details><summary>عرض {feats.length}</summary><ul>{feats.map((f,i)=>(<li key={i}>• {f}</li>))}</ul></details>
      ) : (<span>لا توجد مميزات</span>);
    },
  },
  {
    accessorKey: "limitations",
    header: "العيوب",
    cell: ({ row }) => {
      const lims = row.original.limitations || [];
      return lims.length ? (
        <details><summary>عرض {lims.length}</summary><ul>{lims.map((l,i)=>(<li key={i}>• {l}</li>))}</ul></details>
      ) : (<span>لا توجد عيوب</span>);
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <ActionColumn
        row={row}
        title="اشتراك"
        editEndpoint={`/dashboard/subscriptions/edit/${row.original.id}`}
        endpoint={`/api/subscriptions/${row.original.id}`}
      />
    ),
  },
];