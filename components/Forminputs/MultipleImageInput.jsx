// import { UploadDropzone } from "@/lib/uploadthing";
// import { Pencil, XCircle } from "lucide-react";
// import Image from "next/image";
// import React, { useState } from "react";
// import { toast } from "react-hot-toast";
// import ReactCrop from "react-image-crop";
// import "react-image-crop/dist/ReactCrop.css";

// export default function MultipleImageInput({
//   label,
//   imageUrls,
//   setImageUrls,
//   className = "col-span-full",
//   endpoint = "",
// }) {
//   const [crop, setCrop] = useState({});
//   const [src, setSrc] = useState(null); // مصدر الصورة
//   const [imageToCrop, setImageToCrop] = useState(null); // الصورة التي سيتم قصها
//   const [completedCrop, setCompletedCrop] = useState(null); // النتيجة النهائية بعد القص

//   // دالة لرفع الصورة بعد قصها
//   const getCroppedImage = (imageSrc, crop) => {
//     const image = new Image();
//     image.src = imageSrc;
//     image.onload = () => {
//       const canvas = document.createElement("canvas");
//       const ctx = canvas.getContext("2d");
//       canvas.width = crop.width;
//       canvas.height = crop.height;
//       ctx.drawImage(
//         image,
//         crop.x,
//         crop.y,
//         crop.width,
//         crop.height,
//         0,
//         0,
//         crop.width,
//         crop.height
//       );
//       const croppedImageUrl = canvas.toDataURL("image/jpeg"); // تحويل الصورة إلى Data URL
//       setImageUrls((prevUrls) => [...prevUrls, croppedImageUrl]); // إضافة الصورة المقطوعة إلى قائمة الصور
//     };
//   };

//   // دالة لرفع صورة جديدة
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setSrc(reader.result); // تحديث مصدر الصورة
//       setImageToCrop(reader.result); // تحديد الصورة التي سيتم قصها
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   function handleImageRemove(imageIndex) {
//     const updatedImages = imageUrls.filter((image, index) => index !== imageIndex);
//     setImageUrls(updatedImages);
//   }

//   return (
//     <div className={className}>
//       <div className="flex justify-between items-center mb-4">
//         <label
//           htmlFor="course-image"
//           className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2"
//         >
//           {label}
//         </label>
//       </div>

//       {/* عرض الصور إذا كانت موجودة */}
//       {imageUrls.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {imageUrls.map((imageUrl, i) => (
//             <div key={i} className="relative mb-6">
//               <button
//                 onClick={() => handleImageRemove(i)}
//                 className="absolute -top-4 -right-2 bg-slate-100 text-slate-900 rounded-full"
//               >
//                 <XCircle />
//               </button>
//               <Image
//                 src={imageUrl}
//                 alt="Item image"
//                 width={1000}
//                 height={667}
//                 className="w-full h-32 object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       ) : (
//         <UploadDropzone
//           endpoint={endpoint}
//           onClientUploadComplete={(res) => {
//             console.log(res);
//             const urls = res.map((item) => item.url);
//             setImageUrls(urls);
//             console.log("Upload Completed");
//           }}
//           onUploadError={(error) => {
//             toast.error("Image Upload Failed, Try Again");
//             console.log(`ERROR! ${error.message}`, error);
//           }}
//         />
//       )}

//       {/* إذا تم اختيار صورة لقصها */}
//       {src && (
//         <div>
//           <ReactCrop
//             src={imageToCrop}
//             crop={crop}
//             onChange={(newCrop) => setCrop(newCrop)} // تحديث إعدادات القص
//             onComplete={(crop) => setCompletedCrop(crop)} // عند اكتمال القص
//             minWidth={50} // الحد الأدنى للعرض
//             minHeight={50} // الحد الأدنى للطول
//             keepSelection={true} // إبقاء المستطيل مرئياً دائمًا
//             disabled={false} // يمكن تمكين أو تعطيل عملية القص
//             circularCrop={false} // منع الشكل الدائري
//           />
//           <button
//             onClick={() => {
//               if (completedCrop) {
//                 getCroppedImage(imageToCrop, completedCrop); // قص الصورة عند الضغط على الزر
//               }
//             }}
//             className="mt-4 p-2 bg-blue-500 text-white rounded"
//           >
//             حفظ الصورة المقطوعة
//           </button>
//         </div>
//       )}

//       {/* اختيار صورة جديدة لرفعها */}
//       {!src && (
//         <input type="file" onChange={handleImageChange} className="mt-4" />
//       )}
//     </div>
//   );
// }
// 
"use client";

import { UploadDropzone } from "../../lib/uploadthing";
import { Pencil, XCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import {  toast } from "react-hot-toast";

export default function MultipleImageInput({
  label,
  imageUrls ,
  setImageUrls,
  className = "col-span-full",
  endpoint = "",
}) {

  function handleImageRemove(imageIndex){
    const updatedImages = imageUrls.filter(
      ( image, index ) => index !== imageIndex );

      setImageUrls(updatedImages);
  }
  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <label
          htmlFor="course-image"
          className="block text-sm font-medium leading-6
          text-gray-900 dark:text-slate-50 mb-2"
        >
          {label}
        </label>
 
      </div>
      {imageUrls.length > 0 ? (
         <div className="grid grid-cols-1 sm:grid-cols-2
         md:grid-cols-3 lg:grid-cols-4 gap-4 ">
           {
            imageUrls.map((imageUrl, i)=>{
              return(
              <div key={i} className="relative mb-6 ">
                <button onClick={()=>handleImageRemove(i)} className="absolute -top-4 -right-2
                 bg-slate-100 text-slate-900 rounded-full  ">
                  <XCircle />
                </button>
                <Image
                src={imageUrl}
                alt="Item image"
                width={1000}
                height={667}
                className="w-full h-32 object-cover"
              />
              </div>
              )
            })
           }
         </div>
      ) : (
        <UploadDropzone
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            console.log(res)
            const urls = res.map((item)=> item.url)
            setImageUrls(urls)
            console.log(urls)
            console.log("Upload Completed");
          }}
          onUploadError={(error) => {
            // Do something with the error.
            toast.error("Image Upload Failed, Try Again")
            console.log(`ERROR! ${error.message}`, error);
         
          }}
        />
      )}
    </div>
  );
}
// "use client";
// import { UploadDropzone } from "@/lib/uploadthing";
// import { XCircle } from "lucide-react";
// import Image from "next/image";
// import React, { useState, useCallback } from "react";
// import Cropper from "react-easy-crop";
// import getCroppedImg from "../../lib/cropImage";
// import { Slider, Button } from "@mui/material";
// import { toast } from "react-hot-toast";

// export default function MultipleImageInput({
//   label,
//   imageUrls,
//   setImageUrls,
//   className = "col-span-full",
//   endpoint = "",
// }) {
//   const [imageSrc, setImageSrc] = useState(null);
//   const [crop, setCrop] = useState({ x: 0, y: 0 });
//   const [zoom, setZoom] = useState(1);
//   const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
//   const [showCropper, setShowCropper] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const onCropComplete = useCallback((_, croppedAreaPixels) => {
//     setCroppedAreaPixels(croppedAreaPixels);
//   }, []);

//   const handleImageUpload = (res) => {
//     const urls = res.map((item) => item.url);
//     setImageUrls(urls);
//     setImageSrc(urls[0]);
//     setShowCropper(true);
//   };

//   const handleCropConfirm = async () => {
//     if (!imageSrc || !croppedAreaPixels) return;
//     const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
//     const updatedImages = [...imageUrls];
//     updatedImages[currentIndex] = croppedImage;
//     setImageUrls(updatedImages);

//     if (currentIndex < imageUrls.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//       setImageSrc(imageUrls[currentIndex + 1]);
//     } else {
//       setShowCropper(false);
//       setImageSrc(null);
//     }
//   };

//   function handleImageRemove(imageIndex) {
//     const updatedImages = imageUrls.filter((_, index) => index !== imageIndex);
//     setImageUrls(updatedImages);
//   }

//   return (
//     <div className={className}>
//       <div className="flex justify-between items-center mb-4">
//         <label
//           htmlFor="course-image"
//           className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2"
//         >
//           {label}
//         </label>
//       </div>

//       {imageUrls.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {imageUrls.map((imageUrl, i) => (
//             <div key={i} className="relative mb-6">
//               <button
//                 onClick={() => handleImageRemove(i)}
//                 className="absolute -top-4 -right-2 bg-slate-100 text-slate-900 rounded-full"
//               >
//                 <XCircle />
//               </button>
//               <Image
//                 src={imageUrl}
//                 alt="Item image"
//                 width={1000}
//                 height={667}
//                 className="w-full h-32 object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       ) : (
//         <UploadDropzone
//           endpoint={endpoint}
//           onClientUploadComplete={handleImageUpload}
//           onUploadError={(error) => {
//             toast.error("Image Upload Failed, Try Again");
//             console.log(`ERROR! ${error.message}`, error);
//           }}
//         />
//       )}

//       {showCropper && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
//           <div className="bg-white p-4 rounded-lg flex flex-col items-center">
//             <Cropper
//               image={imageSrc}
//               crop={crop}
//               zoom={zoom}
//               onCropChange={setCrop}
//               onZoomChange={setZoom}
//               onCropComplete={onCropComplete}
//             />
//             <Slider value={zoom} min={1} max={3} step={0.1} onChange={(e, z) => setZoom(z)} />
//             <div className="flex gap-4 mt-4">
//               <Button variant="contained" color="primary" onClick={handleCropConfirm}>
//                 حفظ
//               </Button>
//               <Button variant="outlined" color="secondary" onClick={() => setShowCropper(false)}>
//                 إلغاء
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



// "use client";
// import { UploadDropzone } from "@/lib/uploadthing";
// import { XCircle } from "lucide-react";
// import Image from "next/image";
// import React, { useState, useCallback } from "react";
// import Cropper from "react-easy-crop";
// import getCroppedImg from "../../lib/cropImage";
// import { Slider, Button } from "@mui/material";
// import { toast } from "react-hot-toast";

// export default function MultipleImageInput({
//   label,
//   imageUrls,
//   setImageUrls,
//   className = "col-span-full",
//   endpoint = "",
// }) {
//   const [imageSrc, setImageSrc] = useState(null);
//   const [crop, setCrop] = useState({ x: 0, y: 0 });
//   const [zoom, setZoom] = useState(1);
//   const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
//   const [showCropper, setShowCropper] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [aspect, setAspect] = useState(4 / 3);

//   const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
//     setCroppedAreaPixels(croppedAreaPixels);
//   }, []);

//   const handleImageUpload = (res) => {
//     const urls = res.map((item) => item.url);
//     setImageUrls(urls);
//     setImageSrc(urls[0]);
//     setShowCropper(true);
//   };

//   const handleCropConfirm = async () => {
//     if (!imageSrc || !croppedAreaPixels) return;
//     try {
//       const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
//       const updatedImages = [...imageUrls];
//       updatedImages[currentIndex] = croppedImage;
//       setImageUrls(updatedImages);

//       if (currentIndex < imageUrls.length - 1) {
//         setCurrentIndex(currentIndex + 1);
//         setImageSrc(imageUrls[currentIndex + 1]);
//       } else {
//         setShowCropper(false);
//         setImageSrc(null);
//       }
//     } catch (error) {
//       toast.error("Failed to crop image");
//       console.error(error);
//     }
//   };

//   const handleImageRemove = (imageIndex) => {
//     const updatedImages = imageUrls.filter((_, index) => index !== imageIndex);
//     setImageUrls(updatedImages);
//   };

//   return (
//     <div className={className}>
//       <div className="flex justify-between items-center mb-4">
//         <label htmlFor="course-image" className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2">
//           {label}
//         </label>
//       </div>

//       {imageUrls.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {imageUrls.map((imageUrl, i) => (
//             <div key={i} className="relative mb-6">
//               <button onClick={() => handleImageRemove(i)} className="absolute -top-4 -right-2 bg-slate-100 text-slate-900 rounded-full">
//                 <XCircle />
//               </button>
//               <Image src={imageUrl} alt="Item image" width={1000} height={667} className="w-full h-32 object-cover" />
//             </div>
//           ))}
//         </div>
//       ) : (
//         <UploadDropzone
//           endpoint={endpoint}
//           onClientUploadComplete={handleImageUpload}
//           onUploadError={(error) => {
//             toast.error("Image Upload Failed, Try Again");
//             console.error(`ERROR! ${error.message}`, error);
//           }}
//         />
//       )}

//       {showCropper && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
//           <div className="bg-white p-4 rounded-lg flex flex-col items-center">
//             <Cropper
//               image={imageSrc}
//               crop={crop}
//               zoom={zoom}
//               aspect={aspect}
//               onCropChange={setCrop}
//               onZoomChange={setZoom}
//               onCropComplete={onCropComplete}
//             />
//             <Slider value={zoom} min={1} max={3} step={0.1} onChange={(e, z) => setZoom(z)} />
//             <Slider value={aspect} min={1 / 1} max={16 / 9} step={0.1} onChange={(e, a) => setAspect(a)} />
//             <div className="flex gap-4 mt-4">
//               <Button variant="contained" color="primary" onClick={handleCropConfirm}>
//                 حفظ
//               </Button>
//               <Button variant="outlined" color="secondary" onClick={() => setShowCropper(false)}>
//                 إلغاء
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// "use client";
// import { UploadDropzone } from "@/lib/uploadthing";
// import { XCircle } from "lucide-react";
// import Image from "next/image";
// import React, { useState, useCallback } from "react";
// import Cropper from "react-easy-crop";
// import getCroppedImg from "../../lib/cropImage";
// import { Slider, Button } from "@mui/material";
// import { toast } from "react-hot-toast";

// export default function MultipleImageInput({
//   label,
//   imageUrls,
//   setImageUrls,
//   className = "col-span-full",
//   endpoint = "",
// }) {
//   const [imageSrc, setImageSrc] = useState(null);
//   const [crop, setCrop] = useState({ x: 0, y: 0 });
//   const [zoom, setZoom] = useState(1);
//   const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
//   const [showCropper, setShowCropper] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
//     setCroppedAreaPixels(croppedAreaPixels);
//   }, []);

//   const handleImageUpload = (res) => {
//     const urls = res.map((item) => item.url);
//     setImageUrls(urls);
//     setImageSrc(urls[0]);
//     setShowCropper(true);
//   };

//   const handleCropConfirm = async () => {
//     if (!imageSrc || !croppedAreaPixels) return;
//     try {
//       const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
//       const updatedImages = [...imageUrls];
//       updatedImages[currentIndex] = croppedImage;
//       setImageUrls(updatedImages);

//       if (currentIndex < imageUrls.length - 1) {
//         setCurrentIndex(currentIndex + 1);
//         setImageSrc(imageUrls[currentIndex + 1]);
//       } else {
//         setShowCropper(false);
//         setImageSrc(null);
//       }
//     } catch (error) {
//       toast.error("Failed to crop image");
//       console.error(error);
//     }
//   };

//   const handleImageRemove = (imageIndex) => {
//     const updatedImages = imageUrls.filter((_, index) => index !== imageIndex);
//     setImageUrls(updatedImages);
//   };

//   return (
//     <div className={className}>
//       <div className="flex justify-between items-center mb-4">
//         <label
//           htmlFor="course-image"
//           className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2"
//         >
//           {label}
//         </label>
//       </div>

//       {imageUrls.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {imageUrls.map((imageUrl, i) => (
//             <div key={i} className="relative mb-6">
//               <button
//                 onClick={() => handleImageRemove(i)}
//                 className="absolute -top-4 -right-2 bg-slate-100 text-slate-900 rounded-full"
//               >
//                 <XCircle />
//               </button>
//               <Image
//                 src={imageUrl}
//                 alt="Item image"
//                 width={1000}
//                 height={667}
//                 className="w-full h-32 object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       ) : (
//         <UploadDropzone
//           endpoint={endpoint}
//           onClientUploadComplete={handleImageUpload}
//           onUploadError={(error) => {
//             toast.error("Image Upload Failed, Try Again");
//             console.error(`ERROR! ${error.message}`, error);
//           }}
//         />
//       )}

//       {showCropper && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
//           <div className="bg-white p-4 rounded-lg flex flex-col items-center">
//             <Cropper
//               image={imageSrc}
//               crop={crop}
//               zoom={zoom}
//               onCropChange={setCrop}
//               onZoomChange={setZoom}
//               onCropComplete={onCropComplete}
//             />
//             <Slider
//               value={zoom}
//               min={1}
//               max={3}
//               step={0.1}
//               onChange={(e, z) => setZoom(z)}
//             />
//             <div className="flex gap-4 mt-4">
//               <Button variant="contained" color="primary" onClick={handleCropConfirm}>
//                 حفظ
//               </Button>
//               <Button variant="outlined" color="secondary" onClick={() => setShowCropper(false)}>
//                 إلغاء
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }