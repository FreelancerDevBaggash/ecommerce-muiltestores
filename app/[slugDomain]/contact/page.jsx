// import React from "react";
// import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
// import input from "../../ui/input";
// export default function ContactUs({ slugDomain, customization = {} }) {
//     const { data: session, status } = useSession();
//     const [store, setStore] = useState(null);
//     const { theme } = useTheme();
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

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-16">
//       <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">تواصل معنا</h2>

//       <div className="grid md:grid-cols-2 gap-6">
//         {/* Form Section */}
//         <div className="bg-white shadow-xl rounded-2xl p-6">
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="الاسم"
//               className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none"
//             />
//             <input
//               type="email"
//               placeholder="البريد الإلكتروني"
//               className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none"
//             />
//             <input
//               type="tel"
//               placeholder="+967 xxx xxx xxx"
//               className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none"
//             />
//             <textarea
//               placeholder="نص الرسالة"
//               className="w-full border border-gray-300 rounded-lg p-3 h-32 resize-none focus:outline-none"
//             />
//             <button
//               type="submit"
//               className="w-full bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg p-3 font-semibold"
//             >
//               إرسال
//             </button>
//           </form>
//         </div>

//         {/* Contact Info Section */}
//         <div className="bg-white shadow-xl rounded-2xl p-6">
//           <h3 className="text-xl font-bold mb-4">معلومات التواصل</h3>
//           <p className="mb-4">نسعد بتواصلكم معنا في أي وقت</p>
//           <p className="flex items-center gap-2">
//             <FaEnvelope /> {store?.email || "لا يوجد بريد"}</p>
//              <p className="flex items-center gap-2"><FaPhone /> {store?.phone || "لا يوجد رقم"}</p>

//           <div className="flex gap-4 text-2xl text-gray-600">
//             <a href="#" className="hover:text-indigo-500"><i className="fas fa-phone"></i></a>
//             <a href="#" className="hover:text-indigo-500"><i className="fas fa-envelope"></i></a>
//             <a href="#" className="hover:text-indigo-500"><i className="fab fa-whatsapp"></i></a>
//             <a href="#" className="hover:text-indigo-500"><i className="fab fa-tiktok"></i></a>
//             <a href="#" className="hover:text-indigo-500"><i className="fab fa-instagram"></i></a>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="mt-16 border-t pt-6 text-center text-sm text-gray-500">
//         <p>© 2025 جميع الحقوق محفوظة - صنع بكل ❤️ بواسطة منصة اتاجر</p>
//       </footer>
//     </div>
//   );
// }
import React from 'react'
import ContactUs from '@/components/frontend/template5/ContactUs'
export default function Page({params:{slugDomain}}) {
  return (
    <div dir='rfc'>
      {/* <ContactUs slugDomain={slugDomain}/> */}
    </div>
  )
}


