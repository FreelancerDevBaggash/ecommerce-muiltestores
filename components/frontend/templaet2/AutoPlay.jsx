// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import { useTheme } from "next-themes";

// export default function Bannert({ storeId, categories, customization = {} , slugDomain={} }) {
//   // const [categories, setCategories] = useState(initialCategories);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const [visibleCategories, setVisibleCategories] = useState([]);
//   const { theme } = useTheme();

//   // نظام الألوان مع دعم التخصيص والوضع الداكن
  
//   const themeColors = {
//     primary: customization?.primaryColor || '#3b82f6',
//     secondary: customization?.secondaryColor || '#10b981',
//     accent: customization?.accentColor || '#f59e0b',
//     text: theme === 'dark' ? customization?.darkTextColor || '#f8fafc' : customization?.textColor || '#1e293b',
//     background: theme === 'dark' ? customization?.darkBackgroundColor || '#1e293b' : customization?.backgroundColor || '#f8fafc',
//     button: theme === 'dark' ? customization?.darkButtonColor || '#475569' : customization?.buttonColor || '#3b82f6',
//     buttonText: customization?.buttonTextColor || '#ffffff',
//     cardBg: theme === 'dark' ? customization?.darkCardBackground || '#334155' : customization?.cardBackground || '#ffffff',
//     border: theme === 'dark' ? customization?.darkBorderColor || '#475569' : customization?.borderColor || '#e2e8f0'
//   };

//   // useEffect(() => {
//   //   const fetchCategories = async () => {
//   //     try {
//   //       const response = await fetch(`/api/categories?storeId=${storeId}`);
//   //       if (!response.ok) throw new Error("فشل في جلب البيانات");
//   //       const data = await response.json();
//   //       const filtered = data.filter(cat => cat.products && cat.products.length > 0);
//   //       setCategories(filtered);
//   //     } catch (error) {
//   //       console.error("Error fetching categories:", error);
//   //     }
//   //   };

//   //   if (!initialCategories.length && storeId) fetchCategories();
//   // }, [storeId, initialCategories]);

//   useEffect(() => {
//     if (!categories.length) return;

//     const updateVisibleCategories = () => {
//       const screenWidth = window.innerWidth;
//       let itemsToShow = 2;
//       if (screenWidth >= 768) itemsToShow = 4;
//       if (screenWidth >= 1024) itemsToShow = 6;

//       const start = currentIndex % categories.length;
//       const end = start + itemsToShow;

//       setVisibleCategories(
//         end <= categories.length
//           ? categories.slice(start, end)
//           : [...categories.slice(start), ...categories.slice(0, end - categories.length)]
//       );
//     };

//     updateVisibleCategories();
//     window.addEventListener("resize", updateVisibleCategories);
//     return () => window.removeEventListener("resize", updateVisibleCategories);
//   }, [currentIndex, categories]);

//   useEffect(() => {
//     if (isHovered || categories.length <= 1) return;
//     const interval = setInterval(() => setCurrentIndex(prev => (prev + 1) % categories.length), 5000);
//     return () => clearInterval(interval);
//   }, [currentIndex, isHovered, categories]);

//   const handleNext = () => setCurrentIndex(prev => (prev + 1) % categories.length);
//   const handlePrev = () => setCurrentIndex(prev => (prev - 1 + categories.length) % categories.length);

//   if (!categories.length) {
//     return (
//       <div className="mt-12 mx-4 sm:mx-8 lg:mx-12">
//         <Skeleton height={300} className="rounded-2xl" />
//       </div>
//     );
//   }

//   return (
//     <section
//       className="mt-12 mx-4 sm:mx-8 lg:mx-12"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div 
//         className="rounded-2xl p-6 shadow-lg"
//         style={{
//           background: `linear-gradient(to right, ${themeColors.background}, ${hexToRgba(themeColors.primary, 0.1)})`,
//           borderColor: themeColors.border,
//           borderWidth: '1px'
//         }}
//       >
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
//           <div>
//             <h2 className="text-2xl md:text-3xl font-bold" style={{ color: themeColors.text }}>
//               تصفح حسب الفئات
//             </h2>
//             <p className="mt-1" style={{ color: hexToRgba(themeColors.text, 0.7) }}>
//               اكتشف أحدث المنتجات في مجموعتنا المتنوعة
//             </p>
//           </div>

//         </div>

//         {/* Categories Carousel */}
//         <div className="relative">
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
//             {visibleCategories.map((category, idx) => (
//               <Link
//                 key={`${category.slug}-${idx}`}
//                 href={`${slugDomain}/category/${category.slug}`}
//                 className="group flex flex-col items-center gap-3"
//               >
//                 <div 
//                   className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-4 shadow-md transition-all duration-300"
//                   style={{
//                     borderColor: themeColors.cardBg,
//                     '--tw-shadow-color': hexToRgba(themeColors.primary, 0.2),
//                     ':hover': {
//                       borderColor: themeColors.primary
//                     }
//                   }}
//                 >
//                   <Image
//                     src={category.imageUrl }
//                     alt={category.title }
//                     fill
//                     className="object-cover rounded-full"
//                     sizes="(max-width: 640px) 80px, 128px"
//                   />
//                   <div 
//                     className="absolute inset-0 rounded-full transition-all duration-300"
//                     style={{
//                       backgroundColor: hexToRgba(themeColors.text, 0.1),
//                       ':hover': {
//                         backgroundColor: 'transparent'
//                       }
//                     }}
//                   />
//                 </div>
//                 <div className="text-center">
//                   <h3 
//                     className="font-medium transition-colors"
//                     style={{
//                       color: themeColors.text,
//                       ':hover': {
//                         color: themeColors.primary
//                       }
//                     }}
//                   >
//                     {category.title}
//                   </h3>
//                   <p className="text-xs" style={{ color: hexToRgba(themeColors.text, 0.5) }}>
//                     {category.products?.length || 0} منتج
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           {/* Navigation Arrows */}
//           {categories.length > 1 && (
//             <>
//               <button
//                 onClick={handlePrev}
//                 className="absolute -left-4 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg transition-colors duration-200 focus:outline-none"
//                 style={{
//                   backgroundColor: themeColors.cardBg,
//                   color: themeColors.text,
//                   ':hover': {
//                     backgroundColor: hexToRgba(themeColors.text, 0.1)
//                   }
//                 }}
//                 aria-label="الفئة السابقة"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>

//               <button
//                 onClick={handleNext}
//                 className="absolute -right-4 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg transition-colors duration-200 focus:outline-none"
//                 style={{
//                   backgroundColor: themeColors.cardBg,
//                   color: themeColors.text,
//                   ':hover': {
//                     backgroundColor: hexToRgba(themeColors.text, 0.1)
//                   }
//                 }}
//                 aria-label="الفئة التالية"
//               >
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </>
//           )}
//         </div>

//         {/* Indicators */}
//         {categories.length > 1 && (
//           <div className="flex justify-center mt-8 gap-2">
//             {categories.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setCurrentIndex(idx)}
//                 className="w-2 h-2 rounded-full transition-all duration-300"
//                 style={{
//                   width: currentIndex % categories.length === idx ? '1.5rem' : '0.5rem',
//                   backgroundColor: currentIndex % categories.length === idx 
//                     ? themeColors.primary 
//                     : hexToRgba(themeColors.text, 0.3)
//                 }}
//                 aria-label={`انتقل إلى الفئة ${idx + 1}`}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// // دالة مساعدة لتحويل الألوان
// function hexToRgba(hex, opacity = 1) {
//   if (!hex) return '';
//   const r = parseInt(hex.slice(1, 3), 16);
//   const g = parseInt(hex.slice(3, 5), 16);
//   const b = parseInt(hex.slice(5, 7), 16);
//   return `rgba(${r}, ${g}, ${b}, ${opacity})`;
// }
"use client";
import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useTheme } from "next-themes";

export default function AutoPlay({ storeId, categories, customization = {}, slugDomain = {} }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const [screenWidth, setScreenWidth] = useState(0);

  // نظام الألوان مع دعم التخصيص والوضع الداكن
  const themeColors = useMemo(() => ({
    primary: customization?.primaryColor || '#3b82f6',
    secondary: customization?.secondaryColor || '#10b981',
    accent: customization?.accentColor || '#f59e0b',
    text: theme === 'dark' ? customization?.darkTextColor || '#f8fafc' : customization?.textColor || '#1e293b',
    background: theme === 'dark' ? customization?.darkBackgroundColor || '#1e293b' : customization?.backgroundColor || '#f8fafc',
    button: theme === 'dark' ? customization?.darkButtonColor || '#475569' : customization?.buttonColor || '#3b82f6',
    buttonText: customization?.buttonTextColor || '#ffffff',
    cardBg: theme === 'dark' ? customization?.darkCardBackground || '#334155' : customization?.cardBackground || '#ffffff',
    border: theme === 'dark' ? customization?.darkBorderColor || '#475569' : customization?.borderColor || '#e2e8f0'
  }), [theme, customization]);

  // تحديث حجم الشاشة عند التحميل أو تغيير الحجم
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize screen width
      setScreenWidth(window.innerWidth);

      // Update screen width on resize
      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      // Cleanup listener on unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // حساب العناصر المرئية بناءً على حجم الشاشة
  const visibleCategories = useMemo(() => {
    if (!categories.length || screenWidth === 0) return [];

    let itemsToShow = 2;
    if (screenWidth >= 768) itemsToShow = 4;
    if (screenWidth >= 1024) itemsToShow = 6;

    const start = currentIndex % categories.length;
    const end = start + itemsToShow;
    return end <= categories.length
      ? categories.slice(start, end)
      : [...categories.slice(start), ...categories.slice(0, end - categories.length)];
  }, [currentIndex, categories, screenWidth]);

  // تحديث الفهرس تلقائيًا عند عدم التفاعل
  useEffect(() => {
    if (isHovered || categories.length <= 1) return;
    const interval = setInterval(() => setCurrentIndex(prev => (prev + 1) % categories.length), 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isHovered, categories]);

  // معالجات التنقل بين الفئات
  const handleNext = () => setCurrentIndex(prev => (prev + 1) % categories.length);
  const handlePrev = () => setCurrentIndex(prev => (prev - 1 + categories.length) % categories.length);

  // عرض الهيكل العظمي إذا لم تتوفر الفئات
  if (!categories.length) {
    return (
      <div className="mt-12 mx-4 sm:mx-8 lg:mx-12">
        <Skeleton height={300} className="rounded-2xl" />
      </div>
    );
  }

  return (
    <section
      className="mt-12 mx-4 sm:mx-8 lg:mx-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="rounded-2xl p-6 shadow-lg"
        style={{
          background: `linear-gradient(to right, ${themeColors.background}, ${hexToRgba(themeColors.primary, 0.1)})`,
          borderColor: themeColors.border,
          borderWidth: '1px'
        }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: themeColors.text }}>
              تصفح حسب الفئات
            </h2>
            <p className="mt-1" style={{ color: hexToRgba(themeColors.text, 0.7) }}>
              اكتشف أحدث المنتجات في مجموعتنا المتنوعة
            </p>
          </div>
        </div>

        {/* Categories Carousel */}
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {visibleCategories.map((category, idx) => (
              <Link
                key={`${category.slug}-${idx}`}
                href={`${slugDomain}/category/${category.slug}`}
                className="group flex flex-col items-center gap-3"
              >
                <div
                  className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-4 shadow-md transition-all duration-300"
                  style={{
                    borderColor: themeColors.cardBg,
                    '--tw-shadow-color': hexToRgba(themeColors.primary, 0.2),
                  }}
                >
                  <Image
                    src={category.imageUrl}
                    alt={category.title}
                    fill
                    className="object-cover rounded-full"
                    sizes="(max-width: 640px) 80px, 128px"
                  />
                  <div
                    className="absolute inset-0 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: hexToRgba(themeColors.text, 0.1),
                    }}
                  />
                </div>
                <div className="text-center">
                  <h3
                    className="font-medium transition-colors"
                    style={{
                      color: themeColors.text,
                    }}
                  >
                    {category.title}
                  </h3>
                  <p className="text-xs" style={{ color: hexToRgba(themeColors.text, 0.5) }}>
                    {category.products?.length || 0} منتج
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation Arrows */}
          {categories.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute -left-4 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg transition-colors duration-200 focus:outline-none"
                style={{
                  backgroundColor: themeColors.cardBg,
                  color: themeColors.text,
                }}
                aria-label="الفئة السابقة"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute -right-4 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg transition-colors duration-200 focus:outline-none"
                style={{
                  backgroundColor: themeColors.cardBg,
                  color: themeColors.text,
                }}
                aria-label="الفئة التالية"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Indicators */}
        {categories.length > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {categories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  width: currentIndex % categories.length === idx ? '1.5rem' : '0.5rem',
                  backgroundColor: currentIndex % categories.length === idx
                    ? themeColors.primary
                    : hexToRgba(themeColors.text, 0.3)
                }}
                aria-label={`انتقل إلى الفئة ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// دالة مساعدة لتحويل الألوان
function hexToRgba(hex, opacity = 1) {
  if (!hex) return '';
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}