
import { setCurrentStep } from "@/redux/slices/onboardingSlice";
import { ChevronLast, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import  {setCurrentStep} from "@"
export default function NavButtons() {
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  const dispatch =useDispatch();
  function handlePrevious(){
     dispatch(setCurrentStep(currentStep - 1));
  }
  return (
    <div dir="rtl" className="flex justify-between items-center">
      {currentStep > 1 && (
        <button  
          onClick={handlePrevious}
          type="button"
          className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 
          text-sm font-medium text-center text-white
           bg-slate-900 rounded-lg focus:ring-4
            focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800
             dark:bg-lime-600 dark:hover:bg-lime-700"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          <span>السابق</span>
        </button>
      )}
      <button
        type="submit"
        className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800 dark:bg-lime-600 dark:hover:bg-lime-700"
      >
        <span>التالي</span>
        <ChevronLeft className="w-5 h-5 ml-2" />
      </button>
    </div>
  );
}


// import { setCurrentStep } from "@/redux/slices/onboardingSlice";
// import { ChevronLast, ChevronLeft, ChevronRight } from "lucide-react";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";

// export default function NavButtons() {
//   const currentStep = useSelector((store) => store.onboarding.currentStep);
//   const dispatch = useDispatch();

//   // وظيفة العودة للخطوة السابقة
//   function handlePrevious() {
//     if (currentStep > 1) {
//       dispatch(setCurrentStep(currentStep - 1));
//     }
//   }

//   // وظيفة الانتقال للخطوة التالية
//   function handleNext() {
//     dispatch(setCurrentStep(currentStep + 1));
//   }

//   return (
//     <div className="flex justify-between items-center">
//       {currentStep > 1 && (
//         <button
//           onClick={handlePrevious}
//           type="button"
//           className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 
//           text-sm font-medium text-center text-white
//            bg-slate-900 rounded-lg focus:ring-4
//             focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800
//              dark:bg-lime-600 dark:hover:bg-lime-700"
//           aria-label="Previous step"
//         >
//           <ChevronLeft className="w-5 h-5 mr-2" />
//           <span>Previous</span>
//         </button>
//       )}

//       <button
//         onClick={handleNext} // إضافة حدث الضغط على زر "Next"
//         type="button"
//         className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800 dark:bg-lime-600 dark:hover:bg-lime-700"
//         aria-label="Next step"
//       >
//         <span>Next</span>
//         <ChevronRight className="w-5 h-5 ml-2" />
//       </button>
//     </div>
//   );
// }
