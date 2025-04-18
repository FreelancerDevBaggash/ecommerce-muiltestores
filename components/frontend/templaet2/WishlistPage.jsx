// 'use client';
// import React, { useState, useEffect } from 'react';
// import { Heart, HeartOff, ShoppingCart, X } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { toast } from 'react-hot-toast';
// import Image from 'next/image';
// import Link from 'next/link';

// const WishlistPage = ({ slugDomain }) => {
//   const [wishlist, setWishlist] = useState([]);

//   useEffect(() => {
//     const handleStorageChange = () => {
//       const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
//       // التحقق من صحة البيانات
//       const validWishlist = storedWishlist.filter(item => 
//         item.id && item.title && (item.price || item.price === 0)
//       );
//       setWishlist(validWishlist);
//     };

//     // تحميل البيانات الأولية
//     handleStorageChange();

//     // الاستماع للتغييرات في localStorage
//     window.addEventListener('storage', handleStorageChange);
    
//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, []);

//   const removeFromWishlist = (productId) => {
//     const updatedWishlist = wishlist.filter(item => item.id !== productId);
//     setWishlist(updatedWishlist);
//     localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
//     toast.success('تمت إزالة المنتج من المفضلة');
    
//     // إرسال حدث لتحديث المكونات الأخرى
//     window.dispatchEvent(new Event('storage'));
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">قائمة المفضلة</h1>
      
//       {wishlist.length === 0 ? (
//         <div className="text-center py-12">
//           <HeartOff className="mx-auto h-12 w-12 text-gray-400" />
//           <p className="mt-4 text-gray-600">لا توجد منتجات في المفضلة</p>
//           <Link 
//             href={`/${slugDomain}/products`}
//             className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
//           >
//             تصفح المنتجات
//           </Link>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {wishlist.map((product) => (
//             <motion.div
//               key={product.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative"
//             >
//               {/* زر الإزالة من المفضلة */}
//               <button 
//                 onClick={() => removeFromWishlist(product.id)}
//                 className="absolute top-2 left-2 z-10 p-2 bg-white/80 dark:bg-gray-700/80 rounded-full hover:bg-red-100 hover:text-red-500 transition-colors"
//                 aria-label="إزالة من المفضلة"
//               >
//                 <X className="w-5 h-5" />
//               </button>

//               {/* صورة المنتج */}
//               <div className="relative aspect-square">
//                 {product.imageUrl ? (
//                   <Image
//                     src={product.imageUrl}
//                     alt={product.title || 'صورة المنتج'}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
//                   />
//                 ) : (
//                   <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
//                     <span className="text-gray-500">لا توجد صورة</span>
//                   </div>
//                 )}
//               </div>

//               {/* معلومات المنتج */}
//               <div className="p-4">
//                 <Link href={`/${slugDomain}/products/${product.slug || product.id}`}>
//                   <h3 className="font-semibold text-lg hover:text-blue-500 dark:hover:text-blue-400 transition-colors mb-2 line-clamp-2">
//                     {product.title || 'منتج بدون اسم'}
//                   </h3>
//                 </Link>

//                 {/* السعر */}
//                 <div className="flex items-center justify-between mt-4">
//                   <div>
//                     <span className="text-lg font-bold text-gray-800 dark:text-gray-200">
//                       {product.price} ر.س
//                     </span>
//                   </div>

//                   {/* زر الإضافة إلى السلة */}
//                   <button 
//                     className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
//                     aria-label="أضف إلى السلة"
//                   >
//                     <ShoppingCart className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default WishlistPage;

// components/WishlistPage.jsx
// components/frontend/templaet2/WishlistPage.jsx
"use client";

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { X, ShoppingCart, HeartOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import Image from 'next/image';
import Link from 'next/link';
import { removeFromWishlist } from '@/redux/slices/wishlistSlice';
import { addToCart } from '@/redux/slices/cartSlice';

/**
 * WishlistPage: صفحة عرض وعملية المفضلة
 * يعرض العناصر في المفضلة من الـ Redux store
 * @param {string} slugDomain - اختصار نطاق المتجر
 */
export default function WishlistPage({ slugDomain }) {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.items);

  // أنيميشن طيران الصورة
  const createFlyingImage = (imgSrc, startRect, endRect) => {
    const flyImg = new Image();
    flyImg.src = imgSrc;
    flyImg.className = 'flying-image';
    document.body.appendChild(flyImg);
    flyImg.animate(
      [
        { transform: `translate(${startRect.left}px, ${startRect.top}px) scale(${startRect.width/startRect.height})`, opacity: 1, width: `${startRect.width}px`, height: `${startRect.height}px` },
        { transform: `translate(${endRect.left + endRect.width/2}px, ${endRect.top + endRect.height/2}px) scale(0)`, opacity: 0 }
      ],
      { duration: 800, easing: 'ease-in-out' }
    ).onfinish = () => flyImg.remove();
  };

  // إزالة من المفضلة
  const handleRemove = (e, id) => {
    e.stopPropagation();
    dispatch(removeFromWishlist(id));
    toast.success('تمت إزالة المنتج من المفضلة');
  };

  // إضافة إلى السلة
  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    const card = e.currentTarget.closest('.wishlist-card');
    const imgEl = card?.querySelector('img');
    const cartIcon = document.getElementById('navbar-cart');
    if (imgEl && cartIcon) {
      const imgRect = imgEl.getBoundingClientRect();
      const cartRect = cartIcon.getBoundingClientRect();
      createFlyingImage(imgEl.src, imgRect, cartRect);
    }
    dispatch(addToCart(product));
    toast.success('تمت الإضافة إلى السلة');
  };

  return (
    <div className="container mx-auto px-4 py-8" dir="rtl">
      <h1 className="text-3xl font-bold mb-6 text-center">قائمة المفضلة</h1>

      {wishlist.length === 0 ? (
        <div className="text-center py-12">
          <HeartOff className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-4 text-gray-600">لا توجد منتجات في المفضلة</p>
          <Link
            href={`/${slugDomain}/products`}
            className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            تصفح المنتجات
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map(product => (
            <motion.div
              key={product.id}
              className="wishlist-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* إزالة من المفضلة */}
              <button
                onClick={(e) => handleRemove(e, product.id)}
                className="absolute top-2 left-2 z-10 p-2 bg-white/80 dark:bg-gray-700/80 rounded-full hover:bg-red-100 hover:text-red-500 transition-colors"
                aria-label="إزالة من المفضلة"
              >
                <X className="w-5 h-5" />
              </button>

              {/* صورة المنتج */}
              <div className="relative aspect-square">
                {product.imageUrl ? (
                  <Image
                    src={product.imageUrl}
                    alt={product.title || 'صورة المنتج'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-500">لا توجد صورة</span>
                  </div>
                )}
              </div>

              {/* معلومات المنتج */}
              <div className="p-4 space-y-3">
                <Link href={`/${slugDomain}/products/${product.slug || product.id}`}> 
                  <h3 className="font-semibold text-lg hover:text-blue-500 dark:hover:text-blue-400 transition-colors mb-2 line-clamp-2">
                    {product.title || 'منتج بدون اسم'}
                  </h3>
                </Link>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-bold text-gray-800 dark:text-gray-200">
                    {product.price} ر.س
                  </span>
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                    aria-label="أضف إلى السلة"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* أنماط عالمية */}
      <style jsx global>{`
        .flying-image {
          position: fixed;
          z-index: 9999;
          pointer-events: none;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
}
