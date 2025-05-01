




// import { getServerSession } from "next-auth"
// import { authOptions } from "@/lib/authOptions"
// import { getData } from "@/lib/getData"
// import db from "@/lib/db"

// import { BarChart3, ShoppingBag, Package, Users, TrendingUp } from "lucide-react"
// import PageHeader from "@/components/dashboard/PageHeader"
// import StatsCard from "@/components/dashboard/StatsCard"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import WeeklySalesChart from "@/components/dashboard/WeeklySalesChart"
// import TrafficSourcesChart from "@/components/dashboard/TrafficSourcesChart"
// // import BestSellingProductsChart from "@/components/dashboard/BestSellingProductsChart"
// export default async function DashboardPage() {
//   const session = await getServerSession(authOptions)
//   const email = session?.user?.email
//   const userId = session?.user?.id

//   // التحقق مما إذا كان المستخدم بائعاً وجلب بيانات المتجر الخاص به
//   let userType = null
//   let store = null

//   if (email) {
//     const vendor = await db.vendor.findUnique({
//       where: { email },
//       include: { store: true }, // تضمين علاقة المتجر
//     })

//     if (vendor) {
//       userType = "VENDOR"
//       store = vendor.store // معلومات المتجر للبائع
//     } else {
//       const customer = await db.customer.findUnique({
//         where: { email },
//       })
//       if (customer) {
//         userType = "CUSTOMER"
//       }
//     }
//   }

//   // جلب بيانات إضافية إذا لزم الأمر
//   const sales = store ? await getData("sales") : []
//   const orders = store ? await getData(`orders/user?storeId=${store.id}`) : []
//   const products = store ? await getData("products", { storeId: store.id }) : []

//   // بيانات إحصائية للعرض
//   const stats = [
//     {
//       title: "إجمالي المبيعات",
//       value: "398,540 ر.ي",
//       icon: TrendingUp,
//       change: "+18.3%",
//       trend: "up",
//     },
//     {
//       title: "الطلبات",
//       value: "1,248",
//       icon: ShoppingBag,
//       change: "+12.5%",
//       trend: "up",
//     },
//     {
//       title: "المنتجات",
//       value: "384",
//       icon: Package,
//       change: "+4.3%",
//       trend: "up",
//     },
//     {
//       title: "العملاء",
//       value: "573",
//       icon: Users,
//       change: "+8.2%",
//       trend: "up",
//     },
//   ]

//   // بيانات الطلبات الأخيرة
//   const recentOrders = [
//     {
//       id: "ORD-1001",
//       customer: "أحمد محمد",
//       date: "2025-04-20",
//       amount: 1580,
//       status: "مكتمل",
//     },
//     {
//       id: "ORD-1002",
//       customer: "سارة علي",
//       date: "2025-04-19",
//       amount: 950,
//       status: "قيد المعالجة",
//     },
//     {
//       id: "ORD-1003",
//       customer: "محمد خالد",
//       date: "2025-04-18",
//       amount: 2450,
//       status: "مكتمل",
//     },
//     {
//       id: "ORD-1004",
//       customer: "فاطمة أحمد",
//       date: "2025-04-17",
//       amount: 1200,
//       status: "قيد الشحن",
//     },
//     {
//       id: "ORD-1005",
//       customer: "عبدالله محمد",
//       date: "2025-04-16",
//       amount: 3200,
//       status: "مكتمل",
//     },
//   ]

//   // بيانات المنتجات الأكثر مبيعاً
//   const topProducts = [
//     {
//       id: 1,
//       name: "قميص قطني",
//       category: "ملابس",
//       price: 120,
//       sales: 85,
//       stock: 120,
//     },
//     {
//       id: 2,
//       name: "بنطلون جينز",
//       category: "ملابس",
//       price: 200,
//       sales: 64,
//       stock: 85,
//     },
//     {
//       id: 3,
//       name: "حذاء رياضي",
//       category: "أحذية",
//       price: 350,
//       sales: 52,
//       stock: 30,
//     },
//     {
//       id: 4,
//       name: "حقيبة يد",
//       category: "إكسسوارات",
//       price: 280,
//       sales: 48,
//       stock: 45,
//     },
//     {
//       id: 5,
//       name: "ساعة يد",
//       category: "إكسسوارات",
//       price: 1500,
//       sales: 32,
//       stock: 15,
//     },
//   ]

//   return (
//     <div dir="rtl">
//       <PageHeader title="لوحة التحكم" description={`مرحباً بك ${session?.user?.name || ""}، هذه نظرة عامة على متجرك`} />

//       {/* بطاقات الإحصائيات */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
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
//       <Tabs defaultValue="orders" className="mb-6">
//         <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4">
//           <TabsTrigger value="orders">الطلبات الأخيرة</TabsTrigger>
//           <TabsTrigger value="products">المنتجات الأكثر مبيعاً</TabsTrigger>
//           <TabsTrigger value="customers">العملاء النشطين</TabsTrigger>
//           <TabsTrigger value="analytics">التحليلات</TabsTrigger>
//         </TabsList>

//         <TabsContent
//           value="orders"
//           className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4"
//         >
//           <div  dir='rtl' className="flex items-center justify-between mb-4">
//             <h3 className="text-lg font-semibold">الطلبات الأخيرة</h3>
//             <a href="/dashboard/orders" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
//               عرض الكل
//             </a>
//           </div>
//           <div className="overflow-x-auto">
//             <Table dir='rtl'>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead className="text-right">رقم الطلب</TableHead>
//                   <TableHead className="text-right">العميل</TableHead>
//                   <TableHead className="text-right">التاريخ</TableHead>
//                   <TableHead className="text-right">المبلغ</TableHead>
//                   <TableHead className="text-right">الحالة</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {recentOrders.map((order) => (
//                   <TableRow key={order.id}>
//                     <TableCell className="font-medium">{order.id}</TableCell>
//                     <TableCell>{order.customer}</TableCell>
//                     <TableCell>
//                       {new Date(order.date).toLocaleDateString("ar-SA", {
//                         year: "numeric",
//                         month: "short",
//                         day: "numeric",
//                       })}
//                     </TableCell>
//                     <TableCell>{order.amount.toLocaleString("ar-SA")} ر.ي</TableCell>
//                     <TableCell>
//                       <span
//                         className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
//                           order.status === "مكتمل"
//                             ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
//                             : order.status === "قيد الشحن"
//                               ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
//                               : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
//                         }`}
//                       >
//                         {order.status}
//                       </span>
//                     </TableCell>
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
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-lg font-semibold">المنتجات الأكثر مبيعاً</h3>
//             <a href="/dashboard/products" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
//               عرض الكل
//             </a>
//           </div>
//           <div className="overflow-x-auto">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead className="text-right">المنتج</TableHead>
//                   <TableHead className="text-right">التصنيف</TableHead>
//                   <TableHead className="text-right">السعر</TableHead>
//                   <TableHead className="text-right">المبيعات</TableHead>
//                   <TableHead className="text-right">المخزون</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {topProducts.map((product) => (
//                   <TableRow key={product.id}>
//                     <TableCell className="font-medium">{product.name}</TableCell>
//                     <TableCell>{product.category}</TableCell>
//                     <TableCell>{product.price.toLocaleString("ar-SA")} ر.ي</TableCell>
//                     <TableCell>{product.sales}</TableCell>
//                     <TableCell>
//                       <span
//                         className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
//                           product.stock > 50
//                             ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
//                             : product.stock > 20
//                               ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
//                               : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
//                         }`}
//                       >
//                         {product.stock}
//                       </span>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         </TabsContent>

//         <TabsContent
//           value="customers"
//           className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4"
//         >
//           <div className="flex items-center justify-center h-40">
//             <p className="text-slate-500 dark:text-slate-400">سيتم عرض بيانات العملاء النشطين هنا</p>
//           </div>
//         </TabsContent>

//         <TabsContent
//           value="analytics"
//           className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4"
//         >
//           <div className="flex items-center justify-center h-40">
//             <p className="text-slate-500 dark:text-slate-400">سيتم عرض التحليلات هنا</p>
//           </div>
//         </TabsContent>
//       </Tabs>
//       <div className="grid grid-cols-1 mb-2 lg:grid-cols-2 gap-4">
//             <WeeklySalesChart data={sales} />
//             <TrafficSourcesChart data={orders} />
//           </div>

//       {/* قسم إضافي */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <Card>
//           <CardHeader>
//             <CardTitle>نظرة عامة على المبيعات</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="flex items-center justify-center h-60">
//               <BarChart3 className="h-16 w-16 text-slate-300 dark:text-slate-700" />
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>الإشعارات الأخيرة</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               <div className="flex items-start gap-3">
//                 <div className="p-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
//                   <Package className="h-4 w-4" />
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium">نفاد مخزون المنتج</p>
//                   <p className="text-xs text-slate-500 dark:text-slate-400">
//                     المنتج حذاء رياضي وصل إلى الحد الأدنى للمخزون
//                   </p>
//                   <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">منذ 2 ساعة</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
//                   <ShoppingBag className="h-4 w-4" />
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium">طلب جديد</p>
//                   <p className="text-xs text-slate-500 dark:text-slate-400">تم استلام طلب جديد بقيمة 1,580 ر.ي</p>
//                   <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">منذ 4 ساعات</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
//                   <Users className="h-4 w-4" />
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium">عميل جديد</p>
//                   <p className="text-xs text-slate-500 dark:text-slate-400">انضم عميل جديد إلى متجرك</p>
//                   <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">منذ 6 ساعات</p>
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"
import { getData } from "@/lib/getData"
import PageHeader from '@/components/dashboard/PageHeader'
import StatsCard from '@/components/dashboard/StatsCard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import WeeklySalesChart from '@/components/dashboard/WeeklySalesChart'
import TrafficSourcesChart from '@/components/dashboard/TrafficSourcesChart'
import { BarChart3, ShoppingBag, Package, Users, TrendingUp } from 'lucide-react'
import db from "@/lib/db"
export default async function DashboardPage() {
    const session = await getServerSession(authOptions)
    const email = session?.user?.email
    const userId = session?.user?.id
  
    // التحقق مما إذا كان المستخدم بائعاً وجلب بيانات المتجر الخاص به
    let userType = null
    let store = null
  
    if (email) {
      const vendor = await db.vendor.findUnique({
        where: { email },
        include: { store: true }, // تضمين علاقة المتجر
      })
  
      if (vendor) {
        userType = "VENDOR"
        store = vendor.store // معلومات المتجر للبائع
      } else {
        const customer = await db.customer.findUnique({
          where: { email },
        })
        if (customer) {
          userType = "CUSTOMER"
        }
      }
    }
  
    // جلب بيانات إضافية إذا لزم الأمر
    const sales = store ? await getData("sales") : []
    const orders = store ? await getData(`orders/user?storeId=${store.id}`) : []
    const products = store ? await getData("products", { storeId: store.id }) : []
  
    // جلب البيانات بشكل متوازي
    const [
      statsData,
      ordersData,
      productsData,
      salesData,
      trafficData
    ] = await Promise.all([
      getData(`/dashboard/stats?storeId=${store.id}`),
      getData(`/orders/recent?storeId=${store.id}&limit=5`),
      getData(`/products/top-selling?storeId=${store.id}&limit=5`),
      getData(`/sales/weekly?storeId=${store.id}`),
      getData(`/analytics/traffic-sources?storeId=${store.id}`)
    ])

    // تجهيز بيانات الإحصائيات
    const stats = [
      {
        title: "إجمالي المبيعات",
        value: `${statsData.data.totalSales?.toLocaleString('ar-SA') || 0} ر.ي`,
        icon: TrendingUp,
        change: statsData.data.salesChange || "+0%",
        trend: statsData.data.salesTrend || "neutral",
      },
      {
        title: "الطلبات",
        value: statsData.data.totalOrders?.toLocaleString('ar-SA') || 0,
        icon: ShoppingBag,
        change: statsData.data.ordersChange || "+0%",
        trend: statsData.data.ordersTrend || "neutral",
      },
      {
        title: "المنتجات",
        value: statsData.data.totalProducts?.toLocaleString('ar-SA') || 0,
        icon: Package,
        change: statsData.data.productsChange || "+0%",
        trend: statsData.data.productsTrend || "neutral",
      },
      {
        title: "العملاء",
        value: statsData.data.totalCustomers?.toLocaleString('ar-SA') || 0,
        icon: Users,
        change: statsData.data.customersChange || "+0%",
        trend: statsData.data.customersTrend || "neutral",
      }
    ]

    return (
      <div dir="rtl">
        <PageHeader 
          title="لوحة التحكم" 
          description={`مرحباً بك ${session?.user?.name || ""}، هذه نظرة عامة على متجرك`} 
        />

        {/* بطاقات الإحصائيات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              change={stat.change}
              trend={stat.trend}
            />
          ))}
        </div>

        {/* علامات التبويب للتقارير */}
        <Tabs dir="rtl" defaultValue="orders" className="mb-6">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4">
            <TabsTrigger value="orders">الطلبات الأخيرة</TabsTrigger>
            <TabsTrigger value="products">المنتجات الأكثر مبيعاً</TabsTrigger>
            <TabsTrigger value="customers">العملاء النشطين</TabsTrigger>
            <TabsTrigger value="analytics">التحليلات</TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">الطلبات الأخيرة</h3>
             
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">رقم الطلب</TableHead>
                    <TableHead className="text-right">العميل</TableHead>
                    <TableHead className="text-right">التاريخ</TableHead>
                    <TableHead className="text-right">المبلغ</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ordersData.data?.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>{order.orderNumber}</TableCell>
                      <TableCell>{order.customerName}</TableCell>
                      <TableCell>
                        {new Date(order.createdAt).toLocaleDateString("ar-SA", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </TableCell>
                      <TableCell>{order.total.toLocaleString("ar-SA")} ر.ي</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                            order.status === "COMPLETED"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                              : order.status === "SHIPPED"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                                : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                          }`}
                        >
                          {order.status === "COMPLETED" ? "مكتمل" : 
                          order.status === "PROCESSING" ? "قيد المعالجة" :
                          order.status === "SHIPPED" ? "قيد الشحن" : "جديد"}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="products" className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">المنتجات الأكثر مبيعاً</h3>
              <a href="/dashboard/products" className="text-sm text-indigo-600 hover:underline">
                عرض الكل
              </a>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">المنتج</TableHead>
                    <TableHead className="text-right">التصنيف</TableHead>
                    <TableHead className="text-right">السعر</TableHead>
                    <TableHead className="text-right">المبيعات</TableHead>
                    <TableHead className="text-right">المخزون</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {productsData.data?.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          {product.imageUrl && (
                            <img 
                              src={product.imageUrl} 
                              alt={product.title} 
                              className="w-10 h-10 rounded-md object-cover"
                            />
                          )}
                          <span>{product.title}</span>
                        </div>
                      </TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="text-primary font-medium">
                            {product.salePrice?.toLocaleString("ar-SA") || product.productPrice.toLocaleString("ar-SA")} ر.ي
                          </span>
                          {product.salePrice && (
                            <span className="text-xs text-gray-500 line-through">
                              {product.productPrice.toLocaleString("ar-SA")} ر.ي
                            </span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{product.salesCount}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                            product.stock > 50
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                              : product.stock > 20
                                ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                                : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                          }`}
                        >
                          {product.stock}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="customers" className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">العملاء النشطين</h3>
              <a href="/dashboard/customers" className="text-sm text-indigo-600 hover:underline">
                عرض الكل
              </a>
            </div>
            <div className="flex items-center justify-center h-40">
              <p className="text-slate-500 dark:text-slate-400">سيتم عرض بيانات العملاء النشطين هنا</p>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">تحليلات المتجر</h3>
              <a href="/dashboard/analytics" className="text-sm text-indigo-600 hover:underline">
                عرض المزيد
              </a>
            </div>
            <div className="flex items-center justify-center h-40">
              <p className="text-slate-500 dark:text-slate-400">سيتم عرض التحليلات المتقدمة هنا</p>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="grid grid-cols-1 mb-2 lg:grid-cols-2 gap-4">
          <WeeklySalesChart data={salesData.data} />
          <TrafficSourcesChart data={trafficData.data} />
        </div>

        {/* قسم إضافي */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>نظرة عامة على المبيعات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-60">
                <BarChart3 className="h-16 w-16 text-slate-300 dark:text-slate-700" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>الإشعارات الأخيرة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                    <Package className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">نفاد مخزون المنتج</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      المنتج حذاء رياضي وصل إلى الحد الأدنى للمخزون
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">منذ 2 ساعة</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                    <ShoppingBag className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">طلب جديد</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">تم استلام طلب جديد بقيمة 1,580 ر.ي</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">منذ 4 ساعات</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">عميل جديد</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">انضم عميل جديد إلى متجرك</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">منذ 6 ساعات</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
