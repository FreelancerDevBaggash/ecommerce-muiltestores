
// import React from 'react';
// import { getData } from '../../lib/getData';
// // import AutoPlay from '@/components/frontend/template3/AutoPlay';

// import Home from '../../components/frontend/template3/home';

// // import CategoriesBanner from '../../components/frontend/template3/Bannert';

// export default async function StorePage({ params: { slugDomain } }) {
//   const store = await getData(`/stores/store/${slugDomain}`);
//   if (!store || !store.businessNameEn) {
//     return <h1 className="bg-slate-50 text-slate-500">Store not found</h1>;
//   }
//   const storeId = store.id;
//   const templatesData = await getData(`/templates/${store.templateId}`);
//   const customizationData = await getData(`/customizations/Customizationes/${storeId}`);
//   const categoriesData = await getData(`/categories?storeId=${storeId}`);
//   const productsData = await getData(`/products?storeId=${storeId}`);
//   const banners = await getData(`banners?storeId=${storeId}`)
//   const subcategory = await getData(`subcategory?storeId=${storeId}`)
//   const coupons = await getData(`/coupons?storeId=${storeId}`);

//   const categories = categoriesData.filter(
//     (category) => category.products && category.products.length >= 0
//   );
//   return (
//     <div dir='rtl'>
//       <Home  coupons={coupons} subcategory={subcategory} store={store} banners={banners} storeId={storeId} products={productsData} customization={customizationData} slugDomain={slugDomain} categories={categories} />
//       {/* <Hero banners={banners} storeId={storeId} customization={customizationData} /> */}

//       {/* <Bannert customization={customizationData} storeId={storeId} slugDomain={slugDomain}  categories={categoriesData}/> */}


//       {/* <Testimonials customization={customizationData} storeId={storeId}/>
//       <PremiumFeatureCard products={productsData}  storeId={storeId} customization={customizationData} /> */}

//     </div>
//   );
// }

// // import React from 'react';
// // import { getData } from '../../lib/getData';
// // import AutoPlay from '@/components/frontend/template5/AutoPlay';
// // // import Bannert from '@/components/frontend/template1/Bannert';
// // // import ShoppingForForm from '@/components/frontend/template1/ShoppingForForm';
// // // import Metrics from '@/components/frontend/template4/Metrics';
// // import FavaroteProducts from '@/components/frontend/template5/FavaroteProducts';
// // // import Newsletter from '@/components/frontend/template5/Newsletter';
// // import Testimonials from '@/components/frontend/template5/Testimonials';
// // import SpecialOffers from '@/components/frontend/template5/SpecialOffers';


// // // استيراد مكون الـ CategorySlider الذي يعمل على جانب العميل
// // import CategorySlider from '../../components/frontend/template5/CategorySlider';

// // import Hero from '../../components/frontend/template5/Hero';
// // // import CategoryList from '../../components/frontend/template4/CategoryList';


// // export default async function StorePage({ params: { slugDomain } }) {
// //   try {
// //     const store = await getData(`/stores/store/${slugDomain}`);
// //     if (!store || !store.businessNameEn) {
// //       return <h1 className='bg-slate-50 text-slate-500'>Store not found</h1>;
// //     }

// //     const storeId = store.id;
// //     const templatesData = await getData(`/templates/${store.templateId}`);
// //     const templateId = templatesData.title;

// //     const customizationData = await getData(`/customizations/Customizationes/${storeId}`);
// //     const categoriesData = await getData(`/categories?storeId=${storeId}`);
// //     const productsData = await getData(`/products?storeId=${storeId}`); // جلب المنتجات

// //     // تصفية الفئات التي تحتوي على منتجات فقط
// //     const categories = categoriesData.filter(
// //       (category) => category.products && category.products.length >= 0
// //     );
// //     // const Hero = (await import(`../../components/frontend/${templateId}/Hero`)).default;

// //     // const Hero = (await import(`../../components/frontend/${templateId}/Hero`)).default;
// //     // const DynamicCategoryList = (await import(`../../components/frontend/${templateId}/CategoryList`)).default;

// //     return (
// //       <div dir='rtl' className="container ">
// //         <Hero storeId={storeId} customization={customizationData} />
// //         {/* <Bannert customization={customizationData} /> */}
// //                {/* عرض سلايدر الفئات باستخدام CategorySlider */}
// //                {categories.length > 0 && (
// //           <CategorySlider categories={categories} customization={customizationData} slugDomain={slugDomain} />
// //         )}
// //         <AutoPlay customization={customizationData}  products={productsData} />
// //         {/* <ShoppingForForm storeId={storeId} customization={customizationData} /> */}
// //         <FavaroteProducts products={productsData} customization={customizationData} categories={categories} slugDomain={slugDomain}/>
// // {/* <Newsletter/> */}
// // <Testimonials storeId={storeId}/>
// // <SpecialOffers/>



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


// //       </div>
// //     );
// //   } catch (error) {
// //     console.error('Error fetching store data:', error);
// //     return <h1 className='bg-slate-50 text-slate-500'>Error loading store</h1>;
// //   }
// // }



// // import React from 'react';
// // import { getData } from '../../lib/getData';
// // import Hero from '../../components/frontend/template3/Hero';
// // // import AutoPlay from '@/components/frontend/template3/AutoPlay';
// // import Bannert from '@/components/frontend/template3/Bannert';

// // // import StoreStatistics from '@/components/frontend/template3/ShoppingForForm';
// // import PremiumFeatureCard from '@/components/frontend/template3/FavaroteProducts';
// // // import CategorySlider from '../../components/frontend/template4/CategorySlider';
// // import CategoryList from '../../components/frontend/template3/CategoryList'; 
// // import Testimonials from '../../components/frontend/template3/Testimonials';
// // // import CategoriesBanner from '../../components/frontend/template3/Bannert';

// // export default async function StorePage({ params: { slugDomain } }) {
// //   const store = await getData(`/stores/store/${slugDomain}`, {mode: 'real-time'});
// //   if (!store || !store.businessNameEn) {
// //     return <h1 className="bg-slate-50 text-slate-500">Store not found</h1>;
// //   }
// //   const storeId = store.id;
// //   const templatesData = await getData(`/templates/${store.templateId}`);
// //   const customizationData = await getData(`/customizations/Customizationes/${storeId}`);
// //   const categoriesData = await getData(`/categories?storeId=${storeId}`);
// //   const productsData = await getData(`/products?storeId=${storeId}`);
// //   const banners = await getData(`banners?storeId=${storeId}`)

// //   const categories = categoriesData.filter(category => category.products && category.products.length > 0);

// //   return (
// //     <div dir='rtl'>
// //       <Hero banners={banners} storeId={storeId} customization={customizationData} />

// //       <Bannert customization={customizationData} storeId={storeId} slugDomain={slugDomain}  categories={categoriesData}/>
// //       {/* {categories.length > 0 && ( */}
// //       {/* // <CategorySlider storeId={storeId} customization={customizationData} /> */}
// //     {/* )} */}
// //       {/* <AutoPlay customization={customizationData} storeId={storeId}/> */}
// //       {/* <BestSellers products={productsData} customization={customizationData} /> */}

// //       {/* ✅ تمرير storeId إلى CategoryList لضمان تصفية الفئات */}
// //       {categories.map((category, i) => (
// //         <div dir='rtl' className="py-8 " key={i}>
// //           <CategoryList 
// //             isMarketPage={false} 
// //             category={category} 
// //             storeId={storeId}  // ✅ تمرير storeId لضمان عدم حدوث مشاكل في التصفية
// //             customization={customizationData} 
// //             slugDomain={slugDomain}
// //           />
// //         </div>
// //       ))}
// //           <Testimonials customization={customizationData} storeId={storeId}/>
// //       <PremiumFeatureCard products={productsData}  storeId={storeId} customization={customizationData} />
// //       {/* <StoreStatistics slugDomain={slugDomain} storeId={storeId} customization={customizationData} /> */}

// //     </div>
// //   );
// // }

// // import React from 'react';
// // import { getData } from '../../lib/getData';
// // // import AutoPlay from '@/components/frontend/template3/AutoPlay';

// // // import Home from '../../components/frontend/template2/Home';
// // import Home from '../../components/frontend/template2/Home';
// // // import CategoriesBanner from '../../components/frontend/template3/Bannert';

// // export default async function StorePage({ params: { slugDomain } }) {
// //   const store = await getData(`/stores/store/${slugDomain}`);
// //   if (!store || !store.businessNameEn) {
// //     return <h1 className="bg-slate-50 text-slate-500">Store not found</h1>;
// //   }
// //   const storeId = store.id;
// //   const templatesData = await getData(`/templates/${store.templateId}`);
// //   const customizationData = await getData(`/customizations/Customizationes/${storeId}`);
// //   const categoriesData = await getData(`/categories?storeId=${storeId}`);
// //   const productsData = await getData(`/products?storeId=${storeId}`);
// //   const banners = await getData(`banners?storeId=${storeId}`)

// //   const categories = categoriesData.filter(
// //     (category) => category.products && category.products.length >= 0
// //   );
// //   return (
// //     <div dir='rtl'>
{/* <Home store={store} banners={banners} storeId={storeId} products={productsData} customization={customizationData} slugDomain={slugDomain} categories={categories} /> */}
// //       {/* <Hero banners={banners} storeId={storeId} customization={customizationData} /> */}

// //       {/* <Bannert customization={customizationData} storeId={storeId} slugDomain={slugDomain}  categories={categoriesData}/> */}


// //       {/* <Testimonials customization={customizationData} storeId={storeId}/>
// //       <PremiumFeatureCard products={productsData}  storeId={storeId} customization={customizationData} /> */}

// //     </div>
// //   );
// // }






























import Link from "next/link";
import React from 'react';
// import Home from `../../components/frontend/${slug}/Home`;
import { getData } from "@/lib/getData";
import { authOptions } from "../../lib/authOptions";
import { getServerSession } from "next-auth";
import dynamic from "next/dynamic";

export default async function Page({ params: { slugDomain } }) {
  try {
    const store = await getData(`/stores/store/${slugDomain}`);
    if (!store || !store.businessNameEn) {
      return <h1 className='bg-slate-50 text-slate-500'>Store not found</h1>;
    }

    const storeId = store.id;
    const customizationData = await getData(`/customizations/Customizationes/${storeId}`);
    const categoriesData = await getData(`categories?storeId=${storeId}`);
    const templatesData = await getData(`/templates/${store.templateId}`, {mode:'real-time'});
    const slug = templatesData.slug;
    const trainings = await getData('trainings');

    const session = await getServerSession(authOptions);
    console.log(session?.user);
 
  const productsData = await getData(`/products?storeId=${storeId}`);
  const banners = await getData(`banners?storeId=${storeId}`)

  const categories = categoriesData.filter(
    (category) => category.products && category.products.length >= 1

  );
  const Home = dynamic(
    () => import(`../../components/frontend/${slug}/Home`),
    { ssr: true, loading: () => <p>جاري تحميل الواجهة...</p> }
  );
    return (
      <div className="min-h-screen">
        {/* <Hero
          storeId={storeId}
          customization={customizationData}
          slugDomain={slugDomain}
          categories={categories} // تمرير الفئات إلى Hero
        /> */}
        <Home 
        store={store} 
        banners={banners} 
        storeId={storeId} 
        products={productsData} 
        customization={customizationData} 
        slugDomain={slugDomain} 
        categories={categories} />

        {/* <CommunityTrainings title=" Featured Trainings" trainings={trainings.slice(0, 3)} /> */}
      </div>
    );

  } catch (error) {
    console.error('Error loading store data:', error);
    return <h1 className='bg-slate-50 text-slate-500'>Error loading store</h1>;
  }
}

// import React from 'react';
// import { getData } from '../../lib/getData';
// import Hero from '../../components/frontend/template5/Hero';

// export default async function StorePage({ params: { slugDomain } }) {
// try {
//   const store = await getData(`/stores/store/${slugDomain}`);
//   if (!store || !store.businessNameEn) {
//     return <h1 className='bg-slate-50 text-slate-500'>Store not found</h1>;
//   }

// const storeId = store.id;
// const customizationData = await getData(`/customizations/Customizationes/${storeId}`);
// const templatesData = await getData(`/templates/${store.templateId}`);
// const templateId = templatesData.title;

//     return (
//       <div dir='rtl' className="container">
// <Hero storeId={storeId} customization={customizationData} slugDomain={slugDomain} />
//       </div>
//     );
//   } catch (error) {
//     console.error('Error fetching store data:', error);
//     return <h1 className='bg-slate-50 text-slate-500'>Error loading store</h1>;
//   }
// }


// import React from 'react';
// import { getData } from '../../lib/getData';
// import AutoPlay from '@/components/frontend/template5/AutoPlay';
// // import Bannert from '@/components/frontend/template1/Bannert';
// // import ShoppingForForm from '@/components/frontend/template1/ShoppingForForm';
// // import Metrics from '@/components/frontend/template4/Metrics';
// import FavaroteProducts from '@/components/frontend/template5/FavaroteProducts';
// // import Newsletter from '@/components/frontend/template5/Newsletter';
// import Testimonials from '@/components/frontend/template5/Testimonials';
// import SpecialOffers from '@/components/frontend/template5/SpecialOffers';


// // استيراد مكون الـ CategorySlider الذي يعمل على جانب العميل
// import CategorySlider from '../../components/frontend/template5/CategorySlider';

// import Hero from '../../components/frontend/template5/Hero';
// // import CategoryList from '../../components/frontend/template4/CategoryList';


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



{/* {categories.map((category, i) => (
          <div className="py-8" key={i}>
            <CategoryList
              isMarketPage={false}
              category={category}
              customization={customizationData}
            />
            <Metrics customization={customizationData} />
          </div>
        ))} */}


//       </div>
//     );
//   } catch (error) {
//     console.error('Error fetching store data:', error);
//     return <h1 className='bg-slate-50 text-slate-500'>Error loading store</h1>;
//   }
// }



// import React from 'react';
// import { getData } from '../../lib/getData';
// import Hero from '../../components/frontend/template3/Hero';
// // import AutoPlay from '@/components/frontend/template3/AutoPlay';
// import Bannert from '@/components/frontend/template3/Bannert';

// // import StoreStatistics from '@/components/frontend/template3/ShoppingForForm';
// import PremiumFeatureCard from '@/components/frontend/template3/FavaroteProducts';
// // import CategorySlider from '../../components/frontend/template4/CategorySlider';
// import CategoryList from '../../components/frontend/template3/CategoryList';
// import Testimonials from '../../components/frontend/template3/Testimonials';
// // import CategoriesBanner from '../../components/frontend/template3/Bannert';

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

// import React from 'react';
// import { getData } from '../../lib/getData';
// // import AutoPlay from '@/components/frontend/template3/AutoPlay';

// // import Home from '../../components/frontend/template2/Home';
// import Home from '../../components/frontend/template2/Home';
// // import CategoriesBanner from '../../components/frontend/template3/Bannert';

// export default async function StorePage({ params: { slugDomain } }) {
//   const store = await getData(`/stores/store/${slugDomain}`);
//   if (!store || !store.businessNameEn) {
//     return <h1 className="bg-slate-50 text-slate-500">Store not found</h1>;
//   }
//   const storeId = store.id;
//   const templatesData = await getData(`/templates/${store.templateId}`);
//   const customizationData = await getData(`/customizations/Customizationes/${storeId}`);
//   const categoriesData = await getData(`/categories?storeId=${storeId}`);
//   const productsData = await getData(`/products?storeId=${storeId}`);
//   const banners = await getData(`banners?storeId=${storeId}`)

//   const categories = categoriesData.filter(
//     (category) => category.products && category.products.length >= 0
//   );
//   return (
//     <div dir='rtl'>
//       <Home store={store} banners={banners} storeId={storeId} products={productsData} customization={customizationData} slugDomain={slugDomain} categories={categories} />
//       {/* <Hero banners={banners} storeId={storeId} customization={customizationData} /> */}

//       {/* <Bannert customization={customizationData} storeId={storeId} slugDomain={slugDomain}  categories={categoriesData}/> */}


//       {/* <Testimonials customization={customizationData} storeId={storeId}/>
//       <PremiumFeatureCard products={productsData}  storeId={storeId} customization={customizationData} /> */}

//     </div>
//   );
// }
