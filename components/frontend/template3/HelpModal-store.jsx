
// "use client";

// import {  Modal, } from "flowbite-react";
// import { useState } from "react";
// import { CornerDownLeft, Headphones, HelpCircle, MessageSquare, Truck } from 'lucide-react'
// import Link from "next/link";

// export default function HelpModal() {
//   const [openModal, setOpenModal] = useState("");

//   return (
//     <>
//       {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
//       <button onClick={() => setOpenModal(true)} className='flex items-center space-x-1 
//         text-green-950 dark:text-slate-100 '>
//           <HelpCircle/>
//           <span>Help</span>
//         </button>
//       <Modal show={openModal} onClose={() => setOpenModal(false)}>
//         <Modal.Header>
//             Need Help with Shopping, Talk to our Help Desk
//         </Modal.Header>
//         <Modal.Body>
//                  <div className="grid grid-cols-2 gap-6">
//                     <Link href='tel: 77200' className="flex items-center space-x-2 
//         text-green-950 dark:text-slate-100"> 
//               <div className="flex items-center w-10 h-10
//                bg-lime-100 justify-center rounded-full">
//                  <Headphones className="w-6 h-6 text-lime-800"/></div>
//           <span>Call: 772002007 </span>
//           </Link>
//           <Link href='/track' className="flex items-center space-x-2 
//         text-green-950 dark:text-slate-100"> 
//               <div className="flex items-center w-10 h-10
//                bg-lime-100 justify-center rounded-full">
//                  <Truck className="w-6 h-6 text-lime-800"/></div>
//           <span>Track your Order </span>
//           </Link>

//           <Link href='tel: 77200' className="flex items-center space-x-2 
//         text-green-950 dark:text-slate-100"> 
//               <div className="flex items-center w-10 h-10
//                bg-lime-100 justify-center rounded-full">
//                  <CornerDownLeft className="w-6 h-6 text-lime-800"/></div>
//           <span>Returns and Refunds </span>
//           </Link>

//           <Link href='tel: 77200' className="flex items-center space-x-2 
//         text-green-950 dark:text-slate-100"> 
//               <div className="flex items-center w-10 h-10
//                bg-lime-100 justify-center rounded-full">
//                  <MessageSquare className="w-6 h-6 text-lime-800"/></div>
//           <span>Chat with Us</span>
//           </Link>
//                  </div>
                
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }






"use client";
import { Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { CornerDownLeft, Headphones, HelpCircle, MessageSquare, Truck } from 'lucide-react';
import Link from "next/link";
// import { getData } from "../../lib/getData"; // استيراد دالة getData لجلب البيانات
import {getData} from '../../../lib/getData';
export default function HelpModalstore({ slugDomain }) {
  const [openModal, setOpenModal] = useState("");
  const [phone, setPhoneNumber] = useState(null);

  // استخدام useEffect لجلب رقم الهاتف من API المتجر
  useEffect(() => {
    async function fetchStorePhone() {
      if (slugDomain) {
        const storeData = await getData(`stores/store/${slugDomain}`);
        setPhoneNumber(storeData?.phone || "N/A");
      }
    }
    fetchStorePhone();
  }, [slugDomain]);

  // توليد رابط واتساب باستخدام رقم الهاتف
  const whatsappLink = `https://wa.me/${phone}`;

  return (
    <>
      <button onClick={() => setOpenModal(true)} className='flex items-center space-x-1 
        text-lime-700 dark:text-slate-100 '>
        <HelpCircle />
        <span>Help</span>
      </button>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          Need Help with Shopping, Talk to our Help Desk
        </Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-2 gap-6">

            {/* رابط الاتصال بالتاجر */}
            <Link href={`tel:${phone}`} className="flex items-center space-x-2 
              text-green-950 dark:text-slate-100">
              <div className="flex items-center w-10 h-10
                 bg-lime-100 justify-center rounded-full">
                <Headphones className="w-6 h-6 text-lime-800" />
              </div>
              <span>Call: {phone}</span>
            </Link>

            {/* رابط تتبع الطلب */}
            <Link href='/track' className="flex items-center space-x-2 
              text-green-950 dark:text-slate-100">
              <div className="flex items-center w-10 h-10
                 bg-lime-100 justify-center rounded-full">
                <Truck className="w-6 h-6 text-lime-800" />
              </div>
              <span>Track your Order</span>
            </Link>

            {/* رابط المرتجعات والاسترداد عبر واتساب */}
            <Link href={whatsappLink} target="_blank" className="flex items-center space-x-2 
              text-green-950 dark:text-slate-100">
              <div className="flex items-center w-10 h-10
                 bg-lime-100 justify-center rounded-full">
                <CornerDownLeft className="w-6 h-6 text-lime-800" />
              </div>
              <span>Returns and Refunds (WhatsApp)</span>
            </Link>

            {/* رابط المحادثة */}
            <Link href={`tel:${phone}`} className="flex items-center space-x-2 
              text-green-950 dark:text-slate-100">
              <div className="flex items-center w-10 h-10
                 bg-lime-100 justify-center rounded-full">
                <MessageSquare className="w-6 h-6 text-lime-800" />
              </div>
              <span>Chat with Us</span>
            </Link>

          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
