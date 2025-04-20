"use client";

import { useRef, useEffect, useState } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  const [lenisInstance, setLenisInstance] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      wrapper: containerRef.current,   // حاوية التمرير
      content: containerRef.current,   // المحتوى الذي يُفَرزّ
    });
    setLenisInstance(lenis);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy && lenis.destroy(); // تنظيف الموارد
    };
  }, []);

  useEffect(() => {
    if (!lenisInstance) return;
    function onResize() {
      lenisInstance.resize();         // إعادة ضبط أبعاد Lenis عند التغيير
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [lenisInstance]);

  return (
    <div ref={containerRef} className="overflow-auto h-screen">
      {children}
    </div>
  );
}
