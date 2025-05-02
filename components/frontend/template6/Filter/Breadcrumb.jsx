"use client";

import { ChevronLeft } from 'lucide-react';
import React from 'react';
import Link from "next/link";
import { useSearchParams } from 'next/navigation';

export default function Breadcrumb({ title, resultCount }) {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const pageSize = 3;

  const startRange = (currentPage - 1) * pageSize + 1;
  const endRange = Math.min(currentPage * pageSize, resultCount);

  return (
    <div dir="rtl"  className="container mx-auto flex flex-col dark:bg-slate-900 sm:flex-row sm:items-center justify-between gap-2 
    text-sm md:text-base text-gray-800 dark:text-white px-4 sm:px-6">
      
      {/* المسار */}
      <div dir="rtl"  className="flex items-center gap-2 flex-wrap">
        <Link href="/" className="text-lime-600 hover:underline">الرئيسة</Link>
        <ChevronLeft className="w-4 h-4 text-gray-500 dark:text-gray-300" />
        <span className="font-medium">{title}</span>
      </div>

      {/* عدد النتائج */}
      <div className="text-gray-500 dark:text-gray-300">
        {startRange}-{endRange} من {resultCount} نتيجة
      </div>
    </div>
  );
}


