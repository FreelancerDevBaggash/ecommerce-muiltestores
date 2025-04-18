// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import logo from '@/public/logo33.png'; // شعار المنصة
// import Link from "next/link";
// import ThemeSwitcherBtn from '@/components/ThemeSwitcherBtn';
// import { HiMenu, HiX } from "react-icons/hi"; // أيقونات القائمة المنسدلة

// const NavbarHome = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="bg-gradient-to-r dark:bg-slate-900 from-blue-800 to-purple-400 w-full sticky top-0 opacity-100 font-sans border-b border-gray-900 shadow-2xl z-50">
//       <div className="container mx-auto flex items-center justify-between px-3 py-3">
//         {/* الشعار */}
//         <div className="flex items-center dark:bg-slate-900 space-x-2">
//           <Link href="/">
//             <div className="flex items-center space-x-2 transform transition-transform duration-300 hover:scale-110">
//               <Image src={logo} alt="شعار المنصة" width={150} height={150} />
//             </div>
//           </Link>
//         </div>

//         {/* الروابط للأجهزة الكبيرة */}
//         <ul className="hidden lg:flex dark:text-slate-900 items-center space-x-6 rtl:space-x-reverse text-white font-bold">
//           {["الرئيسية", "التعليم +", "الحلول +", "القطاعات +", " سبيشل", "الأسعار"].map((item, index) => (
//             <li key={index} className="hover:text-blue-300 cursor-pointer transform transition-transform duration-300 hover:scale-110">
//               <Link href={`/${item.replace(/ \+/g, "").replace(/ /g, "-").toLowerCase()}`}>{item}</Link>
//             </li>
//           ))}
//         </ul>

//         {/* الأزرار للأجهزة الكبيرة */}
//         <div className="hidden lg:flex items-center dark:text-slate-900 space-x-4 rtl:space-x-reverse">
//           <Link href="/login">
//             <button className="text-white font-bold hover:text-teal-300 transform transition-transform duration-300 hover:scale-110">
//               تسجيل الدخول
//             </button>
//           </Link>
//           <span className="text-2xl text-white">|</span>
//           <Link href="/register-vendor">
//             <button className="bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-teal-300 transform transition-transform duration-300 hover:scale-110">
//               أنشئ متجرك مجانًا
//             </button>
//           </Link>
//           <ThemeSwitcherBtn />
//         </div>

//         {/* زر القائمة للأجهزة الصغيرة */}
//         <div className="lg:hidden flex items-center">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="text-white text-2xl focus:outline-none"
//           >
//             {isMenuOpen ? <HiX /> : <HiMenu />}
//           </button>
//         </div>
//       </div>

//       {/* قائمة منسدلة للأجهزة الصغيرة */}
//       {isMenuOpen && (
//         <div className="lg:hidden bg-blue-900 text-white font-bold py-4 px-6 space-y-4">
//           {["الرئيسية", "التعليم +", "الحلول +", "القطاعات +", "سلة سبيشل", "الأسعار"].map((item, index) => (
//             <Link
//               key={index}
//               href={`/${item.replace(/ \+/g, "").replace(/ /g, "-").toLowerCase()}`}
//               className="block hover:text-blue-300 transition"
//             >
//               {item}
//             </Link>
//           ))}
//           <Link href="/login">
//             <button className="w-full text-left text-white font-bold hover:text-teal-300">
//               تسجيل الدخول
//             </button>
//           </Link>
//           <Link href="/register-vendor">
//             <button className="w-full bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-teal-300">
//               أنشئ متجرك مجانًا
//             </button>
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavbarHome;
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/logo33.png"; // شعار المنصة
import Link from "next/link";
import ThemeSwitcherBtn from "@/components/ThemeSwitcherBtn";
import { HiMenu, HiX } from "react-icons/hi"; // أيقونات القائمة المنسدلة
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
const NavbarHome = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // تحديد التمرير عند 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{
        y: isScrolled ? 20 : 0, // يتحرك للأسفل عند التمرير
        opacity: 1,
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0  z-50  w-full transition-all duration-300 ${
        isScrolled
          ? "max-w-[100%] left-1/4  md:max-w-4xl bg-white shadow-lg rounded-full  "
          : ""
      }`}
    >
      {/* "bg-gradient-to-r from-blue-700 to-purple-600" */}
      <div className="container mx-auto flex items-center justify-between">
        {/* الشعار مع تأثير التحريك */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500 }}
          className="flex items-center space-x-2"
        >
          <Link href="/">
            <div className="flex items-center space-x-2 transform transition-transform duration-300">
              <Image src={logo} alt="شعار المنصة" width={160} height={160} />
            </div>
          </Link>
        </motion.div>

        {/* الروابط للأجهزة الكبيرة */}
        <ul
          className={`hidden lg:flex items-center space-x-6 rtl:space-x-reverse font-bold transition-all duration-300 ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
        >
          {["الرئيسية", "التعليم", "الحلول", "القطاعات", "سبيشل", "الأسعار"].map((item, index) => (
            <li key={index} className="hover:text-blue-300 cursor-pointer transform transition-transform duration-300 hover:scale-110">
              <Link href={`/${item.replace(/ \+/g, "").replace(/ /g, "-").toLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>

        {/* الأزرار للأجهزة الكبيرة */}
        <div className="hidden  lg:flex items-center space-x-4 rtl:space-x-reverse">
          <Link href="/login">
            <button
              className={`font-bold transform transition-transform duration-300 hover:scale-110 ${
                isScrolled ? "text-gray-900 mr-2  hover:text-blue-600 " : "text-white hover:text-teal-300"
              }`}
            >
              تسجيل الدخول
            </button>
          </Link>
          <span className={`text-2xl ${isScrolled ? "text-gray-700" : "text-white"}`}>|</span>
          <Link href="/register">
            <Button
              className={`py-2 px-4 p-2 rounded-full transition-all transform hover:scale-110 ${
                isScrolled ? "bg-primary text-white whitespace-nowrap flex-nowrap hover:bg-indigo-700" : "bg-indigo-500 text-white hover:bg-teal-300"
              }`}
            >
              أنشئ متجرك مجانًا
            </Button>
          </Link>
          <ThemeSwitcherBtn />
        </div>

        {/* زر القائمة للأجهزة الصغيرة */}
        <div className="lg:hidden flex items-center">
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`text-2xl focus:outline-none transition-all ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </Button>
        </div>
      </div>

      {/* قائمة منسدلة للأجهزة الصغيرة */}
      {isMenuOpen && (
        <div className="lg:hidden bg-blue-900 text-white font-bold py-4 px-6 space-y-4">
          {["الرئيسية", "التعليم", "الحلول", "القطاعات", "سبيشل", "الأسعار"].map((item, index) => (
            <Link
              key={index}
              href={`/${item.replace(/ \+/g, "").replace(/ /g, "-").toLowerCase()}`}
              className="block hover:text-blue-300 transition"
            >
              {item}
            </Link>
          ))}
          <Link href="/login">
            <Button className="w-full text-left font-bold hover:text-teal-300">تسجيل الدخول</Button>
          </Link>
          <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  className="bg-primary text-white px-5 py-2 rounded-lg transition-all shadow-md hover:bg-indigo-700"
>
  <Link href="/register-vendor" className="flex flex-col items-center">
    <span className="w-full bg-primary text-white py-2 px-4 rounded-full hover:bg-teal-300">
      أنشئ متجرك مجانًا
    </span>
    <span>Get Template</span>
  </Link>
</motion.button>

          {/* <Link href="/register-vendor">
            <button className="w-full bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-teal-300">
              أنشئ متجرك مجانًا
            </button>
          </Link> */}
        </div>
      )}
    </motion.nav>
  );
};

export default NavbarHome;