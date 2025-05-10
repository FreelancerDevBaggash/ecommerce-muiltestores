// import React from 'react'
// import SmallCard from './SmallCard';
// import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from 'lucide-react';

// export default function SmallCards({orders}) {
//     const status = {
//       pending:  "PENDING",
//       processing: "PROCESSING",
//       shipping: "SHIPPED",
//       delivering:"DELIVERED",
//       cancelling: "CANCELED"
//       }
//       function getOrdersCountByStatus(status){
//       const filteredOrders=  orders.filter((order) => 
//       order.orderStatus === status);

//       const count = filteredOrders.length.toString().padStart(
//           2, "0"
//       );

//       return count;
      
//       }
//     const ordersCount = orders.length.toString().padStart(
//         2, "0"
//     );
//     const pendingOrdersCount = getOrdersCountByStatus(status.pending);
//     const processingOrdersCount = getOrdersCountByStatus(status.processing);
//     const deliveredOrdersCount = getOrdersCountByStatus(status.delivering);
  
//     const orderStats=[
//         {
//             title:"Today Orders",
//             number:ordersCount,
//             iconBg:"bg-green-600",
//             icon:ShoppingCart,
//         },
//         {
//             title:"Orders Pending",
//             number:pendingOrdersCount,
//             iconBg:"bg-blue-600",
//             icon:Loader2,
//         },
//         {
//             title:"Order Processing",
//             number:processingOrdersCount,
//             iconBg:"bg-orange-600",
//             icon:RefreshCcw,
//         },
//         {
//             title:"Orders Delivered",
//             number:deliveredOrdersCount,
//             iconBg:"bg-purple-600",
//             icon:CheckCheck,
//         },
//     ]
//   return (
//     <div className='grid grid-cols-1 sm:grid-cols-2
//      md:grid-cols-3 lg:grid-cols-4  gap-4 py-8'>
//            {/*Cards*/}
//            {
//             orderStats.map((data ,i)=>{
//              return <SmallCard key={i} data={data} />

//             })
//            }
          
          
//     </div>
//   );
// }
// import React from 'react'
// import SmallCard from './SmallCard';
// import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from 'lucide-react';

// export default function SmallCards({ orders = [] }) {
//     const status = {
//         pending: "PENDING",
//         processing: "PROCESSING",
//         shipping: "SHIPPED",
//         delivering: "DELIVERED",
//         cancelling: "CANCELED"
//     };

//     function getOrdersCountByStatus(status) {
//         if (!orders || !Array.isArray(orders)) return "00"; // تجنب الأخطاء إذا كان orders غير معرف
//         const filteredOrders = orders.filter((order) => order.orderStatus === status);
//         return filteredOrders.length.toString().padStart(2, "0");
//     }

//     const ordersCount = orders.length ? orders.length.toString().padStart(2, "0") : "00";
//     const pendingOrdersCount = getOrdersCountByStatus(status.pending);
//     const processingOrdersCount = getOrdersCountByStatus(status.processing);
//     const deliveredOrdersCount = getOrdersCountByStatus(status.delivering);

//     const orderStats = [
//         {
//             title: "Today Orders",
//             number: ordersCount,
//             iconBg: "bg-green-600",
//             icon: ShoppingCart,
//         },
//         {
//             title: "Orders Pending",
//             number: pendingOrdersCount,
//             iconBg: "bg-blue-600",
//             icon: Loader2,
//         },
//         {
//             title: "Order Processing",
//             number: processingOrdersCount,
//             iconBg: "bg-orange-600",
//             icon: RefreshCcw,
//         },
//         {
//             title: "Orders Delivered",
//             number: deliveredOrdersCount,
//             iconBg: "bg-purple-600",
//             icon: CheckCheck,
//         },
//     ];

//     return (
//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
//             {/* عرض البطاقات */}
//             {orderStats.map((data, i) => (
//                 <SmallCard key={i} data={data} />
//             ))}
//         </div>
//     );
// }

// import React from 'react'
// import SmallCard from './SmallCard';
// import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from 'lucide-react';

// export default function SmallCards({ orders = [] }) {
//     const status = {
//         pending: "معلق",
//         processing: "قيد المعالجة",
//         shipping: "تم الشحن",
//         delivering: "تم التوصيل",
//         cancelling: "تم الإلغاء"
//     };

//     function getOrdersCountByStatus(status) {
//         if (!orders || !Array.isArray(orders)) return "00"; // تجنب الأخطاء إذا كان orders غير معرف
//         const filteredOrders = orders.filter((order) => order.orderStatus === status);
//         return filteredOrders.length.toString().padStart(2, "0");
//     }

//     const ordersCount = orders.length ? orders.length.toString().padStart(2, "0") : "00";
//     const pendingOrdersCount = getOrdersCountByStatus(status.pending);
//     const processingOrdersCount = getOrdersCountByStatus(status.processing);
//     const deliveredOrdersCount = getOrdersCountByStatus(status.delivering);

//     const orderStats = [
//         {
//             title: "طلبات اليوم",
//             number: ordersCount,
//             iconBg: "bg-green-600",
//             icon: ShoppingCart,
//         },
//         {
//             title: "الطلبات المعلقة",
//             number: pendingOrdersCount,
//             iconBg: "bg-blue-600",
//             icon: Loader2,
//         },
//         {
//             title: "الطلبات قيد المعالجة",
//             number: processingOrdersCount,
//             iconBg: "bg-orange-600",
//             icon: RefreshCcw,
//         },
//         {
//             title: "الطلبات المنفذة",
//             number: deliveredOrdersCount,
//             iconBg: "bg-purple-600",
//             icon: CheckCheck,
//         },
//     ];

//     return (
//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
//             {/* عرض البطاقات */}
//             {orderStats.map((data, i) => (
//                 <SmallCard key={i} data={data} />
//             ))}
//         </div>
//     );
// }

// import React from 'react'
// import SmallCard from './SmallCard';
// import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from 'lucide-react';

// export default function SmallCards({ orders = [] }) {
//     const status = {
//         PENDING: "معلق",
//         PROCESSING: "قيد المعالجة",
//         SHIPPED: "تم الشحن",
//         DELIVERED: "تم التوصيل",
//         CANCELED: "تم الإلغاء"
//     };

//     function getOrdersCountByStatus(statusKey) {
//         if (!orders || !Array.isArray(orders)) return "00";
//         const filteredOrders = orders.filter((order) => order.orderStatus === statusKey);
//         return filteredOrders.length.toString().padStart(2, "0");
//     }

//     const ordersCount = orders.length ? orders.length.toString().padStart(2, "0") : "00";
//     const pendingOrdersCount = getOrdersCountByStatus("PENDING");
//     const processingOrdersCount = getOrdersCountByStatus("PROCESSING");
//     const deliveredOrdersCount = getOrdersCountByStatus("DELIVERED");

//     const orderStats = [
//         {
//             title: "طلبات اليوم",
//             number: ordersCount,
//             iconBg: "bg-green-600",
//             icon: ShoppingCart,
//         },
//         {
//             title: "الطلبات المعلقة",
//             number: pendingOrdersCount,
//             iconBg: "bg-blue-600",
//             icon: Loader2,
//         },
//         {
//             title: "الطلبات قيد المعالجة",
//             number: processingOrdersCount,
//             iconBg: "bg-orange-600",
//             icon: RefreshCcw,
//         },
//         {
//             title: "الطلبات المنفذة",
//             number: deliveredOrdersCount,
//             iconBg: "bg-purple-600",
//             icon: CheckCheck,
//         },
//     ];

//     return (
//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
//             {orderStats.map((data, i) => (
//                 <SmallCard key={i} data={data} />
//             ))}
//         </div>
//     );
// }
"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from "lucide-react"
// تحديث استيراد دالة getData
import { getData } from "@/lib/getData"
export default function SmallCards({ orders = [], onStatusSelect, selectedStatus, storeId }) {
  const [orderStats, setOrderStats] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // تحديث دالة loadOrderStats في useEffect
    const loadOrderStats = async () => {
      setIsLoading(true)
      try {
        // إذا تم توفير الطلبات مباشرة، استخدمها
        if (orders.length > 0) {
          updateStats(orders)
        }
        // وإلا قم بجلبها من واجهة برمجة التطبيقات
        else if (storeId) {
          const fetchedOrders = await getData(`orders?storeId=${storeId}`, { mode: "real-time" })
          if (fetchedOrders) {
            updateStats(fetchedOrders)
          }
        }
      } catch (error) {
        console.error("خطأ في تحميل إحصائيات الطلبات:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadOrderStats()
  }, [orders, storeId])

  const updateStats = (ordersList) => {
    const stats = [
      {
        title: "جميع الطلبات",
        status: "all",
        number: ordersList.length.toString().padStart(2, "0"),
        iconBg: "bg-gray-600",
        icon: ShoppingCart,
      },
      {
        title: "معلق",
        status: "PENDING",
        number: ordersList
          .filter((o) => o.orderStatus === "PENDING")
          .length.toString()
          .padStart(2, "0"),
        iconBg: "bg-yellow-500",
        icon: Loader2,
      },
      {
        title: "قيد المعالجة",
        status: "PROCESSING",
        number: ordersList
          .filter((o) => o.orderStatus === "PROCESSING")
          .length.toString()
          .padStart(2, "0"),
        iconBg: "bg-blue-500",
        icon: RefreshCcw,
      },
      {
        title: "تم التوصيل",
        status: "DELIVERED",
        number: ordersList
          .filter((o) => o.orderStatus === "DELIVERED")
          .length.toString()
          .padStart(2, "0"),
        iconBg: "bg-green-500",
        icon: CheckCheck,
      },
    ]

    setOrderStats(stats)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {orderStats.map((stat, index) => (
        <Card
          key={index}
          className={`cursor-pointer transition-all ${
            selectedStatus === stat.status
              ? "border-2 border-orange-500 shadow-lg"
              : "border border-gray-200 hover:border-orange-300"
          }`}
          onClick={() => onStatusSelect(stat.status)}
        >
          <div className="p-6">
            <div className="flex items-center">
              <div className={`flex h-12 w-12 items-center justify-center rounded-full ${stat.iconBg} text-white ml-4`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{isLoading ? "..." : stat.number}</h3>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}