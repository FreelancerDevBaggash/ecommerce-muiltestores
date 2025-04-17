
// import React   from 'react' ;
// import Heading from "@/components/backoffice/Heading";
// import LargeCards from "@/components/backoffice/LargeCards";
// import SmallCards from "@/components/backoffice/SmallCards";
// import DashboardCharts from "@/components/backoffice/DashboardCharts";
// import UserDashboard from "@/components/backoffice/UserDashboard";
// import VendorDashboard from "@/components/backoffice/VendorDashboard";
// import CustomDataTable from "@/components/backoffice/CustomDataTable";
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/lib/authOptions';
// import { getData } from '@/lib/getData';
// // 6.9k (gzipped: 2.7k)

// export default async function page(){
// //  const session = await getServerSession(authOptions);
// //  const role = session?.user?.role;


// const session = await getServerSession(authOptions);
//   const email = session?.user?.email;
//   // const userId = session?.user?.id;

//   // تأكد من أن هذه الكودات يتم تشغيلها فقط على العميل
//   // useEffect(() => {
//   //   if (typeof window !== "undefined" && userId) {
//   //     localStorage.setItem('vendorId', userId);
//   //     console.log("gooooooooooooooooooood", userId);
//   //   }
//   // }, [userId]);

// // console.log("jjjjjjjjjjjjjjjjj", email)
//   // Check if the user is a vendor or customer
//   let userType = null;

//   if (email) {
//     const vendor = await prisma.vendor.findUnique({ where: { email } });
//     if (vendor) {
//       userType = 'VENDOR';
//     } else {
//       const customer = await prisma.customer.findUnique({ where: { email } });
//       if (customer) {
//         userType = 'CUSTOMER';
//       }
//     }
//   }
//  const sales = await getData("sales");
//  const orders = await getData("orders");
//  const products = await getData("products");
// //  if(role === "USER"){
// //     return <UserDashboard/>
// //  }

// //  if(role === "VENDOR"){
// //     return <VendorDashboard/>
// //  }



//   // Render based on user type
//   if (userType === "CUSTOMER") {
//    return <UserDashboard />;
//  }

//  if (userType === "VENDOR") {
//    return <VendorDashboard />;
//  }
 
//     return(
//         <div>
//            <Heading title="Dashboard Overview"/>
//                 {/*Large Cards  */}
//                 <LargeCards sales={sales} />
//                  {/* Small Cards */}
//                  <SmallCards orders={orders} />
//                   {/* Charts*/}
//                   <DashboardCharts/>
//                    {/*Recent Orders Table */}
//                    {/* <CustomDataTable/> */}

//         </div>
//     )
// }

// import React from 'react';
// import Heading from "@/components/backoffice/Heading";
// import LargeCards from "@/components/backoffice/LargeCards";
// import SmallCards from "@/components/backoffice/SmallCards";
// import DashboardCharts from "@/components/backoffice/DashboardCharts";
// import UserDashboard from "@/components/backoffice/UserDashboard";
// import VendorDashboard from "@/components/backoffice/VendorDashboard";
// import CustomDataTable from "@/components/backoffice/CustomDataTable";

// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/lib/authOptions';
// import { getData } from '@/lib/getData';
// import db from '@/lib/db'; // Assuming you have prisma client set up

// export default async function Page() {
//   const session = await getServerSession(authOptions);
//   const email = session?.user?.email;
//   const userId = session?.user?.id;

//   // Check if the user is a vendor and fetch their store
//   let userType = null;
//   let store = null;

//   if (email) {
//     const vendor = await db.vendor.findUnique({
//       where: { email },
//       include: { store: true } // Include the store relation
//     });

//     if (vendor) {
//       userType = 'VENDOR';
//       store = vendor.store; // Store information for the vendor
//     } else {
//       const customer = await db.customer.findUnique({
//         where: { email }
//       });
//       if (customer) {
//         userType = 'CUSTOMER';
//       }
//     }
//   }

//   // Fetch additional data if necessary
//   const sales = store ? await getData("sales") : [];
//   // const orders = store ? await getData(`orders/user?storeId=${store.id}`) : [];
//    const orders = store ? await getData(`orders/user?storeId=${store.id}`) : [];
//   const products = store ? await getData("products", { storeId: store.id }) : [];
// console.log("order",store)
//   // Render based on user type
//   // if (userType === "CUSTOMER") {
//   //   return <UserDashboard />;
//   // }

//   // if (userType === "VENDOR" && store) {
//   //   return (
//   //     <VendorDashboard
//   //       store={store}
//   //       sales={sales}
//   //       orders={orders}
//   //       products={products}
//   //     />
//   //   );
//   // }

//   return (
//     <div>
//       <Heading title="Dashboard Overview" />
//       {/* Additional dashboard components */}
//       <LargeCards sales={sales} />
//       <SmallCards orders={orders} />
//       <DashboardCharts />
//       <CustomDataTable/>
//       <VendorDashboard/>
//       <UserDashboard/>
//     </div>
//   );
// }
import React from 'react';
import Heading from "@/components/backoffice/Heading";
import LargeCards from "@/components/backoffice/LargeCards";
import SmallCards from "@/components/backoffice/SmallCards";
import DashboardCharts from "@/components/backoffice/DashboardCharts";
import UserDashboard from "@/components/backoffice/UserDashboard";
import VendorDashboard from "@/components/backoffice/VendorDashboard";
import CustomDataTable from "@/components/backoffice/CustomDataTable";

import { getServerSession } from 'next-auth';
import { authOptions } from '../../../lib/authOptions';
import { getData } from '../../../lib/getData';
import db from '../../../lib/db'; // نفترض أن لديك إعداد prisma client

export default async function Page() {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  const userId = session?.user?.id;

  // التحقق مما إذا كان المستخدم بائعاً وجلب بيانات المتجر الخاص به
  let userType = null;
  let store = null;

  if (email) {
    const vendor = await db.vendor.findUnique({
      where: { email },
      include: { store: true } // تضمين علاقة المتجر
    });

    if (vendor) {
      userType = 'VENDOR';
      store = vendor.store; // معلومات المتجر للبائع
    } else {
      const customer = await db.customer.findUnique({
        where: { email }
      });
      if (customer) {
        userType = 'CUSTOMER';
      }
    }
  }

  // جلب بيانات إضافية إذا لزم الأمر
  const sales = store ? await getData("sales") : [];
  // const orders = store ? await getData(`orders/user?storeId=${store.id}`) : [];
  const products = store ? await getData("products", { storeId: store.id }) : [];
  console.log("order", store);

  // عرض الواجهة بناءً على نوع المستخدم
  // if (userType === "CUSTOMER") {
  //   return <UserDashboard />;
  // }

  // if (userType === "VENDOR" && store) {
  //   return (
  //     <VendorDashboard
  //       store={store}
  //       sales={sales}
  //       orders={orders}
  //       products={products}
  //     />
  //   );
  // }

  return (
    <div dir="rtl" className=' '>
      <Heading title="نظرة عامة على لوحة التحكم" />
      {/* مكونات لوحة التحكم الإضافية */}
      <LargeCards sales={sales} />
      {/* <SmallCards orders={orders} /> */}
      <DashboardCharts />
      <CustomDataTable />
      <VendorDashboard />
      <UserDashboard />
    </div>
  );
}
