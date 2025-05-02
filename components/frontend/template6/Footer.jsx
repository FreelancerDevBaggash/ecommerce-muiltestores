// "use client";
// import Image from "next/image";
// import { useSession } from "next-auth/react";
// import React, { useMemo } from 'react';
// import { useTheme } from "next-themes";
// import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
// import Link from "next/link";

// /**
//  * Footer component
//  * يعتمد بالكامل على بيانات المتجر الممررة عبر prop storeData
//  * @param {string} slugDomain - اختصار نطاق المتجر للروابط
//  * @param {object} customization - تخصيص الألوان والخط
//  * @param {object} storeData - بيانات المتجر
//  */
// const Footer = ({ slugDomain, customization = {}, storeData = {} }) => {
//   const { status } = useSession();
//   const { theme } = useTheme();

//   // إعداد الألوان والنمط
//   const styleSettings = useMemo(() => ({
//     primaryColor: customization.primaryColor || "#4CAF50",
//     secondaryColor: customization.secondaryColor || "#2C3E50",
//     accentColor: customization.accentColor || "#FFC107",
//     lightBackground: customization.backgroundColor || "#FFFFFF",
//     darkBackground: customization.darkBackground || "#1E293B",
//     fontFamily: customization.fontFamily || "sans-serif",
//   }), [customization]);

//   if (status === "loading") {
//     return <p>جارٍ التحميل...</p>;
//   }

//   return (
//     <section
//       dir="rtl"
//       className="py-6 sm:pt-4 lg:pt-4"
//       style={{
//         backgroundColor: theme === "dark" ? styleSettings.darkBackground : styleSettings.lightBackground,
//         fontFamily: styleSettings.fontFamily,
//       }}
//     >
//       <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 dark:text-slate-50">
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">

//           {/* Section 1: معلومات المتجر */}
//           <div className="md:col-span-2 lg:col-span-2 space-y-4">
//             <div className="flex items-center gap-3">
//               <div
//                 className="relative w-12 h-12 rounded-full border-2 overflow-hidden"
//                 style={{ borderColor: styleSettings.primaryColor }}
//               >
//                 <Link href={`/${slugDomain}`}>
//                   <Image
//                     src={storeData.profileImageUrl || "/default-logo.png"}
//                     alt="شعار المتجر"
//                     fill
//                     className="object-cover"
//                   />
//                 </Link>
//               </div>
//               <div>
//                 <h1 className="text-xl font-bold">{storeData.businessName}</h1>
//                 <p className="text-xs mt-1">{storeData.entityType}</p>
//               </div>
//             </div>

//             <p className="text-sm leading-snug">
//               {storeData.notes || "لا يوجد وصف متاح."}
//             </p>

//             <div className="flex flex-wrap gap-2">
//               {storeData.socialLinks?.facebook && (
//                 <Link
//                   href={storeData.socialLinks.facebook}
//                   target="_blank"
//                   className="p-1.5 rounded-full hover:bg-opacity-20 transition-all"
//                   style={{ color: styleSettings.primaryColor }}
//                 >
//                   <FaFacebookF className="w-4 h-4" />
//                 </Link>
//               )}

//               {storeData.socialLinks?.instagram && (
//                 <Link
//                   href={storeData.socialLinks.instagram}
//                   target="_blank"
//                   className="p-1.5 rounded-full hover:bg-opacity-20 transition-all"
//                   style={{ color: styleSettings.primaryColor }}
//                 >
//                   <FaInstagram className="w-4 h-4" />
//                 </Link>
//               )}

//               {storeData.socialLinks?.twitter && (
//                 <Link
//                   href={storeData.socialLinks.twitter}
//                   target="_blank"
//                   className="p-1.5 rounded-full hover:bg-opacity-20 transition-all"
//                   style={{ backgroundColor: `${styleSettings.primaryColor}20` }}
//                 >
//                   <FaTwitter className="w-4 h-4" />
//                 </Link>
//               )}

//               {storeData.whatsappPhone && (
//                 <Link
//                   href={`https://wa.me/${storeData.whatsappPhone}`}
//                   target="_blank"
//                   className="p-1.5 rounded-full hover:bg-opacity-20 transition-all"
//                   style={{ backgroundColor: `${styleSettings.primaryColor}20` }}
//                 >
//                   <FaWhatsapp className="w-4 h-4" />
//                 </Link>
//               )}
//             </div>
//           </div>

//           {/* Section 2: معلومات الاتصال */}
//           <div className="space-y-3">
//             <h3 className="text-lg font-semibold">معلومات الاتصال</h3>
//             <div className="space-y-2">
//               <div className="flex items-center gap-2">
//                 <FaEnvelope className="flex-shrink-0 w-4 h-4" />
//                 <a
//                   href={`mailto:${storeData.email}`}
//                   className="hover:underline text-sm"
//                   style={{ color: styleSettings.secondaryColor }}
//                 >
//                   {storeData.email || "لا يوجد بريد"}
//                 </a>
//               </div>

//               <div className="flex items-center gap-2">
//                 <FaPhone className="flex-shrink-0 w-4 h-4" />
//                 <a
//                   href={`tel:${storeData.phone}`}
//                   className="hover:underline text-sm"
//                   style={{ color: styleSettings.secondaryColor }}
//                 >
//                   {storeData.phone || "لا يوجد رقم"}
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Section 3: روابط سريعة */}
//           <div className="space-y-3">
//             <h3 className="text-lg font-semibold">روابط سريعة</h3>
//             <nav>
//               <ul className="space-y-2 text-sm">
//                 <li>
//                   <Link href={`/${slugDomain}/contact`} className="hover:underline">
//                     تواصل معنا
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/about" className="hover:underline">
//                     عن الشركة
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/privacy" className="hover:underline">
//                     سياسة الخصوصية
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>

//         {/* حقوق النشر */}
//         <div
//           className="mt-2 pt-4 border-t text-center"
//           style={{ borderColor: styleSettings.accentColor }}
//         >
//           <p className="text-xs" style={{ color: styleSettings.secondaryColor }}>
//             جميع الحقوق محفوظة © {new Date().getFullYear()} {storeData.businessName || 'منصة اتجر'}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Footer;







"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import React, { useMemo } from 'react';
import { useTheme } from "next-themes";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import PropTypes from 'prop-types';

const SocialIcon = ({ href, children, color }) => (
  <Link
    href={href}
    target="_blank"
    className="p-2 rounded-full hover:scale-110 transition-transform duration-300"
    style={{ color }}
    aria-label="رابط اجتماعي"
  >
    {children}
  </Link>
);

const ContactItem = ({ icon, title, value, href, color }) => (
  <div className="flex items-center gap-3 group">
    <div className="p-2 rounded-full bg-opacity-20 group-hover:bg-opacity-30 transition-colors" style={{ backgroundColor: color }}>
      {icon}
    </div>
    <div>
      <p className="text-xs text-gray-500 dark:text-gray-400">{title}</p>
      {href ? (
        <a href={href} className="text-sm hover:underline">{value}</a>
      ) : (
        <p className="text-sm">{value}</p>
      )}
    </div>
  </div>
);

const Footer = ({ slugDomain, customization = {}, storeData = {} }) => {
  const { status } = useSession();
  const { theme } = useTheme();

  const { 
    primaryColor = '#3B82F6',
    secondaryColor = '#64748B',
    accentColor = '#F59E0B',
    lightBackground = '#FFFFFF',
    darkBackground = '#1E293B',
    fontFamily = 'sans-serif'
  } = useMemo(() => customization, [customization]);

  if (status === "loading") return <div className="h-20 bg-gray-100  dark:bg-gray-800 animate-pulse" />;

  return (
    <footer
      style={{
        backgroundColor: theme === "dark" ? darkBackground : lightBackground,
        fontFamily,
      }}
      className="border-t dark:border-gray-700"
    >
      <div className="container py-8 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 lg:gap-12">
          {/* Brand Section */}
          <div className="md:col-span-4 lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden border-2" style={{ borderColor: primaryColor }}>
                <Image
                  src={storeData.profileImageUrl || "/default-logo.png"}
                  alt="شعار المتجر"
                  fill
                  className="object-contain p-1.5"
                />
              </div>
              <div className=" dark:text-gray-300">
                <h1 className="text-2xl font-bold" style={{ color: accentColor }}>
                  {storeData.businessName}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">{storeData.entityType}</p>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {storeData.notes || "وصف المتجر غير متوفر"}
            </p>

            <div className="flex gap-4 dark:text-gray-300">
              {storeData.socialLinks?.facebook && (
                <SocialIcon href={storeData.socialLinks.facebook} color={primaryColor}>
                  <FaFacebookF className="w-5 h-5" />
                </SocialIcon>
              )}
              {storeData.socialLinks?.instagram && (
                <SocialIcon href={storeData.socialLinks.instagram} color={primaryColor}>
                  <FaInstagram className="w-5 h-5" />
                </SocialIcon>
              )}
              {storeData.socialLinks?.twitter && (
                <SocialIcon href={storeData.socialLinks.twitter} color={primaryColor}>
                  <FaTwitter className="w-5 h-5" />
                </SocialIcon>
              )}
              {storeData.whatsappPhone && (
                <SocialIcon href={`https://wa.me/${storeData.whatsappPhone}`} color={primaryColor}>
                  <FaWhatsapp className="w-5 h-5" />
                </SocialIcon>
              )}
            </div>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6" style={{ color: accentColor }}>تواصل معنا</h3>
            <div className="space-y-4">
              <ContactItem
                icon={<FaEnvelope className="w-4 h-4" />}
                title="البريد الإلكتروني"
                value={storeData.email || "لا يوجد"}
                href={`mailto:${storeData.email}`}
             
              />
              <ContactItem
                icon={<FaPhone className="w-4 h-4" />}
                title="رقم الهاتف"
                value={storeData.phone || "لا يوجد"}
                href={`tel:${storeData.phone}`}
            
              />
              {storeData.address && (
                <ContactItem
                  icon={<FaMapMarkerAlt className="w-4 h-4" />}
                  title="العنوان"
                  value={storeData.address}
            
                />
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6" style={{ color: accentColor }}>روابط سريعة</h3>
            <nav className="space-y-3">
              <Link href={`/${slugDomain}/contact`} className="block hover:text-primary dark:text-gray-300 transition-colors" >
                تواصل معنا
              </Link>
              <Link href="/about" className="block hover:text-primary dark:text-gray-300 transition-colors" >
                عن الشركة
              </Link>
              <Link href="/privacy" className="block hover:text-primary dark:text-gray-300 transition-colors" >
                سياسة الخصوصية
              </Link>
            </nav>
          </div>

          {/* Newsletter (Optional) */}
          {/* <div className="md:col-span-12 lg:col-span-2">
            <div className="bg-opacity-10 p-4 rounded-xl" style={{ backgroundColor: primaryColor }}>
              <h3 className="font-semibold mb-3">النشرة البريدية</h3>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 rounded-lg px-3 py-2 text-sm border focus:outline-none"
                  style={{ borderColor: primaryColor }}
                />
                <button 
                  className="px-4 py-2 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: primaryColor }}
                >
                  اشتراك
                </button>
              </div>
            </div>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t text-center" style={{ borderColor: accentColor }}>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} {storeData.busName || 'منصة اتجر'}. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  slugDomain: PropTypes.string.isRequired,
  customization: PropTypes.shape({
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
    accentColor: PropTypes.string,
    lightBackground: PropTypes.string,
    darkBackground: PropTypes.string,
    fontFamily: PropTypes.string,
  }),
  storeData: PropTypes.shape({
    businessName: PropTypes.string,
    entityType: PropTypes.string,
    profileImageUrl: PropTypes.string,
    notes: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    socialLinks: PropTypes.shape({
      facebook: PropTypes.string,
      instagram: PropTypes.string,
      twitter: PropTypes.string,
    }),
    whatsappPhone: PropTypes.string,
  }),
};

export default Footer;