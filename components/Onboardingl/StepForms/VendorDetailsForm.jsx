"use client"
import React, { useState } from 'react'
import TextInput from "../../Forminputs/TextInput";
import ArrayItemsInput from "../../Forminputs/ArrayItemsInput"
import ToggleInput from "../../Forminputs/ToggleInput";
import {useForm} from "react-hook-form";
import NavButtons from '../NavButtons'
import { Circle, Truck } from 'lucide-react';
import { useDispatch , useSelector  } from 'react-redux';
import { setCurrentStep, updateOnboardingFormData } from '../../../redux/slices/onboardingSlice';

export default function VendorDetailsForm() {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  const currentStep = useSelector ((store)=> store.onboarding.currentStep);
  const existingFormData = useSelector((store) => store.onboarding.onboardingFormData)


    const {register, reset,watch, handleSubmit, 
        formState:{errors}} =useForm({
          defaultValues:{
            ...existingFormData
          }
        });
    async function processData(data){
            console.log(data)
            data.products=products;
               // Update the checkout Data
            dispatch(updateOnboardingFormData(data));
           // Update the Current Step
           dispatch(setCurrentStep(currentStep + 1));
        }
  return (
    <form onSubmit={handleSubmit(processData)}>
          <h2 className="text-x1  font-semibold mb-4
           dark:text-lime-400">Vendor Details</h2>
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <TextInput lable="What is the size"
                    name="landSize"
                    type='number'
                    register={register}
                    errors={errors} 
                    className="w-full" />

               <TextInput lable="What is your main Crop "
                    name="mainCrop"
                    register={register}
                    errors={errors} 
                    className="w-full" />
                <ArrayItemsInput
                setItems={setProducts}
                items={products}
                itemTitle="product" 
                />
          

            
{/*       
             <div className="col-span-full">
             <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Shipping Cost</h3>
              <ul className="grid w-full gap-6 md:grid-cols-2">
                   <li>
        <input 
        type="radio" id="hosting-small"
         name="hosting" value="8"
          className="hidden peer" required
          onChange={(e) => 
          setShippingCost(e.target.value)} />
        <label for="hosting-small" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
          {/*Design */}
            {/* <div className="flex gap-2 items-center">
              <Truck className='w-8 h-8 ms-3 flex-shrink-0' />
              <div className="">
                <p>UPS</p>
                <p>Delivery Cost: $8</p>
              </div>
            </div>
           <Circle className='w-5 h-5 ms-3 flex-shrink-0'/>
        </label>
    </li>
    <li>
        <input
        type="radio" id="hosting-big"
         name="hosting" value="20"
         className="hidden peer"
          onChange={(e) => 
          setShippingCost(e.target.value)} />
        <label for="hosting-big" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex gap-2 items-center">
              <Truck className='w-8 h-8 ms-3 flex-shrink-0' />
              <div className="">
                <p>UPS</p>
                <p>Delivery Cost: $20</p>
              </div>
            </div>
           <Circle className='w-5 h-5 ms-3 flex-shrink-0'/>
        </label>
    </li>
</ul> */}
             {/* </div>  */}

            </div>
   
        <NavButtons />
    </form>
  )
}

