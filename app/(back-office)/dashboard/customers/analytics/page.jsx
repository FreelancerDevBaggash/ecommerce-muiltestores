"use client"

import { useState } from "react"
import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FilterBar from "@/components/dashboard/FilterBar"
import DonutChart from "@/components/dashboard/charts/DonutChart"
import BarChart from "@/components/dashboard/charts/BarChart"
import LineChart from "@/components/dashboard/charts/LineChart"

export default function CustomerAnalyticsPage() {
  const [date, setDate] = useState({
    from: new Date(2025, 0, 1),
    to: new Date(),
  })

  // بيانات الرسم البياني للفئات العمرية
  const ageGroupsData = {
    labels: ["18-24", "25-34", "35-44", "45-54", "55+"],
    datasets: [
      {
        label: "الفئات العمرية",
        data: [15, 35, 25, 18, 7],
        backgroundColor: [
          "rgba(99, 102, 241, 0.8)",
          "rgba(79, 70, 229, 0.8)",
          "rgba(67, 56, 202, 0.8)",
          "rgba(55, 48, 163, 0.8)",
          "rgba(49, 46, 129, 0.8)",
        ],
        borderWidth: 1,
      },
    ],
  }

  // بيانات الرسم البياني للجنس
  const genderData = {
    labels: ["ذكر", "أنثى", "غير محدد"],
    datasets: [
      {
        label: "الجنس",
        data: [55, 42, 3],
        backgroundColor: ["rgba(99, 102, 241, 0.8)", "rgba(236, 72, 153, 0.8)", "rgba(148, 163, 184, 0.8)"],
        borderWidth: 1,
      },
    ],
  }

  // بيانات الرسم البياني للمناطق
  const regionsData = {
    labels: ["الرياض", "جدة", "الدمام", "مكة", "المدينة", "أخرى"],
    datasets: [
      {
        label: "عدد العملاء",
        data: [350, 280, 190, 170, 150, 108],
        backgroundColor: "rgba(99, 102, 241, 0.8)",
        borderColor: "rgba(99, 102, 241, 1)",
        borderWidth: 1,
      },
    ],
  }

  // بيانات الرسم البياني لنمو العملاء
  const customerGrowthData = {
    labels: [
      "يناير",
      "فبراير",
      "مارس",
      "أبريل",
      "مايو",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "أكتوبر",
      "نوفمبر",
      "ديسمبر",
    ],
    datasets: [
      {
        label: "عملاء جدد",
        data: [65, 78, 90, 85, 92, 110, 120, 130, 145, 160, 175, 190],
        borderColor: "rgba(99, 102, 241, 1)",
        backgroundColor: "rgba(99, 102, 241, 0.1)",
        fill: true,
      },
      {
        label: "عملاء نشطون",
        data: [45, 55, 65, 70, 75, 85, 95, 100, 110, 120, 130, 140],
        borderColor: "rgba(236, 72, 153, 1)",
        backgroundColor: "rgba(236, 72, 153, 0.1)",
        fill: true,
      },
    ],
  }

  // بيانات الرسم البياني لمعدل الاحتفاظ
  const retentionRateData = {
    labels: [
      "يناير",
      "فبراير",
      "مارس",
      "أبريل",
      "مايو",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "أكتوبر",
      "نوفمبر",
      "ديسمبر",
    ],
    datasets: [
      {
        label: "معدل الاحتفاظ",
        data: [65, 68, 66, 70, 72, 75, 73, 76, 78, 80, 82, 85],
        borderColor: "rgba(99, 102, 241, 1)",
        backgroundColor: "rgba(99, 102, 241, 0.1)",
        fill: true,
      },
    ],
  }

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
            <h1 className="text-2xl font-bold tracking-tight">تحليل بيانات العملاء</h1>
            <p className="text-muted-foreground">تحليل سلوك العملاء والبيانات الديموغرافية</p>
          </div>
        </div>
        <Button variant="outline" className="gap-2" onClick={handleExport}>
          <Download className="h-4 w-4" />
          تصدير التقرير
        </Button>
      </div>

      <FilterBar
        date={date}
        setDate={setDate}
        searchPlaceholder="بحث في العملاء..."
        filters={[
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
          {
            id: "region",
            label: "المنطقة",
            placeholder: "جميع المناطق",
            options: [
              { label: "جميع المناطق", value: "all" },
              { label: "الرياض", value: "riyadh" },
              { label: "جدة", value: "jeddah" },
              { label: "الدمام", value: "dammam" },
              { label: "مكة", value: "makkah" },
            ],
            onChange: (value) => console.log("تغيير المنطقة:", value),
          },
        ]}
      />

      <Tabs defaultValue="demographics" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:w-auto">
          <TabsTrigger value="demographics">البيانات الديموغرافية</TabsTrigger>
          <TabsTrigger value="behavior">السلوك الشرائي</TabsTrigger>
          <TabsTrigger value="growth">النمو والاحتفاظ</TabsTrigger>
          <TabsTrigger value="segments">الشرائح</TabsTrigger>
        </TabsList>

        <TabsContent value="demographics" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>الفئات العمرية</CardTitle>
                <CardDescription>توزيع العملاء حسب الفئة العمرية</CardDescription>
              </CardHeader>
              <CardContent>
                <DonutChart data={ageGroupsData} height={300} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>الجنس</CardTitle>
                <CardDescription>توزيع العملاء حسب الجنس</CardDescription>
              </CardHeader>
              <CardContent>
                <DonutChart data={genderData} height={300} />
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>المناطق</CardTitle>
                <CardDescription>توزيع العملاء حسب المناطق</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart data={regionsData} height={300} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="behavior" className="space-y-6">
          {/* محتوى تبويب السلوك الشرائي */}
          <Card>
            <CardHeader>
              <CardTitle>السلوك الشرائي</CardTitle>
              <CardDescription>تحليل سلوك العملاء الشرائي</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground">سيتم إضافة بيانات السلوك الشرائي قريباً</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="growth" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>نمو العملاء</CardTitle>
                <CardDescription>نمو قاعدة العملاء على مدار العام</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart data={customerGrowthData} height={300} />
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>معدل الاحتفاظ</CardTitle>
                <CardDescription>معدل الاحتفاظ بالعملاء على مدار العام</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart data={retentionRateData} height={300} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="segments" className="space-y-6">
          {/* محتوى تبويب الشرائح */}
          <Card>
            <CardHeader>
              <CardTitle>شرائح العملاء</CardTitle>
              <CardDescription>تقسيم العملاء إلى شرائح مستهدفة</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground">سيتم إضافة بيانات شرائح العملاء قريباً</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
