// "use client";

// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import Breadcrumb from '@/components/frontend/template5/cart-template/Breadcrumb';
// import CartSubTotalCard from '../../../components/frontend/template5/cart-template/CartSubTotalCard';
// import EmptyCart from '../../../components/frontend/template5/cart-template/EmptyCart';
// import CartItems from '../../../components/frontend/template5/cart-template/CartItems';
// import { getData } from '../../../lib/getData';

// export default function CartClient({ slugDomain }) {
//   const [store, setStore] = useState(null);
//   const [customizationData, setCustomizationData] = useState(null);
//   const [templateId, setTemplateId] = useState('');
//   const [error, setError] = useState(null);

//   const cartItems = useSelector((state) => state.cart);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const storeData = await getData(`/stores/store/${slugDomain}`);
//         if (!storeData || !storeData.businessNameEn) {
//           setError('Store not found');
//           return;
//         }
//         setStore(storeData);

//         const storeId = storeData.id;
//         const templatesData = await getData(`/templates/${storeData.templateId}`);
//         setTemplateId(templatesData.title);

//         const customizationData = await getData(`/customizations/Customizationes/${storeId}`);
//         setCustomizationData(customizationData);
//       } catch (err) {
//         console.error('Error fetching store data:', err);
//         setError('Error loading store');
//       }
//     };

//     fetchData();
//   }, [slugDomain]);

//   const subTotal = cartItems
//     .reduce((acc, currentItem) => acc + currentItem.salePrice * currentItem.qty, 0)
//     .toFixed(2) ?? 0;

//   if (error) {
//     return <h1 className='bg-slate-50 text-slate-500'>{error}</h1>;
//   }

//   return (
//     <div dir='rtl' className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
//       <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-6">
//         <Breadcrumb slugDomain={slugDomain} customization={customizationData} />
//         <div className="mt-8">
//           {cartItems.length > 0 ? (
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
//               <div className="lg:col-span-8 space-y-4">
//                 <CartItems cartItems={cartItems} customization={customizationData} />
//               </div>
//               <div className="lg:col-span-4">
//                 <div className="sticky top-24">
//                   <CartSubTotalCard 
//                     subTotal={subTotal} 
//                     slugDomain={slugDomain}  
//                     customization={customizationData} 
//                   />
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <EmptyCart slugDomain={slugDomain} customization={customizationData} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { getData } from "@/lib/getData";

export default function CartClient({ slugDomain }) {
  const [slug, setSlug] = useState(null);
  const [customizationData, setCustomizationData] = useState(null);
  const [error, setError] = useState(null);
  const cartItems = useSelector((state) => state.cart);

  // أولاً: نجلب slug الخاص بالقالب ثم نحفظه في الحالة
  useEffect(() => {
    async function fetchTemplateSlug() {
      try {
        const store = await getData(`/stores/store/${slugDomain}`);
        if (!store?.businessNameEn) {
          setError("Store not found");
          return;
        }
        const templatesData = await getData(`/templates/${store.templateId}`);
        setSlug(templatesData.slug);
        const customization = await getData(
          `/customizations/Customizationes/${store.id}`
        );
        setCustomizationData(customization);
      } catch (err) {
        console.error(err);
        setError("Error loading store");
      }
    }
    fetchTemplateSlug();
  }, [slugDomain]);

  // أثناء انتظار الـ slug أو وقوع خطأ
  if (error) {
    return <h1 className="bg-slate-50 text-slate-500">{error}</h1>;
  }
  if (!slug || !customizationData) {
    return <p className="p-4">جاري تحميل البيانات...</p>;
  }

  // بعد حصولنا على slug، ننشئ الاستيرادات الديناميكية
  const Breadcrumb = dynamic(
    () =>
      import(
        `@/components/frontend/${slug}/cart-template/Breadcrumb`
      ),
    { ssr: false, loading: () => <p>جاري تحميل مسار التنقل...</p> }
  );
  const CartSubTotalCard = dynamic(
    () =>
      import(
        `@/components/frontend/${slug}/cart-template/CartSubTotalCard`
      ),
    { ssr: false, loading: () => <p>جاري تحميل البطاقة...</p> }
  );
  const CartItems = dynamic(
    () =>
      import(
        `@/components/frontend/${slug}/cart-template/CartItems`
      ),
    { ssr: false, loading: () => <p>جاري تحميل المنتجات...</p> }
  );
  const EmptyCart = dynamic(
    () =>
      import(
        `@/components/frontend/${slug}/cart-template/EmptyCart`
      ),
    { ssr: false, loading: () => <p>جاري تحميل السلة الفارغة...</p> }
  );

  // حساب المجموع الفرعي
  const subTotal = cartItems
    .reduce((sum, item) => sum + item.salePrice * item.qty, 0)
    .toFixed(2);

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumb
          slugDomain={slugDomain}
          customization={customizationData}
        />

        <div className="mt-8">
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-8 space-y-4">
                <CartItems
                  cartItems={cartItems}
                  customization={customizationData}
                />
              </div>

              <div className="lg:col-span-4">
                <div className="sticky top-24">
                  <CartSubTotalCard
                    subTotal={subTotal}
                    slugDomain={slugDomain}
                    customization={customizationData}
                  />
                </div>
              </div>
            </div>
          ) : (
            <EmptyCart
              slugDomain={slugDomain}
              customization={customizationData}
            />
          )}
        </div>
      </div>
    </div>
  );
}

