// import React from 'react';
// import { getData } from '../../../lib/getData';
// import Banner from './Banner';
// import AutoPlay from './AutoPlay';
// import CategoryList from './CategoryList';
// import Testimonials from './Testimonials';
// import PremiumFeatureCard from './FavaroteProducts';
// import { ParallaxWrapper } from './ParallaxWrapper';

// export default async function Home({ 
//   banners = [], 
//   storeId = {}, 
//   products = [], 
//   customization = {}, 
//   slugDomain = '', 
//   categories = [] 
// }) {
//   const categoriesData = await getData(`/categories?storeId=${storeId}`);
//   const filteredCategories = categoriesData.filter(category => category.products?.length > 0);

//   return (
//     <div dir='rtl' className="bg-white">
//       {/* Hero Banner */}
//       <ParallaxWrapper speed={0.6} direction="down" fade>
//         <Banner banners={banners} storeId={storeId} customization={customization} />
//       </ParallaxWrapper>

//       {/* AutoPlay Section */}
//       <ParallaxWrapper speed={0.4} direction="up" fade>
//         <AutoPlay 
//           customization={customization}
//           storeId={storeId}
//           slugDomain={slugDomain}
//           categories={categories}
//         />
//       </ParallaxWrapper>
     
//       {/* Categories Sections */}
//       {filteredCategories.map((category, index) => (
//         <ParallaxWrapper 
//           key={category.id}
//           speed={0.2 + (index * 0.01)}
//           direction={index % 2 === 0 ? 'left' : 'right'}
//           fade
//           className={`py-16 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
//           viewportMargin="-200px"
//         >
//           <CategoryList 
//             category={category}
//             storeId={storeId}
//             customization={customization}
//             slugDomain={slugDomain}
//           />
//         </ParallaxWrapper>
//       ))}

//       {/* Testimonials Section */}
//       <ParallaxWrapper speed={0.3} direction="up" scale>
//         <Testimonials customization={customization} storeId={storeId} />
//       </ParallaxWrapper>

//       {/* Premium Features */}
//       <ParallaxWrapper speed={0.1} direction="up"  fade>
//         <PremiumFeatureCard 
//           products={products}
//           storeId={storeId}
//           customization={customization}
//         />
//       </ParallaxWrapper>
//     </div>
//   );
// }
// import React from 'react';
// import { getData } from '../../../lib/getData';
// import Banner from './Banner';
// import AutoPlay from './AutoPlay';
// import CategoryList from './CategoryList';
// import Testimonials from './Testimonials';
// import PremiumFeatureCard from './FavaroteProducts';
// import { ParallaxWrapper } from './ParallaxWrapper';

// export default async function Home({ 
//   banners = [], 
//   storeId = {}, 
//   products = [], 
//   customization = {}, 
//   slugDomain = '', 
//   categories = [] 
// }) {
//   try {
//     const categoriesData = await getData(`/categories?storeId=${storeId}`);
//     const filteredCategories = categoriesData?.filter(category => category.products?.length > 0) || [];

//     return (
//       <div dir='rtl' className="bg-white">
//         {/* Hero Banner مع تأثير ثلاثي الأبعاد */}
//         <ParallaxWrapper 
//           direction="down" 
//           intensity={0.8}
//           fade
//           rotate3d
//           className="shadow-lg h-screen"
//         >
//           <Banner banners={banners} storeId={storeId} customization={customization} />
//         </ParallaxWrapper>

//         {/* AutoPlay Section */}
//         <ParallaxWrapper 
//           direction="up" 
//           intensity={0.6}
//           fade
//           className="py-20 bg-gradient-to-b from-white to-gray-50"
//         >
//           <div className="container mx-auto px-4">
//             <AutoPlay 
//               customization={customization}
//               storeId={storeId}
//               slugDomain={slugDomain}
//               categories={categories}
//             />
//           </div>
//         </ParallaxWrapper>
      
//         {/* Categories Sections مع تأثيرات متناوبة */}
//         {filteredCategories.map((category, index) => (
//           <ParallaxWrapper 
//             key={category.id}
//             direction={index % 2 === 0 ? 'left' : 'right'}
//             intensity={0.5 + (index * 0.02)}
//             fade={index % 3 === 0}
//             rotate3d={index % 4 === 0}
//             className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
//           >
//             <div className="container mx-auto px-4">
//               <CategoryList 
//                 category={category}
//                 storeId={storeId}
//                 customization={customization}
//                 slugDomain={slugDomain}
//               />
//             </div>
//           </ParallaxWrapper>
//         ))}

//         {/* Testimonials Section مع تأثير ثلاثي الأبعاد */}
//         <ParallaxWrapper 
//           direction="up" 
//           intensity={0.7}
//           rotate3d
//           className="py-20 bg-gray-900 text-white"
//         >
//           <div className="container mx-auto px-4">
//             <Testimonials customization={customization} storeId={storeId} />
//           </div>
//         </ParallaxWrapper>

//         {/* Premium Features */}
//         <ParallaxWrapper 
//           direction="down" 
//           intensity={0.4}
//           scale
//           className="py-20 bg-white"
//         >
//           <div className="container mx-auto px-4">
//             <PremiumFeatureCard 
//               products={products}
//               storeId={storeId}
//               customization={customization}
//             />
//           </div>
//         </ParallaxWrapper>
//       </div>
//     );
//   } catch (error) {
//     console.error("Error loading home page:", error);
//     return <div className="p-4 text-red-500">حدث خطأ في تحميل الصفحة</div>;
//   }
// }
// "use client";
// import React, { useState, useEffect, useMemo } from "react";
// import { getData } from '../../../lib/getData';
// import Banner from './Banner';
// import AutoPlay from './AutoPlay';
// import CategoryList from './CategoryList';
// import Testimonials from './Testimonials';
// import PremiumFeatureCard from './FavaroteProducts';
// import { ParallaxWrapper } from './ParallaxWrapper';
// import { useTheme } from "next-themes";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import { AnimatePresence, motion } from "framer-motion";

// export default function Home({ 
//   banners = [], 
//   storeId = {}, 
//   products = [], 
//   customization = {}, 
//   slugDomain = '', 
//   categories = [] 
// }) {
//   const [isLoading, setIsLoading] = useState(true);
//   const [filteredCategories, setFilteredCategories] = useState([]);
//   const { theme, resolvedTheme } = useTheme();
//   const [isMounted, setIsMounted] = useState(false);

//   // التأكد من تركيب المكون لتجنب مشاكل hydration
//   useEffect(() => setIsMounted(true), []);

//   // نظام الألوان المحسن مع تأثيرات انتقال سلسة
//   const themeColors = useMemo(() => ({
//     primary: customization?.primaryColor || '#3b82f6',
//     secondary: customization?.secondaryColor || '#10b981',
//     accent: customization?.accentColor || '#f59e0b',
//     text: resolvedTheme === 'dark' ? customization?.darkTextColor || '#f8fafc' : customization?.textColor || '#1e293b',
//     background: resolvedTheme === 'dark' ? customization?.darkBackgroundColor || '#0f172a' : customization?.backgroundColor || '#ffffff',
//     button: resolvedTheme === 'dark' ? customization?.darkButtonColor || '#1e293b' : customization?.buttonColor || '#3b82f6',
//     buttonText: customization?.buttonTextColor || '#ffffff',
//     cardBg: resolvedTheme === 'dark' ? customization?.darkCardBackground || '#1e293b' : customization?.cardBackground || '#ffffff',
//     border: resolvedTheme === 'dark' ? customization?.darkBorderColor || '#334155' : customization?.borderColor || '#e2e8f0',
//     headerOverlayDark: customization?.headerOverlayDark || 'rgba(0,0,0,0.9)',
//     headerOverlayLight: customization?.headerOverlayLight || 'rgba(0,0,0,0.3)',
//     glassEffect: resolvedTheme === 'dark' ? 'rgba(15, 23, 42, 0.7)' : 'rgba(255, 255, 255, 0.7)'
//   }), [resolvedTheme, customization]);

//   // جلب البيانات مع معالجة الأخطاء المحسنة
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const categoriesData = await getData(`/categories?storeId=${storeId}`);
//         setFilteredCategories(categoriesData?.filter(category => category.products?.length > 0) || []);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (categories.length === 0) {
//       fetchCategories();
//     } else {
//       setFilteredCategories(categories.filter(category => category.products?.length > 0));
//       setIsLoading(false);
//     }
//   }, [storeId, categories]);

//   // تأثيرات دخول الصفحة
//   const pageVariants = {
//     initial: { opacity: 0 },
//     animate: { 
//       opacity: 1,
//       transition: { duration: 0.5, ease: "easeInOut" }
//     },
//     exit: { opacity: 0 }
//   };

//   if (!isMounted) {
//     return null; // تجنب عرض أي شيء حتى يتم تركيب المكون
//   }

//   if (isLoading) {
//     return (
//       <motion.div
//         initial="initial"
//         animate="animate"
//         exit="exit"
//         variants={pageVariants}
//         className="min-h-screen p-4" 
//         style={{ 
//           backgroundColor: themeColors.background,
//           color: themeColors.text
//         }}
//       >
//         <div className="container mx-auto">
//           <Skeleton 
//             height={600} 
//             className="rounded-2xl mb-8" 
//             baseColor={resolvedTheme === 'dark' ? '#1e293b' : '#e2e8f0'}
//             highlightColor={resolvedTheme === 'dark' ? '#334155' : '#f1f5f9'}
//           />
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[...Array(4)].map((_, i) => (
//               <Skeleton 
//                 key={i} 
//                 height={300} 
//                 className="rounded-2xl"
//                 baseColor={resolvedTheme === 'dark' ? '#1e293b' : '#e2e8f0'}
//                 highlightColor={resolvedTheme === 'dark' ? '#334155' : '#f1f5f9'}
//               />
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     );
//   }

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={resolvedTheme} // إعادة تحريك الصفحة عند تغيير الوضع
//         initial="initial"
//         animate="animate"
//         exit="exit"
//         variants={pageVariants}
//         dir='rtl' 
//         className="min-h-screen transition-colors duration-500"
//         style={{
//           backgroundColor: themeColors.background,
//           color: themeColors.text,
//           fontFamily: customization?.fontFamily || 'sans-serif'
//         }}
//       >
//         {/* Hero Banner مع تأثيرات ثلاثية الأبعاد متطورة */}
//         <ParallaxWrapper 
//           direction="down" 
//           intensity={0.8}
//           fade
//           rotate3d
//           springConfig={{ stiffness: 150, damping: 30 }}
//           className="shadow-2xl h-screen"
//         >
//           <Banner 
//             banners={banners} 
//             storeId={storeId} 
//             customization={customization} 
//             themeColors={themeColors}
//           />
//         </ParallaxWrapper>

//         {/* AutoPlay Section بتصميم زجاجي عصري */}
//         <ParallaxWrapper 
//           direction="up" 
//           intensity={0.6}
//           fade
//           className="py-20 backdrop-blur-sm"
//           style={{
//             background: `linear-gradient(to bottom, ${hexToRgba(themeColors.background, 0.9)}, ${hexToRgba(themeColors.secondary, 0.1)})`,
//             borderTop: `1px solid ${hexToRgba(themeColors.border, 0.2)}`,
//             borderBottom: `1px solid ${hexToRgba(themeColors.border, 0.2)}`
//           }}
//         >
//           <div className="container mx-auto px-4 max-w-7xl">
//             <AutoPlay 
//               customization={customization}
//               storeId={storeId}
//               slugDomain={slugDomain}
//               categories={categories}
//               themeColors={themeColors}
//             />
//           </div>
//         </ParallaxWrapper>
      
//         {/* Categories Sections بتأثيرات متناوبة متطورة */}
//         {filteredCategories.map((category, index) => (
//           <ParallaxWrapper 
//             key={`${category.id}-${index}`}
//             direction={index % 2 === 0 ? 'left' : 'right'}
//             intensity={0.5 + (index * 0.02)}
//             fade={index % 3 === 0}
//             rotate3d={index % 4 === 0}
//             springConfig={{ stiffness: 200, damping: 25 }}
//             className="py-20"
//             style={{
//               backgroundColor: index % 2 === 0 
//                 ? hexToRgba(themeColors.secondary, 0.05)
//                 : hexToRgba(themeColors.background, 0.9),
//               backdropFilter: 'blur(8px)'
//             }}
//           >
//             <div className="container mx-auto px-4 max-w-7xl">
//               <CategoryList 
//                 category={category}
//                 storeId={storeId}
//                 customization={customization}
//                 slugDomain={slugDomain}
//                 themeColors={themeColors}
//               />
//             </div>
//           </ParallaxWrapper>
//         ))}

//         {/* Testimonials Section بتصميم مميز */}
//         <ParallaxWrapper 
//           direction="up" 
//           intensity={0.7}
//           rotate3d
//           springConfig={{ stiffness: 100, damping: 20 }}
//           className="py-20 relative overflow-hidden"
//           style={{
//             backgroundColor: hexToRgba(themeColors.primary, 0.9),
//             color: themeColors.buttonText,
//             borderTop: `1px solid ${hexToRgba(themeColors.primary, 0.3)}`
//           }}
//         >
//           <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-white to-transparent"></div>
//           <div className="container mx-auto px-4 max-w-7xl relative z-10">
//             <Testimonials 
//               customization={customization} 
//               storeId={storeId}
//               themeColors={themeColors}
//             />
//           </div>
//         </ParallaxWrapper>

//         {/* Premium Features بتأثيرات مميزة */}
//         <ParallaxWrapper 
//           direction="down" 
//           intensity={0.4}
//           scale
//           springConfig={{ stiffness: 250, damping: 25 }}
//           className="py-20 backdrop-blur-xs"
//           style={{
//             backgroundColor: hexToRgba(themeColors.background, 0.95),
//             borderTop: `1px solid ${hexToRgba(themeColors.border, 0.2)}`
//           }}
//         >
//           <div className="container mx-auto px-4 max-w-7xl">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               <PremiumFeatureCard 
//                 products={products}
//                 storeId={storeId}
//                 customization={customization}
//                 themeColors={themeColors}
//               />
//             </motion.div>
//           </div>
//         </ParallaxWrapper>

//         {/* Floating Navigation Button (New) */}
//         <motion.div
//           className="fixed bottom-8 left-8 z-50"
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 1 }}
//         >
//           <button
//             className="p-3 rounded-full shadow-xl backdrop-blur-md"
//             style={{
//               backgroundColor: hexToRgba(themeColors.button, 0.8),
//               color: themeColors.buttonText,
//               border: `1px solid ${hexToRgba(themeColors.border, 0.2)}`
//             }}
//             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
//             </svg>
//           </button>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }

// // دالة مساعدة محسنة لتحويل الألوان
// function hexToRgba(hex, opacity = 1) {
//   if (!hex || typeof hex !== 'string') return '';
//   const hexColor = hex.replace('#', '');
//   const r = parseInt(hexColor.substring(0, 2), 16);
//   const g = parseInt(hexColor.substring(2, 4), 16);
//   const b = parseInt(hexColor.substring(4, 6), 16);
//   return `rgba(${r}, ${g}, ${b}, ${opacity})`;
// }
// 'use client';
// import { useState, useEffect, useMemo, useCallback } from 'react';
// import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
// import { useTheme } from 'next-themes';
// import dynamic from 'next/dynamic';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// // Dynamic imports for better performance
// const Banner = dynamic(() => import('./Banner'), { 
//   loading: () => <Skeleton height={600} className="rounded-2xl" />
// });
// const AutoPlay = dynamic(() => import('./AutoPlay'));
// const CategoryList = dynamic(() => import('./CategoryList'));
// const Testimonials = dynamic(() => import('./Testimonials'));
// const PremiumFeatureCard = dynamic(() => import('./FavaroteProducts'));
// const ParallaxWrapper = dynamic(() => import('./ParallaxWrapper'));

// const Home = ({ 
//   banners = [], 
//   storeId = {}, 
//   products = {}, 
//   customization = {}, 
//   slugDomain = '', 
//   categories = {} 
// }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [filteredCategories, setFilteredCategories] = useState([]);
//   const { resolvedTheme } = useTheme();
//   const [isMounted, setIsMounted] = useState(false);
//   const { scrollYProgress } = useScroll();
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

//   useEffect(() => setIsMounted(true), []);

//   const themeColors = useMemo(() => ({
//     primary: customization?.primaryColor || '#3b82f6',
//     secondary: customization?.secondaryColor || '#10b981',
//     accent: customization?.accentColor || '#f59e0b',
//     text: resolvedTheme === 'dark' ? customization?.darkTextColor || '#f8fafc' : customization?.textColor || '#1e293b',
//     background: resolvedTheme === 'dark' ? customization?.darkBackgroundColor || '#0f172a' : customization?.backgroundColor || '#ffffff',
//     button: resolvedTheme === 'dark' ? customization?.darkButtonColor || '#1e293b' : customization?.buttonColor || '#3b82f6',
//     buttonText: customization?.buttonTextColor || '#ffffff',
//     cardBg: resolvedTheme === 'dark' ? customization?.darkCardBackground || '#1e293b' : customization?.cardBackground || '#ffffff',
//     border: resolvedTheme === 'dark' ? customization?.darkBorderColor || '#334155' : customization?.borderColor || '#e2e8f0',
//   }), [resolvedTheme, customization]);

//   const fetchCategories = useCallback(async () => {
//     try {
//       const data = await (await fetch(`/api/categories?storeId=${storeId}`)).json();
//       setFilteredCategories(data?.filter(c => c.products?.length > 0) || []);
//     } catch (error) {
//       console.error("Fetch error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [storeId]);

//   useEffect(() => {
//     if (categories.length === 0) {
//       fetchCategories();
//     } else {
//       setFilteredCategories(categories.filter(c => c.products?.length > 0));
//       setIsLoading(false);
//     }
//   }, [categories, fetchCategories]);

//   const pageTransition = {
//     initial: { opacity: 0, y: 20 },
//     animate: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
//     },
//     exit: { opacity: 0, y: -20 }
//   };

//   if (!isMounted) return null;

//   if (isLoading) {
//     return (
//       <motion.div
//         {...pageTransition}
//         className="min-h-screen p-4" 
//         style={{ backgroundColor: themeColors.background }}
//       >
//         <div className="container mx-auto space-y-8">
//           <Skeleton height={600} className="rounded-2xl" />
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[...Array(4)].map((_, i) => (
//               <Skeleton key={i} height={300} className="rounded-2xl" />
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     );
//   }

//   return (
//     <AnimatePresence mode="wait">
//       <motion.main
//         key={`${resolvedTheme}-home`}
//         {...pageTransition}
//         style={{ 
//           backgroundColor: themeColors.background,
//           color: themeColors.text,
//           fontFamily: customization?.fontFamily || 'var(--font-sans)'
//         }}
//         className="min-h-screen"
//       >
//         <ParallaxWrapper intensity={0.8} className="h-screen">
//           <Banner 
//             banners={banners} 
//             slugDomain={slugDomain}
//             categories={categories}
//             themeColors={themeColors}
//             customization={customization}
//           />
//         </ParallaxWrapper>

//         <ParallaxWrapper direction="up" intensity={0.4}>
//           <AutoPlay 
//                       categories={categories}

//             storeId={storeId}
//             slugDomain={slugDomain}
//             themeColors={themeColors}
//             customization={customization}

//           />
//         </ParallaxWrapper>

//         {filteredCategories.map((category, i) => (
//           <ParallaxWrapper 
//             key={category.id}
//             direction={i % 2 === 0 ? 'left' : 'right'}
//             intensity={0.3 + (i * 0.05)}
//           >
//             <CategoryList 
//               category={category}
//               themeColors={themeColors}
//                storeId={storeId}
//                 customization={customization}
//                  slugDomain={slugDomain}
//             />
//           </ParallaxWrapper>
//         ))}

//         <motion.section style={{ scale }} className="py-20 relative">
//           <Testimonials 
//           storeId={storeId}
//           themeColors={themeColors} />
//         </motion.section>

//         <ParallaxWrapper scale intensity={0.2}>
//           <PremiumFeatureCard 
//             storeId={storeId}
//             customization={customization}

//           />
//         </ParallaxWrapper>

//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//           className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg"
//           style={{
//             backgroundColor: themeColors.primary,
//             color: themeColors.buttonText
//           }}
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           aria-label="Scroll to top"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M18 15l-6-6-6 6"/>
//           </svg>
//         </motion.button>
//       </motion.main>
//     </AnimatePresence>
//   );
// };

// export default Home;111111111111
/// import { useRef } from 'react';
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// const ParallaxWrapper = ({
//   children,
//   direction = 'up',
//   intensity = 0.3,
//   className = '',
//   fade = false,
//   scale = false,
//   rotate = false,
//   spring = true,
//   viewport = { once: true, margin: '0px 0px -100px 0px' }
// }) => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start end', 'end start']
//   });

//   const y = useTransform(scrollYProgress, [0, 1], 
//     ['up', 'down'].includes(direction) ? [intensity * 100, -intensity * 100] : [0, 0]
//   );

//   const x = useTransform(scrollYProgress, [0, 1], 
//     ['left', 'right'].includes(direction) ? [intensity * 100, -intensity * 100] : [0, 0]
//   );

//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], 
//     fade ? [0, 1, 1, 0] : [1, 1, 1, 1]
//   );

//   const scaleValue = useTransform(scrollYProgress, [0, 1], 
//     scale ? [0.95, 1.05] : [1, 1]
//   );

//   const rotateValue = useTransform(scrollYProgress, [0, 1], 
//     rotate ? [-5, 5] : [0, 0]
//   );

//   const springTransforms = useSpring({ 
//     y, 
//     x, 
//     opacity, 
//     scale: scaleValue, 
//     rotate: rotateValue 
//   }, { 
//     stiffness: 150,
//     damping: 30,
//     mass: 0.5
//   });

//   const transforms = spring ? springTransforms : { y, x, opacity, scale: scaleValue, rotate: rotateValue };

//   return (
//     <div 
//       ref={ref} 
//       className={`relative overflow-hidden ${className}`}
//       style={{
//         perspective: '1000px',
//         transformStyle: 'preserve-3d'
//       }}
//     >
//       <motion.div
//         style={{
//           ...transforms,
//           willChange: 'transform, opacity',
//           transformOrigin: 'center center'
//         }}
//         initial="hidden"
//         whileInView="visible"
//         viewport={viewport}
//         variants={{
//           hidden: { opacity: 0, y: 20 },
//           visible: { opacity: 1, y: 0 }
//         }}
//         transition={{ 
//           type: 'spring',
//           stiffness: 100,
//           damping: 20
//         }}
//         className="will-change-transform"
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// };

// export default ParallaxWrapper;111111111
// 'use client';
// import { useState, useEffect, useMemo, useCallback } from 'react';
// import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
// import { useTheme } from 'next-themes';
// import dynamic from 'next/dynamic';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import ParallaxWrapper from './ParallaxWrapper';

// // Dynamic imports for better performance
// const Banner = dynamic(() => import('./Banner'), { 
//   loading: () => <Skeleton height={600} className="rounded-2xl" />
// });
// const AutoPlay = dynamic(() => import('./AutoPlay'));
// const FavaroteProducts = dynamic(() => import('./FavaroteProducts'));
// const Testimonials = dynamic(() => import('./Testimonials'));
// const PremiumFeatureCard = dynamic(() => import('./PremiumFeatureCard'));

// const Home = ({ 
//   banners = [], 
//   storeId = {}, 
//   customization = {}, 
//   products=[],
//   slugDomain = {}, 
//   categories = {},

// }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [filteredCategories, setFilteredCategories] = useState([]);
//   const { resolvedTheme } = useTheme();
//   const [isMounted, setIsMounted] = useState(false);
//   const { scrollYProgress } = useScroll();
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

//   useEffect(() => setIsMounted(true), []);

//   const themeColors = useMemo(() => ({
//     primary: customization?.primaryColor || '#3b82f6',
//     secondary: customization?.secondaryColor || '#10b981',
//     accent: customization?.accentColor || '#f59e0b',
//     text: resolvedTheme === 'dark' ? customization?.darkTextColor || '#f8fafc' : customization?.textColor || '#1e293b',
//     background: resolvedTheme === 'dark' ? customization?.darkBackgroundColor || '#0f172a' : customization?.backgroundColor || '#ffffff',
//     button: resolvedTheme === 'dark' ? customization?.darkButtonColor || '#1e293b' : customization?.buttonColor || '#3b82f6',
//     buttonText: customization?.buttonTextColor || '#ffffff',
//     cardBg: resolvedTheme === 'dark' ? customization?.darkCardBackground || '#1e293b' : customization?.cardBackground || '#ffffff',
//     border: resolvedTheme === 'dark' ? customization?.darkBorderColor || '#334155' : customization?.borderColor || '#e2e8f0',
//   }), [resolvedTheme, customization]);

//   const fetchCategories = useCallback(async () => {
//     try {
//       const data = await (await fetch(`/api/categories?storeId=${storeId}`)).json();
//       setFilteredCategories(data?.filter(c => c.products?.length > 0) || []);
//     } catch (error) {
//       console.error("Fetch error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [storeId]);
 
//   useEffect(() => {
//     if (categories.length === 0) {
//       fetchCategories();
//     } else {
//       setFilteredCategories(categories.filter(c => c.products?.length > 0));
//       setIsLoading(false);
//     }
//   }, [categories, fetchCategories]);

//   const pageTransition = {
//     initial: { opacity: 0, y: 20 },
//     animate: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
//     },
//     exit: { opacity: 0, y: -20 }
//   };

//   if (!isMounted) return null;

//   if (isLoading) {
//     return (
//       <motion.div
//         {...pageTransition}
//         className="min-h-screen p-4" 
//         style={{ backgroundColor: themeColors.background }}
//       >
//         <div className="container mx-auto space-y-8">
//           <Skeleton height={600} className="rounded-2xl" />
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[...Array(4)].map((_, i) => (
//               <Skeleton key={i} height={300} className="rounded-2xl" />
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     );
//   }

//   return (
//     <AnimatePresence mode="wait">
//       <motion.main
//         key={`${resolvedTheme}-home`}
//         {...pageTransition}
//         style={{ 
//           backgroundColor: themeColors.background,
//           color: themeColors.text,
//           fontFamily: customization?.fontFamily || 'var(--font-sans)'
//         }}
//         className="min-h-screen"
//       >
//         {/* Banner with 3D effect */}
//         <ParallaxWrapper
//          intensity={0.8} className="h-screen">
//           <Banner 
//             banners={banners} 
//             slugDomain={slugDomain}
//             categories={categories}
//             themeColors={themeColors}
//             customization={customization}
//           />
//         </ParallaxWrapper>

//         {/* AutoPlay with parallax */}
//         <ParallaxWrapper direction="up" intensity={0.4}>
//           <AutoPlay 
//             categories={categories}
//             storeId={storeId}
//             slugDomain={slugDomain}
//             themeColors={themeColors}
//             customization={customization}
//           />
//                   <FavaroteProducts products={products} customization={customization} categories={categories} slugDomain={slugDomain}/>

//         </ParallaxWrapper>

//         {/* Categories with alternating directions */}
//           {/* <ParallaxWrapper 
//             key={id}
//             direction={  2 === 0 ? 'left' : 'right'}
//             intensity={0.3 + ( 0.05)}
//           > */}

//           {/* </ParallaxWrapper> */}
      

//         {/* Testimonials with scaling effect */}
//         <motion.section style={{ scale }} className="py-20 relative">
       

//           <Testimonials 
//             storeId={storeId}
//             themeColors={themeColors} 
//           />
//         </motion.section>

//         {/* Premium Feature Card with 3D rotation */}
//         <ParallaxWrapper scale intensity={0.2}>
//           <PremiumFeatureCard 
//             storeId={storeId}
//             customization={customization}
//           />
//         </ParallaxWrapper>

//         {/* Scroll to top button */}
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//           className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg"
//           style={{
//             backgroundColor: themeColors.primary,
//             color: themeColors.buttonText
//           }}
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           aria-label="Scroll to top"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M18 15l-6-6-6 6"/>
//           </svg>
//         </motion.button>
//       </motion.main>
//     </AnimatePresence>
//   );
// };

// export default Home;55555555555555555555555555555555555
// 'use client';
// import { useState, useEffect, useMemo, useCallback } from 'react';
// import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
// import { useTheme } from 'next-themes';
// import dynamic from 'next/dynamic';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import ParallaxWrapper from './ParallaxWrapper';

// // Dynamic imports for better performance
// const Banner = dynamic(() => import('./Banner'), { 
//   loading: () => <Skeleton height={600} className="rounded-2xl" />
// });
// const AutoPlay = dynamic(() => import('./AutoPlay'));
// const FavaroteProducts = dynamic(() => import('./FavaroteProducts'));
// const Testimonials = dynamic(() => import('./Testimonials'));
// const PremiumFeatureCard = dynamic(() => import('./PremiumFeatureCard'));

// const Home = ({ 
//   banners = [], 
//   storeId = {}, 
//   customization = {}, 
//   products = [],
//   slugDomain = {}, 
//   categories = [],
// }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [filteredCategories, setFilteredCategories] = useState([]);
//   const { resolvedTheme } = useTheme();
//   const [isMounted, setIsMounted] = useState(false);
//   const { scrollYProgress } = useScroll();
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

//   useEffect(() => setIsMounted(true), []);

//   const themeColors = useMemo(() => ({
//     primary: customization?.primaryColor || '#3b82f6',
//     secondary: customization?.secondaryColor || '#10b981',
//     accent: customization?.accentColor || '#f59e0b',
//     text: resolvedTheme === 'dark' ? customization?.darkTextColor || '#f8fafc' : customization?.textColor || '#1e293b',
//     background: resolvedTheme === 'dark' ? customization?.darkBackgroundColor || '#0f172a' : customization?.backgroundColor || '#ffffff',
//     button: resolvedTheme === 'dark' ? customization?.darkButtonColor || '#1e293b' : customization?.buttonColor || '#3b82f6',
//     buttonText: customization?.buttonTextColor || '#ffffff',
//     cardBg: resolvedTheme === 'dark' ? customization?.darkCardBackground || '#1e293b' : customization?.cardBackground || '#ffffff',
//     border: resolvedTheme === 'dark' ? customization?.darkBorderColor || '#334155' : customization?.borderColor || '#e2e8f0',
//   }), [resolvedTheme, customization]);

//   const fetchCategories = useCallback(async () => {
//     try {
//       const data = await (await fetch(`/api/categories?storeId=${storeId}`)).json();
//       setFilteredCategories(data?.filter(c => c.products?.length > 0) || []);
//     } catch (error) {
//       console.error("Fetch error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [storeId]);
 
//   useEffect(() => {
//     if (categories.length === 0) {
//       fetchCategories();
//     } else {
//       setFilteredCategories(categories.filter(c => c.products?.length > 0));
//       setIsLoading(false);
//     }
//   }, [categories, fetchCategories]);

//   const pageTransition = {
//     initial: { opacity: 0, y: 20 },
//     animate: { 
//       opacity: 1, 
//       y: 0,
//       transition: { 
//         duration: 0.6, 
//         ease: [0.16, 1, 0.3, 1],
//         when: "beforeChildren",
//         staggerChildren: 0.1
//       }
//     },
//     exit: { opacity: 0, y: -20 }
//   };

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 20,
//         mass: 0.5
//       }
//     }
//   };

//   if (!isMounted) return null;

//   if (isLoading) {
//     return (
//       <motion.div
//         {...pageTransition}
//         className="min-h-screen p-4" 
//         style={{ backgroundColor: themeColors.background }}
//       >
//         <div className="container mx-auto space-y-8">
//           <Skeleton height={600} className="rounded-2xl" />
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[...Array(4)].map((_, i) => (
//               <Skeleton key={i} height={300} className="rounded-2xl" />
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     );
//   }

//   return (
//     <AnimatePresence mode="wait">
//       <motion.main
//         key={`${resolvedTheme}-home`}
//         {...pageTransition}
//         style={{ 
//           backgroundColor: themeColors.background,
//           color: themeColors.text,
//           fontFamily: customization?.fontFamily || 'var(--font-sans)'
//         }}
//         className="min-h-screen"
//       >
//         {/* Banner with 3D effect */}
//         <ParallaxWrapper intensity={0.8} className="h-screen">
//           <Banner 
//             banners={banners} 
//             slugDomain={slugDomain}
//             categories={categories}
//             themeColors={themeColors}
//             customization={customization}
//           />
//         </ParallaxWrapper>

//         {/* AutoPlay with parallax */}
//         <motion.section
//           variants={sectionVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "0px 0px -100px 0px" }}
//           className="py-16"
//         >
//           <ParallaxWrapper direction="up" intensity={0.4}>
//             <AutoPlay 
//               categories={categories}
//               storeId={storeId}
//               slugDomain={slugDomain}
//               themeColors={themeColors}
//               customization={customization}
//             />
//           </ParallaxWrapper>
//         </motion.section>

//         {/* Favorite Products */}
//         <motion.section
//           variants={sectionVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "0px 0px -50px 0px" }}
//           className="py-16"
//         >
//           <ParallaxWrapper direction="left" intensity={0.2}>
//             <FavaroteProducts 
//               products={products} 
//               customization={customization} 
//               categories={categories} 
//               slugDomain={slugDomain}
//               themeColors={themeColors}
//             />
//           </ParallaxWrapper>
//         </motion.section>

//         {/* Testimonials with scaling effect */}
//         <motion.section 
//           style={{ scale }} 
//           className="py-20 relative"
//           variants={sectionVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <Testimonials 
//             storeId={storeId}
//             themeColors={themeColors}
//             customization={customization}
//           />
//         </motion.section>

//         {/* Premium Feature Card with 3D rotation */}
//         <motion.section
//           variants={sectionVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "0px 0px -100px 0px" }}
//           className="py-16"
//         >
//           <ParallaxWrapper scale intensity={0.2} rotate>
//             <PremiumFeatureCard 
//               storeId={storeId}
//               customization={customization}
//               themeColors={themeColors}
//             />
//           </ParallaxWrapper>
//         </motion.section>

//         {/* Scroll to top button */}
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//           className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg"
//           style={{
//             backgroundColor: themeColors.primary,
//             color: themeColors.buttonText
//           }}
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           aria-label="Scroll to top"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1 }}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M18 15l-6-6-6 6"/>
//           </svg>
//         </motion.button>
//       </motion.main>
//     </AnimatePresence>
//   );
// };

// export default Home;
// 'use client';
// import { useState, useEffect, useMemo, useCallback } from 'react';
// import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
// import { useTheme } from 'next-themes';
// import dynamic from 'next/dynamic';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import ParallaxWrapper from './ParallaxWrapper';

// // Dynamic imports with better error handling
// const Banner = dynamic(() => import('./Banner').catch(() => () => null), { 
//   loading: () => <Skeleton height={600} className="rounded-2xl" />
// });
// const AutoPlay = dynamic(() => import('./AutoPlay').catch(() => () => null));
// const FavaroteProducts = dynamic(() => import('./FavaroteProducts').catch(() => () => null));
// const Testimonials = dynamic(() => import('./Testimonials').catch(() => () => null));
// const PremiumFeatureCard = dynamic(() => import('./PremiumFeatureCard').catch(() => () => null));

// const Home = ({ 
//   banners = [], 
//   storeId = {}, 
//   customization = {}, 
//   products = [],
//   slugDomain = {}, 
//   categories = [],
// }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [filteredCategories, setFilteredCategories] = useState([]);
//   const { resolvedTheme } = useTheme();
//   const [isMounted, setIsMounted] = useState(false);
//   const { scrollYProgress } = useScroll();
  
//   // Enhanced parallax effects
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
//   const rotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);
//   const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
//   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.8, 0.8, 1]);

//   // Gradient wave effect
//   const waveColor = useTransform(
//     scrollYProgress,
//     [0, 0.25, 0.5, 0.75, 1],
//     [
//       customization?.primaryColor || '#3b82f6',
//       customization?.secondaryColor || '#10b981',
//       customization?.accentColor || '#f59e0b',
//       customization?.secondaryColor || '#10b981',
//       customization?.primaryColor || '#3b82f6'
//     ]
//   );

//   useEffect(() => setIsMounted(true), []);

//   const themeColors = useMemo(() => ({
//     primary: customization?.primaryColor || '#3b82f6',
//     secondary: customization?.secondaryColor || '#10b981',
//     accent: customization?.accentColor || '#f59e0b',
//     text: resolvedTheme === 'dark' ? customization?.darkTextColor || '#f8fafc' : customization?.textColor || '#1e293b',
//     background: resolvedTheme === 'dark' ? customization?.darkBackgroundColor || '#0f172a' : customization?.backgroundColor || '#ffffff',
//     button: resolvedTheme === 'dark' ? customization?.darkButtonColor || '#1e293b' : customization?.buttonColor || '#3b82f6',
//     buttonText: customization?.buttonTextColor || '#ffffff',
//     cardBg: resolvedTheme === 'dark' ? customization?.darkCardBackground || '#1e293b' : customization?.cardBackground || '#ffffff',
//     border: resolvedTheme === 'dark' ? customization?.darkBorderColor || '#334155' : customization?.borderColor || '#e2e8f0',
//   }), [resolvedTheme, customization]);

//   const fetchCategories = useCallback(async () => {
//     try {
//       const res = await fetch(`/api/categories?storeId=${storeId}`);
//       const data = await res.json();
//       setFilteredCategories(data?.filter(c => c.products?.length > 0) || []);
//     } catch (error) {
//       console.error("Fetch error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [storeId]);
 
//   useEffect(() => {
//     if (categories.length === 0) {
//       fetchCategories();
//     } else {
//       setFilteredCategories(categories.filter(c => c.products?.length > 0));
//       setIsLoading(false);
//     }
//   }, [categories, fetchCategories]);

//   // Smoother transitions
//   const pageTransition = {
//     initial: { opacity: 0, y: 20 },
//     animate: { 
//       opacity: 1, 
//       y: 0,
//       transition: { 
//         duration: 0.8, 
//         ease: [0.16, 1, 0.3, 1],
//         when: "beforeChildren",
//         staggerChildren: 0.2
//       }
//     },
//     exit: { opacity: 0, y: -20 }
//   };

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 20,
//         mass: 0.5
//       }
//     }
//   };

//   if (!isMounted) return null;

//   if (isLoading) {
//     return (
//       <motion.div
//         {...pageTransition}
//         className="min-h-screen p-4" 
//         style={{ backgroundColor: themeColors.background }}
//       >
//         <div className="container mx-auto space-y-8">
//           <Skeleton height={600} className="rounded-2xl" />
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[...Array(4)].map((_, i) => (
//               <Skeleton key={i} height={300} className="rounded-2xl" />
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     );
//   }

//   return (
//     <AnimatePresence mode="wait">
//       <motion.main
//         key={`${resolvedTheme}-home`}
//         {...pageTransition}
//         style={{ 
//           backgroundColor: themeColors.background,
//           color: themeColors.text,
//           fontFamily: customization?.fontFamily || 'var(--font-sans)'
//         }}
//         className="min-h-screen overflow-x-hidden"
//       >0.1

'use client';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ParallaxWrapper from './ParallaxWrapper';

// Dynamic imports with better error handling
// const Banner = dynamic(() => import('./Banner').catch(() => () => null), { 
//   loading: () => <Skeleton height={600} className="rounded-2xl" />
// });
const AutoPlay = dynamic(() => import('./AutoPlay').catch(() => () => null));
const FavaroteProducts = dynamic(() => import('./FavaroteProducts').catch(() => () => null));
const Testimonials = dynamic(() => import('./Testimonials').catch(() => () => null));
const PremiumFeatureCard = dynamic(() => import('./PremiumFeatureCard').catch(() => () => null));

const Home = ({ 
  banners = [], 
  storeId = {}, 
  customization = {}, 
  products = [],
  slugDomain = {}, 
  categories = [],
  store = {} // Add storeData prop to access merchant phone number
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Enhanced parallax effects
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.8, 0.8, 1]);

  // Gradient wave effect
  const waveColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      customization?.primaryColor || '#3b82f6',
      customization?.secondaryColor || '#10b981',
      customization?.accentColor || '#f59e0b',
      customization?.secondaryColor || '#10b981',
      customization?.primaryColor || '#3b82f6'
    ]
  );

  useEffect(() => setIsMounted(true), []);

  const themeColors = useMemo(() => ({
    primary: customization?.primaryColor || '#3b82f6',
    secondary: customization?.secondaryColor || '#10b981',
    accent: customization?.accentColor || '#f59e0b',
    text: resolvedTheme === 'dark' ? customization?.darkTextColor || '#f8fafc' : customization?.textColor || '#1e293b',
    background: resolvedTheme === 'dark' ? customization?.darkBackgroundColor || '#0f172a' : customization?.backgroundColor || '#ffffff',
    button: resolvedTheme === 'dark' ? customization?.darkButtonColor || '#1e293b' : customization?.buttonColor || '#3b82f6',
    buttonText: customization?.buttonTextColor || '#ffffff',
    cardBg: resolvedTheme === 'dark' ? customization?.darkCardBackground || '#1e293b' : customization?.cardBackground || '#ffffff',
    border: resolvedTheme === 'dark' ? customization?.darkBorderColor || '#334155' : customization?.borderColor || '#e2e8f0',
  }), [resolvedTheme, customization]);

  const fetchCategories = useCallback(async () => {
    try {
      const res = await fetch(`/api/categories?storeId=${storeId}`);
      const data = await res.json();
      setFilteredCategories(data?.filter(c => c.products?.length > 0) || []);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  }, [storeId]);
 
  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    } else {
      setFilteredCategories(categories.filter(c => c.products?.length > 0));
      setIsLoading(false);
    }
  }, [categories, fetchCategories]);

  // WhatsApp click handler
  const handleWhatsApp = useCallback(() => {
    if (!store?.phone) {
      toast.error('رقم الجوال غير متوفر');
      return;
    }
    
    try {
      const formattedPhone = store.phone.replace(/\D/g, '');
      const whatsappUrl = `https://wa.me/${formattedPhone}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('خطأ في فتح واتساب:', error);
      toast.error('حدث خطأ أثناء محاولة الاتصال');
    }
  }, [store?.phone]);
  // Smoother transitions
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.5
      }
    }
  };

  if (!isMounted) return null;

  if (isLoading) {
    return (
      <motion.div
        {...pageTransition}
        className="min-h-screen p-4" 
        style={{ backgroundColor: themeColors.background }}
      >
        <div className="container mx-auto space-y-8">
          <Skeleton height={600} className="rounded-2xl" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} height={300} className="rounded-2xl" />
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
    <motion.main
      key={`${resolvedTheme}-home`}
      {...pageTransition}
      style={{ 
        backgroundColor: themeColors.background,
        color: themeColors.text,
        fontFamily: customization?.fontFamily || 'var(--font-sans)'
      }}
      className="min-h-screen overflow-x-hidden"
    >

        {/* AutoPlay with layered parallax */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="py-16 relative"
        >
          <motion.div
            style={{
              backgroundColor: waveColor,
              opacity: 0.1,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: -1,
              scale: 1.2,
              rotate
            }}
          />
          <ParallaxWrapper direction="up" intensity={2}>
            <AutoPlay 
              categories={categories}
              storeId={storeId}
              slugDomain={slugDomain}
              themeColors={themeColors}
              customization={customization}
            />
          </ParallaxWrapper>
        </motion.section>

        {/* Favorite Products with dynamic background */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          className="py-16 relative"
        >
          <motion.div
            style={{
              background: `linear-gradient(45deg, ${themeColors.primary}20, ${themeColors.secondary}20)`,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: -1,
              scale: 1.1,
              rotate: -2
            }}
          />
          <ParallaxWrapper direction="left" intensity={30}>
            <FavaroteProducts 
              products={products} 
              customization={customization} 
              categories={categories} 
              slugDomain={slugDomain}
              themeColors={themeColors}
            />
          </ParallaxWrapper>
        </motion.section>

        {/* Testimonials with scaling effect */}
        <motion.section 
          style={{ scale }} 
          className="py-20 relative overflow-hidden"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            style={{
              background: `linear-gradient(-45deg, ${themeColors.accent}, ${themeColors.primary})`,
              backgroundSize: '200% 200%',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.05,
              zIndex: -1
            }}
          />
          <Testimonials 
            storeId={storeId}
            themeColors={themeColors}
            customization={customization}
          />
        </motion.section>

        {/* Premium Feature Card with 3D effect */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="py-16 relative"
        >
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              height: '80%',
              background: `radial-gradient(circle at center, ${themeColors.secondary}20, transparent 70%)`,
              filter: 'blur(60px)',
              zIndex: -1
            }}
          />
          <ParallaxWrapper scale intensity={15} rotate>
            <PremiumFeatureCard 
              storeId={storeId}
              customization={customization}
              themeColors={themeColors}
            />
          </ParallaxWrapper>
        </motion.section>
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
          {/* زر واتساب مع تأثيرات متقدمة */}
          {store?.phone && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.2, type: 'spring' }}
              whileHover={{ scale: 1.05, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <button
                onClick={handleWhatsApp}
                className="p-3 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 bg-[#25D366] hover:bg-[#128C7E]"
                aria-label="الاتصال عبر واتساب"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="28" 
                  height="28" 
                  viewBox="0 0 24 24"
                  className="text-white"
                >
                  <path 
                    fill="currentColor" 
                    d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.33 0 4.52.91 6.17 2.56a8.677 8.677 0 0 1 2.55 6.15c0 4.84-3.94 8.78-8.78 8.78c-1.53 0-3.03-.4-4.35-1.15l-.3-.17l-3.13.82l.83-3.04l-.2-.31a8.7 8.7 0 0 1-1.28-4.43c0-4.84 3.94-8.78 8.78-8.78M8.53 7.33c-.23 0-.43.1-.58.27c-.15.17-.34.48-.34.93c0 .25.04.54.1.85c.11.53.27 1.1.58 1.8c.37.84 1.37 2.87 3.03 4.08c2.14 1.56 3.41 1.37 4.04 1.28c.54-.08 1.03-.35 1.16-.77c.13-.42.02-.76-.07-1.04c-.1-.29-.95-1.43-1.3-1.56c-.35-.12-.6-.09-.83.05c-.25.15-.96.85-1.13 1.02c-.17.17-.35.19-.63.07c-.29-.13-1.2-.5-2.28-1.58c-.84-.82-1.4-1.83-1.56-2.14c-.16-.31-.01-.48.12-.61c.12-.12.27-.32.37-.48c.08-.14.04-.26-.02-.37c-.06-.11-.55-1.35-.76-1.84c-.2-.5-.4-.43-.55-.43"
                  />
                </svg>
              </button>
              
              {/* تلميح توضيحي */}
              <div className="absolute right-14 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm shadow-lg">
                تواصل معنا عبر واتساب
              </div>
            </motion.div>
          )}

          {/* زر الانتقال للأعلى مع تأثيرات محسنة */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1, type: 'spring' }}
            whileHover={{ scale: 1.05, rotate: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-3 rounded-full shadow-xl flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: themeColors.primary,
                color: themeColors.buttonText,
              }}
              aria-label="انتقل إلى الأعلى"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="28" 
                height="28" 
                viewBox="0 0 24 24"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18 15l-6-6-6 6"/>
              </svg>
            </button>
          </motion.div>
        </div>

      </motion.main>
    </AnimatePresence>
  );
};

export default Home;