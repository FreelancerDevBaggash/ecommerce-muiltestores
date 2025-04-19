
// 'use client';
// import React, { useRef, useEffect, useState, useCallback } from 'react';
// import Link from 'next/link';
// import CategoryCarouselstores from './CategoryCarousel-store';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import useSWR from 'swr';
// import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
// import { useTheme } from 'next-themes';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function CategoryList({ subcategory,category, isMarketPage, storeId, customization = {}, slugDomain }) {
//   // Constants and state initialization
//   const SCROLL_INTERVAL = 3000;
//   const SCROLL_RESUME_DELAY = 15000;
//   const SCROLL_AMOUNT = 300;
  
//   const fetcher = (url) => fetch(url).then((res) => res.json());
//   const fontFamily = customization.fontFamily || 'sans-serif';
  
//   const { data: customizations, error, mutate } = useSWR(
//     `/api/customizations/Customizationes/${storeId}`,
//     fetcher,
//     {
//       revalidateOnFocus: false,
//       shouldRetryOnError: false
//     }
//   );
  
//   const { theme } = useTheme();
//   const scrollRef = useRef(null);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [containerWidth, setContainerWidth] = useState(0);
//   const [contentWidth, setContentWidth] = useState(0);
//   const [isAutoScrolling, setIsAutoScrolling] = useState(true);
//   const [filter, setFilter] = useState('all');
//   const [isHovering, setIsHovering] = useState(false);

//   // Calculate element dimensions
//   const updateDimensions = useCallback(() => {
//     if (scrollRef.current) {
//       setContainerWidth(scrollRef.current.clientWidth);
//       setContentWidth(scrollRef.current.scrollWidth);
//     }
//   }, []);

//   useEffect(() => {
//     updateDimensions();
//     const resizeObserver = new ResizeObserver(updateDimensions);
    
//     if (scrollRef.current) {
//       resizeObserver.observe(scrollRef.current);
//     }
    
//     return () => resizeObserver.disconnect();
//   }, [updateDimensions, category]);

//   // Auto-scroll functionality
//   useEffect(() => {
//     if (!scrollRef.current || contentWidth <= containerWidth || isHovering) return;
    
//     let scrollInterval;
//     let interactionTimer;

//     const startAutoScroll = () => {
//       scrollInterval = setInterval(() => {
//         if (!scrollRef.current) return;
        
//         const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
//         const maxScroll = scrollWidth - clientWidth;
//         const isAtStart = scrollLeft <= 10;
//         const scrollAmount = Math.min(SCROLL_AMOUNT, maxScroll - scrollLeft);
        
//         scrollRef.current.scrollTo({
//           left: isAtStart ? maxScroll : scrollLeft - scrollAmount,
//           behavior: 'smooth',
//         });
//       }, SCROLL_INTERVAL);
//     };

//     const handleInteraction = () => {
//       setIsAutoScrolling(false);
//       clearInterval(scrollInterval);
//       interactionTimer = setTimeout(() => {
//         setIsAutoScrolling(true);
//       }, SCROLL_RESUME_DELAY);
//     };

//     if (isAutoScrolling) {
//       startAutoScroll();
//     }

//     const scrollContainer = scrollRef.current;
//     scrollContainer.addEventListener('mousedown', handleInteraction);
//     scrollContainer.addEventListener('touchstart', handleInteraction);
//     scrollContainer.addEventListener('wheel', handleInteraction);

//     return () => {
//       clearInterval(scrollInterval);
//       clearTimeout(interactionTimer);
//       scrollContainer.removeEventListener('mousedown', handleInteraction);
//       scrollContainer.removeEventListener('touchstart', handleInteraction);
//       scrollContainer.removeEventListener('wheel', handleInteraction);
//     };
//   }, [containerWidth, contentWidth, isAutoScrolling, isHovering]);

//   const handleScroll = useCallback(() => {
//     if (scrollRef.current) {
//       setScrollPosition(scrollRef.current.scrollLeft);
//     }
//   }, []);

//   const scrollTo = useCallback((direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = containerWidth * 0.8;
//       scrollRef.current.scrollBy({
//         left: direction === 'prev' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth',
//       });
//     }
//   }, [containerWidth]);

//   // Filter and sort products
//   const filteredProducts = React.useMemo(() => {
//     if (!category.products) return [];
    
//     return category.products.filter((product) => {
//       if (filter === 'lowToHigh') {
//         return product.salePrice <= 50;
//       } else if (filter === 'highToLow') {
//         return product.salePrice > 50;
//       }
//       return true;
//     }).sort((a, b) => {
//       switch (filter) {
//         case 'newest':
//           return new Date(b.createdAt) - new Date(a.createdAt);
//         case 'bestSelling':
//           return (b.saleItems?.length || 0) - (a.saleItems?.length || 0);
//         case 'biggestDiscount':
//           const discountA = ((a.productPrice - a.salePrice) / a.productPrice) * 100;
//           const discountB = ((b.productPrice - b.salePrice) / b.productPrice) * 100;
//           return discountB - discountA;
//         case 'lowToHigh':
//           return a.salePrice - b.salePrice;
//         case 'highToLow':
//           return b.salePrice - a.salePrice;
//         default:
//           return 0;
//       }
//     });
//   }, [category.products, filter]);

//   // Color system
//   const colors = React.useMemo(() => ({
//     primary: customizations?.primaryColor || '#3b82f6',
//     secondary: customizations?.secondaryColor || '#10b981',
//     accent: customizations?.accentColor || '#f59e0b',
//     background: theme === 'dark' 
//       ? customizations?.darkBackgroundColor || '#1e293b'
//       : customizations?.backgroundColor || '#f8fafc',
//     text: theme === 'dark'
//       ? customizations?.darkTextColor || '#f8fafc'
//       : customizations?.textColor || '#1e293b',
//     cardBg: theme === 'dark'
//       ? customizations?.darkCardBackground || '#334155'
//       : customizations?.cardBackground || '#ffffff',
//     border: theme === 'dark'
//       ? customizations?.darkBorderColor || '#475569'
//       : customizations?.borderColor || '#e2e8f0',
//     buttonBg: theme === 'dark'
//       ? customizations?.darkButtonColor || '#475569'
//       : customizations?.buttonColor || '#3b82f6',
//     buttonText: theme === 'dark'
//       ? customizations?.darkButtonTextColor || '#ffffff'
//       : customizations?.buttonTextColor || '#ffffff',
//   }), [customizations, theme]);

//   const maxScrollLeft = contentWidth - containerWidth;
//   const showPrev = scrollPosition > 10;
//   const showNext = scrollPosition < maxScrollLeft - 10;

//   if (error) {
//     return (
//       <motion.div
//       dir='rtl'
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="flex flex-col items-center justify-center p-8 rounded-2xl"
//         style={{
//           background: `linear-gradient(135deg, ${customizations?.errorGradientFrom || '#fee2e2'}, ${customizations?.errorGradientTo || '#fecaca'})`,
//           color: customizations?.errorTextColor || '#b91c1c'
//         }}
//       >
//         <p className="mb-4 text-lg font-medium text-center">حدث خطأ في تحميل التخصيصات</p>
//         <motion.button
//           whileHover={{ scale: 1.03 }}
//           whileTap={{ scale: 0.98 }}
//           onClick={() => mutate()}
//           className="px-5 py-2.5 rounded-xl flex items-center gap-3 shadow-md"
//           style={{
//             backgroundColor: customizations?.errorButtonColor || '#dc2626',
//             color: customizations?.errorButtonTextColor || '#ffffff'
//           }}
//         >
//           إعادة المحاولة
//         </motion.button>
//       </motion.div>
//     );
//   }

//   if (!customizations) {
//     return (
//       <div className="space-y-8 p-6" style={{ backgroundColor: theme === 'dark' ? '#1e293b' : '#f8fafc' }}>
//         <Skeleton height={40} width={300} className="rounded-lg" />
//         <div className="flex gap-6 overflow-hidden">
//           {[...Array(4)].map((_, i) => (
//             <div key={i} className="min-w-[320px] flex-shrink-0">
//               <div className="relative">
//                 <Skeleton height={360} className="rounded-2xl" />
//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   <Skeleton height={24} width="80%" className="mb-2" />
//                   <Skeleton height={20} width="60%" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, ease: 'easeOut' }}
//       className="mb-25 max-w-15xl mx-auto px-4 sm:px-6 lg:px-8"
//       style={{ backgroundColor: colors.background, color: colors.text }}
//       dir="rtl"
//     >
//       {/* Section Header */}
//       <div 
//         className="relative w-full min-h-[150px] md:min-h-[550px] rounded-3xl overflow-hidden group isolate shadow-2xl"
//         style={{
//           backgroundImage: `url(${category.imageUrl})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       >
//         <div 
//         c
//           className="absolute inset-0 z-10"
//           style={{
//             background: `linear-gradient(to top, ${customizations?.headerOverlayDark || 'rgba(0,0,0,0.9)'}, ${customizations?.headerOverlayLight || 'rgba(0,0,0,0.3)'}, transparent)`
//           }}
//         />
//       </div>

//       {/* Enhanced Filter Bar */}
//       <motion.div 
//         className="flex justify-center gap-3 my-10 overflow-x-auto py-2 px-4"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4 }}
//       >
//         {[
//           { value: 'all', label: 'جميع المنتجات' },
//           { value: 'lowToHigh', label: 'السعر من الأقل' },
//           { value: 'highToLow', label: 'السعر من الأعلى' },
//           { value: 'newest', label: 'أحدث المنتجات' },
//           { value: 'bestSelling', label: 'الأكثر مبيعاً' },
//           { value: 'biggestDiscount', label: 'أكبر خصم' }
//         ].map((item) => (
//           <motion.button
//             key={item.value}
//             onClick={() => setFilter(item.value)}
//             className={`px-5 py-3.5 rounded-full text-sm font-medium transition-all flex-shrink-0 ${
//               filter === item.value 
//                 ? 'shadow-md' 
//                 : 'hover:bg-opacity-80'
//             }`}
//             style={{
//               backgroundColor: filter === item.value 
//                 ? customizations?.filterActiveBg || colors.accent
//                 : theme === 'dark' 
//                   ? customizations?.darkFilterInactiveBg || '#334155'
//                   : customizations?.filterInactiveBg || '#e2e8f0',
//               color: filter === item.value 
//                 ? customizations?.filterActiveText || '#ffffff'
//                 : theme === 'dark'
//                   ? customizations?.darkFilterInactiveText || '#cbd5e1'
//                   : customizations?.filterInactiveText || '#334155',
//               fontFamily: fontFamily
//             }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {item.label}
//           </motion.button>
//         ))}
//       </motion.div>

//       {/* Product List */}
//       <div 
//         className="relative mt-12"
//         onMouseEnter={() => setIsHovering(true)}
//         onMouseLeave={() => setIsHovering(false)}
//       >
//         <AnimatePresence>
//           {showPrev && (
//             <motion.button
//               initial={{ opacity: 0, x: 40 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 40 }}
//               onClick={() => scrollTo('prev')}
//               className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full shadow-xl hover:shadow-2xl transition-all"
//               style={{
//                 backgroundColor: theme === 'dark' 
//                   ? customizations?.darkNavButtonBg || '#334155'
//                   : customizations?.navButtonBg || '#ffffff',
//                 color: theme === 'dark'
//                   ? customizations?.darkNavButtonIcon || '#cbd5e1'
//                   : customizations?.navButtonIcon || '#64748b'
//               }}
//               whileHover={{ 
//                 scale: 1.1,
//                 backgroundColor: colors.primary,
//                 color: '#fff'
//               }}
//               whileTap={{ scale: 0.9 }}
//               aria-label="Scroll left"
//             >
//               <ChevronRight className="h-6 w-6" />
//             </motion.button>
//           )}
//         </AnimatePresence>

//         <div
//           ref={scrollRef}
//           onScroll={handleScroll}
//           className="flex overflow-x-auto scroll-smooth py-4 px-2 gap-6 scrollbar-hide"
//           dir="rtl"
//         >
//           {filteredProducts.length === 0 ? (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="w-full py-16 text-center"
//               style={{ color: colors.text }}
//             >
//               <p className="text-xl" style={{ fontFamily: fontFamily }}>
//                 لا توجد منتجات متاحة حالياً في هذا القسم
//               </p>
//             </motion.div>
//           ) : (
//             filteredProducts.map((product, index) => (
//               <motion.div
//               dir='rtl'
//                 key={product.id}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ 
//                   delay: index * 0.05,
//                   type: 'spring',
//                   stiffness: 300,
//                   damping: 20
//                 }}
                
//                 className="flex-shrink-0 w-80 px-2"
//                 whileHover={{ 
//                   y: -10,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 <CategoryCarouselstores
//                   isMarketPage={isMarketPage}
//                   products={[product]}
//                   customizations={customizations}
//                   fontFamily={fontFamily}
//                   slugDomain={slugDomain}
//                 />
//               </motion.div>
//             ))
//           )}
//         </div>

//         <AnimatePresence>
//           {showNext && (
//             <motion.button
//               initial={{ opacity: 0, x: -40 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -40 }}
//               onClick={() => scrollTo('next')}
//               className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full shadow-xl hover:shadow-2xl transition-all"
//               style={{
//                 backgroundColor: theme === 'dark' 
//                   ? customizations?.darkNavButtonBg || '#334155'
//                   : customizations?.navButtonBg || '#ffffff',
//                 color: theme === 'dark'
//                   ? customizations?.darkNavButtonIcon || '#cbd5e1'
//                   : customizations?.navButtonIcon || '#64748b'
//               }}
//               whileHover={{ 
//                 scale: 1.1,
//                 backgroundColor: colors.primary,
//                 color: '#fff'
//               }}
//               whileTap={{ scale: 0.9 }}
//               aria-label="Scroll right"
//             >
//               <ChevronLeft className="h-6 w-6" />
//             </motion.button>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.section>
//   );
// }




//111111111
// 'use client';
// import React, { useRef, useEffect, useState, useCallback } from 'react';
// import Link from 'next/link';
// import CategoryCarouselstores from './CategoryCarousel-store';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import useSWR from 'swr';
// import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
// import { useTheme } from 'next-themes';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function CategoryList({ subcategory, category, isMarketPage, storeId, customization = {}, slugDomain }) {
//   // Constants and state initialization
//   const SCROLL_INTERVAL = 3000;
//   const SCROLL_RESUME_DELAY = 15000;
//   const SCROLL_AMOUNT = 300;
//   const itemsPerPage = 8;
  
//   const fetcher = (url) => fetch(url).then((res) => res.json());
//   const fontFamily = customization.fontFamily || 'sans-serif';
  
//   const { data: customizations, error, mutate } = useSWR(
//     `/api/customizations/Customizationes/${storeId}`,
//     fetcher,
//     {
//       revalidateOnFocus: false,
//       shouldRetryOnError: false
//     }
//   );

//   // Fetch subcategories
//   const { data: subcategories } = useSWR(
//     category?.id ? `/api/subcategory?categoryId=${category.id}` : null,
//     fetcher
//   );
  
//   // States
//   const { theme } = useTheme();
//   const scrollRef = useRef(null);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [containerWidth, setContainerWidth] = useState(0);
//   const [contentWidth, setContentWidth] = useState(0);
//   const [isAutoScrolling, setIsAutoScrolling] = useState(true);
//   const [filter, setFilter] = useState('all');
//   const [isHovering, setIsHovering] = useState(false);
//   const [activeSubcategory, setActiveSubcategory] = useState(subcategory || null);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState(0);

//   // Calculate element dimensions
//   const updateDimensions = useCallback(() => {
//     if (scrollRef.current) {
//       setContainerWidth(scrollRef.current.clientWidth);
//       setContentWidth(scrollRef.current.scrollWidth);
//     }
//   }, []);
// // أضف هذا الجزء بعد دالة scrollTo وقبل دالة getProducts
// const scrollTo = useCallback((direction) => {
//   if (scrollRef.current) {
//     const scrollAmount = containerWidth * 0.8;
//     scrollRef.current.scrollBy({
//       left: direction === 'prev' ? -scrollAmount : scrollAmount,
//       behavior: 'smooth',
//     });
//   }
// }, [containerWidth]);

// // أضف هذه الدالة هنا
// const handleScroll = useCallback(() => {
//   if (scrollRef.current) {
//     setScrollPosition(scrollRef.current.scrollLeft);
//   }
// }, []);



//   useEffect(() => {
//     updateDimensions();
//     const resizeObserver = new ResizeObserver(updateDimensions);
    
//     if (scrollRef.current) {
//       resizeObserver.observe(scrollRef.current);
//     }
    
//     return () => resizeObserver.disconnect();
//   }, [updateDimensions, category]);

//   // Auto-scroll functionality
//   useEffect(() => {
//     if (!scrollRef.current || contentWidth <= containerWidth || isHovering) return;
    
//     let scrollInterval;
//     let interactionTimer;

//     const startAutoScroll = () => {
//       scrollInterval = setInterval(() => {
//         if (!scrollRef.current) return;
        
//         const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
//         const maxScroll = scrollWidth - clientWidth;
//         const isAtStart = scrollLeft <= 10;
//         const scrollAmount = Math.min(SCROLL_AMOUNT, maxScroll - scrollLeft);
        
//         scrollRef.current.scrollTo({
//           left: isAtStart ? maxScroll : scrollLeft - scrollAmount,
//           behavior: 'smooth',
//         });
//       }, SCROLL_INTERVAL);
//     };

//     const handleInteraction = () => {
//       setIsAutoScrolling(false);
//       clearInterval(scrollInterval);
//       interactionTimer = setTimeout(() => {
//         setIsAutoScrolling(true);
//       }, SCROLL_RESUME_DELAY);
//     };

//     if (isAutoScrolling) {
//       startAutoScroll();
//     }

//     const scrollContainer = scrollRef.current;
//     scrollContainer.addEventListener('mousedown', handleInteraction);
//     scrollContainer.addEventListener('touchstart', handleInteraction);
//     scrollContainer.addEventListener('wheel', handleInteraction);

//     return () => {
//       clearInterval(scrollInterval);
//       clearTimeout(interactionTimer);
//       scrollContainer.removeEventListener('mousedown', handleInteraction);
//       scrollContainer.removeEventListener('touchstart', handleInteraction);
//       scrollContainer.removeEventListener('wheel', handleInteraction);
//     };
//   }, [containerWidth, contentWidth, isAutoScrolling, isHovering]);

//   // Pagination calculations
//   const paginatedSubcategories = subcategories?.slice(
//     currentPage * itemsPerPage,
//     (currentPage + 1) * itemsPerPage
//   );

//   // Get products based on active subcategory
//   const getProducts = () => {
//     if (!category?.products) return [];
    
//     if (activeSubcategory) {
//       return category.products.filter(product => 
//         product.subCategoryId === activeSubcategory.id
//       );
//     }
//     return category.products;
//   };

//   // Filter and sort products
//   const filteredProducts = React.useMemo(() => {
//     const products = getProducts();
    
//     return products.filter((product) => {
//       if (filter === 'lowToHigh') {
//         return product.salePrice <= 50;
//       } else if (filter === 'highToLow') {
//         return product.salePrice > 50;
//       }
//       return true;
//     }).sort((a, b) => {
//       switch (filter) {
//         case 'newest':
//           return new Date(b.createdAt) - new Date(a.createdAt);
//         case 'bestSelling':
//           return (b.saleItems?.length || 0) - (a.saleItems?.length || 0);
//         case 'biggestDiscount':
//           const discountA = ((a.productPrice - a.salePrice) / a.productPrice) * 100;
//           const discountB = ((b.productPrice - b.salePrice) / b.productPrice) * 100;
//           return discountB - discountA;
//         case 'lowToHigh':
//           return a.salePrice - b.salePrice;
//         case 'highToLow':
//           return b.salePrice - a.salePrice;
//         default:
//           return 0;
//       }
//     });
//   }, [category?.products, filter, activeSubcategory]);

//   // Color system
//   const colors = React.useMemo(() => ({
//     primary: customizations?.primaryColor || '#3b82f6',
//     secondary: customizations?.secondaryColor || '#10b981',
//     accent: customizations?.accentColor || '#f59e0b',
//     background: theme === 'dark' 
//       ? customizations?.darkBackgroundColor || '#1e293b'
//       : customizations?.backgroundColor || '#f8fafc',
//     text: theme === 'dark'
//       ? customizations?.darkTextColor || '#f8fafc'
//       : customizations?.textColor || '#1e293b',
//     cardBg: theme === 'dark'
//       ? customizations?.darkCardBackground || '#334155'
//       : customizations?.cardBackground || '#ffffff',
//     border: theme === 'dark'
//       ? customizations?.darkBorderColor || '#475569'
//       : customizations?.borderColor || '#e2e8f0',
//     buttonBg: theme === 'dark'
//       ? customizations?.darkButtonColor || '#475569'
//       : customizations?.buttonColor || '#3b82f6',
//     buttonText: theme === 'dark'
//       ? customizations?.darkButtonTextColor || '#ffffff'
//       : customizations?.buttonTextColor || '#ffffff',
//   }), [customizations, theme]);

//   const maxScrollLeft = contentWidth - containerWidth;
//   const showPrev = scrollPosition > 10;
//   const showNext = scrollPosition < maxScrollLeft - 10;

//   if (error) {
//     return (
//       <motion.div
//         dir='rtl'
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="flex flex-col items-center justify-center p-8 rounded-2xl"
//         style={{
//           background: `linear-gradient(135deg, ${customizations?.errorGradientFrom || '#fee2e2'}, ${customizations?.errorGradientTo || '#fecaca'})`,
//           color: customizations?.errorTextColor || '#b91c1c'
//         }}
//       >
//         <p className="mb-4 text-lg font-medium text-center">حدث خطأ في تحميل التخصيصات</p>
//         <motion.button
//           whileHover={{ scale: 1.03 }}
//           whileTap={{ scale: 0.98 }}
//           onClick={() => mutate()}
//           className="px-5 py-2.5 rounded-xl flex items-center gap-3 shadow-md"
//           style={{
//             backgroundColor: customizations?.errorButtonColor || '#dc2626',
//             color: customizations?.errorButtonTextColor || '#ffffff'
//           }}
//         >
//           إعادة المحاولة
//         </motion.button>
//       </motion.div>
//     );
//   }

//   if (!customizations) {
//     return (
//       <div className="space-y-8 p-6" style={{ backgroundColor: theme === 'dark' ? '#1e293b' : '#f8fafc' }}>
//         <Skeleton height={40} width={300} className="rounded-lg" />
//         <div className="flex gap-6 overflow-hidden">
//           {[...Array(4)].map((_, i) => (
//             <div key={i} className="min-w-[320px] flex-shrink-0">
//               <div className="relative">
//                 <Skeleton height={360} className="rounded-2xl" />
//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   <Skeleton height={24} width="80%" className="mb-2" />
//                   <Skeleton height={20} width="60%" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, ease: 'easeOut' }}
//       className="mb-25 max-w-15xl mx-auto px-4 sm:px-6 lg:px-8"
//       style={{ backgroundColor: colors.background, color: colors.text }}
//       dir="rtl"
//     >
//       {/* Section Header */}
//       <div 
//         className="relative w-full min-h-[150px] md:min-h-[550px] rounded-3xl overflow-hidden group isolate shadow-2xl"
//         style={{
//           backgroundImage: `url(${category?.imageUrl})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       >
//         <div 
//           className="absolute inset-0 z-10"
//           style={{
//             background: `linear-gradient(to top, ${customizations?.headerOverlayDark || 'rgba(0,0,0,0.9)'}, ${customizations?.headerOverlayLight || 'rgba(0,0,0,0.3)'}, transparent)`
//           }}
//         />
        
//         {/* Category and Subcategory Title */}
//         <div className="absolute bottom-0 left-0 right-0 z-20 p-8 text-right">
//           <motion.h1 
//             className="text-4xl md:text-6xl font-bold mb-2"
//             style={{ 
//               color: customizations?.headerTextColor || '#ffffff',
//               fontFamily: fontFamily
//             }}
//           >
//             {category?.title}
//           </motion.h1>
          
//           {activeSubcategory && (
//             <motion.p 
//               className="text-xl md:text-2xl opacity-90"
//               style={{ 
//                 color: customizations?.headerSubtextColor || '#e2e8f0',
//                 fontFamily: fontFamily
//               }}
//             >
//               {activeSubcategory.title}
//             </motion.p>
//           )}
//         </div>
//       </div>

//       {/* Subcategories Section */}
//       {subcategories?.length > 0 && (
//         <div className="my-6">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-semibold" style={{ fontFamily: fontFamily }}>
//               الفئات الفرعية:
//             </h2>
            
//             {/* Mobile Dropdown */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="flex items-center px-4 py-2 rounded-lg"
//                 style={{
//                   backgroundColor: colors.buttonBg,
//                   color: colors.buttonText,
//                   fontFamily: fontFamily
//                 }}
//               >
//                 {activeSubcategory?.title || 'اختر فئة'}
//                 <ChevronDown className="w-4 h-4 ml-2" />
//               </button>
              
//               {isDropdownOpen && (
//                 <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg"
//                   style={{
//                     backgroundColor: colors.cardBg,
//                     color: colors.text
//                   }}
//                 >
//                   <div className="py-1">
//                     <button
//                       onClick={() => {
//                         setActiveSubcategory(null);
//                         setIsDropdownOpen(false);
//                       }}
//                       className="block w-full px-4 py-2 text-right text-sm"
//                       style={{
//                         fontFamily: fontFamily,
//                         backgroundColor: !activeSubcategory ? colors.primary : 'transparent',
//                         color: !activeSubcategory ? colors.buttonText : colors.text
//                       }}
//                     >
//                       جميع المنتجات
//                     </button>
//                     {subcategories.map((subcat) => (
//                       <button
//                         key={subcat.id}
//                         onClick={() => {
//                           setActiveSubcategory(subcat);
//                           setIsDropdownOpen(false);
//                         }}
//                         className="block w-full px-4 py-2 text-right text-sm"
//                         style={{
//                           fontFamily: fontFamily,
//                           backgroundColor: activeSubcategory?.id === subcat.id ? colors.primary : 'transparent',
//                           color: activeSubcategory?.id === subcat.id ? colors.buttonText : colors.text
//                         }}
//                       >
//                         {subcat.title}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Desktop Horizontal Scroll with Pagination */}
//           <div className="hidden md:block">
//             <div className="relative">
//               {currentPage > 0 && (
//                 <button
//                   onClick={() => setCurrentPage(p => p - 1)}
//                   className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full"
//                   style={{
//                     backgroundColor: colors.buttonBg,
//                     color: colors.buttonText
//                   }}
//                 >
//                   <ChevronRight className="w-5 h-5" />
//                 </button>
//               )}
              
//               <div className="flex overflow-x-hidden gap-2 px-8">
//                 {paginatedSubcategories?.map((subcat) => (
//                   <motion.button
//                     key={subcat.id}
//                     onClick={() => setActiveSubcategory(subcat)}
//                     className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 ${
//                       activeSubcategory?.id === subcat.id ? 'bg-opacity-100' : 'bg-opacity-50 hover:bg-opacity-80'
//                     }`}
//                     style={{
//                       backgroundColor: colors.primary,
//                       color: colors.buttonText,
//                       fontFamily: fontFamily
//                     }}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     {subcat.title}
//                   </motion.button>
//                 ))}
//               </div>
              
//               {(currentPage + 1) * itemsPerPage < subcategories.length && (
//                 <button
//                   onClick={() => setCurrentPage(p => p + 1)}
//                   className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full"
//                   style={{
//                     backgroundColor: colors.buttonBg,
//                     color: colors.buttonText
//                   }}
//                 >
//                   <ChevronLeft className="w-5 h-5" />
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Enhanced Filter Bar */}
//       <motion.div 
//         className="flex justify-center gap-3 my-10 overflow-x-auto py-2 px-4"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4 }}
//       >
//         {[
//           { value: 'all', label: 'جميع المنتجات' },
//           { value: 'lowToHigh', label: 'السعر من الأقل' },
//           { value: 'highToLow', label: 'السعر من الأعلى' },
//           { value: 'newest', label: 'أحدث المنتجات' },
//           { value: 'bestSelling', label: 'الأكثر مبيعاً' },
//           { value: 'biggestDiscount', label: 'أكبر خصم' }
//         ].map((item) => (
//           <motion.button
//             key={item.value}
//             onClick={() => setFilter(item.value)}
//             className={`px-5 py-3.5 rounded-full text-sm font-medium transition-all flex-shrink-0 ${
//               filter === item.value 
//                 ? 'shadow-md' 
//                 : 'hover:bg-opacity-80'
//             }`}
//             style={{
//               backgroundColor: filter === item.value 
//                 ? customizations?.filterActiveBg || colors.accent
//                 : theme === 'dark' 
//                   ? customizations?.darkFilterInactiveBg || '#334155'
//                   : customizations?.filterInactiveBg || '#e2e8f0',
//               color: filter === item.value 
//                 ? customizations?.filterActiveText || '#ffffff'
//                 : theme === 'dark'
//                   ? customizations?.darkFilterInactiveText || '#cbd5e1'
//                   : customizations?.filterInactiveText || '#334155',
//               fontFamily: fontFamily
//             }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {item.label}
//           </motion.button>
//         ))}
//       </motion.div>

//       {/* Product List */}
//       <div 
//         className="relative mt-12"
//         onMouseEnter={() => setIsHovering(true)}
//         onMouseLeave={() => setIsHovering(false)}
//       >
//         <AnimatePresence>
//           {showPrev && (
//             <motion.button
//               initial={{ opacity: 0, x: 40 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 40 }}
//               onClick={() => scrollTo('prev')}
//               className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full shadow-xl hover:shadow-2xl transition-all"
//               style={{
//                 backgroundColor: theme === 'dark' 
//                   ? customizations?.darkNavButtonBg || '#334155'
//                   : customizations?.navButtonBg || '#ffffff',
//                 color: theme === 'dark'
//                   ? customizations?.darkNavButtonIcon || '#cbd5e1'
//                   : customizations?.navButtonIcon || '#64748b'
//               }}
//               whileHover={{ 
//                 scale: 1.1,
//                 backgroundColor: colors.primary,
//                 color: '#fff'
//               }}
//               whileTap={{ scale: 0.9 }}
//               aria-label="Scroll left"
//             >
//               <ChevronRight className="h-6 w-6" />
//             </motion.button>
//           )}
//         </AnimatePresence>

//         <div
//           ref={scrollRef}
//           onScroll={handleScroll}
//           className="flex overflow-x-auto scroll-smooth py-4 px-2 gap-6 scrollbar-hide"
//           dir="rtl"
//         >
//           {filteredProducts.length === 0 ? (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="w-full py-16 text-center"
//               style={{ color: colors.text }}
//             >
//               <p className="text-xl" style={{ fontFamily: fontFamily }}>
//                 {activeSubcategory 
//                   ? `لا توجد منتجات متاحة حالياً في ${activeSubcategory.title}`
//                   : 'لا توجد منتجات متاحة حالياً في هذا القسم'}
//               </p>
//             </motion.div>
//           ) : (
//             filteredProducts.map((product, index) => (
//               <motion.div
//                 dir='rtl'
//                 key={product.id}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ 
//                   delay: index * 0.05,
//                   type: 'spring',
//                   stiffness: 300,
//                   damping: 20
//                 }}
//                 className="flex-shrink-0 w-80 px-2"
//                 whileHover={{ 
//                   y: -10,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 <CategoryCarouselstores
//                   isMarketPage={isMarketPage}
//                   products={[product]}
//                   customizations={customizations}
//                   fontFamily={fontFamily}
//                   slugDomain={slugDomain}
//                 />
//               </motion.div>
//             ))
//           )}
//         </div>

//         <AnimatePresence>
//           {showNext && (
//             <motion.button
//               initial={{ opacity: 0, x: -40 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -40 }}
//               onClick={() => scrollTo('next')}
//               className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full shadow-xl hover:shadow-2xl transition-all"
//               style={{
//                 backgroundColor: theme === 'dark' 
//                   ? customizations?.darkNavButtonBg || '#334155'
//                   : customizations?.navButtonBg || '#ffffff',
//                 color: theme === 'dark'
//                   ? customizations?.darkNavButtonIcon || '#cbd5e1'
//                   : customizations?.navButtonIcon || '#64748b'
//               }}
//               whileHover={{ 
//                 scale: 1.1,
//                 backgroundColor: colors.primary,
//                 color: '#fff'
//               }}
//               whileTap={{ scale: 0.9 }}
//               aria-label="Scroll right"
//             >
//               <ChevronLeft className="h-6 w-6" />
//             </motion.button>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.section>
//   );
// }
'use client';
import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import CategoryCarouselstores from './CategoryCarousel-store';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import useSWR from 'swr';
import { ChevronLeft, ChevronRight, ArrowRight, Grid, Star, Zap, ArrowUp, ArrowDown, Clock } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

export default function CategoryList({ subcategory, category, isMarketPage, storeId, customization = {}, slugDomain }) {
  // Constants
  const SCROLL_INTERVAL = 3000;
  const SCROLL_AMOUNT = 300;
  
  // Hooks and Refs
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const fontFamily = customization.fontFamily || 'sans-serif';
  const productsCache = useRef({});
  const scrollRef = useRef(null);
  
  // State
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [filter, setFilter] = useState('all');
  const [isHovering, setIsHovering] = useState(false);
  const [activeSubcategory, setActiveSubcategory] = useState(null); // Start with null to show all products

  // Data Fetching
  const { data: customizations, error, mutate } = useSWR(
    `/api/customizations/Customizationes/${storeId}`,
    fetcher,
    { revalidateOnFocus: false, shouldRetryOnError: false }
  );

  const { data: subcategories } = useSWR(
    category?.id ? `/api/subcategory?categoryId=${category.id}` : null,
    fetcher
  );

  const { theme } = useTheme();

  // Calculate dimensions
  const updateDimensions = useCallback(() => {
    if (scrollRef.current) {
      setContainerWidth(scrollRef.current.clientWidth);
      setContentWidth(scrollRef.current.scrollWidth);
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (scrollRef.current) resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [updateDimensions, category]);

  // Product filtering and sorting - FIXED VERSION
  const getProducts = useCallback(() => {
    if (!category?.products) return [];
    
    // If no subcategory selected or "All Products" chosen, return all products
    if (!activeSubcategory) {
      return category.products;
    }
    
    // Otherwise return products for the selected subcategory
    return category.products.filter(product => product.subCategoryId === activeSubcategory.id);
  }, [category?.products, activeSubcategory]);

  const filteredProducts = useMemo(() => {
    const products = getProducts();
    
    // Apply price range filters if selected
    let filtered = products;
    if (filter === 'lowToHigh') {
      filtered = products.filter(p => p.salePrice <= 50);
    } else if (filter === 'highToLow') {
      filtered = products.filter(p => p.salePrice > 50);
    }
    
    // Apply sorting
    return filtered.sort((a, b) => {
      switch (filter) {
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'bestSelling':
          return (b.saleItems?.length || 0) - (a.saleItems?.length || 0);
        case 'biggestDiscount':
          const discountA = ((a.productPrice - a.salePrice) / a.productPrice) * 100;
          const discountB = ((b.productPrice - b.salePrice) / b.productPrice) * 100;
          return discountB - discountA;
        case 'lowToHigh':
          return a.salePrice - b.salePrice;
        case 'highToLow':
          return b.salePrice - a.salePrice;
        default:
          return 0; // No sorting for 'all' filter
      }
    });
  }, [getProducts, filter]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!scrollRef.current || contentWidth <= containerWidth || isHovering || !isAutoScrolling) return;
    
    const scrollContainer = scrollRef.current;
    let scrollInterval;
    
    const autoScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      const maxScroll = scrollWidth - clientWidth;
      
      if (scrollLeft >= maxScroll - 10) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const scrollAmount = Math.min(SCROLL_AMOUNT, maxScroll - scrollLeft);
        scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };
    
    scrollInterval = setInterval(autoScroll, SCROLL_INTERVAL);
    
    const handleInteraction = () => {
      setIsAutoScrolling(false);
      clearInterval(scrollInterval);
      setTimeout(() => setIsAutoScrolling(true), 5000);
    };

    scrollContainer.addEventListener('mousedown', handleInteraction);
    scrollContainer.addEventListener('touchstart', handleInteraction);
    scrollContainer.addEventListener('wheel', handleInteraction);
    
    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mousedown', handleInteraction);
      scrollContainer.removeEventListener('touchstart', handleInteraction);
      scrollContainer.removeEventListener('wheel', handleInteraction);
    };
  }, [containerWidth, contentWidth, isAutoScrolling, isHovering]);

  // Scroll handlers
  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      setScrollPosition(scrollRef.current.scrollLeft);
    }
  }, []);

  const scrollTo = useCallback((direction) => {
    if (scrollRef.current) {
      const scrollAmount = containerWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'prev' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  }, [containerWidth]);

  // Color system
  const colors = useMemo(() => ({
    primary: customizations?.primaryColor || '#3b82f6',
    secondary: customizations?.secondaryColor || '#10b981',
    accent: customizations?.accentColor || '#f59e0b',
    background: theme === 'dark' ? customizations?.darkBackgroundColor || '#1e293b' : customizations?.backgroundColor || '#f8fafc',
    text: theme === 'dark' ? customizations?.darkTextColor || '#f8fafc' : customizations?.textColor || '#1e293b',
    cardBg: theme === 'dark' ? customizations?.darkCardBackground || '#334155' : customizations?.cardBackground || '#ffffff',
    border: theme === 'dark' ? customizations?.darkBorderColor || '#475569' : customizations?.borderColor || '#e2e8f0',
    buttonBg: theme === 'dark' ? customizations?.darkButtonColor || '#475569' : customizations?.buttonColor || '#3b82f6',
    buttonText: theme === 'dark' ? customizations?.darkButtonTextColor || '#ffffff' : customizations?.buttonTextColor || '#ffffff',
  }), [customizations, theme]);

  // Filter options
  const filterOptions = useMemo(() => [
    { value: 'all', label: 'جميع المنتجات', icon: <Grid size={16} /> },
    { value: 'newest', label: 'أحدث المنتجات', icon: <Clock size={16} /> },
    { value: 'bestSelling', label: 'الأكثر مبيعاً', icon: <Star size={16} /> },
    { value: 'biggestDiscount', label: 'أكبر خصم', icon: <Zap size={16} /> },
    { value: 'lowToHigh', label: 'السعر من الأقل', icon: <ArrowDown size={16} /> },
    { value: 'highToLow', label: 'السعر من الأعلى', icon: <ArrowUp size={16} /> }
  ], []);

  // Scroll position calculations
  const maxScrollLeft = contentWidth - containerWidth;
  const showPrev = scrollPosition > 10;
  const showNext = scrollPosition < maxScrollLeft - 10;

  // Error state
  if (error) {
    return (
      <motion.div
        dir='rtl'
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center p-8 rounded-2xl"
        style={{
          background: `linear-gradient(135deg, ${customizations?.errorGradientFrom || '#fee2e2'}, ${customizations?.errorGradientTo || '#fecaca'})`,
          color: customizations?.errorTextColor || '#b91c1c'
        }}
      >
        <p className="mb-4 text-lg font-medium text-center">حدث خطأ في تحميل التخصيصات</p>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => mutate()}
          className="px-5 py-2.5 rounded-xl flex items-center gap-3 shadow-md"
          style={{
            backgroundColor: customizations?.errorButtonColor || '#dc2626',
            color: customizations?.errorButtonTextColor || '#ffffff'
          }}
        >
          إعادة المحاولة
        </motion.button>
      </motion.div>
    );
  }

  // Loading state
  if (!customizations) {
    return (
      <div className="space-y-8 p-6" style={{ backgroundColor: theme === 'dark' ? '#1e293b' : '#f8fafc' }}>
        <Skeleton height={40} width={300} className="rounded-lg" />
        <div className="flex gap-6 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="min-w-[320px] flex-shrink-0">
              <div className="relative">
                <Skeleton height={360} className="rounded-2xl" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <Skeleton height={24} width="80%" className="mb-2" />
                  <Skeleton height={20} width="60%" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="mb-25 max-w-15xl mx-auto px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: colors.background, color: colors.text }}
      dir="rtl"
    >
      {/* Header Section */}
      <div 
        className="relative w-full min-h-[150px] md:min-h-[550px] rounded-3xl overflow-hidden group isolate shadow-2xl"
        style={{
          backgroundImage: `url(${category?.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(to top, ${customizations?.headerOverlayDark || 'rgba(0,0,0,0.9)'}, ${customizations?.headerOverlayLight || 'rgba(0,0,0,0.3)'}, transparent)`
          }}
        />
        
        <div className="absolute bottom-0 left-0 right-0 z-20 p-8 text-right">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-2"
            style={{ 
              color: customizations?.headerTextColor || '#ffffff',
              fontFamily: fontFamily
            }}
          >
            {category?.title}
          </motion.h1>
          
          {activeSubcategory && (
            <motion.p 
              className="text-xl md:text-2xl opacity-90"
              style={{ 
                color: customizations?.headerSubtextColor || '#e2e8f0',
                fontFamily: fontFamily
              }}
            >
              {activeSubcategory.title}
            </motion.p>
          )}
        </div>
      </div>

      {/* Subcategories Tabs */}
      {subcategories?.length > 0 && (
        <div className="my-6">
          <h2 className="text-xl font-semibold mb-4" style={{ fontFamily: fontFamily }}>
            الفئات الفرعية:
          </h2>
          <div className="flex flex-wrap gap-2">
            <motion.button
              onClick={() => {
                setActiveSubcategory(null);
                setFilter('all');
                if (scrollRef.current) scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                !activeSubcategory ? 'bg-opacity-100' : 'bg-opacity-50 hover:bg-opacity-80'
              }`}
              style={{
                backgroundColor: colors.primary,
                color: colors.buttonText,
                fontFamily: fontFamily
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              جميع المنتجات
            </motion.button>

            {subcategories.map((subcat) => (
              <motion.button
                key={subcat.id}
                onClick={() => {
                  setActiveSubcategory(subcat);
                  setFilter('all');
                  if (scrollRef.current) scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeSubcategory?.id === subcat.id ? 'bg-opacity-100' : 'bg-opacity-50 hover:bg-opacity-80'
                }`}
                style={{
                  backgroundColor: colors.primary,
                  color: colors.buttonText,
                  fontFamily: fontFamily
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {subcat.title}
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Filter Bar */}
      <motion.div 
        className="flex justify-center gap-3 my-6 overflow-x-auto py-2 px-4 scrollbar-hide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {filterOptions.map((item) => (
          <motion.button
            key={item.value}
            onClick={() => {
              setFilter(item.value);
              if (scrollRef.current) scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 flex-shrink-0 ${
              filter === item.value ? 'shadow-md' : 'hover:bg-opacity-80'
            }`}
            style={{
              backgroundColor: filter === item.value 
                ? colors.accent
                : theme === 'dark' 
                  ? colors.cardBg
                  : colors.border,
              color: filter === item.value 
                ? colors.buttonText
                : colors.text,
              fontFamily: fontFamily
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.icon}
            {item.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Section Title */}
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-6 text-center"
        style={{ fontFamily: fontFamily }}
      >
        {category?.title}
        {activeSubcategory && ` / ${activeSubcategory.title}`}
      </motion.h2>

      {/* Product List */}
      <div 
        className="relative mt-12"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <AnimatePresence>
          {showPrev && (
            <motion.button
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              onClick={() => scrollTo('prev')}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full shadow-xl hover:shadow-2xl transition-all"
              style={{
                backgroundColor: theme === 'dark' 
                  ? customizations?.darkNavButtonBg || '#334155'
                  : customizations?.navButtonBg || '#ffffff',
                color: theme === 'dark'
                  ? customizations?.darkNavButtonIcon || '#cbd5e1'
                  : customizations?.navButtonIcon || '#64748b'
              }}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: colors.primary,
                color: '#fff'
              }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll left"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          )}
        </AnimatePresence>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto scroll-smooth py-4 px-2 gap-6 scrollbar-hide"
          dir="rtl"
        >
          {filteredProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full py-16 text-center"
              style={{ color: colors.text }}
            >
              <p className="text-xl" style={{ fontFamily: fontFamily }}>
                {activeSubcategory 
                  ? `لا توجد منتجات متاحة حالياً في ${activeSubcategory.title}`
                  : 'لا توجد منتجات متاحة حالياً في هذا القسم'}
              </p>
            </motion.div>
          ) : (
            filteredProducts.map((product, index) => (
              <motion.div
                dir='rtl'
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: index * 0.05,
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}
                className="flex-shrink-0 w-80 px-2"
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
              >
                <CategoryCarouselstores
                  isMarketPage={isMarketPage}
                  products={[product]}
                  customizations={customizations}
                  fontFamily={fontFamily}
                  slugDomain={slugDomain}
                />
              </motion.div>
            ))
          )}
        </div>

        <AnimatePresence>
          {showNext && (
            <motion.button
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              onClick={() => scrollTo('next')}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full shadow-xl hover:shadow-2xl transition-all"
              style={{
                backgroundColor: theme === 'dark' 
                  ? customizations?.darkNavButtonBg || '#334155'
                  : customizations?.navButtonBg || '#ffffff',
                color: theme === 'dark'
                  ? customizations?.darkNavButtonIcon || '#cbd5e1'
                  : customizations?.navButtonIcon || '#64748b'
              }}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: colors.primary,
                color: '#fff'
              }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll right"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
// 'use client';
// import React, { useRef, useEffect, useState, useCallback } from 'react';
// import Link from 'next/link';
// import CategoryCarouselstores from './CategoryCarousel-store';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import useSWR from 'swr';
// import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
// import { useTheme } from 'next-themes';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function CategoryList({ category, isMarketPage, storeId, customization = {}, slugDomain }) {
//   // Constants and state initialization
//   const SCROLL_INTERVAL = 3000;
//   const SCROLL_RESUME_DELAY = 15000;
//   const SCROLL_AMOUNT = 300;
//   const fetcher = (url) => fetch(url).then((res) => res.json());
//   const fontFamily = customization.fontFamily || 'sans-serif';
//   const { data: customizations, error, mutate } = useSWR(
//     `/api/customizations/Customizationes/${storeId}`,
//     fetcher,
//     {
//       revalidateOnFocus: false,
//       shouldRetryOnError: false
//     }
//   );
//   const { theme } = useTheme();
//   const scrollRef = useRef(null);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [containerWidth, setContainerWidth] = useState(0);
//   const [contentWidth, setContentWidth] = useState(0);
//   const [isAutoScrolling, setIsAutoScrolling] = useState(true);
//   const [filter, setFilter] = useState('all');
//   const [isHovering, setIsHovering] = useState(false);

//   // Calculate element dimensions
//   const updateDimensions = useCallback(() => {
//     if (scrollRef.current) {
//       setContainerWidth(scrollRef.current.clientWidth);
//       setContentWidth(scrollRef.current.scrollWidth);
//     }
//   }, []);

//   useEffect(() => {
//     updateDimensions();
//     const resizeObserver = new ResizeObserver(updateDimensions);
//     if (scrollRef.current) {
//       resizeObserver.observe(scrollRef.current);
//     }
//     return () => resizeObserver.disconnect();
//   }, [updateDimensions, category]);

//   // Auto-scroll functionality
//   useEffect(() => {
//     if (!scrollRef.current || contentWidth <= containerWidth || isHovering) return;
//     let scrollInterval;
//     let interactionTimer;
//     const startAutoScroll = () => {
//       scrollInterval = setInterval(() => {
//         if (!scrollRef.current) return;
//         const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
//         const maxScroll = scrollWidth - clientWidth;
//         const isAtStart = scrollLeft <= 10;
//         const scrollAmount = Math.min(SCROLL_AMOUNT, maxScroll - scrollLeft);
//         scrollRef.current.scrollTo({
//           left: isAtStart ? maxScroll : scrollLeft - scrollAmount,
//           behavior: 'smooth',
//         });
//       }, SCROLL_INTERVAL);
//     };

//     const handleInteraction = () => {
//       setIsAutoScrolling(false);
//       clearInterval(scrollInterval);
//       interactionTimer = setTimeout(() => {
//         setIsAutoScrolling(true);
//       }, SCROLL_RESUME_DELAY);
//     };

//     if (isAutoScrolling) {
//       startAutoScroll();
//     }

//     const scrollContainer = scrollRef.current;
//     scrollContainer.addEventListener('mousedown', handleInteraction);
//     scrollContainer.addEventListener('touchstart', handleInteraction);
//     scrollContainer.addEventListener('wheel', handleInteraction);

//     return () => {
//       clearInterval(scrollInterval);
//       clearTimeout(interactionTimer);
//       scrollContainer.removeEventListener('mousedown', handleInteraction);
//       scrollContainer.removeEventListener('touchstart', handleInteraction);
//       scrollContainer.removeEventListener('wheel', handleInteraction);
//     };
//   }, [containerWidth, contentWidth, isAutoScrolling, isHovering]);

//   const handleScroll = useCallback(() => {
//     if (scrollRef.current) {
//       setScrollPosition(scrollRef.current.scrollLeft);
//     }
//   }, []);

//   const scrollTo = useCallback((direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = containerWidth * 0.8;
//       scrollRef.current.scrollBy({
//         left: direction === 'prev' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth',
//       });
//     }
//   }, [containerWidth]);

//   // Filter and sort products
//   const filteredProducts = React.useMemo(() => {
//     if (!category.products) return [];
//     return category.products.filter((product) => {
//       if (filter === 'lowToHigh') {
//         return product.salePrice <= 50;
//       } else if (filter === 'highToLow') {
//         return product.salePrice > 50;
//       }
//       return true;
//     }).sort((a, b) => {
//       switch (filter) {
//         case 'newest':
//           return new Date(b.createdAt) - new Date(a.createdAt);
//         case 'bestSelling':
//           return (b.saleItems?.length || 0) - (a.saleItems?.length || 0);
//         case 'biggestDiscount':
//           const discountA = ((a.productPrice - a.salePrice) / a.productPrice) * 100;
//           const discountB = ((b.productPrice - b.salePrice) / b.productPrice) * 100;
//           return discountB - discountA;
//         case 'lowToHigh':
//           return a.salePrice - b.salePrice;
//         case 'highToLow':
//           return b.salePrice - a.salePrice;
//         default:
//           return 0;
//       }
//     });
//   }, [category.products, filter]);

//   // Color system
//   const colors = React.useMemo(() => ({
//     primary: customizations?.primaryColor || '#3b82f6',
//     secondary: customizations?.secondaryColor || '#10b981',
//     accent: customizations?.accentColor || '#f59e0b',
//     background: theme === 'dark' 
//       ? customizations?.darkBackgroundColor || '#1e293b'
//       : customizations?.backgroundColor || '#f8fafc',
//     text: theme === 'dark'
//       ? customizations?.darkTextColor || '#f8fafc'
//       : customizations?.textColor || '#1e293b',
//     cardBg: theme === 'dark'
//       ? customizations?.darkCardBackground || '#334155'
//       : customizations?.cardBackground || '#ffffff',
//     border: theme === 'dark'
//       ? customizations?.darkBorderColor || '#475569'
//       : customizations?.borderColor || '#e2e8f0',
//     buttonBg: theme === 'dark'
//       ? customizations?.darkButtonColor || '#475569'
//       : customizations?.buttonColor || '#3b82f6',
//     buttonText: theme === 'dark'
//       ? customizations?.darkButtonTextColor || '#ffffff'
//       : customizations?.buttonTextColor || '#ffffff',
//   }), [customizations, theme]);

//   const maxScrollLeft = contentWidth - containerWidth;
//   const showPrev = scrollPosition > 10;
//   const showNext = scrollPosition < maxScrollLeft - 10;

//   if (error) {
//     return (
//       <motion.div
//         dir='rtl'
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="flex flex-col items-center justify-center p-8 rounded-2xl"
//         style={{
//           background: `linear-gradient(135deg, ${customizations?.errorGradientFrom || '#fee2e2'}, ${customizations?.errorGradientTo || '#fecaca'})`,
//           color: customizations?.errorTextColor || '#b91c1c'
//         }}
//       >
//         <p className="mb-4 text-lg font-medium text-center">حدث خطأ في تحميل التخصيصات</p>
//         <motion.button
//           whileHover={{ scale: 1.03 }}
//           whileTap={{ scale: 0.98 }}
//           onClick={() => mutate()}
//           className="px-5 py-2.5 rounded-xl flex items-center gap-3 shadow-md"
//           style={{
//             backgroundColor: customizations?.errorButtonColor || '#dc2626',
//             color: customizations?.errorButtonTextColor || '#ffffff'
//           }}
//         >
//           إعادة المحاولة
//         </motion.button>
//       </motion.div>
//     );
//   }

//   if (!customizations) {
//     return (
//       <div className="space-y-8 p-6" style={{ backgroundColor: theme === 'dark' ? '#1e293b' : '#f8fafc' }}>
//         <Skeleton height={40} width={300} className="rounded-lg" />
//         <div className="flex gap-6 overflow-hidden">
//           {[...Array(4)].map((_, i) => (
//             <div key={i} className="min-w-[320px] flex-shrink-0">
//               <div className="relative">
//                 <Skeleton height={360} className="rounded-2xl" />
//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   <Skeleton height={24} width="80%" className="mb-2" />
//                   <Skeleton height={20} width="60%" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, ease: 'easeOut' }}
//       className="mb-25 max-w-15xl mx-auto px-4 sm:px-6 lg:px-8"
//       style={{ backgroundColor: colors.background, color: colors.text }}
//       dir="rtl"
//     >
//       {/* Section Header */}
//       <div 
//         className="relative w-full min-h-[150px] md:min-h-[550px] rounded-3xl overflow-hidden group isolate shadow-2xl"
//         style={{
//           backgroundImage: `url(${category.imageUrl})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       >
//         <div 
//           className="absolute inset-0 z-10"
//           style={{
//             background: `linear-gradient(to top, ${customizations?.headerOverlayDark || 'rgba(0,0,0,0.9)'}, ${customizations?.headerOverlayLight || 'rgba(0,0,0,0.3)'}, transparent)`
//           }}
//         />
//       </div>

//       {/* Enhanced Filter Bar */}
//       <motion.div 
//         className="flex justify-center gap-3 my-10 overflow-x-auto py-2 px-4"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4 }}
//       >
//         {[
//           { value: 'all', label: 'جميع المنتجات' },
//           { value: 'lowToHigh', label: 'السعر من الأقل' },
//           { value: 'highToLow', label: 'السعر من الأعلى' },
//           { value: 'newest', label: 'أحدث المنتجات' },
//           { value: 'bestSelling', label: 'الأكثر مبيعاً' },
//           { value: 'biggestDiscount', label: 'أكبر خصم' }
//         ].map((item) => (
//           <motion.button
//             key={item.value}
//             onClick={() => setFilter(item.value)}
//             className={`px-5 py-3.5 rounded-full text-sm font-medium transition-all flex-shrink-0 ${
//               filter === item.value 
//                 ? 'shadow-md' 
//                 : 'hover:bg-opacity-80'
//             }`}
//             style={{
//               backgroundColor: filter === item.value 
//                 ? customizations?.filterActiveBg || colors.accent
//                 : theme === 'dark' 
//                   ? customizations?.darkFilterInactiveBg || '#334155'
//                   : customizations?.filterInactiveBg || '#e2e8f0',
//               color: filter === item.value 
//                 ? customizations?.filterActiveText || '#ffffff'
//                 : theme === 'dark'
//                   ? customizations?.darkFilterInactiveText || '#cbd5e1'
//                   : customizations?.filterInactiveText || '#334155',
//               fontFamily: fontFamily
//             }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {item.label}
//           </motion.button>
//         ))}
//       </motion.div>

//       {/* Product List */}
//       <div 
//         className="relative mt-12"
//         onMouseEnter={() => setIsHovering(true)}
//         onMouseLeave={() => setIsHovering(false)}
//       >
//         <AnimatePresence>
//           {showPrev && (
//             <motion.button
//               initial={{ opacity: 0, x: 40 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 40 }}
//               onClick={() => scrollTo('prev')}
//               className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full shadow-xl hover:shadow-2xl transition-all"
//               style={{
//                 backgroundColor: theme === 'dark' 
//                   ? customizations?.darkNavButtonBg || '#334155'
//                   : customizations?.navButtonBg || '#ffffff',
//                 color: theme === 'dark'
//                   ? customizations?.darkNavButtonIcon || '#cbd5e1'
//                   : customizations?.navButtonIcon || '#64748b'
//               }}
//               whileHover={{ 
//                 scale: 1.1,
//                 backgroundColor: colors.primary,
//                 color: '#fff'
//               }}
//               whileTap={{ scale: 0.9 }}
//               aria-label="Scroll left"
//             >
//               <ChevronRight className="h-6 w-6" />
//             </motion.button>
//           )}
//         </AnimatePresence>
//         <div
//           ref={scrollRef}
//           onScroll={handleScroll}
//           className="flex overflow-x-auto scroll-smooth py-4 px-2 gap-6 scrollbar-hide"
//           dir="rtl"
//         >
//           {filteredProducts.length === 0 ? (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="w-full py-16 text-center"
//               style={{ color: colors.text }}
//             >
//               <p className="text-xl" style={{ fontFamily: fontFamily }}>
//                 لا توجد منتجات متاحة حالياً في هذا القسم
//               </p>
//             </motion.div>
//           ) : (
//             filteredProducts.map((product, index) => (
//               <motion.div
//                 dir='rtl'
//                 key={product.id}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ 
//                   delay: index * 0.05,
//                   type: 'spring',
//                   stiffness: 300,
//                   damping: 20
//                 }}
//                 className="flex-shrink-0 w-80 px-2"
//                 whileHover={{ 
//                   y: -10,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 <CategoryCarouselstores
//                   isMarketPage={isMarketPage}
//                   products={[product]}
//                   customizations={customizations}
//                   fontFamily={fontFamily}
//                   slugDomain={slugDomain}
//                 />
//               </motion.div>
//             ))
//           )}
//         </div>
//         <AnimatePresence>
//           {showNext && (
//             <motion.button
//               initial={{ opacity: 0, x: -40 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -40 }}
//               onClick={() => scrollTo('next')}
//               className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full shadow-xl hover:shadow-2xl transition-all"
//               style={{
//                 backgroundColor: theme === 'dark' 
//                   ? customizations?.darkNavButtonBg || '#334155'
//                   : customizations?.navButtonBg || '#ffffff',
//                 color: theme === 'dark'
//                   ? customizations?.darkNavButtonIcon || '#cbd5e1'
//                   : customizations?.navButtonIcon || '#64748b'
//               }}
//               whileHover={{ 
//                 scale: 1.1,
//                 backgroundColor: colors.primary,
//                 color: '#fff'
//               }}
//               whileTap={{ scale: 0.9 }}
//               aria-label="Scroll right"
//             >
//               <ChevronLeft className="h-6 w-6" />
//             </motion.button>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.section>
//   );
// }