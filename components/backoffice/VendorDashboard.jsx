// import { authOptions } from '@/lib/authOptions'
// import { getData } from '@/lib/getData';
// import { getServerSession } from 'next-auth'
// import React from 'react'
// import OverviewCards from './Vendor/OverciewCards'
// export default async function VendorDashboard() {
//   //Sales
//   //Products
//   const session = await getServerSession(authOptions);
//   const user = session?.user;
//   const { name , email , id , role , emailVerified } = user;
//   const sales = await getData("sales");
//   const salesById = sales.filter((sale) => sale.vendorId === id);
//   const products = await getData("products");
//   const productsById = products.filter((product) => product.userId === id);
//   return (
//     <div>
//     <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8
//     lg:py-14 mx-auto ">
//       <OverviewCards sales={salesById} products={productsById} />
//     </div>
//     </div>
//   )
// }

import { authOptions } from '@/lib/authOptions';
import { getData } from '@/lib/getData';
import { getServerSession } from 'next-auth';
import React from 'react';
//import OverviewCards from './Vendor/OverviewCards';
import OverviewCards from './Vendor/OverciewCards'
export default async function VendorDashboard() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user || user.role !== 'VENDOR') {
    // Redirect or handle unauthorized access
    return <p>Unauthorized access</p>;
  }

  const { id } = user;

  // Fetch sales and filter by vendor ID
  const sales = await getData("sales", { vendorId: id });
  const salesById = sales?.filter((sale) => sale.vendorId === id);

  // Fetch products and filter by vendor ID
  const products = await getData("products", { vendorId: id });
  const productsById = products?.filter((product) => product.vendorId === id);

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <OverviewCards sales={salesById} products={productsById} />
    </div>
  );
}
