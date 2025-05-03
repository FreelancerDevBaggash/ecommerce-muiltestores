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

"use client";

import React from "react";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { decrementQty, incrementQty, removeFromCart } from "../../../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useTheme } from "next-themes";

export default function CartProduct({ cartItem, customization = {} }) {
  // تخصيص الألوان والخطوط
  const primaryColor = customization.primaryColor || "#4CAF50"; // اللون الأساسي
  const secondaryColor = customization.secondaryColor || "#2C3E50"; // اللون الثانوي
  const accentColor = customization.accentColor || "#FFC107"; // اللون المميز
  const backgroundColor = customization.backgroundColor || "#FFFFFF"; // لون الخلفية
  const fontFamily = customization.fontFamily || "sans-serif"; // نوع الخط
  const darkBackground = customization.darkBackground || "#1E293B"; // لون الخلفية في الوضع الداكن
  const lightBackground = customization.lightBackground || "#FFFFFF"; // لون الخلفية في الوضع الفاتح
  const isActive = customization.isActive ?? true;
  const { theme } = useTheme();

  const dispatch = useDispatch();

  function handleCartItemDelete(cartId) {
    dispatch(removeFromCart(cartId));
    toast.success("Item removed successfully");
  }

  function handleQtyIncrement(cartId) {
    dispatch(incrementQty(cartId));
  }

  function handleQtyDecrement(cartId) {
    dispatch(decrementQty(cartId));
  }

  // Fallback for missing image URL
  const imageUrl = cartItem.imageUrl || "/images/default-product.jpg"; // default fallback image

  return (
    <div
      className="flex gap-4 dark:bg-slate-600 bg-white px-4 m-4 py-4 rounded-md shadow"
      style={{ 
        backgroundColor: theme === "dark" ? darkBackground : lightBackground, 
        fontFamily 
      }}
    >
      <div className="flex gap-4">
        <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
          <Image
            src={imageUrl}
            width={122}
            height={122}
            alt={cartItem.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col m-4 gap-4">
          <div>
            <h3
              className="text-sm sm:text-base font-bold dark:text-slate-50 text-gray-800"
              style={{ color: accentColor }}
            >
              {cartItem.title}
            </h3>
            <p className="text-sm font-semibold text-gray-500 dark:text-amber-500 mt-2 flex items-center gap-2">
              <small className="dark:text-amber-500">Golden</small>
              <span
                className="inline-block w-5 h-5 rounded-md"
                style={{ backgroundColor: secondaryColor }}
              ></span>
            </p>
          </div>

          <div className="mt-auto flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleQtyDecrement(cartItem.id)}
              className="flex items-center justify-center w-5 h-5 bg-gray-400 rounded-full"
              style={{ backgroundColor }}
            >
              <Minus className="w-3 fill-white" />
            </button>
            <span className="font-bold text-sm leading-[18px]">{cartItem.qty}</span>
            <button
              type="button"
              onClick={() => handleQtyIncrement(cartItem.id)}
              className="flex items-center justify-center w-5 h-5 bg-gray-800 dark:bg-lime-600 dark:text-slate-50 rounded-full"
            >
              <Plus className="w-3 fill-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="ml-auto flex flex-col">
        <div className="flex items-start gap-4 justify-end">
          <button onClick={() => console.log("Favorite clicked")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-gray-400 hover:fill-pink-600"
              viewBox="0 0 64 64"
            >
              <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
            </svg>
          </button>

          <button onClick={() => handleCartItemDelete(cartItem.id)}>
            <Trash2 className="w-4 h-4 text-gray-400 dark:text-slate-5 hover:text-red-600" />
          </button>
        </div>
        <h3
          className="text-sm sm:text-base font-bold dark:text-slate-50 text-gray-800 mt-auto"
          style={{ color: primaryColor }}
        >
          ${cartItem.salePrice}
        </h3>
      </div>
    </div>
  );
}

 

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

