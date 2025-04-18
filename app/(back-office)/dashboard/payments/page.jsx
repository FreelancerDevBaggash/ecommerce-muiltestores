// import PageHeader from "@/components/backoffice/PageHeader"
// import TableActions from "@/components/backoffice/TableActions"
// import React from "react"
// import DataTable from "../../../../components/data-table-components/DataTable"
// import { getData } from '@/lib/getData'
// import {columns} from "./columns"


// export default async function page(){
//     const mainCategories = await getData("PaymentProvider")
//     return(
    
//     <div>
// {/*Header*/}
// <PageHeader heading="PaymentProvider"  href="/dashboard/PaymentProvider/new" linkTitle="Add MainCategory"/>



// <div className="py-0">
// <DataTable data={PaymentProvider} columns={columns}  filterKeys={["name"]} />
// </div>
//     </div>
    
    
//     )
//     }
// import PageHeader from "@/components/backoffice/PageHeader";
// import DataTable from "../../../../components/data-table-components/DataTable";
// import { getData } from '@/lib/getData';
// import { columns } from "./columns";

// export default async function Page() {
//   // جلب البيانات من الـ API
//   const paymentProviders = await getData("PaymentProvider"); // تأكد من أن نقطة النهاية API تعمل بشكل صحيح
// console.log("paymentProviderspaymentProviderspaymentProviders0",paymentProviders)
//   return (
//     <div>
//       {/* Header */}
//       <PageHeader
//         heading="Payment Providers"
//         href="/dashboard/payments/new"
//         linkTitle="Add Payment Provider"
//       />

//       <div className="py-0">
//         {/* جدول البيانات */}
//         <DataTable 
//           data={paymentProviders} // استخدام البيانات الصحيحة
//           columns={columns} 
//           filterKeys={["name"]} // التأكد من أن الحقول متوافقة
//         />
//       </div>
//     </div>
//   );
// }
// قفم

// import PageHeader from "../../../../components/backoffice/PageHeader";
// import DataTable from "../../../../components/data-table-components/DataTable";
// import { getData } from "../../../../lib/getData";
// import { columns } from "./columns";

// export default async function Page() {
//   // جلب البيانات من الـ API
//   const paymentProviders = await getData("PaymentProvider");
//   console.log("paymentProviders", paymentProviders);

//   return (
//     <div dir="rtl">
//       {/* رأس الصفحة */}
//       <PageHeader
//         heading="مزودو الدفع"
//         href="/dashboard/payments/new"
//         linkTitle="إضافة مزود دفع"
//       />

//       <div className="py-0">
//         {/* جدول البيانات */}
//         <DataTable 
//           data={paymentProviders}
//           columns={columns}
//           filterKeys={["name"]}
//         />
//       </div>
//     </div>
//   );
// }

import PageHeader from "../../../../components/backoffice/PageHeader";
import DataTable from "../../../../components/data-table-components/DataTable";
import { getData } from "../../../../lib/getData";
import { useMemo } from "react";
import { columns } from "./columns";

export default async function Page() {
  // جلب البيانات من الـ API
  const paymentProviders = await getData("PaymentProvider");
  console.log("paymentProviders", paymentProviders);

  // استخدام useMemo لتخزين الأعمدة
  const memoizedColumns = useMemo(() => columns, []);

  return (
    <div dir="rtl">
      {/* رأس الصفحة */}
      <PageHeader
        heading="مزودو الدفع"
        href="/dashboard/payments/new"
        linkTitle="إضافة مزود دفع"
      />

      <div className="py-0">
        {/* جدول البيانات */}
        <DataTable 
          data={paymentProviders}
          columns={memoizedColumns}
          filterKeys={["name"]}
        />
      </div>
    </div>
  );
}
