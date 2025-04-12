"use client"
import React, { useState } from 'react'
import ImageInput from "../../Forminputs/ImageInput";
import TextareaInput from "../../Forminputs/TextareaInput";
import {useForm} from "react-hook-form";
import NavButtons from '../NavButtons'
import { Circle, HeartHandshake, CreditCard } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep, updateOnboardingFormData } from '../../../redux/slices/onboardingSlice';
import { useSession } from 'next-auth/react';

export default function AdditionalInformationForm() {
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch()
  const currentStep = useSelector ((store)=> store.onboarding.currentStep);
  const existingFormData = useSelector((store) => store.onboarding.onboardingFormData)


    const {register, reset,watch, handleSubmit, 
        formState:{errors}} =useForm({
          defaultValues:{
            ...existingFormData
          }
        });
        const initialPaymentMethod =existingFormData.paymentMethod || "" ;
    const [paymentMethod,setPaymentMethod]=useState(initialPaymentMethod);
    console.log(paymentMethod)

    async function processData(data){
      data.profileImageUrl= imageUrl;
            // Update the checkout Data
            dispatch(updateOnboardingFormData(data))
           // Update the Current Step
           dispatch(setCurrentStep(currentStep + 1));
        }
  return (
    <form onSubmit={handleSubmit(processData)}>
          <h2 className="text-x1  font-semibold mb-4
           dark:text-lime-400">Additional Information</h2>
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
  
                  <ImageInput 
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                  endpoint="storeUploader"
                  label="Vendor Profile Image" />

                  <TextareaInput
                  lable="Vendor's Payment Terms"
                  name="terms"
                  register={register}
                  errors={errors}
                  isRequired={false} />

                   <TextareaInput
                  lable="Notes"
                  name="notes"
                  register={register}
                  errors={errors}
                  isRequired={false} />

            </div>
   
        <NavButtons />
    </form>
  )
}



