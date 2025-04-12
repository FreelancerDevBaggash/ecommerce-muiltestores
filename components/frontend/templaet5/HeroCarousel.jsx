// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { ChevronRight, ChevronLeft } from 'lucide-react';

// const slides = [
//   {
//     id: 1,
//     title: "تخفيضات هائلة",
//     subtitle: "خصومات تصل إلى 70% على الإلكترونيات",
//     image: "/images/image-8.jpg?height=600&width=1200",
//     cta: "تسوق الآن",
//     link: "/offers/electronics",
//     color: "from-blue-600 to-purple-600",
//   },
//   {
//     id: 2,
//     title: "مجموعة الخريف الجديدة",
//     subtitle: "اكتشف أحدث صيحات الموضة لهذا الموسم",
//     image: "/images/image-2.jpg?height=600&width=1200",
//     cta: "اكتشف المزيد",
//     link: "/new/fashion",
//     color: "from-orange-500 to-red-500",
//   },
//   {
//     id: 3,
//     title: "أجهزة منزلية ذكية",
//     subtitle: "حول منزلك إلى منزل ذكي مع أحدث التقنيات",
//     image: "/images/ww.jpg?height=600&width=1200",
//     cta: "استكشف المنتجات",
//     link: "/categories/smart-home",
//     color: "from-green-500 to-teal-500",
//   },
// ];

// export default function HeroCarousel() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative h-[500px] md:h-[600px] overflow-hidden">
//       {slides.map((slide, index) => (
//         <div
//           key={slide.id}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
//           }`}
//         >
//           <div className="absolute inset-0 bg-black/40 z-10"></div>
//           <div className="relative h-full w-full">
//             <Image
//               src={slide.image || "/placeholder.svg"}
//               alt={slide.title}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//           <div className="absolute inset-0 z-20 flex items-center justify-center">
//             <div className="text-center text-white px-4 max-w-4xl">
//               <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
//               <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
//               <a
//                 href={slide.link}
//                 className={`inline-block px-8 py-3 rounded-full bg-gradient-to-r ${slide.color} text-white font-medium text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
//               >
//                 {slide.cta}
//               </a>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* أزرار التنقل */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all duration-300"
//         aria-label="السابق"
//       >
//         <ChevronLeft className="h-6 w-6 text-white" />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all duration-300"
//         aria-label="التالي"
//       >
//         <ChevronRight className="h-6 w-6 text-white" />
//       </button>

//       {/* مؤشرات الشريط */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2 space-x-reverse">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               index === currentSlide ? "bg-white scale-125" : "bg-white/50"
//             }`}
//             aria-label={`انتقل إلى الشريحة ${index + 1}`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function HeroCarousel({ banners: initialBanners = [] }) {
  // الحالة لتخزين البانرات وجلبها من API
  const [banners, setBanners] = useState(initialBanners);
  const [currentSlide, setCurrentSlide] = useState(0);


  // استخدام تأثير لضبط التبديل التلقائي للشرائح
  useEffect(() => {
    if (banners.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) =>
          prev === banners.length - 1 ? 0 : prev + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [banners]);

  // في حال عدم وجود بانرات، عرض رسالة مناسبة
  if (banners.length === 0) {
    return (
      <div className="flex items-center justify-center h-[500px] md:h-[400px] bg-gray-200">
        <p className="text-gray-500">لا توجد بانرات متاحة</p>
      </div>
    );
  }

  return (
    <div className="relative h-[500px] rounded-xl md:h-[400px] overflow-hidden">
      {banners.map((banner, index) => (
        <Slide key={banner.id} banner={banner} isActive={index === currentSlide} />
      ))}

      <NavigationArrow
        onClick={() =>
          setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1))
        }
        direction="left"
      />

      <NavigationArrow
        onClick={() =>
          setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1))
        }
        direction="right"
      />

      <Indicators banners={banners} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
    </div>
  );
}

// مكوّن عرض الشريحة الواحدة
function Slide({ banner, isActive }) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ${
        isActive ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* طبقة تظليل لتعزيز قراءة النص */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="relative h-full w-full">
        <Image
          src={banner.imageUrl || "/placeholder.svg"}
          alt={banner.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* محتوى النصوص */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{banner.title}</h1>
          <p className="text-xl md:text-2xl mb-8">{banner.subtitle}</p>
          <a
            href={banner.link || "#"}
            className={`inline-block px-8 py-3 rounded-full bg-gradient-to-r ${
              banner.color || "from-blue-600 to-purple-600"
            } text-white font-medium text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
          >
           <span> تسوق الان </span>
          </a>
        </div>
      </div>
    </div>
  );
}

// مكوّن زر التنقل (السابق/التالي)
function NavigationArrow({ onClick, direction }) {
  const isLeft = direction === "left";
  return (
    <button
      onClick={onClick}
      className={`absolute ${isLeft ? "left-4" : "right-4"} top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all duration-300`}
      aria-label={isLeft ? "السابق" : "التالي"}
    >
      {isLeft ? (
        <ChevronLeft className="h-6 w-6 text-white" />
      ) : (
        <ChevronRight className="h-6 w-6 text-white" />
      )}
    </button>
  );
}

// مكوّن مؤشرات الشرائح
function Indicators({ banners, currentSlide, setCurrentSlide }) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2 space-x-reverse">
      {banners.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentSlide ? "bg-white scale-125" : "bg-white/50"
          }`}
          aria-label={`انتقل إلى الشريحة ${index + 1}`}
        ></button>
      ))}
    </div>
  );
}
