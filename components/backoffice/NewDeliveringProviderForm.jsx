// "use client";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import TextInput from "../Forminputs/TextInput";
// import FormHeader from "./FormHeader";
// import SubmitButton from "../Forminputs/SubmitButton";
// import ImageInput from "../Forminputs/ImageInput";
// import { makePostRequest } from "../../lib/apiRequest";
// import { generateSlug } from "../../lib/generateSlug";
// import TextAreainput from "../Forminputs/TextAreainput";
// import ToggleInput from "../Forminputs/ToggleInput";
// import { useRouter } from "next/navigation";

// export default function NewDeliveringProviderForm() {
//   const [logoUrl, setLogoUrl] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//       isActive: true,
//     },
//   });

//   const isActive = watch("isActive");
//   const router = useRouter();

//   function redirect() {
//     router.push("/dashboard/deliveringProvider");
//   }

//   async function onSubmit(data) {
//     const slug = generateSlug(data.name);
//     data.slug = slug;
//     data.logoUrl = logoUrl;
//     console.log(data);
    
//     makePostRequest(
//       setLoading,
//       "api/deliveringProviders",
//       data,
//       "DeliveringProvider",
//       reset,
//       redirect
//     );
//     setLogoUrl("");
//   }

//   return (
//     <div>
//       <FormHeader title="New Delivering Provider" />
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
//       >
//         <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//           <TextInput
//             lable="Delivering Provider Name"
//             name="name"
//             register={register}
//             errors={errors}
//             className="w-full"
//           />

//           <TextInput
//             lable="API URL"
//             name="apiUrl"
//             register={register}
//             errors={errors}
//             className="w-full"
//           />

//           <TextInput
//             lable="API Key"
//             name="apiKey"
//             register={register}
//             errors={errors}
//             className="w-full"
//           />

//           <TextInput
//             lable="API Secret"
//             name="apiSecret"
//             register={register}
//             errors={errors}
//             className="w-full"
//           />

//           <ImageInput
//             imageUrl={logoUrl}
//             setImageUrl={setLogoUrl}
//             endpoint="deliveringProviderLogoUploader"
//             lable="Delivering Provider Logo"
//           />

//           <TextAreainput
//             lable="Delivering Provider Description"
//             name="description"
//             register={register}
//             errors={errors}
//           />

//           <ToggleInput
//             lable="Publish Delivering Provider"
//             name="isActive"
//             trueTitle="Active"
//             falseTitle="Inactive"
//             register={register}
//           />
//         </div>

//         <SubmitButton
//           isLoading={loading}
//           buttonTitle="Create Delivering Provider"
//           loadingButtonTitle="Creating Delivering Provider, please wait..."
//         />
//       </form>
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../Forminputs/TextInput";
import FormHeader from "./FormHeader";
import SubmitButton from "../Forminputs/SubmitButton";
import ImageInput from "../Forminputs/ImageInput";
import { makePostRequest } from "../../lib/apiRequest";
import { generateSlug } from "../../lib/generateSlug";
import ToggleInput from "../Forminputs/ToggleInput";
import { useRouter } from "next/navigation";

export default function NewDeliveringProviderForm() {
  const [logoUrl, setLogoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      isActive: true,
    },
  });

  const isActive = watch("isActive");
  const router = useRouter();

  function redirect() {
    router.push("/dashboard/deliveringProviders");
  }

  async function onSubmit(data) {
    //const slug = generateSlug(data.name);
  //  data.slug = slug;
    data.logoUrl = logoUrl || null; // إذا كانت الصورة غير مرفوعة، يتم تعيينها كـ null.
    console.log(data);
    
    makePostRequest(
      setLoading,
      "api/deliveringProviders",
      data,
      "DeliveringProvider",
      reset,
      redirect
    );
    setLogoUrl(""); // إعادة تعيين URL الصورة بعد الإرسال
  }

  return (
    <div>
      <FormHeader title="New Delivering Provider" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            lable="Delivering Provider Name"
            name="name"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInput
            lable="API URL"
            name="apiUrl"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInput
            lable="API Key"
            name="apiKey"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInput
            lable="API Secret"
            name="apiSecret"
            register={register}
            errors={errors}
            className="w-full"
          />

          <ImageInput
            imageUrl={logoUrl}
            setImageUrl={setLogoUrl}
            endpoint="deliveringProviderLogoUploader"
            label="Delivering Provider Logo"
          />

          {/* <TextAreainput
            lable="Delivering Provider Description"
            name="description"
            register={register}
            errors={errors}
          /> */}

          <ToggleInput
            label="Publish Delivering Provider"
            name="isActive"
            trueTitle="Active"
            falseTitle="Inactive"
            register={register}
          />
        </div>

        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Delivering Provider"
          loadingButtonTitle="Creating Delivering Provider, please wait..."
        />
      </form>
    </div>
  );
}
