
// "use client";
// import { useSession } from "next-auth/react";  // استيراد useSession
// import React, { useState, useEffect } from "react";

// export default function Page() {
//   const { data: session } = useSession(); // جلب الجلسة من الـ next-auth
//   const userId = session?.user?.id;

//   const [providers, setProviders] = useState([]); 
//   const [selectedProviders, setSelectedProviders] = useState([]);
//   const [savedProviders, setSavedProviders] = useState([]);
//   const [storeId, setStoreId] = useState(null);

//   useEffect(() => {
//     async function fetchStoreId() {
//       if (userId) {
//         try {
//           const response = await fetch(`/api/stores?vendorId=${userId}`);
//           const data = await response.json();
//           setStoreId(data[0]?.id);
//         } catch (error) {
//           console.error("Error fetching storeId:", error);
//         }
//       }
//     }
//     fetchStoreId();
//   }, [userId]);
//   useEffect(() => {
//     async function fetchPaymentProviders() {
//       try {
//         const response = await fetch("/api/deliveringProviders");
//         const data = await response.json();
//         setProviders(data);
//       } catch (error) {
//         console.error("Error fetching payment providers:", error);
//       }
//     }
//     fetchPaymentProviders();
//   }, []);

//   useEffect(() => {
//     if (storeId) {
//       async function fetchSavedProviders() {
//         try {
//           const response = await fetch(`/api/storeDeliveringSetting?storeId=${storeId}`);
//           const data = await response.json();
//           setSavedProviders(data);
//         } catch (error) {
//           console.error("Error fetching saved providers:", error);
//         }
//       }
//       fetchSavedProviders();
//     }
//   }, [storeId]);

//   const handleProviderToggle = (deliveringProviderId) => {
//     setSelectedProviders((prevSelected) =>
//       prevSelected.includes(deliveringProviderId)
//         ? prevSelected.filter((id) => id !== deliveringProviderId)
//         : [...prevSelected, deliveringProviderId]
//     );
//   };

//   const handleSaveProviders = async () => {
//     if (!storeId) {
//       console.error("storeId is not available");
//       return;
//     }
  
//     try {
//       const response = await fetch("/api/storeDeliveringSetting", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(selectedProviders.map((id) => ({
//           storeId,
//           deliveringProviderId,
//           isActive: true,
//         }))),
//       });
  
//       if (!response.ok) {
//         throw new Error("Failed to save providers");
//       }
  
//       const data = await response.json();
//       setSavedProviders(data);
//       setSelectedProviders([]);
//     } catch (error) {
//       console.error("Error saving providers:", error);
//     }
//   };
  
//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-4">Payment Providers</h2>

//       {/* قائمة مزودي الدفع */}
//       <div>
//         <h3 className="mb-5 text-lg font-medium">Select Payment Providers</h3>
//         {providers.map((provider) => (
//           <div key={provider.id} className="card p-4 mb-4 dark:bg-slate-800 bg-white rounded-lg">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <img
//                   alt={`Logo of ${provider.name}`}
//                   className="w-10 h-10"
//                   src={provider.logoUrl || `https://via.placeholder.com/150`}
//                 />
//                 <div className="ml-4">
//                   <h2 className="font-bold">{provider.name}</h2>
//                   <p>{provider.description || "No description available"}</p>
//                 </div>
//               </div>
//               <input
//                 type="checkbox"
//                 checked={selectedProviders.includes(provider.id)}
//                 onChange={() => handleProviderToggle(provider.id)}
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* زر الحفظ */}
//       <button
//         className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//         onClick={handleSaveProviders}
//       >
//         Save Selected Providers
//       </button>

//       <div className="mt-8">
//         <h3 className="text-lg font-medium">Saved Providers</h3>
//         <div className="grid grid-cols-1 gap-4">
//           {savedProviders.map((provider) => (
//             <div key={provider.id} className="card p-4 mb-4  dark:bg-slate-800 bg-white rounded-lg">
//               <div className="flex items-center">
//                 <img
//                   alt={`Logo of ${provider.deliveringProviders?.name}`}
//                   className="w-10 h-10"
//                   src={provider.deliveringProviders?.logoUrl || 'https://via.placeholder.com/150'}                />
//                 <div className="ml-4">
//                   <h2 className="font-bold">{provider.deliveringProviders?.name}</h2>
//                   <p>{provider.deliveringProviders?.description || "No description available"}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client";
// import { useSession } from "next-auth/react";  // استيراد useSession
// import React, { useState, useEffect } from "react";

// export default function Page() {
//   const { data: session } = useSession(); // جلب الجلسة من الـ next-auth
//   const userId = session?.user?.id;

//   const [providers, setProviders] = useState([]); 
//   const [selectedProviders, setSelectedProviders] = useState([]);
//   const [savedProviders, setSavedProviders] = useState([]);
//   const [storeId, setStoreId] = useState(null);

//   useEffect(() => {
//     async function fetchStoreId() {
//       if (userId) {
//         try {
//           const response = await fetch(`/api/stores?vendorId=${userId}`);
//           const data = await response.json();
//           setStoreId(data[0]?.id);
//         } catch (error) {
//           console.error("Error fetching storeId:", error);
//         }
//       }
//     }
//     fetchStoreId();
//   }, [userId]);

//   useEffect(() => {
//     async function fetchPaymentProviders() {
//       try {
//         const response = await fetch("/api/deliveringProviders");
//         const data = await response.json();
//         setProviders(data);
//       } catch (error) {
//         console.error("Error fetching payment providers:", error);
//       }
//     }
//     fetchPaymentProviders();
//   }, []);

//   useEffect(() => {
//     if (storeId) {
//       async function fetchSavedProviders() {
//         try {
//           const response = await fetch(`/api/storeDeliveringSetting?storeId=${storeId}`);
//           const data = await response.json();
//           setSavedProviders(data);
//         } catch (error) {
//           console.error("Error fetching saved providers:", error);
//         }
//       }
//       fetchSavedProviders();
//     }
//   }, [storeId]);

//   const handleProviderToggle = (deliveringProviderId) => {
//     setSelectedProviders((prevSelected) =>
//       prevSelected.includes(deliveringProviderId)
//         ? prevSelected.filter((id) => id !== deliveringProviderId)
//         : [...prevSelected, deliveringProviderId]
//     );
//   };

//   const handleSaveProviders = async () => {
//     if (!storeId) {
//       console.error("storeId is not available");
//       return;
//     }

//     try {
//       const response = await fetch("/api/storeDeliveringSetting", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(selectedProviders.map((id) => ({
//           storeId,
//           deliveringProviderId: id,
//           isActive: true,
//         }))),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to save providers");
//       }

//       const data = await response.json();
//       setSavedProviders(data);
//       setSelectedProviders([]);
//     } catch (error) {
//       console.error("Error saving providers:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-8">Payment Providers</h2>

//         <div className="mb-8">
//           <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-5">Select Payment Providers</h3>
//           <div className="space-y-4">
//             {providers.map((provider) => (
//               <div key={provider.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-lg dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-300">
//                 <div className="flex items-center space-x-4">
//                   <img
//                     alt={`Logo of ${provider.name}`}
//                     className="w-12 h-12 rounded-full"
//                     src={provider.logoUrl || `https://via.placeholder.com/150`}
//                   />
//                   <div>
//                     <h2 className="font-bold text-lg text-gray-800 dark:text-white">{provider.name}</h2>
//                     <p className="text-sm text-gray-600 dark:text-gray-300">{provider.description || "No description available"}</p>
//                   </div>
//                 </div>
//                 <input
//                   type="checkbox"
//                   checked={selectedProviders.includes(provider.id)}
//                   onChange={() => handleProviderToggle(provider.id)}
//                   className="w-6 h-6 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         <button
//           className="w-full py-3 mt-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//           onClick={handleSaveProviders}
//         >
//           Save Selected Providers
//         </button>

//         <div className="mt-12">
//           <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-5">Saved Providers</h3>
//           <div className="space-y-4">
//             {savedProviders.map((provider) => (
//               <div key={provider.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-lg dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-300">
//                 <div className="flex items-center space-x-4">
//                   <img
//                     alt={`Logo of ${provider.deliveringProviders?.name}`}
//                     className="w-12 h-12 rounded-full"
//                     src={provider.deliveringProviders?.logoUrl || 'https://via.placeholder.com/150'}
//                   />
//                   <div>
//                     <h2 className="font-bold text-lg text-gray-800 dark:text-white">{provider.deliveringProviders?.name}</h2>
//                     <p className="text-sm text-gray-600 dark:text-gray-300">{provider.deliveringProviders?.description || "No description available"}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client";
// import { useSession } from "next-auth/react";
// import React, { useState, useEffect } from "react";

// export default function Page() {
//   const { data: session } = useSession();
//   const userId = session?.user?.id;

//   const [providers, setProviders] = useState([]);
//   const [selectedProviders, setSelectedProviders] = useState([]);
//   const [savedProviders, setSavedProviders] = useState([]);
//   const [storeId, setStoreId] = useState(null);

//   // Fetch the store ID associated with the user
//   useEffect(() => {
//     async function fetchStoreId() {
//       if (userId) {
//         try {
//           const response = await fetch(`/api/stores?vendorId=${userId}`);
//           const data = await response.json();
//           setStoreId(data[0]?.id);
//         } catch (error) {
//           console.error("Error fetching storeId:", error);
//         }
//       }
//     }
//     fetchStoreId();
//   }, [userId]);

//   // Fetch payment providers list
//   useEffect(() => {
//     async function fetchPaymentProviders() {
//       try {
//         const response = await fetch("/api/PaymentProvider");
//         const data = await response.json();
//         setProviders(data);
//       } catch (error) {
//         console.error("Error fetching payment providers:", error);
//       }
//     }
//     fetchPaymentProviders();
//   }, []);

//   // Fetch saved providers for the store
//   useEffect(() => {
//     if (storeId) {
//       async function fetchSavedProviders() {
//         try {
//           const response = await fetch(`/api/storePaymentSetting?storeId=${storeId}`);
//           const data = await response.json();
//           setSavedProviders(data);
//         } catch (error) {
//           console.error("Error fetching saved providers:", error);
//         }
//       }
//       fetchSavedProviders();
//     }
//   }, [storeId]);

//   // Toggle selection for a provider
//   const handleProviderToggle = (providerId) => {
//     setSelectedProviders((prevSelected) =>
//       prevSelected.includes(providerId)
//         ? prevSelected.filter((id) => id !== providerId)
//         : [...prevSelected, providerId]
//     );
//   };

//   // Save selected providers one by one and update the saved list
//   const handleSaveProviders = async () => {
//     if (!storeId) {
//       console.error("Store ID is not available");
//       return;
//     }
//     try {
//       for (const providerId of selectedProviders) {
//         const response = await fetch("/api/storePaymentSetting", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             storeId,
//             paymentProvidersId: providerId,
//             isActive: true,
//           }),
//         });
//         if (!response.ok) {
//           throw new Error("Failed to add provider");
//         }
//       }
//       const response = await fetch(`/api/storePaymentSetting?storeId=${storeId}`);
//       const data = await response.json();
//       setSavedProviders(data);
//       setSelectedProviders([]);
//     } catch (error) {
//       console.error("Error saving providers:", error);
//     }
//   };

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
//         Payment Providers
//       </h2>

//       {/* Payment Providers List */}
//       <div className="mb-8">
//         <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
//           Select Payment Providers
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {providers.map((provider) => (
//             <div
//               key={provider.id}
//               className={`flex items-center justify-between bg-white dark:bg-slate-800 border rounded-xl p-4 shadow hover:shadow-lg transition-all ${
//                 selectedProviders.includes(provider.id) ? "ring-2 ring-purple-500" : ""
//               }`}
//             >
//               <div className="flex items-center gap-4">
//                 <img
//                   src={provider.imageUrl || "https://via.placeholder.com/150"}
//                   alt={`Logo of ${provider.name}`}
//                   className="w-12 h-12 rounded-md object-contain"
//                 />
//                 <div>
//                   <h4 className="text-lg font-bold text-gray-800 dark:text-white">
//                     {provider.name}
//                   </h4>
//                   <p className="text-sm text-gray-500 dark:text-gray-300">
//                     {provider.description || "No description available"}
//                   </p>
//                 </div>
//               </div>
//               <input
//                 type="checkbox"
//                 checked={selectedProviders.includes(provider.id)}
//                 onChange={() => handleProviderToggle(provider.id)}
//                 className="w-5 h-5 accent-purple-500"
//                 aria-label="Select Provider"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Save Button */}
//       <div className="flex justify-center">
//         <button
//           onClick={handleSaveProviders}
//           className="bg-purple-600 text-white px-6 py-2 rounded-xl hover:bg-purple-700 transition-all"
//         >
//           Save Selected Providers
//         </button>
//       </div>

//       {/* Saved Providers Display */}
//       <div className="mt-12">
//         <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
//           Saved Providers
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {savedProviders.map((provider) => (
//             <div
//               key={provider.id}
//               className="flex items-center bg-gray-100 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl p-4 shadow"
//             >
//               <img
//                 src={provider.paymentProvider.imageUrl || "https://via.placeholder.com/150"}
//                 alt={`Logo of ${provider.paymentProvider.name}`}
//                 className="w-12 h-12 rounded-md object-contain ml-4"
//               />
//               <div>
//                 <h4 className="text-lg font-bold text-gray-800 dark:text-white">
//                   {provider.paymentProvider.name}
//                 </h4>
//                 <p className="text-sm text-gray-500 dark:text-gray-300">
//                   {provider.paymentProvider.description || "No description available"}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Page() {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [providers, setProviders] = useState([]);
  const [selectedProviders, setSelectedProviders] = useState([]);
  const [savedProviders, setSavedProviders] = useState([]);
  const [storeId, setStoreId] = useState(null);

  useEffect(() => {
    async function fetchStoreId() {
      if (userId) {
        try {
          const response = await fetch(`/api/stores?vendorId=${userId}`);
          const data = await response.json();
          setStoreId(data[0]?.id);
        } catch (error) {
          console.error("خطأ في جلب معرف المتجر:", error);
        }
      }
    }
    fetchStoreId();
  }, [userId]);

  useEffect(() => {
    async function fetchDeliveryProviders() {
      try {
        const response = await fetch("/api/deliveringProviders"); // ← يجب أن تتأكد أن هذه هي الـ API الصحيحة للتوصيل
        const data = await response.json();
        setProviders(data);
      } catch (error) {
        console.error("خطأ في جلب مزودي التوصيل:", error);
      }
    }
    fetchDeliveryProviders();
  }, []);

  useEffect(() => {
    if (storeId) {
      async function fetchSavedProviders() {
        try {
          const response = await fetch(`/api/storeDeliveringSetting?storeId=${storeId}`);
          const data = await response.json();
          setSavedProviders(data);
        } catch (error) {
          console.error("خطأ في جلب مزودي التوصيل المحفوظين:", error);
        }
      }
      fetchSavedProviders();
    }
  }, [storeId]);

  const handleProviderToggle = (providerId) => {
    setSelectedProviders((prevSelected) =>
      prevSelected.includes(providerId)
        ? prevSelected.filter((id) => id !== providerId)
        : [...prevSelected, providerId]
    );
  };

  const handleSaveProviders = async () => {
    if (!storeId) {
      console.error("معرف المتجر غير متاح");
      return;
    }
    try {
      for (const providerId of selectedProviders) {
        const response = await fetch("/api/storeDeliverySetting", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            storeId,
            deliveryProviderId: providerId,
            isActive: true,
          }),
        });
        if (!response.ok) {
          throw new Error("فشل في إضافة مزود التوصيل");
        }
      }
      const response = await fetch(`/api/storeDeliverySetting?storeId=${storeId}`);
      const data = await response.json();
      setSavedProviders(data);
      setSelectedProviders([]);
    } catch (error) {
      console.error("خطأ أثناء حفظ مزودي التوصيل:", error);
    }
  };

  return (
    <div dir="rtl" className="max-w-5xl mx-auto px-4 py-8 text-right">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        مزودو التوصيل
      </h2>

      {/* قائمة مزودي التوصيل */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
          اختر مزودي التوصيل المرغوبين
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {providers.map((provider) => (
            <div
              key={provider.id}
              className={`flex items-center justify-between bg-white dark:bg-slate-800 border rounded-xl p-4 shadow hover:shadow-lg transition-all ${
                selectedProviders.includes(provider.id) ? "ring-2 ring-purple-500" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <img
                  src={provider.logoUrl || "https://via.placeholder.com/150"}
                  alt={`شعار ${provider.name}`}
                  className="w-12 h-12 rounded-md object-contain"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                    {provider.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {provider.description || "لا يوجد وصف متاح"}
                  </p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={selectedProviders.includes(provider.id)}
                onChange={() => handleProviderToggle(provider.id)}
                className="w-5 h-5 accent-purple-500"
                aria-label="اختر مزود التوصيل"
              />
            </div>
          ))}
        </div>
      </div>

      {/* زر الحفظ */}
      <div className="flex justify-center">
        <button
          onClick={handleSaveProviders}
          className="bg-purple-600 text-white px-6 py-2 rounded-xl hover:bg-purple-700 transition-all"
        >
          حفظ مزودي التوصيل المختارين
        </button>
      </div>

      {/* عرض المزودين المحفوظين */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
          مزودو التوصيل المحفوظون
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {savedProviders.map((provider) => (
            <div
              key={provider.id}
              className="flex items-center bg-gray-100 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl p-4 shadow"
            >
              <Image
                src={provider.deliveryProvider.logoUrl || `https://via.placeholder.com/150`}
                alt={`شعار ${provider.deliveryProvider.name}`}
                className="w-12 h-12 rounded-md object-contain ml-4"
              />
              <div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                  {provider.deliveryProvider.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {provider.deliveryProvider.description || "لا يوجد وصف متاح"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
