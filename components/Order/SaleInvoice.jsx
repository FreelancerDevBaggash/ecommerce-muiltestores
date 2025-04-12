// "use client"
// import Image from "next/image";
// import React, { useRef } from "react";
// import logo from "../../public/logo-dark.png";
// import { getData } from '../../lib/getData'
// import { useReactToPrint } from 'react-to-print'
// import { convertIsoDateToNormal } from '../../lib/convertIsoDateToNormal'
// export default async function SaleInvoice({sale}) {
//      const invoiceDate = convertIsoDateToNormal(sale.createdAt)
//     const subTotal=sale.saleItems.reduce((acc, currentItem) => {return acc + (currentItem.productPrice * currentItem.productQty ) },0).toFixed(2) ?? 0;
//   // const subTotal = parseFloat(order.orderItems.reduce((acc, currentItem) => {
//   //   return acc + (currentItem.price * currentItem.quantity);
//   // }, 0).toFixed(2)) ?? 0;
// //   const storeId = sale.storeId ;
// //   const storeData = await getData(`stores?storeId=${storeId}`);
// //   console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",storeData)
//     const tax = 20;


//     const total = (parseFloat(subTotal) + parseFloat(tax)).toFixed(2);

//     const invoiceRef = useRef();

//     const handlePrint  = useReactToPrint({
//         content: () => invoiceRef.current,
//     })
//   return (
//     <div className="flex flex-col"> 
//     {/*Download Button*/} 
//           <div className="flex items-end justify-end mb-8">
//     <button onClick={handlePrint}
//       type="button"
//       className="inline-flex items-center justify-center px-4 py-3 text-xs font-bold dark:text-gray-900 transition-all duration-200 dark:bg-gray-100 bg-slate-800 text-slate-200 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 "
//     >
//       Download/Print  Invoice
//     </button>
//   </div>
//   {/* Invoice */}
//   <div ref={invoiceRef}>
//   <div className="max-w-4xl mx-auto border border-gray-500 p-8 rounded-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 ">
//       {/* Header */}
//       <div className="flex justify-between border-b border-gray-500 pb-8">
//         <div className="flex flex-col">
//           <h2>Bill From:</h2>
//           <p>Shoppify Hardware Store</p>
//           <p>150 Eleign Street</p>
//           <p>Canada</p>
//           <p>shopiifystore@gmail.com</p>
//         </div>
//         <Image src={logo} alt="limifood logo" className="w-36 h-16" />
//       </div>
//       {/* Header End */}
//       <div className="flex justify-between border-b border-gray-500 py-8">
//         <div className="flex flex-col">
//           <h2>Bill To:</h2>
//           <p>{sale.username}</p>
//           {/* <p>{sale.streetAddress} {sale.city} {sale.district}</p>
//           <p>{sale.country}</p>
//           <p>{sale.email}</p> */}
//         </div>
//         <div className="flex flex-col">
//           <div className="flex justify-between gap-4">
//             <p>Invoice #</p>
//             <p>12031</p>
//           </div>
//           <div className="flex justify-between gap-4">
//             <p>Invoice Date</p>
//             <p>{invoiceDate}</p>
            
//           </div>
//           <div className="flex justify-between gap-4">
//             <p>Amount Due</p>
//             <p>${subTotal}</p>
//           </div>
//         </div>
//       </div>

//       <div className="relative overflow-x-auto ">
//         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//               <th scope="col" className="px-6 py-3">
//                 Item
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Item Description
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Qty
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Unit Cost
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Line Total
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//                 {
//                     sale.saleItems.map((item , i) => {
//                         const itemSubtotal = (item.productQty * item.productPrice).toFixed(2)
//                         return (
//                             <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//                             <th
//                               scope="row"
//                               className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//                             >
//                               {item.productTitle}
//                             </th>
//                             <td className="px-6 py-4">Silver</td>
//                             <td className="px-6 py-4">{item.productQty}</td>
//                             <td className="px-6 py-4">${item.productPrice}</td>
//                             <td className="px-6 py-4">${itemSubtotal} </td>
//                           </tr>
//                         )
//                     })
//                 }
//           </tbody>
//         </table>
//       </div>

//       <div className="flex justify-between border-b border-gray-500 py-8">
//         <div className="flex flex-col">
//           <h2>NOTES</h2>
//           <p>Free Shipping for 30 Days Money back guarantee</p>
//         </div>
//         <div className="flex flex-col">
//           <div className="flex justify-between qap-4">
//             <p>SubTotal</p>
//             <p>${subTotal}</p>
//           </div>
//           <div className="flex justify-between">
//             <p>Tax</p>
//             <p>${tax}</p>
//           </div>
//           <div className="flex justify-between">
//             <p>Total</p>
//             <p>${total}</p>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center items-center pt-8">
//         <Image src={logo} alt="limifood logo" className="w-36 h-16" />
//       </div>
//     </div>
//   </div>
//   </div>
  
//   );
// }


// "use client"
// import React, { useRef } from "react";
// import Image from "next/image";
// import logo from "../../public/logo-dark.png";
// import { useReactToPrint } from 'react-to-print';
// import { convertIsoDateToNormal } from '../../lib/convertIsoDateToNormal';

// export default function SaleInvoice({ sale }) {
//   const invoiceRef = useRef();
//   const handlePrint = useReactToPrint({ content: () => invoiceRef.current });

//   const invoiceDate = convertIsoDateToNormal(sale.createdAt);
//   const subTotal = sale.saleItems.reduce(
//     (acc, item) => acc + item.productPrice * item.productQty,
//     0
//   ).toFixed(2);
//   const tax = 20;
//   const total = (parseFloat(subTotal) + tax).toFixed(2);

//   return (
//     <div className="flex flex-col">
//       {/* Button */}
//       <div className="flex items-end justify-end mb-8">
//         <button
//           onClick={handlePrint}
//           className="px-4 py-3 text-xs font-bold bg-slate-800 text-white rounded-md"
//         >
//           Download/Print Invoice
//         </button>
//       </div>

//       {/* Invoice */}
//       <div ref={invoiceRef}>
//         <div className="max-w-4xl mx-auto border border-gray-500 p-8 rounded-sm bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-200">
//           {/* Header */}
//           <div className="flex justify-between border-b border-gray-500 pb-8">
//             <div>
//               <h2>Bill From:</h2>
//               <p>Shoppify Hardware Store</p>
//               <p>150 Eleign Street</p>
//               <p>Canada</p>
//               <p>shopiifystore@gmail.com</p>
//             </div>
//             <Image src={logo} alt="logo" className="w-36 h-16" />
//           </div>

//           {/* Customer Info */}
//           <div className="flex justify-between border-b border-gray-500 py-8">
//             <div>
//               <h2>Bill To:</h2>
//               <p>{sale.username}</p>
//             </div>
//             <div>
//               <p>Invoice #: 12031</p>
//               <p>Invoice Date: {invoiceDate}</p>
//               <p>Amount Due: ${subTotal}</p>
//             </div>
//           </div>

//           {/* Table */}
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm text-gray-500 dark:text-gray-400">
//               <thead className="bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-400">
//                 <tr>
//                   <th className="px-6 py-3">Item</th>
//                   <th className="px-6 py-3">Description</th>
//                   <th className="px-6 py-3">Qty</th>
//                   <th className="px-6 py-3">Unit Cost</th>
//                   <th className="px-6 py-3">Line Total</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {sale.saleItems.map((item, i) => (
//                   <tr key={i} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
//                     <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{item.productTitle}</td>
//                     <td className="px-6 py-4">Silver</td>
//                     <td className="px-6 py-4">{item.productQty}</td>
//                     <td className="px-6 py-4">${item.productPrice}</td>
//                     <td className="px-6 py-4">${(item.productQty * item.productPrice).toFixed(2)}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Total Summary */}
//           <div className="flex justify-between border-b border-gray-500 py-8">
//             <div>
//               <h2>NOTES</h2>
//               <p>Free Shipping for 30 Days Money back guarantee</p>
//             </div>
//             <div>
//               <p>SubTotal: ${subTotal}</p>
//               <p>Tax: ${tax}</p>
//               <p>Total: ${total}</p>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="flex justify-center pt-8">
//             <Image src={logo} alt="logo" className="w-36 h-16" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import logo from "../../public/logo-dark.png";
import { useReactToPrint } from "react-to-print";
import { convertIsoDateToNormal } from "../../lib/convertIsoDateToNormal";

export default function SaleInvoice({ sale }) {
  const invoiceRef = useRef();
  const handlePrint = useReactToPrint({ content: () => invoiceRef.current });

  const invoiceDate = convertIsoDateToNormal(sale.createdAt);
  const subTotal = sale.saleItems
    .reduce((acc, item) => acc + item.productPrice * item.productQty, 0)
    .toFixed(2);
  const tax = 20;
  const total = (parseFloat(subTotal) + tax).toFixed(2);

  return (
    <div className="flex flex-col">
      {/* Button */}
      <div className="flex items-end justify-end mb-8">
        <button
          onClick={handlePrint}
          className="px-6 py-3 text-xs font-bold bg-green-600 text-white rounded-md shadow-lg hover:bg-green-700 transition-colors"
        >
          تنزيل / طباعة الفاتورة
        </button>
      </div>

      {/* Invoice */}
      <div ref={invoiceRef}>
        <div className="max-w-4xl mx-auto border border-gray-500 p-8 rounded-md bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-200 shadow-lg">
          {/* Header */}
          <div className="flex justify-between border-b border-gray-500 pb-8 mb-8">
            <div>
              <h2 className="text-xl font-bold">الفاتورة من:</h2>
              <p>متجر شوفبي</p>
              <p>150 شارع إليغن</p>
              <p>كندا</p>
              <p>shopiifystore@gmail.com</p>
            </div>
            <Image src={logo} alt="logo" className="w-36 h-16" />
          </div>

          {/* Customer Info */}
          <div className="flex justify-between border-b border-gray-500 py-8 mb-8">
            <div>
              <h2 className="text-xl font-bold">الفاتورة إلى:</h2>
              <p>{sale.username}</p>
            </div>
            <div>
              <p className="text-sm">رقم الفاتورة: 12031</p>
              <p className="text-sm">تاريخ الفاتورة: {invoiceDate}</p>
              <p className="text-sm">المبلغ المستحق: ${subTotal}</p>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-3 text-left">المنتج</th>
                  <th className="px-6 py-3 text-left">الوصف</th>
                  <th className="px-6 py-3 text-left">العدد</th>
                  <th className="px-6 py-3 text-left">سعر الوحدة</th>
                  <th className="px-6 py-3 text-left">المجموع الفرعي</th>
                </tr>
              </thead>
              <tbody>
                {sale.saleItems.map((item, i) => (
                  <tr
                    key={i}
                    className="bg-white dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                      {item.productTitle}
                    </td>
                    <td className="px-6 py-4">فضي</td>
                    <td className="px-6 py-4">{item.productQty}</td>
                    <td className="px-6 py-4">${item.productPrice}</td>
                    <td className="px-6 py-4">
                      ${(item.productQty * item.productPrice).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total Summary */}
          <div className="flex justify-between border-b border-gray-500 py-8 mt-8">
            <div>
              <h2 className="text-xl font-bold">ملاحظات</h2>
              <p>الشحن المجاني لمدة 30 يومًا مع ضمان استرداد الأموال</p>
            </div>
            <div>
              <p>المجموع الفرعي: ${subTotal}</p>
              <p>الضريبة: ${tax}</p>
              <p>الإجمالي: ${total}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-center pt-8">
            <Image src={logo} alt="logo" className="w-36 h-16" />
          </div>
        </div>
      </div>
    </div>
  );
}
