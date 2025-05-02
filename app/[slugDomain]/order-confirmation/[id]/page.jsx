// import { getData } from "@/lib/getData";
// import { Items } from "@radix-ui/react-dropdown-menu";
// import { CheckCircle2 } from "lucide-react";
// import Image from "next/image";
// import React from "react";

// export default async function page({ params: { id } }) {
//   const order = await getData(`orders/${id}`);
//   const { orderItems } = order;
//   const subTotal = orderItems
//     .reduce((acc, item) => acc + item.price * item.quantity, 0)
//     .toFixed(2);
//   return (
//     <section className="py-12 dark:bg-slate-950 bg-slate-50 sm:py-16 lg:py-20">
//       <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-5xl">
//         <div className="max-w-2xl mx-auto">
//           <div className="relative mt-6 overflow-hidden bg-white dark:bg-slate-700 rounded-lg shadow md:mt-10">
//             <div className="absolute top-4 right-4">
//               <button
//                 type="button"
//                 className="inline-flex items-center justify-center px-4 py-3 text-xs font-bold text-gray-900 transition-all duration-200 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-200"
//               >
//                 View invoice
//               </button>
//             </div>

//             <div className="px-4 py-6 sm:px-8 sm:py-10">
//               <div className="-my-8 divide-y divide-gray-200">
//                 <div className="pt-16 pb-8 text-center sm:py-8">
//                   <CheckCircle2 className="w-10 h-10 mx-auto text-lime-500" />

//                   <h1 className="mt-4 text-2xl font-bold text-gray-900 dark:text-lime-50">
//                     We received your order!
//                   </h1>
//                   <p className="mt-2 text-sm font-normal text-gray-600 dark:text-slate-300">
//                     Your order #{order.orderNumber} is completed and ready to
//                     ship
//                   </p>
//                 </div>

//                 <div className="py-8">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-x-20">
//                     <div>
//                       <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase dark:text-gray-500">
//                         Shipping Address
//                       </h2>
//                       <p className="mt-6 text-sm font-medium text-gray-600 dark:text-gray-300">
//                         {order.firstName} {order.lastName}
//                       </p>
//                       <p className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-300">
//                         {order.streetAddress} {order.city}, {order.district},{" "}
//                         {order.country}
//                       </p>
//                     </div>

//                     <div>
//                       <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase dark:text-gray-500">
//                         Payment Info
//                       </h2>
//                       <p className="mt-6 text-sm font-medium text-gray-600 dark:text-gray-300">
//                         {order.paymentMethod}
//                       </p>
//                       {/* <p className="mt-1 text-sm font-medium text-gray-600">
//                         VISA
//                         <br />
//                         **** 4660
//                       </p> */}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="py-8">
//                   <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase dark:text-gray-500">
//                     Order Items
//                   </h2>

//                   <div className="flow-root mt-8">
//                     <ul className="divide-y divide-gray-200 -my-7">
//                       {orderItems.length > 0 &&
//                         orderItems.map((item, i) => {
//                           return (
//                             <li
//                               key={i}
//                               className="flex items-start justify-between space-x-5 py-7 md:items-stretch"
//                             >
//                               <div className="flex items-stretch">
//                                 <div className="flex-shrink-0">
//                                   <Image
//                                     width={200}
//                                     height={200}
//                                     className="object-cover w-20 h-20 rounded-lg"
//                                     src={item.imageUrl}
//                                     alt={item.title}
//                                   />
//                                 </div>

//                                 <div className="flex flex-col justify-between ml-5 w-44">
//                                   <p className="flex-1 text-sm font-bold text-gray-900 dark:text-gray-300">
//                                     {item.title}
//                                   </p>
//                                   {/* <p className="mt-1.5 text-sm font-medium text-gray-500">
//                                     Golden
//                                   </p> */}
//                                 </div>
//                               </div>

//                               <div className="ml-auto">
//                                 <p className="text-sm font-bold text-right text-gray-900 dark:text-gray-300">
//                                   {item.price}
//                                 </p>
//                               </div>
//                             </li>
//                           );
//                         })}
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="py-8">
//                   <ul className="space-y-4">
//                     <li className="flex items-center justify-between">
//                       <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
//                         Sub total
//                       </p>
//                       <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
//                         {subTotal}
//                       </p>
//                     </li>

//                     <li className="flex items-center justify-between">
//                       <p className="text-base font-medium text-gray-900 dark:text-white">
//                         Total
//                       </p>
//                       <p className="text-base font-bold text-gray-900 dark:text-white">
//                         {subTotal}
//                       </p>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { getData } from "@/lib/getData";
import { Items } from "@radix-ui/react-dropdown-menu";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import React from "react";

export default async function page({ params: { id } }) {
  const order = await getData(`orders/${id}`);
  const { orderItems } = order;
  const subTotal = orderItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <section className="py-12 bg-gray-50 dark:bg-slate-950 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-5xl">
        <div className="max-w-2xl mx-auto">
          <div className="relative mt-6 overflow-hidden bg-white shadow-lg rounded-xl dark:bg-slate-800">
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-sm font-medium text-green-600 bg-green-100 rounded-full dark:bg-green-900/30 dark:text-green-400">
                رقم الطلب #{order.orderNumber}
              </span>
            </div>

            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <div className="-my-8 divide-y divide-gray-200 dark:divide-slate-700">
                {/* شريط الحالة */}
                <div className="pt-16 pb-8 text-center sm:py-8">
                  <div className="relative inline-block">
                    <CheckCircle2 className="w-16 h-16 mx-auto text-green-500 animate-pulse" />
                    <div className="absolute inset-0 bg-green-100 rounded-full opacity-20 -z-10" />
                  </div>

                  <h1 className="mt-6 text-2xl font-bold text-gray-900 md:text-3xl dark:text-slate-100">
                    تم استلام طلبك بنجاح!
                  </h1>
                  <p className="mt-3 text-gray-600 dark:text-slate-400">
                    الطلب جاهز للشحن وسيتم إرساله خلال 24 ساعة
                  </p>
                </div>

                {/* معلومات الشحن والدفع */}
                <div className="py-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="p-4 bg-gray-50 rounded-lg dark:bg-slate-900">
                      <h3 className="text-sm font-semibold text-gray-500 dark:text-slate-400">
                        عنوان الشحن
                      </h3>
                      <div className="mt-3 space-y-1.5 text-gray-800 dark:text-slate-200">
                        <p>{order.firstName} {order.lastName}</p>
                        <p>{order.streetAddress}</p>
                        <p>{order.city}, {order.district}</p>
                        <p>{order.country}</p>
                      </div>
                    </div>

                    {/* معلومات الدفع */}
                    <div className="p-4 bg-gray-50 rounded-lg dark:bg-slate-900">
                      <h3 className="text-sm font-semibold text-gray-500 dark:text-slate-400">
                        معلومات الدفع
                      </h3>
                      <div className="mt-3 space-y-1.5 text-gray-800 dark:text-slate-200">
                        <p>
                          طريقة الدفع:{" "}
                          {order.paymentMethod === 'COD' ? (
                            <span className="font-semibold">الدفع عند الاستلام</span>
                          ) : (
                            order.paymentMethod
                          )}
                        </p>
                        <p>
                          حالة الدفع:{" "}
                          <span className="text-green-600 dark:text-green-400">
                            {order.paymentStatuse === 'UNPAID' ? (
                              <span className="font-arabic text-red-600 dark:text-red-400"> غير مدفوع </span>): ( order.paymentStatuse
                            )}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* عناصر الطلب */}
                <div className="py-8">
                  <h3 className="mb-6 text-lg font-semibold text-gray-800 dark:text-slate-200">
                    العناصر المطلوبة ({orderItems.length})
                  </h3>

                  <div className="flow-root">
                    <ul className="divide-y divide-gray-200 dark:divide-slate-700">
                      {orderItems.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center py-4 space-x-4 hover:bg-gray-50 dark:hover:bg-slate-900/50"
                        >
                          <div className="flex-shrink-0">
                            <Image
                              width={96}
                              height={96}
                              className="object-cover w-24 h-24 rounded-lg"
                              src={item.imageUrl}
                              alt={item.title}
                            />
                          </div>

                          <div className="flex-1">
                            <h4 className="font-medium text-gray-800 dark:text-slate-200">
                              {item.title}
                            </h4>
                            <p className="mt-1 text-sm text-gray-600 dark:text-slate-400">
                              الكمية: {item.quantity}
                            </p>
                          </div>

                          <div className="text-right">
                            <p className="font-medium text-gray-800 dark:text-slate-200">
                              {item.price} ر.ي
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* الملخص المالي */}
                <div className="py-8">
                  <div className="p-6 bg-gray-50 rounded-lg dark:bg-slate-900">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-slate-400">المجموع الفرعي</span>
                        <span className="font-medium text-gray-800 dark:text-slate-200">{subTotal} ر.ي</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-slate-400">تكاليف الشحن</span>
                        <span className="font-medium text-gray-800 dark:text-slate-200">0.00 ر.ي</span>
                      </div>
                      <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-800 dark:text-slate-200">الإجمالي</span>
                          <span className="text-xl font-bold text-green-600">{subTotal} ر.ي</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}