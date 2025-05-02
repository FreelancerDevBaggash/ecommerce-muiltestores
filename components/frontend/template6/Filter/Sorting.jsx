// "use client"
// //import { ChevronRight, Link } from 'lucide-react'
// import React from 'react'
// // import Breadcrumb from './Breadcrumb';
// import  Link  from "next/link";
// import { useSearchParams } from 'next/navigation';

// export default function Sorting({ title , slug }) {
//    // const pathname = usePathname()
//     const searchParams = useSearchParams();
//     const sortParam = searchParams.get("sort");
//     //  console.log(pathname)
//     const sortingLinks =[
//         {
//             title: "Relevance",
//             href: `/category/${slug}`,
//             sort: null,
//         },
//         {
//             title: "Price - High to Low ",
//             href: `/category/${slug}?sort=desc`,
//             sort:"desc",
//         },
//         {
//             title: "Price - Low to High",
//             href: `/category/${slug}?sort=asc`,
//             sort:"asc",
//         },
//     ]
//     return (
    
//                 <div className='flex items-center justify-between '>
//                     {/* <h2 className='text-2xl'> Search Result - Electronic</h2> */}
//                     {/* <h2 className='text-2xl font-medium'>{isSearch && "Search Results -"}{title} </h2> */}
//                     <div className="flex text-sm items-center  gap-3 ">
//                          <p> Sort by:</p>
//                     <div className="flex items-center">
//                        {
//                          sortingLinks.map((link, i)=>{
//                             return (
//                                 <Link key={i} className={`${
//                                     link.sort === sortParam
//                                     ? "bg-slate-800 px-2 py-1 border border-lime-400 text-lime-400" 
//                                     : "border border-slate-500 px-2 py-1 "}`} 
//                                     href={link.href} > 
//                                     {link.title}
//                                     </Link>
//                             )
//                          })

//                        }
                      
//                     </div>
//                      </div>
//                 </div>
   
//     );
// }
"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Sorting({ title, slug }) {
  const searchParams = useSearchParams();
  const sortParam = searchParams.get("sort");

  const sortingLinks = [
    {
      title: "الافتراضي",
      href: `/category/${slug}`,
      sort: null,
    },
    {
      title: "السعر من الأعلى إلى الأقل",
      href: `/category/${slug}?sort=desc`,
      sort: "desc",
    },
    {
      title: "السعر من الأقل إلى الأعلى",
      href: `/category/${slug}?sort=asc`,
      sort: "asc",
    },
  ];

  return (
    <div
      dir="rtl"
      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-900 rounded-xl shadow-md w-full"
    >
      <h2 className="text-xl font-bold text-gray-800 dark:text-white">
        {title || "ترتيب المنتجات"}
      </h2>

      <div className="flex flex-wrap gap-2 text-sm items-center">
        <span className="text-gray-600 dark:text-gray-300">الترتيب حسب:</span>
        {sortingLinks.map((link, i) => (
          <Link
            key={i}
            className={`transition px-3 py-1 rounded-lg border text-sm font-medium ${
              link.sort === sortParam
                ? "bg-lime-600 text-white border-lime-600 hover:bg-lime-700 dark:bg-lime-500 dark:border-lime-500"
                : "text-gray-700 border-gray-300 hover:border-lime-500 hover:text-lime-600 dark:text-gray-300 dark:border-gray-600 dark:hover:text-lime-400"
            }`}
            href={link.href}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
