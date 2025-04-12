// "use client";

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { ShoppingCart } from "lucide-react";
// import { useTheme } from "next-themes";

// export default function AutoPlay({ products, customization = {} }) {
//   const { theme } = useTheme();

//   // إعدادات Slider
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 1000,
//     autoplaySpeed: 3000,
//     cssEase: "ease",
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 3 } },
//       { breakpoint: 768, settings: { slidesToShow: 2 } },
//       { breakpoint: 480, settings: { slidesToShow: 1 } },
//     ],
//   };

//   // تعريف خيارات الألوان والتنسيق
//   const primaryColor = customization?.primaryColor || "#FF6347"; // لون الطماطم
//   const secondaryColor = customization?.secondaryColor || "#333333";
//   const accentColor = customization?.accentColor || "#FFD700"; // ذهبي
//   const backgroundColor = customization?.backgroundColor || "#F8F8F8";
//   const darkBackground = customization?.darkBackground || "#2D2D2D";
//   const fontFamily = customization?.fontFamily || "Arial, sans-serif";

//   // قائمة المنتجات (يمكن تعديلها أو جلبها من API)
//   // const products = [
//   //   {
//   //     id: 1,
//   //     name: "Adidas Ultra Boost 2021",
//   //     price: "$379",
//   //     discount: "25% OFF",
//   //     image: "/images/image-7.jpg",
//   //   },
//   //   {
//   //     id: 2,
//   //     name: "Nike Air Max 2022",
//   //     price: "$379",
//   //     discount: "25% OFF",
//   //     image: "/images/image-7.jpg",
//   //   },
//   //   {
//   //     id: 3,
//   //     name: "Puma RS-X",
//   //     price: "$379",
//   //     discount: "25% OFF",
//   //     image: "/images/image-7.jpg",
//   //   },
//   //   {
//   //     id: 4,
//   //     name: "New Balance 574",
//   //     price: "$50",
//   //     image: "/images/image-7.jpg",
//   //   },
//   //   {
//   //     id: 5,
//   //     name: "Vans Old Skool",
//   //     price: "$60",
//   //     image: "/images/image-7.jpg",
//   //   },
//   //   {
//   //     id: 6,
//   //     name: "Reebok Classic",
//   //     price: "$70",
//   //     image: "/images/image-7.jpg",
//   //   },
//   // ];

//   return (
//     <div
//       className="p-10 m-5 rounded-2xl shadow-xl"
//       style={{
//         backgroundColor: theme === "dark" ? darkBackground : backgroundColor,
//         fontFamily,
//       }}
//     >
//       {/* عنوان القسم */}
//       <h2
//         className="text-center text-3xl font-extrabold mb-8"
//         style={{ color: secondaryColor }}
//       >
//         Featured Products
//       </h2>

//       {/* Slider with new design */}
//       <Slider {...settings}>
//         {products.map((product) => (
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
//               <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
//                 <h3 className="text-xl text-white font-semibold">{product.title}</h3>
//                 <div className="flex items-center justify-between mt-2">
//                   <span className="text-lg font-bold" style={{ color: primaryColor }}>
//                     {product.salePrice}
//                   </span>
//                   <button
//                     className="flex items-center bg-white text-black px-3 py-1 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
//                   >
//                     <ShoppingCart size={16} />
//                     <span className="ml-2">Add to Cart</span>
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
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ShoppingCart } from "lucide-react";
import { useTheme } from "next-themes";

export default function AutoPlay({ products, customization = {} }) {
  const { theme } = useTheme();

  // Slider
  // const settings = {
  //   dots: true,
  //   infinite: products.length > 5, // لا تجعل السلايدر لانهائي إلا إذا كان هناك أكثر من 5 منتجات
  //   slidesToShow: Math.min(5, products.length), // يعرض فقط عدد المنتجات المتوفرة
  //   infinite: true,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 1000,
  //   autoplaySpeed: 3000,
  //   cssEase: "ease",
  //   responsive: [
  //     { breakpoint: 1024, settings: { slidesToShow: Math.min(3, products.length) } },
  //     { breakpoint: 768, settings: { slidesToShow: Math.min(2, products.length) } },
  //     { breakpoint: 480, settings: { slidesToShow: Math.min(1, products.length) } },
  //   ],
  // };
const settings = {
  dots: false,
  infinite: products.length > 5, // لا تجعل السلايدر لانهائي إلا إذا كان هناك أكثر من 5 منتجات
  slidesToShow: Math.min(4, products.length), // يعرض فقط عدد المنتجات المتوفرة
  slidesToScroll: 4,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  cssEase: "ease",
  // variableWidth: true, // <== هذا مهم لمنع تغيير الحجم التلقائي

  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: Math.min(3, products.length) } },
    { breakpoint: 768, settings: { slidesToShow: Math.min(2, products.length) } },
    { breakpoint: 480, settings: { slidesToShow: Math.min(1, products.length) } },
  ],
};

  // تعريف خيارات الألوان والتنسيق
  const primaryColor = customization?.primaryColor || "#FF6347"; // لون الطماطم
  const secondaryColor = customization?.secondaryColor || "#333333";
  const accentColor = customization?.accentColor || "#FFD700"; // ذهبي
  const backgroundColor = customization?.backgroundColor || "#F8F8F8";
  const darkBackground = customization?.darkBackground || "#2D2D2D";
  const fontFamily = customization?.fontFamily || "Arial, sans-serif";

  // فرز المنتجات بناءً على تاريخ الإضافة (يفترض وجود خاصية createdAt في بيانات المنتج)
  // const sortedProducts = products.sort(
  //   (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  // );
  const sortedProducts = products.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  
  return (
    <div dir="rtl"
      className="p-10 m-5 font-arabic rounded-2xl shadow-xl"
      // style={{
      //   backgroundColor: theme === "dark" ? darkBackground : backgroundColor,
      //   fontFamily,
      // }}
    >
      {/* عنوان القسم */}
      <h2
        className="text-center text-3xl font-extrabold mb-8"
        style={{ color: secondaryColor }}
      >
        المنتجات المضافة مؤخرًا
      </h2>

      {/* Slider */}
      <Slider {...settings}>
        {sortedProducts.map((product) => (
          <div key={product.id} className="px-4">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              {/* صورة المنتج مع تأثير تكبير عند hover */}
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* شارة الخصم */}
              {product.discount && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-sm font-bold rounded">
                  {product.discount}
                </div>
              )}
              {/* تراكب تفاصيل المنتج يظهر عند المرور */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                <h3 className="text-xl text-white font-semibold">
                  {product.title}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span
                    className="text-lg font-bold"
                    style={{ color: primaryColor }}
                  >
                    {product.salePrice}
                  </span>
                  <button
                    className="flex items-center bg-white text-black px-3 py-1 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
                  >
                    <ShoppingCart size={16} />
                    <span className="ml-2">أضف للسلة</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
