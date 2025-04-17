// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { FaCheckCircle } from "react-icons/fa";
// import heroImage from "@/public/reshotqq.svg";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Cardall from "./Cardall"
// import Link from "next/link";

// export default function Herohome() {
//   const [banners, setBanners] = useState([]);

//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       offset: 200,
//     });

//     // يمكنك إضافة الدالة fetchBanners إذا كنت تستخدم بيانات حقيقية.
//   }, []);

//   return (
//     <div className="bg-slate-50 dark:bg-gray-800 py-9 w-full h-full">
//       <div className="text-content-container-foreground container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* القسم الأول */}

//         <h1 className="text-indigo-700 dark:text-white font-mono text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
//           منصة اتجر .. تجارة ذكية وسهلة
//         </h1>
//         <p className="text-violet-950 dark:text-slate-200 text-center text-lg sm:text-xl lg:text-2xl mb-8">
//           أنشئ متجرك الإلكتروني في دقائق، واربط منتجاتك بمجموعة متكاملة من الحلول الرقميَّة الذكيَّة.
//         </p>
//         <div className="flex justify-center gap-4">
//           <button className="bg-secondary font-bold rounded-xl px-6 py-2 text-indigo-700 border-2 border-indigo-700 hover:bg-indigo-700 hover:text-white transition">
//             أنشئ متجرك مجانًا
//           </button>
//           <button className="bg-indigo-700 font-bold rounded-xl px-6 py-2 text-white border-2 border-indigo-700 hover:bg-secondary hover:text-indigo-700 transition">
//             تجربة المنصة
//           </button>
//         </div>

//         {/* القسم الثاني */}
//         <div className="relative mt-12 h-64 sm:h-96 lg:h-[500px]   w-full" data-aos="fade-up">
//           <Image
//             src={heroImage}
//             alt="صورة بطل"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg shadow-lg"
//           />
//         </div>

//         {/* القسم الثالث */}
//         <div className="py-16">
//           <h2 className="text-center text-2xl dark:bg-gray-800sm:text-3xl lg:text-4xl font-bold mb-12 text-indigo-700">
//             حلولنا تناسب جميع الأنشطة التجارية
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               { title: "عبايات وأزياء", desc: "مزايا عديدة تلائم تجارتك" },
//               { title: "المطاعم والمقاهي", desc: "جميع ما تحتاجه لإدارة أعمالك رقميا" },
//               { title: "قطاع الجملة", desc: "نقلة نوعية في البيع للشركات والمؤسسات" },
//               { title: "صناعة المحتوى", desc: "المكان الأنسب لتحويل شغفك إلى أرباح" },
//               { title: "تقديم الخدمات", desc: "حلول مميزة لإدارة أعمالك" },
//               { title: "المنتجات الرقمية", desc: "المكان الأنسب لبيع المنتجات الرقمية" },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center bg-white dark:bg-gray-300 text-black p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
//                 data-aos="fade-up"
//               >
//                 <FaCheckCircle className="text-4xl text-primary mb-4" />
//                 <h3 className="text-xl font-bold">{item.title}</h3>
//                 <p className="text-center">{item.desc}</p>
//               </div>
//             ))}

//           </div>
//         </div>
//         <Cardall/>
//       </div>
      
//     </div>
//   );
// }
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

// export default function Hero() {
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
//   }, []); // Removed nextSlide from dependencies

//   return (
//     <section className="relative h-[500px] md:h-[600px] overflow-hidden">
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

//       {/* Navigation Arrows */}
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

//       {/* Indicators */}
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
     
//     </section>
   
           

//   );
// }
// "use client";

// import HeroCarousel from "./HeroCarousel";

// export default function Hero() {
//   return (
//     <section>
//       <HeroCarousel />
//     </section>
//   );
// }
"use client";
import {getData} from '../../../lib/getData'
import Image from 'next/image'
import Link from 'next/link'
import HeroCarousel from "./HeroCarousel";


export default async function Hero({storeId }, ) {
  const banners = await getData(`banners?storeId=${storeId}`)
  return (
    <section className='  mt-4'>
      <HeroCarousel  banners={banners}  />
   
    </section>
  );
}