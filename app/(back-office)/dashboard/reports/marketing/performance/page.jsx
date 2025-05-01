"use client"

import { useState } from "react"
import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FilterBar from "@/components/dashboard/FilterBar"
import LineChart from "@/components/dashboard/charts/LineChart"
import BarChart from "@/components/dashboard/charts/BarChart"
import DonutChart from "@/components/dashboard/charts/DonutChart"

export default function MarketingPerformancePage() {
  const [date, setDate] = useState({
    from: new Date(2025, 0, 1),
    to: new Date(),
  })

  // بيانات الرسم البياني لأداء الحملات
  const campaignPerformanceData = {
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
        label: "النقرات",
        data: [1200, 1500, 1800, 2100, 2400, 2700, 3000, 3300, 3600, 3900, 4200, 4500],
        borderColor: "rgba(99, 102, 241, 1)",
        backgroundColor: "rgba(99, 102, 241, 0.1)",
        fill: true,
      },
      {
        label: "التحويلات",
        data: [120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450],
        borderColor: "rgba(236, 72, 153, 1)",
        backgroundColor: "rgba(236, 72, 153, 0.1)",
        fill: true,
      },
    ],
  }

  // بيانات الرسم البياني لمعدل التحويل
  const conversionRateData = {
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
        label: "معدل التحويل",
        data: [2.5, 2.8, 3.0, 3.2, 3.5, 3.7, 3.8, 4.0, 4.2, 4.3, 4.5, 4.8],
        borderColor: "rgba(99, 102, 241, 1)",
        backgroundColor: "rgba(99, 102, 241, 0.1)",
        fill: true,
      },
    ],
  }

  // بيانات الرسم البياني لمصادر الزيارات
  const trafficSourcesData = {
    labels: ["محركات البحث", "وسائل التواصل", "الإعلانات المدفوعة", "البريد الإلكتروني", "الإحالات", "مباشر"],
    datasets: [
      {
        label: "مصادر الزيارات",
        data: [35, 25, 20, 10, 5, 5],
        backgroundColor: [
          "rgba(99, 102, 241, 0.8)",
          "rgba(236, 72, 153, 0.8)",
          "rgba(16, 185, 129, 0.8)",
          "rgba(245, 158, 11, 0.8)",
          "rgba(6, 182, 212, 0.8)",
          "rgba(148, 163, 184, 0.8)",
        ],
        borderWidth: 1,
      },
    ],
  }

  // بيانات الرسم البياني لأداء القنوات
  const channelPerformanceData = {
    labels: ["فيسبوك", "انستغرام", "تويتر", "جوجل", "يوتيوب", "تيك توك"],
    datasets: [
      {
        label: "النقرات",
        data: [1200, 1500, 800, 2100, 900, 1300],
        backgroundColor: "rgba(99, 102, 241, 0.8)",
        borderColor: "rgba(99, 102, 241, 1)",
        borderWidth: 1,
      },
      {
        label: "التحويلات",
        data: [120, 150, 80, 210, 90, 130],
        backgroundColor: "rgba(236, 72, 153, 0.8)",
        borderColor: "rgba(236, 72, 153, 1)",
        borderWidth: 1,
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
            <Link href="/dashboard/marketing">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">رجوع</span>
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">تحليل الأداء التسويقي</h1>
            <p className="text-muted-foreground">تحليل أداء الحملات التسويقية والقنوات</p>
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
        searchPlaceholder="بحث في الحملات..."
        filters={[
          {
            id: "campaign",
            label: "الحملة",
            placeholder: "جميع الحملات",
            options: [
              { label: "جميع الحملات", value: "all" },
              { label: "حملة العيد", value: "eid" },
              { label: "حملة رمضان", value: "ramadan" },
              { label: "حملة الصيف", value: "summer" },
              { label: "حملة العودة للمدارس", value: "back-to-school" },
            ],
            onChange: (value) => console.log("تغيير الحملة:", value),
          },
          {
            id: "channel",
            label: "القناة",
            placeholder: "جميع القنوات",
            options: [
              { label: "جميع القنوات", value: "all" },
              { label: "فيسبوك", value: "facebook" },
              { label: "انستغرام", value: "instagram" },
              { label: "تويتر", value: "twitter" },
              { label: "جوجل", value: "google" },
              { label: "يوتيوب", value: "youtube" },
            ],
            onChange: (value) => console.log("تغيير القناة:", value),
          },
        ]}
      />

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:w-auto">
          <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
          <TabsTrigger value="campaigns">الحملات</TabsTrigger>
          <TabsTrigger value="channels">القنوات</TabsTrigger>
          <TabsTrigger value="roi">العائد على الاستثمار</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>أداء الحملات</CardTitle>
                <CardDescription>النقرات والتحويلات على مدار العام</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart data={campaignPerformanceData} height={300} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>معدل التحويل</CardTitle>
                <CardDescription>معدل التحويل على مدار العام</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart data={conversionRateData} height={300} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>مصادر الزيارات</CardTitle>
                <CardDescription>توزيع مصادر الزيارات</CardDescription>
              </CardHeader>
              <CardContent>
                <DonutChart data={trafficSourcesData} height={300} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-6">
          {/* محتوى تبويب الحملات */}
          <Card>
            <CardHeader>
              <CardTitle>أداء الحملات</CardTitle>
              <CardDescription>تحليل أداء الحملات التسويقية</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground">سيتم إضافة بيانات أداء الحملات قريباً</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="channels" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>أداء القنوات</CardTitle>
                <CardDescription>مقارنة أداء القنوات التسويقية المختلفة</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart data={channelPerformanceData} height={300} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="roi" className="space-y-6">
          {/* محتوى تبويب العائد على الاستثمار */}
          <Card>
            <CardHeader>
              <CardTitle>العائد على الاستثمار</CardTitle>
              <CardDescription>تحليل العائد على الاستثمار للحملات التسويقية</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground">سيتم إضافة بيانات العائد على الاستثمار قريباً</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
