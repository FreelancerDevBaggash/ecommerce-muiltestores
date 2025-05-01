// // "use client"
// // import { setCurrentStep } from '@/redux/slices/checkoutSlice';
// // import { ChevronLeft, ChevronRight } from 'lucide-react';
// // import Image from 'next/image'
// // import React, { useState } from 'react'
// // import { useDispatch, useSelector } from 'react-redux';
// // import { toast } from 'react-hot-toast';
// // import { useRouter } from 'next/navigation';

// // export default function OrderSummary({slugDomain}) {
// //   const [loading, setLoading]= useState(false)
// //   const router =useRouter()
// //   const checkoutFormData = useSelector((store) => store.checkout.checkoutFormData);
// //   const currentStep = useSelector((store) => store.checkout.currentStep);
// //   const dispatch =useDispatch();
// //   function handlePrevious(){
// //      dispatch(setCurrentStep(currentStep - 1));
// //   }
// //   const cartItems =useSelector((store)=> store.cart);
// //   const subTotal=cartItems.reduce((acc, currentItem) => {return acc + currentItem.salePrice * currentItem.qty  },0).toFixed(2) ?? 0;

// //   async function submitData(){
// //    // orderItems = cartItems ;

// //     const data ={
// //       orderItems:cartItems,
// //       checkoutFormData,


// //     };

// //     try {
// //       setLoading(true);
// //       const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
// //       // fetch('http://localhost:3000/api/categories')
// //       const response = await fetch(`${baseUrl}/api/orders`, {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(data),
// //       });
// //       const responseData = await response.json();
// //       if (response.ok) {
// //         setLoading(false);
// //         toast.success("Order Created Successfully");
// //         router.push(`${slugDomain}/order-confirmation/${responseData.id}`)
// //       } else {
// //         setLoading(false);
// //         toast.error("Something Went wrong");
// //       }
// //     } catch (error) {
// //       setLoading(false);
// //       console.log(error);
// //     }
// //   }
// //   return (
// //     <div className='my-6'>
// //                 <h2 className="text-x1  font-semibold mb-4
// //            dark:text-lime-400">Order Summary</h2>
// //        {
// //         cartItems.map((cartItem, i)=>{
// //           return ( <div className="flex items-center justify-between
// //           border-b border-slate-400 
// //            pb-3 font-semibold text-sm mb-4">
// //              <div className="flex items-center gap-3">
// //                   <Image
// //                   src={cartItem.imageUrl}
// //                   width={249}
// //                   height={249}
// //                   alt={cartItem.title}
// //                   className='rounded-xl w-14 h-14'/>

// //                   <div className="flex flex-col">
// //                     <h2>{cartItem.title}</h2>
// //                     <small>Golden</small>
// //                   </div>
// //              </div> 
// //              <div className="rounded-xl border
// //               border-gray-400 flex gap-3 items-center ">

// //                  <p className='flex-grow py-2 px-4'>
// //                  {cartItem.qty}
// //                 </p>

// //             </div>

// //              <div className="flex items-center gap-2">
// //               <h4>UGX{cartItem.salePrice}</h4>

// //              </div>
// //              </div> )
// //         })  }
// //         <div className="mt-4 flex items-center justify-between">
// //         <button  
// //           onClick={handlePrevious}
// //           type="button"
// //           className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 
// //           text-sm font-medium text-center text-white
// //            bg-slate-900 rounded-lg focus:ring-4
// //             focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800
// //              dark:bg-lime-600 dark:hover:bg-lime-700"
// //         >
// //           <ChevronLeft className="w-5 h-5 mr-2" />
// //           <span>Previous</span>
// //         </button>

// //        {
// //         loading?(
// //           <button disabled  className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 
// //           text-sm font-medium text-center text-white
// //            bg-slate-900 rounded-lg focus:ring-4
// //             focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800
// //              dark:bg-lime-600 dark:hover:bg-lime-700"> Processing Please wait...</button>
// //         ):(
// //           <button  
// //           onClick={submitData}
// //             className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 
// //             text-sm font-medium text-center text-white
// //              bg-slate-900 rounded-lg focus:ring-4
// //               focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800
// //                dark:bg-lime-600 dark:hover:bg-lime-700"
// //           >

// //             <span>Proceed to Payment</span>
// //             <ChevronRight className="w-5 h-5 mr-2" />
// //           </button>
// //         )
// //        }
// //         </div>
// //     </div>
// //   )
// // }
// "use client";
// import { setCurrentStep } from '@/redux/slices/checkoutSlice';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Image from 'next/image';
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-hot-toast';
// import { useRouter } from 'next/navigation';
// import { useTheme } from "next-themes";

// export default function OrderSummary({ slugDomain, customization = {} }) {
//   const { theme } = useTheme(); // تحديد وضع الثيم الحالي
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const checkoutFormData = useSelector((store) => store.checkout.checkoutFormData);
//   const currentStep = useSelector((store) => store.checkout.currentStep);
//   const dispatch = useDispatch();

//   // تعيين ألوان وخطوط التخصيص مع قيم افتراضية
//   const primaryColor = customization.primaryColor || "#4CAF50"; 
//   const secondaryColor = customization.secondaryColor || "#2C3E50"; 
//   const accentColor = customization.accentColor || "#FFC107"; 
//   const lightBackground = customization.backgroundColor || "#FFFFFF"; 
//   const darkBackground = customization.darkBackground || "#1E293B"; 
//   const fontFamily = customization.fontFamily || "sans-serif"; 

//   // دالة الرجوع إلى الخطوة السابقة
//   function handlePrevious() {
//     dispatch(setCurrentStep(currentStep - 1));
//   }

//   // الحصول على عناصر السلة من Redux
//   const cartItems = useSelector((store) => store.cart);
//   const subTotal = cartItems
//     .reduce((acc, currentItem) => acc + currentItem.salePrice * currentItem.qty, 0)
//     .toFixed(2) ?? 0;

//   // دالة إرسال الطلب
//   async function submitData() {
//     const data = {
//       orderItems: cartItems,
//       checkoutFormData,
//     };

//     try {
//       setLoading(true);
//       const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//       const response = await fetch(`${baseUrl}/api/orders`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
//       const responseData = await response.json();
//       if (response.ok) {
//         setLoading(false);
//         toast.success("Order Created Successfully");
//         router.push(`${slugDomain}/order-confirmation/${responseData.id}`);
//       } else {
//         setLoading(false);
//         toast.error("Something Went wrong");
//       }
//     } catch (error) {
//       setLoading(false);
//       console.error(error);
//       toast.error("An error occurred while processing your order.");
//     }
//   }

//   return (
//     <div
//       className="my-6"
//       style={{ 
//         backgroundColor: theme === "dark" ? darkBackground : lightBackground, 
//         fontFamily 
//       }}
//     >
//       <h2 className="text-x1 font-semibold mb-4 dark:text-lime-400">Order Summary</h2>
//       {cartItems.map((cartItem, i) => (
//         <div
//           key={cartItem.id || i} // استخدام مفتاح مناسب لكل عنصر
//           className="flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-sm mb-4"
//         >
//           <div className="flex items-center gap-3">
//             <Image
//               src={cartItem.imageUrl}
//               width={249}
//               height={249}
//               alt={cartItem.title}
//               className="rounded-xl w-14 h-14"
//             />
//             <div className="flex flex-col">
//               <h2>{cartItem.title}</h2>
//               <small>Golden</small>
//             </div>
//           </div>
//           <div className="rounded-xl border border-gray-400 flex gap-3 items-center">
//             <p className="flex-grow py-2 px-4">{cartItem.qty}</p>
//           </div>
//           <div className="flex items-center gap-2">
//             <h4>UGX {cartItem.salePrice}</h4>
//           </div>
//         </div>
//       ))}
//       <div className="mt-4 flex items-center justify-between">
//         <button
//           onClick={handlePrevious}
//           type="button"
//           className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800 dark:bg-lime-600 dark:hover:bg-lime-700"
//         >
//           <ChevronLeft className="w-5 h-5 mr-2" />
//           <span>Previous</span>
//         </button>

//         {loading ? (
//           <button
//             disabled
//             className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800 dark:bg-lime-600 dark:hover:bg-lime-700"
//           >
//             Processing Please wait...
//           </button>
//         ) : (
//           <button
//             onClick={submitData}
//             className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800 dark:bg-lime-600 dark:hover:bg-lime-700"
//           >
//             <span>Proceed to Payment</span>
//             <ChevronRight className="w-5 h-5 ml-2" />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }
// "use client";
// import { setCurrentStep } from '@/redux/slices/checkoutSlice';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Image from 'next/image';
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-hot-toast';
// import { useRouter } from 'next/navigation';
// import { useTheme } from "next-themes";

// export default function OrderSummary({ slugDomain, customization = {} }) {
//   const { theme } = useTheme(); // تحديد وضع الثيم الحالي
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const checkoutFormData = useSelector((store) => store.checkout.checkoutFormData);
//   const currentStep = useSelector((store) => store.checkout.currentStep);
//   const dispatch = useDispatch();

//   // تعيين ألوان وخطوط التخصيص مع قيم افتراضية
//   const primaryColor = customization?.primaryColor || "#4CAF50"; 
//   const secondaryColor = customization?.secondaryColor || "#2C3E50"; 
//   const accentColor = customization?.accentColor || "#FFC107"; 
//   const lightBackground = customization?.backgroundColor || "#FFFFFF"; 
//   const darkBackground = customization?.darkBackground || "#1E293B"; 
//   const fontFamily = customization?.fontFamily || "sans-serif"; 

//   // دالة الرجوع إلى الخطوة السابقة
//   function handlePrevious() {
//     dispatch(setCurrentStep(currentStep - 1));
//   }

//   // الحصول على عناصر السلة من Redux
//   const cartItems = useSelector((store) => store.cart);
//   const subTotal = cartItems
//     .reduce((acc, currentItem) => acc + currentItem.salePrice * currentItem.qty, 0)
//     .toFixed(2) ?? 0;

//   // دالة إرسال الطلب
//   async function submitData() {
//     const data = {
//       orderItems: cartItems,
//       checkoutFormData,
//     };

//     try {
//       setLoading(true);
//       const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//       const response = await fetch(`${baseUrl}/api/orders`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
//       const responseData = await response.json();
//       if (response.ok) {
//         setLoading(false);
//         toast.success("تم إنشاء الطلب بنجاح");
//         router.push(`${slugDomain}/order-confirmation/${responseData.id}`);
//       } else {
//         setLoading(false);
//         toast.error("حدث خطأ ما");
//       }
//     } catch (error) {
//       setLoading(false);
//       console.error(error);
//       toast.error("حدث خطأ أثناء معالجة طلبك.");
//     }
//   }

//   return (
//     <div
//       className="my-6"
//       style={{ 
//         backgroundColor: theme === "dark" ? darkBackground : lightBackground, 
//         fontFamily 
//       }}
//     >
//       <h2 className="text-x1 font-semibold mb-4 dark:text-lime-400">ملخص الطلب</h2>
//       {cartItems.map((cartItem, i) => (
//         <div
//           key={cartItem.id || i} // استخدام مفتاح مناسب لكل عنصر
//           className="flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-sm mb-4"
//         >
//           <div className="flex items-center gap-3">
//             <Image
//               src={cartItem.imageUrl}
//               width={249}
//               height={249}
//               alt={cartItem.title}
//               className="rounded-xl w-14 h-14"
//             />
//             <div className="flex flex-col">
//               <h2>{cartItem.title}</h2>
//               <small>ذهبي</small>
//             </div>
//           </div>
//           <div className="rounded-xl border border-gray-400 flex gap-3 items-center">
//             <p className="flex-grow py-2 px-4">{cartItem.qty}</p>
//           </div>
//           <div className="flex items-center gap-2">
//             <h4>UGX {cartItem.salePrice}</h4>
//           </div>
//         </div>
//       ))}
//       <div className="mt-4 flex items-center justify-between">
//         <button
//           onClick={handlePrevious}
//           type="button"
//           className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800 dark:bg-lime-600 dark:hover:bg-lime-700"
//         >
//           <ChevronLeft className="w-5 h-5 mr-2" />
//           <span>السابق</span>
//         </button>

//         {loading ? (
//           <button
//             disabled
//             className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800 dark:bg-lime-600 dark:hover:bg-lime-700"
//           >
//             معالجة، من فضلك انتظر...
//           </button>
//         ) : (
//           <button
//             onClick={submitData}
//             className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800 dark:bg-lime-600 dark:hover:bg-lime-700"
//           >
//             <span>المتابعة إلى الدفع</span>
//             <ChevronRight className="w-5 h-5 ml-2" />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// "use client";
// import { setCurrentStep } from '@/redux/slices/checkoutSlice';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Image from 'next/image';
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-hot-toast';
// import { useRouter } from 'next/navigation';
// import { useTheme } from "next-themes";
// import { clearCart } from "@/redux/slices/cartSlice";

// export default function OrderSummary({ slugDomain, customization = {} }) {
//   const { theme } = useTheme(); // تحديد وضع الثيم الحالي
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const checkoutFormData = useSelector((store) => store.checkout.checkoutFormData);
//   const currentStep = useSelector((store) => store.checkout.currentStep);
//   const dispatch = useDispatch();

//   // تعيين ألوان وخطوط التخصيص مع قيم افتراضية
//   const primaryColor = customization?.primaryColor || "#4CAF50"; 
//   const secondaryColor = customization?.secondaryColor || "#2C3E50"; 
//   const accentColor = customization?.accentColor || "#FFC107"; 
//   const lightBackground = customization?.backgroundColor || "#FFFFFF"; 
//   const darkBackground = customization?.darkBackground || "#1E293B"; 
//   const fontFamily = customization?.fontFamily || "sans-serif"; 

//   // دالة الرجوع إلى الخطوة السابقة
//   function handlePrevious() {
//     dispatch(setCurrentStep(currentStep - 1));
//   }

//   // الحصول على عناصر السلة من Redux
//   const cartItems = useSelector((store) => store.cart);
//   const subTotal = cartItems
//     .reduce((acc, currentItem) => acc + currentItem.salePrice * currentItem.qty, 0)
//     .toFixed(2) ?? 0;

//   // دالة إرسال الطلب
//   async function submitData() {
//     const data = {
//       orderItems: cartItems,
//       checkoutFormData,
//     };

//     try {
//       setLoading(true);
//       const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//       const response = await fetch(`${baseUrl}/api/orders`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
//       const responseData = await response.json();
//       if (response.ok) {
//         setLoading(false);
//         toast.success("تم إنشاء الطلب بنجاح");

//         router.push(`/${slugDomain}/order-confirmation/${responseData.id}`);
//         dispatch(clearCart());
//       } else {
//         setLoading(false);
//         toast.error("حدث خطأ ما");
//       }
//     } catch (error) {
//       setLoading(false);
//       console.error(error);
//       toast.error("حدث خطأ أثناء معالجة طلبك.");
//     }
//   }

//   return (
//     <div
//       className="my-6"
//       style={{ 
//         backgroundColor: theme === "dark" ? darkBackground : lightBackground, 
//         fontFamily 
//       }}
//     >
//       <h2 className="text-xl font-semibold mb-4 dark:text-lime-400 text-center">
//         ملخص الطلب
//       </h2>
//       {cartItems.map((cartItem, i) => (
//         <div
//           key={cartItem.id || i} // استخدام مفتاح مناسب لكل عنصر
//           className="flex items-center justify-between border-b border-slate-400 pb-3 font-semibold text-sm mb-4"
//         >
//           <div className="flex items-center gap-3">
//             <Image
//               src={cartItem.imageUrl}
//               width={249}
//               height={249}
//               alt={cartItem.title}
//               className="rounded-xl w-14 h-14 object-cover"
//             />
// <div className="flex flex-col">
//   <h2 className="text-ellipsis overflow-hidden whitespace-nowrap hover:overflow-visible hover:whitespace-normal hover:text-clip">
//     {cartItem.title}
//   </h2>
//   <small className="text-gray-500">ذهبي</small>
// </div>

//           </div>
//           <div className="rounded-xl border border-gray-400 flex gap-3 items-center">
//             <p className="flex-grow py-2 px-4">{cartItem.qty}</p>
//           </div>
//           <div className="flex items-center gap-2">
//             <h4 className="text-lg font-semibold">ريال {cartItem.salePrice}</h4>
//           </div>
//         </div>
//       ))}
//       <div className="mt-4 flex items-center justify-between">
//         <button
//           onClick={handlePrevious}
//           type="button"
//           className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800 dark:bg-lime-600 dark:hover:bg-lime-700 transition duration-300 ease-in-out"
//         >
//           <ChevronLeft className="w-5 h-5 mr-2" />
//           <span>السابق</span>
//         </button>

//         {loading ? (
//           <button
//             disabled
//             className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800 dark:bg-lime-600 dark:hover:bg-lime-700 transition duration-300 ease-in-out"
//           >
//             معالجة، من فضلك انتظر...
//           </button>
//         ) : (
//           <button
//             onClick={submitData}
//             className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800 dark:bg-lime-600 dark:hover:bg-lime-700 transition duration-300 ease-in-out"
//           >
//             <span>المتابعة إلى الدفع</span>
//             <ChevronRight className="w-5 h-5 ml-2" />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

'use client';
import { setCurrentStep } from '@/redux/slices/checkoutSlice';
import { clearCart } from '@/redux/slices/cartSlice';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

export default function OrderSummary({ slugDomain, customization = {} }) {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const checkoutFormData = useSelector((store) => store.checkout.checkoutFormData);
  const currentStep = useSelector((store) => store.checkout.currentStep);
  const cartItems = useSelector((store) => store.cart);

  // ألوان التخصيص
  const {
    primaryColor = '#4CAF50',
    secondaryColor = '#2C3E50',
    accentColor = '#FFC107',
    backgroundColor = '#FFFFFF',
    darkBackground = '#1E293B',
    fontFamily = 'sans-serif'
  } = customization;

  // العودة للخطوة السابقة
  function handlePrevious() {
    dispatch(setCurrentStep(currentStep - 1));
  }

  // حساب المجموع الفرعي
  const subTotal = cartItems
    .reduce((acc, item) => acc + item.salePrice * item.qty, 0)
    .toFixed(2);

  // إرسال الطلب أو تهيئة الدفع
  async function submitData() {
    setLoading(true);
    try {
      // 1) إنشاء الطلب
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const resOrder = await fetch(`${baseUrl}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          checkoutFormData,
          orderItems: cartItems
        })
      });
      const { id, total } = await resOrder.json();
      if (!resOrder.ok) throw new Error('خطأ في إنشاء الطلب');

      // 2) التعامل حسب طريقة الدفع
      if (checkoutFormData.paymentMethod === "ELECTRONIC") {
        // الدفع الإلكتروني (Mock)
        const resPay = await fetch(`${baseUrl}/api/payments/floosak/initiate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id, amount: total, currency: 'YER' })
        });
        if (!resPay.ok) throw new Error('خطأ في تهيئة الدفع');
        const { paymentUrl } = await resPay.json();

        toast.success('جارٍ تحويلك إلى صفحة الدفع…');
        // 3) إعادة التوجيه لصفحة الدفع
        router.push(paymentUrl);
      } else {
        // COD
        toast.success('تم تأكيد الطلب! الدفع عند الاستلام');
        dispatch(clearCart());
        router.push(`/${slugDomain}/order-confirmation/${id}`);
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'حدث خطأ أثناء معالجة طلبك.');
      setLoading(false);
    }
  }

  return (
    <div
      className="my-6 p-6 rounded-lg"
      style={{
        backgroundColor: theme === 'dark' ? darkBackground : backgroundColor,
        fontFamily
      }}
    >
      <h2
        className="text-xl font-semibold mb-4 text-center"
        style={{ color: accentColor }}
      >
        ملخص الطلب
      </h2>

      {/* تفاصيل كل عنصر */}
      {cartItems.map((item, i) => (
        <div
          key={item.id || i}
          className="flex items-center justify-between border-b border-gray-300 py-3"
        >
          <div className="flex items-center gap-3">
            <Image
              src={item.imageUrl}
              width={60}
              height={60}
              alt={item.title}
              className="rounded"
            />
            <span className="font-medium">{item.title}</span>
          </div>
          <span>{item.qty} × {item.salePrice.toFixed(2)} ر.ي</span>
        </div>
      ))}

      {/* المجموع الفرعي */}
      <div className="flex justify-between font-semibold mt-4">
        <span>المجموع الفرعي:</span>
        <span>{subTotal} ر.ي</span>
      </div>

      {/* أزرار التنقل */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={handlePrevious}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
        >
          <ChevronLeft /> السابق
        </button>
        <button
          onClick={submitData}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition disabled:opacity-50"
        >
          {loading
            ? 'جاري المعالجة…'
            : checkoutFormData.paymentMethod === 'ELECTRONIC'
              ? 'الدفع الآن'
              : 'تأكيد الطلب'}
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
