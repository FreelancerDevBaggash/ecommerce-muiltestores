"use client"

import { useState } from "react"
import { ArrowLeft, Download, MoreHorizontal, UserPlus } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import FilterBar from "@/components/dashboard/FilterBar"
import DataTable from "@/components/dashboard/DataTable"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export default async function  CustomersListPage() {


  const customers =await getData("customers")
  const [date, setDate] = useState({
    from: new Date(2025, 0, 1),
    to: new Date(),
  })

  // بيانات العملاء للعرض
  // const customers = [
  //   {
  //     id: "1",
  //     name: "أحمد محمد",
  //     email: "ahmed@example.com",
  //     phone: "0512345678",
  //     orders: 12,
  //     totalSpent: 3500,
  //     lastOrder: "2025-04-15",
  //     status: "active",
  //   },
  //   {
  //     id: "2",
  //     name: "سارة عبدالله",
  //     email: "sara@example.com",
  //     phone: "0523456789",
  //     orders: 8,
  //     totalSpent: 2200,
  //     lastOrder: "2025-04-10",
  //     status: "active",
  //   },
  //   {
  //     id: "3",
  //     name: "محمد علي",
  //     email: "mohammed@example.com",
  //     phone: "0534567890",
  //     orders: 5,
  //     totalSpent: 1500,
  //     lastOrder: "2025-03-28",
  //     status: "inactive",
  //   },
  //   {
  //     id: "4",
  //     name: "فاطمة أحمد",
  //     email: "fatima@example.com",
  //     phone: "0545678901",
  //     orders: 15,
  //     totalSpent: 4800,
  //     lastOrder: "2025-04-20",
  //     status: "active",
  //   },
  //   {
  //     id: "5",
  //     name: "خالد عمر",
  //     email: "khalid@example.com",
  //     phone: "0556789012",
  //     orders: 3,
  //     totalSpent: 850,
  //     lastOrder: "2025-03-15",
  //     status: "inactive",
  //   },
  //   {
  //     id: "6",
  //     name: "نورة سعد",
  //     email: "noura@example.com",
  //     phone: "0567890123",
  //     orders: 10,
  //     totalSpent: 3200,
  //     lastOrder: "2025-04-18",
  //     status: "active",
  //   },
  //   {
  //     id: "7",
  //     name: "عبدالله محمد",
  //     email: "abdullah@example.com",
  //     phone: "0578901234",
  //     orders: 7,
  //     totalSpent: 1900,
  //     lastOrder: "2025-04-05",
  //     status: "active",
  //   },
  //   {
  //     id: "8",
  //     name: "منى سعيد",
  //     email: "mona@example.com",
  //     phone: "0589012345",
  //     orders: 2,
  //     totalSpent: 600,
  //     lastOrder: "2025-03-10",
  //     status: "inactive",
  //   },
  //   {
  //     id: "9",
  //     name: "يوسف عبدالرحمن",
  //     email: "yousef@example.com",
  //     phone: "0590123456",
  //     orders: 9,
  //     totalSpent: 2800,
  //     lastOrder: "2025-04-12",
  //     status: "active",
  //   },
  //   {
  //     id: "10",
  //     name: "ليلى خالد",
  //     email: "layla@example.com",
  //     phone: "0501234567",
  //     orders: 6,
  //     totalSpent: 1700,
  //     lastOrder: "2025-03-25",
  //     status: "active",
  //   },
  // ]

  // تعريف أعمدة جدول العملاء
  const columns = [
    {
      accessorKey: "name",
      header: "الاسم",
      cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
    },
    {
      accessorKey: "email",
      header: "البريد الإلكتروني",
    },
    {
      accessorKey: "phone",
      header: "رقم الهاتف",
    },
    {
      accessorKey: "orders",
      header: "عدد الطلبات",
    },
    {
      accessorKey: "totalSpent",
      header: "إجمالي الإنفاق",
      cell: ({ row }) => <div>{row.getValue("totalSpent")} ر.ي</div>,
    },
    {
      accessorKey: "lastOrder",
      header: "آخر طلب",
      cell: ({ row }) => {
        const date = new Date(row.getValue("lastOrder"))
        return <div>{date.toLocaleDateString("ar-SA")}</div>
      },
    },
    {
      accessorKey: "status",
      header: "الحالة",
      cell: ({ row }) => {
        const status = row.getValue("status")
        return (
          <Badge variant={status === "active" ? "success" : "secondary"}>
            {status === "active" ? "نشط" : "غير نشط"}
          </Badge>
        )
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const customer = row.original
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">فتح القائمة</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>الإجراءات</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => console.log("عرض", customer.id)}>عرض التفاصيل</DropdownMenuItem>
              <DropdownMenuItem onClick={() => console.log("تعديل", customer.id)}>تعديل</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => console.log("حذف", customer.id)} className="text-red-600">
                حذف
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  const handleExport = () => {
    console.log("تصدير البيانات...")
    // منطق تصدير البيانات
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/customers">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">رجوع</span>
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">قائمة العملاء</h1>
            <p className="text-muted-foreground">عرض وإدارة جميع العملاء</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2" onClick={handleExport}>
            <Download className="h-4 w-4" />
            تصدير
          </Button>
          <Button className="gap-2" asChild>
            <Link href="/dashboard/customers/new">
              <UserPlus className="h-4 w-4" />
              إضافة عميل
            </Link>
          </Button>
        </div>
      </div>

      <FilterBar
        date={date}
        setDate={setDate}
        searchPlaceholder="بحث في العملاء..."
        onSearch={(query) => console.log("بحث:", query)}
        onExport={handleExport}
        filters={[
          {
            id: "status",
            label: "الحالة",
            placeholder: "جميع الحالات",
            options: [
              { label: "جميع الحالات", value: "all" },
              { label: "نشط", value: "active" },
              { label: "غير نشط", value: "inactive" },
            ],
            onChange: (value) => console.log("تغيير الحالة:", value),
          },
          {
            id: "segment",
            label: "الشريحة",
            placeholder: "جميع الشرائح",
            options: [
              { label: "جميع الشرائح", value: "all" },
              { label: "عملاء جدد", value: "new" },
              { label: "عملاء متكررون", value: "returning" },
              { label: "عملاء VIP", value: "vip" },
            ],
            onChange: (value) => console.log("تغيير الشريحة:", value),
          },
        ]}
      />

      <Card>
        <DataTable
          columns={columns}
          data={customers}
          searchPlaceholder="بحث في العملاء..."
          searchColumn="name"
          emptyState={{
            title: "لا يوجد عملاء",
            description: "لم يتم العثور على أي عملاء. يمكنك إضافة عميل جديد.",
            action: {
              label: "إضافة عميل",
              href: "/dashboard/customers/new",
            },
          }}
        />
      </Card>
    </div>
  )
}
