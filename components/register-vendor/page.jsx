// // "use client";

// // import React, { useEffect, useState } from 'react';
// // import Link from "next/link";
// // import RegisterFormHome from "@/components/frontend/front-end_home/RegisterForm_Home";
// // import Image from 'next/image';

// // const cards = [
// //   {
// //     id: 1,
// //     title: 'أكثر من ٢٥ تطبيق جديد في متجر التطبيقات',
// //     description: 'التطبيقات واحدة من حلول سلة الذكية التي تسهل على التاجر إنجاز أعماله بسرعة وذكاء. حيث تعد مساعدًا ذكيًا للتاجر وتوفر عليه الوقت والجهد وتقلل من الأخطاء.',
// //     image: 'https://storage.googleapis.com/a1aa/image/P1W8eLNAxPwLXymRp0yoLXjfw8O0Jfoj8lkmPgwWqSwedGGQB.jpg',
// //   },
// //   // يمكنك إضافة المزيد من الكاردات هنا
// // ];

// // export default function Page() {
// //   const [currentCard, setCurrentCard] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
// //     }, 3000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <section className="bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
// //       <div className="container mx-auto px-6 py-8 lg:py-0">
// //         <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
// //           <Image
// //             className="w-8 h-8 mr-2"
// //             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
// //             alt="logo"
// //             width={32}
// //             height={32}
// //           />
// //           Multi Commerce
// //         </a>
// //         <div className=" bg-black rounded-lg shadow-2xl dark:border dark:bg-gray-800 dark:border-gray-700">
// //           <div className="bg-black dark:bg-gray-800 flex items-center justify-center">
// //             <div className="container p-4 flex flex-col md:flex-row-reverse items-center justify-center">
        
// //               <div className="w-full md:w-1/2 p-4">
// //                 <div className="bg-white rounded-lg shadow-lg p-8">
              
// //                   <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
// //                     <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
// //                       Create a new account
// //                     </h1>
// //                     <RegisterFormHome role="VENDOR" />
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// // import RegisterForm from '../../../components/frontend/RegisterForm';
// import React from 'react';
// import Image from 'next/image';
// import RegisterFormHome from '@/components/frontend/front-end_home/RegisterForm_Home';
// import SliderHome from '@/components/frontend/front-end_home/Sider_Home';
// import logo from '@/public/logo33.png'; // شعار المنصة


// export default function Page() {
//   return (
//     <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center rtl">
//       <div className="bg-white rounded-lg shadow-2xl dark:border dark:bg-gray-800 dark:border-gray-700 w-full max-w-6xl">
//         {/* الشعار */}
//         <div className="flex items-center justify-between px-6 py-2 border-b border-gray-700">
//           <a
//             href="/hero"
//             className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
//           >
          
//             <Image
//               className=" "
//               src={logo}    
//               alt="شعار المنصة"    
//               width={200} 
//               height={200}     
//               //  alt="Multi Commerce Logo"
//               // width={32}
//               // height={32}
//               priority
//             />
//             {/* Multi Commerce */}
//           </a>
//         </div>

//         {/* المحتوى الرئيسي */}
//         <div className="flex flex-col md:flex-row items-center justify-between p-4 gap-4">
//           {/* نموذج التسجيل */}
//           <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-1/2">
//             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black text-center mb-4">
//               إنشاء حساب جديد
//             </h1>
//             <RegisterFormHome role="VENDOR" />
//           </div>

//           {/* الكارد (السلايدر) */}
//           <div className="bg-slate-50 dark:bg-gray-800 rounded-lg shadow-lg p-4 w-full md:w-1/2">
//             <SliderHome />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import RegisterForm from '../../../components/frontend/RegisterForm';
import React from 'react';
import Image from 'next/image';
import RegisterFormHome from '@/components/frontend/front-end_home/RegisterForm_Home';
import SliderHome from '@/components/frontend/front-end_home/Sider_Home';
import logo from '@/public/logo33.png'; // شعار المنصة


export default function Page() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center rtl">
      <div className="bg-white rounded-lg shadow-2xl dark:border dark:bg-gray-800 dark:border-gray-700 w-full max-w-6xl">
        {/* الشعار */}
        <div className="flex items-center justify-between px-6 py-2 border-b border-gray-700 bg-gray-100 dark:bg-gray-900">
          <a
            href="/hero"
            className="flex items-center text-2xl font-semibold text-gray-900  dark:bg-slate-900"
          >
            <Image
              src={logo}
              alt="شعار المنصة"
              width={200}
              height={200}
              priority
            />
          </a>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="flex flex-col  md:flex-row items-center justify-between p-4 gap-4">
          {/* نموذج التسجيل */}
          <div className="bg-white rounded-lg shadow-lg dark:bg-gray-800  p-8 w-full md:w-1/2">
            <h1 className="text-xl font-bold leading-tight tracking-tight  text-blue-700  md:text-2xl dark:text-slate-900 text-center mb-4">
              إنشاء حساب جديد
            </h1>
            <RegisterFormHome role="VENDOR" />
          </div>
          {/* الكارد (السلايدر) */}
          <div className="bg-indigo-400 dark:bg-gray-800 rounded-lg shadow-lg p-4 w-full md:w-1/2">
            <SliderHome />
          </div>
        </div>
      </div>
    </section>
  );
}