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
"use client";
import React, { useEffect, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { addToCart } from "../../../redux/slices/cartSlice";
import Link from "next/link";
import Image from "next/image";
import { Eye } from "lucide-react";
import { useTheme } from "next-themes";
import { useDispatch } from "react-redux";
import { BaggageClaim } from "lucide-react";
import toast from "react-hot-toast";

// مكون بطاقة المنتج المنفصل
const ProductCard = ({
  product,
  primaryColor,
  secondaryColor,
  accentColor,
  lightBackground,
  darkBackground,
  currentBackground,
  fontFamily,
  handleAddToCart,
}) => {
  return (
    <div
      data-aos="fade-up"
      // className="group relative bg-clip-padding rounded-2xl transition-all  duration-500 hover:-translate-y-2 hover:shadow-2xl"
         className="group relative bg-clip-padding  border shadow-lg  transition-shadow transform rounded-2xl  duration-500 hover:-translate-y-2 hover:shadow-2xl"
      style={{
        background: currentBackground,
        border: `2px solid ${primaryColor}20`,
        fontFamily,
      }}
    >
      {/* صورة المنتج مع تأثير تكبير عند المرور */}
      <div className="relative overflow-hidden rounded-t-2xl h-72">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />

        <Link href={`/products/${product.slug}`} className="block h-full">
          <Image
            src={product.imageUrl || product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* عرض نسبة الخصم إن وُجد */}
        {product.discountPercentage && (
          <div
            className="absolute top-4 right-4 px-4 py-2 rounded-full font-bold z-20 text-sm"
            style={{
              background: `linear-gradient(135deg, ${accentColor}, ${primaryColor})`,
              color: lightBackground,
            }}
          >
            {product.discountPercentage}% خصم
          </div>
        )}

        {/* أزرار العرض والإضافة للسلة */}
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex gap-2">
          <button
            className="p-3 rounded-full shadow-lg backdrop-blur-sm transition-transform hover:scale-110"
            style={{
              background: `${primaryColor}20`,
              color: primaryColor,
            }}
            aria-label="عرض التفاصيل"
          >
            <Eye size={20} />
          </button>
          <button
            onClick={(e) => handleAddToCart(e, product)}
            className="p-3 rounded-full transition-transform hover:scale-110 active:scale-95 shadow-lg flex items-center justify-center"
            style={{
              background: primaryColor,
              color: accentColor,
            }}
            aria-label="أضف إلى السلة"
          >
            <BaggageClaim className="w-5 h-5 animate-bounce-horizontal" />
          </button>
        </div>
      </div>

      {/* تفاصيل المنتج */}
      <div className="p-6 space-y-4">
        <Link href={`/products/${product.slug}`}>
          <h3
            className="text-xl font-bold transition-colors hover:text-primary"
            style={{ color: secondaryColor }}
          >
            {product.title}
          </h3>
          <p className="text-sm line-clamp-2" style={{ color: secondaryColor }}>
            {product.description || product.descripti}
          </p>
        </Link>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-2xl font-black" style={{ color: accentColor }}>
              {product.salePrice} $USE
            </p>
            {product.originalPrice && (
              <p
                className="text-sm line-through opacity-70"
                style={{ color: secondaryColor }}
              >
                {product.originalPrice} د.م
              </p>
            )}
          </div>

          <button
            onClick={(e) => handleAddToCart(e, product)}
            className="p-3 rounded-full transition-transform hover:scale-110 active:scale-95 shadow-lg flex items-center justify-center"
            style={{
              background: primaryColor,
              color: accentColor ,
            }}
            aria-label="أضف إلى السلة"
          >
            <BaggageClaim className="w-6 h-6 animate-bounce-horizontal" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function FavoriteProducts({ products, customization = {} }) {
  const dispatch = useDispatch();
  const { theme } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  // إعداد ألوان وخطوط التخصيص
  const primaryColor = customization.primaryColor || "#3B82F6";
  const secondaryColor = customization.secondaryColor || "#1E293B";
  const accentColor = customization.accentColor || "#F59E0B";
  const lightBackground = customization.backgroundColor || "#F8FAFC";
  const darkBackground = customization.darkBackground || "#0F172A";
  const fontFamily = customization.fontFamily || "Poppins, sans-serif";
  const currentBackground = theme === "dark" ? darkBackground : lightBackground;

  // إعداد الترقيم
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // استخدام useMemo لتحسين أداء حساب المنتجات في الصفحة الحالية
  const currentProducts = useMemo(() => {
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    return products.slice(indexOfFirstProduct, indexOfLastProduct);
  }, [currentPage, products]);

  // دالة إضافة المنتج إلى السلة مع تأثير التحليق
  const handleAddToCart = (event, product) => {
    event.stopPropagation(); // منع تداخل أحداث النقر
    const productCard = event.currentTarget.closest(".group");
    if (!productCard) return;

    const imageElement = productCard.querySelector("img");
    if (!imageElement) {
      dispatch(addToCart(product));
      toast.success("تم إضافة المنتج بنجاح!");
      return;
    }

    const imageRect = imageElement.getBoundingClientRect();
    const cartIcon = document.getElementById("navbar-cart");
    if (!cartIcon) {
      dispatch(addToCart(product));
      toast.success("تم إضافة المنتج بنجاح!");
      return;
    }
    const cartRect = cartIcon.getBoundingClientRect();

    // إنشاء صورة متحركة (تحليق الصورة إلى السلة)
    const flyingImage = imageElement.cloneNode(true);
    flyingImage.style.position = "fixed";
    flyingImage.style.top = `${imageRect.top}px`;
    flyingImage.style.left = `${imageRect.left}px`;
    flyingImage.style.width = `${imageRect.width}px`;
    flyingImage.style.height = `${imageRect.height}px`;
    flyingImage.style.transition = "all 0.8s ease-in-out";
    flyingImage.style.zIndex = "9999";
    document.body.appendChild(flyingImage);

    // تفعيل إعادة التدفق للتأكد من تطبيق التحولات
    flyingImage.getBoundingClientRect();

    const destinationX = cartRect.left + cartRect.width / 2;
    const destinationY = cartRect.top + cartRect.height / 2;

    flyingImage.style.top = `${destinationY}px`;
    flyingImage.style.left = `${destinationX}px`;
    flyingImage.style.width = "0px";
    flyingImage.style.height = "0px";
    flyingImage.style.opacity = "0";

    flyingImage.addEventListener("transitionend", () => {
      flyingImage.remove();
      dispatch(addToCart(product));
      toast.success("تم إضافة المنتج بنجاح!");
    });
  };

  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{
        background: `linear-gradient(45deg, ${secondaryColor}00, ${secondaryColor}20 100%)`,
        fontFamily,
      }}
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-2xl font-extrabold text-center mb-12 relative inline-block"
          style={{
            color: primaryColor,
            textShadow: `2px 2px 4px ${secondaryColor}40`,
          }}
        >
          <span className="relative z-10">
          Best Selling Products
            <div
              className="absolute bottom-0 left-0 w-full h-1 bg-current opacity-30 transform -translate-y-1"
              style={{ borderRadius: "50%" }}
            />
          </span>
        </h2>

        {products.length === 0 ? (
          <p className="text-center text-lg" style={{ color: secondaryColor }}>
            لا توجد منتجات لعرضها.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentProducts.map((product) => (
                <ProductCard
                  key={product.id || product.slug}
                  product={product}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                  accentColor={accentColor}
                  lightBackground={lightBackground}
                  darkBackground={darkBackground}
                  currentBackground={currentBackground}
                  fontFamily={fontFamily}
                  handleAddToCart={handleAddToCart}
                />
              ))}
            </div>

            {/* ترقيم الصفحات */}
            {totalPages > 1 && (
              <div className="mt-8">
                <ul className="flex space-x-5 justify-center">
                  {/* زر الصفحة السابقة */}
                  <li
                    onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                    className="flex items-center justify-center cursor-pointer w-9 h-9 rounded-md hover:bg-gray-50"
                    aria-label="الصفحة السابقة"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 fill-gray-400"
                      viewBox="0 0 55.753 55.753"
                    >
                      <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
                    </svg>
                  </li>

                  {/* أرقام الصفحات */}
                  {Array.from({ length: totalPages }, (_, i) => (
                    <li
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`flex items-center justify-center cursor-pointer text-base font-bold px-4 h-9 rounded-md transition-colors ${
                        currentPage === i + 1
                          ? "bg-lime-800 text-white"
                          : "hover:bg-gray-50 text-gray-800"
                      }`}
                      aria-label={`الصفحة ${i + 1}`}
                    >
                      {i + 1}
                    </li>
                  ))}

                  {/* زر الصفحة التالية */}
                  <li
                    onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                    className="flex items-center justify-center cursor-pointer w-9 h-9 rounded-md hover:bg-gray-50"
                    aria-label="الصفحة التالية"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 fill-gray-400 rotate-180"
                      viewBox="0 0 55.753 55.753"
                    >
                      <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
                    </svg>
                  </li>
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </section>
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