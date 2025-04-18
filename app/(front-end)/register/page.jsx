// // import RegisterForm from '../../../components/frontend/RegisterForm';
// // import React from 'react'

// // export default function page() {
// //     return (
// //         <section className="bg-gray-50 dark:bg-gray-900">
// //           <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
// //             <a
// //               href="#"
// //               className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
// //             >
// //               <img
// //                 className="w-8 h-8 mr-2"
// //                 src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
// //                 alt="logo"
// //               />
// //               Multi Commerce
// //             </a>
// //             <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
// //               <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
// //                 <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
// //                   Create a new account
// //                 </h1>
// //                 <RegisterForm role="VENDOR"/>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       );
// // }
// import RegisterForm from '../../../components/frontend/RegisterForm';
// import React from 'react';
// import Image from 'next/image';
// import RegisterVendorForm_Home from '../../../components/frontend/front-end_home/RegisterVendorForm_Home';
// import SliderHome from '@/components/frontend/front-end_home/Sider_Home';
// import logo from '@/public/logo33.png'; // شعار المنصة


// export default function Page() {
//   return (
//     <section className="bg-gray-50 dark:bg-gray-900 min-h-screen w-full flex items-center justify-center rtl">
//       <div className="bg-white rounded-lg shadow-2xl dark:border dark:bg-gray-800 dark:border-gray-700 w-full max-w-6xl">
//         {/* الشعار */}
//         <div className="flex items-center justify-between px-6 py-2 border-b border-gray-700 bg-gray-100 dark:bg-gray-900">
//           <a
//             href="/hero"
//             className="flex items-center text-2xl font-semibold text-gray-900  dark:bg-slate-900"
//           >
//             <Image
//               src={logo}
//               alt="شعار المنصة"
//               width={200}
//               height={200}
//               priority
//             />
//           </a>
//         </div>

//         {/* المحتوى الرئيسي */}
//         <div className="flex flex-col  md:flex-row items-center justify-between p-2 gap-4">
//           {/* نموذج التسجيل */}
//           <div className="bg-white  dark:bg-gray-800   w-full md:w-1/2">
//             <h1 className="text-xl font-bold font-sans leading-tight tracking-tight   text-blue-700  md:text-2xl dark:text-slate-900 text-center mb-4">
//               إنشاء متجر جديد
//             </h1>
//             <RegisterVendorForm_Home role="VENDOR" />
//           </div>
//           {/* الكارد (السلايدر) */}
//           <div className="hidden  md:block  p-4 w-full md:w-1/2 bg-indigo-400 dark:bg-gray-800 rounded-lg shadow-lg p-4 w-full md:w-1/2">
//             <SliderHome />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import Registerform from "../../../components/vendor/register-form"
import AdvertisementSlider from "../../../components/vendor/advertisement-slider"
import FeatureSlider from "../../../components/vendor/feature-slider"
import Image from "next/image"
import logo from "@/public/logo33.png" // شع
 // شعار المنصة

export default function Page() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col rtl" dir="rtl">
      {/* شريط الإعلانات */}
      <AdvertisementSlider />

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg  dark:border dark:bg-gray-800 dark:border-gray-700 w-full max-w-6xl">
          {/* الشعار */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900">
            <a href="/" className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
              <Image
                src={logo || "/placeholder.svg"}
                alt="شعار المنصة"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </a>
          </div>

          {/* المحتوى الرئيسي */}
          <div className="flex flex-col md:flex-row items-stretch">
            {/* نموذج التسجيل */}
            <div className="bg-white dark:bg-gray-800 w-full md:w-1/2 p-8">
              <h1 className="text-xl font-bold font-sans leading-tight tracking-tight text-blue-700 md:text-2xl dark:text-white text-center mb-6">
                إنشاء حساب تاجر جديد
              </h1>
              <Registerform />
            </div>

            {/* الكارد (السلايدر) */}
            <div className="hidden md:block w-full md:w-1/2 bg-indigo-400 dark:bg-gray-800 rounded-br-lg rounded-bl-lg p-8">
              <FeatureSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
