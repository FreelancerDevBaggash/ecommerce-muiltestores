// "use client"
// import React from 'react'
// import Image from 'next/image'
// import { Minus } from 'lucide-react'
// import { Plus } from 'lucide-react'
// import { Trash2 } from 'lucide-react'
// import { decrementQty, incrementQty, removeFromCart } from '../../../../redux/slices/cartSlice'
// import { useDispatch } from 'react-redux'
// import toast from 'react-hot-toast'

// export default function CartProduct({cartItem} ) {
//   const dispatch =useDispatch();
 
//   function handleCartItemDelete(cartId){
//     dispatch(removeFromCart(cartId));
//     toast.success("Item removed SuccessFully"); 
//     }

//   function handleQtyIncrement(cartId){
//     dispatch(incrementQty(cartId));
//       }

//   function handleQtyDecrement(cartId){
//      dispatch(decrementQty(cartId));
//       }
  
//     return (
//         <div className="flex items-center dark:bg-slate-600 justify-between
//         border-b border-slate-400 
//          pb-3 font-semibold text-sm mb-4">
//            <div className="flex items-center gap-3">
//                 <Image
//                 src={cartItem.imageUrl}
//                 width={249}
//                 height={249}
//                 alt={cartItem.title}
//                 className='rounded-xl w-20 h-20'/>

//                 <div className="flex flex-col">
//                   <h2>{cartItem.title}</h2>
//                   <small>Golden</small>
//                 </div>
//            </div> 
//            <div className="rounded-xl border
//             border-gray-400 flex gap-3 items-center ">
//               <button onClick={()=>handleQtyDecrement(cartItem.id)} className='border-r
//              border-gray-400 py-2 px-4'>
//                 <Minus/>
//               </button>
//                <p className='flex-grow py-2 px-4'>
//                {cartItem.qty}
//               </p>
//                <button  onClick={()=>handleQtyIncrement(cartItem.id)} className='border-l 
//                 border-gray-400 py-2 px-4'>
//                 <Plus/>
//                </button>
//           </div>
           
//            <div className="flex items-center gap-2">
//             <h4>UGX{cartItem.salePrice}</h4>
//             <button onClick={()=>handleCartItemDelete(cartItem.id)}> 
//             <Trash2 className='text-red-600 w-5 h-5'/>
//             </button>
//            </div>
//            </div> 

//     )
// }
// "use client";

// import React from "react";
// import Image from "next/image";
// import { Minus, Plus, Trash2, Heart } from "lucide-react";
// import { decrementQty, incrementQty, removeFromCart } from "../../../../redux/slices/cartSlice";
// import { useDispatch } from "react-redux";
// import toast from "react-hot-toast";
// import { useTheme } from "next-themes";

// export default function CartProduct({ cartItem, customization = {} }) {
  // const primaryColor = customization?.primaryColor || "#4CAF50";
  // const secondaryColor = customization?.secondaryColor || "#2C3E50";
  // const accentColor = customization?.accentColor || "#FFC107";
  // const fontFamily = customization?.fontFamily || "sans-serif";
  // const darkBackground = customization?.darkBackground || "#1E293B";
  // const lightBackground = customization?.lightBackground || "#FFFFFF";

//   const { theme } = useTheme();
//   const dispatch = useDispatch();

//   const handleCartItemDelete = (id) => {
//     dispatch(removeFromCart(id));
//     toast.success("تم حذف المنتج بنجاح");
//   };

//   const handleQtyIncrement = (id) => dispatch(incrementQty(id));
//   const handleQtyDecrement = (id) => dispatch(decrementQty(id));

//   const imageUrl = cartItem.imageUrl || "/images/default-product.jpg";

//   return (
//     <div
//       className="flex flex-col lg:flex-row items-center lg:items-start gap-6 p-6 rounded-2xl shadow-lg transition-shadow hover:shadow-2xl"
//       style={{
//         backgroundColor: theme === "dark" ? darkBackground : lightBackground,
//         fontFamily,
//       }}
//     >
//       {/* صورة المنتج */}
//       <div className="flex-shrink-0">
//         <Image
//           src={imageUrl}
//           width={140}
//           height={140}
//           alt={cartItem.title}
//           className="rounded-xl object-cover w-32 h-32 sm:w-36 sm:h-36"
//         />
//       </div>

//       {/* تفاصيل وكمية */}
//       <div className="flex-1 flex flex-col justify-between h-full">
//         <div>
//           <h3
//             className="text-lg font-semibold mb-2"
//             style={{ color: accentColor }}
//           >
//             {cartItem.title}
//           </h3>
//           <p className="text-sm text-gray-500 flex items-center gap-2">
//             <span className="capitalize">{cartItem.variant || "Default"}</span>
//             <span
//               className="w-4 h-4 rounded-full"
//               style={{ backgroundColor: secondaryColor }}
//             />
//           </p>
//         </div>

//         <div className="mt-4 flex items-center gap-4">
//           <button
//             onClick={() => handleQtyDecrement(cartItem.id)}
//             className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 transition"
//           >
//             <Minus className="w-4 h-4 text-gray-600" />
//           </button>
//           <span className="text-base font-medium">{cartItem.qty}</span>
//           <button
//             onClick={() => handleQtyIncrement(cartItem.id)}
//             className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 transition"
//           >
//             <Plus className="w-4 h-4 text-gray-600" />
//           </button>
//         </div>
//       </div>

//       {/* السعر والأزرار */}
//       <div className="flex flex-col items-end justify-between h-full">
//         <div className="flex gap-4">
//           <button className="p-2 rounded-full hover:bg-gray-100 transition">
//             <Heart className="w-5 h-5 text-gray-400 hover:text-pink-600" />
//           </button>
//           <button
//             onClick={() => handleCartItemDelete(cartItem.id)}
//             className="p-2 rounded-full hover:bg-gray-100 transition"
//           >
//             <Trash2 className="w-5 h-5 text-gray-400 hover:text-red-600" />
//           </button>
//         </div>
//         <span
//           className="text-xl font-bold mt-auto"
//           style={{ color: primaryColor }}
//         >
//           ${cartItem.salePrice.toFixed(2)}
//         </span>
//       </div>
//     </div>
// );
// }
"use client";

import React from "react";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useTheme } from "next-themes";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../../../../redux/slices/cartSlice";

export default function CartProduct({ cartItem, customization = {} }) {
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const themeConfig = {
    primaryColor: customization?.primaryColor || "#4CAF50",
    secondaryColor: customization?.secondaryColor || "#2C3E50",
    accentColor: customization?.accentColor || "#FFC107",
    lightBackground: customization?.lightBackground || "#FFFFFF",
    darkBackground: customization?.darkBackground || "#1E293B",
    fontFamily: customization?.fontFamily || "sans-serif",
  };

  const handleItemDelete = (cartId) => {
    dispatch(removeFromCart(cartId));
    toast.success("تم حذف العنصر من السلة");
  };

  const handleQtyChange = (type, cartId) => {
    if (type === "decrement" && cartItem.qty === 1) return;
    type === "increment"
      ? dispatch(incrementQty(cartId))
      : dispatch(decrementQty(cartId));
  };

  return (
    <div className="relative">
      {/* زر الحذف خارج الكرت */}
      <button
        onClick={() => handleItemDelete(cartItem.id)}
        className="absolute -top-3 -left-3 p-2 bg-red-100 dark:bg-red-900/30 rounded-full hover:bg-red-200 transition-colors z-20"
      >
        <Trash2 className="w-5 h-5" style={{ color: "red" }} />
      </button>

      {/* كرت المنتج */}
      <div
        dir="rtl"
        className=" flex flex-col sm:flex-row gap-4 justify-between items-stretch p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-opacity-90 backdrop-blur-sm border border-gray-100 dark:border-gray-700 m-2"
        style={{
          backgroundColor:
            theme === "dark"
              ? themeConfig.darkBackground
              : themeConfig.lightBackground,
          fontFamily: themeConfig.fontFamily,
        }}
      >
        {/* قسم الصورة والمعلومات */}
        <div className="flex flex-1 gap-4 items-center">
          <div className="relative w-20 h-20 min-w-[5rem] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700/30 border">
            <Image
              src={cartItem.imageUrl || "/images/default-product.jpg"}
              alt={cartItem.title}
              fill
              className="object-contain p-2"
              loading="lazy"
              sizes="(max-width: 640px) 100vw, 80px"
            />
          </div>

          <div className="flex flex-col gap-1 flex-1">
            <h3
              className="text-lg font-bold line-clamp-2"
              style={{ color: themeConfig.accentColor }}
            >
              {cartItem.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              السعر: {cartItem.salePrice} ريال
            </p>
          </div>
        </div>

        {/* قسم التحكم */}
        <div className="flex items-center justify-between sm:justify-end gap-4">
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => handleQtyChange("decrement", cartItem.id)}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
              disabled={cartItem.qty === 1}
              style={{
                color:
                  cartItem.qty === 1
                    ? themeConfig.secondaryColor
                    : themeConfig.primaryColor,
              }}
            >
              <Minus className="w-4 h-4" />
            </button>

            <span
              className="w-8 text-center font-bold"
              style={{ color: themeConfig.primaryColor }}
            >
              {cartItem.qty}
            </span>

            <button
              onClick={() => handleQtyChange("increment", cartItem.id)}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              style={{ color: themeConfig.primaryColor }}
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


// "use client";
// import React from "react";
// import Image from "next/image";
// import { Minus, Plus, Trash2, Heart } from "lucide-react";
// import { decrementQty, incrementQty, removeFromCart } from "../../../../redux/slices/cartSlice";
// import { useDispatch } from "react-redux";
// import toast from "react-hot-toast";
// import { useTheme } from "next-themes";

// export default function CartProduct({ cartItem, customization = {} }) {
//   // تخصيص المظهر
//   const primaryColor = customization?.primaryColor || "#4CAF50";
//   const secondaryColor = customization?.secondaryColor || "#2C3E50";
//   const accentColor = customization?.accentColor || "#FFC107";
//   const fontFamily = customization?.fontFamily || "sans-serif";
//   const darkBackground = customization?.darkBackground || "#1E293B";
//   const lightBackground = customization?.lightBackground || "#FFFFFF";
//   const { theme } = useTheme();

//   const dispatch = useDispatch();

//   const handleCartItemDelete = (cartId) => {
//     dispatch(removeFromCart(cartId));
//     toast.success("تم إزالة المنتج بنجاح");
//   };

//   const handleQtyIncrement = (cartId) => dispatch(incrementQty(cartId));
//   const handleQtyDecrement = (cartId) => dispatch(decrementQty(cartId));

//   const imageUrl = cartItem.imageUrl || "/images/default-product.jpg";

//   return (
//     <div
//       className="flex flex-col sm:flex-row gap-4 p-4 m-2 rounded-xl shadow-sm hover:shadow-md transition-all"
//       style={{
//         backgroundColor: theme === "dark" ? darkBackground : lightBackground,
//         fontFamily,
//       }}
//     >
//       {/* صورة المنتج */}
//       <div className="relative w-full rounded-sm sm:w-32 h-32 ">
//         <Image
//           src={imageUrl}
//           fill
//           alt={cartItem.title}
//           className="object-contain  rounded-lg"
//           sizes="(max-width: 640px) 100vw, 128px"
//         />
//       </div>

//       {/* تفاصيل المنتج */}
//       <div className="flex-1 flex flex-col justify-between">
//         <div className="space-y-2">
//           <h3
//             className="text-lg font-semibold line-clamp-2"
//             style={{ color: accentColor }}
//           >
//             {cartItem.title}
//           </h3>
          
        
//         </div>

//         {/* عدّاد الكمية */}
//         <div className="flex items-center gap-3 mt-4">
//           <button
//             onClick={() => handleQtyDecrement(cartItem.id)}
//             className="p-2 rounded-lg hover:bg-opacity-20 transition-colors"
//             style={{ backgroundColor: `${primaryColor}33` }}
//             aria-label="تقليل الكمية"
//           >
//             <Minus className="w-4 h-4" style={{ color: primaryColor }} />
//           </button>
          
//           <span className="w-8 text-center font-medium">{cartItem.qty}</span>
          
//           <button
//             onClick={() => handleQtyIncrement(cartItem.id)}
//             className="p-2 rounded-lg hover:bg-opacity-90 transition-colors"
//             style={{ backgroundColor: primaryColor }}
//             aria-label="زيادة الكمية"
//           >
//             <Plus className="w-4 h-4 text-white" />
//           </button>
//         </div>
//       </div>

//       {/* الإجراءات والسعر */}
//       <div className="flex sm:flex-col items-center justify-between sm:justify-start gap-4">
//         <div className="flex gap-3">
//           <button
//             className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full"
//             onClick={() => console.log("المفضلة")}
//             aria-label="إضافة إلى المفضلة"
//           >
//             <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
//           </button>
          
//           <button
//             className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full"
//             onClick={() => handleCartItemDelete(cartItem.id)}
//             aria-label="حذف المنتج"
//           >
//             <Trash2 className="w-5 h-5 text-gray-400 hover:text-red-500" />
//           </button>
//         </div>

//         <h3
//           className="text-xl font-bold whitespace-nowrap"
//           style={{ color: primaryColor }}
//         >
//           ${cartItem.salePrice}
//         </h3>
//       </div>
//     </div>
//   );
// }

// "use client";
// import React from "react";
// import Image from "next/image";
// import { Minus, Plus, Trash2, Heart } from "lucide-react";
// import { decrementQty, incrementQty, removeFromCart } from "../../../../redux/slices/cartSlice";
// import { useDispatch } from "react-redux";
// import toast from "react-hot-toast";
// import { useTheme } from "next-themes";
// import { motion } from "framer-motion";

// export default function CartProduct({ cartItem, customization = {} }) {
//   const dispatch = useDispatch();
//   const { theme } = useTheme();

//   // استخراج إعدادات التخصيص مع قيم افتراضية
//   const primaryColor = customization?.primaryColor || "#4CAF50";
//   const secondaryColor = customization?.secondaryColor || "#2C3E50";
//   const accentColor = customization?.accentColor || "#FFC107";
//   const fontFamily = customization?.fontFamily || "sans-serif";
//   const darkBackground = customization?.darkBackground || "#1E293B";
//   const lightBackground = customization?.lightBackground || "#FFFFFF";
//   const handleCartItemDelete = (cartId) => {
//     dispatch(removeFromCart(cartId));
//     toast.success("تم إزالة المنتج بنجاح");
//   };

//   const handleQtyChange = (type) => {
//     if (type === 'increment') dispatch(incrementQty(cartItem.id));
//     if (type === 'decrement' && cartItem.qty > 1) dispatch(decrementQty(cartItem.id));
//   };

//   const imageUrl = cartItem.imageUrl || "/images/default-product.jpg";

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, x: 50 }}
//       className="grid grid-cols-1 lg:grid-cols-[140px_1fr_auto] gap-4 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
//       style={{
//         backgroundColor: theme === "dark" ? darkBackground : lightBackground,
//         fontFamily,
//         border: `2px solid ${primaryColor}20`
//       }}
//     >
//       {/* صورة المنتج مع تأثير hover */}
//       <motion.div 
//         className="relative aspect-square rounded-xl overflow-hidden"
//         whileHover={{ scale: 1.02 }}
//       >
//         <Image
//           src={imageUrl}
//           fill
//           alt={cartItem.title}
//           className="object-cover"
//           sizes="(max-width: 640px) 100vw, 140px"
//           quality={90}
//         />
//       </motion.div>

//       {/* تفاصيل المنتج */}
//       <div className="flex flex-col justify-between gap-3">
//         <div className="space-y-2">
//           <h3
//             className="text-xl font-bold line-clamp-2 hover:text-primary-600 transition-colors"
//             style={{ color: accentColor }}
//           >
//             {cartItem.title}
//           </h3>
          
      
//         </div>

//         {/* عدّاد الكمية مع تحسينات الجوال */}
//         <div className="flex items-center justify-between lg:justify-start gap-3">
//           <motion.div 
//             className="flex items-center gap-3"
//             whileTap={{ scale: 0.95 }}
//           >
//             <button
//               onClick={() => handleQtyChange('decrement')}
//               className="p-2 rounded-lg hover:bg-opacity-30 transition-all"
//               style={{ 
//                 backgroundColor: `${primaryColor}15`,
//                 color: primaryColor
//               }}
//               disabled={cartItem.qty === 1}
//               aria-label="تقليل الكمية"
//             >
//               <Minus className="w-5 h-5" />
//             </button>
            
//             <span 
//               className="w-8 text-center text-lg font-bold"
//               style={{ color: secondaryColor }}
//             >
//               {cartItem.qty}
//             </span>
            
//             <button
//               onClick={() => handleQtyChange('increment')}
//               className="p-2 rounded-lg hover:bg-opacity-90 transition-all"
//               style={{ 
//                 backgroundColor: primaryColor,
//                 color: lightBackground
//               }}
//               aria-label="زيادة الكمية"
//             >
//               <Plus className="w-5 h-5" />
//             </button>
//           </motion.div>
//         </div>
//       </div>

//       {/* الإجراءات والسعر */}
//       <div className="flex flex-col items-end justify-between">
//         <div className="flex gap-3 mb-4">
//           <motion.button
//             whileHover={{ scale: 1.15 }}
//             whileTap={{ scale: 0.9 }}
//             className="p-2 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-xl transition-all"
//             onClick={() => console.log("المفضلة")}
//             aria-label="إضافة إلى المفضلة"
//           >
//             <Heart className="w-6 h-6 text-gray-400 hover:text-red-500" />
//           </motion.button>
          
//           <motion.button
//             whileHover={{ scale: 1.15 }}
//             whileTap={{ scale: 0.9 }}
//             className="p-2 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-xl transition-all"
//             onClick={() => handleCartItemDelete(cartItem.id)}
//             aria-label="حذف المنتج"
//           >
//             <Trash2 className="w-6 h-6 text-gray-400 hover:text-red-500" />
//           </motion.button>
//         </div>

//         <div className="text-right space-y-1">
//           {cartItem.productPrice && (
//             <span 
//               className="text-sm line-through opacity-75"
//               style={{ color: secondaryColor }}
//             >
//               ${cartItem.productPrice}
//             </span>
//           )}
//           <h3
//             className="text-2xl font-extrabold"
//             style={{ color: primaryColor }}
//           >
//             ${(cartItem.salePrice * cartItem.qty).toFixed(2)}
//           </h3>
//         </div>
//       </div>
//     </motion.div>
//   );
// }
// ظظظظظظظظظqtyqtyqtyqtyqtyqtyqtyqtyqtyqty
// "use client"
// import React from 'react';
// import Image from 'next/image';
// import { Minus, Plus, Trash2, Heart } from 'lucide-react';
// import { decrementQty, incrementQty, removeFromCart } from '../../../../redux/slices/cartSlice';
// import { useDispatch } from 'react-redux';
// import toast from 'react-hot-toast';

// export default function CartProduct({ cartItem }) {
//   const dispatch = useDispatch();
//   const totalPrice = (cartItem.salePrice * cartItem.qty).toFixed(2);

//   function handleCartItemDelete(cartId) {
//     dispatch(removeFromCart(cartId));
//     toast.success("Item removed successfully");
//   }

//   function handleQtyIncrement(cartId) {
//     dispatch(incrementQty(cartId));
//   }

//   function handleQtyDecrement(cartId) {
//     if (cartItem.qty > 1) dispatch(decrementQty(cartId));
//   }

//   return (
//     <div className="flex gap-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
//       {/* Product Image */}
//       <div className="relative w-32 h-32 shrink-0 bg-gray-50 rounded-lg overflow-hidden">
//         <Image
//           src={cartItem.imageUrl}
//           fill
//           alt={cartItem.title}
//           className="object-contain p-4"
//           sizes="(max-width: 640px) 100px, 128px"
//         />
//       </div>

//       {/* Product Details */}
//       <div className="flex flex-col flex-1 gap-3">
//         <div className="flex justify-between items-start">
//           <h3 className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors">
//             {cartItem.title}
//           </h3>
//           <div className="flex gap-3 ml-4">
//             <button 
//               onClick={() => console.log("Favorite clicked")}
//               className="text-gray-400 hover:text-red-500 transition-colors"
//               aria-label="Add to favorites"
//             >
//               <Heart className="w-5 h-5" strokeWidth={1.5} />
//             </button>
//             <button 
//               onClick={() => handleCartItemDelete(cartItem.id)}
//               className="text-gray-400 hover:text-red-600 transition-colors"
//               aria-label="Remove item"
//             >
//               <Trash2 className="w-5 h-5" strokeWidth={1.5} />
//             </button>
//           </div>
//         </div>

//         {/* Color Indicator */}
//         <div className="flex items-center gap-2">
//           <span 
//             className="w-5 h-5 rounded-full border-2 border-gray-100 shadow-sm"
//             style={{ backgroundColor: cartItem.color }}
//             aria-label={`Product color: ${cartItem.color}`}
//           />
//           <span className="text-sm text-gray-500">Color</span>
//         </div>

//         {/* Quantity Controls */}
//         <div className="flex items-center gap-4 mt-2">
//           <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-3 py-2">
//             <button
//               onClick={() => handleQtyDecrement(cartItem.id)}
//               className={`p-1 rounded-md hover:bg-gray-200 transition-colors ${cartItem.qty === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
//               disabled={cartItem.qty === 1}
//               aria-label="Decrease quantity"
//             >
//               <Minus className="w-4 h-4 text-gray-700" />
//             </button>
//             <span className="w-6 text-center font-medium text-gray-900">
//               {cartItem.qty}
//             </span>
//             <button
//               onClick={() => handleQtyIncrement(cartItem.id)}
//               className="p-1 rounded-md hover:bg-gray-200 transition-colors"
//               aria-label="Increase quantity"
//             >
//               <Plus className="w-4 h-4 text-gray-700" />
//             </button>
//           </div>
          
//           {/* Price */}
//           <div className="ml-auto">
//             <p className="text-lg font-bold text-gray-900">
//               ${totalPrice}
//             </p>
//             {cartItem.qty > 1 && (
//               <p className="text-sm text-gray-500 text-right">
//                 ${cartItem.salePrice} each
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

