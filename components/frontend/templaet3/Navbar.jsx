
'use client';

import React, { useEffect, useState, useMemo, useCallback } from 'react';
// import { useSession } from 'next-auth/react';
import useCustomerSession from '@/hooks/useCustomerSession';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { User, Menu, X, ShoppingCart, HelpCircle, ChevronDown } from 'lucide-react';
import SearchForm from './SearchForm';
import HelpModalstore from './HelpModal-store';
import CartCount from '../templaet3/cart-templaet/CartCount';
import ThemeSwitcherBtn from '../../ThemeSwitcherBtn';
import UserAvatar from './UserAvatar';
import { useTheme } from 'next-themes';

export default function Navbar({ slugDomain, storeData ={}, customization = {} }) {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  // ============== تحسينات التخصيص ==============
  const {
    primaryColor = '#3B82F6',
    secondaryColor = '#8B5CF6',
    accentColor = '#EC4899',
    backgroundColor = '#FFFFFF',
    textColor = '#1F2937',
    darkTextColor = '#F3F4F6',
    darkBackgroundColor = '#111827',
    fontFamily = 'Cairo, sans-serif',
    rounded = '12px',
    shadow = 'md',
    hoverEffect = 'scale',
    navType = 'solid',
    borderWidth = '1px',
    logoSize = 'medium'
  } = customization;

  // ============== إنشاء متغيرات CSS ديناميكية ==============
  const cssVariables = useMemo(() => {
    const baseVars = {
      '--primary': primaryColor,
      '--primary-hover': `${primaryColor}dd`,
      '--secondary': secondaryColor,
      '--accent': accentColor,
      '--bg': isDarkMode ? darkBackgroundColor : backgroundColor,
      '--text': isDarkMode ? darkTextColor : textColor,
      '--dark-bg': darkBackgroundColor,
      '--dark-text': darkTextColor,
      '--rounded': rounded === 'full' ? '9999px' : `${rounded}px`,
      '--shadow': shadow === 'none' ? 'none' : `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)`,
      '--border-width': borderWidth,
      '--nav-opacity': navType === 'transparent' ? '0.95' : '1',
      '--nav-blur': navType === 'blurred' ? '8px' : '0',
      '--font-family': fontFamily
    };

    // توليد درجات ألوان متدرجة
    for (let i = 100; i <= 900; i += 100) {
      baseVars[`--primary-${i}`] = adjustColorShade(primaryColor, i);
      baseVars[`--secondary-${i}`] = adjustColorShade(secondaryColor, i);
    }

    return baseVars;
  }, [customization, isDarkMode]);

  function adjustColorShade(hex, weight) {
    return hex;
  }

  // ============== حالات المكون ==============
  const {  session, loading } = useCustomerSession();
  // const [store, setStore] = useState(null);
  const [categories, setCategories] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
 const status = session ? "authenticated" : "unauthenticated";

  // ============== تأثيرات التمرير ==============
  useEffect(() => {
    const handleScroll = debounce(() => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    }, 50);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  function debounce(func, wait) {
    let timeout;
    return function() {
      const context = this, args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

 
  // ============== تأثيرات Hover الديناميكية ==============
  const getHoverClass = useMemo(() => {
    const baseClasses = 'transition-all duration-300 ease-out';
    
    switch (hoverEffect) {
      case 'scale': return `${baseClasses} hover:scale-105`;
      case 'shadow': return `${baseClasses} hover:shadow-lg`;
      case 'rotate': return `${baseClasses} hover:rotate-1`;
      case 'glow': return `${baseClasses} hover:shadow-[0_0_15px_var(--primary-300)]`;
      default: return `${baseClasses} hover:translate-y-[-2px]`;
    }
  }, [hoverEffect]);

  // ============== أنماط الشريط العلوي ==============
  const navStyle = useMemo(() => {
    const baseStyle = {
      backgroundColor: scrolled ? `var(--bg)` : `var(--${navType === 'transparent' ? 'bg' : 'bg'})`,
      backdropFilter: `blur(var(--nav-blur))`,
      opacity: `var(--nav-opacity)`,
      borderBottom: scrolled ? `var(--border-width) solid var(--primary-200)` : 'none'
    };
    
    if (navType === 'gradient') {
      baseStyle.background = scrolled 
        ? `var(--bg)` 
        : `linear-gradient(to bottom, var(--primary), var(--bg))`;
    }
    
    return baseStyle;
  }, [scrolled, navType]);

  // ============== أحجام الشعار الديناميكية ==============
  const logoSizeClass = useMemo(() => {
    switch (logoSize) {
      case 'small': return 'w-8 h-8';
      case 'medium': return 'w-12 h-12';
      case 'large': return 'w-16 h-16';
      default: return 'w-12 h-12';
    }
  }, [logoSize]);

  const logoTextSize = useMemo(() => {
    switch (logoSize) {
      case 'small': return 'text-base';
      case 'medium': return 'text-xl';
      case 'large': return 'text-2xl';
      default: return 'text-xl';
    }
  }, [logoSize]);

  return (
    <>
      <style jsx global>{`
        :root {
          --primary: ${primaryColor};
          --secondary: ${secondaryColor};
          --accent: ${accentColor};
          --font-family: ${fontFamily};
        }
        body {
          font-family: var(--font-family);
          direction: rtl;
          background-color: var(--bg);
          color: var(--text);
        }
        .hover-scale {
          transform-origin: center;
        }
        @media (max-width: 768px) {
          .rtl-support {
            padding-right: 1rem;
            padding-left: 1rem;
          }
        }
      `}</style>


      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
          scrolled ? 'py-2 shadow-sm' : 'py-4'
        }`}
        style={{ ...cssVariables, ...navStyle }}
        dir="rtl"
      >
        <div className="container mx-auto px-4 xl:px-0 rtl-support">
          <div className="flex items-center justify-between gap-6">
            
            {/* الشعار واسم المتجر - يظهر في جميع الأجهزة */}
            <div className="flex items-center flex-1">
              <Link 
                href={`/${slugDomain}`}
                className={`flex items-center gap-3 ${getHoverClass} hover-scale`}
                aria-label="الرئيسية"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative ${logoSizeClass} rounded-full overflow-hidden border-2 border-primary transition-all ${
                    scrolled ? 'scale-90' : ''
                  }`}
                >
                  <Image
                    src={storeData?.profileImageUrl }
                    alt={`شعار ${storeData?.businessName }`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50px, 80px"
                    priority
                  />
                </motion.div>
                <motion.h1 
                  className={`${logoTextSize} font-extrabold text-primary whitespace-nowrap ${
                    scrolled ? 'scale-95' : ''
                  }`}
                  whileHover={{ color: 'var(--primary-600)' }}
                >
                  {storeData?.businessName }
                </motion.h1>
              </Link>
            </div>

            {/* شريط البحث - يظهر في الأجهزة الكبيرة فقط */}
            <div className="hidden lg:flex items-center justify-center flex-1 max-w-2xl">
              <div className="w-full relative">
                <SearchForm customization={customization} slugDomain={slugDomain} />
              </div>
            </div>

            {/* الجزء الأيمن: أدوات المستخدم */}
            <div className="flex items-center justify-end flex-1 gap-1 sm:gap-3">
              <ThemeSwitcherBtn customization={customization} />
              
              {/* سلة التسوق - تظهر خارج القائمة في الجوال */}
              <div className="flex items-center gap-1">
                <CartCount slugDomain={slugDomain} customization={customization}>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full hover:bg-primary-100 dark:hover:bg-gray-700 relative transition-colors"
                    aria-label="سلة التسوق"
                  >
                    <ShoppingCart className="w-5 h-5 text-primary" />
                  </motion.button>
                </CartCount>
              </div>

              {/* بقية العناصر تظهر في الأجهزة الكبيرة فقط */}
              <div className="hidden sm:flex items-center gap-1">
                <HelpModalstore customization={customization}>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full hover:bg-primary-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="مساعدة"
                  >
                    <HelpCircle className="w-5 h-5 text-primary" />
                  </motion.button>
                </HelpModalstore>
              </div>

              {status === "unauthenticated" ? (
                <Link
                  href={`${slugDomain}/loginCustomer?redirect=${encodeURIComponent(pathname)}`}
                  className={`hidden sm:flex items-center px-4 py-2 rounded-[var(--rounded)] bg-primary text-white hover:bg-primary-600 transition-colors ${getHoverClass}`}
                >
                  <User className="w-4 h-4 ml-2" />
                  <span className="text-sm font-medium">تسجيل الدخول</span>
                </Link>
              ) : (
                <div className="relative hidden sm:block">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-1 p-2 rounded-full hover:bg-primary-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="حساب المستخدم"
                    aria-expanded={isDropdownOpen}
                  >
                    <UserAvatar user={session?.user} slugDomain={slugDomain} />
                  </motion.button>
                </div>
              )}

              {/* زر القائمة الجوال */}
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="lg:hidden p-2 rounded-full hover:bg-primary-100 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="القائمة"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-primary" />
                ) : (
                  <Menu className="w-6 h-6 text-primary" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* القائمة الجوال */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background dark:bg-dark-background border-t border-gray-200 dark:border-gray-700 overflow-hidden"
              dir="rtl"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col gap-4">
                  <SearchForm customization={customization} />
                  
                  {categories.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {categories.map(category => (
                        <Link 
                          key={category._id} 
                          href={`${slugDomain}/category/${category.slug}`}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm hover:bg-primary hover:text-white transition-colors"
                        >
                          {category.title}
                        </Link>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-4">
                      <HelpModalstore customization={customization}>
                        <button className="p-2 rounded-full hover:bg-primary-100 dark:hover:bg-gray-700">
                          <HelpCircle className="w-5 h-5 text-primary" />
                        </button>
                      </HelpModalstore>
                    </div>
                    
                    {status === "unauthenticated" ? (
                      <Link
                        href={`${slugDomain}/loginCustomer?redirect=${encodeURIComponent(pathname)}`}
                        className={`flex items-center px-4 py-2 rounded-[var(--rounded)] bg-primary text-white hover:bg-primary-600 transition-colors ${getHoverClass}`}
                      >
                        <User className="w-4 h-4 ml-2" />
                        <span className="text-sm font-medium">تسجيل الدخول</span>
                      </Link>
                    ) : (
                      <Link
                        href="/profile"
                        className="flex items-center gap-2 text-sm font-medium"
                      >
                        <UserAvatar user={session?.user} slugDomain={slugDomain} size="sm" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      {/* مساحة احتياطية للناڤبار */}
      <div className={`h-${logoSize === 'large' ? '28' : '24'}`}></div>
    </>
  );
}