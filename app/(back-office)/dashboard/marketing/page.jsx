import Link from "next/link"
import { Target, LineChart, TrendingUp, Bell, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "التسويق | لوحة التحكم",
  description: "إدارة وتحليل الحملات التسويقية",
}

export default function MarketingPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">التسويق</h1>
          <p className="text-muted-foreground">إدارة وتحليل الحملات التسويقية والأداء</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/marketing/campaigns/new">
            <Plus className="ml-2 h-4 w-4" />
            إنشاء حملة جديدة
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">الحملات النشطة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">12</div>
              <Target className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="text-green-500 font-medium">+2</span> منذ الشهر الماضي
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">معدل التحويل</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">3.8%</div>
              <LineChart className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="text-green-500 font-medium">+0.5%</span> منذ الشهر الماضي
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">عائد الإنفاق الإعلاني</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">4.2x</div>
              <TrendingUp className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="text-green-500 font-medium">+0.3x</span> منذ الشهر الماضي
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">المشتركين في النشرة البريدية</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">5,280</div>
              <Bell className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="text-green-500 font-medium">+320</span> منذ الشهر الماضي
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>الحملات التسويقية</CardTitle>
            <CardDescription>إدارة وتحليل الحملات التسويقية</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-4">
              <Link
                href="/dashboard/marketing/campaigns"
                className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <div>
                    <h3 className="font-medium">الحملات التسويقية</h3>
                    <p className="text-sm text-muted-foreground">إدارة وتتبع الحملات التسويقية</p>
                  </div>
                </div>
              </Link>

              <Link
                href="/dashboard/marketing/performance"
                className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <LineChart className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <div>
                    <h3 className="font-medium">تحليل الأداء</h3>
                    <p className="text-sm text-muted-foreground">تحليل أداء الحملات التسويقية</p>
                  </div>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>قنوات التسويق</CardTitle>
            <CardDescription>إدارة قنوات التسويق المختلفة</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-4">
              <Link
                href="/dashboard/marketing/affiliate"
                className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <div>
                    <h3 className="font-medium">التسويق بالعمولة</h3>
                    <p className="text-sm text-muted-foreground">إدارة برنامج التسويق بالعمولة</p>
                  </div>
                </div>
              </Link>

              <Link
                href="/dashboard/marketing/email"
                className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <div>
                    <h3 className="font-medium">التسويق عبر البريد الإلكتروني</h3>
                    <p className="text-sm text-muted-foreground">إدارة حملات البريد الإلكتروني</p>
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
