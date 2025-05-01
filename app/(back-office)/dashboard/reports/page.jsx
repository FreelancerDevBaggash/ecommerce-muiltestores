"use client"

import { useState } from "react"
import Link from "next/link"
import { BarChart3, Package, CreditCard, Users2, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/dashboard/PageHeader"

export default  function ReportsPage() {
  const [lastUpdated] = useState("أبريل 23, 2025 - 12:00 ص")

  const reportCategories = [
    {
      title: "تقارير المبيعات",
      description: "تحليل المبيعات والإيرادات والطلبات",
      icon: BarChart3,
      href: "/dashboard/reports/sales",
      isAvailable: true,
    },
    {
      title: "المخزون والمنتجات",
      description: "تقارير المخزون وأداء المنتجات",
      icon: Package,
      href: "/dashboard/reports/inventory",
      isAvailable: true,
    },
    {
      title: "المالية والمدفوعات",
      description: "تقارير المدفوعات والإيرادات",
      icon: CreditCard,
      href: "/dashboard/reports/financial",
      isAvailable: true,
    },
    {
      title: "العملاء",
      description: "تحليل بيانات العملاء والولاء",
      icon: Users2,
      href: "/dashboard/reports/customers",
      isAvailable: false,
    },
    {
      title: "التسويق",
      description: "تقارير الحملات التسويقية والأداء",
      icon: TrendingUp,
      href: "/dashboard/reports/marketing",
      isAvailable: false,
    },
  ]

  return (
    <div dir="rtl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <PageHeader title="التقارير" description={`آخر تحديث في ${lastUpdated}`} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportCategories.map((category, index) => (
          <Card
            key={index}
            className="overflow-hidden border border-slate-200 dark:border-slate-800 transition-all hover:shadow-md"
          >
            <CardHeader className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                  <category.icon className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <CardDescription className="mb-4">{category.description}</CardDescription>
              {category.isAvailable ? (
                <Button asChild className="w-full">
                  <Link href={category.href}>عرض التقارير</Link>
                </Button>
              ) : (
                <Button disabled className="w-full">
                  قريباً
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
