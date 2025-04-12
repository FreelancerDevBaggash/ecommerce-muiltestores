// import SliderHome from "../../../components/frontend/front-end_home/Slider_Home";
// import RegisterForm from "../../../components/frontend/RegisterForm";

// export default function Register() {
//   return (
//     <section className="bg-gray-50 dark:bg-gray-900">
//       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:flex-row lg:justify-between">
//         <div className="w-full lg:w-1/2 flex flex-col items-center justify-center mb-6 lg:mb-0">
//           <a
//             href="#"
//             className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
//           >
//             <ima
//               className="w-8 h-8 mr-2"
//               src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
//               alt="logo"
//             />
//             Multi Commerce
//           </a>
//           <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//               <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
//                 Create a new account
//               </h1>
//               <RegisterForm role="USER"/>
//             </div>
//           </div>
//         </div>
//         <div className="w-full lg:w-1/2 flex items-center justify-center">
//           <SliderHome />
//         </div>
//       </div>
//     </section>
//   );
// }
// import RegisterForm from "../../../components/frontend/front-end_home/RegisterFormHome";
import heroImage from '@/public/reshot.svg'; // تأكد من صحة المسار
import SliderHome from "../../../components/frontend/front-end_home/Sider_Home";
// import RegisterFormHome from "../../../components/frontend/front-end_home/RegisterForm_Home"; 
import RegisterFormHome from "../../../components/frontend/front-end_home/RegisterForm_Home";
// import NewStoreForm from "../../../components/frontend/front-end_home/StepTwoForm";
// import StepThreeForm from "../../../components/frontend/front-end_home/StepThreeForm";
// import StepOneForm from "../../../components/frontend/front-end_home/StepOneForm";

export default function Register() {
  return (
    <section className="bg-gray-50 items-center dark:bg-gray-900">
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 mx-auto lg:gap-12">
        {/* القسم الأيسر */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mb-12 lg:mb-0">
          <a
            href="#"
            className="flex items-center mb-8 text-3xl font-semibold text-gray-900 dark:text-white"
          >
            <image
              className="w-10 h-10 mr-3"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Multi Commerce
          </a>
          <div className="w-full  bg-white items-center rounded-lg shadow-xl dark:bg-gray-800">
            <div className="p-8 space-y-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                Create a new account
              </h1>
              <RegisterFormHome role="USER" />
            </div>
          </div>
        </div>

        {/* القسم الأيمن */}
        <div className=" bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-4 w-full md:w-1/2">
          <SliderHome />
        </div>
      </div>
    
   

      {/* القسم السفلي */}
     
    </section>
  );
}
// "use client";

// import { useState } from "react";
// import StepTwoForm from "../../../components/frontend/front-end_home/StepTwoForm";
// import StepThreeForm from "../../../components/frontend/front-end_home/StepThreeForm";
// import StepOneForm from "../../../components/frontend/front-end_home/StepOneForm";

// export default function StepForm() {
//   const [currentStep, setCurrentStep] = useState(1); // الخطوة الحالية

//   const steps = ["إنشاء حساب", "نتعرف عليك", "جاهزية متجرك"];

//   const handlePrevious = () => {
//     if (currentStep > 1) setCurrentStep(currentStep - 1);
//   };

//   const handleNext = () => {
//     if (currentStep < steps.length) setCurrentStep(currentStep + 1);
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       {/* خطوات التقدم */}
//       <div className="flex justify-between items-center mb-8">
//         {steps.map((step, index) => (
//           <div key={index} className="flex items-center">
//             <div
//               className={`w-8 h-8 flex items-center justify-center rounded-full ${
//                 index + 1 <= currentStep
//                   ? "bg-green-500 text-white"
//                   : "bg-gray-200 text-gray-600"
//               }`}
//             >
//               {index + 1}
//             </div>
//             <span
//               className={`ml-2 ${
//                 index + 1 <= currentStep
//                   ? "text-green-500 font-semibold"
//                   : "text-gray-600"
//               }`}
//             >
//               {step}
//             </span>
//             {index < steps.length - 1 && (
//               <div className="flex-1 h-1 bg-gray-200 mx-2">
//                 <div
//                   className={`h-1 ${
//                     index + 1 < currentStep ? "bg-green-500" : "bg-gray-200"
//                   }`}
//                   style={{ width: "100%" }}
//                 ></div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* محتوى الخطوة */}
//       <div>
//         {currentStep === 1 && <StepOneForm />}
//         {currentStep === 2 && <StepTwoForm />}
//         {currentStep === 3 && <StepThreeForm />}
//       </div>

//       {/* أزرار التحكم */}
//       <div className="flex justify-between mt-8">
//         <button
//           onClick={handlePrevious}
//           className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//         >
//           السابق
//         </button>
//         <button
//           onClick={handleNext}
//           className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//         >
//           التالي
//         </button>
//       </div>
//     </div>
//   );
// }
