"use client";
import React, { useState } from "react"
import {useForm} from "react-hook-form";
// import SubmitButton from "@/components/Forminputs/SubmitButton";
// import FormHeader from "@/components/backoffice/FormHeader";
import TextInput from "../../../../../components/Forminputs/TextInput";
import FormHeader from "../../../../../components/backoffice/FormHeader";
import SubmitButton from "../../../../../components/Forminputs/SubmitButton";
import TextAreainput from "../../../../../components/Forminputs/TextAreainput";
import { generateUserCode } from "../../../../../lib/generateUserCode";
import { makePostRequest } from "../../../../../lib/apiRequest";
import ToggleInput from "../../../../../components/Forminputs/ToggleInput";


export default function NewStaff(){
    const [loading, setLoading] = useState(false)
    const {register, reset, watch, handleSubmit, formState:{errors}} =useForm(  {
           defaultValues: {
        isActive: true,
      },})
    const isActive = watch("isActive");
    async function onSubmit(data) {
      
/*
-name
-password
-email
-phone
-physicalAddress
-NIN
-DOB
-notes
-isActive


*/

         const code = generateUserCode("LSM",  data.name);
         data.code= code;
         console.log(data);
        makePostRequest( setLoading, 'api/staffs', data,
            'Staff',
            reset ) ;
  
    }
 
    return(
        <div>
            <FormHeader title="New Staff" />
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border
             border-gray-200 rounded-lg shadow sm:p-6 md:p-8
            dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <TextInput lable="Staff Full Name"
                    name="name"
                    register={register}
                    errors={errors} 
                     />

                <TextInput lable="NIN (Id Number)"
                    name="nin"
                    register={register}
                    errors={errors}
                    className="w-full" />

                <TextInput lable="Date of Birth"
                    name="dob"
                    type="date"
                    register={register}
                    errors={errors}
                    className="w-full" />
                     <TextInput lable="Password"
                    name="password"
                    type="password"
                    register={register}
                    errors={errors}
                    className="w-full" />

<TextInput lable="Staff's Email Address"
                    name="email"
                    register={register}
                    errors={errors} 
                    className="w-full" />

                <TextInput lable="Staff's Phone"
                    name="phone"
                    type='tel'
                    register={register}
                    errors={errors} 
                    className="w-full" />

                  

                          <TextInput lable="Staff's Physical Address"
                    name="physicalAddress"
                    register={register}
                    errors={errors} 
                    className="w-full" />


                       <TextAreainput 
                   lable="Notes"
                    name="notes"
                    register={register}
                    errors={errors} 
                    isRequired ={false}
                     />
   
                  
            </div>
                <SubmitButton isLoading={loading} buttonTitle="Create Staff"
                loadingButtonTitle="Create Staff please wait..."/> 
            </form>




        </div>

    );
}