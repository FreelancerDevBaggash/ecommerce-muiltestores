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

"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BaggageClaim } from 'lucide-react';
import { addToCart } from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import toast from "react-hot-toast";

export default function Product({ product }) {
    const dispatch = useDispatch();

    function handleAddToCart() {
        dispatch(addToCart(product));
        toast.success("Item added Successfully");
    }

    // Fallback image in case imageUrl is invalid or not provided
    const imageUrl = product.imageUrl ; // Add a default image path

    return (
        <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800">
            <Link href={`/products/${product.slug}`}>
                <div className="relative w-full h-96">
                    <Image
                        src={imageUrl}
                        alt={product.title}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-sm p-2 hover:scale-105 transition-transform duration-300"
                        onError={(e) => e.target.src = '/images/image-2.jpg'} // fallback on error
                    />
                </div>
            </Link>
            <div className="p-4">
                <Link href={`/products/${product.slug}`}>
                    <h2 className="text-center text-slate-800 dark:text-slate-200 my-2 font-semibold text-lg hover:text-lime-600 transition-colors duration-300">
                        {product.title}
                    </h2>
                </Link>
                <div className="flex items-center justify-between gap-2 pb-3 dark:text-slate-200 text-slate-800">
                    <p className="text-xl font-bold">UGX {product.salePrice}</p>
                    <button
                        onClick={handleAddToCart}
                        className="flex items-center space-x-2 bg-lime-600 hover:bg-lime-700 px-4 py-2 rounded-md text-white transition-colors duration-300"
                        aria-label="Add to cart"
                    >
                        <BaggageClaim className="w-5 h-5" />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
