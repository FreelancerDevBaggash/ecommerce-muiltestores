'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search, MessageCircle, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '../../../../lib/faqData';

const FAQCenter = ({ slugDomain }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter FAQs based on search query
  const filteredCategories = faqData.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const supportMethods = [
    {
      name: "الدعم الهاتفي",
      icon: <Phone className="w-6 h-6" />,
      value: "+966 12 345 6789",
      link: "tel:+966123456789"
    },
    {
      name: "البريد الإلكتروني",
      icon: <Mail className="w-6 h-6" />,
      value: "support@example.com",
      link: "mailto:support@example.com"
    },
    {
      name: "الدردشة الحية",
      icon: <MessageCircle className="w-6 h-6" />,
      value: "متاحة 24/7",
      link: `/${slugDomain}/contact`
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8" dir="rtl">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-full">
            <HelpCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          مركز المساعدة
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          إجابات واضحة لأسئلتك الشائعة حول منتجاتنا وخدماتنا
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative mb-12 max-w-2xl mx-auto"
      >
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="ابحث في الأسئلة الشائعة..."
          className="block w-full pr-10 pl-3 py-4 border border-gray-300 rounded-xl bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-right text-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </motion.div>

      {/* Categories Navigation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 flex flex-wrap justify-center gap-3"
      >
        {faqData.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(selectedCategory === index ? null : index)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === index 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {category.name}
          </button>
        ))}
      </motion.div>

      {/* FAQ Content */}
      {filteredCategories.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          {filteredCategories
            .filter(category => selectedCategory === null || filteredCategories.indexOf(category) === selectedCategory)
            .map((category, catIndex) => (
              <div key={catIndex} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
                  <h2 className="text-xl font-semibold flex items-center">
                    <span className="ml-3 text-2xl">{category.icon}</span>
                    {category.name}
                  </h2>
                </div>
                
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {category.items.map((item, itemIndex) => {
                    const index = `${catIndex}-${itemIndex}`;
                    const isActive = activeIndex === index;
                    
                    return (
                      <div key={itemIndex} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/10 transition-colors">
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="flex justify-between items-center w-full text-left gap-4"
                        >
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white flex-1 text-right">
                            {item.question}
                          </h3>
                          <div className={`p-1 rounded-full ${
                            isActive 
                              ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' 
                              : 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                          }`}>
                            {isActive ? (
                              <ChevronUp className="h-5 w-5" />
                            ) : (
                              <ChevronDown className="h-5 w-5" />
                            )}
                          </div>
                        </button>

                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-4 text-gray-600 dark:text-gray-300 text-right leading-relaxed">
                                {item.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-16"
        >
          <div className="text-gray-500 dark:text-gray-400">
            <HelpCircle className="mx-auto h-16 w-16" />
            <h3 className="mt-6 text-xl font-medium">لا توجد نتائج</h3>
            <p className="mt-3 max-w-md mx-auto">لم نتمكن من العثور على أي أسئلة تطابق بحثك. حاول استخدام كلمات مختلفة.</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-6 inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg text-green-700 bg-green-100 hover:bg-green-200 dark:text-green-400 dark:bg-green-900/30 dark:hover:bg-green-900/50"
            >
              عرض جميع الأسئلة
            </button>
          </div>
        </motion.div>
      )}

      {/* Support Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
            لا زلت بحاجة للمساعدة؟
          </h3>
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            فريق الدعم لدينا متاح على مدار الساعة للإجابة على استفساراتك ومساعدتك في حل أي مشاكل تواجهك.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportMethods.map((method, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-700/30 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600 text-center"
              >
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4">
                  {method.icon}
                </div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {method.name}
                </h4>
                <a 
                  href={method.link} 
                  className="text-green-600 dark:text-green-400 hover:underline block"
                >
                  {method.value}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQCenter;