
// 'use client';

// import React, { useEffect, useState, useMemo } from 'react';
// import { useSession } from 'next-auth/react';
// import { usePathname } from 'next/navigation';
// import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import { User, Menu, X, ShoppingCart, HelpCircle, ChevronDown, ChevronLeft, Search, Heart, Package, Home, Star } from 'lucide-react';
// import SearchForm from './SearchForm';
// import HelpModalstore from './HelpModal-store';
// import CartCount from '../templaet3/cart-templaet/CartCount';
// import ThemeSwitcherBtn from '../../ThemeSwitcherBtn';
// import UserAvatar from './UserAvatar';
// import { useTheme } from 'next-themes';
// import WishlistButton from './WishlistButton';

// export default function Navbar({ slugDomain, storeData = {}, customization = {}, storeId }) {
//   // Default values for empty props
//   const safeStoreData = useMemo(() => ({
//     profileImageUrl: '/default-store.png',
//     businessName: 'متجرك',
//     ...storeData
//   }), [storeData]);

//   const safeCustomization = useMemo(() => ({
//     primaryColor: '#6366f1',
//     secondaryColor: '#8b5cf6',
//     accentColor: '#ec4899',
//     backgroundColor: '#f9fafb',
//     textColor: '#1f2937',
//     darkTextColor: '#f3f4f6',
//     darkBackgroundColor: '#0f172a',
//     fontFamily: 'Inter, sans-serif',
//     rounded: '14px',
//     shadow: 'xl',
//     hoverEffect: 'glow',
//     navType: 'glass',
//     borderWidth: '1px',
//     logoSize: 'medium',
//     navHeight: '84px',
//     ...customization
//   }), [customization]);

//   const { theme, resolvedTheme } = useTheme();
//   const isDarkMode = resolvedTheme === 'dark';
//   const { scrollYProgress } = useScroll();
  
//   // Enhanced scroll effects
//   const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.97]);
//   const blur = useTransform(scrollYProgress, [0, 0.1], [0, 15]);
//   const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);
//   const borderOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
//   const elevation = useTransform(scrollYProgress, [0, 0.1], [0, 0.2]);

//   // Generate sophisticated color palette with fallbacks
//   const generateColorPalette = (baseColor = '#6366f1') => {
//     try {
//       return {
//         50: `color-mix(in srgb, ${baseColor} 10%, white)`,
//         100: `color-mix(in srgb, ${baseColor} 20%, white)`,
//         200: `color-mix(in srgb, ${baseColor} 30%, white)`,
//         300: `color-mix(in srgb, ${baseColor} 50%, white)`,
//         400: `color-mix(in srgb, ${baseColor} 70%, white)`,
//         500: baseColor,
//         600: `color-mix(in srgb, ${baseColor} 80%, black)`,
//         700: `color-mix(in srgb, ${baseColor} 60%, black)`,
//         800: `color-mix(in srgb, ${baseColor} 40%, black)`,
//         900: `color-mix(in srgb, ${baseColor} 20%, black)`,
//       };
//     } catch (e) {
//       return {
//         50: '#eef2ff',
//         100: '#e0e7ff',
//         200: '#c7d2fe',
//         300: '#a5b4fc',
//         400: '#818cf8',
//         500: '#6366f1',
//         600: '#4f46e5',
//         700: '#4338ca',
//         800: '#3730a3',
//         900: '#312e81'
//       };
//     }
//   };

//   const primaryPalette = useMemo(
//     () => generateColorPalette(safeCustomization.primaryColor),
//     [safeCustomization.primaryColor]
//   );

//   const secondaryPalette = useMemo(
//     () => generateColorPalette(safeCustomization.secondaryColor),
//     [safeCustomization.secondaryColor]
//   );

//   const accentPalette = useMemo(
//     () => generateColorPalette(safeCustomization.accentColor),
//     [safeCustomization.accentColor]
//   );

//   // CSS variables with enhanced color system and fallbacks
//   const cssVariables = useMemo(() => ({
//     '--primary': primaryPalette[500],
//     '--primary-50': primaryPalette[50],
//     '--primary-100': primaryPalette[100],
//     '--primary-200': primaryPalette[200],
//     '--primary-300': primaryPalette[300],
//     '--primary-400': primaryPalette[400],
//     '--primary-500': primaryPalette[500],
//     '--primary-600': primaryPalette[600],
//     '--primary-700': primaryPalette[700],
//     '--primary-800': primaryPalette[800],
//     '--primary-900': primaryPalette[900],
//     '--secondary': secondaryPalette[500],
//     '--secondary-50': secondaryPalette[50],
//     '--secondary-100': secondaryPalette[100],
//     '--secondary-200': secondaryPalette[200],
//     '--secondary-300': secondaryPalette[300],
//     '--secondary-400': secondaryPalette[400],
//     '--secondary-500': secondaryPalette[500],
//     '--secondary-600': secondaryPalette[600],
//     '--secondary-700': secondaryPalette[700],
//     '--secondary-800': secondaryPalette[800],
//     '--secondary-900': secondaryPalette[900],
//     '--accent': accentPalette[500],
//     '--accent-100': accentPalette[100],
//     '--accent-200': accentPalette[200],
//     '--accent-300': accentPalette[300],
//     '--accent-400': accentPalette[400],
//     '--accent-500': accentPalette[500],
//     '--accent-600': accentPalette[600],
//     '--accent-700': accentPalette[700],
//     '--accent-800': accentPalette[800],
//     '--accent-900': accentPalette[900],
//     '--bg': isDarkMode ? safeCustomization.darkBackgroundColor : safeCustomization.backgroundColor,
//     '--text': isDarkMode ? safeCustomization.darkTextColor : safeCustomization.textColor,
//     '--dark-bg': safeCustomization.darkBackgroundColor,
//     '--dark-text': safeCustomization.darkTextColor,
//     '--rounded': safeCustomization.rounded === 'full' ? '9999px' : `${safeCustomization.rounded}px`,
//     '--shadow': safeCustomization.shadow === 'none' ? 'none' : 
//       `0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)`,
//     '--nav-shadow': `0 4px 30px rgba(0, 0, 0, ${elevation})`,
//     '--border-width': safeCustomization.borderWidth,
//     '--nav-opacity': safeCustomization.navType === 'transparent' ? '0.98' : '1',
//     '--nav-blur': safeCustomization.navType === 'blurred' ? '16px' : '0',
//     '--font-family': safeCustomization.fontFamily,
//     '--nav-height': safeCustomization.navHeight,
//     '--glass-bg': isDarkMode 
//       ? 'rgba(15, 23, 42, 0.85)' 
//       : 'rgba(249, 250, 251, 0.85)',
//     '--glass-border': isDarkMode 
//       ? 'rgba(255, 255, 255, 0.08)' 
//       : 'rgba(0, 0, 0, 0.08)',
//     '--category-hover': `0 10px 20px ${primaryPalette[300]}`
//   }), [
//     safeCustomization, 
//     isDarkMode, 
//     elevation, 
//     primaryPalette, 
//     secondaryPalette, 
//     accentPalette
//   ]);

//   const { data: session, status } = useSession();
//   const [categoriesData, setCategories] = useState([]);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
//   const pathname = usePathname();

//   // Enhanced hover effects with fallback
//   const getHoverClass = useMemo(() => {
//     const baseClasses = 'transition-all duration-300ease-custom-ease';
    
//     switch (safeCustomization.hoverEffect) {
//       case 'scale': 
//         return `${baseClasses} hover:scale-[1.03] transform-gpu hover:shadow-md`;
//       case 'shadow': 
//         return `${baseClasses} hover:shadow-lg hover:-translate-y-0.5`;
//       case 'rotate': 
//         return `${baseClasses} hover:rotate-1 hover:shadow-sm transform-gpu`;
//       case 'glow': 
//         return `${baseClasses} hover:shadow-[0_0_15px_var(--primary-400)]`;
//       case 'underline': 
//         return `${baseClasses} hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-primary`;
//       case 'border': 
//         return `${baseClasses} hover:ring-2 hover:ring-primary hover:ring-offset-2`;
//       default: 
//         return `${baseClasses} hover:translate-y-[-2px] hover:shadow-sm transform-gpu`;
//     }
//   }, [safeCustomization.hoverEffect]);

//   // Logo sizing with fallback
//   const logoSizeClass = useMemo(() => {
//     switch (safeCustomization.logoSize) {
//       case 'small': return 'w-12 h-12';
//       case 'medium': return 'w-16 h-16';
//       case 'large': return 'w-20 h-20';
//       default: return 'w-16 h-16';
//     }
//   }, [safeCustomization.logoSize]);

//   const logoTextSize = useMemo(() => {
//     switch (safeCustomization.logoSize) {
//       case 'small': return 'text-xl';
//       case 'medium': return 'text-2xl';
//       case 'large': return 'text-3xl';
//       default: return 'text-2xl';
//     }
//   }, [safeCustomization.logoSize]);

//   // Navbar style based on type with fallbacks
//   const navStyle = useMemo(() => {
//     const baseStyle = {
//       backgroundColor: `var(--bg)`,
//       backdropFilter: `blur(var(--nav-blur))`,
//       boxShadow: `var(--nav-shadow)`,
//       borderBottom: `var(--border-width) solid var(--primary-200)`
//     };
    
//     if (safeCustomization.navType === 'gradient') {
//       baseStyle.background = `linear-gradient(135deg, var(--primary-600), var(--bg) 80%)`;
//     }
    
//     if (safeCustomization.navType === 'glass') {
//       baseStyle.backgroundColor = `var(--glass-bg)`;
//       baseStyle.backdropFilter = 'blur(16px) saturate(180%)';
//       baseStyle.borderBottom = `1px solid var(--glass-border)`;
//       baseStyle.boxShadow = `0 4px 30px rgba(0, 0, 0, 0.1)`;
//     }
    
//     return baseStyle;
//   }, [safeCustomization.navType, isDarkMode]);

//   // Fetch categories with error handling
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch(`/api/categories?storeId=${storeId}`);
//         if (response.ok) {
//           const data = await response.json();
//           setCategories(Array.isArray(data) ? data : []);
//         } else {
//           setCategories([]);
//         }
//       } catch (error) {
//         console.error('Failed to fetch categories:', error);
//         setCategories([]);
//       }
//     };

//     fetchCategories();
//   }, [slugDomain, storeId]);

//   return (
//     <>
//       <style jsx global>{`
//         :root {
//           --primary: ${primaryPalette[500]};
//           --secondary: ${secondaryPalette[500]};
//           --accent: ${accentPalette[500]};
//           --font-family: ${safeCustomization.fontFamily};
//         }
//         body {
//           font-family: var(--font-family);
//           direction: rtl;
//           background-color: var(--bg);
//           color: var(--text);
//         }
//         .nav-link {
//           position: relative;
//           overflow: hidden;
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//         }
//         .nav-link::after {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           right: 0;
//           width: 0;
//           height: 2px;
//           background: linear-gradient(90deg, var(--primary), var(--secondary));
//           transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           border-radius: 2px;
//         }
//         .nav-link:hover::after {
//           width: 100%;
//           left: 0;
//           right: auto;
//         }
//         .menu-item {
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//         }
//         .menu-item:hover {
//           transform: translateX(-4px);
//         }
//         .category-card {
//           transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
//           transform-origin: center;
//         }
//         .category-card:hover {
//           transform: translateY(-5px) scale(1.03);
//           box-shadow: var(--category-hover);
//         }
//         .category-icon {
//           transition: all 0.3s ease;
//         }
//         .category-card:hover .category-icon {
//           transform: rotate(10deg) scale(1.1);
//         }
//         @media (max-width: 768px) {
//           .rtl-support {
//             padding-right: 1.5rem;
//             padding-left: 1.5rem;
//           }
//         }
//       `}</style>

//       <motion.header 
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-500ease-custom-ease`}
//         style={{ 
//           ...cssVariables, 
//           ...navStyle,
//           opacity,
//           backdropFilter: `blur(${blur}px) saturate(180%)`,
//           scale,
//           height: 'var(--nav-height)'
//         }}
//         dir="rtl"
//       >
//         <div className="container mx-auto px-4 xl:px-0 rtl-support h-full">
//           <div className="flex items-center justify-between gap-6 h-full">
            
//             {/* Logo Section */}
//             <div className="flex items-center flex-1 h-full">
//               <Link 
//                 href={`/${slugDomain}`}
//                 className={`flex items-center gap-3 ${getHoverClass}`}
//                 aria-label="الرئيسية"
//               >
//                 <motion.div 
//                   initial={{ scale: 1 }}
//                   whileHover={{ scale: 1.05, rotate: 5 }}
//                   whileTap={{ scale: 0.95 }}
//                   transition={{ 
//                     type: 'spring',
//                     stiffness: 400,
//                     damping: 15
//                   }}
//                   className={`relative ${logoSizeClass} rounded-2xl overflow-hidden border-2 border-primary/20 transition-all`}
//                   style={{
//                     boxShadow: `0 0 30px ${primaryPalette[300]}`,
//                   }}
//                 >
//                   <Image
//                     src={safeStoreData.profileImageUrl}
//                     alt={`شعار ${safeStoreData.businessName}`}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 768px) 50px, 80px"
//                     priority
//                     onError={(e) => {
//                       e.currentTarget.src = '/default-store.png';
//                     }}
//                   />
//                 </motion.div>
//                 <motion.h1 
//                   className={`${logoTextSize} font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent`}
//                   initial={{ opacity: 1 }}
//                   whileHover={{ 
//                     opacity: 0.9,
//                     textShadow: `0 0 20px ${primaryPalette[300]}`
//                   }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {safeStoreData.businessName}
//                 </motion.h1>
//               </Link>
//             </div>

//             {/* Search Bar - Desktop */}
//             <motion.div 
//               className="hidden lg:flex items-center justify-center flex-1 max-w-2xl"
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//             >
//               <div className="w-full relative">
//                 <SearchForm customization={customization} slugDomain={slugDomain} />
//               </div>
//             </motion.div>

//             {/* User Tools Section */}
//             <div className="flex items-center justify-end flex-1 gap-3 sm:gap-5 h-full">
//               {/* Categories Dropdown - Desktop */}
//               <motion.div 
//                 className="hidden lg:flex items-center"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.15 }}
//               >
//                 <div className="relative group">
//                   <button 
//                     className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors"
//                     onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
//                     aria-expanded={isCategoriesOpen}
//                   >
//                     <span className="font-medium">أقسام المتجر</span>
//                     <ChevronDown className={`w-4 h-4 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
//                   </button>

//                   {/* Animated Categories Dropdown */}
//                   <AnimatePresence>
//                     {isCategoriesOpen && (
//                       <motion.div
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -20 }}
//                         transition={{ type: 'spring', damping: 20, stiffness: 300 }}
//                         className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg z-50 overflow-hidden"
//                         style={{
//                           border: `1px solid ${primaryPalette[200]}`,
//                           boxShadow: `0 10px 30px ${primaryPalette[300]}`
//                         }}
//                       >
//                         <div className="max-h-[60vh] overflow-y-auto p-2">
//                           {categoriesData.map((category, index) => (
//                             <motion.div
//                               key={category.id || index}
//                               initial={{ opacity: 0, x: -20 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ delay: index * 0.05 }}
//                             >
//                               <Link
//                                 href={`/${slugDomain}/category/${category.slug || 'all'}`}
//                                 className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary/5 dark:hover:bg-gray-700 transition-colors rounded-lg"
//                                 onClick={() => setIsCategoriesOpen(false)}
//                               >
//                                 {category.icon && (
//                                   <div className="p-1.5 rounded-md bg-primary/10 text-primary">
//                                     <category.icon className="w-4 h-4" />
//                                   </div>
//                                 )}
//                                 <span>{category.title || 'قسم'}</span>
//                                 {category.featured && (
//                                   <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
//                                 )}
//                               </Link>
//                             </motion.div>
//                           ))}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </motion.div>

//               {/* Featured Categories - Desktop */}
//               <div className="hidden lg:flex items-center gap-2">
//                 {categoriesData.filter(c => c.featured).slice(0, 4).map(category => (
//                   <motion.div
//                     key={category.id}
//                     whileHover={{ y: -3 }}
//                     whileTap={{ scale: 0.98 }}
//                     className="relative"
//                   >
//                     <Link
//                       href={`/${slugDomain}/category/${category.slug}`}
//                       className="px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1 hover:bg-primary/10 hover:text-primary transition-colors"
//                     >
//                       {category.icon && <category.imageUrl className="w-4 h-4" />}
//                       {category.title}
//                       {category.hot && (
//                         <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
//                           HOT
//                         </span>
//                       )}
//                     </Link>
//                   </motion.div>
//                 ))}
//               </div>

//               <ThemeSwitcherBtn customization={safeCustomization} />
              
//               {/* Navigation Items */}
//               <motion.div 
//                 className="hidden md:flex items-center gap-5"
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 <Link 
//                   href={`/${slugDomain}/wishlist`}
//                   className="p-2 rounded-full hover:bg-primary/10 relative transition-colors group"
//                   aria-label="المفضلة"
//                 >
//                   <WishlistButton slugDomain={slugDomain}/> 
//                 </Link>

//                 <CartCount slugDomain={slugDomain} customization={safeCustomization}>
//                   <motion.button 
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="p-2 rounded-full hover:bg-primary/10 relative transition-colors group"
//                     aria-label="سلة التسوق"
//                   >
//                     <ShoppingCart className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
//                   </motion.button>
//                 </CartCount>
                
//                 <HelpModalstore slugDomain={slugDomain} customization={safeCustomization}/>
//                   <motion.button 
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="p-2 rounded-full hover:bg-primary/10 transition-colors group"
//                     aria-label="مساعدة"
//                   >
//                     <HelpCircle className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
//                   </motion.button>
//               </motion.div>

//               {/* User Auth Section */}
//               {status === "unauthenticated" ? (
//                 <motion.div
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.3 }}
//                 >
//                   <Link
//                     href={`${slugDomain}/loginCustomer?redirect=${encodeURIComponent(pathname)}`}
//                     className={`hidden sm:flex items-center px-5 py-2.5 rounded-[var(--rounded)] bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all ${getHoverClass}`}
//                     style={{
//                       boxShadow: `0 4px 20px ${primaryPalette[300]}`,
//                       textShadow: '0 1px 2px rgba(0,0,0,0.2)'
//                     }}
//                   >
//                     <User className="w-5 h-5 ml-2" />
//                     <span className="text-sm font-semibold">تسجيل الدخول</span>
//                   </Link>
//                 </motion.div>
//               ) : (
//                 <motion.div 
//                   className="relative hidden sm:block"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.3 }}
//                 >
//                   <motion.button 
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                     className="flex items-center gap-2 p-2 rounded-full hover:bg-primary/10 transition-colors group"
//                     aria-label="حساب المستخدم"
//                     aria-expanded={isDropdownOpen}
//                   >
//                     <UserAvatar user={session?.user} />
//                   </motion.button>
//                 </motion.div>
//               )}

//               {/* Mobile Menu Button */}
//               <motion.button 
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="lg:hidden p-2 rounded-full hover:bg-primary/10 transition-all relative z-50"
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 aria-label="القائمة"
//                 aria-expanded={mobileMenuOpen}
//                 style={{
//                   boxShadow: mobileMenuOpen ? `0 0 20px ${primaryPalette[400]}` : 'none',
//                   backgroundColor: mobileMenuOpen ? primaryPalette[100] : 'transparent'
//                 }}
//               >
//                 {mobileMenuOpen ? (
//                   <X className="w-7 h-7 text-primary" />
//                 ) : (
//                   <Menu className="w-7 h-7 text-primary" />
//                 )}
//               </motion.button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <>
//               {/* Overlay */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="fixed inset-0 bg-black/50 z-40 lg:hidden"
//                 onClick={() => setMobileMenuOpen(false)}
//               />
              
//               {/* Menu Content */}
//               <motion.div
//                 initial={{ y: '-100%', opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 exit={{ y: '-100%', opacity: 0 }}
//                 transition={{ 
//                   type: 'spring',
//                   damping: 25,
//                   stiffness: 300,
//                   bounce: 0.2
//                 }}
//                 className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-background dark:bg-dark-background shadow-xl"
//                 dir="rtl"
//                 style={{
//                   borderBottom: `2px solid ${primaryPalette[300]}`,
//                   backdropFilter: 'blur(20px)',
//                   backgroundColor: isDarkMode 
//                     ? 'rgba(15, 23, 42, 0.95)' 
//                     : 'rgba(249, 250, 251, 0.97)'
//                 }}
//               >
//                 {/* Menu Header */}
//                 <div className="container mx-auto px-5 py-4 border-b border-gray-700 dark:border-gray-700 flex justify-between items-center">
//                   <Link 
//                     href={`/${slugDomain}`}
//                     className="flex items-center gap-3"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     <div className={`relative w-12 h-12 rounded-xl overflow-hidden border-2 border-primary/20`}>
//                       <Image
//                         src={safeStoreData.profileImageUrl}
//                         alt={`شعار ${safeStoreData.businessName}`}
//                         fill
//                         className="object-cover"
//                         sizes="(max-width: 768px) 50px, 80px"
//                         onError={(e) => {
//                           e.currentTarget.src = '/default-store.png';
//                         }}
//                       />
//                     </div>
//                     <h1 className={`text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent`}>
//                       {safeStoreData.businessName}
//                     </h1>
//                   </Link>
                  
//                   <button 
//                     onClick={() => setMobileMenuOpen(false)}
//                     className="p-2 rounded-full hover:bg-primary/10"
//                   >
//                     <X className="w-6 h-6 text-primary" />
//                   </button>
//                 </div>

//                 {/* Scrollable Menu Content */}
//                 <div className="container mx-auto px-5 py-4 h-[calc(100vh-80px)] overflow-y-auto">
//                   {/* Mobile Search */}
//                   <motion.div
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.1 }}
//                     className="relative mb-6"
//                   >
//                     <SearchForm customization={safeCustomization} mobile />
//                   </motion.div>
                  
//                   {/* Categories Section - Mobile */}
//                   {mobileCategoriesOpen ? (
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ duration: 0.3 }}
//                       className="mb-6"
//                     >
//                       <div className="flex items-center justify-between mb-4">
//                         <button 
//                           onClick={() => setMobileCategoriesOpen(false)}
//                           className="p-2 rounded-full hover:bg-primary/10"
//                         >
//                           <ChevronLeft className="w-5 h-5 text-primary" />
//                         </button>
//                         <h2 className="text-lg font-bold text-primary">جميع الأقسام</h2>
//                         <div className="w-10"></div> {/* Spacer for alignment */}
//                       </div>

//                       <div className="grid grid-cols-2 gap-3">
//                         {categoriesData.map((category, index) => (
//                           <motion.div
//                             key={category.id || index}
//                             initial={{ opacity: 0, scale: 0.9 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             transition={{ delay: index * 0.05 }}
//                           >
//                             <Link 
//                               href={`/${slugDomain}/category/${category.slug || 'all'}`}
//                               className="flex flex-col items-center p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all category-card"
//                               onClick={() => setMobileMenuOpen(false)}
//                             >
//                               {category.image ? (
//                                 <div className="relative w-12 h-12 mb-2 rounded-lg overflow-hidden">
//                                   <Image
//                                     src={category.imageUrl}
//                                     alt={category.title || 'قسم'}
//                                     fill
//                                     className="object-cover"
//                                   />
//                                 </div>
//                               ) : (
//                                 <div className="w-12 h-12 mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
//                                   <Package className="w-6 h-6 text-primary category-icon" />
//                                 </div>
//                               )}
//                               <span className="font-medium text-center">{category.title || 'قسم'}</span>
//                               {category.featured && (
//                                 <Star className="w-4 h-4 mt-1 text-yellow-500 fill-yellow-500" />
//                               )}
//                             </Link>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </motion.div>
//                   ) : (
//                     <motion.button
//                       onClick={() => setMobileCategoriesOpen(true)}
//                       className="w-full py-3 px-4 mb-6 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all flex items-center justify-between"
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                     >
//                       <span className="font-bold text-primary">تصفح الأقسام</span>
//                       <ChevronLeft className="w-5 h-5 text-primary" />
//                     </motion.button>
//                   )}

//                   {/* Main Navigation */}
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.15 }}
//                     className="mb-6"
//                   >
//                     <nav className="space-y-2">
//                       <Link 
//                         href={`/${slugDomain}`}
//                         className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/5 transition-colors group"
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
//                           <Home className="w-5 h-5" />
//                         </div>
//                         <span className="font-medium">الرئيسية</span>
//                       </Link>
//                          <WishlistButton slugDomain={slugDomain}/> 

                  
//                   <Link 
//                     href={`/${slugDomain}/cart`}
//                     className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/5 transition-colors group"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
//                       <ShoppingCart className="w-5 h-5" />
//                     </div>
//                     <span className="font-medium">سلة التسوق</span>
//                   </Link>
                  
//                   <Link 
//                     href={`/${slugDomain}/orders`}
//                     className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/5 transition-colors group"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
//                       <Package className="w-5 h-5" />
//                     </div>
//                     <span className="font-medium">طلباتي</span>
//                   </Link>
//                 </nav>
//               </motion.div>
              
//               {/* User Section */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//                 className="pt-4 border-t border-gray-200 dark:border-gray-700"
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                     <ThemeSwitcherBtn mobile />
//                     <HelpModalstore customization={safeCustomization} mobile>
//                       <button className="p-2 rounded-full hover:bg-primary/10">
//                         <HelpCircle className="w-6 h-6 text-primary" />
//                       </button>
//                     </HelpModalstore>
//                   </div>
                  
//                   {status === "unauthenticated" ? (
//                     <Link
//                       href={`${slugDomain}/loginCustomer?redirect=${encodeURIComponent(pathname)}`}
//                       className={`flex items-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all ${getHoverClass}`}
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       <User className="w-5 h-5 ml-2" />
//                       <span className="text-sm font-semibold">تسجيل الدخول</span>
//                     </Link>
//                   ) : (
//                     <div className="flex items-center gap-3">
//                       <Link
//                         href="/profile"
//                         className="flex items-center gap-3 text-sm font-medium group"
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         <span className="group-hover:text-primary-600 transition-colors">حسابي</span>
//                         <UserAvatar user={session?.user} size="sm" />
//                       </Link>
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   </motion.header>
  
//   {/* Navbar Spacer */}
//   <div style={{ height: `var(--nav-height)` }}></div>
// </>
// );
// }
'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { User, Menu, X, ShoppingCart, HelpCircle, ChevronDown, ChevronLeft, Search, Heart, Package, Home, Star } from 'lucide-react';
import SearchForm from './SearchForm';
import HelpModalstore from './HelpModal-store';
import CartCount from '../templaet3/cart-templaet/CartCount';
import ThemeSwitcherBtn from '../../ThemeSwitcherBtn';
import UserAvatar from './UserAvatar';
import { useTheme } from 'next-themes';
import WishlistButton from './WishlistButton';

export default function Navbar({ slugDomain, storeData = {}, customization = {}, storeId }) {
  // Default values for empty props
  const safeStoreData = useMemo(() => ({
    profileImageUrl: '/default-store.png',
    businessName: 'متجرك',
    ...storeData
  }), [storeData]);

  const safeCustomization = useMemo(() => ({
    primaryColor: '#6366f1',
    secondaryColor: '#8b5cf6',
    accentColor: '#ec4899',
    backgroundColor: '#f9fafb',
    textColor: '#1f2937',
    darkTextColor: '#f3f4f6',
    darkBackgroundColor: '#0f172a',
    fontFamily: 'Inter, sans-serif',
    rounded: '14px',
    shadow: 'xl',
    hoverEffect: 'glow',
    navType: 'glass',
    borderWidth: '1px',
    logoSize: 'medium',
    navHeight: '84px',
    ...customization
  }), [customization]);

  const { theme, resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';
  const { scrollYProgress } = useScroll();
  
  // Enhanced scroll effects
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.97]);
  const blur = useTransform(scrollYProgress, [0, 0.1], [0, 15]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);
  const borderOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const elevation = useTransform(scrollYProgress, [0, 0.1], [0, 0.2]);

  // Generate sophisticated color palette with fallbacks
  const generateColorPalette = (baseColor = '#6366f1') => {
    try {
      return {
        50: `color-mix(in srgb, ${baseColor} 10%, white)`,
        100: `color-mix(in srgb, ${baseColor} 20%, white)`,
        200: `color-mix(in srgb, ${baseColor} 30%, white)`,
        300: `color-mix(in srgb, ${baseColor} 50%, white)`,
        400: `color-mix(in srgb, ${baseColor} 70%, white)`,
        500: baseColor,
        600: `color-mix(in srgb, ${baseColor} 80%, black)`,
        700: `color-mix(in srgb, ${baseColor} 60%, black)`,
        800: `color-mix(in srgb, ${baseColor} 40%, black)`,
        900: `color-mix(in srgb, ${baseColor} 20%, black)`,
      };
    } catch (e) {
      return {
        50: '#eef2ff',
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca',
        800: '#3730a3',
        900: '#312e81'
      };
    }
  };

  const primaryPalette = useMemo(
    () => generateColorPalette(safeCustomization.primaryColor),
    [safeCustomization.primaryColor]
  );

  const secondaryPalette = useMemo(
    () => generateColorPalette(safeCustomization.secondaryColor),
    [safeCustomization.secondaryColor]
  );

  const accentPalette = useMemo(
    () => generateColorPalette(safeCustomization.accentColor),
    [safeCustomization.accentColor]
  );

  // CSS variables with enhanced color system and fallbacks
  const cssVariables = useMemo(() => ({
    '--primary': primaryPalette[500],
    '--primary-50': primaryPalette[50],
    '--primary-100': primaryPalette[100],
    '--primary-200': primaryPalette[200],
    '--primary-300': primaryPalette[300],
    '--primary-400': primaryPalette[400],
    '--primary-500': primaryPalette[500],
    '--primary-600': primaryPalette[600],
    '--primary-700': primaryPalette[700],
    '--primary-800': primaryPalette[800],
    '--primary-900': primaryPalette[900],
    '--secondary': secondaryPalette[500],
    '--secondary-50': secondaryPalette[50],
    '--secondary-100': secondaryPalette[100],
    '--secondary-200': secondaryPalette[200],
    '--secondary-300': secondaryPalette[300],
    '--secondary-400': secondaryPalette[400],
    '--secondary-500': secondaryPalette[500],
    '--secondary-600': secondaryPalette[600],
    '--secondary-700': secondaryPalette[700],
    '--secondary-800': secondaryPalette[800],
    '--secondary-900': secondaryPalette[900],
    '--accent': accentPalette[500],
    '--accent-100': accentPalette[100],
    '--accent-200': accentPalette[200],
    '--accent-300': accentPalette[300],
    '--accent-400': accentPalette[400],
    '--accent-500': accentPalette[500],
    '--accent-600': accentPalette[600],
    '--accent-700': accentPalette[700],
    '--accent-800': accentPalette[800],
    '--accent-900': accentPalette[900],
    '--bg': isDarkMode ? safeCustomization.darkBackgroundColor : safeCustomization.backgroundColor,
    '--text': isDarkMode ? safeCustomization.darkTextColor : safeCustomization.textColor,
    '--dark-bg': safeCustomization.darkBackgroundColor,
    '--dark-text': safeCustomization.darkTextColor,
    '--rounded': safeCustomization.rounded === 'full' ? '9999px' : `${safeCustomization.rounded}px`,
    '--shadow': safeCustomization.shadow === 'none' ? 'none' : 
      `0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)`,
    '--nav-shadow': `0 4px 30px rgba(0, 0, 0, ${elevation})`,
    '--border-width': safeCustomization.borderWidth,
    '--nav-opacity': safeCustomization.navType === 'transparent' ? '0.98' : '1',
    '--nav-blur': safeCustomization.navType === 'blurred' ? '16px' : '0',
    '--font-family': safeCustomization.fontFamily,
    '--nav-height': safeCustomization.navHeight,
    '--glass-bg': isDarkMode 
      ? 'rgba(15, 23, 42, 0.85)' 
      : 'rgba(249, 250, 251, 0.85)',
    '--glass-border': isDarkMode 
      ? 'rgba(255, 255, 255, 0.08)' 
      : 'rgba(0, 0, 0, 0.08)',
    '--category-hover': `0 10px 20px ${primaryPalette[300]}`
  }), [
    safeCustomization, 
    isDarkMode, 
    elevation, 
    primaryPalette, 
    secondaryPalette, 
    accentPalette
  ]);

  const { data: session, status } = useSession();
  const [categoriesData, setCategories] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const pathname = usePathname();

  // Enhanced hover effects with fallback
  const getHoverClass = useMemo(() => {
    const baseClasses = 'transition-all duration-300 ease-custom-ease';
    
    switch (safeCustomization.hoverEffect) {
      case 'scale': 
        return `${baseClasses} hover:scale-[1.03] transform-gpu hover:shadow-md`;
      case 'shadow': 
        return `${baseClasses} hover:shadow-lg hover:-translate-y-0.5`;
      case 'rotate': 
        return `${baseClasses} hover:rotate-1 hover:shadow-sm transform-gpu`;
      case 'glow': 
        return `${baseClasses} hover:shadow-[0_0_15px_var(--primary-400)]`;
      case 'underline': 
        return `${baseClasses} hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-primary`;
      case 'border': 
        return `${baseClasses} hover:ring-2 hover:ring-primary hover:ring-offset-2`;
      default: 
        return `${baseClasses} hover:translate-y-[-2px] hover:shadow-sm transform-gpu`;
    }
  }, [safeCustomization.hoverEffect]);

  // Logo sizing with fallback
  const logoSizeClass = useMemo(() => {
    switch (safeCustomization.logoSize) {
      case 'small': return 'w-12 h-12';
      case 'medium': return 'w-16 h-16';
      case 'large': return 'w-20 h-20';
      default: return 'w-16 h-16';
    }
  }, [safeCustomization.logoSize]);

  const logoTextSize = useMemo(() => {
    switch (safeCustomization.logoSize) {
      case 'small': return 'text-xl';
      case 'medium': return 'text-2xl';
      case 'large': return 'text-3xl';
      default: return 'text-2xl';
    }
  }, [safeCustomization.logoSize]);

  // Navbar style based on type with fallbacks
  const navStyle = useMemo(() => {
    const baseStyle = {
      backgroundColor: `var(--bg)`,
      backdropFilter: `blur(var(--nav-blur))`,
      boxShadow: `var(--nav-shadow)`,
      borderBottom: `var(--border-width) solid var(--primary-200)`
    };
    
    if (safeCustomization.navType === 'gradient') {
      baseStyle.background = `linear-gradient(135deg, var(--primary-600), var(--bg) 80%)`;
    }
    
    if (safeCustomization.navType === 'glass') {
      baseStyle.backgroundColor = `var(--glass-bg)`;
      baseStyle.backdropFilter = 'blur(16px) saturate(180%)';
      baseStyle.borderBottom = `1px solid var(--glass-border)`;
      baseStyle.boxShadow = `0 4px 30px rgba(0, 0, 0, 0.1)`;
    }
    
    return baseStyle;
  }, [safeCustomization.navType, isDarkMode]);

  // Fetch categories with error handling
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`/api/categories?storeId=${storeId}`);
        if (response.ok) {
          const data = await response.json();
          setCategories(Array.isArray(data) ? data : []);
        } else {
          setCategories([]);
        }
      } catch (error) {
        console.error('Failed to fetch categories:', error);
        setCategories([]);
      }
    };

    fetchCategories();
  }, [slugDomain, storeId]);

  return (
    <>
      <style jsx global>{`
        :root {
          --primary: ${primaryPalette[500]};
          --secondary: ${secondaryPalette[500]};
          --accent: ${accentPalette[500]};
          --font-family: ${safeCustomization.fontFamily};
        }
        body {
          font-family: var(--font-family);
          direction: rtl;
          background-color: var(--bg);
          color: var(--text);
        }
        .nav-link {
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 2px;
        }
        .nav-link:hover::after {
          width: 100%;
          left: 0;
          right: auto;
        }
        .menu-item {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .menu-item:hover {
          transform: translateX(-4px);
        }
        .category-card {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: center;
        }
        .category-card:hover {
          transform: translateY(-5px) scale(1.03);
          box-shadow: var(--category-hover);
        }
        .category-icon {
          transition: all 0.3s ease;
        }
        .category-card:hover .category-icon {
          transform: rotate(10deg) scale(1.1);
        }
        @media (max-width: 768px) {
          .rtl-support {
            padding-right: 1.5rem;
            padding-left: 1.5rem;
          }
        }
      `}</style>

      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-custom-ease`}
        style={{ 
          ...cssVariables, 
          ...navStyle,
          opacity,
          backdropFilter: `blur(${blur}px) saturate(180%)`,
          scale,
          height: 'var(--nav-height)'
        }}
        dir="rtl"
      >
        <div className="container mx-auto px-4 xl:px-0 rtl-support h-full">
          <div className="flex items-center justify-between gap-6 h-full">
            
            {/* Logo Section */}
            <div className="flex items-center flex-1 h-full">
              <Link 
                href={`/${slugDomain}`}
                className={`flex items-center gap-3 ${getHoverClass}`}
                aria-label="الرئيسية"
              >
                <motion.div 
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 400,
                    damping: 15
                  }}
                  className={`relative ${logoSizeClass} rounded-2xl overflow-hidden border-2 border-primary/20 transition-all`}
                  style={{
                    boxShadow: `0 0 30px ${primaryPalette[300]}`,
                  }}
                >
                  <Image
                    src={safeStoreData.profileImageUrl}
                    alt={`شعار ${safeStoreData.businessName}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50px, 80px"
                    priority
                    onError={(e) => {
                      e.currentTarget.src = '/default-store.png';
                    }}
                  />
                </motion.div>
                <motion.h1 
                  className={`${logoTextSize} font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent`}
                  initial={{ opacity: 1 }}
                  whileHover={{ 
                    opacity: 0.9,
                    textShadow: `0 0 20px ${primaryPalette[300]}`
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {safeStoreData.businessName}
                </motion.h1>
              </Link>
            </div>

            {/* Search Bar - Desktop */}
            <motion.div 
              className="hidden lg:flex items-center justify-center flex-1 max-w-2xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-full relative">
                <SearchForm customization={customization} slugDomain={slugDomain} />
              </div>
            </motion.div>

            {/* User Tools Section */}
            <div className="flex items-center justify-end flex-1 gap-3 sm:gap-5 h-full">
              {/* Categories Dropdown - Desktop */}
              <motion.div 
                className="hidden lg:flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                <div className="relative group">
                  <button 
                    className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                    onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                    aria-expanded={isCategoriesOpen}
                  >
                    <span className="font-medium">أقسام المتجر</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Animated Categories Dropdown */}
                  <AnimatePresence>
                    {isCategoriesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                        className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg z-50 overflow-hidden"
                        style={{
                          border: `1px solid ${primaryPalette[200]}`,
                          boxShadow: `0 10px 30px ${primaryPalette[300]}`
                        }}
                      >
                        <div className="max-h-[60vh] overflow-y-auto p-2">
                          {categoriesData.map((category, index) => (
                            <motion.div
                              key={category.id || index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link
                                href={`/${slugDomain}/category/${category.slug || 'all'}`}
                                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary/5 dark:hover:bg-gray-700 transition-colors rounded-lg"
                                onClick={() => setIsCategoriesOpen(false)}
                              >
                                {category.icon && (
                                  <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                                    <category.icon className="w-4 h-4" />
                                  </div>
                                )}
                                <span>{category.title || 'قسم'}</span>
                                {category.featured && (
                                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                )}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Featured Categories - Desktop */}
              <div className="hidden lg:flex items-center gap-2">
                {categoriesData.filter(c => c.featured).slice(0, 4).map(category => (
                  <motion.div
                    key={category.id}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative"
                  >
                    <Link
                      href={`/${slugDomain}/category/${category.slug}`}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {category.icon && <category.imageUrl className="w-4 h-4" />}
                      {category.title}
                      {category.hot && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                          HOT
                        </span>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <ThemeSwitcherBtn customization={safeCustomization} />
              
              {/* Navigation Items */}
              <motion.div 
                className="hidden md:flex items-center gap-5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link 
                  href={`/${slugDomain}/wishlist`}
                  className="p-2 rounded-full hover:bg-primary/10 relative transition-colors group"
                  aria-label="المفضلة"
                >
                  <WishlistButton slugDomain={slugDomain}/> 
                </Link>

                <CartCount slugDomain={slugDomain} customization={safeCustomization}>
                  <motion.button 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full hover:bg-primary/10 relative transition-colors group"
                    aria-label="سلة التسوق"
                  >
                    <ShoppingCart className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </motion.button>
                </CartCount>
                
                <HelpModalstore  slugDomain={ slugDomain} 
                customization={safeCustomization}>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full hover:bg-primary/10 transition-colors group"
                    aria-label="مساعدة"
                  >
                    <HelpCircle className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </motion.button>
                </HelpModalstore>
              </motion.div>

              {/* User Auth Section */}
              {status === "unauthenticated" ? (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link
                    href={`${slugDomain}/loginCustomer?redirect=${encodeURIComponent(pathname)}`}
                    className={`hidden sm:flex items-center px-5 py-2.5 rounded-[var(--rounded)] bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all ${getHoverClass}`}
                    style={{
                      boxShadow: `0 4px 20px ${primaryPalette[300]}`,
                      textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    <User className="w-5 h-5 ml-2" />
                    <span className="text-sm font-semibold">تسجيل الدخول</span>
                  </Link>
                </motion.div>
              ) : (
                <motion.div 
                  className="relative hidden sm:block"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 p-2 rounded-full hover:bg-primary/10 transition-colors group"
                    aria-label="حساب المستخدم"
                    aria-expanded={isDropdownOpen}
                  >
                    <UserAvatar user={session?.user} />
                  </motion.button>
                </motion.div>
              )}

              {/* Mobile Menu Button */}
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="lg:hidden p-2 rounded-full hover:bg-primary/10 transition-all relative z-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="القائمة"
                aria-expanded={mobileMenuOpen}
                style={{
                  boxShadow: mobileMenuOpen ? `0 0 20px ${primaryPalette[400]}` : 'none',
                  backgroundColor: mobileMenuOpen ? primaryPalette[100] : 'transparent'
                }}
              >
                {mobileMenuOpen ? (
                  <X className="w-7 h-7 text-primary" />
                ) : (
                  <Menu className="w-7 h-7 text-primary" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />
              
              {/* Menu Content */}
              <motion.div
                initial={{ y: '-100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ 
                  type: 'spring',
                  damping: 25,
                  stiffness: 300,
                  bounce: 0.2
                }}
                className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-background dark:bg-dark-background shadow-xl"
                dir="rtl"
                style={{
                  borderBottom: `2px solid ${primaryPalette[300]}`,
                  backdropFilter: 'blur(20px)',
                  backgroundColor: isDarkMode 
                    ? 'rgba(15, 23, 42, 0.95)' 
                    : 'rgba(249, 250, 251, 0.97)'
                }}
              >
                {/* Menu Header */}
                <div className="container mx-auto px-5 py-4 border-b border-gray-700 dark:border-gray-700 flex justify-between items-center">
                  <Link 
                    href={`/${slugDomain}`}
                    className="flex items-center gap-3"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className={`relative w-12 h-12 rounded-xl overflow-hidden border-2 border-primary/20`}>
                      <Image
                        src={safeStoreData.profileImageUrl}
                        alt={`شعار ${safeStoreData.businessName}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50px, 80px"
                        onError={(e) => {
                          e.currentTarget.src = '/default-store.png';
                        }}
                      />
                    </div>
                    <h1 className={`text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent`}>
                      {safeStoreData.businessName}
                    </h1>
                  </Link>
                  
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-primary/10"
                  >
                    <X className="w-6 h-6 text-primary" />
                  </button>
                </div>

                {/* Scrollable Menu Content */}
                <div className="container mx-auto px-5 py-4 h-[calc(100vh-80px)] overflow-y-auto">
                  {/* Mobile Search */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="relative mb-6"
                  >
                    <SearchForm customization={safeCustomization} mobile />
                  </motion.div>
                  
                  {/* Categories Section - Mobile */}
                  {mobileCategoriesOpen ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mb-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <button 
                          onClick={() => setMobileCategoriesOpen(false)}
                          className="p-2 rounded-full hover:bg-primary/10"
                        >
                          <ChevronLeft className="w-5 h-5 text-primary" />
                        </button>
                        <h2 className="text-lg font-bold text-primary">جميع الأقسام</h2>
                        <div className="w-10"></div> {/* Spacer for alignment */}
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {categoriesData.map((category, index) => (
                          <motion.div
                            key={category.id || index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link 
                              href={`/${slugDomain}/category/${category.slug || 'all'}`}
                              className="flex flex-col items-center p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all category-card"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {category.image ? (
                                <div className="relative w-12 h-12 mb-2 rounded-lg overflow-hidden">
                                  <Image
                                    src={category.imageUrl}
                                    alt={category.title || 'قسم'}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              ) : (
                                <div className="w-12 h-12 mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                                  <Package className="w-6 h-6 text-primary category-icon" />
                                </div>
                              )}
                              <span className="font-medium text-center">{category.title || 'قسم'}</span>
                              {category.featured && (
                                <Star className="w-4 h-4 mt-1 text-yellow-500 fill-yellow-500" />
                              )}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.button
                      onClick={() => setMobileCategoriesOpen(true)}
                      className="w-full py-3 px-4 mb-6 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all flex items-center justify-between"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="font-bold text-primary">تصفح الأقسام</span>
                      <ChevronLeft className="w-5 h-5 text-primary" />
                    </motion.button>
                  )}

                  {/* Main Navigation */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="mb-6"
                  >
                    <nav className="space-y-2">
                      <Link 
                        href={`/${slugDomain}`}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/5 transition-colors group"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                          <Home className="w-5 h-5" />
                        </div>
                        <span className="font-medium">الرئيسية</span>
                      </Link>
                         <WishlistButton slugDomain={slugDomain}/> 

                  
                  <Link 
                    href={`/${slugDomain}/cart`}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/5 transition-colors group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <ShoppingCart className="w-5 h-5" />
                    </div>
                    <span className="font-medium">سلة التسوق</span>
                  </Link>
                  
                  <Link 
                    href={`/${slugDomain}/orders`}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/5 transition-colors group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Package className="w-5 h-5" />
                    </div>
                    <span className="font-medium">طلباتي</span>
                  </Link>
                </nav>
              </motion.div>
              
              {/* User Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-4 border-t border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <ThemeSwitcherBtn mobile />
                    <HelpModalstore   customization={safeCustomization} mobile>
                      <button className="p-2 rounded-full hover:bg-primary/10">
                        <HelpCircle className="w-6 h-6 text-primary" />
                      </button>
                    </HelpModalstore>
                  </div>
                  
                  {status === "unauthenticated" ? (
                    <Link
                      href={`${slugDomain}/loginCustomer?redirect=${encodeURIComponent(pathname)}`}
                      className={`flex items-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all ${getHoverClass}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <User className="w-5 h-5 ml-2" />
                      <span className="text-sm font-semibold">تسجيل الدخول</span>
                    </Link>
                  ) : (
                    <div className="flex items-center gap-3">
                      <Link
                        href="/profile"
                        className="flex items-center gap-3 text-sm font-medium group"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="group-hover:text-primary-600 transition-colors">حسابي</span>
                        <UserAvatar user={session?.user} size="sm" />
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  </motion.header>
  
  {/* Navbar Spacer */}
  <div style={{ height: `var(--nav-height)` }}></div>
</>
);
}