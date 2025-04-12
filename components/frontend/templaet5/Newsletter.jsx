"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // 🔥 تم إصلاح الدالة بإزالة TypeScript Syntax
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("الرجاء إدخال بريدك الإلكتروني");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("الرجاء إدخال بريد إلكتروني صحيح");
      return;
    }

    // تنفيذ الاشتراك
    setIsSubmitted(true);
    setError("");
    setEmail("");

    // إخفاء رسالة النجاح بعد 3 ثوانٍ
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-12 bg-blue-600 dark:bg-blue-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            اشترك في نشرتنا الإخبارية
          </h2>
          <p className="text-blue-100 mb-8">
            اشترك ليصلك أحدث العروض والتخفيضات والمنتجات الجديدة مباشرة إلى بريدك الإلكتروني.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-grow relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              {error && <p className="absolute text-red-200 text-sm mt-1">{error}</p>}
            </div>
            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg flex items-center justify-center transition-colors"
            >
              <Send className="h-5 w-5 ml-2" />
              <span>اشترك</span>
            </button>
          </form>

          {isSubmitted && (
            <p className="mt-4 text-green-200 bg-green-800/30 py-2 px-4 rounded-lg inline-block">
              تم الاشتراك بنجاح! شكراً لك.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
