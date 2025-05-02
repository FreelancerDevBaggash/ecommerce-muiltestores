// import React from 'react'
// import Link from 'next/link'
// export default function EmptyCart() {
//     return (
//         <div  className='flex items-center justify-center min-h-screen'>
//             <p className='md:text-2xl'> Your Cart is empty{""}
//                <Link className='text-slate-800 dark:text-lime-500'href="/">
//                Start Shopping 
//                </Link>
//                </p>

//         </div>
//     );
// }

import React from 'react';
import Link from 'next/link';

export default function EmptyCart({slugDomain}) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
            <p className="md:text-2xl text-center text-gray-700 dark:text-gray-200">
                سلة المشتريات فارغة&nbsp;
                <Link href={`/${slugDomain}`} className="text-blue-600 dark:text-lime-400 underline hover:opacity-80 transition">
                    ابدأ التسوق الآن
                </Link>
            </p>
        </div>
    );
}


