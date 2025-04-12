"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-center p-6">
      <div className="relative">
        <Image
          src="/images/404.png" // يمكنك استخدام صورة SVG مخصصة هنا
          alt="404 Not Found"
          width={400}
          height={300}
          priority
          className="mx-auto"
        />
      </div>
      <h1 className="text-6xl font-extrabold text-gray-800 dark:text-gray-100 mt-6">404</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
        عذرًا، الصفحة التي تبحث عنها غير موجودة!
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-all"
      >
        العودة إلى الصفحة الرئيسية
      </Link>
    </div>
  );
}
