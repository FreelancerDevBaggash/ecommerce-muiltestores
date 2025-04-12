
'use client';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import CategoryCarouselstores from './CategoryCarousel-store';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import useSWR from 'swr';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

export default function CategoryList({ category, isMarketPage, storeId, customization = {}, slugDomain }) {
  // Constants and state initialization
  const SCROLL_INTERVAL = 3000;
  const SCROLL_RESUME_DELAY = 15000;
  const SCROLL_AMOUNT = 300;
  
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const fontFamily = customization.fontFamily || 'sans-serif';
  
  const { data: customizations, error, mutate } = useSWR(
    `/api/customizations/Customizationes/${storeId}`,
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false
    }
  );
  
  const { theme } = useTheme();
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [filter, setFilter] = useState('all');
  const [isHovering, setIsHovering] = useState(false);

  // Calculate element dimensions
  const updateDimensions = useCallback(() => {
    if (scrollRef.current) {
      setContainerWidth(scrollRef.current.clientWidth);
      setContentWidth(scrollRef.current.scrollWidth);
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    const resizeObserver = new ResizeObserver(updateDimensions);
    
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }
    
    return () => resizeObserver.disconnect();
  }, [updateDimensions, category]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!scrollRef.current || contentWidth <= containerWidth || isHovering) return;
    
    let scrollInterval;
    let interactionTimer;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!scrollRef.current) return;
        
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const isAtStart = scrollLeft <= 10;
        const scrollAmount = Math.min(SCROLL_AMOUNT, maxScroll - scrollLeft);
        
        scrollRef.current.scrollTo({
          left: isAtStart ? maxScroll : scrollLeft - scrollAmount,
          behavior: 'smooth',
        });
      }, SCROLL_INTERVAL);
    };

    const handleInteraction = () => {
      setIsAutoScrolling(false);
      clearInterval(scrollInterval);
      interactionTimer = setTimeout(() => {
        setIsAutoScrolling(true);
      }, SCROLL_RESUME_DELAY);
    };

    if (isAutoScrolling) {
      startAutoScroll();
    }

    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener('mousedown', handleInteraction);
    scrollContainer.addEventListener('touchstart', handleInteraction);
    scrollContainer.addEventListener('wheel', handleInteraction);

    return () => {
      clearInterval(scrollInterval);
      clearTimeout(interactionTimer);
      scrollContainer.removeEventListener('mousedown', handleInteraction);
      scrollContainer.removeEventListener('touchstart', handleInteraction);
      scrollContainer.removeEventListener('wheel', handleInteraction);
    };
  }, [containerWidth, contentWidth, isAutoScrolling, isHovering]);

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

  // Filter and sort products
  const filteredProducts = React.useMemo(() => {
    if (!category.products) return [];
    
    return category.products.filter((product) => {
      if (filter === 'lowToHigh') {
        return product.salePrice <= 50;
      } else if (filter === 'highToLow') {
        return product.salePrice > 50;
      }
      return true;
    }).sort((a, b) => {
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
          return 0;
      }
    });
  }, [category.products, filter]);

  // Color system
  const colors = React.useMemo(() => ({
    primary: customizations?.primaryColor || '#3b82f6',
    secondary: customizations?.secondaryColor || '#10b981',
    accent: customizations?.accentColor || '#f59e0b',
    background: theme === 'dark' 
      ? customizations?.darkBackgroundColor || '#1e293b'
      : customizations?.backgroundColor || '#f8fafc',
    text: theme === 'dark'
      ? customizations?.darkTextColor || '#f8fafc'
      : customizations?.textColor || '#1e293b',
    cardBg: theme === 'dark'
      ? customizations?.darkCardBackground || '#334155'
      : customizations?.cardBackground || '#ffffff',
    border: theme === 'dark'
      ? customizations?.darkBorderColor || '#475569'
      : customizations?.borderColor || '#e2e8f0',
    buttonBg: theme === 'dark'
      ? customizations?.darkButtonColor || '#475569'
      : customizations?.buttonColor || '#3b82f6',
    buttonText: theme === 'dark'
      ? customizations?.darkButtonTextColor || '#ffffff'
      : customizations?.buttonTextColor || '#ffffff',
  }), [customizations, theme]);

  const maxScrollLeft = contentWidth - containerWidth;
  const showPrev = scrollPosition > 10;
  const showNext = scrollPosition < maxScrollLeft - 10;

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
      {/* Section Header */}
      <div 
        className="relative w-full min-h-[150px] md:min-h-[550px] rounded-3xl overflow-hidden group isolate shadow-2xl"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div 
        c
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(to top, ${customizations?.headerOverlayDark || 'rgba(0,0,0,0.9)'}, ${customizations?.headerOverlayLight || 'rgba(0,0,0,0.3)'}, transparent)`
          }}
        />
      </div>

      {/* Enhanced Filter Bar */}
      <motion.div 
        className="flex justify-center gap-3 my-10 overflow-x-auto py-2 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {[
          { value: 'all', label: 'جميع المنتجات' },
          { value: 'lowToHigh', label: 'السعر من الأقل' },
          { value: 'highToLow', label: 'السعر من الأعلى' },
          { value: 'newest', label: 'أحدث المنتجات' },
          { value: 'bestSelling', label: 'الأكثر مبيعاً' },
          { value: 'biggestDiscount', label: 'أكبر خصم' }
        ].map((item) => (
          <motion.button
            key={item.value}
            onClick={() => setFilter(item.value)}
            className={`px-5 py-3.5 rounded-full text-sm font-medium transition-all flex-shrink-0 ${
              filter === item.value 
                ? 'shadow-md' 
                : 'hover:bg-opacity-80'
            }`}
            style={{
              backgroundColor: filter === item.value 
                ? customizations?.filterActiveBg || colors.accent
                : theme === 'dark' 
                  ? customizations?.darkFilterInactiveBg || '#334155'
                  : customizations?.filterInactiveBg || '#e2e8f0',
              color: filter === item.value 
                ? customizations?.filterActiveText || '#ffffff'
                : theme === 'dark'
                  ? customizations?.darkFilterInactiveText || '#cbd5e1'
                  : customizations?.filterInactiveText || '#334155',
              fontFamily: fontFamily
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.label}
          </motion.button>
        ))}
      </motion.div>

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
                لا توجد منتجات متاحة حالياً في هذا القسم
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