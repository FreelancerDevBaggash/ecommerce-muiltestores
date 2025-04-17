
// import React from 'react';
// import { getData } from '../../lib/getData';
// import AutoPlay from '@/components/frontend/templaet4/AutoPlay';
// // import Bannert from '@/components/frontend/templaet1/Bannert';
// // import ShoppingForForm from '@/components/frontend/templaet1/ShoppingForForm';
// // import Metrics from '@/components/frontend/templaet4/Metrics';
// import FavaroteProducts from '@/components/frontend/templaet5/FavaroteProducts';
// // import Newsletter from '@/components/frontend/templaet5/Newsletter';
// import Testimonials from '@/components/frontend/templaet5/Testimonials';
// import SpecialOffers from '@/components/frontend/templaet5/SpecialOffers';


// // استيراد مكون الـ CategorySlider الذي يعمل على جانب العميل
// import CategorySlider from '../../components/frontend/templaet5/CategorySlider';

// import Hero from '../../components/frontend/templaet5/Hero';
// // import CategoryList from '../../components/frontend/templaet4/CategoryList';


// export default async function StorePage({ params: { slugDomain } }) {
//   try {
//     const store = await getData(`/stores/store/${slugDomain}`);
//     if (!store || !store.businessNameEn) {
//       return <h1 className='bg-slate-50 text-slate-500'>Store not found</h1>;
//     }

//     const storeId = store.id;
//     const templatesData = await getData(`/templates/${store.templateId}`);
//     const templateId = templatesData.title;

//     const customizationData = await getData(`/customizations/Customizationes/${storeId}`);
//     const categoriesData = await getData(`/categories?storeId=${storeId}`);
//     const productsData = await getData(`/products?storeId=${storeId}`); // جلب المنتجات

//     // تصفية الفئات التي تحتوي على منتجات فقط
//     const categories = categoriesData.filter(
//       (category) => category.products && category.products.length >= 0
//     );
//     // const Hero = (await import(`../../components/frontend/${templateId}/Hero`)).default;

//     // const Hero = (await import(`../../components/frontend/${templateId}/Hero`)).default;
//     // const DynamicCategoryList = (await import(`../../components/frontend/${templateId}/CategoryList`)).default;

//     return (
//       <div dir='rtl' className="container ">
//         <Hero storeId={storeId} customization={customizationData} />
//         {/* <Bannert customization={customizationData} /> */}
//                {/* عرض سلايدر الفئات باستخدام CategorySlider */}
//                {categories.length > 0 && (
//           <CategorySlider categories={categories} customization={customizationData} slugDomain={slugDomain} />
//         )}
//         <AutoPlay customization={customizationData}  products={productsData} />
//         {/* <ShoppingForForm storeId={storeId} customization={customizationData} /> */}
//         <FavaroteProducts products={productsData} customization={customizationData} categories={categories} slugDomain={slugDomain}/>
// {/* <Newsletter/> */}
// <Testimonials storeId={storeId}/>
// <SpecialOffers/>



//         {/* {categories.map((category, i) => (
//           <div className="py-8" key={i}>
//             <CategoryList
//               isMarketPage={false}
//               category={category}
//               customization={customizationData}
//             />
//             <Metrics customization={customizationData} />
//           </div>
//         ))} */}


//       </div>
//     );
//   } catch (error) {
//     console.error('Error fetching store data:', error);
//     return <h1 className='bg-slate-50 text-slate-500'>Error loading store</h1>;
//   }
// }



// import React from 'react';
// import { getData } from '../../lib/getData';
// import Hero from '../../components/frontend/templaet3/Hero';
// // import AutoPlay from '@/components/frontend/templaet3/AutoPlay';
// import Bannert from '@/components/frontend/templaet3/Bannert';

// // import StoreStatistics from '@/components/frontend/templaet3/ShoppingForForm';
// import PremiumFeatureCard from '@/components/frontend/templaet3/FavaroteProducts';
// // import CategorySlider from '../../components/frontend/templaet4/CategorySlider';
// import CategoryList from '../../components/frontend/templaet3/CategoryList'; 
// import Testimonials from '../../components/frontend/templaet3/Testimonials';
// // import CategoriesBanner from '../../components/frontend/templaet3/Bannert';

// export default async function StorePage({ params: { slugDomain } }) {
//   const store = await getData(`/stores/store/${slugDomain}`, {mode: 'real-time'});
//   if (!store || !store.businessNameEn) {
//     return <h1 className="bg-slate-50 text-slate-500">Store not found</h1>;
//   }
//   const storeId = store.id;
//   const templatesData = await getData(`/templates/${store.templateId}`);
//   const customizationData = await getData(`/customizations/Customizationes/${storeId}`);
//   const categoriesData = await getData(`/categories?storeId=${storeId}`);
//   const productsData = await getData(`/products?storeId=${storeId}`);
//   const banners = await getData(`banners?storeId=${storeId}`)

//   const categories = categoriesData.filter(category => category.products && category.products.length > 0);

//   return (
//     <div dir='rtl'>
//       <Hero banners={banners} storeId={storeId} customization={customizationData} />

//       <Bannert customization={customizationData} storeId={storeId} slugDomain={slugDomain}  categories={categoriesData}/>
//       {/* {categories.length > 0 && ( */}
//       {/* // <CategorySlider storeId={storeId} customization={customizationData} /> */}
//     {/* )} */}
//       {/* <AutoPlay customization={customizationData} storeId={storeId}/> */}
//       {/* <BestSellers products={productsData} customization={customizationData} /> */}

//       {/* ✅ تمرير storeId إلى CategoryList لضمان تصفية الفئات */}
//       {categories.map((category, i) => (
//         <div dir='rtl' className="py-8 " key={i}>
//           <CategoryList 
//             isMarketPage={false} 
//             category={category} 
//             storeId={storeId}  // ✅ تمرير storeId لضمان عدم حدوث مشاكل في التصفية
//             customization={customizationData} 
//             slugDomain={slugDomain}
//           />
//         </div>
//       ))}
//           <Testimonials customization={customizationData} storeId={storeId}/>
//       <PremiumFeatureCard products={productsData}  storeId={storeId} customization={customizationData} />
//       {/* <StoreStatistics slugDomain={slugDomain} storeId={storeId} customization={customizationData} /> */}

//     </div>
//   );
// }

import React from 'react';
import { getData } from '../../lib/getData';
// import AutoPlay from '@/components/frontend/templaet3/AutoPlay';

import Home from '../../components/frontend/templaet2/Home';

// import CategoriesBanner from '../../components/frontend/templaet3/Bannert';

export default async function StorePage({ params: { slugDomain } }) {
  const store = await getData(`/stores/store/${slugDomain}`);
  if (!store || !store.businessNameEn) {
    return <h1 className="bg-slate-50 text-slate-500">Store not found</h1>;
  }
  const storeId = store.id;
  const templatesData = await getData(`/templates/${store.templateId}`);
  const customizationData = await getData(`/customizations/Customizationes/${storeId}`);
  const categoriesData = await getData(`/categories?storeId=${storeId}`);
  const productsData = await getData(`/products?storeId=${storeId}`);
  const banners = await getData(`banners?storeId=${storeId}`)

  const categories = categoriesData.filter(
    (category) => category.products && category.products.length >= 0
  );
  return (
    <div dir='rtl'>
      <Home store={store} banners={banners} storeId={storeId} products={productsData} customization={customizationData} slugDomain={slugDomain} categories={categories} />
      {/* <Hero banners={banners} storeId={storeId} customization={customizationData} /> */}

      {/* <Bannert customization={customizationData} storeId={storeId} slugDomain={slugDomain}  categories={categoriesData}/> */}


      {/* <Testimonials customization={customizationData} storeId={storeId}/>
      <PremiumFeatureCard products={productsData}  storeId={storeId} customization={customizationData} /> */}

    </div>
  );
}
