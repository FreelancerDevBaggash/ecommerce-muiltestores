// import React from 'react'
// import Navbar from '../../components/frontend/Navbar'
// import Footer from '../../components/frontend/Footer'


// export default function Layout({ children, params }) {
//   const { slugDomain } = params;
//   return (
//     <div>
//         <Navbar slugDomain={slugDomain} />
//         <div className="max-w-6xl mx-auto py-6 px-8 lg:px-0 ">
//         {children}
//         </div>
//       <Footer/>
//     </div>
//   )
// }

// import Navbar from '../../components/frontend/template4/Navbar';
// import Footer from '../../components/frontend/template4/Footer';
// import { getData } from '../../lib/getData';

// export default async function Layout({ children, params }) {
//   const { slugDomain } = params;

//   // جلب البيانات مرة واحدة من الخادم
//   const store = await getData(`/stores/store/${slugDomain}`);
//   if (!store || !store.businessNameEn) {
//     return <h1 className="bg-slate-50 text-slate-500">Store not found</h1>;
//   }

//   const storeId = store.id;
//   const templatesData = await getData(`/templates/${store.templateId}`);
//   const customizationData = await getData(`/customizations/${storeId}`); // تأكد من صحة المسار
//   const categoriesData = await getData(`/categories?storeId=${storeId}`);

//   return (
//     <div>
//       <Navbar slugDomain={slugDomain} customization={customizationData} />
//       <div>{children}</div>
//       <Footer slugDomain={slugDomain} customization={customizationData} />
//     </div>
//   );
// }

// إزالة "use client" لجعل التخطيط يعمل كمكون خادم
// import Navbar from '../../components/frontend/template5/Navbar';
// import Footer from '../../components/frontend/template5/Footer';
// import { getData } from '../../lib/getData';
// import { getCustomerSession } from "@/lib/getCustomerSession";

// export default async function Layout({ children, params:{slugDomain} }) {
//  // const { slugDomain } = params;
//  const session = getCustomerSession(); // سيتم استخدام الجلسة في الخادم
//  const status = session ? "authenticated" : "unauthenticated";

//   // جلب البيانات مرة واحدة من الخادم
//   const store = await getData(`/stores/store/${slugDomain}`);
//   if (!store || !store.businessNameEn) {
//     return <h1 className="bg-slate-50 text-slate-500">Store not found</h1>;
//   }
//   const storeId = store.id;
//   const templatesData = await getData(`/templates/${store.templateId}`);
//   const customizationData = await getData(`/customizations/Customizationes/${storeId}`);
//   const categoriesData = await getData(`/categories?storeId=${storeId}`);
// console.log('rrrrrrrrrrrrrr', session?.user)
//   return (
//     <div dir='rtl'>
//       <Navbar  slugDomain={slugDomain} customization={customizationData} storeData={store} categoriesData ={categoriesData} session={session}
//       status={status}/>
//       <div>{children}</div>
//       <Footer slugDomain={slugDomain} customization={customizationData} storeData={store}  />
//     </div>
//   );
// }



// import Navbar from '../../components/frontend/template3/Navbar';
// import Footer from '../../components/frontend/template3/Footer';
// import { getData } from '../../lib/getData';

// export default async function Layout({ children, params:{slugDomain} }) {
// //  const { slugDomain } = params;

//   // جلب البيانات مرة واحدة من الخادم
//   const store = await getData(`/stores/store/${slugDomain}`);
//   if (!store || !store.businessNameEn) {
//     return <h1 className="bg-slate-50 text-slate-500">Store not found</h1>;
//   }
//   const storeId = store.id;
//   const templatesData = await getData(`/templates/${store.templateId}`);
//   const customizationData = await getData(`/customizations/Customizationes/${storeId}`);
//   const categories = await getData(`/categories?storeId=${storeId}`);

//   return (
//     <div dir='rtl'>
//       <Navbar  slugDomain={slugDomain} customization={customizationData} storeData={store} categories={categories}/>
//       <div>{children}</div>
//       <Footer slugDomain={slugDomain} categories={categories} customization={customizationData} storeData={store} />
//     </div>
//   );
// }

import React from "react";
import dynamic from "next/dynamic";
import { getData } from "@/lib/getData";

export default async function Layout({ children, params: { slugDomain } }) {
  // جلب بيانات المتجر
  const store = await getData(`/stores/store/${slugDomain}`);
  if (!store?.businessNameEn) {
    return <h1 className="bg-slate-50 text-slate-500">Store not found</h1>;
  }
  const storeId = store.id;

  // جلب القالب المستخدم
  const templatesData = await getData(`/templates/${store.templateId}`);
  const slug = templatesData.slug;

  // جلب البيانات المشتركة
  const customizationData = await getData(`/customizations/Customizationes/${storeId}`);
  const categories = await getData(`/categories?storeId=${storeId}`);

  // استيراد Navbar و Footer ديناميكياً بناءً على slug
  const Navbar = dynamic(
    () => import(`../../components/frontend/${slug}/Navbar`),
    { ssr: true, loading: () => <p>جاري تحميل الشريط العلوي...</p> }
  );
  const Footer = dynamic(
    () => import(`../../components/frontend/${slug}/Footer`),
    { ssr: true, loading: () => <p>جاري تحميل الشريط السفلي...</p> }
  );

  return (
    <div dir="rtl">
      <Navbar
        slugDomain={slugDomain}
        customization={customizationData}
        storeData={store}
        categories={categories}
      />
      <main>{children}</main>
      <Footer
        slugDomain={slugDomain}
        categories={categories}
        customization={customizationData}
        storeData={store}
      />
    </div>
  );
}






// // إزالة "use client" لجعل التخطيط يعمل كمكون خادم
// import Navbar from '../../components/frontend/template5/Navbar';
// import Footer from '../../components/frontend/template5/Footer';
// import { getData } from '../../lib/getData';

// export default async function Layout({ children, params }) {
//   const { slugDomain } = params;

//   // جلب البيانات مرة واحدة من الخادم
//   const store = await getData(`/stores/store/${slugDomain}`);
//   if (!store || !store.businessNameEn) {
//     return <h1 className="bg-slate-50 text-slate-500">Store not found</h1>;
//   }
//   const storeId = store.id;
//   const templatesData = await getData(`/templates/${store.templateId}`);
//   const customizationData = await getData(`/customizations/Customizationes/${storeId}`);
//   const categoriesData = await getData(`/categories?storeId=${storeId}`);

//   return (
//     <div>
//       <Navbar slugDomain={slugDomain} customization={customizationData} />
//       <div>{children}</div>
//       <Footer slugDomain={slugDomain} customization={customizationData} />
//     </div>
//   );
// }
