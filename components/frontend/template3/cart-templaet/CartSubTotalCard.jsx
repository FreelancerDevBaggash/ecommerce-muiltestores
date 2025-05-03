import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Package, Receipt } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function CartSubTotalCard({ subTotal, slugDomain, customization = {} }) {
  const { theme } = useTheme();

  const themeConfig = {
    primaryColor: customization?.primaryColor || '#4CAF50',
    secondaryColor: customization?.secondaryColor || '#2C3E50',
    accentColor: customization?.accentColor || '#FFC107',
    fontFamily: customization?.fontFamily || 'Tajawal, sans-serif',
    lightBackground: customization?.lightBackground || '#FFFFFF',
    darkBackground: customization?.darkBackground || '#1E293B',
  };

  const shipping = 10;
  const tax = 0;
  const totalPrice = (Number(subTotal) + Number(shipping) + Number(tax)).toFixed(2);

  return (
    <div 
      className=" col-span-full md:col-span-3 rounded-2xl shadow-xl backdrop-blur-sm transition-all hover:shadow-lg dark:bg-gray-900"
      style={{
        fontFamily: themeConfig.fontFamily,
        backgroundColor: theme === 'dark' ? themeConfig.darkBackground : themeConfig.lightBackground,
        border: `1px solid ${themeConfig.primaryColor}20`,
      }}
    >
      <div className="p-6 space-y-6">
        {/* العنوان */}
        <div className="flex items-center gap-3 pb-4 border-b dark:border-gray-700">
          <Receipt className="w-6 h-6" style={{ color: themeConfig.primaryColor }} />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            ملخص الطلب
          </h2>
        </div>

        {/* تفاصيل الأسعار */}
        <div className="space-y-4">
          <PriceRow label="المجموع الفرعي" value={subTotal} />
          <PriceRow label="الشحن" value={shipping} />
        </div>

        {/* ملاحظة الشحن */}
        <div 
          className="p-4 rounded-lg flex items-start gap-3"
          style={{
            backgroundColor: `${themeConfig.accentColor}10`,
            border: `1px dashed ${themeConfig.accentColor}30`,
          }}
        >
          <Package className="w-5 h-5 mt-1" style={{ color: themeConfig.accentColor }} />
          <p className="text-sm text-gray-700 dark:text-gray-300">
            رسوم الشحن تطبق فقط عندما يكون الوزن أكثر من 2 كجم
          </p>
        </div>

        {/* الإجمالي النهائي */}
        <div className="flex justify-between items-center pt-4 border-t dark:border-gray-700">
          <span className="text-lg font-bold text-gray-800 dark:text-white">
            الإجمالي النهائي
          </span>
          <span 
            className="text-sm font-extrabold"
            style={{ color: themeConfig.primaryColor }}
          >
            {totalPrice} ر.ي
          </span>
        </div>

        {/* زر الاستمرار */}
        <Link
          href={`/${slugDomain}/checkout`}
          className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all hover:scale-[1.02]"
          style={{
            backgroundColor: themeConfig.primaryColor,
            color: '#FFFFFF',
            boxShadow: `0 4px 12px ${themeConfig.primaryColor}30`,
          }}
        >
          اتمام الطلب
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}

const PriceRow = ({ label, value }) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-700 dark:text-gray-300">{label}</span>
    <span className="font-medium text-gray-800 dark:text-white">{value} ر.ي</span>
  </div>
);


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
