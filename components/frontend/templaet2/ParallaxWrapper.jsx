// 'use client';
// import React, { useRef, useEffect, useState } from 'react';
// import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

// export const ParallaxWrapper = ({ 
//   children, 
//   speed = 1, 
//   direction = 'up',
//   fade = false,
//   scale: scaleProp = false,
//   rotate: rotateProp = false,
//   className = '',
//   viewportMargin = '-100px'
// }) => {
//   const ref = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);
  
//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   });

//   // تعريف جميع التحويلات أولاً بدون شروط
//   const yEnter = useTransform(scrollYProgress, [0, 0.5], [isMobile ? 100 : 200, 0]);
//   const yExit = useTransform(scrollYProgress, [0.5, 1], [0, isMobile ? -150 : -300]);
  
//   const xEnter = useTransform(scrollYProgress, [0, 0.5], [isMobile ? 50 : 100, 0]);
//   const xExit = useTransform(scrollYProgress, [0.5, 1], [0, isMobile ? -75 : -150]);
  
//   const opacityValue = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, fade ? 0 : 1]);
//   const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, scaleProp ? 0.95 : 1]);
//   const rotateValue = useTransform(scrollYProgress, [0, 1], [0, rotateProp ? (isMobile ? 5 : 10) : 0]);

//   // حساب القيم النهائية بناءً على الاتجاه
//   const yUpTransform = useTransform([yEnter, yExit], ([yE, yEx]) => Math.min(yE, yEx));
//   const yDownTransform = useTransform([yEnter, yExit], ([yE, yEx]) => Math.max(-yE, -yEx));
//   const y = direction === 'up' ? yUpTransform : yDownTransform;

//   const xLeftTransform = useTransform([xEnter, xExit], ([xE, xEx]) => Math.min(xE, xEx));
//   const xRightTransform = useTransform([xEnter, xExit], ([xE, xEx]) => Math.max(-xE, -xEx));
//   const x = direction === 'left' ? xLeftTransform : 
//             direction === 'right' ? xRightTransform : 0;

//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     // يمكن إضافة منطق إضافي هنا
//   });

//   return (
//     <div ref={ref} className={`relative overflow-hidden ${className}`}>
//       <motion.div 
//         style={{
//           y,
//           x,
//           opacity: opacityValue,
//           scale: scaleValue,
//           rotate: rotateValue,
//           transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
//         }}
//         className="w-full h-full will-change-transform"
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// };
// 'use client';
// import React, { useRef, useEffect, useState, useMemo } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// export const ParallaxWrapper = ({ 
//   children, 
//   speed = 1, 
//   direction = 'up',
//   fade = false,
//   scale: scaleProp = false,
//   rotate: rotateProp = false,
//   className = ''
// }) => {
//   const ref = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);
  
//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   });

//   // تعريف جميع التحويلات الأساسية
//   const baseY = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
//   const reverseY = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);
//   const baseX = useTransform(scrollYProgress, [0, 1], [50 * speed, -50 * speed]);
//   const reverseX = useTransform(scrollYProgress, [0, 1], [-50 * speed, 50 * speed]);
//   const opacityEffect = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
//   const scaleEffect = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
//   const rotateEffect = useTransform(scrollYProgress, [0, 1], [0, 10]);

//   // إنشاء تحويلات للأجهزة المحمولة بشكل منفصل
//   const mobileY = useTransform(baseY, val => val * 0.5);
//   const mobileReverseY = useTransform(reverseY, val => val * 0.5);
//   const mobileX = useTransform(baseX, val => val * 0.5);
//   const mobileReverseX = useTransform(reverseX, val => val * 0.5);
//   const mobileRotate = useTransform(rotateEffect, val => val * 0.5);

//   // تحديد القيم النهائية بناءً على الخصائص ونوع الجهاز
//   const y = direction === 'up' 
//     ? (isMobile ? mobileY : baseY)
//     : direction === 'down' 
//     ? (isMobile ? mobileReverseY : reverseY)
//     : 0;

//   const x = direction === 'left' 
//     ? (isMobile ? mobileX : baseX)
//     : direction === 'right' 
//     ? (isMobile ? mobileReverseX : reverseX)
//     : 0;

//   const opacity = fade ? opacityEffect : 1;
//   const scale = scaleProp ? scaleEffect : 1;
//   const rotate = rotateProp ? (isMobile ? mobileRotate : rotateEffect) : 0;

//   return (
//     <div ref={ref} className={`relative ${className}`}>
//       <motion.div 
//         style={{
//           y,
//           x,
//           opacity,
//           scale,
//           rotate,
//           transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
//         }}
//         className="w-full h-full will-change-transform"
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// };
// "use client";
// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';

// export const ParallaxWrapper = ({ 
//   children,
//   direction = 'down',
//   intensity = 0.5,
//   className = '',
//   fade = false,
//   scale = false,
//   rotate3d = false,
//   springConfig = { stiffness: 300, damping: 30, bounce: 100 },
//   transitionType = 'spring',
//   viewportThreshold = 0.1,
//   customEffects = null
// }) => {
//   const ref = useRef(null);
  
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   });

//   // تحويلات الحركة الأساسية
//   const yTransform = useTransform(scrollYProgress, [0, 1], 
//     direction === 'down' ? [-100 * intensity, 100 * intensity] :
//     direction === 'up' ? [100 * intensity, -100 * intensity] : [0, 0]);

//   const xTransform = useTransform(scrollYProgress, [0, 1], 
//     direction === 'left' ? [100 * intensity, -100 * intensity] :
//     direction === 'right' ? [-100 * intensity, 100 * intensity] : [0, 0]);

//   const opacityTransform = useTransform(scrollYProgress, 
//     [0, 0.2, 0.8, 1], fade ? [0, 1, 1, 0] : [1, 1, 1, 1]);

//   const scaleTransform = useTransform(scrollYProgress, 
//     [0, 0.5, 1], scale ? [0.95, 1, 0.98] : [1, 1, 1]);

//   // تأثيرات متقدمة
//   const zoomScale = useTransform(scrollYProgress, [0, 1], [1 - intensity, 1 + intensity]);
//   const rotateTransform = useTransform(scrollYProgress, [0, 1], [-20 * intensity, 20 * intensity]);
//   const flipRotateY = useTransform(scrollYProgress, [0, 1], [-45 * intensity, 45 * intensity]);
//   const fadeOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
//   const rotateXTransform = useTransform(scrollYProgress, [0, 0.2], [15 * intensity, 0]);
//   const rotateZTransform = useTransform(scrollYProgress, [0, 0.2], [20 * intensity, 0]);

//   // تحديد التأثيرات بناء على نوع الاتجاه
//   const effects = {
//     y: ['up', 'down'].includes(direction) ? yTransform : 0,
//     x: ['left', 'right'].includes(direction) ? xTransform : 0,
//     opacity: fade ? opacityTransform : 1,
//     scale: scale ? scaleTransform : 1,
//     ...(direction === 'zoom' && { scale: zoomScale }),
//     ...(direction === 'rotate' && { rotate: rotateTransform }),
//     ...(direction === 'flip' && { 
//       rotateY: flipRotateY,
//       perspective: 1000
//     }),
//     ...(direction === 'fade' && { opacity: fadeOpacity }),
//     ...(rotate3d && { 
//       rotateX: rotateXTransform,
//       rotateZ: rotateZTransform,
//       transformStyle: 'preserve-3d'
//     }),
//     ...customEffects
//   };

//   // تطبيق نوع الانتقال
//   const transition = {
//     spring: useSpring(effects, springConfig),
//     tween: { type: 'tween', ease: 'easeInOut', duration: 1 },
//     inertia: { type: 'inertia', velocity: 50 }
//   }[transitionType];

//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     if (latest >= viewportThreshold && latest <= 1 - viewportThreshold) {
//       // يمكن إضافة منطق إضافي هنا
//     }
//   });

//   return (
//     <div 
//       ref={ref} 
//       className={`relative overflow-hidden ${className} ${
//         rotate3d || direction === 'flip' ? '[perspective:1000px]' : ''
//       }`}
//     >
//       <motion.div
//         style={transitionType === 'spring' ? transition : effects}
//         transition={transitionType !== 'spring' ? transition : undefined}
//         className="w-full h-full will-change-transform"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "0px 0px -100px 0px" }}
//         variants={{
//           hidden: { opacity: 0, y: direction === 'down' ? 50 : direction === 'up' ? -50 : 0 },
//           visible: { opacity: 1, y: 0 }
//         }}
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// };
'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ParallaxWrapper = ({
  children,
  direction = 'up',
  intensity = 0.3,
  className = '',
  fade = false,
  scale = false,
  rotate = false,
  spring = true,
  viewport = { once: true, margin: '0px 0px -100px 0px' }
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  // Always call hooks unconditionally
  const y = useTransform(scrollYProgress, [0, 1], 
    ['up', 'down'].includes(direction) ? [intensity * 100, -intensity * 100] : [0, 0]);
  
  const x = useTransform(scrollYProgress, [0, 1], 
    ['left', 'right'].includes(direction) ? [intensity * 100, -intensity * 100] : [0, 0]);
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], 
    fade ? [0, 1, 1, 0] : [1, 1, 1, 1]);
  
  const scaleValue = useTransform(scrollYProgress, [0, 1], 
    scale ? [0.95, 1.05] : [1, 1]);
  
  const rotateValue = useTransform(scrollYProgress, [0, 1], 
    rotate ? [-5, 5] : [0, 0]);

  // Create spring transforms unconditionally
  const springTransforms = useSpring({ 
    y, 
    x, 
    opacity, 
    scale: scaleValue, 
    rotate: rotateValue 
  }, { 
    stiffness: 150,
    damping: 30,
    mass: 0.5
  });

  // Then decide which transforms to use
  const transforms = spring ? springTransforms : { y, x, opacity, scale: scaleValue, rotate: rotateValue };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={transforms}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ 
          type: 'spring',
          stiffness: 100,
          damping: 20
        }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxWrapper;