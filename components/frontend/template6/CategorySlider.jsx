// // import Link from "next/link"
// // import { Smartphone, Shirt, Home, ShoppingBag, Utensils, Gift, Tv } from "lucide-react"

// // const categories = [
// //   {
// //     id: 1,
// //     name: "الإلكترونيات",
// //     icon: <Smartphone className="h-8 w-8" />,
// //     link: "/categories/electronics",
// //     color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
// //   },
// //   {
// //     id: 2,
// //     name: "الأزياء",
// //     icon: <Shirt className="h-8 w-8" />,
// //     link: "/categories/fashion",
// //     color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
// //   },
// //   {
// //     id: 3,
// //     name: "المنزل",
// //     icon: <Home className="h-8 w-8" />,
// //     link: "/categories/home",
// //     color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
// //   },
// //   {
// //     id: 4,
// //     name: "الجمال",
// //     icon: <ShoppingBag className="h-8 w-8" />,
// //     link: "/categories/beauty",
// //     color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
// //   },
// //   {
// //     id: 5,
// //     name: "البقالة",
// //     icon: <Utensils className="h-8 w-8" />,
// //     link: "/categories/grocery",
// //     color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
// //   },
// //   {
// //     id: 6,
// //     name: "الهدايا",
// //     icon: <Gift className="h-8 w-8" />,
// //     link: "/categories/gifts",
// //     color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
// //   },
// //   {
// //     id: 7,
// //     name: "الأجهزة",
// //     icon: <Tv className="h-8 w-8" />,
// //     link: "/categories/appliances",
// //     color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
// //   },
  
// // ]

// // export default function Categories() {
// //   return (
// //     <section className="py-12 bg-white dark:bg-gray-900">
// //       <div className="container mx-auto px-4">
// //         <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">تسوق حسب الفئات</h2>
// //         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
// //           {categories.map((category) => (
// //             <Link
// //               key={category.id}
// //               href={category.link}
// //               className="flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 hover:shadow-md"
// //             >
// //               <div className={`p-4 rounded-full ${category.color} mb-3`}>{category.icon}</div>
// //               <span className="text-gray-800 dark:text-gray-200 font-medium text-center">{category.name}</span>
// //             </Link>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // "use client";

// // import Link from "next/link";
// // import { Smartphone, Shirt, Home, ShoppingBag, Utensils, Gift, Tv } from "lucide-react";
// // import { motion } from "framer-motion";

// // const categories = [
// //   {
// //     id: 1,
// //     name: "الإلكترونيات",
// //     icon: <Smartphone className="h-8 w-8" />,
// //     link: "/categories/electronics",
// //     color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
// //   },
// //   {
// //     id: 2,
// //     name: "الأزياء",
// //     icon: <Shirt className="h-8 w-8" />,
// //     link: "/categories/fashion",
// //     color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
// //   },
// //   {
// //     id: 3,
// //     name: "المنزل",
// //     icon: <Home className="h-8 w-8" />,
// //     link: "/categories/home",
// //     color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
// //   },
// //   {
// //     id: 4,
// //     name: "الجمال",
// //     icon: <ShoppingBag className="h-8 w-8" />,
// //     link: "/categories/beauty",
// //     color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
// //   },
// //   {
// //     id: 5,
// //     name: "البقالة",
// //     icon: <Utensils className="h-8 w-8" />,
// //     link: "/categories/grocery",
// //     color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
// //   },
// //   {
// //     id: 6,
// //     name: "الهدايا",
// //     icon: <Gift className="h-8 w-8" />,
// //     link: "/categories/gifts",
// //     color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
// //   },
// //   {
// //     id: 7,
// //     name: "الأجهزة",
// //     icon: <Tv className="h-8 w-8" />,
// //     link: "/categories/appliances",
// //     color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
// //   },
// // ];

// // const CategoryItem = ({ category }) => {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 50 }} // الحالة الأولية (غير مرئي ومتحرك لأسفل)
// //       whileInView={{ opacity: 1, y: 0 }} // الحالة النهائية عند الظهور على الشاشة
// //       transition={{ duration: 0.5, delay: category.id * 0.1 }} // تأخير لكل عنصر
// //       viewport={{ once: true }} // يتم تشغيل الحركة مرة واحدة فقط
// //     >
// //       <Link
// //         href={category.link}
// //         className="flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 hover:shadow-md"
// //       >
// //         <div className={`p-4 rounded-full ${category.color} mb-3`}>{category.icon}</div>
// //         <span className="text-gray-800 dark:text-gray-200 font-medium text-center">{category.name}</span>
// //       </Link>
// //     </motion.div>
// //   );
// // };

// // export default function Categories() {
// //   return (
// //     <section className="py-12 bg-white dark:bg-gray-900">
// //       <div className="container mx-auto px-4">
// //         <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">تسوق حسب الفئات</h2>
// //         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
// //           {categories.map((category) => (
// //             <CategoryItem key={category.id} category={category} />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// // "use client";

// // import Link from "next/link";
// // import { motion } from "framer-motion";

// // // القائمة المعدلة لإضافة صور بدلاً من الأيقونات
// // const categories = [
// //   {
// //     id: 1,
// //     name: "الإلكترونيات",
// //     imageUrl: "/images/image-3.jpg",  // استبدال الأيقونة بصورة
// //     link: "/categories/electronics",
// //     color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
// //   },
// //   {
// //     id: 2,
// //     name: "الأزياء",
// //     imageUrl: "/images/image-2.jpg",  // استبدال الأيقونة بصورة
// //     link: "/categories/fashion",
// //     color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
// //   },
// //   {
// //     id: 3,
// //     name: "المنزل",
// //     imageUrl: "/images/image-2.jpg",  // استبدال الأيقونة بصورة
// //     link: "/categories/home",
// //     color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
// //   },
// //   {
// //     id: 4,
// //     name: "الجمال",
// //     imageUrl: "/images/image-2.jpg",  // استبدال الأيقونة بصورة
// //     link: "/categories/beauty",
// //     color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
// //   },
// //   {
// //     id: 5,
// //     name: "البقالة",
// //     imageUrl: "/images/grocery.png",  // استبدال الأيقونة بصورة
// //     link: "/categories/grocery",
// //     color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
// //   },
// //   {
// //     id: 6,
// //     name: "الهدايا",
// //     imageUrl: "/images/gifts.png",  // استبدال الأيقونة بصورة
// //     link: "/categories/gifts",
// //     color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
// //   },
// //   {
// //     id: 7,
// //     name: "الأجهزة",
// //     imageUrl: "/images/appliances.png",  // استبدال الأيقونة بصورة
// //     link: "/categories/appliances",
// //     color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
// //   },
// // ];

// // const CategoryItem = ({ category }) => {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 50 }} // الحالة الأولية (غير مرئي ومتحرك لأسفل)
// //       whileInView={{ opacity: 1, y: 0 }} // الحالة النهائية عند الظهور على الشاشة
// //       transition={{ duration: 0.5, delay: category.id * 0.1 }} // تأخير لكل عنصر
// //       viewport={{ once: true }} // يتم تشغيل الحركة مرة واحدة فقط
// //     >
// //       <Link
// //         href={category.link}
// //         className="flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 hover:shadow-md"
// //       >
// //         {/* استخدام صورة بدل الأيقونة */}
// //         <div className={`p-4 rounded-full ${category.color} mb-3`}>
// //           <img
// //             src={category.imageUrl}
// //             alt={category.name}
// //             className="h-8 w-8 object-contain"
// //           />
// //         </div>
// //         <span className="text-gray-800 dark:text-gray-200 font-medium text-center">{category.name}</span>
// //       </Link>
// //     </motion.div>
// //   );
// // };

// // export default function Categories() {
// //   return (
// //     <section className="py-12 bg-white dark:bg-gray-900">
// //       <div className="container mx-auto px-4">
// //         <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">تسوق حسب الفئات</h2>
// //         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
// //           {categories.map((category) => (
// //             <CategoryItem key={category.id} category={category} />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// // "use client";

// // import Link from "next/link";
// // import { motion } from "framer-motion";
// // import { useEffect, useState } from "react";
// // import { getData } from "@/lib/getData"; // تأكد من وجود هذه الدالة لاستدعاء API

// // const CategoryItem = ({ category }) => {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 50 }} // الحالة الأولية (غير مرئي ومتحرك لأسفل)
// //       whileInView={{ opacity: 1, y: 0 }} // الحالة النهائية عند الظهور على الشاشة
// //       transition={{ duration: 0.5, delay: category.id * 0.1 }} // تأخير لكل عنصر
// //       viewport={{ once: true }} // يتم تشغيل الحركة مرة واحدة فقط
// //     >
// //       <Link
// //         href="/"
// //         className="flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 hover:shadow-md"
// //       >
// //         {/* استخدام صورة بدل الأيقونة */}
// //         <div className={`p-4 rounded-full ${category.color} mb-3`}>
// //           <img
// //             src={category.imageUrl}
// //             alt={category.title}
// //             className="h-8 w-8 object-contain"
// //           />
// //         </div>
// //         <span className="text-gray-800 dark:text-gray-200 font-medium text-center">{category.title}</span>
// //       </Link>
// //     </motion.div>
// //   );
// // };

// // export default function Categories() {
// //   const [categories, setCategories] = useState([]); // الحالة لتخزين الفئات
// //   const [loading, setLoading] = useState(true); // حالة التحميل

// //   // جلب بيانات الفئات عند تحميل المكون
// //   useEffect(() => {
// //     const fetchCategories = async () => {
// //       try {
// //         // جلب الفئات من API
// //         const data = await getData("/categories");  // تأكد من المسار الصحيح للـ API
// //         setCategories(data);  // تخزين الفئات في الحالة
// //       } catch (error) {
// //         console.error("Error fetching categories:", error);
// //       } finally {
// //         setLoading(false);  // عند الانتهاء من جلب البيانات أو حدوث خطأ
// //       }
// //     };

// //     fetchCategories();
// //   }, []);

// //   // عرض رسالة التحميل في حال كانت البيانات قيد التحميل
// //   if (loading) {
// //     return (
// //       <section className="py-12 bg-white dark:bg-gray-900">
// //         <div className="container mx-auto px-4 text-center">
// //           <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">جاري تحميل الفئات...</h2>
// //         </div>
// //       </section>
// //     );
// //   }

// //   return (
// //     <section className="py-12 bg-white dark:bg-gray-900">
// //       <div className="container mx-auto px-4">
// //         <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">تسوق حسب الفئات</h2>
// //         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
// //           {categories.map((category) => (
// //             <CategoryItem key={category.id} category={category} />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// // "use client";

// // import React, { useEffect, useState } from "react";
// // import Link from "next/link";
// // import { motion } from "framer-motion";

// // // دالة لجلب البيانات من API
// // const getData = async (endpoint) => {
// //   const response = await fetch(endpoint);
// //   if (!response.ok) {
// //     throw new Error("Failed to fetch data");
// //   }
// //   return await response.json();
// // };

// // const CategoryItem = ({ category }) => {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 50 }} // الحالة الأولية (غير مرئي ومتحرك لأسفل)
// //       whileInView={{ opacity: 1, y: 0 }} // الحالة النهائية عند الظهور على الشاشة
// //       transition={{ duration: 0.5, delay: category.id * 0.1 }} // تأخير لكل عنصر
// //       viewport={{ once: true }} // يتم تشغيل الحركة مرة واحدة فقط
// //     >
// //       <Link
// //         href="/"
// //         className="flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 hover:shadow-md"
// //       >
// //         {/* استخدام صورة بدل الأيقونة */}
//         // <div className={`p-4 rounded-full  mb-3`}>
//         //   <img
//         //     src={category.imageUrl}
//         //     alt={category.title}
//         //     className="h-8 w-8 object-contain"
//         //   />
//         // </div>
// //         <span className="text-gray-800 dark:text-gray-200 font-medium text-center">{category.title}</span>
// //       </Link>
// //     </motion.div>
// //   );
// // };

// // export default function Categories() {
// //   const [categories, setCategories] = useState([]);

// //   // جلب بيانات الفئات من API عند تحميل المكون
// //   useEffect(() => {
// //     const fetchCategories = async () => {
// //       try {
// //         // جلب الفئات من API
// //         const data = await getData("/api/categories"); // تأكد من مسار الـ API الصحيح
// //         setCategories(data);
// //       } catch (error) {
// //         console.error("Error fetching categories:", error);
// //       }
// //     };

// //     fetchCategories();
// //   }, []);

// //   return (
// //     <section className="py-12 bg-white dark:bg-gray-900">
// //       <div className="container mx-auto px-4">
// //         <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
// //           تسوق حسب الفئات
// //         </h2>
// //         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
// //           {categories.map((category) => (
// //             <CategoryItem key={category.id} category={category} />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// // "use client";

// // import React, { useEffect, useState } from "react";
// // import Link from "next/link";
// // import { useTheme } from "next-themes";
// // import { getData } from "@/lib/getData";

// // export default function CategoryGrid({ customization = {} }) {
// //   const { theme } = useTheme();

// //   // إعدادات الألوان والخطوط
// //   const primaryColor = customization.primaryColor || "#4CAF50";
// //   const fontFamily = customization.fontFamily || "sans-serif";

// //   const [categories, setCategories] = useState([]);

// //   // جلب بيانات الفئات عند تحميل المكون
// //   useEffect(() => {
// //     const fetchCategories = async () => {
// //       try {
// //         const data = await getData("/categories");
// //         const filtered = data.filter(
// //           (category) => category.products && category.products.length > 0
// //         );
// //         setCategories(filtered);
// //       } catch (error) {
// //         console.error("Error fetching categories:", error);
// //       }
// //     };
// //     fetchCategories();
// //   }, []);

// //   return (
// //     <section className="py-12 bg-white dark:bg-gray-900" style={{ fontFamily }}>
// //       <div className="container mx-auto px-4">
// //         <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
// //           تسوق حسب الفئات
// //         </h2>
// //         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
// //           {categories.map((category) => (
// //             <Link
// //               key={category.id}
// //               href={`/category/${category.slug}`}
// //               className="flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 hover:shadow-md"
// //             >
// //                <div className={`p-4 rounded-full  mb-3`}>
// //           <img
// //             src={category.imageUrl}
// //             alt={category.title}
// //             className="h-16 w-16 object-contain bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 rounded-full "
// //           />
// //         </div>
// //               <span className="text-gray-800 dark:text-gray-200 font-medium text-center">
// //                 {category.title}
// //               </span>
// //             </Link>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// // "use client";

// // import React, { useState, useEffect } from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { motion } from "framer-motion";

// // // قائمة الألوان المحددة مسبقًا
// // const colors = [
// //   "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
// //   "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
// //   "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
// //   "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
// //   "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
// //   "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
// //   "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
// // ];
// // export default function CategorySlider( { slugDomain , categories= {} }) {
// //   const [getCategories, setCategories] = useState(categories);

// //   return (
// //     <section className="py-12 bg-white dark:bg-gray-900">
// //       <div className="container mx-auto px-4">
// //         <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
// //           تسوق حسب الفئات
// //         </h2>
// //         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
// //           {getCategories.map((category, index) => (
// //             <motion.div
// //               key={category.id}
// //               initial={{ opacity: 0, y: 50 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: index * 0.1 }}
// //               viewport={{ once: true }}
// //             >
// //               <Link
// //                 href={`${slugDomain}/category/${category.slug}`}
// //                 className="flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 hover:shadow-md"
// //               >
// //                 <div className={`p-4 rounded-full mb-3 ${colors[index % colors.length]}`}>
// //                   <Image
// //                     src={category.imageUrl}
// //                     alt={category.title}
// //                     width={64}
// //                     height={64}
// //                     className="h-16 w-16 object-contain rounded-full"
// //                   />
// //                 </div>
// //                 <span className="text-gray-800 dark:text-gray-200 font-medium text-center">
// //                   {category.title}
// //                 </span>
// //               </Link>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";

// // قائمة الألوان المحددة مسبقًا لكل فئة
// const colors = [
//   "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
//   "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
//   "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
//   "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
//   "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
//   "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
//   "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
// ];

// export default function CategorySlider({ slugDomain, categories = [] }) {
//   const [getCategories] = useState(categories);

//   return (
//     <section className="py-12 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
//           تسوق حسب الفئات
//         </h2>
//         {/* قائمة الفئات في صف واحد مع تمرير أفقي */}
//         <div className="flex space-x-4 overflow-x-auto scroll-smooth pb-4">
//           {getCategories.map((category, index) => (
//             <motion.div
//               key={category.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="flex-shrink-0"  // يمنع تقليص حجم العنصر عند التمرير
//             >
//               <Link
//                 href={`${slugDomain}/category/${category.slug}`}
//                 className="flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 hover:shadow-md"
//               >
//                 <div className={`p-4 rounded-full mb-3 ${colors[index % colors.length]}`}>
//                   <Image
//                     src={category.imageUrl}
//                     alt={category.title}
//                     width={64}
//                     height={64}
//                     className="h-16 w-16 object-contain rounded-full"
//                   />
//                 </div>
//                 <span className="text-gray-800 dark:text-gray-200 font-medium text-center">
//                   {category.title}
//                 </span>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

// import React, { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";

// // توليد ألوان ثابتة بناء على نص الفئة
// const generateCategoryColor = (title) => {
//   const colorMap = {
//     blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
//     red: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
//     yellow: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
//     purple: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
//     green: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
//     pink: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
//     indigo: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
//   };
  
//   const colorKeys = Object.keys(colorMap);
//   const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
//   return colorMap[colorKeys[hash % colorKeys.length]];
// };

// const CategoryItem = ({ category, slugDomain, colorClass }) => (
//   <motion.div
//     className="flex-shrink-0 w-[180px] md:w-[200px] transition-all duration-300 hover:shadow-lg"
//     whileHover={{ scale: 1.05 }}
//   >
//     <Link
//       href={`${slugDomain}/category/${category.slug}`}
//       className="flex flex-col items-center justify-center p-4 md:p-6 rounded-xl"
//       aria-label={`تصفح فئة ${category.title}`}
//     >
//       <div className={`p-3 md:p-4 rounded-full mb-2 md:mb-3 ${colorClass}`}>
//         <div className="relative h-14 w-14 md:h-16 md:w-16">
//           <Image
//             src={category.imageUrl}
//             alt={category.title}
//             fill
//             sizes="(max-width: 768px) 64px, 80px"
//             className="object-contain rounded-full"
//             loading="lazy"
//           />
//         </div>
//       </div>
//       <span className="text-sm md:text-base text-gray-800 dark:text-gray-200 font-medium text-center">
//         {category.title}
//       </span>
//     </Link>
//   </motion.div>
// );

// export default function CategorySlider({ slugDomain, categories = [] }) {
//   const sliderRef = useRef(null);
//   const [width, setWidth] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);

//   const updateWidth = () => {
//     if (sliderRef.current) {
//       setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
//     }
//   };

//   useEffect(() => {
//     updateWidth();
//     window.addEventListener('resize', updateWidth);
//     return () => window.removeEventListener('resize', updateWidth);
//   }, [categories]);

//   return (
//     <section className="py-8 mt-4 md:py-12 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-10 text-gray-900 dark:text-white">
//           تسوق حسب الفئات
//         </h2>
        
//         {categories.length > 0 ? (
//           <div 
//             ref={sliderRef} 
//             className="overflow-hidden cursor-grab active:cursor-grabbing"
//             onMouseDown={() => setIsDragging(true)}
//             onMouseUp={() => setIsDragging(false)}
//             onMouseLeave={() => setIsDragging(false)}
//           >
//             <motion.div
//               drag="x"
//               dragConstraints={{ right: 0, left: -width }}
//               dragElastic={0.1}
//               dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
//               className="flex gap-3 md:gap-4"
//             >
//               {categories.map((category) => (
//                 <CategoryItem
//                   key={category.id}
//                   category={category}
//                   slugDomain={slugDomain}
//                   colorClass={generateCategoryColor(category.title)}
//                 />
//               ))}
//             </motion.div>
//           </div>
//         ) : (
//           <p className="text-center text-gray-500 dark:text-gray-400">
//             لا توجد فئات متاحة حالياً
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }
// "use client";

// import React, { useRef, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// // توليد ألوان ثابتة بناء على نص الفئة
// const generateCategoryColor = (title) => {
//   const colorMap = {
//     blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
//     red: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
//     yellow: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
//     purple: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
//     green: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
//     pink: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
//     indigo: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
//   };

//   const colorKeys = Object.keys(colorMap);
//   const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
//   return colorMap[colorKeys[hash % colorKeys.length]];
// };

// const CategoryItem = ({ category, slugDomain, colorClass }) => (
//   <motion.div
//     className="min-w-[160px] sm:min-w-[180px] md:min-w-[200px] transition-all duration-300 hover:shadow-lg"
//     whileHover={{ scale: 1.05 }}
//   >
//     <Link
//       href={`${slugDomain}/category/${category.slug}`}
//       className="flex flex-col items-center justify-center p-4 md:p-6 rounded-xl"
//       aria-label={`تصفح فئة ${category.title}`}
//     >
//       <div className={`p-3 md:p-4 rounded-full mb-2 md:mb-3 ${colorClass}`}>
//         <div className="relative h-14 w-14 md:h-16 md:w-16">
//           <Image
//             src={category.imageUrl}
//             alt={category.title}
//             fill
//             sizes="(max-width: 768px) 64px, 80px"
//             className="object-contain rounded-full"
//             loading="lazy"
//           />
//         </div>
//       </div>
//       <span className="text-sm md:text-base text-gray-800 dark:text-gray-200 font-medium text-center">
//         {category.title}
//       </span>
//     </Link>
//   </motion.div>
// );

// export default function CategorySlider({ slugDomain, categories = [] }) {
//   const containerRef = useRef(null);
//   const [showControls, setShowControls] = useState(false);

//   const scroll = (direction) => {
//     if (containerRef.current) {
//       const scrollAmount = direction === 'right' ? 300 : -300;
//       containerRef.current.scrollBy({
//         left: scrollAmount * (document.dir === 'rtl' ? -1 : 1),
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <section 
//       className="py-8 mt-1 md:py-8 bg-white dark:bg-gray-900 relative"
//       onMouseEnter={() => setShowControls(true)}
//       onMouseLeave={() => setShowControls(false)}
//     >
//       <div className="container px-4 relative">
//         <h2 className="text-2xl md:text-3xl font-bold text-center mb-2  text-gray-900 dark:text-white">
//           تسوق حسب الفئات
//         </h2>

//         {categories.length > 0 ? (
//           <div className="relative">
//             {/* زر التنقل الأيمن */}
//             <button 
//               onClick={() => scroll('right')}
//               className={`hidden lg:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-opacity duration-200 ${showControls ? 'opacity-100' : 'opacity-0'}`}
//               aria-label="التنقل إلى اليمين"
//             >
//               <ChevronRight className="h-5 w-5 text-gray-700 dark:text-gray-300" />
//             </button>

//             {/* زر التنقل الأيسر */}
//             <button 
//               onClick={() => scroll('left')}
//               className={`hidden lg:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-opacity duration-200 ${showControls ? 'opacity-100' : 'opacity-0'}`}
//               aria-label="التنقل إلى اليسار"
//             >
//               <ChevronLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
//             </button>

//             <div 
//               ref={containerRef}
//               className="overflow-x-auto whitespace-nowrap flex gap-4 px-2 pb-2 scroll-container"
//               dir="rtl"
//             >
//               {categories.map((category) => (
//                 <CategoryItem
//                   key={category.id}
//                   category={category}
//                   slugDomain={slugDomain}
//                   colorClass={generateCategoryColor(category.title)}
//                 />
//               ))}
//             </div>
//           </div>
//         ) : (
//           <p className="text-center text-gray-500 dark:text-gray-400">
//             لا توجد فئات متاحة حالياً
//           </p>
//         )}

//         <style jsx>{`
//           .scroll-container {
//             -ms-overflow-style: none;
//             scrollbar-width: none;
//           }
//           .scroll-container::-webkit-scrollbar {
//             display: none;
//           }
//         `}</style>
//       </div>
//     </section>
//   );
// }



import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// توليد ألوان ثابتة بناء على نص الفئة
const generateCategoryColor = (title) => {
  const colorMap = {
    blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    red: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    yellow: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
    purple: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    green: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    pink: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
    indigo: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
  };


  const colorKeys = Object.keys(colorMap);
  const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colorMap[colorKeys[hash % colorKeys.length]];
};



const CategoryItem = ({ category, slugDomain, colorClass , }) => (

  <motion.div
    className="min-w-[160px] sm:min-w-[180px] md:min-w-[200px] transition-all duration-300 hover:shadow-lg"
    whileHover={{ scale: 1.05 }}
  >
    <Link
      href={`${slugDomain}/category/${category.slug}`}
      className="flex flex-col items-center justify-center p-4 md:p-6 rounded-xl"
      aria-label={`تصفح فئة ${category.title}`}
    >
      <div className={`p-3 md:p-4 rounded-full mb-2 md:mb-3 ${colorClass}`}>
        <div className="relative h-14 w-14 md:h-16 md:w-16">
          <Image
            src={category.imageUrl}
            alt={category.title}
            fill
            sizes="(max-width: 768px) 64px, 80px"
            className="object-contain rounded-full"
            loading="lazy"
          />
        </div>
      </div>
      <span className="text-sm md:text-base text-gray-800 dark:text-gray-200 font-medium text-center">
        {category.title}
      </span>
    </Link>
  </motion.div>
);

export default function CategorySlider({ slugDomain, categories = [], customization={} }) {
  const containerRef = useRef(null);
  const [showControls, setShowControls] = useState(false);
const primaryColor = customization?.primaryColor || '#4CAF50'; // اللون الأساسي
const secondaryColor = customization?.secondaryColor || '#2C3E50'; // اللون الثانوي
const accentColor = customization?.accentColor || '#FFC107'; // اللون المميز
const backgroundColor = customization?.backgroundColor || '#FFFFFF'; // لون الخلفية
const fontFamily = customization?.fontFamily || 'sans-serif'; // نوع الخط
const isActive = customization?.isActive ?? true;
  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === 'right' ? 300 : -300;
      containerRef.current.scrollBy({
        left: scrollAmount * (document.dir === 'rtl' ? -1 : 1),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      className="py-8 mt-4 md:py-12 bg-white dark:bg-gray-900 relative"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className="container mx-auto px-4 relative">
        <h2 className="text-2xl md:text-3xl font-bold font-arabic text-center mb-4 md:mb-10 text-gray-900 dark:text-white" style={{ color: secondaryColor }}>
          تسوق حسب الفئات
        </h2>

        {categories.length > 0 ? (
          <div className="relative">
            {/* زر التنقل الأيمن */}
            <button 
              onClick={() => scroll('right')}
              className={`hidden lg:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-opacity duration-200 ${showControls ? 'opacity-100' : 'opacity-0'}`}
              aria-label="التنقل إلى اليمين"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>

            {/* زر التنقل الأيسر */}
            <button 
              onClick={() => scroll('left')}
              className={`hidden lg:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-opacity duration-200 ${showControls ? 'opacity-100' : 'opacity-0'}`}
              aria-label="التنقل إلى اليسار"
            >
              <ChevronRight className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>

            <div 
              ref={containerRef}
              className="overflow-x-auto whitespace-nowrap flex gap-4 px-2 pb-2 scroll-container"
              dir="rtl"
            >
              {categories.map((category) => (
                <CategoryItem
                  key={category.id}
                  category={category}
                  slugDomain={slugDomain}
                  colorClass={generateCategoryColor(category.title)}
                />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            لا توجد فئات متاحة حالياً
          </p>
        )}

        <style jsx>{`
          .scroll-container {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scroll-container::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
}