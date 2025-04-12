// import {getData} from '../../lib/getData'
// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'


// export default async function SidebarCategories({categoriesData}) {
//     // const categoriesData =await getData('categories');
//      // Only categories with Products
//      const categories = categoriesData.filter((category) => category.products.length > 0);
//      console.log(categories)
//   return (
//     <div className="sm:col-span-3 sm:block bg-white border 
//     border-gray-300 rounded-lg dark:bg-gray-700 
//     dark:border-gray-700 text-slate-800
//     ovreflow-hidden hidden" >
//    <h2 className='bg-slate-100 dark:bg-gray-800 py-3 px-6 font-semibold
//     border-b border-gray-300 text-slate-800 dark:border-gray-600 dark:text-slate-100'>
//       Shop By Category ({categories.length})
//    </h2>
//    <div className="py-3 px-6 h-[300px] overflow-y-auto
//    flex flex-col gap-2">
  
//      {
//       categories.length > 0 &&
//       categories.map((category, i)=>{
//           return(
//               <Link key={i} href={`/category/${category.slug}`} className='flex items-center gap-3
//               hover:bg-slate-50 duration-300 transition-all
//                dark:text-slate-300 dark:hover:bg-slate-600 rounded-md'>
//              <Image width={556} height={556} className='h-10 w-10 rounded-full
//              object-cover border border-lime-300'
//               src={category.imageUrl}
//               alt={category.title} />
//              <span className='text-sm'>{category.title}</span>
//              </Link>
//           )
//       })
//      }
     
//    </div>
//   </div>
//   )
// }
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function CategorySlider({ categories = [], customization = {} }) {
  const { theme } = useTheme();

  // إعدادات الألوان والخطوط (يمكن تعديلها أو تمريرها من خلال customization)
  const primaryColor = customization.primaryColor || "#4CAF50";
  const accentColor = customization.accentColor || "#FFC107";
  const lightBackground = customization.backgroundColor || "#FFFFFF";
  const darkBackground = customization.darkBackground || "#1E293B";
  const fontFamily = customization.fontFamily || "sans-serif";

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + categories.length) % categories.length
    );
  };

  return (
    <div
      className="mt-12 rounded-lg overflow-hidden mx-4 transition-shadow shadow-md dark:shadow-lg"
      style={{
        backgroundColor: theme === "dark" ? darkBackground : lightBackground,
        fontFamily,
      }}
    >
      {/* عنوان القسم */}
      <div className="flex justify-between items-center mb-4 px-6 py-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Shop By Category ({categories.length})
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Discover available categories
          </p>
        </div>
        <Link
          href="/categories"
          className="text-white rounded-md px-4 py-2 transition-all duration-300"
          style={{ backgroundColor: primaryColor }}
        >
          View All
        </Link>
      </div>

      {/* عرض الفئات كسلايدر أفقي */}
      <div className="flex justify-center gap-6 py-8 relative">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div
              className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 overflow-hidden rounded-full border-4 transition-all duration-300 cursor-pointer"
              style={{
                borderColor: index === currentIndex ? primaryColor : "#ccc",
                backgroundColor: "#fff",
                boxShadow:
                  index === currentIndex ? "0 4px 8px rgba(0, 0, 0, 0.3)" : "",
                transform: index === currentIndex ? "scale(1.1)" : "scale(1)",
              }}
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                className="w-full h-full object-cover"
                src={category.imageUrl}
                alt={category.title}
                width={128}
                height={128}
              />
            </div>
            <p
              className="text-center text-sm md:text-base font-medium dark:text-gray-300"
              style={{ color: index === currentIndex ? accentColor : "#666" }}
            >
              {category.title}
            </p>
          </div>
        ))}

        {/* زر التنقل للسابق */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full p-2 transition-all duration-300 hover:scale-110"
          style={{ backgroundColor: primaryColor, color: "white" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* زر التنقل للتالي */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full p-2 transition-all duration-300 hover:scale-110"
          style={{ backgroundColor: primaryColor, color: "white" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
