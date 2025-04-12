// // page.js
// import CurrencyList from './_component/CurrencyList';

// const Page = () => {
  
//   return (
//     <div>
//       <h1>إدارة العملات</h1>

//       <CurrencyList />   
//        </div>
//   );
// };

// export default Page;


// "use client";

// import { useEffect, useState } from "react";

// export default function CurrenciesPage() {
//   const [currencies, setCurrencies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     code: "",
//     name: "",
//     symbol: "",
//     isDefault: false,
//     rateToDefault: 0.0,
//   });
//   const [error, setError] = useState(null);

//   // جلب بيانات العملات عند تحميل الصفحة
//   useEffect(() => {
//     async function fetchCurrencies() {
//       try {
//         const res = await fetch("/api/currencies");
//         if (!res.ok) throw new Error("حدث خطأ أثناء جلب بيانات العملات");
//         const data = await res.json();
//         setCurrencies(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchCurrencies();
//   }, []);

//   // التعامل مع إرسال النموذج لإضافة عملة جديدة
//   const handleSubmit = async (e) => {
//     console.log(formData)
//     e.preventDefault();

//     try {
//       const res = await fetch('/api/currencies', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
//       if (!res.ok) throw new Error("فشل إضافة العملة الجديدة");
//       // تحديث القائمة بعد الإضافة
//       const res2 = await fetch("/api/currencies");
//       const data = await res2.json();
//       setCurrencies(data);
//       setFormData({
//         code: "",
//         name: "",
//         symbol: "",
//         rateToDefault: 0.0,
//         isDefault: false,
//       });
//       setShowForm(false);
//       setError(null);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   // تحديث العملة الافتراضية للنظام
//   const handleChangeDefault = async (id ,) => {
//     try {
//       const res = await fetch(`/api/currencies/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ id }),
//       });
//       if (!res.ok) throw new Error("فشل تحديث العملة الافتراضية");
//       const res2 = await fetch("/api/currencies");
//       const data = await res2.json();
//       setCurrencies(data);
//       setError(null);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   // حذف عملة
//   const handleDelete = async (id) => {
//     try {
//       const res = await fetch(`/api/currencies/${id}`, { method: "DELETE" });
//       if (!res.ok) throw new Error("فشل حذف العملة");
//       const res2 = await fetch("/api/currencies");
//       const data = await res2.json();
//       setCurrencies(data);
//       setError(null);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading)
//     return (
//       <div className="flex justify-center items-center min-h-screen text-lg text-gray-600">
//         جاري التحميل...
//       </div>
//     );
//   if (error)
//     return (
//       <div className="p-4 bg-red-100 text-red-700 rounded mx-4 my-4">
//         {error}
//       </div>
//     );

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-600">
//         لوحة إدارة العملات - مدير النظام
//       </h1>

//       <div className="flex justify-between items-center mb-6">
//         <button
//           onClick={() => setShowForm(!showForm)}
//           className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded shadow"
//         >
//           {showForm ? "إخفاء النموذج" : "إضافة عملة جديدة"}
//         </button>
//       </div>

//       {showForm && (
//         <form
//           onSubmit={handleSubmit}
//           className="mb-8 p-6 bg-white rounded shadow-md border border-gray-200  text-gray-600"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 mb-1">الكود:</label>
//               <input
//                 type="text"
//                 value={formData.code}
//                 onChange={(e) =>
//                   setFormData({ ...formData, code: e.target.value })
//                 }
//                 className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 mb-1">الاسم:</label>
//               <input
//                 type="text"
//                 value={formData.name}
//                 onChange={(e) =>
//                   setFormData({ ...formData, name: e.target.value })
//                 }
//                 className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 mb-1">الرمز:</label>
//               <input
//                 type="text"
//                 value={formData.symbol}
//                 onChange={(e) =>
//                   setFormData({ ...formData, symbol: e.target.value })
//                 }
//                 className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 mb-1">
//                 سعر الصرف بالنسبة للعملة الافتراضية:
//               </label>
//               <input
//                 type="number"
//                 step="0.01"
//                 value={formData.rateToDefault}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     rateToDefault: parseFloat(e.target.value) 
//                   })
//                 }
//                 className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
//                 required
//               />
//             </div>
//           </div>
//           <div className="flex items-center mt-4">
//             <input
//               type="checkbox"
//               checked={formData.isDefault}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   isDefault: e.target.checked,
//                 })
//               }
//               className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//             />
//             <label className="text-gray-700">تعيين العملة كافتراضية للنظام</label>
//           </div>
//           <button
//             type="submit"
//             className="mt-6 w-full py-2 bg-green-600 hover:bg-green-700 transition-colors text-white rounded shadow"
//           >
//             حفظ
//           </button>
//         </form>
//       )}

//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200 rounded shadow">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="px-4 py-3 border-b text-left text-gray-600">الكود</th>
//               <th className="px-4 py-3 border-b text-left text-gray-600">الاسم</th>
//               <th className="px-4 py-3 border-b text-left text-gray-600">الرمز</th>
//               <th className="px-4 py-3 border-b text-left text-gray-600">سعر الصرف</th>
//               <th className="px-4 py-3 border-b text-center text-gray-600">افتراضية</th>
//               <th className="px-4 py-3 border-b text-center text-gray-600">الإجراءات</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currencies.map((currency) => (
//               <tr
//                 key={currency.id}
//                 className="hover:bg-gray-50 transition-colors"
//               >
//                 <td className="px-4 py-3 border-b  text-gray-600">{currency.code}</td>
//                 <td className="px-4 py-3 border-b  text-gray-600">{currency.name}</td>
//                 <td className="px-4 py-3 border-b  text-gray-600">{currency.symbol}</td>
//                 <td className="px-4 py-3 border-b  text-gray-600">{currency.rateToDefault}</td>
//                 <td className="px-4 py-3 border-b text-center  text-gray-600">
//                   {currency.isDefault ? (
//                     <span type="button" className="px-2 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-semibold">
//                       افتراضية
//                     </span>
//                   ) : (
//                     <button
//                       onClick={() => handleChangeDefault(currency.id)}
//                       className="px-3 py-1 bg-yellow-400 hover:bg-yellow-500 transition-colors text-white rounded text-xs "
//                     >
//                       تعيين
//                     </button>
//                   )}
//                 </td>
//                 <td className="px-4 py-3 border-b text-center space-x-2">
//                   <button className="px-3 py-1 bg-indigo-500 hover:bg-indigo-600 transition-colors text-white rounded text-xs">
//                     تعديل
//                   </button>
//                   <button
//                     onClick={() => handleDelete(currency.id)}
//                     className="px-3 py-1 bg-red-500 hover:bg-red-600 transition-colors text-white rounded text-xs"
//                   >
//                     حذف
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";

export default function CurrenciesPage() {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  // لتحديد حالة التعديل (null تعني إضافة جديدة)
  const [editingCurrency, setEditingCurrency] = useState(null);
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    symbol: "",
    rateToDefault: 0.0,
    isDefault: false,
  });
  const [error, setError] = useState(null);

  // جلب بيانات العملات عند تحميل الصفحة
  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const res = await fetch("/api/currencies");
        if (!res.ok)
          throw new Error("حدث خطأ أثناء جلب بيانات العملات");
        const data = await res.json();
        setCurrencies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCurrencies();
  }, []);

  // إعادة تعيين النموذج وإلغاء وضع التعديل
  const resetForm = () => {
    setFormData({
      code: "",
      name: "",
      symbol: "",
      rateToDefault: 0.0,
      isDefault: false,
    });
    setEditingCurrency(null);
  };

  // التعامل مع إرسال النموذج (للإضافة أو التحديث)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingCurrency) {
      // تحديث العملة الموجودة
      try {
        const res = await fetch(`/api/currencies/${editingCurrency.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (!res.ok)
          throw new Error("فشل تحديث العملة");
        // تحديث القائمة بعد التعديل
        const res2 = await fetch("/api/currencies");
        const data = await res2.json();
        setCurrencies(data);
        resetForm();
        setShowForm(false);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    } else {
      // إضافة عملة جديدة
      try {
        const res = await fetch("/api/currencies", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (!res.ok)
          throw new Error("فشل إضافة العملة الجديدة");
        // تحديث القائمة بعد الإضافة
        const res2 = await fetch("/api/currencies");
        const data = await res2.json();
        setCurrencies(data);
        resetForm();
        setShowForm(false);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    }
  };

  // تحديث العملة الافتراضية (يمكن تعديلها حسب منطق مشروعك)
  const handleChangeDefault = async (id) => {
    try {
      const res = await fetch(`/api/currencies/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }), // هنا يمكنك إرسال بيانات مخصصة لتعيينها كافتراضية
      });
      if (!res.ok)
        throw new Error("فشل تحديث العملة الافتراضية");
      const res2 = await fetch("/api/currencies");
      const data = await res2.json();
      setCurrencies(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  // حذف عملة
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/currencies/${id}`, { method: "DELETE" });
      if (!res.ok)
        throw new Error("فشل حذف العملة");
      const res2 = await fetch("/api/currencies");
      const data = await res2.json();
      setCurrencies(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  // بدء وضع التعديل وتعبئة النموذج ببيانات العملة المحددة
  const handleEdit = (currency) => {
    setEditingCurrency(currency);
    setFormData({
      code: currency.code,
      name: currency.name,
      symbol: currency.symbol,
      rateToDefault: currency.rateToDefault,
      isDefault: currency.isDefault,
    });
    setShowForm(true);
  };

  // تبديل الوضع الليلي


  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-lg text-gray-600 dark:text-gray-300">
        جاري التحميل...
      </div>
    );
  if (error)
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded mx-4 my-4">
        {error}
      </div>
    );

  return (
    // تطبيق الفئة "dark" على المستوى الجذري حسب حالة darkMode
      <div className="max-w-7xl mx-auto p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold text-center text-gray-600 dark:text-gray-300">
            لوحة إدارة العملات - مدير النظام
          </h1>
       
        </div>

        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => {
              setShowForm(!showForm);
              if (showForm) resetForm();
            }}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded shadow"
          >
            {showForm ? "إخفاء النموذج" : "إضافة عملة"}
          </button>
        </div>

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="mb-8 p-6 bg-white dark:bg-gray-800 rounded shadow-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">الكود:</label>
                <input
                  type="text"
                  value={formData.code}
                  onChange={(e) =>
                    setFormData({ ...formData, code: e.target.value })
                  }
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">الاسم:</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">الرمز:</label>
                <input
                  type="text"
                  value={formData.symbol}
                  onChange={(e) =>
                    setFormData({ ...formData, symbol: e.target.value })
                  }
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">
                  سعر الصرف بالنسبة للعملة الافتراضية:
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.rateToDefault}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      rateToDefault: parseFloat(e.target.value)
                    })
                  }
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                  required
                />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                checked={formData.isDefault}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    isDefault: e.target.checked,
                  })
                }
                className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label>تعيين العملة كافتراضية للنظام</label>
            </div>
            <div className="flex justify-end space-x-2 mt-6">
              {editingCurrency && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-600 transition-colors text-white rounded shadow"
                >
                  إلغاء
                </button>
              )}
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 transition-colors text-white rounded shadow"
              >
                {editingCurrency ? "تحديث" : "حفظ"}
              </button>
            </div>
          </form>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-3 border-b text-left text-gray-600 dark:text-gray-300">الكود</th>
                <th className="px-4 py-3 border-b text-left text-gray-600 dark:text-gray-300">الاسم</th>
                <th className="px-4 py-3 border-b text-left text-gray-600 dark:text-gray-300">الرمز</th>
                <th className="px-4 py-3 border-b text-left text-gray-600 dark:text-gray-300">سعر الصرف</th>
                <th className="px-4 py-3 border-b text-center text-gray-600 dark:text-gray-300">افتراضية</th>
                <th className="px-4 py-3 border-b text-center text-gray-600 dark:text-gray-300">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {currencies.map((currency) => (
                <tr
                  key={currency.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="px-4 py-3 border-b text-gray-600 dark:text-gray-300">{currency.code}</td>
                  <td className="px-4 py-3 border-b text-gray-600 dark:text-gray-300">{currency.name}</td>
                  <td className="px-4 py-3 border-b text-gray-600 dark:text-gray-300">{currency.symbol}</td>
                  <td className="px-4 py-3 border-b text-gray-600 dark:text-gray-300">{currency.rateToDefault}</td>
                  <td className="px-4 py-3 border-b text-center">
                    {currency.isDefault ? (
                      <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-semibold">
                        افتراضية
                      </span>
                    ) : (
                      <button
                        className="px-3 py-1 bg-yellow-400 hover:bg-yellow-500 transition-colors text-white rounded text-xs"
                      >
                      </button>
                    )}
                  </td>
                  <td className="px-4 py-3 border-b text-center space-x-2">
                    <button
                      onClick={() => handleEdit(currency)}
                      className="px-3 py-1 bg-indigo-500 hover:bg-indigo-600 transition-colors text-white rounded text-xs"
                    >
                      تعديل
                    </button>
                    <button
                      onClick={() => handleDelete(currency.id)}
                      className="px-3 py-1 bg-red-500 hover:bg-red-600 transition-colors text-white rounded text-xs"
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
}
