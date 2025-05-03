import React from 'react';
import Breadcrumb from '../../../../components/frontend/Breadcrumb';
import AddToCartButton from '../../../../components/frontend/AddToCartButton';
import CategoryCarousel from '../../../../components/frontend/template6/CategoryCarousel';
import ProductShareButton from '../../../../components/frontend/ProductShareButton';
import ProductimageCarousel from '../../../../components/frontend/ProductimageCarousel';
import { Tag, Send, ShieldCheck, Truck, RefreshCw, CreditCard } from 'lucide-react';
import { getData } from '../../../../lib/getData';
import Link from 'next/link';

export default async function ProductDetailPage({ params: { slug } }) {
  const product = await getData(`/products/product/${slug}`);
  const { 
    id, 
    categoryId, 
    productImages = [], 
    imageUrl, 
    title, 
    barcode,          
    descripti, 
    sku, 
    productStock, 
    qty, 
    salePrice, 
    productPrice, 
    unit,             
    wholesalePrice,   
    isWholesale = false,
    wholesaleQty      
  } = product;
  
  const category = await getData(`categories/${categoryId}`);
  const categoryProducts = category.products;
  const products = categoryProducts.filter((item) => item.id !== id);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const urlToShare = `${baseUrl}/products/${slug}`;

  // حساب نسبة التخفيض
  const discountPercentage = productPrice 
    ? Math.round(((productPrice - salePrice)/productPrice)*100)
    : 0;

  return (
    <div dir="rtl" className="bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb className="mb-6" />
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6">
            {/* معرض الصور */}
            <div className="lg:col-span-5">
              <div className="sticky top-4">
                <ProductimageCarousel 
                  productImages={productImages} 
                  thumbnail={imageUrl}
                  className="rounded-xl border border-gray-200 dark:border-gray-700"
                />
                
                {/* خدمات إضافية */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <Truck className="w-5 h-5 text-primary-500" />
                    <span className="text-sm">توصيل سريع</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-primary-500" />
                    <span className="text-sm">إرجاع سهل</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <ShieldCheck className="w-5 h-5 text-primary-500" />
                    <span className="text-sm">ضمان أصلي</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <CreditCard className="w-5 h-5 text-primary-500" />
                    <span className="text-sm">دفع آمن</span>
                  </div>
                </div>
              </div>
            </div>

            {/* تفاصيل المنتج */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {title}
                </h1>
                <ProductShareButton urlToShare={urlToShare} />
              </div>

              {/* التقييمات (يمكن إضافتها لاحقًا) */}
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  (12 تقييم)
                </span>
              </div>

              {/* معلومات المنتج */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {category?.title}
                  </span>
                  {productStock > 0 ? (
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                      متوفر في المخزون
                    </span>
                  ) : (
                    <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm">
                      غير متوفر
                    </span>
                  )}
                </div>

                {barcode && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-medium">الباركود:</span>
                    <span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      {barcode}
                    </span>
                  </div>
                )}
              </div>

              {/* منطقة الأسعار */}
              <div className="bg-gray-50 dark:bg-gray-700/30 p-5 rounded-xl">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="space-y-1">
                    {productPrice && (
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                          {salePrice?.toLocaleString()} ر.ي
                        </span>
                        <del className="text-gray-400 dark:text-gray-500 text-lg">
                          {productPrice?.toLocaleString()} ر.ي
                        </del>
                        {discountPercentage > 0 && (
                          <span className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-200 px-2 py-1 rounded-full text-sm">
                            خصم {discountPercentage}%
                          </span>
                        )}
                      </div>
                    )}
                    {!productPrice && (
                      <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                        {salePrice?.toLocaleString()} ر.ي
                      </span>
                    )}
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      السعر شامل الضريبة
                    </p>
                  </div>
                  
                  <AddToCartButton 
                    product={product} 
                    className="px-8 py-3 text-lg"
                  />
                </div>

                {/* خيارات الكمية */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    الكمية
                  </label>
                  <div className="flex items-center gap-3">
                    <button className="w-10 h-10 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      -
                    </button>
                    <span className="w-12 text-center">1</span>
                    <button className="w-10 h-10 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* تفاصيل الجملة */}
              {isWholesale && wholesalePrice && wholesaleQty && (
                <div className="border border-amber-200 dark:border-amber-800 rounded-xl p-4 bg-amber-50/50 dark:bg-amber-900/20">
                  <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-3 flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    خصم الجملة
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500 dark:text-gray-400">الحد الأدنى</p>
                      <p className="font-bold">{wholesaleQty} قطع</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500 dark:text-gray-400">سعر القطعة</p>
                      <p className="font-bold">{wholesalePrice?.toLocaleString()} ر.ي</p>
                    </div>
                  </div>
                </div>
              )}

              {/* الوصف التفصيلي */}
              <div className="prose dark:prose-invert max-w-none">
                <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                  وصف المنتج
                </h3>
                <div className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
                  {descripti?.split('\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* المنتجات المشابهة */}
        <section className="my-12">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              منتجات مشابهة
            </h2>
            <Link href={`/category/${category?.slug}`} className="text-primary-600 dark:text-primary-400 hover:underline">
              عرض الكل
            </Link>
          </div>
          <CategoryCarousel 
            products={products}
            className="px-1"
          />
        </section>

        {/* التقييمات والآراء (يمكن تفعيلها لاحقًا) */}
        {/* <ProductReviews productId={id} /> */}
      </div>
    </div>
  );
}

// مكون نجمة التقييم (يجب استيراده من مكتبة أيقونات)
function Star({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}