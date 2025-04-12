// "use client"
// import React, { useState } from 'react'
// import TextInput from "../../Forminputs/TextInput";
// import ToggleInput from "../../Forminputs/ToggleInput";
// import {useForm} from "react-hook-form";
// import NavButtons from '../NavButtons'
// import { Circle, Truck } from 'lucide-react';
// import { useDispatch , useSelector  } from 'react-redux';
// import { setCurrentStep, updateCheckoutFormData } from '@/redux/slices/checkoutSlice';

// export default function ShippingDetailsForm() {
//   const dispatch = useDispatch()
//   const currentStep = useSelector ((store)=> store.checkout.currentStep);
//   const existingFormData = useSelector((store) => store.checkout.checkoutFormData)


//     const {register, reset,watch, handleSubmit, 
//         formState:{errors}} =useForm({
//           defaultValues:{
//             ...existingFormData
//           }
//         });
//     const initialShippingCost =existingFormData.shippingCost || "" ;
//     const [shippingCost,setShippingCost]=useState(initialShippingCost);
//     console.log(shippingCost)

//     async function processData(data){
//             data.shippingCost= shippingCost
//             console.log(data)
//                // Update the checkout Data
//             dispatch(updateCheckoutFormData(data));
//            // Update the Current Step
//            dispatch(setCurrentStep(currentStep + 1));
//         }
//   return (
//     <form onSubmit={handleSubmit(processData)}>
//           <h2 className="text-x1  font-semibold mb-4
//            dark:text-lime-400">Shipping Details</h2>
//                   <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//                 <TextInput lable="Street Address"
//                     name="streetAddress"
//                     register={register}
//                     errors={errors} 
//                     className="w-full" />

//                <TextInput lable="City"
//                     name="city"
//                     register={register}
//                     errors={errors} 
//                     className="w-full" />

//               <TextInput lable="Country"
//                     name="country"
//                     register={register}
//                     errors={errors} 
//                     className="w-full" />

//               <TextInput lable="District"
//                     name="district"
//                     register={register}
//                     errors={errors} 
//                     className="w-full" />
//                     {/*Shipping Cost */}
      
//              <div className="col-span-full">
//              <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Shipping Cost</h3>
//               <ul className="grid w-full gap-6 md:grid-cols-2">
//                    <li>
//         <input 
//         type="radio" id="hosting-small"
//          name="hosting" value="8"
//           className="hidden peer" required
//           onChange={(e) => 
//           setShippingCost(e.target.value)} />
//         <label for="hosting-small" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
//           {/*Design */}
//             <div className="flex gap-2 items-center">
//               <Truck className='w-8 h-8 ms-3 flex-shrink-0' />
//               <div className="">
//                 <p>UPS</p>
//                 <p>Delivery Cost: $8</p>
//               </div>
//             </div>
//            <Circle className='w-5 h-5 ms-3 flex-shrink-0'/>
//         </label>
//     </li>
//     <li>
//         <input
//         type="radio" id="hosting-big"
//          name="hosting" value="20"
//          className="hidden peer"
//           onChange={(e) => 
//           setShippingCost(e.target.value)} />
//         <label for="hosting-big" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
//         <div className="flex gap-2 items-center">
//               <Truck className='w-8 h-8 ms-3 flex-shrink-0' />
//               <div className="">
//                 <p>UPS</p>
//                 <p>Delivery Cost: $20</p>
//               </div>
//             </div>
//            <Circle className='w-5 h-5 ms-3 flex-shrink-0'/>
//         </label>
//     </li>
// </ul>
//              </div>

//             </div>
   
//         <NavButtons />
//     </form>
//   )
// }

// "use client";

// import React, { useState } from "react";
// import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import TextInput from "../../Forminputs/TextInput";
// import ToggleInput from "../../Forminputs/ToggleInput";
// import { useForm } from "react-hook-form";
// import NavButtons from "../NavButtons";
// import { Circle, Truck } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import { setCurrentStep, updateCheckoutFormData } from "@/redux/slices/checkoutSlice";

// // Fix marker icon issue in Leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
//   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//   shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
// });

// function LocationPicker({ onLocationSelect }) {
//   const [position, setPosition] = useState(null);

//   useMapEvents({
//     click(e) {
//       setPosition(e.latlng);
//       onLocationSelect(e.latlng); // Pass the selected location to the parent
//     },
//   });

//   return position ? <Marker position={position} /> : null;
// }

// export default function ShippingDetailsForm() {
//   const dispatch = useDispatch();
//   const currentStep = useSelector((store) => store.checkout.currentStep);
//   const existingFormData = useSelector((store) => store.checkout.checkoutFormData);

//   const {
//     register,
//     reset,
//     watch,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       ...existingFormData,
//     },
//   });

//   const initialShippingCost = existingFormData.shippingCost || "";
//   const [shippingCost, setShippingCost] = useState(initialShippingCost);
//   const [location, setLocation] = useState(null);

//   async function processData(data) {
//     data.shippingCost = shippingCost;
//     data.location = location; // Add location to the form data
//     console.log(data);
//     // Update the checkout Data
//     dispatch(updateCheckoutFormData(data));
//     // Update the Current Step
//     dispatch(setCurrentStep(currentStep + 1));
//   }

//   return (
//     <form onSubmit={handleSubmit(processData)}>
//       <h2 className="text-x1 font-semibold mb-4 dark:text-lime-400">Shipping Details</h2>
//       <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//         <TextInput
//           lable="Street Address"
//           name="streetAddress"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         <TextInput
//           lable="City"
//           name="city"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         <TextInput
//           lable="Country"
//           name="country"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         <TextInput
//           lable="District"
//           name="district"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         {/* Location Picker */}
//         <div className="col-span-full">
//           <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Select Your Location</h3>
//           <MapContainer
//             center={[51.505, -0.09]}
//             zoom={13}
//             style={{ height: "300px", width: "100%" }}
//           >
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             />
//             <LocationPicker onLocationSelect={(latlng) => setLocation(latlng)} />
//           </MapContainer>
//           {location && (
//             <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
//               Selected Location: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
//             </p>
//           )}
//         </div>

//         {/* Shipping Cost */}
//         <div className="col-span-full">
//           <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Shipping Cost</h3>
//           <ul className="grid w-full gap-6 md:grid-cols-2">
//             <li>
//               <input
//                 type="radio"
//                 id="hosting-small"
//                 name="hosting"
//                 value="8"
//                 className="hidden peer"
//                 required
//                 onChange={(e) => setShippingCost(e.target.value)}
//               />
//               <label
//                 htmlFor="hosting-small"
//                 className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
//               >
//                 <div className="flex gap-2 items-center">
//                   <Truck className="w-8 h-8 ms-3 flex-shrink-0" />
//                   <div className="">
//                     <p>UPS</p>
//                     <p>Delivery Cost: $8</p>
//                   </div>
//                 </div>
//                 <Circle className="w-5 h-5 ms-3 flex-shrink-0" />
//               </label>
//             </li>
//             <li>
//               <input
//                 type="radio"
//                 id="hosting-big"
//                 name="hosting"
//                 value="20"
//                 className="hidden peer"
//                 onChange={(e) => setShippingCost(e.target.value)}
//               />
//               <label
//                 htmlFor="hosting-big"
//                 className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
//               >
//                 <div className="flex gap-2 items-center">
//                   <Truck className="w-8 h-8 ms-3 flex-shrink-0" />
//                   <div className="">
//                     <p>UPS</p>
//                     <p>Delivery Cost: $20</p>
//                   </div>
//                 </div>
//                 <Circle className="w-5 h-5 ms-3 flex-shrink-0" />
//               </label>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <NavButtons />
//     </form>
//   );
// }
    



// "use client";

// import React, { useState } from "react";
// import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import TextInput from "../../Forminputs/TextInput";
// import { useForm } from "react-hook-form";
// import NavButtons from "../NavButtons";
// import { Circle, Truck } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import { setCurrentStep, updateCheckoutFormData } from "@/redux/slices/checkoutSlice";

// // Fix marker icon issue in Leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
//   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//   shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
// });

// function LocationPicker({ onLocationSelect }) {
//   const [position, setPosition] = useState(null);

//   useMapEvents({
//     click(e) {
//       setPosition(e.latlng);
//       onLocationSelect(e.latlng); // Pass the selected location to the parent
//     },
//   });

//   return position ? <Marker position={position} /> : null;
// }

// export default function ShippingDetailsForm() {
//   const dispatch = useDispatch();
//   const currentStep = useSelector((store) => store.checkout.currentStep);
//   const existingFormData = useSelector((store) => store.checkout.checkoutFormData);

//   const {
//     register,
//     handleSubmit,
//     setValue, // Use setValue to programmatically set the form fields
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       ...existingFormData,
//     },
//   });

//   const initialShippingCost = existingFormData.shippingCost || "";
//   const [shippingCost, setShippingCost] = useState(initialShippingCost);
//   const [location, setLocation] = useState(null);

//   // Function to fetch the address based on latitude and longitude
//   async function fetchAddress(lat, lng) {
//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`
//       );
//       const data = await response.json();

//       // Automatically fill the form fields with the retrieved address
//       setValue("streetAddress", data.address.road || "");
//       setValue("city", data.address.city || data.address.town || "");
//       setValue("country", data.address.country || "YE"); // Default to Yemen if not available
//       setValue("district", data.address.state || "");

//     } catch (error) {
//       console.error("Failed to fetch address:", error);
//     }
//   }

//   async function processData(data) {
//     data.shippingCost = shippingCost;
//     data.location = location; // Include the selected location in the form data
//     console.log(data);
//     dispatch(updateCheckoutFormData(data));
//     dispatch(setCurrentStep(currentStep + 1));
//   }

//   return (
//     <form onSubmit={handleSubmit(processData)}>
//       <h2 className="text-x1 font-semibold mb-4 dark:text-lime-400">Shipping Details</h2>
//       <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//         <TextInput
//           lable="Street Address"
//           name="streetAddress"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         <TextInput
//           lable="City"
//           name="city"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         <TextInput
//           lable="Country"
//           name="country"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         <TextInput
//           lable="District"
//           name="district"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         {/* Location Picker */}
//         <div className="col-span-full">
//           <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Select Your Location</h3>
//           <MapContainer
//             center={[15.5527, 48.5164]} // Centered on Yemen
//             zoom={6}
//             style={{ height: "300px", width: "100%" }}
//           >
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             />
//             <LocationPicker
//               onLocationSelect={(latlng) => {
//                 setLocation(latlng);
//                 fetchAddress(latlng.lat, latlng.lng); // Fetch address and update form fields
//               }}
//             />
//           </MapContainer>
//           {location && (
//             <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
//               Selected Location: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
//             </p>
//           )}
//         </div>

//         {/* Shipping Cost */}
//         <div className="col-span-full">
//           <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Shipping Cost</h3>
//           <ul className="grid w-full gap-6 md:grid-cols-2">
//             <li>
//               <input
//                 type="radio"
//                 id="hosting-small"
//                 name="hosting"
//                 value="8"
//                 className="hidden peer"
//                 required
//                 onChange={(e) => setShippingCost(e.target.value)}
//               />
//               <label
//                 htmlFor="hosting-small"
//                 className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
//               >
//                 <div className="flex gap-2 items-center">
//                   <Truck className="w-8 h-8 ms-3 flex-shrink-0" />
//                   <div>
//                     <p>UPS</p>
//                     <p>Delivery Cost: $8</p>
//                   </div>
//                 </div>
//                 <Circle className="w-5 h-5 ms-3 flex-shrink-0" />
//               </label>
//             </li>
//             <li>
//               <input
//                 type="radio"
//                 id="hosting-big"
//                 name="hosting"
//                 value="20"
//                 className="hidden peer"
//                 onChange={(e) => setShippingCost(e.target.value)}
//               />
//               <label
//                 htmlFor="hosting-big"
//                 className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
//               >
//                 <div className="flex gap-2 items-center">
//                   <Truck className="w-8 h-8 ms-3 flex-shrink-0" />
//                   <div>
//                     <p>UPS</p>
//                     <p>Delivery Cost: $20</p>
//                   </div>
//                 </div>
//                 <Circle className="w-5 h-5 ms-3 flex-shrink-0" />
//               </label>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <NavButtons />
//     </form>
//   );
// }
// "use client";

// import React, { useState } from "react";
// import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import TextInput from "../../Forminputs/TextInput";
// import { useForm } from "react-hook-form";
// import NavButtons from "../NavButtons";
// import { Circle, Truck } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import { setCurrentStep, updateCheckoutFormData } from "@/redux/slices/checkoutSlice";

// // Fix marker icon issue in Leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
//   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//   shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
// });

// function LocationPicker({ onLocationSelect }) {
//   const [position, setPosition] = useState(null);

//   useMapEvents({
//     click(e) {
//       setPosition(e.latlng);
//       onLocationSelect(e.latlng); // Pass the selected location to the parent
//     },
//   });

//   return position ? <Marker position={position} /> : null;
// }

// export default function ShippingDetailsForm() {
//   const dispatch = useDispatch();
//   const currentStep = useSelector((store) => store.checkout.currentStep);
//   const existingFormData = useSelector((store) => store.checkout.checkoutFormData);

//   const {
//     register,
//     handleSubmit,
//     setValue, // Use setValue to programmatically set the form fields
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       ...existingFormData,
//     },
//   });

//   const initialShippingCost = existingFormData.shippingCost || "";
//   const [shippingCost, setShippingCost] = useState(initialShippingCost);
//   const [location, setLocation] = useState(null);

//   // Function to fetch the address based on latitude and longitude
//   async function fetchAddress(lat, lng) {
//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`
//       );
//       const data = await response.json();

//       // Automatically fill the form fields with the retrieved address
//       setValue("streetAddress", data.address.road || "");
//       setValue("city", data.address.city || data.address.town || "");
//       setValue("country", data.address.country || "YE"); // Default to Yemen if not available
//       setValue("district", data.address.state || "");

//     } catch (error) {
//       console.error("Failed to fetch address:", error);
//     }
//   }

//   async function processData(data) {
//     data.shippingCost = shippingCost;
//     data.location = location; // Include the selected location in the form data
//     console.log(data);
//     dispatch(updateCheckoutFormData(data));
//     dispatch(setCurrentStep(currentStep + 1));
//   }

//   return (
//     <form onSubmit={handleSubmit(processData)}>
//       <h2 className="text-x1 font-semibold mb-4 dark:text-lime-400">Shipping Details</h2>
//       <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//         <TextInput
//           lable="Street Address"
//           name="streetAddress"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         <TextInput
//           lable="City"
//           name="city"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         <TextInput
//           lable="Country"
//           name="country"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         <TextInput
//           lable="District"
//           name="district"
//           register={register}
//           errors={errors}
//           className="w-full"
//         />

//         {/* Location Picker */}
//         <div className="col-span-full">
//           <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Select Your Location</h3>
//           <MapContainer
//             center={[15.5527, 48.5164]} // Centered on Yemen
//             zoom={6}
//             style={{ height: "300px", width: "100%" }}
//           >
//             {/* Satellite TileLayer from Esri */}
//             <TileLayer
//               url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
//               attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
//             />
//             <LocationPicker
//               onLocationSelect={(latlng) => {
//                 setLocation(latlng);
//                 fetchAddress(latlng.lat, latlng.lng); // Fetch address and update form fields
//               }}
//             />
//           </MapContainer>
//           {location && (
//             <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
//               Selected Location: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
//             </p>
//           )}
//         </div>

//         {/* Shipping Cost */}
//         <div className="col-span-full">
//           <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Shipping Cost</h3>
//           <ul className="grid w-full gap-6 md:grid-cols-2">
//             <li>
//               <input
//                 type="radio"
//                 id="hosting-small"
//                 name="hosting"
//                 value="8"
//                 className="hidden peer"
//                 required
//                 onChange={(e) => setShippingCost(e.target.value)}
//               />
//               <label
//                 htmlFor="hosting-small"
//                 className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
//               >
//                 <div className="flex gap-2 items-center">
//                   <Truck className="w-8 h-8 ms-3 flex-shrink-0" />
//                   <div>
//                     <p>UPS</p>
//                     <p>Delivery Cost: $8</p>
//                   </div>
//                 </div>
//                 <Circle className="w-5 h-5 ms-3 flex-shrink-0" />
//               </label>
//             </li>
//             <li>
//               <input
//                 type="radio"
//                 id="hosting-big"
//                 name="hosting"
//                 value="20"
//                 className="hidden peer"
//                 onChange={(e) => setShippingCost(e.target.value)}
//               />
//               <label
//                 htmlFor="hosting-big"
//                 className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
//               >
//                 <div className="flex gap-2 items-center">
//                   <Truck className="w-8 h-8 ms-3 flex-shrink-0" />
//                   <div>
//                     <p>UPS</p>
//                     <p>Delivery Cost: $20</p>
//                   </div>
//                 </div>
//                 <Circle className="w-5 h-5 ms-3 flex-shrink-0" />
//               </label>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <NavButtons />
//     </form>
//   );
// }


// ظظظالنهائي 
"use client";

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import TextInput from "../../Forminputs/TextInput";
import { useForm } from "react-hook-form";
import NavButtons from "../NavButtons";
import { Circle, Truck } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStep, updateCheckoutFormData } from "@/redux/slices/checkoutSlice";

// Fix marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function LocationPicker({ onLocationSelect }) {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      onLocationSelect(e.latlng); // Pass the selected location to the parent
    },
  });

  return position ? <Marker position={position} /> : null;
}

export default function ShippingDetailsForm() {
  const dispatch = useDispatch();
  const currentStep = useSelector((store) => store.checkout.currentStep);
  const existingFormData = useSelector((store) => store.checkout.checkoutFormData);

  const {
    register,
    handleSubmit,
    setValue, // Use setValue to programmatically set the form fields
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...existingFormData,
    },
  });

  const initialShippingCost = existingFormData.shippingCost || "";
  const [shippingCost, setShippingCost] = useState(initialShippingCost);
  const [location, setLocation] = useState(null);
  const [isSatellite, setIsSatellite] = useState(true); // State to toggle between Satellite and Map view

  // Function to fetch the address based on latitude and longitude
  async function fetchAddress(lat, lng) {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`
      );
      const data = await response.json();

      // Automatically fill the form fields with the retrieved address
      setValue("streetAddress", data.address.road || "");
      setValue("city", data.address.city || data.address.town || "");
      setValue("country", data.address.country || "YE"); // Default to Yemen if not available
      setValue("district", data.address.state || "");

    } catch (error) {
      console.error("Failed to fetch address:", error);
    }
  }

  async function processData(data) {
    data.shippingCost = shippingCost;
    data.location = location; // Include the selected location in the form data
    console.log(data);
    dispatch(updateCheckoutFormData(data));
    dispatch(setCurrentStep(currentStep + 1));
  }

  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className="text-x1 font-semibold mb-4 dark:text-lime-400">Shipping Details</h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          lable="Street Address"
          name="streetAddress"
          register={register}
          errors={errors}
          className="w-full"
        />

        <TextInput
          lable="City"
          name="city"
          register={register}
          errors={errors}
          className="w-full"
        />

        <TextInput
          lable="Country"
          name="country"
          register={register}
          errors={errors}
          className="w-full"
        />

        <TextInput
          lable="District"
          name="district"
          register={register}
          errors={errors}
          className="w-full"
        />
         <TextInput
          lable="Site description"
          name="description"
          register={register}
          errors={errors}
          className="w-full"
        />

        {/* Location Picker */}
        <div className="col-span-full">
          <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Select Your Location</h3>
          <MapContainer
            center={[15.5527, 48.5164]} // Centered on Yemen
            zoom={6}
            style={{ height: "300px", width: "100%" }}
          >
            {/* Toggle between Satellite and Map views */}
            {isSatellite ? (
              <TileLayer
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
              />
            ) : (
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
            )}
            <LocationPicker
              onLocationSelect={(latlng) => {
                setLocation(latlng);
                fetchAddress(latlng.lat, latlng.lng); // Fetch address and update form fields
              }}
            />
          </MapContainer>
          {location && (
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Selected Location: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
            </p>
          )}
        </div>

        {/* Toggle Button for Satellite/Map View */}
        <div className="col-span-full mt-4">
          <button
            type="button"
            className="px-4 py-2 bg-indigo-500 text-white rounded-md"
            onClick={() => setIsSatellite(!isSatellite)}
          >
            Toggle to {isSatellite ? "Map" : "Satellite"} View
          </button>
        </div>

        {/* Shipping Cost */}
        <div className="col-span-full">
          <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Shipping Cost</h3>
          <ul className="grid w-full gap-6 md:grid-cols-2">
            <li>
              <input
                type="radio"
                id="hosting-small"
                name="hosting"
                value="8"
                className="hidden peer"
                required
                onChange={(e) => setShippingCost(e.target.value)}
              />
              <label
                htmlFor="hosting-small"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-indigo-500 peer-checked:border-indigo-600 peer-checked:text-indigo-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="flex gap-2 items-center">
                  <Truck className="w-8 h-8 ms-3 flex-shrink-0" />
                  <div>
                    <p>UPS</p>
                    <p>Delivery Cost: $8</p>
                  </div>
                </div>
                <Circle className="w-5 h-5 ms-3 flex-shrink-0" />
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="hosting-big"
                name="hosting"
                value="20"
                className="hidden peer"
                onChange={(e) => setShippingCost(e.target.value)}
              />
              <label
                htmlFor="hosting-big"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="flex gap-2 items-center">
                  <Truck className="w-8 h-8 ms-3 flex-shrink-0" />
                  <div>
                    <p>UPS</p>
                    <p>Delivery Cost: $20</p>
                  </div>
                </div>
                <Circle className="w-5 h-5 ms-3 flex-shrink-0" />
              </label>
            </li>
          </ul>
        </div>
      </div>

      <NavButtons />
    </form>
  );
}
