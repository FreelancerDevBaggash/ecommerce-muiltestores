// "use client"

// import { useState } from "react"
// import { ArrowLeft, ShoppingBag, TrendingUp, DollarSign, Percent } from "lucide-react"
// import { format } from "date-fns"
// import { ar } from "date-fns/locale"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import PageHeader from "@/components/dashboard/PageHeader"
// import FilterBar from "@/components/dashboard/FilterBar"
// import StatsCard from "@/components/dashboard/StatsCard"

// export default function SalesReportsPage() {
//   const [date, setDate] = useState({
//     from: new Date(2025, 0, 1), // يناير 1, 2025
//     to: new Date(2025, 3, 23), // أبريل 23, 2025
//   })
//   const [activeTab, setActiveTab] = useState("overview")
//   const [searchQuery, setSearchQuery] = useState("")

//   // بيانات إحصائية للعرض
//   const stats = [
//     {
//       title: "عدد الطلبات",
//       value: "1,248",
//       icon: ShoppingBag,
//       change: "+12.5%",
//       trend: "up",
//     },
//     {
//       title: "متوسط حجم السلات",
//       value: "320 ر.ي",
//       icon: ShoppingBag,
//       change: "+3.2%",
//       trend: "up",
//     },
//     {
//       title: "اجمالي المبيعات (شامل القيمة المضافة)",
//       value: "398,540 ر.ي",
//       icon: TrendingUp,
//       change: "+18.3%",
//       trend: "up",
//     },
//     {
//       title: "صافي الإيرادات (شامل القيمة المضافة)",
//       value: "356,780 ر.ي",
//       icon: DollarSign,
//       change: "+15.7%",
//       trend: "up",
//     },
//     {
//       title: "تكلفة السلع المباعة (غير شامل القيمة المضافة)",
//       value: "198,320 ر.ي",
//       icon: DollarSign,
//       change: "+8.4%",
//       trend: "up",
//     },
//     {
//       title: "الخصم",
//       value: "41,760 ر.ي",
//       icon: Percent,
//       change: "-2.3%",
//       trend: "down",
//     },
//   ]

//   // بيانات جدول المبيعات
//   const salesData = [
//     {
//       id: 1,
//       date: "2025-04-20",
//       channel: "متجر إلكتروني",
//       store: "المتجر الرئيسي",
//       orders: 42,
//       revenue: 15680,
//       discount: 1200,
//       netRevenue: 14480,
//     },
//     {
//       id: 2,
//       date: "2025-04-19",
//       channel: "تطبيق الجوال",
//       store: "المتجر الرئيسي",
//       orders: 38,
//       revenue: 12450,
//       discount: 980,
//       netRevenue: 11470,
//     },
//     {
//       id: 3,
//       date: "2025-04-18",
//       channel: "متجر إلكتروني",
//       store: "الفرع الثاني",
//       orders: 29,
//       revenue: 9870,
//       discount: 750,
//       netRevenue: 9120,
//     },
//     {
//       id: 4,
//       date: "2025-04-17",
//       channel: "تطبيق الجوال",
//       store: "الفرع الثاني",
//       orders: 35,
//       revenue: 11230,
//       discount: 890,
//       netRevenue: 10340,
//     },
//     {
//       id: 5,
//       date: "2025-04-16",
//       channel: "متجر إلكتروني",
//       store: "المتجر الرئيسي",
//       orders: 41,
//       revenue: 14980,
//       discount: 1100,
//       netRevenue: 13880,
//     },
//   ]

//   // تعريف عوامل التصفية
//   const filters = [
//     {
//       id: "salesChannel",
//       label: "قنوات البيع",
//       placeholder: "جميع القنوات",
//       defaultValue: "all",
//       onChange: (value) => console.log("تم اختيار قناة البيع:", value),
//       options: [
//         { label: "جميع القنوات", value: "all" },
//         { label: "متجر إلكتروني", value: "website" },
//         { label: "تطبيق الجوال", value: "app" },
//         { label: "نقاط البيع", value: "pos" },
//       ],
//     },
//     {
//       id: "store",
//       label: "المخازن",
//       placeholder: "جميع المخازن",
//       defaultValue: "all",
//       onChange: (value) => console.log("تم اختيار المخزن:", value),
//       options: [
//         { label: "جميع المخازن", value: "all" },
//         { label: "المتجر الرئيسي", value: "main" },
//         { label: "الفرع الأول", value: "branch1" },
//         { label: "الفرع الثاني", value: "branch2" },
//       ],
//     },
//   ]

//   const handleSearch = (query) => {
//     setSearchQuery(query)
//     console.log("بحث عن:", query)
//   }

//   const handleExport = () => {
//     console.log("تصدير البيانات...")
//     // يمكن إضافة منطق التصدير هنا
//   }

//   return (
//     <div dir="rtl">
//       <PageHeader
//         title="تقارير المبيعات"
//         description="آخر تحديث في أبريل 23, 2025 - 12:00 ص"
//         backLink="/dashboard/reports"
//         backIcon={ArrowLeft}
//       />

//       {/* شريط التصفية */}
//       <FilterBar
//         date={date}
//         setDate={setDate}
//         onSearch={handleSearch}
//         onExport={handleExport}
//         filters={filters}
//         searchPlaceholder="بحث في التقارير..."
//       />

//       {/* بطاقات الإحصائيات */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//         {stats.map((stat, index) => (
//           <StatsCard
//             key={index}
//             title={stat.title}
//             value={stat.value}
//             icon={stat.icon}
//             change={stat.change}
//             trend={stat.trend}
//           />
//         ))}
//       </div>

//       {/* علامات التبويب للتقارير */}
//       <Tabs defaultValue="overview" className="mb-6" onValueChange={setActiveTab}>
//         <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-4">
//           <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
//           <TabsTrigger value="products">المنتجات</TabsTrigger>
//           <TabsTrigger value="categories">التصنيفات</TabsTrigger>
//           <TabsTrigger value="coupons">قسائم الخصم</TabsTrigger>
//           <TabsTrigger value="cities">المدن</TabsTrigger>
//           <TabsTrigger value="payment">وسائل الدفع</TabsTrigger>
//         </TabsList>

//         <TabsContent
//           value="overview"
//           className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4"
//         >
//           <h3 className="text-lg font-semibold mb-4">تقرير المبيعات اليومي</h3>
//           <div className="overflow-x-auto">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead className="text-right">التاريخ</TableHead>
//                   <TableHead className="text-right">القناة</TableHead>
//                   <TableHead className="text-right">المتجر</TableHead>
//                   <TableHead className="text-right">عدد الطلبات</TableHead>
//                   <TableHead className="text-right">إجمالي المبيعات</TableHead>
//                   <TableHead className="text-right">الخصم</TableHead>
//                   <TableHead className="text-right">صافي المبيعات</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {salesData.map((row) => (
//                   <TableRow key={row.id}>
//                     <TableCell>{format(new Date(row.date), "d MMMM, yyyy", { locale: ar })}</TableCell>
//                     <TableCell>{row.channel}</TableCell>
//                     <TableCell>{row.store}</TableCell>
//                     <TableCell>{row.orders}</TableCell>
//                     <TableCell>{row.revenue.toLocaleString("ar-SA")} ر.ي</TableCell>
//                     <TableCell>{row.discount.toLocaleString("ar-SA")} ر.ي</TableCell>
//                     <TableCell>{row.netRevenue.toLocaleString("ar-SA")} ر.ي</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         </TabsContent>

//         <TabsContent
//           value="products"
//           className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4"
//         >
//           <div className="flex items-center justify-center h-40">
//             <p className="text-slate-500 dark:text-slate-400">سيتم عرض تقارير المنتجات هنا</p>
//           </div>
//         </TabsContent>

//         <TabsContent
//           value="categories"
//           className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4"
//         >
//           <div className="flex items-center justify-center h-40">
//             <p className="text-slate-500 dark:text-slate-400">سيتم عرض تقارير التصنيفات هنا</p>
//           </div>
//         </TabsContent>

//         <TabsContent
//           value="coupons"
//           className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4"
//         >
//           <div className="flex items-center justify-center h-40">
//             <p className="text-slate-500 dark:text-slate-400">سيتم عرض تقارير قسائم الخصم هنا</p>
//           </div>
//         </TabsContent>

//         <TabsContent
//           value="cities"
//           className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4"
//         >
//           <div className="flex items-center justify-center h-40">
//             <p className="text-slate-500 dark:text-slate-400">سيتم عرض تقارير المدن هنا</p>
//           </div>
//         </TabsContent>

//         <TabsContent
//           value="payment"
//           className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4"
//         >
//           <div className="flex items-center justify-center h-40">
//             <p className="text-slate-500 dark:text-slate-400">سيتم عرض تقارير وسائل الدفع هنا</p>
//           </div>
//         </TabsContent>
//       </Tabs>
//     </div>
//   )
// }
"use client"
"use client"

// import { useState, useEffect } from "react"
// import { ArrowLeft, ShoppingBag, ShoppingCart, TrendingUp, DollarSign, Percent, Loader2, Box } from "lucide-react"
// import { format } from "date-fns"
// import { ar } from "date-fns/locale"

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import PageHeader from "@/components/dashboard/PageHeader"
// import FilterBar from "@/components/dashboard/FilterBar"
// import StatsCard from "@/components/dashboard/StatsCard"
// import { getData } from "../../../../../lib/getData"

// export default function SalesReportsPage() {
//   const [date, setDate] = useState({
//     from: new Date(new Date().setDate(new Date().getDate() - 30)),
//     to: new Date(),
//   })
//   const [activeTab, setActiveTab] = useState("overview")
//   const [searchQuery, setSearchQuery] = useState("")
//   const [stats, setStats] = useState([])
//   const [salesData, setSalesData] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [filters, setFilters] = useState({
//     store: "all"
//   })

//   const loadData = async () => {
//     setLoading(true)
//     setError(null)
//     try {
//       const params = new URLSearchParams({
//         from: date.from.toISOString(),
//         to: date.to.toISOString(),
//         ...(filters.store !== "all" && { store: filters.store }),
//         ...(searchQuery && { search: searchQuery })
//       })
//       const data = await getData(`/sales/reports?${params.toString()}`)

//       setStats([
//         {
//           title: "عدد الطلبات",
//           value: (data.totalOrders ?? 0).toLocaleString('ar-SA'),
//           icon: ShoppingBag,
//           change: `${data.ordersChange > 0 ? '+' : ''}${data.ordersChange ?? 0}%`,
//           trend: data.ordersChange > 0 ? 'up' : data.ordersChange < 0 ? 'down' : 'neutral',
//         },
//         {
//           title: "عدد المنتجات",
//           value: (data.totalItems ?? 0).toLocaleString('ar-SA'),
//           icon: Box,
//           change: `${data.salesChange > 0 ? '+' : ''}${data.salesChange ?? 0}%`,
//           trend: data.salesChange > 0 ? 'up' : data.salesChange < 0 ? 'down' : 'neutral',
//         },
//         {
//           title: "متوسط حجم السلة",
//           value: `${(data.averageOrderValue ?? 0).toLocaleString('ar-SA', { maximumFractionDigits: 2 })} ر.ي`,
//           icon: ShoppingCart,
//           change: `${data.aovChange > 0 ? '+' : ''}${data.aovChange ?? 0}%`,
//           trend: data.aovChange > 0 ? 'up' : data.aovChange < 0 ? 'down' : 'neutral',
//         },
//         {
//           title: "إجمالي المبيعات",
//           value: `${(data.totalSales ?? 0).toLocaleString('ar-SA')} ر.ي`,
//           icon: TrendingUp,
//           change: `${data.salesChange > 0 ? '+' : ''}${data.salesChange ?? 0}%`,
//           trend: data.salesChange > 0 ? 'up' : data.salesChange < 0 ? 'down' : 'neutral',
//         },
//         {
//           title: "صافي الإيرادات",
//           value: `${(data.netRevenue ?? 0).toLocaleString('ar-SA')} ر.ي`,
//           icon: DollarSign,
//           change: `${data.revenueChange > 0 ? '+' : ''}${data.revenueChange ?? 0}%`,
//           trend: data.revenueChange > 0 ? 'up' : data.revenueChange < 0 ? 'down' : 'neutral',
//         },
//         {
//           title: "متوسط منتجات/طلب",
//           value: (data.averageItemsPerOrder ?? 0).toLocaleString('ar-SA', { maximumFractionDigits: 1 }),
//           icon: ShoppingCart,
//           change: `${data.salesChange > 0 ? '+' : ''}${data.salesChange ?? 0}%`,
//           trend: data.salesChange > 0 ? 'up' : data.salesChange < 0 ? 'down' : 'neutral',
//         },
//         {
//           title: "تكلفة السلع المباعة",
//           value: `${(data.cogs ?? 0).toLocaleString('ar-SA')} ر.ي`,
//           icon: DollarSign,
//           change: `${data.cogsChange > 0 ? '+' : ''}${data.cogsChange ?? 0}%`,
//           trend: data.cogsChange > 0 ? 'up' : data.cogsChange < 0 ? 'down' : 'neutral',
//         },
//       ])
      
//       setSalesData(data.dailySales ?? [])
//     } catch (err) {
//       setError(err.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     loadData()
//   }, [date, filters, searchQuery])

//   const handleSearch = (query) => setSearchQuery(query)

//   const handleExport = async () => {
//     try {
//       const params = new URLSearchParams({
//         from: date.from.toISOString(),
//         to: date.to.toISOString(),
//       })
//       const url = `/sales/reports/export?${params.toString()}`
//       const response = await fetch(url)
//       const blob = await response.blob()
//       const downloadUrl = window.URL.createObjectURL(blob)
//       const a = document.createElement('a')
//       a.href = downloadUrl
//       a.download = `تقرير-المبيعات-${format(date.from, 'yyyy-MM-dd')}-${format(date.to, 'yyyy-MM-dd')}.xlsx`
//       document.body.appendChild(a)
//       a.click()
//       a.remove()
//     } catch (err) {
//       console.error('فشل التصدير:', err)
//     }
//   }

//   const filterOptions = [
//     {
//       id: "store",
//       label: "المتاجر",
//       placeholder: "جميع المتاجر",
//       defaultValue: "all",
//       onChange: v => setFilters(f => ({ ...f, store: v })),
//       options: [
//         { label: "جميع المتاجر", value: "all" },
//         // يمكن إضافة المتاجر الفعلية هنا
//       ],
//     }
//   ]

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <Loader2 className="h-8 w-8 animate-spin" />
//         <p className="mr-2">جاري تحميل البيانات...</p>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-red-500">حدث خطأ: {error}</p>
//       </div>
//     )
//   }

//   return (
//     <div dir="rtl" className="p-4 md:p-6">
//       <PageHeader
//         title="تقارير المبيعات"
//         description={`آخر تحديث في ${format(new Date(), "d MMMM, yyyy - h:mm a", { locale: ar })}`}
//         backLink="/dashboard/reports"
//         backIcon={ArrowLeft}
//       />

//       <FilterBar
//         date={date}
//         setDate={setDate}
//         onSearch={handleSearch}
//         onExport={handleExport}
//         filters={filterOptions}
//         searchPlaceholder="ابحث بالتاريخ أو رقم الفاتورة..."
//       />

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 mt-6">
//         {stats.map((stat, idx) => (
//           <StatsCard key={idx} {...stat} loading={loading} />
//         ))}
//       </div>

//       <Tabs defaultValue="overview" className="mb-6" onValueChange={setActiveTab}>
//         <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-4">
//           {["overview","products","categories","customers","cities","payment"].map(tab => (
//             <TabsTrigger key={tab} value={tab}>
//               {{
//                 overview: "نظرة عامة",
//                 products: "المنتجات",
//                 categories: "التصنيفات",
//                 customers: "العملاء",
//                 cities: "المدن",
//                 payment: "وسائل الدفع"
//               }[tab]}
//             </TabsTrigger>
//           ))}
//         </TabsList>

//         <TabsContent value="overview">
//           <div className="bg-white dark:bg-slate-900 border rounded-lg p-4">
//             <h3 className="text-lg font-semibold mb-4">مبيعات حسب الأيام</h3>
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>التاريخ</TableHead>
//                   <TableHead>المتجر</TableHead>
//                   <TableHead>عدد الطلبات</TableHead>
//                   <TableHead>عدد المنتجات</TableHead>
//                   <TableHead>المبيعات</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {salesData.map(row => (
//                   <TableRow key={row.id}>
//                     <TableCell>{format(new Date(row.date), 'yyyy-MM-dd')}</TableCell>
//                     <TableCell>{row.store}</TableCell>
//                     <TableCell>{row.orders.toLocaleString('ar-SA')}</TableCell>
//                     <TableCell>{row.items.toLocaleString('ar-SA')}</TableCell>
//                     <TableCell>{row.revenue.toLocaleString('ar-SA')} ر.ي</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         </TabsContent>

//         {['products', 'categories', 'customers', 'cities', 'payment'].map((tab) => (
//   <TabsContent key={tab} value={tab}>
//     <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4">
//       <div className="flex items-center justify-center h-40">
//         <p className="text-slate-500 dark:text-slate-400">
//           سيتم عرض تقارير&nbsp;
//           {tab === 'products' && 'المنتجات'}
//           {tab === 'categories' && 'التصنيفات'}
//           {tab === 'customers' && 'العملاء'}
//           {tab === 'cities' && 'المدن'}
//           {tab === 'payment' && 'وسائل الدفع'}
//           &nbsp;هنا
//         </p>
//       </div>
//     </div>
//   </TabsContent>
// ))}

//       </Tabs>
//     </div>
//   )
// }
import { useState, useEffect } from "react"
import { ArrowLeft, ShoppingBag, ShoppingCart, TrendingUp, DollarSign, Percent, Loader2, Box, Users, MapPin, CreditCard } from "lucide-react"
import { format } from "date-fns"
import { ar } from "date-fns/locale"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import PageHeader from "@/components/dashboard/PageHeader"
import FilterBar from "@/components/dashboard/FilterBar"
import StatsCard from "@/components/dashboard/StatsCard"
import { getData } from "../../../../../lib/getData"

export default function SalesReportsPage() {
  const [date, setDate] = useState({
    from: new Date(new Date().setDate(new Date().getDate() - 30)),
    to: new Date(),
  })
  const [activeTab, setActiveTab] = useState("overview")
  const [searchQuery, setSearchQuery] = useState("")
  const [stats, setStats] = useState([])
  const [salesData, setSalesData] = useState([])
  const [productsData, setProductsData] = useState([])
  const [categoriesData, setCategoriesData] = useState([])
  const [customersData, setCustomersData] = useState([])
  const [citiesData, setCitiesData] = useState([])
  const [paymentMethodsData, setPaymentMethodsData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filters, setFilters] = useState({
    store: "all"
  })

  const loadData = async () => {
    setLoading(true)
    setError(null)
    try {
      const params = new URLSearchParams({
        from: date.from.toISOString(),
        to: date.to.toISOString(),
        ...(filters.store !== "all" && { store: filters.store }),
        ...(searchQuery && { search: searchQuery })
      })
      const data = await getData(`/sales/reports?${params.toString()}`)

      setStats([
        {
          title: "عدد الطلبات",
          value: (data.totalOrders ?? 0).toLocaleString('ar-SA'),
          icon: ShoppingBag,
          change: `${data.ordersChange > 0 ? '+' : ''}${data.ordersChange ?? 0}%`,
          trend: data.ordersChange > 0 ? 'up' : data.ordersChange < 0 ? 'down' : 'neutral',
        },
        {
          title: "عدد المنتجات",
          value: (data.totalItems ?? 0).toLocaleString('ar-SA'),
          icon: Box,
          change: `${data.salesChange > 0 ? '+' : ''}${data.salesChange ?? 0}%`,
          trend: data.salesChange > 0 ? 'up' : data.salesChange < 0 ? 'down' : 'neutral',
        },
        {
          title: "متوسط حجم السلة",
          value: `${(data.averageOrderValue ?? 0).toLocaleString('ar-SA', { maximumFractionDigits: 2 })} ر.ي`,
          icon: ShoppingCart,
          change: `${data.aovChange > 0 ? '+' : ''}${data.aovChange ?? 0}%`,
          trend: data.aovChange > 0 ? 'up' : data.aovChange < 0 ? 'down' : 'neutral',
        },
        {
          title: "إجمالي المبيعات",
          value: `${(data.totalSales ?? 0).toLocaleString('ar-SA')} ر.ي`,
          icon: TrendingUp,
          change: `${data.salesChange > 0 ? '+' : ''}${data.salesChange ?? 0}%`,
          trend: data.salesChange > 0 ? 'up' : data.salesChange < 0 ? 'down' : 'neutral',
        },
        {
          title: "صافي الإيرادات",
          value: `${(data.netRevenue ?? 0).toLocaleString('ar-SA')} ر.ي`,
          icon: DollarSign,
          change: `${data.revenueChange > 0 ? '+' : ''}${data.revenueChange ?? 0}%`,
          trend: data.revenueChange > 0 ? 'up' : data.revenueChange < 0 ? 'down' : 'neutral',
        },
        {
          title: "متوسط منتجات/طلب",
          value: (data.averageItemsPerOrder ?? 0).toLocaleString('ar-SA', { maximumFractionDigits: 1 }),
          icon: ShoppingCart,
          change: `${data.salesChange > 0 ? '+' : ''}${data.salesChange ?? 0}%`,
          trend: data.salesChange > 0 ? 'up' : data.salesChange < 0 ? 'down' : 'neutral',
        },
        {
          title: "تكلفة السلع المباعة",
          value: `${(data.cogs ?? 0).toLocaleString('ar-SA')} ر.ي`,
          icon: DollarSign,
          change: `${data.cogsChange > 0 ? '+' : ''}${data.cogsChange ?? 0}%`,
          trend: data.cogsChange > 0 ? 'up' : data.cogsChange < 0 ? 'down' : 'neutral',
        },
      ])
      
      setSalesData(data.dailySales ?? [])
      setProductsData(data.products ?? [])
      setCategoriesData(data.categories ?? [])
      setCustomersData(data.customers ?? [])
      setCitiesData(data.cities ?? [])
      setPaymentMethodsData(data.paymentMethods ?? [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [date, filters, searchQuery])

  const handleSearch = (query) => setSearchQuery(query)

  const handleExport = async () => {
    try {
      const params = new URLSearchParams({
        from: date.from.toISOString(),
        to: date.to.toISOString(),
      })
      const url = `/sales/reports/export?${params.toString()}`
      const response = await fetch(url)
      const blob = await response.blob()
      const downloadUrl = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = downloadUrl
      a.download = `تقرير-المبيعات-${format(date.from, 'yyyy-MM-dd')}-${format(date.to, 'yyyy-MM-dd')}.xls`
      document.body.appendChild(a)
      a.click()
      a.remove()
    } catch (err) {
      console.error('فشل التصدير:', err)
    }
  }

  const filterOptions = [
    {
      id: "store",
      label: "المتاجر",
      placeholder: "جميع المتاجر",
      defaultValue: "all",
      onChange: v => setFilters(f => ({ ...f, store: v })),
      options: [
        { label: "جميع المتاجر", value: "all" },
        // يمكن إضافة المتاجر الفعلية هنا
      ],
    }
  ]

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="mr-2">جاري تحميل البيانات...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">حدث خطأ: {error}</p>
      </div>
    )
  }

  return (
    <div dir="rtl" className="p-4 md:p-6">
      <PageHeader
        title="تقارير المبيعات"
        description={`آخر تحديث في ${format(new Date(), "d MMMM, yyyy - h:mm a", { locale: ar })}`}
        backLink="/dashboard/reports"
        backIcon={ArrowLeft}
      />

      <FilterBar
        date={date}
        setDate={setDate}
        onSearch={handleSearch}
        onExport={handleExport}
        filters={filterOptions}
        searchPlaceholder="ابحث بالتاريخ أو رقم الفاتورة..."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 mt-6">
        {stats.map((stat, idx) => (
          <StatsCard key={idx} {...stat} loading={loading} />
        ))}
      </div>

      <Tabs  defaultValue="overview" className="mb-6" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-4">
          {["overview",].map(tab => (
            <TabsTrigger key={tab} value={tab}>
              {{
                overview: "نظرة عامة",
               
              }[tab]}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="overview">
          <div dir="rtl" className="bg-white dark:bg-slate-900 border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">مبيعات حسب الأيام</h3>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>التاريخ</TableHead>
                  <TableHead>المتجر</TableHead>
                  <TableHead>عدد الطلبات</TableHead>
                  <TableHead>عدد المنتجات</TableHead>
                  <TableHead>المبيعات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {salesData.map(row => (
                  <TableRow key={row.id}>
                    <TableCell>{format(new Date(row.date), 'yyyy-MM-dd')}</TableCell>
                    <TableCell>{row.store}</TableCell>
                    <TableCell>{row.orders.toLocaleString('ar-SA')}</TableCell>
                    <TableCell>{row.items.toLocaleString('ar-SA')}</TableCell>
                    <TableCell>{row.revenue.toLocaleString('ar-SA')} ر.ي</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

     

    
    
    
      </Tabs>
    </div>
  )
}