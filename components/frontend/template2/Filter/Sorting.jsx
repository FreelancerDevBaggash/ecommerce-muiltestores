"use client"
//import { ChevronRight, Link } from 'lucide-react'
import React from 'react'
// import Breadcrumb from './Breadcrumb';
import  Link  from "next/link";
import { useSearchParams } from 'next/navigation';

export default function Sorting({ title , slug }) {
   // const pathname = usePathname()
    const searchParams = useSearchParams();
    const sortParam = searchParams.get("sort");
    //  console.log(pathname)
    const sortingLinks =[
        {
            title: "Relevance",
            href: `/category/${slug}`,
            sort: null,
        },
        {
            title: "Price - High to Low ",
            href: `/category/${slug}?sort=desc`,
            sort:"desc",
        },
        {
            title: "Price - Low to High",
            href: `/category/${slug}?sort=asc`,
            sort:"asc",
        },
    ]
    return (
    
                <div className='flex items-center justify-between '>
                    {/* <h2 className='text-2xl'> Search Result - Electronic</h2> */}
                    {/* <h2 className='text-2xl font-medium'>{isSearch && "Search Results -"}{title} </h2> */}
                    <div className="flex text-sm items-center  gap-3 ">
                         <p> Sort by:</p>
                    <div className="flex items-center">
                       {
                         sortingLinks.map((link, i)=>{
                            return (
                                <Link key={i} className={`${
                                    link.sort === sortParam
                                    ? "bg-slate-800 px-2 py-1 border border-lime-400 text-lime-400" 
                                    : "border border-slate-500 px-2 py-1 "}`} 
                                    href={link.href} > 
                                    {link.title}
                                    </Link>
                            )
                         })

                       }
                      
                    </div>
                     </div>
                </div>
   
    );
}


