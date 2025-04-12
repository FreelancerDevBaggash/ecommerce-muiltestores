"use client"
import { ChevronRight } from 'lucide-react'
import React from 'react'
import  Link  from "next/link";
import { useSearchParams } from 'next/navigation';

export default function Breadcrumb({ title , resultCount }) {
    const searchParams = useSearchParams();
    const currentPage = searchParams.get("page") || 1
;   const pageSize = 3;
    const startRange = (currentPage - 1) * pageSize + 1;
    const endRange = Math.min(currentPage * pageSize, resultCount)
    // take: parseInt(pageSize),
    return (
        <div className="flex items-center justify-between text-xs">
        <div className="flex items-center">
            <Link href='/'>Home</Link>
            <ChevronRight className='w-5 h-5'/>
            <p>{ title }</p>
            {/* <Link href='#'>{title}</Link> */}
            </div>
            <p>{startRange}-{endRange} of {resultCount} results</p>      
    </div>
    );
}


