// "use client";
// import { ShoppingCart, Star, Heart } from "lucide-react";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { addToCart } from "../../../redux/slices/cartSlice";
// import { useDispatch } from "react-redux";
// import toast from "react-hot-toast";
// import { useTheme } from "next-themes";

// export default function ProductSwitchs({ product, colors, customizations = {}, slugDomain }) {
//   const dispatch = useDispatch();
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [isWishlist, setIsWishlist] = useState(false);
//   const { theme } = useTheme();

//   // نظام الألوان مع دمج colors و customizations
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
//       toast.success(`تمت الإضافة إلى السلة!${product.title}`, {
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
//       {/* صورة المنتج مع الشعارات */}
//       <div className="relative group overflow-hidden">
//         <motion.img
//           initial={{ scale: 1 }}
//           whileHover={{ scale: 1.05 }}
//           className="w-full h-60 object-cover transition-transform duration-500"
//           src={product.imageUrl}
//           alt={product.title}
//         />
        
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
//           className="absolute top-7 left-2 p-1 rounded-full shadow-sm transition-all"
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

//       {/* معلومات المنتج */}
//       <div className="p-5">
//         <div className="flex justify-between items-start mb-3">
//           <motion.h3 
//             whileHover={{ color: themeColors.primary }}
//             className="text-lg font-semibold transition-colors line-clamp-2 text-right"
//             style={{ color: themeColors.text }}
//           >
//             {product.title}
//           </motion.h3>
          
//           {product.descripti && (
//             <span 
//               className="text-xs font-medium px-2 py-1 rounded-full"
//               style={{ 
//                 backgroundColor: hexToRgba(themeColors.secondary, 0.1),
//                 color: themeColors.secondary
//               }}
//             >
//               {product.descripti}
//             </span>
//           )}
//         </div>

//         {/* التقييم */}
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

//         {/* السعر */}
//         <div className="flex items-center justify-between mb-5">
//           <div className="flex flex-col items-end">
//             <span 
//               className="text-xl font-bold"
//               style={{ color: themeColors.text }}
//             >
//               {product.salePrice.toFixed(2)} ر.ي
//             </span>
//             {product.productPrice > product.salePrice && (
//               <span 
//                 className="text-sm line-through"
//                 style={{ color: hexToRgba(themeColors.text, 0.5) }}
//               >
//                 {product.productPrice.toFixed(2)} ر.ي
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

//         {/* زر إضافة إلى السلة */}
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
"use client";
import { ShoppingCart, Star, Heart, Eye, ExternalLink } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { addToCart } from "../../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function ProductSwitchs({ product, colors, customizations = {}, slugDomain={} }) {
  const dispatch = useDispatch();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);
  const { theme } = useTheme();
  // Color system with merged colors and customizations
  const themeColors = {
    primary: colors?.primary || customizations?.primaryColor || '#3b82f6',
    secondary: colors?.secondary || customizations?.secondaryColor || '#10b981',
    accent: colors?.accent || customizations?.accentColor || '#f59e0b',
    text: theme === 'dark' 
      ? colors?.darkText || customizations?.darkTextColor || '#f8fafc'
      : colors?.text || customizations?.textColor || '#1e293b',
    background: theme === 'dark'
      ? colors?.darkBackground || customizations?.darkBackgroundColor || '#1e293b'
      : colors?.background || customizations?.backgroundColor || '#ffffff',
    cardBg: theme === 'dark'
      ? colors?.darkCardBg || customizations?.darkCardBackground || '#334155'
      : colors?.cardBg || customizations?.cardBackground || '#ffffff',
    border: theme === 'dark'
      ? colors?.darkBorder || customizations?.darkBorderColor || '#475569'
      : colors?.border || customizations?.borderColor || '#e2e8f0',
    error: colors?.error || customizations?.errorColor || '#ef4444',
    success: colors?.success || customizations?.successColor || '#10b981',
    warning: colors?.warning || customizations?.warningColor || '#f59e0b',
  };

  function hexToRgba(hex, opacity = 1) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  function handleAddToCart() {
    if (product.productStock === 0) {
      toast.error("المنتج غير متوفر في المخزون!", {
        style: {
          background: themeColors.error,
          color: "#fff",
          borderRadius: "12px",
          boxShadow: `0 4px 12px ${hexToRgba(themeColors.error, 0.15)}`,
          padding: "16px 24px",
          fontSize: "14px"
        },
        iconTheme: {
          primary: "#fff",
          secondary: themeColors.error
        }
      });
      return;
    }

    setIsAnimating(true);
    setTimeout(() => {
      dispatch(addToCart(product));
      toast.success("تمت الإضافة إلى السلة!", {
        style: {
          background: themeColors.success,
          color: "#fff",
          borderRadius: "12px",
          boxShadow: `0 4px 12px ${hexToRgba(themeColors.success, 0.15)}`,
          padding: "16px 24px",
          fontSize: "14px"
        },
        iconTheme: {
          primary: "#fff",
          secondary: themeColors.success
        }
      });
      setIsAnimating(false);
    }, 1000);
  }

  const stockStatus = product.productStock >= 1 ? (
    <motion.div 
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      className="absolute top-3 right-3 z-10"
    >
      <span 
        className="text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center shadow-md"
        style={{
          backgroundColor: themeColors.success,
          boxShadow: `0 2px 8px ${hexToRgba(themeColors.success, 0.3)}`
        }}
      >
        <span className="w-2 h-2 bg-white rounded-full ml-2 animate-pulse"></span>
        متوفر
      </span>
    </motion.div>
  ) : (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      className="absolute top-3 right-3 z-10"
    >
      <span 
        className="text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center shadow-md"
        style={{
          backgroundColor: themeColors.error,
          boxShadow: `0 2px 8px ${hexToRgba(themeColors.error, 0.3)}`
        }}
      >
        <span className="w-2 h-2 bg-white rounded-full ml-2"></span>
        غير متوفر
      </span>
    </motion.div>
  );

  const discountPercentage = Math.round(
    ((product.productPrice - product.salePrice) / product.productPrice) * 100
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className={`relative rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${
        isAnimating ? "animate-move-to-cart" : ""
      }`}
      style={{
        backgroundColor: themeColors.cardBg,
        borderColor: themeColors.border,
        borderWidth: '1px'
      }}
      dir="rtl"
    >
      {/* Product image with interactive preview overlay */}
      <div className="relative group overflow-hidden">
        <Link href={`${slugDomain}/products/${product.slug}`} >
          <div className="relative w-full h-60 overflow-hidden">
            {/* Main product image */}
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="w-full h-full object-cover transition-transform duration-500"
              src={product.imageUrl}
              alt={product.title}
            />
            
            {/* Preview overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity duration-300 cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center text-white p-4 rounded-full bg-black/50 border-2 border-white/20"
                style={{ backdropFilter: 'blur(4px)' }}
              >
                <ExternalLink size={28} className="mb-1" />
                <span className="text-sm font-medium">معاينة المنتج</span>
              </motion.div>
            </motion.div>
          </div>
        </Link>
        
        {stockStatus}
        
        {discountPercentage > 0 && (
          <motion.span 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
            style={{
              backgroundColor: themeColors.warning,
              boxShadow: `0 2px 8px ${hexToRgba(themeColors.warning, 0.3)}`
            }}
          >
            خصم {discountPercentage}%
          </motion.span>
        )}
        
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsWishlist(!isWishlist)}
          className="absolute top-7 left-2 p-1 rounded-full shadow-sm transition-all z-10"
          style={{
            backgroundColor: isWishlist 
              ? hexToRgba(themeColors.error, 0.1)
              : hexToRgba(themeColors.text, 0.1),
            color: isWishlist ? themeColors.error : themeColors.text
          }}
        >
          <Heart 
            size={20} 
            fill={isWishlist ? themeColors.error : "none"}
            className={isWishlist ? "scale-110" : ""}
          />
        </motion.button>
      </div>    

      {/* Product info */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <Link href={`/product/${product.id}`} passHref>
            <motion.h3 
              whileHover={{ color: themeColors.primary }}
              className="text-lg font-semibold transition-colors line-clamp-2 text-right cursor-pointer"
              style={{ color: themeColors.text }}
            >
              {product.title}
            </motion.h3>
          </Link>
          
          {product.descripti && (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="max-w-full overflow-hidden"
    style={{
      backgroundColor: hexToRgba(themeColors.secondary, 0.1),
      color: themeColors.secondary,
      borderRadius: '9999px',
      display: 'inline-flex',
    }}
  >
    <p 
      className="px-2 py-1 text-xs font-medium whitespace-nowrap overflow-hidden text-ellipsis"
      style={{
        fontSize: 'clamp(0.5rem, 2vw, 0.75rem)', // حجم خط متغير بين 8px و12px
        maxWidth: '150px', // أقصى عرض مسموح
      }}
      title={product.descripti} // يظهر النص الكامل عند hover
    >
      {product.descripti}
    </p>
  </motion.div>
)}
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex" style={{ color: themeColors.accent }}>
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                fill={i < 4 ? themeColors.accent : "none"} 
                style={{ 
                  color: i < 4 ? themeColors.accent : 
                    theme === 'dark' ? '#4b5563' : '#d1d5db'
                }}
              />
            ))}
          </div>
          <span 
            className="text-xs mr-2"
            style={{ color: hexToRgba(themeColors.text, 0.7) }}
          >
            (24 تقييم)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex flex-col items-end">
            <span 
              className="text-xl font-bold"
              style={{ color: themeColors.text }}
            >
              {product.salePrice.toFixed(2)} ر.ي
            </span>
            {product.productPrice > product.salePrice && (
              <span 
                className="text-sm line-through"
                style={{ color: hexToRgba(themeColors.text, 0.5) }}
              >
                {product.productPrice.toFixed(2)} ر.ي
              </span>
            )}
          </div>
          
          <span 
            className="text-xs"
            style={{ color: hexToRgba(themeColors.text, 0.7) }}
          >
            متبقي {product.productStock}
          </span>
        </div>

        {/* Add to cart button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          disabled={product.productStock === 0}
          className="w-full flex items-center justify-center py-3 px-6 rounded-xl font-medium transition-all"
          style={{ 
            backgroundColor: product.productStock === 0 
              ? hexToRgba(themeColors.text, 0.1)
              : themeColors.primary,
            color: product.productStock === 0 
              ? hexToRgba(themeColors.text, 0.5)
              : '#ffffff',
            boxShadow: product.productStock === 0 
              ? 'none'
              : `0 4px 14px ${hexToRgba(themeColors.primary, 0.25)}`,
            cursor: product.productStock === 0 ? 'not-allowed' : 'pointer'
          }}
        >
          <ShoppingCart size={18} className="ml-2" />
          {product.productStock === 0 ? "غير متوفر" : "أضف إلى السلة"}
        </motion.button>
      </div>
    </motion.div>
  );
}