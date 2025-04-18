// import LoginForm from "../../../components/frontend/LoginForm";
// import { getData } from '../../../lib/getData';
// export default async function Login() {

//   // const store = await getData(`/stores/store/${slugDomain}`);
//   // console.log('Fetched store data:', slugDomain);

//   return (
//     <section className="bg-gray-50 dark:bg-gray-900">
//       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//         <a
//           href="#"
//           className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
//         >
//           <img
//             className="w-8 h-8 mr-2"
//             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
//             alt="logo"
//           />
//           Multi Commerce
//         </a>
//         <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
//             Login to Account
//             </h1>
//             <LoginForm  />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import VendorLoginForm from "../../../components/vendor/login-Form"
import AdvertisementSlider from "../../../components/vendor/advertisement-slider"
import FeatureSlider from "../../../components/vendor/feature-slider"
import Image from "next/image"
import logo from "@/public/logo33.png" // شعار المنصة




 // شعار المنصة

export default function VendorLoginPage() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col rtl" dir="rtl">
      {/* شريط الإعلانات */}
      <AdvertisementSlider />

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row">
          {/* الجانب الأيمن - نموذج تسجيل الدخول */}
          <div className="w-full md:w-1/2 p-8">
            <div className="flex justify-center mb-6">
              <Image
                src={logo || "/placeholder.svg"}
                alt="شعار المنصة"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </div>

            <div className="max-w-md mx-auto space-y-8">
              <div className="text-center">
                <h1 className="text-2xl font-bold tracking-tight text-blue-700">تسجيل دخول التاجر</h1>
                <p className="text-gray-500 mt-2">أدخل بيانات حسابك للوصول إلى لوحة التحكم</p>
              </div>

              <VendorLoginForm />
            </div>
          </div>

          {/* الجانب الأيسر - السلايدر */}
          <div className="hidden md:block w-1/2 bg-indigo-400 dark:bg-gray-800 rounded-br-lg rounded-bl-lg p-8">
            <FeatureSlider />
          </div>
        </div>
      </div>
    </section>
  )
}
