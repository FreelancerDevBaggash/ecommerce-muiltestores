// import React from 'react';
// import Link from 'next/link';
// import CategoryCarouselstore from './CategoryCarousel-store';

// export default function CategoryList({ category, isMarketPage, customization = {} }) {

//   const primaryColor = customization.primaryColor || '#4CAF50'; // اللون الأساسي
//   const secondaryColor = customization.secondaryColor || '#2C3E50'; // اللون الثانوي
//   const accentColor = customization.accentColor || '#FFC107'; // اللون المميز
//   const backgroundColor = customization.backgroundColor || '#FFFFFF'; // لون الخلفية
//   const fontFamily = customization.fontFamily || 'sans-serif'; // نوع الخط
//   const isActive = customization.isActive ?? true; // هل التخصيص مفعل؟
//   const categoryImages = [
//     '/images/image-2.jpg', // صورة الفئة
//   ];

//   return (
//     <div
//       className="bg-white border border-gray-300 rounded-lg dark:bg-gray-700 
//       dark:border-gray-700 text-slate-800 overflow-hidden mx-10 shadow-lg 
//       hover:shadow-2xl dark:shadow-lg dark:shadow-white/30 transition-shadow 
//       transform hover:-translate-y-2 duration-300"
//     >
//       {/* الصورة والعنوان */}
//       <div className="relative w-full h-12 border border-gray-300 rounded-lg shadow-xl">
//         <img
//           src={categoryImages[0]}
//           alt="Category Image"
//           className="object-cover w-full h-full absolute top-0 left-0 z-0 rounded-md"
//         />

//         {/* محتوى فوق الصورة */}
//         <div className="absolute w-full h-full flex justify-between items-center px-6 py-4 text-white z-10 bg-black/40 rounded-md">
//           <h2 className="text-2xl font-semibold">{category.title}</h2>
//           <Link
//             className="bg-lime-600 hover:bg-lime-800 duration-300 transition-all 
//             text-slate-50 rounded-md px-4 py-2" style={{ backgroundColor }}  
//             href={`/category/${category.slug}`}
//           >
//             See All
//           </Link>
//         </div>
//       </div>

//       {/* المنتجات في الكاروسيل */}
//       <div className="bg-white dark:bg-slate-700 p-4">
//         <CategoryCarouselstore isMarketPage={isMarketPage} products={category.products}   customization={customization}/>
//       </div>
//     </div>
//   );
// }


// import React from "react";
// import Link from "next/link";
// import CategoryCarouselstore from "./CategoryCarousel-store";
// import { useTheme } from "next-themes";

// export default function CategoryList({ category, isMarketPage, customization = {} }) {
//   // تخصيص الألوان والخطوط
//   const primaryColor = customization.primaryColor || "#4CAF50"; // اللون الأساسي
//   const secondaryColor = customization.secondaryColor || "#2C3E50"; // اللون الثانوي
//   const accentColor = customization.accentColor || "#FFC107"; // اللون المميز
//   const lightBackground = customization.backgroundColor || "#FFFFFF"; // لون الخلفية للوضع الفاتح
//   const darkBackground = customization.darkBackground || "#1E293B"; // لون الخلفية للوضع الداكن
//   const fontFamily = customization.fontFamily || "sans-serif"; // نوع الخط
//   const isActive = customization.isActive ?? true; // هل التخصيص مفعل؟
  
//   // صورة الفئة الافتراضية
//   const categoryImages = ["/images/image-2.jpg"];

//   return (
//     <div
//       className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden mx-10 shadow-lg 
//       hover:shadow-2xl dark:shadow-lg dark:shadow-white/30 transition-shadow transform hover:-translate-y-2 duration-300"
//       style={{ 
//         backgroundColor: theme === "dark" ? darkBackground : lightBackground, 
//         fontFamily 
//       }}
//     >
//       {/* الصورة والعنوان */}
//       <div className="relative w-full h-12 border border-gray-300 rounded-lg shadow-xl">
//         <img
//           src={categoryImages[0]}
//           alt="Category Image"
//           className="object-cover w-full h-full absolute top-0 left-0 z-0 rounded-md"
//         />

//         {/* تراكب فوق الصورة */}
//         <div
//           className="absolute w-full h-full flex justify-between items-center px-6 py-4 text-white z-10 
//           bg-black/40 dark:bg-black/50 rounded-md"
//         >
//           <h2 className="text-2xl font-semibold">{category.title}</h2>
//           <Link
//             className="rounded-md px-4 py-2 text-white transition-all duration-300"
//             href={`/category/${category.slug}`}
//             style={{
//               backgroundColor: primaryColor,
//               borderColor: secondaryColor,
//             }}
//           >
//             See All
//           </Link>
//         </div>
//       </div>

//       {/* المنتجات في الكاروسيل */}
//       <div
//         className="p-4"
//         style={{
//           backgroundColor: lightBackground,
//           color: secondaryColor,
//         }}
//       >
//         <CategoryCarouselstore
//           isMarketPage={isMarketPage}
//           products={category.products}
//           customization={customization}
//         />
//       </div>
//     </div>
//   );
// }


"use client";

import React from "react";
import Link from "next/link";
import CategoryCarouselstore from "./CategoryCarousel-store";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function CategoryList({ category, isMarketPage, customization = {} }) {
  const { theme } = useTheme();
  
  // تخصيص الألوان والخطوط
  const primaryColor = customization?.primaryColor || "#4CAF50";
  const secondaryColor = customization?.secondaryColor || "#2C3E50";
  const accentColor = customization?.accentColor || "#FFC107";
  const lightBackground = customization?.backgroundColor || "#FFFFFF";
  const darkBackground = customization?.darkBackground || "#1E293B";
  const fontFamily = customization?.fontFamily || "sans-serif";
  
  // استخدام صورة التصنيف أو الصورة الافتراضية
  const categoryImages = category?.image || "/images/image-2.jpg";

  return (
    <div className="flex flex-col items-center mx-10" style={{ fontFamily }}>
      {/* القسم العلوي مع الصورة والخلفية المتدرجة */}
      <div className="w-full h-24 relative overflow-hidden rounded-xl shadow-lg">
        <Image
          src={categoryImages}
          alt="Category Image"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
        <div 
          className="absolute inset-0  flex flex-row  mr-2 items-center justify-between"
          style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.6), transparent)" }}
        >
          <h2 className="text-2xl font-extrabold text-white mb-4">
            {category?.title}
          </h2>
          <Link href={`/category/${category?.slug}`}>
            <span
              className="px-6 py-2 border rounded-full text-lg transition-all duration-300 cursor-pointer"
              style={{ 
                borderColor: primaryColor, 
                color: primaryColor, 
                backgroundColor: "transparent" 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = primaryColor;
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = primaryColor;
              }}
            >
              Explore
            </span>
          </Link>
        </div>
      </div>

      {/* قسم الكاروسيل للمنتجات التابعة للتصنيف */}
      <div 
        className="w-full mt-6 p-4 rounded-xl shadow-md "
        style={{ 
          backgroundColor: theme === "dark" ? darkBackground : lightBackground, 
          color: secondaryColor 
        }}
      >
        <CategoryCarouselstore 
          isMarketPage={isMarketPage} 
          products={category?.products} 
          customization={customization} 
        />
      </div>
    </div>
  );
}

// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import CategoryCarouselstore from "./CategoryCarousel-store";
// import { useTheme } from "next-themes";
// import Image from "next/image";

// export default function CategoryList({ category, isMarketPage, customization = {} }) {
//   const { theme } = useTheme();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // تخصيص الألوان والخطوط
//   const primaryColor = customization.primaryColor || "#4CAF50"; 
//   const secondaryColor = customization.secondaryColor || "#2C3E50"; 
//   const accentColor = customization.accentColor || "#FFC107"; 
//   const lightBackground = customization.backgroundColor || "#FFFFFF"; 
//   const darkBackground = customization.darkBackground || "#1E293B"; 
//   const fontFamily = customization.fontFamily || "sans-serif"; 

//   // Default category image fallback logic
//   const categoryImages = category?.image || "/images/image-2.jpg";

//   return (
//     <div
//       className="border border-gray-300 dark:bg-slate-800 dark:border-gray-700 rounded-lg overflow-hidden mx-10 shadow-lg 
//       hover:shadow-2xl dark:shadow-lg dark:shadow-white/30 transition-shadow transform hover:-translate-y-2 duration-300"
//       style={{ 
//         backgroundColor: theme === "dark" ? darkBackground : lightBackground, 
//         fontFamily 
//       }}
//     >
//       {/* Image and title */}
//       <div className="relative w-full h-28 border border-gray-300 rounded-lg shadow-xl overflow-hidden">
//         <Image
//           src={categoryImages}
//           alt="Category Image"
//           layout="fill"
//           objectFit="cover"
//           className="rounded-md"
//         />

//         {/* Overlay over the image */}
//         <div
//           className="absolute w-full h-full flex  dark:bg-slate-800 justify-between items-center px-6 py-4 text-white z-10 
//           bg-black/40  rounded-md"     style={{ 
//             backgroundColor: theme === "dark" ? darkBackground : lightBackground, 
//             fontFamily 
//           }}
//         >
//           <h2 className="text-2xl font-semibold">{category?.title}</h2>
//           <Link
//             className="rounded-md px-4 py-2 text-white transition-all duration-300"
//             href={`/category/${category?.slug}`}
//             style={{ backgroundColor: primaryColor, borderColor: secondaryColor }}
//           >
//             See All
//           </Link>
//         </div>
//       </div>

//       {/* Products carousel */}
//       <div className="p-4" style={{ backgroundColor: lightBackground, color: secondaryColor }}>
//         <CategoryCarouselstore isMarketPage={isMarketPage} products={category?.products} customization={customization} />
//       </div>
//     </div>
//   );
// }

