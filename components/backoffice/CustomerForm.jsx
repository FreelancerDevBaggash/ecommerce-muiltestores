"use client";
import React, { useState } from "react"
import {useForm} from "react-hook-form";
// import SubmitButton from "@/components/Forminputs/SubmitButton";
// import FormHeader from "@/components/backoffice/FormHeader";
import TextInput from "@/components/Forminputs/TextInput";
import SubmitButton from "@/components/Forminputs/SubmitButton";
import TextareaInput from "@/components/Forminputs/TextareaInput";
import { generateUserCode } from "@/lib/generateUserCode";
import { makePutRequest } from "../../lib/apiRequest";
import ToggleInput from "@/components/Forminputs/ToggleInput";
import { useRouter } from "next/navigation";
import ArrayItemsInput from "@/components/Forminputs/ArrayItemsInput";
import ImageInput from "../Forminputs/ImageInput"

export default function CustomerForm({user}){
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false)
    const {register, reset, watch, handleSubmit, formState:{errors}} =useForm(  {
           defaultValues: {
        ...user
      },
    });
      const router = useRouter();
      function redirect(){
          router.push('/dashboard/customers')
   }
    async function onSubmit(data) {
      
        data.userId =user.id;
         data.profileImage= imageUrl;
         console.log(data);
        makePutRequest( 
          setLoading,
           `api/customers/${user.id}`, data,
            'Customer Profile',
            redirect,
            reset ) ;
            
  
    }
 
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="w-full p-4 max-w-3xl mx-auto bg-white border border-gray-200 
        rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="text-x1  font-semibold mb-4 dark:text-lime-400">Personal Details</h2>
                  <div className="grid gap-4 
                  sm:grid-cols-2 sm:gap-6 border-b border-gray-700 pb-10">
                <TextInput lable="Full Name"
                    name="name"
                    register={register}
                    errors={errors} 
                    className="w-full" />

                      <TextInput lable="Username"
                    name="username"
                    register={register}
                    errors={errors} 
                    className="w-full" />

                  <TextInput lable="Date of Birth"
                    name="dateOfBirth"
                    type="date"
                    register={register}
                    errors={errors} 
                    className="w-full" />

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
                    
                    <ImageInput imageUrl={imageUrl} 
                setImageUrl={setImageUrl} 
               endpoint = "customerProfileUploader" 
               label="Customer Profile"/>
      
            </div>

            <h2 className="text-x1  font-semibold mb-4
           dark:text-lime-400 pt-10">Shipping Details</h2>
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <TextInput lable="Street Address"
                    name="streetAddress"
                    register={register}
                    errors={errors} 
                    className="w-full" />

               <TextInput lable="City"
                    name="city"
                    register={register}
                    errors={errors} 
                    className="w-full" />

              <TextInput lable="Country"
                    name="country"
                    register={register}
                    errors={errors} 
                    className="w-full" />

              <TextInput lable="District"
                    name="district"
                    register={register}
                    errors={errors} 
                    className="w-full" />
      
            </div>
                <SubmitButton isLoading={loading} buttonTitle="Create vendor"
                loadingButtonTitle="Create vendor please wait..."/> 
            </form>
    );
}