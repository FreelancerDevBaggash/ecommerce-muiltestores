import React from 'react';
import { FiSmile, FiTarget, FiUsers } from 'react-icons/fi';
import { Button } from "@/components/ui/button";

function PartnersSection() {
  return (
    <section className="w-auto h-auto bg-primary/50 rounded-3xl py-12 lg:mx-20 sm:mx-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="font-arabic text-indigo-900 font-bold text-4xl md:text-5xl mb-6">
          مش لوحدك في الطريق
        </h1>
        <p className="font-arabic text-xl md:text-2xl text-gray-800 mb-10 max-w-2xl">
          مشوار التجارة ما هو سهل، بس ولا يهمك... نحنا جنبك من أول خطوة، ومعك حتى توصل لهدفك.
        </p>

        {/* شبكة الأيقونات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-2 max-w-6xl">
          {[
            {
              icon: <FiSmile size={28} className="text-indigo-800" />,
              title: 'دعم مستمر',
              description: 'نخبة من الخبراء موجودين للإجابة على استفساراتك دومًا.',
            },
            {
              icon: <FiTarget size={28} className="text-indigo-800" />,
              title: 'خطط واضحة',
              description: 'بنساعدك تحدد هدفك وتمشي بخطوات مدروسة.',
            },
            {
              icon: <FiUsers size={28} className="text-indigo-800" />,
              title: 'مجتمع متعاون',
              description: 'رواد أعمال مثلك يشاركون نفس الطموح والتجربة.',
            },
          ].map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="h-12 w-12 flex items-center justify-center bg-indigo-100 rounded-lg">
                {icon}
              </div>
              <div className="text-right">
                <h4 className="font-arabic text-lg font-semibold mb-1">{title}</h4>
                <p className="font-arabic text-sm text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* زر Call To Action */}
        <div className="mt-12">
          <Button className="bg-primary text-white hover:bg-secondary font-arabic text-lg px-6 py-3 rounded-full shadow-md transition-all">
            ابدأ رحلتك مع اتجر
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
