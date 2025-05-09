// import React from 'react'
// import OrderCard from '../../../../components/Order/OrderCard'
// import { getData } from '@/lib/getData'
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/lib/authOptions';
// export default async function page() {
//   //Fetch All Orders 
//   const orders = await getData("orders");
//   //Get the User Id
//   const session = await getServerSession(authOptions);
//   if(!session) return

//   const userId = session?.user?.id;
//   console.log(userId)
//  // const storeData = await getData(`stores?vendorId=${userId}`);
//   //const storeId = storeData[0].id;

//   if(orders.length === 0|| !orders){
//     return <p>No Orders Yet</p>
//   }
//   //Filter By User Id
//   const userOrders = orders.filter((order) => order.customersId === userId);
//   // console.log(userOrders)
//   return (
//     <section className="py-12 bg-white sm:py-16 lg:py-20">
//     <div className="px-4 m-auto sm:px-6 lg:px-8 max-w-7xl">
//         <div className="max-w-6xl mx-auto">
//             <div>
//                 <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Your Order </h1>
//                 <p className="mt-2 text-sm font-normal text-gray-600">Check the status of recent and old orders & discover more products</p>
//             </div>

//             <ul className="mt-8 space-y-5 lg:mt-12 sm:space-y-6 lg:space-y-10">
//             {
//               userOrders.map((order, i) => {
//                 return  <OrderCard key={i} order={order} />
//               })
//             }
//             </ul>
//         </div>
//     </div>
// </section>
//   )
// }

import React from 'react'
import OrderCard from '../../../../components/Order/OrderCard'
import { getData } from '../../../../lib/getData'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../lib/authOptions'

export const dynamic = 'force-dynamic'; // ✅ هذا السطر مهم لحل الخطأ

export default async function page() {
  // Fetch All Orders 
  const orders = await getData("orders" , { mode: 'real-time'});

  // Get the User Id
  const session = await getServerSession(authOptions);
  if (!session) return;

  const userId = session?.user?.id;

  if (!orders || orders.length === 0) {
    return <p className="text-center text-gray-700 mt-6">لا توجد طلبات حتى الآن</p>
  }

  // Filter By User Id
  const userOrders = orders.filter((order) => order.customersId === userId);
  
  return (
    <section dir="rtl" className="py-16 bg-white sm:py-16 lg:py-20">
      <div className="px-4 m-auto sm:px-6 lg:px-6 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">طلباتي</h1>
            <p className="mt-2 text-sm font-normal text-gray-600">
              تابع حالة طلباتك السابقة والجديدة، واستكشف المزيد من المنتجات
            </p>
          </div>

          <ul className="mt-8 space-y-5 lg:mt-8 sm:space-y-6 lg:space-y-10">
            {
              userOrders.map((order, i) => (
                <OrderCard key={i} order={order} userId={userId} />
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}
