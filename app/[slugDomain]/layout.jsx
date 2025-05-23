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
import { getCustomerSession } from "@/lib/getCustomerSession";

//تحسين مجركات البحث 
export async function generateMetadata({ params }) {
  const store = await getData(`/stores/store/${params.slugDomain}`);

  if (!store) {
    return {
      title: "المتجر غير موجود",
      description: "عذرًا، لم نتمكن من العثور على هذا المتجر.",
      robots: "noindex",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const ogImage = store.profileImageUrl || `${baseUrl}/default-og-image.png`;

  return {
    title: store.businessName,
    description: store.notes || `تسوق الآن من ${store.businessName}`,
    generator: "صنع بحب بواسطة منصةاتجر",
    keywords: [store.businessName, "متجر إلكتروني", "تسوق", "عروض", "منتجات"],
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: store.businessName,
      description: store.notes || `تسوق الآن من ${store.businessName}`,
      type: "website",
      url: `${baseUrl}/${params.slugDomain}`,
      images: [{ url: ogImage, width: 800, height: 600 }],
    },
    twitter: {
      card: "summary_large_image",
      title: store.businessName,
      description: store.notes || `اكتشف منتجات ${store.businessName}`,
      images: [ogImage],
    },
    alternates: {
      canonical: `${baseUrl}/${params.slugDomain}`,
    },
    robots: "index, follow",
    themeColor: "#ffffff",
    viewport: "width=device-width, initial-scale=1.0",
  };
}

export default async function Layout({ children, params: { slugDomain } }) {
  // جلب بيانات المتجر
  const store = await getData(`/stores/store/${slugDomain}`);
  const session = getCustomerSession(); // سيتم استخدام الجلسة في الخادم
  const status = session ? "authenticated" : "unauthenticated";
 
  if (!store?.businessNameEn) {
    return <h1 className="bg-slate-50 text-slate-500">Store not found</h1>;
  }
  const storeId = store.id;

  // جلب القالب المستخدم
  const templatesData = await getData(`/templates/${store.templateId}`, {mode:'real-time'});
  const slug = templatesData.slug;

  // جلب البيانات المشتركة
  const customizationData = await getData(`/customizations/Customizationes/${storeId}`);
  const categories = await getData(`/categories?storeId=${storeId}`);

  // استيراد Navbar و Footer ديناميكياً بناءً على slug
  const Navbar = dynamic(
    () => import(`../../components/frontend/${slug}/Navbar`),
    { ssr: true  }
  );
  const Footer = dynamic(
    () => import(`../../components/frontend/${slug}/Footer`),
    { ssr: true }
  );

  return (
    <div dir="rtl">
      <Navbar
        session={session}
        status={status}
        slugDomain={slugDomain}
        customization={customizationData}
        storeData={store}
        categories={categories}
      />
      <main className="flex-grow container mx-auto px-4 py-4">{children}</main>
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
