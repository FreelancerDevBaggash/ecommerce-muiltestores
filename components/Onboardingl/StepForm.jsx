"use client"
import React from 'react'
import BasicInformationForm from './StepForms/BasicInformationForm'
import VendorDetailsForm from './StepForms/VendorDetailsForm'
import AdditionalInformationForm from './StepForms/AdditionalInformationForm'
import Summary from './StepForms/Summary'
import { useSelector } from 'react-redux'

export default function StepForm({vendorId}) {
    const currentStep = useSelector((store) => store.onboarding.currentStep);
    function renderFormByStep(step){
        if(step===1){
            return <BasicInformationForm/>
        }else if(step === 2){
            return <VendorDetailsForm/>
        }else if(step === 3){
            return <AdditionalInformationForm/>
        }else if (step === 4){
            return <Summary vendorId={vendorId} />
        }
    }
  return (
    <div>
      {renderFormByStep(currentStep)}
    </div>
  )
}
