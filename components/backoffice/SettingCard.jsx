// import { Wallet, Truck, Settings, Globe, Bell, ShoppingCart, Award } from "lucide-react";
// import { FC } from "react";
// import Link from "next/link";
// const SettingCard = ({ href, icon, title, description }) => {
//   return (
//     <Link
//       href={href}
//       className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl"
//     >
//       <div className="text-4xl mb-3">{icon}</div>
//       <h3 className="font-bold text-lg text-gray-800">{title}</h3>
//       <p className="text-sm text-gray-600">{description}</p>
//     </Link>
//   );
// };

// export default SettingCard;

// // components/SettingCard.jsx
// import React from "react";
// import Link from "next/link";

// const SettingCard = ({
//   href,
//   icon,
//   title,
//   description,
//   soon = false,
// }) => {
//   return (
//     <Link
//       href={href}
//       className="relative block bg-white dark:bg-gray-800 dark:border dark:border-gray-700 shadow-lg rounded-2xl p-6 md:p-8 lg:p-10 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
//     >
//       {/* Ribbon “قريبًا” */}
//       {soon && (
//         <span
//           className="
//       absolute top-3 right-3
//       bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
//       text-white text-xs font-bold uppercase
//       px-2 py-1
//       rounded-bl-lg shadow-lg
//     "
//         >
//           قريبًا
//         </span>
//       )}

//       {/* الأيقونة */}
//       <div className="text-4xl mb-4 text-green-500 dark:text-green-400">
//         {icon}
//       </div>

//       {/* العنوان */}
//       <h3 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-gray-100">
//         {title}
//       </h3>

//       {/* الوصف */}
//       <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
//         {description}
//       </p>
//     </Link>
//   );
// };

// export default SettingCard;

// components/SettingCard.jsx
import { memo } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const SettingCard = ({
  href,
  icon,
  title,
  description,
  soon = false,
  ariaLabel,
}) => {
  return (
    <Link
      href={href}
      passHref
      legacyBehavior
      aria-label={ariaLabel || `إعدادات ${title}`}
    >
      <a className="group relative block bg-white dark:bg-gray-800 dark:border dark:border-gray-700 shadow-lg hover:shadow-2xl rounded-2xl p-6 md:p-8 lg:p-10 flex flex-col items-center text-center transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-4 dark:focus:ring-offset-gray-900">
        
        {/* شريط قريبًا مع تحسينات SEO */}
        {soon && (
  <div 
    role="status"
    aria-label="قيد التطوير"
    className="absolute -top-3 end-3 z-10 overflow-hidden group/soon"
  >
    <div className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 text-white text-[0.95rem] font-bold px-5 py-1.5 shadow-xl rotate-3 origin-bottom-left transform-gpu skew-x-6 hover:skew-x-2 transition-all duration-300 hover:rotate-2 hover:-translate-y-0.5">
      
      {/* تأثير الإضاءة الديناميكي */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover/soon:opacity-100 transition-opacity duration-300 -skew-x-6" />
      
      {/* التأثير ثلاثي الأبعاد */}
      <div className="absolute -inset-1 border border-white/10 rounded-md transform -skew-x-6 shadow-inner" />
      
      {/* النص مع تحسينات الإضاءة */}
      <span className="relative block text-shadow-lg drop-shadow-md">
        قريبًا
        {/* علامة الوميض */}
        <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse" />
      </span>
      
      {/* طية زاوية واقعية */}
      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-purple-700/80 to-transparent transform -rotate-45 -skew-x-6 border-b border-r border-white/20" />
    </div>
  </div>
)}

        {/* الأيقونة مع تحسينات الوصول */}
        <div 
          role="img"
          aria-hidden="true"
          className="text-4xl md:text-5xl mb-4 text-green-500 dark:text-green-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-green-600 dark:group-hover:text-green-300"
        >
          {icon}
        </div>

        {/* العنوان مع تحسينات الـSemantic HTML */}
        <h2 className="font-semibold text-lg md:text-xl text-gray-800 dark:text-gray-100 relative pb-3 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-green-500 after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300">
          {title}
        </h2>

        {/* الوصف مع تحسينات الـSEO */}
        <p className="mt-3 text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-[280px] opacity-90 group-hover:opacity-100 transition-opacity">
          {description}
        </p>

        {/* تأثيرات الوصول للتركيز */}
        <span className="sr-only">اضغط للانتقال إلى إعدادات {title}</span>
      </a>
    </Link>
  );
};

SettingCard.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  soon: PropTypes.bool,
  ariaLabel: PropTypes.string,
};

export default memo(SettingCard);