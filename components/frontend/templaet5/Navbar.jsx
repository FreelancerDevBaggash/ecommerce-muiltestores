// "use client"

// import React, { useEffect, useState } from "react";
// import Link from "next/link"
// import { Search, ShoppingCart, User, Menu, X, Heart, Sun, Moon } from "lucide-react"
// import { useTheme } from "next-themes"
// import Image from "next/image"
// import { getData } from "../../../lib/getData";
// import { useSession } from "next-auth/react";
// import CartCount from "../CartCount";
// import HelpModalstore from "../templaet4/HelpModal-store";
// import ThemeSwitcherBtn from "../../ThemeSwitcherBtn";
// import UserAvatar from "./UserAvatar";
// export default function Navbar({ slugDomain, customization = {} ,storeData ={}, categories={} }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const { theme, setTheme } = useTheme()

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark")
//   }
//   const { data: session, status } = useSession();
//   const [store, setStore] = useState(null);
//   const [categories, setCategories] = useState([]);

 
//   if (status === "loading") {
//     return <p className="text-center text-gray-500">Loading...</p>;
//   }

//   return (
//     <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex items-center">
//           <div className="flex items-center space-x-3">
//           <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500">
//             <Image
//               src={store?.profileImageUrl || "/default-logo.png"}
//               alt="Store logo"
//               fill
//               style={{ objectFit: "cover" }}
//             />
//           </div>
//           <div>
//             <h1 className="text-lg font-bold text-gray-800 mr-2 dark:text-white">
//               {store?.businessName || "اسم المتجر"}
//             </h1>
//           </div>
//         </div>
//           </Link>

//           {/* Search Bar - Hidden on Mobile */}
//           <div className="hidden md:flex flex-1 mx-8">
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 placeholder="ابحث عن منتجات..."
//                 className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           {/* <div className="hidden md:flex items-center space-x-6 space-x-reverse">
//             <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
//               {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//             </button>
//             <Link href="/favorites" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
//               <Heart className="h-5 w-5" />
//             </Link>
//             <Link href="/account" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
//               <User className="h-5 w-5" />
//             </Link>
//             <Link href="/cart" className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
//               <CartCount slugDomain={slugDomain} customization = {customization} className="h-5 w-5" />
          
//             </Link>
//           </div> */}
//           <div className="flex items-center justify-between space-x-6 space-x-reverse">
//   {/* الجزء الأول: عناصر ثابتة */}
//   <div className="hidden md:flex items-center space-x-6 space-x-reverse">

//     <Link
//       href="/favorites"
//       className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
//     >
//       <Heart className="h-5 w-5" />
//     </Link>
   
//   </div>

//   {/* الجزء الثاني: تسجيل الدخول أو صورة المستخدم */}
//   <div className="flex items-center gap-4">
//     {status === "unauthenticated" ? (
//       <Link
//         href="/login"
//         className="flex items-center text-sm text-gray-700 dark:text-gray-200 hover:underline"
//       >
//         <User className="w-5 h-5 mr-1" />
//         <span>Login</span>
//       </Link>
//     ) : (
//       <UserAvatar user={session?.user} />
//     )}

//     {/* Help Modal and ThemeSwitcherBtn */}
//     {/* <HelpModalstore customization={customization} /> */}
//     <CartCount slugDomain={slugDomain} customization={customization} />
//     <ThemeSwitcherBtn customization={customization} />
//   </div>
// </div>


//           {/* Mobile Menu Button */}
//           <div className="flex md:hidden items-center space-x-4 space-x-reverse">
//             <Link href="/cart" className="relative p-2">
//               <CartCount slugDomain={slugDomain} customization = {customization} className="h-5 w-5" />
      
//             </Link>
//             <button onClick={toggleMenu} className="p-2">
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Search - Visible on Mobile */}
//         <div className="mt-4 md:hidden">
//           <div className="relative w-full">
//             <input
//               type="text"
//               placeholder="ابحث عن منتجات..."
//               className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden mt-4 bg-white dark:bg-gray-900 py-2 rounded-lg shadow-lg">
//             <nav className="flex flex-col space-y-2">
//               <Link
//                 href="/categories"
//                 className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
//               >
//                 التصنيفات
//               </Link>
//               <Link
//                 href="/offers"
//                 className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
//               >
//                 العروض
//               </Link>
//               <Link
//                 href="/new"
//                 className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
//               >
//                 وصل حديثاً
//               </Link>
//               <Link
//                 href="/account"
//                 className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
//               >
//                 حسابي
//               </Link>
//               <Link
//                 href="/favorites"
//                 className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
//               >
//                 المفضلة
//               </Link>
//               <button
//                 onClick={toggleTheme}
//                 className="flex items-center px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
//               >
//                 {theme === "dark" ? (
//                   <>
//                     <Sun className="h-5 w-5 ml-2" />
//                     <span>الوضع النهاري</span>
//                   </>
//                 ) : (
//                   <>
//                     <Moon className="h-5 w-5 ml-2" />
//                     <span>الوضع الليلي</span>
//                   </>
//                 )}
//               </button>
//             </nav>
//           </div>
//         )}

//         {/* Categories Navigation */}
//         <div className="hidden md:flex mt-4 justify-center  border-t border-gray-200 dark:border-gray-800 pt-2">
//           <nav className="flex space-x-8  justify-center space-x-reverse">
//             <Link
//               href="/categories/electronics"
//               className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
//             >
//               الإلكترونيات
//             </Link>
//             <Link
//               href="/categories/fashion"
//               className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
//             >
//               الأزياء
//             </Link>
//             <Link
//               href="/categories/home"
//               className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
//             >
//               المنزل
//             </Link>
//             <Link
//               href="/categories/beauty"
//               className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
//             >
//               الجمال والعناية
//             </Link>
//             <Link
//               href="/categories/sports"
//               className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
//             >
//               الرياضة
//             </Link>
//             <Link
//               href="/categories/toys"
//               className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
//             >
//               الألعاب
//             </Link>
//             <Link
//               href="/categories/grocery"
//               className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
//             >
//               البقالة
//             </Link>
//           </nav>
//         </div>
//       </div>
//     </header>
//   )
// }


// "use client";

// import React, { useState, useCallback } from "react";
// import Link from "next/link";
// import { Search, ShoppingCart, User, Menu, X, Heart, Sun, Moon } from "lucide-react";
// import { useTheme } from "next-themes";
// import Image from "next/image";
// import { useSession } from "next-auth/react";
// import CartCount from "../CartCount";
// import ThemeSwitcherBtn from "../../ThemeSwitcherBtn";
// import UserAvatar from "./UserAvatar";

// export default function Navbar({
//   slugDomain,
//   customization = {},
//   storeData = {},
//   categoriesData = [],
// }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { theme, setTheme } = useTheme();
//   const { data: session, status } = useSession();

//   // // قيم التخصيص مع افتراضيات
//   // const {
//   //   primaryColor = "#4CAF50",
//   //   secondaryColor = "#2C3E50",
//   //   accentColor = "#FFC107",
//   //   backgroundColor = "#FFFFFF",
//   //   darkBackground = "#1E293B",
//   //   fontFamily = "sans-serif",
//   // } = customization;
//    // إعدادات التخصيص مع قيم افتراضية
//    const primaryColor = customization?.primaryColor || "#4CAF50";
//    const secondaryColor = customization?.secondaryColor || "#2C3E50";
//    const accentColor = customization?.accentColor || "#FFC107";
//    const backgroundColor = customization?.backgroundColor || "#FFFFFF";
//    const darkBackground = customization?.darkBackground || "#1E293B";
//    const fontFamily = customization?.fontFamily || "sans-serif";
 

//   const currentBackground = theme === "dark" ? darkBackground : backgroundColor;

//   // دوال التبديل باستخدام useCallback
//   const toggleMenu = useCallback(() => {
//     setIsMenuOpen((prev) => !prev);
//   }, []);

//   const toggleTheme = useCallback(() => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   }, [theme, setTheme]);

//   // استخدام بيانات المتجر والأقسام الممررة كـ props
//   const store = storeData;
//   const categories = categoriesData;

//   // if (status === "loading") {
//   //   return <p className="text-center text-gray-500">Loading...</p>;
//   // }

//   return (
//     <header
//       className="sticky top-0 z-50 shadow-md"
//       style={{ backgroundColor: currentBackground, fontFamily }}
//     >
//       <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//         {/* شعار المتجر */}
//         <Link href={`${slugDomain}/`} className="flex items-center">
//           <div className="flex items-center space-x-3">
//             <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500">
//               <Image
//                 src={store?.profileImageUrl || "/default-logo.png"}
//                 alt="Store logo"
//                 fill
//                 style={{ objectFit: "cover" }}
//               />
//             </div>
//             <div>
//               <h1 className="text-lg font-bold text-gray-800 dark:text-white">
//                 {store?.businessName || "اسم المتجر"}
//               </h1>
//             </div>
//           </div>
//         </Link>

//         {/* شريط البحث (ظاهر على سطح المكتب) */}
//         <div className="hidden md:flex flex-1 mx-8">
//           <div className="relative w-full">
//             <input
//               type="text"
//               placeholder="ابحث عن منتجات..."
//               className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//           </div>
//         </div>

//         {/* عناصر التنقل والوظائف الإضافية */}
//         <div className="flex items-center justify-between space-x-6">
//           <div className="hidden md:flex items-center space-x-6">
//             <Link
//               href="/favorites"
//               className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
//             >
//               <Heart className="h-5 w-5" />
//             </Link>
//           </div>
//           <div className="flex items-center gap-4">
//             {status === "unauthenticated" ? (
//               <Link
//                 href={`${slugDomain}/loginCustomer`}
//                 className="flex items-center text-sm text-gray-700 dark:text-gray-200 hover:underline"
//               >
//                 <User className="w-5 h-5 mr-1" />
//                 <span>Login</span>
//               </Link>
//             ) : (
//               <UserAvatar user={session?.user} />
//             )}
//             <CartCount slugDomain={slugDomain} customization={customization} />
//             <ThemeSwitcherBtn customization={customization} />
//           </div>
//         </div>

//         {/* زر القائمة في الجوال */}
//         <div className="flex md:hidden items-center space-x-4">
//           <Link href="/cart" className="relative p-2">
//             <CartCount slugDomain={slugDomain} customization={customization} />
//           </Link>
//           <button onClick={toggleMenu} className="p-2">
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {/* البحث في الجوال */}
//       <div className="md:hidden px-4">
//         <div className="mt-4">
//           <div className="relative w-full">
//             <input
//               type="text"
//               placeholder="ابحث عن منتجات..."
//               className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//           </div>
//         </div>
//         {isMenuOpen && (
//           <div className="mt-4 bg-white dark:bg-gray-900 py-2 rounded-lg shadow-lg">
//             <nav className="flex flex-col space-y-2">
//               <Link
//                 href="/categories"
//                 className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
//               >
//                 التصنيفات
//               </Link>
//               <Link
//                 href="/offers"
//                 className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
//               >
//                 العروض
//               </Link>
//               <Link
//                 href="/new"
//                 className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
//               >
//                 وصل حديثاً
//               </Link>
//               <Link
//                 href="/account"
//                 className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
//               >
//                 حسابي
//               </Link>
//               <Link
//                 href="/favorites"
//                 className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
//               >
//                 المفضلة
//               </Link>
//               <button
//                 onClick={toggleTheme}
//                 className="flex items-center px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
//               >
//                 {theme === "dark" ? (
//                   <>
//                     <Sun className="h-5 w-5 ml-2" />
//                     <span>الوضع النهاري</span>
//                   </>
//                 ) : (
//                   <>
//                     <Moon className="h-5 w-5 ml-2" />
//                     <span>الوضع الليلي</span>
//                   </>
//                 )}
//               </button>
//             </nav>
//           </div>
//         )}
//       </div>

//       {/* روابط الأقسام - ظاهر على سطح المكتب */}
//       <div className="hidden md:flex mt-4 justify-center border-t border-gray-200 dark:border-gray-800 pt-2">
//         <nav className="flex space-x-8">
//           {categories &&
//             categories.map((category) => (
//               <Link
//                 key={category.id}
//                 href={`${slugDomain}/categories/${category.slug}`}
//                 className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
//               >
//                 {category.title}
//               </Link>
//             ))}
//         </nav>
//       </div>
//     </header>
//   );
// }
// "use client";

// import React, { useState, useCallback } from "react";
// import Link from "next/link";
// import { Search, ShoppingCart, User, Menu, X, Heart, Sun, Moon } from "lucide-react";
// import { useTheme } from "next-themes";
// import Image from "next/image";
// import { useSession } from "next-auth/react";
// import CartCount from "../CartCount";
// import ThemeSwitcherBtn from "../../ThemeSwitcherBtn";
// import UserAvatar from "./UserAvatar";

// export default function Navbar({
//   slugDomain,
//   customization = {},
//   storeData = {},
//   categoriesData = [],
// }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { theme, setTheme } = useTheme();
//   const { data: session, status } = useSession();

//   // إعدادات التخصيص مع قيم افتراضية
//   const primaryColor = customization?.primaryColor || "#4CAF50";
//   const secondaryColor = customization?.secondaryColor || "#2C3E50";
//   const accentColor = customization?.accentColor || "#FFC107";
//   const backgroundColor = customization?.backgroundColor || "#FFFFFF";
//   const darkBackground = customization?.darkBackground || "#1E293B";
//   const fontFamily = customization?.fontFamily || "sans-serif";

//   const currentBackground = theme === "dark" ? darkBackground : backgroundColor;

//   // دوال التبديل باستخدام useCallback
//   const toggleMenu = useCallback(() => {
//     setIsMenuOpen((prev) => !prev);
//   }, []);

//   const toggleTheme = useCallback(() => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   }, [theme, setTheme]);

//   // استخدام بيانات المتجر والأقسام الممررة كـ props
//   const store = storeData;
//   const categories = categoriesData;

//   return (
//     <header
//       className="sticky top-0 z-50 shadow-md  bg-white dark:bg-gray-900"
//       // style={{ backgroundColor: currentBackground, fontFamily }}
//     >
//       <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//         {/* شعار المتجر */}
//         <Link href={`${slugDomain}/`} className="flex items-center">
//           <div className="flex items-center space-x-3">
//             <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500">
//               <Image
//                 src={store?.profileImageUrl || "/default-logo.png"}
//                 alt="Store logo"
//                 fill
//                 style={{ objectFit: "cover" }}
//               />
//             </div>
//             <div>
//               <h1 className="text-lg font-bold text-gray-800 dark:text-white">
//                 {store?.businessName || "اسم المتجر"}
//               </h1>
//             </div>
//           </div>
//         </Link>

//         {/* شريط البحث (ظاهر على سطح المكتب) */}
//         <div className="hidden md:flex flex-1 mx-8">
//           <div className="relative w-full">
//             <input
//               type="text"
//               placeholder="ابحث عن منتجات..."
//               className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//           </div>
//         </div>

//         {/* عناصر التنقل والوظائف الإضافية */}
//         <div className="flex items-center justify-between space-x-6">
//           <div className="hidden md:flex items-center space-x-6">
//             <Link
//               href="/favorites"
//               className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
//             >
//               <Heart className="h-5 w-5" />
//             </Link>
//           </div>
//           <div className="flex items-center gap-4">
//             {status === "unauthenticated" ? (
//               <Link
//                 href={`${slugDomain}/loginCustomer`}
//                 className="flex items-center text-sm text-gray-700 dark:text-gray-200 hover:underline"
//               >
//                 <User className="w-5 h-5 mr-1" />
//                 <span>Login</span>
//               </Link>
//             ) : (
//               <UserAvatar user={session?.user} />
//             )}
//             <CartCount slugDomain={slugDomain} customization={customization} />
//             <ThemeSwitcherBtn customization={customization} />
//           </div>
//         </div>

//         {/* زر القائمة في الجوال */}
//         <div className="flex md:hidden items-center space-x-4">
//           <Link href="/cart" className="relative p-2">
//             <CartCount slugDomain={slugDomain} customization={customization} />
//           </Link>
//           <button onClick={toggleMenu} className="p-2">
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {/* البحث في الجوال */}
//       <div className="md:hidden px-4">
//         <div className="mt-4">
//           <div className="relative w-full">
//             <input
//               type="text"
//               placeholder="ابحث عن منتجات..."
//               className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//           </div>
//         </div>
//         {isMenuOpen && (
//           <div className="mt-4 bg-white dark:bg-gray-900 py-2 rounded-lg shadow-lg">
//             <nav className="flex flex-col space-y-2">
        
//             </nav>
//           </div>
//         )}
//       </div>

//       {/* روابط الأقسام - ظاهر على الهاتف */}


//       {/* روابط الأقسام - ظاهر على سطح المكتب */}
//       <div className="hidden md:flex mt-2 justify-center border-t border-gray-200 dark:border-gray-800 pt-2">
//         <nav className="flex space-x-8">
//           {categories &&
//             categories.map((category) => (
//               <Link
//                 key={category.id}
//                 href={`${slugDomain}/categories/${category.slug}`}
//                 className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
//               >
//                 {category.title}
//               </Link>
//             ))}
//         </nav>
//       </div>
//     </header>
//   );
// }
// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { Search, ShoppingCart, User, Menu, X, Heart } from "lucide-react";
// import { useTheme } from "next-themes";
// import Image from "next/image";
// import { useSession } from "next-auth/react";
// import CartCount from "../CartCount";
// import ThemeSwitcherBtn from "../../ThemeSwitcherBtn";
// import UserAvatar from "./UserAvatar";

// // مكونات معادة الاستخدام
// const SearchBar = () => (
//   <div className="relative w-full">
//     <input
//       type="text"
//       placeholder="ابحث عن منتجات..."
//       className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//     />
//     <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//   </div>
// );

// const CategoriesNav = ({ categories, slugDomain, isMobile }) => (
//   <nav className={`flex ${isMobile ? 'flex-col space-y-2' : 'space-x-8'}`}>
//     {categories?.map((category) => (
//       <Link
//         key={category.id}
//         href={`${slugDomain}/categories/${category.slug}`}
//         className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
//       >
//         {category.title}
//       </Link>
//     ))}
//   </nav>
// );

// const UserAuth = ({ slugDomain, session, status }) => (
//   <>
//     {status === "unauthenticated" ? (
//       <Link
//         href={`${slugDomain}/loginCustomer`}
//         className="flex items-center text-sm text-gray-700 dark:text-gray-200 hover:underline"
//       >
//         <User className="w-5 h-5 mr-1" />
//         <span>تسجيل الدخول</span>
//       </Link>
//     ) : (
//       <UserAvatar user={session?.user} />
//     )}
//   </>
// );

// export default function Navbar({
//   slugDomain,
//   customization = {},
//   storeData = {},
//   categoriesData = [],
// }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { theme } = useTheme();
//   const { data: session, status } = useSession();

//   // إعدادات التخصيص
//   const currentBackground = theme === "dark" 
//     ? customization?.darkBackground || "#1E293B" 
//     : customization?.backgroundColor || "#FFFFFF";

//   const toggleMenu = useEffect(() => setIsMenuOpen((prev) => !prev), []);

//   return (
//     <header className="sticky  top-0 z-50 shadow-md bg-white dark:bg-gray-900" >
//       <div className="container">
//       <div className=" mx-auto px-4 py-4 flex items-center justify-between">
//         {/* شعار المتجر */}
//         <Link href={`${slugDomain}/`} className="flex items-center space-x-3">
//           <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500">
//             <Image
//               src={storeData?.profileImageUrl || "/default-logo.png"}
//               alt="Store logo"
//               fill
//               style={{ objectFit: "cover" }}
//             />
//           </div>
//           <h1 className="text-lg font-arabic mr-2 text-gray-800 dark:text-white">
//             {storeData?.businessName || "اسم المتجر"}
//           </h1>
//         </Link>

//         {/* شريط البحث لسطح المكتب */}
//         <div className="hidden md:flex flex-1 mx-8">
//           <SearchBar />
//         </div>

//         {/* عناصر التنقل لسطح المكتب */}
//         <div className="hidden md:flex items-center gap-6">
//           <Link href="/favorites" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
//             <Heart className="h-5 w-5" />
//           </Link>
//           <UserAuth slugDomain={slugDomain} session={session} status={status} />
//           <CartCount slugDomain={slugDomain} customization={customization} />
//           <ThemeSwitcherBtn customization={customization} />
//         </div>

//         {/* نسخة الجوال */}
//         <div className="flex md:hidden items-center gap-4">
//           <CartCount slugDomain={slugDomain} customization={customization} />
//           <button onClick={toggleMenu} className="p-2">
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {/* القائمة المنسدلة للجوال */}
//       {isMenuOpen && (
//         <div className="md:hidden px-4 pb-4">
//           <div className="mt-2">
//             <SearchBar />
//           </div>
          
//           <div className="mt-4 bg-white px-4  text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:bg-gray-900 py-2 rounded-lg shadow-lg">
//             <CategoriesNav
//               categories={categoriesData}
//               slugDomain={slugDomain}
//               isMobile={true}
//             />
            
//             <div className="flex flex-col space-y-3 mt-4 px-2">
//               <Link href="/favorites" className="flex items-center p-2  hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
//                 <Heart className="h-5 w-5 mr-2" />
//                 <span>المفضلة</span>
//               </Link>
//               <div className="flex items-center p-2">
//                 <UserAuth slugDomain={slugDomain} session={session} status={status} />
//               </div>
//               <div className="p-2">
//                 <ThemeSwitcherBtn customization={customization} />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* أقسام المتجر لسطح المكتب */}
//       <div className="hidden md:flex justify-center border-t border-gray-200 dark:border-gray-800 py-3">
//         <CategoriesNav
//           categories={categoriesData}
//           slugDomain={slugDomain}
//           isMobile={false}
//         />
//       </div>
//       </div>
//     </header>
//   );
// }
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu, X, Heart } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useSession } from "next-auth/react";
import CartCount from "../CartCount";
import ThemeSwitcherBtn from "../../ThemeSwitcherBtn";
import UserAvatar from "./UserAvatar";
import SearchForm from "./SearchForm";

// مكونات معادة الاستخدام
const SearchBar = () => (
  <div className="relative w-full">
    <input
      type="text"
      placeholder="ابحث عن منتجات..."
      className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
  </div>
);

const CategoriesNav = ({ categories, slugDomain, isMobile }) => (
  <nav className={`flex ${isMobile ? 'flex-col space-y-2' : 'space-x-8'}`}>
    {categories?.map((category) => (
      <Link
        key={category.id}
        href={`/${slugDomain}/categories/${category.slug}`}
        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
      >
        {category.title}
      </Link>
    ))}
  </nav>
);

const UserAuth = ({ slugDomain, session, status }) => (
  <>
    {status === "unauthenticated" ? (
      <Link
        href={`/${slugDomain}/loginCustomer`}
        className="flex items-center text-sm text-gray-700 dark:text-gray-200 hover:underline"
      >
        <User className="w-5 h-5 mr-1" />
        <span>تسجيل الدخول</span>
      </Link>
    ) : (
      <UserAvatar user={session?.user} />
    )}
  </>
);

export default function Navbar({
  slugDomain,
  customization = {},
  storeData = {},
  categoriesData = [],
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const { data: session, status } = useSession();

  // إعدادات التخصيص
  const currentBackground = theme === "dark" 
    ? customization?.darkBackground || "#1E293B" 
    : customization?.backgroundColor || "#FFFFFF";

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 shadow-md bg-white dark:bg-gray-900"  
>
      <div className="container ">
        <div className="py-4 flex items-center justify-between">
          {/* شعار المتجر */}
          <Link href={`/${slugDomain}`} className="flex items-center space-x-3">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500">
              <Image
                src={storeData?.profileImageUrl || "/default-logo.png"}
                alt="شعار المتجر"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h1 className="text-lg font-arabic mr-2 text-gray-800 dark:text-white">
              {storeData?.businessName || "اسم المتجر"}
            </h1>
          </Link>

          {/* شريط البحث لسطح المكتب */}
          <div className="hidden md:flex flex-1 mx-8">
            <SearchForm />
          </div>

          {/* عناصر التنقل لسطح المكتب */}
          <div className="hidden md:flex items-center gap-6">
            <Link href={`/${slugDomain}/wishlist`} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
              <Heart className="h-5 w-5" />
            </Link>
            <UserAuth slugDomain={slugDomain} session={session} status={status} />
            <CartCount slugDomain={slugDomain} customization={customization} />
            <ThemeSwitcherBtn customization={customization} />
          </div>

          {/* نسخة الجوال */}
          <div className="flex md:hidden items-center gap-4">
            <CartCount slugDomain={slugDomain} customization={customization} />
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* القائمة المنسدلة للجوال */}
        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4">
            <div className="mt-2">
              <SearchForm />
            </div>
            
            <div className="mt-4 bg-white px-4 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:bg-gray-900 py-2 rounded-lg shadow-lg">
              <CategoriesNav
                categories={categoriesData}
                slugDomain={slugDomain}
                isMobile={true}
              />
              
              <div className="flex flex-col space-y-3 mt-4 px-2">
                <Link href="/favorites" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                  <Heart className="h-5 w-5 mr-2" />
                  <span>المفضلة</span>
                </Link>
                <div className="flex items-center p-2">
                  <UserAuth slugDomain={slugDomain} session={session} status={status} />
                </div>
                <div className="p-2">
                  <ThemeSwitcherBtn customization={customization} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* أقسام المتجر لسطح المكتب */}
        <div className="hidden md:flex justify-center border-t border-gray-200 dark:border-gray-800 py-3">
          <CategoriesNav
            categories={categoriesData}
            slugDomain={slugDomain}
            isMobile={false}
          />
        </div>
      </div>
    </header>
  );
}
