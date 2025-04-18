// // import RegisterForm from "../../../components/frontend/RegisterForm";

// // export default function Register() {
// //   return (
// //     <section className="bg-gray-50 dark:bg-gray-900">
// //       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
// //         <a
// //           href="#"
// //           className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
// //         >
// //           <img
// //             className="w-8 h-8 mr-2"
// //             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
// //             alt="logo"
// //           />
// //           Multi Commerce
// //         </a>
// //         <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
// //           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
// //             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
// //               Create a new account
// //             </h1>
// //             <RegisterForm role="USER"/>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// import heroImage from '@/public/reshot.svg'; // تأكد من صحة المسار
// import SliderHome from "../../../components/frontend/front-end_home/Sider_Home";
// // import RegisterFormHome from "../../../components/frontend/front-end_home/RegisterForm_Home"; 
// import RegisterFormHome from "../../../components/frontend/front-end_home/RegisterForm_Home";
// // import NewStoreForm from "../../../components/frontend/front-end_home/StepTwoForm";
// // import StepThreeForm from "../../../components/frontend/front-end_home/StepThreeForm";
// // import StepOneForm from "../../../components/frontend/front-end_home/StepOneForm";
// import { getData } from '../../../lib/getData';

// export default async function Register({ params:{slugDomain}}) {
//    const store = await getData(`/stores/store/${slugDomain}`);
//     console.log('Fetched store data:', slugDomain);
//   return (
//     <section className="bg-gray-50 items-center dark:bg-gray-900">
//       <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 mx-auto lg:gap-12">
//         {/* القسم الأيسر */}
//         <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mb-12 lg:mb-0">
//           <a
//             href="#"
//             className="flex items-center mb-8 text-3xl font-semibold text-gray-900 dark:text-white"
//           >
//             <image
//               className="w-10 h-10 mr-3"
//               src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
//               alt="logo"
//             />
//             Multi Commerce
//           </a>
//           <div className="w-full  bg-white items-center rounded-lg shadow-xl dark:bg-gray-800">
//             <div className="p-8 space-y-6">
//               <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
//                 Create a new account
//               </h1>
//               <RegisterFormHome role="USER" />
//             </div>
//           </div>
//         </div>

//         {/* القسم الأيمن */}
//         <div className=" bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-4 w-full md:w-1/2">
//           <SliderHome />
//         </div>
//       </div>
    
   

//       {/* القسم السفلي */}
     
//     </section>
//   );
// }
// // "use client";





import Registerform from "../../../components/vendor/register-form"
import AdvertisementSlider from "../../../components/vendor/advertisement-slider"
import FeatureSlider from "../../../components/vendor/feature-slider"
import Image from "next/image"
import logo from "@/public/logo33.png" // شع
 // شعار المنصة

export default function VendorRegisterPage() {
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
