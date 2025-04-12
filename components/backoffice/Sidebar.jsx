
// "use client";

// import Image from 'next/image';
// import {
//   Boxes,
//   ChevronDown,
//   ChevronRight,
//   ExternalLink,
//   LayoutGrid,
//   LayoutList,
//   LogOut,
//   MonitorPlay,
//   ScanSearch,
//   SendToBack,
//   Slack,
//   Store,
//   Truck,
//   User,
//   UserSquare2,
//   Users2,
//   Warehouse
// } from 'lucide-react';
// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// //import logo from '../../public/logo-dark.png';
// import { usePathname } from 'next/navigation';
// import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import { signOut } from 'next-auth/react';
// import { getData } from '@/lib/getData';
// import { theme } from 'flowbite-react';

// export default function Sidebar({ showSidebar, setShowSidebar }) {
//   const [openMenu, setOpenMenu] = useState(false);
//   const [storeData, setStoreData] = useState([]);
//   const [slugDomain, setSlugDomain] = useState("");
//   const { data: session, status } = useSession();
//   const [logo, setLogo] = useState("");
//   const [businessName, setBusinessName] = useState("");
//   const router = useRouter();

//   const role = session?.user?.role;
//   console.log("rolerole",role)
//   const userId = session?.user?.id;

//   const pathname = usePathname();
//   let sidebarLinks = [
//     { title: 'Customers', icon: Users2, href: '/dashboard/customers' },
//     { title: 'MainCategory', icon: Warehouse, href: '/dashboard/mainCategory' },
//     { title: 'Vendors', icon: UserSquare2, href: '/dashboard/vendors' },
//     { title: 'Stores', icon: Store, href: '/dashboard/stores' },
//     { title: 'Orders', icon: Truck, href: '/dashboard/orders' },
//     { title: 'Sales', icon: Truck, href: '/dashboard/sales' },
//     { title: 'Our Staff', icon: User, href: '/dashboard/staff' },
//     { title: 'Limi Community', icon: User, href: '/dashboard/community' },
//     { title: 'Templates', icon: LayoutGrid, href: '/dashboard/templates' },
//     { title: 'Payments', icon: LayoutGrid, href: '/dashboard/payments' },
//     { title: 'DeliveringProviders', icon: LayoutGrid, href: '/dashboard/deliveringProviders' },   
//     { title: 'Payment Setting', icon: LayoutGrid, href: '/dashboard/payment' },
//     { title: 'Delivering Setting', icon: LayoutGrid, href: '/dashboard/deliveringProvidering' },
//     { title: 'Settings', icon: LayoutGrid, href: '/dashboard/settings' },
//     { title: 'Online Store', icon: ExternalLink, href: '/' },
//   ];

//   let catalogueLinks = [
//     { title: 'Products', icon: Boxes, href: '/dashboard/products' },
//     { title: 'Categories', icon: LayoutList, href: '/dashboard/categories' },
//     { title: 'Attributes', icon: SendToBack, href: '/dashboard/attributes' },
//     { title: 'Coupons', icon: ScanSearch, href: '/dashboard/coupons' },
//     { title: 'Store Banners', icon: MonitorPlay, href: '/dashboard/banners' },
//   ];

//   if (role === "VENDOR") {
//     sidebarLinks = [
//       { title: 'Customers', icon: Users2, href: '/dashboard/customers' },
//       { title: 'MainCategory', icon: Warehouse, href: '/dashboard/mainCategory' },
//       { title: 'Vendors', icon: UserSquare2, href: '/dashboard/vendors' },
//       { title: 'Stores', icon: Store, href: '/dashboard/stores' },
//       { title: 'Orders', icon: Truck, href: '/dashboard/vendor/orders' },
//       { title: 'Sales', icon: Truck, href: '/dashboard/sales' },
//       { title: 'Our Staff', icon: User, href: '/dashboard/staff' },
//       { title: 'Theme', icon: User, href: '/dashboard/customizations' },
//       { title: 'Payments', icon: User, href: '/dashboard/payments' },
//       { title: 'DeliveringProviders', icon: LayoutGrid, href: '/dashboard/deliveringProviders' },
//       { title: 'Payment Setting', icon: LayoutGrid, href: '/dashboard/payment' },
//       { title: 'Delivering Setting', icon: LayoutGrid, href: '/dashboard/deliveringProvidering' },
//       { title: 'Limi Community', icon: User, href: '/dashboard/community' },
//       { title: 'Settings', icon: LayoutGrid, href: '/dashboard/setting' },
//       { title: 'Online Store', icon: ExternalLink, href:`/${slugDomain}` },
//     ];
//     catalogueLinks = [
//       { title: 'Products', icon: Boxes, href: '/dashboard/products' },
//       { title: 'Categories', icon: LayoutList, href: '/dashboard/categories' },
//       { title: 'Attributes', icon: SendToBack, href: '/dashboard/attributes' },
//       { title: 'Coupons', icon: ScanSearch, href: '/dashboard/coupons' },
//       { title: 'Store Banners', icon: MonitorPlay, href: '/dashboard/banners' },
//       { title: 'BANNER', icon: SendToBack, href: '/dashboard/banners' },
//     ];
//   }

//   if (role === "CUSTOMER") {
//     sidebarLinks = [
//       { title: 'My Orders', icon: Truck, href: '/dashboard/orders' },
//       { title: 'Profile', icon: Truck, href: '/dashboard/profile' },
//       { title: 'Online Store', icon: ExternalLink, href: `/${slugDomain}` },
//     ];
//     catalogueLinks = [

//    ];
//   }

//   useEffect(() => {
//     if (userId) {
//       const fetchStoreData = async () => {
//         try {
//           const data = await getData(`stores?vendorId=${userId}`);
//           if (data && data.length > 0) {
//             setStoreData(data);
//             setSlugDomain(data[0].slugDomain);
//             setLogo(data[0].profileImageUrl);
//             setBusinessName(data[0].businessName);
//           }
//         } catch (error) {
//           console.error("Error fetching store data:", error);
//         }
//       };
//       fetchStoreData();
//     }
//   }, [userId]);

//   if (status === "loading") {
//     return <p>Loading...</p>;
//   }

//   async function handleLogout() {
//     await signOut();
//     router.push('/');
//   }

//   return (
//     <div className={showSidebar ? 
//       'sm:block sm-mt-0 mt-20 dark:bg-slate-800 bg-white space-y-6 w-64 h-screen text-slate-800 dark:text-slate-300 fixed left-0 top-0 shadow-md overflow-y-auto' : 
//       'mt-20 sm:mt-0 hidden sm:block dark:bg-slate-800 bg-white space-y-6 w-64 h-screen text-slate-800 dark:text-slate-300 fixed left-0 top-0 shadow-md'}>
//       {/* محتوى الشريط الجانبي */}
//       <p>Sidebar Content</p>

    
//     <div className="flex items-center space-x-4 px-4 py-2">
//   <Link onClick={() => setShowSidebar(false)} className="flex-shrink-0" href="/dashboard">
//     <Image 
//       src={logo} 
//       alt="your logo" 
//       className="w-14 h-14 md:w-16 md:h-16 rounded-lg"  // حجم الصورة يتغير بناءً على حجم الشاشة
//       width={63} 
//       height={61} 
//     />
//   </Link>
//   <p className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200"> 
//     {businessName} 
//   </p>
// </div>


//       <div className="space-y-3 flex flex-col">
//         <Link onClick={() => setShowSidebar(false)} href="/dashboard" className={pathname === '/dashboard' ? "flex items-center space-x-3 px-6 py-2 border-l-8 border-lime-500 text-lime-500" : "flex items-center space-x-3 py-2 px-6  90"}>
//           <LayoutGrid />
//           <span>Dashboard</span>
//         </Link>

//         {catalogueLinks && (
//           <Collapsible className='px-6 py-2'>
//             <CollapsibleTrigger className='' onClick={() => setOpenMenu(!openMenu)}>
//               <button className='flex items-center space-x-6 py-2'>
//                 <div className="flex items-center space-x-3">
//                   <Slack />
//                   <span>Catalogue</span>
//                 </div>
//                 {openMenu ? <ChevronDown /> : <ChevronRight />}
//               </button>
//             </CollapsibleTrigger>

//             <CollapsibleContent className="rounded-lg px-3 py-3 pl-6 dark:bg-slate-800 dark:text-slate-300">
//               {catalogueLinks.map((item, i) => {
//                 const Icon = item.icon;
//                 return (
//                   <Link onClick={() => setShowSidebar(false)} key={i} href={item.href} className={pathname === item.href ? "flex items-center space-x-3 py-1 text-sm text-lime-500" : "flex items-center space-x-3 py-1"}>
//                     <Icon className='w-4 h-4' />
//                     <span>{item.title}</span>
//                   </Link>
//                 );
//               })}
//             </CollapsibleContent>

//           </Collapsible>
//         )}

//         {sidebarLinks.map((item, i) => {
//           const Icon = item.icon;
//           return (
//             <Link onClick={() => setShowSidebar(false)} key={i} href={item.href} className={item.href === pathname ? "flex items-center space-x-3 px-6 py-2 border-l-8 border-lime-500 text-lime-500" : "flex items-center space-x-3 py-2 px-6  "}>
//               <Icon />
//               <span>{item.title}</span>
//             </Link>
//           );
//         })}

//         <div className="py-2 px-6">
//           <button onClick={handleLogout} className='bg-lime-600 rounded-md flex items-center space-x-3 py-3 px-6'>
//             <LogOut />
//             <span>Logout</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }





// "use client";

// import Image from 'next/image';
// import {
//   Boxes,
//   ChevronDown,
//   ChevronRight,
//   ExternalLink,
//   LayoutGrid,
//   LayoutList,
//   LogOut,
//   MonitorPlay,
//   ScanSearch,
//   SendToBack,
//   Slack,
//   Store,
//   Truck,
//   User,
//   UserSquare2,
//   Users2,
//   Warehouse,
//   // ... نفس الاستيرادات ...
// } from 'lucide-react';
// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// //import logo from '../../public/logo-dark.png';
// import { usePathname } from 'next/navigation';
// import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import { signOut } from 'next-auth/react';
// import { getData } from '@/lib/getData';
// import { theme } from 'flowbite-react';

// // ... بقية الاستيرادات ...

//   // ... نفس الحالات والدوال ...

// export default function Sidebar({ showSidebar, setShowSidebar }) {
//   const [openMenu, setOpenMenu] = useState(false);
//   const [storeData, setStoreData] = useState([]);
//   const [slugDomain, setSlugDomain] = useState("");
//   const { data: session, status } = useSession();
//   const [logo, setLogo] = useState("");
//   const [businessName, setBusinessName] = useState("");
//   const router = useRouter();

//   const role = session?.user?.role;
//   console.log("rolerole",role)
//   const userId = session?.user?.id;

//   const pathname = usePathname();
//   let sidebarLinks = [
//     { title: 'Customers', icon: Users2, href: '/dashboard/customers' },
//     { title: 'MainCategory', icon: Warehouse, href: '/dashboard/mainCategory' },
//     { title: 'Vendors', icon: UserSquare2, href: '/dashboard/vendors' },
//     { title: 'Stores', icon: Store, href: '/dashboard/stores' },
//     { title: 'Orders', icon: Truck, href: '/dashboard/orders' },
//     { title: 'Sales', icon: Truck, href: '/dashboard/sales' },
//     { title: 'Our Staff', icon: User, href: '/dashboard/staff' },
//     { title: 'Limi Community', icon: User, href: '/dashboard/community' },
//     { title: 'Templates', icon: LayoutGrid, href: '/dashboard/templates' },
//     { title: 'Payments', icon: LayoutGrid, href: '/dashboard/payments' },
//     { title: 'DeliveringProviders', icon: LayoutGrid, href: '/dashboard/deliveringProviders' },   
//     { title: 'Payment Setting', icon: LayoutGrid, href: '/dashboard/payment' },
//     { title: 'Delivering Setting', icon: LayoutGrid, href: '/dashboard/deliveringProvidering' },
//     { title: 'Settings', icon: LayoutGrid, href: '/dashboard/settings' },
//     { title: 'Online Store', icon: ExternalLink, href: '/' },
//   ];

//   let catalogueLinks = [
//     { title: 'Products', icon: Boxes, href: '/dashboard/products' },
//     { title: 'Categories', icon: LayoutList, href: '/dashboard/categories' },
//     { title: 'Attributes', icon: SendToBack, href: '/dashboard/attributes' },
//     { title: 'Coupons', icon: ScanSearch, href: '/dashboard/coupons' },
//     { title: 'Store Banners', icon: MonitorPlay, href: '/dashboard/banners' },
//   ];

//   if (role === "VENDOR") {
//     sidebarLinks = [
//       { title: 'Customers', icon: Users2, href: '/dashboard/customers' },
//       { title: 'MainCategory', icon: Warehouse, href: '/dashboard/mainCategory' },
//       { title: 'Vendors', icon: UserSquare2, href: '/dashboard/vendors' },
//       { title: 'Stores', icon: Store, href: '/dashboard/stores' },
//       { title: 'Orders', icon: Truck, href: '/dashboard/vendor/orders' },
//       { title: 'Sales', icon: Truck, href: '/dashboard/sales' },
//       { title: 'Our Staff', icon: User, href: '/dashboard/staff' },
//       { title: 'Theme', icon: User, href: '/dashboard/customizations' },
//       { title: 'Payments', icon: User, href: '/dashboard/payments' },
//       { title: 'DeliveringProviders', icon: LayoutGrid, href: '/dashboard/deliveringProviders' },
//       { title: 'Payment Setting', icon: LayoutGrid, href: '/dashboard/payment' },
//       { title: 'Delivering Setting', icon: LayoutGrid, href: '/dashboard/deliveringProvidering' },
//       { title: 'Limi Community', icon: User, href: '/dashboard/community' },
//       { title: 'Settings', icon: LayoutGrid, href: '/dashboard/setting' },
//       { title: 'Online Store', icon: ExternalLink, href:`/${slugDomain}` },
//     ];
//     catalogueLinks = [
//       { title: 'Products', icon: Boxes, href: '/dashboard/products' },
//       { title: 'Categories', icon: LayoutList, href: '/dashboard/categories' },
//       { title: 'Attributes', icon: SendToBack, href: '/dashboard/attributes' },
//       { title: 'Coupons', icon: ScanSearch, href: '/dashboard/coupons' },
//       { title: 'Store Banners', icon: MonitorPlay, href: '/dashboard/banners' },
//       { title: 'BANNER', icon: SendToBack, href: '/dashboard/banners' },
//     ];
//   }

//   if (role === "CUSTOMER") {
//     sidebarLinks = [
//       { title: 'My Orders', icon: Truck, href: '/dashboard/orders' },
//       { title: 'Profile', icon: Truck, href: '/dashboard/profile' },
//       { title: 'Online Store', icon: ExternalLink, href: `/${slugDomain}` },
//     ];
//     catalogueLinks = [

//    ];
//   }

//   useEffect(() => {
//     if (userId) {
//       const fetchStoreData = async () => {
//         try {
//           const data = await getData(`stores?vendorId=${userId}`);
//           if (data && data.length > 0) {
//             setStoreData(data);
//             setSlugDomain(data[0].slugDomain);
//             setLogo(data[0].profileImageUrl);
//             setBusinessName(data[0].businessName);
//           }
//         } catch (error) {
//           console.error("Error fetching store data:", error);
//         }
//       };
//       fetchStoreData();
//     }
//   }, [userId]);

//   if (status === "loading") {
//     return <p>Loading...</p>;
//   }

//   async function handleLogout() {
//     await signOut();
//     router.push('/');
//   }
//   return (
//     <div className={showSidebar ? 
//       `sm:block sm-mt-0 mt-20 dark:bg-slate-900 bg-white space-y-6 w-64 h-screen text-slate-700 dark:text-slate-200 
//        fixed right-0 top-0 shadow-xl overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-indigo-300
//        dark:scrollbar-track-slate-900 dark:scrollbar-thumb-slate-600 transition-all duration-300 z-50` : 
//       `mt-20 sm:mt-0 hidden sm:block dark:bg-slate-900 bg-white space-y-6 w-64 h-screen text-slate-700 dark:text-slate-200 
//        fixed right-0 top-0 shadow-xl overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-indigo-300
//        dark:scrollbar-track-slate-900 dark:scrollbar-thumb-slate-600 transition-all duration-300 z-50`}>
      
//       {/* Header Section */}
//       <div className="px-4 py-6 border-b border-slate-200 dark:border-slate-700">
//         <div className="flex items-center gap-4">
//           <Link 
//             onClick={() => setShowSidebar(true)} 
//             className="flex-shrink-0 hover:opacity-80 transition-opacity"
//             href="/dashboard"
//           >
//             <Image 
//               src={logo} 
//               alt="Business logo" 
//               className="w-12 h-12 rounded-lg border-2 border-indigo-100 dark:border-slate-700"
//               width={48} 
//               height={48} 
//             />
//           </Link>
//           <div>
//             <p className="font-semibold text-indigo-600 dark:text-indigo-400 truncate max-w-[160px]">
//               {businessName}
//             </p>
//             <p className="text-sm text-slate-500 dark:text-slate-400">Admin Panel</p>
//           </div>
//         </div>
//       </div>

//       <div className="space-y-1.5 px-3">
//         <Link 
//           onClick={() => setShowSidebar(false)} 
//           href="/dashboard" 
//           className={`flex items-center gap-3 px-4 py-3 rounded-lg mx-2 transition-colors
//             ${pathname === '/dashboard' 
//               ? 'bg-indigo-600 text-white shadow-md' 
//               : 'hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
//         >
//           <LayoutGrid className="w-5 h-5" />
//           <span className="font-medium">Dashboard</span>
//         </Link>

//         {catalogueLinks && (
//           <Collapsible className="group">
//             <CollapsibleTrigger className="w-full" onClick={() => setOpenMenu(!openMenu)}>
//               <div className={`flex items-center justify-between gap-3 px-4 py-3 rounded-lg mx-2 transition-colors
//                 ${openMenu 
//                   ? 'bg-indigo-50/50 dark:bg-slate-800' 
//                   : 'hover:bg-indigo-50 dark:hover:bg-slate-800'}`}>
//                 <div className="flex items-center gap-3">
//                   <Slack className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
//                   <span className="font-medium">Catalogue</span>
//                 </div>
//                 {openMenu ? (
//                   <ChevronDown className="w-4 h-4 text-slate-500 dark:text-slate-400" />
//                 ) : (
//                   <ChevronRight className="w-4 h-4 text-slate-500 dark:text-slate-400" />
//                 )}
//               </div>
//             </CollapsibleTrigger>

//             <CollapsibleContent className="pr-8 pl-2 space-y-1.5">
//               {catalogueLinks.map((item, i) => {
//                 const Icon = item.icon;
//                 return (
//                   <Link
//                     key={i}
//                     onClick={() => setShowSidebar(false)}
//                     href={item.href}
//                     className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors
//                       ${pathname === item.href
//                         ? 'bg-indigo-600 text-white shadow-md'
//                         : 'hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
//                   >
//                     <Icon className="w-4 h-4" />
//                     <span>{item.title}</span>
//                   </Link>
//                 );
//               })}
//             </CollapsibleContent>
//           </Collapsible>
//         )}

//         {sidebarLinks.map((item, i) => {
//           const Icon = item.icon;
//           return (
//             <Link
//               key={i}
//               onClick={() => setShowSidebar(false)}
//               href={item.href}
//               className={`flex items-center gap-3 px-4 py-3 rounded-lg mx-2 transition-colors
//                 ${item.href === pathname
//                   ? 'bg-indigo-600 text-white shadow-md'
//                   : 'hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
//             >
//               <Icon className="w-5 h-5" />
//               <span className="font-medium">{item.title}</span>
//               {item.title === 'Online Store' && (
//                 <ExternalLink className="w-4 h-4 ml-auto text-slate-400" />
//               )}
//             </Link>
//           );
//         })}

//         <div className="pt-4 px-3 border-t border-slate-200 dark:border-slate-700">
//           <button
//             onClick={handleLogout}
//             className="w-full flex items-center gap-3 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 
//                      text-white rounded-lg transition-colors shadow-md"
//           >
//             <LogOut className="w-5 h-5" />
//             <span className="font-medium">Logout</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import Image from 'next/image';
import {
  Boxes,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  LayoutGrid,
  LayoutList,
  LogOut,
  MonitorPlay,
  ScanSearch,
  SendToBack,
  Slack,
  Store,
  Truck,
  User,
  UserSquare2,
  Users2,
  Warehouse,
} from 'lucide-react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { getData } from '@/lib/getData';
import { theme } from 'flowbite-react';

export default function Sidebar({ showSidebar, setShowSidebar }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [storeData, setStoreData] = useState([]);
  const [slugDomain, setSlugDomain] = useState("");
  const { data: session, status } = useSession();
  const [logo, setLogo] = useState("");
  const [businessName, setBusinessName] = useState("");
  const router = useRouter();

  const role = session?.user?.role;
  const userId = session?.user?.id;

  const pathname = usePathname();
  let sidebarLinks = [
    { title: 'العملاء', icon: Users2, href: '/dashboard/customers' },
    { title: 'الفئة الرئيسية', icon: Warehouse, href: '/dashboard/mainCategory' },
    { title: 'الموردون', icon: UserSquare2, href: '/dashboard/vendors' },
    { title: 'المتاجر', icon: Store, href: '/dashboard/stores' },
    { title: 'الطلبات', icon: Truck, href: '/dashboard/orders' },
    { title: 'المبيعات', icon: Truck, href: '/dashboard/sales' },
    { title: 'فريقنا', icon: User, href: '/dashboard/staff' },
    { title: 'المجتمع', icon: User, href: '/dashboard/community' },
    { title: 'القوالب', icon: LayoutGrid, href: '/dashboard/templates' },
    { title: 'المدفوعات', icon: LayoutGrid, href: '/dashboard/payments' },
    { title: 'مقدمو الخدمة', icon: LayoutGrid, href: '/dashboard/deliveringProviders' },
    { title: 'إعدادات الدفع', icon: LayoutGrid, href: '/dashboard/payment' },
    { title: 'إعدادات التوصيل', icon: LayoutGrid, href: '/dashboard/deliveringProvidering' },
    { title: 'الإعدادات', icon: LayoutGrid, href: '/dashboard/settings' },
    { title: 'المتجر الإلكتروني', icon: ExternalLink, href: '/' },
  ];

  let catalogueLinks = [
    { title: 'المنتجات', icon: Boxes, href: '/dashboard/products' },
    { title: 'الفئات', icon: LayoutList, href: '/dashboard/categories' },
    { title: 'الخصائص', icon: SendToBack, href: '/dashboard/attributes' },
    { title: 'الكوبونات', icon: ScanSearch, href: '/dashboard/coupons' },
    { title: 'لافتات المتجر', icon: MonitorPlay, href: '/dashboard/banners' },
  ];

  if (role === "VENDOR") {
    sidebarLinks = [
      { title: 'العملاء', icon: Users2, href: '/dashboard/customers' },
      { title: 'الفئة الرئيسية', icon: Warehouse, href: '/dashboard/mainCategory' },
      { title: 'الموردون', icon: UserSquare2, href: '/dashboard/vendors' },
      { title: 'المتاجر', icon: Store, href: '/dashboard/stores' },
      { title: 'الطلبات', icon: Truck, href: '/dashboard/vendor/orders' },
      { title: 'المبيعات', icon: Truck, href: '/dashboard/sales' },
      { title: 'فريقنا', icon: User, href: '/dashboard/staff' },
      { title: 'التخصيصات', icon: User, href: '/dashboard/customizations' },
      { title: 'المدفوعات', icon: User, href: '/dashboard/payments' },
      { title: 'مقدمو الخدمة', icon: LayoutGrid, href: '/dashboard/deliveringProviders' },
      { title: 'إعدادات الدفع', icon: LayoutGrid, href: '/dashboard/payment' },
      { title: 'إعدادات التوصيل', icon: LayoutGrid, href: '/dashboard/deliveringProvidering' },
      { title: 'المجتمع', icon: User, href: '/dashboard/community' },
      { title: 'إعدادات المتجر', icon: LayoutGrid, href: '/dashboard/setting' },
      { title: 'المتجر الإلكتروني', icon: ExternalLink, href:`/${slugDomain}` },
    ];
    catalogueLinks = [
      { title: 'المنتجات', icon: Boxes, href: '/dashboard/products' },
      { title: 'الفئات', icon: LayoutList, href: '/dashboard/categories' },
      { title: 'الخصائص', icon: SendToBack, href: '/dashboard/attributes' },
      { title: 'الكوبونات', icon: ScanSearch, href: '/dashboard/coupons' },
      { title: 'لافتات المتجر', icon: MonitorPlay, href: '/dashboard/banners' },
      { title: 'لافتة', icon: SendToBack, href: '/dashboard/banners' },
    ];
  }

  if (role === "CUSTOMER") {
    sidebarLinks = [
      { title: 'طلباتي', icon: Truck, href: '/dashboard/orders' },
      { title: 'ملفي الشخصي', icon: Truck, href: '/dashboard/profile' },
      { title: 'المتجر الإلكتروني', icon: ExternalLink, href: `/${slugDomain}` },
    ];
    catalogueLinks = [];
  }

  useEffect(() => {
    if (userId) {
      const fetchStoreData = async () => {
        try {
          const data = await getData(`stores?vendorId=${userId}`, {mode: 'real-time'});
          if (data && data.length > 0) {
            setStoreData(data);
            setSlugDomain(data[0].slugDomain);
            setLogo(data[0].profileImageUrl);
            setBusinessName(data[0].businessName);
          }
        } catch (error) {
          console.error("حدث خطأ في جلب بيانات المتجر:", error);
        }
      };
      fetchStoreData();
    }
  }, [userId]);

  if (status === "loading") {
    return <p>جاري التحميل...</p>;
  }

  async function handleLogout() {
    await signOut();
    router.push('/');
  }

  return (
    <div className={showSidebar ? 
      `sm:block sm-mt-0 mt-20 font-arabic dark:bg-slate-900 bg-[#ffffff] space-y-6 w-64 h-screen text-slate-700 dark:text-slate-200 
       fixed right-0 top-0 shadow-xl overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-indigo-200
       dark:scrollbar-track-slate-900 dark:scrollbar-thumb-slate-600 transition-all duration-300 z-50` : 
      `mt-20 sm:mt-0 hidden sm:block dark:bg-slate-900 bg-white space-y-6 w-64 h-screen text-slate-700 dark:text-slate-200 
       fixed right-0 top-0 shadow-xl overflow-y-auto scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-indigo-300
       dark:scrollbar-track-slate-900 dark:scrollbar-thumb-slate-600 transition-all duration-300 z-50`}>
      
      {/* قسم الرأس */}
      <div className="px-4 py-6 font-arabic  rounded-2xl border-b border-slate-100 dark:border-slate-700">
        <div className="flex items-center gap-4">
          <Link 
            onClick={() => setShowSidebar(true)} 
            className="flex-shrink-0 hover:opacity-80 transition-opacity"
            href="/dashboard"
          >
            <Image 
              src={logo} 
              alt="شعار التاجر او العمل" 
              className="w-12 h-12 rounded-lg border-2 border-indigo-100 dark:border-slate-700"
              width={64} 
              height={64} 
            />
          </Link>
          <div>
            <p className="font-semibold text-indigo-600 dark:text-indigo-400 truncate max-w-[160px]">
              {businessName}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">لوحة التحكم</p>
          </div>
        </div>
      </div>

      <div className="space-y-1.5 font-arabic px-3">
        <Link 
          onClick={() => setShowSidebar(false)} 
          href="/dashboard" 
          className={`flex items-center gap-3 px-4 py-3 rounded-lg mx-2 transition-colors
            ${pathname === '/dashboard' 
              ? 'bg-indigo-600 text-white shadow-purple-500/50 shadow-md' 
              : 'hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
        >
          <LayoutGrid className="w-5 h-5" />
          <span className="font-medium">اللوحة الرئيسية</span>
        </Link>

        {catalogueLinks && (
          <Collapsible className="group">
            <CollapsibleTrigger className="w-full" onClick={() => setOpenMenu(!openMenu)}>
              <div className={`flex items-center justify-between gap-3 px-4 py-3 rounded-lg mx-2 transition-colors
                ${openMenu 
                  ? 'bg-indigo-50/50 dark:bg-slate-800' 
                  : 'hover:bg-indigo-50 dark:hover:bg-slate-800'}`}>
                <div className="flex items-center gap-3">
                  <Slack className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <span className="font-medium">الدليل</span>
                </div>
                {openMenu ? (
                  <ChevronDown className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                ) : (
                  <ChevronRight className="w-3 h-4 text-slate-500 dark:text-slate-400" />
                )}
              </div>
            </CollapsibleTrigger>

            <CollapsibleContent className="pr-8 pl-2 space-y-1.5">
              {catalogueLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={i}
                    onClick={() => setShowSidebar(false)}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl text-sm transition-colors
                      ${pathname === item.href
                        ? 'bg-indigo-600 text-white  shadow-purple-500/50 shadow-md'
                        : 'hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </CollapsibleContent>
          </Collapsible>
        )}

        {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              key={i}
              onClick={() => setShowSidebar(false)}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mx-2 transition-colors
                ${item.href === pathname
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.title}</span>
            </Link>
          );
        })}
      </div>

      {/* قسم تسجيل الخروج */}
      <div className="px-4 py-6 mt-auto border-t font-arabic shadow-purple-500/50 border-slate-200 dark:border-slate-700">
        <div 
          onClick={handleLogout} 
          className="flex items-center gap-3 cursor-pointer text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">تسجيل الخروج</span>
        </div>
      </div>
    </div>
  );
}



// "use client";

// import Image from 'next/image';
// import {
//   Boxes,
//   ChevronDown,
//   ChevronRight,
//   ExternalLink,
//   LayoutGrid,
//   LayoutList,
//   LogOut,
//   MonitorPlay,
//   ScanSearch,
//   SendToBack,
//   Slack,
//   Store,
//   Truck,
//   User,
//   UserSquare2,
//   Users2,
//   Warehouse
// } from 'lucide-react';
// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// import { usePathname } from 'next/navigation';
// import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
// import { useSession, signOut } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import { getData } from '@/lib/getData';

// export default function Sidebar({ showSidebar, setShowSidebar }) {
//   const [openMenu, setOpenMenu] = useState(false);
//   const [storeData, setStoreData] = useState(null);
//   const { data: session, status } = useSession();
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const pathname = usePathname();
//   const role = session?.user?.role;
//   const userId = session?.user?.id;

//   const [sidebarLinks, setSidebarLinks] = useState([]);
//   const [catalogueLinks, setCatalogueLinks] = useState([]);

//   useEffect(() => {
//     const linksByRole = {
//       VENDOR: {
//         sidebar: [
//           { title: 'Customers', icon: Users2, href: '/dashboard/customers' },
//           { title: 'MainCategory', icon: Warehouse, href: '/dashboard/mainCategory' },
//           { title: 'Orders', icon: Truck, href: '/dashboard/vendor/orders' },
//           { title: 'Sales', icon: Truck, href: '/dashboard/sales' },
//           { title: 'Theme', icon: User, href: '/dashboard/customizations' },
//           { title: 'Settings', icon: LayoutGrid, href: '/dashboard/setting' },
//         ],
//         catalogue: [
//           { title: 'Products', icon: Boxes, href: '/dashboard/products' },
//           { title: 'Categories', icon: LayoutList, href: '/dashboard/categories' },
//           { title: 'Coupons', icon: ScanSearch, href: '/dashboard/coupons' },
//         ],
//       },
//       CUSTOMER: {
//         sidebar: [
//           { title: 'My Orders', icon: Truck, href: '/dashboard/orders' },
//           { title: 'Profile', icon: Truck, href: '/dashboard/profile' },
//         ],
//         catalogue: [],
//       },
//       ADMIN: {
//         sidebar: [
//           { title: 'Customers', icon: Users2, href: '/dashboard/customers' },
//           { title: 'Vendors', icon: UserSquare2, href: '/dashboard/vendors' },
//           { title: 'Orders', icon: Truck, href: '/dashboard/orders' },
//           { title: 'Settings', icon: LayoutGrid, href: '/dashboard/settings' },
//         ],
//         catalogue: [
//           { title: 'Products', icon: Boxes, href: '/dashboard/products' },
//           { title: 'Categories', icon: LayoutList, href: '/dashboard/categories' },
//         ],
//       },
//     };

//     setSidebarLinks(linksByRole[role]?.sidebar || []);
//     setCatalogueLinks(linksByRole[role]?.catalogue || []);
//   }, [role]);

//   useEffect(() => {
//     if (userId) {
//       setLoading(true);
//       getData(`stores?vendorId=${userId}`)
//         .then((data) => {
//           if (data && data.length > 0) {
//             setStoreData(data[0]);
//           }
//         })
//         .catch((error) => console.error("Error fetching store data:", error))
//         .finally(() => setLoading(false));
//     }
//   }, [userId]);

//   const handleLogout = async () => {
//     await signOut();
//     router.push('/');
//   };

//   if (status === "loading" || loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div
//       className={`${showSidebar ? 'block' : 'hidden'} sm:block dark:bg-slate-800 bg-white w-64 h-screen text-slate-800 dark:text-slate-300 fixed left-0 top-0 shadow-md overflow-y-auto`}
//     >
//       {/* Header */}
//       <div className="flex items-center space-x-4 px-4 py-4 border-b border-gray-200 dark:border-slate-700">
//         <Link onClick={() => setShowSidebar(false)} href="/dashboard">
//           {storeData?.profileImageUrl ? (
//             <Image
//               src={storeData.profileImageUrl}
//               alt="logo"
//               className="w-14 h-14 md:w-16 md:h-16 rounded-lg"
//               width={63}
//               height={61}
//             />
//           ) : (
//             <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-200 rounded-lg" />
//           )}
//         </Link>
//         <p className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">
//           {storeData?.businessName || "Business Name"}
//         </p>
//       </div>

//       {/* Links */}
//       <div className="space-y-3">
//         {sidebarLinks.map((item, i) => {
//           const Icon = item.icon;
//           return (
//             <Link
//               key={i}
//               href={item.href}
//               onClick={() => setShowSidebar(false)}
//               className={`flex items-center space-x-3 px-6 py-2 ${
//                 pathname === item.href ? 'border-l-8 border-lime-500 text-lime-500' : ''
//               }`}
//             >
//               <Icon />
//               <span>{item.title}</span>
//             </Link>
//           );
//         })}

//         {catalogueLinks.length > 0 && (
//           <Collapsible>
//             <CollapsibleTrigger
//               className="flex items-center justify-between px-6 py-2 cursor-pointer"
//               onClick={() => setOpenMenu(!openMenu)}
//             >
//               <div className="flex items-center space-x-3">
//                 <Slack />
//                 <span>Catalogue</span>
//               </div>
//               {openMenu ? <ChevronDown /> : <ChevronRight />}
//             </CollapsibleTrigger>
//             <CollapsibleContent className="rounded-lg px-3 py-2 pl-6 dark:bg-slate-800 dark:text-slate-300">
//               {catalogueLinks.map((item, i) => {
//                 const Icon = item.icon;
//                 return (
//                   <Link
//                     key={i}
//                     href={item.href}
//                     onClick={() => setShowSidebar(false)}
//                     className={`flex items-center space-x-3 py-1 ${
//                       pathname === item.href ? 'text-lime-500' : ''
//                     }`}
//                   >
//                     <Icon className="w-4 h-4" />
//                     <span>{item.title}</span>
//                   </Link>
//                 );
//               })}
//             </CollapsibleContent>
//           </Collapsible>
//         )}
//       </div>

//       {/* Logout */}
//       <div className="py-4 px-6">
//         <button
//           onClick={handleLogout}
//           className="w-full bg-lime-600 text-white rounded-md flex items-center justify-center space-x-3 py-3"
//         >
//           <LogOut />
//           <span>Logout</span>
//         </button>
//       </div>
//     </div>
//   );
// }









// "use client"
// import Image from 'next/image'
// import { Boxes, ChevronDown, ChevronRight, ExternalLink, LayoutGrid, LayoutList, LogOut, MonitorPlay, ScanSearch, SendToBack, Slack, Store, Truck, User, UserSquare2, Users2, Warehouse } from 'lucide-react'
// import Link from 'next/link';
// import React, { useState , useEffect} from 'react';
// import logo from '../../public/logo-dark.png';
// import {usePathname} from 'next/navigation';
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
// //import { authOptions } from '@/lib/authOptions';
// import { useSession } from 'next-auth/react';
// //import handleLogout from '../../lib/handleLogout'
// import { useRouter } from 'next/navigation'
// import { signOut } from 'next-auth/react'

// import { getData } from '@/lib/getData';

// export default  function Sidebar({showSidebar,setShowSidebar}) {
//  const [openMenu, setOpenMenu]=useState(false);
//  const {data: session, status} = useSession();
//  const router = useRouter();
//  const [userType, setUserType] = useState(null);
//  //const sessions = await getServerSession(authOptions);
//  const email = session?.user?.email;

//  // Check if the user is a vendor or customer
// //  let userType = null;
//  useEffect(() => {
//   async function fetchUserType() {
//     if (session?.user?.email) {
//       const email = session.user.email;
//       try {
//         const customer = await getData(`customers?email=${email}`);
//         if (customer) {
//           setUserType('CUSTOMER');
//         } else {
//           const vendor = await getData(`vendors?email=${email}`);
//           if (vendor) {
//             setUserType('VENDOR');
//           }
        
//         }
//       } catch (error) {
//         console.error("Error fetching user type:", error);
//       }
//     }
//   }
//   fetchUserType();
// }, [session]);
// console.log("jjjjjjjjjjjjjjjjj",userType )
// //  if (email) {
// //    const vendor = await getData(`vendors?email=${email}`);
// //    if (vendor) {
// //      userType = 'VENDOR';
// //    } else {
// //      const customer = await getData(`customers?email=${email}`);
// //      if (customer) {
// //        userType = 'CUSTOMER';
// //      }
// //    }
// //  }

//  if(status === "loading"){
//   return <p>Loading ... </p>
// }

// // const role = session?.user?.role;

//    const pathname = usePathname();
//   let sidebarLinks =[
//     {
//       title:'Customers',
//       icon:Users2,
//       href:'/dashboard/customers'
//     },
//     {
//       title:'MainCategory',
//       icon:Warehouse,
//       href:'/dashboard/mainCategory'
//     },
//     {
//       title:'Vendors',
//       icon:UserSquare2,
//       href:'/dashboard/vendors'
//     },
//     {
//       title:'Stores',
//       icon:Store,
//       href:'/dashboard/stores'
//     }, 
//      {
//       title:'Template',
//       icon:UserSquare2,
//       href:'/dashboard/templates'
//     },
//     {
//       title:'Orders',
//       icon:Truck,
//       href:'/dashboard/orders'
//     },
//     {
//       title:'Sales',
//       icon:Truck,
//       href:'/dashboard/sales'
//     },
//     {
//       title:'Our Staff',
//       icon:User,
//       href:'/dashboard/staff'
//     },
//     {
//       title:'Limi Community',
//       icon:User,
//       href:'/dashboard/community'
//     },
//     {
//       title:'Settings',
//       icon:LayoutGrid,
//       href:'/dashboard/settings'
//     },
//     {
//       title:'Online Store',
//       icon:ExternalLink,
//       href:'/'
//     },
//   ];
//   let catlalogueLinks =[
//     {
//       title:'Products',
//       icon: Boxes,
//       href:'/dashboard/products'
//     },
//     {
//       title:'Categories',
//       icon: LayoutList,
//       href:'/dashboard/categories'
//     },
//     {
//       title:'Attributes',
//       icon: SendToBack,
//       href:'/dashboard/attributes'
//     },
   
//     {
//       title:'Coupons',
//       icon: ScanSearch,
//       href:'/dashboard/coupons'
//     },
//     {
//       title:'store Banners',
//       icon: MonitorPlay,
//       href:'/dashboard/banners'
//     },
//   ];
//   // // Render based on user type
//   // if (userType === "CUSTOMER") {
//   //   return <UserDashboard />;
//   // }
 
//   // if (userType === "VENDOR") {
//   //   return <VendorDashboard />;
//   // }

//   if(userType === "VENDOR"){
//     sidebarLinks = [ 
//     {
//       title:'Sales',
//       icon:Truck,
//       href:'/dashboard/sales'
//     },
//     {
//       title:'Settings',
//       icon:LayoutGrid,
//       href:'/dashboard/settings'
//     },
//     {
//       title:'Online Store',
//       icon:ExternalLink,
//       href:'/'
//     },];
//    catlalogueLinks =[
//       {
//         title:'Products',
//         icon: Boxes,
//         href:'/dashboard/products'
//       },
//       {
//         title:'Coupons',
//         icon: ScanSearch,
//         href:'/dashboard/coupons'
//       },  {
//       title:'BANNER',
//       icon: SendToBack,
//       href:'/dashboard/banners'}
//     ];
//   }

//   if(userType === "CUSTOMER"){
//     sidebarLinks = [  
//       {
//         title:'My Orders',
//         icon:Truck,
//         href:'/dashboard/orders'
//       },
//       {
//         title:'Profile',
//         icon:Truck,
//         href:'/dashboard/profile'
//       },
//       {
//         title:'Online Store',
//         icon:ExternalLink,
//         href:'/'
//       },];
//     catlalogueLinks=[]
//   }


  
//   async function handleLogout(){
//     await signOut()
//     router.push("/")
//    }
//   return (
//     <div className={showSidebar?'sm:block sm-mt-0 mt-20 dark:bg-slate-800 bg-white space-y-6 w-64 h-screen text-slate-800 dark:text-slate-300 fixed left-0 top-0 shadow-md'
//     :'mt-20 sm:mt-0 hidden sm:block dark:bg-slate-800 bg-white space-y-6 w-64 h-screen text-slate-800 dark:text-slate-300 fixed left-0 top-0 shadow-md'}>
//         <Link onClick={()=>setShowSidebar(false)} className='px-6 py-4' href="/dashboard">
//           <Image src={logo} alt='limifood logo' className='w-36' />
//         </Link>
//         <div className="space-y-3 flex flex-col">
//         <Link 
//         onClick={()=>setShowSidebar(false)}
//         href="/dashboard" 
//         className={pathname === '/dashboard'? "flex items-center space-x-3 px-6 py-2 border-l-8 border-lime-500 text-lime-500":"flex items-center space-x-3 py-2 px-6  90"}>
//           <LayoutGrid/>
//         <span>Dashboard</span> 
//            </Link>
//            {catlalogueLinks.length > 0 && (
//                    <Collapsible className='px-6 py-2'>
//                    <CollapsibleTrigger className='' onClick={()=> setOpenMenu(!openMenu)}>
//                        <button className='flex items-center space-x-6 py-2'>
//                            <div className="flex items-center space-x-3">
//                            <Slack />
//                           <span> Catalogue</span> 
//                            </div>
//                           {openMenu?<ChevronDown />:  <ChevronRight />}
//                        </button>
//                           </CollapsibleTrigger>
                         
//                            <CollapsibleContent className="rounded-lg px-3 py-3 pl-6 dark:bg-slate-800 dark:text-slate-300">
//                           {
//                             catlalogueLinks.map((item,i)=> {
//                               const Icon =item.icon;
//                               return(
//                                 <Link
//                                 onClick={()=>setShowSidebar(false)}
//                                 key={i}
//                                  href={item.href} className={pathname === item.href? "flex items-center space-x-3 py-1 text-sm text-lime-500":"flex items-center space-x-3 py-1"}>
//                                   <Icon className='w-4 h-4'/>
//                                 <span>{item.title}</span> 
//                                    </Link>
                               
//                               );
//                             })
//                           }
//                             </CollapsibleContent>
                          
//                  </Collapsible>
//           )}
   

       
     
// {
//   sidebarLinks.map((item , i)=>{
//     const Icon = item.icon
// return(
//   <Link 
//   onClick={()=>setShowSidebar(false)}
//   key={i}
//    href={item.href} className={item.href == pathname ? "flex items-center space-x-3 px-6 py-2 border-l-8 border-lime-500 text-lime-500":"flex items-center space-x-3 py-2 px-6  "}>
//           <Icon/>
//         <span>{item.title}</span> 
//          </Link>

// )
//   })
// }

// <div className="py-2 px-6">
//   <button onClick={handleLogout} className='bg-lime-600 rounded-md flex items-center space-x-3 py-3 px-6 ' >
//   <LogOut/>
//   <span>Logout</span>
// </button></div>

//         </div>
//         </div>
//   )
// }
