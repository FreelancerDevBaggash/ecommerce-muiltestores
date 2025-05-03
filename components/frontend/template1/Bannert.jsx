// "use client";

// import React, { useState } from 'react';
// import Link from 'next/link';

// export default function Bannert( {  customization = {} }) {

//   const primaryColor = customization.primaryColor || '#4CAF50'; // اللون الأساسي
//   const secondaryColor = customization.secondaryColor || '#2C3E50'; // اللون الثانوي
//   const accentColor = customization.accentColor || '#FFC107'; // اللون المميز
//   const backgroundColor = customization.backgroundColor || '#FFFFFF'; // لون الخلفية
//   const fontFamily = customization.fontFamily || 'sans-serif'; // نوع الخط
//   const isActive = customization.isActive ?? true; // هل التخصيص مفعل؟
//   const categories = [
//     { name: "سماعات أذن", image: "/images/image-2.jpg", products: 150 },
//     { name: "أجهزة لابتوب", image: "/images/image-3.jpg", products: 150 },
//     { name: "سماعات", image: "/images/image-4.jpg", products: 150 },
//     { name: "ساعات رقمية", image: "/images/image-6.jpg", products: 150 },
//     { name: "موبايلات", image: "/images/image-7.jpg", products: 150 },
//     { name: "شاشات كمبيوتر", image: "/images/image-8.jpg", products: 150 },
//     { name: "شاشات كمبيوتر", image: "/images/image-8.jpg", products: 150 },

//     { name: "شاشات كمبيوتر", image: "/images/image-8.jpg", products: 150 },

//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex(
//       (prevIndex) =>
//         (prevIndex - 1 + categories.length) % categories.length
//     );
//   };

//   return (
//     <div
//       className="mt-12 rounded-lg dark:bg-gray-700 dark:border-gray-700 text-slate-800
//         overflow-hidden mx-10 dark:shadow-lg dark:shadow-white/30 transition-shadow"
//     >
//       <div className="flex justify-between items-center mb-1">
//         <div>
//           <h2 className="text-2xl font-bold text-gray-800 ml-5 mt-2">Shop by Categories</h2>
//           <p className="text-sm text-gray-500 ml-5 mt-1">
//             Shop the latest featured products added recently
//           </p>
//         </div>
//         <Link
//           href="/categories"
//           className="bg-lime-600 hover:bg-lime-800 duration-300 transition-all text-slate-50 rounded-md
//             px-4 py-2 mr-20"style={{ backgroundColor }}  
//         >
//           View All
//         </Link>
//       </div>

//       {/* Display categories with images */}
//       <div className="flex justify-center gap-6 py-8 relative">
//         {categories.map((category, index) => (
//           <div key={index} className="flex flex-col sm:grid-cols-3 md:grid-cols-6 gap-6 items-center gap-2">
//             <div
//               className={ `w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 overflow-hidden rounded-full border-4  ${
//                 index === currentIndex ? "border-lime-600" : "border-gray-300" 
//               } bg-white transform transition-transform duration-300 ${
//                 index === currentIndex ? "scale-110" : ""
//               }` }
//               style={{
//                 backgroundColor: ,
//                 boxShadow:
//                   index === currentIndex ? "0 4px 8px rgba(0, 0, 0, 0.3)" : "",
//               }}
//             >
//               <img
//                 className="w-full h-full object-cover cursor-pointer"
//                 src={category.image}
//                 alt={`Category ${index + 1}`}
//                 onClick={() => setCurrentIndex(index)}
//               />
//             </div>
//             <p
//               className={`text-center text-sm md:text-base font-medium ${
//                 index === currentIndex ? "text-lime-600" : "text-gray-600"
//               }`}
//             >
//               {category.name}
//             </p>
//           </div>
//         ))}

//         {/* Navigation buttons */}
//         <button
//           onClick={handlePrev}
//           className="absolute top-1/2 left-4 -translate-y-1/2 text-lime-600 dark:text-lime-600 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 rounded-full p-2"style={{ backgroundColor:secondaryColor }}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </button>

//         <button
//           onClick={handleNext}
//           className="absolute top-1/2 right-4 -translate-y-1/2 dark:text-lime-600   text-lime-600 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 rounded-full p-2"style={{ backgroundColor:secondaryColor }}  
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// }








// "use client";

// import React, { useState } from 'react';
// import Link from 'next/link';

// export default function Bannert({ customization = {} }) {
//   const primaryColor = customization.primaryColor || '#4CAF50'; // اللون الأساسي
//   const secondaryColor = customization.secondaryColor || '#2C3E50'; // اللون الثانوي
//   const accentColor = customization.accentColor || '#FFC107'; // اللون المميز
//   const backgroundColor = customization.backgroundColor || '#FFFFFF'; // لون الخلفية
//   const fontFamily = customization.fontFamily || 'sans-serif'; // نوع الخط
//   const isActive = customization.isActive ?? true; // هل التخصيص مفعل؟

//   const categories = [
//     { name: "سماعات أذن", image: "/images/image-2.jpg", products: 150 },
//     { name: "أجهزة لابتوب", image: "/images/image-3.jpg", products: 150 },
//     { name: "سماعات", image: "/images/image-4.jpg", products: 150 },
//     { name: "ساعات رقمية", image: "/images/image-6.jpg", products: 150 },
//     { name: "موبايلات", image: "/images/image-7.jpg", products: 150 },
//     { name: "شاشات كمبيوتر", image: "/images/image-8.jpg", products: 150 },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + categories.length) % categories.length
//     );
//   };

//   return (
//     <div
//       className="mt-12 rounded-lg dark:bg-gray-700 dark:border-gray-700 text-slate-800
//         overflow-hidden mx-10 dark:shadow-lg dark:shadow-white/30 transition-shadow"
//       style={{ fontFamily }}
//     >
//       <div className="flex justify-between items-center mb-1">
//         <div>
//           <h2 className="text-2xl font-bold text-gray-800 ml-5 mt-2">Shop by Categories</h2>
//           <p className="text-sm text-gray-500 ml-5 mt-1">
//             Shop the latest featured products added recently
//           </p>
//         </div>
//         <Link
//           href="/categories"
//           className="text-white rounded-md px-4 py-2 mr-20 transition-all duration-300"
//           style={{ backgroundColor: backgroundColor }}
//         >
//           View All
//         </Link>
//       </div>

//       {/* Display categories with images */}
//       <div className="flex justify-center gap-6 py-8 relative">
//         {categories.map((category, index) => (
//           <div key={index} className="flex flex-col items-center gap-2">
//             <div
//               className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 overflow-hidden rounded-full border-4 transition-transform duration-300"
//               style={{
//                 borderColor: index === currentIndex ? backgroundColor : "#ccc",
//                 backgroundColor: "#fff",
//                 boxShadow:
//                   index === currentIndex ? "0 4px 8px rgba(0, 0, 0, 0.3)" : "",
//                 transform: index === currentIndex ? "scale(1.1)" : "scale(1)",
//               }}
//             >
//               <img
//                 className="w-full h-full object-cover cursor-pointer"
//                 src={category.image}
//                 alt={`Category ${index + 1}`}
//                 onClick={() => setCurrentIndex(index)}
//               />
//             </div>
//             <p
//               className="text-center text-sm md:text-base font-medium"
//               style={{ color: index === currentIndex ? backgroundColor : "#666" }}
//             >
//               {category.name}
//             </p>
//           </div>
//         ))}

//         {/* Navigation buttons */}
//         <button
//           onClick={handlePrev}
//           className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full p-2"
//           style={{ backgroundColor: backgroundColor, color: "white" }}
//         >
   
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </button>

//         <button
//           onClick={handleNext}
//           className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full p-2"
//           style={{ backgroundColor: backgroundColor, color: "white" }}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// }


// الرئيسي 
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function CategoryBanner({ customization = {} }) {
  const { theme } = useTheme(); // تحديد وضع الثيم الحالي

  // تخصيص الألوان والخطوط
  const primaryColor = customization.primaryColor || "#4CAF50"; 
  const secondaryColor = customization.secondaryColor || "#2C3E50"; 
  const accentColor = customization.accentColor || "#FFC107"; 
  const lightBackground = customization.backgroundColor || "#FFFFFF"; 
  const darkBackground = customization.darkBackground || "#1E293B"; 
  const fontFamily = customization.fontFamily || "sans-serif"; 

  const categories = [
    { name: "Earbuds", image: "/images/image-2.jpg", products: 150 },
    { name: "Laptops", image: "/images/image-3.jpg", products: 150 },
    { name: "Headphones", image: "/images/image-4.jpg", products: 150 },
    { name: "Smartwatches", image: "/images/image-6.jpg", products: 150 },
    { name: "Mobile Phones", image: "/images/image-7.jpg", products: 150 },
    { name: "Computer Monitors", image: "/images/image-8.jpg", products: 150 },
  ];

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
      className="mt-12 rounded-lg text-slate-800 overflow-hidden mx-10 transition-shadow shadow-md dark:shadow-lg"
      style={{ 
        backgroundColor: theme === "dark" ? darkBackground : lightBackground, 
        fontFamily 
      }}
    >
      {/* عنوان القسم */}
      <div className="flex justify-between items-center mb-4 px-6 py-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Shop by Category
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Discover the latest featured products
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

      {/* عرض الفئات مع الصور */}
      <div className="flex justify-center gap-6 py-8 relative">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div
              className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 overflow-hidden rounded-full border-4 transition-all duration-300 cursor-pointer dark:border-gray-600"
              style={{
                borderColor: index === currentIndex ? primaryColor : "#ccc",
                backgroundColor: "#fff",
                boxShadow:
                  index === currentIndex ? "0 4px 8px rgba(0, 0, 0, 0.3)" : "",
                transform: index === currentIndex ? "scale(1.1)" : "scale(1)",
              }}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                className="w-full h-full object-cover"
                src={category.image}
                alt={category.name}
              />
            </div>
            <p
              className="text-center text-sm md:text-base font-medium dark:text-gray-300"
              style={{ color: index === currentIndex ? accentColor : "#666" }}
            >
              {category.name}
            </p>
          </div>
        ))}

        {/* أزرار التنقل */}
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}



// "use client";

// import React from "react";
// import Link from "next/link";

// export default function CategoryListstore() {
//   const categories = [
//     { name: "سماعات أذن", image: "/images/image-2.jpg", products: 150 },
//     { name: "أجهزة لابتوب", image: "/images/image-3.jpg", products: 150 },
//     { name: "سماعات", image: "/images/image-4.jpg", products: 150 },
//     { name: "ساعات رقمية", image: "/images/image-6.jpg", products: 150 },
//     { name: "موبايلات", image: "/images/image-7.jpg", products: 150 },
//     { name: "شاشات كمبيوتر", image: "/images/image-8.jpg", products: 150 },
//   ];

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       {/* العنوان وزر عرض الكل */}
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h2 className="text-2xl font-bold text-gray-800">تسوق حسب الفئات</h2>
//           <p className="text-sm text-gray-500">
//             تسوق أحدث المنتجات المميزة المضافة جديد
//           </p>
//         </div>
//         <Link
//           href="/categories"
//           className="text-lime-600 hover:text-lime-800 font-medium"
//         >
//           عرض الكل
//         </Link>
//       </div>

//       {/* قائمة الفئات */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center group"
//           >
//             <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-gray-300 group-hover:border-lime-600 transition-all">
//               <img
//                 src={category.image}
//                 alt={category.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h3 className="mt-4 text-gray-800 font-medium group-hover:text-lime-600">
//               {category.name}
//             </h3>
//             <p className="text-sm text-gray-500">{category.products} منتج</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
