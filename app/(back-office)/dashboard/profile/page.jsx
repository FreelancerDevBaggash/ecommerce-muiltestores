// import { getServerSession } from 'next-auth'
// import React from 'react'
// import {authOptions } from '../../../../lib/authOptions'
// export default async function page() {
//     const session =await getServerSession(authOptions);
//     if(!session) return;
//     const {user} = session;
//   return (
//     <div>
//        <h2>Welcome {user?.name} </h2>
//     </div>
//   )
// }
// "use client"; // Ensure this is at the top of the file for client-side rendering

// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import FormHeader from "@/components/backoffice/FormHeader";
// import SubmitButton from "@/components/Forminputs/SubmitButton";
// import { makePutRequest } from "@/lib/apiRequest"; // PUT request function
// import { useRouter } from "next/navigation";
// import ToggleInput from "@/components/Forminputs/ToggleInput"; // Example for toggle input, if needed

// export default function EditStoreSettings({ storeId }) {
//   const [storeData, setStoreData] = useState(null); // Store data state
//   const [loading, setLoading] = useState(false);
//   const [imagePreview, setImagePreview] = useState(null); // State for image preview
//   const { register, reset, handleSubmit, formState: { errors } } = useForm();
//   const router = useRouter();

//   // Fetch store data when the page loads
//   useEffect(() => {
//     async function fetchStoreData() {
//       setLoading(true);
//       try {
//         const response = await fetch(`/api/stores/${storeId}`);
//         const data = await response.json();
//         setStoreData(data); // Set fetched data to state
//         reset(data); // Reset form with fetched data
//         setImagePreview(data.avatarUrl || "/images/default-avatar.png"); // Set image preview
//       } catch (error) {
//         console.error("Error fetching store data:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchStoreData();
//   }, [storeId, reset]);

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       await makePutRequest(`/api/stores/${storeId}`, data); // Send PUT request to update store
//       router.push("/dashboard/stores"); // Redirect to stores list
//     } catch (error) {
//       console.error("Error updating store data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   if (loading || !storeData) {
//     return <div>Loading...</div>; // Show loading state until data is fetched
//   }

//   return (
//     <div>
//       <FormHeader title="Edit Store Settings" />

//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
//       >
//         <div className="my-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
//           <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
//             <div className="shrink-0 mr-auto sm:py-3">
//               <p className="font-medium">Account Details</p>
//               <p className="text-sm text-gray-600">Edit your account details</p>
//             </div>
//             <button type="button" className="mr-2 hidden rounded-lg border-2 px-4 py-2 font-medium text-gray-500 sm:inline focus:outline-none focus:ring hover:bg-gray-200">Cancel</button>
//             <button type="submit" className="hidden rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700">Save</button>
//           </div>

//           <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
//             <label className="shrink-0 w-32 font-medium" htmlFor="storeName">Store Name</label>
//             <input
//               id="storeName"
//               {...register("storeName", { required: "Store name is required" })}
//               placeholder="Store Name"
//               className="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 sm:mr-4 sm:mb-0 focus:ring-1"
//             />
//             {errors.storeName && <span className="text-red-500 text-sm">{errors.storeName.message}</span>}
//           </div>

//           <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
//             <label className="shrink-0 w-32 font-medium" htmlFor="email">Email</label>
//             <input
//               id="email"
//               {...register("email", { required: "Email is required" })}
//               placeholder="your.email@domain.com"
//               className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
//             />
//             {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
//           </div>

//           <div className="flex flex-col gap-4 py-4 lg:flex-row">
//             <div className="shrink-0 w-32 sm:py-4">
//               <p className="mb-auto font-medium">Avatar</p>
//               <p className="text-sm text-gray-600">Change your avatar</p>
//             </div>
//             <div className="flex h-56 w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-300 p-5 text-center">
//               <img src={imagePreview} alt="Avatar" className="h-16 w-16 rounded-full" />
//               <p className="text-sm text-gray-600">Drop your desired image file here to start the upload</p>
//               <input
//                 type="file"
//                 onChange={handleImageChange}
//                 className="max-w-full rounded-lg px-2 font-medium text-blue-600 outline-none ring-blue-600 focus:ring-1"
//               />
//             </div>
//           </div>

//           <div className="flex justify-end py-4 sm:hidden">
//             <button type="button" className="mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200">Cancel</button>
//             <button type="submit" className="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700">Save</button>
//           </div>
//         </div>

//         <div className="text-center mt-4">
//           <SubmitButton
//             isLoading={loading}
//             buttonTitle="Save Changes"
//             loadingButtonTitle="Saving..."
//           />
//         </div>
//       </form>
//     </div>
//   );
// }

// "use client"; // Ensure this is at the top of the file for client-side rendering

// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import FormHeader from "@/components/backoffice/FormHeader";
// import SubmitButton from "@/components/Forminputs/SubmitButton";
// import { makePutRequest } from "@/lib/apiRequest"; // PUT request function
// import { useRouter } from "next/navigation";
// import ToggleInput from "@/components/Forminputs/ToggleInput"; // Example for toggle input, if needed

// export default function EditStoreSettings({ storeId }) {
//   const [storeData, setStoreData] = useState(null); // Store data state
//   const [loading, setLoading] = useState(false);
//   const [imagePreview, setImagePreview] = useState(null); // State for image preview
//   const { register, reset, handleSubmit, formState: { errors } } = useForm();
//   const router = useRouter();

//   // Fetch store data when the page loads
//   useEffect(() => {
//     async function fetchStoreData() {
//       setLoading(true);
//       try {
//         const response = await fetch(`/api/stores/${storeId}`);
//         const data = await response.json();
//         setStoreData(data); // Set fetched data to state
//         reset(data); // Reset form with fetched data
//         setImagePreview(data.avatarUrl || "/images/default-avatar.png"); // Set image preview
//       } catch (error) {
//         console.error("Error fetching store data:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchStoreData();
//   }, [storeId, reset]);

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       await makePutRequest(`/api/stores/${storeId}`, data); // Send PUT request to update store
//       router.push("/dashboard/stores"); // Redirect to stores list
//     } catch (error) {
//       console.error("Error updating store data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   if (loading || !storeData) {
//     return <div className="flex justify-center items-center h-screen">Loading...</div>; // Show loading state until data is fetched
//   }

//   return (
//     <div>
//       <FormHeader title="Edit Store Settings" />

//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-6"
//       >
//         <div className="my-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
//           <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
//             <div className="shrink-0 mr-auto sm:py-3">
//               <p className="font-medium text-lg">Account Details</p>
//               <p className="text-sm text-gray-600">Edit your account details</p>
//             </div>
//             <button type="button" className="mr-2 hidden rounded-lg border-2 px-4 py-2 font-medium text-gray-500 sm:inline focus:outline-none focus:ring hover:bg-gray-200">Cancel</button>
//             <button type="submit" className="hidden rounded-lg border-2 border-transparent bg-purple-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-purple-700">Save</button>
//           </div>

//           <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
//             <label className="shrink-0 w-32 font-medium" htmlFor="storeName">Store Name</label>
//             <input
//               id="storeName"
//               {...register("storeName", { required: "Store name is required" })}
//               placeholder="Store Name"
//               className="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-purple-600 sm:mr-4 sm:mb-0 focus:ring-1"
//             />
//             {errors.storeName && <span className="text-red-500 text-sm">{errors.storeName.message}</span>}
//           </div>

//           <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
//             <label className="shrink-0 w-32 font-medium" htmlFor="email">Email</label>
//             <input
//               id="email"
//               {...register("email", { required: "Email is required" })}
//               placeholder="your.email@domain.com"
//               className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-purple-600 focus:ring-1"
//             />
//             {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
//           </div>

//           <div className="flex flex-col gap-4 py-4 lg:flex-row">
//             <div className="shrink-0 w-32 sm:py-4">
//               <p className="mb-auto font-medium">Avatar</p>
//               <p className="text-sm text-gray-600">Change your avatar</p>
//             </div>
//             <div className="flex h-56 w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-300 p-5 text-center">
//               <img src={imagePreview} alt="Avatar" className="h-16 w-16 rounded-full object-cover" />
//               <p className="text-sm text-gray-600">Drop your desired image file here to start the upload</p>
//               <input
//                 type="file"
//                 onChange={handleImageChange}
//                 className="max-w-full rounded-lg px-2 font-medium text-purple-600 outline-none ring-purple-600 focus:ring-1"
//               />
//             </div>
//           </div>

//           <div className="flex justify-end py-4 sm:hidden">
//             <button type="button" className="mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200">Cancel</button>
//             <button type="submit" className="rounded-lg border-2 border-transparent bg-purple-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-purple-700">Save</button>
//           </div>
//         </div>

//         <div className="text-center mt-4">
//           <SubmitButton
//             isLoading={loading}
//             buttonTitle="Save Changes"
//             loadingButtonTitle="Saving..."
//           />
//         </div>
//       </form>
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import FormHeader from "@/components/backoffice/FormHeader";
import SubmitButton from "@/components/Forminputs/SubmitButton";
import { makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import ToggleInput from "@/components/Forminputs/ToggleInput";

export default function EditStoreSettings({ storeId }) {
  const [storeData, setStoreData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  // جلب بيانات المتجر عند تحميل الصفحة
  useEffect(() => {
    async function fetchStoreData() {
      setLoading(true);
      try {
        const response = await fetch(`/api/stores/${storeId}`);
        const data = await response.json();
        setStoreData(data);
        reset(data);
        setImagePreview(data.avatarUrl || "/images/default-avatar.png");
      } catch (error) {
        console.error("حدث خطأ أثناء جلب بيانات المتجر:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStoreData();
  }, [storeId, reset]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await makePutRequest(`/api/stores/${storeId}`, data);
      router.push("/dashboard/stores");
    } catch (error) {
      console.error("حدث خطأ أثناء تحديث بيانات المتجر:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (loading || !storeData) {
    return (
      <div className="flex justify-center items-center h-screen">
        جاري التحميل...
      </div>
    );
  }

  return (
    <div dir="rtl">
      <FormHeader title="تعديل إعدادات المتجر" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-6"
      >
        <div className="my-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
          <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
            <div className="shrink-0 ml-auto sm:py-3">
              <p className="font-medium text-lg">تفاصيل الحساب</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                قم بتعديل تفاصيل حسابك
              </p>
            </div>
            <button
              type="button"
              className="ml-2 hidden rounded-lg border-2 px-4 py-2 font-medium text-gray-500 sm:inline focus:outline-none focus:ring hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="hidden rounded-lg border-2 border-transparent bg-purple-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-purple-700"
            >
              حفظ
            </button>
          </div>

          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <label
              className="shrink-0 w-32 font-medium"
              htmlFor="storeName"
            >
              اسم المتجر
            </label>
            <input
              id="storeName"
              {...register("storeName", { required: "اسم المتجر مطلوب" })}
              placeholder="اسم المتجر"
              className="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-purple-600 sm:ml-4 sm:mb-0 focus:ring-1"
            />
            {errors.storeName && (
              <span className="text-red-500 text-sm">
                {errors.storeName.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <label className="shrink-0 w-32 font-medium" htmlFor="email">
              البريد الإلكتروني
            </label>
            <input
              id="email"
              {...register("email", { required: "البريد الإلكتروني مطلوب" })}
              placeholder="بريدك الإلكتروني@نطاق.com"
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-purple-600 focus:ring-1"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-4 py-4 lg:flex-row">
            <div className="shrink-0 w-32 sm:py-4">
              <p className="mb-auto font-medium">الصورة الرمزية</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                تغيير صورتك الرمزية
              </p>
            </div>
            <div className="flex h-56 w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-300 p-5 text-center">
              <img
                src={imagePreview}
                alt="الصورة الرمزية"
                className="h-16 w-16 rounded-full object-cover"
              />
              <p className="text-sm text-gray-600 dark:text-gray-300">
                قم بإسقاط الملف المرغوب هنا لبدء التحميل
              </p>
              <input
                type="file"
                onChange={handleImageChange}
                className="max-w-full rounded-lg px-2 font-medium text-purple-600 outline-none ring-purple-600 focus:ring-1"
              />
            </div>
          </div>

          <div className="flex justify-end py-4 sm:hidden">
            <button
              type="button"
              className="ml-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="rounded-lg border-2 border-transparent bg-purple-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-purple-700"
            >
              حفظ
            </button>
          </div>
        </div>

        <div className="text-center mt-4">
          <SubmitButton
            isLoading={loading}
            buttonTitle="حفظ التغييرات"
            loadingButtonTitle="جاري الحفظ..."
          />
        </div>
      </form>
    </div>
  );
}
