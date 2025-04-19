"use client";
import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useTheme } from "next-themes";

export default function CategoriesWithSmoothLightning({ storeId, categories, customization = {}, slugDomain = {} }) {
  // State management يبقى كما هو
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const [screenWidth, setScreenWidth] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);

  // نظام الألوان مع تحسينات لتأثير البرق
  const themeColors = useMemo(() => ({
    primary: customization?.primaryColor || '#3b82f6',
    secondary: customization?.secondaryColor || '#10b981',
    accent: customization?.accentColor || '#f59e0b',
    text: theme === 'dark' ? customization?.darkTextColor || '#f8fafc' : customization?.textColor || '#1e293b',
    background: theme === 'dark' ? customization?.darkBackgroundColor || '#1e293b' : customization?.backgroundColor || '#f8fafc',
    button: theme === 'dark' ? customization?.darkButtonColor || '#475569' : customization?.buttonColor || '#3b82f6',
    buttonText: customization?.buttonTextColor || '#ffffff',
    cardBg: theme === 'dark' ? customization?.darkCardBackground || '#334155' : customization?.cardBackground || '#ffffff',
    border: theme === 'dark' ? customization?.darkBorderColor || '#475569' : customization?.borderColor || '#e2e8f0',
    lightning: '#ffffff',
    lightningGlow: customization?.primaryColor || '#3b82f6',
    lightningSecondary: '#a5d8ff' // لون ثانوي لتأثير البرق
  }), [theme, customization]);

  // بقاء useEffect و useMemo كما هي
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const visibleCategories = useMemo(() => {
    if (!categories.length || screenWidth === 0) return [];
    let itemsToShow = 2;
    if (screenWidth >= 640) itemsToShow = 3;
    if (screenWidth >= 768) itemsToShow = 4;
    if (screenWidth >= 1024) itemsToShow = 5;
    if (screenWidth >= 1280) itemsToShow = 6;
    
    const start = currentIndex % categories.length;
    const end = start + itemsToShow;
    return end <= categories.length
      ? categories.slice(start, end)
      : [...categories.slice(start), ...categories.slice(0, end - categories.length)];
  }, [currentIndex, categories, screenWidth]);

  useEffect(() => {
    if (isHovered || categories.length <= 1) return;
    const interval = setInterval(() => setCurrentIndex(prev => (prev + 1) % categories.length), 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isHovered, categories]);

  const handleNext = () => setCurrentIndex(prev => (prev + 1) % categories.length);
  const handlePrev = () => setCurrentIndex(prev => (prev - 1 + categories.length) % categories.length);

  if (!categories.length) {
    return (
      <div className="mt-12 px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} height={400} className="rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <section
      className="mt-12 px-4 sm:px-8 lg:px-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto">
        {/* العنوان والوصف */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: themeColors.text }}>
              تصفح فئاتنا
            </h2>
            <p className="mt-2 text-sm md:text-base" style={{ color: hexToRgba(themeColors.text, 0.7) }}>
              اكتشف مجموعتنا المميزة من الفئات
            </p>
          </div>
          
          {categories.length > 1 && (
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full transition-all hover:scale-110"
                style={{
                  backgroundColor: hexToRgba(themeColors.primary, 0.1),
                  color: themeColors.primary,
                }}
                aria-label="السابق"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full transition-all hover:scale-110"
                style={{
                  backgroundColor: hexToRgba(themeColors.primary, 0.1),
                  color: themeColors.primary,
                }}
                aria-label="التالي"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* شبكة الفئات مع تأثير البرق السلس */}
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
            {visibleCategories.map((category, idx) => (
              <Link
                key={`${category.slug}-${idx}`}
                href={`${slugDomain}/category/${category.slug}`}
                className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-2xl"
                onMouseEnter={() => setHoveredItem(idx)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* تأثير البرق السلس بدون تقطع */}
                <div className={`absolute inset-0 rounded-xl overflow-hidden z-10 ${hoveredItem === idx ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                  <svg className="absolute inset-0 w-full h-full">
                    <rect 
                      x="2" y="2" 
                      width="calc(100% - 4px)" 
                      height="calc(100% - 4px)" 
                      rx="12" 
                      ry="12" 
                      stroke="url(#smoothLightningGradient)" 
                      strokeWidth="3" 
                      fill="transparent"
                      style={{
                        animation: `lightning-flow 1.5s linear infinite`,
                        strokeLinecap: 'round',
                        filter: `drop-shadow(0 0 8px ${themeColors.lightningGlow})`,
                        strokeDasharray: '150',
                        strokeDashoffset: '300'
                      }}
                    />
                    <defs>
                      <linearGradient id="smoothLightningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={themeColors.lightning} stopOpacity="1" />
                        <stop offset="50%" stopColor={themeColors.lightningSecondary} stopOpacity="0.9" />
                        <stop offset="100%" stopColor={themeColors.lightning} stopOpacity="1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* الصورة المربعة بحجم أكبر */}
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={category.imageUrl}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    priority={idx < 2} // تحميل أول صورتين بسرعة
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* معلومات الفئة */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                  <h3 
                    className="font-bold text-white text-xl md:text-2xl transition-transform duration-300 group-hover:-translate-y-2"
                    style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
                  >
                    {category.title}
                  </h3>
                  <p 
                    className="text-md text-white/90 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
                  >
                    {category.products?.length || 0} منتج
                  </p>
                </div>

                {/* تأثير التوهج القوي عند hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `0 0 30px ${hexToRgba(themeColors.primary, 0.7)}`,
                  }}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* مؤشرات الصفحات */}
        {categories.length > 1 && (
          <div className="flex justify-center mt-10 gap-3">
            {categories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className="h-2 rounded-full transition-all duration-300 hover:opacity-80"
                style={{
                  width: currentIndex % categories.length === idx ? '28px' : '14px',
                  backgroundColor: currentIndex % categories.length === idx
                    ? themeColors.primary
                    : hexToRgba(themeColors.text, 0.3),
                  opacity: currentIndex % categories.length === idx ? 1 : 0.7
                }}
                aria-label={`انتقل إلى الفئة ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* تعريف تأثيرات الـ animation في CSS */}
      <style jsx global>{`
        @keyframes lightning-flow {
          0% {
            stroke-dashoffset: 300;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
}

// دالة تحويل الألوان
function hexToRgba(hex, opacity = 1) {
  if (!hex) return '';
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
