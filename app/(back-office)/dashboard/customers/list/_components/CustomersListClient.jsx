// app/dashboard/customers/CustomersListClient.js (Client Component)

// "use client";

// import { useState, useEffect } from "react";
// import { ArrowLeft, Download, UserPlus, MoreHorizontal } from "lucide-react";
// import Link from "next/link";

// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import FilterBar from "@/components/dashboard/FilterBar";
// import DataTable from "@/components/dashboard/DataTable";
// import LoadingSpinner from "@/components/dashboard/LoadingSpinner";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Badge } from "@/components/ui/badge";

// export default function CustomersListClient({ initialData={} }) {
//   const [customers, setCustomers] = useState(initialData || []);
//   const [loading, setLoading]   = useState(false);
//   const [error, setError]       = useState(null);
//   const [date, setDate]         = useState({
//     from: new Date(2025, 0, 1),
//     to:   new Date(),
//   });
//   console.log('iiiiiiiiii',initialData )

//   // useEffect(() => {
//   //   async function fetchCustomers() {
//   //     setLoading(true);
//   //     try {
//   //       const data = await ("customers");
//   //       setCustomers(data);
//   //     } catch {
//   //       setError("تعذّر تحميل بيانات العملاء");
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   }
//   //   fetchCustomers();
//   // }, []);

//   const handleExport = () => {
//     console.log("تصدير البيانات...");
//     // منطق التصدير هنا
//   };

//   const columns = [
//     {
//       accessorKey: "customer.name",
//       header: "الاسم",
//       cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
//     },
//     { accessorKey: "customer.email", header: "البريد الإلكتروني" },
//     { accessorKey: "custome.phone", header: "رقم الهاتف" },
//     { accessorKey: "orders", header: "عدد الطلبات" },
//     {
//       accessorKey: "totalSpent",
//       header: "إجمالي الإنفاق",
//       cell: ({ row }) => <div>{row.getValue("totalSpent")} ر.ي</div>,
//     },
//     {
//       accessorKey: "lastOrder",
//       header: "آخر طلب",
//       cell: ({ row }) => {
//         const d = new Date(row.getValue("lastOrder"));
//         return <div>{d.toLocaleDateString("ar-SA")}</div>;
//       },
//     },
//     {
//       accessorKey: "status",
//       header: "الحالة",
//       cell: ({ row }) => {
//         const status = row.getValue("status");
//         return (
//           <Badge variant={status === "active" ? "success" : "secondary"}>
//             {status === "active" ? "نشط" : "غير نشط"}
//           </Badge>
//         );
//       },
//     },
//     {
//       id: "actions",
//       cell: ({ row }) => {
//         const customer = row.original;
//         return (
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" size="icon">
//                 <MoreHorizontal className="h-4 w-4" />
//                 <span className="sr-only">فتح القائمة</span>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuLabel>الإجراءات</DropdownMenuLabel>
//               <DropdownMenuItem onClick={() => console.log("عرض", customer.id)}>
//                 عرض التفاصيل
//               </DropdownMenuItem>
//               <DropdownMenuItem onClick={() => console.log("تعديل", customer.id)}>
//                 تعديل
//               </DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem
//                 onClick={() => console.log("حذف", customer.id)}
//                 className="text-red-600"
//               >
//                 حذف
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         );
//       },
//     },
//   ];

//   if (loading) return <LoadingSpinner size="lg" />;
//   if (error)   return <div className="p-4 text-red-600">{error}</div>;

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//         <div className="flex items-center gap-2">
//           <Button variant="outline" size="icon" asChild>
//             <Link href="/dashboard/customers">
//               <ArrowLeft className="h-4 w-4" />
//               <span className="sr-only">رجوع</span>
//             </Link>
//           </Button>
//           <div>
//             <h1 className="text-2xl font-bold">قائمة العملاء</h1>
//             <p className="text-muted-foreground">عرض وإدارة جميع العملاء</p>
//           </div>
//         </div>
//         <div className="flex gap-2">
//           <Button variant="outline" className="gap-2" onClick={handleExport}>
//             <Download className="h-4 w-4" /> تصدير
//           </Button>
//           <Button className="gap-2" asChild>
//             <Link href="/dashboard/customers/new">
//               <UserPlus className="h-4 w-4" /> إضافة عميل
//             </Link>
//           </Button>
//         </div>
//       </div>

//       {/* FilterBar */}
//       <FilterBar
//         date={date}
//         setDate={setDate}
//         searchPlaceholder="بحث في العملاء..."
//         onSearch={(q) => console.log("بحث:", q)}
//         onExport={handleExport}
//         filters={[
//           {
//             id: "status",
//             label: "الحالة",
//             placeholder: "جميع الحالات",
//             options: [
//               { label: "جميع الحالات", value: "all" },
//               { label: "نشط", value: "active" },
//               { label: "غير نشط", value: "inactive" },
//             ],
//             onChange: (v) => console.log("تغيير الحالة:", v),
//           },
//           {
//             id: "segment",
//             label: "الشريحة",
//             placeholder: "جميع الشرائح",
//             options: [
//               { label: "جميع الشرائح", value: "all" },
//               { label: "عملاء جدد", value: "new" },
//               { label: "عملاء متكررون", value: "returning" },
//               { label: "عملاء VIP", value: "vip" },
//             ],
//             onChange: (v) => console.log("تغيير الشريحة:", v),
//           },
//         ]}
//       />

//       {/* DataTable */}
//       <Card>
//         <DataTable
//           columns={columns}
//           data={customers}
//           searchPlaceholder="بحث في العملاء..."
//           searchColumn="name"
//           emptyState={{
//             title: "لا يوجد عملاء",
//             description: "لم يتم العثور على أي عملاء. يمكنك إضافة عميل جديد.",
//             action: { label: "إضافة عميل", href: "/dashboard/customers/new" },
//           }}
//         />
//       </Card>
//     </div>
//   );
// }


// app/dashboard/customers/_components/CustomersListClient.js
"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Download, UserPlus, MoreHorizontal } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FilterBar from "@/components/dashboard/FilterBar";
import DataTable from "@/components/dashboard/DataTable";
import LoadingSpinner from "@/components/dashboard/LoadingSpinner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export default function CustomersListClient({ rawData =[] }) {
  // 1. نضمن أن بياناتنا دوماً مصفوفة
  const initial = Array.isArray(rawData) ? rawData : rawData ? [rawData] : [];
  const [customers, setCustomers] = useState(initial);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState(null);
  const [date, setDate]         = useState({
    from: new Date(2025, 0, 1),
    to:   new Date(),
  });
  console.log('customers', customers)

  // — في حال أردنا جلب مُحدَّث لاحقاً:
  // useEffect(() => {
  //   async function fetchLatest() {
  //     setLoading(true);
  //     try {
  //       const res = await fetch(`/api/customerStores?storeId=...`);
  //       const json = await res.json();
  //       const recs = Array.isArray(json) ? json : (Array.isArray(json.data) ? json.data : []);
  //       setCustomers(recs);
  //     } catch {
  //       setError("تعذّر تحميل بيانات العملاء");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchLatest();
  // }, []);

  const handleExport = () => {
    console.log("تصدير البيانات...");
  };

  // 2. تعريف الأعمدة مع dot-notation للوصول للحقول المتداخلة
  const columns = [
    {
      id: "name",
      header: "الاسم",
      accessorFn: row => `${row.customer.firstName} ${row.customer.lastName}`,
      cell: ({ getValue }) => <div className="font-medium">{getValue()}</div>,
    },
    {
      accessorKey: "customer.email",
      header: "البريد الإلكتروني",
    },
    {
      accessorKey: "customer.phone",
      header: "رقم الهاتف",
    },
    {
      accessorKey: "customer.isBlocked",
      header: "محظور؟",
      cell: ({ row }) => row.getValue("customer.isBlocked") ? "نعم" : "لا",
    },
    {
      accessorKey: "createdAt",
      header: "تاريخ الإنشاء",
      cell: ({ row }) => new Date(row.getValue("createdAt")).toLocaleDateString("ar-SA"),
    },
    {
      accessorKey: "updatedAt",
      header: "آخر تحديث",
      cell: ({ row }) => new Date(row.getValue("updatedAt")).toLocaleDateString("ar-SA"),
    },
    {
      id: "actions",
      header: "إجراءات",
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">فتح القائمة</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>الإجراءات</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => console.log("عرض", row.original.id)}>
              عرض التفاصيل
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log("تعديل", row.original.id)}>
              تعديل
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => console.log("حذف", row.original.id)}
              className="text-red-600"
            >
              حذف
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  if (loading) return <LoadingSpinner size="lg" />;
  if (error)   return <div className="p-4 text-red-600">{error}</div>;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/customers">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">رجوع</span>
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold">قائمة العملاء</h1>
            <p className="text-muted-foreground">عرض وإدارة جميع العملاء</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2" onClick={handleExport}>
            <Download className="h-4 w-4" /> تصدير
          </Button>
          <Button className="gap-2" asChild>
            <Link href="/dashboard/customers/new">
              <UserPlus className="h-4 w-4" /> إضافة عميل
            </Link>
          </Button>
        </div>
      </div>

      {/* FilterBar */}
      <FilterBar
        date={date}
        setDate={setDate}
        searchPlaceholder="بحث في العملاء..."
        onSearch={(q) => console.log("بحث:", q)}
        onExport={handleExport}
        filters={[
          {
            id: "isBlocked",
            label: "محظور؟",
            placeholder: "الكل",
            options: [
              { label: "الكل", value: "all" },
              { label: "نعم", value: true },
              { label: "لا", value: false },
            ],
            onChange: (v) => console.log("تغيير محظور؟:", v),
          },
        ]}
      />

      {/* DataTable */}
      <Card>
        <DataTable
          columns={columns}
          data={customers}
          searchPlaceholder="بحث في الاسم..."
          searchColumn="name"
          emptyState={{
            title: "لا يوجد عملاء",
            description: "لم يتم العثور على أي سجلات.",
            action: { label: "تحديث", onClick: () => window.location.reload() },
          }}
        />
      </Card>
    </div>
  );
}
