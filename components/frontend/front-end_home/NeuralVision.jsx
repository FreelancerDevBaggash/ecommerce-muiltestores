

// import Image from "next/image"; 
// import Link from "next/link"; 

// const NeuralVision = () => { 
//   const images = [ 
//     "/images/image-4.jpg", 
//     "/images/image-5.jpg", 
//     "/images/image-6.jpg", 
//     "/images/image-7.jpg", 
//     "/images/image-8.jpg", 
//   ]; 

//   return ( 
//     <div className="flex flex-col md:flex-row w-full items-center bg-gray-100 p-8 rounded-lg shadow-lg max-w-5xl mx-auto"> 
//       {/* النص */} 
//       <div className="md:w-1/2 text-center md:text-left p-6"> 
//         <h2 className="text-3xl font-bold text-gray-900 mb-4">Neural Vision 3.5</h2> 
//         <p className="text-gray-700 mb-6"> 
//           Unlock the future of creativity with Neural Vision 3.5. Featuring cutting-edge enhancements and versatile options like the powerful 3.5 Large variant. 
//         </p> 
//         <Link href="#"> 
//           <button className="text-blue-500 hover:underline">Get started →</button>
//         </Link> 
//       </div> 

//       {/* الصور */} 
//       <div className="md:w-1/2 grid grid-cols-2 gap-4 md:gap-2 overflow-hidden"> 
//         {images.map((src, index) => (
//           <div 
//             key={index} 
//             className={`w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-lg shadow-lg ${
//               index % 2 === 0 ? 'animate-scroll-up' : 'animate-scroll-down'
//             }`}
//           >
//             <Image 
//               src={src} 
//               alt={`Image ${index + 1}`} 
//               width={160} 
//               height={160} 
//               className="object-cover w-full h-full" 
//             /> 
//           </div> 
//         ))} 
//       </div> 
      
//       {/* أنماط الحركة */} 
//       <style jsx>{`
//         .animate-scroll-up {
//           animation: scrollUp 5s linear infinite;
//         }
//         .animate-scroll-down {
//           animation: scrollDown 5s linear infinite;
//         }

//         @keyframes scrollUp {
//           0% { transform: translateY(50px); }
//           100% { transform: translateY(-50px); }
//         }

//         @keyframes scrollDown {
//           0% { transform: translateY(-50px); }
//           100% { transform: translateY(50px); }
//         }
//       `}</style>
//     </div> 
//   ); 
// }; 

// export default NeuralVision;
// "use client";
// import Image from "next/image"; 
// import Link from "next/link"; 

// const NeuralVision = () => { 
//   const images = [ 
//     "/images/image-4.jpg", 
//     "/images/image-5.jpg", 
//     "/images/image-6.jpg", 
//     "/images/image-7.jpg", 
//     "/images/image-8.jpg", 
//   ]; 

//   return ( 
//     <div className="flex flex-col md:flex-row w-full items-center bg-gray-100 p-8 rounded-lg shadow-lg max-w-5xl mx-auto"> 
//       {/* النص */} 
//       <div className="md:w-1/2 text-center md:text-left p-6"> 
//         <h2 className="text-3xl font-bold text-gray-900 mb-4">Neural Vision 3.5</h2> 
//         <p className="text-gray-700 mb-6"> 
//           Unlock the future of creativity with Neural Vision 3.5. Featuring cutting-edge enhancements and versatile options like the powerful 3.5 Large variant. 
//         </p> 
//         <Link href="#"> 
//           <button className="text-blue-500 hover:underline">Get started →</button>
//         </Link> 
//       </div> 

//       {/* الصور المتحركة */} 
//       <div className="md:w-1/2 flex overflow-hidden space-x-4"> 
//         {/* عمود اليسار (للأعلى) */}
//         <div className="w-1/2 flex flex-col space-y-4 animate-scroll-up">
//           {[...images, ...images].map((src, index) => ( // مضاعفة الصور
//             <div key={index} className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-lg shadow-lg">
//               <Image 
//                 src={src} 
//                 alt={`Image ${index + 1}`} 
//                 width={160} 
//                 height={160} 
//                 className="object-cover w-full h-full" 
//               /> 
//             </div>
//           ))}
//         </div>

//         {/* عمود اليمين (للأسفل) */}
//         <div className="w-1/2 flex flex-col space-y-4 animate-scroll-down">
//           {[...images, ...images].map((src, index) => ( // مضاعفة الصور
//             <div key={index} className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-lg shadow-lg">
//               <Image 
//                 src={src} 
//                 alt={`Image ${index + 1}`} 
//                 width={160} 
//                 height={160} 
//                 className="object-cover w-full h-full" 
//               /> 
//             </div>
//           ))}
//         </div>
//       </div> 

//       {/* أنماط الحركة */} 
//       <style jsx>{`
//         @keyframes scrollUp {
//           0% { transform: translateY(0%); }
//           100% { transform: translateY(-50%); } /* يتحرك للأعلى */
//         }

//         @keyframes scrollDown {
//           0% { transform: translateY(-50%); }
//           100% { transform: translateY(0%); } /* يتحرك للأسفل */
//         }

//         .animate-scroll-up {
//           animation: scrollUp 10s linear infinite;
        // }
//         "use client";
// import Image from "next/image";
// import Link from "next/link";

// const NeuralVision = () => {
//   const images = [
//     "/images/image-4.jpg",
//     "/images/image-5.jpg",
//     "/images/image-6.jpg",
//     "/images/image-7.jpg",
//     "/images/image-8.jpg",
//   ];

//   return (
//     <div className="flex flex-col md:flex-row w-full items-center bg-gray-100 p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
//       {/* قسم النص */}
//       <div className="md:w-1/2 text-center md:text-left p-6">
//         <h2 className="text-3xl font-bold text-gray-900 mb-4">Neural Vision 3.5</h2>
//         <p className="text-gray-700 mb-6">
//           Unlock the future of creativity with Neural Vision 3.5. Featuring cutting-edge enhancements and versatile options like the powerful 3.5 Large variant.
//         </p>
//         <Link href="#">
//           <button className="text-blue-500 hover:underline">Get started →</button>
//         </Link>
//       </div>

//       {/* قسم الصور المتحركة */}
//       <div className="md:w-1/2 flex space-x-4">
//         {/* عمود اليسار */}
//         <div className="w-1/2 h-[512px] overflow-hidden relative">
//           <div className="flex flex-col space-y-4 animate-scroll-up">
//             {images.slice(0, 3).map((src, index) => (
//               <div key={index} className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-lg shadow-lg">
//                 <Image
//                   src={src}
//                   alt={`Image ${index + 1}`}
//                   width={160}
//                   height={160}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* عمود اليمين */}
//         <div className="w-1/2 h-[512px] overflow-hidden relative">
//           <div className="flex flex-col space-y-4 animate-scroll-down">
//             {images.slice(0, 3).map((src, index) => (
//               <div key={index} className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-lg shadow-lg">
//                 <Image
//                   src={src}
//                   alt={`Image ${index + 1}`}
//                   width={160}
//                   height={160}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* تعريف أنماط الحركة مع توقف مؤقت */}
//       <style jsx>{`
//         @keyframes scrollUp {
//           0% { transform: translateY(0%); }
//           80% { transform: translateY(-100%); }
//           100% { transform: translateY(-100%); }
//         }
//         @keyframes scrollDown {
//           0% { transform: translateY(-100%); }
//           20% { transform: translateY(0%); }
//           100% { transform: translateY(0%); }
//         }
//         .animate-scroll-up {
//           animation: scrollUp 10s linear infinite;
//         }
//         .animate-scroll-down {
//           animation: scrollDown 10s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default NeuralVision;


// //         .animate-scroll-down {
// //           animation: scrollDown 10s linear infinite;
// //         }
// //       `}</style>
// //     </div> 
// //   ); 
// // }; 

// // export default NeuralVision;
// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";

// export default function SolutionsSection() {
//   return (
//     <section id="solutions" className="py-16 bg-gray-50 dark:bg-gray-800">
//       <div className="container mx-auto px-4">
//         <motion.h2
//           className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           حلولنا
//         </motion.h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//           {/* الحل الأول */}
//           <motion.div
//             className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8 text-center"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="mb-6">
//               <i className="fas fa-cogs text-4xl text-indigo-600 dark:text-indigo-400"></i>
//             </div>
//             <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
//               إدارة المنتجات
//             </h3>
//             <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
//               نوفر لك أدوات متكاملة لإدارة المنتجات بكل سهولة، من إضافة وتعديل وحذف المنتجات إلى تنظيمها في فئات.
//             </p>
//             <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-6 rounded-full shadow-lg">
//               اكتشف المزيد
//             </Button>
//           </motion.div>

//           {/* الحل الثاني */}
//           <motion.div
//             className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8 text-center"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <div className="mb-6">
//               <i className="fas fa-shipping-fast text-4xl text-indigo-600 dark:text-indigo-400"></i>
//             </div>
//             <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
//               الشحن والتوصيل
//             </h3>
//             <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
//               نقدم لك خيارات شحن مرنة تتناسب مع احتياجاتك، مع تتبع حالة الشحن بشكل فوري لضمان وصول المنتجات بأمان.
//             </p>
//             <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-6 rounded-full shadow-lg">
//               اكتشف المزيد
//             </Button>
//           </motion.div>

//           {/* الحل الثالث */}
//           <motion.div
//             className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8 text-center"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <div className="mb-6">
//               <i className="fas fa-credit-card text-4xl text-indigo-600 dark:text-indigo-400"></i>
//             </div>
//             <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
//               الدفع المتكامل
//             </h3>
//             <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
//               دمجنا حلول دفع متكاملة وسهلة تتيح لك إجراء المعاملات بسرعة وأمان باستخدام وسائل الدفع المحلية والدولية.
//             </p>
//             <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-6 rounded-full shadow-lg">
//               اكتشف المزيد
//             </Button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { motion, useInView } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { useRef } from "react";
// import heroImage from "@/public/reshotqq.svg";
// import heroI from "@/public/mimg-1.svg";
// import heroIm from "@/public/f3foreTop-1.svg";

// export default function SolutionsSection() {
//   const ref1 = useRef(null);
//   const isInView1 = useInView(ref1, { once: true });

//   const ref2 = useRef(null);
//   const isInView2 = useInView(ref2, { once: true });

//   const ref3 = useRef(null);
//   const isInView3 = useInView(ref3, { once: true });

//   const sectionVariant = {
//     hidden: { opacity: 0, y: 80 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const solutions = [
//     {
//       icon: heroImage,
//       title: "إدارة المنتجات",
//       description:
//         "أدوات ذكية وسلسة لإدارة وإضافة المنتجات بسهولة ضمن واجهة مرنة.",
//       button: "اكتشف المزيد",
//       ref: ref1,
//       isInView: isInView1,
//     },
//     {
//       icon: heroI,
//       title: "الشحن والتوصيل",
//       description:
//         "تكامل مع شركات الشحن المحلية والدولية وخيارات تتبع متقدمة.",
//       button: "المزيد من التفاصيل",
//       ref: ref2,
//       isInView: isInView2,
//     },
//     {
//       icon: heroIm,
//       title: "الدفع الإلكتروني",
//       description:
//         "حلول دفع آمنة وسريعة تدعم كل الطرق المحلية والعالمية.",
//       button: "جرّب الآن",
//       ref: ref3,
//       isInView: isInView3,
//     },
//   ];

//   return (
//     <section id="solutions" className="py-20 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <motion.h2
//           className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-20"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.7 }}
//         >
//           حلولنا المذهلة ✨
//         </motion.h2>

//         {solutions.map((solution, index) => (
//           <motion.div
//             key={index}
//             ref={solution.ref}
//             variants={sectionVariant}
//             initial="hidden"
//             animate={solution.isInView ? "visible" : "hidden"}
//             transition={{ duration: 0.7, delay: index * 0.2 }}
//             className={`flex flex-col-reverse lg:flex-row${
//               index % 2 === 0 ? "-reverse" : ""
//             } items-center justify-between bg-white dark:bg-gray-800 rounded-3xl shadow-2xl mb-16 overflow-hidden`}
//           >
//             {/* النص */}
//             <div className="w-full lg:w-1/2 p-8 lg:p-12 text-center lg:text-right">
//               <div className="flex justify-center lg:justify-end mb-6">
//                 <Image src={solution.icon} alt="icon" width={60} height={60} />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
//                 {solution.title}
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-6">
//                 {solution.description}
//               </p>
//               <Button className="rounded-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md">
//                 {solution.button}
//               </Button>
//             </div>

//             {/* الصورة */}
//             <div className="w-full lg:w-1/2 h-64 lg:h-full">
//               <Image
//                 src={solution.icon}
//                 alt="حل"
//                 width={500}
//                 height={400}
//                 className="object-contain mx-auto p-1"
//               />
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// "use client"; // يشير إلى أن هذا مكون عميل (Client Component) في Next.js

// import { motion, useInView } from "framer-motion"; // استيراد motion و useInView من framer-motion للتحريك
// import { Button } from "@/components/ui/button"; // استيراد مكون Button مخصص
// import Image from "next/image"; // استيراد مكون الصورة من Next.js لتحسين الصور
// import { useRef } from "react"; // استيراد useRef من React
// import heroImage from "@/public/reshotqq.svg"; // استيراد الصور المحلية
// import heroI from "@/public/mimg-1.svg";
// import heroIm from "@/public/feature_3.png";

// export default function SolutionsSection() {
//   // استخدام useRef و useInView لتتبع ظهور العناصر
//   const ref1 = useRef(null);
//   const isInView1 = useInView(ref1, { once: true });

//   const ref2 = useRef(null);
//   const isInView2 = useInView(ref2, { once: true });

//   const ref3 = useRef(null);
//   const isInView3 = useInView(ref3, { once: true });

//   // تعريف متغيرات الحركة
//   const sectionVariant = {
//     hidden: { opacity: 0, y: 80 },
//     visible: { opacity: 1, y: 0 },
//   };

//   // بيانات الحلول
//   const solutions = [
//     {
//       icon: heroImage,
//       title: "إدارة المنتجات",
//       description:
//         "أدوات ذكية وسلسة لإدارة وإضافة المنتجات بسهولة ضمن واجهة مرنة.",
//       button: "اكتشف المزيد",
//       ref: ref1,
//       isInView: isInView1,
//     },
//     {
//       icon: heroI,
//       title: "الشحن والتوصيل",
//       description:
//         "تكامل مع شركات الشحن المحلية والدولية وخيارات تتبع متقدمة.",
//       button: "المزيد من التفاصيل",
//       ref: ref2,
//       isInView: isInView2,
//     },
//     {
//       icon: heroIm,
//       title: "الدفع الإلكتروني",
//       description:
//         "حلول دفع آمنة وسريعة تدعم كل الطرق المحلية والعالمية.",
//       button: "جرّب الآن",
//       ref: ref3,
//       isInView: isInView3,
//     },
//   ];

//   return (
//     <section id="solutions" className="py-20 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         {/* العنوان الرئيسي */}
//         <motion.h2
//           className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-20"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.7 }}
//         >
//           حلولنا المذهلة ✨
//         </motion.h2>

//         {/* عرض الحلول */}
//         {solutions.map((solution, index) => (
//           <motion.div
//             key={index}
//             ref={solution.ref}
//             variants={sectionVariant}
//             initial="hidden"
//             animate={solution.isInView ? "visible" : "hidden"}
//             transition={{ duration: 0.7, delay: index * 0.2 }}
//             className={`flex flex-col-reverse lg:flex-row${
//               index % 2 === 0 ? "-reverse" : ""
//             } items-center justify-between bg-white dark:bg-gray-800 rounded-3xl shadow-2xl mb-16 overflow-hidden`}
//           >
//             {/* النص */}
//             <div className="w-full lg:w-1/2 p-8 lg:p-12 text-center lg:text-right">
//               <div className="flex justify-center lg:justify-end mb-6">
//                 <Image src={solution.icon} alt="icon" width={60} height={60} />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
//                 {solution.title}
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-6">
//                 {solution.description}
//               </p>
//               {/* زر التفاعل */}
//               <Button className="rounded-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md hover:shadow-lg transition-shadow duration-300">
//                 {solution.button}
//               </Button>
//             </div>

//             {/* الصورة */}
//             <div className="w-full lg:w-1/2 h-64 lg:h-full">
//               <Image
//                 src={solution.icon}
//                 alt="حل"
//                 width={500}
//                 height={400}
//                 className="object-contain mx-auto p-8"
//               />
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }










// "use client"; // يشير إلى أن هذا مكون عميل (Client Component) في Next.js

// import { motion, useInView } from "framer-motion"; // استيراد motion و useInView من framer-motion للتحريك
// import { Button } from "@/components/ui/button"; // استيراد مكون Button مخصص
// import Image from "next/image"; // استيراد مكون الصورة من Next.js لتحسين الصور
// import { useRef } from "react"; // استيراد useRef من React
// import heroImage from "@/public/reshotqq.svg"; // استيراد الصور المحلية
// import heroI from "@/public/mimg-1.svg";
// import heroIm from "@/public/f3foreTop-1.svg";
// import solution1 from "@/public/mimg-1.svg"; // إضافة صور جديدة للحلول
// import solution2 from "@/public/f3foreTop-1.svg";
// import solution3 from "@/public/feature_2.png";
// import solution4 from "@/public/images/hero.webp";
// import solution5 from "@/public/reshotq.svg";
// import solution6 from "@/public/images/hero.webp";

// export default function SolutionsSection() {
//   // استخدام useRef و useInView لتتبع ظهور العناصر
//   const refs = Array.from({ length: 8 }, () => useRef(null)); // إنشاء مصفوفة من المراجع
//   const isInViews = refs.map((ref) => useInView(ref, { once: true })); // تتبع ظهور العناصر

//   // تعريف متغيرات الحركة
//   const sectionVariant = {
//     hidden: { opacity: 0, y: 80 },
//     visible: { opacity: 1, y: 0 },
//   };

//   // بيانات الحلول
//   const solutions = [
//     {
//       icon: heroImage,
//       title: "إدارة المنتجات",
//       description:
//         "أدوات ذكية وسلسة لإدارة وإضافة المنتجات بسهولة ضمن واجهة مرنة.",
//       button: "اكتشف المزيد",
//       ref: refs[0],
//       isInView: isInViews[0],
//     },
//     {
//       icon: heroI,
//       title: "الشحن والتوصيل",
//       description:
//         "تكامل مع شركات الشحن المحلية والدولية وخيارات تتبع متقدمة.",
        
//       button: "المزيد من التفاصيل",
//       ref: refs[1],
//       isInView: isInViews[1],
//     },
//     {
//       icon: heroIm,
//       title: "الدفع الإلكتروني",
//       description:
//         "حلول دفع آمنة وسريعة تدعم كل الطرق المحلية والعالمية.",
//       button: "جرّب الآن",
//       ref: refs[2],
//       isInView: isInViews[2],
//     },
//     {
//       icon: solution1,
//       title: "تحليلات البيانات",
//       description:
//         "أدوات متقدمة لتحليل البيانات وتقديم رؤى قابلة للتنفيذ لتحسين الأعمال.",
//       button: "تعرف أكثر",
//       ref: refs[3],
//       isInView: isInViews[3],
//     },
//     {
//       icon: solution2,
//       title: "التسويق الرقمي",
//       description:
//         "حلول تسويقية متكاملة لزيادة الوصول والتفاعل مع العملاء.",
//       button: "ابدأ الآن",
//       ref: refs[4],
//       isInView: isInViews[4],
//     },
//     {
//       icon: solution3,
//       title: "دعم العملاء",
//       description:
//         "أنظمة دعم عملاء متقدمة لتقديم تجربة استثنائية للعملاء.",
//       button: "تواصل معنا",
//       ref: refs[5],
//       isInView: isInViews[5],
//     },
//     {
//       icon: solution4,
//       title: "الأمان والحماية",
//       description:
//         "حلول أمنية متكاملة لحماية بياناتك وضمان خصوصية العملاء.",
//       button: "تعرف على المزيد",
//       ref: refs[6],
//       isInView: isInViews[6],
//     },
//     {
//       icon: solution5,
//       title: "التخصيص والتكامل",
//       description:
//         "حلول قابلة للتخصيص والتكامل مع أنظمتك الحالية بسهولة.",
//       button: "اكتشف الحلول",
//       ref: refs[7],
//       isInView: isInViews[7],
//     },
//     {
//       icon: solution6,
//       title: "التسويق الرقمي",
//       description:
//         "حلول قابلة للتخصيص والتكامل مع أنظمتك الحالية بسهولة.",
//       button: "اكتشف الحلول",
//       ref: refs[7],
//       isInView: isInViews[7],
//     },
//   ];

//   return (
// <section id="solutions" className="py-20 bg-gradient-to-b from-gray-50 via-white
//  to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
//   <div className="container mx-auto px-6">
//     {/* العنوان الرئيسي */}
//     <motion.h2
//       className="text-4xl lg:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-24 tracking-tight leading-snug"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       ✨ حلولنا المذهلة التي تصنع الفرق ✨
//     </motion.h2>

//     {/* عرض الحلول */}
//     {solutions.map((solution, index) => (
//       <motion.div
//         key={index}
//         ref={solution.ref}
//         variants={sectionVariant}
//         initial="hidden"
//         animate={solution.isInView ? "visible" : "hidden"}
//         transition={{ duration: 0.7, delay: index * 0.2 }}
//         className={`group flex flex-col-reverse lg:flex-row${
//           index % 2 === 0 ? "-reverse" : ""
//         } items-center justify-between bg-white/90 dark:bg-gray-800/80 rounded-3xl shadow-xl ring-1
//          ring-gray-200 dark:ring-gray-700 mb-20 overflow-hidden hover:scale-[1.01] transition-all duration-500`}
//       >
//         {/* النص */}
//         <div className="w-full lg:w-1/2 p-10 lg:p-14 text-center lg:text-right space-y-6">
//           <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
//             {solution.title}
//           </h3>
//           <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
//             {solution.description}
//           </p>
//           <Button className="rounded-full px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm tracking-wide shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
//             {solution.button}
//           </Button>
//         </div>

//         {/* الصورة */}
//         <div className="relative w-full lg:w-1/2 h-72 lg:h-[400px] overflow-hidden">
//           <Image
//             src={solution.icon}
//             alt="حل"
//             fill
//             className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
//           />
//         </div>
//       </motion.div>
//     ))}
//   </div>
// </section>

//   );
// }


"use client";

import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef } from "react";
import heroImage from "@/public/f3foreTop-1.svg";
import heroI from "@/public/mimg-1.svg";
import heroIm from "@/public/f3foreTop-1.svg";
import solution1 from "@/public/mimg-1.svg";
import solution2 from "@/public/f3foreTop-1.svg";
import solution3 from "@/public/feature_2.png";
import solution4 from "@/public/images/hero.webp";
import solution5 from "@/public/reshotq.svg";

export default function SolutionsSection() {
  const solutions = [
    {
      icon: heroImage,
      title: "إدارة المنتجات",
      description: "أدوات ذكية وسلسة لإدارة وإضافة المنتجات بسهولة ضمن واجهة مرنة.",
      button: "اكتشف المزيد",
    },
    {
      icon: heroI,
      title: "الشحن والتوصيل",
      description: "تكامل مع شركات الشحن المحلية والدولية وخيارات تتبع متقدمة.",
      button: "المزيد من التفاصيل",
    },
    {
      icon: heroIm,
      title: "الدفع الإلكتروني",
      description: "حلول دفع آمنة وسريعة تدعم كل الطرق المحلية والعالمية.",
      button: "جرّب الآن",
    },
    {
      icon: solution1,
      title: "تحليلات البيانات",
      description: "أدوات متقدمة لتحليل البيانات وتقديم رؤى قابلة للتنفيذ لتحسين الأعمال.",
      button: "تعرف أكثر",
    },
    {
      icon: solution2,
      title: "التسويق الرقمي",
      description: "حلول تسويقية متكاملة لزيادة الوصول والتفاعل مع العملاء.",
      button: "ابدأ الآن",
    },
    {
      icon: solution3,
      title: "دعم العملاء",
      description: "أنظمة دعم عملاء متقدمة لتقديم تجربة استثنائية للعملاء.",
      button: "تواصل معنا",
    },
    {
      icon: solution4,
      title: "الأمان والحماية",
      description: "حلول أمنية متكاملة لحماية بياناتك وضمان خصوصية العملاء.",
      button: "تعرف على المزيد",
    },
    {
      icon: solution5,
      title: "التخصيص والتكامل",
      description: "حلول قابلة للتخصيص والتكامل مع أنظمتك الحالية بسهولة.",
      button: "اكتشف الحلول",
    },
    {
      icon: solution5,
      title: "دعم من الخبراء يليق بتجارك ",
      description: "مساعدة من فريق يتميّز بالسرعة والتواجد وفوقها الخبرة! لا تتردد بطلب المساعدة وقت الحاجة.",
      button: "تواصل معنا",
    },
  ];

  const titleVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section
      id="solutions"
      className="py-10 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-12">
        <motion.h2
          className="text-5xl lg:text-5xl font-bold  text-center text-[#3f3acd] dark:text-white mb-16 tracking-tight leading-snug"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
         حلول مبتكرة تميزك في عالم التجارة الإلكترونية 
        </motion.h2>

        {solutions.map((solution, index) => {
          const sectionRef = useRef(null);
          const isInView = useInView(sectionRef, { once: true });

          return (
            <motion.div
              key={index}
              ref={sectionRef}
              className={`group flex flex-col-reverse lg:flex-row${
                index % 2 === 0 ? "-reverse" : ""
              } items-center justify-between bg-white/90 dark:bg-gray-800/80 rounded-3xl shadow-xl ring-1 ring-gray-200 dark:ring-gray-700 mb-20 overflow-hidden`}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
              variants={contentVariants}
            >
              {/* النصوص */}
              <div className="w-full lg:w-1/2 p-10 lg:p-14 text-center lg:text-right space-y-6">
              {/* عنوان الحل */}
              <motion.h3
                className="text-3xl lg:text-4xl font-bold text-[#1e1b6f] dark:text-white transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                {solution.title}
              </motion.h3>
              
              {/* وصف الحل */}
              <motion.p
                className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {solution.description}
              </motion.p>

              {/* زر */}
              <motion.div
                className="transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Button className="rounded-full px-8 py-4 bg-primary  text-white text-sm tracking-wide shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                  {solution.button}
                </Button>
              </motion.div>
            </div>

              {/* الصورة */}
              <motion.div
                className="relative w-full lg:w-1/2 h-72 lg:h-[400px] overflow-hidden"
                variants={imageVariants}
              >
                <Image
                  src={solution.icon}
                  alt="حل"
                  fill
                  className="object-contain object-center"
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}



// "use client";

// import { motion, useInView } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { useRef } from "react";
// import heroImage from "@/public/reshotqq.svg";
// import heroI from "@/public/mimg-1.svg";
// import heroIm from "@/public/f3foreTop-1.svg";
// import solution1 from "@/public/mimg-1.svg";
// import solution2 from "@/public/f3foreTop-1.svg";
// import solution3 from "@/public/feature_2.png";
// import solution4 from "@/public/images/hero.webp";
// import solution5 from "@/public/reshotq.svg";

// export default function SolutionsSection() {
//   const refs = Array.from({ length: 8 }, () => (null));
//   const isInViews = refs.map((ref) => (ref, { once: true }));

//   // تحريك العنوان الرئيسي
//   const titleVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
//   };

//   // تحريك العناصر بشكل متتالي
//   const staggerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
//   };

//   // تحريك الصور
//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.8, rotate: -10 },
//     visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, ease: "easeOut" } },
//   };

//   // تحريك الأزرار
//   const buttonVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", stiffness: 100 } },
//   };

//   const solutions = [
//     {
//       icon: heroImage,
//       title: "إدارة المنتجات",
//       description: "أدوات ذكية وسلسة لإدارة وإضافة المنتجات بسهولة ضمن واجهة مرنة.",
//       button: "اكتشف المزيد",
//       ref: refs[0],
//       isInView: isInViews[0],
//     },
//     {
//       icon: heroI,
//       title: "الشحن والتوصيل",
//       description: "تكامل مع شركات الشحن المحلية والدولية وخيارات تتبع متقدمة.",
//       button: "المزيد من التفاصيل",
//       ref: refs[1],
//       isInView: isInViews[1],
//     },
//     {
//       icon: heroIm,
//       title: "الدفع الإلكتروني",
//       description: "حلول دفع آمنة وسريعة تدعم كل الطرق المحلية والعالمية.",
//       button: "جرّب الآن",
//       ref: refs[2],
//       isInView: isInViews[2],
//     },
//     {
//       icon: solution1,
//       title: "تحليلات البيانات",
//       description: "أدوات متقدمة لتحليل البيانات وتقديم رؤى قابلة للتنفيذ لتحسين الأعمال.",
//       button: "تعرف أكثر",
//       ref: refs[3],
//       isInView: isInViews[3],
//     },
//     {
//       icon: solution2,
//       title: "التسويق الرقمي",
//       description: "حلول تسويقية متكاملة لزيادة الوصول والتفاعل مع العملاء.",
//       button: "ابدأ الآن",
//       ref: refs[4],
//       isInView: isInViews[4],
//     },
//     {
//       icon: solution3,
//       title: "دعم العملاء",
//       description: "أنظمة دعم عملاء متقدمة لتقديم تجربة استثنائية للعملاء.",
//       button: "تواصل معنا",
//       ref: refs[5],
//       isInView: isInViews[5],
//     },
//     {
//       icon: solution4,
//       title: "الأمان والحماية",
//       description: "حلول أمنية متكاملة لحماية بياناتك وضمان خصوصية العملاء.",
//       button: "تعرف على المزيد",
//       ref: refs[6],
//       isInView: isInViews[6],
//     },
//     {
//       icon: solution5,
//       title: "التخصيص والتكامل",
//       description: "حلول قابلة للتخصيص والتكامل مع أنظمتك الحالية بسهولة.",
//       button: "اكتشف الحلول",
//       ref: refs[7],
//       isInView: isInViews[7],
//     },
//   ];

//   return (
//     <section
//       id="solutions"
//       className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
//     >
//       <div className="container mx-auto px-6">
//         {/* العنوان الرئيسي */}
//         <motion.h2
//           className="text-4xl lg:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-4 tracking-tight leading-snug"
//           variants={titleVariants}
//           initial="hidden"
//           whileInView="visible"
//         >
//           ✨ حلولنا المذهلة التي تصنع الفرق ✨
//         </motion.h2>

//         {/* عرض الحلول */}
//         {solutions.map((solution, index) => (
//           <motion.div
//             key={index}
//             ref={solution.ref}
//             variants={staggerVariants}
//             initial="hidden"
//             animate={solution.isInView ? "visible" : "hidden"}
//             transition={{ delay: index * 0.2 }}
//             className={`group flex flex-col-reverse lg:flex-row${
//               index % 2 === 0 ? "-reverse" : ""
//             } items-center justify-between bg-white/90 dark:bg-gray-800/80 rounded-3xl shadow-xl ring-1 ring-gray-200 dark:ring-gray-700 mb-20 overflow-hidden`}
//           >
//             {/* النص */}
            // <div className="w-full lg:w-1/2 p-10 lg:p-14 text-center lg:text-right space-y-6">
            //   {/* عنوان الحل */}
            //   <motion.h3
            //     className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
            //     initial={{ opacity: 0, y: 30 }}
            //     whileInView={{ opacity: 1, y: 0 }}
            //     transition={{ duration: 0.7 }}
            //   >
            //     {solution.title}
            //   </motion.h3>
              
            //   {/* وصف الحل */}
            //   <motion.p
            //     className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
            //     initial={{ opacity: 0, y: 30 }}
            //     whileInView={{ opacity: 1, y: 0 }}
            //     transition={{ duration: 0.8 }}
            //   >
            //     {solution.description}
            //   </motion.p>

            //   {/* زر */}
            //   <motion.div
            //     className="transition-all duration-300"
            //     initial={{ opacity: 0, y: 30 }}
            //     whileInView={{ opacity: 1, y: 0 }}
            //     transition={{ duration: 0.8 }}
            //   >
            //     <Button className="rounded-full px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm tracking-wide shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
            //       {solution.button}
            //     </Button>
            //   </motion.div>
            // </div>

//             {/* الصورة */}
//             <motion.div
//               className="relative w-full lg:w-1/2 h-72 lg:h-[400px] overflow-hidden"
//               variants={imageVariants}
//               initial="hidden"
//               animate={solution.isInView ? "visible" : "hidden"}
//               transition={{ delay: 0.4 }}
//             >
//               <Image
//                 src={solution.icon}
//                 alt="حل"
//                 fill
//                 className="object-contain object-center"
//               />
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }






// "use client";

// import { motion, useInView } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { useRef } from "react";
// import heroImage from "@/public/reshotqq.svg";
// import heroI from "@/public/mimg-1.svg";
// import hero from "@/public/f4foreCenter-1.svg";
// import heroIm from "@/public/f3foreTop-1.svg";
// export default function SolutionsSection() {
//   const ref1 = useRef(null);
//   const isInView1 = useInView(ref1, { once: true });

//   const ref2 = useRef(null);
//   const isInView2 = useInView(ref2, { once: true });

//   const ref3 = useRef(null);
//   const isInView3 = useInView(ref3, { once: true });

//   const sectionVariant = {
//     hidden: { opacity: 0, y: 80 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const solutions = [
//     {
//       icon: heroImage,
//       title: "إدارة المنتجات",
//       description:
//         "أدوات ذكية وسلسة لإدارة وإضافة المنتجات بسهولة ضمن واجهة مرنة.",
//       button: "اكتشف المزيد",
//       ref: ref1,
//       isInView: isInView1,
//     },
//     {
//       icon: heroI,
//       title: "الشحن والتوصيل",
//       description:
//         "تكامل مع شركات الشحن المحلية والدولية وخيارات تتبع متقدمة.",
//       button: "المزيد من التفاصيل",
//       ref: ref2,
//       isInView: isInView2,
//     },
//     {
//       icon: heroIm,
//       title: "الدفع الإلكتروني",
//       description:
//         "حلول دفع آمنة وسريعة تدعم كل الطرق المحلية والعالمية.",
//       button: "جرّب الآن",
//       ref: ref3,
//       isInView: isInView3,
//     },
//   ];

//   return (
//     <section id="solutions" className="py-12 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-1">
//         <motion.h2
//           className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-0"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.7 }}
//         >
//           حلولنا المذهلة ✨
//         </motion.h2>

//         {solutions.map((solution, index) => (
//           <motion.div
//             key={index}
//             ref={solution.ref}
//             variants={sectionVariant}
//             initial="hidden"
//             animate={solution.isInView ? "visible" : "hidden"}
//             transition={{ duration: 0.7, delay: index * 0.2 }}
//             className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between bg-white dark:bg-gray-800 rounded-3xl shadow-2xl mb-16 overflow-hidden"
//           >
//             {/* النص */}
//             <div className="w-full lg:w-1/2 p-8 lg:p-12 text-center lg:text-right">
//               <div className="flex justify-center lg:justify-end mb-6">
//                 <Image src={solution.icon} alt="icon" width={60} height={60} />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
//                 {solution.title}
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-6">
//                 {solution.description}
//               </p>
//               <Button className="rounded-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md">
//                 {solution.button}
//               </Button>
//             </div>

//             {/* الصورة */}
//             <div className="w-full lg:w-1/2 h-64 lg:h-full">
//               <Image
//                 src={solution.icon}
//                 alt="حل"
//                 width={500}
//                 height={400}
//                 className="object-contain mx-auto p-2"
//               />
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// "use client";

// import { motion, useInView } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { useRef } from "react";

// import heroImage from "@/public/reshotqq.svg";

// export default function SolutionsSection() {
//   const ref1 = useRef(null);
//   const isInView1 = useInView(ref1, { once: true });

//   const ref2 = useRef(null);
//   const isInView2 = useInView(ref2, { once: true });

//   const ref3 = useRef(null);
//   const isInView3 = useInView(ref3, { once: true });

//   const cardVariant = {
//     hidden: { opacity: 0, y: 60 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <section id="solutions" className="py-16 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <motion.h2
//           className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.7 }}
//         >
//           حلولنا المذهلة ✨
//         </motion.h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {/* Card 1 */}
//           <motion.div
//             ref={ref1}
//             variants={cardVariant}
//             initial="hidden"
//             animate={isInView1 ? "visible" : "hidden"}
//             transition={{ duration: 0.6, delay: 0 }}
//             className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition-transform duration-300"
//           >
//             <div className="flex justify-center mb-4">
//               <Image src={heroImage} alt="Icon" width={48} height={48} />
//             </div>
//             <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
//               إدارة المنتجات
//             </h3>
//             <p className="text-gray-600 dark:text-gray-300 mb-5">
//               أدوات ذكية وسلسة لإدارة وإضافة المنتجات بسهولة ضمن واجهة مرنة.
//             </p>
//             <Button className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md">
//               اكتشف المزيد
//             </Button>
//           </motion.div>

//           {/* Card 2 */}
//           <motion.div
//             ref={ref2}
//             variants={cardVariant}
//             initial="hidden"
//             animate={isInView2 ? "visible" : "hidden"}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition-transform duration-300"
//           >
//             <div className="flex justify-center mb-4">
//               <Image src={heroImage} alt="Icon" width={48} height={48} />
//             </div>
//             <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
//               الشحن والتوصيل
//             </h3>
//             <p className="text-gray-600 dark:text-gray-300 mb-5">
//               تكامل مع شركات الشحن المحلية والدولية وخيارات تتبع متقدمة.
//             </p>
//             <Button className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md">
//               المزيد من التفاصيل
//             </Button>
//           </motion.div>

//           {/* Card 3 */}
//           <motion.div
//             ref={ref3}
//             variants={cardVariant}
//             initial="hidden"
//             animate={isInView3 ? "visible" : "hidden"}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition-transform duration-300"
//           >
//             <div className="flex justify-center mb-4">
//               <Image src={heroImage} alt="Icon" width={48} height={48} />
//             </div>
//             <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
//               الدفع الإلكتروني
//             </h3>
//             <p className="text-gray-600 dark:text-gray-300 mb-5">
//               حلول دفع آمنة وسريعة تدعم كل الطرق المحلية والعالمية.
//             </p>
//             <Button className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md">
//               جرّب الآن
//             </Button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
