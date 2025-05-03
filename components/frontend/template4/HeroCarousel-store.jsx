// "use client"
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Carousel  } from 'nuka-carousel';
// import React from 'react';



// export default function HeroCarousel({banners}){
//     const config = {
//         nextButtonClassName: "rounded-full",
//         nextButtonStyle:  <ChevronRight/>,
//         pagingDotsClassName: "me-2 w-4 h-4",
//         prevButtonClassName: "rounded-full",
//         prevButtonText: <ChevronLeft/>,

//       }
//   return (
//     <Carousel defaultControlsConfig={config} autoplay  className='rounded-md overflow-hidden' 
//     wrapAround >


//       {/* {
//         banners.map((banner, i) => {
//          return(
        
//           <Link key={i} href={banner.link} className=''> 
//           <Image src={banner.imageUrl}
//             className='w-full' width={712} height={384} 
//             alt={banner.title} />
//           </Link>
//          )
//         })
//       } */}


//     </Carousel>

//   );
// };
// "use client";
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';
// import {Carousel} from 'nuka-carousel';
// import React from 'react';

// export default function HeroCarousel({banners}) {
//   console.log( Carousel)

//   const config = {
//             nextButtonClassName: "rounded-full",
//             nextButtonStyle:  <ChevronRight/>,
//             pagingDotsClassName: "me-2 w-4 h-4",
//             prevButtonClassName: "rounded-full",
//             prevButtonText: <ChevronLeft/>,
    
//           }
//   return (
   
//       <Carousel defaultControlsConfig={config} autoplay  className='rounded-md overflow-hidden' 
//     wrapAround >
//       {/* {banners.map((banner, i) => (
//         <Link key={i} href={banner.link}>
//           <div className="relative w-full h-64">
//             <Image 
//               src={banner.imageUrl} 
//               layout="fill" 
//               objectFit="cover" 
//               className="rounded-full"
//               alt={banner.title} 
//             />
//           </div>
//         </Link>
//       ))} */}
//       {
//        banners.map((banner, i) => {
//          return(
        
//           <Link key={i} href={banner.link} className=''> 
//           <Image src={banner.imageUrl}
//             className='w-full' width={712} height={384} 
//             alt={banner.title} />
//           </Link>
//          )
//         })}
      
//     </Carousel>
//   );
// }



/////////////////////////////////////

// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function HeroCarousel({ banners = [] ,category }) {
//   //  const category = categories.filter((category) => category.products.length > 0);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (banners.length > 0) {
//       const interval = setInterval(
//         () => setCurrentIndex((i) => (i + 1) % banners.length),
//         5000
//       );
//       return () => clearInterval(interval);
//     }
//   }, [banners.length]);

//   if (banners.length === 0) {
//     return (
//       <div className="flex items-center justify-center h-80 md:h-[500px] mt-14 bg-gray-200 rounded-lg">
//         <p className="text-gray-500">No banners available</p>
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-full h-80 md:h-[500px] pt-0 top-0 rounded-lg shadow-lg">
//       {/* النص وزر تسوق الآن */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center bg-black bg-opacity-30">
//         <h1 className="text-2xl md:text-4xl font-bold text-white">
//           مرحبًا بكم في متجرنا
//         </h1>
//         <Link href="/shop">
//           <button className="mt-4 px-6 py-3 bg-lime-600 text-white rounded-lg text-lg shadow-lg hover:bg-lime-700">
//             تسوق الآن
//           </button>
//         </Link>
//       </div>

//       {/* الصورة الرئيسية */}
//       {banners.map((banner, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             index === currentIndex ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <Link href={banner.link || "#"} className="block">
//             <Image
//               src={banner.imageUrl }
//               alt={banner.title || "Banner"}
//               layout="fill"
//               objectFit="cover"
//               className="rounded-lg"
//             />
//           </Link>
//         </div>
//       ))}



//             {/* أزرار التنقل */}
//             <button
//         onClick={() =>
//           setCurrentIndex((i) => (i - 1 + banners.length) % banners.length)
//         }
//         className="absolute top-1/2 left-4 -translate-y-1/2 bg-lime-600 text-white p-2 rounded-full z-20"
//       >
//         <ChevronLeft />
//       </button>
//       <button
//         onClick={() => setCurrentIndex((i) => (i + 1) % banners.length)}
//         className="absolute top-1/2 right-4 -translate-y-1/2 bg-lime-600 text-white p-2 rounded-full z-20"
//       >
//         <ChevronRight />
//       </button>
//     </div>
//   );
// }
// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function HeroCarousel({ banners = [] }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (banners.length > 0) {
//       const interval = setInterval(
//         () => setCurrentIndex((i) => (i + 1) % banners.length),
//         5000
//       );
//       return () => clearInterval(interval);
//     }
//   }, [banners.length]);

//   if (banners.length === 0) {
//     return (
//       <div className="flex items-center justify-center h-80 md:h-[500px] mt-14 bg-gray-200 rounded-lg">
//         <p className="text-gray-500">No banners available</p>
//       </div>
//     );
//   }

//   return (
    // <div className="relative w-full h-80 md:h-[500px] pt-0 top-0 rounded-lg shadow-lg">
    //   {/* النص وزر تسوق الآن */}
    //   <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center bg-black bg-opacity-30">
    //     <h1 className="text-2xl md:text-4xl font-bold text-white">
    //       مرحبًا بكم في متجرنا
    //     </h1>
    //     <Link href="/shop">
    //       <button className="mt-4 px-6 py-3 bg-lime-600 text-white rounded-lg text-lg shadow-lg hover:bg-lime-700">
    //         تسوق الآن
    //       </button>
    //     </Link>
    //   </div>

    //   {/* الصورة الرئيسية */}
    //   {banners.map((banner, index) => (
    //     <div
    //       key={index}
    //       className={`absolute inset-0 transition-opacity duration-1000 ${
    //         index === currentIndex ? "opacity-100" : "opacity-0"
    //       }`}
    //     >
    //       <Link href={banner.link || "#"} className="block">
    //         <Image
    //           src={banner.imageUrl}
    //           alt={banner.title || "Banner"}
    //           layout="fill"
    //           objectFit="cover"
    //           className="rounded-lg"
    //         />
    //       </Link>
    //     </div>
    //   ))}

    //   {/* أزرار التنقل */}
    //   <button
    //     onClick={() =>
    //       setCurrentIndex((i) => (i - 1 + banners.length) % banners.length)
    //     }
    //     className="absolute top-1/2 left-4 -translate-y-1/2 bg-lime-600 text-white p-2 rounded-full z-20"
    //   >
    //     <ChevronLeft />
    //   </button>
    //   <button
    //     onClick={() => setCurrentIndex((i) => (i + 1) % banners.length)}
    //     className="absolute top-1/2 right-4 -translate-y-1/2 bg-lime-600 text-white p-2 rounded-full z-20"
    //   >
    //     <ChevronRight />
    //   </button>

    //   {/* الكروت */}
    //   <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4 z-20">
    //     <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5">
    //       <div className="bg-white rounded-xl border px-7 py-6 shadow-lg">
    //         <p className="text-gray-400 text-base font-semibold mb-1">
    //           Total free services
    //         </p>
    //         <h3 className="text-lime-600 text-3xl font-extrabold">5.4M+</h3>
    //       </div>
    //       <div className="bg-white rounded-xl border px-7 py-8 shadow-lg">
    //         <p className="text-gray-400 text-base font-semibold mb-1">
    //           Revenue a month
    //         </p>
    //         <h3 className="text-lime-600 text-3xl font-extrabold">$80K</h3>
    //       </div>
    //       <div className="bg-white rounded-xl border px-7 py-8 shadow-lg">
    //         <p className="text-gray-400 text-base font-semibold mb-1">
    //           Engagement
    //         </p>
    //         <h3 className="text-lime-600 text-3xl font-extrabold">100K</h3>
    //       </div>
    //       <div className="bg-white rounded-xl border px-7 py-8 shadow-lg">
    //         <p className="text-gray-400 text-base font-semibold mb-1">
    //           Server Uptime
    //         </p>
    //         <h3 className="text-lime-600 text-3xl font-extrabold">99.9%</h3>
    //       </div>
    //     </div>
    //   </div>
    // </div>
//   );
// }





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
//       className="relative w-full mt-20 h-[600px] overflow-hidden group"
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
//       {/* <div className="absolute top-0 left-0  right-0 flex justify-between items-center p-4 z-20">
//         <div
//           style={{ backgroundColor: primaryColor }}
//           className="text-white px-4 py-2 rounded"
//         >
//           خصم ٣٠٪ حتى نهاية الأسبوع!
//         </div>
//         <div>
//           <img src="/images/logo.png" alt="شعار المتجر" className="h-10" />
//         </div>
//       </div> */}

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



"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { useTheme } from "next-themes";

// مصفوفة الصور مع بيانات إضافية (يمكنك تعديلها وإضافة المزيد من المعلومات لكل بانر)
const images = [
  {
    src: "/images/image-1.jpg",
    alt: "منتج مميز 1",
    title: "اكتشف أحدث التشكيلات بخصومات تصل إلى ٣٠٪!",
    subtitle: "تسوق الآن واحصل على توصيل مجاني للطلبات فوق ٢٠٠ ريال",
  },
  {
    src: "/images/image-2.jpg",
    alt: "منتج مميز 2",
    title: "تشكيلة جديدة مذهلة!",
    subtitle: "استفد من العروض الحصرية اليوم.",
  },
  {
    src: "/images/image-3.jpg",
    alt: "منتج مميز 3",
    title: "أسعار لا تقاوم!",
    subtitle: "عروض خاصة لفترة محدودة فقط.",
  },
];

const autoPlayInterval = 10000; // 10 ثوانٍ

const BannerSlider = ({ customization = {} }) => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(autoPlayInterval);

  // تأثيرات انتقال الصور باستخدام Framer Motion
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // تغيير الصورة تلقائيًا وتحديث المؤقت
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setTimeRemaining(autoPlayInterval);
    }, autoPlayInterval);

    const timerInterval = setInterval(() => {
      setTimeRemaining((prev) => Math.max(prev - 1000, 0));
    }, 1000);

    return () => {
      clearInterval(slideInterval);
      clearInterval(timerInterval);
    };
  }, []);

  // دعم السحب للتنقل بين الصور
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
  });

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeRemaining(autoPlayInterval);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeRemaining(autoPlayInterval);
  }, []);

  // تغيير الشريحة عند النقر على نقاط التنقل
  const goToSlide = (index) => {
    setCurrentIndex(index);
    setTimeRemaining(autoPlayInterval);
  };

  return (
    <div
    {...swipeHandlers}
    className="relative w-full h-[500px] overflow-hidden group"
    style={{ backgroundColor: theme === "dark" ? "#1E293B" : "#FFFFFF" }}
  >
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        {/* طبقة تدرج شفافة مع تخصيص اللون باستخدام accentColor */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${customization.accentColor || "#FFC107"}80, transparent)`,
          }}
        ></div>
      </motion.div>
    </AnimatePresence>
  
    {/* محتوى البانر الرئيسي */}
    <div className="relative z-30 max-w-4xl mx-auto p-8 text-white flex flex-col justify-center h-full">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        {images[currentIndex].title}
      </h1>
      <p className="text-xl mb-6">{images[currentIndex].subtitle}</p>
      <div className="flex flex-wrap gap-4">
        <button
          style={{ backgroundColor: customization.primaryColor || "#4CAF50" }}
          className="hover:bg-blue-700 text-white px-6 py-3 rounded shadow transition transform hover:scale-105"
        >
          اشتري الآن
        </button>
        <button
          style={{ borderColor: customization.primaryColor || "#4CAF50", color: customization.primaryColor || "#4CAF50" }}
          className="bg-white hover:bg-gray-200 px-6 py-3 rounded shadow transition transform hover:scale-105"
        >
          اكتشف العروض
        </button>
      </div>
    </div>
  
    {/* الأسهم للتنقل اليدوي */}
    <button
      onClick={prevSlide}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/30 hover:bg-black/50 rounded-full transition-opacity opacity-0 group-hover:opacity-100"
    >
      ←
    </button>
    <button
      onClick={nextSlide}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/30 hover:bg-black/50 rounded-full transition-opacity opacity-0 group-hover:opacity-100"
    >
      →
    </button>
  
    {/* نقاط التنقل (pagination) */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
      {images.map((_, i) => (
        <button
          key={i}
          onClick={() => goToSlide(i)}
          className={`w-3 h-3 rounded-full transition-all ${
            i === currentIndex ? "bg-blue-500 scale-125" : "bg-white/50 hover:bg-white/80"
          }`}
        ></button>
      ))}
    </div>
  
    {/* شريط التقدم التفاعلي */}
    <div
      className="absolute top-0 left-0 h-1 bg-blue-500 z-30"
      style={{ width: `${100 - (timeRemaining / autoPlayInterval) * 100}%` }}
    />
  </div>
  );
};

export default BannerSlider;




     {/* {
      category.length > 0 &&
      category.map((categor, i)=>{
          return(
              <Link key={i} href={`/category/${categor.slug}`} className='flex items-center gap-3
              hover:bg-slate-50 duration-300 transition-all
               dark:text-slate-300 dark:hover:bg-slate-600 rounded-md'>
             <Image width={556} height={556} className='h-10 w-10 rounded-full
             object-cover border border-lime-300'
              src={categor.imageUrl}
              alt={categor.title} />
             <span className='text-sm'>{categor.title}</span>
             </Link>
          )
      })
     } */}
 {/* الصور المصغّرة (الفئات) */}
 {/* <div className="absolute w-full flex justify-center -bottom-8 md:-bottom-10 z-40">
  <div className="flex gap-4">
    {
    // category.length > 0 &&
    category.map((categor, index) => (
      <Link
        key={index}
        href={`/category/${categor.slug}`} 
        onClick={() => setCurrentIndex(index)}
        className={`w-10 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 overflow-hidden rounded-full border-4 ${
          index === currentIndex ? "border-lime-600" : "border-gray-300"
        } bg-white transform transition-transform duration-300 ${
          index === currentIndex ? "scale-110 shadow-lg" : ""
        }`}
      >
        <img
          className="w-full h-full object-cover cursor-pointer"
          src={categor.imageUrl}
          alt={`الفئة ${index + 1}`}
        />
         <span className="text-xs md:text-sm block bg-black text-center mt-2">{categor.title}</span>

      </Link>
    ))}
  </div>
</div> */}







// templet prodect

// "use client";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { BaggageClaim } from "lucide-react";

// export default function ProductList() {
//   // بيانات وهمية للمنتجات
//   const products = [
//     {

//       title: "منتج افتراضي 1",
//       salePrice: "100,000",
//       imageUrl: "/images/image-7.jpg", // ضع مسار الصورة الفعلي
//       slug: "virtual-product-1",
//     },
//     {
//       title: "منتج افتراضي 2",
//       salePrice: "150,000",
//       imageUrl: "/images/image-6.jpg",
//       slug: "virtual-product-2",
//     },
//     {
//       title: "منتج افتراضي 3",
//       salePrice: "200,000",
//       imageUrl: "/images/image-5.jpg",
//       slug: "virtual-product-3",
//     },
//     {
//       title: "منتج افتراضي 4",
//       salePrice: "250,000",
//       imageUrl: "/images/image-2.jpg",
//       slug: "virtual-product-4",
//     },


//     // أضف المزيد من المنتجات هنا
//   ];

//   return (
//     <div className="container mx-auto mt-24 px-4">
//       <h2 className="text-2xl font-bold mb-6 text-center">أحدث المنتجات</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="rounded-lg bg-white dark:bg-slate-900 overflow-hidden border shadow"
//           >
//             <Link href={`/products/${product.slug}`}>
//               <Image
//                 src={product.imageUrl}
//                 alt={product.title}
//                 width={290}
//                 height={174}
//                 className="w-full h-48 object-cover"
//               />
//             </Link>
//             <div className="px-4 py-2">
//               <Link href={`/products/${product.slug}`}>
//                 <h2 className="text-center text-slate-800 dark:text-slate-200 my-2 font-semibold">
//                   {product.title}
//                 </h2>
//               </Link>
//               <div className="flex items-center justify-between gap-2 pb-3 dark:text-slate-200 text-slate-800">
//                 <p>UGX {product.salePrice}</p>
//                 <button className="flex items-center space-x-2 bg-lime-600 px-4 py-2 rounded-md text-white">
//                   <BaggageClaim />
//                   <span>إضافة إلى السلة</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
