"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../Forminputs/TextInput";
import TextareaInput from "../Forminputs/TextareaInput";
import TagsInput from "../Forminputs/TagsInput";
import FormHeader from "./FormHeader";
import SubmitButton from "../Forminputs/SubmitButton";
import { makePostRequest } from "../../lib/apiRequest";
import { useRouter } from "next/navigation";

export default function NewSubscriptionPlanPage() {
  const [loading, setLoading] = useState(false);
  const [features, setFeatures] = useState([]); // تخزين المميزات هنا
  const [limitations, setLimitations] = useState([]); 
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
    },
  });

  const router = useRouter();

  function redirect() {
    router.push("/dashboard/subscriptionPlan");
  }

  async function onSubmit(data) {
    data.features = features; // إضافة المميزات إلى البيانات قبل الإرسال
    data.limitations = limitations;
    console.log(data);
    makePostRequest(
      setLoading,
      "api/subscriptionPlan",
      data,
      "subscriptionPlan",
      reset,
      redirect
    );
  }

  return (
    <div dir="rtl">
      <FormHeader title="إضافة خطة اشتراك جديد" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 sm:gap-6">
          <TextInput
            lable="اسم الخطة"
            name="name"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="وصف الباقة"
            name="description"
            register={register}
            errors={errors}
          />

          <TextInput
            lable="السعر الشهري"
            name="monthlyPrice"
            register={register}
            errors={errors}
          />

          <TextInput
            lable="السعر السنوي"
            name="yearlyPrice"
            register={register}
            errors={errors}
          />

          <TagsInput
            label="المميزات"
            value={features}
            onChange={setFeatures} // تحديث المميزات هنا
          />

         <TagsInput
            label="عيووبة"
            value={limitations}
            onChange={setLimitations} // تحديث المميزات هنا
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle=" اضافة باقة اشتراك"
          loadingButtonTitle="جاري اضافة باقة اشتراك... يرجى الانتظار"
        />
      </form>
    </div>
  );
}
