// // app/components/AddressesPage.jsx
// 'use client';

// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { FiMapPin, FiEdit, FiTrash2, FiStar } from 'react-icons/fi';
// import { Search, Satellite, Navigation } from 'lucide-react';
// import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
// import toast from 'react-hot-toast';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // إعداد أيقونات Leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
//   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//   shadowUrl:
//     'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
// });
// const YEMEN_BOUNDS = [
//   [12.1110, 41.6085],
//   [18.9997, 54.5300],
// ];

// // Debounce hook
// function useDebounce(value, delay) {
//   const [debounced, setDebounced] = useState(value);
//   useEffect(() => {
//     const t = setTimeout(() => setDebounced(value), delay);
//     return () => clearTimeout(t);
//   }, [value, delay]);
//   return debounced;
// }

// // Marker component
// function LocationPicker({ position, onLocationSelect }) {
//   const markerRef = useRef(null);
//   useMapEvents({ click(e) { onLocationSelect(e.latlng); } });
//   useEffect(() => {
//     if (position && markerRef.current) {
//       markerRef.current.setLatLng(position);
//     }
//   }, [position]);
//   return position ? <Marker ref={markerRef} position={position} /> : null;
// }

// export default function AddressesPage({ customerId }) {
//   const [addresses, setAddresses] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [editingId, setEditingId] = useState(null);
//   const [formData, setFormData] = useState({
//     addressName: '',
//     streetAddress: '',
//     city: '',
//     district: '',
//     country: 'اليمن',
//     description: '',
//   });
//   const [location, setLocation] = useState(null);
//   const [confirmed, setConfirmed] = useState('');
//   const [searchQ, setSearchQ] = useState('');
//   const [results, setResults] = useState([]);
//   const [searching, setSearching] = useState(false);
//   const [showResults, setShowResults] = useState(false);
//   const [satellite, setSatellite] = useState(true);
//   const mapRef = useRef(null);
//   const debouncedQ = useDebounce(searchQ, 300);
//   const [deleteTarget, setDeleteTarget] = useState(null);

//   // جلب العناوين
//   useEffect(() => {
//     if (!customerId) return;
//     fetch(`/api/addresses?customerId=${customerId}`)
//       .then(r => r.json())
//       .then(setAddresses)
//       .catch(e => { console.error(e); toast.error('فشل في جلب العناوين'); });
//   }, [customerId]);

//   // تحويل الإحداثيات إلى عنوان
//   const fetchAddress = useCallback(async (lat, lng) => {
//     try {
//       const res = await fetch(
//         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1&accept-language=ar`
//       );
//       const data = await res.json();
//       const parts = [
//         data.address.road || data.address.street,
//         data.address.city || data.address.town,
//         data.address.district,
//         data.address.country,
//       ].filter(Boolean);
//       setConfirmed(parts.join('، '));
//       setFormData(fd => ({
//         ...fd,
//         streetAddress: data.address.road || data.address.street || '',
//         city: data.address.city || data.address.town || '',
//         district: data.address.district || '',
//         country: data.address.country || 'اليمن',
//       }));
//     } catch (e) {
//       console.error(e);
//       toast.error('فشل في جلب العنوان من الخريطة');
//     }
//   }, []);

//   // بحث جغرافي
//   useEffect(() => {
//     const doSearch = async () => {
//       if (!debouncedQ.trim()) return setResults([]);
//       setSearching(true);
//       try {
//         const res = await fetch(
//           `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
//             debouncedQ
//           )}&countrycodes=ye&bounded=1&viewbox=41.6085,12.1110,54.5300,18.9997&accept-language=ar`
//         );
//         const data = await res.json();
//         setResults(data.slice(0, 5));
//         setShowResults(true);
//       } catch (e) {
//         console.error(e);
//         toast.error('خطأ في البحث عن الموقع');
//       } finally {
//         setSearching(false);
//       }
//     };
//     doSearch();
//   }, [debouncedQ]);

//   // اختيار اقتراح
//   const chooseSuggest = useCallback((r) => {
//     const lat = parseFloat(r.lat), lng = parseFloat(r.lon);
//     if (mapRef.current) mapRef.current.flyTo([lat, lng], 16);
//     setLocation({ lat, lng });
//     fetchAddress(lat, lng);
//     setSearchQ(r.display_name);
//     setShowResults(false);
//   }, [fetchAddress]);

//   // استخدام GPS
//   const handleGPS = useCallback(() => {
//     if (!navigator.geolocation) {
//       toast.error('المتصفح لا يدعم تحديد الموقع');
//       return;
//     }
//     navigator.geolocation.getCurrentPosition(
//       pos => {
//         const { latitude: lat, longitude: lng } = pos.coords;
//         if (mapRef.current) mapRef.current.flyTo([lat, lng], 16);
//         setLocation({ lat, lng });
//         fetchAddress(lat, lng);
//       },
//       () => toast.error('تعذّر الحصول على الموقع')
//     );
//   }, [fetchAddress]);

//   // فتح نموذج التعديل
//   const openEdit = addr => {
//     setEditingId(addr.id);
//     setFormData({
//       addressName: addr.addressName ,
//       streetAddress: addr.streetAddress || addr.road,
//       city: addr.city,
//       district: addr.district,
//       country: addr.country,
//       description: addr.description || '',
//     });
//     setLocation(addr.location);
//     setConfirmed(`${addr.streetAddress}, ${addr.city}, ${addr.district}, ${addr.country}`);
//     setShowForm(true);
//   };

//   // حفظ (إضافة أو تعديل)
//   const save = async () => {
//     if (!location) {
//       toast.error('حدد الموقع أولاً');
//       return;
//     }
//     const payload = {
//       customerId,
//       addressName: formData.addressName,
//       streetAddress: formData.streetAddress,
//       city: formData.city,
//       district: formData.district,
//       country: formData.country,
//       description: formData.description,
//       location: { lat: location.lat, lng: location.lng },
//       id: editingId,          
//       isPrimary: false        
//     };
//     const method = editingId ? 'PATCH' : 'POST';

//     try {
//       const res = await fetch('/api/addresses', {
//         method,
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       });
//       const saved = await res.json();

//       if (editingId) {
//         setAddresses(list => list.map(a => a.id === saved.id ? saved : a));
//         toast.success('تم تحديث العنوان!');
//       } else {
//         setAddresses(list => [saved, ...list]);
//         toast.success('تم إضافة العنوان!');
//       }

//       // إعادة تهيئة النموذج
//       setEditingId(null);
//       setFormData({
//         addressName: '',
//         streetAddress: '',
//         city: '',
//         district: '',
//         country: 'اليمن',
//         description: '',
//       });
//       setLocation(null);
//       setConfirmed('');
//       setShowForm(false);
//     } catch (e) {
//       console.error(e);
//       toast.error('خطأ أثناء الحفظ');
//     }
//   };

//   // تعيين رئيسي
//   const setPrimary = async id => {
//     try {
//       await fetch('/api/addresses', {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ id, isPrimary: true, customerId }),
//       });
//       const updated = await fetch(`/api/addresses?customerId=${customerId}`).then(r => r.json());
//       setAddresses(updated);
//       toast.success('تم تعيين العنوان رئيسيًا');
//     } catch (e) {
//       console.error(e);
//       toast.error('خطأ في التعيين');
//     }
//   };

//   // حذف
//   const remove = async id => {
//     try {
//       await fetch('/api/addresses', {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ id }),
//       });
//       setAddresses(list => list.filter(a => a.id !== id));
//       toast.success('تم حذف العنوان');
//     } catch (e) {
//       console.error(e);
//       toast.error('خطأ أثناء الحذف');
//     }
//   };

//   // ضبط حدود الخريطة
//   const setBounds = () => {
//     if (mapRef.current) {
//       mapRef.current.setMaxBounds(YEMEN_BOUNDS);
//       mapRef.current.setMinZoom(6);
//       mapRef.current.setMaxZoom(18);
//     }
//   };

//   return (
//     <section dir="rtl" className="py-16 bg-white">
//       <div className="max-w-3xl mx-auto px-4">
//         <h1 className="text-2xl font-bold">العناوين</h1>
//         <p className="text-gray-600 mb-6">إدارة عناوين التوصيل</p>

//         {/* قائمة العناوين */}
//         <div className="space-y-4">
//           {addresses.map(addr => (
//             <div key={addr.id} className="flex justify-between p-4 border rounded">
//               <div>
//                 <h3 className="flex items-center gap-2 font-semibold">
//                   <FiMapPin /> {addr.addressName}
//                   {addr.isPrimary && <span className="text-green-500">(رئيسي)</span>}
//                 </h3>
//                 <p className="text-gray-600">
//                   {addr.streetAddress}, {addr.city}, {addr.district}, {addr.country}
//                 </p>
//                 {addr.description && (
//                   <p className="mt-1 text-gray-500 text-sm">{addr.description}</p>
//                 )}
//               </div>
//               <div className="flex gap-2">
//                 <button onClick={() => setPrimary(addr.id)} className="p-2 bg-yellow-100 rounded">
//                   <FiStar/>
//                 </button>
//                 <button onClick={() => openEdit(addr)} className="p-2 bg-gray-100 rounded">
//                   <FiEdit/>
//                 </button>
//                 <button onClick={() => remove(addr.id)} className="p-2 bg-red-100 rounded">
//                   <FiTrash2/>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* زر إضافة جديد */}
//         <button
//           onClick={() => { setShowForm(true); setEditingId(null); }}
//           className="mt-8 w-full p-4 border-2 border-dashed rounded"
//         >
//           + إضافة عنوان جديد
//         </button>

//         {/* نموذج الإضافة/التعديل */}
//         {showForm && (
//           <div className="mt-6 p-6 bg-gray-50 rounded-lg">
//             <input
//               type="text"
//               placeholder="اسم العنوان"
//               value={formData.addressName}
//               onChange={e => setFormData({ ...formData, addressName: e.target.value })}
//               className="w-full p-3 border rounded"
//             />
//             <input
//               type="text"
//               placeholder="العنوان التفصيلي"
//               value={formData.streetAddress}
//               onChange={e => setFormData({ ...formData, streetAddress: e.target.value })}
//               className="w-full p-3 border rounded mt-4"
//             />
//             <div className="grid grid-cols-2 gap-4 mt-4">
//               <input
//                 type="text"
//                 placeholder="المدينة"
//                 value={formData.city}
//                 onChange={e => setFormData({ ...formData, city: e.target.value })}
//                 className="p-3 border rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="المحافظة"
//                 value={formData.district}
//                 onChange={e => setFormData({ ...formData, district: e.target.value })}
//                 className="p-3 border rounded"
//               />
//             </div>
//             <input
//               type="text"
//               placeholder="الوصف (اختياري)"
//               value={formData.description}
//               onChange={e => setFormData({ ...formData, description: e.target.value })}
//               className="w-full p-3 border rounded mt-4"
//             />

//             {/* أدوات الخريطة */}
//             <div className="mt-4 flex gap-2">
//               <button onClick={() => setSatellite(s => !s)} className="px-4 py-2 bg-blue-600 text-white rounded">
//                 {satellite ? 'قمر صناعي' : 'خريطة'} <Satellite/>
//               </button>
//               <button onClick={handleGPS} className="px-4 py-2 bg-green-600 text-white rounded">
//                 استخدام موقعي <Navigation/>
//               </button>
//             </div>

//             <div className="relative h-64 mt-4 border rounded overflow-hidden">
//               <MapContainer
//                 center={[15.5527, 48.5164]}
//                 zoom={6}
//                 whenCreated={map => { mapRef.current = map; setBounds(); }}
//                 style={{ height: '100%', width: '100%' }}
//               >
//                 <TileLayer
//                   url={satellite
//                     ? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
//                     : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
//                   bounds={YEMEN_BOUNDS}
//                 />
//                 <LocationPicker
//                   position={location}
//                   onLocationSelect={pos => { setLocation(pos); fetchAddress(pos.lat, pos.lng); }}
//                 />
//               </MapContainer>
//               {location && (
//                 <div className="absolute bottom-2 left-2 bg-white p-2 rounded shadow text-right">
//                   <p className="text-sm">
//                     العنوان: <span className="font-medium">{confirmed}</span>
//                   </p>
//                 </div>
//               )}
//             </div>

//             <div className="mt-6 flex gap-4">
//               <button onClick={save} className="px-6 py-2 bg-green-500 text-white rounded">
//                 {editingId ? 'حفظ التعديلات' : 'حفظ'}
//               </button>
//               <button onClick={() => setShowForm(false)} className="px-6 py-2 bg-gray-200 rounded">
//                 إلغاء
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// app/components/AddressesPage.jsx
'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FiMapPin, FiEdit, FiTrash2, FiStar } from 'react-icons/fi';
import { Search, Satellite, Navigation } from 'lucide-react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import toast from 'react-hot-toast';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// إعداد أيقونات Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl:
    'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const YEMEN_BOUNDS = [
  [12.1110, 41.6085],
  [18.9997, 54.5300],
];

// Debounce hook
function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

// Component to place a marker
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

export default function AddressesPage({ customerId }) {
  const [addresses, setAddresses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [formData, setFormData] = useState({
    addressName: '',
    streetAddress: '',
    city: '',
    district: '',
    country: 'اليمن',
    description: '',
  });
  const [location, setLocation] = useState(null);
  const [confirmed, setConfirmed] = useState('');
  const [searchQ, setSearchQ] = useState('');
  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [satellite, setSatellite] = useState(true);
  const mapRef = useRef(null);
  const debouncedQ = useDebounce(searchQ, 300);

  // Fetch addresses on mount
  useEffect(() => {
    if (!customerId) return;
    fetch(`/api/addresses?customerId=${customerId}`)
      .then((r) => r.json())
      .then(setAddresses)
      .catch(() => toast.error('فشل في جلب العناوين'));
  }, [customerId]);

  // Reverse-geocode to fill form fields
  const fetchAddress = useCallback(async (lat, lng) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1&accept-language=ar`
      );
      const data = await res.json();
      const parts = [
        data.address.road || data.address.street,
        data.address.city || data.address.town,
        data.address.district,
        data.address.country,
      ].filter(Boolean);
      setConfirmed(parts.join('، '));
      setFormData((fd) => ({
        ...fd,
        streetAddress: data.address.road || data.address.street || '',
        city: data.address.city || data.address.town || '',
        district: data.address.district || '',
        country: data.address.country || 'اليمن',
      }));
    } catch {
      toast.error('فشل في جلب العنوان من الخريطة');
    }
  }, []);

  // Search with debounce
  useEffect(() => {
    const doSearch = async () => {
      if (!debouncedQ.trim()) return setResults([]);
      setSearching(true);
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            debouncedQ
          )}&countrycodes=ye&bounded=1&viewbox=41.6085,12.1110,54.5300,18.9997&accept-language=ar`
        );
        const data = await res.json();
        setResults(data.slice(0, 5));
        setShowResults(true);
      } catch {
        toast.error('خطأ في البحث عن الموقع');
      } finally {
        setSearching(false);
      }
    };
    doSearch();
  }, [debouncedQ]);

  // On selecting a suggestion
  const chooseSuggest = useCallback(
    (r) => {
      const lat = parseFloat(r.lat),
        lng = parseFloat(r.lon);
      if (mapRef.current) mapRef.current.flyTo([lat, lng], 16);
      setLocation({ lat, lng });
      fetchAddress(lat, lng);
      setSearchQ(r.display_name);
      setShowResults(false);
    },
    [fetchAddress]
  );

  // Use GPS location
  const handleGPS = useCallback(() => {
    if (!navigator.geolocation) {
      toast.error('المتصفح لا يدعم تحديد الموقع');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude: lat, longitude: lng } = pos.coords;
        if (mapRef.current) mapRef.current.flyTo([lat, lng], 16);
        setLocation({ lat, lng });
        fetchAddress(lat, lng);
      },
      () => toast.error('تعذّر الحصول على الموقع')
    );
  }, [fetchAddress]);

  // Open form for edit
  const openEdit = (addr) => {
    setEditingId(addr.id);
    setFormData({
      addressName: addr.addressName,
      streetAddress: addr.streetAddress || addr.road,
      city: addr.city || addr.town,
      district: addr.district,
      country: addr.country,
      description: addr.description || '',
    });
    setLocation(addr.location);
    setConfirmed(
      `${addr.streetAddress || addr.road}, ${addr.city}, ${addr.district}, ${addr.country}`
    );
    setShowForm(true);
  };

  // Save new or edited
  const save = async () => {
    if (!location) {
      toast.error('حدد الموقع أولاً');
      return;
    }
    const payload = {
      customerId,
      addressName: formData.addressName,
      streetAddress: formData.streetAddress,
      city: formData.city,
      district: formData.district,
      country: formData.country,
      description: formData.description,
      location: { lat: location.lat, lng: location.lng },
      id: editingId,
      isPrimary: false,
    };
    const method = editingId ? 'PATCH' : 'POST';

    try {
      const res = await fetch('/api/addresses', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const saved = await res.json();

      if (editingId) {
        setAddresses((list) =>
          list.map((a) => (a.id === saved.id ? saved : a))
        );
        toast.success('تم تحديث العنوان!');
      } else {
        setAddresses((list) => [saved, ...list]);
        toast.success('تم إضافة العنوان!');
      }

      // Reset form
      setEditingId(null);
      setFormData({
        addressName: '',
        streetAddress: '',
        city: '',
        district: '',
        country: 'اليمن',
        description: '',
      });
      setLocation(null);
      setConfirmed('');
      setShowForm(false);
    } catch {
      toast.error('خطأ أثناء الحفظ');
    }
  };

  // Set primary
  const setPrimary = async (id) => {
    try {
      await fetch('/api/addresses', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, isPrimary: true, customerId }),
      });
      const updated = await fetch(
        `/api/addresses?customerId=${customerId}`
      ).then((r) => r.json());
      setAddresses(updated);
      toast.success('تم تعيين العنوان رئيسيًا');
    } catch {
      toast.error('خطأ في التعيين');
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await fetch('/api/addresses', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      setAddresses((list) => list.filter((a) => a.id !== id));
      toast.success('تم حذف العنوان');
    } catch {
      toast.error('خطأ أثناء الحذف');
    }
  };

  // Set map bounds once
  const setBounds = () => {
    if (mapRef.current) {
      mapRef.current.setMaxBounds(YEMEN_BOUNDS);
      mapRef.current.setMinZoom(6);
      mapRef.current.setMaxZoom(18);
    }
  };

  return (
    <>
      <section dir="rtl" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-2xl font-bold">العناوين</h1>
          <p className="text-gray-600 mb-6">إدارة عناوين التوصيل</p>

          {/* Addresses List */}
          <div className="space-y-4">
            {addresses.map((addr) => (
              <div
                key={addr.id}
                className="flex justify-between p-4 border rounded"
              >
                <div>
                  <h3 className="flex items-center gap-2 font-semibold">
                    <FiMapPin /> {addr.addressName}
                    {addr.isPrimary && (
                      <span className="text-green-500">(رئيسي)</span>
                    )}
                  </h3>
                  <p className="text-gray-600">
                    {addr.streetAddress}, {addr.city}, {addr.district},{' '}
                    {addr.country}
                  </p>
                  {addr.description && (
                    <p className="mt-1 text-gray-500 text-sm">
                      {addr.description}
                    </p>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setPrimary(addr.id)}
                    className="p-2 bg-yellow-100 rounded"
                  >
                    <FiStar />
                  </button>
                  <button
                    onClick={() => openEdit(addr)}
                    className="p-2 bg-gray-100 rounded"
                  >
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => setDeleteTarget(addr.id)}
                    className="p-2 bg-red-100 rounded"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add New Button */}
          <button
            onClick={() => {
              setShowForm(true);
              setEditingId(null);
            }}
            className="mt-8 w-full p-4 border-2 border-dashed rounded"
          >
            + إضافة عنوان جديد
          </button>

          {/* Add/Edit Form */}
          {showForm && (
            <div className="mt-6 p-6 bg-gray-50 rounded-lg">
              <input
                type="text"
                placeholder="اسم العنوان"
                value={formData.addressName}
                onChange={(e) =>
                  setFormData({ ...formData, addressName: e.target.value })
                }
                className="w-full p-3 border rounded"
              />
              <input
                type="text"
                placeholder="العنوان التفصيلي"
                value={formData.streetAddress}
                onChange={(e) =>
                  setFormData({ ...formData, streetAddress: e.target.value })
                }
                className="w-full p-3 border rounded mt-4"
              />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <input
                  type="text"
                  placeholder="المدينة"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  className="p-3 border rounded"
                />
                <input
                  type="text"
                  placeholder="المحافظة"
                  value={formData.district}
                  onChange={(e) =>
                    setFormData({ ...formData, district: e.target.value })
                  }
                  className="p-3 border rounded"
                />
              </div>
              <input
                type="text"
                placeholder="الوصف (اختياري)"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full p-3 border rounded mt-4" 
              />

              {/* Map Controls */}
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => setSatellite((s) => !s)}
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  {satellite ? 'قمر صناعي' : 'خريطة'} <Satellite />
                </button>
                <button
                  onClick={handleGPS}
                  className="px-4 py-2 bg-green-600 text-white rounded"
                >
                  استخدام موقعي <Navigation />
                </button>
              </div>

              <div className="relative h-64 mt-4 border rounded overflow-hidden">
                <MapContainer
                  center={[15.5527, 48.5164]}
                  zoom={6}
                  whenCreated={(map) => {
                    mapRef.current = map;
                    setBounds();
                  }}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    url={
                      satellite
                        ? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
                        : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    }
                    bounds={YEMEN_BOUNDS}
                  />
                  <LocationPicker
                    position={location}
                    onLocationSelect={(pos) => {
                      setLocation(pos);
                      fetchAddress(pos.lat, pos.lng);
                    }}
                  />
                </MapContainer>
                {location && (
                  <div className="absolute bottom-2 left-2 bg-white p-2 rounded shadow text-right">
                    <p className="text-sm">
                      العنوان:{' '}
                      <span className="font-medium">{confirmed}</span>
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 flex gap-4">
                <button
                  onClick={save}
                  className="px-6 py-2 bg-green-500 text-white rounded"
                >
                  {editingId ? 'حفظ التعديلات' : 'حفظ'}
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="px-6 py-2 bg-gray-200 rounded"
                >
                  إلغاء
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Delete Confirmation Modal */}
      {deleteTarget !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">تأكيد الحذف</h3>
            <p className="mb-6">هل تريد حذف هذا العنوان نهائيًا؟</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteTarget(null)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                إلغاء
              </button>
              <button
                onClick={() => {
                  handleDelete(deleteTarget);
                  setDeleteTarget(null);
                }}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                حذف
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
