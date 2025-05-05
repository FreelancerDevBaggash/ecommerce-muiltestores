// "use client"
// import React, { useDebugValue } from 'react'
//  import Link from 'next/link'
// import Image from 'next/image'
// import { BaggageClaim } from 'lucide-react'
// import { addToCart } from '../../redux/slices/cartSlice'
// import { useDispatch } from 'react-redux'
// import toast from "react-hot-toast";

//  export default function Product({product}) {
//     const dispatch =useDispatch();
//     function handleAddToCart(){
//         dispatch(addToCart(product)); 
//         toast.success("Item added SuccessFully");
//     }
//     return (
//         <div 
//         className='rounded-lg mr-3 
//          bg-white
//       dark:bg-slate-900
//        overflow-hidden border shadow'>
//         <Link href={`/products/${product.slug}`}>
//         <Image src={product.imageUrl}
//        alt={product.title}
//        width={290} height={174} className="w-full h-96 rounded-sm p-2 object-contain" />
//         </Link>
//        <div className="px-4">
//        <Link href={`/products/${product.slug}`}>
//           <h2 className='text-center text-slate-800
//        dark:text-slate-200 my-2 font-semibold'> {product.title} </h2>
//           </Link>
//           <div className="flex items-center justify-between
//            gap-2 pb-3 dark:text-slate-200 text-slate-800">
//             <p>UGX {product.salePrice} </p>
//             <button onClick={()=>handleAddToCart()} className='flex items-center space-x-2
//              bg-lime-600 px-4 py-2 rounded-md text-white'>
//               <BaggageClaim/>
//               <span>Add</span>
//             </button>
//           </div>
//        </div>
//         </div>
//     )
//  }
 
//  "use client"
// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { BaggageClaim } from 'lucide-react';
// import { addToCart } from '../../redux/slices/cartSlice';
// import { useDispatch } from 'react-redux';
// import toast from "react-hot-toast";

// export default function Product({ product }) {
//     const dispatch = useDispatch();

//     function handleAddToCart() {
//         dispatch(addToCart(product));
//         toast.success("Item added Successfully");
//     }

//     return (
//         <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800">
//             <Link href={`/products/${product.slug}`}>
//                 <div className="relative w-full h-96">
//                     <Image
//                         src={product.imageUrl}
//                         alt={product.title}
//                         layout="fill"
//                         objectFit="contain"
//                         className="rounded-sm p-2 hover:scale-105 transition-transform duration-300"
//                     />
//                 </div>
//             </Link>
//             <div className="p-4">
//                 <Link href={`/products/${product.slug}`}>
//                     <h2 className="text-center text-slate-800 dark:text-slate-200 my-2 font-semibold text-lg hover:text-lime-600 transition-colors duration-300">
//                         {product.title}
//                     </h2>
//                 </Link>
//                 <div className="flex items-center justify-between gap-2 pb-3 dark:text-slate-200 text-slate-800">
//                     <p className="text-xl font-bold">UGX {product.salePrice}</p>
//                     <button
//                         onClick={handleAddToCart}
//                         className="flex items-center space-x-2 bg-lime-600 hover:bg-lime-700 px-4 py-2 rounded-md text-white transition-colors duration-300"
//                     >
//                         <BaggageClaim className="w-5 h-5" />
//                         <span>Add to Cart</span>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// "use client";
// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { BaggageClaim } from 'lucide-react';
// import { addToCart } from '../../redux/slices/cartSlice';
// import { useDispatch } from 'react-redux';
// import toast from "react-hot-toast";

// export default function Product({ product }) {
//     const dispatch = useDispatch();

//     function handleAddToCart() {
//         dispatch(addToCart(product));
//         toast.success("Item added Successfully");
//     }

//     // Fallback image in case imageUrl is invalid or not provided
//     const imageUrl = product.imageUrl ; // Add a default image path

//     return (
//         <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800">
//             <Link href={`/products/${product.slug}`}>
//                 <div className="relative w-full h-auto">
//                     <Image
//                         src={imageUrl}
//                         alt={product.title}
//                         layout="fill"
//                         objectFit="contain"
//                         className="rounded-sm p-2 object-cover hover:scale-105 transition-transform duration-300"
//                         onError={(e) => e.target.src = '/images/image-2.jpg'} // fallback on error
//                     />
//                 </div>
//             </Link>
//             <div className="p-4">
//                 <Link href={`/products/${product.slug}`}>
//                     <h2 className="text-center text-slate-800 dark:text-slate-200 my-2 font-semibold text-lg hover:text-lime-600 transition-colors duration-300">
//                         {product.title}
//                     </h2>
//                 </Link>
//                 <div className="flex items-center justify-between gap-2 pb-3 dark:text-slate-200 text-slate-800">
//                     <p className="text-xl font-bold">UGX {product.salePrice}</p>
//                     <button
//                         onClick={handleAddToCart}
//                         className="flex items-center space-x-2 bg-lime-600 hover:bg-lime-700 px-4 py-2 rounded-md text-white transition-colors duration-300"
//                         aria-label="Add to cart"
//                     >
//                         <BaggageClaim className="w-5 h-5" />
//                         <span>Add to Cart</span>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }
// "use client"
// import React, { useDebugValue } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { BaggageClaim } from 'lucide-react'
// import { addToCart } from '../../redux/slices/cartSlice'
// import { useDispatch } from 'react-redux'
// import toast from "react-hot-toast";

//  export default function Product({product}) {
//     const dispatch =useDispatch();
//     function handleAddToCart(){
//         dispatch(addToCart(product)); 
//         toast.success("Item added SuccessFully");
//     }
//     return (
//         <div 
//         className='rounded-lg mr-3 
//          bg-white
//       dark:bg-slate-900
//        overflow-hidden border shadow'>
//         <Link href={`/products/${product.slug}`}>
//         <Image src={product.imageUrl}
//        alt={product.title}
//        width={290} height={174} className="w-full h-48 object-cover" />
//         </Link>
//        <div className="px-4">
//        <Link href={`/products/${product.slug}`}>
//           <h2 className='text-center text-slate-800
//        dark:text-slate-200 my-2 font-semibold'> {product.title} </h2>
//           </Link>
//           <div className="flex items-center justify-between
//            gap-2 pb-3 dark:text-slate-200 text-slate-800">
//             <p>UGX {product.salePrice} </p>
//             <button onClick={()=>handleAddToCart()} className='flex items-center space-x-2
//              bg-lime-600 px-4 py-2 rounded-md text-white'>
//               <BaggageClaim/>
//               <span>Add</span>
//             </button>
//           </div>
//        </div>
//         </div>
//     )
//  }
 
//  "use client"
// import { ShoppingCart, Heart } from "lucide-react"
// import React from "react"
// import { useDispatch } from "react-redux"
// import toast from "react-hot-toast"
// import Image from "next/image"
// import Link from "next/link"
// import { motion } from "framer-motion"
// // import { addToCart, addToWishlist } from "@/store/actions" // تأكد من مسار الاستيراد الصحيح
// // import { addToWishlist } from '../../'
// import { addToCart } from '../../redux/slices/cartSlice'
// const Product = ({ product }) => {
//   const dispatch = useDispatch()

//   const handleAddToCart = (e) => {
//     e.preventDefault()
//     dispatch(addToCart(product))
//     toast.success("تمت الإضافة إلى السلة بنجاح!")
//   }

//   const discountPercentage = product.productPrice
//     ? Math.round(((product.productPrice - product.salePrice) / product.productPrice) * 100)
//     : 0

//   return (
//     <motion.div
//       className="h-full"
//       whileHover={{ y: -5 }}
//       transition={{ duration: 0.3 }}
//     >
//       <Link href={`/products/${product.slug}`} className="group block h-full">
//         <div className="h-full flex flex-col  rounded-md border border-slate-400/40     bg-slate-50
//         ">
//           {/* الصورة */}
//           <div className="relative aspect-[4/4]  overflow-hidden">
//             <Image
//               src={product.imageUrl || '/product-placeholder.jpg'}
//               alt={product.title}
//               fill
//               className="object-cover p-2 rounded-3xl  transition-transform duration-500"
//               quality={85}
//               priority={false}
//             />

//             {/* القلب */}
//             <button 
//               className="absolute top-3 left-3 p-1.5  hover:bg-red-600/60 bg-white/55 rounded-full shadow"
//               onClick={(e) => {
//                 e.preventDefault()
//                 dispatch(addToWishlist(product))
//                 toast.success("تمت الإضافة إلى المفضلة")
//               }}
//             >
//               <Heart className="w-4 h-4 text-gray-700" />
//             </button>

//             {/* نسبة الخصم */}
//             {discountPercentage > 0 && (
//               <div className="absolute top-4 right-3 bg-lime-700/60 text-white text-[12px]  p-1 rounded-full">
//                 -{discountPercentage}%
//               </div>
//             )}
//           </div>

//           {/* المحتوى */}
//           <div className="p-2 text-center font-arabic space-y-2">
//             <h3 className="text-base font-semibold text-gray-800">{product.title}</h3>

//             <div className="flex items-center justify-center gap-2 text-sm">
//               <span className="text-red-600 font-bold">
//                 {product.salePrice?.toLocaleString()} ريال
//               </span>
//               {product.productPrice && (
//                 <del className="text-gray-400">{product.productPrice} ريال</del>
//               )}
//             </div>

//             <motion.button
//               onClick={handleAddToCart}
//               className="w-full flex items-center hover:bg-lime-800 justify-center gap-3 px-1 font-arabic rounded-md font-medium bg-lime-700 text-white"
//               whileTap={{ scale: 0.95 }}
//             >
//               <ShoppingCart className="w-5 h-5" />
//               <span>أضف للسلة</span>
//             </motion.button>
//           </div>
//         </div>
//       </Link>
//     </motion.div>
//   )
// }

// // export default Product
// "use client"
// import { ShoppingCart, Heart } from "lucide-react"
// import React from "react"
// import { useDispatch } from "react-redux"
// import toast from "react-hot-toast"
// import Image from "next/image"
// import Link from "next/link"
// import { motion } from "framer-motion"
// import { addToCart as addToCartToCartSlice } from '@/redux/slices/cartSlice'
// import { addToWishlist } from '@/redux/slices/wishlistSlice'

// const Product = ({ product, customization = {}, categories = [], slugDomain }) => {
//   const dispatch = useDispatch()

//   const handleAddToCart = (e) => {
//     e.preventDefault()
//     dispatch(addToCartToCartSlice(product))  // استخدام الأكشن المعدل
//     toast.success("تمت الإضافة إلى السلة بنجاح!")
//   }

//   const discountPercentage = product.productPrice
//     ? Math.round(((product.productPrice - product.salePrice) / product.productPrice) * 100)
//     : 0

//   const primaryColor = customization?.primaryColor || '#4CAF50'; // اللون الأساسي
//   const secondaryColor = customization?.secondaryColor || '#2C3E50'; // اللون الثانوي
//   const accentColor = customization?.accentColor || '#FFC107'; // اللون المميز
//   const darkModeColor = customization?.darkModeColor || '#FACC15'; // لون أيقونة الدارك مود
//   const lightModeColor = customization?.lightModeColor || '#F97316'; // لون أيقونة الوضع الفاتح
//   const fontFamily = customization?.fontFamily || 'sans-serif'; // نوع الخط
//   const isActive = customization?.isActive ?? true;

//   return (
//     <motion.div 
//       className="h-full perspective"
//       whileHover={{ rotateY: 10, scale: 1.05 }} 
//       transition={{ duration: 0.3 }}
//     >
//       <motion.div className="group block  h-full bg-slate-50 rounded-md border border-slate-400/40 shadow-lg transform-style-3d">
//         <Link href={`/${slugDomain}/products/${product.slug}`} className="h-full flex flex-col">
//           <div className="relative aspect-[4/4] overflow-hidden">
//             <Image
//               src={product.imageUrl || '/product-placeholder.jpg'}
//               alt={product.title}
//               fill
//               className="object-cover p-2 rounded-3xl transition-transform duration-500"
//               quality={85}
//               priority={false}
//             />

//             <button 
//               className="absolute top-3 left-3 p-1.5 hover:bg-red-600/60 bg-white/55 rounded-full shadow"
//               onClick={(e) => {
//                 e.preventDefault()
//                 dispatch(addToWishlist(product))
//                 toast.success("تمت الإضافة إلى المفضلة")
//               }}
//             >
//               <Heart className="w-4 h-4 text-gray-700" />
//             </button>

//             {discountPercentage > 0 && (
//               <div className="absolute top-4 right-3 bg-lime-700/60 text-white text-[12px] p-1 rounded-full">
//                 -{discountPercentage}%
//               </div>
//             )}
//           </div>

//           <div className="p-2 text-center font-arabic space-y-2">
//             <h3 className="text-base font-semibold text-gray-800">{product.title}</h3>

//             <div className="flex items-center justify-center gap-2 text-sm">
//               <span className="text-red-600 font-bold">
//                 {product.salePrice?.toLocaleString()} ريال
//               </span>
//               {product.productPrice && (
//                 <del className="text-gray-400">{product.productPrice} ريال</del>
//               )}
//             </div>

//             <motion.button
//               onClick={handleAddToCart}
//               whileTap={{ scale: 0.95 }}
//               className="w-full flex items-center hover:bg-lime-800 justify-center gap-3 px-1 font-arabic rounded-md font-medium text-white"
//               style={{ backgroundColor: secondaryColor }}
         
//             >
//               <ShoppingCart className="w-5 h-5" />
//               <span>أضف للسلة</span>
//             </motion.button>
//           </div>
//         </Link>
//       </motion.div>
//     </motion.div>
//   )
// }

// export default Product

// export default Product
"use client"
import { ShoppingCart, Heart } from "lucide-react"
import React from "react"
import { useDispatch } from "react-redux"
import toast from "react-hot-toast"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { addToCart as addToCartToCartSlice } from '@/redux/slices/cartSlice'
import { addToWishlist } from '@/redux/slices/wishlistSlice'

const Product = ({ product, customization = {}, categories = [], slugDomain }) => {
  const dispatch = useDispatch()

  const handleAddToCart = (e) => {
    e.preventDefault()
    dispatch(addToCartToCartSlice(product))  // استخدام الأكشن المعدل
    toast.success("تمت الإضافة إلى السلة بنجاح!")
  }

  const discountPercentage = product.productPrice
    ? Math.round(((product.productPrice - product.salePrice) / product.productPrice) * 100)
    : 0

  const primaryColor = customization?.primaryColor || '#4CAF50'; // اللون الأساسي
  const secondaryColor = customization?.secondaryColor || '#2C3E50'; // اللون الثانوي
  const accentColor = customization?.accentColor || '#FFC107'; // اللون المميز
  const darkModeColor = customization?.darkModeColor || '#FACC15'; // لون أيقونة الدارك مود
  const lightModeColor = customization?.lightModeColor || '#F97316'; // لون أيقونة الوضع الفاتح
  const fontFamily = customization?.fontFamily || 'sans-serif'; // نوع الخط
  const isActive = customization?.isActive ?? true;

  return (
    <motion.div 
      className="h-full perspective"
      whileHover={{ rotateY: 10, scale: 1.05 }} 
      transition={{ duration: 0.3 }}
    >
      <motion.div className="group block  h-full bg-slate-50 rounded-md border border-slate-400/40 shadow-lg transform-style-3d">
        <Link href={`/${slugDomain}/products/${product.slug}`} className="h-full flex flex-col">
          <div className="relative aspect-[4/4] overflow-hidden">
            <Image
              src={product.imageUrl || '/product-placeholder.jpg'}
              alt={product.title}
              fill
              className="object-cover p-2 rounded-3xl transition-transform duration-500"
              quality={85}
              priority={false}
            />

            <button 
              className="absolute top-3 left-3 p-1.5 hover:bg-red-600/60 bg-white/55 rounded-full shadow"
              onClick={(e) => {
                e.preventDefault()
                dispatch(addToWishlist(product))
                toast.success("تمت الإضافة إلى المفضلة")
              }}
            >
              <Heart className="w-4 h-4 text-gray-700" />
            </button>

            {discountPercentage > 0 && (
              <div className="absolute top-4 right-3 bg-lime-700/60 text-white text-[12px] p-1 rounded-full"
              style={{ backgroundColor: secondaryColor }}>
                -{discountPercentage}%
              </div>
            )}
          </div>

          <div className="p-2 text-center font-arabic space-y-2">
            <h3 className="text-base font-semibold text-gray-800">{product.title}</h3>

            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="text-red-600 font-bold">
                {product.salePrice?.toLocaleString()} ريال
              </span>
              {product.productPrice && (
                <del className="text-gray-400">{product.productPrice} ريال</del>
              )}
            </div>

            <motion.button
              onClick={handleAddToCart}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center hover:bg-lime-800 justify-center gap-3 px-1 font-arabic rounded-md font-medium text-white"
              style={{ backgroundColor: secondaryColor }}
              
         
            >
              <ShoppingCart className="w-5 h-5" />
              <span>أضف للسلة</span>
            </motion.button>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default Product
