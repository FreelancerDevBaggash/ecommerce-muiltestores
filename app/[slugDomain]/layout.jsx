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

// import Navbar from '../../components/frontend/templaet4/Navbar';
// import Footer from '../../components/frontend/templaet4/Footer';
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
import Navbar from '../../components/frontend/templaet5/Navbar';
import Footer from '../../components/frontend/templaet5/Footer';
import { getData } from '../../lib/getData';

export default async function Layout({ children, params:{slugDomain} }) {
 // const { slugDomain } = params;

  // جلب البيانات مرة واحدة من الخادم
  const store = await getData(`/stores/store/${slugDomain}`);
  if (!store || !store.businessNameEn) {
    return <h1 className="bg-slate-50 text-slate-500">Store not found</h1>;
  }
  const storeId = store.id;
  const templatesData = await getData(`/templates/${store.templateId}`);
  const customizationData = await getData(`/customizations/Customizationes/${storeId}`);
  const categoriesData = await getData(`/categories?storeId=${storeId}`);

  return (
    <div dir='rtl'>
      <Navbar  slugDomain={slugDomain} customization={customizationData} storeData={store} categoriesData ={categoriesData}/>
      <div>{children}</div>
      <Footer slugDomain={slugDomain} customization={customizationData} storeData={store}  />
    </div>
  );
}


// // إزالة "use client" لجعل التخطيط يعمل كمكون خادم
// import Navbar from '../../components/frontend/templaet5/Navbar';
// import Footer from '../../components/frontend/templaet5/Footer';
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
