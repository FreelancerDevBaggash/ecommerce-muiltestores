import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux';

export default function CartSubTotalCard({subTotal , slugDomain , customization={}}) {
  const primaryColor = customization?.primaryColor || '#4CAF50'; // اللون الأساسي
  const secondaryColor = customization?.secondaryColor || '#2C3E50'; // اللون الثانوي
  const accentColor = customization?.accentColor || '#FFC107'; // اللون المميز
  const backgroundColor = customization?.backgroundColor || '#FFFFFF'; // لون الخلفية
  const fontFamily = customization?.fontFamily || 'sans-serif'; // نوع الخط
  const isActive = customization?.isActive ?? true;
    const shipping =10;
    const tax=0;
    const totalPrice = (Number(subTotal) +Number(shipping) + Number(tax)).toFixed(2) ;
    return (
        <div  className="md:col-span-3  col-span-full sm:block bg-white border 
        border-gray-300 rounded-lg dark:bg-gray-700 
           dark:border-gray-700 dark:text-slate-100
           ovreflow-hidden   p-5 font-bold">
           <h2 className="text-2xl pb-3">Cart total</h2>
          <div className="flex items-center justify-between border-b border-slate-500 pb-6">
          <span>Subtotal </span>
          <span>UGX{subTotal}</span>
          </div>

          <div className="flex items-center j500ustify-between pb-4 mt-2">
          <span>Tax </span>
          <span>UGX{tax}</span>
          </div>

          <div className="flex items-center j500ustify-between pb-4">
          <span>Shapping </span>
          <span>UGX{shipping}</span>
          </div>

          <p className='border-b border-slate-500 pb-6 text-slate-400 font-normal'>we only charge for shipping when you have over 
           2kg items
          </p>

          <div className="flex items-center j500ustify-between py-4 font-bold">
          <span>Total </span>
          <span>UGX{totalPrice}</span>
          </div>

         <div className="mt-8">
         <Link href={`/${slugDomain}/checkout`} className="dark:text-slate-50 text-neutral-950 rounded-lg
          py-3 px-4 font-normal bg-slate-900 dark:bg-lime-600  " style={{  backgroundColor:primaryColor }}>Continue to Checkout</Link>
          
         </div>
       </div>
    )
}


// import React, { useState } from 'react';
// import Link from 'next/link';

// export default function CartSubTotalCard({ subTotal }) {
//   const shipping = 10; // تكاليف الشحن
//   const tax = 0; // الضرائب
//   const totalPrice = (Number(subTotal) + Number(shipping) + Number(tax)).toFixed(2); // الحساب الكلي

//   // حالات عرض النوافذ المنبثقة
//   const [showLogin, setShowLogin] = useState(false);
//   const [showOtp, setShowOtp] = useState(false);
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');

//   // التعامل مع زر "استمرار إلى الدفع"
//   const handleCheckoutClick = () => {
//     setShowLogin(true); // عرض واجهة تسجيل الدخول
//   };

//   // التعامل مع زر "تسجيل الدخول"
//   const handleLogin = () => {
//     if (email.trim() !== '') {
//       setShowLogin(false);
//       setShowOtp(true); // عرض واجهة إدخال رمز التحقق
//     }
//   };

//   // التحقق من رمز التحقق
//   const handleVerifyOtp = () => {
//     if (otp === '1234') {
//       window.location.href = '/checkout'; // التوجيه إلى صفحة الدفع
//     } else {
//       alert('رمز التحقق غير صحيح! يرجى المحاولة مرة أخرى.');
//     }
//   };

//   // إغلاق جميع النوافذ المنبثقة
//   const closePopup = () => {
//     setShowLogin(false);
//     setShowOtp(false);
//   };

//   return (
//     <div className="md:col-span-4 col-span-full m-8 sm:block bg-white border 
//         border-gray-300 rounded-lg dark:bg-gray-700 
//         dark:border-gray-700 dark:text-slate-100
//         overflow-hidden p-5 font-bold">
//       <h2 className="text-2xl pb-3">إجمالي السلة</h2>
//       <div className="flex items-center justify-between border-b border-slate-500 pb-6">
//         <span>المجموع الفرعي</span>
//         <span>ريال {subTotal}</span>
//       </div>

//       <div className="flex items-center justify-between pb-4 mt-2">
//         <span>الضرائب</span>
//         <span>ريال {tax}</span>
//       </div>

//       <div className="flex items-center justify-between pb-4">
//         <span>الشحن</span>
//         <span>ريال {shipping}</span>
//       </div>

//       <p className="border-b border-slate-500 pb-6 text-slate-400 font-normal">
//         نحن نفرض رسوم الشحن فقط عندما تتجاوز العناصر 2 كجم.
//       </p>

//       <div className="flex items-center justify-between py-4 font-bold">
//         <span>الإجمالي</span>
//         <span>ريال {totalPrice} </span>
//       </div>

//       <div className="m-8">
//         <button
//           onClick={handleCheckoutClick}
//           className="text-slate-50 rounded-lg py-3 px-4 font-normal bg-slate-900 dark:bg-lime-600">
//           استمرار إلى الدفع
//         </button>
//       </div>

//       {/* واجهة تسجيل الدخول */}
//       {showLogin && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded-lg p-6 w-96 relative">
//             <button
//               onClick={closePopup}
//               className="absolute top-2 right-2 text-gray-500">
//               ✕
//             </button>
//             <h3 className="text-lg font-bold mb-4 text-center">تسجيل الدخول</h3>
//             <input
//               type="email"
//               placeholder="البريد الإلكتروني"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="border p-2 rounded w-full mb-4"
//             />
//             <button
//               onClick={handleLogin}
//               className="bg-blue-500 text-white py-2 px-4 rounded w-full">
//               تسجيل الدخول
//             </button>
//           </div>
//         </div>
//       )}

//       {/* واجهة إدخال رمز التحقق */}
//       {showOtp && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded-lg p-6 w-96 relative">
//             <button
//               onClick={closePopup}
//               className="absolute top-2 right-2 text-gray-500">
//               ✕
//             </button>
//             <h3 className="text-lg font-bold mb-4">أدخل رمز التحقق</h3>
//             <input
//               type="text"
//               placeholder="رمز التحقق"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               className="border p-2 rounded w-full mb-4"
//             />
//             <button
//               onClick={handleVerifyOtp}
//               className="bg-green-500 text-white py-2 px-4 rounded w-full">
//               التحقق
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
