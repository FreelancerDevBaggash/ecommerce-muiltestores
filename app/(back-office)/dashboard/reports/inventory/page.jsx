// "use client"

// import { useState, useEffect } from "react"
// import { useParams, useRouter } from "next/navigation"
// import { ArrowLeft, Package, AlertTriangle, TrendingUp, Download, Search } from "lucide-react"
// import { DateRange } from "react-day-picker"
// import { addDays, format } from "date-fns"
// import { ar } from "date-fns/locale"
// import { useSession } from "next-auth/react"

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Calendar } from "@/components/ui/calendar"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { Skeleton } from "@/components/ui/skeleton"
// import PageHeader from "@/components/dashboard/PageHeader"
// import StatsCard from "@/components/dashboard/StatsCard"

// export default function InventoryReportsPage() {
//   const { data: session, status: sessionStatus } = useSession()
//   const router = useRouter()
//   const params = useParams()

//   const [date, setDate] = useState({
//     from: addDays(new Date(), -30),
//     to: new Date(),
//   })
//   const [activeTab, setActiveTab] = useState("overview")
//   const [searchQuery, setSearchQuery] = useState("")
//   const [selectedCategory, setSelectedCategory] = useState("all")
//   const [selectedStatus, setSelectedStatus] = useState("all")
//   const [categories, setCategories] = useState([])
//   const [isLoading, setIsLoading] = useState(true)
//   const [inventoryData, setInventoryData] = useState([])
//   const [stats, setStats] = useState(null)
//   const [userStoreId, setUserStoreId] = useState(null)
//   const [storeLoading, setStoreLoading] = useState(true)

//   // جلب متجر المستخدم عند تحميل الصفحة
//   useEffect(() => {
//     const fetchUserStore = async () => {
//       if (sessionStatus === "loading") return
      
//       if (!session?.user?.id) {
//         router.push("/login")
//         return
//       }

//       try {
//         setStoreLoading(true)
//         const res = await fetch(`/api/stores?vendorId=${session.user.id}`)
        
//         if (!res.ok) {
//           throw new Error("Failed to fetch store data")
//         }

//         const storeData = await res.json()
        
//         if (storeData?.length > 0) {
//           setUserStoreId(storeData[0].id)
//         } else {
         
//           router.push("/dashboard/stores")
//         }
//       } catch (error) {
//         console.error("Failed to fetch user store:", error)
//         toast({
//           title: "خطأ",
//           description: "فشل في جلب بيانات المتجر",
//           variant: "destructive"
//         })
//       } finally {
//         setStoreLoading(false)
//       }
//     }

//     fetchUserStore()
//   }, [session, sessionStatus, router])

//   // جلب التصنيفات بعد تحديد المتجر
//   useEffect(() => {
//     if (!userStoreId) return
    
//     const fetchCategories = async () => {
//       try {
//         setIsLoading(true)
//         const response = await fetch(`/api/categories?storeId=${userStoreId}`)
        
//         if (!response.ok) {
//           throw new Error("Failed to fetch categories")
//         }

//         const data = await response.json()
//         setCategories(data || [])
//       } catch (error) {
//         console.error("Failed to fetch categories:", error)
       
//       } finally {
//         setIsLoading(false)
//       }
//     }
    
//     fetchCategories()
//   }, [userStoreId])

//   // جلب بيانات المخزون
//   useEffect(() => {
//     if (!userStoreId) return
    
//     const fetchInventoryData = async () => {
//       setIsLoading(true)
//       try {
//         const queryParams = new URLSearchParams()
//         queryParams.append('storeId', userStoreId)
//         if (searchQuery) queryParams.append('search', searchQuery)
//         if (selectedCategory !== 'all') queryParams.append('categoryId', selectedCategory)
//         if (selectedStatus !== 'all') queryParams.append('status', selectedStatus)
//         if (date.from) queryParams.append('startDate', date.from.toISOString())
//         if (date.to) queryParams.append('endDate', date.to.toISOString())

//         const response = await fetch(`/inventory/inventory?${queryParams.toString()}`)
        
//         if (!response.ok) {
//           throw new Error("Failed to fetch inventory data")
//         }

//         const data = await response.json()
        
//         setInventoryData(data.products || [])
//         setStats({
//           totalProducts: data.totalProducts || 0,
//           lowStockCount: data.lowStockCount || 0,
//           totalInventoryValue: data.totalInventoryValue || 0,
//           averageProductPrice: data.averageProductPrice || 0
//         })
//       } catch (error) {
//         console.error("Failed to fetch inventory data:", error)
        
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     fetchInventoryData()
//   }, [userStoreId, searchQuery, selectedCategory, selectedStatus, date, ])

//   // تعريف عوامل التصفية
//   const filters = [
//     {
//       id: "category",
//       label: "التصنيفات",
//       placeholder: "جميع التصنيفات",
//       defaultValue: "all",
//       onChange: (value) => setSelectedCategory(value),
//       options: [
//         { label: "جميع التصنيفات", value: "all" },
//         ...categories.map(cat => ({
//           label: cat.title,
//           value: cat.id
//         }))
//       ],
//     },
//     {
//       id: "status",
//       label: "حالة المخزون",
//       placeholder: "جميع الحالات",
//       defaultValue: "all",
//       onChange: (value) => setSelectedStatus(value),
//       options: [
//         { label: "جميع الحالات", value: "all" },
//         { label: "متوفر", value: "available" },
//         { label: "منخفض", value: "low" },
//         { label: "نفذ", value: "out" },
//       ],
//     },
//   ]

//   // دالة التصدير
//   const handleExport = async () => {
//     try {
//       const response = await fetch(`/api/inventory/export`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           type: activeTab,
//           storeId: userStoreId,
//           filters: {
//             searchQuery,
//             category: selectedCategory,
//             status: selectedStatus,
//             dateRange: date
//           }
//         })
//       })
      
//       const data = await response.json()
      
//       if (data.success) {
//         // تنزيل الملف
//         const link = document.createElement('a')
//         link.href = data.downloadUrl
//         link.download = `تقرير_المخزون_${format(new Date(), 'yyyy-MM-dd')}.xlsx`
//         document.body.appendChild(link)
//         link.click()
//         document.body.removeChild(link)
        
        
//       } else {
//         throw new Error(data.message || "فشل في التصدير")
//       }
//     } catch (error) {
//       console.error('فشل التصدير:', error)
     
//     }
//   }

//   if (sessionStatus === "loading" || storeLoading) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen gap-4">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" />
//         <p className="text-lg">جارٍ تحميل بيانات المتجر...</p>
//       </div>
//     )
//   }

//   if (!session) {
//     router.push("/login")
//     return null
//   }

//   if (!userStoreId && !storeLoading) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen gap-4">
//         <AlertTriangle className="h-12 w-12 text-yellow-500" />
//         <p className="text-lg">لا يوجد متجر مرتبط بحسابك</p>
//         <Button onClick={() => router.push("/dashboard/stores")}>
//           إنشاء متجر جديد
//         </Button>
//       </div>
//     )
//   }

//   return (
//     <div dir="rtl" className="space-y-6">
//       <PageHeader
//         title="تقارير المخزون والمنتجات"
//         description={`آخر تحديث في ${format(new Date(), 'PPPP', { locale: ar })}`}
//         backLink="/dashboard/reports"
//         backIcon={ArrowLeft}
//       />

//       {/* شريط التصفية والبحث */}
//       <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//         <div className="relative w-full md:w-1/3">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//           <Input
//             placeholder="ابحث في المنتجات..."
//             className="pl-10"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>
        
//         <div className="flex items-center gap-2 w-full md:w-auto">
//           {filters.map((filter) => (
//             <Select
//               key={filter.id}
//               onValueChange={filter.onChange}
//               defaultValue={filter.defaultValue}
//             >
//               <SelectTrigger className="w-[180px]">
//                 <SelectValue placeholder={filter.placeholder} />
//               </SelectTrigger>
//               <SelectContent>
//                 {filter.options.map((option) => (
//                   <SelectItem key={option.value} value={option.value}>
//                     {option.label}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           ))}
          
//           <Popover>
//             <PopoverTrigger asChild>
//               <Button
//                 variant="outline"
//                 className="w-[240px] justify-start text-left font-normal"
//               >
//                 {date?.from ? (
//                   date.to ? (
//                     <>
//                       {format(date.from, "yyyy-MM-dd")} - {format(date.to, "yyyy-MM-dd")}
//                     </>
//                   ) : (
//                     format(date.from, "yyyy-MM-dd")
//                   )
//                 ) : (
//                   <span>اختر الفترة الزمنية</span>
//                 )}
//               </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-auto p-0" align="end">
//               <Calendar
//                 mode="range"
//                 selected={date}
//                 onSelect={setDate}
//                 numberOfMonths={2}
//                 locale={ar}
//               />
//             </PopoverContent>
//           </Popover>
          
//           <Button onClick={handleExport}>
//             <Download className="h-4 w-4 mr-2" />
//             تصدير
//           </Button>
//         </div>
//       </div>

//       {/* بطاقات الإحصائيات */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {stats ? (
//           <>
//             <StatsCard
//               title="إجمالي المنتجات"
//               value={stats.totalProducts}
//               icon={Package}
//             />
//             <StatsCard
//               title="منتجات منخفضة المخزون"
//               value={stats.lowStockCount}
//               icon={AlertTriangle}
//               variant="warning"
//             />
//             <StatsCard
//               title="قيمة المخزون"
//               value={`${stats.totalInventoryValue?.toLocaleString('ar-SA')} ر.ي`}
//               icon={TrendingUp}
//               variant="success"
//             />
//           </>
//         ) : (
//           <>
//             {[1, 2, 3].map((i) => (
//               <Card key={i}>
//                 <CardHeader>
//                   <Skeleton className="h-6 w-32" />
//                 </CardHeader>
//                 <CardContent>
//                   <Skeleton className="h-10 w-24" />
//                 </CardContent>
//               </Card>
//             ))}
//           </>
//         )}
//       </div>

//       {/* علامات التبويب للتقارير */}
//       <Tabs defaultValue="overview" onValueChange={setActiveTab}>
//         <TabsList className="grid grid-cols-2 md:grid-cols-4">
//           <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
//           <TabsTrigger value="movement">حركة المخزون</TabsTrigger>
//           <TabsTrigger value="low-stock">منخفض المخزون</TabsTrigger>
//           <TabsTrigger value="value">قيمة المخزون</TabsTrigger>
//         </TabsList>

//         {/* محتوى تبويب النظرة العامة */}
//         <TabsContent value="overview" className="mt-4">
//           <Card>
//             <CardHeader>
//               <CardTitle>تقرير المخزون</CardTitle>
//             </CardHeader>
//             <CardContent>
//               {isLoading ? (
//                 <div className="space-y-4">
//                   {[1, 2, 3, 4, 5].map((i) => (
//                     <Skeleton key={i} className="h-12 w-full" />
//                   ))}
//                 </div>
//               ) : (
//                 <div className="overflow-x-auto">
//                   <Table>
//                     <TableHeader>
//                       <TableRow>
//                         <TableHead className="text-right">المنتج</TableHead>
//                         <TableHead className="text-right">رمز المنتج</TableHead>
//                         <TableHead className="text-right">التصنيف</TableHead>
//                         <TableHead className="text-right">المخزون الحالي</TableHead>
//                         <TableHead className="text-right">سعر الشراء</TableHead>
//                         <TableHead className="text-right">سعر البيع</TableHead>
//                         <TableHead className="text-right">قيمة المخزون</TableHead>
//                         <TableHead className="text-right">الحالة</TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       {inventoryData.length > 0 ? (
//                         inventoryData.map((product) => {
//                           const stockValue = product.productStock * product.productPrice
//                           const stockStatus = product.productStock === 0 
//                             ? 'نفذ' 
//                             : product.productStock < 10 
//                               ? 'منخفض' 
//                               : 'متوفر'
                              
//                           return (
//                             <TableRow key={product.id}>
//                               <TableCell>{product.title}</TableCell>
//                               <TableCell>{product.sku || '-'}</TableCell>
//                               <TableCell>{product.category?.title || '-'}</TableCell>
//                               <TableCell>{product.productStock}</TableCell>
//                               <TableCell>{product.productPrice?.toLocaleString('ar-SA')} ر.ي</TableCell>
//                               <TableCell>{product.salePrice?.toLocaleString('ar-SA')} ر.ي</TableCell>
//                               <TableCell>{stockValue?.toLocaleString('ar-SA')} ر.ي</TableCell>
//                               <TableCell>
//                                 <span
//                                   className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
//                                     stockStatus === 'متوفر'
//                                       ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
//                                       : stockStatus === 'منخفض'
//                                         ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
//                                         : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
//                                   }`}
//                                 >
//                                   {stockStatus}
//                                 </span>
//                               </TableCell>
//                             </TableRow>
//                           )
//                         })
//                       ) : (
//                         <TableRow>
//                           <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
//                             لا توجد بيانات متاحة
//                           </TableCell>
//                         </TableRow>
//                       )}
//                     </TableBody>
//                   </Table>
//                 </div>
//               )}
//             </CardContent>
//           </Card>
//         </TabsContent>

//         {/* محتوى تبويب حركة المخزون */}
//         <TabsContent value="movement" className="mt-4">
//           <Card>
//             <CardHeader>
//               <CardTitle>حركة المخزون</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="flex items-center justify-center h-40">
//                 <p className="text-muted-foreground">سيتم عرض تقارير حركة المخزون هنا</p>
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         {/* محتوى تبويب المنتجات منخفضة المخزون */}
//         <TabsContent value="low-stock" className="mt-4">
//           <Card>
//             <CardHeader>
//               <CardTitle>المنتجات منخفضة المخزون</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="overflow-x-auto">
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead className="text-right">المنتج</TableHead>
//                       <TableHead className="text-right">المخزون الحالي</TableHead>
//                       <TableHead className="text-right">الحد الأدنى</TableHead>
//                       <TableHead className="text-right">الحالة</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {inventoryData
//                       .filter(p => p.productStock < 10)
//                       .map((product) => {
//                         const stockStatus = product.productStock === 0 
//                           ? 'نفذ' 
//                           : 'منخفض'
                          
//                         return (
//                           <TableRow key={product.id}>
//                             <TableCell>{product.title}</TableCell>
//                             <TableCell>{product.productStock}</TableCell>
//                             <TableCell>10</TableCell>
//                             <TableCell>
//                               <span
//                                 className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
//                                   stockStatus === 'منخفض'
//                                     ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
//                                     : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
//                                 }`}
//                               >
//                                 {stockStatus}
//                               </span>
//                             </TableCell>
//                           </TableRow>
//                         )
//                       })}
//                   </TableBody>
//                 </Table>
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         {/* محتوى تبويب قيمة المخزون */}
//         <TabsContent value="value" className="mt-4">
//           <Card>
//             <CardHeader>
//               <CardTitle>قيمة المخزون</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="overflow-x-auto">
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead className="text-right">المنتج</TableHead>
//                       <TableHead className="text-right">الكمية</TableHead>
//                       <TableHead className="text-right">سعر الشراء</TableHead>
//                       <TableHead className="text-right">قيمة المخزون</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {inventoryData.map((product) => {
//                       const stockValue = product.productStock * product.productPrice
                      
//                       return (
//                         <TableRow key={product.id}>
//                           <TableCell>{product.title}</TableCell>
//                           <TableCell>{product.productStock}</TableCell>
//                           <TableCell>{product.productPrice?.toLocaleString('ar-SA')} ر.ي</TableCell>
//                           <TableCell>{stockValue?.toLocaleString('ar-SA')} ر.ي</TableCell>
//                         </TableRow>
//                       )
//                     })}
//                     {stats && (
//                       <TableRow className="font-bold bg-muted/50">
//                         <TableCell colSpan={3} className="text-right">الإجمالي</TableCell>
//                         <TableCell>{stats.totalInventoryValue?.toLocaleString('ar-SA')} ر.ي</TableCell>
//                       </TableRow>
//                     )}
//                   </TableBody>
//                 </Table>
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   )
// }
"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Package, AlertTriangle, TrendingUp, Download, Search } from "lucide-react"
// import { DateRange } from "react-day-picker"
import { addDays, format } from "date-fns"
import { ar } from "date-fns/locale"
import { useSession } from "next-auth/react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Skeleton } from "@/components/ui/skeleton"
import PageHeader from "@/components/dashboard/PageHeader"
import StatsCard from "@/components/dashboard/StatsCard"

export default function InventoryReportsPage() {
  const { data: session, status: sessionStatus } = useSession()
  const router = useRouter()
  const params = useParams()
  const [date, setDate] = useState({
    from: addDays(new Date(), -30),
    to: new Date(),
  });
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inventoryData, setInventoryData] = useState([]);
  const [stats, setStats] = useState(null);
  const [userStoreId, setUserStoreId] = useState(null);
  const [storeLoading, setStoreLoading] = useState(true);
  const [isExporting, setIsExporting] = useState(false); // أضف هذا مع بقية حالات useState

  // جلب متجر المستخدم عند تحميل الصفحة
  useEffect(() => {
    const fetchUserStore = async () => {
      if (sessionStatus === "loading") return
      
      // if (!session?.user?.id) {
      //   router.push("/login")
      //   return
      // }

      try {
        setStoreLoading(true)
        const res = await fetch(`/api/stores?vendorId=${session.user.id}`)
        
        if (!res.ok) {
          throw new Error("Failed to fetch store data")
        }

        const storeData = await res.json()
        
        if (storeData?.length > 0) {
          setUserStoreId(storeData[0].id)
        } else {
          router.push("/dashboard/reports")
        }
      } catch (error) {
        console.error("Failed to fetch user store:", error)
        toast({
          title: "خطأ",
          description: "فشل في جلب بيانات المتجر",
          variant: "destructive"
        })
      } finally {
        setStoreLoading(false)
      }
    }

    fetchUserStore()
  }, [session, sessionStatus, router])

  // جلب التصنيفات بعد تحديد المتجر
  useEffect(() => {
    if (!userStoreId) return
    
    const fetchCategories = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`/api/inventory/categories?storeId=${userStoreId}`)
        
        if (!response.ok) {
          throw new Error("Failed to fetch categories")
        }

        const data = await response.json()
        setCategories(data.data || [])
      } catch (error) {
        console.error("Failed to fetch categories:", error)
        toast({
          title: "خطأ",
          description: "فشل في جلب التصنيفات",
          variant: "destructive"
        })
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchCategories()
  }, [userStoreId])

  // جلب بيانات المخزون مع debounce
  useEffect(() => {
    if (!userStoreId) return
    
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const queryParams = new URLSearchParams({
          storeId: userStoreId,
          ...(searchQuery && { search: searchQuery }),
          ...(selectedCategory !== 'all' && { categoryId: selectedCategory }),
          ...(selectedStatus !== 'all' && { status: selectedStatus }),
          ...(date.from && { startDate: date.from.toISOString() }),
          ...(date.to && { endDate: date.to.toISOString() })
        })

        const response = await fetch(`/api/inventory/reports?${queryParams.toString()}`)
        
        if (!response.ok) throw new Error("Failed to fetch data")
        
        const data = await response.json()
        
        setInventoryData(data.data.products || [])
        setStats({
          totalProducts: data.data.totalProducts || 0,
          lowStockCount: data.data.lowStockCount || 0,
          outOfStockCount: data.data.outOfStockCount || 0,
          totalInventoryValue: data.data.totalInventoryValue || 0,
          averageProductPrice: data.data.averageProductPrice || 0
        })
      } catch (error) {
        console.error("Error fetching data:", error)
        toast({
          title: "خطأ",
          description: "فشل في جلب البيانات",
          variant: "destructive"
        })
      } finally {
        setIsLoading(false)
      }
    }

    const debounceTimer = setTimeout(fetchData, 500)
    return () => clearTimeout(debounceTimer)
  }, [userStoreId, searchQuery, selectedCategory, selectedStatus, date])

  // تعريف عوامل التصفية
  const filters = [
    {
      id: "category",
      label: "التصنيفات",
      placeholder: "جميع التصنيفات",
      defaultValue: "all",
      onChange: (value) => setSelectedCategory(value),
      options: [
        { label: "جميع التصنيفات", value: "all" },
        ...categories.map(cat => ({
          label: cat.title,
          value: cat.id
        }))
      ],
    },
    {
      id: "status",
      label: "حالة المخزون",
      placeholder: "جميع الحالات",
      defaultValue: "all",
      onChange: (value) => setSelectedStatus(value),
      options: [
        { label: "جميع الحالات", value: "all" },
        { label: "متوفر", value: "available" },
        { label: "منخفض", value: "low" },
        { label: "نفذ", value: "out" },
      ],
    },
  ]

  // دالة التصدير

  const handleExport = async () => {
    try {
      setIsExporting(true); // بدء عملية التصدير
      
      const response = await fetch('/api/inventory/export', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          storeId: userStoreId,
          filters: {
            searchQuery,
            category: selectedCategory,
            status: selectedStatus,
            dateRange: date
          }
        })
      })
  
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'فشل في تصدير البيانات');
      }
  
      // إنشاء رابط تنزيل
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `تقرير_المخزون_${new Date().toISOString().slice(0, 10)}.xlsx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
  
     
  
    } catch (error) {
      console.error('Export failed:', error);
      
    } finally {
      setIsExporting(false); // إنهاء عملية التصدير
    }
  }

  if (sessionStatus === "loading" || storeLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" />
        <p className="text-lg">جارٍ تحميل بيانات المتجر...</p>
      </div>
    )
  }

  if (!session) {
    router.push("/login")
    return null
  }

  if (!userStoreId && !storeLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <AlertTriangle className="h-12 w-12 text-yellow-500" />
        <p className="text-lg">لا يوجد متجر مرتبط بحسابك</p>
        <Button onClick={() => router.push("/dashboard/stores")}>
          إنشاء متجر جديد
        </Button>
      </div>
    )
  }

  return (
    <div  className="space-y-6">
      <PageHeader
        title="تقارير المخزون والمنتجات"
        description={`آخر تحديث في ${format(new Date(), 'PPPP', { locale: ar })}`}
        backLink="/dashboard/reports"
        backIcon={ArrowLeft}
      />

      {/* شريط التصفية والبحث */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="ابحث في المنتجات..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto">
          {filters.map((filter) => (
            <Select
              key={filter.id}
              onValueChange={filter.onChange}
              defaultValue={filter.defaultValue}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={filter.placeholder} />
              </SelectTrigger>
              <SelectContent>
                {filter.options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ))}
          
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-[240px] justify-start text-left font-normal"
              >
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "yyyy-MM-dd")} - {format(date.to, "yyyy-MM-dd")}
                    </>
                  ) : (
                    format(date.from, "yyyy-MM-dd")
                  )
                ) : (
                  <span>اختر الفترة الزمنية</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="range"
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
                locale={ar}
              />
            </PopoverContent>
          </Popover>
          
          <Button onClick={handleExport}>
            <Download className="h-4 w-4 mr-2" />
            تصدير
          </Button>
        </div>
      </div>

      {/* بطاقات الإحصائيات */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats ? (
          <>
            <StatsCard
              title="إجمالي المنتجات"
              value={stats.totalProducts}
              icon={Package}
            />
            <StatsCard
              title="منتجات منخفضة المخزون"
              value={stats.lowStockCount}
              icon={AlertTriangle}
              variant="warning"
            />
            <StatsCard
              title="قيمة المخزون"
              value={`${stats.totalInventoryValue?.toLocaleString('ar-SA')} ر.ي`}
              icon={TrendingUp}
              variant="success"
            />
          </>
        ) : (
          <>
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-6 w-32" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-10 w-24" />
                </CardContent>
              </Card>
            ))}
          </>
        )}
      </div>

      {/* علامات التبويب للتقارير */}
      <Tabs defaultValue="overview" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
          <TabsTrigger value="movement">حركة المخزون</TabsTrigger>
          <TabsTrigger value="low-stock">منخفض المخزون</TabsTrigger>
          <TabsTrigger value="value">قيمة المخزون</TabsTrigger>
        </TabsList>

        {/* محتوى تبويب النظرة العامة */}
        <TabsContent value="overview" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>تقرير المخزون</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Skeleton key={i} className="h-12 w-full" />
                  ))}
                </div>
              ) : (
                <div dir="rtl" className="overflow-x-auto">
                  <Table >
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-right">المنتج</TableHead>
                        <TableHead className="text-right">رمز المنتج</TableHead>
                        <TableHead className="text-right">التصنيف</TableHead>
                        <TableHead className="text-right">المخزون الحالي</TableHead>
                        <TableHead className="text-right">سعر الشراء</TableHead>
                        <TableHead className="text-right">سعر البيع</TableHead>
                        <TableHead className="text-right">قيمة المخزون</TableHead>
                        <TableHead className="text-right">الحالة</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {inventoryData.length > 0 ? (
                        inventoryData.map((product) => {
                          const stockValue = product.productStock * product.productPrice
                          const stockStatus = product.productStock === 0 
                            ? 'نفذ' 
                            : product.productStock < 10 
                              ? 'منخفض' 
                              : 'متوفر'
                              
                          return (
                            <TableRow key={product.id}>
                              <TableCell>{product.title}</TableCell>
                              <TableCell>{product.sku || '-'}</TableCell>
                              <TableCell>{product.category?.title || '-'}</TableCell>
                              <TableCell>{product.productStock}</TableCell>
                              <TableCell>{product.productPrice?.toLocaleString('ar-SA')} ر.ي</TableCell>
                              <TableCell>{product.salePrice?.toLocaleString('ar-SA')} ر.ي</TableCell>
                              <TableCell>{stockValue?.toLocaleString('ar-SA')} ر.ي</TableCell>
                              <TableCell>
                                <span
                                  className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                                    stockStatus === 'متوفر'
                                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                      : stockStatus === 'منخفض'
                                        ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                                        : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                                  }`}
                                >
                                  {stockStatus}
                                </span>
                              </TableCell>
                            </TableRow>
                          )
                        })
                      ) : (
                        <TableRow>
                          <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                            لا توجد بيانات متاحة
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* محتوى تبويب حركة المخزون */}
        <TabsContent value="movement" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>حركة المخزون</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-40">
                <p className="text-muted-foreground">سيتم عرض تقارير حركة المخزون هنا</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* محتوى تبويب المنتجات منخفضة المخزون */}
        <TabsContent value="low-stock" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>المنتجات منخفضة المخزون</CardTitle>
            </CardHeader>
            <CardContent>
              <div dir="rtl" className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-right">المنتج</TableHead>
                      <TableHead className="text-right">المخزون الحالي</TableHead>
                      <TableHead className="text-right">الحد الأدنى</TableHead>
                      <TableHead className="text-right">الحالة</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {inventoryData
                      .filter(p => p.productStock < 10)
                      .map((product) => {
                        const stockStatus = product.productStock === 0 
                          ? 'نفذ' 
                          : 'منخفض'
                          
                        return (
                          <TableRow key={product.id}>
                            <TableCell>{product.title}</TableCell>
                            <TableCell>{product.productStock}</TableCell>
                            <TableCell>10</TableCell>
                            <TableCell>
                              <span
                                className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                                  stockStatus === 'منخفض'
                                    ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                                    : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                                }`}
                              >
                                {stockStatus}
                              </span>
                            </TableCell>
                          </TableRow>
                        )
                      })}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* محتوى تبويب قيمة المخزون */}
        <TabsContent value="value" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>قيمة المخزون</CardTitle>
            </CardHeader>
            <CardContent>
              <div dir="rtl" className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-right">المنتج</TableHead>
                      <TableHead className="text-right">الكمية</TableHead>
                      <TableHead className="text-right">سعر الشراء</TableHead>
                      <TableHead className="text-right">قيمة المخزون</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {inventoryData.map((product) => {
                      const stockValue = product.productStock * product.productPrice
                      
                      return (
                        <TableRow key={product.id}>
                          <TableCell>{product.title}</TableCell>
                          <TableCell>{product.productStock}</TableCell>
                          <TableCell>{product.productPrice?.toLocaleString('ar-SA')} ر.ي</TableCell>
                          <TableCell>{stockValue?.toLocaleString('ar-SA')} ر.ي</TableCell>
                        </TableRow>
                      )
                    })}
                    {stats && (
                      <TableRow className="font-bold bg-muted/50">
                        <TableCell colSpan={3} className="text-right">الإجمالي</TableCell>
                        <TableCell>{stats.totalInventoryValue?.toLocaleString('ar-SA')} ر.ي</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}