// "use client";
// import { getData } from '@/lib/getData'
// import React from "react"
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/lib/authOptions';
// import { useEffect, useState } from "react";

// /**
//  * في هذا الكود:
//  * - نفترض أنك تملك API لإدارة عملات المتجر
//  * - storeCurrencies: جلب العملات المفعّلة على المتجر
//  * - allCurrencies: جلب جميع العملات الممكنة في النظام (إضافة جديدة)
//  */

// export default async function page() {
//     const session = await getServerSession(authOptions);
//     const userId = session?.user?.id;
  
    
//         // استرداد المتجر المرتبط بالمستخدم
//         const storeData = await getData(`stores?vendorId=${userId}`, {mode:'real-time'});

//         const storeId = storeData[0]?.id
//   // العملات التي يستخدمها المتجر (علاقة مع store)
//   const [storeCurrencies, setStoreCurrencies] = useState([]);

//   // جميع العملات في النظام (لاختيار واحدة وإضافتها للمتجر)
//   const [allCurrencies, setAllCurrencies] = useState([]);

//   // لمعرفة حالة التحميل
//   const [loading, setLoading] = useState(true);

//   // لإظهار أو إخفاء حقل إضافة عملة جديدة
//   const [showAddCurrency, setShowAddCurrency] = useState(false);

//   // العملة المختارة للإضافة
//   const [selectedCurrency, setSelectedCurrency] = useState("");

//   // الأخطاء
//   const [error, setError] = useState(null);

//   // جلب بيانات العملات عند التحميل
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         // مثال لجلب العملات الخاصة بالمتجر
//         const resStore = await fetch(`/api/stores/${storeId}/currencies`);
//         if (!resStore.ok) throw new Error("فشل جلب عملات المتجر");
//         const storeData = await resStore.json();

//         // مثال لجلب العملات العامة (كافة العملات في النظام)
//         const resAll = await fetch("/api/currencies");
//         if (!resAll.ok) throw new Error("فشل جلب قائمة العملات المتاحة");
//         const allData = await resAll.json();

//         setStoreCurrencies(storeData); // عملات المتجر
//         setAllCurrencies(allData); // جميع العملات الممكنة
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   // تفعيل/تعطيل عملة في متجر التاجر
//   const handleToggleActive = async (storeCurrencyId, isActive) => {
//     try {
//       // مثال لطلب تحديث
//       const res = await fetch(`/api/store/currencies/${storeCurrencyId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ isActive: !isActive }),
//       });
//       if (!res.ok) throw new Error("فشل تحديث حالة العملة");
//       const updatedData = await res.json();

//       // تحديث الحالة محلياً
//       setStoreCurrencies((prev) =>
//         prev.map((sc) => (sc.id === storeCurrencyId ? updatedData : sc))
//       );
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   // تعيين العملة الافتراضية للمتجر
//   const handleSetDefault = async (storeCurrencyId) => {
//     try {
//       // مثال لطلب تحديث
//       const res = await fetch(`/api/store/currencies/${storeCurrencyId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ isDefault: true }),
//       });
//       if (!res.ok) throw new Error("فشل تعيين العملة الافتراضية");
//       // قد يعيد الـ API قائمة عملات محدثة أو الـ storeCurrency المعدّل فقط
//       const updatedList = await res.json();
//       // نفترض أن الـ API يعيد جميع العملات الخاصة بالمتجر
//       setStoreCurrencies(updatedList);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   // إضافة عملة جديدة للمتجر
//   const handleAddCurrency = async () => {
//     if (!selectedCurrency) return; // تحقق من اختيار العملة

//     try {
//       // مثال لطلب إضافة
//       const res = await fetch(`/api/store/currencies`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ currencyCode: selectedCurrency }),
//       });
//       if (!res.ok) throw new Error("فشل إضافة العملة للمتجر");
//       const newStoreCurrency = await res.json();

//       setStoreCurrencies((prev) => [...prev, newStoreCurrency]);
//       setShowAddCurrency(false);
//       setSelectedCurrency("");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   // حفظ التغيرات النهائية (اختياري إذا كنت تريد زر حفظ مجمع)
//   const handleSaveSettings = async () => {
//     // منطق الحفظ العام - إن وجِد
//     alert("تم حفظ التعديلات بنجاح (مثال)");
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen text-lg text-gray-600">
//         تحميل ...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-4 bg-red-100 text-red-700 rounded mx-4 my-4">
//         {error}
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {/* رأس الصفحة */}
//       <div className="mb-6">
//         <h1 className="text-2xl font-extrabold mb-2 text-gray-700">
//           العملات المتاحة في متجرك
//         </h1>
//         <p className="text-gray-500">يمكنك تفعيل/تعطيل العملات واختيار الافتراضية</p>
//       </div>

//       {/* قائمة العملات المفعلة في المتجر */}
//       <table className="w-full table-auto border-collapse mb-4 bg-white shadow rounded">
//         <thead className="bg-gray-100 text-gray-600">
//           <tr>
//             <th className="px-4 py-2 text-left">الاسم</th>
//             <th className="px-4 py-2 text-left">الحالة</th>
//             <th className="px-4 py-2 text-left">افتراضية</th>
//           </tr>
//         </thead>
//         <tbody>
//           {storeCurrencies.map((sc) => (
//             <tr key={sc.id} className="border-b last:border-0">
//               <td className="px-4 py-2 text-gray-700">
//                 {sc.currency?.name} ({sc.currency?.code})
//               </td>
//               <td className="px-4 py-2">
//                 {/* تفعيل/تعطيل */}
//                 <label className="inline-flex items-center cursor-pointer">
//                   <input
//                     type="checkbox"
//                     checked={sc.isActive}
//                     onChange={() => handleToggleActive(sc.id, sc.isActive)}
//                     className="form-checkbox h-5 w-5 text-green-500"
//                   />
//                   <span className="ml-2 text-gray-600">
//                     {sc.isActive ? "مفعلة" : "معطلة"}
//                   </span>
//                 </label>
//               </td>
//               <td className="px-4 py-2">
//                 {sc.isDefault ? (
//                   <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">
//                     العملة الافتراضية
//                   </span>
//                 ) : (
//                   <button
//                     onClick={() => handleSetDefault(sc.id)}
//                     className="px-2 py-1 bg-blue-500 text-white rounded text-sm"
//                   >
//                     تعيين كافتراضية
//                   </button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* زر لإضافة عملة جديدة */}
//       <button
//         onClick={() => setShowAddCurrency(!showAddCurrency)}
//         className="flex items-center px-3 py-1 bg-green-500 text-white rounded shadow"
//       >
//         {showAddCurrency ? "إغلاق" : "إضافة عملة"}
//         <span className="ml-2 text-xl">+</span>
//       </button>

//       {showAddCurrency && (
//         <div className="mt-4 p-4 bg-white shadow rounded">
//           <label className="block mb-2 text-gray-600">اختر عملة لإضافتها للمتجر:</label>
//           <div className="flex items-center space-x-2">
//             <select
//               value={selectedCurrency}
//               onChange={(e) => setSelectedCurrency(e.target.value)}
//               className="border rounded px-3 py-2"
//             >
//               <option value="">-- اختر عملة --</option>
//               {allCurrencies.map((c) => (
//                 <option key={c.id} value={c.code}>
//                   {c.name} ({c.code})
//                 </option>
//               ))}
//             </select>
//             <button
//               onClick={handleAddCurrency}
//               className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
//             >
//               إضافة
//             </button>
//           </div>
//         </div>
//       )}

//       {/* زر حفظ نهائي إذا كان مطلوب */}
//       <div className="mt-6">
//         <button
//           onClick={handleSaveSettings}
//           className="px-6 py-2 bg-indigo-600 text-white rounded shadow"
//         >
//           حفظ
//         </button>
//       </div>
//     </div>
//   );
// }

// /app/dashboard/store-currencies/page.jsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";
import StoreCurrenciesClient from "./_components/StoreCurrenciesClient"; // مكون العميل منفصل

export default async function Page() {
  // جلب بيانات الجلسة من الخادم
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  // استرداد بيانات المتجر الخاص بالمستخدم
  const storeData = await getData(`stores?vendorId=${userId}`, { mode: "real-time" });
 const currencies = storeData[0]?.currencies || null;
 const storeId = storeData[0]?.id;
console.log('aaaaaaaaaaaaaa',currencies)
  return <StoreCurrenciesClient currencies={currencies} storeId={storeId}/>;
}
