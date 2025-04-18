

// // "use client"

// // import { useState } from "react"
// // import Image from "next/image"
// // import Link from "next/link"
// // import { Star, Heart, ShoppingCart, ChevronLeft } from "lucide-react"

// // const products = [
// //   {
// //     id: 1,
// //     name: "سماعات بلوتوث لاسلكية",
// //     price: 299,
// //     oldPrice: 399,
// //     rating: 4.5,
// //     image: "/images/hero.webp?height=300&width=300",
// //     category: "electronics",
// //   },
// //   {
// //     id: 2,
// //     name: "حذاء رياضي",
// //     price: 199,
// //     oldPrice: 249,
// //     rating: 4.2,
// //     image: "/images/image-8.jpg?height=300&width=300",
// //     category: "fashion",
// //   },
// //   {
// //     id: 3,
// //     name: "ساعة ذكية",
// //     price: 599,
// //     oldPrice: 799,
// //     rating: 4.8,
// //     image: "/images/image-4.jpg?height=300&width=300",
// //     category: "electronics",
// //   },
// //   {
// //     id: 4,
// //     name: "حقيبة ظهر",
// //     price: 149,
// //     oldPrice: 199,
// //     rating: 4.3,
// //     image: "/images/image-2.jpg?height=300&width=300",
// //     category: "fashion",
// //   },
// //   {
// //     id: 5,
// //     name: "مكبر صوت بلوتوث",
// //     price: 349,
// //     oldPrice: 449,
// //     rating: 4.6,
// //     image: "/images/image-7.jpg?height=300&width=300",
// //     category: "electronics",
// //   },
// //   {
// //     id: 6,
// //     name: "نظارة شمسية",
// //     price: 129,
// //     oldPrice: 179,
// //     rating: 4.1,
// //     image: "/images/image-8.jpg?height=300&width=300",
// //     category: "fashion",
// //   },
// //   {
// //     id: 7,
// //     name: "هاتف ذكي",
// //     price: 1999,
// //     oldPrice: 2499,
// //     rating: 4.9,
// //     image: "/images/image-2.jpg?height=300&width=300",
// //     category: "electronics",
// //   },
// //   {
// //     id: 8,
// //     name: "قميص قطني",
// //     price: 99,
// //     oldPrice: 129,
// //     rating: 4.4,
// //     image: "/images/image-8.jpg?height=300&width=300",
// //     category: "fashion",
// //   },
// // ]

// // export default function FeaturedProducts() {
// //   const [activeCategory, setActiveCategory] = useState("all")
// //   const categories = [
// //     { id: "all", name: "الكل" },
// //     { id: "electronics", name: "الإلكترونيات" },
// //     { id: "fashion", name: "الأزياء" },
// //   ]

// //   const filteredProducts =
// //     activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

// //   return (
// //     <section className="py-12 bg-gray-50 dark:bg-gray-800">
// //       <div className="container mx-auto px-4">
// //         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
// //           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">المنتجات المميزة</h2>
// //           <div className="flex space-x-4 space-x-reverse">
// //             {categories.map((category) => (
// //               <button
// //                 key={category.id}
// //                 onClick={() => setActiveCategory(category.id)}
// //                 className={`px-4 py-2 rounded-full transition-all ${
// //                   activeCategory === category.id
// //                     ? "bg-blue-600 text-white"
// //                     : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
// //                 }`}
// //               >
// //                 {category.name}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //           {filteredProducts.map((product) => (
// //             <div
// //               key={product.id}
// //               className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
// //             >
// //               <div className="relative">
// //                 <Link href={`/product/${product.id}`}>
// //                   <div className="aspect-square relative">
// //                     <Image src={product.image || "/placeholder.svg"}
// //                            loading="lazy"
// //                             alt={product.name} fill className="object-cover" />
// //                   </div>
// //                 </Link>
// //                 <button className="absolute top-2 left-2 p-1.5 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors">
// //                   <Heart className="h-5 w-5" />
// //                 </button>
// //                 {product.oldPrice && (
// //                   <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
// //                     {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% خصم
// //                   </div>
// //                 )}
// //               </div>
// //               <div className="p-4">
// //                 <Link href={`/product/${product.id}`}>
// //                   <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
// //                     {product.name}
// //                   </h3>
// //                 </Link>
// //                 <div className="flex items-center mb-2">
// //                   <div className="flex text-yellow-400">
// //                     {[...Array(5)].map((_, i) => (
// //                       <Star
// //                         key={i}
// //                         className={`h-4 w-4 ${
// //                           i < Math.floor(product.rating) ? "fill-current" : "stroke-current fill-none"
// //                         }`}
// //                       />
// //                     ))}
// //                   </div>
// //                   <span className="text-sm text-gray-500 dark:text-gray-400 mr-1">({product.rating})</span>
// //                 </div>
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <span className="text-lg font-bold text-gray-900 dark:text-white">{product.price} ر.س</span>
// //                     {product.oldPrice && (
// //                       <span className="text-sm text-gray-500 dark:text-gray-400 line-through mr-2">
// //                         {product.oldPrice} ر.س
// //                       </span>
// //                     )}
// //                   </div>
// //                   <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
// //                     <ShoppingCart className="h-5 w-5" />
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="mt-10 text-center">
// //           <Link
// //             href="/products"
// //             className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
// //           >
// //             عرض جميع المنتجات
// //             <ChevronLeft className="h-5 w-5 mr-1" />
// //           </Link>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // // عرض المنتجات
// // "use client"

// // import { useState } from "react"
// // import Image from "next/image"
// // import Link from "next/link"
// // import { Star, Heart, ShoppingCart, ChevronLeft } from "lucide-react"
// // import { motion } from "framer-motion" // استيراد motion من مكتبة framer-motion
// // const products = [
// //   {
// //     id: 1,
// //     name: "سماعات بلوتوث لاسلكية",
// //     price: 299,
// //     oldPrice: 399,
// //     rating: 4.5,
// //     image: "/images/hero.webp?height=300&width=300",
// //     category: "electronics",
// //   },
// //   {
// //     id: 2,
// //     name: "حذاء رياضي",
// //     price: 199,
// //     oldPrice: 249,
// //     rating: 4.2,
// //     image: "/images/image-8.jpg?height=300&width=300",
// //     category: "fashion",
// //   },
// //   {
// //     id: 3,
// //     name: "ساعة ذكية",
// //     price: 599,
// //     oldPrice: 799,
// //     rating: 4.8,
// //     image: "/images/image-4.jpg?height=300&width=300",
// //     category: "electronics",
// //   },
// //   {
// //     id: 4,
// //     name: "حقيبة ظهر",
// //     price: 149,
// //     oldPrice: 199,
// //     rating: 4.3,
// //     image: "/images/image-2.jpg?height=300&width=300",
// //     category: "fashion",
// //   },
// //   {
// //     id: 5,
// //     name: "مكبر صوت بلوتوث",
// //     price: 349,
// //     oldPrice: 449,
// //     rating: 4.6,
// //     image: "/images/image-7.jpg?height=300&width=300",
// //     category: "electronics",
// //   },
// //   {
// //     id: 6,
// //     name: "نظارة شمسية",
// //     price: 129,
// //     oldPrice: 179,
// //     rating: 4.1,
// //     image: "/images/image-8.jpg?height=300&width=300",
// //     category: "fashion",
// //   },
// //   {
// //     id: 7,
// //     name: "هاتف ذكي",
// //     price: 1999,
// //     oldPrice: 2499,
// //     rating: 4.9,
// //     image: "/images/image-2.jpg?height=300&width=300",
// //     category: "electronics",
// //   },
// //   {
// //     id: 8,
// //     name: "قميص قطني",
// //     price: 99,
// //     oldPrice: 129,
// //     rating: 4.4,
// //     image: "/images/image-8.jpg?height=300&width=300",
// //     category: "fashion",
// //   },
// // ]
// // export default function FeaturedProducts() {
// //   const [activeCategory, setActiveCategory] = useState("all")
// //   const categories = [
// //     { id: "all", name: "الكل" },
// //     { id: "electronics", name: "الإلكترونيات" },
// //     { id: "fashion", name: "الأزياء" },
// //   ]

// //   const filteredProducts =
// //     activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

// //   return (
// //     <section className="py-12 bg-gray-50 dark:bg-gray-800">
// //       <div className="container mx-auto px-4">
// //         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
// //           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">المنتجات المميزة</h2>
// //           <div className="flex space-x-4 space-x-reverse">
// //             {categories.map((category) => (
// //               <button
// //                 key={category.id}
// //                 onClick={() => setActiveCategory(category.id)}
// //                 className={`px-4 py-2 rounded-full transition-all ${activeCategory === category.id ? "bg-blue-600 text-white" : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"}`}
// //               >
// //                 {category.name}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //           {filteredProducts.map((product, index) => (
// //             <motion.div
// //               key={product.id}
// //               className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
// //               initial={{ opacity: 0, y: 50 }} // البداية من الأسفل مع الشفافية
// //               animate={{ opacity: 1, y: 0 }} // الانتقال إلى الوضع النهائي
// //               transition={{ delay: index * 0.1, duration: 0.5 }} // إضافة تأخير بسيط
// //             >
// //               <div className="relative">
// //                 <Link href={`/product/${product.id}`}>
// //                   <div className="aspect-square relative">
// //                     <Image src={product.image || "/placeholder.svg"} loading="lazy" alt={product.name} fill className="object-cover" />
// //                   </div>
// //                 </Link>
// //                 <button className="absolute top-2 left-2 p-1.5 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors">
// //                   <Heart className="h-5 w-5" />
// //                 </button>
// //                 {product.oldPrice && (
// //                   <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
// //                     {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% خصم
// //                   </div>
// //                 )}
// //               </div>
// //               <div className="p-4">
// //                 <Link href={`/product/${product.id}`}>
// //                   <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
// //                     {product.name}
// //                   </h3>
// //                 </Link>
// //                 <div className="flex items-center mb-2">
// //                   <div className="flex text-yellow-400">
// //                     {[...Array(5)].map((_, i) => (
// //                       <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-current" : "stroke-current fill-none"}`} />
// //                     ))}
// //                   </div>
// //                   <span className="text-sm text-gray-500 dark:text-gray-400 mr-1">({product.rating})</span>
// //                 </div>
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <span className="text-lg font-bold text-gray-900 dark:text-white">{product.price} ر.س</span>
// //                     {product.oldPrice && (
// //                       <span className="text-sm text-gray-500 dark:text-gray-400 line-through mr-2">
// //                         {product.oldPrice} ر.س
// //                       </span>
// //                     )}
// //                   </div>
// //                   <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
// //                     <ShoppingCart className="h-5 w-5" />
// //                   </button>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>

// //         <div className="mt-10 text-center">
// //           <Link
// //             href="/products"
// //             className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
// //           >
// //             عرض جميع المنتجات
// //             <ChevronLeft className="h-5 w-5 mr-1" />
// //           </Link>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }
// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { Star, Heart, ShoppingCart, ChevronLeft } from "lucide-react"
// import { motion } from "framer-motion" // استيراد motion من مكتبة framer-motion

// const products = [
//   {
//     id: 1,
//     name: "سماعات بلوتوث لاسلكية",
//     price: 299,
//     oldPrice: 399,
//     rating: 4.5,
//     image: "/images/hero.webp?height=300&width=300",
//     category: "electronics",
//   },
//   {
//     id: 2,
//     name: "حذاء رياضي",
//     price: 199,
//     oldPrice: 249,
//     rating: 4.2,
//     image: "/images/image-8.jpg?height=300&width=300",
//     category: "fashion",
//   },
//   {
//     id: 3,
//     name: "ساعة ذكية",
//     price: 599,
//     oldPrice: 799,
//     rating: 4.8,
//     image: "/images/image-4.jpg?height=300&width=300",
//     category: "electronics",
//   },
//   {
//     id: 4,
//     name: "حقيبة ظهر",
//     price: 149,
//     oldPrice: 199,
//     rating: 4.3,
//     image: "/images/image-2.jpg?height=300&width=300",
//     category: "fashion",
//   },
//   {
//     id: 5,
//     name: "مكبر صوت بلوتوث",
//     price: 349,
//     oldPrice: 449,
//     rating: 4.6,
//     image: "/images/image-7.jpg?height=300&width=300",
//     category: "electronics",
//   },
//   {
//     id: 6,
//     name: "نظارة شمسية",
//     price: 129,
//     oldPrice: 179,
//     rating: 4.1,
//     image: "/images/image-8.jpg?height=300&width=300",
//     category: "fashion",
//   },
//   {
//     id: 7,
//     name: "هاتف ذكي",
//     price: 1999,
//     oldPrice: 2499,
//     rating: 4.9,
//     image: "/images/image-2.jpg?height=300&width=300",
//     category: "electronics",
//   },
//   {
//     id: 8,
//     name: "قميص قطني",
//     price: 99,
//     oldPrice: 129,
//     rating: 4.4,
//     image: "/images/image-8.jpg?height=300&width=300",
//     category: "fashion",
//   },
// ]

// export default function FeaturedProducts() {
//   const [activeCategory, setActiveCategory] = useState("all")
//   const categories = [
//     { id: "all", name: "الكل" },
//     { id: "electronics", name: "الإلكترونيات" },
//     { id: "fashion", name: "الأزياء" },
//   ]

//   const filteredProducts =
//     activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

//   return (
//     <section className="py-12 bg-gray-50 dark:bg-gray-800">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">المنتجات المميزة</h2>
//           <div className="flex space-x-4 space-x-reverse">
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`px-4 py-2 rounded-full transition-all ${activeCategory === category.id ? "bg-blue-600 text-white" : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"}`}
//               >
//                 {category.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredProducts.map((product, index) => (
//             <motion.div
//               key={product.id}
//               className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform duration-300"
//               initial={{ opacity: 0, y: 50 }} // البداية من الأسفل مع الشفافية
//               whileInView={{
//                 opacity: 1, // ظهور العنصر بالكامل عند التمرير
//                 y: 0, // الانتقال إلى الوضع النهائي
//               }}
//               transition={{
//                 delay: index * 0.1, // إضافة تأخير بسيط لكل عنصر لجعل الحركة متتالية
//                 duration: 0.5, // مدة الحركة
//               }}
//               viewport={{ once: true }} // التأكد من أن الحركة تحدث مرة واحدة فقط عند التمرير
//             >
//               <div className="relative">
//                 <Link href={`/product/${product.id}`}>
//                   <div className="aspect-square relative">
//                     <Image src={product.image || "/placeholder.svg"} loading="lazy" alt={product.name} fill className="object-cover" />
//                   </div>
//                 </Link>
//                 <button className="absolute top-2 left-2 p-1.5 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors">
//                   <Heart className="h-5 w-5" />
//                 </button>
//                 {product.oldPrice && (
//                   <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
//                     {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% خصم
//                   </div>
//                 )}
//               </div>
//               <div className="p-4">
//                 <Link href={`/product/${product.id}`}>
//                   <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
//                     {product.name}
//                   </h3>
//                 </Link>
//                 <div className="flex items-center mb-2">
//                   <div className="flex text-yellow-400">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-current" : "stroke-current fill-none"}`} />
//                     ))}
//                   </div>
//                   <span className="text-sm text-gray-500 dark:text-gray-400 mr-1">({product.rating})</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <span className="text-lg font-bold text-gray-900 dark:text-white">{product.price} ر.س</span>
//                     {product.oldPrice && (
//                       <span className="text-sm text-gray-500 dark:text-gray-400 line-through mr-2">
//                         {product.oldPrice} ر.س
//                       </span>
//                     )}
//                   </div>
//                   <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
//                     <ShoppingCart className="h-5 w-5" />
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-10 text-center">
//           <Link
//             href="/products"
//             className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
//           >
//             عرض جميع المنتجات
//             <ChevronLeft className="h-5 w-5 mr-1" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }

// "use client";

// import React, { useState, useMemo, useCallback } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ShoppingCart, Heart } from "lucide-react";
// import { motion } from "framer-motion";
// import { useTheme } from "next-themes";
// import { toast } from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../../redux/slices/cartSlice";

// export default function FeaturedProducts({
//   products,
//   customization = {},
//   categories = [],
//   slugDomain,
// }) {
//   const dispatch = useDispatch();

//   // إعدادات التخصيص مع قيم افتراضية
//   const primaryColor = customization?.primaryColor || "#4CAF50";
//   const secondaryColor = customization?.secondaryColor || "#2C3E50";
//   const accentColor = customization?.accentColor || "#FFC107";
//   const lightBackground = customization?.backgroundColor || "#FFFFFF";
//   const darkBackground = customization?.darkBackground || "#1E293B";
//   const fontFamily = customization?.fontFamily || "sans-serif";

//   // الحصول على وضع الثيم (فاتح أو داكن)
//   const { theme } = useTheme();
//   const currentBackground = theme === "dark" ? darkBackground : lightBackground;

//   // الحالة لتحديد القسم النشط
//   const [activeCategory, setActiveCategory] = useState("all");

//   // تجميع المنتجات حسب القسم لتقليل عمليات التصفية في كل إعادة رسم
//   const groupedProducts = useMemo(() => {
//     return categories.reduce((acc, category) => {
//       acc[category.id] = products.filter(
//         (product) => product.categoryId === category.id
//       );
//       return acc;
//     }, {});
//   }, [products, categories]);

//   // إذا كان القسم "all" فسنستخدم جميع المجموعات، وإلا فنعرض فقط مجموعة القسم النشط
//   const displayedGroups = useMemo(() => {
//     if (activeCategory === "all") {
//       return [{ category: { id: "all", name: "الكل" }, products }];
//     }
//     const cat = categories.find((c) => c.id === activeCategory);
//     return cat ? [{ category: cat, products: groupedProducts[cat.id] || [] }] : [];
//   }, [activeCategory, categories, groupedProducts]);

//   // دالة إضافة المنتج للسلة مع تحسين استخدام useCallback لتجنب إعادة تعريف الدالة في كل إعادة رسم
//   const handleAddToCart = useCallback((event, product) => {
//     event.stopPropagation();
//     const productCard = event.currentTarget.closest(".group");
//     if (!productCard) {
//       dispatch(addToCart(product));
//       toast.success("تم إضافة المنتج بنجاح!");
//       return;
//     }
//     const imageElement = productCard.querySelector("img");
//     if (!imageElement) {
//       dispatch(addToCart(product));
//       toast.success("تم إضافة المنتج بنجاح!");
//       return;
//     }
//     const cartIcon = document.getElementById("navbar-cart");
//     if (!cartIcon) {
//       dispatch(addToCart(product));
//       toast.success("تم إضافة المنتج بنجاح!");
//       return;
//     }
//     const imageRect = imageElement.getBoundingClientRect();
//     const cartRect = cartIcon.getBoundingClientRect();
//     const flyingImage = imageElement.cloneNode(true);
//     Object.assign(flyingImage.style, {
//       position: "fixed",
//       top: `${imageRect.top}px`,
//       left: `${imageRect.left}px`,
//       width: `${imageRect.width}px`,
//       height: `${imageRect.height}px`,
//       transition: "all 0.8s ease-in-out",
//       zIndex: "9999",
//       opacity: "1",
//     });
//     document.body.appendChild(flyingImage);
//     requestAnimationFrame(() => {
//       flyingImage.style.top = `${cartRect.top + cartRect.height / 2}px`;
//       flyingImage.style.left = `${cartRect.left + cartRect.width / 2}px`;
//       flyingImage.style.width = "0px";
//       flyingImage.style.height = "0px";
//       flyingImage.style.opacity = "0";
//     });
//     flyingImage.addEventListener("transitionend", () => {
//       flyingImage.remove();
//       dispatch(addToCart(product));
//       toast.success("تمت الإضافة إلى السلة!");
//     });
//   }, [dispatch]);

//   return (
//     <section
//       className=" py-12 font-arabic"
//       // style={{ backgroundColor: currentBackground, fontFamily }}
//     >
//       <div className=" mx-auto px-4">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
//           <h2
//             className="text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0"
//             style={{ color: primaryColor }}
//           >
//             المنتجات المميزة
//           </h2>
//           {/* أزرار الفلترة */}
//           <div className="flex space-x-4 space-x-reverse">
//             <button
//               onClick={() => setActiveCategory("all")}
//               className={`px-4 py-2 rounded-full transition-all ${
//                 activeCategory === "all"
//                   ? "bg-blue-600 text-white"
//                   : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
//               }`}
//             >
//               الكل
//             </button>
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`px-4 py-2 rounded-full transition-all ${
//                   activeCategory === category.id
//                     ? "bg-blue-600 text-white"
//                     : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
//                 }`}
//               >
//                 {category.title}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* عرض الأقسام والمنتجات الخاصة بها */}
//         {displayedGroups.map(({ category, products: catProducts }) => (
//           <div key={category.id} className="mb-12">
//             <h3
//               className="text-2xl font-semibold mb-4"
//               style={{ color: secondaryColor }}
//             >
//               {category.name}
//             </h3>
//             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {catProducts.map((product, index) => (
//                 <motion.div
//                   key={product.id}
//                   className="group bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform duration-300"
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1, duration: 0.5 }}
//                   viewport={{ once: true }}
//                 >
//                   <div className="relative">
//                     <Link href={`${slugDomain}/products/${product.slug}`}>
//                       <div className="aspect-square relative">
//                         <Image
//                           src={product.imageUrl || "/placeholder.jpg"}
//                           loading="lazy"
//                           alt={product.title}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>
//                     </Link>
//                     <button
//                       className="absolute top-2 left-2 p-1.5 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
//                       onClick={(e) => e.stopPropagation()}
//                       aria-label="مفضلة"
//                     >
//                       <Heart className="h-5 w-5" />
//                     </button>
//                     {product.salePrice &&
//                       product.productPrice > product.salePrice && (
//                         <div
//                           className="absolute top-2 right-2"
//                           style={{
//                             backgroundColor: primaryColor,
//                             color: "#fff",
//                             padding: "4px 8px",
//                             borderRadius: "5px",
//                             fontWeight: "bold",
//                           }}
//                         >
//                           {Math.round(
//                             ((product.productPrice - product.salePrice) /
//                               product.productPrice) *
//                               100
//                           )}
//                           % خصم
//                         </div>
//                       )}
//                   </div>
//                   <div className="p-4">
//                     <Link href={`${slugDomain}/products/${product.slug}`}>
//                       <h3
//                         className="text-lg font-medium mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                         style={{ color: secondaryColor }}
//                       >
//                         {product.title}
//                       </h3>
//                     </Link>
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <span
//                           className="text-lg font-bold"
//                           style={{ color: accentColor }}
//                         >
//                           {product.salePrice || product.productPrice} ر.س
//                         </span>
//                         {product.salePrice && (
//                           <span className="text-sm text-gray-500 dark:text-gray-400 line-through mr-2">
//                             {product.productPrice} ر.س
//                           </span>
//                         )}
//                       </div>
//                       <button
//                         onClick={(e) => handleAddToCart(e, product)}
//                         className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center"
//                         style={{
//                           background: primaryColor,
//                           color: accentColor,
//                         }}
//                         aria-label="أضف إلى السلة"
//                       >
//                         <ShoppingCart className="w-6 h-6 animate-bounce-horizontal" />
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// "use client";

// import React, { useState, useMemo, useCallback } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ShoppingCart, Heart } from "lucide-react";
// import { motion } from "framer-motion";
// import { useTheme } from "next-themes";
// import { toast } from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../../redux/slices/cartSlice";

// export default function FeaturedProducts({
//   products,
//   customization = {},
//   categories = [],
//   slugDomain,
// }) {
//   const dispatch = useDispatch();

//   // إعدادات التخصيص مع قيم افتراضية
  // const primaryColor = customization?.primaryColor || "#4CAF50";
  // const secondaryColor = customization?.secondaryColor || "#2C3E50";
  // const accentColor = customization?.accentColor || "#FFC107";
  // const lightBackground = customization?.backgroundColor || "#FFFFFF";
  // const darkBackground = customization?.darkBackground || "#1E293B";
  // const fontFamily = customization?.fontFamily || "sans-serif";

//   // الحصول على وضع الثيم (فاتح أو داكن)
//   const { theme } = useTheme();
//   const currentBackground = theme === "dark" ? darkBackground : lightBackground;

//   // الحالة لتحديد القسم النشط
//   const [activeCategory, setActiveCategory] = useState("all");

//   // تجميع المنتجات حسب القسم لتقليل عمليات التصفية في كل إعادة رسم
//   const groupedProducts = useMemo(() => {
//     return categories.reduce((acc, category) => {
//       acc[category.id] = products.filter(
//         (product) => product.categoryId === category.id
//       );
//       return acc;
//     }, {});
//   }, [products, categories]);

//   // إذا كان القسم "all" فسنستخدم جميع المجموعات، وإلا فنعرض فقط مجموعة القسم النشط
//   const displayedGroups = useMemo(() => {
//     if (activeCategory === "all") {
//       return [{ category: { id: "all", name: "الكل" }, products }];
//     }
//     const cat = categories.find((c) => c.id === activeCategory);
//     return cat ? [{ category: cat, products: groupedProducts[cat.id] || [] }] : [];
//   }, [activeCategory, categories, groupedProducts]);

//   // دالة إضافة المنتج للسلة مع تحسين استخدام useCallback لتجنب إعادة تعريف الدالة في كل إعادة رسم
//   const handleAddToCart = useCallback((event, product) => {
//     event.stopPropagation();
//     const productCard = event.currentTarget.closest(".group");
//     if (!productCard) {
//       dispatch(addToCart(product));
//       toast.success("تم إضافة المنتج بنجاح!");
//       return;
//     }
//     const imageElement = productCard.querySelector("img");
//     if (!imageElement) {
//       dispatch(addToCart(product));
//       toast.success("تم إضافة المنتج بنجاح!");
//       return;
//     }
//     const cartIcon = document.getElementById("navbar-cart");
//     if (!cartIcon) {
//       dispatch(addToCart(product));
//       toast.success("تم إضافة المنتج بنجاح!");
//       return;
//     }
//     const imageRect = imageElement.getBoundingClientRect();
//     const cartRect = cartIcon.getBoundingClientRect();
//     const flyingImage = imageElement.cloneNode(true);
//     Object.assign(flyingImage.style, {
//       position: "fixed",
//       top: `${imageRect.top}px`,
//       left: `${imageRect.left}px`,
//       width: `${imageRect.width}px`,
//       height: `${imageRect.height}px`,
//       transition: "all 0.8s ease-in-out",
//       zIndex: "9999",
//       opacity: "1",
//     });
//     document.body.appendChild(flyingImage);
//     requestAnimationFrame(() => {
//       flyingImage.style.top = `${cartRect.top + cartRect.height / 2}px`;
//       flyingImage.style.left = `${cartRect.left + cartRect.width / 2}px`;
//       flyingImage.style.width = "0px";
//       flyingImage.style.height = "0px";
//       flyingImage.style.opacity = "0";
//     });
//     flyingImage.addEventListener("transitionend", () => {
//       flyingImage.remove();
//       dispatch(addToCart(product));
//       toast.success("تمت الإضافة إلى السلة!");
//     });
//   }, [dispatch]);

//   return (
//     <section
//       className=" py-12 font-arabic"
//       // style={{ backgroundColor: currentBackground, fontFamily }}
//     >
//       <div className=" mx-auto px-4">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
//           <h2
//             className="text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0"
//             style={{ color: primaryColor }}
//           >
//             المنتجات المميزة
//           </h2>
//           {/* أزرار الفلترة */}
//           <div className="flex space-x-4 space-x-reverse">
//             <button
//               onClick={() => setActiveCategory("all")}
//               className={`px-4 py-2 rounded-full transition-all ${
//                 activeCategory === "all"
//                   ? "bg-blue-600 text-white"
//                   : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
//               }`}
//             >
//               الكل
//             </button>
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`px-4 py-2 rounded-full transition-all ${
//                   activeCategory === category.id
//                     ? "bg-blue-600 text-white"
//                     : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
//                 }`}
//               >
//                 {category.title}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* عرض الأقسام والمنتجات الخاصة بها */}
//         {displayedGroups.map(({ category, products: catProducts }) => (
//           <div key={category.id} className="mb-12">
//             <h3
//               className="text-2xl font-semibold mb-4"
//               style={{ color: secondaryColor }}
//             >
//               {category.name}
//             </h3>
//             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {catProducts.map((product, index) => (
//                 <motion.div
//                   key={product.id}
//                   className="group bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform duration-300"
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1, duration: 0.5 }}
//                   viewport={{ once: true }}
//                 >
//                   <div className="relative">
//                     <Link href={`${slugDomain}/products/${product.slug}`}>
//                       <div className="aspect-square relative">
//                         <Image
//                           src={product.imageUrl || "/placeholder.jpg"}
//                           loading="lazy"
//                           alt={product.title}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>
//                     </Link>
//                     <button
//                       className="absolute top-2 left-2 p-1.5 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
//                       onClick={(e) => e.stopPropagation()}
//                       aria-label="مفضلة"
//                     >
//                       <Heart className="h-5 w-5" />
//                     </button>
//                     {product.salePrice &&
//                       product.productPrice > product.salePrice && (
//                         <div
//                           className="absolute top-2 right-2"
//                           style={{
//                             backgroundColor: primaryColor,
//                             color: "#fff",
//                             padding: "4px 8px",
//                             borderRadius: "5px",
//                             fontWeight: "bold",
//                           }}
//                         >
//                           {Math.round(
//                             ((product.productPrice - product.salePrice) /
//                               product.productPrice) *
//                               100
//                           )}
//                           % خصم
//                         </div>
//                       )}
//                   </div>
//                   <div className="p-4">
//                     <Link href={`${slugDomain}/products/${product.slug}`}>
//                       <h3
//                         className="text-lg font-medium mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//                         style={{ color: secondaryColor }}
//                       >
//                         {product.title}
//                       </h3>
//                     </Link>
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <span
//                           className="text-lg font-bold"
//                           style={{ color: accentColor }}
//                         >
//                           {product.salePrice || product.productPrice} ر.س
//                         </span>
//                         {product.salePrice && (
//                           <span className="text-sm text-gray-500 dark:text-gray-400 line-through mr-2">
//                             {product.productPrice} ر.س
//                           </span>
//                         )}
//                       </div>
//                       <button
//                         onClick={(e) => handleAddToCart(e, product)}
//                         className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center"
//                         style={{
//                           background: primaryColor,
//                           color: accentColor,
//                         }}
//                         aria-label="أضف إلى السلة"
//                       >
//                         <ShoppingCart className="w-6 h-6 animate-bounce-horizontal" />
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// "use client";

// import React, { useState, useMemo, useCallback } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ShoppingCart, Heart } from "lucide-react";
// import { motion } from "framer-motion";
// import { useTheme } from "next-themes";
// import { toast } from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../../redux/slices/cartSlice";

// export default function FeaturedProducts({
//   products,
//   customization = {},
//   categories = [],
//   slugDomain,
// }) {
//   const dispatch = useDispatch();

//   // إعدادات التخصيص مع قيم افتراضية
//   const primaryColor = customization?.primaryColor || "#4CAF50";
//   const secondaryColor = customization?.secondaryColor || "#2C3E50";
//   const accentColor = customization?.accentColor || "#FFC107";
//   const lightBackground = customization?.backgroundColor || "#FFFFFF";
//   const darkBackground = customization?.darkBackground || "#1E293B";
//   const fontFamily = customization?.fontFamily || "sans-serif";


//   const { theme } = useTheme();
//   const currentBackground = theme === "dark" ? darkBackground : lightBackground;

//   // الحالة لتحديد القسم النشط
//   const [activeCategory, setActiveCategory] = useState("all");

//   // تجميع المنتجات مع memoization
//   const { groupedProducts, displayedGroups } = useMemo(() => {
//     const grouped = categories.reduce((acc, category) => {
//       acc[category.id] = products.filter(p => p.categoryId === category.id);
//       return acc;
//     }, {});

//     const groups = activeCategory === "all" 
//       ? [{ category: { id: "all", name: "الكل" }, products }]
//       : (categories.find(c => c.id === activeCategory) 
//           ? [{ 
//               category: categories.find(c => c.id === activeCategory), 
//               products: grouped[activeCategory] || [] 
//             }] 
//           : []);

//     return { groupedProducts: grouped, displayedGroups: groups };
//   }, [products, categories, activeCategory]);

//   // دالة إضافة للسلة مع تحسينات الأداء
//   const handleAddToCart = useCallback((event, product) => {
//     event.stopPropagation();
//     const productCard = event.currentTarget.closest('.product-card');
    
//     // إنشاء صورة طائرة مع تحسينات الأداء
//     const createFlyingImage = () => {
//       const imageElement = productCard?.querySelector('img');
//       const cartIcon = document.getElementById("navbar-cart");
      
//       if (!imageElement || !cartIcon) return;

//       const imageRect = imageElement.getBoundingClientRect();
//       const cartRect = cartIcon.getBoundingClientRect();
      
//       const flyingImage = new Image();
//       flyingImage.src = imageElement.src;
//       flyingImage.className = 'flying-image';
      
//       // إضافة الأنميشن
//       flyingImage.animate([
//         {
//           transform: `translate(${imageRect.left}px, ${imageRect.top}px)`,
//           opacity: 1,
//           width: `${imageRect.width}px`,
//           height: `${imageRect.height}px`
//         },
//         {
//           transform: `translate(${cartRect.left + cartRect.width/2}px, ${cartRect.top + cartRect.height/2}px)`,
//           opacity: 0,
//           width: '0px',
//           height: '0px'
//         }
//       ], {
//         duration: 800,
//         easing: 'ease-in-out'
//       }).onfinish = () => flyingImage.remove();

//       document.body.appendChild(flyingImage);
//     };

//     createFlyingImage();
//     dispatch(addToCart(product));
//     toast.success("تمت الإضافة إلى السلة!");
//   }, [dispatch]);

//   return (
//     <section 
//       className="py-12 font-arabic px-4 lg:px-8"
//       style={{ 

//         fontFamily,
//         direction: 'rtl'
//       }}
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-8">
//           <h2
//             className="text-2xl md:text-3xl font-bold text-center md:text-right"
//             style={{ color: primaryColor }}
//           >
//             المنتجات المميزة
//           </h2>

//           {/* Filter Buttons with Scroll */}
//           <div className="overflow-x-auto scrollbar-hide">
//   <div className="flex gap-3 w-max px-4">
//     <button
//       onClick={() => setActiveCategory("all")}
//       className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${
//         activeCategory === "all"
//           ? "bg-blue-600 text-white shadow-md"
//           : "bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
//       }`}
//       style={{
//         minWidth: '80px',
//       }}
//     >
//       الكل
//     </button>
//     {categories.map((category) => (
//       <button
//         key={category.id}
//         onClick={() => setActiveCategory(category.id)}
//         className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${
//           activeCategory === category.id
//             ? "bg-blue-600 text-white shadow-md"
//             : "bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
//         }`}
//         style={{
//           minWidth: '100px',
//         }}
//       >
//         {category.title}
//       </button>
//     ))}
//   </div>
// </div>

//         </div>

//         {/* Products Grid */}
//         {displayedGroups.map(({ category, products: catProducts }) => (
//           <div key={category.id} className="mb-12">
//             <h3 
//               className="text-xl md:text-2xl font-semibold mb-6 text-center md:text-right"
//               style={{ color: secondaryColor }}
//             >
//               {category.name}
//             </h3>
            
//             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//               {catProducts.map((product, index) => (
//                 <motion.div
//                   key={product.id}
//                   className="product-card group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ 
//                     delay: index * 0.05, 
//                     duration: 0.3,
//                     type: "spring",
//                     stiffness: 100
//                   }}
//                 >
//                   {/* Product Image */}
//                   <Link 
//                     href={`${slugDomain}/products/${product.slug}`}
//                     className="block relative aspect-square"
//                   >
//                     <Image
//                       src={product.imageUrl || '/placeholder.jpg'}
//                       alt={product.title}
//                       fill
//                       sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
//                       className="object-cover transition-transform duration-300 group-hover:scale-105"
//                       loading={index < 4 ? "eager" : "lazy"}
//                     />
//                   </Link>

//                   {/* Product Badges */}
//                   <div className="absolute top-3 left-3 flex gap-2">
//                     <button
//                       className="p-2 rounded-full bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm hover:text-red-500 transition-colors"
//                       aria-label="Add to favorites"
//                     >
//                       <Heart className="w-5 h-5" />
//                     </button>
                    
//                     {product.salePrice && (
//                       <div 
//                         className="px-3 py-1 rounded-lg bg-red-500 text-white text-sm font-bold"
//                         style={{ backgroundColor: primaryColor }}
//                       >
//                         {Math.round(
//                           ((product.productPrice - product.salePrice) / 
//                           product.productPrice) * 100
//                         )}% خصم
//                       </div>
//                     )}
//                   </div>

//                   {/* Product Details */}
//                   <div className="p-4 space-y-3">
//                     <Link href={`${slugDomain}/products/${product.slug}`}>
//                       <h3 className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
//                         {product.title}
//                       </h3>
//                     </Link>

//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <span 
//                           className="text-lg font-bold"
//                           style={{ color: accentColor }}
//                         >
//                           {product.salePrice || product.productPrice} ر.س
//                         </span>
//                         {product.salePrice && (
//                           <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
//                             {product.productPrice} ر.س
//                           </span>
//                         )}
//                       </div>

//                       <button
//                         onClick={(e) => handleAddToCart(e, product)}
//                         className="p-2 rounded-full hover:scale-110 transition-transform"
//                         style={{
//                           backgroundColor: primaryColor,
//                           color: lightBackground
//                         }}
//                         aria-label="Add to cart"
//                       >
//                         <ShoppingCart className="w-5 h-5" />
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         ))}

//         {/* Empty State */}
//         {displayedGroups.every(g => g.products.length === 0) && (
//           <div className="text-center py-12 text-gray-500">
//             لا توجد منتجات متاحة حالياً
//           </div>
//         )}
//       </div>

//       <style jsx global>{`
//         .flying-image {
//           position: fixed;
//           z-index: 9999;
//           pointer-events: none;
//           border-radius: 0.5rem;
//           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
//         }
        
//         @media (max-width: 640px) {
//           .scrollbar-hide {
//             -ms-overflow-style: none;
//             scrollbar-width: none;
            
//             &::-webkit-scrollbar {
//               display: none;
//             }
//           }
//         }
//       `}</style>
//     </section>
//   );
// }
"use client";

import React, { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "next-themes";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlice";

export default function FeaturedProducts({
  products,
  customization = {},
  categories = [],
  slugDomain,
}) {
  const dispatch = useDispatch();

  // إعدادات التخصيص مع قيم افتراضية
  const primaryColor = customization?.primaryColor || "#4CAF50";
  const secondaryColor = customization?.secondaryColor || "#2C3E50";
  const accentColor = customization?.accentColor || "#FFC107";
  const lightBackground = customization?.backgroundColor || "#FFFFFF";
  const darkBackground = customization?.darkBackground || "#1E293B";
  const fontFamily = customization?.fontFamily || "sans-serif";

  const { theme } = useTheme();
  const currentBackground = theme === "dark" ? darkBackground : lightBackground;

  // الحالة لتحديد القسم النشط
  const [activeCategory, setActiveCategory] = useState("all");

  // تجميع المنتجات مع memoization
  const { groupedProducts, displayedGroups } = useMemo(() => {
    const grouped = categories.reduce((acc, category) => {
      acc[category.id] = products.filter(p => p.categoryId === category.id);
      return acc;
    }, {});

    const groups = activeCategory === "all" 
      ? [{ category: { id: "all", name: "الكل" }, products }]
      : (categories.find(c => c.id === activeCategory) 
          ? [{ 
              category: categories.find(c => c.id === activeCategory), 
              products: grouped[activeCategory] || [] 
            }] 
          : []);

    return { groupedProducts: grouped, displayedGroups: groups };
  }, [products, categories, activeCategory]);

  // دالة إضافة للسلة مع تحسينات الأداء
  const handleAddToCart = useCallback((event, product) => {
    event.stopPropagation();
    const productCard = event.currentTarget.closest('.product-card');
    
    // إنشاء صورة طائرة مع تحسينات الأداء
    const createFlyingImage = () => {
      const imageElement = productCard?.querySelector('img');
      const cartIcon = document.getElementById("navbar-cart");
      
      if (!imageElement || !cartIcon) return;

      const imageRect = imageElement.getBoundingClientRect();
      const cartRect = cartIcon.getBoundingClientRect();
      
      const flyingImage = new Image();
      flyingImage.src = imageElement.src;
      flyingImage.className = 'flying-image';
      
      // إضافة الأنميشن
      flyingImage.animate([
        {
          transform: `translate(${imageRect.left}px, ${imageRect.top}px)`,
          opacity: 1,
          width: `${imageRect.width}px`,
          height: `${imageRect.height}px`
        },
        {
          transform: `translate(${cartRect.left + cartRect.width/2}px, ${cartRect.top + cartRect.height/2}px)`,
          opacity: 0,
          width: '0px',
          height: '0px'
        }
      ], {
        duration: 800,
        easing: 'ease-in-out'
      }).onfinish = () => flyingImage.remove();

      document.body.appendChild(flyingImage);
    };

    createFlyingImage();
    dispatch(addToCart(product));
    toast.success("تمت الإضافة إلى السلة!");
  }, [dispatch]);

  return (
    <section 
      className="py-12 font-arabic px-4 lg:px-8"
      style={{ 
        fontFamily,
        direction: 'rtl'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-8">
          <h2
            className="text-2xl md:text-3xl font-bold text-center md:text-right"
            style={{ color: primaryColor }}
          >
            المنتجات المميزة
          </h2>

          {/* Filter Buttons with Scroll */}
          <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 w-max px-4">
  <button
    onClick={() => setActiveCategory("all")}
    className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${
      activeCategory === "all"
        ? "text-white shadow-md"
        : "bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
    }`}
    style={{
      minWidth: '80px',
      backgroundColor: activeCategory === "all" ? primaryColor : undefined,
    }}
  >
    الكل
  </button>

  {categories.map((category) => (
    <button
      key={category.id}
      onClick={() => setActiveCategory(category.id)}
      className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors ${
        activeCategory === category.id
          ? "text-white shadow-md"
          : "bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
      }`}
      style={{
        minWidth: '100px',
        backgroundColor: activeCategory === category.id ? primaryColor : undefined,
      }}
    >
      {category.title}
    </button>
  ))}
</div>

          </div>
        </div>

        {/* Products Grid */}
        {displayedGroups.map(({ category, products: catProducts }) => (
          <div key={category.id} className="mb-12">
            <h3 
              className="text-xl md:text-2xl font-semibold mb-6 text-center md:text-right"
              style={{ color: secondaryColor }}
            >
              {category.name}
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {catProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="product-card group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  {/* Product Image */}
                  <Link 
                    href={`${slugDomain}/products/${product.slug}`}
                    className="block relative aspect-square"
                  >
                    <Image
                      src={product.imageUrl || '/placeholder.jpg'}
                      alt={product.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      loading={index < 4 ? "eager" : "lazy"}
                    />
                  </Link>

                  {/* Product Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <button
                      className="p-2 rounded-full bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm hover:text-red-500 transition-colors"
                      aria-label="Add to favorites"
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                    
                    {product.salePrice && (
                      <div 
                        className="px-3 py-1 rounded-lg bg-red-500 text-white text-sm font-bold"
                        style={{ backgroundColor: primaryColor }}
                      >
                        {Math.round(
                          ((product.productPrice - product.salePrice) / 
                          product.productPrice) * 100
                        )}% خصم
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="p-4 space-y-3">
                    <Link href={`${slugDomain}/products/${product.slug}`}>
                      <h3 className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
                        {product.title}
                      </h3>
                    </Link>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span 
                          className="text-lg font-bold"
                          style={{ color: accentColor }}
                        >
                          {product.salePrice || product.productPrice} ر.س
                        </span>
                        {product.salePrice && (
                          <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                            {product.productPrice} ر.س
                          </span>
                        )}
                      </div>

                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="p-2 rounded-full hover:scale-110 transition-transform"
                        style={{
                          backgroundColor: primaryColor,
                          color: lightBackground
                        }}
                        aria-label="Add to cart"
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Empty State */}
        {displayedGroups.every(g => g.products.length === 0) && (
          <div className="text-center py-12 text-gray-500">
            لا توجد منتجات متاحة حالياً
          </div>
        )}
      </div>

      <style jsx global>{`
        .flying-image {
          position: fixed;
          z-index: 9999;
          pointer-events: none;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        @media (max-width: 640px) {
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
            
            &::-webkit-scrollbar {
              display: none;
            }
          }
        }
      `}</style>
    </section>
  );
}
// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ShoppingCart, Heart, ChevronLeft, BaggageClaim } from "lucide-react";
// import { motion } from "framer-motion";
// import { useTheme } from "next-themes";
// import { toast } from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../../redux/slices/cartSlice";

// export default function FeaturedProducts({ products, customization = {} , categories={} , slugDomain }) {
//   const dispatch = useDispatch();

//   // إعدادات التخصيص مع قيم افتراضية
//   const primaryColor = customization.primaryColor || "#4CAF50";
//   const secondaryColor = customization.secondaryColor || "#2C3E50";
//   const accentColor = customization.accentColor || "#FFC107";
//   const lightBackground = customization.backgroundColor || "#FFFFFF";
//   const darkBackground = customization.darkBackground || "#1E293B";
//   const fontFamily = customization.fontFamily || "sans-serif";

//   // الحصول على وضع الثيم (فاتح أو داكن)
//   const { theme } = useTheme();
//   const currentBackground = theme === "dark" ? darkBackground : lightBackground;

//   // الفئات والفلترة
//   const [activeCategory, setActiveCategory] = useState("all");
//   const categories1 = [
//     { id: "all", name: "الكل" },
//     { id: "electronics", name: "الإلكترونيات" },
//     { id: "fashion", name: "الأزياء" },
//   ];

//   const filteredProducts =
//     activeCategory === "all"
//       ? products
//       : products.filter((product) => product.category === activeCategory);

//   // إضافة المنتج مع تأثير التحليق إلى السلة
//   const handleAddToCart = (event, product) => {
//     event.stopPropagation();

//     const productCard = event.currentTarget.closest(".group");
//     if (!productCard) return;

//     const imageElement = productCard.querySelector("img");
//     if (!imageElement) {
//       dispatch(addToCart(product));
//       toast.success("تم إضافة المنتج بنجاح!");
//       return;
//     }

//     const cartIcon = document.getElementById("navbar-cart");
//     if (!cartIcon) {
//       dispatch(addToCart(product));
//       toast.success("تم إضافة المنتج بنجاح!");
//       return;
//     }

//     const imageRect = imageElement.getBoundingClientRect();
//     const cartRect = cartIcon.getBoundingClientRect();

//     // إنشاء صورة متحركة
//     const flyingImage = imageElement.cloneNode(true);
//     Object.assign(flyingImage.style, {
//       position: "fixed",
//       top: `${imageRect.top}px`,
//       left: `${imageRect.left}px`,
//       width: `${imageRect.width}px`,
//       height: `${imageRect.height}px`,
//       transition: "all 0.8s ease-in-out",
//       zIndex: "9999",
//       opacity: "1",
//     });

//     document.body.appendChild(flyingImage);

//     requestAnimationFrame(() => {
//       flyingImage.style.top = `${cartRect.top + cartRect.height / 2}px`;
//       flyingImage.style.left = `${cartRect.left + cartRect.width / 2}px`;
//       flyingImage.style.width = "0px";
//       flyingImage.style.height = "0px";
//       flyingImage.style.opacity = "0";
//     });

//     flyingImage.addEventListener("transitionend", () => {
//       flyingImage.remove();
//       dispatch(addToCart(product));
//       toast.success("تمت الإضافة إلى السلة!");
//     });
//   };

//   return (
//     <section className="py-12 bg-gray-50 dark:bg-gray-800 " style={{ backgroundColor: currentBackground, fontFamily }}>
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0" style={{ color: primaryColor }}>
//             المنتجات المميزة
//           </h2>
//           {/* أزرار الفلترة */}
//           <div className="flex space-x-4 space-x-reverse">
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`px-4 py-2 rounded-full transition-all ${
//                   activeCategory === category.id
//                     ? "bg-blue-600 text-white"
//                     : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
//                 }`}
//               >
//                 {category.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredProducts.map((product, index) => (
//             <motion.div
//               key={product.id}
//               className="rounded-lg shadow-md overflow-hidden transition-transform duration-300 group bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform duration-300"
//               // style={{ backgroundColor: currentBackground, }}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               <div className="relative">
//                 <Link href={`${slugDomain}/products/${product.slug}`}>
//                   <div className="aspect-square relative">
//                     <Image
//                       src={product.imageUrl || "/placeholder.jpg"}
//                       loading="lazy"
//                       alt={product.title}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 </Link>
//                 <button className="absolute top-2 left-2 p-1.5 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors">
//                   <Heart className="h-5 w-5" />
//                 </button>
//                 {product.salePrice && product.productPrice > product.salePrice && (
//                   <div className="absolute top-2 right-2" style={{ backgroundColor: primaryColor, color: "#fff", padding: "4px 8px", borderRadius: "5px", fontWeight: "bold" }}>
//                     {Math.round(((product.productPrice - product.salePrice) / product.productPrice) * 100)}% خصم
//                   </div>
//                 )}
//               </div>
//               <div className="p-4">
//                 <Link href={`${slugDomain}/products/${product.slug}`}>
//                   <h3 className="text-lg font-medium mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" style={{ color: secondaryColor }}>
//                     {product.title}
//                   </h3>
//                 </Link>
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <span className="text-lg font-bold" style={{ color: accentColor }}>
//                       {product.salePrice || product.productPrice} ر.س
//                     </span>
//                     {product.salePrice && (
//                       <span className="text-sm text-gray-500 dark:text-gray-400 line-through mr-2">
//                         {product.productPrice} ر.س
//                       </span>
//                     )}
//                   </div>
//                   <button
//                     onClick={(e) => handleAddToCart(e, product)}
//                     className=" p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-full transition-transform hover:scale-110 active:scale-95 shadow-lg flex items-center justify-center"
//                     style={{
//                       background: primaryColor,
//                       color: accentColor,
//                     }}
//                     aria-label="أضف إلى السلة"
//                   >
//                     <ShoppingCart className="w-6 h-6  animate-bounce-horizontal" />
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
