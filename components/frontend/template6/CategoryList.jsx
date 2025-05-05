
"use client"

import React, { useRef } from 'react'
import Link from 'next/link'
import CategoryCarousel from './CategoryCarousel'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function CategoryList({ category, isMarketPage,        customization={} ,  slugDomain }) {
  const carouselRef = useRef(null)

  const primaryColor = customization?.primaryColor || '#4CAF50'; // اللون الأساسي
  const secondaryColor = customization?.secondaryColor || '#2C3E50'; // اللون الثانوي
  const accentColor = customization?.accentColor || '#FFC107'; // اللون المميز
  const backgroundColor = customization?.backgroundColor || '#FFFFFF'; // لون الخلفية
  const fontFamily = customization?.fontFamily || 'sans-serif'; // نوع الخط
  const isActive = customization?.isActive ?? true;
  return (
    <div dir="rtl" className="font-arabic rounded-lg  dark:bg-slate-800 dark:border-gray-700/20 text-slate-800">

      {/* العنوان العلوي + أسهم التحكم */}
      <div className="py-4 px-6 font-semibold text-slate-800  dark:bg-slate-800 dark:text-slate-100 flex justify-between items-center">

        {/* عنوان القسم */}
        <div className="text-lg dark:text-gray-300" style={{ color: primaryColor }}>
          {category.title}
        </div>

        {/* أزرار التنقل + عرض الكل */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => carouselRef.current?.prev()}
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 p-1 rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => carouselRef.current?.next()}
            className="bg-gray-200 hover:bg-gray-300  p-1 rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* <Link
            href={`/category/${category.slug}`}
            className="bg-lime-600 hover:bg-lime-700 text-white rounded-md px-4 py-2 text-sm transition-all"
          >
            عرض الكل
          </Link> */}
        </div>
      </div>

      {/* الكاروسيل */}
      <div  dir="rtl" className="bg-white dark:bg-slate-900 p-4">
        <CategoryCarousel
          ref={carouselRef}
          isMarketPage={isMarketPage}
          products={category.products}
          customization={customization}
          slugDomain={slugDomain}
        />
      </div>
    </div>
  )
}
