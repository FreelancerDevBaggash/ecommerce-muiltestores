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
import React from 'react'
import SmallCard from './SmallCard';
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from 'lucide-react';

export default function SmallCards({ orders = [] }) {
    const status = {
        pending: "معلق",
        processing: "قيد المعالجة",
        shipping: "تم الشحن",
        delivering: "تم التوصيل",
        cancelling: "تم الإلغاء"
    };

    function getOrdersCountByStatus(status) {
        if (!orders || !Array.isArray(orders)) return "00"; // تجنب الأخطاء إذا كان orders غير معرف
        const filteredOrders = orders.filter((order) => order.orderStatus === status);
        return filteredOrders.length.toString().padStart(2, "0");
    }

    const ordersCount = orders.length ? orders.length.toString().padStart(2, "0") : "00";
    const pendingOrdersCount = getOrdersCountByStatus(status.pending);
    const processingOrdersCount = getOrdersCountByStatus(status.processing);
    const deliveredOrdersCount = getOrdersCountByStatus(status.delivering);

    const orderStats = [
        {
            title: "طلبات اليوم",
            number: ordersCount,
            iconBg: "bg-green-600",
            icon: ShoppingCart,
        },
        {
            title: "الطلبات المعلقة",
            number: pendingOrdersCount,
            iconBg: "bg-blue-600",
            icon: Loader2,
        },
        {
            title: "الطلبات قيد المعالجة",
            number: processingOrdersCount,
            iconBg: "bg-orange-600",
            icon: RefreshCcw,
        },
        {
            title: "الطلبات المنفذة",
            number: deliveredOrdersCount,
            iconBg: "bg-purple-600",
            icon: CheckCheck,
        },
    ];

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
            {/* عرض البطاقات */}
            {orderStats.map((data, i) => (
                <SmallCard key={i} data={data} />
            ))}
        </div>
    );
}
