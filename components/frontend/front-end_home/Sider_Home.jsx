"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// بيانات الكروت
const cards = [
  {
    id: 1,
    title: 'أكثر من ٢٥ تطبيق جديد في متجر التطبيقات',
    description: 'التطبيقات واحدة من حلول سلة الذكية التي تسهل على التاجر إنجاز أعماله بسرعة وذكاء.',
    image: 'https://cdn.salla.sa/AQ43OUZuD9Pfo8T6yuUb5nDfGKI4x1IZ857hB5wu.png',
  },
  {
    id: 2,
    title: 'تطبيق جديد للتحكم في المخزون',
    description: 'يساعدك التطبيق في إدارة المخزون الخاص بك بكفاءة عالية وتقليل الفاقد.',
    image: 'https://cdn.salla.sa/TbSlerjULGYYC7YA9K18DqpTbUdm8gkIrjPV8ejK.jpg',
  },
  {
    id: 3,
    title: 'تطبيق إدارة العملاء',
    description: 'تطبيق يساعدك في إدارة علاقاتك مع العملاء بكفاءة وسهولة.',
    image: 'https://cdn.salla.sa/nGqKvdnr9ouMDp3JCXpByNVOONc0lo8axtMemVfy.jpg',
  },
  {
    id: 4,
    title: 'تحليل المبيعات',
    description: 'اكتشف طرق تحليل المبيعات لتحسين أداء الأعمال واتخاذ قرارات مستنيرة.',
    image: 'https://cdn.salla.sa/mlEh1kXGsRe6nNfNi29jHQlAwO2xaWpzq97Iq6cQ.jpg',
  },
  {
    id: 5,
    title: 'تحديثات جديدة',
    description: 'تعرف على أحدث التحديثات في منصة سلة وكيفية الاستفادة منها.',
    image: 'https://cdn.salla.sa/AQ43OUZuD9Pfo8T6yuUb5nDfGKI4x1IZ857hB5wu.png',
  },
];

export default function SliderHome() {
  // الحالة لتحديد الكرت الحالي
  const [currentCard, setCurrentCard] = useState(0);

  // التنقل التلقائي بين الكروت
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % cards.length); // الانتقال إلى الكرت التالي
    }, 3000);

    return () => clearInterval(interval); // تنظيف المؤقت عند إلغاء تثبيت المكون
  }, []);

  return (
    <div className="relative w-auto p-4">
      {/* عنوان السلايدر */}
      <h1 className="text-2xl font-bold text-center mb-6 text-primary dark:text-primary-light">
        ألقي نظرة على آخر تحديثات سلة
      </h1>

      {/* عرض الكروت */}
      <div className="relative h-96 flex justify-center items-center overflow-hidden">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`absolute transition-transform duration-700 ease-in-out ${
              index === currentCard ? 'z-10 scale-100 opacity-100' : 'z-0 scale-90 opacity-50'
            }`}
            style={{
              transform: `translateX(${(index - currentCard) * 100}%)`,
            }}
          >
            <div className="bg-white dark:bg-secondary rounded-lg shadow-lg p-6 w-80">
              <Image
                src={card.image}
                alt={card.title}
                className="w-full rounded-lg mb-4"
                width={500}
                height={300}
                priority
              />
              <p className="text-lg font-bold mb-2 text-gray-900 dark:text-primary-light">{card.title}</p>
              <p className="text-gray-600 dark:text-gray-300">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* النقاط السفلية */}
      <div className="flex justify-center mt-6 space-x-2">
        {cards.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentCard ? 'bg-primary' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentCard(index)} // السماح بالنقر على النقاط لتغيير الكرت
          ></span>
        ))}
      </div>

      {/* رابط لعرض كل التحديثات */}
      <div className="text-center mt-6">
        <a
          href="#"
          className="text-primary hover:underline"
        >
          عرض كل التحديثات
        </a>
      </div>
    </div>
  );
}