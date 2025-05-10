// "use client";
// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// //import ImageInput from "@/components/Forminputs/ImageInput";
// import ImageInput from "../../../components/Forminputs/ImageInput";
// //import SubmitButton from "../../../../components/Forminputs/SubmitButton";
// import SubmitButton from "../../../../components/Forminputs/SubmitButton"
// import { getServerSession } from "next-auth";
// import { authOptions } from '@/lib/authOptions';
// //import { getData } from './lib/getData';
// import { getData } from '../../../lib/getData';

// export default function UpdateStoreDataForm() {
//   // Default store values
//   //const initialImageUrl = updateData?.imageUrl?? "";
//   const [storeName, setStoreName] = useState("");
//   const [storeDescription, setStoreDescription] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [storeIcon, setStoreIcon] = useState(null);
//   const [storeActivity, setStoreActivity] = useState("");
//   const [storeLocation, setStoreLocation] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [whatsapp, setWhatsapp] = useState("");
//   const [email, setEmail] = useState("");
  
//   // Defining the social media object
//   const [socialMedia, setSocialMedia] = useState({
//     instagram: "",
//     twitter: "",
//     snapchat: "",
//     tiktok: "",
//     youtube: "",
//     facebook: "",
//   });
  

//   // Simulating data fetching from a server
//   useEffect(() => {
//     const fetchStoreData = async () => {
//       try {
//         const session = await getServerSession(authOptions); // جلب الجلسة
//         const userId = session?.user?.id; // الحصول على معرف المستخدم من الجلسة

//         if (userId) {
//           const response = await getData(`stores?vendorId=${userId}`); // استدعاء API مع معرف المستخدم
//           const data = await response.json();
//           console.log("Fetched dataAAAAAAAAAAAAAAAAAAAA:", data);

//           setStoreName(data.businessName || "");
//         setImageUrl(data.profileImageUrl || "");
//         setStoreDescription(data.notes || "");
//         setStoreActivity(data.storeType || "");
//         setStoreLocation(data.physicalAddress || "");
//         setPhoneNumber(data.phone || "");
//         setWhatsapp(data.whatsappPhone || "");
//         setEmail(data.contactPerson || "");
//         } else {
//           console.error("User not logged in.");
//         }
//       } catch (error) {
//         console.error("Error fetching store data:", error);
//       }
//     };

//     fetchStoreData();
//   }, []);

//   const handleSubmit = () => {
//     console.log({
//       storeName,
//       storeDescription,
//       imageUrl,
//       storeIcon,
//       storeActivity,
//       storeLocation,
//       phoneNumber,
//       whatsapp,
//       email,
//       socialMedia,
//     });
//   };

//   return (
//     <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 min-h-screen">
//       <h1 className="text-2xl sm:text-3xl font-bold text-lime-600 mb-6 sm:mb-8">Store Settings</h1>

//       {/* Store Data */}
//       <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg mb-6">
//         <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Store Data</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          
//           {/* <ImageInput
//             label="Store Tab Icon"
//             description="Best icon size: 32x32 pixels."
//             onChange={(file) => setStoreIcon(file)}
//           /> */}
//           <ImageInput 
//           imageUrl={imageUrl} 
//           setImageUrl={setImageUrl} 
//           endpoint = "vendorProfileUploader" 
//           label="Store Logo"/>

//           {/* Store Name Input */}
//           <div className="mb-4 sm:mb-6">
//             <label className="block text-sm sm:text-base font-medium text-gray-700">Store Name</label>
//             <input
//               type="text"
//               value={storeName}
//               onChange={(e) => setStoreName(e.target.value)}
//               className="mt-2 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
//               placeholder="Enter Store Name"
//             />
//           </div>

//           {/* Store Description Input */}
//           <div className="mb-4 sm:mb-6">
//             <label className="block text-sm sm:text-base font-medium text-gray-700">About the Store</label>
//             <textarea
//               value={storeDescription}
//               onChange={(e) => setStoreDescription(e.target.value)}
//               className="mt-2 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
//               placeholder="Enter Store Description"
//             />
//           </div>

//           {/* Store Activity Input */}
//           <div className="mb-4 sm:mb-6">
//             <label className="block text-sm sm:text-base font-medium text-gray-700">Store Activity</label>
//             <input
//               type="text"
//               value={storeActivity}
//               onChange={(e) => setStoreActivity(e.target.value)}
//               className="mt-2 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
//               placeholder="Enter Store Activity"
//             />
//           </div>

//           {/* Store Location Input */}
//           <div className="mb-4 sm:mb-6">
//             <label className="block text-sm sm:text-base font-medium text-gray-700">Store Location</label>
//             <input
//               type="text"
//               value={storeLocation}
//               onChange={(e) => setStoreLocation(e.target.value)}
//               className="mt-2 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
//               placeholder="Enter Store Location"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Customer Service Channels */}
//       <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg mb-6">
//         <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Customer Service Channels</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//           {/* Phone Number Input */}
//           <div className="mb-4 sm:mb-6">
//             <label className="block text-sm sm:text-base font-medium text-gray-700">Phone Number</label>
//             <input
//               type="text"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               className="mt-2 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
//               placeholder="Enter Phone Number"
//             />
//           </div>

//           {/* WhatsApp Number Input */}
//           <div className="mb-4 sm:mb-6">
//             <label className="block text-sm sm:text-base font-medium text-gray-700">WhatsApp Number</label>
//             <input
//               type="text"
//               value={whatsapp}
//               onChange={(e) => setWhatsapp(e.target.value)}
//               className="mt-2 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
//               placeholder="Enter WhatsApp Number"
//             />
//           </div>

//           {/* Email Address Input */}
//           <div className="mb-4 sm:mb-6">
//             <label className="block text-sm sm:text-base font-medium text-gray-700">Email Address</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-2 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
//               placeholder="Enter Email Address"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Social Media Accounts */}
//       <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg mb-6">
//         <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Social Media Accounts</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//           {Object.keys(socialMedia).map((platform) => (
//             <div className="mb-4 sm:mb-6" key={platform}>
//               <label className="block text-sm sm:text-base font-medium text-gray-700">{`Account for ${platform}`}</label>
//               <input
//                 type="text"
//                 value={socialMedia[platform]}
//                 onChange={(e) =>
//                   setSocialMedia({ ...socialMedia, [platform]: e.target.value })
//                 }
//                 className="mt-2 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
//                 placeholder={`Enter ${platform} link`}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Submit Button */}
//       <SubmitButton onClick={handleSubmit} label="Save Changes" />
//     </div>
//   );
// }

// "use client";
// import React, { useState,useEffect } from "react";
// import { useForm } from "react-hook-form";
// import ImageInput from "../../../components/Forminputs/ImageInput";
// import SubmitButton from "../../../components/Forminputs/SubmitButton";
// import TextInput from "../../Forminputs/TextInput";
// import { makePostRequest, makePutRequest } from "@/lib/apiRequest";

// export default function UpdateStoreDataForm({updateData={}}) {

//     const  initialImageUrl = updateData[0]?.profileImageUrl;
  
//       const [imageUrl, setImageUrl] = useState(initialImageUrl);
//       const [loading, setLoading] = useState(false);
//   console.log("dataaaaaaaaaaaaaaaaaaaaaaaa:", updateData[0]);
    
//    const { register,reset,watch, handleSubmit, formState:{errors}  } = useForm({
//     defaultValues: {
//       isActive: true,
//       ...updateData[0]
//       }
//     });

//     const isActive = watch("isActive");
    
//     async function onSubmit (data)  {
//     console.log(data);
//       data.profileImageUrl = imageUrl;
//     if (updateData[0]?.id) {
//       // تعديل المنتج إذا كان معرف المنتج موجودًا
//       data.id = updateData[0].id;
//       makePutRequest(setLoading, `api/stores/${updateData[0].id}`, data, "المتجر");
//     }
//   };

//   return (
//     <div >
//       {/* <h1 className="text-2xl sm:text-3xl font-bold text-lime-600 mb-6 sm:mb-8">Store Settings</h1> */}

//       <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border
//              border-gray-200 rounded-lg shadow sm:p-6 md:p-8
//             dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
//         {/* Store Data */}
      
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//             <ImageInput 
//               imageUrl={imageUrl} setImageUrl={setImageUrl}
//               endpoint="vendorProfileUploader" 
//               label="Store Logo"
//             />

//             <TextInput lable="Store Name"
//                     name="businessName"
//                     register={register}
//                     errors={errors}
//                       />

//             <TextInput lable="Store Description"
//                     name="phone"
//                     register={register}
//                     errors={errors}
//                       />

//             <TextInput lable="Store Type"
//                     name="storeType"
//                     register={register}
//                     errors={errors}
//                       />

//             <TextInput lable="Store Location"
//                     name="physicalAddress"
//                     register={register}
//                     errors={errors}
//                       />
//           </div>

//         {/* Submit Button */}
//         <SubmitButton isLoading={loading} buttonTitle="Save Changes"
//                 loadingButtonTitle="Save Changes please wait..."/> 
//       </form>
//     </div>
//   );
// }


"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ImageInput from "../../../components/Forminputs/ImageInput";
import SubmitButton from "../../../components/Forminputs/SubmitButton";
import TextInput from "../../Forminputs/TextInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";

export default function UpdateStoreDataForm({ updateData = {} }) {
  const initialImageUrl = updateData[0]?.profileImageUrl;
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [loading, setLoading] = useState(false);
  
  // استخدم defaultValues لتعريف المدخلات من updateData وإنشاء قيم افتراضية لمجموعة روابط التواصل
  const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      isActive: true,
      ...updateData[0],
      // إذا كانت روابط التواصل موجودة مسبقاً، يمكنك تفكيكها
      facebook: updateData[0]?.socialLinks?.facebook || "",
      instagram: updateData[0]?.socialLinks?.instagram || "",
      twitter: updateData[0]?.socialLinks?.twitter || "",
      tiktok: updateData[0]?.socialLinks?.tiktok || ""
    }
  });

  const isActive = watch("isActive");

  async function onSubmit(data) {
    // تجميع روابط التواصل الاجتماعي في كائن واحد
    data.socialLinks = {
      facebook: data.facebook,
      instagram: data.instagram,
      twitter: data.twitter,
      tiktok: data.tiktok,
    };

    data.profileImageUrl = imageUrl;
    if (updateData[0]?.id) {
      // تعديل المتجر إذا كان المعرف موجودًا
      data.id = updateData[0].id;
      makePutRequest(setLoading, `api/stores/${updateData[0].id}`, data, "المتجر");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <ImageInput 
            imageUrl={imageUrl} setImageUrl={setImageUrl}
            endpoint="vendorProfileUploader" 
            label="شعار المتجر"
          />

          <TextInput 
            lable="اسم المتجر "
            name="businessName"
            register={register}
            errors={errors}
          />

          <TextInput 
            lable="رقم المتجر"
            name="phone"
            register={register}
            errors={errors}
          />

          <TextInput 
            lable="نوع المتجر"
            name="storeType"
            register={register}
            errors={errors}
          />

          <TextInput 
            lable="عنوان المتجر"
            name="physicalAddress"
            register={register}
            errors={errors}
          />
        </div>

        {/* إضافة حقول روابط التواصل الاجتماعي */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
          <TextInput 
            lable="رابط الفيس بوك"
            name="facebook"
            register={register}
            errors={errors}
          />
          <TextInput 
            lable="رابط الانستقرام"
            name="instagram"
            register={register}
            errors={errors}
          />
          <TextInput 
            lable="رابط X"
            name="twitter"
            register={register}
            errors={errors}
          />
          <TextInput 
            lable="رابط تيك توك"
            name="tiktok"
            register={register}
            errors={errors}
          />
        </div>

        <SubmitButton 
          isLoading={loading} 
          buttonTitle="حفظ التغييرات"
          loadingButtonTitle="جاري حفظ التغييرات يرجى الانتظار..."
        /> 
      </form>
    </div>
  );
}
