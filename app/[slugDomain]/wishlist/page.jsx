
// "use client";

// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import WishlistPage from '../../../components/frontend/template2/WishlistPage';

// import { getData } from '../../../lib/getData';

// export default function Page({ params: { slugDomain } }) {
//      const [store, setStore] = useState(null);
//       const [customizationData, setCustomizationData] = useState(null);
//       const [templateId, setTemplateId] = useState('');
//       const [error, setError] = useState(null);


//      useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const storeData = await getData(`/stores/store/${slugDomain}`);
//             if (!storeData || !storeData.businessNameEn) {
//               setError('Store not found');
//               return;
//             }
//             setStore(storeData);
    
//             const storeId = storeData.id;
//             const templatesData = await getData(`/templates/${storeData.templateId}`);
//             setTemplateId(templatesData.title);
    
//             const customizationData = await getData(`/customizations/Customizationes/${storeId}`);
//             setCustomizationData(customizationData);
//           } catch (err) {
//             console.error('Error fetching store data:', err);
//             setError('Error loading store');
//           }
//         };
    
//         fetchData();
//       }, [slugDomain]);
    
//       // حساب الإجمالي الفرعي
     
    
//       if (error) {
//         return <h1 className='bg-slate-50 text-slate-500'>{error}</h1>;
//       }
//   return (
//     <WishlistPage 
//     customization={customizationData} 

//       slugDomain={slugDomain}
      
//     />
//   );
// }

// app/[slugDomain]/wishlist/page.jsx
"use client";

import React, { useEffect, useState } from 'react';
import WishlistPage from '@/components/frontend/template2/WishlistPage';
import { getData } from '@/lib/getData';

export default function Page({ params: { slugDomain } }) {
  const [store, setStore] = useState(null);
  const [customization, setCustomization] = useState(null);
  const [templateId, setTemplateId] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        // جلب بيانات المتجر
        const storeData = await getData(`/stores/store/${slugDomain}`);
        if (!storeData || !storeData.id) {
          throw new Error('المتجر غير موجود');
        }
        setStore(storeData);

        // جلب قوالب المتجر
        const templateData = await getData(`/templates/${storeData.templateId}`);
        setTemplateId(templateData?.title || '');

        // جلب تخصيص المظهر
        const customizationData = await getData(`/customizations/Customizationes/${storeData.id}`);
        setCustomization(customizationData);
      } catch (err) {
        console.error('Error fetching store data:', err);
        setError(err.message || 'خطأ في تحميل بيانات المتجر');
      } finally {
        setIsLoading(false);
      }
    };

    fetchStoreData();
  }, [slugDomain]);

  if (isLoading) return <p className="text-center py-12">جارٍ التحميل...</p>;
  if (error) return <h1 className="text-center text-red-500 py-12">{error}</h1>;

  return (
    <WishlistPage
      slugDomain={slugDomain}
      storeData={store}
      customization={customization}
      templateId={templateId}
    />
  );
}
