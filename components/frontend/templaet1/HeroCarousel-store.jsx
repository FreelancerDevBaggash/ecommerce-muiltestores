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






"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

 
const SwissClock =  () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;
  const date = time.getDate();

  return (
    <div className="absolute top-4 right-4 z-20">
      <div className="w-32 h-32 rounded-full m-10 border-4 border-opacity-50 border-gray-300 bg-gradient-to-br from-gray-900 to-black shadow-xl relative">
        <div className="absolute inset-0 rounded-full border-2 border-opacity-30 border-gray-100" />
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-2 bg-gray-400 origin-bottom transform -translate-x-1/2"
            style={{
              left: "50%",
              bottom: "95%",
              transform: `rotate(${i * 6}deg)`,
              opacity: i % 5 === 0 ? 0 : 0.5
            }}
          />
        ))}
{[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((hour, i) => {
  const angle = i * 30; // كل ساعة تدور 30 درجة
  const radius = 40; // نصف قطر الدائرة حيث ستوضع الأرقام
  const x = 50 + radius * Math.sin((angle * Math.PI) / 180);
  const y = 50 - radius * Math.cos((angle * Math.PI) / 180);

  return (
    <div
      key={hour}
      className="absolute text-xs font-bold text-gray-300"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%)`,
      }}
    >
      {hour}
    </div>
  );
})}


      
  
        <div className="absolute left-[72%] top-[38%] w-8 h-6 bg-gray-800 rounded-sm flex items-center justify-center">
          <span className="text-xs font-bold text-gray-300">{date}</span>
        </div>
        <div
          className="absolute left-1/2 bottom-1/2 w-1 h-8 bg-gradient-to-b from-gold-500 to-gold-700 origin-bottom transform -translate-x-1/2 shadow-md"
          style={{
            transform: `rotate(${hours * 30 + minutes * 0.5}deg) translateY(-4px)`,
            borderRadius: "2px 2px 0 0"
          }}
        />
        <div
          className="absolute left-1/2 bottom-1/2 w-0.5 h-12 bg-gradient-to-b from-gray-100 to-gray-300 origin-bottom transform -translate-x-1/2"
          style={{
            transform: `rotate(${minutes * 6}deg) translateY(-8px)`
          }}
        />
        <div
          className="absolute left-1/2 bottom-1/2 w-0.5 h-14 bg-red-500 origin-bottom transform -translate-x-1/2 transition-transform duration-300 ease-in-out"
          style={{
            transform: `rotate(${seconds * 6}deg) translateY(-12px)`
          }}
        >
          <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-red-500 rounded-full -translate-x-1/2" />
        </div>
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg">
          <div className="absolute inset-0.5 bg-gold-300 rounded-full" />
        </div>
        <div className="absolute bottom-3 left-1/2  -translate-x-1/2 text-[6px] font-bold text-gray-400 tracking-widest">
         KHATAB
        </div>
      </div>
    </div>
  );
};
export default function HeroCarousel({ banners = [], customization = {} }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // تخصيص الألوان بناءً على المدخلات من المستخدم
  const primaryColor = customization.primaryColor || '#4CAF50'; // اللون الأساسي
  const secondaryColor = customization.secondaryColor || '#2C3E50'; // اللون الثانوي
  const accentColor = customization.accentColor || '#FFC107'; // اللون المميز
  const backgroundColor = customization.backgroundColor || '#FFFFFF'; // لون الخلفية
  const fontFamily = customization.fontFamily || 'sans-serif'; // نوع الخط
  const isActive = customization.isActive ?? true; // هل التخصيص مفعل؟

  // تفعيل التغيير التلقائي للصورة
  useEffect(() => {
    if (banners.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [banners]);

  return (
    <div className="relative w-full h-80 md:h-[500px] pt-0 top-0 rounded-lg shadow-lg mt-10">
      <SwissClock />
    
      {/* النص وزر "تسوق الآن" */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center bg-black bg-opacity-30">
        <h1 className="text-2xl md:text-4xl font-bold text-white" style={{ fontFamily }}>
          مرحبًا بكم في متجرنا
        </h1>
        <Link href="/shop">
          <button 
            className="mt-4 px-6 py-3 rounded-lg text-lg shadow-lg hover:bg-lime-700" 
            style={{ backgroundColor: primaryColor, color: accentColor }}
          >
            تسوق الآن
          </button>
        </Link>
      </div>

      {/* عرض الصور المتغيرة */}
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link href={banner.link || "#"} className="block">
            <Image
              src={banner.imageUrl}
              alt={banner.title || "Banner"}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </Link>
        </div>
      ))}

      {/* أزرار التنقل */}
      <button
        onClick={() =>
          setCurrentIndex((i) => (i - 1 + banners.length) % banners.length)
        }
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-lime-600 text-white p-2 rounded-full z-20"
        style={{ backgroundColor: accentColor }}
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => setCurrentIndex((i) => (i + 1) % banners.length)}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-lime-600 text-white p-2 rounded-full z-20"
        style={{ backgroundColor: accentColor }}
      >
        <ChevronRight />
      </button>

      {/* الكروت في أسفل الكاروسيل */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4 z-20">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl border px-7 py-6 shadow-lg">
            <p className="text-gray-400 text-base font-semibold mb-1">
              Total free services
            </p>
            <h3 className="text-lime-600 text-3xl font-extrabold" style={{ color: primaryColor }}>
              5.4M+
            </h3>
          </div>
          <div className="bg-white rounded-xl border px-7 py-8 shadow-lg">
            <p className="text-gray-400 text-base font-semibold mb-1">
              Revenue a month
            </p>
            <h3 className="text-lime-600 text-3xl font-extrabold" style={{ color: primaryColor }}>
              $80K
            </h3>
          </div>
          <div className="bg-white rounded-xl border px-7 py-8 shadow-lg">
            <p className="text-gray-400 text-base font-semibold mb-1">
              Engagement
            </p>
            <h3 className="text-lime-600 text-3xl font-extrabold" style={{ color: primaryColor }}>
              100K
            </h3>
          </div>
          <div className="bg-white rounded-xl border px-7 py-8 shadow-lg">
            <p className="text-gray-400 text-base font-semibold mb-1">
              Server Uptime
            </p>
            <h3 className="text-lime-600 text-3xl font-extrabold" style={{ color: primaryColor }}>
              99.9%
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}









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
