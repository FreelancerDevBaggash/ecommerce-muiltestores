
// // "use client";

// // import {  Modal, } from "flowbite-react";
// // import { useState } from "react";
// // import { CornerDownLeft, Headphones, HelpCircle, MessageSquare, Truck } from 'lucide-react'
// // import Link from "next/link";

// // export default function HelpModal() {
// //   const [openModal, setOpenModal] = useState("");

// //   return (
// //     <>
// //       {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
// //       <button onClick={() => setOpenModal(true)} className='flex items-center space-x-1 
// //         text-green-950 dark:text-slate-100 '>
// //           <HelpCircle/>
// //           <span>Help</span>
// //         </button>
// //       <Modal show={openModal} onClose={() => setOpenModal(false)}>
// //         <Modal.Header>
// //             Need Help with Shopping, Talk to our Help Desk
// //         </Modal.Header>
// //         <Modal.Body>
// //                  <div className="grid grid-cols-2 gap-6">
// //                     <Link href='tel: 77200' className="flex items-center space-x-2 
// //         text-green-950 dark:text-slate-100"> 
// //               <div className="flex items-center w-10 h-10
// //                bg-lime-100 justify-center rounded-full">
// //                  <Headphones className="w-6 h-6 text-lime-800"/></div>
// //           <span>Call: 772002007 </span>
// //           </Link>
// //           <Link href='/track' className="flex items-center space-x-2 
// //         text-green-950 dark:text-slate-100"> 
// //               <div className="flex items-center w-10 h-10
// //                bg-lime-100 justify-center rounded-full">
// //                  <Truck className="w-6 h-6 text-lime-800"/></div>
// //           <span>Track your Order </span>
// //           </Link>

// //           <Link href='tel: 77200' className="flex items-center space-x-2 
// //         text-green-950 dark:text-slate-100"> 
// //               <div className="flex items-center w-10 h-10
// //                bg-lime-100 justify-center rounded-full">
// //                  <CornerDownLeft className="w-6 h-6 text-lime-800"/></div>
// //           <span>Returns and Refunds </span>
// //           </Link>

// //           <Link href='tel: 77200' className="flex items-center space-x-2 
// //         text-green-950 dark:text-slate-100"> 
// //               <div className="flex items-center w-10 h-10
// //                bg-lime-100 justify-center rounded-full">
// //                  <MessageSquare className="w-6 h-6 text-lime-800"/></div>
// //           <span>Chat with Us</span>
// //           </Link>
// //                  </div>
                
// //         </Modal.Body>
// //       </Modal>
// //     </>
// //   );
// // }






// "use client";
// import { Modal } from "flowbite-react";
// import { useEffect, useState } from "react";
// import { CornerDownLeft, Headphones, HelpCircle, MessageSquare, Truck } from 'lucide-react';
// import Link from "next/link";
// // import { getData } from "../../lib/getData"; // استيراد دالة getData لجلب البيانات
// import {getData} from '../../../lib/getData';
// export default function HelpModalstore({ slugDomain }) {
//   const [openModal, setOpenModal] = useState("");
//   const [phone, setPhoneNumber] = useState(null);

//   // استخدام useEffect لجلب رقم الهاتف من API المتجر
//   useEffect(() => {
//     async function fetchStorePhone() {
//       if (slugDomain) {
//         const storeData = await getData(`stores/store/${slugDomain}`);
//         setPhoneNumber(storeData?.phone || "N/A");
//       }
//     }
//     fetchStorePhone();
//   }, [slugDomain]);

//   // توليد رابط واتساب باستخدام رقم الهاتف
//   const whatsappLink = `https://wa.me/${phone}`;

//   return (
//     <>
//       <button onClick={() => setOpenModal(true)} className='flex items-center space-x-1 
//         text-lime-700 dark:text-slate-100 '>
//         <HelpCircle />
//         <span>Help</span>
//       </button>

//       <Modal show={openModal} onClose={() => setOpenModal(false)}>
//         <Modal.Header>
//           Need Help with Shopping, Talk to our Help Desk
//         </Modal.Header>
//         <Modal.Body>
//           <div className="grid grid-cols-2 gap-6">

//             {/* رابط الاتصال بالتاجر */}
//             <Link href={`tel:${phone}`} className="flex items-center space-x-2 
//               text-green-950 dark:text-slate-100">
//               <div className="flex items-center w-10 h-10
//                  bg-lime-100 justify-center rounded-full">
//                 <Headphones className="w-6 h-6 text-lime-800" />
//               </div>
//               <span>Call: {phone}</span>
//             </Link>

//             {/* رابط تتبع الطلب */}
//             <Link href='/track' className="flex items-center space-x-2 
//               text-green-950 dark:text-slate-100">
//               <div className="flex items-center w-10 h-10
//                  bg-lime-100 justify-center rounded-full">
//                 <Truck className="w-6 h-6 text-lime-800" />
//               </div>
//               <span>Track your Order</span>
//             </Link>

//             {/* رابط المرتجعات والاسترداد عبر واتساب */}
//             <Link href={whatsappLink} target="_blank" className="flex items-center space-x-2 
//               text-green-950 dark:text-slate-100">
//               <div className="flex items-center w-10 h-10
//                  bg-lime-100 justify-center rounded-full">
//                 <CornerDownLeft className="w-6 h-6 text-lime-800" />
//               </div>
//               <span>Returns and Refunds (WhatsApp)</span>
//             </Link>

//             {/* رابط المحادثة */}
//             <Link href={`tel:${phone}`} className="flex items-center space-x-2 
//               text-green-950 dark:text-slate-100">
//               <div className="flex items-center w-10 h-10
//                  bg-lime-100 justify-center rounded-full">
//                 <MessageSquare className="w-6 h-6 text-lime-800" />
//               </div>
//               <span>Chat with Us</span>
//             </Link>

//           </div>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }
"use client";
import { Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import {
  CornerDownLeft,
  Headphones,
  HelpCircle,
  MessageSquare,
  Truck,
  X,
  MessageCircle,
  ShoppingBag,
  RefreshCw
} from 'lucide-react';
import Link from "next/link";
import { getData } from '../../../lib/getData';
import { motion } from "framer-motion";

export default function HelpModalstore({ slugDomain = {}, customization = {} }) {
  const [openModal, setOpenModal] = useState(false);
  const [phone, setPhoneNumber] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStorePhone() {
      try {
        setLoading(true);
        if (slugDomain) {
          const storeData = await getData(`stores/store/${slugDomain}`);
          setPhoneNumber(storeData?.phone || "غير متوفر");
        }
      } catch (error) {
        console.error("فشل في جلب رقم الهاتف:", error);
        setPhoneNumber("غير متوفر");
      } finally {
        setLoading(false);
      }
    }
    fetchStorePhone();
  }, [slugDomain]);

  const whatsappLink = phone && phone !== "غير متوفر"
    ? `https://wa.me/${phone}?text=مرحبًا، أحتاج مساعدة في طلبي.`
    : "#";

  const colors = {
    primary: customization.primaryColor || '#4CAF50',
    secondary: customization.secondaryColor || '#8BC34A',
    text: customization.textColor || '#333333',
    darkText: customization.darkTextColor || '#FFFFFF',
    background: customization.backgroundColor || '#F5F5F5',
    darkBackground: customization.darkBackgroundColor || '#121212',
  };

  const isDarkMode = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const textColor = isDarkMode ? colors.darkText : colors.text;
  const bgColor = isDarkMode ? colors.darkBackground : colors.background;

  const helpItems = [
    {
      title: "الدعم الفني",
      icon: <Headphones className="w-5 h-5" />,
      link: `tel:${phone}`,
      available: phone && phone !== "غير متوفر",
      description: "تواصل مباشرة مع فريق الدعم"
    },
    {
      title: "تتبع الطلب",
      icon: <Truck className="w-5 h-5" />,
      link: '/track',
      available: true,
      description: "تحقق من حالة طلبك"
    },
    {
      title: "المرتجعات والمبالغ",
      icon: <RefreshCw className="w-5 h-5" />,
      link: whatsappLink,
      available: phone && phone !== "غير متوفر",
      description: "ابدأ عملية الإرجاع أو الاسترداد"
    },
    {
      title: "دردشة مباشرة",
      icon: <MessageCircle className="w-5 h-5" />,
      link: `tel:${phone}`,
      available: phone && phone !== "غير متوفر",
      description: "مراسلة فورية مع ممثلينا"
    },
    {
      title: "مشاكل الطلب",
      icon: <ShoppingBag className="w-5 h-5" />,
      link: whatsappLink,
      available: phone && phone !== "غير متوفر",
      description: "أبلغ عن مشكلة في طلبك"
    },
    {
      title: "الأسئلة الشائعة",
      icon: <HelpCircle className="w-5 h-5" />,
      link: `/${slugDomain}/faq`,
      available: true,
      description: "اعثر على إجابات لاستفساراتك"
    }
  ];

  return (
    <div dir="rtl">
      <motion.button
        onClick={() => setOpenModal(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all"
        style={{
          backgroundColor: colors.primary,
          color: 'white'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <HelpCircle className="w-5 h-5" />
        <span>مركز المساعدة</span>
      </motion.button>

      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        size="xl"
        position="center"
        style={{
          backgroundColor: bgColor,
          color: textColor
        }}
      >
        <Modal.Header className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <HelpCircle className="text-green-500" />
              مركز الدعم الفني
            </h3>
            <button
              onClick={() => setOpenModal(false)}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </Modal.Header>

        <Modal.Body>
          {loading ? (
            <div className="flex justify-center items-center py-10">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              {helpItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                    className={`flex items-start p-4 rounded-lg transition-all ${item.available
                      ? 'hover:bg-green-50 dark:hover:bg-gray-800 cursor-pointer'
                      : 'opacity-50 cursor-not-allowed'}`}
                    onClick={!item.available ? (e) => e.preventDefault() : null}
                  >
                    <div
                      className="flex items-center justify-center p-3 rounded-full ml-3"
                      style={{
                        backgroundColor: `${colors.primary}20`,
                        color: colors.primary
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">{item.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                      {!item.available && (
                        <span className="text-xs text-red-500">غير متاح حاليًا</span>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </Modal.Body>

        <Modal.Footer className="border-t border-gray-200 dark:border-gray-700">
          <div className="w-full text-center text-sm text-gray-500 dark:text-gray-400">
            <p>فريق الدعم متواجد لخدمتكم على مدار الساعة</p>
            {phone && phone !== "غير متوفر" && (
              <p className="mt-1 font-medium">
                رقم التواصل المباشر: <span className="text-green-600">{phone}</span>
              </p>
            )}
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
