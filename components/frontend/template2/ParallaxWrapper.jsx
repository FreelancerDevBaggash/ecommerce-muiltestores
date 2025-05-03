
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