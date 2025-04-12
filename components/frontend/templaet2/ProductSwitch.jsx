// // "use client";
// // import { ShoppingCart, Star, Heart } from "lucide-react";
// // import React, { useState } from "react";
// // import { motion } from "framer-motion";
// // import { addToCart } from "../../../redux/slices/cartSlice";
// // import { useDispatch } from "react-redux";
// // import toast from "react-hot-toast";
// // import { useTheme } from "next-themes";

// // export default function ProductSwitchs({ product, colors, customizations = {}, slugDomain }) {
// //   const dispatch = useDispatch();
// //   const [isAnimating, setIsAnimating] = useState(false);
// //   const [isWishlist, setIsWishlist] = useState(false);
// //   const { theme } = useTheme();

// //   // نظام الألوان مع دمج colors و customizations
// //   const themeColors = {
// //     primary: colors?.primary || customizations?.primaryColor || '#3b82f6',
// //     secondary: colors?.secondary || customizations?.secondaryColor || '#10b981',
// //     accent: colors?.accent || customizations?.accentColor || '#f59e0b',
// //     text: theme === 'dark' 
// //       ? colors?.darkText || customizations?.darkTextColor || '#f8fafc'
// //       : colors?.text || customizations?.textColor || '#1e293b',
// //     background: theme === 'dark'
// //       ? colors?.darkBackground || customizations?.darkBackgroundColor || '#1e293b'
// //       : colors?.background || customizations?.backgroundColor || '#ffffff',
// //     cardBg: theme === 'dark'
// //       ? colors?.darkCardBg || customizations?.darkCardBackground || '#334155'
// //       : colors?.cardBg || customizations?.cardBackground || '#ffffff',
// //     border: theme === 'dark'
// //       ? colors?.darkBorder || customizations?.darkBorderColor || '#475569'
// //       : colors?.border || customizations?.borderColor || '#e2e8f0',
// //     error: colors?.error || customizations?.errorColor || '#ef4444',
// //     success: colors?.success || customizations?.successColor || '#10b981',
// //     warning: colors?.warning || customizations?.warningColor || '#f59e0b',
// //   };

// //   function hexToRgba(hex, opacity = 1) {
// //     const r = parseInt(hex.slice(1, 3), 16);
// //     const g = parseInt(hex.slice(3, 5), 16);
// //     const b = parseInt(hex.slice(5, 7), 16);
// //     return `rgba(${r}, ${g}, ${b}, ${opacity})`;
// //   }

// //   function handleAddToCart() {
// //     if (product.productStock === 0) {
// //       toast.error("المنتج غير متوفر في المخزون!", {
// //         style: {
// //           background: themeColors.error,
// //           color: "#fff",
// //           borderRadius: "12px",
// //           boxShadow: `0 4px 12px ${hexToRgba(themeColors.error, 0.15)}`,
// //           padding: "16px 24px",
// //           fontSize: "14px"
// //         },
// //         iconTheme: {
// //           primary: "#fff",
// //           secondary: themeColors.error
// //         }
// //       });
// //       return;
// //     }

// //     setIsAnimating(true);
// //     setTimeout(() => {
// //       dispatch(addToCart(product));
// //       toast.success(`تمت الإضافة إلى السلة!${product.title}`, {
// //         style: {
// //           background: themeColors.success,
// //           color: "#fff",
// //           borderRadius: "12px",
// //           boxShadow: `0 4px 12px ${hexToRgba(themeColors.success, 0.15)}`,
// //           padding: "16px 24px",
// //           fontSize: "14px"
// //         },
// //         iconTheme: {
// //           primary: "#fff",
// //           secondary: themeColors.success
// //         }
// //       });
// //       setIsAnimating(false);
// //     }, 1000);
// //   }

// //   const stockStatus = product.productStock >= 1 ? (
// //     <motion.div 
// //       initial={{ scale: 0.8 }}
// //       animate={{ scale: 1 }}
// //       className="absolute top-3 right-3 z-10"
// //     >
// //       <span 
// //         className="text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center shadow-md"
// //         style={{
// //           backgroundColor: themeColors.success,
// //           boxShadow: `0 2px 8px ${hexToRgba(themeColors.success, 0.3)}`
// //         }}
// //       >
// //         <span className="w-2 h-2 bg-white rounded-full ml-2 animate-pulse"></span>
// //         متوفر
// //       </span>
// //     </motion.div>
// //   ) : (
// //     <motion.div
// //       initial={{ scale: 0.8 }}
// //       animate={{ scale: 1 }}
// //       className="absolute top-3 right-3 z-10"
// //     >
// //       <span 
// //         className="text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center shadow-md"
// //         style={{
// //           backgroundColor: themeColors.error,
// //           boxShadow: `0 2px 8px ${hexToRgba(themeColors.error, 0.3)}`
// //         }}
// //       >
// //         <span className="w-2 h-2 bg-white rounded-full ml-2"></span>
// //         غير متوفر
// //       </span>
// //     </motion.div>
// //   );

// //   const discountPercentage = Math.round(
// //     ((product.productPrice - product.salePrice) / product.productPrice) * 100
// //   );

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       whileHover={{ y: -5 }}
// //       className={`relative rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${
// //         isAnimating ? "animate-move-to-cart" : ""
// //       }`}
// //       style={{
// //         backgroundColor: themeColors.cardBg,
// //         borderColor: themeColors.border,
// //         borderWidth: '1px'
// //       }}
// //       dir="rtl"
// //     >
// //       {/* صورة المنتج مع الشعارات */}
// //       <div className="relative group overflow-hidden">
// //         <motion.img
// //           initial={{ scale: 1 }}
// //           whileHover={{ scale: 1.05 }}
// //           className="w-full h-60 object-cover transition-transform duration-500"
// //           src={product.imageUrl}
// //           alt={product.title}
// //         />
        
// //         {stockStatus}
        
// //         {discountPercentage > 0 && (
// //           <motion.span 
// //             initial={{ scale: 0 }}
// //             animate={{ scale: 1 }}
// //             className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
// //             style={{
// //               backgroundColor: themeColors.warning,
// //               boxShadow: `0 2px 8px ${hexToRgba(themeColors.warning, 0.3)}`
// //             }}
// //           >
// //             خصم {discountPercentage}%
// //           </motion.span>
// //         )}
        
// //         <motion.button
// //           whileTap={{ scale: 0.9 }}
// //           onClick={() => setIsWishlist(!isWishlist)}
// //           className="absolute top-7 left-2 p-1 rounded-full shadow-sm transition-all"
// //           style={{
// //             backgroundColor: isWishlist 
// //               ? hexToRgba(themeColors.error, 0.1)
// //               : hexToRgba(themeColors.text, 0.1),
// //             color: isWishlist ? themeColors.error : themeColors.text
// //           }}
// //         >
// //           <Heart 
// //             size={20} 
// //             fill={isWishlist ? themeColors.error : "none"}
// //             className={isWishlist ? "scale-110" : ""}
// //           />
// //         </motion.button>
// //       </div>

// //       {/* معلومات المنتج */}
// //       <div className="p-5">
// //         <div className="flex justify-between items-start mb-3">
// //           <motion.h3 
// //             whileHover={{ color: themeColors.primary }}
// //             className="text-lg font-semibold transition-colors line-clamp-2 text-right"
// //             style={{ color: themeColors.text }}
// //           >
// //             {product.title}
// //           </motion.h3>
          
// //           {product.descripti && (
// //             <span 
// //               className="text-xs font-medium px-2 py-1 rounded-full"
// //               style={{ 
// //                 backgroundColor: hexToRgba(themeColors.secondary, 0.1),
// //                 color: themeColors.secondary
// //               }}
// //             >
// //               {product.descripti}
// //             </span>
// //           )}
// //         </div>

// //         {/* التقييم */}
// //         <div className="flex items-center mb-4">
// //           <div className="flex" style={{ color: themeColors.accent }}>
// //             {[...Array(5)].map((_, i) => (
// //               <Star 
// //                 key={i} 
// //                 size={16} 
// //                 fill={i < 4 ? themeColors.accent : "none"} 
// //                 style={{ 
// //                   color: i < 4 ? themeColors.accent : 
// //                     theme === 'dark' ? '#4b5563' : '#d1d5db'
// //                 }}
// //               />
// //             ))}
// //           </div>
// //           <span 
// //             className="text-xs mr-2"
// //             style={{ color: hexToRgba(themeColors.text, 0.7) }}
// //           >
// //             (24 تقييم)
// //           </span>
// //         </div>

// //         {/* السعر */}
// //         <div className="flex items-center justify-between mb-5">
// //           <div className="flex flex-col items-end">
// //             <span 
// //               className="text-xl font-bold"
// //               style={{ color: themeColors.text }}
// //             >
// //               {product.salePrice.toFixed(2)} ر.س
// //             </span>
// //             {product.productPrice > product.salePrice && (
// //               <span 
// //                 className="text-sm line-through"
// //                 style={{ color: hexToRgba(themeColors.text, 0.5) }}
// //               >
// //                 {product.productPrice.toFixed(2)} ر.س
// //               </span>
// //             )}
// //           </div>
          
// //           <span 
// //             className="text-xs"
// //             style={{ color: hexToRgba(themeColors.text, 0.7) }}
// //           >
// //             متبقي {product.productStock}
// //           </span>
// //         </div>

// //         {/* زر إضافة إلى السلة */}
// //         <motion.button
// //           whileHover={{ scale: 1.02 }}
// //           whileTap={{ scale: 0.98 }}
// //           onClick={handleAddToCart}
// //           disabled={product.productStock === 0}
// //           className="w-full flex items-center justify-center py-3 px-6 rounded-xl font-medium transition-all"
// //           style={{ 
// //             backgroundColor: product.productStock === 0 
// //               ? hexToRgba(themeColors.text, 0.1)
// //               : themeColors.primary,
// //             color: product.productStock === 0 
// //               ? hexToRgba(themeColors.text, 0.5)
// //               : '#ffffff',
// //             boxShadow: product.productStock === 0 
// //               ? 'none'
// //               : `0 4px 14px ${hexToRgba(themeColors.primary, 0.25)}`,
// //             cursor: product.productStock === 0 ? 'not-allowed' : 'pointer'
// //           }}
// //         >
// //           <ShoppingCart size={18} className="ml-2" />
// //           {product.productStock === 0 ? "غير متوفر" : "أضف إلى السلة"}
// //         </motion.button>
// //       </div>
// //     </motion.div>
// //   );
// // }
// "use client";
// import { ShoppingCart, Star, Heart, Eye, ExternalLink } from "lucide-react";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { addToCart } from "../../../redux/slices/cartSlice";
// import { useDispatch } from "react-redux";
// import toast from "react-hot-toast";
// import { useTheme } from "next-themes";
// import Link from "next/link";

// export default function ProductSwitchs({ product, colors, customizations = {}, slugDomain={} }) {
//   const dispatch = useDispatch();
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [isWishlist, setIsWishlist] = useState(false);
//   const { theme } = useTheme();
//   // Color system with merged colors and customizations
//   const themeColors = {
//     primary: colors?.primary || customizations?.primaryColor || '#3b82f6',
//     secondary: colors?.secondary || customizations?.secondaryColor || '#10b981',
//     accent: colors?.accent || customizations?.accentColor || '#f59e0b',
//     text: theme === 'dark' 
//       ? colors?.darkText || customizations?.darkTextColor || '#f8fafc'
//       : colors?.text || customizations?.textColor || '#1e293b',
//     background: theme === 'dark'
//       ? colors?.darkBackground || customizations?.darkBackgroundColor || '#1e293b'
//       : colors?.background || customizations?.backgroundColor || '#ffffff',
//     cardBg: theme === 'dark'
//       ? colors?.darkCardBg || customizations?.darkCardBackground || '#334155'
//       : colors?.cardBg || customizations?.cardBackground || '#ffffff',
//     border: theme === 'dark'
//       ? colors?.darkBorder || customizations?.darkBorderColor || '#475569'
//       : colors?.border || customizations?.borderColor || '#e2e8f0',
//     error: colors?.error || customizations?.errorColor || '#ef4444',
//     success: colors?.success || customizations?.successColor || '#10b981',
//     warning: colors?.warning || customizations?.warningColor || '#f59e0b',
//   };

//   function hexToRgba(hex, opacity = 1) {
//     const r = parseInt(hex.slice(1, 3), 16);
//     const g = parseInt(hex.slice(3, 5), 16);
//     const b = parseInt(hex.slice(5, 7), 16);
//     return `rgba(${r}, ${g}, ${b}, ${opacity})`;
//   }

//   function handleAddToCart() {
//     if (product.productStock === 0) {
//       toast.error("المنتج غير متوفر في المخزون!", {
//         style: {
//           background: themeColors.error,
//           color: "#fff",
//           borderRadius: "12px",
//           boxShadow: `0 4px 12px ${hexToRgba(themeColors.error, 0.15)}`,
//           padding: "16px 24px",
//           fontSize: "14px"
//         },
//         iconTheme: {
//           primary: "#fff",
//           secondary: themeColors.error
//         }
//       });
//       return;
//     }

//     setIsAnimating(true);
//     setTimeout(() => {
//       dispatch(addToCart(product));
//       toast.success("تمت الإضافة إلى السلة!", {
//         style: {
//           background: themeColors.success,
//           color: "#fff",
//           borderRadius: "12px",
//           boxShadow: `0 4px 12px ${hexToRgba(themeColors.success, 0.15)}`,
//           padding: "16px 24px",
//           fontSize: "14px"
//         },
//         iconTheme: {
//           primary: "#fff",
//           secondary: themeColors.success
//         }
//       });
//       setIsAnimating(false);
//     }, 1000);
//   }

//   const stockStatus = product.productStock >= 1 ? (
//     <motion.div 
//       initial={{ scale: 0.8 }}
//       animate={{ scale: 1 }}
//       className="absolute top-3 right-3 z-10"
//     >
//       <span 
//         className="text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center shadow-md"
//         style={{
//           backgroundColor: themeColors.success,
//           boxShadow: `0 2px 8px ${hexToRgba(themeColors.success, 0.3)}`
//         }}
//       >
//         <span className="w-2 h-2 bg-white rounded-full ml-2 animate-pulse"></span>
//         متوفر
//       </span>
//     </motion.div>
//   ) : (
//     <motion.div
//       initial={{ scale: 0.8 }}
//       animate={{ scale: 1 }}
//       className="absolute top-3 right-3 z-10"
//     >
//       <span 
//         className="text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center shadow-md"
//         style={{
//           backgroundColor: themeColors.error,
//           boxShadow: `0 2px 8px ${hexToRgba(themeColors.error, 0.3)}`
//         }}
//       >
//         <span className="w-2 h-2 bg-white rounded-full ml-2"></span>
//         غير متوفر
//       </span>
//     </motion.div>
//   );

//   const discountPercentage = Math.round(
//     ((product.productPrice - product.salePrice) / product.productPrice) * 100
//   );

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       whileHover={{ y: -5 }}
//       className={`relative rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${
//         isAnimating ? "animate-move-to-cart" : ""
//       }`}
//       style={{
//         backgroundColor: themeColors.cardBg,
//         borderColor: themeColors.border,
//         borderWidth: '1px'
//       }}
//       dir="rtl"
//     >
//       {/* Product image with interactive preview overlay */}
//       <div className="relative group overflow-hidden">
//         <Link href={`${slugDomain}/products/${product.slug}`} >
//           <div className="relative w-full h-60 overflow-hidden">
//             {/* Main product image */}
//             <motion.img
//               initial={{ scale: 1 }}
//               whileHover={{ scale: 1.05 }}
//               className="w-full h-full object-cover transition-transform duration-500"
//               src={product.imageUrl}
//               alt={product.title}
//             />
            
//             {/* Preview overlay */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileHover={{ opacity: 1 }}
//               className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity duration-300 cursor-pointer"
//             >
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 whileHover={{ scale: 1, opacity: 1 }}
//                 className="flex flex-col items-center justify-center text-white p-4 rounded-full bg-black/50 border-2 border-white/20"
//                 style={{ backdropFilter: 'blur(4px)' }}
//               >
//                 <ExternalLink size={28} className="mb-1" />
//                 <span className="text-sm font-medium">معاينة المنتج</span>
//               </motion.div>
//             </motion.div>
//           </div>
//         </Link>
        
//         {stockStatus}
        
//         {discountPercentage > 0 && (
//           <motion.span 
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
//             style={{
//               backgroundColor: themeColors.warning,
//               boxShadow: `0 2px 8px ${hexToRgba(themeColors.warning, 0.3)}`
//             }}
//           >
//             خصم {discountPercentage}%
//           </motion.span>
//         )}
        
//         <motion.button
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setIsWishlist(!isWishlist)}
//           className="absolute top-7 left-2 p-1 rounded-full shadow-sm transition-all z-10"
//           style={{
//             backgroundColor: isWishlist 
//               ? hexToRgba(themeColors.error, 0.1)
//               : hexToRgba(themeColors.text, 0.1),
//             color: isWishlist ? themeColors.error : themeColors.text
//           }}
//         >
//           <Heart 
//             size={20} 
//             fill={isWishlist ? themeColors.error : "none"}
//             className={isWishlist ? "scale-110" : ""}
//           />
//         </motion.button>
//       </div>    

//       {/* Product info */}
//       <div className="p-5">
//         <div className="flex justify-between items-start mb-3">
//           <Link href={`/product/${product.id}`} passHref>
//             <motion.h3 
//               whileHover={{ color: themeColors.primary }}
//               className="text-lg font-semibold transition-colors line-clamp-2 text-right cursor-pointer"
//               style={{ color: themeColors.text }}
//             >
//               {product.title}
//             </motion.h3>
//           </Link>
          
//           {product.descripti && (
//   <motion.div
//     initial={{ opacity: 0, scale: 0.9 }}
//     animate={{ opacity: 1, scale: 1 }}
//     className="max-w-full overflow-hidden"
//     style={{
//       backgroundColor: hexToRgba(themeColors.secondary, 0.1),
//       color: themeColors.secondary,
//       borderRadius: '9999px',
//       display: 'inline-flex',
//     }}
//   >
//     <p 
//       className="px-2 py-1 text-xs font-medium whitespace-nowrap overflow-hidden text-ellipsis"
//       style={{
//         fontSize: 'clamp(0.5rem, 2vw, 0.75rem)', // حجم خط متغير بين 8px و12px
//         maxWidth: '150px', // أقصى عرض مسموح
//       }}
//       title={product.descripti} // يظهر النص الكامل عند hover
//     >
//       {product.descripti}
//     </p>
//   </motion.div>
// )}
//         </div>

//         {/* Rating */}
//         <div className="flex items-center mb-4">
//           <div className="flex" style={{ color: themeColors.accent }}>
//             {[...Array(5)].map((_, i) => (
//               <Star 
//                 key={i} 
//                 size={16} 
//                 fill={i < 4 ? themeColors.accent : "none"} 
//                 style={{ 
//                   color: i < 4 ? themeColors.accent : 
//                     theme === 'dark' ? '#4b5563' : '#d1d5db'
//                 }}
//               />
//             ))}
//           </div>
//           <span 
//             className="text-xs mr-2"
//             style={{ color: hexToRgba(themeColors.text, 0.7) }}
//           >
//             (24 تقييم)
//           </span>
//         </div>

//         {/* Price */}
//         <div className="flex items-center justify-between mb-5">
//           <div className="flex flex-col items-end">
//             <span 
//               className="text-xl font-bold"
//               style={{ color: themeColors.text }}
//             >
//               {product.salePrice.toFixed(2)} ر.س
//             </span>
//             {product.productPrice > product.salePrice && (
//               <span 
//                 className="text-sm line-through"
//                 style={{ color: hexToRgba(themeColors.text, 0.5) }}
//               >
//                 {product.productPrice.toFixed(2)} ر.س
//               </span>
//             )}
//           </div>
          
//           <span 
//             className="text-xs"
//             style={{ color: hexToRgba(themeColors.text, 0.7) }}
//           >
//             متبقي {product.productStock}
//           </span>
//         </div>

//         {/* Add to cart button */}
//         <motion.button
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           onClick={handleAddToCart}
//           disabled={product.productStock === 0}
//           className="w-full flex items-center justify-center py-3 px-6 rounded-xl font-medium transition-all"
//           style={{ 
//             backgroundColor: product.productStock === 0 
//               ? hexToRgba(themeColors.text, 0.1)
//               : themeColors.primary,
//             color: product.productStock === 0 
//               ? hexToRgba(themeColors.text, 0.5)
//               : '#ffffff',
//             boxShadow: product.productStock === 0 
//               ? 'none'
//               : `0 4px 14px ${hexToRgba(themeColors.primary, 0.25)}`,
//             cursor: product.productStock === 0 ? 'not-allowed' : 'pointer'
//           }}
//         >
//           <ShoppingCart size={18} className="ml-2" />
//           {product.productStock === 0 ? "غير متوفر" : "أضف إلى السلة"}
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// }
// "use client";

// import { BaggageClaim } from "lucide-react";
// import React from "react";
// import { addToCart } from '../../../redux/slices/cartSlice';
// import { useDispatch } from 'react-redux';
// import toast from "react-hot-toast";

// export default function ProductSwitch({ product,   customization = {} }) {
//   const dispatch = useDispatch();
//   const primaryColor = customization.primaryColor || '#4CAF50'; // اللون الأساسي
//   const secondaryColor = customization.secondaryColor || '#2C3E50'; // اللون الثانوي
//   const accentColor = customization.accentColor || '#FFC107'; // اللون المميز
//   const backgroundColor = customization.backgroundColor || '#FFFFFF'; // لون الخلفية
//   const fontFamily = customization.fontFamily || 'sans-serif'; // نوع الخط
//   const isActive = customization.isActive ?? true; // هل التخصيص مفعل؟


//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//     toast.success("Item added successfully!");
//   };

//   return (
//     <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white dark:bg-slate-200 shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
//       <a
//         className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
//         href={`/products/${product.slug}`}
//         aria-label={`View ${product.title} details`}
//       >
//         <img
//           className="object-cover w-full group-hover:scale-110 transition-transform duration-300"
//           src={product.imageUrl}
//           alt={product.title}
//           loading="lazy"
//         />
//         <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white" style={{ backgroundColor }}>
//           {product.unit }
//         </span>
//       </a>
//       <div className="mt-4 px-5 pb-5">
//         <a href={`/products/${product.slug}`} aria-label={`View ${product.title} details`}>
//           <h5 className="text-xl tracking-tight text-slate-900 hover:text-lime-600 transition-colors">
//             {product.title}
//           </h5>
//         </a>
//         <h2 className="text-sm tracking-tight text-slate-900 hover:text-lime-600 transition-colors">
//             {product.descripti}
//           </h2>
//         <div className="mt-2 mb-5 flex items-center justify-between">
//           <p>
//             <span className="text-3xl font-bold text-slate-900">${product.productPrice}</span>
//             <span className="text-sm text-slate-900 line-through ml-2">${product.salePrice}</span>
//           </p>
//           <div className="flex items-center">
//             <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
//               {product.unit }
//             </span>
//           </div>
//         </div>
//         <div className="flex items-center justify-between gap-2 pb-3 dark:text-slate-200 text-slate-800">
//           <button
//             className="flex items-center justify-center rounded-md bg-slate-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none
//              focus:ring-4 focus:ring-blue-300 transition-colors "style={{ backgroundColor:secondaryColor }} 
//             aria-label="Switch Product"
//           >
//             Switch Product
//           </button>
//           <button
//             onClick={handleAddToCart}
//             className="flex items-center space-x-2  px-4 py-2 rounded-md text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-colors "style={{ backgroundColor }}  
//             aria-label="Add to Cart"
//           >
//             <BaggageClaim className="w-5 h-5" />
//             <span>Add</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client";

// import { BaggageClaim } from "lucide-react";
// import React from "react";
// import { addToCart } from "../../../redux/slices/cartSlice";
// import { useDispatch } from "react-redux";
// import toast from "react-hot-toast";
// import chroma from "chroma-js"; // مكتبة توليد الألوان

// export default function ProductSwitch({ product, customization = {} }) {
//   const dispatch = useDispatch();
  
//   // استخراج اللون الأساسي وتوليد الألوان الأخرى تلقائيًا
//   // const dispatch = useDispatch();
//   const primaryColor = customization.primaryColor || '#4CAF50'; // اللون الأساسي
//   const secondaryColor = customization.secondaryColor || '#2C3E50'; // اللون الثانوي
//   const accentColor = customization.accentColor || '#FFC107'; // اللون المميز
//   const backgroundColor = customization.backgroundColor || '#FFFFFF'; // لون الخلفية
//   const fontFamily = customization.fontFamily || 'sans-serif'; // نوع الخط
//   const isActive = customization.isActive ?? true; // هل التخصيص مفعل؟

//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//     toast.success("Item added successfully!");
//   };

//   return (
//     <div
//       className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 
//       bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
//       style={{ fontFamily }}
//     >
//       {/* صورة المنتج */}
//       <a
//         className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
//         href={`/products/${product.slug}`}
//         aria-label={`View ${product.title} details`}
//       >
//         <img
//           className="object-cover w-full group-hover:scale-110 transition-transform duration-300"
//           src={product.imageUrl}
//           alt={product.title}
//           loading="lazy"
//         />
//         <span
//           className="absolute top-0 left-0 m-2 rounded-full px-2 text-center text-sm font-medium text-white"
//           style={{ backgroundColor: accentColor }}
//         >
//           {product.unit}
//         </span>
//       </a>

//       {/* تفاصيل المنتج */}
//       <div className="mt-4 px-5 pb-5">
//         <a href={`/products/${product.slug}`} aria-label={`View ${product.title} details`}>
//           <h5
//             className="text-xl tracking-tight hover:text-lime-600 transition-colors"
//             style={{ color: secondaryColor }}
//           >
//             {product.title}
//           </h5>
//         </a>
//         <h2
//           className="text-sm tracking-tight hover:text-lime-600 transition-colors"
//           style={{ color: secondaryColor }}
//         >
//           {product.descripti}
//         </h2>

//         {/* السعر */}
//         <div className="mt-2 mb-5 flex items-center justify-between">
//           <p>
//             <span className="text-3xl font-bold">{product.productPrice}$</span>
//             <span className="text-sm line-through ml-2 text-red-500 dark:text-red-400">
//               {product.salePrice}$
//             </span>
//           </p>
//           <div className="flex items-center">
//             <span
//               className="mr-2 ml-3 rounded px-2.5 py-0.5 text-xs font-semibold"
//               style={{ backgroundColor: accentColor, color: "#fff" }}
//             >
//               {product.unit}
//             </span>
//           </div>
//         </div>

//         {/* الأزرار */}
//         <div className="flex items-center justify-between gap-2 pb-3">
//           <button
//             className="flex items-center justify-center rounded-md px-5 py-2.5 text-center text-sm font-medium text-white hover:opacity-90 transition-colors
//             bg-slate-700 dark:bg-slate-600"
//             style={{ backgroundColor: secondaryColor }}
//             aria-label="Switch Product"
//           >
//             Switch Product
//           </button>
//           <button
//             onClick={handleAddToCart}
//             className="flex items-center space-x-2 px-4 py-2 rounded-md text-white hover:opacity-90 transition-colors 
//             bg-lime-600 dark:bg-lime-500"
//             style={{ backgroundColor: accentColor }}
//             aria-label="Add to Cart"
//           >
//             <BaggageClaim className="w-5 h-5" />
//             <span>Add</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client"
import { ShoppingCart, Heart, Eye, BarChart2 } from "lucide-react"
import React from "react"
import { useDispatch } from "react-redux"
import toast from "react-hot-toast"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const ProductCard = ({ product, customization = {} }) => {
  const dispatch = useDispatch()
  
  const {
    primaryColor = '#4CAF50',
    secondaryColor = '#2C3E50',
    accentColor = '#FFC107',
    backgroundColor = '#FFFFFF',
    textColor = '#333333',
    darkTextColor = '#F3F4F6'
  } = customization

  const handleAddToCart = (e) => {
    e.preventDefault()
    dispatch(addToCart(product))
    toast.success("تمت الإضافة إلى السلة بنجاح!")
  }

  const cardVariants = {
    hover: { 
      y: -5,
      boxShadow: `0 10px 25px -5px ${primaryColor}20`
    }
  }

  const discountPercentage = product.productPrice 
    ? Math.round(((product.productPrice - product.salePrice) / product.productPrice) * 100)
    : 0

  return (
    <motion.div
      className="h-full"
      whileHover="hover"
      initial="rest"
      variants={cardVariants}
      transition={{ duration: 0.3 }}
    >
      <Link 
        href={`/products/${product.slug}`}
        className="group block h-full"
      >
        <div className="h-full flex flex-col rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={product.imageUrl || '/product-placeholder.jpg'}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 50vw"
              quality={85}
              priority={false}
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {discountPercentage > 0 && (
                <span className="px-2 py-1 text-xs font-bold rounded-full bg-red-500 text-white">
                  {discountPercentage}% خصم
                </span>
              )}
              {product.isNew && (
                <span className="px-2 py-1 text-xs font-bold rounded-full bg-blue-500 text-white">
                  جديد
                </span>
              )}
            </div>
            
            {/* Quick Actions */}
            <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                className="p-2 rounded-full bg-white/90 shadow-sm hover:bg-primary-100 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  dispatch(addToWishlist(product))
                  toast.success("تمت الإضافة إلى المفضلة")
                }}
              >
                <Heart className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full bg-white/90 shadow-sm hover:bg-primary-100 transition-colors">
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Product Content */}
          <div className="flex-1 p-4 flex flex-col">
            {/* Category */}
            {product.category && (
              <span className="text-xs font-medium mb-1" style={{ color: primaryColor }}>
                {product.category.title}
              </span>
            )}
            
            {/* Title */}
            <h3 className="text-lg font-semibold mb-2 line-clamp-2" style={{ color: `var(--text-color)` }}>
              {product.title}
            </h3>
            
            {/* Price */}
            <div className="mt-auto space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold" style={{ color: primaryColor }}>
                    {product.salePrice?.toLocaleString()} ر.س
                  </span>
                  {product.productPrice && (
                    <del className="text-sm text-gray-400 dark:text-gray-500">
                      {product.productPrice?.toLocaleString()} ر.س
                    </del>
                  )}
                </div>
                
                {/* Rating */}
                {product.rating && (
                  <div className="flex items-center gap-1 text-amber-400">
                    <BarChart2 className="w-4 h-4" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {product.rating.toFixed(1)}
                    </span>
                  </div>
                )}
              </div>

              {/* Add to Cart Button */}
              <motion.button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-medium transition-all
                hover:bg-opacity-90"
                style={{ 
                  backgroundColor: primaryColor,
                  color: backgroundColor
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>أضف إلى السلة</span>
              </motion.button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProductCard
// "use client";

// import { BaggageClaim } from "lucide-react";
// import React, { useState } from "react"; // Import useState for managing state
// import { addToCart } from '../../../redux/slices/cartSlice'
// import { useDispatch } from 'react-redux'
// import toast from "react-hot-toast";

// export default function ProductSwitch({ product,storeId }) {
// //     console.log("console.log(product);console.log(product);console.log(product);",product);
// //   const [currentProductIndex, setCurrentProductIndex] = useState(0); // Track the current product index

// //   // Function to switch to the next product
// //   const switchProduct = () => {
// //     const nextIndex = (currentProductIndex + 1) % product.length;
// //     setCurrentProductIndex(nextIndex);
// //   };

// //   const currentProduct = product[currentProductIndex]; // Get the current product based on the index
// const dispatch =useDispatch();
// function handleAddToCart(){
//     dispatch(addToCart(product)); 
//     toast.success("Item added SuccessFully");
// }
//   return (
//     <div className="relative  m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white dark:bg-slate-200 shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
//     <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow" href="#">
//       <img className="object-cover object-cover w-full group-hover:scale-110 transition-transform duration-300 group-hover:scale-105 transition-transform" src={product.imageUrl} alt="product image" />
//       <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
//         {product.discount  }
//       </span>
//     </a>
//     <div className="mt-4 px-5 pb-5">
//     <span className="text-3xl font-bold text-slate-900">
//               {product.salePrice}
//             </span>
//              <span className="text-sm text-slate-500 line-through">
//               {product.productPrice}
//               {product.wholesalePrice}
//             </span>
//       <a href="#">
//         <h5 className="text-xl tracking-tight text-slate-900 hover:text-lime-600 transition-colors">{product.title}</h5>
//       </a>
//       <div className="mt-2 mb-5 flex items-center justify-between">
//         <p>
//           <span className="text-3xl font-bold text-slate-900">{product.price}</span>
//           <span className="text-sm text-slate-900 line-through">{product.oldPrice}</span>
//         </p>
//         <div className="flex items-center">
//           <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
//             {product.rating}
//           </span>
//         </div>
//       </div>
//       <div className="flex items-center justify-between gap-2 pb-3 dark:text-slate-200 text-slate-800">
//         <button className="flex items-center justify-center rounded-md bg-slate-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
//           Switch Product
//         </button>
//         <button onClick={() => handleAddToCart()} className='flex items-center space-x-2 bg-lime-600 px-4 py-2 rounded-md text-white'>
//           <BaggageClaim />
//           <span>Add</span>
//         </button>
//       </div>
//     </div>
//   </div>
  
//   );
// }
// "use client";

// import { BaggageClaim } from "lucide-react";
// import React, { useState } from "react"; // Import useState for managing state
// import { addToCart } from '../../../redux/slices/cartSlice'
// import { useDispatch } from 'react-redux'
// import toast from "react-hot-toast";

// export default function ProductSwitch({ product,storeId }) {

// const dispatch =useDispatch();
// function handleAddToCart(){
//     dispatch(addToCart(product)); 
//     toast.success("Item added SuccessFully");
// }
//   return (
//     <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white dark:bg-slate-200 shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
//     <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow" href={`/products/${product.slug}`} >
//       <img className="object-cover object-cover w-full group-hover:scale-110 transition-transform duration-300 group-hover:scale-105 transition-transform" src={product.imageUrl} alt="product image" />
//       <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
//         {product.discount}
//       </span>
//     </a>
//     <div className="mt-4 px-5 pb-5">
//       <a href={`/products/${product.slug}`} >
//         <h5 className="text-xl tracking-tight text-slate-900 hover:text-lime-600 transition-colors">{product.title}</h5>
//       </a>
//       <div className="mt-2 mb-5 flex items-center justify-between">
//         <p>
//           <span className="text-3xl font-bold text-slate-900">{product.productPrice}</span>
//           <span className="text-sm text-slate-900 line-through">{product.salePrice}</span>
//         </p>
//         <div className="flex items-center">
//           <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
//             {product.descripti}
            
//           </span>
//           {product.descripti}
//         </div>
//       </div>
//       <div className="flex items-center justify-between gap-2 pb-3 dark:text-slate-200 text-slate-800">
//         <button className="flex items-center justify-center rounded-md bg-slate-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
//           Switch Product
//         </button>
//         <button onClick={() => handleAddToCart()} className='flex items-center space-x-2 bg-lime-600 px-4 py-2 rounded-md text-white'>
//           <BaggageClaim />
//           <span>Add</span>
//         </button>
//       </div>
//     </div>
//   </div>
  
//   );
// }
// 
//     console.log("console.log(product);console.log(product);console.log(product);",product);
//   const [currentProductIndex, setCurrentProductIndex] = useState(0); // Track the current product index

//   // Function to switch to the next product
//   const switchProduct = () => {
//     const nextIndex = (currentProductIndex + 1) % product.length;
//     setCurrentProductIndex(nextIndex);
//   };

//   const currentProduct = product[currentProductIndex]; // Get the current product based on the index

// "use client";

// import { BaggageClaim } from "lucide-react";
// import React, { useState } from "react"; // Import useState for managing state
// import { addToCart } from '../../../redux/slices/cartSlice'
// import { useDispatch } from 'react-redux'
// import toast from "react-hot-toast";

// export default function ProductSwitch({ product, storeId }) {
//   const dispatch = useDispatch();

//   function handleAddToCart() {
//     dispatch(addToCart(product)); 
//     toast.success("Item added Successfully");
//   }

//   return (
//     <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white dark:bg-slate-200 shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
//       <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow" href="#">
//         <img className="object-cover group-hover:scale-105 transition-transform" src={product.productImages[0]} alt="product image" />
//         <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
//           {product.discount}

//         </span>
//       </a>
//       <div className="mt-4 px-5 pb-5">
//         <a href="#">
//           <h5 className="text-xl tracking-tight text-slate-900 hover:text-lime-600 transition-colors">{product.title}</h5>
//         </a>
//         <p className="text-sm text-gray-600 mt-2">{product.description}</p>
//         <div className="mt-2 mb-5 flex items-center justify-between">
//           <p>
//             <span className="text-3xl font-bold text-slate-900">{product.productPrice}</span>
//             <span className="text-sm text-slate-900 line-through">{product.salePrice}</span>
//           </p>
//           <div className="flex items-center">
//             <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
//               {product.rating}
//             </span>
//           </div>
//         </div>
        
//         {/* Display additional product details */}
//         <div className="mt-2 text-sm text-gray-600">
//           <p> {product.sku}</p>
//           <p> {product.barcode}</p>
//           <p> {product.productStock} {product.unit}</p>
//           <p> {product.tags.join(", ")}</p>
//         </div>

//         <div className="flex items-center justify-between gap-2 pb-3 dark:text-slate-200 text-slate-800">
//           <button className="flex items-center justify-center rounded-md bg-slate-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
//             Switch Product
//           </button>
//           <button onClick={() => handleAddToCart()} className='flex items-center space-x-2 bg-lime-600 px-4 py-2 rounded-md text-white'>
//             <BaggageClaim />
//             <span>Add</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
