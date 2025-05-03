
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu, X, Heart } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
// import { useSession } from "next-auth/react";
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
      <UserAvatar  user={session?.user} slugDomain={slugDomain}  />
    )}
  </>
);

export default function Navbar({
  slugDomain,
  customization = {},
  storeData = {},
  categoriesData = [],
  session, // أخذ الجلسة من الـ props
  status,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  // const { data: session, status } = getCustomerSession();
console.log('mmmmmmm', session)
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
            <SearchForm slugDomain={slugDomain} customization={customization}   />
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
        {/* <div className="hidden md:flex justify-center border-t border-gray-200 dark:border-gray-800 py-3">
          <CategoriesNav
            categories={categoriesData}
            slugDomain={slugDomain}
            isMobile={false}
          />
        </div> */}
      </div>
    </header>
  );
}
