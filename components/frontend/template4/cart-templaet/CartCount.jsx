// "use client"
// import React from 'react'
// import Link from 'next/link'
// import { ShoppingCart } from 'lucide-react'
// import { useSelector } from 'react-redux';
// export default function CartCount({slugDomain}) {
//     const cartItems =useSelector((store)=>store.cart);

//     return (
//       <Link href={`/${slugDomain}/cart`}
//         className="relative inline-flex items-center p-3 text-sm font-medium text-center
//          text-white bg-transparent rounded-lg "
//       >
//         <ShoppingCart className="text-lime-700 dark:text-lime-500" />
//         <span className="sr-only">Cart</span>
//         <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full -top-0 end-6 dark:border-gray-900">
//           {cartItems.length}
//         </div>
//       </Link>
//     )
// }
// "use client"
// import React from 'react'
// import { useRouter } from 'next/navigation'
// import { ShoppingCart } from 'lucide-react'
// import { useSelector } from 'react-redux'

// export default function CartCount({ slugDomain , customization = {}}) {
//     const primaryColor = customization.primaryColor || '#4CAF50'; // اللون الأساسي
//     const secondaryColor = customization.secondaryColor || '#2C3E50'; // اللون الثانوي
//     const accentColor = customization.accentColor || '#FFC107'; // اللون المميز
//     const backgroundColor = customization.backgroundColor || '#FFFFFF'; // لون الخلفية
//     const fontFamily = customization.fontFamily || 'sans-serif'; // نوع الخط
//     const isActive = customization.isActive ?? true;
//     const router = useRouter();
//     const cartItems = useSelector((store) => store.cart);

//     const handleNavigation = (e) => {
//         e.preventDefault(); // منع السلوك الافتراضي
//         router.push(`/${slugDomain}/cart`);
//     };

//     return (
//         <a 
//           href={`/${slugDomain}/cart`} 
//           onClick={handleNavigation}
//           className="relative inline-flex items-center p-3 text-sm font-medium text-center
//          text-white bg-transparent rounded-lg "
//         >
//             <ShoppingCart className="text-lime-700 dark:text-lime-500" style={{ color: backgroundColor }}/>
//             <span className="sr-only">Cart</span>
//             <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full -top-0 end-6 dark:border-gray-900">
//                 {cartItems.length}
//             </div>
//         </a>
//     )
// }


"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

export default function CartCount({ slugDomain, customization = {} }) {
    const primaryColor = customization?.primaryColor || '#4CAF50'; // اللون الأساسي
    const secondaryColor = customization?.secondaryColor || '#2C3E50'; // اللون الثانوي
    const accentColor = customization?.accentColor || '#FFC107'; // اللون المميز
    const backgroundColor = customization?.backgroundColor || '#FFFFFF'; // لون الخلفية
    const fontFamily = customization?.fontFamily || 'sans-serif'; // نوع الخط
    const isActive = customization?.isActive ?? true; // هل التخصيص مفعل؟
    const router = useRouter();
    const cartCount = useSelector((store) => store.cart.length);

    const handleNavigation = (e) => {
        e.preventDefault(); // منع إعادة تحميل الصفحة
        router.push(`/${slugDomain}/cart`);
    };

    return (
        <button
            onClick={handleNavigation}
            className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg"
        >
            <ShoppingCart className="text-lime-700 dark:text-lime-500" style={{ color: primaryColor }} />
            <span className="sr-only">Cart</span>
            {cartCount > 0 && (
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-0 end-6 dark:border-gray-900">
                    {cartCount}
                </div>
            )}
        </button>
    );
}
