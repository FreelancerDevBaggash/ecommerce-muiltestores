// // pages/ma-yumayyizuna.js
// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import Head from 'next/head';
// import { 
//   FaMedal, 
//   FaShieldAlt, 
//   FaHeadset, 
//   FaTruck, 
//   FaExchangeAlt, 
//   FaCreditCard,
//   FaMoon,
//   FaSun,
//   FaAward,
//   FaUserShield,
//   FaHandshake
// } from 'react-icons/fa';
// import { motion, useAnimation, AnimatePresence } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const FlipIconCard = ({ frontIcon, backIcon, title, description, darkMode }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: false });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     } else {
//       controls.start("hidden");
//     }
//   }, [inView, controls]);

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" }
//     }
//   };

//   const flipVariants = {
//     initial: { rotateY: 0 },
//     flipped: { rotateY: 180 }
//   };

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={cardVariants}
//       whileHover={{ scale: 1.05, zIndex: 10 }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className={`relative p-8 rounded-2xl shadow-2xl transition-all duration-500 border-2 ${
//         darkMode ? 
//         'bg-gray-800 border-blue-500/30 hover:shadow-blue-500/20' : 
//         'bg-white border-blue-200 hover:shadow-blue-200/40'
//       } text-center h-full transform-style-preserve-3d`}
//       style={{
//         transformStyle: 'preserve-3d',
//         perspective: '1000px'
//       }}
//     >
//       {/* 3D Floating Effect */}
//       <motion.div
//         animate={{
//           rotateX: isHovered ? -5 : 0,
//           rotateY: isHovered ? 5 : 0,
//         }}
//         transition={{ type: 'spring', stiffness: 300, damping: 15 }}
//         className="h-full flex flex-col items-center"
//       >
//         {/* Icon with Flip Animation */}
//         <div className="relative w-20 h-20 mb-8" style={{ perspective: '1000px' }}>
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={isHovered ? "back" : "front"}
//               initial="initial"
//               animate={isHovered ? "flipped" : "initial"}
//               variants={flipVariants}
//               transition={{ duration: 0.6 }}
//               className="absolute inset-0 flex justify-center items-center"
//               style={{ backfaceVisibility: 'hidden' }}
//             >
//               {isHovered ? (
//                 <div className="text-5xl text-blue-400">{backIcon}</div>
//               ) : (
//                 <div className="text-5xl">{frontIcon}</div>
//               )}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Floating Glow Effect */}
//         {isHovered && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="absolute inset-0 rounded-2xl pointer-events-none"
//             style={{
//               background: `radial-gradient(circle at center, ${
//                 darkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(96, 165, 250, 0.2)'
//               }, transparent 70%)`,
//               zIndex: -1
//             }}
//           />
//         )}

//         <h3 className={`text-2xl font-bold mb-4 ${
//           darkMode ? 'text-white' : 'text-gray-800'
//         }`}>
//           {title}
//         </h3>
//         <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
//           {description}
//         </p>
//       </motion.div>
//     </motion.div>
//   );
// };

// const MaYumayyizunaPage = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  
//   const features = [
//     {
//       title: "جودة عالية",
//       description: "منتجات أصلية بجودة عالية وموثوقة",
//       frontIcon: <FaMedal className={darkMode ? "text-yellow-400" : "text-yellow-600"} />,
//       backIcon: <FaAward className="text-blue-400" />
//     },
//     {
//       title: "ضمان المنتجات",
//       description: "جميع المنتجات مضمونة حسب سياسة الضمان",
//       frontIcon: <FaShieldAlt className={darkMode ? "text-blue-400" : "text-blue-600"} />,
//       backIcon: <FaUserShield className="text-blue-400" />
//     },
//     {
//       title: "دعم فني",
//       description: "خدمة عملاء متاحة على مدار الساعة",
//       frontIcon: <FaHeadset className={darkMode ? "text-green-400" : "text-green-600"} />,
//       backIcon: <FaHandshake className="text-blue-400" />
//     },
//     {
//       title: "توصيل سريع",
//       description: "خدمة توصيل سريعة لجميع أنحاء المملكة",
//       frontIcon: <FaTruck className={darkMode ? "text-red-400" : "text-red-600"} />,
//       backIcon: <FaTruck className="text-blue-400" />
//     },
//     {
//       title: "سياسة مرنة",
//       description: "إمكانية الإستبدال أو الإرجاع خلال 14 يوم",
//       frontIcon: <FaExchangeAlt className={darkMode ? "text-purple-400" : "text-purple-600"} />,
//       backIcon: <FaExchangeAlt className="text-blue-400" />
//     },
//     {
//       title: "دفع آمن",
//       description: "طرق دفع متعددة وآمنة بنسبة 100%",
//       frontIcon: <FaCreditCard className={darkMode ? "text-indigo-400" : "text-indigo-600"} />,
//       backIcon: <FaCreditCard className="text-blue-400" />
//     }
//   ];

//   const handleMouseMove = (e) => {
//     setCursorPos({
//       x: e.clientX,
//       y: e.clientY
//     });
//   };

//   return (
//     <div 
//       dir="rtl" 
//       onMouseMove={handleMouseMove}
//       className={`min-h-screen transition-colors duration-500 ${
//         darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800'
//       }`}
//     >
//       {/* 3D Cursor Effect */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           className="absolute w-64 h-64 rounded-full opacity-10 blur-xl"
//           animate={{
//             x: cursorPos.x - 128,
//             y: cursorPos.y - 128,
//             background: darkMode ? 'radial-gradient(circle, #3b82f6, transparent)' : 'radial-gradient(circle, #60a5fa, transparent)'
//           }}
//           transition={{ type: 'spring', mass: 0.1 }}
//         />
//       </div>

//       <Head>
//         <title>ما يميزنا | متجرنا</title>
//         <meta name="description" content="اكتشف المميزات والخدمات الحصرية التي نقدمها" />
//       </Head>

//       {/* Dark Mode Toggle with 3D Effect */}
//       <motion.button
//         onClick={() => setDarkMode(!darkMode)}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className={`fixed bottom-8 left-8 p-4 rounded-full z-50 shadow-2xl ${
//           darkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-yellow-400'
//         }`}
//         style={{
//           boxShadow: darkMode 
//             ? '0 0 20px rgba(234, 179, 8, 0.7)' 
//             : '0 0 20px rgba(59, 130, 246, 0.5)'
//         }}
//       >
//         {darkMode ? (
//           <FaSun className="text-2xl" />
//         ) : (
//           <FaMoon className="text-2xl" />
//         )}
//       </motion.button>

//       {/* 3D Hero Section with Parallax */}
//       <div 
//         className={`relative py-32 text-center overflow-hidden ${
//           darkMode ? 
//           'bg-gradient-to-br from-gray-800 via-gray-900 to-black' : 
//           'bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900'
//         }`}
//       >
//         <motion.div 
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 container mx-auto px-4"
//         >
//           <motion.h1 
//             className="text-5xl md:text-6xl font-bold mb-6 text-white"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             ما يميزنا
//           </motion.h1>
//           <motion.p 
//             className={`text-xl md:text-2xl max-w-3xl mx-auto ${
//               darkMode ? 'text-blue-200' : 'text-blue-100'
//             }`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             نقدم لكم تجربة تسوق فريدة بمعايير عالمية وتقنيات ثلاثية الأبعاد
//           </motion.p>
//         </motion.div>

//         {/* 3D Floating Elements */}
//         <motion.div 
//           className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-blue-400 opacity-20"
//           animate={{
//             y: [0, -20, 0],
//             x: [0, 10, 0]
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div 
//           className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-purple-400 opacity-20"
//           animate={{
//             y: [0, 20, 0],
//             x: [0, -15, 0]
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 1
//           }}
//         />
//       </div>

//       {/* 3D Features Grid */}
//       <div className="relative container mx-auto px-4 py-20 z-10">
//         <motion.div 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
//         >
//           {features.map((feature, index) => (
//             <FlipIconCard
//               key={index}
//               frontIcon={feature.frontIcon}
//               backIcon={feature.backIcon}
//               title={feature.title}
//               description={feature.description}
//               darkMode={darkMode}
//             />
//           ))}
//         </motion.div>
//       </div>

//       {/* 3D Stats Section */}
//       <motion.div 
//         className={`relative py-20 ${
//           darkMode ? 'bg-gray-800' : 'bg-blue-800 text-white'
//         }`}
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <div className="container mx-auto px-4 text-center">
//           <motion.h2 
//             className="text-3xl font-bold mb-16"
//             initial={{ y: 20, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             لماذا نتميز عن الآخرين؟
//           </motion.h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { value: "100%", label: "رضا عملاء", color: "text-emerald-300" },
//               { value: "24/7", label: "دعم فني", color: "text-blue-300" },
//               { value: "14 يوم", label: "إرجاع مجاني", color: "text-purple-300" },
//               { value: "5 نجوم", label: "تقييمات", color: "text-yellow-300" }
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10 }}
//                 className="p-6 rounded-xl bg-white/10 backdrop-blur-sm"
//               >
//                 <div className={`text-5xl font-bold mb-3 ${stat.color}`}>
//                   {stat.value}
//                 </div>
//                 <div className="text-xl">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Floating Particles Background */}
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className={`absolute rounded-full ${
//               darkMode ? 'bg-blue-400/30' : 'bg-white/30'
//             }`}
//             style={{
//               width: Math.random() * 10 + 5 + 'px',
//               height: Math.random() * 10 + 5 + 'px',
//               top: Math.random() * 100 + '%',
//               left: Math.random() * 100 + '%',
//             }}
//             animate={{
//               y: [0, (Math.random() - 0.5) * 100],
//               x: [0, (Math.random() - 0.5) * 50],
//               opacity: [0.3, 1, 0.3],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10,
//               repeat: Infinity,
//               repeatType: 'reverse',
//               delay: Math.random() * 5,
//             }}
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default MaYumayyizunaPage;
"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import { 
  FaGem, FaAward, FaCrown, FaShieldAlt, 
  FaHeadset, FaShippingFast, FaExchangeAlt
} from 'react-icons/fa';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import useSWR from 'swr';
import { useTheme } from 'next-themes';

const fetcher = (url) => fetch(url).then((res) => res.json());

const PremiumFeatureCard = ({ icon, title, description, index, colors }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isHovered) {
      controls.start({
        y: -15,
        rotateX: 5,
        boxShadow: `0 25px 50px -12px ${colors.accent}30`,
        transition: { type: 'spring', stiffness: 300 }
      });
    } else {
      controls.start({
        y: 0,
        rotateX: 0,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        transition: { type: 'spring', stiffness: 300 }
      });
    }
  }, [isHovered, colors.accent]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.8 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      animate={controls}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative overflow-hidden rounded-3xl p-8 h-full border"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        backgroundColor: colors.cardBg,
        borderColor: colors.border
      }}
    >
      <motion.div
        animate={{
          x: isHovered ? 0 : -100,
          opacity: isHovered ? 0.1 : 0
        }}
        className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent"
        style={{ backgroundColor: `${colors.accent}20` }}
      />
      
      <motion.div
        animate={{
          scale: isHovered ? 1.2 : 1,
          rotateY: isHovered ? 360 : 0
        }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="relative z-10 h-20 w-20 mx-auto mb-6 flex items-center justify-center rounded-full"
        style={{ backgroundColor: `${colors.secondary}10` }}
      >
        <motion.div
          animate={{
            y: isHovered ? [-5, 5, -5] : 0
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
          className="text-4xl"
          style={{ color: colors.primary }}
        >
          {icon}
        </motion.div>
      </motion.div>

      <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: colors.secondary }}>
        {title}
      </h3>
      <p className="text-center" style={{ color: colors.text }}>
        {description}
      </p>

      {isHovered && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 400, opacity: 0.4 }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 left-0 w-20 h-full"
          style={{
            backgroundColor: `${colors.accent}30`,
            transform: 'skewX(-20deg)',
            filter: 'blur(10px)'
          }}
        />
      )}
    </motion.div>
  );
};

export default function MaYumayyizunaPage({ storeId }) {
  const { theme, resolvedTheme } = useTheme();
  const { data: customizations, error } = useSWR(
    `/api/customizations/Customizationes/${storeId}`,
    fetcher
  );

  const [yearsExperience] = useState(20);
  const [animatedYears, setAnimatedYears] = useState(0);
  const [mounted, setMounted] = useState(false);

  // نظام الألوان مع دعم الوضع الليلي
  const colors = React.useMemo(() => ({
    primary: customizations?.primaryColor || '#3b82f6',
    secondary: customizations?.secondaryColor || '#10b981',
    accent: customizations?.accentColor || '#f59e0b',
    background: resolvedTheme === 'dark' 
      ? customizations?.darkBackgroundColor || '#1e293b'
      : customizations?.backgroundColor || '#f8fafc',
    text: resolvedTheme === 'dark'
      ? customizations?.secondaryColor || '#f8fafc'
      : customizations?.textColor || '#1e293b',
    cardBg: resolvedTheme === 'dark'
      ? customizations?.darkCardBackground || '#334155'
      : customizations?.backgroundColor || '#ffffff',
    border: resolvedTheme === 'dark'
      ? customizations?.darkBorderColor || '#475569'
      : customizations?.borderColor || '#e2e8f0',
    buttonBg: resolvedTheme === 'dark'
      ? customizations?.darkButtonColor || '#475569'
      : customizations?.buttonColor || '#3b82f6',
    buttonText: resolvedTheme === 'dark'
      ? customizations?.darkButtonTextColor || '#ffffff'
      : customizations?.buttonTextColor || '#ffffff',
  }), [customizations, resolvedTheme]);

  const features = [
    {
      title: "خبرة 20 عاماً",
      description: "عقود من الخبرة في توفير أفضل المنتجات",
      icon: <FaGem />
    },
    {
      title: "جودة فاخرة",
      description: "منتجات حصرية بمواصفات عالمية",
      icon: <FaCrown />
    },
    {
      title: "ضمان مميز",
      description: "ضمان شامل على جميع منتجاتنا",
      icon: <FaShieldAlt />
    },
    {
      title: "دعم فني فاخر",
      description: "خدمة عملاء VIP على مدار الساعة",
      icon: <FaHeadset />
    },
    {
      title: "توصيل فوري",
      description: "خدمة توصيل سريعة بمعايير فاخرة",
      icon: <FaShippingFast />
    },
    {
      title: "سياسة مرنة",
      description: "إرجاع واستبدال بدون مشاكل",
      icon: <FaExchangeAlt />
    }
  ];

  // Animate years counter
  useEffect(() => {
    if (animatedYears < yearsExperience) {
      const timer = setTimeout(() => {
        setAnimatedYears(animatedYears + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [animatedYears, yearsExperience]);

  // التأكد من أن الوضع الليلي قد تم تحميله
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // أو عرض شاشة تحميل
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-lg">حدث خطأ في تحميل التخصيصات</div>
      </div>
    );
  }

  if (!customizations) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div 
      dir="rtl"
      className="min-h-screen transition-colors duration-300"
      style={{ 
        backgroundColor: colors.background,
        color: colors.text
      }}
    >
      <Head>
        <title>تميزنا | خبرة 20 عاماً في التميز</title>
        <meta name="description" content="خبرة عقدين في تقديم الأفضل لعملائنا" />
      </Head>

      {/* Premium Hero Section */}
      <div 
        className="relative py-40 overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`
        }}
      >
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
              className="inline-block p-4 rounded-full"
              style={{ backgroundColor: `${colors.accent}20` }}
            >
              <FaAward className="text-4xl" style={{ color: colors.accent }} />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            تميزنا على مدى <span style={{ color: colors.accent }}>{animatedYears}</span> عاماً
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            خبرة عقدين في تقديم الأفضل لعملائنا الكرام
          </motion.p>
        </div>

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: `${Math.random() * 100 + 30}px`,
              height: `${Math.random() * 100 + 30}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Premium Features Section */}
      <div className="container mx-auto px-4 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
          style={{ color: colors.accent }}
        >
          رحلة التميز
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <PremiumFeatureCard
              key={index}
              index={index}
              colors={colors}
              {...feature}
            />
          ))}
        </div>
      </div>

  

      {/* Luxury Footer */}
      {/* <div 
        className="py-12 text-white"
        style={{ 
          backgroundColor: colors.primary
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <FaAward className="text-4xl" style={{ color: colors.accent }} />
          </motion.div>
          <p className="text-xl mb-4">
            ثقتكم غالية علينا منذ {yearsExperience} عاماً
          </p>
          <p className="opacity-80">
            © جميع الحقوق محفوظة {new Date().getFullYear()}
          </p>
        </div>
      </div> */}
    </div>
  );
}