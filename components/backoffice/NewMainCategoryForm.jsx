"use client";
import React, { useState } from "react"
import {useForm} from "react-hook-form";
// import SubmitButton from "@/components/Forminputs/SubmitButton";
// import FormHeader from "@/components/backoffice/FormHeader";
import TextInput from "../Forminputs/TextInput";
import FormHeader from "./FormHeader";
import SubmitButton from "../Forminputs/SubmitButton";
import ImageInput from "../Forminputs/ImageInput"
import { makePostRequest } from "../../lib/apiRequest";
import { generateSlug } from "../../lib/generateSlug";
import TextareaInput from "../Forminputs/TextareaInput"
import ToggleInput from "../Forminputs/ToggleInput";
import SelectInput from "../Forminputs/SelectInput";
import { useRouter } from "next/navigation";

export default function NewMainCategoryForm(){
    //const [imageUrl, setImageUrl] = useState("");
    const [logoUrl , setLogoUrl] = useState("")
    const [loading, setLoading] = useState(false)
    const {register, reset,watch, handleSubmit, formState:{errors}} =useForm(
        {
            defaultValues: {
         isActive: true,
       },}
    )
    const isActive = watch("isActive");
    const router = useRouter()
    function redirect(){
        router.push("/dashboard/mainCategory")
    }
    async function onSubmit(data) {
      



        const slug =generateSlug(data.title)
        data.slug= slug;
         data.logoUrl= logoUrl;
         console.log(data);
        makePostRequest( setLoading, 'api/mainCategories', data,
            'MainCategory',
            reset, redirect ) ;
            setLogoUrl("");
    }
    {/*- id
        -title
        -slug => auto()
        -Logo
        -desc
       
        */}
    return(
        <div>
            <FormHeader title="New MainCategory" />
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border
             border-gray-200 rounded-lg shadow sm:p-6 md:p-8
            dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <TextInput lable="MainCategory Title"
                    name="title"
                    register={register}
                    errors={errors} 
                    className="w-full"
                   />
                   
                 {/* <SelectInput  lable="Select Categories"
                    name="categoryIds"
                    register={register}
                    errors={errors}
                    className="w-full"
                    options={categories} 
                    multiple={true} /> */}


{/* Configure this endpoint in the core js*/}
                  <ImageInput imageUrl={logoUrl} 
                setImageUrl={setLogoUrl} 
               endpoint = "mainCategoryLogoUploader" label="MainCategory Logo"/>
                     
                     <TextareaInput 
                   lable="MainCategory Description"
                    name="description"
                    register={register}
                    errors={errors} 
                     />
                <ToggleInput
    label="Publish your MainCategory"
     name="isActive"
     trueTitle="Active"
     falseTitle="Draft"
     register={register}
    />
            </div>
                <SubmitButton isLoading={loading} buttonTitle="Create MainCategory"
                loadingButtonTitle="Create MainCategory please wait..."/> 
            </form>




        </div>

    );
}