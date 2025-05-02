// "use client";

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { ShoppingCart } from "lucide-react";
// import { useTheme } from "next-themes";
// import Link from "next/link";
// export default function AutoPlay({ products, customization = {} , slugDomain }) {
//   const { theme } = useTheme();

//   // Slider
//   const settings = {
//     dots: false,
//     infinite: products.length > 5, // لا تجعل السلايدر لانهائي إلا إذا كان هناك أكثر من 5 منتجات
//     slidesToShow: Math.min(4, products.length), // يعرض فقط عدد المنتجات المتوفرة
//     slidesToScroll: 4,
//     autoplay: true,
//     speed: 1000,
//     autoplaySpeed: 3000,
//     cssEase: "ease",
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: Math.min(3, products.length) } },
//       { breakpoint: 768, settings: { slidesToShow: Math.min(2, products.length) } },
//       { breakpoint: 480, settings: { slidesToShow: Math.min(1, products.length) } },
//     ],
//   };

//   // تعريف خيارات الألوان والتنسيق
//   const primaryColor = customization?.primaryColor || "#FF6347"; // لون الطماطم
//   const secondaryColor = customization?.secondaryColor || "#333333";
//   const accentColor = customization?.accentColor || "#FFD700"; // ذهبي
//   const backgroundColor = customization?.backgroundColor || "#F8F8F8";
//   const darkBackground = customization?.darkBackground || "#2D2D2D";
//   const fontFamily = customization?.fontFamily || "Arial, sans-serif";

//   // فرز المنتجات بناءً على تاريخ الإضافة (يفترض وجود خاصية createdAt في بيانات المنتج)
//   const sortedProducts = products.sort(
//     (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//   );
  
//   return (
//     <div dir="rtl"
//       className="p-10  m-5 font-arabic rounded-2xl shadow-xl"
//     >
//       {/* عنوان القسم */}
//       <h2
//         className="text-center text-3xl font-extrabold mb-8"
//         style={{ color: secondaryColor }}
//       >
//         المنتجات المضافة مؤخرًا
//       </h2>

//       {/* Slider */}
//       <Slider {...settings}>
//         {sortedProducts.map((product) => (
//           <div key={product.id} className="px-4">
//             <div className="relative group overflow-hidden rounded-2xl shadow-lg">
//               {/* صورة المنتج مع تأثير تكبير عند hover */}
//               <img
//                 src={product.imageUrl}
//                 alt={product.title}
//                 className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//               {/* شارة الخصم */}
//               {product.discount && (
//                 <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-sm font-bold rounded">
//                   {product.discount}
//                 </div>
//               )}
//               {/* تراكب تفاصيل المنتج يظهر عند المرور */}

             
//               <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 
//               transition-opacity duration-500 flex flex-col justify-end p-4">
//                 <h3 className="text-xl text-white font-semibold">
//                 <Link href={`/${slugDomain}/products/${product.slug}`} >
//                   {product.title}
//                 </h3>
//                 <Link/>
//                 <div className="flex items-center justify-between mt-2">
//                   <span
//                     className="text-lg font-bold"
//                     style={{ color: primaryColor }}
//                   >
//                     {product.salePrice}
//                   </span>
//                   <button
//                     className="flex items-center bg-white text-black px-3 py-1 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
//                   >
              
//                     <ShoppingCart size={16} />
//                     <span className="ml-2">أضف للسلة</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }
"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ShoppingCart, Heart } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addToCart } from '@/redux/slices/cartSlice';
import { addToWishlist } from '@/redux/slices/wishlistSlice';
import Image from "next/image";
export default function AutoPlay({ products, customization = {}, slugDomain }) {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  // Slider settings
  const settings = {
    dots: false,
    infinite: products.length > 5,
    slidesToShow: Math.min(4, products.length),
    slidesToScroll: 4,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "ease",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: Math.min(3, products.length) } },
      { breakpoint: 768, settings: { slidesToShow: Math.min(2, products.length) } },
      { breakpoint: 480, settings: { slidesToShow: Math.min(1, products.length) } },
    ],
  };

  // Customization defaults
  const primaryColor = customization?.primaryColor || "#FF6347";
  const secondaryColor = customization?.secondaryColor || "#333333";
  const accentColor = customization?.accentColor || "#FFD700";
  const backgroundColor = customization?.backgroundColor || "#F8F8F8";
  const darkBackground = customization?.darkBackground || "#2D2D2D";
  const fontFamily = customization?.fontFamily || "Arial, sans-serif";

  // Sort by createdAt descending
  const sortedProducts = products.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  // Handlers
  const handleAddToCart = (e, product) => {
    e.preventDefault();
    dispatch(addToCart(product));
    toast.success("تمت الإضافة إلى السلة بنجاح!");
  };
  const handleAddToWishlist = (e, product) => {
    e.preventDefault();
    dispatch(addToWishlist(product));
    toast.success("تمت الإضافة إلى المفضلة!");
  };

  return (
    <div
      dir="rtl"
      className="p-8 container  font-arabic rounded-2xl shadow-xl"

    >
      <h2
        className="text-center text-3xl font-extrabold mb-8"
        style={{ color: secondaryColor }}
      >
        المنتجات المضافة مؤخرًا
      </h2>

      <Slider {...settings}>
        {sortedProducts.map((product) => (
          <div    di r="rtl"  key={product.id} className="px-4 ">
            <Link href={`/${slugDomain}/products/${product.slug}`}>
              <div className="relative group overflow-hidden rounded-2xl shadow-lg block">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                         <button 
                              className="absolute top-3 z-10 left-3 p-1.5 hover:bg-red-600/60 bg-white/55 rounded-full shadow"
                              onClick={(e) => {
                                e.preventDefault()
                                dispatch(addToWishlist(product))
                                toast.success("تمت الإضافة إلى المفضلة")
                              }}
                            >
                              <Heart className="w-4 h-4 text-gray-700" />
                            </button>
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-sm font-bold rounded">
                    {product.discount}
                  </div>
                )}
                <div    dir="rtl" className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                  <h3 className="text-xl text-white font-semibold mb-2">
                    {product.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold" style={{ color: primaryColor }}>
                      {product.salePrice}
                    </span>
                    <div    dir="rtl" className="flex space-x-2">
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="flex items-center bg-white text-black px-3 py-1 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
                      >
                        <ShoppingCart size={16} />
                        <span className="ml-2">أضف للسلة</span>
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </Link> 
          </div>
        ))}
      </Slider>
    </div>
  );
}
// "use client";

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { ShoppingCart, Heart } from "lucide-react";
// import { useTheme } from "next-themes";
// import Link from "next/link";
// import { useDispatch } from "react-redux";
// import toast from "react-hot-toast";
// import { addToCart } from '@/redux/slices/cartSlice';
// import { addToWishlist } from '@/redux/slices/wishlistSlice';

// export default function AutoPlay({ products, customization = {}, slugDomain }) {
//   const { theme } = useTheme();
//   const dispatch = useDispatch();

//   const primaryColor = customization?.primaryColor || '#4CAF50'; // اللون الأساسي
//   const secondaryColor = customization?.secondaryColor || '#2C3E50'; // اللون الثانوي
//   const accentColor = customization?.accentColor || '#FFC107'; // اللون المميز
//   const backgroundColor = customization?.backgroundColor || '#FFFFFF'; // لون الخلفية
//   const fontFamily = customization?.fontFamily || 'sans-serif'; // نوع الخط
//   const isActive = customization?.isActive ?? true;
//   // New slider settings for 3D coverflow effect
//   const settings = {
//     dots: true,
//     infinite: products.length > 5,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: '0px',
//     autoplay: true,
//     speed: 800,
//     autoplaySpeed: 2500,
//     cssEase: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 768, settings: { slidesToShow: 1 } }
//     ],
//   };

//   // Customization


//   const sorted = products.slice().sort(
//     (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//   );

//   const handleAddTo = (e, action, item, successMsg) => {
//     e.preventDefault();
//     dispatch(action(item));
//     toast.success(successMsg);
//   };

//   return (
//     <section
//       dir="rtl"
//       className="container  rounded-3xl shadow-2xl transition-colors duration-500"

//     >
//       <h2 className="text-center text-4xl font-bold mb-12"
//           style={{ color: primaryColor }}>
//         أحدث المنتجات
//       </h2>

//       <Slider {...settings}>
//         {sorted.map(product => (
//           <div key={product.id} className="px-3">
//             <Link href={`/${slugDomain}/products/${product.slug}`}>
//               <div className="group perspective">
//                 <div className="relative w-full h-80 duration-600 transform-style-preserve-3d group-hover:rotate-y-180">
//                   {/* Front Side */}
//                   <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-lg">
//                     <img
//                       src={product.imageUrl}
//                       alt={product.title}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
//                       <h3 className="text-white text-xl font-semibold">
//                         {product.title}
//                       </h3>
//                     </div>
//                   </div>

//                   {/* Back Side */}
//                   <div className="absolute inset-0 rotate-y-180 backface-hidden bg-white dark:bg-gray-800 rounded-2xl p-6 flex flex-col justify-between">
//                     <div>
//                       <h3 className="text-lg font-bold mb-2"
//                           style={{ color: primaryColor }}>
//                         {product.title}
//                       </h3>
//                       <p className="text-sm line-clamp-3">
//                         {product.descripti || 'وصف المنتج غير متوفر'}
//                       </p>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-2xl font-extrabold"
//                             style={{ color: accentColor }}>
//                         {product.salePrice}
//                       </span>
//                       <div className="flex space-x-3">
//                         <button
//                           onClick={e => handleAddTo(e, addToCart, product, 'تمت الإضافة إلى السلة!')}
//                           className="px-4 py-2 bg-primary text-white rounded-xl shadow hover:scale-105 transition-transform"
//                           style={{ backgroundColor: primaryColor }}>
                        
//                           <ShoppingCart size={20} />
//                         </button>
//                         <button
//                           onClick={e => handleAddTo(e, addToWishlist, product, 'أضيفت للمفضلة!')}
//                           className="px-4 py-2 bg-red-500 text-white rounded-xl shadow hover:scale-105 transition-transform"
//                           style={{ backgroundColor: primaryColor }}
//                         >
//                           <Heart size={20} />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// }