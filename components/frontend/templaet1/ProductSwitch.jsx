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
"use client";
import { BaggageClaim } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductSwitch({ product, customization = {} }) {
  const dispatch = useDispatch();
  
  // استخراج إعدادات التخصيص
  const {
    primaryColor = '#4CAF50',
    secondaryColor = '#2C3E50',
    accentColor = '#FFC107',
    backgroundColor = '#FFFFFF',
    fontFamily = 'sans-serif',
    isActive = true
  } = customization;

  const handleAddToCart = () => {
    if (!isActive) return;
    dispatch(addToCart(product));
    toast.success("تمت الإضافة إلى السلة بنجاح!");
  };

  // تأثيرات الحركة
  const cardVariants = {
    hover: { 
      y: -5,
      boxShadow: `0 25px 50px -12px ${primaryColor}20`
    }
  };

  return (
    <motion.div
      className="relative group h-full p-3"
      whileHover="hover"
      initial="rest"
      variants={cardVariants}
      transition={{ duration: 0.3 }}
    >
      <div
        className="h-full flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800"
        style={{ 
          fontFamily,
          border: `1px solid ${primaryColor}20`
        }}
      >
        {/* صورة المنتج */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 50vw"
            quality={80}
          />
          
          {/* شريط الحالة العلوي */}
          <div 
            className="absolute top-2 right-2 flex items-center space-x-2"
            style={{ color: secondaryColor }}
          >
            {product.unit && (
              <span className="px-3 py-1 text-sm font-medium rounded-full backdrop-blur-sm bg-white/80 dark:bg-gray-800/80">
                {product.unit}
              </span>
            )}
            {product.salePrice && (
              <span className="px-3 py-1 text-sm font-bold rounded-full bg-red-500 text-white">
                خصم {Math.round(((product.productPrice - product.salePrice)/product.productPrice)*100)}%
              </span>
            )}
          </div>
        </div>

        {/* محتوى البطاقة */}
        <div className="flex-1 p-4 flex flex-col">
          {/* العنوان والوصف */}
          <a 
            href={`/products/${product.slug}`}
            className="block mb-3 space-y-2"
          >
            <h3 
              className="text-xl font-bold truncate hover:text-primary-600 transition-colors"
              style={{ color: secondaryColor }}
            >
              {product.title}
            </h3>
            <p 
              className="text-sm line-clamp-2 text-gray-600 dark:text-gray-400"
              style={{ color: secondaryColor }}
            >
              {product.descripti}
            </p>
          </a>

          {/* الأسعار */}
          <div className="mt-auto space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <span 
                  className="text-2xl font-bold"
                  style={{ color: primaryColor }}
                >
                  {product.salePrice?.toLocaleString()} ر.س
                </span>
                {product.productPrice && (
                  <del className="text-sm text-gray-400 dark:text-gray-500">
                    {product.productPrice?.toLocaleString()} ر.س
                  </del>
                )}
              </div>
            </div>

            {/* الأزرار */}
            <div className="grid grid-cols-2 gap-3">
              <button
                className="flex items-center justify-center gap-2 p-2 rounded-lg font-medium transition-all
                hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  backgroundColor: secondaryColor,
                  color: backgroundColor
                }}
                disabled={!isActive}
              >
                تبديل المنتج
              </button>
              
              <motion.button
                onClick={handleAddToCart}
                className="flex items-center justify-center gap-2 p-2 rounded-lg font-medium transition-all
                hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  backgroundColor: accentColor,
                  color: secondaryColor
                }}
                disabled={!isActive}
                whileTap={{ scale: 0.95 }}
              >
                <BaggageClaim className="w-5 h-5" />
                <span>إضافة</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

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
