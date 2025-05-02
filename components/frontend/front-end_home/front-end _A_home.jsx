import { useEffect, useState } from 'react';
import React from 'react';
const cards = [
  {
    id: 1,
    title: 'أكثر من ٢٥ تطبيق جديد في متجر التطبيقات',
    description: 'التطبيقات واحدة من حلول اتجر الذكية التي تسهل على التاجر إنجاز أعماله بسرعة وذكاء. حيث تعد مساعدًا ذكيًا للتاجر وتوفر عليه الوقت والجهد وتقلل من الأخطاء.',
    image: 'https://storage.googleapis.com/a1aa/image/P1W8eLNAxPwLXymRp0yoLXjfw8O0Jfoj8lkmPgwWqSwedGGQB.jpg',
  },
  {
    id: 2,
    title: 'تطبيق جديد 2',
    description: 'وصف التطبيق 2',
    image: 'https://via.placeholder.com/600x400.png?text=Card+2',
  },
  {
    id: 3,
    title: 'تطبيق جديد 3',
    description: 'وصف التطبيق 3',
    image: 'https://via.placeholder.com/600x400.png?text=Card+3',
  },
  // يمكنك إضافة المزيد من الكاردات هنا
];

export default function Home() {
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-screen">
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 p-4 relative">
          <h1 className="text-2xl font-bold text-center mb-4">
            ألقي نظرة على آخر تحديثات اتجر
          </h1>
          <div className="relative h-96">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentCard ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}
              >
                <div className="bg-white rounded-lg shadow-lg p-4">
                  <image
                    src={card.image}
                    alt="صندوق يحتوي على شعارات تطبيقات مختلفة"
                    className="w-full rounded-lg mb-4"
                  />
                  <p className="text-lg font-bold mb-2">
                    {card.title}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-2">
              {cards.map((card, index) => (
                <span
                  key={card.id}
                  className={`w-2 h-2 rounded-full ${index === currentCard ? 'bg-teal-500' : 'bg-gray-300'}`}
                ></span>
              ))}
            </div>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="text-teal-500">
              عرض كل التحديثات
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-center mb-4">
              <image
                src="https://storage.googleapis.com/a1aa/image/iL60XPk287bLIhVP1cFXz3bxs7Q0w2dBkcCxlJzDs1U4ZYAF.jpg"
                alt="شعار سلة"
                className="w-24"
              />
            </div>
            <div className="flex justify-center mb-8">
              <button className="w-1/2 bg-teal-500 text-white py-2 rounded-l-lg">
                تسجيل الدخول
              </button>
              <button className="w-1/2 border border-teal-500 text-teal-500 py-2 rounded-r-lg">
                إنشاء حساب
              </button>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                placeholder="أدخل البريد الإلكتروني"
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                كلمة المرور
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="أدخل كلمة المرور"
                  className="w-full border border-gray-300 p-2 rounded-lg"
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                  <i className="fas fa-eye"></i>
                </span>
              </div>
            </div>
            <div className="text-right mb-4">
              <a href="#" className="text-teal-500">
                نسيت كلمة المرور؟
              </a>
            </div>
            <button className="w-full bg-teal-500 text-white py-2 rounded-lg">
              تسجيل الدخول
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
