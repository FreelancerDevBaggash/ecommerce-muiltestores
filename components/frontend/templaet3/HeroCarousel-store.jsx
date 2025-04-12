// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function HeroCarousel({ banners = [], category , customization={}}) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(true);

//   // التمرير التلقائي مع التحكم عند التوقف
//   // useEffect(() => {
//   //   if (banners.length <= 1 || isHovered) return;

//   //   const interval = setInterval(() => {
//   //     setIsAnimating(true);
//   //     setCurrentIndex((prev) => (prev + 1) % banners.length);
//   //   }, 5000);

//   //   return () => clearInterval(interval);
//   // }, [banners.length, isHovered]);

//   // تغيير الصورة مع تأثيرات الانتقال
//   const goToSlide = (index) => {
//     setIsAnimating(true);
//     setCurrentIndex(index);
//   };

//   // التنقل بين الصور
//   const goToPrev = () => {
//     setIsAnimating(true);
//     setCurrentIndex((prev) => 
//       (prev - 1 + banners.length) % banners.length
//     );
//   };

//   const goToNext = () => {
//     setIsAnimating(true);
//     setCurrentIndex((prev) => (prev + 1) % banners.length);
//   };

//   // حالة عدم وجود بانرات
//   if (banners.length === 0) {
//     return (
//       <div className="relative flex items-center justify-center h-20 md:h-[500px] mt-14 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl overflow-hidden">
//         <div className="text-center p-6 z-10">
//           <h3 className="text-xl md:text-2xl font-bold text-gray-600 dark:text-gray-300 mb-2">
//             لا تتوفر بانرات حالياً
//           </h3>
//           <Link 
//             href="/shop" 
//             className="inline-block mt-4 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
//           >
//             تصفح المتجر
//           </Link>
//         </div>
//         <div className="absolute inset-0 bg-black/5"></div>
//       </div>
//     );
//   }

//   return (
//     <div 
//       className="relative w-full h-80 md:h-[500px] mt-14 rounded-xl overflow-hidden shadow-xl"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* الصور المتحركة */}
//       <div className="relative h-full w-full">
//         {banners.map((banner, index) => (
//           <Link
//             key={index}
//             href={banner.link || "#"}
//             className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
//               index === currentIndex 
//                 ? "opacity-100" 
//                 : "opacity-0 pointer-events-none"
//             } ${isAnimating ? "" : "transition-none"}`}
//             onTransitionEnd={() => setIsAnimating(false)}
//           >
//             <Image
//               src={banner.imageUrl}
//               alt={banner.title || "بانر إعلاني"}
//               fill
//               priority={index === 0}
//               className="object-cover"
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
//             />
//             <div className="absolute inset-0 bg-black/30"></div>
//           </Link>
//         ))}
//       </div>

//       {/* المحتوى العلوي */}
//       <div className="absolute inset-0 flex items-center justify-center z-10">
//         <div className="text-center px-6 max-w-4xl">
//           <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
//             {banners[currentIndex]?.title || "مرحباً بكم في متجرنا"}
//           </h1>
          
//           <Link href={banners[currentIndex]?.link || "/shop"}>
//             <button className="px-8 py-3 md:px-10 md:py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//               تسوق الآن
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* أزرار التنقل */}
//       {banners.length > 1 && (
//         <>
//           <button
//             onClick={goToPrev}
//             className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/30 hover:bg-white/50 text-white backdrop-blur-sm transition-all duration-300 shadow-lg hover:scale-110"
//             aria-label="الصورة السابقة"
//           >
//             <ChevronLeft size={28} strokeWidth={2} />
//           </button>
//           <button
//             onClick={goToNext}
//             className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/30 hover:bg-white/50 text-white backdrop-blur-sm transition-all duration-300 shadow-lg hover:scale-110"
//             aria-label="الصورة التالية"
//           >
//             <ChevronRight size={28} strokeWidth={2} />
//           </button>
//         </>
//       )}

//       {/* مؤشرات الصور */}
//       {banners.length > 1 && (
//         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
//           {banners.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentIndex 
//                   ? "bg-emerald-500 w-6" 
//                   : "bg-white/50 hover:bg-white/80"
//               }`}
//               aria-label={`انتقل إلى الصورة ${index + 1}`}
//             />
//           ))}
//         </div>
//       )}

//       {/* شريط التقدم */}
//       {banners.length > 1 && !isHovered && (
//         <div className="absolute bottom-0 left-0 right-0 h-1 z-20 bg-white/30 overflow-hidden">
//           <div 
//             className="h-full bg-emerald-500"
//             style={{
//               animation: `progress ${5000}ms linear infinite`,
//               animationPlayState: isHovered ? 'paused' : 'running'
//             }}
//           />
//           <style jsx>{`
//             @keyframes progress {
//               0% { width: 0%; }
//               100% { width: 100%; }
//             }
//           `}</style>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import useSWR from 'swr';

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";

export default function HeroCarousel({ banners = [], storeId, customization={}}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const { theme } = useTheme();

  // const fetcher = (url) => fetch(url).then((res) => res.json());
  
  // const { data: customization, error, mutate } = useSWR(
  //   `/api/customizations/Customizationes?storeId=${storeId}`,
  //   fetcher,
  //   {
  //     revalidateOnFocus: false,
  //     shouldRetryOnError: false
  //   }
  // );
  // نظام الألوان مع القيم الافتراضية
  
  const colors = {
    primary: customization?.primaryColor || '#3b82f6',
    secondary: customization?.secondaryColor || '#10b981',
    accent: customization?.accentColor || '#f59e0b',
    text: theme === 'dark' ? customization?.darkTextColor || '#f8fafc' : customization?.textColor || '#1e293b',
    background: theme === 'dark' ? customization?.darkBackgroundColor || '#1e293b' : customization?.backgroundColor || '#f8fafc',
    button: theme === 'dark' ? customization?.primaryColor || '#475569' : customization?.primaryColor || '#3b82f6',
    buttonText: customization?.buttonTextColor || '#ffffff',
    progress: theme === 'dark' ? customization?.darkCardBackground || '#334155' : customization?.primaryColor || '#ffffff',
    border: theme === 'dark' ? customization?.darkBorderColor || '#475569' : customization?.secondaryColor || '#e2e8f0'
  };


  useEffect(() => {
    if (banners?.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNext();
          return 0;
        }
        return prev + (100 / 5000 * 50);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isHovered, currentIndex, banners.length]);

  const goToSlide = (index) => {
    setIsAnimating(true);
    setCurrentIndex(index);
    setProgress(0);
  };

  const goToPrev = () => {
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
    setProgress(0);
  };

  const goToNext = () => {
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % banners.length);
    setProgress(0);
  };

  if (banners?.length === 0) {
    return (
      <div 
        className="relative flex items-center justify-center h-80 md:h-[600px] mt-17 rounded-xl overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${colors.background}99, ${colors.primary}99)`,
          border: `2px solid ${colors.buttonText}`
        }}
      >
        <div className="text-center p-6 z-10">
          <h3 
            className="text-xl md:text-2xl font-bold mb-2"
            style={{ color: colors.text }}
          >
            لا تتوفر بانرات حالياً
          </h3>
          <Link
            href="/shop"
            className="inline-block mt-4 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: colors.button,
              color: colors.buttonText
            }}
          >
            تصفح المتجر
          </Link>
        </div>
        <div className="absolute inset-0 bg-black/5"></div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-60 md:h-[600px] mt-18 rounded-xl overflow-hidden shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: colors.border,
        border: `2px solid ${colors.border}`
      }}
    >
      {/* الصور المتحركة */}
      <div className="relative h-full w-full">
        {banners?.map((banner, index) => (
          <Link
            key={index}
            href={banner.link || "#"}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            } ${isAnimating ? "" : "transition-none"}`}
            onTransitionEnd={() => setIsAnimating(false)}
          >
            <Image
              src={banner.imageUrl}
              alt={banner.title || "بانر إعلاني"}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            <div 
              className="absolute inset-0"
              style={{ backgroundColor: colors.overlay }}
            />
          </Link>
        ))}
      </div>

      {/* المحتوى العلوي */}
      <div dir="rtl" className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-6 max-w-4xl">
          <h1 
            className="text-3xl md:text-5xl lg:text-8xl font-bold text-white mb-7 drop-shadow-lg"
            style={{ color: colors.text }}
          >
            {banners[currentIndex]?.title || "مرحباً بكم في متجرنا"}
          </h1>
          
          <Link href={banners[currentIndex]?.link }>
            <button 
              className="px-8 py-3 md:px-10 md:py-4 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{
                backgroundColor: colors.button,
                color: colors.buttonText
              }}
            >
              تسوق الآن
            </button>
          </Link>
        </div>
      </div>

      {/* أزرار التنقل */}
      {banners.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg hover:scale-110"
            style={{
              backgroundColor: `${colors.button}30`,
              color: colors.text
            }}
            aria-label="الصورة السابقة"
          >
            <ChevronLeft size={28} strokeWidth={2} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg hover:scale-110"
            style={{
              backgroundColor: `${colors.button}30`,
              color: colors.text
            }}
            aria-label="الصورة التالية"
          >
            <ChevronRight size={28} strokeWidth={2} />
          </button>
        </>
      )}

      {/* مؤشرات الصور */}
      {banners.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {banners?.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-6 bg-[var(--progress)]"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              style={{
                backgroundColor: index === currentIndex 
                  ? colors.progress 
                  : `${colors.text}50`
              }}
              aria-label={`انتقل إلى الصورة ${index + 1}`}
            />
          ))}
        </div>
      )}      


      {/* شريط التقدم الدائري حول الحواف */}
      {banners.length > 1 && (
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border-4 border-transparent rounded-xl">
              {/* Top Border */}
              <div 
                className="absolute top-0 left-0 h-1 transition-all duration-75 ease-linear"
                style={{
                  width: `${progress >= 25 ? 100 : (progress / 25) * 100}%`,
                  opacity: progress <= 25 ? 1 : 1 - (progress - 25) / 25,
                  backgroundColor: colors.progress
                }}
              />
              
              {/* Right Border */}
              <div 
                className="absolute top-0 right-0 w-1 transition-all duration-75 ease-linear"
                style={{
                  height: `${progress >= 50 ? 100 : ((progress - 25) / 25) * 100}%`,
                  opacity: progress <= 50 ? 1 : 1 - (progress - 50) / 25,
                  backgroundColor: colors.progress
                }}
              />
              
              {/* Bottom Border */}
              <div 
                className="absolute bottom-0 right-0 h-1 transition-all duration-75 ease-linear"
                style={{
                  width: `${progress >= 75 ? 100 : ((progress - 50) / 25) * 100}%`,
                  opacity: progress <= 75 ? 1 : 1 - (progress - 75) / 25,
                  backgroundColor: colors.progress
                }}
              />
              
              {/* Left Border */}
              <div 
                className="absolute bottom-0 left-0 w-1 transition-all duration-75 ease-linear"
                style={{
                  height: `${progress >= 100 ? 100 : ((progress - 75) / 25) * 100}%`,
                  opacity: progress <= 100 ? 1 : 0,
                  backgroundColor: colors.progress
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}