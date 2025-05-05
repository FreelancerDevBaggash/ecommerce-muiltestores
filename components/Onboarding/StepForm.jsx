// "use client"
// import React from 'react'
// import BasicInformationForm from './StepForms/BasicInformationForm'
// import VendorDetailsForm from './StepForms/VendorDetailsForm'
// import AdditionalInformationForm from './StepForms/AdditionalInformationForm'
// import Summary from './StepForms/Summary'
// import { useSelector } from 'react-redux'


// export default async function StepForm({vendorId , templates}) {


//     const currentStep = useSelector((store) => store.onboarding.currentStep);
//     function renderFormByStep(step){
//         if(step===1){
//             return <BasicInformationForm/>
//         }else if(step === 3){
//             return <VendorDetailsForm templates={templates} />
//         }else if(step === 2){
//             return <AdditionalInformationForm  />
//         }else if (step === 4){
//             return <Summary vendorId={vendorId} />
//         }
//     }
//   return (
//     <div>
//       {renderFormByStep(currentStep)}
//     </div>
//   )
// }
"use client"
import BasicInformationForm from "./StepForms/BasicInformationForm"
import VendorDetailsForm from "./StepForms/VendorDetailsForm"
import AdditionalInformationForm from "./StepForms/AdditionalInformationForm"
import Summary from "./StepForms/Summary"
import { useSelector } from "react-redux"

export default function StepForm({ vendorId, templates }) {
  const currentStep = useSelector((store) => store.onboarding.currentStep)

  function renderFormByStep(step) {
    if (step === 1) {
      return <BasicInformationForm />
    } else if (step === 2) {
      return <AdditionalInformationForm />
    } else if (step === 3) {
      return <VendorDetailsForm templates={templates} />
    } else if (step === 4) {
      return <Summary vendorId={vendorId} />
    }
  }

  return <div className="bg-white mt-8 dark:bg-gray-800 rounded-xl">{renderFormByStep(currentStep)}</div>
}
