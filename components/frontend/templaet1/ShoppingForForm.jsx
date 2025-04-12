"use client";




import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // استيراد الأنماط الخاصة بـ AOS

const ShoppingForForm = ({storeId  ,customization = {}}) => {
  const primaryColor = customization?.primaryColor || '#4CAF50'; // اللون الأساسي
  const secondaryColor = customization?.secondaryColor || '#2C3E50'; // اللون الثانوي
  const accentColor = customization?.accentColor || '#FFC107'; // اللون المميز
  const backgroundColor = customization?.backgroundColor || '#FFFFFF'; // لون الخلفية
  const fontFamily = customization?.fontFamily || 'sans-serif'; // نوع الخط
  const isActive = customization?.isActive ?? true; // هل التخصيص مفعل؟
  // تهيئة AOS عند تحميل الصفحة
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة التأثير
      once: true, // التأثير يظهر مرة واحدة فقط
    });
  }, []);

  return (
    <div className="h-auto  m-10 text-center">
      <h1 className="mt-10 text-2xl font-bold text-left mr-3">Who are you shopping for?</h1>
      <div className="flex justify-center items-center mt-10 gap-5">
        <div
          data-aos="fade-up" // تأثير التلاشي من الأسفل
          className="relative w-74 h-72 mr-3 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/images/ww.jpg"
            alt="Kids"
            className="w-full h-full object-cover"
          />
          <button className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white bg-white py-2 px-6 text-lg font-medium rounded shadow-lg hover:bg-gray-100"style={{ backgroundColor:backgroundColor }}  >
            Kids →
          </button>
        </div>
        <div
          data-aos="fade-up" // تأثير التلاشي من الأسفل
          data-aos-delay="200" // تأخير ظهور التأثير
          className="relative w-74 h-72 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/images/image-8.jpg"
            alt="Women"
            className="w-full h-full object-cover"
          />
          <button className="absolute items-center bottom-16 left-1/2 
          transform -translate-x-1/2 bg-white py-2 px-6 text-lg font-medium rounded shadow-lg text-white hover:bg-gray-100"style={{ backgroundColor:backgroundColor }}>
            Women →
          </button>
        </div>
        <div
          data-aos="fade-up" // تأثير التلاشي من الأسفل
          data-aos-delay="400" // تأخير ظهور التأثير
          className="relative w-74 h-72 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/images/image-8.jpg"
            alt="Men"
            className="w-full h-full object-cover"
          />
          <button className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white bg-white py-2 px-6 text-lg font-medium rounded shadow-lg hover:bg-gray-100"style={{ backgroundColor:backgroundColor }}>
            Men →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingForForm;
