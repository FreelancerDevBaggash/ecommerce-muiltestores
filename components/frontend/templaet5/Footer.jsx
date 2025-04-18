// import Link from "next/link"
// import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react"

// export default function Footer() {
//   const currentYear = new Date().getFullYear()

//   return (
//     <footer className="container bg-gray-900 text-gray-300">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* About */}
//           <div>
//             <h3 className="text-xl font-bold mb-4 text-white">اتجر</h3>
//             <p className="mb-4">
//               منصة تسوق إلكتروني رائدة توفر تشكيلة واسعة من المنتجات عالية الجودة بأسعار تنافسية وخدمة عملاء متميزة.
//             </p>
//             <div className="flex space-x-4 space-x-reverse">
//               <Link href="#" className="hover:text-blue-400 transition-colors">
//                 <Facebook className="h-5 w-5" />
//               </Link>
//               <Link href="#" className="hover:text-blue-400 transition-colors">
//                 <Twitter className="h-5 w-5" />
//               </Link>
//               <Link href="https://www.instagram.com/" className="hover:text-blue-400 transition-colors">
//                 <Instagram className="h-5 w-5" />
//               </Link>
//               <Link href="#" className="hover:text-blue-400 transition-colors">
//                 <Youtube className="h-5 w-5" />
//               </Link>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xl font-bold mb-4 text-white">روابط سريعة</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/about" className="hover:text-blue-400 transition-colors">
//                   من نحن
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="hover:text-blue-400 transition-colors">
//                   اتصل بنا
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/faq" className="hover:text-blue-400 transition-colors">
//                   الأسئلة الشائعة
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/terms" className="hover:text-blue-400 transition-colors">
//                   الشروط والأحكام
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/privacy" className="hover:text-blue-400 transition-colors">
//                   سياسة الخصوصية
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Categories */}
//           <div>
//             <h3 className="text-xl font-bold mb-4 text-white">التصنيفات</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/categories/electronics" className="hover:text-blue-400 transition-colors">
//                   الإلكترونيات
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/categories/fashion" className="hover:text-blue-400 transition-colors">
//                   الأزياء
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/categories/home" className="hover:text-blue-400 transition-colors">
//                   المنزل
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/categories/beauty" className="hover:text-blue-400 transition-colors">
//                   الجمال والعناية
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/categories/grocery" className="hover:text-blue-400 transition-colors">
//                   البقالة
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-xl font-bold mb-4 text-white">اتصل بنا</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <MapPin className="h-5 w-5 ml-2 mt-0.5" />
//                 <span>شارع مأرب، صنعاء، الجمهورية اليمنية</span>
//               </li>
//               <li className="flex items-center">
//                 <Phone className="h-5 w-5 ml-2" />
//                 <span>+967 773356814 </span>
//               </li>
//               <li className="flex items-center">
//                 <Mail className="h-5 w-5 ml-2" />
//                 <span>info@megashop.com</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-12 pt-8 text-center">
//           <p>&copy; {currentYear} اتجر. جميع الحقوق محفوظة.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// "use client";
// import Image from "next/image";
// import { useSession } from "next-auth/react";
// import React, { useEffect, useState } from 'react';
// import { getData } from '../../../lib/getData';
// import { useTheme } from "next-themes";
// import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
// import Link from "next/link";

// const Footer = ({ slugDomain, customization = {} }) => {
//     const { data: session, status } = useSession();
//     const [store, setStore] = useState(null);
//     const { theme } = useTheme();

//     const primaryColor = customization?.primaryColor || "#4CAF50";
//     const secondaryColor = customization?.secondaryColor || "#2C3E50";
//     const accentColor = customization?.accentColor || "#FFC107";
//     const lightBackground = customization?.backgroundColor || "#FFFFFF";
//     const darkBackground = customization?.darkBackground || "#1E293B";
//     const fontFamily = customization?.fontFamily || "sans-serif";

//     useEffect(() => {
//         async function fetchStore() {
//             if (slugDomain) {
//                 const storeData = await getData(`stores/store/${slugDomain}`);
//                 setStore(storeData);
//             }
//         }
//         fetchStore();
//     }, [slugDomain]);

//     if (status === "loading") {
//         return <p>جارٍ التحميل...</p>;
//     }

//     return (
//         <section className="py-6  sm:pt-4 lg:pt-4"
//             dir="rtl"
//             style={{
//                 backgroundColor: theme === "dark" ? darkBackground : lightBackground,
//                 fontFamily
//             }}>
//             <div className="px-4 container  sm:px-6 lg:px-8 dark:text-slate-50 max-w-7xl">
//                 <div className="grid grid-cols-1 mr-8 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-4">
//                     {/* Store Info Section */}
//                     <div className="md:col-span-2 lg:col-span-2 space-y-4">
//                         <div className="flex items-center gap-3">
//                         <div className="relative w-12 h-12 rounded-full border-2 overflow-hidden" style={{ borderColor: primaryColor }}>
//                         <Link href={`/${slugDomain}`}>
//     <Image
//       src={store?.profileImageUrl || "/default-logo.png"}
//       alt="شعار المتجر"
//       layout="fill"
//       objectFit="cover"
//     />
//   </Link>
// </div>

                            
//                             <div>
//                                 <h1 className="text-xl font-bold" >
//                                     {store?.businessName}
//                                 </h1>
//                                 <p className="text-xs mt-1" >
//                                     {store?.entityType}
//                                 </p>
//                             </div>
//                         </div>
                        
//                         <p className="text-sm leading-snug" >
//                             {store?.notes || "لا يوجد وصف متاح."}
//                         </p>

//                         {/* Social Icons under description */}
//                         <div className="flex flex-wrap gap-2">
//                             {store?.facebook && (
//                                 <Link href={store.facebook} target="_blank"
//                                       className="p-1.5 rounded-full hover:bg-opacity-20 transition-all"
//                                    >
//                                     <FaFacebookF className="w-4 h-4" />
//                                 </Link>
//                             )}
//                             {store?.instagram && (
//                                 <Link href={store.instagram} target="_blank"
//                                       className="p-1.5 rounded-full hover:bg-opacity-20 transition-all"
//                                      >
//                                     <FaInstagram className="w-4 h-4" />
//                                 </Link>
//                             )}
//                             {store?.twitter && (
//                                 <Link href={store.twitter} target="_blank"
//                                       className="p-1.5 rounded-full hover:bg-opacity-20 transition-all"
//                                       style={{ backgroundColor: `${primaryColor}20` }}>
//                                     <FaTwitter className="w-4 h-4"  />
//                                 </Link>
//                             )}
//                             {store?.phone && (
//                                 <Link href={`https://wa.me/${store.phone}`} target="_blank"
//                                       className="p-1.5 rounded-full hover:bg-opacity-20 transition-all"
//                                       style={{ backgroundColor: `${primaryColor}20` }}>
//                                     <FaWhatsapp className="w-4 h-4"  />
//                                 </Link>
//                             )}
//                         </div>
//                     </div>

//                     {/* Contact Section */}
//                     <div className="space-y-3">
//                         <h3 className="text-lg font-semibold" >
//                             معلومات الاتصال
//                         </h3>
//                         <div className="space-y-2">
//                             <div className="flex items-center gap-2">
//                                 <FaEnvelope className="flex-shrink-0 w-4 h-4"  />
//                                 <a href={`mailto:${store?.email}`} className="hover:underline text-sm"
//                                    style={{ color: secondaryColor }}>
//                                     {store?.email || "لا يوجد بريد"}
//                                 </a>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <FaPhone className="flex-shrink-0 w-4 h-4"  />
//                                 <a href={`tel:${store?.phone}`} className="hover:underline text-sm"
//                                    style={{ color: secondaryColor }}>
//                                     {store?.phone || "لا يوجد رقم"}
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Links Section */}
//                     <div className="space-y-3">
//                         <h3 className="text-lg font-semibold" >
//                             روابط سريعة
//                         </h3>
//                         <nav>
//                             <ul className="space-y-2 text-sm">
//                                 <li>
//                                 <Link href={`/${slugDomain}/contact`} className="hover:underline">

                                        
//                                         تواصل معنا
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="/about" className="hover:underline"
//                                          >
//                                         عن الشركة
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link href="/privacy" className="hover:underline"
//                                           >
//                                         سياسة الخصوصية
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </nav>
//                     </div>
//                 </div>

//                 {/* Copyright */}
//                 <div className="mt-2 pt-4 border-t text-center" style={{ borderColor: accentColor }}>
//                     <p className="text-xs" style={{ color: secondaryColor }}>
//                     جميع الحقوق محفوظة © {new Date().getFullYear()} {store?.sinessName || 'منصة اتجر'}<br />
                      
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Footer;
// components/Footer.jsx
"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import React, { useMemo } from 'react';
import { useTheme } from "next-themes";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import Link from "next/link";

/**
 * Footer component
 * يعتمد بالكامل على بيانات المتجر الممررة عبر prop storeData
 * @param {string} slugDomain - اختصار نطاق المتجر للروابط
 * @param {object} customization - تخصيص الألوان والخط
 * @param {object} storeData - بيانات المتجر
 */
const Footer = ({ slugDomain, customization = {}, storeData = {} }) => {
  const { status } = useSession();
  const { theme } = useTheme();

  // إعداد الألوان والنمط
  const styleSettings = useMemo(() => ({
    primaryColor: customization.primaryColor || "#4CAF50",
    secondaryColor: customization.secondaryColor || "#2C3E50",
    accentColor: customization.accentColor || "#FFC107",
    lightBackground: customization.backgroundColor || "#FFFFFF",
    darkBackground: customization.darkBackground || "#1E293B",
    fontFamily: customization.fontFamily || "sans-serif",
  }), [customization]);

  if (status === "loading") {
    return <p>جارٍ التحميل...</p>;
  }

  return (
    <section
      dir="rtl"
      className="py-6 sm:pt-4 lg:pt-4"
      style={{
        backgroundColor: theme === "dark" ? styleSettings.darkBackground : styleSettings.lightBackground,
        fontFamily: styleSettings.fontFamily,
      }}
    >
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 dark:text-slate-50">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">

          {/* Section 1: معلومات المتجر */}
          <div className="md:col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="relative w-12 h-12 rounded-full border-2 overflow-hidden"
                style={{ borderColor: styleSettings.primaryColor }}
              >
                <Link href={`/${slugDomain}`}>
                  <Image
                    src={storeData.profileImageUrl || "/default-logo.png"}
                    alt="شعار المتجر"
                    fill
                    className="object-cover"
                  />
                </Link>
              </div>
              <div>
                <h1 className="text-xl font-bold">{storeData.businessName}</h1>
                <p className="text-xs mt-1">{storeData.entityType}</p>
              </div>
            </div>

            <p className="text-sm leading-snug">
              {storeData.notes || "لا يوجد وصف متاح."}
            </p>

            <div className="flex flex-wrap gap-2">
              {storeData.socialLinks?.facebook && (
                <Link
                  href={storeData.socialLinks.facebook}
                  target="_blank"
                  className="p-1.5 rounded-full hover:bg-opacity-20 transition-all"
                  style={{ color: styleSettings.primaryColor }}
                >
                  <FaFacebookF className="w-4 h-4" />
                </Link>
              )}

              {storeData.socialLinks?.instagram && (
                <Link
                  href={storeData.socialLinks.instagram}
                  target="_blank"
                  className="p-1.5 rounded-full hover:bg-opacity-20 transition-all"
                  style={{ color: styleSettings.primaryColor }}
                >
                  <FaInstagram className="w-4 h-4" />
                </Link>
              )}

              {storeData.socialLinks?.twitter && (
                <Link
                  href={storeData.socialLinks.twitter}
                  target="_blank"
                  className="p-1.5 rounded-full hover:bg-opacity-20 transition-all"
                  style={{ backgroundColor: `${styleSettings.primaryColor}20` }}
                >
                  <FaTwitter className="w-4 h-4" />
                </Link>
              )}

              {storeData.whatsappPhone && (
                <Link
                  href={`https://wa.me/${storeData.whatsappPhone}`}
                  target="_blank"
                  className="p-1.5 rounded-full hover:bg-opacity-20 transition-all"
                  style={{ backgroundColor: `${styleSettings.primaryColor}20` }}
                >
                  <FaWhatsapp className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>

          {/* Section 2: معلومات الاتصال */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">معلومات الاتصال</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FaEnvelope className="flex-shrink-0 w-4 h-4" />
                <a
                  href={`mailto:${storeData.email}`}
                  className="hover:underline text-sm"
                  style={{ color: styleSettings.secondaryColor }}
                >
                  {storeData.email || "لا يوجد بريد"}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <FaPhone className="flex-shrink-0 w-4 h-4" />
                <a
                  href={`tel:${storeData.phone}`}
                  className="hover:underline text-sm"
                  style={{ color: styleSettings.secondaryColor }}
                >
                  {storeData.phone || "لا يوجد رقم"}
                </a>
              </div>
            </div>
          </div>

          {/* Section 3: روابط سريعة */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">روابط سريعة</h3>
            <nav>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href={`/${slugDomain}/contact`} className="hover:underline">
                    تواصل معنا
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    عن الشركة
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:underline">
                    سياسة الخصوصية
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* حقوق النشر */}
        <div
          className="mt-2 pt-4 border-t text-center"
          style={{ borderColor: styleSettings.accentColor }}
        >
          <p className="text-xs" style={{ color: styleSettings.secondaryColor }}>
            جميع الحقوق محفوظة © {new Date().getFullYear()} {storeData.businessName || 'منصة اتجر'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
