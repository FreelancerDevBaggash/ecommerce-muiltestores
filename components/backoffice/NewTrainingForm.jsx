"use client";
import React, { useState } from "react"
import {useForm} from "react-hook-form";
// import SubmitButton from "@/components/Forminputs/SubmitButton";
// import FormHeader from "@/components/backoffice/FormHeader";
import TextInput from "../../components/Forminputs/TextInput";
import FormHeader from "../../components/backoffice/FormHeader";
import SubmitButton from "../../components/Forminputs/SubmitButton";
import TextareaInput from "../../components/Forminputs/TextareaInput";
import { generateSlug } from "../../lib/generateSlug";
import ImageInput from "../../components/Forminputs/ImageInput"
import SelectInput from "../../components/Forminputs/SelectInput";
import { makePostRequest } from "../../lib/apiRequest";
import ToggleInput from "../../components/Forminputs/ToggleInput";
import { useRouter } from "next/navigation";
import dynamic  from "next/dynamic";
const QuillEditor = dynamic(
    ()=> import("../../components/Forminputs/QuillEditor"),
    {
        ssr: false,
    }
);

export default function NewTrainingForm({categories}){
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const {register, reset,watch, handleSubmit, formState:{errors}} =useForm({
        defaultValues: {
            isActive: true,
          }

    });
    //Quill Editor
       //Custom Tool Bar
       const [content, setContent] = useState('')
        //Quill Editor END

        const router = useRouter()
        function redirect(){
            router.push("/dashboard/community")
        }
    const isActive = watch("isActive");

    async function onSubmit(data) {
      
        const slug =generateSlug(data.title)
        data.slug= slug;
        data.imageUrl = imageUrl;
        data.content = content;
        console.log(data);
        makePostRequest(
            setLoading,
            'api/trainings',
            data,
            'Training',
            reset,redirect
          ) ;
          setImageUrl("");
          setContent("")
    }
    {/*- id
        -title
        -slug
        -expertId
        -categoryId
        -description
        -content
        -image
        */}
    return(
        <div>
            <FormHeader title="New Training" />
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border
             border-gray-200 rounded-lg shadow sm:p-6 md:p-8
            dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <TextInput lable="Training Title"
                    name="title"
                    register={register}
                    errors={errors}
                    className="w-full"  />

                    <SelectInput  lable="Select Category"
                    name="categoryId"
                    register={register}
                    errors={errors}
                    className="w-full"
                    options={categories} 
                  />


                  <TextareaInput
            label="Training Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint = "trainingImageUploader" label="Training Thumbnail"/>
            {/*Content*/}

        <QuillEditor label="Training Content" value={content} onChange={setContent} />

               {/*Content End*/}
          <ToggleInput
    label="Publish your Training"
     name="isActive"
     trueTitle="Active"
     falseTitle="Draft"
     register={register}
    />
            </div>
                <SubmitButton isLoading={loading} buttonTitle="Create Training"
                loadingButtonTitle="Create Training please wait..."/> 
            </form>




        </div>

    );
}