// // "use client";

// // import React, { useState } from 'react';
// // import { FiMapPin, FiEdit, FiTrash2, FiStar } from 'react-icons/fi';

// // const AddressesPage = () => {
// //   const [addresses, setAddresses] = useState([
// //     {
// //       id: 1,
// //       title: "العنوان الرئيسي",
// //       address: "123 شارع الملكة رانيا، عمان، الأردن",
// //       isPrimary: true
// //     },
// //     // ... عناوين أخرى
// //   ]);

// //   const [newAddress, setNewAddress] = useState('');
// //   const [editingId, setEditingId] = useState(null);

// //   const handleAddAddress = () => {
// //     if (newAddress.trim()) {
// //       setAddresses([...addresses, {
// //         id: Date.now(),
// //         title: "عنوان جديد",
// //         address: newAddress,
// //         isPrimary: false
// //       }]);
// //       setNewAddress('');
// //     }
// //   };

// //   const handleSetPrimary = (id) => {
// //     setAddresses(addresses.map(addr => ({
// //       ...addr,
// //       isPrimary: addr.id === id
// //     })));
// //   };

// //   return (
// //     <section dir="rtl" className="py-16 bg-white sm:py-16 lg:py-20">
// //       <div className="px-4 m-auto sm:px-6 lg:px-6 max-w-7xl">
// //         <div className="max-w-3xl mx-auto">
// //           <div className="mb-8">
// //             <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">العناوين</h1>
// //             <p className="mt-2 text-sm font-normal text-gray-600">
// //               إدارة عناوين التوصيل والعناوين السابقة
// //             </p>
// //           </div>

// //           <div className="space-y-6">
// //             <div className="flex gap-4">
// //               <input
// //                 type="text"
// //                 value={newAddress}
// //                 onChange={(e) => setNewAddress(e.target.value)}
// //                 placeholder="أضف عنوان جديد..."
// //                 className="flex-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-lime-500 focus:border-transparent"
// //               />
// //               <button 
// //                 onClick={handleAddAddress}
// //                 className="bg-lime-500 text-white px-6 py-3 rounded-lg hover:bg-lime-600 transition"
// //               >
// //                 إضافة عنوان
// //               </button>
// //             </div>

// //             {addresses.map((address) => (
// //               <div key={address.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
// //                 <div className="flex justify-between items-start mb-4">
// //                   <div className="flex items-center gap-2">
// //                     <FiMapPin className="text-lime-500" />
// //                     <h3 className="font-semibold text-gray-800 dark:text-white">
// //                       {address.title}
// //                       {address.isPrimary && (
// //                         <span className="ml-2 text-sm text-lime-500">(رئيسي)</span>
// //                       )}
// //                     </h3>
// //                   </div>
// //                   <div className="flex gap-2">
// //                     <button 
// //                       onClick={() => handleSetPrimary(address.id)}
// //                       className={`p-2 rounded-lg ${address.isPrimary ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-600'}`}
// //                     >
// //                       <FiStar className="w-5 h-5" />
// //                     </button>
// //                     <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
// //                       <FiEdit className="w-5 h-5" />
// //                     </button>
// //                     <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg">
// //                       <FiTrash2 className="w-5 h-5" />
// //                     </button>
// //                   </div>
// //                 </div>
// //                 <p className="text-gray-600 dark:text-gray-400">
// //                   {address.address}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default AddressesPage;




// "use client";

// import React, { useState } from 'react';
// import { FiMapPin, FiEdit, FiTrash2, FiStar, FiSave } from 'react-icons/fi';

// const AddressesPage = () => {
//   const [addresses, setAddresses] = useState([
//     {
//       id: 1,
//       title: "العنوان الرئيسي",
//       address: "123 شارع الملكة رانيا، عمان، الأردن",
//       isPrimary: true
//     },
//   ]);

//   const [newAddress, setNewAddress] = useState('');
//   const [editingId, setEditingId] = useState(null);
//   const [editedAddress, setEditedAddress] = useState('');

//   // إضافة عنوان جديد
//   const handleAddAddress = () => {
//     if (newAddress.trim()) {
//       setAddresses([...addresses, {
//         id: Date.now(),
//         title: "عنوان جديد",
//         address: newAddress,
//         isPrimary: false
//       }]);
//       setNewAddress('');
//     }
//   };

//   // تعيين العنوان الرئيسي
//   const handleSetPrimary = (id) => {
//     setAddresses(addresses.map(addr => ({
//       ...addr,
//       isPrimary: addr.id === id
//     })));
//   };

//   // بدء التعديل
//   const startEditing = (id, currentAddress) => {
//     setEditingId(id);
//     setEditedAddress(currentAddress);
//   };

//   // حفظ التعديلات
//   const saveEditing = (id) => {
//     setAddresses(addresses.map(addr => 
//       addr.id === id ? { ...addr, address: editedAddress } : addr
//     ));
//     setEditingId(null);
//   };

//   // حذف العنوان
//   const handleDelete = (id) => {
//     if (confirm('هل أنت متأكد من حذف هذا العنوان؟')) {
//       setAddresses(addresses.filter(addr => addr.id !== id));
//     }
//   };

//   return (
//     <section dir="rtl" className="py-16 bg-white sm:py-16 lg:py-20">
//       <div className="px-4 m-auto sm:px-6 lg:px-6 max-w-7xl">
//         <div className="max-w-3xl mx-auto">
//           <div className="mb-8">
//             <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">العناوين</h1>
//             <p className="mt-2 text-sm font-normal text-gray-600">
//               إدارة عناوين التوصيل والعناوين السابقة
//             </p>
//           </div>

//           <div className="space-y-6">
//             {/* حقل إضافة عنوان جديد */}
//             <div className="flex gap-4">
//               <input
//                 type="text"
//                 value={newAddress}
//                 onChange={(e) => setNewAddress(e.target.value)}
//                 placeholder="أضف عنوان جديد..."
//                 className="flex-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-lime-500 focus:border-transparent"
//               />
//               <button 
//                 onClick={handleAddAddress}
//                 className="bg-lime-500 text-white px-6 py-3 rounded-lg hover:bg-lime-600 transition disabled:opacity-50"
//                 disabled={!newAddress.trim()}
//               >
//                 إضافة عنوان
//               </button>
//             </div>

//             {/* قائمة العناوين */}
//             {addresses.map((address) => (
//               <div key={address.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
//                 <div className="flex justify-between items-start mb-4">
//                   <div className="flex items-center gap-2">
//                     <FiMapPin className="text-lime-500" />
//                     <h3 className="font-semibold text-gray-800 dark:text-white">
//                       {address.title}
//                       {address.isPrimary && (
//                         <span className="ml-2 text-sm text-lime-500">(رئيسي)</span>
//                       )}
//                     </h3>
//                   </div>
//                   <div className="flex gap-2">
//                     <button 
//                       onClick={() => handleSetPrimary(address.id)}
//                       className={`p-2 rounded-lg ${address.isPrimary ? 
//                         'bg-yellow-100 text-yellow-600 cursor-not-allowed' : 
//                         'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
//                       disabled={address.isPrimary}
//                     >
//                       <FiStar className="w-5 h-5" />
//                     </button>
                    
//                     {editingId === address.id ? (
//                       <button
//                         onClick={() => saveEditing(address.id)}
//                         className="p-2 text-green-600 hover:bg-green-100 rounded-lg"
//                       >
//                         <FiSave className="w-5 h-5" />
//                       </button>
//                     ) : (
//                       <button
//                         onClick={() => startEditing(address.id, address.address)}
//                         className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
//                       >
//                         <FiEdit className="w-5 h-5" />
//                       </button>
//                     )}
                    
//                     <button 
//                       onClick={() => handleDelete(address.id)}
//                       className="p-2 text-red-600 hover:bg-red-100 rounded-lg"
//                     >
//                       <FiTrash2 className="w-5 h-5" />
//                     </button>
//                   </div>
//                 </div>
                
//                 {editingId === address.id ? (
//                   <input
//                     type="text"
//                     value={editedAddress}
//                     onChange={(e) => setEditedAddress(e.target.value)}
//                     className="w-full border border-gray-300 rounded-lg p-2"
//                   />
//                 ) : (
//                   <p className="text-gray-600 dark:text-gray-400">
//                     {address.address}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AddressesPage;





// "use client";

// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { FiMapPin, FiEdit, FiTrash2, FiStar } from 'react-icons/fi';
// import { Search, Satellite, Navigation } from 'lucide-react';
// import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // إعداد أيقونات Leaflet الافتراضية
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
//   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
// });

// // حدود اليمن للخريطة
// const YEMEN_BOUNDS = [
//   [12.1110, 41.6085],
//   [18.9997, 54.5300]
// ];

// // مكوّن اختيار الموقع عبر الخريطة
// function LocationPicker({ position, onLocationSelect }) {
//   const markerRef = useRef(null);
//   useMapEvents({
//     click(e) {
//       onLocationSelect(e.latlng);
//     },
//   });

//   useEffect(() => {
//     if (position && markerRef.current) {
//       markerRef.current.setLatLng(position);
//     }
//   }, [position]);

//   return position ? <Marker ref={markerRef} position={position} /> : null;
// }

// const AddressesPage = () => {
//   // قائمة العناوين الأساسية
//   const [addresses, setAddresses] = useState([
//     {
//       id: 1,
//       title: "العنوان الرئيسي",
//       address: "123 شارع الملكة رانيا، عمان، الأردن",
//       isPrimary: true
//     },
//     // يمكن إضافة المزيد من العناوين هنا
//   ]);

//   // المتغيرات الخاصة بإضافة عنوان جديد
//   const [showNewAddressForm, setShowNewAddressForm] = useState(false);
//   const [newAddressName, setNewAddressName] = useState('');
//   const [newStreetAddress, setNewStreetAddress] = useState('');
//   const [newCity, setNewCity] = useState('');
//   const [newDistrict, setNewDistrict] = useState('');
//   const [newCountry, setNewCountry] = useState('اليمن');
//   const [location, setLocation] = useState(null);
//   const [confirmedAddress, setConfirmedAddress] = useState('');
//   const [isSatellite, setIsSatellite] = useState(true);

//   // المتغيرات الخاصة بالبحث داخل الخريطة
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [isSearching, setIsSearching] = useState(false);
//   const [showResults, setShowResults] = useState(false);
//   const mapRef = useRef(null);
//   const timeoutRef = useRef(null);

//   // الدالة الخاصة بتعيين العنوان الرئيسي (primary)
//   const handleSetPrimary = (id) => {
//     setAddresses(addresses.map(addr => ({
//       ...addr,
//       isPrimary: addr.id === id
//     })));
//   };

//   // دالة الحصول على العنوان بناءً على الإحداثيات باستخدام Nominatim
//   const fetchAddress = useCallback(async (lat, lng) => {
//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1&accept-language=ar`
//       );
//       const data = await response.json();
//       const addressParts = [
//         data.address?.street || data.address?.road || '',
//         data.address?.city || data.address?.town || '',
//         data.address?.district || '',
//         data.address?.country || 'اليمن'
//       ].filter(Boolean);

//       setConfirmedAddress(addressParts.join('، '));
//       // يمكن تحديث حقول العنوان بناءً على البيانات المسترجعة
//       setNewStreetAddress(data.address?.street || data.address?.road || '');
//       setNewCity(data.address?.city || data.address?.town || '');
//       setNewDistrict(data.address?.district || '');
//       setNewCountry(data.address?.country || 'اليمن');
//     } catch (error) {
//       console.error('Failed to fetch address:', error);
//     }
//   }, []);

//   // استخدام الموقع الحالي للمستخدم
//   const handleGPSLocation = useCallback(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           const latlng = { lat: latitude, lng: longitude };

//           if (mapRef.current) {
//             const map = mapRef.current;
//             map.flyTo([latitude, longitude], 16, { animate: true, duration: 1 });
//             // يمكن إزالة أي مؤشرات سابقة أو استخدام نفس المؤشر
//             new L.Marker([latitude, longitude], {
//               icon: L.icon({
//                 iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//                 iconSize: [35, 46],
//                 iconAnchor: [17, 46]
//               })
//             }).addTo(map);
//           }
//           setLocation(latlng);
//           fetchAddress(latitude, longitude);
//         },
//         (error) => {
//           console.error("Error getting location:", error);
//           alert("فشل في الحصول على الموقع. يرجى التأكد من تفعيل صلاحيات الموقع.");
//         }
//       );
//     } else {
//       alert("المتصفح لا يدعم خدمة تحديد الموقع الجغرافي.");
//     }
//   }, [fetchAddress]);

//   // دالة البحث مع تأخير بسيط (debounce)
//   const handleSearchInput = useCallback((query) => {
//     clearTimeout(timeoutRef.current);
//     timeoutRef.current = setTimeout(async () => {
//       if (!query.trim()) {
//         setSearchResults([]);
//         return;
//       }
//       setIsSearching(true);
//       try {
//         const response = await fetch(
//           `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=ye&bounded=1&viewbox=41.6085,12.1110,54.5300,18.9997&accept-language=ar`
//         );
//         const data = await response.json();
//         setSearchResults(data.slice(0, 5));
//         setShowResults(true);
//       } catch (error) {
//         console.error("Search error:", error);
//       } finally {
//         setIsSearching(false);
//       }
//     }, 300);
//   }, []);

//   // عند اختيار نتيجة من البحث
//   const handleSuggestionSelect = useCallback((result) => {
//     try {
//       const lat = parseFloat(result.lat);
//       const lon = parseFloat(result.lon);

//       if (mapRef.current) {
//         const map = mapRef.current;
//         map.flyTo([lat, lon], 16, { animate: true, duration: 1 });
//         new L.Marker([lat, lon], {
//           icon: L.icon({
//             iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//             iconSize: [35, 46],
//             iconAnchor: [17, 46]
//           })
//         }).addTo(map);
//       }
//       setLocation({ lat, lng: lon });
//       fetchAddress(lat, lon);
//       setSearchQuery(result.display_name);
//       setShowResults(false);
//     } catch (error) {
//       console.error("Error handling selection:", error);
//       setShowResults(false);
//     }
//   }, [fetchAddress]);

//   // تحديث حدود وإعدادات الخريطة
//   const updateMapBounds = useCallback(() => {
//     if (mapRef.current) {
//       mapRef.current.setMaxBounds(YEMEN_BOUNDS);
//       mapRef.current.setMinZoom(6);
//       mapRef.current.setMaxZoom(18);
//     }
//   }, []);

//   // عند تحميل الخريطة
//   useEffect(() => {
//     if (mapRef.current) {
//       updateMapBounds();
//     }
//     return () => clearTimeout(timeoutRef.current);
//   }, [updateMapBounds]);

//   // دالة إضافة العنوان الجديد إلى القائمة
//   const handleAddNewAddress = () => {
//     if (!location) {
//       alert('الرجاء تحديد الموقع على الخريطة');
//       return;
//     }
//     const fullAddress = `${newAddressName || 'عنوان جديد'} - ${newStreetAddress}, ${newCity}, ${newDistrict}, ${newCountry}`;
//     const newEntry = {
//       id: Date.now(),
//       title: newAddressName || 'عنوان جديد',
//       address: fullAddress,
//       isPrimary: false,
//       // يمكن إضافة بيانات الموقع إذا لزم الأمر
//       lat: location.lat,
//       lng: location.lng
//     };
//     setAddresses([...addresses, newEntry]);
//     // إعادة تهيئة النموذج
//     setNewAddressName('');
//     setNewStreetAddress('');
//     setNewCity('');
//     setNewDistrict('');
//     setNewCountry('اليمن');
//     setLocation(null);
//     setConfirmedAddress('');
//     setShowNewAddressForm(false);
//     alert('تم حفظ العنوان بنجاح!');
//   };

//   return (
//     <section dir="rtl" className="py-16 bg-white sm:py-16 lg:py-20">
//       <div className="px-4 m-auto sm:px-6 lg:px-6 max-w-7xl">
//         <div className="max-w-3xl mx-auto">
//           {/* رأس الصفحة */}
//           <div className="mb-8">
//             <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">العناوين</h1>
//             <p className="mt-2 text-sm font-normal text-gray-600">
//               إدارة عناوين التوصيل والعناوين السابقة
//             </p>
//           </div>

//           {/* عرض قائمة العناوين */}
//           <div className="space-y-6">
//             {addresses.map((address) => (
//               <div key={address.id} className="bg-white rounded-xl shadow-md p-6 border">
//                 <div className="flex justify-between items-start mb-4">
//                   <div className="flex items-center gap-2">
//                     <FiMapPin className="text-lime-500" />
//                     <h3 className="font-semibold text-gray-800">
//                       {address.title}
//                       {address.isPrimary && (
//                         <span className="ml-2 text-sm text-lime-500">(رئيسي)</span>
//                       )}
//                     </h3>
//                   </div>
//                   <div className="flex gap-2">
//                     <button 
//                       onClick={() => handleSetPrimary(address.id)}
//                       className={`p-2 rounded-lg ${address.isPrimary ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-600'}`}
//                     >
//                       <FiStar className="w-5 h-5" />
//                     </button>
//                     <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
//                       <FiEdit className="w-5 h-5" />
//                     </button>
//                     <button 
//                       onClick={() => setAddresses(addresses.filter(addr => addr.id !== address.id))}
//                       className="p-2 text-red-600 hover:bg-red-100 rounded-lg"
//                     >
//                       <FiTrash2 className="w-5 h-5" />
//                     </button>
//                   </div>
//                 </div>
//                 <p className="text-gray-600">
//                   {address.address}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* زر عرض/إخفاء نموذج إضافة عنوان جديد */}
//           <button
//             type="button"
//             onClick={() => setShowNewAddressForm(true)}
//             className="mt-8 w-full p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors"
//           >
//             + إضافة عنوان جديد
//           </button>

//           {/* نموذج إضافة عنوان جديد مع الخريطة */}
//           {showNewAddressForm && (
//             <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-md">
//               <h2 className="text-xl font-bold text-gray-900 mb-4">إضافة عنوان جديد</h2>
//               <div className="space-y-4">
//                 <input
//                   type="text"
//                   value={newAddressName}
//                   onChange={(e) => setNewAddressName(e.target.value)}
//                   placeholder="اسم العنوان (مثلاً: المنزل أو العمل)"
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500"
//                 />
//                 <input
//                   type="text"
//                   value={newStreetAddress}
//                   onChange={(e) => setNewStreetAddress(e.target.value)}
//                   placeholder="العنوان التفصيلي"
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500"
//                 />
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <input
//                     type="text"
//                     value={newCity}
//                     onChange={(e) => setNewCity(e.target.value)}
//                     placeholder="المدينة"
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500"
//                   />
//                   <input
//                     type="text"
//                     value={newDistrict}
//                     onChange={(e) => setNewDistrict(e.target.value)}
//                     placeholder="المحافظة"
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500"
//                   />
//                   <input
//                     type="text"
//                     value={newCountry}
//                     onChange={(e) => setNewCountry(e.target.value)}
//                     placeholder="الدولة"
//                     readOnly
//                     className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
//                   />
//                 </div>
//               </div>

//               {/* قسم الخريطة والبحث عن الموقع */}
//               <div className="mt-6 space-y-4">
//                 <div className="flex items-center justify-between flex-wrap gap-4">
//                   <h3 className="text-xl font-semibold flex items-center gap-2">
//                     <FiMapPin className="w-6 h-6" />
//                     تحديد الموقع على الخريطة
//                   </h3>
//                   <div className="relative flex-1 max-w-xl">
//                     <input
//                       type="text"
//                       placeholder="ابحث عن موقع..."
//                       value={searchQuery}
//                       onChange={(e) => {
//                         setSearchQuery(e.target.value);
//                         handleSearchInput(e.target.value);
//                       }}
//                       className="w-full pr-4 pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       autoComplete="off"
//                       dir="rtl"
//                     />
//                     <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
//                     {isSearching && (
//                       <div className="absolute right-3 top-2.5">
//                         <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
//                       </div>
//                     )}
//                     {showResults && searchResults.length > 0 && (
//                       <div className="absolute z-[1000] w-full mt-2 bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto">
//                         {searchResults.map((result) => (
//                           <button
//                             key={result.place_id}
//                             type="button"
//                             onClick={() => handleSuggestionSelect(result)}
//                             className="w-full p-3 text-right hover:bg-gray-100 border-b"
//                           >
//                             <p className="text-sm font-medium">
//                               {result.display_name}
//                             </p>
//                           </button>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                   <div className="flex gap-2">
//                     <button
//                       type="button"
//                       onClick={() => setIsSatellite(!isSatellite)}
//                       className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
//                     >
//                       {isSatellite ? (
//                         <>
//                           <Satellite className="w-5 h-5" />
//                           عرض الأقمار الصناعية
//                         </>
//                       ) : (
//                         <>
//                           <FiMapPin className="w-5 h-5" />
//                           عرض الخريطة
//                         </>
//                       )}
//                     </button>
//                     <button
//                       type="button"
//                       onClick={handleGPSLocation}
//                       className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
//                     >
//                       <Navigation className="w-5 h-5" />
//                       استخدام الموقع الحالي
//                     </button>
//                   </div>
//                 </div>

//                 <div className="relative h-96 rounded-xl overflow-hidden border border-gray-200 shadow-lg">
//                   <MapContainer
//                     center={[15.5527, 48.5164]}
//                     zoom={6}
//                     style={{ height: '100%', width: '100%' }}
//                     className="rounded-lg"
//                     whenCreated={(mapInstance) => {
//                       mapRef.current = mapInstance;
//                       updateMapBounds();
//                     }}
//                   >
//                     {isSatellite ? (
//                       <TileLayer
//                         url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
//                         attribution="Esri"
//                         bounds={YEMEN_BOUNDS}
//                       />
//                     ) : (
//                       <TileLayer
//                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                         attribution="OpenStreetMap"
//                         bounds={YEMEN_BOUNDS}
//                       />
//                     )}
//                     <LocationPicker
//                       position={location}
//                       onLocationSelect={(latlng) => {
//                         setLocation(latlng);
//                         fetchAddress(latlng.lat, latlng.lng);
//                       }}
//                     />
//                   </MapContainer>
//                   {location && (
//                     <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md text-right">
//                       <p className="text-sm font-medium text-gray-700">
//                         العنوان المؤكد:
//                         <span className="block text-blue-600">
//                           {confirmedAddress || "جارٍ تحميل العنوان..."}
//                         </span>
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <div className="mt-6 flex gap-4">
//                 <button
//                   type="button"
//                   onClick={handleAddNewAddress}
//                   className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
//                 >
//                   حفظ العنوان
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setShowNewAddressForm(false)}
//                   className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
//                 >
//                   إلغاء
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AddressesPage;
// "use client";

// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { FiMapPin, FiEdit, FiTrash2, FiStar } from 'react-icons/fi';
// import { Search, Satellite, Navigation } from 'lucide-react';
// import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // إعداد أيقونات Leaflet الافتراضية
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
//   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
// });

// // حدود اليمن للخريطة
// const YEMEN_BOUNDS = [
//   [12.1110, 41.6085],
//   [18.9997, 54.5300]
// ];

// // مكوّن اختيار الموقع عبر الخريطة يقوم بعرض Marker بناءً على الموقع المحدد
// function LocationPicker({ position, onLocationSelect }) {
//   const markerRef = useRef(null);
//   // التقاط حدث النقر على الخريطة لتحديد الموقع
//   useMapEvents({
//     click(e) {
//       onLocationSelect(e.latlng);
//     },
//   });

//   useEffect(() => {
//     if (position && markerRef.current) {
//       markerRef.current.setLatLng(position);
//     }
//   }, [position]);

//   return position ? <Marker ref={markerRef} position={position} /> : null;
// }

// const AddressesPage = () => {
//   // قائمة العناوين الأساسية
//   const [addresses, setAddresses] = useState([
//     {
//       id: 1,
//       title: "العنوان الرئيسي",
//       address: "123 شارع الملكة رانيا، عمان، الأردن",
//       isPrimary: true,
//     },
//     // يمكن إضافة المزيد من العناوين هنا
//   ]);

//   // المتغيرات الخاصة بنموذج إضافة عنوان جديد
//   const [showNewAddressForm, setShowNewAddressForm] = useState(false);
//   const [newAddressName, setNewAddressName] = useState('');
//   const [newStreetAddress, setNewStreetAddress] = useState('');
//   const [newCity, setNewCity] = useState('');
//   const [newDistrict, setNewDistrict] = useState('');
//   const [newCountry, setNewCountry] = useState('اليمن');
//   const [location, setLocation] = useState(null);
//   const [confirmedAddress, setConfirmedAddress] = useState('');
//   const [isSatellite, setIsSatellite] = useState(true);

//   // المتغيرات الخاصة بالبحث داخل الخريطة
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [isSearching, setIsSearching] = useState(false);
//   const [showResults, setShowResults] = useState(false);
//   const mapRef = useRef(null);
//   const timeoutRef = useRef(null);

//   // الدالة الخاصة بتعيين العنوان الرئيسي (primary)
//   const handleSetPrimary = (id) => {
//     setAddresses(addresses.map(addr => ({
//       ...addr,
//       isPrimary: addr.id === id,
//     })));
//   };

//   // دالة الحصول على العنوان بناءً على الإحداثيات باستخدام Nominatim
//   const fetchAddress = useCallback(async (lat, lng) => {
//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1&accept-language=ar`
//       );
//       const data = await response.json();
//       const addressParts = [
//         data.address?.street || data.address?.road || '',
//         data.address?.city || data.address?.town || '',
//         data.address?.district || '',
//         data.address?.country || 'اليمن'
//       ].filter(Boolean);

//       setConfirmedAddress(addressParts.join('، '));
//       // تحديث حقول العنوان بناءً على البيانات المسترجعة
//       setNewStreetAddress(data.address?.street || data.address?.road || '');
//       setNewCity(data.address?.city || data.address?.town || '');
//       setNewDistrict(data.address?.district || '');
//       setNewCountry(data.address?.country || 'اليمن');
//     } catch (error) {
//       console.error('فشل في جلب العنوان:', error);
//     }
//   }, []);

//   // استخدام الموقع الحالي للمستخدم (دون إنشاء Marker يدويًا؛ نعتمد على مكوّن LocationPicker)
//   const handleGPSLocation = useCallback(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           const latlng = { lat: latitude, lng: longitude };

//           if (mapRef.current) {
//             const map = mapRef.current;
//             map.flyTo([latitude, longitude], 16, { animate: true, duration: 1 });
//           }
//           setLocation(latlng);
//           fetchAddress(latitude, longitude);
//         },
//         (error) => {
//           console.error("فشل في الحصول على الموقع:", error);
//           alert("فشل في الحصول على الموقع. يرجى التأكد من تفعيل صلاحيات الموقع.");
//         }
//       );
//     } else {
//       alert("المتصفح لا يدعم خدمة تحديد الموقع الجغرافي.");
//     }
//   }, [fetchAddress]);

//   // دالة البحث مع تأخير (debounce) لتقليل عدد الاستعلامات
//   const handleSearchInput = useCallback((query) => {
//     clearTimeout(timeoutRef.current);
//     timeoutRef.current = setTimeout(async () => {
//       if (!query.trim()) {
//         setSearchResults([]);
//         return;
//       }
//       setIsSearching(true);
//       try {
//         const response = await fetch(
//           `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=ye&bounded=1&viewbox=41.6085,12.1110,54.5300,18.9997&accept-language=ar`
//         );
//         const data = await response.json();
//         setSearchResults(data.slice(0, 5));
//         setShowResults(true);
//       } catch (error) {
//         console.error("خطأ في البحث:", error);
//       } finally {
//         setIsSearching(false);
//       }
//     }, 300);
//   }, []);

//   // عند اختيار نتيجة من البحث
//   const handleSuggestionSelect = useCallback((result) => {
//     try {
//       const lat = parseFloat(result.lat);
//       const lon = parseFloat(result.lon);

//       if (mapRef.current) {
//         const map = mapRef.current;
//         map.flyTo([lat, lon], 16, { animate: true, duration: 1 });
//       }
//       setLocation({ lat, lng: lon });
//       fetchAddress(lat, lon);
//       setSearchQuery(result.display_name);
//       setShowResults(false);
//     } catch (error) {
//       console.error("خطأ في معالجة الاختيار:", error);
//       setShowResults(false);
//     }
//   }, [fetchAddress]);

//   // تحديث حدود وإعدادات الخريطة
//   const updateMapBounds = useCallback(() => {
//     if (mapRef.current) {
//       mapRef.current.setMaxBounds(YEMEN_BOUNDS);
//       mapRef.current.setMinZoom(6);
//       mapRef.current.setMaxZoom(18);
//     }
//   }, []);

//   // عند تحميل الخريطة
//   useEffect(() => {
//     if (mapRef.current) {
//       updateMapBounds();
//     }
//     return () => clearTimeout(timeoutRef.current);
//   }, [updateMapBounds]);

//   // دالة إضافة العنوان الجديد إلى القائمة
//   const handleAddNewAddress = () => {
//     if (!location) {
//       alert('الرجاء تحديد الموقع على الخريطة');
//       return;
//     }
//     const fullAddress = `${newAddressName || 'عنوان جديد'} - ${newStreetAddress}, ${newCity}, ${newDistrict}, ${newCountry}`;
//     const newEntry = {
//       id: Date.now(),
//       title: newAddressName || 'عنوان جديد',
//       address: fullAddress,
//       isPrimary: false,
//       lat: location.lat,
//       lng: location.lng,
//     };
//     setAddresses([...addresses, newEntry]);
//     // إعادة تهيئة النموذج
//     setNewAddressName('');
//     setNewStreetAddress('');
//     setNewCity('');
//     setNewDistrict('');
//     setNewCountry('اليمن');
//     setLocation(null);
//     setConfirmedAddress('');
//     setShowNewAddressForm(false);
//     alert('تم حفظ العنوان بنجاح!');
//   };

//   return (
//     <section dir="rtl" className="py-16 bg-white sm:py-16 lg:py-20">
//       <div className="px-4 m-auto sm:px-6 lg:px-6 max-w-7xl">
//         <div className="max-w-3xl mx-auto">
//           {/* رأس الصفحة */}
//           <div className="mb-8">
//             <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">العناوين</h1>
//             <p className="mt-2 text-sm font-normal text-gray-600">
//               إدارة عناوين التوصيل والعناوين السابقة
//             </p>
//           </div>

//           {/* عرض قائمة العناوين */}
//           <div className="space-y-6">
//             {addresses.map((address) => (
//               <div key={address.id} className="bg-white rounded-xl shadow-md p-6 border">
//                 <div className="flex justify-between items-start mb-4">
//                   <div className="flex items-center gap-2">
//                     <FiMapPin className="text-lime-500" />
//                     <h3 className="font-semibold text-gray-800">
//                       {address.title}
//                       {address.isPrimary && (
//                         <span className="ml-2 text-sm text-lime-500">(رئيسي)</span>
//                       )}
//                     </h3>
//                   </div>
//                   <div className="flex gap-2">
//                     <button 
//                       onClick={() => handleSetPrimary(address.id)}
//                       className={`p-2 rounded-lg ${address.isPrimary ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-600'}`}
//                     >
//                       <FiStar className="w-5 h-5" />
//                     </button>
//                     <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
//                       <FiEdit className="w-5 h-5" />
//                     </button>
//                     <button 
//                       onClick={() => setAddresses(addresses.filter(addr => addr.id !== address.id))}
//                       className="p-2 text-red-600 hover:bg-red-100 rounded-lg"
//                     >
//                       <FiTrash2 className="w-5 h-5" />
//                     </button>
//                   </div>
//                 </div>
//                 <p className="text-gray-600">
//                   {address.address}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* زر عرض/إخفاء نموذج إضافة عنوان جديد */}
//           <button
//             type="button"
//             onClick={() => setShowNewAddressForm(true)}
//             className="mt-8 w-full p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors"
//           >
//             + إضافة عنوان جديد
//           </button>

//           {/* نموذج إضافة عنوان جديد مع الخريطة */}
//           {showNewAddressForm && (
//             <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-md">
//               <h2 className="text-xl font-bold text-gray-900 mb-4">إضافة عنوان جديد</h2>
//               <div className="space-y-4">
//                 <input
//                   type="text"
//                   value={newAddressName}
//                   onChange={(e) => setNewAddressName(e.target.value)}
//                   placeholder="اسم العنوان (مثلاً: المنزل أو العمل)"
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500"
//                 />
//                 <input
//                   type="text"
//                   value={newStreetAddress}
//                   onChange={(e) => setNewStreetAddress(e.target.value)}
//                   placeholder="العنوان التفصيلي"
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500"
//                 />
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <input
//                     type="text"
//                     value={newCity}
//                     onChange={(e) => setNewCity(e.target.value)}
//                     placeholder="المدينة"
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500"
//                   />
//                   <input
//                     type="text"
//                     value={newDistrict}
//                     onChange={(e) => setNewDistrict(e.target.value)}
//                     placeholder="المحافظة"
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500"
//                   />
//                   <input
//                     type="text"
//                     value={newCountry}
//                     onChange={(e) => setNewCountry(e.target.value)}
//                     placeholder="الدولة"
//                     readOnly
//                     className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
//                   />
//                 </div>
//               </div>

//               {/* قسم الخريطة والبحث عن الموقع */}
//               <div className="mt-6 space-y-4">
//                 <div className="flex items-center justify-between flex-wrap gap-4">
//                   <h3 className="text-xl font-semibold flex items-center gap-2">
//                     <FiMapPin className="w-6 h-6" />
//                     تحديد الموقع على الخريطة
//                   </h3>
//                   <div className="relative flex-1 max-w-xl">
//                     <input
//                       type="text"
//                       placeholder="ابحث عن موقع..."
//                       value={searchQuery}
//                       onChange={(e) => {
//                         setSearchQuery(e.target.value);
//                         handleSearchInput(e.target.value);
//                       }}
//                       className="w-full pr-4 pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       autoComplete="off"
//                       dir="rtl"
//                     />
//                     <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
//                     {isSearching && (
//                       <div className="absolute right-3 top-2.5">
//                         <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
//                       </div>
//                     )}
//                     {showResults && searchResults.length > 0 && (
//                       <div className="absolute z-[1000] w-full mt-2 bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto">
//                         {searchResults.map((result) => (
//                           <button
//                             key={result.place_id}
//                             type="button"
//                             onClick={() => handleSuggestionSelect(result)}
//                             className="w-full p-3 text-right hover:bg-gray-100 border-b"
//                           >
//                             <p className="text-sm font-medium">
//                               {result.display_name}
//                             </p>
//                           </button>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                   <div className="flex gap-2">
//                     <button
//                       type="button"
//                       onClick={() => setIsSatellite(!isSatellite)}
//                       className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
//                     >
//                       {isSatellite ? (
//                         <>
//                           <Satellite className="w-5 h-5" />
//                           عرض الأقمار الصناعية
//                         </>
//                       ) : (
//                         <>
//                           <FiMapPin className="w-5 h-5" />
//                           عرض الخريطة
//                         </>
//                       )}
//                     </button>
//                     <button
//                       type="button"
//                       onClick={handleGPSLocation}
//                       className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
//                     >
//                       <Navigation className="w-5 h-5" />
//                       استخدام الموقع الحالي
//                     </button>
//                   </div>
//                 </div>

//                 <div className="relative h-96 rounded-xl overflow-hidden border border-gray-200 shadow-lg">
//                   <MapContainer
//                     center={[15.5527, 48.5164]}
//                     zoom={6}
//                     style={{ height: '100%', width: '100%' }}
//                     className="rounded-lg"
//                     whenCreated={(mapInstance) => {
//                       mapRef.current = mapInstance;
//                       updateMapBounds();
//                     }}
//                   >
//                     {isSatellite ? (
//                       <TileLayer
//                         url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
//                         attribution="Esri"
//                         bounds={YEMEN_BOUNDS}
//                       />
//                     ) : (
//                       <TileLayer
//                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                         attribution="OpenStreetMap"
//                         bounds={YEMEN_BOUNDS}
//                       />
//                     )}
//                     <LocationPicker
//                       position={location}
//                       onLocationSelect={(latlng) => {
//                         setLocation(latlng);
//                         fetchAddress(latlng.lat, latlng.lng);
//                       }}
//                     />
//                   </MapContainer>
//                   {location && (
//                     <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md text-right">
//                       <p className="text-sm font-medium text-gray-700">
//                         العنوان المؤكد:
//                         <span className="block text-blue-600">
//                           {confirmedAddress || "جارٍ تحميل العنوان..."}
//                         </span>
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <div className="mt-6 flex gap-4">
//                 <button
//                   type="button"
//                   onClick={handleAddNewAddress}
//                   className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
//                 >
//                   حفظ العنوان
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setShowNewAddressForm(false)}
//                   className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
//                 >
//                   إلغاء
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AddressesPage;
"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { FiMapPin, FiEdit, FiTrash2, FiStar } from 'react-icons/fi';
import { Search, Satellite, Navigation } from 'lucide-react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// إعداد أيقونات Leaflet الافتراضية
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// حدود اليمن للخريطة
const YEMEN_BOUNDS = [
  [12.1110, 41.6085],
  [18.9997, 54.5300]
];

// Custom hook للتأخير (debounce) في البحث
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
};

// مكوّن اختيار الموقع عبر الخريطة
function LocationPicker({ position, onLocationSelect }) {
  const markerRef = useRef(null);
  useMapEvents({
    click(e) {
      onLocationSelect(e.latlng);
    },
  });

  useEffect(() => {
    if (position && markerRef.current) {
      markerRef.current.setLatLng(position);
    }
  }, [position]);

  return position ? <Marker ref={markerRef} position={position} /> : null;
}

const AddressesPage = () => {
  // إدارة قائمة العناوين
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      title: "العنوان الرئيسي",
      address: "123 شارع الملكة رانيا، عمان، الأردن",
      isPrimary: true,
    },
  ]);

  // حالة عرض نموذج إضافة عنوان جديد
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  // دمج حقول العنوان في كائن واحد لتحسين الإدارة
  const [newAddress, setNewAddress] = useState({
    name: '',
    street: '',
    city: '',
    district: '',
    country: 'اليمن',
  });

  const [location, setLocation] = useState(null);
  const [confirmedAddress, setConfirmedAddress] = useState('');
  const [isSatellite, setIsSatellite] = useState(true);

  // إدارة البحث عن الموقع
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const mapRef = useRef(null);

  // استخدام debounce لتحسين استعلام البحث
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  // تحديث الحقول الخاصة بالعنوان الجديد عند تغير المدخلات
  const handleNewAddressChange = (field, value) => {
    setNewAddress((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // تعيين العنوان الرئيسي للعناوين
  const handleSetPrimary = useCallback((id) => {
    setAddresses((prev) =>
      prev.map((addr) => ({
        ...addr,
        isPrimary: addr.id === id,
      }))
    );
  }, []);

  // جلب العنوان باستخدام Nominatim بناءً على الإحداثيات
  const fetchAddress = useCallback(async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1&accept-language=ar`
      );
      const data = await response.json();
      const addressParts = [
        data.address?.street || data.address?.road || '',
        data.address?.city || data.address?.town || '',
        data.address?.district || '',
        data.address?.country || 'اليمن',
      ].filter(Boolean);
      setConfirmedAddress(addressParts.join('، '));

      // تحديث حقول العنوان من البيانات المسترجعة
      handleNewAddressChange('street', data.address?.street || data.address?.road || '');
      handleNewAddressChange('city', data.address?.city || data.address?.town || '');
      handleNewAddressChange('district', data.address?.district || '');
      handleNewAddressChange('country', data.address?.country || 'اليمن');
    } catch (error) {
      console.error('فشل في جلب العنوان:', error);
    }
  }, []);

  // استخدام الموقع الحالي للمستخدم دون إضافة Marker يدويًا؛ نعتمد على LocationPicker
  const handleGPSLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const latlng = { lat: latitude, lng: longitude };

          if (mapRef.current) {
            mapRef.current.flyTo([latitude, longitude], 16, { animate: true, duration: 1 });
          }
          setLocation(latlng);
          fetchAddress(latitude, longitude);
        },
        (error) => {
          console.error("فشل في الحصول على الموقع:", error);
          alert("فشل في الحصول على الموقع. يرجى التأكد من تفعيل صلاحيات الموقع.");
        }
      );
    } else {
      alert("المتصفح لا يدعم خدمة تحديد الموقع الجغرافي.");
    }
  }, [fetchAddress]);

  // التأثير الجانبي لإجراء البحث عند تغير الاستعلام (debounced)
  useEffect(() => {
    const performSearch = async () => {
      if (!debouncedSearchQuery.trim()) {
        setSearchResults([]);
        return;
      }
      setIsSearching(true);
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            debouncedSearchQuery
          )}&countrycodes=ye&bounded=1&viewbox=41.6085,12.1110,54.5300,18.9997&accept-language=ar`
        );
        const data = await response.json();
        setSearchResults(data.slice(0, 5));
        setShowResults(true);
      } catch (error) {
        console.error("خطأ في البحث:", error);
      } finally {
        setIsSearching(false);
      }
    };
    performSearch();
  }, [debouncedSearchQuery]);

  // عند اختيار نتيجة من البحث
  const handleSuggestionSelect = useCallback((result) => {
    try {
      const lat = parseFloat(result.lat);
      const lon = parseFloat(result.lon);

      if (mapRef.current) {
        mapRef.current.flyTo([lat, lon], 16, { animate: true, duration: 1 });
      }
      setLocation({ lat, lng: lon });
      fetchAddress(lat, lon);
      setSearchQuery(result.display_name);
      setShowResults(false);
    } catch (error) {
      console.error("خطأ في معالجة الاختيار:", error);
      setShowResults(false);
    }
  }, [fetchAddress]);

  // ضبط حدود الخريطة عند الإنشاء
  const updateMapBounds = useCallback(() => {
    if (mapRef.current) {
      mapRef.current.setMaxBounds(YEMEN_BOUNDS);
      mapRef.current.setMinZoom(6);
      mapRef.current.setMaxZoom(18);
    }
  }, []);

  // التأثير الذي يضبط حدود الخريطة عند إنشاء الخريطة
  useEffect(() => {
    if (mapRef.current) {
      updateMapBounds();
    }
  }, [updateMapBounds]);

  // إضافة عنوان جديد إلى القائمة
  const handleAddNewAddress = () => {
    if (!location) {
      alert('الرجاء تحديد الموقع على الخريطة');
      return;
    }
    const fullAddress = `${newAddress.name || 'عنوان جديد'} - ${newAddress.street}, ${newAddress.city}, ${newAddress.district}, ${newAddress.country}`;
    const newEntry = {
      id: Date.now(),
      title: newAddress.name || 'عنوان جديد',
      address: fullAddress,
      isPrimary: false,
      lat: location.lat,
      lng: location.lng,
    };
    setAddresses((prev) => [...prev, newEntry]);
    // إعادة تعيين الحقول
    setNewAddress({
      name: '',
      street: '',
      city: '',
      district: '',
      country: 'اليمن',
    });
    setLocation(null);
    setConfirmedAddress('');
    setShowNewAddressForm(false);
    alert('تم حفظ العنوان بنجاح!');
  };

  return (
    <section dir="rtl" className="py-16 bg-white sm:py-16 lg:py-20">
      <div className="px-4 m-auto sm:px-6 lg:px-6 max-w-7xl">
        <div className="max-w-3xl mx-auto">
          {/* رأس الصفحة */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">العناوين</h1>
            <p className="mt-2 text-sm font-normal text-gray-600">
              إدارة عناوين التوصيل والعناوين السابقة
            </p>
          </div>

          {/* قائمة العناوين */}
          <div className="space-y-6">
            {addresses.map((address) => (
              <div key={address.id} className="bg-white rounded-xl shadow-md p-6 border">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <FiMapPin className="text-lime-500" />
                    <h3 className="font-semibold text-gray-800">
                      {address.title}
                      {address.isPrimary && (
                        <span className="ml-2 text-sm text-lime-500">(رئيسي)</span>
                      )}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleSetPrimary(address.id)}
                      className={`p-2 rounded-lg ${address.isPrimary ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-600'}`}
                    >
                      <FiStar className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                      <FiEdit className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => setAddresses((prev) => prev.filter(addr => addr.id !== address.id))}
                      className="p-2 text-red-600 hover:bg-red-100 rounded-lg"
                    >
                      <FiTrash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-600">{address.address}</p>
              </div>
            ))}
          </div>

          {/* زر عرض/إخفاء نموذج إضافة عنوان */}
          <button
            type="button"
            onClick={() => setShowNewAddressForm(true)}
            className="mt-8 w-full p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors"
          >
            + إضافة عنوان جديد
          </button>

          {/* نموذج إضافة عنوان مع الخريطة */}
          {showNewAddressForm && (
            <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4">إضافة عنوان جديد</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  value={newAddress.name}
                  onChange={(e) => handleNewAddressChange('name', e.target.value)}
                  placeholder="اسم العنوان (مثلاً: المنزل أو العمل)"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500"
                />
                <input
                  type="text"
                  value={newAddress.street}
                  onChange={(e) => handleNewAddressChange('street', e.target.value)}
                  placeholder="العنوان التفصيلي"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    value={newAddress.city}
                    onChange={(e) => handleNewAddressChange('city', e.target.value)}
                    placeholder="المدينة"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500"
                  />
                  <input
                    type="text"
                    value={newAddress.district}
                    onChange={(e) => handleNewAddressChange('district', e.target.value)}
                    placeholder="المحافظة"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500"
                  />
                  <input
                    type="text"
                    value={newAddress.country}
                    onChange={(e) => handleNewAddressChange('country', e.target.value)}
                    placeholder="الدولة"
                    readOnly
                    className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
                  />
                </div>
              </div>

              {/* قسم الخريطة والبحث */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <FiMapPin className="w-6 h-6" />
                    تحديد الموقع على الخريطة
                  </h3>
                  <div className="relative flex-1 max-w-xl">
                    <input
                      type="text"
                      placeholder="ابحث عن موقع..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pr-4 pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      autoComplete="off"
                      dir="rtl"
                    />
                    <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
                    {isSearching && (
                      <div className="absolute right-3 top-2.5">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
                      </div>
                    )}
                    {showResults && searchResults.length > 0 && (
                      <div className="absolute z-[1000] w-full mt-2 bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        {searchResults.map((result) => (
                          <button
                            key={result.place_id}
                            type="button"
                            onClick={() => handleSuggestionSelect(result)}
                            className="w-full p-3 text-right hover:bg-gray-100 border-b"
                          >
                            <p className="text-sm font-medium">{result.display_name}</p>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setIsSatellite((prev) => !prev)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                    >
                      {isSatellite ? (
                        <>
                          <Satellite className="w-5 h-5" />
                          عرض الأقمار الصناعية
                        </>
                      ) : (
                        <>
                          <FiMapPin className="w-5 h-5" />
                          عرض الخريطة
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={handleGPSLocation}
                      className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                    >
                      <Navigation className="w-5 h-5" />
                      استخدام الموقع الحالي
                    </button>
                  </div>
                </div>

                <div className="relative h-96 rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                  <MapContainer
                    center={[15.5527, 48.5164]}
                    zoom={6}
                    style={{ height: '100%', width: '100%' }}
                    className="rounded-lg"
                    whenCreated={(mapInstance) => {
                      mapRef.current = mapInstance;
                      updateMapBounds();
                    }}
                  >
                    {isSatellite ? (
                      <TileLayer
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        attribution="Esri"
                        bounds={YEMEN_BOUNDS}
                      />
                    ) : (
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="OpenStreetMap"
                        bounds={YEMEN_BOUNDS}
                      />
                    )}
                    <LocationPicker
                      position={location}
                      onLocationSelect={(latlng) => {
                        setLocation(latlng);
                        fetchAddress(latlng.lat, latlng.lng);
                      }}
                    />
                  </MapContainer>
                  {location && (
                    <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md text-right">
                      <p className="text-sm font-medium text-gray-700">
                        العنوان المؤكد:
                        <span className="block text-blue-600">
                          {confirmedAddress || "جارٍ تحميل العنوان..."}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <button
                  type="button"
                  onClick={handleAddNewAddress}
                  className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
                >
                  حفظ العنوان
                </button>
                <button
                  type="button"
                  onClick={() => setShowNewAddressForm(false)}
                  className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
                >
                  إلغاء
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AddressesPage;
