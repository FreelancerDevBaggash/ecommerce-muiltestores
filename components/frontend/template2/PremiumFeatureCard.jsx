// "use client";
// import React, { useState, useEffect } from 'react';
// import Head from 'next/head';
// import { 
//   FaGem, FaCrown, FaShieldAlt, 
//   FaHeadset, FaShippingFast, FaExchangeAlt,
//   FaAward, FaStar, FaMedal, FaRibbon
// } from 'react-icons/fa';
// import { motion, useAnimation } from 'framer-motion';
// import { useTheme } from 'next-themes';

// const PremiumFeatureCard = ({ storeId = {}, customization = {} }) => {
//   const { resolvedTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);
//   const [years] = useState(15);
//   const [animatedYears, setAnimatedYears] = useState(0);

//   // نظام الألوان مع دعم التخصيص الكامل
//   const colors = {
//     primary: customization?.primaryColor || '#8B5FBF',
//     secondary: customization?.secondaryColor || '#FF9F1C',
//     accent: customization?.accentColor || '#2EC4B6',
//     background: resolvedTheme === 'dark' 
//       ? customization?.darkBackgroundColor || '#1A1A2E' 
//       : customization?.backgroundColor || '#F8F9FA',
//     text: resolvedTheme === 'dark' 
//       ? customization?.darkTextColor || '#E6E6E6' 
//       : customization?.textColor || '#333333',
//     cardBg: resolvedTheme === 'dark' 
//       ? customization?.darkCardBackground || '#16213E' 
//       : customization?.cardBackground || '#FFFFFF',
//     border: resolvedTheme === 'dark' 
//       ? customization?.darkBorderColor || '#0F3460' 
//       : customization?.borderColor || '#E0E0E0',
//     button: customization?.buttonColor || '#8B5FBF',
//     buttonText: customization?.buttonTextColor || '#FFFFFF',
//     icon: customization?.iconColor || '#8B5FBF',
//     award: customization?.awardColor || '#FF9F1C'
//   };

//   // مميزات فاخرة
//   const excellenceFeatures = [
//     {
//       icon: <FaGem className="text-3xl" style={{ color: colors.icon }} />,
//       title: "جودة استثنائية",
//       description: "منتجاتنا تُصنع بأعلى معايير الجودة العالمية"
//     },
//     {
//       icon: <FaCrown className="text-3xl" style={{ color: colors.icon }} />,
//       title: "فخامة لا مثيل لها",
//       description: "تصاميم حصرية تُلبي أذواق العملاء المميزين"
//     },
//     {
//       icon: <FaShieldAlt className="text-3xl" style={{ color: colors.icon }} />,
//       title: "حماية وضمان",
//       description: "ضمان ممتد لجميع منتجاتنا لمدة 3 سنوات"
//     },
//     {
//       icon: <FaHeadset className="text-3xl" style={{ color: colors.icon }} />,
//       title: "خدمة VIP",
//       description: "فريق خدمة عملاء خاص للعملاء المميزين"
//     },
//     {
//       icon: <FaShippingFast className="text-3xl" style={{ color: colors.icon }} />,
//       title: "توصيل فاخر",
//       description: "تغليف وتوصيل بمعايير فندقية خمس نجوم"
//     },
//     {
//       icon: <FaExchangeAlt className="text-3xl" style={{ color: colors.icon }} />,
//       title: "تبديل مجاني",
//       description: "سياسة إرجاع وتبديل بدون أي متاعب"
//     }
//   ];

//   // عرض سنوات الخبرة بشكل متحرك
//   useEffect(() => {
//     if (animatedYears < years) {
//       const timer = setTimeout(() => {
//         setAnimatedYears(animatedYears + 1);
//       }, 100);
//       return () => clearTimeout(timer);
//     }
//   }, [animatedYears, years]);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <div dir="rtl" className="min-h-screen" style={{ 
//       backgroundColor: colors.background,
//       color: colors.text
//     }}>
//       <Head>
//         <title>تميزنا | علامتنا التجارية الفاخرة</title>
//         <meta name="description" content="اكتشف ما يجعلنا الخيار الأفضل للعملاء المميزين" />
//       </Head>

//       {/* قسم البطل */}
//       <div className="relative py-32 overflow-hidden" style={{
//         background: customization?.heroGradient || `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`
//       }}>
//         <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')]" />
        
//         <div className="container mx-auto px-4 text-center relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="inline-block mb-8"
//           >
//             <div className="relative inline-block">
//               <FaAward className="text-5xl text-white" />
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//                 className="absolute inset-0 flex items-center justify-center"
//               >
//                 <FaMedal className="text-3xl" style={{ color: colors.accent }} />
//               </motion.div>
//             </div>
//           </motion.div>

//           <motion.h1 
//             className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             <span className="block mb-4">تميزنا الفريد</span>
//             <span className="inline-block px-4 py-2 rounded-full" style={{ 
//               backgroundColor: colors.accent,
//               color: colors.buttonText
//             }}>
//               {animatedYears}+ عاماً من التميز
//             </span>
//           </motion.h1>
          
//           <motion.p 
//             className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             نصنع الفارق من خلال التفاصيل الدقيقة وخدمة العملاء الاستثنائية
//           </motion.p>
//         </div>

//         {/* عناصر متحركة في الخلفية */}
//         {[...Array(12)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full"
//             style={{
//               width: `${Math.random() * 60 + 20}px`,
//               height: `${Math.random() * 60 + 20}px`,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.05})`
//             }}
//             animate={{
//               y: [0, (Math.random() - 0.5) * 100],
//               x: [0, (Math.random() - 0.5) * 100],
//               opacity: [0.2, 0.5, 0.2],
//             }}
//             transition={{
//               duration: Math.random() * 20 + 10,
//               repeat: Infinity,
//               repeatType: 'reverse',
//               delay: Math.random() * 5,
//             }}
//           />
//         ))}
//       </div>

//       {/* قسم المميزات */}
//       <div className="container mx-auto px-4 py-20">
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-bold mb-16 text-center relative"
//           style={{ color: colors.primary }}
//         >
//           <span className="relative inline-block">
//             رحلة التميز
//             <motion.span
//               animate={{ rotate: 360 }}
//               transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//               className="absolute -top-4 -right-6"
//             >
//               <FaRibbon style={{ color: colors.secondary }} />
//             </motion.span>
//           </span>
//         </motion.h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {excellenceFeatures.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               whileHover={{ y: -10 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="relative overflow-hidden rounded-2xl p-8 border"
//               style={{
//                 backgroundColor: colors.cardBg,
//                 borderColor: colors.border,
//                 boxShadow: `0 10px 30px -15px ${colors.primary}20`
//               }}
//             >
//               <div className="absolute -top-10 -right-10 opacity-10">
//                 <FaStar className="text-6xl" style={{ color: colors.primary }} />
//               </div>
              
//               <div className="relative z-10">
//                 <div className="h-16 w-16 mb-6 flex items-center justify-center rounded-full mx-auto" 
//                   style={{ backgroundColor: `${colors.primary}10` }}>
//                   {feature.icon}
//                 </div>
                
//                 <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: colors.secondary }}>
//                   {feature.title}
//                 </h3>
//                 <p className="text-center leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* قسم الشهادات */}
//       <div className="py-20" style={{ backgroundColor: colors.cardBg }}>
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl font-bold mb-16 text-center"
//             style={{ color: colors.secondary }}
//           >
//             جوائز وتقديرات
//           </motion.h2>
          
//           <div className="flex flex-wrap justify-center gap-8">
//             {[1, 2, 3, 4].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="rounded-xl p-6 w-64 h-64 flex flex-col items-center justify-center shadow-lg"
//                 style={{ 
//                   backgroundColor: colors.background,
//                   border: `1px solid ${colors.border}`
//                 }}
//               >
//                 <div className="mb-4 p-4 rounded-full" 
//                   style={{ backgroundColor: `${colors.primary}10` }}>
//                   <FaAward className="text-4xl" style={{ color: colors.primary }} />
//                 </div>
//                 <h3 className="text-xl font-bold mb-2" style={{ color: colors.primary }}>
//                   جائزة التميز {2023 - index}
//                 </h3>
//                 <p className="text-center text-sm">
//                   أفضل علامة تجارية في مجالها
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ختام الصفحة */}
//       <div className="py-16 text-center" style={{ 
//         backgroundColor: colors.primary,
//         background: customization?.footerGradient || colors.primary
//       }}>
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl font-bold mb-6 text-white"
//           >
//             نستحق ثقتكم
//           </motion.h2>
          
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-xl mb-8 max-w-2xl mx-auto text-white/90"
//           >
//             ثقة آلاف العملاء منذ {years} عاماً هي شهادتنا الحقيقية
//           </motion.p>
          
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             transition={{ duration: 0.3 }}
//             viewport={{ once: true }}
//             className="inline-block px-8 py-4 rounded-full font-bold text-lg shadow-lg"
//             style={{ 
//               backgroundColor: colors.button,
//               color: colors.buttonText,
//               boxShadow: `0 4px 20px ${colors.button}80`
//             }}
//           >
//             اكتشف منتجاتنا
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PremiumFeatureCard;
"use client";
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { 
  FaGem, FaCrown, FaShieldAlt, 
  FaHeadset, FaShippingFast, FaExchangeAlt,
  FaAward, FaStar, FaMedal, FaRibbon
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const PremiumFeatureCard = ({ 
  storeData = {}, 
  customization = {},
  coupons = [],
  reviews = []
}) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [years] = useState(15);
  const [animatedYears, setAnimatedYears] = useState(0);

  // دمج بيانات المتجر مع القيم الافتراضية
  const store = {
    businessName: "متجرنا الفاخر",
    whatsappPhone: "+966501234567",
    socialLinks: {
      twitter: "#",
      instagram: "#",
      snapchat: "#"
    },
    ...storeData
  };

  // نظام الألوان مع تأثيرات مضيئة
  const colors = {
    primary: customization?.primaryColor || '#A855F7', // بنفسجي مضيء
    secondary: customization?.secondaryColor || '#F59E0B', // برتقالي ذهبي مضيء
    accent: customization?.accentColor || '#10B981', // أخضر فيروزي مضيء
    background: resolvedTheme === 'dark' 
      ? customization?.darkBackgroundColor || '#111827' 
      : customization?.backgroundColor || '#F9FAFB',
    text: resolvedTheme === 'dark' 
      ? customization?.darkTextColor || '#F3F4F6' 
      : customization?.textColor || '#1F2937',
    cardBg: resolvedTheme === 'dark' 
      ? customization?.darkCardBackground || '#1F2937' 
      : customization?.cardBackground || '#FFFFFF',
    border: resolvedTheme === 'dark' 
      ? customization?.darkBorderColor || '#374151' 
      : customization?.borderColor || '#E5E7EB',
    button: customization?.buttonColor || '#A855F7',
    buttonText: customization?.buttonTextColor || '#FFFFFF',
    icon: customization?.iconColor || '#F59E0B',
    award: customization?.awardColor || '#F59E0B',
    heroGradient: customization?.heroGradient || 
      `linear-gradient(135deg, ${customization?.primaryColor || '#A855F7'}, ${customization?.secondaryColor || '#F59E0B'})`,
    footerGradient: customization?.footerGradient || customization?.primaryColor || '#A855F7',
    glow: {
      primary: `0 0 15px ${customization?.primaryColor || '#A855F7'}80`,
      secondary: `0 0 15px ${customization?.secondaryColor || '#F59E0B'}80`,
      accent: `0 0 15px ${customization?.accentColor || '#10B981'}80`
    }
  };

  // مميزات فاخرة مع تأثيرات مضيئة
  const excellenceFeatures = [
    {
      icon: <FaGem className="text-3xl" style={{ 
        color: colors.icon,
        filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.7))'
      }} />,
      title: "جودة استثنائية",
      description: "منتجاتنا تُصنع بأعلى معايير الجودة العالمية"
    },
    {
      icon: <FaCrown className="text-3xl" style={{ 
        color: colors.icon,
        filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.7))'
      }} />,
      title: "فخامة لا مثيل لها",
      description: "تصاميم حصرية تُلبي أذواق العملاء المميزين"
    },
    {
      icon: <FaShieldAlt className="text-3xl" style={{ 
        color: colors.icon,
        filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.7))'
      }} />,
      title: "حماية وضمان",
      description: "ضمان ممتد لجميع منتجاتنا لمدة 3 سنوات"
    },
    {
      icon: <FaHeadset className="text-3xl" style={{ 
        color: colors.icon,
        filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.7))'
      }} />,
      title: "خدمة VIP",
      description: "فريق خدمة عملاء خاص للعملاء المميزين"
    },
    {
      icon: <FaShippingFast className="text-3xl" style={{ 
        color: colors.icon,
        filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.7))'
      }} />,
      title: "توصيل فاخر",
      description: "تغليف وتوصيل بمعايير فندقية خمس نجوم"
    },
    {
      icon: <FaExchangeAlt className="text-3xl" style={{ 
        color: colors.icon,
        filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.7))'
      }} />,
      title: "تبديل مجاني",
      description: "سياسة إرجاع وتبديل بدون أي متاعب"
    }
  ];

  // عرض سنوات الخبرة بشكل متحرك
  useEffect(() => {
    if (animatedYears < years) {
      const timer = setTimeout(() => {
        setAnimatedYears(animatedYears + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [animatedYears, years]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div dir="rtl" className="min-h-screen" style={{ 
      backgroundColor: colors.background,
      color: colors.text,
      fontFamily: customization?.fontFamily || 'inherit'
    }}>
      <Head>
        <title>تميزنا | {store.businessName}</title>
        <meta name="description" content="اكتشف ما يجعلنا الخيار الأفضل للعملاء المميزين" />
      </Head>

      {/* قسم البطل مع تأثيرات مضيئة */}
      <div className="relative py-32 overflow-hidden" style={{
        background: colors.heroGradient,
        boxShadow: `inset 0 0 50px ${colors.primary}40`
      }}>
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-8"
          >
            <div className="relative inline-block">
              <FaAward className="text-5xl text-white" style={{
                filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.7))'
              }} />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <FaMedal className="text-3xl" style={{ 
                  color: colors.accent,
                  filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.7))'
                }} />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            <span className="block mb-4">تميز {store.businessName}</span>
            <span className="inline-block px-4 py-2 rounded-full" style={{ 
              backgroundColor: colors.accent,
              color: colors.buttonText,
              boxShadow: colors.glow.accent
            }}>
              {animatedYears}+ عاماً من التميز
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            نصنع الفارق من خلال التفاصيل الدقيقة وخدمة العملاء الاستثنائية
          </motion.p>
        </div>

        {/* عناصر متحركة مضيئة في الخلفية */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.05})`,
              boxShadow: `0 0 ${Math.random() * 20 + 10}px rgba(255, 255, 255, 0.5)`
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* قسم المميزات مع تأثيرات مضيئة */}
      <div className="container mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center relative"
          style={{ color: colors.primary }}
        >
          <span className="relative inline-block">
            رحلة التميز
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-6"
            >
              <FaRibbon style={{ 
                color: colors.secondary,
                filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.7))'
              }} />
            </motion.span>
          </span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {excellenceFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl p-8 border"
              style={{
                backgroundColor: colors.cardBg,
                borderColor: colors.border,
                boxShadow: `0 10px 30px -15px ${colors.primary}20`,
                backdropFilter: 'blur(5px)'
              }}
            >
              <div className="absolute -top-10 -right-10 opacity-10">
                <FaStar className="text-6xl" style={{ 
                  color: colors.primary,
                  filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.5))'
                }} />
              </div>
              
              <div className="relative z-10">
                <div className="h-16 w-16 mb-6 flex items-center justify-center rounded-full mx-auto" 
                  style={{ 
                    backgroundColor: `${colors.primary}10`,
                    boxShadow: `0 0 15px ${colors.primary}20`
                  }}>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-center" style={{ 
                  color: colors.secondary,
                  textShadow: `0 2px 5px ${colors.secondary}30`
                }}>
                  {feature.title}
                </h3>
                <p className="text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* قسم ختام الصفحة مع تأثيرات مضيئة */}
     
    </div>
  );
};

export default PremiumFeatureCard;