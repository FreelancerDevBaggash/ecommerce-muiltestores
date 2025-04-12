"use client"
import React from 'react'
import TextInput from "../../Forminputs/TextInput";
import ToggleInput from "../../Forminputs/ToggleInput";
import {useForm} from "react-hook-form";
import NavButtons from '../NavButtons'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep, updateCheckoutFormData } from '@/redux/slices/checkoutSlice';
import { useSession } from 'next-auth/react';
export default function PersonalDetailsForm() {
  const {data:session, status} =useSession()
  const userId =session?.user?.id;
  const dispatch = useDispatch();
  const currentStep = useSelector ((store)=> store.checkout.currentStep);
  const existingFormData = useSelector((store) => store.checkout.checkoutFormData)   
    const {register, reset,watch, handleSubmit, 
        formState:{errors}} =useForm({
          defaultValues:{
            ...existingFormData
          }
        });


        async function processData(data){
          if(userId){
            data.userId = userId;
            // Update the checkout Data
             dispatch(updateCheckoutFormData(data))
            // Update the Current Step
            dispatch(setCurrentStep(currentStep + 1));
          }
        }
  return (
    <form onSubmit={handleSubmit(processData)}>
          <h2 className="text-x1  font-semibold mb-4 dark:text-lime-400">Personal Details</h2>
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <TextInput lable="First Name"
                    name="firstName"
                    register={register}
                    errors={errors} 
                    className="w-full" />

               <TextInput lable="Last Name"
                    name="lastName"
                    register={register}
                    errors={errors} 
                    className="w-full" />

              <TextInput lable="Email Address"
                    name="email"
                    type="email"
                    register={register}
                    errors={errors} 
                    className="w-full" />

              <TextInput lable="Phone Number"
                    name="phone"
                    register={register}
                    errors={errors} 
                    className="w-full" />
                    
      
            </div>
   
        <NavButtons />
    </form>
  )
}
