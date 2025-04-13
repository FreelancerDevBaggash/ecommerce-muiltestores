"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../../../components/Forminputs/TextInput";
import FormHeader from "../../../components/backoffice/FormHeader";
import SubmitButton from "../../../components/Forminputs/SubmitButton";
import ImageInput from "../../../components/Forminputs/ImageInput";
import { makePostRequest, makePutRequest } from "../../../lib/apiRequest";
import ToggleInput from "../../../components/Forminputs/ToggleInput";
import { useRouter } from "next/navigation";

export default function NewDeliveringProvider({ updateData = {} }) {
    const initialLogoUrl = updateData?.logoUrl ?? "";
    const id = updateData?.id ?? "";
    const [logoUrl, setLogoUrl] = useState(initialLogoUrl);
    const [loading, setLoading] = useState(false);
    const { register, reset, watch, handleSubmit, formState: { errors } } = useForm(
        { defaultValues: {
            isActive: updateData?.isActive ?? true,
            ...updateData
        }}
    );
    const router = useRouter();
    
    function redirect() {
        router.push('/dashboard/deliveringProviders');
    }

    const isActive = watch("isActive");

    async function onSubmit(data) {
        data.logoUrl = logoUrl; // إضافة شعار مزود الخدمة
        console.log(data);
        if (id) {
            // إذا كان هناك معرف، إرسال طلب تحديث
            makePutRequest(setLoading, `api/deliveringProviders/${id}`, data,
                "deliveringProviders", redirect);
        } else {
            // إذا لم يكن هناك معرف، إرسال طلب إنشاء
            makePostRequest(setLoading, 'api/deliveringProviders', data,
                'deliveringProviders', reset, redirect);
            setLogoUrl("");
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <TextInput 
                    label="Provider Name" // اسم مزود الخدمة
                    name="name"
                    register={register}
                    errors={errors}
                />
                <TextInput 
                    label="API URL" // عنوان API
                    name="apiUrl"
                    type="url"
                    register={register}
                    errors={errors}
                />
                <TextInput 
                    label="API Key" // مفتاح API
                    name="apiKey"
                    register={register}
                    errors={errors}
                />
                <TextInput 
                    label="API Secret" // السر الخاص بـ API
                    name="apiSecret"
                    register={register}
                    errors={errors}
                />
                <ImageInput
                    imageUrl={logoUrl}
                    setImageUrl={setLogoUrl}
                    endpoint="logoImageUploader"
                    label="Provider Logo" // شعار مزود الخدمة
                />
                <ToggleInput
                    label="Activate Provider" // تفعيل أو تعطيل المزود
                    name="isActive"
                    trueTitle="Active"
                    falseTitle="Inactive"
                    register={register}
                />
            </div>
            <SubmitButton
                isLoading={loading}
                buttonTitle={id ? "Update Provider" : "Create Provider"}
                loadingButtonTitle={`${id ? "Updating" : "Creating"} Provider, please wait...`}
            />
        </form>
    );
}
