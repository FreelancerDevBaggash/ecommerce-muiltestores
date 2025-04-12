// "use client";

// import React, { useEffect, useState } from "react";
// import SearchForm from "./SearchForm";
// import HelpModalstore from "./HelpModal-store";
// import CartCount from "../templaet1/cart-templaet/CartCount";
// import Image from "next/image";
// import Link from "next/link";
// import ThemeSwitcherBtn from "../../ThemeSwitcherBtn";
// import { User, Menu, X } from "lucide-react";
// import { useSession } from "next-auth/react";
// import UserAvatar from "./UserAvatar";
// import { getData } from "../../../lib/getData";
// import {
//   FaAngleDown,
//   FaTimes,
//   FaCouch,
//   FaTv,
//   FaTshirt,
//   FaShoePrints,
//   FaGlobe,
// } from "react-icons/fa";

// function CategoryDropdown({ primaryColor }) {
//   const [open, setOpen] = useState(false);
//   const toggleDropdown = () => setOpen((prev) => !prev);
//   const closeDropdown = () => setOpen(false);

//   // return (
//   //   <div className="relative font-[sans-serif] w-max">
//   //     <button
//   //       type="button"
//   //       onClick={toggleDropdown}
//   //       className="px-6 py-3 rounded text-sm border-none outline-none flex items-center hover:text-neutral-500"
//   //       style={{ color: primaryColor }}
//   //     >
//   //       Select category
//   //       <FaAngleDown className="w-3 h-3 ml-3" />
//   //     </button>
//   //     {open && (
//   //       <ul className="absolute left-0 block shadow-lg bg-gray-50 mt-2 py-2 z-[1000] w-max rounded max-h-96 overflow-auto">
//   //         <li className="py-2 px-4 flex justify-end">
//   //           <button onClick={closeDropdown}>
//   //             <FaTimes className="w-4 h-4" />
//   //           </button>
//   //         </li>
//   //         <li className="py-3 px-6 hover:bg-gray-100 text-sm cursor-pointer flex justify-between items-center text-[#333]" onClick={closeDropdown}>
//   //           Furniture Store
//   //           <FaCouch className="w-4 h-4" />
//   //         </li>
//   //         <li className="py-3 px-6 hover:bg-gray-100 text-sm cursor-pointer flex justify-between items-center text-[#333]" onClick={closeDropdown}>
//   //           Electronic Store
//   //           <FaTv className="w-4 h-4" />
//   //         </li>
//   //         <li className="py-3 px-6 hover:bg-gray-100 text-sm cursor-pointer flex justify-between items-center text-[#333]" onClick={closeDropdown}>
//   //           Fashion Store
//   //           <FaTshirt className="w-4 h-4" />
//   //         </li>
//   //         <li className="py-3 px-6 hover:bg-gray-100 text-sm cursor-pointer flex justify-between items-center text-[#333]" onClick={closeDropdown}>
//   //           Shoes Store
//   //           <FaShoePrints className="w-4 h-4" />
//   //         </li>
//   //       </ul>
//   //     )}
//   //   </div>
//   // );
// }

// function AccountDropdown({ session, customization }) {
//   const [open, setOpen] = useState(false);
//   const toggleDropdown = () => setOpen((prev) => !prev);

//   return (
//     <div className="relative">
//       {session ? (
//         <UserAvatar user={session.user} customization={customization} />
//       ) : (
//         <Link href="/login" className="flex items-center text-sm text-gray-700 dark:text-gray-200 hover:underline">
//           <User className="w-5 h-5 mr-1" aria-label="تسجيل الدخول" />
//           <span>تسجيل الدخول</span>
//         </Link>
//       )}
//     </div>
//   );
// }

// function LanguageDropdown() {
//   const [open, setOpen] = useState(false);
//   const toggleDropdown = () => setOpen((prev) => !prev);
//   const closeDropdown = () => setOpen(false);

//   return (
//     <div className="relative">
//       <button type="button" onClick={toggleDropdown} className="flex items-center gap-2">
//         <FaGlobe className="w-5 h-5" />
//         <FaAngleDown className="w-3 h-3" />
//       </button>
//       {open && (
//         <ul className="absolute right-0 mt-2 py-2 w-32 bg-white dark:bg-slate-800 shadow-lg rounded z-50">
//           <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer" onClick={closeDropdown}>English</li>
//           <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer" onClick={closeDropdown}>العربية</li>
//         </ul>
//       )}
//     </div>
//   );
// }

// export default function Navbar({ slugDomain, customization = {} }) {
//   const { data: session, status } = useSession();
//   const [store, setStore] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     async function fetchStore() {
//       if (slugDomain) {
//         const storeData = await getData(`stores/store/${slugDomain}`);
//         setStore(storeData);
//       }
//     }
//     fetchStore();
//   }, [slugDomain]);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   if (status === "loading") {
//     return <p className="text-center text-gray-500">جارِ التحميل...</p>;
//   }

//   return (
//     <header className="navbar fixed top-0 left-0 w-full z-50 bg-white dark:bg-slate-900 shadow-md">
//       <div className="container mx-auto flex items-center justify-between px-2 lg:px-2 py-2">
//         <div className="flex items-center space-x-3">
//           <div className="relative w-14 h-14 rounded-full overflow-hidden border-2">
//             <Image src={store?.profileImageUrl || "/logo33.png"} alt="شعار المتجر" fill style={{ objectFit: "cover" }} />
//           </div>
//           <h1 className="text-lg font-bold text-gray-800 dark:text-white">{store?.businessName || "اسم المتجر"}</h1>
//         </div>

//         {/* القائمة المنسدلة للجوال */}
//         <div className="md:hidden flex items-center space-x-4">
//           <button onClick={toggleMobileMenu} className="p-2">
//             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         <div className="hidden md:flex items-center gap-4">
//           <CategoryDropdown primaryColor={customization.primaryColor || "#4CAF50"} />
//           <LanguageDropdown />
//           <AccountDropdown session={session} customization={customization} />
//         </div>
//         <div className="hidden md:flex items-center rounded-full px-4 gap-4 w-full max-w-2xl">
//           <SearchForm customization={customization} />
//           <HelpModalstore customization={customization} />
//           <div id="navbar-cart" className="relative">
//             <CartCount slugDomain={slugDomain} customization={customization} />
//           </div>
//           <ThemeSwitcherBtn customization={customization} />
//         </div>
//       </div>

//       {/* القائمة المنسدلة لأجهزة الجوال */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden mt-4 bg-white dark:bg-gray-900 py-2 rounded-lg shadow-lg">
//           <nav className="flex flex-col space-y-2">
//             <Link href="/categories" className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
//               التصنيفات
//             </Link>
//             <Link href="/offers" className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
//               العروض
//             </Link>
//             <Link href="/new" className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
//               وصل حديثاً
//             </Link>
//             <Link href="/account" className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
//               حسابي
//             </Link>
//             <Link href="/favorites" className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
//               المفضلة
//             </Link>
//           </nav>
//         </div>
//       )}

//       {/* شريط التصنيفات */}
//       <div className="hidden md:flex mt-4 border-t justify-center border-gray-200 dark:border-gray-800 pt-2">
//         <nav className="flex space-x-8 justify-center p-4 space-x-reverse">

//           <Link href="/categories/fashion" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
//             الأزياء
//           </Link>
//           <Link href="/categories/home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
//             المنزل
//           </Link>
//           <Link href="/categories/beauty" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
//             الجمال والعناية
//           </Link>
//           <Link href="/categories/electronics" className="text-gray-700 mr-2 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
//             الإلكترونيات
//           </Link>
//           <Link href="/categories/sports" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
//             الرياضة
//           </Link>
//           <Link href="/categories/toys" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
//             الألعاب
//           </Link>
//           <Link href="/categories/grocery" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
//             البقالة
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// }



















"use client";

import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import HelpModalstore from "./HelpModal-store";
import CartCount from "../templaet1/cart-templaet/CartCount";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcherBtn from "../../ThemeSwitcherBtn";
import { User } from "lucide-react";
import { useSession } from "next-auth/react";
import UserAvatar from "./UserAvatar";
import { getData } from "../../../lib/getData";

export default function Navbar({ slugDomain  , customization = {}}) {
  const primaryColor = customization.primaryColor || '#4CAF50'; // اللون الأساسي
  const secondaryColor = customization.secondaryColor || '#2C3E50'; // اللون الثانوي
  const accentColor = customization.accentColor || '#FFC107'; // اللون المميز
  const backgroundColor = customization.backgroundColor || '#FFFFFF'; // لون الخلفية
  const fontFamily = customization.fontFamily || 'sans-serif'; // نوع الخط
  const isActive = customization.isActive ?? true;
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
        <div className="flex items-center  rounded-full px-4 gap-4 w-full max-w-2xl "style={{ color: backgroundColor }}>
          {/* Search */}
          <div className="flex-grow ">
            <SearchForm   customization = {customization}/>
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
            <HelpModalstore   customization = {customization}/>
            <CartCount slugDomain={slugDomain} customization = {customization} />
            <ThemeSwitcherBtn  customization = {customization} />
          </div>
        </div>
      </div>
    </header>
  );
}

// "use client";

// import React, { useEffect, useState } from "react";
// import SearchForm from "./SearchForm";
// import HelpModalstore from "./HelpModal-store";
// import CartCount from "../templaet1/cart-templaet/CartCount";
// import Image from "next/image";
// import Link from "next/link";
// import ThemeSwitcherBtn from "../../ThemeSwitcherBtn";
// import { User } from "lucide-react";
// import { useSession } from "next-auth/react";
// import UserAvatar from "./UserAvatar";
// import { getData } from "../../../lib/getData";
// import {
//   FaAngleDown,
//   FaTimes,
//   FaCouch,
//   FaTv,
//   FaTshirt,
//   FaShoePrints,
//   FaGlobe,

// } from "react-icons/fa";

// function CategoryDropdown({ primaryColor }) {
//   const [open, setOpen] = useState(false);
//   const toggleDropdown = () => setOpen((prev) => !prev);
//   const closeDropdown = () => setOpen(false);

//   return (
//     <div className="relative font-[sans-serif] w-max">
//       <button
//         type="button"
//         onClick={toggleDropdown}
//         className="px-6 py-3 rounded text-sm border-none outline-none flex items-center hover:text-neutral-500"
//         style={{ color: primaryColor }}
//       >
//         Select category
//         <FaAngleDown className="w-3 h-3 ml-3" />
//       </button>
//       {open && (
//         <ul className="absolute left-0 block shadow-lg bg-gray-50 mt-2 py-2 z-[1000] w-max rounded max-h-96 overflow-auto">
//           <li className="py-2 px-4 flex justify-end">
//             <button onClick={closeDropdown}>
//               <FaTimes className="w-4 h-4" />
//             </button>
//           </li>
//           <li className="py-3 px-6 hover:bg-gray-100 text-sm cursor-pointer flex justify-between items-center text-[#333]" onClick={closeDropdown}>
//             Furniture Store
//             <FaCouch className="w-4 h-4" />
//           </li>
//           <li className="py-3 px-6 hover:bg-gray-100 text-sm cursor-pointer flex justify-between items-center text-[#333]" onClick={closeDropdown}>
//             Electronic Store
//             <FaTv className="w-4 h-4" />
//           </li>
//           <li className="py-3 px-6 hover:bg-gray-100 text-sm cursor-pointer flex justify-between items-center text-[#333]" onClick={closeDropdown}>
//             Fashion Store
//             <FaTshirt className="w-4 h-4" />
//           </li>
//           <li className="py-3 px-6 hover:bg-gray-100 text-sm cursor-pointer flex justify-between items-center text-[#333]" onClick={closeDropdown}>
//             Shoes Store
//             <FaShoePrints className="w-4 h-4" />
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// }

// function AccountDropdown({ session, customization }) {
//   const [open, setOpen] = useState(false);
//   const toggleDropdown = () => setOpen((prev) => !prev);

//   return (
//     <div className="relative">
//       {session ? (
//         <UserAvatar user={session.user} customization={customization} />
//       ) : (
//         <Link href="/login" className="flex items-center text-sm text-gray-700 dark:text-gray-200 hover:underline">
//           <User className="w-5 h-5 mr-1" aria-label="تسجيل الدخول" />
//           <span>تسجيل الدخول</span>
//         </Link>
//       )}
//     </div>
//   );
// }

// function LanguageDropdown() {
//   const [open, setOpen] = useState(false);
//   const toggleDropdown = () => setOpen((prev) => !prev);
//   const closeDropdown = () => setOpen(false);

//   return (
//     <div className="relative">
//       <button type="button" onClick={toggleDropdown} className="flex items-center gap-2">
//         <FaGlobe className="w-5 h-5" />
//         <FaAngleDown className="w-3 h-3" />
//       </button>
//       {open && (
//         <ul className="absolute right-0 mt-2 py-2 w-32 bg-white dark:bg-slate-800 shadow-lg rounded z-50">
//           <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer" onClick={closeDropdown}>English</li>
//           <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer" onClick={closeDropdown}>العربية</li>
//         </ul>
//       )}
//     </div>
//   );
// }

// export default function Navbar({ slugDomain, customization = {} }) {
//   const { data: session, status } = useSession();
//   const [store, setStore] = useState(null);

//   useEffect(() => {
//     async function fetchStore() {
//       if (slugDomain) {
//         const storeData = await getData(`stores/store/${slugDomain}`);
//         setStore(storeData);
//       }
//     }
//     fetchStore();
//   }, [slugDomain]);

//   if (status === "loading") {
//     return <p className="text-center text-gray-500">جارِ التحميل...</p>;
//   }

//   return (
//     <header className="navbar fixed top-0 left-0 w-full z-50 bg-white dark:bg-slate-900 shadow-md">
//       <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 py-2">
//         <div className="flex items-center space-x-3">
//           <div className="relative w-14 h-14 rounded-full overflow-hidden border-2">
//             <Image src={store?.profileImageUrl || "/default-logo.png"} alt="شعار المتجر" fill style={{ objectFit: "cover" }} />
//           </div>
//           <h1 className="text-lg font-bold text-gray-800 dark:text-white">{store?.businessName || "اسم المتجر"}</h1>
//         </div>
//         <div className="flex items-center gap-4">
//           <CategoryDropdown primaryColor={customization.primaryColor || "#4CAF50"} />
//           <LanguageDropdown />
//           <AccountDropdown session={session} customization={customization} />
//         </div>
//         <div className="flex items-center rounded-full px-4 gap-4 w-full max-w-2xl">
//           <SearchForm customization={customization} />
//           <HelpModalstore customization={customization} />
//           <div id="navbar-cart" className="relative">
//           <CartCount slugDomain={slugDomain} customization={customization} />
//           </div>
//           <ThemeSwitcherBtn customization={customization} />
//         </div>
//       </div>
//       <div className="hidden md:flex mt-4 border-t justify-center border-gray-200 dark:border-gray-800 pt-2">
//         <nav className="flex space-x-8 justify-center m-2 space-x-reverse">
//           <Link href="/categories/electronics" className="text-gray-700 ml-1 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
//             الإلكترونيات
//           </Link>
//           <Link href="/categories/fashion" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
//             الأزياء
//           </Link>
//           <Link href="/categories/home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
//             المنزل
//           </Link>
//           <Link href="/categories/beauty" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
//             الجمال والعناية
//           </Link>
//           <Link href="/categories/sports" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
//             الرياضة
//           </Link>
//           <Link href="/categories/toys" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
//             الألعاب
//           </Link>
//           <Link href="/categories/grocery" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
//             البقالة
//           </Link>
//         </nav>
//       </div>

//       {/* القائمة المنسدلة لأجهزة الجوال */}
//       <div className="md:hidden mt-4 bg-white dark:bg-gray-900 py-2 rounded-lg shadow-lg">
//         <nav className="flex flex-col space-y-2">
//           <Link href="/categories" className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
//             التصنيفات
//           </Link>
//           <Link href="/offers" className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
//             العروض
//           </Link>
//           <Link href="/new" className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
//             وصل حديثاً
//           </Link>
//           <Link href="/account" className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
//             حسابي
//           </Link>
//           <Link href="/favorites" className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
//             المفضلة
//           </Link>
    
//         </nav>
//       </div>
//     </header>
//   );
// }
















// "use client";

// import React, { useEffect, useState } from "react";
// import SearchForm from "./SearchForm";
// import HelpModalstore from "./HelpModal-store";
// import CartCount from "../templaet1/cart-templaet/CartCount";
// import Image from "next/image";
// import Link from "next/link";
// import ThemeSwitcherBtn from "../../ThemeSwitcherBtn";
// import { User, Sun, Moon } from "lucide-react";
// import { useSession } from "next-auth/react";
// import UserAvatar from "./UserAvatar";
// import { getData } from "../../../lib/getData";
// import {
//   FaAngleDown,
//   FaTimes,
//   FaCouch,
//   FaTv,
//   FaTshirt,
//   FaShoePrints,
//   FaGlobe,
// } from "react-icons/fa";

// export default function Navbar({ slugDomain, customization = {} }) {
//   const { data: session, status } = useSession();
//   const [store, setStore] = useState(null);
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     async function fetchStore() {
//       if (slugDomain) {
//         const storeData = await getData(`stores/store/${slugDomain}`);
//         setStore(storeData);
//       }
//     }
//     fetchStore();
//   }, [slugDomain]);

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//     document.documentElement.classList.toggle("dark");
//   };

//   if (status === "loading") {
//     return <p className="text-center text-gray-500">جارِ التحميل...</p>;
//   }

//   return (
//     <header className="navbar fixed top-0 left-0 w-full z-50 bg-white dark:bg-slate-900 shadow-md">
//       <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 py-2">
//         <div className="flex items-center space-x-3">
//           <div className="relative w-14 h-14 rounded-full overflow-hidden border-2">
//             <Image src={store?.profileImageUrl || "/default-logo.png"} alt="شعار المتجر" fill style={{ objectFit: "cover" }} />
//           </div>
//           <h1 className="text-lg font-bold text-gray-800 dark:text-white">{store?.businessName || "اسم المتجر"}</h1>
//         </div>
//         <div className="flex items-center gap-4">
//           {/* <LanguageDropdown />
//           <AccountDropdown session={session} customization={customization} /> */}
//         </div>
//         <div className="flex items-center rounded-full px-4 gap-4 w-full max-w-2xl">
//           <SearchForm customization={customization} />
//           <HelpModalstore customization={customization} />
//           <CartCount slugDomain={slugDomain} customization={customization} />
//           <ThemeSwitcherBtn customization={customization} />
//         </div>
//       </div>

//       {/* القائمة العلوية لأجهزة الكمبيوتر */}
//       <div className="hidden md:flex mt-4 border-t justify-center border-gray-200 dark:border-gray-800 pt-2">
//         <nav className="flex space-x-8 justify-center space-x-reverse">
//           <Link href="/categories/electronics" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
//             الإلكترونيات
//           </Link>
//           <Link href="/categories/fashion" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
//             الأزياء
//           </Link>
//           <Link href="/categories/home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
//             المنزل
//           </Link>
//           <Link href="/categories/beauty" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
//             الجمال والعناية
//           </Link>
//           <Link href="/categories/sports" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
//             الرياضة
//           </Link>
//           <Link href="/categories/toys" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
//             الألعاب
//           </Link>
//           <Link href="/categories/grocery" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
//             البقالة
//           </Link>
//         </nav>
//       </div>

//       {/* القائمة المنسدلة لأجهزة الجوال */}
//       <div className="md:hidden mt-4 bg-white dark:bg-gray-900 py-2 rounded-lg shadow-lg">
//         <nav className="flex flex-col space-y-2">
//           <Link href="/categories" className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
//             التصنيفات
//           </Link>
//           <Link href="/offers" className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
//             العروض
//           </Link>
//           <Link href="/new" className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
//             وصل حديثاً
//           </Link>
//           <Link href="/account" className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
//             حسابي
//           </Link>
//           <Link href="/favorites" className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
//             المفضلة
//           </Link>
//           <button onClick={toggleTheme} className="flex items-center px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
//             {theme === "dark" ? (
//               <>
//                 <Sun className="h-5 w-5 ml-2" />
//                 <span>الوضع النهاري</span>
//               </>
//             ) : (
//               <>
//                 <Moon className="h-5 w-5 ml-2" />
//                 <span>الوضع الليلي</span>
//               </>
//             )}
//           </button>
//         </nav>
//       </div>
//     </header>
//   );
// }

// "use client";

// import React, { useEffect, useState } from "react";
// import SearchForm from "./SearchForm";
// import HelpModalstore from "./HelpModal-store";
// import CartCount from "../templaet1/cart-templaet/CartCount";
// import Image from "next/image";
// import Link from "next/link";
// import ThemeSwitcherBtn from "../../ThemeSwitcherBtn";
// import { User } from "lucide-react";
// import { useSession } from "next-auth/react";
// import UserAvatar from "./UserAvatar";
// import { getData } from "../../../lib/getData";

// export default function Navbar({ slugDomain, customization = {} }) {
//   // تخصيص الألوان والخطوط
//   const primaryColor = customization.primaryColor || "#4CAF50";
//   const secondaryColor = customization.secondaryColor || "#2C3E50";
//   const accentColor = customization.accentColor || "#FFC107";
//   const backgroundColor = customization.backgroundColor || "#FFFFFF";
//   const fontFamily = customization.fontFamily || "sans-serif";
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
//     return <p className="text-center text-gray-500">جارِ التحميل...</p>;
//   }

//   return (
//     <header className="navbar fixed top-0 left-0 w-full z-50 bg-white dark:bg-slate-900 shadow-md">
//       <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 py-2">
//         {/* شعار المتجر */}
//         <div className="flex items-center space-x-3">
//           <div
//             className="relative w-14 h-14 rounded-full overflow-hidden border-2"
//             style={{ borderColor: primaryColor }}
//           >
//             <Image
//               src={store?.profileImageUrl || "/default-logo.png"}
//               alt="شعار المتجر"
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

//         {/* شريط البحث والإجراءات */}
//         <div className="flex items-center rounded-full px-4 gap-4 w-full max-w-2xl">
//           {/* البحث */}
//           <div className="flex-grow">
//             <SearchForm customization={customization} />
//           </div>

//           {/* عناصر التحكم */}
//           <div className="flex items-center gap-4">
//             {status === "unauthenticated" ? (
//               <Link
//                 href="/login"
//                 className="flex items-center text-sm text-gray-700 dark:text-gray-200 hover:underline"
//               >
//                 <User className="w-5 h-5 mr-1" aria-label="تسجيل الدخول" />
//                 <span>تسجيل الدخول</span>
//               </Link>
//             ) : (
//               <UserAvatar user={session?.user}  customization={customization}/>
//             )}
//             <HelpModalstore customization={customization} />
//             <CartCount slugDomain={slugDomain} customization={customization} />
//             <ThemeSwitcherBtn customization={customization} />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }


//  "use client";

// import React, { useEffect, useState, useCallback } from "react";
// import SearchForm from "./SearchForm";
// import HelpModalstore from "./HelpModal-store";
// import CartCount from "../templaet1/cart-templaet/CartCount";
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