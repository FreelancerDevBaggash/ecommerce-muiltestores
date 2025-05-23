// import React from 'react'
// import Steps from '../../../../components/Onboarding/Steps'
// import CartBanner from '../../../../components/Onboarding/CartBanner'
// import StepForm from '../../../../components/Onboarding/StepForm'
// import { getData } from '../../../../lib/getData'


// export default async function page({params:{id}}) {
//   const templates = await getData("templates")
//   const steps = [
//     {
//       number: 1,
//       title: "Basic Information",
//     },
//     {
//       number: 2,
//       title: "Vendor Details",
//     },
//     {
//       number: 3,
//       title: "Assitional Information",
//     },
//     {
//       number: 4,
//       title: "Summary",
//     },
//   ];
 
//   return (
//     <div className='bg-slate-200 dark:bg-slate-950 min-h-screen'>
//       <div className="max-w-3xl my-6 mx-auto border border-slate-700 p-6 rounded-lg">
//        {/*STEPS */}
//        <Steps steps={steps} />
//        <div className="w-full p-4 bg-white border border-gray-200 
//        rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
       
//         {/*FORM */}
//           <StepForm vendorId={id} templates={templates}/>
//        </div>

     
//       </div>
//     </div>
//   )
// }

import Steps from "../../../../components/Onboarding/Steps"
import StepForm from "../../../../components/Onboarding/StepForm"
import { getData } from "../../../../lib/getData"

export default async function OnboardingPage({ params: { id } }) {
  const templates = await getData("templates")
  const steps = [
    {
      number: 1,
      title: "معلومات أساسية",
    },
    {
      number: 2,
      title: "معلومات إضافية",
    },
    {
      number: 3,
      title: "ثيمات المتجر",
    },
    {
      number: 4,
      title: "الملخص",
    },
  ]

  return (
    <div dir="rtl" className="bg-slate-100 dark:bg-slate-950  font-arabic  min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white  dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            {/* خطوات الإعداد */}
            <Steps steps={steps} />

            {/* نموذج الإعداد */}
            <div className="mt-12">
              <StepForm vendorId={id} templates={templates} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
