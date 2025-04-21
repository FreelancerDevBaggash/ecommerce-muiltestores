// import React from 'react'
// import {generateSlug} from '../../lib/generateSlug'
// import Link from 'next/link';
// import { convertIsoDateToNormal } from "../../lib/convertIsoDateToNormal"
// export default function OrderCard({order}) {
//    const orderCreationDate = convertIsoDateToNormal(order.createdAt);
//     const subTotal = order?.orderItems.reduce((total, item)=> total + item.price * item.quantity, 0).toFixed(2);

//     if(order.orderItems.length === 0){
//         return null ;
//     }
//   return (
//     <li className="overflow-hidden bg-white border border-gray-200 rounded-md">
//     <div className="lg:flex">
//         <div className="w-full border-b border-gray-200 lg:max-w-xs lg:border-b-0 lg:border-r bg-gray-50">
//             <div className="px-4 py-6 sm:p-6 lg:p-8">
//                 <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-1">
//                     <div>
//                         <p className="text-sm font-medium text-gray-500">Order Number</p>
//                         <p className="text-sm font-bold text-gray-900 mt-0.5">#{order.orderNumber}</p>
//                     </div>

//                     <div>
//                         <p className="text-sm font-medium text-gray-500">Date</p>
//                      <p className="text-sm font-bold text-gray-900 mt-0.5">{orderCreationDate}</p>
//                     </div>

//                     <div>
//                         <p className="text-sm font-medium text-gray-500">Total Amount</p>
//                         <p className="text-sm font-bold text-gray-900 mt-0.5">${subTotal}</p>
//                     </div>

//                     <div>
//                         <p className="text-sm font-medium text-gray-500">Order Status</p>
//                         <div className="mt-0.5 flex items-center">
//                             <div className="inline-flex items-center justify-center flex-shrink-0 w-3 h-3 rounded-full text-white bg-amber-400 mr-1.5">
//                                 <svg className="w-2 h-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                 </svg>
//                             </div>
//                             <span className="text-sm font-bold text-gray-900"> {""} {order.orderStatus} </span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div className="flex-1 px-4 py-6 sm:p-6 lg:p-8">
//             <ul className="space-y-7">
//              {
//                 order.orderItems.length>0 ? order.orderItems.map((item , i) => {
//                     const slug = generateSlug(item.title)
//                     return    <li key={i} className="relative flex pb-10 sm:pb-0">
//                     <div className="flex-shrink-0">
//                         <img className="object-cover rounded-lg w-28 h-28" src={item.imageUrl} alt={item.title} />
//                     </div>

//                     <div className="flex flex-col justify-between flex-1 ml-5">
//                         <div className="sm:grid sm:grid-cols-2 sm:gap-x-5">
//                             <div>
//                                 <p className="text-base font-bold text-gray-900"> {item.title} </p>
//                                 {/* <p className="mt-1.5 text-sm font-medium text-gray-500">Golden</p> */}
//                             </div>

//                             <div className="mt-4 sm:mt-0 flex items-center justify-between">
//                             <p className="text-sm font-medium text-gray-500 me-4">{item.quantity}</p>
//                                 <p className="text-base font-bold text-left text-gray-900 sm:text-right">${item.price}</p>
//                             </div>
//                         </div>

//                         <div className="absolute bottom-0 left-0 sm:relative">
//                             <div className="flex space-x-5">
//                                 <Link href={`/products/${slug}`} title={item.title} className="p-1 -m-1 text-sm font-medium text-gray-500 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> View Product </Link>

//                                 <span className="text-gray-200"> | </span>

//                                 <a href="#" title="" className="p-1 -m-1 text-sm font-medium text-gray-500 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"> Similar Product </a>
//                             </div>
//                         </div>
//                     </div>
//                 </li>
//                 }):""
//              }           
//             </ul>

//             <hr className="mt-8 border-gray-200" />

//             <div className="flex items-center mt-8 space-x-5">
//                 <button
//                     type="button"
//                     className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-bold text-gray-900 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-100"
//                 >
//                     View Order
//                 </button>

//                 <Link
//                     href={`/dashboard/orders/${order.id}/invoice`}
//                     className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-bold text-gray-900 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-100"
//                 >
//                     View Invoice
//                 </Link>
//             </div>
//         </div>
//     </div>
// </li>
//   )
// }

// "use client"
// import React from 'react'
// import { generateSlug } from '../../lib/generateSlug'
// import Link from 'next/link'
// import { convertIsoDateToNormal } from '../../lib/convertIsoDateToNormal'
// import Image from 'next/image'
// import { useState, useEffect } from 'react'
// import ReviewModal from './ReviewModal' // نفترض أنك راح تسوي هذا الملف لواجهة التقييم


// export default function OrderCard({ order , userId }) {
//   const orderCreationDate = convertIsoDateToNormal(order.createdAt)
//   const subTotal = order?.orderItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)

//   if (order.orderItems.length === 0) {
//     return null
//   }
//   const [showReviewModal, setShowReviewModal] = useState(false)

//   useEffect(() => {
//     const checkReviewStatus = async () => {
//       if (order.orderStatus === "DELIVERED") {
//         try {
//           const res = await fetch(`/api/reviews?storeId=${order.storeId}&userId=${userId}`)
//           const data = await res.json()

//           // إذا لا يوجد تقييم سابق، اعرض المودال
//           if (!data || data.length === 0) {
//             setShowReviewModal(true)
//           }
//         } catch (err) {
//           console.error("فشل في التحقق من التقييم:", err)
//         }
//       }
//     }

//     checkReviewStatus()
//   }, [order.orderStatus, order.storeId, userId])
  
//   {showReviewModal && (
//     <ReviewModal
//       storeId={order.storeId}
//       orderId={order.id}
//       userId={userId}
//       onClose={() => setShowReviewModal(false)}
//     />
//   )}

//   return (
    
//     <li dir="rtl" className="overflow-hidden bg-white border  border-gray-200 rounded-2xl shadow-sm">
//   <div className="lg:flex">

//     {/* معلومات الطلب */}
//     <div className="w-full border-b border-gray-200 lg:max-w-sm lg:border-b-0 lg:border-l bg-gray-50">
//       <div className="px-6 py-6 sm:p-8 lg:p-8">
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-1">
//           <div>
//             <p className="text-sm dark:text-gray-500  text-slate-800 font-medium">رقم الطلب</p>
//             <p className="text-base text-gray-900 font-bold mt-1">#{order.orderNumber}</p>
//           </div>

//           <div>
//             <p className="text-sm dark:text-gray-500  text-slate-800   font-medium">تاريخ الطلب</p>
//             <p className="text-base text-gray-900 font-bold mt-1">{orderCreationDate}</p>
//           </div>

//           <div>
//             <p className="text-sm text-gray-500 font-medium">إجمالي المبلغ</p>
//             <p className="text-base text-gray-900 font-bold mt-1">${subTotal}</p>
//           </div>

//           <div>
//             <p className="text-sm dark:text-gray-500  text-slate-800  font-medium">حالة الطلب</p>
//             <div className="mt-1 flex items-center">
//               <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-amber-400 me-2">
//                 <svg className="w-2.5 h-2.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </span>
//               <span className="text-base font-bold text-gray-900">{order.orderStatus}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* عناصر الطلب */}
// {/* عناصر الطلب */}
// <div className="flex-1 px-6 py-6 sm:p-8 lg:p-6">
//   <ul className={`gap-6 ${order.orderItems.length > 5 ? 'grid grid-cols-1 sm:grid-cols-2' : 'space-y-6'}`}>
//     {order.orderItems?.length > 0 && order.orderItems.map((item, i) => {
//       const slug = generateSlug(item.title);
//       return (
//         <li key={i} className="relative flex gap-2 border-b sm:border-none p-4 rounded-lg bg-white shadow-sm">
//           <div className="flex-shrink-0">
//             <Image
//               src={item.imageUrl}
//               alt={item.title}
//               width={20}
//               height={20}
//               className="w-24 h-24 object-cover rounded-lg border border-gray-200"
//             />
//           </div>

//           <div className="flex flex-col justify-between flex-1">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y- sm:gap-x-4">
//               <p className="text-base font-bold text-gray-900">{item.title}</p>
//               <div className="flex justify-between sm:justify-start items-center gap-4">
//                 <span className="text-sm font-medium text-gray-500">الكمية: {item.quantity}</span>
//                 <span className="text-base font-bold text-gray-900">${item.price}</span>
//               </div>
//             </div>

//             <div className="mt-2 flex gap-2 text-sm text-gray-500 flex-row-reverse">
//               <Link href={`/products/${slug}`} className="hover:text-gray-900 font-medium">
//                 عرض المنتج
//               </Link>
//               <span className="text-gray-300">|</span>
//               <a href="#" className="hover:text-gray-900 font-medium">
//                 منتجات مشابهة
//               </a>
//             </div>
//           </div>
//         </li>
//       )
//     })}
//   </ul>


//       <hr className="mt-8 border-gray-200" />

//       {/* الأزرار */}
//       <div className="flex items-center justify-end gap-4 mt-6 flex-row-reverse">
//         <button
//           type="button"
//           className="inline-flex items-center px-4 py-2 text-sm font-bold text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
//         >
//           عرض الطلب
//         </button>

//         <Link
//           href={`/dashboard/orders/${order.id}/invoice`}
//           className="inline-flex items-center px-4 py-2 text-sm font-bold text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
//         >
//           عرض الفاتورة
//         </Link>
//         {showReviewModal && (
//     <ReviewModal
//       storeId={order.storeId}
//       orderId={order.id}
//       customerId={userId}
//       onClose={() => setShowReviewModal(false)}
//     />
//   )}
   
//       </div>
//     </div>
//   </div>
// </li>
  
//   )
// }

// import { Badge } from "../../components/ui/badge"
// import Image from "next/image"

// export default function OrderCard({ order }) {
//   // حساب المبلغ الإجمالي إذا كانت هناك عناصر طلب
//   const totalAmount = order.orderItems
//     ? order.orderItems.reduce((total, item) => total + item.price * item.quantity, 0) + order.shippingCost
//     : Number.parseFloat(order.amount?.replace("ريال ", "") || "0")

//   return (
//     <div className="bg-white rounded-lg p-6 max-w-3xl mx-auto">
//       <div className="flex justify-between items-center mb-6 border-b pb-4">
//         <div>
//           <h2 className="text-2xl font-bold">تفاصيل الطلب #{order.orderNumber || order.id}</h2>
//           <p className="text-gray-500">تاريخ الطلب: {new Date(order.createdAt).toLocaleDateString("ar-SA")}</p>
//         </div>
//         <div>
//           <Badge className={getStatusBadgeClass(order.orderStatus)}>{order.orderStatus}</Badge>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         <div>
//           <h3 className="font-semibold mb-2">معلومات العميل</h3>
//           <p>
//             الاسم: {order.firstName} {order.lastName}
//           </p>
//           <p>البريد الإلكتروني: {order.email}</p>
//           <p>رقم الهاتف: {order.phone}</p>
//           <p>طريقة الدفع: {order.paymentMethod}</p>
//         </div>
//         <div>
//           <h3 className="font-semibold mb-2">معلومات الشحن</h3>
//           <p>العنوان: {order.streetAddress}</p>
//           <p>المدينة: {order.city}</p>
//           <p>الحي: {order.district}</p>
//           <p>البلد: {order.country}</p>
//           <p>تكلفة الشحن: {order.shippingCost.toFixed(2)} ر.ي</p>
//         </div>
//       </div>

//       <div className="mb-6">
//         <h3 className="font-semibold mb-2">المنتجات</h3>
//         <div className="border rounded-lg overflow-hidden">
//           <table className="w-full">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="py-2 px-4 text-right">المنتج</th>
//                 <th className="py-2 px-4 text-center">الصورة</th>
//                 <th className="py-2 px-4 text-right">السعر</th>
//                 <th className="py-2 px-4 text-right">الكمية</th>
//                 <th className="py-2 px-4 text-right">المجموع</th>
//               </tr>
//             </thead>
//             <tbody>
//               {order.orderItems ? (
//                 order.orderItems.map((item, index) => (
//                   <tr key={index} className="border-t">
//                     <td className="py-3 px-4">{item.title}</td>
//                     <td className="py-3 px-4 text-center">
//                       <div className="flex justify-center">
//                         <Image
//                           src={item.imageUrl || "/placeholder.svg?height=50&width=50"}
//                           alt={item.title}
//                           width={50}
//                           height={50}
//                           className="rounded-md object-cover"
//                         />
//                       </div>
//                     </td>
//                     <td className="py-3 px-4">ر.ي {item.price.toFixed(2)}</td>
//                     <td className="py-3 px-4">{item.quantity}</td>
//                     <td className="py-3 px-4">ر.ي {(item.price * item.quantity).toFixed(2)}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr className="border-t">
//                   <td colSpan={5} className="py-3 px-4 text-center text-gray-500">
//                     لا توجد تفاصيل للمنتجات
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//             <tfoot className="bg-gray-50">
//               <tr>
//                 <td colSpan={4} className="py-3 px-4 text-left font-semibold">
//                   تكلفة الشحن
//                 </td>
//                 <td className="py-3 px-4 font-semibold">ر.ي {order.shippingCost?.toFixed(2) || "0.00"}</td>
//               </tr>
//               <tr>
//                 <td colSpan={4} className="py-3 px-4 text-left font-semibold">
//                   المجموع الكلي
//                 </td>
//                 <td className="py-3 px-4 font-semibold">ر.ي {totalAmount.toFixed(2)}</td>
//               </tr>
//             </tfoot>
//           </table>
//         </div>
//       </div>

//       <div className="flex justify-end gap-2">
//         <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">طباعة الفاتورة</button>
//         <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">تحديث الحالة</button>
//       </div>
//     </div>
//   )
// }

// function getStatusBadgeClass(status) {
//   switch (status) {
//     case "جديد":
//       return "bg-green-100 text-green-800"
//     case "جاري التجهيز":
//       return "bg-purple-100 text-purple-800"
//     case "جاهز":
//       return "bg-blue-100 text-blue-800"
//     case "جاري التوصيل":
//       return "bg-amber-100 text-amber-800"
//     case "تم التوصيل":
//       return "bg-teal-100 text-teal-800"
//     case "ملغي":
//       return "bg-red-100 text-red-800"
//     default:
//       return "bg-gray-100 text-gray-800"
//   }
// }

 'use client'
import { useState, useEffect } from 'react'
import { Badge } from "../../components/ui/badge"
import Image from "next/image"
import ReviewModal from './ReviewModal'

export default function OrderCard({ order, userId }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hasReviewed, setHasReviewed] = useState(false)

  // حساب المبلغ الإجمالي
  const totalAmount = order.orderItems
    ? order.orderItems.reduce((total, item) => total + item.price * item.quantity, 0) + order.shippingCost
    : Number.parseFloat(order.amount?.replace("ريال ", "") || "0")

  // دالة للتحقق من التقييمات السابقة
  const checkIfReviewed = async () => {
    try {
      const response = await fetch(`/api/reviews?storeId=${order.storeId}&customerStoreId=${order.CustomerStoreId}`)
      const reviews = await response.json()
      if (reviews.length > 0) {
        setHasReviewed(true) // إذا كان العميل قد قيم المتجر
      }
    } catch (error) {
      console.error("Error fetching reviews:", error)
    }
  }

  // فتح الـ Modal عندما تكون حالة الطلب "تم التوصيل" ولم يقيم العميل المتجر
  const handleModalOpen = () => {
    if (order.orderStatus === "DELIVERED" && !hasReviewed) {
      setIsModalOpen(true)
    }
  }

  // إغلاق الـ Modal
  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  // تحقق عند أول تحميل
  useEffect(() => {
    checkIfReviewed()
    handleModalOpen()
  }, [order, hasReviewed])

  return (
    <div className="bg-white rounded-lg p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <div>
          <h2 className="text-2xl font-bold">تفاصيل الطلب #{order.orderNumber || order.id}</h2>
          <p className="text-gray-500">تاريخ الطلب: {new Date(order.createdAt).toLocaleDateString("ar-SA")}</p>
        </div>
        <div>
          <Badge className={getStatusBadgeClass(order.orderStatus)}>{order.orderStatus}</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-semibold mb-2">معلومات العميل</h3>
          <p>
            الاسم: {order.firstName} {order.lastName}
          </p>
          <p>البريد الإلكتروني: {order.email}</p>
          <p>رقم الهاتف: {order.phone}</p>
          <p>طريقة الدفع: {order.paymentMethod}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">معلومات الشحن</h3>
          <p>العنوان: {order.streetAddress}</p>
          <p>المدينة: {order.city}</p>
          <p>الحي: {order.district}</p>
          <p>البلد: {order.country}</p>
          <p>تكلفة الشحن: {order.shippingCost.toFixed(2)} ر.ي</p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">المنتجات</h3>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-2 px-4 text-right">المنتج</th>
                <th className="py-2 px-4 text-center">الصورة</th>
                <th className="py-2 px-4 text-right">السعر</th>
                <th className="py-2 px-4 text-right">الكمية</th>
                <th className="py-2 px-4 text-right">المجموع</th>
              </tr>
            </thead>
            <tbody>
              {order.orderItems ? (
                order.orderItems.map((item, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-3 px-4">{item.title}</td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center">
                        <Image
                          src={item.imageUrl || "/placeholder.svg?height=50&width=50"}
                          alt={item.title}
                          width={50}
                          height={50}
                          className="rounded-md object-cover"
                        />
                      </div>
                    </td>
                    <td className="py-3 px-4">ر.ي {item.price.toFixed(2)}</td>
                    <td className="py-3 px-4">{item.quantity}</td>
                    <td className="py-3 px-4">ر.ي {(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))
              ) : (
                <tr className="border-t">
                  <td colSpan={5} className="py-3 px-4 text-center text-gray-500">
                    لا توجد تفاصيل للمنتجات
                  </td>
                </tr>
              )}
            </tbody>
            <tfoot className="bg-gray-50">
              <tr>
                <td colSpan={4} className="py-3 px-4 text-left font-semibold">
                  تكلفة الشحن
                </td>
                <td className="py-3 px-4 font-semibold">ر.ي {order.shippingCost?.toFixed(2) || "0.00"}</td>
              </tr>
              <tr>
                <td colSpan={4} className="py-3 px-4 text-left font-semibold">
                  المجموع الكلي
                </td>
                <td className="py-3 px-4 font-semibold">ر.ي {totalAmount.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">طباعة الفاتورة</button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">تحديث الحالة</button>
      </div>

      {/* عرض الـ Modal إذا كانت الحالة "تم التوصيل" ولم يقيم العميل المتجر */}
      {isModalOpen && !hasReviewed && (
        <ReviewModal
          storeId={order.storeId}
          customerStoreId={order.CustomerStoreId}
          onClose={handleModalClose}
        />
      )}
    </div>
  )
}

function getStatusBadgeClass(status) {
  switch (status) {
    case "جديد":
      return "bg-green-100 text-green-800"
    case "جاري التجهيز":
      return "bg-purple-100 text-purple-800"
    case "جاهز":
      return "bg-blue-100 text-blue-800"
    case "جاري التوصيل":
      return "bg-amber-100 text-amber-800"
    case "تم التوصيل":
      return "bg-teal-100 text-teal-800"
    case "ملغي":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}
