import Link from "next/link"
import { Users2, UserCheck, PieChart, Target, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../../components/ui/card"
import { getData } from "../../../../../lib/getData"

export const metadata = {
  title: "العملاء | لوحة التحكم",
  description: "إدارة وتحليل بيانات العملاء",
}

export   default async  function CustomersPage() {

  const customers =await getData("customers")
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">العملاء</h1>
          <p className="text-muted-foreground">إدارة وتحليل بيانات العملاء والولاء</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/customers/new">
            <Plus className="ml-2 h-4 w-4" />
            إضافة عميل جديد
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">إجمالي العملاء</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">1,248</div>
              <Users2 className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="text-green-500 font-medium">+12.5%</span> منذ الشهر الماضي
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">العملاء النشطين</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">876</div>
              <UserCheck className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="text-green-500 font-medium">+5.2%</span> منذ الشهر الماضي
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">متوسط قيمة الطلب</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">320 ر.ي</div>
              <PieChart className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="text-red-500 font-medium">-2.1%</span> منذ الشهر الماضي
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">معدل الاحتفاظ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">68%</div>
              <Target className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="text-green-500 font-medium">+3.4%</span> منذ الشهر الماضي
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>تحليل العملاء</CardTitle>
            <CardDescription>تحليل بيانات العملاء والسلوك الشرائي</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-4">
              <Link
                href="/dashboard/customers/analytics"
                className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <PieChart className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <div>
                    <h3 className="font-medium">تحليل بيانات العملاء</h3>
                    <p className="text-sm text-muted-foreground">تحليل سلوك العملاء والبيانات الديموغرافية</p>
                  </div>
                </div>
              </Link>

              <Link
                href="/dashboard/customers/segments"
                className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <div>
                    <h3 className="font-medium">شرائح العملاء</h3>
                    <p className="text-sm text-muted-foreground">تقسيم العملاء إلى شرائح مستهدفة</p>
                  </div>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>برنامج الولاء</CardTitle>
            <CardDescription>إدارة برنامج الولاء ومكافآت العملاء</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-4">
              <Link
                href="/dashboard/customers/loyalty"
                className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <UserCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <div>
                    <h3 className="font-medium">برنامج الولاء</h3>
                    <p className="text-sm text-muted-foreground">إدارة نقاط الولاء والمكافآت</p>
                  </div>
                </div>
              </Link>

              <Link
                href="/dashboard/customers/list"
                className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Users2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <div>
                    <h3 className="font-medium">قائمة العملاء</h3>
                    <p className="text-sm text-muted-foreground">عرض وإدارة جميع العملاء</p>
                  </div>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
