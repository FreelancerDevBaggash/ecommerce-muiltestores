
// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Search, ShoppingCart, User, Menu, X, Heart } from "lucide-react";
// import { useTheme } from "next-themes";
// import Image from "next/image";
// // import { useSession } from "next-auth/react";
// import CartCount from "../CartCount";
// import ThemeSwitcherBtn from "../../ThemeSwitcherBtn";
// import UserAvatar from "./UserAvatar";
// import SearchForm from "./SearchForm";

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
//         href={`/${slugDomain}/categories/${category.slug}`}
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
//         href={`/${slugDomain}/loginCustomer`}
//         className="flex items-center text-sm text-gray-700 dark:text-gray-200 hover:underline"
//       >
//         <User className="w-5 h-5 mr-1" />
//         <span>تسجيل الدخول</span>
//       </Link>
//     ) : (
//       <UserAvatar  user={session?.user} slugDomain={slugDomain}  />
//     )}
//   </>
// );

// export default function Navbar({
//   slugDomain,
//   customization = {},
//   storeData = {},
//   categoriesData = [],
//   session, // أخذ الجلسة من الـ props
//   status,
// }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { theme } = useTheme();
//   // const { data: session, status } = getCustomerSession();
// console.log('mmmmmmm', session)
//   // إعدادات التخصيص
//   const currentBackground = theme === "dark" 
//     ? customization?.darkBackground || "#1E293B" 
//     : customization?.backgroundColor || "#FFFFFF";

//   const toggleMenu = () => setIsMenuOpen((prev) => !prev);

//   return (
//     <header className="sticky top-0 z-50 shadow-md bg-white dark:bg-gray-900"  
// >
//       <div className="container ">
//         <div className="py-4 flex items-center justify-between">
//           {/* شعار المتجر */}
//           <Link href={`/${slugDomain}`} className="flex items-center space-x-3">
//             <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500">
//               <Image
//                 src={storeData?.profileImageUrl || "/default-logo.png"}
//                 alt="شعار المتجر"
//                 fill
//                 style={{ objectFit: "cover" }}
//               />
//             </div>
//             <h1 className="text-lg font-arabic mr-2 text-gray-800 dark:text-white">
//               {storeData?.businessName || "اسم المتجر"}
//             </h1>
//           </Link>

//           {/* شريط البحث لسطح المكتب */}
//           <div className="hidden md:flex flex-1 mx-8">
//             <SearchForm slugDomain={slugDomain} customization={customization}   />
//           </div>

//           {/* عناصر التنقل لسطح المكتب */}
//           <div className="hidden md:flex items-center gap-6">
//             <Link href={`/${slugDomain}/wishlist`} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
//               <Heart className="h-5 w-5" />
//             </Link>
//             <UserAuth slugDomain={slugDomain} session={session} status={status} />
//             <CartCount slugDomain={slugDomain} customization={customization} />
//             <ThemeSwitcherBtn customization={customization} />
//           </div>

//           {/* نسخة الجوال */}
//           <div className="flex md:hidden items-center gap-4">
//             <CartCount slugDomain={slugDomain} customization={customization} />
//             <button onClick={toggleMenu} className="p-2">
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* القائمة المنسدلة للجوال */}
//         {isMenuOpen && (
//           <div className="md:hidden px-4 pb-4">
//             <div className="mt-2">
//               <SearchForm />
//             </div>
            
//             <div className="mt-4 bg-white px-4 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:bg-gray-900 py-2 rounded-lg shadow-lg">
//               <CategoriesNav
//                 categories={categoriesData}
//                 slugDomain={slugDomain}
//                 isMobile={true}
//               />
              
//               <div className="flex flex-col space-y-3 mt-4 px-2">
//                 <Link href="/favorites" className="flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
//                   <Heart className="h-5 w-5 mr-2" />
//                   <span>المفضلة</span>
//                 </Link>
//                 <div className="flex items-center p-2">
//                   <UserAuth slugDomain={slugDomain} session={session} status={status} />
//                 </div>
//                 <div className="p-2">
//                   <ThemeSwitcherBtn customization={customization} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* أقسام المتجر لسطح المكتب */}
//         {/* <div className="hidden md:flex justify-center border-t border-gray-200 dark:border-gray-800 py-3">
//           <CategoriesNav
//             categories={categoriesData}
//             slugDomain={slugDomain}
//             isMobile={false}
//           />
//         </div> */}
//       </div>
//     </header>
//   );
// }

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Heart, User, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import CartCount from "./cart-template/CartCount"
import ThemeSwitcherBtn from "../../ThemeSwitcherBtn"
import UserAvatar from "./UserAvatar"
import SearchForm from "./SearchForm"

export default function Navbar({ slugDomain, customization = {}, storeData = {}, categories = [], session, status }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [loading] = useState(false)
  const { theme } = useTheme()

  const primaryColor = customization?.primaryColor || "#4CAF50"
  const secondaryColor = customization?.secondaryColor || "#2C3E50"
  const accentColor = customization?.accentColor || "#FFC107"

  // تحديد حجم الشاشة
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const toggleMenu = () => setIsMenuOpen((v) => !v)

  // تنظيم الفئات والفئات الفرعية
  // const organizedCategories = categories.reduce((acc, category) => {
  //   if (!category.categoryId) {
  //     // هذه فئة رئيسية
  //     acc[category.id] = {
  //       ...category,
  //       subCategories: [],
  //     }
  //   }
  //   return acc
  // }, {})

  // // إضافة الفئات الفرعية إلى الفئات الرئيسية
  // categories.forEach((category) => {
  //   if (category.categoryId && organizedCategories[category.categoryId]) {
  //     organizedCategories[category.categoryId].subCategories.push(category)
  //   }
  // })

  // // تحويل الكائن إلى مصفوفة
  // const Categories = Object.values(organizedCategories)
  const Categories = categories

  return (
    <header className="sticky top-0 z-50 bg-white font-arabic dark:bg-gray-900 shadow-md transition-all duration-300">
      <div className="container mx-auto px-4">
        {/* الشريط العلوي */}
        <div className="py-3 flex items-center justify-between">
          {/* شعار واسم المتجر */}
          <Link href={`/${slugDomain}`} className="flex items-center gap-3">
            <div
              className="relative w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-300 hover:shadow-md"
              style={{ borderColor: primaryColor }}
            >
              <Image
                src={storeData.profileImageUrl || "/default-logo.png"}
                alt={storeData.businessName || "شعار المتجر"}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              {storeData.businessName || "اسم المتجر"}
            </h1>
          </Link>

          {/* شريط البحث (سطح المكتب) */}
          <div className="hidden lg:flex flex-1 mx-8 max-w-xl">
            <SearchForm slugDomain={slugDomain} customization={customization} />
          </div>

          {/* أيقونات المستخدم، المفضلة، العربة، والتحويل */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              href={`/${slugDomain}/wishlist`}
              className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              aria-label="المفضلة"
            >
              <Heart className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </Link>

            {status === "unauthenticated" ? (
              <Link
                href={`/${slugDomain}/loginCustomer`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              >
                <User className="w-4 h-4" />
                <span className="text-sm font-medium">تسجيل الدخول</span>
              </Link>
            ) : (
              <UserAvatar user={session?.user} status={status} slugDomain={slugDomain} customization={customization} />
            )}

            <CartCount slugDomain={slugDomain} customization={customization} />
            <ThemeSwitcherBtn customization={customization} />
          </div>

          {/* أيقونة قائمة الجوال */}
          <div className="flex lg:hidden items-center gap-4">
            <CartCount slugDomain={slugDomain} customization={customization} />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-100 font-arabic dark:hover:bg-gray-800 transition-all duration-200"
              aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* قائمة الفئات (سطح المكتب) */}
        <nav className="hidden lg:block border-t font-arabic border-gray-200 dark:border-gray-800">
          <ul className="flex justify-center  gap-8">
            {!loading &&
              Categories.map((category) => (
                <li key={category.id} className="relative group">
                <Link
                  href={`/${slugDomain}/category/${category.slug}`}
                  className="flex items-center gap-1 py-2 font-arabic text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  style={{ color: hoveredCategory === category.id ? primaryColor : "" }}
                >
                  <span className="font-medium">{category.title}</span>
                  {category.subCategories.length > 0 && (
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
              
                {category.subCategories.length > 0 && (
                  <div
                    className="
                      absolute top-full right-0 mt-1 font-arabic 
                      bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 min-w-[200px]
                      opacity-0 invisible transform translate-y-2
                      transition-all duration-200 z-20
                      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    "
                  >
                    {category.subCategories.map((subCat) => (
                      <Link
                        key={subCat.id}
                        href={`/${slugDomain}/category/${subCat.slug}`}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        {subCat.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              
              ))}
          </ul>
        </nav>

        {/* القائمة المنسدلة للجوال */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <SearchForm slugDomain={slugDomain} customization={customization} />

            <div className="mt-6 space-y-1">
              {!loading &&
                Categories.map((category) => (
                  <div key={category.id} className="border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/${slugDomain}/category/${category.slug}`}
                        className="block py-3 text-gray-800 dark:text-gray-200 font-medium"
                      >
                        {category.title}
                      </Link>

                      {category.subCategories.length > 0 && (
                        <button
                          onClick={() => setHoveredCategory(hoveredCategory === category.id ? null : category.id)}
                          className="p-2"
                          aria-label={`عرض الفئات الفرعية لـ ${category.title}`}
                        >
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${hoveredCategory === category.id ? "rotate-180" : ""}`}
                          />
                        </button>
                      )}
                    </div>

                    {/* الفئات الفرعية للجوال */}
                    {category.subCategories.length > 0 && hoveredCategory === category.id && (
                      <div className="pr-4 py-2 space-y-2 bg-gray-50 dark:bg-gray-800/50 rounded-md mb-2">
                        {category.subCategories.map((subCat) => (
                          <Link
                            key={subCat.id}
                            href={`/${slugDomain}/category/${subCat.slug}`}
                            className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                          >
                            {subCat.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </div>

            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <Link
                  href={`/${slugDomain}/wishlist`}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  <Heart className="h-5 w-5" />
                  <span>المفضلة</span>
                </Link>

                <ThemeSwitcherBtn customization={customization} />
              </div>

              {status === "unauthenticated" ? (
                <Link
                  href={`/${slugDomain}/loginCustomer`}
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-white font-medium"
                  style={{ backgroundColor: primaryColor }}
                >
                  <User className="w-4 h-4" />
                  <span>تسجيل الدخول</span>
                </Link>
              ) : (
                <Link
                  href={`/${slugDomain}/profile`}
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  <User className="w-4 h-4" />
                  <span>حسابي</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
