import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"

export default function SpecialOffers() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">عروض خاصة</h2>

        {/* Flash Sale Banner */}
        <div className="relative overflow-hidden rounded-2xl mb-12 bg-gradient-to-r from-red-600 to-orange-500">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/ww.jpg?height=400&width=1200"
              alt="Flash Sale Background"
              fill
                     loading="lazy"
              className="object-cover"
            />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
            <div className="text-white text-center md:text-right mb-6 md:mb-0">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">تخفيضات نهاية الأسبوع</h3>
              <p className="text-xl mb-4">خصومات تصل إلى 70% على آلاف المنتجات</p>
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="h-5 w-5 ml-2" />
                <span>ينتهي في: 2 يوم 10:45:30</span>
              </div>
            </div>
            <Link
              href="/flash-sale"
              className="px-8 py-3 bg-white text-red-600 font-bold rounded-full hover:bg-gray-100 transition-colors"
            >
              تسوق الآن
            </Link>
          </div>
        </div>

        {/* Special Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Offer 1 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl overflow-hidden shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">عروض الإلكترونيات</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">وفر حتى 30% على أحدث الأجهزة الإلكترونية</p>
              <Link
                href="/offers/electronics"
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                تصفح العروض
              </Link>
            </div>
            <div className="relative h-48">
              <Image
                src="/images/image-5.jpg?height=200&width=400"
                alt="Electronics Offers"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Offer 2 */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl overflow-hidden shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">منتجات المنزل</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">خصومات تصل إلى 40% على مستلزمات المنزل</p>
              <Link
                href="/offers/home"
                className="inline-block px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
              >
                تصفح العروض
              </Link>
            </div>
            <div className="relative h-48">
              <Image src="/images/image-8.jpg?height=200&width=400" alt="Home Offers"        loading="lazy" fill className="object-cover" />
            </div>
          </div>

          {/* Offer 3 */}
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl overflow-hidden shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">الأزياء والإكسسوارات</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">خصم 25% على تشكيلة الخريف الجديدة</p>
              <Link
                href="/offers/fashion"
                className="inline-block px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
              >
                تصفح العروض
              </Link>
            </div>
            <div className="relative h-48">
              <Image src="/images/ww.jpg?height=200&width=400"
               alt="Fashion Offers" fill className="object-cover"  loading="lazy"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

