// "use client";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { ShoppingCart } from "lucide-react";

// export default function FavoriteProducts({products}) {


//   return (
//     <div className="container mx-auto px-4  mt-20">
//       <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
//         المنتجات الاكثر مبيعاء
//       </h2>
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//           >
//          <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//   <Link href={`/products/${product.slug}`} className="w-full h-full">
//     <Image
//       src={product.imageUrl || product.image}
//       alt={product.title || "product image"}
//       width={290}
//       height={174}
//       className="w-full h-60 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
//     />
//     {product.productPrice && (
//       <span className="absolute top-0 left-0 m-2 rounded-full bg-red-600 px-2 text-center text-sm font-medium text-white">
//         {product.productPrice}% OFF
//       </span>
//     )}
//   </Link>
// </div>

//             <div className="p-4">
//               <Link href={`/products/${product.slug}`}>
//                 <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-lime-600 transition-colors">
//                   {product.title}
//                 </h3>
//                 <h3 className="text-sm text-gray-600 dark:text-gray-400 mt-2">
//                 {product.descripti}
//               </h3>
//               </Link>
            
//               <div className="flex items-center justify-between mt-4">
//                 <div>
//                   <p className="text-lg font-bold text-red-600">{product.salePrice} UDR</p>
//                   {product.isWholesale && (
//                     <p className="text-sm line-through text-gray-500 dark:text-gray-400">
//                       {product.isWholesale} RSA
//                     </p>
//                   )}
               
//                 </div>
//                 <button className="flex items-center bg-lime-600 text-white px-4 py-2 rounded-md hover:bg-lime-700 transition">
//                   <ShoppingCart size={16} />
//                   <span className="ml-2">Add to Cart</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
    
//     </div>
//   );
// }
// "use client";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { ShoppingCart } from "lucide-react";
// import { useTheme } from "next-themes";

// export default function FavoriteProducts({ products, customization = {} }) {
//   // إعدادات التخصيص مع قيم افتراضية
//   const primaryColor = customization.primaryColor || "#4CAF50"; 
//   const secondaryColor = customization.secondaryColor || "#2C3E50"; 
//   const accentColor = customization.accentColor || "#FFC107"; 
//   const lightBackground = customization.backgroundColor || "#FFFFFF"; 
//   const darkBackground = customization.darkBackground || "#1E293B"; 
//   const fontFamily = customization.fontFamily || "sans-serif"; 

//   // الحصول على الوضع الحالي (فاتح/داكن)
//   const { theme } = useTheme();
//   const currentBackground = theme === "dark" ? darkBackground : lightBackground;

//   return (
//     <div className="container mx-auto px-4 mt-20" style={{ fontFamily }}>
//       <h2
//         className="text-2xl font-bold text-center mb-8"
//         style={{ color: primaryColor }}
//       >
//         المنتجات الأكثر مبيعًا
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="group border rounded-lg shadow-md hover:shadow-lg transition-shadow"
//             style={{ backgroundColor: currentBackground, borderColor: secondaryColor }}
//           >
//             <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
//               <Link href={`/products/${product.slug}`} className="w-full h-full">
//                 <Image
//                   src={product.imageUrl || product.image}
//                   alt={product.title || "product image"}
//                   width={290}
//                   height={174}
//                   className="w-full h-60 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
//                 />
//                 {product.discountPercentage && (
//                   <span
//                     className="absolute top-0 left-0 m-2 rounded-full px-2 text-center text-sm font-medium text-white"
//                     style={{ backgroundColor: accentColor }}
//                   >
//                     {product.discountPercentage}% OFF
//                   </span>
//                 )}
//               </Link>
//             </div>

//             <div className="p-4">
//               <Link href={`/products/${product.slug}`}>
//                 <h3
//                   className="text-lg font-semibold hover:underline transition-colors"
//                   style={{ color: secondaryColor }}
//                 >
//                   {product.title}
//                 </h3>
//                 <p className="text-sm mt-2" style={{ color: secondaryColor }}>
//                   {product.description}
//                 </p>
//               </Link>

//               <div className="flex items-center justify-between mt-4">
//                 <div>
//                   <p className="text-lg font-bold" style={{ color: accentColor }}>
//                     {product.salePrice} UDR
//                   </p>
//                   {product.originalPrice && (
//                     <p className="text-sm line-through" style={{ color: secondaryColor }}>
//                       {product.originalPrice} UDR
//                     </p>
//                   )}
//                 </div>
//                 <button
//                   className="flex items-center text-white px-4 py-2 rounded-md transition-colors"
//                   style={{ backgroundColor: accentColor }}
//                 >
//                   <ShoppingCart size={16} />
//                   <span className="ml-2">إضافة إلى السلة</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// dakpfakdvfspkvpfkspkvk
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useTheme } from "next-themes";

export default function FavoriteProducts({ products, customization = {} }) {
  // إعدادات التخصيص مع قيم افتراضية
  const primaryColor = customization.primaryColor || "#4CAF50"; 
  const secondaryColor = customization.secondaryColor || "#2C3E50"; 
  const accentColor = customization.accentColor || "#FFC107"; 
  const lightBackground = customization.backgroundColor || "#FFFFFF"; 
  const darkBackground = customization.darkBackground || "#1E293B"; 
  const fontFamily = customization.fontFamily || "sans-serif"; 

  // الحصول على الوضع الحالي (فاتح/داكن)
  const { theme } = useTheme();
  const currentBackground = theme === "dark" ? darkBackground : lightBackground;

  return (
    <div className="container mx-auto px-4 mt-20" style={{ fontFamily }}>
      <h2
        className="text-2xl font-bold text-center mb-8"
        style={{ color: primaryColor }}
      >
        المنتجات الأكثر مبيعًا
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="group border rounded-lg shadow-md hover:shadow-lg transition-shadow"
            style={{ backgroundColor: currentBackground, borderColor: secondaryColor }}
          >
            <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Link href={`/products/${product.slug}`} className="w-full h-full">
                <Image
                  src={product.imageUrl || product.image}
                  alt={product.title || "product image"}
                  width={290}
                  height={174}
                  className="w-full h-60 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
                {product.discountPercentage && (
                  <span
                    className="absolute top-0 left-0 m-2 rounded-full px-2 text-center text-sm font-medium text-white"
                    style={{ backgroundColor: accentColor }}
                  >
                    {product.discountPercentage}% OFF
                  </span>
                )}
              </Link>
            </div>

            <div className="p-4">
              <Link href={`/products/${product.slug}`}>
                <h3
                  className="text-lg font-semibold hover:underline transition-colors"
                  style={{ color: secondaryColor }}
                >
                  {product.title}
                </h3>
                <p className="text-sm mt-2" style={{ color: secondaryColor }}>
                  {product.descripti}
                </p>
              </Link>

              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-lg font-bold" style={{ color: accentColor }}>
                    {product.salePrice} UDR
                  </p>
                  {product.originalPrice && (
                    <p className="text-sm line-through" style={{ color: secondaryColor }}>
                      {product.originalPrice} UDR
                    </p>
                  )}
                </div>
                <button
                  className="flex items-center text-white px-4 py-2 rounded-md shadow-lg transform transition duration-150 hover:shadow-2xl active:translate-y-1 active:shadow-inner"
                  style={{ backgroundColor: primaryColor }}
                >
                  <ShoppingCart size={16} />
                  <span className="ml-2">إضافة إلى السلة</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


{/* <div className="container mx-auto mt-12 px-4">
// {/* Display products */}
// <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
//   Latest Products
// </h2>

// <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//   {products.map((product, index) => (
//     <div
//       key={index}
//       className="group rounded-lg bg-white dark:bg-gray-800 overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
//     >
//       {/* Product image */}
//       <Link href={`/products/${product.slug}`}>
//         <Image
//           src={product.imageUrl}
//           alt={product.title}
//           width={290}
//           height={174}
//           className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
//         />
//       </Link>
//       {/* Product details */}
//       <div className="p-4">
//         <Link href={`/products/${product.slug}`}>
//           <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 hover:text-lime-600 transition-colors">
//             {product.title}
//           </h2>
//         </Link>
//         <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
//           {product.description}
//         </p>
//         <div className="flex items-center justify-between mb-3">
//           {/* Price */}
//           <div>
//             <p className="text-lg font-bold text-red-600">
//               {product.price}
//             </p>
//             {product.oldPrice && (
//               <p className="text-sm line-through text-gray-500 dark:text-gray-400">
//                 {product.oldPrice}
//               </p>
//             )}
//             {product.discount && (
//               <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
//                 Discount {product.discount}
//               </span>
//             )}
//           </div>
//           {/* Add to cart button */}
//           <button className="flex items-center bg-lime-600 text-white px-4 py-2 rounded-md hover:bg-lime-700 transition-colors">
//             <ShoppingCart size={16} />
//             <span className="ml-2">Add to Cart</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>
// </div> */}