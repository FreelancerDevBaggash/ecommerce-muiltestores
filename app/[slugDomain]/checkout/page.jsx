// import React from 'react'
// import Steps from '../../../components/Checkout/Steps'
// import CartBanner from '../../../components/Checkout/CartBanner'
// import StepForm from '../../../components/Checkout/StepForm'
// import { getData } from "@/lib/getData";

// export default async function page({ params:{slugDomain}}) {
//   const store = await getData(`/stores/store/${slugDomain}`);
//   console.log('Fetched store data: Fetched store data Fetched store data', store);
//   if (!store || !store.businessNameEn) {
//       return <h1 className='bg-slate-50 text-slate-500'>Store not found</h1>;
//   }
//   const storeId = store.id ;
//   const steps = [
//     {
//       number: 1,
//       title: "Personal Details",
//     },
//     {
//       number: 2,
//       title: "Shipping Details",
//     },
//     {
//       number: 3,
//       title: "Payment Method",
//     },
//     {
//       number: 4,
//       title: "Order Summary",
//     },
//   ];
 
//   return (
//     <div className='bg-slate-200 dark:bg-slate-950 min-h-screen'>
//       <div className="max-w-3xl my-6 mx-auto border border-slate-700 p-6 rounded-lg">
//        {/*STEPS */}
//        <Steps steps={steps} />
//        <div className="w-full p-4 bg-white border border-gray-200 
//        rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
//          {/*Banner */}
//          <CartBanner />
       
//         {/*FORM */}
//           <StepForm storeId={storeId} slugDomain={slugDomain} />
//        </div>

     
//       </div>
//     </div>
//   )
// }
"use client";
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Steps from '../../../components/Checkout/Steps';
import CartBanner from '../../../components/Checkout/CartBanner';
import StepForm from '../../../components/Checkout/StepForm';
import { getData } from "@/lib/getData";

export default function CheckoutPage({ params: { slugDomain } }) {
  // حالة تخزين بيانات المتجر، بيانات التخصيص، معرف القالب، والخطأ (إن وجد)
  const [store, setStore] = useState(null);
  const [customizationData, setCustomizationData] = useState(null);
  const [templateId, setTemplateId] = useState('');
  const [error, setError] = useState(null);

  // الحصول على سلة الشراء من Redux
  const cartItems = useSelector((state) => state.cart);

  // جلب بيانات المتجر، القالب، والتخصيص عند تحميل الصفحة أو تغيير slugDomain
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storeData = await getData(`/stores/store/${slugDomain}`);
        if (!storeData || !storeData.businessNameEn) {
          setError('Store not found');
          return;
        }
        setStore(storeData);

        const storeId = storeData.id;
        const templatesData = await getData(`/templates/${storeData.templateId}`);
        setTemplateId(templatesData.title);

        const customizationData = await getData(`/customizations/Customizationes/${storeId}`);
        setCustomizationData(customizationData);
      } catch (err) {
        console.error('Error fetching store data:', err);
        setError('Error loading store');
      }
    };

    fetchData();
  }, [slugDomain]);

  // حساب إجمالي سعر المنتجات في سلة الشراء
  const subTotal =
    cartItems.reduce((acc, currentItem) => acc + currentItem.salePrice * currentItem.qty, 0)
      .toFixed(2) ?? 0;

  // إذا حدث خطأ أثناء جلب البيانات
  if (error) {
    return <h1 className="bg-slate-50 text-slate-500 text-center py-10">{error}</h1>;
  }

  // إذا كانت بيانات المتجر أو التخصيص لم يتم جلبها بعد
  if (!store ) {
    return <h1 className="bg-slate-50 text-slate-500 text-center py-10">Loading...</h1>;
  }

  // تعريف خطوات عملية الدفع (Checkout)
  const steps = [
    { number: 1, title: "Personal Details" },
    { number: 2, title: "Shipping Details" },
    { number: 3, title: "Payment Method" },
    { number: 4, title: "Order Summary" },
  ];

  return (
    <div className="bg-slate-200 dark:bg-slate-950 min-h-screen">
      <div className="max-w-3xl my-6 mx-auto border border-slate-700 p-6 rounded-lg">
        {/* عرض خطوات الدفع */}
        <Steps steps={steps}  customization={customizationData} />

        <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          {/* عرض بانر السلة */}
          <CartBanner customization={customizationData}  />

          {/* عرض النموذج الخاص بعملية الدفع مع تمرير بيانات المتجر والتخصيص وسلة الشراء */}
          <StepForm 
            storeId={store.id}
            slugDomain={slugDomain}
            subTotal={subTotal}
            customization={customizationData}
            templateId={templateId}
   
          />
        </div>
      </div>
    </div>
  );
}
