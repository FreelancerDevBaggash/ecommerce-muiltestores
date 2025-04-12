// "use client";

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import TextInput from "../../components/Forminputs/TextInput";
// import FormHeader from "../../components/backoffice/FormHeader";
// import SubmitButton from "../../components/Forminputs/SubmitButton";
// import ToggleInput from "../../components/Forminputs/ToggleInput";
// import { makePostRequest } from "../../lib/apiRequest";
// import { useRouter } from "next/navigation";

// export default function CustomizationForm({ customizationData, storeId }) {
//   const [loading, setLoading] = useState(false);
//   const { register, handleSubmit, watch, formState: { errors } } = useForm({
//     defaultValues: customizationData || {
//       primaryColor: "",
//       secondaryColor: "",
//       accentColor: "",
//       backgroundColor: "",
//       fontFamily: "",
//       isActive: true,
//     },
//   });
// console.log("sssssssssssssssssssssssssssssss",storeId)

//   const router = useRouter();

//   const isActive = watch("isActive");

//   async function onSubmit(data) {
//     if (!storeId) {
//       console.error("Store ID is missing. Cannot proceed with customization.");
//       return;
//     }

//     data.storeId = storeId; // Ensure the store ID is included in the payload

//     console.log("Customization Data to Submit:", data);

//     // Send data to API
//     makePostRequest(
//       setLoading,
//       "api/customizations",
//       data,
//       "Customization",
//       null, // Pass null if no form reset is needed
//       () => router.push("/dashboard/customizations")
//     );
//   }

//   return (
//     <div>
//       <FormHeader title="Customization Settings" />
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
//       >
//         <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//           <TextInput
//             lable="Primary Color"
//             name="primaryColor"
//             register={register}
//             errors={errors}
//           />

//           <TextInput
//             lable="Secondary Color"
//             name="secondaryColor"
//             register={register}
//             errors={errors}
//           />

//           <TextInput
//             lable="Accent Color"
//             name="accentColor"
//             register={register}
//             errors={errors}
//           />

//           <TextInput
//             lable="Background Color"
//             name="backgroundColor"
//             register={register}
//             errors={errors}
//           />

//           <TextInput
//             lable="Font Family"
//             name="fontFamily"
//             register={register}
//             errors={errors}
//           />

//           <ToggleInput
//             label="Is Active"
//             name="isActive"
//             trueTitle="Active"
//             falseTitle="Inactive"
//             register={register}
//           />
//         </div>
//         <SubmitButton
//           isLoading={loading}
//           buttonTitle="Save Customization"
//           loadingButtonTitle="Saving Customization, please wait..."
//         />
//       </form>
//     </div>
//   );
// }
// "use client";
// import { generateIsoFormattedDate } from "../../lib/generateIsoFormattedDate";

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import TextInput from "@/components/Forminputs/TextInput";
// import FormHeader from "@/components/backoffice/FormHeader";
// import SubmitButton from "@/components/Forminputs/SubmitButton";
// import ToggleInput from "@/components/Forminputs/ToggleInput";
// import { makePostRequest } from "../../lib/apiRequest";
// import { useRouter } from "next/navigation";

// export default function CustomizationForm({  storeId }) {

//     const [loading, setLoading] = useState(false)
//     const {register, reset,watch, handleSubmit, formState:{errors}} =useForm(
//      {   defaultValues: {
//             isActive: true,
//           },}
//     );
//     const router = useRouter();
//     function redirect(){
//         router.push('/dashboard/customizations')
//  }
//     const isActive = watch("isActive");
//     async function onSubmit(data) {

// data.storeId = storeId;

   
//          console.log(data);
//         makePostRequest( setLoading, 'api/customizations', data,
//             'customizations',
//             reset ,
//             redirect) ;
//     }
   

//   // return (
//   //   <div>
//   //     <FormHeader title="Customization Settings" />
//   //     <form
//   //       onSubmit={handleSubmit(onSubmit)}
//   //       className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
//   //     >
//   //       <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//   //         <TextInput
//   //           lable="Primary Color"
//   //           name="primaryColor"
//   //           register={register}
//   //           errors={errors}
//   //         />

//   //         <TextInput
//   //           lable="Secondary Color"
//   //           name="secondaryColor"
//   //           register={register}
//   //           errors={errors}
//   //         />

//   //         <TextInput
//   //           lable="Accent Color"
//   //           name="accentColor"
//   //           register={register}
//   //           errors={errors}
//   //         />

//   //         <TextInput
//   //           lable="Background Color"
//   //           name="backgroundColor"
//   //           register={register}
//   //           errors={errors}
//   //         />

//   //         <TextInput
//   //           lable="Font Family"
//   //           name="fontFamily"
//   //           register={register}
//   //           errors={errors}
//   //         />

//   //         <ToggleInput
//   //           label="Is Active"
//   //           name="isActive"
//   //           trueTitle="Active"
//   //           falseTitle="Inactive"
//   //           register={register}
//   //         />
//   //       </div>
//   //       <SubmitButton isLoading={loading} buttonTitle="Create Banner"
//   //               loadingButtonTitle="Create Banner please wait..."/> 
//   //     </form>
//   //   </div>
//   // );


// }

// npm install react-color

// import { ChromePicker } from "react-color"; // استيراد مكتبة اختيار اللون
// import FormHeader from "@/components/backoffice/FormHeader";
// import SubmitButton from "@/components/Forminputs/SubmitButton";
// import ToggleInput from "@/components/Forminputs/ToggleInput";
// import { makePostRequest } from "../../lib/apiRequest";
// import { useRouter } from "next/navigation";
// import { da } from "@faker-js/faker";

// export default function CustomizationForm({storeId}) {
//   const [loading, setLoading] = useState(false);
//   const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//       isActive: true,
//     },
//   });

//   const router = useRouter();
//   function redirect() {
//     router.push('/dashboard/customizations');
//   }

//   const isActive = watch("isActive");

//   const [primaryColor, setPrimaryColor] = useState("#000000");
//   const [secondaryColor, setSecondaryColor] = useState("#000000");
//   const [accentColor, setAccentColor] = useState("#000000");
//   const [backgroundColor, setBackgroundColor] = useState("#000000");

//   const handleColorChange = (color, field) => {
//     if (field === "primaryColor") setPrimaryColor(color.hex);
//     if (field === "secondaryColor") setSecondaryColor(color.hex);
//     if (field === "accentColor") setAccentColor(color.hex);
//     if (field === "backgroundColor") setBackgroundColor(color.hex);
//   };

//   async function onSubmit(data) {
//     data.storeId = storeId;
//     data.backgroundColor= backgroundColor;
//     data.primaryColor= primaryColor;
//     data.secondaryColor= secondaryColor;
//     data.accentColor= accentColor;
//     data.isActive= isActive;

//     console.log("dataaaaaaaaaaaaaaaaaaaaaaaa",data);
//     makePostRequest(setLoading, 'api/customizations', data, 'Customization', reset, redirect);
//   }
//   return (
//     <div>
//       <FormHeader title="Customization Settings" />
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
//       >
//         <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//           {/* Primary Color */}
//           <div>
//             <label htmlFor="primaryColor" className="block text-sm font-medium text-gray-700">
//               Primary Color
//             </label>
//             <ChromePicker
//               color={primaryColor}
//               onChangeComplete={(color) => handleColorChange(color, "primaryColor")}
//             />
//             <div className="mt-2 text-sm text-gray-700">Selected Color: {primaryColor}</div>
//           </div>

//           {/* Secondary Color */}
//           <div>
//             <label htmlFor="secondaryColor" className="block text-sm font-medium text-gray-700">
//               Secondary Color
//             </label>
//             <ChromePicker
//               color={secondaryColor}
//               onChangeComplete={(color) => handleColorChange(color, "secondaryColor")}
//             />
//             <div className="mt-2 text-sm text-gray-700">Selected Color: {secondaryColor}</div>
//           </div>

//           {/* Accent Color */}
//           <div>
//             <label htmlFor="accentColor" className="block text-sm font-medium text-gray-700">
//               Accent Color
//             </label>
//             <ChromePicker
//               color={accentColor}
//               onChangeComplete={(color) => handleColorChange(color, "accentColor")}
//             />
//             <div className="mt-2 text-sm text-gray-700">Selected Color: {accentColor}</div>
//           </div>

//           {/* Background Color */}
//           <div>
//             <label htmlFor="backgroundColor" className="block text-sm font-medium text-gray-700">
//               Background Color
//             </label>
//             <ChromePicker
//               color={backgroundColor}
//               onChangeComplete={(color) => handleColorChange(color, "backgroundColor")}
//             />
//             <div className="mt-2 text-sm text-gray-700">Selected Color: {backgroundColor}</div>
//           </div>

//           {/* Font Family */}
//           <div>
//             <label htmlFor="fontFamily" className="block text-sm font-medium text-gray-700">
//               Font Family
//             </label>
//             <input
//               type="text"
//               id="fontFamily"
//               {...register("fontFamily")}
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>

//           {/* Toggle for Active/Inactive */}
//           <ToggleInput
//             label="Is Active"
//             name="isActive"
//             trueTitle="Active"
//             falseTitle="Inactive"
//             register={register}
//           />ِ
//         </div>
//         <SubmitButton
//           isLoading={loading}
//           buttonTitle="Create Banner"
//           loadingButtonTitle="Creating Banner... Please wait"
//         />
//       </form>
//     </div>
//   );
// }
// "use client";
// // import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import { ChromePicker } from "react-color";
// import chroma from "chroma-js"; // مكتبة توليد الألوان
// import FormHeader from "@/components/backoffice/FormHeader";
// import SubmitButton from "@/components/Forminputs/SubmitButton";
// import ToggleInput from "@/components/Forminputs/ToggleInput";
// import { makePostRequest } from "../../lib/apiRequest";
// import { useRouter } from "next/navigation";

// export default function CustomizationForm({ storeId }) {
//   const [loading, setLoading] = useState(false);
//   const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: { isActive: true },
//   });

//   const router = useRouter();
//   function redirect() {
//     router.push('/dashboard/customizations');
//   }

//   const isActive = watch("isActive");

//   const [primaryColor, setPrimaryColor] = useState("#000000");
//   const [secondaryColor, setSecondaryColor] = useState("#333333");
//   const [accentColor, setAccentColor] = useState("#666666");
//   const [backgroundColor, setBackgroundColor] = useState("#ffffff");

//   // دالة لتحديث الألوان بناءً على اللون الأساسي
//   const generateColors = (baseColor) => {
//     const scale = chroma.scale([baseColor, "white"]).mode("lab"); // توليد ألوان أفتح
//     setSecondaryColor(scale(0.3).hex()); // لون أفتح بدرجة 30%
//     setAccentColor(scale(0.6).hex()); // لون أفتح بدرجة 60%
//     setBackgroundColor(scale(0.9).hex()); // لون أفتح بدرجة 90%
//   };

//   const handleColorChange = (color) => {
//     setPrimaryColor(color.hex);
//     generateColors(color.hex); // تحديث بقية الألوان تلقائيًا
//   };

//   async function onSubmit(data) {
//     data.storeId = storeId;
//     data.primaryColor = primaryColor;
//     data.secondaryColor = secondaryColor;
//     data.accentColor = accentColor;
//     data.backgroundColor = backgroundColor;
//     data.isActive = isActive;

//     console.log("Data:", data);
//     makePostRequest(setLoading, 'api/customizations', data, 'Customization', reset, redirect);
//   }

//   return (
//     <div>
//       <FormHeader title="Customization Settings" />
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
//       >
//         <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//           {/* Primary Color */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Primary Color</label>
//             <ChromePicker color={primaryColor} onChangeComplete={handleColorChange} />
//             <div className="mt-2 text-sm text-gray-700">Selected: {primaryColor}</div>
//           </div>

//           {/* Secondary Color (تحديث تلقائي) */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Secondary Color</label>
//             <div className="p-4 rounded-md" style={{ backgroundColor: secondaryColor }}>
//               {secondaryColor}
//             </div>
//           </div>

//           {/* Accent Color (تحديث تلقائي) */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Accent Color</label>
//             <div className="p-4 rounded-md" style={{ backgroundColor: accentColor }}>
//               {accentColor}
//             </div>
//           </div>

//           {/* Background Color (تحديث تلقائي) */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Background Color</label>
//             <div className="p-4 rounded-md" style={{ backgroundColor: backgroundColor }}>
//               {backgroundColor}
//             </div>
//           </div>

//           {/* Font Family */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Font Family</label>
//             <input
//               type="text"
//               {...register("fontFamily")}
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>

//           {/* Toggle Active/Inactive */}
//           <ToggleInput
//             label="Is Active"
//             name="isActive"
//             trueTitle="Active"
//             falseTitle="Inactive"
//             register={register}
//           />
//         </div>

//         <SubmitButton
//           isLoading={loading}
//           buttonTitle="Save Customization"
//           loadingButtonTitle="Saving..."
//         />
//       </form>
//     </div>
//   );
// }
// "use client";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { ChromePicker } from "react-color";
// import chroma from "chroma-js";
// import { motion } from "framer-motion";
// import FormHeader from "@/components/backoffice/FormHeader";
// import SubmitButton from "@/components/Forminputs/SubmitButton";
// import ToggleInput from "@/components/Forminputs/ToggleInput";
// import { makePostRequest } from "../../lib/apiRequest";
// import { useRouter } from "next/navigation";

// export default function CustomizationForm({ storeId }) {
//   const [loading, setLoading] = useState(false);
//   const { register, reset, watch, handleSubmit } = useForm({
//     defaultValues: { isActive: true },
//   });

//   const router = useRouter();
//   const [colorsLocked, setColorsLocked] = useState({
//     secondary: false,
//     accent: false,
//     background: false,
//   });

//   // توليد الألوان مع تحسينات في التدرج
//   const generateColors = (baseColor) => {
//     const scale = chroma
//       .scale([baseColor, chroma(baseColor).brighten(3)])
//       .mode("lch")
//       .correctLightness(true);

//     return {
//       secondary: colorsLocked.secondary ? secondaryColor : scale(0.3).hex(),
//       accent: colorsLocked.accent ? accentColor : scale(0.6).hex(),
//       background: colorsLocked.background ? backgroundColor : scale(0.9).hex(),
//     };
//   };

//   // حالة الألوان
//   const [primaryColor, setPrimaryColor] = useState("#3B82F6");
//   const [secondaryColor, setSecondaryColor] = useState("#60A5FA");
//   const [accentColor, setAccentColor] = useState("#93C5FD");
//   const [backgroundColor, setBackgroundColor] = useState("#BFDBFE");

//   const handleColorChange = (color) => {
//     const newColors = generateColors(color.hex);
//     setPrimaryColor(color.hex);
//     setSecondaryColor(newColors.secondary);
//     setAccentColor(newColors.accent);
//     setBackgroundColor(newColors.background);
//   };

//   // إرسال النموذج
//   async function onSubmit(data) {
//     const formData = {
//       ...data,
//       storeId,
//       primaryColor,
//       secondaryColor,
//       accentColor,
//       backgroundColor,
//     };

//     await makePostRequest(
//       setLoading,
//       'api/customizations',
//       formData,
//       'Customization',
//       reset,
//       () => router.push('/dashboard/customizations')
//     );
//   }

//   // عنصر معاينة اللون
//   const ColorPreview = ({ color, label, onLock }) => (
//     <motion.div 
//       className="p-4 rounded-lg shadow-lg relative"
//       style={{ backgroundColor: color }}
//       initial={{ scale: 0.95 }}
//       animate={{ scale: 1 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="flex justify-between items-center">
//         <span className="text-sm font-medium mix-blend-difference text-white">
//           {label}
//         </span>
//         <button
//           type="button"
//           onClick={onLock}
//           className="p-1 rounded-full bg-black/10 hover:bg-black/20"
//         >
//           {colorsLocked[label.toLowerCase()] ? '🔒' : '🔓'}
//         </button>
//       </div>
//       <code className="block mt-2 text-xs mix-blend-difference text-white">
//         {color}
//       </code>
//     </motion.div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
//       <FormHeader title="🎨 Customization Studio" />
      
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="w-full max-w-6xl p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl mx-auto my-8"
//       >
//         <div className="grid gap-8 md:grid-cols-2">
//           {/* Color Controls Section */}
//           <div className="space-y-8">
//             <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
//               <h3 className="text-lg font-bold mb-4">Primary Color</h3>
//               <ChromePicker
//                 color={primaryColor}
//                 onChangeComplete={handleColorChange}
//                 className="!shadow-none !bg-transparent"
//               />
//             </div>

//             <div className="grid gap-4">
//               <ColorPreview
//                 color={secondaryColor}
//                 label="Secondary"
//                 onLock={() => setColorsLocked(prev => ({
//                   ...prev,
//                   secondary: !prev.secondary
//                 }))}
//               />
//               <ColorPreview
//                 color={accentColor}
//                 label="Accent"
//                 onLock={() => setColorsLocked(prev => ({
//                   ...prev,
//                   accent: !prev.accent
//                 }))}
//               />
//               <ColorPreview
//                 color={backgroundColor}
//                 label="Background"
//                 onLock={() => setColorsLocked(prev => ({
//                   ...prev,
//                   background: !prev.background
//                 }))}
//               />
//             </div>
//           </div>

//           {/* Live Preview Section */}
//           <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-xl space-y-6">
//             <h3 className="text-xl font-bold text-center">Live Preview</h3>
            
//             {/* Mockup Header */}
//             <div 
//               className="p-6 rounded-lg transition-all duration-300"
//               style={{ backgroundColor: primaryColor }}
//             >
//               <h2 
//                 className="text-2xl font-bold mb-4"
//                 style={{ color: backgroundColor }}
//               >
//                 Website Header
//               </h2>
//               <p 
//                 className="text-sm"
//                 style={{ color: accentColor }}
//               >
//                 This is a sample header section
//               </p>
//             </div>

//             {/* Mockup Content */}
//             <div 
//               className="p-6 rounded-lg transition-all duration-300"
//               style={{ backgroundColor: backgroundColor }}
//             >
//               <h3 
//                 className="text-lg font-semibold mb-3"
//                 style={{ color: primaryColor }}
//               >
//                 Content Section
//               </h3>
//               <p 
//                 className="text-gray-600 dark:text-gray-300 mb-4"
//                 style={{ color: secondaryColor }}
//               >
//                 This is a sample content area showing how text would appear with 
//                 the selected color scheme.
//               </p>
              
//               <button
//                 type="button"
//                 className="px-4 py-2 rounded-lg transition-all duration-300"
//                 style={{ 
//                   backgroundColor: accentColor,
//                   color: chroma(accentColor).luminance() > 0.5 ? '#000' : '#fff'
//                 }}
//               >
//                 Sample Button
//               </button>
//             </div>

//             {/* Font Family Preview */}
//             <div className="mt-6">
//               <label className="block text-sm font-medium mb-2">
//                 Font Family Preview
//               </label>
//               <input
//                 type="text"
//                 {...register("fontFamily")}
//                 className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"
//                 placeholder="Enter font family (e.g., 'Inter')"
//                 style={{
//                   backgroundColor: backgroundColor,
//                   color: secondaryColor,
//                   fontFamily: watch("fontFamily") || 'inherit'
//                 }}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Form Footer */}
//         <div className="mt-8 border-t pt-6 flex justify-between items-center">
//           <ToggleInput
//             label="Activate Theme"
//             name="isActive"
//             trueTitle="Active"
//             falseTitle="Disabled"
//             register={register}
//           />
          
//           <SubmitButton
//             isLoading={loading}
//             buttonTitle="Save Design"
//             loadingButtonTitle="Saving..."
//             className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-bold hover:opacity-90 transition-opacity"
//           />
//         </div>
//       </form>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ChromePicker } from "react-color";
import chroma from "chroma-js";
import { motion } from "framer-motion";
import FormHeader from "@/components/backoffice/FormHeader";
import SubmitButton from "@/components/Forminputs/SubmitButton";
import ToggleInput from "@/components/Forminputs/ToggleInput";
import { makePostRequest } from "../../lib/apiRequest";
import { useRouter } from "next/navigation";

export default function CustomizationForm({ storeId }) {
  const [loading, setLoading] = useState(false);
  const { register, reset, watch, handleSubmit } = useForm({
    defaultValues: { isActive: true },
  });

  const router = useRouter();
  const [colorsLocked, setColorsLocked] = useState({
    secondary: false,
    accent: false,
    background: false,
  });

  // توليد الألوان مع تحسينات في التدرج
  const generateColors = (baseColor) => {
    const scale = chroma
      .scale([baseColor, chroma(baseColor).brighten(3)])
      .mode("lch")
      .correctLightness(true);

    return {
      secondary: colorsLocked.secondary ? secondaryColor : scale(0.3).hex(),
      accent: colorsLocked.accent ? accentColor : scale(0.6).hex(),
      background: colorsLocked.background ? backgroundColor : scale(0.9).hex(),
    };
  };

  // حالة الألوان
  const [primaryColor, setPrimaryColor] = useState("#3B82F6");
  const [secondaryColor, setSecondaryColor] = useState("#60A5FA");
  const [accentColor, setAccentColor] = useState("#93C5FD");
  const [backgroundColor, setBackgroundColor] = useState("#BFDBFE");

  const handleColorChange = (color) => {
    const newColors = generateColors(color.hex);
    setPrimaryColor(color.hex);
    setSecondaryColor(newColors.secondary);
    setAccentColor(newColors.accent);
    setBackgroundColor(newColors.background);
  };

  // إرسال النموذج
  async function onSubmit(data) {
    const formData = {
      ...data,
      storeId,
      primaryColor,
      secondaryColor,
      accentColor,
      backgroundColor,
    };

    await makePostRequest(
      setLoading,
      'api/customizations',
      formData,
      'Customization',
      reset,
      () => router.push('/dashboard/customizations')
    );
  }

  // عنصر معاينة اللون
  const ColorPreview = ({ color, label, onLock }) => (
    <motion.div 
      className="p-4 rounded-lg shadow-lg relative"
      style={{ backgroundColor: color }}
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium mix-blend-difference text-white">
          {label}
        </span>
        <button
          type="button"
          onClick={onLock}
          className="p-1 rounded-full bg-black/10 hover:bg-black/20"
        >
          {colorsLocked[label.toLowerCase()] ? '🔒' : '🔓'}
        </button>
      </div>
      <code className="block mt-2 text-xs mix-blend-difference text-white">
        {color}
      </code>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <FormHeader title="🎨 Customization Studio" />
      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-6xl p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl mx-auto my-8"
      >
        <div className="grid gap-8 md:grid-cols-2">
          {/* Color Controls Section */}
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-4">Primary Color</h3>
              <ChromePicker
                color={primaryColor}
                onChangeComplete={handleColorChange}
                className="!shadow-none !bg-transparent"
              />
            </div>

            <div className="grid gap-4">
              <ColorPreview
                color={secondaryColor}
                label="Secondary"
                onLock={() => setColorsLocked(prev => ({
                  ...prev,
                  secondary: !prev.secondary
                }))} />
              <ColorPreview
                color={accentColor}
                label="Accent"
                onLock={() => setColorsLocked(prev => ({
                  ...prev,
                  accent: !prev.accent
                }))} />
              <ColorPreview
                color={backgroundColor}
                label="Background"
                onLock={() => setColorsLocked(prev => ({
                  ...prev,
                  background: !prev.background
                }))} />
            </div>
          </div>

          {/* Live Preview Section */}
          <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-xl space-y-6">
            <h3 className="text-xl font-bold text-center">Live Preview</h3>
            
            {/* Mockup Header */}
            <div 
              className="p-6 rounded-lg transition-all duration-300"
              style={{ backgroundColor: primaryColor }}
            >
              <h2 
                className="text-2xl font-bold mb-4"
                style={{ color: backgroundColor }}
              >
                Website Header
              </h2>
              <p 
                className="text-sm"
                style={{ color: accentColor }}
              >
                This is a sample header section
              </p>
            </div>

            {/* Mockup Content */}
            <div 
              className="p-6 rounded-lg transition-all duration-300"
              style={{ backgroundColor: backgroundColor }}
            >
              <h3 
                className="text-lg font-semibold mb-3"
                style={{ color: primaryColor }}
              >
                Content Section
              </h3>
              <p 
                className="text-gray-600 dark:text-gray-300 mb-4"
                style={{ color: secondaryColor }}
              >
                This is a sample content area showing how text would appear with 
                the selected color scheme.
              </p>
              
              <button
                type="button"
                className="px-4 py-2 rounded-lg transition-all duration-300"
                style={{ 
                  backgroundColor: accentColor,
                  color: chroma(accentColor).luminance() > 0.5 ? '#000' : '#fff'
                }}
              >
                Sample Button
              </button>
            </div>

            {/* Font Family Preview */}
            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">
                Font Family Preview
              </label>
              <input
                type="text"
                {...register("fontFamily")}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"
                placeholder="Enter font family (e.g., 'Inter')"
                style={{
                  backgroundColor: backgroundColor,
                  color: secondaryColor,
                  fontFamily: watch("fontFamily") || 'inherit'
                }}
              />
            </div>
          </div>
        </div>

        {/* Form Footer */}
        <div className="mt-8 border-t pt-6 flex justify-between items-center">
          <ToggleInput
            label="Activate Theme"
            name="isActive"
            trueTitle="Active"
            falseTitle="Disabled"
            register={register}
          />
          
          <SubmitButton
            isLoading={loading}
            buttonTitle="Save Design"
            loadingButtonTitle="Saving..."
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-bold hover:opacity-90 transition-opacity"
          />
        </div>
      </form>
    </div>
  );
}
