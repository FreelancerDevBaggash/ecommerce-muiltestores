
'use client';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ParallaxWrapper from './ParallaxWrapper';

// Dynamic imports with better error handling
const Banner = dynamic(() => import('./Banner').catch(() => () => null), { 
  loading: () => <Skeleton height={600} className="rounded-2xl" />
});
const AutoPlay = dynamic(() => import('./AutoPlay').catch(() => () => null));
const FavaroteProducts = dynamic(() => import('./FavaroteProducts').catch(() => () => null));
const Testimonials = dynamic(() => import('./Testimonials').catch(() => () => null));
const PremiumFeatureCard = dynamic(() => import('./PremiumFeatureCard').catch(() => () => null));

const Home = ({ 
  banners = [], 
  coupons={},
  storeId = {}, 
  customization = {}, 
  products = [],
  slugDomain = {}, 
  categories = [],
  
  store = {} // Add storeData prop to access merchant phone number
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Enhanced parallax effects
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.8, 0.8, 1]);

  // Gradient wave effect
  const waveColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      customization?.primaryColor || '#3b82f6',
      customization?.secondaryColor || '#10b981',
      customization?.accentColor || '#f59e0b',
      customization?.secondaryColor || '#10b981',
      customization?.primaryColor || '#3b82f6'
    ]
  );

  useEffect(() => setIsMounted(true), []);

  const themeColors = useMemo(() => ({
    primary: customization?.primaryColor || '#3b82f6',
    secondary: customization?.secondaryColor || '#10b981',
    accent: customization?.accentColor || '#f59e0b',
    text: resolvedTheme === 'dark' ? customization?.darkTextColor || '#f8fafc' : customization?.textColor || '#1e293b',
    background: resolvedTheme === 'dark' ? customization?.darkBackgroundColor || '#0f172a' : customization?.backgroundColor || '#ffffff',
    button: resolvedTheme === 'dark' ? customization?.darkButtonColor || '#1e293b' : customization?.buttonColor || '#3b82f6',
    buttonText: customization?.buttonTextColor || '#ffffff',
    cardBg: resolvedTheme === 'dark' ? customization?.darkCardBackground || '#1e293b' : customization?.cardBackground || '#ffffff',
    border: resolvedTheme === 'dark' ? customization?.darkBorderColor || '#334155' : customization?.borderColor || '#e2e8f0',
  }), [resolvedTheme, customization]);

  const fetchCategories = useCallback(async () => {
    try {
      const res = await fetch(`/api/categories?storeId=${storeId}`);
      const data = await res.json();
      setFilteredCategories(data?.filter(c => c.products?.length > 0) || []);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  }, [storeId]);
 
  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    } else {
      setFilteredCategories(categories.filter(c => c.products?.length > 0));
      setIsLoading(false);
    }
  }, [categories, fetchCategories]);

  // WhatsApp click handler
  const handleWhatsApp = useCallback(() => {
    if (!store?.phone) {
      toast.error('رقم الجوال غير متوفر');
      return;
    }
    
    try {
      const formattedPhone = store.phone.replace(/\D/g, '');
      const whatsappUrl = `https://wa.me/${formattedPhone}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('خطأ في فتح واتساب:', error);
      toast.error('حدث خطأ أثناء محاولة الاتصال');
    }
  }, [store?.phone]);
  // Smoother transitions
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.5
      }
    }
  };

  if (!isMounted) return null;

  if (isLoading) {
    return (
      <motion.div
        {...pageTransition}
        className="min-h-screen p-4" 
        style={{ backgroundColor: themeColors.background }}
      >
        <div className="container mx-auto space-y-8">
          <Skeleton height={600} className="rounded-2xl" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} height={300} className="rounded-2xl" />
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
    <motion.main
      key={`${resolvedTheme}-home`}
      {...pageTransition}
      style={{ 
        backgroundColor: themeColors.background,
        color: themeColors.text,
        fontFamily: customization?.fontFamily || 'var(--font-sans)'
      }}
      className="min-h-screen overflow-x-hidden"
    >
        {/* Banner with enhanced parallax */}
        <motion.div style={{ y, opacity }}>
          <ParallaxWrapper intensity={15} >
            <Banner 
              banners={banners} 
              slugDomain={slugDomain}
              categories={categories}
              themeColors={themeColors}
              customization={customization}
            />
          </ParallaxWrapper>
        </motion.div>

        {/* AutoPlay with layered parallax */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="py-16 relative"
        >
          <motion.div
            style={{
              backgroundColor: waveColor,
              opacity: 0.1,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: -1,
              scale: 1.2,
              rotate
            }}
          />
          <ParallaxWrapper direction="up" intensity={2}>
            <AutoPlay 
              categories={categories}
              storeId={storeId}
              slugDomain={slugDomain}
              themeColors={themeColors}
              customization={customization}
            />
          </ParallaxWrapper>
        </motion.section>

        {/* Favorite Products with dynamic background */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          className="py-16 relative"
        >
          <motion.div
            style={{
              background: `linear-gradient(45deg, ${themeColors.primary}20, ${themeColors.secondary}20)`,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: -1,
              scale: 1.1,
              rotate: -2
            }}
          />
          <ParallaxWrapper direction="left" intensity={30}>
            <FavaroteProducts 
              products={products} 
              customization={customization} 
              categories={categories} 
              slugDomain={slugDomain}
              themeColors={themeColors}
              // subcategory={subcategory}
            />
          </ParallaxWrapper>
        </motion.section>

        {/* Testimonials with scaling effect */}
        <motion.section 
          style={{ scale }} 
          className="py-20 relative overflow-hidden"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            style={{
              background: `linear-gradient(-45deg, ${themeColors.accent}, ${themeColors.primary})`,
              backgroundSize: '200% 200%',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.05,
              zIndex: -1
            }}
          />
          <Testimonials 
            storeId={storeId}
            themeColors={themeColors}
            customization={customization}
          />
        </motion.section>

        {/* Premium Feature Card with 3D effect */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="py-16 relative"
        >
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              height: '80%',
              background: `radial-gradient(circle at center, ${themeColors.secondary}20, transparent 70%)`,
              filter: 'blur(60px)',
              zIndex: -1
            }}
          />
          <ParallaxWrapper scale intensity={15} rotate>
            <PremiumFeatureCard 
            coupons={coupons}
              storeId={storeId}
              products={products}
              storeData={store}
              customization={customization}
              themeColors={themeColors}
            />
          </ParallaxWrapper>
        </motion.section>
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
          {/* زر واتساب مع تأثيرات متقدمة */}
          {store?.phone && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.2, type: 'spring' }}
              whileHover={{ scale: 1.05, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <button
                onClick={handleWhatsApp}
                className="p-3 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 bg-[#25D366] hover:bg-[#128C7E]"
                aria-label="الاتصال عبر واتساب"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="28" 
                  height="28" 
                  viewBox="0 0 24 24"
                  className="text-white"
                >
                  <path 
                    fill="currentColor" 
                    d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.33 0 4.52.91 6.17 2.56a8.677 8.677 0 0 1 2.55 6.15c0 4.84-3.94 8.78-8.78 8.78c-1.53 0-3.03-.4-4.35-1.15l-.3-.17l-3.13.82l.83-3.04l-.2-.31a8.7 8.7 0 0 1-1.28-4.43c0-4.84 3.94-8.78 8.78-8.78M8.53 7.33c-.23 0-.43.1-.58.27c-.15.17-.34.48-.34.93c0 .25.04.54.1.85c.11.53.27 1.1.58 1.8c.37.84 1.37 2.87 3.03 4.08c2.14 1.56 3.41 1.37 4.04 1.28c.54-.08 1.03-.35 1.16-.77c.13-.42.02-.76-.07-1.04c-.1-.29-.95-1.43-1.3-1.56c-.35-.12-.6-.09-.83.05c-.25.15-.96.85-1.13 1.02c-.17.17-.35.19-.63.07c-.29-.13-1.2-.5-2.28-1.58c-.84-.82-1.4-1.83-1.56-2.14c-.16-.31-.01-.48.12-.61c.12-.12.27-.32.37-.48c.08-.14.04-.26-.02-.37c-.06-.11-.55-1.35-.76-1.84c-.2-.5-.4-.43-.55-.43"
                  />
                </svg>
              </button>
              
              {/* تلميح توضيحي */}
              <div className="absolute right-14 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm shadow-lg">
                تواصل معنا عبر واتساب
              </div>
            </motion.div>
          )}

          {/* زر الانتقال للأعلى مع تأثيرات محسنة */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1, type: 'spring' }}
            whileHover={{ scale: 1.05, rotate: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-3 rounded-full shadow-xl flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: themeColors.primary,
                color: themeColors.buttonText,
              }}
              aria-label="انتقل إلى الأعلى"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="28" 
                height="28" 
                viewBox="0 0 24 24"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18 15l-6-6-6 6"/>
              </svg>
            </button>
          </motion.div>
        </div>

      </motion.main>
    </AnimatePresence>
  );
};

export default Home;