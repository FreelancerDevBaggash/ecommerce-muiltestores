// // import PageHeader from "@/components/backoffice/PageHeader"
// // import TableActions from "@/components/backoffice/TableActions"
// // import React from "react"
// import DataTable from "../../../../../components/data-table-components/DataTable"
// import { getData } from '../../../../../lib/getData'
// import {columns} from "./columns"
// import { getServerSession } from "next-auth"
// import { authOptions } from "../../../../../lib/authOptions"
// import SmallCards from '../../../../../components/backoffice/SmallCards'
// export default async function page() {
//     //Fetch All Orders 
//     const orders = await getData("orders");
//     //Get the User Id
//     const session = await getServerSession(authOptions);
//     if(!session) return
  
//     const userId = session?.user?.id;
//     console.log(userId)
//    const storeData = await getData(`stores?vendorId=${userId}`);
//     const storeId = storeData[0].id;
  
//     if(orders.length === 0|| !orders){
//       return <p>No Orders Yet</p>
//     }
//     //Filter By User Id
//     const userOrders = orders.filter((order) => order.storeId === storeId);


// return (
//     <div dir="rtl" >
//     <SmallCards orders={userOrders} />
//      <DataTable data={userOrders} columns={columns} />
//      </div>
// );
// }
// // export default async function Coupons(){
// //     const session = await getServerSession(authOptions);
// //     const id = session?.user?.id;
// //     const role = session?.user?.role;
// //     const allSales = await getData("sales")

// //     //Fetch all the Sales
// //     //Filter by vendorId => to get sales for this vendor
// //     //Fetch Order by Id
// //     //Customer Name. email , phone, OrderNumber
// //     const vendorSales = allSales.filter((sale)=>sale.vendorId===id)
// //     return(
    
// //     <div>
// // {/*Header*/}
// // <PageHeader heading="Coupons"  href="/dashboard/coupons/new" linkTitle="Add Coupons"/>

// // <div className="py-8">
// // {role === "ADMIN" ? (
// //     <DataTable data={allSales} columns={columns} />
// //     ):(
// //      <DataTable data={vendorSales} columns={columns} />
// //     )}
// // </div>
// //     </div>
    
    
// //     )
// //     }

import OrdersDashboard from "../../../../../components/orders-dashboard"

export default function page() {
  return <OrdersDashboard />
}
