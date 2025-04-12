"use client"
import { setCurrentStep } from '../../../redux/slices/onboardingSlice';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { makePostRequest } from "../../../lib/apiRequest";
import { generateUserCode } from "../../../lib/generateUserCode";

export default function Summary({vendorId}) {
  const [loading, setLoading]= useState(false)
  const router =useRouter()
  const onboardingFormData = useSelector((store) => store.onboarding.onboardingFormData);
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  const dispatch =useDispatch();
  function handlePrevious(){
     dispatch(setCurrentStep(currentStep - 1));
  }
// console.log("gggggggggggggggggggggggggggggg", vendorId)
  async function submitData(){
    const data = {
      ...onboardingFormData
    };
    const fullName =`${data.businessNameEn}`
    const code = generateUserCode("LFF",  fullName);
    data.code= code;
    data.vendorId =vendorId;
    console.log(data);
    const redirect = () => router.push('/dashboard');
   makePostRequest( setLoading, 'api/stores', data,
       'Stores',
      // reset,
       redirect ) ;
  }
  return (
    <div className='my-6'>
                <h2 className="text-x1  font-semibold mb-4
           dark:text-lime-400">Summary</h2>
           <div className="flex">
             <h2>Here are your Details</h2>
           </div>
        <div className="mt-4 flex items-center justify-between">
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
          <span>Previous</span>
        </button>

       {
        loading?(
          <button disabled  className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 
          text-sm font-medium text-center text-white
           bg-slate-900 rounded-lg focus:ring-4
            focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800
             dark:bg-lime-600 dark:hover:bg-lime-700"> Processing Please wait...</button>
        ):(
          <button  
          onClick={submitData}
            className="inline-flex items-center px-6 py-3 mt-4 sm:mt-6 
            text-sm font-medium text-center text-white
             bg-slate-900 rounded-lg focus:ring-4
              focus:ring-lime-200 dark:focus:ring-lime-900 hover:bg-slate-800
               dark:bg-lime-600 dark:hover:bg-lime-700"
          >
            
            <span>Submit Data</span>
            <ChevronRight className="w-5 h-5 mr-2" />
          </button>
        )
       }
        </div>
    </div>
  )
}
