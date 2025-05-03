// "use client";

// import React, { useEffect, useState } from "react";
// import SearchForm from "./SearchForm";
// import HelpModalstore from "./HelpModal-store";
// import CartCount from "../template1/cart-template/CartCount";
// import Image from "next/image";
// import Link from "next/link";
// import ThemeSwitcherBtn from "../../ThemeSwitcherBtn";
// import { User } from "lucide-react";
// import { useSession } from "next-auth/react";
// import UserAvatar from "./UserAvatar";
// import { getData } from "../../../lib/getData";

// export default function Navbar({ slugDomain  , customization = {}}) {
//   const primaryColor = customization.primaryColor || '#4CAF50'; // اللون الأساسي
//   const secondaryColor = customization.secondaryColor || '#2C3E50'; // اللون الثانوي
//   const accentColor = customization.accentColor || '#FFC107'; // اللون المميز
//   const backgroundColor = customization.backgroundColor || '#FFFFFF'; // لون الخلفية
//   const fontFamily = customization.fontFamily || 'sans-serif'; // نوع الخط
//   const isActive = customization.isActive ?? true;
//   const { data: session, status } = useSession();
//   const [store, setStore] = useState(null);
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     async function fetchStore() {
//       if (slugDomain) {
//         const storeData = await getData(`stores/store/${slugDomain}`);
//         setStore(storeData);
//         if (storeData?.categories) {
//           setCategories(storeData.categories);
//         }
//       }
//     }
//     fetchStore();
//   }, [slugDomain]);

//   if (status === "loading") {
//     return <p className="text-center text-gray-500">Loading...</p>;
//   }

//   return (
//     <header className="navbar fixed top-0 left-0 w-full z-50 bg-white dark:bg-slate-900 shadow-md">
//       <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
//         {/* Logo */}
//         <div className="flex items-center space-x-3">
//           <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500">
//             <Image
//               src={store?.profileImageUrl || "/default-logo.png"}
//               alt="Store logo"
//               fill
//               style={{ objectFit: "cover" }}
//             />
//           </div>
//           <div>
//             <h1 className="text-lg font-bold text-gray-800 dark:text-white">
//               {store?.businessName || "اسم المتجر"}
//             </h1>
//           </div>
//         </div>

//         {/* Navigation */}
//         <div className="flex items-center  rounded-full px-4 gap-4 w-full max-w-2xl "style={{ color: backgroundColor }}>
//           {/* Search */}
//           <div className="flex-grow ">
//             <SearchForm   customization = {customization}/>
//           </div>

//           {/* User and Actions */}
//           <div className="flex items-center gap-4">
//             {status === "unauthenticated" ? (
//               <Link
//                 href="/login"
//                 className="flex items-center text-sm text-gray-700 dark:text-gray-200 hover:underline"
//               >
//                 <User className="w-5 h-5 mr-1" />
//                 <span>Login</span>
//               </Link>
//             ) : (
//               <UserAvatar user={session?.user} />
//             )}
//             <HelpModalstore   customization = {customization}/>
//             <CartCount slugDomain={slugDomain} customization = {customization} />
//             <ThemeSwitcherBtn  customization = {customization} />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }




"use client";

import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import HelpModalstore from "./HelpModal-store";
import CartCount from "./cart-templaet/CartCount";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcherBtn from "../../ThemeSwitcherBtn";
import { User } from "lucide-react";
import { useSession } from "next-auth/react";
import UserAvatar from "./UserAvatar";
import { getData } from "../../../lib/getData";

export default function Navbar({ slugDomain, customization = {} }) {
  const primaryColor = customization.primaryColor || "#4CAF50"; // اللون الأساسي
  const secondaryColor = customization.secondaryColor || "#2C3E50"; // اللون الثانوي
  const accentColor = customization.accentColor || "#FFC107"; // اللون المميز
  const backgroundColor = customization.backgroundColor || "#FFFFFF"; // لون الخلفية
  const fontFamily = customization.fontFamily || "sans-serif"; // نوع الخط
  const { data: session, status } = useSession();
  const [store, setStore] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchStore() {
      if (slugDomain) {
        const storeData = await getData(`stores/store/${slugDomain}`);
        setStore(storeData);
        if (storeData?.categories) {
          setCategories(storeData.categories);
        }
      }
    }
    fetchStore();
  }, [slugDomain]);

  if (status === "loading") {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <header className="navbar fixed top-0 left-0 w-full z-50 bg-white dark:bg-slate-900 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500">
            <Image
              src={store?.profileImageUrl || "/default-logo.png"}
              alt="Store logo"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800 dark:text-white">
              {store?.businessName || "اسم المتجر"}
            </h1>
          </div>
        </div>

        {/* Navigation */}
        <div
          className="flex items-center rounded-full px-4 gap-4 w-full max-w-2xl"
          style={{ color: backgroundColor }}
        >
          {/* Search */}
          <div className="flex-grow">
            <SearchForm customization={customization} />
          </div>

          {/* User and Actions */}
          <div className="flex items-center gap-4">
            {status === "unauthenticated" ? (
              <Link
                href="/login"
                className="flex items-center text-sm text-gray-700 dark:text-gray-200 hover:underline"
              >
                <User className="w-5 h-5 mr-1" />
                <span>Login</span>
              </Link>
            ) : (
              <UserAvatar user={session?.user} />
            )}
            <HelpModalstore customization={customization} />

            {/* تغليف أيقونة السلة بمعرف "navbar-cart" */}
            <div id="navbar-cart" className="relative">
              <CartCount slugDomain={slugDomain} customization={customization} />
            </div>

            <ThemeSwitcherBtn customization={customization} />
          </div>
        </div>
      </div>
    </header>
  );
}



//  "use client";

// import React, { useEffect, useState, useCallback } from "react";
// import SearchForm from "./SearchForm";
// import HelpModalstore from "./HelpModal-store";
// import CartCount from "../template1/cart-template/CartCount";
// import Image from "next/image";
// import Link from "next/link";
// import ThemeSwitcherBtn from "../../ThemeSwitcherBtn";
// import { User } from "lucide-react";
// import { useSession } from "next-auth/react";
// import UserAvatar from "./UserAvatar";
// import { getData } from "../../../lib/getData";

// export default function Navbar({ slugDomain }) {
//   const { data: session, status } = useSession();
//   const [store, setStore] = useState(null);
//   const [categories, setCategories] = useState([]);

//   const fetchStore = useCallback(async () => {
//     if (slugDomain) {
//       const storeData = await getData(`stores/store/${slugDomain}`);
//       setStore(storeData);
//       if (storeData?.categories) {
//         setCategories(storeData.categories);
//       }
//     }
//   }, [slugDomain]);

//   useEffect(() => {
//     fetchStore();
//   }, [fetchStore]);

//   if (status === "loading") {
//     return (
//       <div className="flex justify-center items-center h-20 bg-gray-100 dark:bg-slate-800">
//         <p className="text-center text-gray-500 dark:text-gray-300">Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <header className="navbar fixed top-0 left-0 w-full z-50 bg-white dark:bg-slate-900 shadow-lg">
//       <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 py-3">
//         {/* Logo */}
//         <div className="flex items-center space-x-3">
//           <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500 hover:border-blue-600 transition-all duration-300">
//             <Image
//               src={store?.profileImageUrl || "/default-logo.png"}
//               alt="Store logo"
//               fill
//               style={{ objectFit: "cover" }}
//               className="hover:scale-105 transition-transform duration-300"
//             />
//           </div>
//           <div>
//             <h1 className="text-lg font-bold text-gray-800 dark:text-white hover:text-blue-600 transition-colors duration-300">
//               {store?.businessName || "اسم المتجر"}
//             </h1>
//           </div>
//         </div>

//         {/* Navigation */}
//         <div className="flex items-center rounded-full px-4 gap-4 w-full max-w-2xl">
//           {/* Search */}
//           <div className="flex-grow">
//             <SearchForm />
//           </div>

//           {/* User and Actions */}
//           <div className="flex items-center gap-4">
//             {status === "unauthenticated" ? (
//               <Link
//                 href="/login"
//                 className="flex items-center text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 hover:underline transition-colors duration-300"
//               >
//                 <User className="w-5 h-5 mr-1" />
//                 <span>Login</span>
//               </Link>
//             ) : (
//               <UserAvatar user={session?.user} />
//             )}
//             <HelpModalstore />
//             <CartCount slugDomain={slugDomain} />
//             <ThemeSwitcherBtn />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }