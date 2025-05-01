"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, CreditCard, TrendingUp, DollarSign, BarChart2, PieChart, FileText, Download } from "lucide-react"
import { format } from "date-fns"
import { ar } from "date-fns/locale"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/dashboard/PageHeader"
import FilterBar from "@/components/dashboard/FilterBar"
import StatsCard from "@/components/dashboard/StatsCard"
import RevenueChart from "@/components/dashboard/charts/RevenueChart"
import ExpenseChart from "@/components/dashboard/charts/ExpenseChart"
import ProfitChart from "@/components/dashboard/charts/ProfitChart"
import { useSession } from "next-auth/react"
import { toast } from "react-hot-toast"
import { getData } from '@/lib/getData'

export default function FinancialReportsPage() {
  const router = useRouter()
  const { data: session,  sessionStatus } = useSession()
  const [storeId, setStoreId] = useState(null)
  const [isStoreLoading, setIsStoreLoading] = useState(true)
  
  // جلب بيانات المتجر عند تحميل الصفحة
  useEffect(() => {
    const fetchUserStore = async () => {
      setIsStoreLoading(true)
      try {
    

        const storeData = await getData(`stores?vendorId=${session.user.id}`)
        
        if (storeData?.length > 0) {
          setStoreId(storeData[0].id)
        } else {
          router.push("/dashboard")
          toast.error("لا يوجد متجر مرتبط بحسابك")
        }
      } catch (error) {
        console.error("Failed to fetch user store:", error)
        toast.error(`فشل في جلب بيانات المتجر: ${error.message}`)
      } finally {
        setIsStoreLoading(false)
      }
    }

    if (sessionStatus !== "loading") fetchUserStore()
  }, [session, sessionStatus, router])

  const [date, setDate] = useState({
    from: new Date(new Date().setMonth(new Date().getMonth() - 3)), 
    to:   new Date(),
  });
  
  const [activeTab, setActiveTab] = useState("overview")
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(true)
  const [timeRange, setTimeRange] = useState("month")
  const [overviewData, setOverviewData] = useState(null)
  const [revenueData, setRevenueData] = useState([])
  const [expenseData, setExpenseData] = useState([])
  const [profitData, setProfitData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  useEffect(() => {
    if (!storeId || isStoreLoading) return
  
    const fetchFinancialData = async () => {
      setLoading(true)
      try {
        const params = new URLSearchParams({
          storeId,
          search: searchQuery,
          categoryId: selectedCategory,
          status: selectedStatus,
          from: date.from.toISOString(),
          to: date.to.toISOString(),
          granularity: timeRange
        })
  
        const financialData = await getData(`financial?${params}`)
        
        if (financialData.success) {
          setOverviewData(financialData.data.overview)
          setRevenueData(financialData.data.revenue)
          setExpenseData(financialData.data.expenses)
          setProfitData(financialData.data.profit)
        }
      } catch (error) {
        toast.error(`خطأ في جلب البيانات: ${error.message}`)
      } finally {
        setLoading(false)
      }
    }
  
    fetchFinancialData()
  }, [date, timeRange, storeId, searchQuery, selectedCategory, selectedStatus, isStoreLoading])
  const handleExport = async (type) => {
    try {
      const params = new URLSearchParams({
        storeId,
        type,
        search: searchQuery,
        category: selectedCategory,
        status: selectedStatus,
        from: date.from.toISOString(),
        to: date.to.toISOString(),
        granularity: timeRange,
      })
  
      const response = await fetch(`/api/financial/export?${params}`)
      
      if (!response.ok) throw new Error('فشل في التصدير')
      
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `تقرير_مالي_${type}_${format(new Date(), 'yyyy-MM-dd')}.xlsx`
      document.body.appendChild(a)
      a.click()
      a.remove()
      
      toast.success("تم التصدير بنجاح")
    } catch (error) {
      toast.error(`فشل التصدير: ${error.message}`)
    }
  }


  const filters = [

    {
      id: "status",
      label: "حالة الدفع",
      options: [
        { label: "جميع الحالات", value: "all" },
        { label: "مكتمل", value: "completed" },
        { label: "معلق", value: "pending" }
      ],
      value: selectedStatus,
      onChange: (value) => setSelectedStatus(value)
    }
  ]

  const stats = [
    {
      title: "إجمالي الإيرادات",
      value: overviewData ? `${overviewData.totalRevenue?.toLocaleString('ar-SA')} ر.ي` : "0 ر.ي",
      icon: TrendingUp,
      change: "+18.3%",
      trend: "up",
    },
    {
      title: "صافي الأرباح",
      value: overviewData ? `${overviewData.netProfit?.toLocaleString('ar-SA')} ر.ي` : "0 ر.ي",
      icon: DollarSign,
      change: "+15.7%",
      trend: "up",
    },
    {
      title: "الطلبات",
      value: overviewData ? overviewData.totalOrders?.toLocaleString('ar-SA') : "0",
      icon: CreditCard,
      change: "+12.5%",
      trend: "up",
    },
    {
      title: "إجمالي المصروفات",
      value: overviewData ? `${overviewData.totalExpenses?.toLocaleString('ar-SA')} ر.ي` : "0 ر.ي",
      icon: BarChart2,
      change: "+9.2%",
      trend: "up",
    },
  ]

  if (isStoreLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  return (
    <div dir="rtl">
      <PageHeader
        title="التقارير المالية والمدفوعات"
        description={date?.to ? format(new Date(date.to), 'MMMM d, yyyy - h:mm a', { locale: ar }) : 'غير محدد'}
        backLink={`/dashboard/${storeId}`}
        backIcon={ArrowLeft}
      />

      <FilterBar
        date={date}
        setDate={setDate}
        onSearch={setSearchQuery}
        filters={filters}
        searchPlaceholder="بحث في المدفوعات..."
      >
        <div className="flex items-center gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="الفترة" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">يومي</SelectItem>
              <SelectItem value="week">أسبوعي</SelectItem>
              <SelectItem value="month">شهري</SelectItem>
              <SelectItem value="year">سنوي</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={() => handleExport(activeTab)} variant="outline">
            <Download className="h-4 w-4 mr-2" />
            تصدير
          </Button>
        </div>
      </FilterBar>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            change={stat.change}
            trend={stat.trend}
            loading={loading}
          />
        ))}
      </div>

      <Tabs defaultValue="overview" className="mb-6" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4">
          <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
          <TabsTrigger value="revenue">الإيرادات</TabsTrigger>
          <TabsTrigger value="expenses">المصروفات</TabsTrigger>
          <TabsTrigger value="profit">الأرباح</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>ملخص الأداء المالي</CardTitle>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => handleExport('overview')}>
                    <Download className="h-4 w-4" />
                    تصدير
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <RevenueChart data={revenueData} loading={loading} />
                  <ExpenseChart data={expenseData} loading={loading} />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="revenue">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>تحليل الإيرادات</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2" onClick={() => handleExport('revenue')}>
                      <Download className="h-4 w-4" />
                      تصدير
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <RevenueChart data={revenueData} detailed loading={loading} />
                <Table className="mt-6">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-right">الفترة</TableHead>
                      <TableHead className="text-right">الإيرادات الكلية</TableHead>
                      <TableHead className="text-right">المبيعات الإلكترونية</TableHead>
                      <TableHead className="text-right">المبيعات النقدية</TableHead>
                      <TableHead className="text-right">النمو</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loading ? (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-4">
                          جاري تحميل البيانات...
                        </TableCell>
                      </TableRow>
                    ) : revenueData.length > 0 ? (
                      revenueData.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.date}</TableCell>
                          <TableCell>{item.total?.toLocaleString('ar-SA')} ر.ي</TableCell>
                          <TableCell>{item.online?.toLocaleString('ar-SA')} ر.ي</TableCell>
                          <TableCell>{item.cash?.toLocaleString('ar-SA')} ر.ي</TableCell>
                          <TableCell>
                            <span className="text-green-600 dark:text-green-400">
                              {index > 0 ? 
                                `${Math.round(((item.total - revenueData[index-1].total) / revenueData[index-1].total * 100))}%` 
                                : '0%'}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-4">
                          لا توجد بيانات متاحة
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="expenses">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>تحليل المصروفات</CardTitle>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => handleExport('expenses')}>
                    <Download className="h-4 w-4" />
                    تصدير
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <ExpenseChart data={expenseData} loading={loading} />
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-right">الفئة</TableHead>
                        <TableHead className="text-right">المبلغ</TableHead>
                        <TableHead className="text-right">النسبة</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {loading ? (
                        <TableRow>
                          <TableCell colSpan={3} className="text-center py-4">
                            جاري تحميل البيانات...
                          </TableCell>
                        </TableRow>
                      ) : expenseData.length > 0 ? (
                        expenseData.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>{item.category}</TableCell>
                            <TableCell>{item.amount?.toLocaleString('ar-SA')} ر.ي</TableCell>
                            <TableCell>{item.percentage}%</TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={3} className="text-center py-4">
                            لا توجد بيانات متاحة
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="profit">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>تحليل الأرباح</CardTitle>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => handleExport('profit')}>
                    <Download className="h-4 w-4" />
                    تصدير
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <ProfitChart data={profitData} loading={loading} />
                <Table className="mt-6">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-right">الشهر</TableHead>
                      <TableHead className="text-right">الإيرادات</TableHead>
                      <TableHead className="text-right">المصروفات</TableHead>
                      <TableHead className="text-right">الأرباح</TableHead>
                      <TableHead className="text-right">هامش الربح</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loading ? (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-4">
                          جاري تحميل البيانات...
                        </TableCell>
                      </TableRow>
                    ) : profitData.length > 0 ? (
                      profitData.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.month}</TableCell>
                          <TableCell>{item.revenue?.toLocaleString('ar-SA')} ر.ي</TableCell>
                          <TableCell>{item.expenses?.toLocaleString('ar-SA')} ر.ي</TableCell>
                          <TableCell>{item.profit?.toLocaleString('ar-SA')} ر.ي</TableCell>
                          <TableCell>
                            <span className={item.margin >= 30 ? "text-green-600 dark:text-green-400" : "text-amber-600 dark:text-amber-400"}>
                              {item.margin}%
                            </span>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-4">
                          لا توجد بيانات متاحة
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}