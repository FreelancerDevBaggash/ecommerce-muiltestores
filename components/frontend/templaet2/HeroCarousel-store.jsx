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
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroCarousel({ banners = [], customization = {} }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const { theme } = useTheme();

  // نظام الألوان المحسن
  const colors = {
    primary: customization?.primaryColor || '#6366f1',
    secondary: customization?.secondaryColor || '#a855f7',
    accent: customization?.accentColor || '#ec4899',
    text: theme === 'dark' ? customization?.darkTextColor || '#ffffff' : customization?.textColor || '#1e293b',
    background: theme === 'dark' ? customization?.darkBackgroundColor || '#1e293b' : customization?.backgroundColor || '#ffffff',
    button: theme === 'dark' ? customization?.primaryColor || '#475569' : customization?.primaryColor || '#6366f1',
    buttonText: customization?.buttonTextColor || '#ffffff',
    progress: theme === 'dark' ? customization?.darkCardBackground || '#334155' : customization?.primaryColor || '#6366f1',
    border: theme === 'dark' ? customization?.darkBorderColor || '#475569' : customization?.secondaryColor || '#e2e8f0',
    lightning: customization?.accentColor || '#facc15',
    electric: `linear-gradient(135deg, ${customization?.accentColor || '#facc15'}, ${customization?.primaryColor || '#6366f1'})`
  };

  // تأثيرات الحركة
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  // حساب أبعاد الحاوية لتجاوب أفضل
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // تعريف دوال التنقل مع useCallback
  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % banners.length);
    setProgress(0);
  }, [banners.length]);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
    setProgress(0);
  }, [banners.length]);

  const goToSlide = useCallback((index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setProgress(0);
  }, [currentIndex]);

  // التحكم في التلقائية
  useEffect(() => {
    if (banners.length <= 1 || isHovered) return;
    
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
  }, [isHovered, currentIndex, banners.length, goToNext]);

  // حساب الارتفاع الديناميكي بناءً على عرض الشاشة
  const calculateHeight = useCallback(() => {
    if (dimensions.width === 0) return '600px';
    
    if (dimensions.width < 640) {
      return `${Math.min(dimensions.width * 1.2, 500)}px`;
    } else if (dimensions.width < 1024) {
      return `${Math.min(dimensions.width * 0.6, 600)}px`;
    } else {
      return `${Math.min(dimensions.width * 0.4, 700)}px`;
    }
  }, [dimensions.width]);

  // تأثير البرق المحسن مع التجاوب
  const LightningBorder = useCallback(() => (
    <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="15%" stopColor={colors.lightning} />
            <stop offset="50%" stopColor={colors.accent} />
            <stop offset="100%" stopColor={colors.primary} />
          </linearGradient>
          <mask id="lightningMask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <rect 
              x="0" 
              y="0" 
              width="100%" 
              height="100%" 
              fill="black"
              stroke="url(#lightningGradient)"
              strokeWidth={dimensions.width < 640 ? '8' : '12'}
              strokeDasharray="314" 
              strokeDashoffset={314 - (3.14 * progress)} 
              pathLength="100"
              rx="16"
              ry="16"
            />
          </mask>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#lightningGradient)"
          mask="url(#lightningMask)"
          opacity="0.8"
          rx="16"
          ry="16"
        />
      </svg>
      <div 
        className="absolute inset-0 rounded-3xl"
        style={{
          boxShadow: `0 0 ${dimensions.width < 640 ? '15px' : '30px'} ${colors.lightning}`,
          animation: 'pulse 2s infinite alternate'
        }}
      />
    </div>
  ), [colors, dimensions.width, progress]);

  if (banners.length === 0) {
    return (
      <div 
        ref={containerRef}
        className="relative flex items-center justify-center w-full mt-18 rounded-xl overflow-hidden group"
        style={{
          height: calculateHeight(),
          background: `linear-gradient(135deg, ${colors.background}99, ${colors.primary}99)`,
          border: `2px solid ${colors.buttonText}`
        }}
      >
        <div className="text-center p-6 z-10">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-tight" style={{ color: colors.text }}>
            لا تتوفر بانرات حالياً
          </h3>
          <Link
            href="/shop"
            className="inline-block mt-6 px-6 py-2 md:px-8 md:py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{
              backgroundColor: colors.button,
              color: colors.buttonText,
              boxShadow: `0 4px 20px ${colors.button}80`
            }}
          >
            تصفح المتجر
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full mt-18 rounded-3xl overflow-hidden shadow-2xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        height: calculateHeight(),
        backgroundColor: colors.background,
        border: `1px solid ${colors.border}`
      }}
    >
      <LightningBorder />

      {/* الصورة مع تأثيرات الحركة */}
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          <Link
            href={banners[currentIndex].link || "#"}
            className="absolute inset-0"
          >
            <Image
              src={banners[currentIndex].imageUrl}
              alt={banners[currentIndex].title || "بانر إعلاني"}
              fill
              priority={currentIndex === 0}
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1200px"
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%)`
              }}
            />
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* المحتوى النصي المتجاوب */}
      <div className="relative h-full flex flex-col justify-end items-start p-4 sm:p-6 md:p-8 lg:p-12 z-10">
        <div className="w-full max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-4"
            style={{
              background: `linear-gradient(90deg, ${colors.lightning}20, ${colors.accent}20)`,
              color: colors.lightning,
              backdropFilter: 'blur(10px)',
              border: `1px solid ${colors.lightning}30`
            }}
          >
            عرض خاص محدود
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-6 leading-tight tracking-tight"
            style={{ 
              color: '#ffffff',
              textShadow: `2px 2px 8px rgba(0,0,0,0.5)`
            }}
          >
            {banners[currentIndex]?.title || "مرحباً بكم في متجرنا"}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm sm:text-base md:text-lg font-medium mb-4 sm:mb-8 leading-relaxed"
            style={{ 
              color: '#ffffff',
              maxWidth: '90%',
              textShadow: `1px 1px 4px rgba(0,0,0,0.5)`
            }}
          >
            {banners[currentIndex]?.description || "من خلال تطبيقنا، يمكنك تسوق كل ما تحتاجه بسهولة."}
          </motion.p>
        </div>
        
        <motion.div 
          className="flex flex-wrap gap-2 sm:gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link href={banners[currentIndex]?.link}>
            <button 
              className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 rounded-full font-medium text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95"
              style={{
                background: colors.electric,
                color: '#000000',
                boxShadow: `0 4px 30px ${colors.lightning}80`
              }}
            >
              تسوق الآن
            </button>
          </Link>
          <button 
            className="px-3 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 rounded-full font-medium text-sm sm:text-base md:text-lg transition-all duration-300 border-2 hover:bg-white/10"
            style={{
              borderColor: '#ffffff',
              color: '#ffffff',
              backdropFilter: 'blur(5px)'
            }}
          >
            المزيد
          </button>
        </motion.div>
      </div>

      {/* أزرار التنقل المحسنة مع التجاوب */}
      {banners.length > 1 && (
        <div className="absolute top-1/2 left-2 right-2 sm:left-4 sm:right-4 -translate-y-1/2 z-20 flex justify-between">
          <button
            onClick={goToPrev}
            className="p-2 sm:p-3 rounded-full bg-black/30 backdrop-blur-md transition-all duration-300 shadow-xl hover:bg-black/50 hover:scale-110 active:scale-95"
            aria-label="الصورة السابقة"
            style={{
              boxShadow: `0 4px 20px rgba(0,0,0,0.3)`
            }}
          >
            <ChevronLeft size={dimensions.width < 640 ? 24 : 32} strokeWidth={2.5} className="text-white" />
          </button>
          <button
            onClick={goToNext}
            className="p-2 sm:p-3 rounded-full bg-black/30 backdrop-blur-md transition-all duration-300 shadow-xl hover:bg-black/50 hover:scale-110 active:scale-95"
            aria-label="الصورة التالية"
            style={{
              boxShadow: `0 4px 20px rgba(0,0,0,0.3)`
            }}
          >
            <ChevronRight size={dimensions.width < 640 ? 24 : 32} strokeWidth={2.5} className="text-white" />
          </button>
        </div>
      )}

      {/* مؤشرات الصور المحسنة مع التجاوب */}
      {banners.length > 1 && (
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 sm:h-2.5 rounded-full transition-all duration-300 relative overflow-hidden ${
                index === currentIndex ? "w-6 sm:w-10" : "w-3 sm:w-6 hover:w-4 sm:hover:w-8"
              }`}
              style={{
                backgroundColor: `${colors.lightning}30`,
              }}
              aria-label={`انتقل إلى الصورة ${index + 1}`}
            >
              {index === currentIndex && (
                <motion.div
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{
                    backgroundColor: colors.lightning,
                    boxShadow: `0 0 10px ${colors.lightning}`
                  }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              )}
            </button>
          ))}
        </div>
      )}

      {/* تأثيرات إضافية متجاوبة */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        <div 
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `radial-gradient(circle at ${progress}% 50%, ${colors.lightning}10 0%, transparent 40%)`,
            filter: 'blur(20px)',
            opacity: dimensions.width < 640 ? 0.3 : 0.5
          }}
        />
      </div>
    </div>
  );
}