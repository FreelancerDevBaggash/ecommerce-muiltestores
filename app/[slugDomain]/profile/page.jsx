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

// "use client";
// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import FormHeader from "../../../components/backoffice/FormHeader";
// import SubmitButton from "../../../components/Forminputs/SubmitButton";
// import { makePutRequest } from "../../../lib/apiRequest";
// import { useRouter } from "next/navigation";
// import TextInput from "../../../components/Forminputs/TextInput";

// export default function EditStoreSettings({ storeId }) {
//   const [storeData, setStoreData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [imagePreview, setImagePreview] = useState(null);
//   const {
//     register,
//     reset,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const router = useRouter();

//   // جلب بيانات المتجر عند تحميل الصفحة
//   useEffect(() => {
//     async function fetchStoreData() {
//       setLoading(true);
//       try {
//         const response = await fetch(`/api/stores/${storeId}`);
//         const data = await response.json();
//         setStoreData(data);
//         reset(data);
//         setImagePreview(data.avatarUrl || "/images/default-avatar.png");
//       } catch (error) {
//         console.error("حدث خطأ أثناء جلب بيانات المتجر:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchStoreData();
//   }, [storeId, reset]);

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       await makePutRequest(`/api/stores/${storeId}`, data);
//       router.push("/dashboard/stores");
//     } catch (error) {
//       console.error("حدث خطأ أثناء تحديث بيانات المتجر:", error);
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
//     return (
//       <div className="flex justify-center items-center h-screen">
//         جاري التحميل...
//       </div>
//     );
//   }

//   return (
//     <div dir="rtl">
//       <FormHeader title="تعديل إعدادات المتجر" />

//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-6"
//       >
//         <div className="my-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
//           <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
//             <div className="shrink-0 ml-auto sm:py-3">
//               <p className="font-medium text-lg">تفاصيل الحساب</p>
//               <p className="text-sm text-gray-600 dark:text-gray-300">
//                 قم بتعديل تفاصيل حسابك
//               </p>
//             </div>
//             <button
//               type="button"
//               className="ml-2 hidden rounded-lg border-2 px-4 py-2 font-medium text-gray-500 sm:inline focus:outline-none focus:ring hover:bg-gray-200 dark:hover:bg-gray-700"
//             >
//               إلغاء
//             </button>
//             <button
//               type="submit"
//               className="hidden rounded-lg border-2 border-transparent bg-purple-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-purple-700"
//             >
//               حفظ
//             </button>
//           </div>

//           <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
//             <label
//               className="shrink-0 w-32 font-medium"
//               htmlFor="storeName"
//             >
// الاسم 
//             </label>
//             <input
//               id="storeName"
//               {...register("storeName", { required: "اسم المتجر مطلوب" })}
//               placeholder="اسم المتجر"
//               className="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-purple-600 sm:ml-4 sm:mb-0 focus:ring-1"
//             />
//             {errors.storeName && (
//               <span className="text-red-500 text-sm">
//                 {errors.storeName.message}
//               </span>
//             )}
//           </div>
//           <TextInput 
//           lable="الاسم"
//           name="businessName"
//           register={register}
//           errors={errors}
//           className="w-full" 
//         />


//           <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
//             <label className="shrink-0 w-32 font-medium" htmlFor="email">
//               البريد الإلكتروني
//             </label>
//             <input
//               id="email"
//               {...register("email", { required: "البريد الإلكتروني مطلوب" })}
//               placeholder="بريدك الإلكتروني@نطاق.com"
//               className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-purple-600 focus:ring-1"
//             />
//             {errors.email && (
//               <span className="text-red-500 text-sm">
//                 {errors.email.message}
//               </span>
//             )}
//           </div>
//           <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
//             <label className="shrink-0 w-32 font-medium" htmlFor="email">
//             رقم الهاتف
//             </label>
//             <input
//               id="phone"
//               {...register("phone", { required: " رقم الهاتف" })}
//               placeholder=" رقم الهاتف@نطاق.com"
//               className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-purple-600 focus:ring-1"
//             />
//             {errors.phone && (
//               <span className="text-red-500 text-sm">
//                 {errors.phone.message}
//               </span>
//             )}
//           </div>
//           <div className="flex flex-col gap-4 py-4 lg:flex-row">
//             <div className="shrink-0 w-32 sm:py-4">
//               <p className="mb-auto font-medium">الصورة الرمزية</p>
//               <p className="text-sm text-gray-600 dark:text-gray-300">
//                 تغيير صورتك الرمزية
//               </p>
//             </div>
//             <div className="flex h-56 w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-300 p-5 text-center">
//               <img
//                 src={imagePreview}
//                 alt="الصورة الرمزية"
//                 className="h-16 w-16 rounded-full object-cover"
//               />
//               <p className="text-sm text-gray-600 dark:text-gray-300">
//                 قم بإسقاط الملف المرغوب هنا لبدء التحميل
//               </p>
//               <input
//                 type="file"
//                 onChange={handleImageChange}
//                 className="max-w-full rounded-lg px-2 font-medium text-purple-600 outline-none ring-purple-600 focus:ring-1"
//               />
//             </div>
//           </div>

//           <div className="flex justify-end py-4 sm:hidden">
//             <button
//               type="button"
//               className="ml-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200 dark:hover:bg-gray-700"
//             >
//               إلغاء
//             </button>
//             <button
//               type="submit"
//               className="rounded-lg border-2 border-transparent bg-purple-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-purple-700"
//             >
//               حفظ
//             </button>
//           </div>
//         </div>

//         <div className="text-center mt-4">
//           <SubmitButton
//             isLoading={loading}
//             buttonTitle="حفظ التغييرات"
//             loadingButtonTitle="جاري الحفظ..."
//           />
//         </div>
//       </form>
//     </div>
//   );
// }
// "use client";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import TextInput from "@/components/Forminputs/TextInput";
// import TextAreainput from "@/components/Forminputs/TextAreainput";
// import SubmitButton from "@/components/Forminputs/SubmitButton";
// import ToggleInput from "@/components/Forminputs/ToggleInput";
// import ArrayItemsInput from "@/components/Forminputs/ArrayItemsInput";
// import ImageInput from "@/components/Forminputs/ImageInput";
// import { makePutRequest } from "@/lib/apiRequest";
// import { useRouter } from "next/navigation";

// export default function CustomerForm({ user }) {
//   const [imageUrl, setImageUrl] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { register, reset, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//       ...user,
//     },
//   });
//   const router = useRouter();

//   function redirect() {
//     router.push('/dashboard/customers');
//   }

//   async function onSubmit(data) {
//     data.userId = user.id;
//     data.profileImage = imageUrl;
//     console.log(data);
//     makePutRequest(
//       setLoading,
//       `api/customers/${user.id}`,
//       data,
//       'Customer Profile',
//       redirect,
//       reset
//     );
//   }

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="max-w-3xl mx-auto p-8 bg-white border border-gray-200 rounded-3xl shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl"
//     >
//       {/* عنوان القسم الرئيسي */}
//       <h2 className="text-2xl font-extrabold mb-6 text-gray-800 dark:text-lime-400 border-b pb-3">
//         Personal Details
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-b border-gray-700 pb-10">
//         <TextInput
//           label="Full Name"
//           lable="Full Name"  // إذا كنت تفضل الكلمة القديمة "lable" فقم بالاحتفاظ بها
//           name="name"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         <TextInput
//           label="Username"
//           lable="Username"
//           name="username"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         <TextInput
//           label="Date of Birth"
//           lable="Date of Birth"
//           name="dateOfBirth"
//           type="date"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         <TextInput
//           label="First Name"
//           lable="First Name"
//           name="firstName"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         <TextInput
//           label="Last Name"
//           lable="Last Name"
//           name="lastName"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         <TextInput
//           label="Email Address"
//           lable="Email Address"
//           name="email"
//           type="email"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         <TextInput
//           label="Phone Number"
//           lable="Phone Number"
//           name="phone"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         <div className="sm:col-span-2">
//           <ImageInput
//             imageUrl={imageUrl}
//             setImageUrl={setImageUrl}
//             endpoint="customerProfileUploader"
//             label="Customer Profile"
//           />
//         </div>
//       </div>

//       {/* قسم تفاصيل الشحن */}
//       <h2 className="text-2xl font-extrabold mt-10 mb-6 text-gray-800 dark:text-lime-400 border-b pb-3">
//         Shipping Details
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         <TextInput
//           label="Street Address"
//           lable="Street Address"
//           name="streetAddress"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         <TextInput
//           label="City"
//           lable="City"
//           name="city"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         <TextInput
//           label="Country"
//           lable="Country"
//           name="country"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         <TextInput
//           label="District"
//           lable="District"
//           name="district"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />
//       </div>

//       <div className="mt-10">
//         <SubmitButton
//           isLoading={loading}
//           buttonTitle="Update Customer"
//           loadingButtonTitle="Updating, please wait..."
//         />
//       </div>
//     </form>
//   );
// }
// "use client";

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import TextInput from "@/components/Forminputs/TextInput";
// import SubmitButton from "@/components/Forminputs/SubmitButton";
// // import ImageInput from "../Forminputs/ImageInput";
// import { makePutRequest } from "@/lib/apiRequest";
// import { useRouter } from "next/navigation";
// import ImageInput from "@/components/Forminputs/ImageInput";

// export default function AccountSettings({ user }) {
  // const [imageUrl, setImageUrl] = useState("");
  // const [loading, setLoading] = useState(false);
  // const {
  //   register,
  //   reset,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     ...user,
  //   },
  // });
  // const router = useRouter();

  // function redirect() {
  //   router.push("/dashboard/customers");
  // }

  // async function onSubmit(data) {
  //   // مثال: تعديل كلمة المرور وبيانات الحساب
  //   data.userId = user.id;
  //   data.profileImage = imageUrl;
  //   console.log("Form Data:", data);

  //   makePutRequest(
  //     setLoading,
  //     `api/customers/${user.id}`,
  //     data,
  //     "Customer Profile",
  //     redirect,
  //     reset
  //   );
  // }

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="mx-auto p-4 md:p-6 bg-white border border-gray-200 rounded-lg shadow-sm 
//                  dark:bg-gray-800 dark:border-gray-700"
//     >
//       {/* شبكة من عمودين */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 


//         {/* عمود إعداد الحساب */}
//         <div className="flex flex-col bg-white dark:bg-gray-800 border border-gray-200 
//                         dark:border-gray-700 rounded-lg p-4 md:p-6 shadow-sm">
//           <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-lime-400">
//             إعداد الحساب
//           </h2>

//           {/* أمثلة لحقول الإعدادات الشخصية */}
//           <TextInput
//             lable="اسم الاول "
//             name="firstName"
//              type="Text"
//             register={register}
//             errors={errors}
//             className="w-full"
//           />
//           <TextInput
//             lable="اسم الاخير "
//             name="lastName"
//             register={register}
//             errors={errors}
//             className="w-full"
//           />

//           <TextInput
//             lable="البريد الإلكتروني"
//             name="email"
//             type="email"
//             register={register}
//             errors={errors}
//             className="w-full"
//           />

//           <TextInput
//             lable="رقم الهاتف"
//             name="phone"
//             register={register}
//             errors={errors}
//             className="w-full"
//           />

//           {/* مثال على رفع صورة للملف الشخصي */}
//           <div className="mt-3">
//             <ImageInput
//               imageUrl={imageUrl}
//               setImageUrl={setImageUrl}
//               endpoint="customerProfileUploader"
//               lable="صورة الحساب"
//             />
//           </div>

//           <div className="mt-4 flex items-center gap-4">
//             <SubmitButton
//               isLoading={loading}
//               buttonTitle="حفظ"
//               loadingButtonTitle="جارٍ التحديث..."
//             />
            
//             {/* زر حذف الحساب (اختياري) */}
//             <button
//               type="button"
//               className="px-4 py-2 text-red-600 border border-red-600 
//                          rounded-md hover:bg-red-600 hover:text-white transition-colors"
//               onClick={() => console.log("Delete Account action")}
//             >
//               حذف الحساب
//             </button>
//           </div>
//         </div>


//         <div className="flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
//                         rounded-lg p-4 md:p-6 shadow-sm">
//           <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-lime-400">
//             تغيير كلمة المرور
//           </h2>

//           <TextInput
//             lable="كلمة السر الحالية"
//             name="oldPassword"
//             type="password"
//             register={register}
//             errors={errors}
//             className="w-auto"
//           />

//           <TextInput
//             lable="كلمة السر الجديدة"
//             name="newPassword"
//             type="password"
//             register={register}
//             errors={errors}
//             className="w-full"
//           />

//           <TextInput
//             lable="تأكيد كلمة السر الجديدة"
//             name="confirmNewPassword"
//             type="password"
//             register={register}
//             errors={errors}
//             className="w-full"
//           />

//           <div className="mt-4">
//             <SubmitButton
//               isLoading={loading}
//               buttonTitle="حفظ"
//               loadingButtonTitle="جارٍ التحديث..."
//             />
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// }
// "use client";

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import TextInput from "@/components/Forminputs/TextInput";
// import SubmitButton from "@/components/Forminputs/SubmitButton";
// import ImageInput from "@/components/Forminputs/ImageInput";
// import { makePutRequest } from "@/lib/apiRequest";
// import { useRouter } from "next/navigation";

// export default function AccountSettings({ user }) {
  // const router = useRouter();

  // // صورة الملف الشخصي (إن وُجدت)
  // const [imageUrl, setImageUrl] = useState(user?.profileImage || "");
  // const [loading, setLoading] = useState(false);

  // // نموذج تحديث الحساب مع defaultValues من user
  // const {
  //   register,
  //   reset,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     ...user,
  //   },
  // });

  // function redirect() {
  //   router.push("/dashboard/customers");
  // }

  // async function onSubmit(data) {
  //   data.userId = user.id;
  //   data.profileImage = imageUrl;
  //   console.log("Form Data:", data);
  //   await makePutRequest(
  //     setLoading,
  //     `api/customers/${user.id}`,
  //     data,
  //     "Customer Profile",
  //     redirect,
  //     reset
  //   );
  // }

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="max-w-5xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 space-y-10"
//     >
//       <div className="text-center">
//         <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
//           إعدادات الحساب
//         </h1>
//         <p className="text-gray-600 dark:text-gray-300 mt-2">
//           قم بتحديث معلومات الحساب أو تغيير كلمة المرور الخاصة بك
//         </p>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-2 gap-10">
//         {/* قسم تحديث معلومات الحساب */}
//         <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
//           <h2 className="text-xl font-semibold text-gray-800 dark:text-lime-400 border-b pb-2 mb-4">
//             معلومات الحساب
//           </h2>

//           <div className="space-y-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <TextInput
//                 lable="الاسم الأول"
//                 name="firstName"
//                 type="text"
//                 register={register}
//                 errors={errors}
//                 validation={{ required: "الاسم الأول مطلوب" }}
//               />
//               <TextInput
//                 lable="اسم العائلة"
//                 name="lastName"
//                 type="text"
//                 register={register}
//                 errors={errors}
//                 validation={{ required: "اسم العائلة مطلوب" }}
//               />
//             </div>

//             <TextInput
//               lable="البريد الإلكتروني"
//               name="email"
//               type="email"
//               register={register}
//               errors={errors}
//               validation={{
//                 required: "البريد الإلكتروني مطلوب",
//                 pattern: {
//                   value: /^\S+@\S+$/i,
//                   message: "بريد إلكتروني غير صالح",
//                 },
//               }}
//             />
//             <TextInput
//               lable="رقم الهاتف"
//               name="phone"
//               type="text"
//               register={register}
//               errors={errors}
//               validation={{
//                 pattern: {
//                   value: /^[0-9]{10}$/,
//                   message: "رقم هاتف غير صالح",
//                 },
//               }}
//             />

//             <div className="mt-4">
//               <ImageInput
//                 imageUrl={imageUrl}
//                 setImageUrl={setImageUrl}
//                 endpoint="customerProfileUploader"
//                 lable="صورة الحساب"
//               />
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 mt-6">
//               <SubmitButton
//                 isLoading={loading}
//                 buttonTitle="حفظ التعديلات"
//                 loadingButtonTitle="جارٍ التحديث..."
//                 className="w-full sm:w-auto"
//               />
//               <button
//                 type="button"
//                 className="px-5 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-600 hover:text-white transition-colors w-full sm:w-auto"
//                 onClick={() => console.log("حذف الحساب")}
//               >
//                 حذف الحساب
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* قسم تغيير كلمة المرور */}
//         <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
//           <h2 className="text-xl font-semibold text-gray-800 dark:text-lime-400 border-b pb-2 mb-4">
//             تغيير كلمة المرور
//           </h2>
//           <div className="space-y-4">
//             <TextInput
//               lable="كلمة المرور الحالية"
//               name="oldPassword"
//               type="password"
//               register={register}
//               errors={errors}
//               validation={{ required: "كلمة المرور الحالية مطلوبة" }}
//             />
//             <TextInput
//               lable="كلمة المرور الجديدة"
//               name="newPassword"
//               type="password"
//               register={register}
//               errors={errors}
//               validation={{
//                 required: "كلمة المرور الجديدة مطلوبة",
//                 minLength: {
//                   value: 6,
//                   message: "يجب أن تكون كلمة المرور 6 أحرف على الأقل",
//                 },
//               }}
//             />
//             <TextInput
//               lable="تأكيد كلمة المرور الجديدة"
//               name="confirmNewPassword"
//               type="password"
//               register={register}
//               errors={errors}
//               validation={{
//                 required: "التأكيد مطلوب",
//                 validate: (value) =>
//                   value === watch("newPassword") || "كلمات المرور غير متطابقة",
//               }}
//             />

//             <div className="mt-6">
//               <SubmitButton
//                 isLoading={loading}
//                 buttonTitle="تغيير كلمة المرور"
//                 loadingButtonTitle="جارٍ التحديث..."
//                 className="w-full"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// }
// "use client";

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import TextInput from "@/components/Forminputs/TextInput";
// import SubmitButton from "@/components/Forminputs/SubmitButton";
// import ImageInput from "@/components/Forminputs/ImageInput";
// import { makePutRequest } from "@/lib/apiRequest";
// import { useRouter } from "next/navigation";

// export default function AccountSettings({ user }) {
//   const router = useRouter();
//   const [imageUrl, setImageUrl] = useState(user?.profileImage || "");
//   const [loading, setLoading] = useState(false);

//   const {
//     register,
//     reset,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ defaultValues: { ...user } });

//   function redirect() {
//     router.push("/dashboard/customers");
//   }

//   async function onSubmit(data) {
//     data.userId = user.id;
//     data.profileImage = imageUrl;
//     console.log("Form Data:", data);
//     await makePutRequest(
//       setLoading,
//       `api/customers/${user.id}`,
//       data,
//       "Customer Profile",
//       redirect,
//       reset
//     );
//   }

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="max-w-8xl  mx-auto p-6 md:p-10 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-lg space-y-8 border border-gray-200 dark:border-gray-700"
//     >
//        <div className="container">
//       {/* العنوان العام */}
//       <div className="text-center">
//         <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
//           إعدادات الحساب
//         </h1>
//         <p className="text-gray-600 dark:text-gray-300 mt-2">
//           قم بتحديث بيانات حسابك وتغيير كلمة المرور
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* بطاقة إعدادات الحساب */}
//         <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md">
//           <h2 className="text-xl font-semibold text-gray-800 dark:text-lime-400 border-b pb-3 mb-4 flex items-center gap-2">
//             <span>🛠️</span>
//             <span>معلومات الحساب</span>
//           </h2>

//           <div className=" grid grid-cols-3 md:grid-cols-2 gap-6">
//             {/* عمود الصورة */}
//             <div className="flex flex-col items-center justify-center">
//               <div className="relative group">
//                 <ImageInput
//                   imageUrl={imageUrl}
//                   setImageUrl={setImageUrl}
//                   endpoint="customerProfileUploader"
//                   lable={
//                     <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                       صورة الملف الشخصي <span className="text-gray-400 text-xs">(اختياري)</span>
//                     </span>
//                   }
//                   className="w-auto h-auto rounded-full border-2 border-white dark:border-gray-800 shadow-lg hover:scale-105 transform transition-all"
//                 />
//               </div>
//             </div>

//             {/* عمود المعلومات */}
//             <div className="space-y-6">
//               <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
//                 <TextInput
//                   lable="الاسم الأول"
//                   name="firstName"
//                   type="text"
//                   register={register}
//                   errors={errors}
//                   placeholder="أدخل الاسم الأول"
//                   icon="👤"
//                 />
//                 <TextInput
//                   lable="اسم العائلة"
//                   name="lastName"
//                   type="text"
//                   register={register}
//                   errors={errors}
//                   placeholder="أدخل اسم العائلة"
//                   icon="👥"
//                 />
//               </div>

//               <TextInput
//                 lable={
//                   <>
//                     البريد الإلكتروني <span className="text-red-500">*</span>
//                   </>
//                 }
//                 name="email"
//                 type="email"
//                 register={register}
//                 errors={errors}
//                 placeholder="example@domain.com"
//                 icon="✉️"
//                 validation={{ required: "هذا الحقل مطلوب" }}
//               />

//               <TextInput
//                 lable="رقم الهاتف"
//                 name="phone"
//                 type="text"
//                 register={register}
//                 errors={errors}
//                 placeholder="+966 5X XXX XXXX"
//                 icon="📱"
//                 dir="ltr"
//                 validation={{
//                   pattern: {
//                     value: /^[0-9]{10}$/,
//                     message: "صيغة رقم الهاتف غير صحيحة",
//                   },
//                 }}
//               />
//             </div>
//           </div>
//         </div>

//         {/* بطاقة تغيير كلمة المرور */}
//         <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md">
//           <h2 className="text-xl font-semibold text-gray-800 dark:text-lime-400 border-b pb-3 mb-4 flex items-center gap-2">
//             <span>🔒</span>
//             <span>إدارة كلمة المرور</span>
//           </h2>

//           <div className="grid grid-cols-1 gap-6">
//             <TextInput
//               lable="كلمة المرور الحالية"
//               name="oldPassword"
//               type="password"
//               register={register}
//               errors={errors}
//               placeholder="••••••••"
//               icon="🔐"
//               dir="ltr"
//               validation={{ required: "هذه الخانة مطلوبة" }}
//             />

//             <TextInput
//               lable="كلمة المرور الجديدة"
//               name="newPassword"
//               type="password"
//               register={register}
//               errors={errors}
//               placeholder="••••••••"
//               icon="🔄"
//               dir="ltr"
//               validation={{
//                 required: "هذه الخانة مطلوبة",
//                 minLength: {
//                   value: 6,
//                   message: "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل",
//                 },
//               }}
//             />

//             <TextInput
//               lable="تأكيد كلمة المرور"
//               name="confirmNewPassword"
//               type="password"
//               register={register}
//               errors={errors}
//               placeholder="••••••••"
//               icon="✅"
//               dir="ltr"
//               validation={{
//                 required: "هذه الخانة مطلوبة",
//                 validate: (value) =>
//                   value === watch("newPassword") || "كلمات المرور غير متطابقة",
//               }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* شريط الأزرار في أسفل الصفحة */}
//       <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-gray-50 dark:bg-gray-900/20 border-t border-gray-200 dark:border-gray-700 p-6 md:p-8 rounded-b-xl">
//         <button
//           type="button"
//           onClick={() => router.back()}
//           className="px-6 py-2.5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
//         >
//           إلغاء التغييرات
//         </button>

//         <div className="flex gap-4">
//           <SubmitButton
//             isLoading={loading}
//             buttonTitle="حفظ التعديلات"
//             loadingButtonTitle="جارٍ الحفظ..."
//             className="px-8 py-2.5 bg-lime-600 hover:bg-lime-700 text-white rounded-lg shadow-md transition-all"
//           />

//           <button
//             type="button"
//             className="px-6 py-2.5 text-red-600 border border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
//             onClick={() => console.log("إجراء حذف الحساب")}
//           >
//             حذف الحساب
//           </button>
//         </div>
//       </div>
//       </div>
//     </form>
//   );
// }
// "use client";

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import TextInput from "@/components/Forminputs/TextInput";
// import SubmitButton from "@/components/Forminputs/SubmitButton";
// import ImageInput from "@/components/Forminputs/ImageInput";
// import { makePutRequest } from "@/lib/apiRequest";
// import { useRouter } from "next/navigation";

// export default function AccountSettings({ user }) {
//   const router = useRouter();
//   const [imageUrl, setImageUrl] = useState(user?.profileImage || "");
//   const [loading, setLoading] = useState(false);

//   const {
//     register,
//     reset,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm({ defaultValues: { ...user } });

//   const redirect = () => router.push("/dashboard/customers");

//   const onSubmit = async (data) => {
//     const payload = {
//       ...data,
//       profileImage: imageUrl,
//     };

//     if (data.newPassword) {
//       if (data.newPassword !== data.confirmNewPassword) {
//         alert("كلمة المرور الجديدة غير متطابقة!");
//         return;
//       }
//       payload.password = data.newPassword;
//     }

//     await makePutRequest(
//       setLoading,
//       `api/customers/${user.id}`,
//       payload,
//       "Customer Profile",
//       redirect,
//       reset
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-10">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
//             إدارة الملف الشخصي
//           </h1>
//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             تحديث المعلومات الشخصية وإعدادات الأمان للحساب
//           </p>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Left Column - Profile Image */}
//             <div className="lg:col-span-1">
//               <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 sticky top-6">
//                 <div className="flex flex-col items-center">
//                   <ImageInput
//                     imageUrl={imageUrl}
//                     setImageUrl={setImageUrl}
//                     endpoint="customerProfileUploader"
//                     className="w-auto h-auto rounded-lg border-4 border-white dark:border-gray-700 shadow-xl mb-4 object-cover"
//                   />
//                   <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
//                     {user?.firstName} {user?.lastName}
//                   </h3>
//                   <p className="text-gray-600 dark:text-gray-300 text-sm">
//                     {user?.email}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Forms */}
//             <div className="lg:col-span-2 space-y-6">
//               {/* Personal Info Card */}
//               <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
//                 <div className="p-6 border-b border-gray-100 dark:border-gray-700">
//                   <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
//                     <span className="text-lime-500">📝</span>
//                     المعلومات الشخصية
//                   </h2>
//                 </div>
//                 <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-2">
//                   <TextInput
//                     lable="الاسم الأول"
//                     name="firstName"
//                     register={register}
//                     errors={errors}
//                     placeholder="أدخل الاسم الأول"
//                     icon="user"
//                   />
//                   <TextInput
//                     lable="اسم العائلة"
//                     name="lastName"
//                     register={register}
//                     errors={errors}
//                     placeholder="أدخل اسم العائلة"
//                     icon="users"
//                   />
//                   <TextInput
//                     lable="البريد الإلكتروني"
//                     name="email"
//                     type="email"
//                     register={register}
//                     errors={errors}
//                     placeholder="example@domain.com"
//                     icon="mail"
//                     validation={{ required: "هذا الحقل مطلوب" }}
//                     className="md:col-span-2"
//                   />
//                   <TextInput
//                     lable="رقم الهاتف"
//                     name="phone"
//                     register={register}
//                     errors={errors}
//                     placeholder="+967 7XX XXX XXX"
//                     icon="phone"
//                     dir="ltr"
//                     validation={{
//                       pattern: {
//                         value: /^\+?[0-9]{10,15}$/,
//                         message: "رقم هاتف غير صالح",
//                       },
//                     }}
//                   />
//                 </div>
//               </div>

//               {/* Password Card */}
//               <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
//                 <div className="p-6 border-b border-gray-100 dark:border-gray-700">
//                   <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
//                     <span className="text-blue-500">🔒</span>
//                     إعدادات الأمان
//                   </h2>
//                 </div>
//                 <div className="p-6 space-y-6">
//                   <TextInput
//                     lable="كلمة المرور الحالية"
//                     name="oldPassword"
//                     type="password"
//                     register={register}
//                     errors={errors}
//                     placeholder="أدخل كلمة المرور الحالية"
//                     icon="lock"
//                   />
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <TextInput
//                       lable="كلمة المرور الجديدة"
//                       name="newPassword"
//                       type="password"
//                       register={register}
//                       errors={errors}
//                       placeholder="كلمة مرور جديدة"
//                       icon="refresh-cw"
//                     />
//                     <TextInput
//                       lable="تأكيد كلمة المرور"
//                       name="confirmNewPassword"
//                       type="password"
//                       register={register}
//                       errors={errors}
//                       placeholder="تأكيد كلمة المرور"
//                       icon="check-circle"
//                       validation={{
//                         validate: (value) =>
//                           value === watch("newPassword") ||
//                           "كلمات المرور غير متطابقة",
//                       }}
//                     />
//                   </div>
//                   <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
//                     <p className="text-sm text-blue-600 dark:text-blue-300">
//                       يجب أن تحتوي كلمة المرور على الأقل على 8 أحرف، حرف كبير،
//                       حرف صغير، رقم، ورمز خاص.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Actions Card */}
//               <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
//                 <div className="flex flex-col md:flex-row justify-between gap-4">
//                   <button
//                     type="button"
//                     onClick={() => router.back()}
//                     className="px-6 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors flex-1"
//                   >
//                     إلغاء التغييرات
//                   </button>
//                   <div className="flex gap-4 flex-1">
//                     <button
//                       type="button"
//                       className="px-6 py-3 text-red-600 border border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors flex-1"
//                       onClick={() => console.log("إجراء حذف الحساب")}
//                     >
//                       حذف الحساب
//                     </button>
//                     <SubmitButton
//                       isLoading={loading}
//                       buttonTitle="حفظ التغييرات"
//                       loadingButtonTitle="جارٍ الحفظ..."
//                       className="px-6 py-3 bg-lime-600 hover:bg-lime-700 text-white rounded-lg shadow-md transition-all flex-1"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// "use client";

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { FiUser, FiMail, FiPhone, FiLock, FiRefreshCw, FiCheckCircle } from "react-icons/fi";
// import TextInput from "@/components/Forminputs/TextInput";
// import SubmitButton from "@/components/Forminputs/SubmitButton";
// import ImageInput from "@/components/Forminputs/ImageInput";
// import { makePutRequest } from "@/lib/apiRequest";
// import { useRouter } from "next/navigation";

// const AccountSettings = ({ user }) => {
//   const [imageUrl, setImageUrl] = useState(user?.profileImage || "");
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const { register, handleSubmit, formState: { errors }, watch } = useForm({
//     defaultValues: user
//   });

//   const onSubmit = async (data) => {
//     const payload = {
//       ...data,
//       profileImage: imageUrl,
//     };

//     if (data.newPassword) {
//       if (data.newPassword !== data.confirmNewPassword) {
//         alert("كلمة المرور الجديدة غير متطابقة!");
//         return;
//       }
//       payload.password = data.newPassword;
//     }

//     await makePutRequest(
//       setLoading,
//       `api/customers/${user.id}`,
//       payload,
//       "Customer Profile",
//       () => router.push("/dashboard/customers"),
//       () => reset()
//     );
//   };

//   const InputField = ({ label, name, type = "text", icon, ...props }) => (
//     <div className="space-y-1">
//       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//         {label}
//       </label>
//       <div className="relative">
//         <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
//           {icon}
//         </div>
//         <input
//           type={type}
//           className={`block w-full pr-10 border ${errors[name] ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-lime-500 focus:border-transparent`}
//           {...register(name)}
//           {...props}
//         />
//       </div>
//       {errors[name] && (
//         <p className="mt-1 text-sm text-red-600">{errors[name].message}</p>
//       )}
//     </div>
//   );

//   const ProfileCard = () => (
//     <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
//       <div className="p-6 border-b border-gray-100 dark:border-gray-700">
//         <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800 dark:text-white">
//           <FiUser className="text-lime-500" />
//           المعلومات الشخصية
//         </h2>
//       </div>
//       <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//         <InputField
//           label="الاسم الأول"
//           name="firstName"
//           icon={<FiUser />}
//           register={register}
//           errors={errors}
//         />
//         <InputField
//           label="اسم العائلة"
//           name="lastName"
//           icon={<FiUser />}
//           register={register}
//           errors={errors}
//         />
//         <InputField
//           label="البريد الإلكتروني"
//           name="email"
//           type="email"
//           icon={<FiMail />}
//           register={register}
//           errors={errors}
     
//         />
//         <InputField
//           label="رقم الهاتف"
//           name="phone"
//           icon={<FiPhone />}
//           register={register}
//           errors={errors}
//           dir="ltr"
//         />
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
//             إعدادات الحساب
//           </h1>
//           <p className="text-lg text-gray-600 dark:text-gray-300">
//             إدارة معلوماتك الشخصية وإعدادات الأمان
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* العمود الجانبي */}
//           <div className="lg:col-span-1 space-y-6">
//             <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sticky top-6">
//               <div className="flex flex-col items-center">
//                 <div className="relative mb-4">
//                   <img 
//                     src={imageUrl || "/default-avatar.png"} 
//                     className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-700 shadow-lg object-cover"
//                     alt="Profile"
//                   />
//                   <button className="absolute bottom-0 right-0 bg-lime-500 text-white p-2 rounded-full shadow-md hover:bg-lime-600 transition">
//                     <FiUser className="w-4 h-4" />
//                   </button>
//                 </div>
//                 <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white">
//                   {user?.firstName} {user?.lastName}
//                 </h3>
//                 <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
//                   {user?.email}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* المحتوى الرئيسي */}
//           <div className="lg:col-span-3 space-y-6">
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//               <ProfileCard />
              
//               {/* بطاقة كلمة المرور */}
//               <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
//                 <div className="p-6 border-b border-gray-100 dark:border-gray-700">
//                   <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800 dark:text-white">
//                     <FiLock className="text-blue-500" />
//                     إعدادات الأمان
//                   </h2>
//                 </div>
//                 <div className="p-6 space-y-4">
//                   <InputField
//                     label="كلمة المرور الحالية"
//                     name="oldPassword"
//                     type="password"
//                     icon={<FiLock />}
//                     register={register}
//                     errors={errors}
//                   />
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <InputField
//                       label="كلمة المرور الجديدة"
//                       name="newPassword"
//                       type="password"
//                       icon={<FiRefreshCw />}
//                       register={register}
//                       errors={errors}
//                     />
//                     <InputField
//                       label="تأكيد كلمة المرور"
//                       name="confirmNewPassword"
//                       type="password"
//                       icon={<FiCheckCircle />}
//                       register={register}
//                       errors={errors}
//                     />
//                   </div>
//                   <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
//                     <p className="text-sm text-blue-600 dark:text-blue-300">
//                       يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل، وتشمل حروفًا كبيرة وصغيرة وأرقامًا.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* أزرار الإجراءات */}
//               <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4">
//                 <button
//                   type="button"
//                   onClick={() => router.back()}
//                   className="px-6 py-3 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
//                 >
//                   إلغاء
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="px-6 py-3 bg-lime-500 text-white rounded-lg hover:bg-lime-600 transition flex items-center justify-center"
//                 >
//                   {loading ? (
//                     <>
//                       <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       جاري الحفظ...
//                     </>
//                   ) : 'حفظ التغييرات'}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccountSettings;
"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiUser, FiMail, FiPhone, FiLock, FiRefreshCw, FiCheckCircle } from "react-icons/fi";
import TextInput from "@/components/Forminputs/TextInput";
import SubmitButton from "@/components/Forminputs/SubmitButton";
import ImageInput from "@/components/Forminputs/ImageInput";
import { makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";

const AccountSettings = ({ user={} }) => {
  const [imageUrl, setImageUrl] = useState(user?.profileImage || "");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    defaultValues: user
  });

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      profileImage: imageUrl,
    };

    if (data.newPassword) {
      if (data.newPassword !== data.confirmNewPassword) {
        alert("كلمة المرور الجديدة غير متطابقة!");
        return;
      }
      payload.password = data.newPassword;
    }

    await makePutRequest(
      setLoading,
      `api/customers/${user.id}`,
      payload,
      "Customer Profile",
      () => router.push("/dashboard/customers"),
      () => reset()
    );
  };

  const InputField = ({ label, name, type = "text", icon, ...props }) => (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
          {icon}
        </div>
        <input
          type={type}
          className={`block w-full pr-10 border ${errors[name] ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-lime-500 focus:border-transparent`}
          {...register(name)}
          {...props}
        />
      </div>
      {errors[name] && (
        <p className="mt-1 text-sm text-red-600">{errors[name].message}</p>
      )}
    </div>
  );

  const ProfileCard = () => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6 border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800 dark:text-white">
          <FiUser className="text-lime-500" />
          المعلومات الشخصية
        </h2>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="الاسم الأول"
          name="firstName"
          icon={<FiUser />}
          register={register}
          errors={errors}
        />
        <InputField
          label="اسم العائلة"
          name="lastName"
          icon={<FiUser />}
          register={register}
          errors={errors}
        />
        <InputField
          label="البريد الإلكتروني"
          name="email"
          type="email"
          icon={<FiMail />}
          register={register}
          errors={errors}
        />
        <InputField
          label="رقم الهاتف"
          name="phone"
          icon={<FiPhone />}
          register={register}
          errors={errors}
          dir="ltr"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            إعدادات الحساب
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            إدارة معلوماتك الشخصية وإعدادات الأمان
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* العمود الجانبي */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sticky top-6">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <img 
                    src={imageUrl || "/default-avatar.png"} 
                    className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-700 shadow-lg object-cover"
                    alt="Profile"
                  />
                  <button className="absolute bottom-0 right-0 bg-lime-500 text-white p-2 rounded-full shadow-md hover:bg-lime-600 transition">
                    <FiUser className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white">
                  {user?.firstName} {user?.lastName}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>

          {/* المحتوى الرئيسي */}
          <div className="lg:col-span-3 space-y-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <ProfileCard />
              
              {/* بطاقة كلمة المرور */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                  <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800 dark:text-white">
                    <FiLock className="text-blue-500" />
                    إعدادات الأمان
                  </h2>
                </div>
                <div className="p-6 space-y-4">
                  <InputField
                    label="كلمة المرور الحالية"
                    name="oldPassword"
                    type="password"
                    icon={<FiLock />}
                    register={register}
                    errors={errors}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField
                      label="كلمة المرور الجديدة"
                      name="newPassword"
                      type="password"
                      icon={<FiRefreshCw />}
                      register={register}
                      errors={errors}
                    />
                    <InputField
                      label="تأكيد كلمة المرور"
                      name="confirmNewPassword"
                      type="password"
                      icon={<FiCheckCircle />}
                      register={register}
                      errors={errors}
                    />
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                    <p className="text-sm text-blue-600 dark:text-blue-300">
                      يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل، وتشمل حروفًا كبيرة وصغيرة وأرقامًا.
                    </p>
                  </div>
                </div>
              </div>

              {/* أزرار الإجراءات */}
              <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="px-6 py-3 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-lime-500 text-white rounded-lg hover:bg-lime-600 transition flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      جاري الحفظ...
                    </>
                  ) : 'حفظ التغييرات'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
