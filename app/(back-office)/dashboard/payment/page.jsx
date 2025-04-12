// "use client";

// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import { setCurrentStep, updateOnboardingFormData } from "../../../../redux/slices/onboardingSlice";

// export default function Page() {
//   const [products, setProducts] = useState([]);
//   const [shippingCost, setShippingCost] = useState(null);
//   const [selectedCompanies, setSelectedCompanies] = useState([]);
//   const [providers, setProviders] = useState([]);
//   const [selectedProviders, setSelectedProviders] = useState([]);
//   const [storeId, setStoreId] = useState(null); // ستخزن هنا storeId المستخرج بناءً على userId
//   const dispatch = useDispatch();
//   const currentStep = useSelector((store) => store.onboarding.currentStep);
//   const existingFormData = useSelector((store) => store.onboarding.onboardingFormData);

//   const { register, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: { ...existingFormData },
//   });

//   // الحصول على storeId بناءً على userId
//   useEffect(() => {
//     async function fetchStoreId() {
//       try {
//         const session = await getServerSession(authOptions);
//         const userId = session?.user?.id;
        
//         if (!userId) {
//           throw new Error("User ID not found");
//         }

//         const response = await fetch(`/api/stores?vendorId=${userId}`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch storeId");
//         }

//         const data = await response.json();
//         setStoreId(data[0]?.id); // استخدام storeId من البيانات المسترجعة
//       } catch (error) {
//         console.error("Error fetching storeId:", error);
//       }
//     }

//     fetchStoreId();
//   }, []);

//   const processData = async (data) => {
//     data.products = products;
//     data.shippingCost = shippingCost;
//     data.selectedCompanies = selectedCompanies;
//     data.selectedProviders = selectedProviders;
//     dispatch(updateOnboardingFormData(data));
//     dispatch(setCurrentStep(currentStep + 1));
//   };

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

//   const handleProviderToggle = (providerId) => {
//     setSelectedProviders((prevSelected) => {
//       if (prevSelected.includes(providerId)) {
//         return prevSelected.filter((id) => id !== providerId);
//       } else {
//         return [...prevSelected, providerId];
//       }
//     });
//   };

//   const handleSaveProviders = async () => {
//     if (!storeId) {
//       console.error("storeId is not available");
//       return;
//     }
    
//     // إضافة المزودات المحددة
//     for (const providerId of selectedProviders) {
//       try {
//         const response = await fetch("/api/storePaymentSetting", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             storeId, // استخدام storeId المستخرج
//             paymentProvidersId: providerId,
//             isActive: true,
            
//           }),
          
//         });

//         if (!response.ok) {
//           throw new Error("Failed to add provider to StorePaymentSetting");
//         }

//         const data = await response.json();
//         console.log("Provider added:", data);
//       } catch (error) {
//         console.error("Error adding provider:", error);
//       }
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(processData)}>
//         <h2 className="text-xl font-semibold mb-4 dark:text-lime-400">Vendor Details</h2>

//         <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//           {/* مزودي الدفع */}
//           <div className="col-span-full">
//             <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Select Payment Providers</h3>
//             {providers.map((provider) => (
//               <div key={provider.id} className="card p-4 mb-4 bg-white rounded-lg">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
//                       <img
//                         alt={`Logo of ${provider.name}`}
//                         className="w-10 h-10"
//                         src={provider.imageUrl || `https://via.placeholder.com/150`}
//                       />
//                     </div>
//                     <div className="mr-4">
//                       <h2 className="font-bold">{provider.name}</h2>
//                       <p className="text-gray-600">
//                         {provider.name || "No description available"}
//                       </p>
//                     </div>
//                   </div>
//                   <div>
//                     <label className="relative inline-block w-10 align-middle select-none">
//                       <input
//                         type="checkbox"
//                         className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
//                         checked={selectedProviders.includes(provider.id)}
//                         onChange={() => handleProviderToggle(provider.id)}
//                       />
//                       <span className="block overflow-hidden h-6 rounded-full bg-gray-300"></span>
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         {/* زر لحفظ المزودات المحددة */}
//         <div className="mt-4">
//           <button
//             type="button"
//             className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//             onClick={handleSaveProviders}
//           >
//             Save Selected Providers
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
// "use client";

// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import { setCurrentStep, updateOnboardingFormData } from "../../../../redux/slices/onboardingSlice";

// export default function Page() {
//   const [products, setProducts] = useState([]);
//   const [shippingCost, setShippingCost] = useState(null);
//   const [selectedCompanies, setSelectedCompanies] = useState([]);
//   const [providers, setProviders] = useState([]);
//   const [selectedProviders, setSelectedProviders] = useState([]);
//   const [storeId, setStoreId] = useState(null);
//   const [savedProviders, setSavedProviders] = useState([]); // لتخزين الإعدادات المحفوظة
//   const dispatch = useDispatch();
//   const currentStep = useSelector((store) => store.onboarding.currentStep);
//   const existingFormData = useSelector((store) => store.onboarding.onboardingFormData);

//   const { register, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: { ...existingFormData },
//   });

//   // استرداد storeId
//   useEffect(() => {
//     const fetchStoreId = async () => {
//       try {
//         const response = await fetch("/api/getStoreId");
//         if (!response.ok) throw new Error("Failed to fetch storeId");
//         const data = await response.json();
//         setStoreId(data.storeId);
//       } catch (error) {
//         console.error("Error fetching storeId:", error);
//       }
//     };
//     fetchStoreId();
//   }, []);

//   // استرداد مزودي الدفع
//   useEffect(() => {
//     const fetchProviders = async () => {
//       try {
//         const response = await fetch("/api/PaymentProvider");
//         const data = await response.json();
//         setProviders(data);
//       } catch (error) {
//         console.error("Error fetching providers:", error);
//       }
//     };
//     fetchProviders();
//   }, []);

//   // استرداد الإعدادات المحفوظة
//   const fetchSavedProviders = async () => {
//     try {
//       if (!storeId) return;
//       const response = await fetch(`/api/storePaymentSetting?storeId=${storeId}`);
//       if (!response.ok) throw new Error("Failed to fetch saved providers");
//       const data = await response.json();
//       setSavedProviders(data);
//     } catch (error) {
//       console.error("Error fetching saved providers:", error);
//     }
//   };

//   // تحديث المزودات المحددة
//   const handleProviderToggle = (providerId) => {
//     setSelectedProviders((prevSelected) =>
//       prevSelected.includes(providerId)
//         ? prevSelected.filter((id) => id !== providerId)
//         : [...prevSelected, providerId]
//     );
//   };

//   // حفظ المزودات
//   const handleSaveProviders = async () => {
//     if (!storeId) return console.error("Store ID not available");

//     try {
//       await Promise.all(
//         selectedProviders.map((providerId) =>
//           fetch("/api/storePaymentSetting", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ storeId, paymentProvidersId: providerId, isActive: true }),
//           })
//         )
//       );
//       console.log("All providers saved successfully.");
//       setSelectedProviders([]); // إعادة تعيين المزودات المختارة
//       fetchSavedProviders(); // تحديث قائمة الإعدادات المحفوظة
//     } catch (error) {
//       console.error("Error saving providers:", error);
//     }
//   };

//   // تحميل الإعدادات المحفوظة عند تغيير storeId
//   useEffect(() => {
//     if (storeId) {
//       fetchSavedProviders();
//     }
//   }, [storeId]);

//   // معالجة البيانات عند الإرسال
//   const processData = (data) => {
//     dispatch(updateOnboardingFormData({ ...data, products, shippingCost, selectedCompanies, selectedProviders }));
//     dispatch(setCurrentStep(currentStep + 1));
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(processData)}>
//         <h2 className="text-xl font-semibold mb-4">Vendor Details</h2>

//         <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//           <div className="col-span-full">
//             <h3 className="text-lg font-medium">Select Payment Providers</h3>
//             {providers.map((provider) => (
//               <div key={provider.id} className="flex items-center justify-between p-4 border rounded-lg mb-4">
//                 <div className="flex items-center">
//                   <img
//                     alt={provider.name}
//                     src={provider.imageUrl || `https://via.placeholder.com/150`}
//                     className="w-12 h-12 mr-4"
//                   />
//                   <div>
//                     <h4 className="font-bold">{provider.name}</h4>
//                     <p>{provider.description || "No description available"}</p>
//                   </div>
//                 </div>
//                 <input
//                   type="checkbox"
//                   checked={selectedProviders.includes(provider.id)}
//                   onChange={() => handleProviderToggle(provider.id)}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         <button type="button" onClick={handleSaveProviders} className="btn btn-primary mt-4">
//           Save Selected Providers
//         </button>
//       </form>

//       {/* عرض الإعدادات المحفوظة */}
//       <div className="mt-8">
//         <h3 className="text-lg font-medium">Saved Providers</h3>
//         {savedProviders.length > 0 ? (
//           savedProviders.map((setting) => (
//             <div key={setting.id} className="p-4 border rounded-lg mb-4">
//               <h4 className="font-bold">{setting.paymentProvider.name}</h4>
//               <p>{setting.paymentProvider.description || "No description available"}</p>
//             </div>
//           ))
//         ) : (
//           <p>No providers have been saved yet.</p>
//         )}
//       </div>
//     </div>
//   );
// }
// "use client";

// import React, { useState, useEffect } from "react";
// import { useSession } from 'next-auth/react';
// export default function page() {
  
//   const [providers, setProviders] = useState([]); // قائمة مزودي الدفع
//   const [selectedProviders, setSelectedProviders] = useState([]); // المزودين المختارين
//   const [savedProviders, setSavedProviders] = useState([]); // قائمة المزودين المحفوظين
//   const [storeId, setStoreId] = useState(null); // معرف المتجر الخاص بالمستخدم
//    const { data: session, status } = useSession();
  
//   // console.log(
//   //   "user jhynnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn    id :",
//   //   storeId
//   // );
//   // جلب معرف المتجر بناءً على معرف المستخدم
//   const role = session?.user?.role;
//   console.log("rolerolerolerolerole",role)
//   const userId = session?.user?.id;
//   console.log("ussssssssssssssssser" , userId)
//   useEffect(() => {
//     async function fetchStoreId() {
//       try {
       
     
    
//         const response = await fetch( `/api/stores?vendorId=${userId}`); // استبدل USER_ID بمعرف المستخدم المناسب
//         if (!response.ok) throw new Error("Failed to fetch storeId");

//         const data = await response.json();
//         setStoreId(data[0]?.id);
//       } catch (error) {
//         console.error("Error fetching storeId:", error);
//       }
//     }

//     fetchStoreId();
//   }, []);

//   // جلب قائمة مزودي الدفع
//   useEffect(() => {
//     async function fetchPaymentProviders() {
//       try {
//         const response = await fetch("/api/PaymentProvider");
//         if (!response.ok) throw new Error("Failed to fetch providers");

//         const data = await response.json();
//         setProviders(data);
//       } catch (error) {
//         console.error("Error fetching payment providers:", error);
//       }
//     }

//     fetchPaymentProviders();
//   }, []);

//   // جلب مزودي الدفع المحفوظين
//   useEffect(() => {
//     if (storeId) {
//       async function fetchSavedProviders() {
//         try {
//           const response = await fetch(`/api/storePaymentSetting?storeId=${storeId}`);
//           if (!response.ok) throw new Error("Failed to fetch saved providers");

//           const data = await response.json();
//           setSavedProviders(data); // تخزين مزودي الدفع المحفوظين
//         } catch (error) {
//           console.error("Error fetching saved providers:", error);
//         }
//       }

//       fetchSavedProviders();
//     }
//   }, [storeId]);

//   // إضافة أو إزالة مزود دفع من القائمة المختارة
//   const handleProviderToggle = (providerId) => {
//     setSelectedProviders((prevSelected) =>
//       prevSelected.includes(providerId)
//         ? prevSelected.filter((id) => id !== providerId)
//         : [...prevSelected, providerId]
//     );
//   };

//   // حفظ مزودي الدفع المختارين
//   const handleSaveProviders = async () => {
//     if (!storeId) {
//       console.error("storeId is not available");
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
//           throw new Error("Failed to add provider to StorePaymentSetting");
//         }
//       }

//       // جلب مزودي الدفع المحفوظين بعد الحفظ
//       const response = await fetch(`/api/storePaymentSetting?storeId=${storeId}`);
//       if (!response.ok) throw new Error("Failed to fetch saved providers after save");

//       const data = await response.json();
//       setSavedProviders(data); // تحديث القائمة المحفوظة
//       setSelectedProviders([]); // تفريغ القائمة المختارة
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
//           <div key={provider.id} className="card p-4 mb-4 bg-white rounded-lg">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <img
//                   alt={`Logo of ${provider.name}`}
//                   className="w-10 h-10"
//                   src={provider.imageUrl || `https://via.placeholder.com/150`}
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

//       {/* عرض المزودين المحفوظين */}
//       <div className="mt-8">
//         <h3 className="text-lg font-medium">Saved Providers</h3>
//         <ul>
//           {savedProviders.map((provider) => (
//             <li key={provider.id} className="mt-2">
//               {provider.paymentProvider?.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
// "use client"
// import React, { useState, useEffect } from "react";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/authOptions"; // تأكد من المسار الصحيح
// import db from "@/lib/db"; // Assuming you have a prisma client set up

// export default async function page() {
//   const session = await getServerSession(authOptions);
//   const userId = session?.user?.id;

//   const [providers, setProviders] = useState([]); // قائمة مزودي الدفع
//   const [selectedProviders, setSelectedProviders] = useState([]); // المزودين المختارين
//   const [savedProviders, setSavedProviders] = useState([]); // قائمة المزودين المحفوظين
//   const [storeId, setStoreId] = useState(null); // معرف المتجر الخاص بالمستخدم

//   useEffect(() => {
//     async function fetchStoreId() {
//       try {
//         // جلب معرف المتجر بناءً على معرف المستخدم
//         const response = await fetch(`/api/stores?vendorId=${userId}`);
//         if (!response.ok) throw new Error("Failed to fetch storeId");

//         const data = await response.json();
//         setStoreId(data[0]?.id);
//       } catch (error) {
//         console.error("Error fetching storeId:", error);
//       }
//     }

//     if (userId) {
//       fetchStoreId();
//     }
//   }, [userId]);

//   // جلب قائمة مزودي الدفع
//   useEffect(() => {
//     async function fetchPaymentProviders() {
//       try {
//         const response = await fetch("/api/PaymentProvider");
//         if (!response.ok) throw new Error("Failed to fetch providers");

//         const data = await response.json();
//         setProviders(data);
//       } catch (error) {
//         console.error("Error fetching payment providers:", error);
//       }
//     }

//     fetchPaymentProviders();
//   }, []);

//   // جلب مزودي الدفع المحفوظين
//   useEffect(() => {
//     if (storeId) {
//       async function fetchSavedProviders() {
//         try {
//           const response = await fetch(`/api/storePaymentSetting?storeId=${storeId}`);
//           if (!response.ok) throw new Error("Failed to fetch saved providers");

//           const data = await response.json();
//           setSavedProviders(data); // تخزين مزودي الدفع المحفوظين
//         } catch (error) {
//           console.error("Error fetching saved providers:", error);
//         }
//       }

//       fetchSavedProviders();
//     }
//   }, [storeId]);

//   // إضافة أو إزالة مزود دفع من القائمة المختارة
//   const handleProviderToggle = (providerId) => {
//     setSelectedProviders((prevSelected) =>
//       prevSelected.includes(providerId)
//         ? prevSelected.filter((id) => id !== providerId)
//         : [...prevSelected, providerId]
//     );
//   };

//   // حفظ مزودي الدفع المختارين
//   const handleSaveProviders = async () => {
//     if (!storeId) {
//       console.error("storeId is not available");
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
//           throw new Error("Failed to add provider to StorePaymentSetting");
//         }
//       }

//       // جلب مزودي الدفع المحفوظين بعد الحفظ
//       const response = await fetch(`/api/storePaymentSetting?storeId=${storeId}`);
//       if (!response.ok) throw new Error("Failed to fetch saved providers after save");

//       const data = await response.json();
//       setSavedProviders(data); // تحديث القائمة المحفوظة
//       setSelectedProviders([]); // تفريغ القائمة المختارة
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
//           <div key={provider.id} className="card p-4 mb-4 bg-white rounded-lg">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <img
//                   alt={`Logo of ${provider.name}`}
//                   className="w-10 h-10"
//                   src={provider.imageUrl || `https://via.placeholder.com/150`}
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

//       {/* عرض المزودين المحفوظين */}
//       <div className="mt-8">
//         <h3 className="text-lg font-medium">Saved Providers</h3>
//         <ul>
//           {savedProviders.map((provider) => (
//             <li key={provider.id} className="mt-2">
//               {provider.paymentProvider?.name}
//             </li>
//           ))}
//         </ul>
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
//         const response = await fetch("/api/PaymentProvider");
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

//   const handleProviderToggle = (providerId) => {
//     setSelectedProviders((prevSelected) =>
//       prevSelected.includes(providerId)
//         ? prevSelected.filter((id) => id !== providerId)
//         : [...prevSelected, providerId]
//     );
//   };

//   const handleSaveProviders = async () => {
//     if (!storeId) {
//       console.error("storeId is not available");
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
//           throw new Error("Failed to add provider to StorePaymentSetting");
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
//                   src={provider.imageUrl || `https://via.placeholder.com/150`}
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
//                   alt={`Logo of ${provider.paymentProvider.name}`}
//                   className="w-10 h-10"
//                   src={provider.paymentProvider.imageUrl || `https://via.placeholder.com/150`}
//                 />
//                 <div className="ml-4">
//                   <h2 className="font-bold">{provider.paymentProvider.name}</h2>
//                   <p>{provider.paymentProvider.description || "No description available"}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// قفمظظ
"use client";
import { useSession } from "next-auth/react";
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
          console.error("Error fetching storeId:", error);
        }
      }
    }
    fetchStoreId();
  }, [userId]);

  useEffect(() => {
    async function fetchPaymentProviders() {
      try {
        const response = await fetch("/api/PaymentProvider");
        const data = await response.json();
        setProviders(data);
      } catch (error) {
        console.error("Error fetching payment providers:", error);
      }
    }
    fetchPaymentProviders();
  }, []);

  useEffect(() => {
    if (storeId) {
      async function fetchSavedProviders() {
        try {
          const response = await fetch(`/api/storePaymentSetting?storeId=${storeId}`);
          const data = await response.json();
          setSavedProviders(data);
        } catch (error) {
          console.error("Error fetching saved providers:", error);
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
    if (!storeId) return;

    try {
      for (const providerId of selectedProviders) {
        const response = await fetch("/api/storePaymentSetting", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            storeId,
            paymentProvidersId: providerId,
            isActive: true,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to add provider");
        }
      }

      const response = await fetch(`/api/storePaymentSetting?storeId=${storeId}`);
      const data = await response.json();
      setSavedProviders(data);
      setSelectedProviders([]);
    } catch (error) {
      console.error("Error saving providers:", error);
    }
  };

  return (
    <div dir="rtl" className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">مزودي الدفع</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">اختر مزود الدفع</h3>
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
                  src={provider.imageUrl || "https://via.placeholder.com/150"}
                  alt={`Logo of ${provider.name}`}
                  className="w-12 h-12 rounded-md object-contain"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white">{provider.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-300">{provider.description || "لا يوجد وصف"}</p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={selectedProviders.includes(provider.id)}
                onChange={() => handleProviderToggle(provider.id)}
                className="w-5 h-5 accent-purple-500"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSaveProviders}
          className="bg-purple-600 text-white px-6 py-2 rounded-xl hover:bg-purple-700 transition-all"
        >
          حفظ المزودين المحددين
        </button>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">المزودين المحفوظين</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {savedProviders.map((provider) => (
            <div
              key={provider.id}
              className="flex items-center bg-gray-100 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl p-4 shadow"
            >
              <img
                src={provider.paymentProvider.imageUrl || "https://via.placeholder.com/150"}
                alt={`Logo of ${provider.paymentProvider.name}`}
                className="w-12 h-12 rounded-md object-contain ml-4"
              />
              <div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white">{provider.paymentProvider.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {provider.paymentProvider.description || "لا يوجد وصف"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
