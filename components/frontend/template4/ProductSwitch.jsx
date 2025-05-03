"use client";

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
"use client";

import { BaggageClaim } from "lucide-react";
import React, { useState } from "react";
import { addToCart } from "../../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import chroma from "chroma-js";

export default function ProductSwitch({ product, customization = {} }) {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  // استخراج قيم التخصيص أو استخدام القيم الافتراضية
  const primaryColor = customization?.primaryColor || '#4CAF50'; // اللون الأساسي
  const secondaryColor = customization?.secondaryColor || '#2C3E50'; // اللون الثانوي
  const accentColor = customization?.accentColor || '#FFC107'; // اللون المميز
  const backgroundColor = customization?.backgroundColor || '#FFFFFF'; // لون الخلفية
  const fontFamily = customization?.fontFamily || 'sans-serif'; // نوع الخط
  const isActive = customization?.isActive ?? true; // هل التخصيص مفعل؟                   // حالة التخصيص

  // إعداد متغيرات الألوان باستخدام chroma-js
  const bgColor = chroma(backgroundColor);
  const textColor = bgColor.luminance() > 0.5 ? "#000" : "#fff";
  const gradient = `linear-gradient(45deg, ${primaryColor}, ${chroma(primaryColor).darken(0.2).css()})`;

  // دالة إضافة المنتج إلى عربة التسوق
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Added to cart!", {
      style: {
        background: primaryColor,
        color: textColor,
      },
    });
  };

  return (
    // غلاف مع خاصية perspective لإضفاء تأثير ثلاثي الأبعاد
    <div style={{ perspective: "1200px" }}>
      <div
        className={`relative group  bg-white dark:bg-gray-800  dark:text-gray-100 flex w-full max-w-xs flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105
          bg-clip-padding backdrop-blur-lg m-4 border border-opacity-20 transition-all duration-500 ease-out
          ${bgColor.luminance() > 0.5 ? "border-gray-200" : "border-white/10"}
           bg-white dark:bg-gray-800  dark:text-gray-100 hover:shadow-2xl hover:-translate-y-2 rounded-2xl overflow-hidden`}
        style={{
        
      
          transformStyle: "preserve-3d",
          transition: "transform 0.5s ease-out",
          transform: isHovered ? "rotateY(10deg) rotateX(5deg)" : "rotateY(0deg) rotateX(0deg)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* صورة المنتج مع تأثير البارالاكس */}
        <div className="">
        <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        href={`/products/${product.slug}`}
        aria-label={`View ${product.title} details`}
      >
        <img
          className="object-cover w-full group-hover:scale-110 transition-transform duration-300"
          src={product.imageUrl}
          alt={product.title}
          loading="lazy"
        />
        <span
          className="absolute top-0 left-0 m-2 rounded-full px-2 text-center text-sm font-medium text-white"
          style={{ backgroundColor: accentColor }}
        >
          {product.unit}
        </span>
      </a>
</div>
        {/* محتوى المنتج */}
        <div className="p-6 space-y-4">
          {/* العنوان والوصف */}
          <div className="space-y-2">
            <h3
              className="text-2xl font-extrabold tracking-tight hover:underline decoration-2 cursor-pointer"
              style={{
                background: gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {product.title}
            </h3>
            <p className="text-opacity-80 text-sm line-clamp-2">{product.descripti}</p>
          </div>

          {/* قسم السعر */}
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-3xl font-black" style={{ color: accentColor }}>
                {product.productPrice}$
              </p>
              {product.salePrice && (
                <p className="text-sm line-through opacity-75">{product.salePrice}$</p>
              )}
            </div>

            {/* أزرار الإجراءات */}
            <div className="flex gap-3">
              <button
                className="px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95 shadow-md"
                style={{
                  background: primaryColor,
                  color: textColor,
                }}
              >
                Switch
              </button>

              <button
                onClick={handleAddToCart}
                className="p-3 rounded-full transition-transform hover:scale-110 active:scale-95 shadow-lg flex items-center justify-center"
                style={{
                  background: gradient,
                  color: textColor,
                }}
                aria-label="Add to Cart"
              >
                <BaggageClaim className="w-5 h-5 animate-bounce-horizontal" />
              </button>
            </div>
          </div>
        </div>

        {/* تأثير الإطار عند التحويم */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none border-2 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ borderColor: primaryColor }}
        />
      </div>
    </div>
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
