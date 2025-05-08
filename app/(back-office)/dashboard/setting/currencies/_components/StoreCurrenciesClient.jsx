// "use client";

// import { useEffect, useState } from "react";

// export default function StoreCurrenciesClient({ currencies = [], storeId }) {
//   const [storeCurrencies, setStoreCurrencies] = useState([]);
//   const [allCurrencies, setAllCurrencies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showAddCurrency, setShowAddCurrency] = useState(false);
//   const [selectedCurrency, setSelectedCurrency] = useState("");
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!currencies) {
//       setError("المتجر غير متاح");
//       setLoading(false);
//       return;
//     }

//     async function fetchData() {
//       try {
//         const res = await fetch("/api/currencies");
//         if (!res.ok) throw new Error("فشل جلب قائمة العملات المتاحة");

//         const allData = await res.json();
//         const allCurrenciesArray = Array.isArray(allData) ? allData : [allData];
//         const storeCurrenciesArray = Array.isArray(currencies) ? currencies : [currencies];

//         const mergedCurrencies = storeCurrenciesArray.map((storeCur) => {
//           const currencyDetails = allCurrenciesArray.find(
//             (c) => c.id === storeCur.currencyId
//           );
//           return {
//             ...storeCur,
//             currency: currencyDetails || { name: "غير متوفر", code: "" },
//           };
//         });

//         setStoreCurrencies(mergedCurrencies);
//         setAllCurrencies(allCurrenciesArray);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, [currencies]);

//   const availableCurrencies = allCurrencies.filter(
//     (c) => !storeCurrencies.some((sc) => sc.currencyId === c.id)
//   );

//   const handleToggleActive = async (storeCurrencyId, isActive) => {
//     try {
//       const res = await fetch(`/api/stores/${storeId}/currencies/${storeCurrencyId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ isActive: !isActive }),
//       });
//       if (!res.ok) throw new Error("فشل تحديث حالة العملة");
//       const updatedData = await res.json();
//       setStoreCurrencies((prev) =>
//         prev.map((sc) => (sc.id === storeCurrencyId ? updatedData : sc))
//       );
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleSetDefault = async (storeCurrencyId) => {
//     try {
//       const res = await fetch(`/api/stores/${storeId}/currencies/${storeCurrencyId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ isDefault: true }),
//       });
//       if (!res.ok) throw new Error("فشل تعيين العملة الافتراضية");
//       const updatedList = await res.json();
//       setStoreCurrencies(updatedList);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleAddCurrency = async () => {
//     if (!selectedCurrency) return;

//     try {
//       const currencyDetails = allCurrencies.find((c) => c.code === selectedCurrency);

//       if (!currencyDetails) {
//         setError("العملة غير معروفة");
//         return;
//       }

//       const res = await fetch(`/api/stores/${storeId}/currencies`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           currencyId: currencyDetails.id,
//           isDefault: false,
//         }),
//       });

//       if (!res.ok) throw new Error("فشل إضافة العملة للمتجر");

//       const newStoreCurrency = await res.json();

//       setStoreCurrencies((prev) => [
//         ...prev,
//         {
//           ...newStoreCurrency,
//           currency: currencyDetails || { name: "غير معروف", code: "" },
//         },
//       ]);

//       setShowAddCurrency(false);
//       setSelectedCurrency("");
//     } catch (err) {
//       setError(err.message);
//     }
//   };


//   const handleSaveSettings = async () => {
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
//       <div className="mb-6">
//         <h1 className="text-2xl font-extrabold mb-2 text-gray-700">
//           العملات المتاحة في متجرك
//         </h1>
//         <p className="text-gray-500">
//           يمكنك تفعيل/تعطيل العملات واختيار العملة الافتراضية
//         </p>
//       </div>

//       {storeCurrencies.length === 0 && (
//         <p>لا يوجد عملات مضافة لهذا المتجر بعد.</p>
//       )}

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

//       <button
//         onClick={() => setShowAddCurrency(!showAddCurrency)}
//         className="flex items-center px-3 py-1 bg-green-500 text-white rounded shadow"
//       >
//         {showAddCurrency ? "إغلاق" : "إضافة عملة"}
//         <span className="ml-2 text-xl">+</span>
//       </button>

//       {showAddCurrency && (
//         <div className="mt-4 p-4 bg-white shadow rounded">
//           <label className="block mb-2 text-gray-600">
//             اختر عملة لإضافتها للمتجر:
//           </label>
//           <div className="flex items-center space-x-2">
//             <select
//               value={selectedCurrency}
//               onChange={(e) => setSelectedCurrency(e.target.value)}
//               className="border rounded px-3 py-2 text-gray-600 dark:text-white"
//             >
//               <option value="">-- اختر عملة --</option>
//               {availableCurrencies.map((c) => (
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

// "use client";

// import { useEffect, useState } from "react";

// export default function StoreCurrenciesClient({ currencies = [], storeId }) {
//   const [storeCurrencies, setStoreCurrencies] = useState([]);
//   const [allCurrencies, setAllCurrencies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showAddCurrency, setShowAddCurrency] = useState(false);
//   const [selectedCurrency, setSelectedCurrency] = useState("");
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await fetch("/api/currencies");
//         const allData = await res.json();

//         const allCurrenciesArray = Array.isArray(allData) ? allData : [allData];
//         const storeCurrenciesArray = Array.isArray(currencies) ? currencies : [currencies];

//         const mergedCurrencies = storeCurrenciesArray.map((storeCur) => {
//           const currencyDetails = allCurrenciesArray.find(c => c.id === storeCur.currencyId);
//           return {
//             ...storeCur,
//             currency: currencyDetails || { name: "غير معروف", code: "" },
//           };
//         });

//         setStoreCurrencies(mergedCurrencies);
//         setAllCurrencies(allCurrenciesArray);
//       } catch (err) {
//         setError(err.message || "حدث خطأ");
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, [currencies]);

//   const availableCurrencies = allCurrencies.filter(
//     (c) => !storeCurrencies.some((sc) => sc.currencyId === c.id)
//   );

//   const handleToggleActive = async (storeCurrencyId, isActive) => {
//     try {
//       const res = await fetch(`/api/stores/${storeId}/currencies`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ isActive: !isActive, storeCurrencyId: storeCurrencyId }),
//       });

//       const updatedData = await res.json();

//       setStoreCurrencies((prev) =>
//         prev.map((sc) => (sc.id === storeCurrencyId ? updatedData : sc))
//       );
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleSetDefault = async (storeCurrencyId) => {
//     try {
//       const res = await fetch(`/api/stores/${storeId}/currencies/${storeCurrencyId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ isDefault: true }),
//       });

//       const updatedList = await res.json();
//       setStoreCurrencies(updatedList);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleAddCurrency = async () => {
//     if (!selectedCurrency) return;

//     try {
//       const currencyDetails = allCurrencies.find((c) => c.code === selectedCurrency);
//       if (!currencyDetails) throw new Error("العملة غير معروفة");

//       const res = await fetch(`/api/stores/${storeId}/currencies`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           currencyId: currencyDetails.id,
//           isDefault: false,
//         }),
//       });

//       const newStoreCurrency = await res.json();

//       setStoreCurrencies((prev) => [
//         ...prev,
//         {
//           ...newStoreCurrency,
//           currency: currencyDetails || { name: "غير معروف", code: "" },
//         },
//       ]);
//       setShowAddCurrency(false);
//       setSelectedCurrency("");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleSaveSettings = async () => {
//     alert("✅ تم حفظ الإعدادات بنجاح.");
//   };

//   if (loading) return <div className="text-center text-gray-500 py-10">جاري التحميل...</div>;

//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       <div className="flex items-center justify-between mb-6">
//         <div>
//           <h2 className="text-2xl font-bold text-gray-700">العملات المتاحة</h2>
//           <p className="text-sm text-gray-500 mt-1">
//             يمكنك التحكم في العملات وتعيين العملة الافتراضية
//           </p>
//         </div>
//       </div>

//       {storeCurrencies.length === 0 ? (
//         <p className="text-center text-gray-500">لا توجد عملات مضافة حالياً.</p>
//       ) : (
//         <div className="overflow-x-auto rounded border border-gray-200 bg-white shadow">
//           <table className="w-full text-sm text-gray-700">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-4 py-3 text-right">العملة</th>
//                 <th className="px-4 py-3 text-right">الحالة</th>
//                 <th className="px-4 py-3 text-right">افتراضية</th>
//               </tr>
//             </thead>
//             <tbody>
//               {storeCurrencies.map((sc) => (
//                 <tr key={sc.id} className="border-t">
//                   <td className="px-4 py-3 font-medium">
//                     {sc.currency?.name} ({sc.currency?.code})
//                   </td>
//                   <td className="px-4 py-3">
//                     <div className="flex items-center gap-2">
//                       <button
//                         onClick={() => handleToggleActive(sc.id, sc.isActive)}
//                         className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none ${sc.isActive ? "bg-green-500" : "bg-gray-300"
//                           }`}
//                       >
//                         <span
//                           className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${sc.isActive ? "translate-x-6" : "translate-x-1"
//                             }`}
//                         />
//                       </button>
//                       <span className="text-sm text-gray-600">
//                         {sc.isActive ? "مفعلة" : "غير مفعلة"}
//                       </span>
//                     </div>
//                   </td>

//                   <td className="px-4 py-3">
//                     {sc.isDefault ? (
//                       <span className="text-green-600 font-semibold">العملة الحالية</span>
//                     ) : (
//                       <button
//                         onClick={() => handleSetDefault(sc.id)}
//                         className="text-blue-600 hover:underline text-sm"
//                       >
//                         تعيين كافتراضية
//                       </button>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       <div className="mt-6">
//         {!showAddCurrency && (
//           <button
//             onClick={() => setShowAddCurrency(true)}
//             className="px-4 py-2 bg-emerald-500 text-white rounded shadow hover:bg-emerald-600"
//           >
//             + إضافة عملة جديدة
//           </button>
//         )}

//         {showAddCurrency && (
//           <div className="mt-4 bg-gray-50 p-4 rounded shadow">
//             <label className="block mb-2 text-sm text-gray-600">
//               اختر عملة لإضافتها:
//             </label>
//             <div className="flex items-center gap-2">
//               <select
//                 value={selectedCurrency}
//                 onChange={(e) => setSelectedCurrency(e.target.value)}
//                 className="border px-3 py-2 rounded w-full max-w-xs"
//               >
//                 <option value="">-- اختر عملة --</option>
//                 {availableCurrencies.map((c) => (
//                   <option key={c.id} value={c.code}>
//                     {c.name} ({c.code})
//                   </option>
//                 ))}
//               </select>
//               <button
//                 onClick={handleAddCurrency}
//                 className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//               >
//                 إضافة
//               </button>
//               <button
//                 onClick={() => setShowAddCurrency(false)}
//                 className="px-3 py-2 text-gray-600 hover:underline"
//               >
//                 إلغاء
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="mt-8 text-center">
//         <button
//           onClick={handleSaveSettings}
//           className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded shadow"
//         >
//           حفظ التعديلات
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function StoreCurrenciesClient({ currencies = [], storeId }) {
  const [storeCurrencies, setStoreCurrencies] = useState([]);
  const [allCurrencies, setAllCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddCurrency, setShowAddCurrency] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/currencies");
        const allData = await res.json();

        const allCurrenciesArray = Array.isArray(allData) ? allData : [allData];
        const storeCurrenciesArray = Array.isArray(currencies) ? currencies : [currencies];

        const mergedCurrencies = storeCurrenciesArray.map((storeCur) => {
          const currencyDetails = allCurrenciesArray.find(c => c.id === storeCur.currencyId);
          return {
            ...storeCur,
            currency: currencyDetails || { name: "غير معروف", code: "" },
          };
        });

        setStoreCurrencies(mergedCurrencies);
        setAllCurrencies(allCurrenciesArray);
      } catch (err) {
        setError(err.message || "حدث خطأ");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [currencies]);

  const availableCurrencies = allCurrencies.filter(
    (c) => !storeCurrencies.some((sc) => sc.currencyId === c.id)
  );

  const handleToggleActive = async (storeCurrencyId, isActive) => {
    const newStatus = !isActive;
    try {
      const res = await fetch(`/api/stores/${storeId}/currencies`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: newStatus, storeCurrencyId }),
      });
  
      const updatedData = await res.json();
  
      // ✅ أضف بيانات العملة بناءً على الـ currencyId
      const currencyDetails = allCurrencies.find(c => c.id === updatedData.currencyId);
  
      const updatedWithCurrency = {
        ...updatedData,
        currency: currencyDetails || { name: "غير معروف", code: "" },
      };
  
      setStoreCurrencies((prev) =>
        prev.map((sc) => (sc.id === storeCurrencyId ? updatedWithCurrency : sc))
      );
  
      toast.success(newStatus ? "✅ تم التفعيل" : "🚫 تم الإلغاء");
    } catch (err) {
      toast.error("❌ حدث خطأ أثناء التحديث");
    }
  };
  

  const handleSetDefault = async (storeCurrencyId) => {
    try {
      const res = await fetch(`/api/stores/${storeId}/currencies`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isDefault: true, storeCurrencyId }),
      });
  
      const updatedList = await res.json();
  
      // ✅ أضف بيانات العملة لكل عنصر لتجنب فقدان الاسم
      const merged = updatedList.map((item) => {
        const currency = allCurrencies.find((c) => c.id === item.currencyId);
        return {
          ...item,
          currency: currency || { name: "غير معروف", code: "" },
        };
      });
  
      setStoreCurrencies(merged);
      toast.success("✅ تم تعيين العملة الافتراضية");
    } catch (err) {
      toast.error("❌ فشل تعيين العملة الافتراضية");
    }
  };
  

  const handleAddCurrency = async () => {
    if (!selectedCurrency) return;

    try {
      const currencyDetails = allCurrencies.find((c) => c.code === selectedCurrency);
      if (!currencyDetails) throw new Error("العملة غير معروفة");

      const res = await fetch(`/api/stores/${storeId}/currencies`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currencyId: currencyDetails.id,
          isDefault: false,
        }),
      });

      const newStoreCurrency = await res.json();

      setStoreCurrencies((prev) => [
        ...prev,
        {
          ...newStoreCurrency,
          currency: currencyDetails || { name: "غير معروف", code: "" },
        },
      ]);
      toast.success("✅ تمت إضافة العملة بنجاح");
      setShowAddCurrency(false);
      setSelectedCurrency("");
    } catch (err) {
      toast.error("❌ فشل في إضافة العملة");
    }
  };

  const handleSaveSettings = () => {
    toast.success("✅ تم حفظ الإعدادات بنجاح");
  };

  if (loading) return <div className="text-center text-gray-500 py-10">جاري التحميل...</div>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-700">العملات المتاحة</h2>
          <p className="text-sm text-gray-500 mt-1">
            يمكنك التحكم في العملات وتعيين العملة الافتراضية
          </p>
        </div>
      </div>

      {storeCurrencies.length === 0 ? (
        <p className="text-center text-gray-500">لا توجد عملات مضافة حالياً.</p>
      ) : (
        <div className="overflow-x-auto rounded border border-gray-200 bg-white shadow">
          <table className="w-full text-sm text-gray-700">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-right">العملة</th>
                <th className="px-4 py-3 text-right">الحالة</th>
                <th className="px-4 py-3 text-right">افتراضية</th>
              </tr>
            </thead>
            <tbody>
              {storeCurrencies.map((sc) => (
                <tr key={sc.id} className="border-t">
                  <td className="px-4 py-3 font-medium">
                    {sc.currency?.name} ({sc.currency?.code})
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleToggleActive(sc.id, sc.isActive)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none ${
                          sc.isActive ? "bg-green-500" : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                            sc.isActive ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                      <span className="text-sm text-gray-600">
                        {sc.isActive ? "مفعلة" : "غير مفعلة"}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
  <input
    type="radio"
    name="defaultCurrency"
    checked={sc.isDefault}
    onChange={() => handleSetDefault(sc.id)}
    className="form-radio text-indigo-600"
  />
</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-6">
        {!showAddCurrency && (
          <button
            onClick={() => setShowAddCurrency(true)}
            className="px-4 py-2 bg-emerald-500 text-white rounded shadow hover:bg-emerald-600"
          >
            + إضافة عملة جديدة
          </button>
        )}

        {showAddCurrency && (
          <div className="mt-4 bg-gray-50 p-4 rounded shadow">
            <label className="block mb-2 text-sm text-gray-600">
              اختر عملة لإضافتها:
            </label>
            <div className="flex items-center gap-2">
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="border px-3 py-2 rounded w-full max-w-xs"
              >
                <option value="">-- اختر عملة --</option>
                {availableCurrencies.map((c) => (
                  <option key={c.id} value={c.code}>
                    {c.name} ({c.code})
                  </option>
                ))}
              </select>
              <button
                onClick={handleAddCurrency}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                إضافة
              </button>
              <button
                onClick={() => setShowAddCurrency(false)}
                className="px-3 py-2 text-gray-600 hover:underline"
              >
                إلغاء
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={handleSaveSettings}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded shadow"
        >
          حفظ التعديلات
        </button>
      </div>
    </div>
  );
}
