



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
// import React, { useState, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useSwipeable } from "react-swipeable";
// import { useTheme } from "next-themes";

// // مصفوفة الصور مع بيانات إضافية (يمكنك تعديلها وإضافة المزيد من المعلومات لكل بانر)
// const images = [
//   {
//     src: "/images/image-1.jpg",
//     alt: "منتج مميز 1",
//     title: "اكتشف أحدث التشكيلات بخصومات تصل إلى ٣٠٪!",
//     subtitle: "تسوق الآن واحصل على توصيل مجاني للطلبات فوق ٢٠٠ ريال",
//   },
//   {
//     src: "/images/image-2.jpg",
//     alt: "منتج مميز 2",
//     title: "تشكيلة جديدة مذهلة!",
//     subtitle: "استفد من العروض الحصرية اليوم.",
//   },
//   {
//     src: "/images/image-3.jpg",
//     alt: "منتج مميز 3",
//     title: "أسعار لا تقاوم!",
//     subtitle: "عروض خاصة لفترة محدودة فقط.",
//   },
// ];

// const autoPlayInterval = 10000; // 10 ثوانٍ

// const BannerSlider = ({ customization = {} }) => {
//   // الحصول على الثيم الحالي من next-themes
//   const { theme } = useTheme();

//   // تخصيص إعدادات الألوان والخطوط (يمكن تعديلها أو تمريرها كـ props)
//   const primaryColor = customization.primaryColor || "#4CAF50"; 
//   const secondaryColor = customization.secondaryColor || "#2C3E50"; 
//   const accentColor = customization.accentColor || "#FFC107"; 
//   const lightBackground = customization.backgroundColor || "#FFFFFF"; 
//   const darkBackground = customization.darkBackground || "#1E293B"; 
//   const fontFamily = customization.fontFamily || "sans-serif"; // عائلة الخطوط الافتراضية

//   // تحديد الخلفية الحالية بناءً على الثيم
//   const currentBackground = theme === "dark" ? darkBackground : lightBackground;

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [timeRemaining, setTimeRemaining] = useState(autoPlayInterval);

//   // تأثيرات انتقال الصور باستخدام Framer Motion
//   const variants = {
//     initial: { opacity: 0, x: 100 },
//     animate: { opacity: 1, x: 0 },
//     exit: { opacity: 0, x: -100 },
//   };

//   // تغيير الصورة تلقائيًا وتحديث المؤقت
//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//       setTimeRemaining(autoPlayInterval);
//     }, autoPlayInterval);

//     const timerInterval = setInterval(() => {
//       setTimeRemaining((prev) => Math.max(prev - 1000, 0));
//     }, 1000);

//     return () => {
//       clearInterval(slideInterval);
//       clearInterval(timerInterval);
//     };
//   }, []);

//   // دعم السحب للتنقل بين الصور
//   const swipeHandlers = useSwipeable({
//     onSwipedLeft: () => nextSlide(),
//     onSwipedRight: () => prevSlide(),
//   });

//   const nextSlide = useCallback(() => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//     setTimeRemaining(autoPlayInterval);
//   }, []);

//   const prevSlide = useCallback(() => {
//     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
//     setTimeRemaining(autoPlayInterval);
//   }, []);

//   // تغيير الشريحة عند النقر على نقاط التنقل
//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//     setTimeRemaining(autoPlayInterval);
//   };

//   // تأثير البارالاكس لتحريك الخلفية مع حركة الماوس
//   const parallaxEffect = (e) => {
//     const { clientX, clientY } = e;
//     const xOffset = (clientX - window.innerWidth / 2) * 0.03;
//     const yOffset = (clientY - window.innerHeight / 2) * 0.03;
//     e.currentTarget.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
//   };

//   return (
//     <div
//       {...swipeHandlers}
//       style={{ backgroundColor: currentBackground, fontFamily: fontFamily }}
//       className="relative w-full h-[600px] overflow-hidden group"
//     >
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentIndex}
//           variants={variants}
//           initial="initial"
//           animate="animate"
//           exit="exit"
//           transition={{ duration: 1 }}
//           className="absolute inset-0 w-full h-full"
//           onMouseMove={parallaxEffect}
//           onMouseLeave={(e) => (e.currentTarget.style.transform = "translate(0,0)")}
//         >
//           <img
//             src={images[currentIndex].src}
//             alt={images[currentIndex].alt}
//             className="w-full h-full object-cover"
//             loading="lazy"
//             decoding="async"
//           />
//           {/* طبقة تدرج شفافة مع تخصيص اللون باستخدام accentColor */}
//           <div
//             className="absolute inset-0"
//             style={{
//               background: `linear-gradient(to right, ${accentColor}80, transparent)`,
//             }}
//           ></div>
//         </motion.div>
//       </AnimatePresence>

//       {/* شريط العروض والشعار */}
//       <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 z-20">
//         <div
//           style={{ backgroundColor: primaryColor }}
//           className="text-white px-4 py-2 rounded"
//         >
//           خصم ٣٠٪ حتى نهاية الأسبوع!
//         </div>
//         <div>
//           <img src="/images/logo.png" alt="شعار المتجر" className="h-10" />
//         </div>
//       </div>

//       {/* محتوى البانر الرئيسي */}
//       <div className="relative z-30 max-w-4xl ml-auto p-8 text-white flex flex-col justify-center h-full">
//         <h1 style={{ color: primaryColor }} className="text-4xl md:text-5xl font-bold mb-4">
//           {images[currentIndex].title}
//         </h1>
//         <p className="text-xl mb-6">{images[currentIndex].subtitle}</p>
//         <div className="flex flex-wrap gap-4">
//           <button
//             style={{ backgroundColor: primaryColor }}
//             className="hover:bg-blue-700 text-white px-6 py-3 rounded shadow transition transform hover:scale-105"
//           >
//             اشتري الآن
//           </button>
//           <button
//             style={{ borderColor: primaryColor, color: primaryColor }}
//             className="bg-white hover:bg-gray-200 px-6 py-3 rounded shadow transition transform hover:scale-105"
//           >
//             اكتشف العروض
//           </button>
//         </div>
//         <div className="mt-6 flex items-center gap-6">
//           <div className="flex items-center">
//             <span className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</span>
//             <span className="ml-2 text-sm">تقييم العملاء</span>
//           </div>
//           <div className="flex items-center">
//             <span className="text-xl">🔒</span>
//             <span className="ml-2 text-sm">دفع آمن</span>
//           </div>
//         </div>
//       </div>

//       {/* الأسهم للتنقل اليدوي */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/30 hover:bg-black/50 rounded-full transition-opacity opacity-0 group-hover:opacity-100"
//       >
//         ←
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/30 hover:bg-black/50 rounded-full transition-opacity opacity-0 group-hover:opacity-100"
//       >
//         →
//       </button>

//       {/* نقاط التنقل (pagination) */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
//         {images.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => goToSlide(i)}
//             className={`w-3 h-3 rounded-full transition-all ${
//               i === currentIndex ? "bg-blue-500 scale-125" : "bg-white/50 hover:bg-white/80"
//             }`}
//           ></button>
//         ))}
//       </div>

//       {/* شريط التقدم التفاعلي */}
//       <div
//         className="absolute top-0 left-0 h-1 bg-blue-500 z-30"
//         style={{ width: `${100 - (timeRemaining / autoPlayInterval) * 100}%` }}
//       />
//     </div>
//   );
// };

// export default BannerSlider;
