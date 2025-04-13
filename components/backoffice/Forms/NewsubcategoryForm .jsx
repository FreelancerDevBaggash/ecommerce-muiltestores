"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../../../components/Forminputs/TextInput";
import FormHeader from "../../../components/backoffice/FormHeader";
import SubmitButton from "../../../components/Forminputs/SubmitButton";
import ImageInput from "../../../components/Forminputs/ImageInput";
import SelectInput from "../../../components/Forminputs/SelectInput";
import ToggleInput from "../../../components/Forminputs/ToggleInput";
import { makePostRequest, makePutRequest } from "../../../lib/apiRequest";
import { useRouter } from "next/navigation";
import { generateSlug } from "../../../lib/generateSlug";

export default function NewSubCategoryForm({ updateData = {}, categoryId, storeId }) {
  const [imageUrl, setImageUrl] = useState(updateData?.imageUrl || "");
  const [loading, setLoading] = useState(false);

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: updateData?.isActive ?? true,
      ...updateData,
    },
  });

  const router = useRouter();

  function redirect() {
    router.push("/dashboard/subcategory");
  }

  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.storeId = storeId;
   // data.categoryId = categoryId[0]?.id;
    data.imageUrl = imageUrl;

    if (updateData?.id) {
      // تعديل القسم الفرعي إذا كان المعرف موجودًا
      makePutRequest(
        setLoading, `api/subcategory/${updateData.id}`, data, "القسم الفرعي",
        redirect
      );
    } else {
      // إضافة قسم فرعي جديد
      makePostRequest(
        setLoading,
        "api/subcategory",
        data,
        "القسم الفرعي",
        reset,
        redirect
      );
    }
  }

  return (
    <div dir="rtl" className="min-h-screen p-4 dark:bg-gray-900">
      <FormHeader title={updateData?.id ? "تعديل القسم الفرعي" : "إضافة قسم فرعي جديد"} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow sm:p-6 mx-auto my-4"
      >
        <div className="grid gap-4">
          <TextInput
            lable="اسم القسم الفرعي"
            name="title"
            register={register}
            errors={errors}
            required
          />

         <ImageInput
         label="صورة القسم الفرعي"
         imageUrl={imageUrl}
         setImageUrl={setImageUrl}
         endpoint="subcategoryUploader"
         register={register}
         // تأكد من أن هذا الـ endpoint مضبوط في Uploadthing
       />

          <TextInput
            lable="وصف القسم الفرعي"
            name="description"
            register={register}
            errors={errors}
            textarea
          />

          <SelectInput
            lable="اختر القسم الرئيسي"
            name="categoryId"
            register={register}
            errors={errors}
            options={categoryId}
            defaultValue={updateData?.categoryId}
            disabled={!!categoryId} // إذا تم تمرير categoryId من الأب، نعطله
          />

          <ToggleInput
            label="حالة القسم الفرعي"
            name="isActive"
            trueTitle="نشط"
            falseTitle="غير نشط"
            register={register}
          />

          <SubmitButton
            isLoading={loading}
            buttonTitle={updateData?.id ? "تحديث القسم" : "حفظ القسم"}
            loadingButtonTitle={updateData?.id ? "جاري التحديث..." : "جاري الحفظ..."}
          />
        </div>
      </form>
    </div>
  );
}