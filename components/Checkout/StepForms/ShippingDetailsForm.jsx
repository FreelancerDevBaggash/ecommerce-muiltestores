'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import TextInput from '../../Forminputs/TextInput';
import { useForm } from 'react-hook-form';
import NavButtons from '../NavButtons';
import { Circle, Truck, MapPin, Navigation, Globe, Satellite, Map, Search, CheckCircle } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep, updateCheckoutFormData } from '@/redux/slices/checkoutSlice';

// Yemen boundaries
const YEMEN_BOUNDS = [
  [12.1110, 41.6085],
  [18.9997, 54.5300]
];

// Configure Leaflet marker
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

function LocationPicker({ position, onLocationSelect }) {
  const markerRef = useRef(null);
  const map = useMapEvents({
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

export default function ShippingDetailsForm() {
  const dispatch = useDispatch();
  const currentStep = useSelector((store) => store.checkout.currentStep);
  const existingFormData = useSelector((store) => store.checkout.checkoutFormData);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...existingFormData,
    },
  });

  const [shippingCost, setShippingCost] = useState(existingFormData.shippingCost || '');
  const [location, setLocation] = useState(null);
  const [confirmedAddress, setConfirmedAddress] = useState('');
  const [isSatellite, setIsSatellite] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [isFetchingAddress, setIsFetchingAddress] = useState(false);
  const [isMapReady, setIsMapReady] = useState(false);
  const mapRef = useRef(null);
  const timeoutRef = useRef(null);

  // Fetch saved addresses
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await fetch(`/api/addresses?customerId=${existingFormData.customersId}`);
        if (!response.ok) throw new Error('فشل في جلب العناوين');
        const data = await response.json();
        setSavedAddresses(data);
      } catch (error) {
        console.error('Error fetching addresses:', error);
        alert(error.message);
      }
    };
    fetchAddresses();
  }, [existingFormData.customersId]);

  // Address fetching logic
  const fetchAddress = useCallback(async (lat, lng) => {
    setIsFetchingAddress(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1&accept-language=ar`
      );
      const data = await response.json();
      
      const addressParts = [
        data.address?.street || data.address?.road || data.address?.streetAddress,
        data.address?.city || data.address?.town,
        data.address?.district,
        data.address?.country || 'اليمن'
      ].filter(Boolean);

      setConfirmedAddress(addressParts.join('، '));
      
      setValue('streetAddress', data.address?.street || data.address?.road || data.address?.streetAddress || '');
      setValue('city', data.address?.city || data.address?.town || '');
      setValue('country', data.address?.country || 'اليمن');
      setValue('district', data.address?.district || data.address?.state || '');
      
    } catch (error) {
      console.error('Failed to fetch address:', error);
    } finally {
      setIsFetchingAddress(false);
    }
  }, [setValue]);

  // Handle GPS location
  const handleGPSLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const latlng = { lat: latitude, lng: longitude };
          
          if (mapRef.current) {
            const map = mapRef.current;
            map.flyTo([latitude, longitude], 16, { animate: true, duration: 1 });
            
            new L.Marker([latitude, longitude], {
              icon: L.icon({
                iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                iconSize: [35, 46],
                iconAnchor: [17, 46]
              })
            }).addTo(map);

            setLocation(latlng);
            fetchAddress(latitude, longitude);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("فشل في الحصول على الموقع. يرجى التأكد من تفعيل صلاحيات الموقع.");
        }
      );
    } else {
      alert("المتصفح لا يدعم خدمة تحديد الموقع الجغرافي.");
    }
  }, [fetchAddress]);

  // Handle search with debounce
  const handleSearchInput = useCallback((query) => {
    clearTimeout(timeoutRef.current);
    
    timeoutRef.current = setTimeout(async () => {
      if (!query.trim()) {
        setSearchResults([]);
        return;
      }
      
      setIsSearching(true);
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=ye&bounded=1&viewbox=41.6085,12.1110,54.5300,18.9997&accept-language=ar`
        );
        const data = await response.json();
        setSearchResults(data.slice(0, 5));
        setShowResults(true);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setIsSearching(false);
      }
    }, 300);
  }, []);

  // Handle suggestion selection
  const handleSuggestionSelect = useCallback((result) => {
    try {
      const lat = parseFloat(result.lat);
      const lon = parseFloat(result.lon);
      
      if (mapRef.current) {
        const map = mapRef.current;
        map.flyTo([lat, lon], 16, { animate: true, duration: 1 });
        
        new L.Marker([lat, lon], {
          icon: L.icon({
            iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
            iconSize: [35, 46],
            iconAnchor: [17, 46]
          })
        }).addTo(map);

        setLocation({ lat, lng: lon });
        fetchAddress(lat, lon);
        
        setSearchQuery(result.display_name);
        setShowResults(false);
      }
    } catch (error) {
      console.error("Error handling selection:", error);
      setShowResults(false);
    }
  }, [fetchAddress]);

  // Update map bounds
  const updateMapBounds = useCallback(() => {
    if (mapRef.current) {
      mapRef.current.setMaxBounds(YEMEN_BOUNDS);
      mapRef.current.setMinZoom(6);
      mapRef.current.setMaxZoom(18);
    }
  }, []);

  // Handle address selection
  const handleAddressSelect = (address) => {
    setSelectedAddressId(address.id);
    setLocation({ lat: address.lat, lng: address.lng });
    setValue('streetAddress', address.streetAddress);
    setValue('city', address.city);
    setValue('country', address.country);
    setValue('district', address.district);
    setConfirmedAddress(`${address.streetAddress}, ${address.city}, ${address.district}`);
  };

  // Handle new address submission
  const handleAddNewAddress = async () => {
    const formData = getValues();
    if (!location) {
      alert('الرجاء تحديد الموقع على الخريطة');
      return;
    }

    try {
      const response = await fetch('/api/addresses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerId: existingFormData.customersId,
          addressName: formData.addressName || 'البيت',
          streetAddress: formData.streetAddress,
          city: formData.city,
          district: formData.district,
          country: formData.country,
          description: formData.description || '',
          location: {
            lat: location.lat,
            lng: location.lng
          },
        }),
      });
      
      if (!response.ok) throw new Error('فشل في حفظ العنوان');
      
      const savedAddress = await response.json();
      setSavedAddresses([...savedAddresses, savedAddress]);
      setSelectedAddressId(savedAddress.id);
      setShowNewAddressForm(false);
      alert('تم حفظ العنوان بنجاح!');
    } catch (error) {
      console.error('Error saving address:', error);
      alert(error.message);
    }
  };

  // Form submission handler
  const processData = (data) => {
    if (!selectedAddressId && !location) {
      alert('الرجاء تحديد عنوان أو إضافة عنوان جديد');
      return;
    }

    const finalData = {
      ...data,
      shippingCost,
      selectedAddressId,
      location: {
        lat: location.lat,
        lng: location.lng
      },
    };

    dispatch(updateCheckoutFormData(finalData));
    dispatch(setCurrentStep(currentStep + 1));
  };

  useEffect(() => {
    if (mapRef.current) {
      setIsMapReady(true);
      updateMapBounds();
    }
  }, [mapRef.current, updateMapBounds]);

  return (
    <form onSubmit={handleSubmit(processData)} className="max-w-4xl mx-auto" dir="rtl">
      <div className="space-y-8">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-lime-300 flex items-center gap-3">
            <MapPin className="w-8 h-8" />
            تفاصيل الشحن
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            الرجاء إدخال معلومات الشحن والموقع
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <MapPin className="w-6 h-6" />
            العناوين المحفوظة
          </h3>

          {savedAddresses.length === 0 ? (
            <div className="text-center py-6 bg-gray-50 rounded-lg dark:bg-gray-800">
              <p className="text-gray-600 dark:text-gray-400">
                لا توجد عناوين محفوظة. الرجاء إضافة عنوان جديد.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {savedAddresses.map((address) => (
                <div 
                  key={address.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedAddressId === address.id 
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30' 
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                  onClick={() => handleAddressSelect(address)}
                >
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 mt-1 text-gray-500 dark:text-gray-400" />
                    <div className="flex-1">
                      <p className="font-medium dark:text-gray-100">
                        {address.addressName || 'عنوان بدون اسم'}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {address.streetAddress}, {address.city}, {address.district}
                      </p>
                    </div>
                    {selectedAddressId === address.id && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={() => setShowNewAddressForm(true)}
            className="w-full p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 transition-colors"
          >
            + إضافة عنوان جديد
          </button>
        </div>

        {showNewAddressForm && (
          <div className="space-y-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h4 className="text-lg font-semibold dark:text-gray-100">إضافة عنوان جديد</h4>
            
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <TextInput
                lable="اسم العنوان"
                name="addressName"
                register={register}
                errors={errors}
              />
              <TextInput
                lable="العنوان"
                name="streetAddress"
                register={register}
                errors={errors}
                required
              />
              <TextInput
                lable="المدينة"
                name="city"
                register={register}
                errors={errors}
                required
              />
              <TextInput
                lable="المحافظة"
                name="district"
                register={register}
                errors={errors}
                required
              />
              <TextInput
                lable="الدولة"
                name="country"
                register={register}
                errors={errors}
                defaultValue="اليمن"
                readOnly
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <h3 className="text-xl font-semibold dark:text-gray-100 flex items-center gap-2">
                  <Map className="w-6 h-6" />
                  تحديد الموقع على الخريطة
                </h3>

                <div className="search-container relative flex-1 max-w-xl">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="ابحث عن موقع..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        handleSearchInput(e.target.value);
                      }}
                      className="w-full pr-4 pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                      dir="rtl"
                      autoComplete="off"
                    />
                    <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500 dark:text-gray-400" />
                    {isSearching && (
                      <div className="absolute right-3 top-2.5">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
                      </div>
                    )}
                  </div>

                  {showResults && (
                    <div className="absolute z-[1000] w-full mt-2 bg-white rounded-lg shadow-lg dark:bg-gray-800 max-h-60 overflow-y-auto">
                      {searchResults.map((result) => (
                        <button
                          key={result.place_id}
                          type="button"
                          onClick={() => handleSuggestionSelect(result)}
                          className="w-full p-3 text-right hover:bg-gray-100 dark:hover:bg-gray-700 border-b dark:border-gray-600"
                        >
                          <p className="text-sm font-medium dark:text-white">
                            {result.display_name}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {result.type}
                          </p>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsSatellite(!isSatellite)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
                  >
                    {isSatellite ? (
                      <>
                        <Satellite className="w-5 h-5" />
                        عرض الأقمار الصناعية
                      </>
                    ) : (
                      <>
                        <Map className="w-5 h-5" />
                        عرض الخريطة
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleGPSLocation}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all"
                  >
                    <Navigation className="w-5 h-5" />
                    استخدام الموقع الحالي
                  </button>
                </div>
              </div>
              
              <div className="relative h-96 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
                {!isMapReady && (
                  <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                  </div>
                )}
                <MapContainer
                  ref={mapRef}
                  center={[15.5527, 48.5164]}
                  zoom={6}
                  style={{ height: '100%', width: '100%' }}
                  className="rounded-lg"
                  whenReady={() => {
                    updateMapBounds();
                    setIsMapReady(true);
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
                  <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md text-right">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      العنوان المؤكد:
                      <span className="block text-blue-600 dark:text-blue-400">
                        {confirmedAddress || "جارٍ تحميل العنوان..."}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={handleAddNewAddress}
                className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
              >
                حفظ العنوان
              </button>
              <button
                type="button"
                onClick={() => setShowNewAddressForm(false)}
                className="px-6 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg transition-colors"
              >
                إلغاء
              </button>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <h3 className="text-xl font-semibold dark:text-gray-100 flex items-center gap-2">
            <Truck className="w-6 h-6" />
            خيارات الشحن
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {[8, 20].map((cost) => (
              <label
                key={cost}
                className={`relative p-6 border rounded-xl cursor-pointer transition-all text-right
                  ${shippingCost === cost.toString() 
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 ring-2 ring-blue-500'
                    : 'border-gray-200 hover:border-blue-300 dark:border-gray-700 dark:hover:border-blue-600'}`}
              >
                <input
                  type="radio"
                  name="shippingMethod"
                  value={cost}
                  className="absolute opacity-0"
                  onChange={(e) => setShippingCost(e.target.value)}
                />
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${
                    shippingCost === cost.toString() 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600'
                  }`}>
                    <Truck className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-gray-100">شحن UPS</p>
                    <p className="text-gray-600 dark:text-gray-400">3-5 أيام عمل</p>
                    <p className="mt-2 text-lg font-bold text-blue-600 dark:text-blue-400">
                      ${cost}.00
                    </p>
                  </div>
                  <Circle className={`w-5 h-5 ${
                    shippingCost === cost.toString() 
                      ? 'text-blue-500 fill-blue-500' 
                      : 'text-gray-400 dark:text-gray-500'
                  }`} />
                </div>
              </label>
            ))}
          </div>
        </div>

        <NavButtons />
      </div>
    </form>
  );
}

// "use client";

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import TextInput from "../../Forminputs/TextInput";
// import { useForm } from "react-hook-form";
// import NavButtons from "../NavButtons";
// import { Circle, Truck, MapPin, Navigation, Globe, Satellite, Map, Search } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import { setCurrentStep, updateCheckoutFormData } from "@/redux/slices/checkoutSlice";

// // Yemen boundaries
// const YEMEN_BOUNDS = [
//   [12.1110, 41.6085],
//   [18.9997, 54.5300]
// ];

// // Configure Leaflet marker
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
//       onLocationSelect(e.latlng);
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
//     setValue,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       ...existingFormData,
//     },
//   });

//   const [shippingCost, setShippingCost] = useState(existingFormData.shippingCost || "");
//   const [location, setLocation] = useState(null);
//   const [confirmedAddress, setConfirmedAddress] = useState("");
//   const [isSatellite, setIsSatellite] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [isSearching, setIsSearching] = useState(false);
//   const [showResults, setShowResults] = useState(false);
//   const mapRef = useRef(null);
//   const timeoutRef = useRef(null);

//   // Fetch address from coordinates
//   const fetchAddress = useCallback(async (lat, lng) => {
//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1&accept-language=ar`
//       );
//       const data = await response.json();
      
//       const addressParts = [
//         data.address?.road,
//         data.address?.city || data.address?.town,
//         data.address?.state,
//         data.address?.country || "اليمن"
//       ].filter(Boolean);

//       setConfirmedAddress(addressParts.join("، "));
      
//       setValue("streetAddress", data.address?.road || "");
//       setValue("city", data.address?.city || data.address?.town || "");
//       setValue("country", data.address?.country || "اليمن");
//       setValue("district", data.address?.state || "");
      
//     } catch (error) {
//       console.error("Failed to fetch address:", error);
//     }
//   }, [setValue]);

//   // Handle GPS location detection
//   const handleGPSLocation = useCallback(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           const latlng = { lat: latitude, lng: longitude };
          
//           if (mapRef.current) {
//             const map = mapRef.current;
//             map.flyTo([latitude, longitude], 16, { animate: true, duration: 1 });
            
//             new L.Marker([latitude, longitude], {
//               icon: L.icon({
//                 iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//                 iconSize: [35, 46],
//                 iconAnchor: [17, 46]
//               })
//             }).addTo(map);

//             setLocation(latlng);
//             fetchAddress(latitude, longitude);
//           }
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

//   // Handle search with debounce
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

//   // Handle suggestion selection
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

//         setLocation({ lat, lng: lon });
//         fetchAddress(lat, lon);
        
//         setSearchQuery(result.display_name);
//         setShowResults(false);
//       }
//     } catch (error) {
//       console.error("Error handling selection:", error);
//       setShowResults(false);
//     }
//   }, [fetchAddress]);

//   // Update map bounds
//   const updateMapBounds = useCallback(() => {
//     if (mapRef.current) {
//       mapRef.current.setMaxBounds(YEMEN_BOUNDS);
//       mapRef.current.setMinZoom(6);
//       mapRef.current.setMaxZoom(18);
//     }
//   }, []);

//   // Handle outside clicks
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!e.target.closest('.search-container')) {
//         setShowResults(false);
//       }
//     };
//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, []);

//   // Form submission
//   const processData = (data) => {
//     if (!location) {
//       alert("الرجاء تحديد الموقع على الخريطة");
//       return;
//     }
    
//     data.shippingCost = shippingCost;
//     data.location = location;
//     dispatch(updateCheckoutFormData(data));
//     dispatch(setCurrentStep(currentStep + 1));
//   };

//   return (
//     <form onSubmit={handleSubmit(processData)} className="max-w-4xl mx-auto" dir="rtl">
//       <div className="space-y-8">
//         <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-lime-300 flex items-center gap-3">
//             <MapPin className="w-8 h-8" />
//             تفاصيل الشحن
//           </h2>
//           <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
//             الرجاء إدخال معلومات الشحن والموقع
//           </p>
//         </div>

//         <div className="grid gap-6 md:grid-cols-2">
//           <TextInput
//             label="العنوان"
//             name="streetAddress"
//             register={register}
//             errors={errors}
//             icon={<Navigation className="w-5 h-5 text-gray-400" />}
//           />
//           <TextInput
//             label="المدينة"
//             name="city"
//             register={register}
//             errors={errors}
//             icon={<Globe className="w-5 h-5 text-gray-400" />}
//           />
//           <TextInput
//             label="الدولة"
//             name="country"
//             register={register}
//             errors={errors}
//             defaultValue="اليمن"
//             readOnly
//           />
//           <TextInput
//             label="المحافظة"
//             name="district"
//             register={register}
//             errors={errors}
//           />
//           {/* <TextInput
//             label="وصف الموقع"
//             name="description"
//             register={register}
//             errors={errors}
//             className="col-span-full"
//           /> */}
//         </div>

//         <div className="space-y-4">
//           <div className="flex items-center justify-between gap-4 flex-wrap">
//             <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
//               <Map className="w-6 h-6" />
//               تحديد موقع التسليم
//             </h3>

//             <div className="search-container relative flex-1 max-w-xl">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="ابحث عن موقع..."
//                   value={searchQuery}
//                   onChange={(e) => {
//                     setSearchQuery(e.target.value);
//                     handleSearchInput(e.target.value);
//                   }}
//                   className="w-full pr-4 pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
//                   dir="rtl"
//                   autoComplete="off"
//                 />
//                 <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500 dark:text-gray-400" />
//                 {isSearching && (
//                   <div className="absolute right-3 top-2.5">
//                     <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
//                   </div>
//                 )}
//               </div>

//               {showResults && (
//                 <div className="absolute z-[1000] w-full mt-2 bg-white rounded-lg shadow-lg dark:bg-gray-800 max-h-60 overflow-y-auto">
//                   {searchResults.length > 0 ? (
//                     searchResults.map((result) => (
//                       <button
//                         key={result.place_id}
//                         type="button"
//                         onClick={() => handleSuggestionSelect(result)}
//                         className="w-full p-3 text-right hover:bg-gray-100 dark:hover:bg-gray-700 border-b dark:border-gray-600"
//                       >
//                         <p className="text-sm font-medium dark:text-white">
//                           {result.display_name}
//                         </p>
//                         <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
//                           {result.type}
//                         </p>
//                       </button>
//                     ))
//                   ) : (
//                     <div className="p-3 text-gray-500 dark:text-gray-400 text-sm text-right">
//                       لا توجد نتائج مطابقة
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>

//             <div className="flex gap-2">
//               <button
//                 type="button"
//                 onClick={() => setIsSatellite(!isSatellite)}
//                 className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
//               >
//                 {isSatellite ? (
//                   <>
//                     <Satellite className="w-5 h-5" />
//                     عرض الأقمار الصناعية
//                   </>
//                 ) : (
//                   <>
//                     <Map className="w-5 h-5" />
//                     عرض الخريطة
//                   </>
//                 )}
//               </button>

//               <button
//                 type="button"
//                 onClick={handleGPSLocation}
//                 className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all"
//               >
//                 <Navigation className="w-5 h-5" />
//                 استخدام الموقع الحالي
//               </button>
//             </div>
//           </div>

//           <div className="relative h-96 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
//             <MapContainer
//               ref={mapRef}
//               center={[15.5527, 48.5164]}
//               zoom={6}
//               style={{ height: "100%", width: "100%" }}
//               className="rounded-lg"
//               whenReady={updateMapBounds}
//             >
//               {isSatellite ? (
//                 <TileLayer
//                   url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
//                   attribution="Esri"
//                   bounds={YEMEN_BOUNDS}
//                 />
//               ) : (
//                 <TileLayer
//                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                   attribution="OpenStreetMap"
//                   bounds={YEMEN_BOUNDS}
//                 />
//               )}
//               <LocationPicker
//                 onLocationSelect={(latlng) => {
//                   setLocation(latlng);
//                   fetchAddress(latlng.lat, latlng.lng);
//                 }}
//               />
//             </MapContainer>

//             {location && (
//               <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md text-right">
//                 <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
//                   العنوان المؤكد:
//                   <span className="block text-blue-600 dark:text-blue-400">
//                     {confirmedAddress || "جارٍ تحميل العنوان..."}
//                   </span>
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="space-y-4">
//           <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
//             <Truck className="w-6 h-6" />
//             خيارات الشحن
//           </h3>
//           <div className="grid gap-4 md:grid-cols-2">
//             {[8, 20].map((cost) => (
//               <label
//                 key={cost}
//                 className={`relative p-6 border rounded-xl cursor-pointer transition-all text-right
//                   ${shippingCost === cost.toString() 
//                     ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 ring-2 ring-blue-500'
//                     : 'border-gray-200 hover:border-blue-300 dark:border-gray-700 dark:hover:border-blue-600'}`}
//               >
//                 <input
//                   type="radio"
//                   name="shippingMethod"
//                   value={cost}
//                   className="absolute opacity-0"
//                   onChange={(e) => setShippingCost(e.target.value)}
//                 />
//                 <div className="flex items-center gap-4">
//                   <div className={`p-3 rounded-lg ${
//                     shippingCost === cost.toString() 
//                       ? 'bg-blue-500 text-white' 
//                       : 'bg-gray-100 dark:bg-gray-700 text-gray-600'
//                   }`}>
//                     <Truck className="w-6 h-6" />
//                   </div>
//                   <div className="flex-1">
//                     <p className="font-medium text-gray-900 dark:text-gray-100">شحن UPS</p>
//                     <p className="text-gray-600 dark:text-gray-400">3-5 أيام عمل</p>
//                     <p className="mt-2 text-lg font-bold text-blue-600 dark:text-blue-400">
//                       ${cost}.00
//                     </p>
//                   </div>
//                   <Circle className={`w-5 h-5 ${
//                     shippingCost === cost.toString() 
//                       ? 'text-blue-500 fill-blue-500' 
//                       : 'text-gray-400 dark:text-gray-500'
//                   }`} />
//                 </div>
//               </label>
//             ))}
//           </div>
//         </div>

//         <NavButtons />
//       </div>
//     </form>
//   );
// }

// npm install react-leaflet leaf













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
//   const [isSatellite, setIsSatellite] = useState(true); // State to toggle between Satellite and Map view

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
//          <TextInput
//           lable="Site description"
//           name="description"
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
//             {/* Toggle between Satellite and Map views */}
//             {isSatellite ? (
//               <TileLayer
//                 url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
//                 attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
//               />
//             ) : (
//               <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//               />
//             )}
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

//         {/* Toggle Button for Satellite/Map View */}
//         <div className="col-span-full mt-4">
//           <button
//             type="button"
//             className="px-4 py-2 bg-blue-500 text-white rounded-md"
//             onClick={() => setIsSatellite(!isSatellite)}
//           >
//             Toggle to {isSatellite ? "Map" : "Satellite"} View
//           </button>
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
// import { Circle, Truck, MapPin, Navigation, Globe, Satellite, Map } from "lucide-react";
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
//   const [isSatellite, setIsSatellite] = useState(true); // State to toggle between Satellite and Map view

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
//     <form onSubmit={handleSubmit(processData)} className="max-w-4xl mx-auto">
//       <div className="space-y-8">
//         {/* Form Header */}
//         <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-lime-300 flex items-center gap-3">
//             <MapPin className="w-8 h-8" />
//             Shipping Details
//           </h2>
//           <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
//             Please provide your shipping information and location
//           </p>
//         </div>

//         {/* Address Form */}
//         <div className="grid gap-6 md:grid-cols-2">
//           <TextInput
//             label="Street Address"
//             name="streetAddress"
//             register={register}
//             errors={errors}
//             icon={<Navigation className="w-5 h-5 text-gray-400" />}
//           />
//           <TextInput
//             label="City"
//             name="city"
//             register={register}
//             errors={errors}
//             icon={<Globe className="w-5 h-5 text-gray-400" />}
//           />
//           <TextInput
//             label="Country"
//             name="country"
//             register={register}
//             errors={errors}
//             className="w-full"
//           />
//           <TextInput
//             label="District"
//             name="district"
//             register={register}
//             errors={errors}
//             className="w-full"
//           />
//           <TextInput
//             label="Site Description"
//             name="description"
//             register={register}
//             errors={errors}
//             className="col-span-full"
//           />
//         </div>

//         {/* Interactive Map Section */}
//         <div className="space-y-4">
//           <div className="flex items-center justify-between">
//             <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
//               <Map className="w-6 h-6" />
//               Select Delivery Location
//             </h3>
//             <button
//               type="button"
//               onClick={() => setIsSatellite(!isSatellite)}
//               className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
//             >
//               {isSatellite ? (
//                 <>
//                   <Satellite className="w-5 h-5" />
//                   Satellite View
//                 </>
//               ) : (
//                 <>
//                   <Map className="w-5 h-5" />
//                   Map View
//                 </>
//               )}
//             </button>
//           </div>
          
//           <div className="relative h-96 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
//             <MapContainer
//               center={[15.5527, 48.5164]}
//               zoom={6}
//               style={{ height: "100%", width: "100%" }}
//               className="rounded-lg"
//             >
//               {isSatellite ? (
//                 <TileLayer
//                   url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
//                   attribution='&copy; Esri'
//                 />
//               ) : (
//                 <TileLayer
//                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                   attribution='&copy; OpenStreetMap'
//                 />
//               )}
//               <LocationPicker
//                 onLocationSelect={(latlng) => {
//                   setLocation(latlng);
//                   fetchAddress(latlng.lat, latlng.lng);
//                 }}
//               />
//             </MapContainer>
            
//             {location && (
//               <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md">
//                 <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
//                   Selected Coordinates:
//                   <span className="block text-blue-600 dark:text-blue-400">
//                     {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
//                   </span>
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Shipping Options */}
//         <div className="space-y-4">
//           <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
//             <Truck className="w-6 h-6" />
//             Shipping Method
//           </h3>
//           <div className="grid gap-4 md:grid-cols-2">
//             {[8, 20].map((cost) => (
//               <label
//                 key={cost}
//                 className={`relative p-6 border rounded-xl cursor-pointer transition-all
//                   ${shippingCost === cost.toString() ? 
//                     'border-blue-500 bg-blue-50 dark:bg-blue-900/30' : 
//                     'border-gray-200 hover:border-blue-300 dark:border-gray-700 dark:hover:border-blue-600'}
//                   ${shippingCost === cost.toString() ? 'ring-2 ring-blue-500' : ''}`}
//               >
//                 <input
//                   type="radio"
//                   name="hosting"
//                   value={cost}
//                   className="absolute opacity-0"
//                   onChange={(e) => setShippingCost(e.target.value)}
//                 />
//                 <div className="flex items-center gap-4">
//                   <div className={`p-3 rounded-lg ${shippingCost === cost.toString() ? 
//                     'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600'}`}>
//                     <Truck className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <p className="font-medium text-gray-900 dark:text-gray-100">UPS Delivery</p>
//                     <p className="text-gray-600 dark:text-gray-400">
//                       Estimated 3-5 business days
//                     </p>
//                     <p className="mt-2 text-lg font-bold text-blue-600 dark:text-blue-400">
//                       ${cost}.00
//                     </p>
//                   </div>
//                   <Circle className={`ml-auto w-5 h-5 ${shippingCost === cost.toString() ? 
//                     'text-blue-500 fill-blue-500' : 'text-gray-400 dark:text-gray-500'}`}
//                   />
//                 </div>
//               </label>
//             ))}
//           </div>
//         </div>

//         <NavButtons />
//       </div>
//     </form>
//   );
// }

// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import TextInput from "../../Forminputs/TextInput";
// import { useForm } from "react-hook-form";
// import NavButtons from "../NavButtons";
// import { Circle, Truck, MapPin, Navigation, Globe, Satellite, Map, Search } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import { setCurrentStep, updateCheckoutFormData } from "@/redux/slices/checkoutSlice";

// // Yemen boundaries coordinates
// const YEMEN_BOUNDS = [
//   [12.1110, 41.6085], // Southwest coordinates
//   [18.9997, 54.5300]  // Northeast coordinates
// ];

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
//       onLocationSelect(e.latlng);
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
//     setValue,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       ...existingFormData,
//     },
//   });

//   const initialShippingCost = existingFormData.shippingCost || "";
//   const [shippingCost, setShippingCost] = useState(initialShippingCost);
//   const [location, setLocation] = useState(null);
//   const [isSatellite, setIsSatellite] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const mapRef = useRef(null);
//   const [showResults, setShowResults] = useState(false);

//   // Fetch address from coordinates
//   async function fetchAddress(lat, lng) {
//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1&accept-language=ar`
//       );
//       const data = await response.json();

//       setValue("streetAddress", data.address.road || "");
//       setValue("city", data.address.city || data.address.town || "");
//       setValue("country", data.address.country || "اليمن");
//       setValue("district", data.address.state || "");

//     } catch (error) {
//       console.error("Failed to fetch address:", error);
//     }
//   }

//   // Handle form submission
//   async function processData(data) {
//     data.shippingCost = shippingCost;
//     data.location = location;
//     dispatch(updateCheckoutFormData(data));
//     dispatch(setCurrentStep(currentStep + 1));
//   }

//   // Search locations
//   const handleSearch = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery}&countrycodes=ye&bounded=1&viewbox=41.6085,12.1110,54.5300,18.9997&accept-language=ar`
//       );
//       const data = await response.json();
//       setSearchResults(data);
//       setShowResults(true);
//     } catch (error) {
//       console.error("Search error:", error);
//     }
//   };

//   // Handle location selection from search
//   const handleLocationSelect = (result) => {
//     const lat = parseFloat(result.lat);
//     const lon = parseFloat(result.lon);
//     if (mapRef.current) {
//       mapRef.current.flyTo([lat, lon], 14);
//       setLocation({ lat, lng: lon });
//       setValue("district", result.address.state || "");
//       setValue("city", result.address.city || result.address.town || "");
//       setSearchQuery(result.display_name);
//       setShowResults(false);
//     }
//   };

//   // Set map bounds
//   const updateMapBounds = () => {
//     if (mapRef.current) {
//       mapRef.current.setMaxBounds(YEMEN_BOUNDS);
//       mapRef.current.setMinZoom(6);
//       mapRef.current.setMaxZoom(18);
//     }
//   };

//   // Handle clicks outside search results
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!e.target.closest('.search-container')) {
//         setShowResults(false);
//       }
//     };
//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, []);

//   return (
//     <form onSubmit={handleSubmit(processData)} className="max-w-4xl mx-auto" dir="rtl">
//       <div className="space-y-8">
//         {/* Form Header */}
//         <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-lime-300 flex items-center gap-3">
//             <MapPin className="w-8 h-8" />
//             تفاصيل الشحن
//           </h2>
//           <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
//             الرجاء إدخال معلومات الشحن والموقع
//           </p>
//         </div>

//         {/* Address Form */}
//         <div className="grid gap-6 md:grid-cols-2">
//           <TextInput
//             lable="العنوان"
//             name="streetAddress"
//             register={register}
//             errors={errors}
//             icon={<Navigation className="w-5 h-5 text-gray-400" />}
//           />
//           <TextInput
//             lable="المدينة"
//             name="city"
//             register={register}
//             errors={errors}
//             icon={<Globe className="w-5 h-5 text-gray-400" />}
//           />
//           <TextInput
//             lable="الدولة"
//             name="country"
//             register={register}
//             errors={errors}
//             defaultValue="اليمن"
//             className="w-full"
//             readOnly
//           />
//           <TextInput
//             lable="المحافظة"
//             name="district"
//             register={register}
//             errors={errors}
//             className="w-full"
//           />
//           <TextInput
//             lable="وصف الموقع"
//             name="description"
//             register={register}
//             errors={errors}
//             className="col-span-full"
//           />
//         </div>

//         {/* Map Section */}
//         <div className="space-y-4">
//           <div className="flex items-center justify-between gap-4 flex-wrap">
//             <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
//               <Map className="w-6 h-6" />
//               تحديد موقع التسليم
//             </h3>
            
//             {/* Search Container */}
//             <div className="search-container relative flex-1 max-w-xl">
//               <form onSubmit={handleSearch} className="relative">
//                 <input
//                   type="text"
//                   placeholder="ابحث عن موقع (محافظة، مدينة، شارع)..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pr-4 pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
//                   dir="rtl"
//                 />
//                 <button
//                   type="submit"
//                   className="absolute left-3 top-2.5 text-gray-500 dark:text-gray-400"
//                 >
//                   <Search className="w-5 h-5" />
//                 </button>
//               </form>
              
//               {/* Search Results */}
//               {showResults && (
//                 <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg dark:bg-gray-800 max-h-60 overflow-y-auto">
//                   {searchResults.length > 0 ? (
//                     searchResults.map((result) => (
//                       <div
//                         key={result.place_id}
//                         onClick={() => handleLocationSelect(result)}
//                         className="p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 border-b dark:border-gray-600 text-right"
//                       >
//                         <p className="text-sm font-medium dark:text-white">
//                           {result.display_name}
//                         </p>
//                       </div>
//                     ))
//                   ) : (
//                     <div className="p-3 text-gray-500 dark:text-gray-400 text-sm text-right">
//                       لا توجد نتائج
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>

//             {/* View Toggle Button */}
//             <button
//               type="button"
//               onClick={() => setIsSatellite(!isSatellite)}
//               className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
//             >
//               {isSatellite ? (
//                 <>
//                   <Satellite className="w-5 h-5" />
//                   عرض الأقمار الصناعية
//                 </>
//               ) : (
//                 <>
//                   <Map className="w-5 h-5" />
//                   عرض الخريطة
//                 </>
//               )}
//             </button>
//           </div>

//           <div className="relative h-96 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
//             <MapContainer
//               ref={mapRef}
//               center={[15.5527, 48.5164]}
//               zoom={6}
//               style={{ height: "100%", width: "100%" }}
//               className="rounded-lg"
//               whenReady={updateMapBounds}
//             >
//               {isSatellite ? (
//                 <TileLayer
//                   url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
//                   attribution='&copy; Esri'
//                   bounds={YEMEN_BOUNDS}
//                 />
//               ) : (
//                 <TileLayer
//                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                   attribution='&copy; OpenStreetMap'
//                   bounds={YEMEN_BOUNDS}
//                 />
//               )}

//               <LocationPicker
//                 onLocationSelect={(latlng) => {
//                   setLocation(latlng);
//                   fetchAddress(latlng.lat, latlng.lng);
//                 }}
//               />
//             </MapContainer>

//             {location && (
//               <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md text-right">
//                 <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
//                   الإحداثيات المحددة:
//                   <span className="block text-blue-600 dark:text-blue-400">
//                     {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
//                   </span>
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Shipping Options */}
//         <div className="space-y-4">
//           <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
//             <Truck className="w-6 h-6" />
//             طريقة الشحن
//           </h3>
//           <div className="grid gap-4 md:grid-cols-2">
//             {[8, 20].map((cost) => (
//               <label
//                 key={cost}
//                 className={`relative p-6 border rounded-xl cursor-pointer transition-all text-right
//                   ${shippingCost === cost.toString() ? 
//                     'border-blue-500 bg-blue-50 dark:bg-blue-900/30' : 
//                     'border-gray-200 hover:border-blue-300 dark:border-gray-700 dark:hover:border-blue-600'}
//                   ${shippingCost === cost.toString() ? 'ring-2 ring-blue-500' : ''}`}
//               >
//                 <input
//                   type="radio"
//                   name="hosting"
//                   value={cost}
//                   className="absolute opacity-0"
//                   onChange={(e) => setShippingCost(e.target.value)}
//                 />
//                 <div className="flex items-center gap-4">
//                   <div className={`p-3 rounded-lg ${shippingCost === cost.toString() ? 
//                     'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600'}`}>
//                     <Truck className="w-6 h-6" />
//                   </div>
//                   <div className="flex-1">
//                     <p className="font-medium text-gray-900 dark:text-gray-100">شحن UPS</p>
//                     <p className="text-gray-600 dark:text-gray-400">
//                       التوصيل خلال 3-5 أيام عمل
//                     </p>
//                     <p className="mt-2 text-lg font-bold text-blue-600 dark:text-blue-400">
//                       ${cost}.00
//                     </p>
//                   </div>
//                   <Circle className={`w-5 h-5 ${shippingCost === cost.toString() ? 
//                     'text-blue-500 fill-blue-500' : 'text-gray-400 dark:text-gray-500'}`}
//                   />
//                 </div>
//               </label>
//             ))}
//           </div>
//         </div>

//         <NavButtons />
//       </div>
//     </form>
//   );
// }























// "use client";

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import TextInput from "../../Forminputs/TextInput";
// import { useForm } from "react-hook-form";
// import NavButtons from "../NavButtons";
// import { Circle, Truck, MapPin, Navigation, Globe, Satellite, Map, Search } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import { setCurrentStep, updateCheckoutFormData } from "@/redux/slices/checkoutSlice";

// // Yemen boundaries
// const YEMEN_BOUNDS = [
//   [12.1110, 41.6085],
//   [18.9997, 54.5300]
// ];

// // Configure Leaflet marker
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
//       onLocationSelect(e.latlng);
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
//     setValue,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       ...existingFormData,
//     },
//   });

//   const [shippingCost, setShippingCost] = useState(existingFormData.shippingCost || "");
//   const [location, setLocation] = useState(null);
//   const [isSatellite, setIsSatellite] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [isSearching, setIsSearching] = useState(false);
//   const [showResults, setShowResults] = useState(false); // تم إضافة هذه الحالة
//   const mapRef = useRef(null);
//   const timeoutRef = useRef(null);

//   // Fetch address from coordinates
//   const fetchAddress = useCallback(async (lat, lng) => {
//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1&accept-language=ar`
//       );
//       const data = await response.json();
      
//       setValue("streetAddress", data.address.road || "");
//       setValue("city", data.address.city || data.address.town || "");
//       setValue("country", data.address.country || "اليمن");
//       setValue("district", data.address.state || "");
      
//     } catch (error) {
//       console.error("Failed to fetch address:", error);
//     }
//   }, [setValue]);

//   // Handle search with debounce
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
//         setShowResults(true); // إظهار النتائج بعد الحصول عليها
//       } catch (error) {
//         console.error("Search error:", error);
//       } finally {
//         setIsSearching(false);
//       }
//     }, 300);
//   }, []);

//   // Handle suggestion selection
//   const handleSuggestionSelect = useCallback((result) => {
//     const lat = parseFloat(result.lat);
//     const lon = parseFloat(result.lon);
    
//     if (mapRef.current) {
//       const map = mapRef.current;
//       map.flyTo([lat, lon], 16, { animate: true, duration: 1 });
      
//       new L.Marker([lat, lon], {
//         icon: L.icon({
//           iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//           iconSize: [35, 46],
//           iconAnchor: [17, 46]
//         })
//       }).addTo(map);

//       setLocation({ lat, lng: lon });
//       setValue("district", result.address.state || "");
//       setValue("city", result.address.city || result.address.town || "");
//       setSearchQuery(result.display_name);
//       setShowResults(false); // إخفاء النتائج بعد الاختيار
//     }
//   }, [setValue]);

//   // Update map bounds
//   const updateMapBounds = useCallback(() => {
//     if (mapRef.current) {
//       mapRef.current.setMaxBounds(YEMEN_BOUNDS);
//       mapRef.current.setMinZoom(6);
//       mapRef.current.setMaxZoom(18);
//     }
//   }, []);

//   // Handle outside clicks
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!e.target.closest('.search-container')) {
//         setShowResults(false);
//       }
//     };
//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, []);

//   // Form submission
//   const processData = (data) => {
//     data.shippingCost = shippingCost;
//     data.location = location;
//     dispatch(updateCheckoutFormData(data));
//     dispatch(setCurrentStep(currentStep + 1));
//   };

//   return (
//     <form onSubmit={handleSubmit(processData)} className="max-w-4xl mx-auto" dir="rtl">
//       <div className="space-y-8">
//         {/* Header */}
//         <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-lime-300 flex items-center gap-3">
//             <MapPin className="w-8 h-8" />
//             تفاصيل الشحن
//           </h2>
//           <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
//             الرجاء إدخال معلومات الشحن والموقع
//           </p>
//         </div>

//         {/* Address Form */}
//         <div className="grid gap-6 md:grid-cols-2">
//           <TextInput
//             label="العنوان"
//             name="streetAddress"
//             register={register}
//             errors={errors}
//             icon={<Navigation className="w-5 h-5 text-gray-400" />}
//           />
//           <TextInput
//             label="المدينة"
//             name="city"
//             register={register}
//             errors={errors}
//             icon={<Globe className="w-5 h-5 text-gray-400" />}
//           />
//           <TextInput
//             label="الدولة"
//             name="country"
//             register={register}
//             errors={errors}
//             defaultValue="اليمن"
//             readOnly
//           />
//           <TextInput
//             label="المحافظة"
//             name="district"
//             register={register}
//             errors={errors}
//           />
//           <TextInput
//             label="وصف الموقع"
//             name="description"
//             register={register}
//             errors={errors}
//             className="col-span-full"
//           />
//         </div>

//         {/* Map Section */}
//         <div className="space-y-4">
//           <div className="flex items-center justify-between gap-4 flex-wrap">
//             <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
//               <Map className="w-6 h-6" />
//               تحديد موقع التسليم
//             </h3>

//             {/* Search Container */}
//             <div className="search-container relative flex-1 max-w-xl">
//               <div className="relative ">
//                 <input
//                   type="text"
//                   placeholder="ابحث عن موقع..."
//                   value={searchQuery}
//                   onChange={(e) => {
//                     setSearchQuery(e.target.value);
//                     handleSearchInput(e.target.value);
//                   }}
//                   className="w-full pr-4 pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
//                   dir="rtl"
//                   autoComplete="off"
//                 />
//                 <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500 dark:text-gray-400" />
//                 {isSearching && (
//                   <div className="absolute right-3 top-2.5">
//                     <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
//                   </div>
//                 )}
//               </div>

//               {/* Search Results */}
//               {showResults && (
//                 <div className="absolute z-[1000] w-full mt-2 bg-white rounded-lg shadow-lg dark:bg-gray-800 max-h-60 overflow-y-auto" style={{ zIndex: 1000 }} >
//                   {searchResults.length > 0 ? (
//                     searchResults.map((result) => (
//                       <button
//                         key={result.place_id}
//                         type="button"
//                         onClick={() => handleSuggestionSelect(result)}
//                         className="w-full p-3 text-right hover:bg-gray-100 dark:hover:bg-gray-700 border-b dark:border-gray-600"
//                       >
//                         <p className="text-sm font-medium dark:text-white">
//                           {result.display_name}
//                         </p>
//                         <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
//                           {result.type}
//                         </p>
//                       </button>
//                     ))
//                   ) : (
//                     <div className="p-3 text-gray-500 dark:text-gray-400 text-sm text-right">
//                       لا توجد نتائج مطابقة
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>

//             {/* View Toggle */}
//             <button
//               type="button"
//               onClick={() => setIsSatellite(!isSatellite)}
//               className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
//             >
//               {isSatellite ? (
//                 <>
//                   <Satellite className="w-5 h-5" />
//                   عرض الأقمار الصناعية
//                 </>
//               ) : (
//                 <>
//                   <Map className="w-5 h-5" />
//                   عرض الخريطة
//                 </>
//               )}
//             </button>
//           </div>

//           {/* Map Container */}
//           <div className="relative h-96 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
//             <MapContainer
//               ref={mapRef}
//               center={[15.5527, 48.5164]}
//               zoom={6}
//               style={{ height: "100%", width: "100%" }}
//               className="rounded-lg"
//               whenReady={updateMapBounds}
//             >
//               {isSatellite ? (
//                 <TileLayer
//                   url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
//                   attribution="Esri"
//                   bounds={YEMEN_BOUNDS}
//                 />
//               ) : (
//                 <TileLayer
//                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                   attribution="OpenStreetMap"
//                   bounds={YEMEN_BOUNDS}
//                 />
//               )}
//               <LocationPicker
//                 onLocationSelect={(latlng) => {
//                   setLocation(latlng);
//                   fetchAddress(latlng.lat, latlng.lng);
//                 }}
//               />
//             </MapContainer>

//             {location && (
//               <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md text-right">
//                 <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
//                   الإحداثيات:
//                   <span className="block text-blue-600 dark:text-blue-400">
//                     {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
//                   </span>
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Shipping Options */}
//         <div className="space-y-4">
//           <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
//             <Truck className="w-6 h-6" />
//             خيارات الشحن
//           </h3>
//           <div className="grid gap-4 md:grid-cols-2">
//             {[8, 20].map((cost) => (
//               <label
//                 key={cost}
//                 className={`relative p-6 border rounded-xl cursor-pointer transition-all text-right
//                   ${shippingCost === cost.toString() 
//                     ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 ring-2 ring-blue-500'
//                     : 'border-gray-200 hover:border-blue-300 dark:border-gray-700 dark:hover:border-blue-600'}`}
//               >
//                 <input
//                   type="radio"
//                   name="shippingMethod"
//                   value={cost}
//                   className="absolute opacity-0"
//                   onChange={(e) => setShippingCost(e.target.value)}
//                 />
//                 <div className="flex items-center gap-4">
//                   <div className={`p-3 rounded-lg ${
//                     shippingCost === cost.toString() 
//                       ? 'bg-blue-500 text-white' 
//                       : 'bg-gray-100 dark:bg-gray-700 text-gray-600'
//                   }`}>
//                     <Truck className="w-6 h-6" />
//                   </div>
//                   <div className="flex-1">
//                     <p className="font-medium text-gray-900 dark:text-gray-100">شحن UPS</p>
//                     <p className="text-gray-600 dark:text-gray-400">3-5 أيام عمل</p>
//                     <p className="mt-2 text-lg font-bold text-blue-600 dark:text-blue-400">
//                       ${cost}.00
//                     </p>
//                   </div>
//                   <Circle className={`w-5 h-5 ${
//                     shippingCost === cost.toString() 
//                       ? 'text-blue-500 fill-blue-500' 
//                       : 'text-gray-400 dark:text-gray-500'
//                   }`} />
//                 </div>
//               </label>
//             ))}
//           </div>
//         </div>

//         <NavButtons />
//       </div>
//     </form>
//   );
// }










// "use client";

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import TextInput from "../../Forminputs/TextInput";
// import { useForm } from "react-hook-form";
// import NavButtons from "../NavButtons";
// import { Circle, Truck, MapPin, Navigation, Globe, Satellite, Map, Search } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import { setCurrentStep, updateCheckoutFormData } from "@/redux/slices/checkoutSlice";

// // Yemen boundaries
// const YEMEN_BOUNDS = [
//   [12.1110, 41.6085],
//   [18.9997, 54.5300]
// ];

// // Configure Leaflet marker
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
//       onLocationSelect(e.latlng);
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
//     setValue,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       ...existingFormData,
//     },
//   });

//   const [shippingCost, setShippingCost] = useState(existingFormData.shippingCost || "");
//   const [location, setLocation] = useState(null);
//   const [isSatellite, setIsSatellite] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [isSearching, setIsSearching] = useState(false);
//   const [showResults, setShowResults] = useState(false);
//   const mapRef = useRef(null);
//   const timeoutRef = useRef(null);

//   // Fetch address from coordinates
//   const fetchAddress = useCallback(async (lat, lng) => {
//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1&accept-language=ar`
//       );
//       const data = await response.json();
      
//       // استخدام Optional Chaining للتحقق من وجود الخصائص
//       setValue("streetAddress", data.address?.road || "");
//       setValue("city", data.address?.city || data.address?.town || "");
//       setValue("country", data.address?.country || "اليمن");
//       setValue("district", data.address?.state || "");
      
//     } catch (error) {
//       console.error("Failed to fetch address:", error);
//     }
//   }, [setValue]);

//   // Handle search with debounce
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

//   // Handle suggestion selection
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

//         setLocation({ lat, lng: lon });
        
//         // استخدام Optional Chaining مع قيم افتراضية
//         setValue("district", result.address?.state || "غير محدد");
//         setValue("city", result.address?.city || result.address?.town || "غير محدد");
        
//         setSearchQuery(result.display_name);
//         setShowResults(false);
//       }
//     } catch (error) {
//       console.error("Error handling selection:", error);
//       setShowResults(false);
//     }
//   }, [setValue]);

//   // Update map bounds
//   const updateMapBounds = useCallback(() => {
//     if (mapRef.current) {
//       mapRef.current.setMaxBounds(YEMEN_BOUNDS);
//       mapRef.current.setMinZoom(6);
//       mapRef.current.setMaxZoom(18);
//     }
//   }, []);

//   // Handle outside clicks
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!e.target.closest('.search-container')) {
//         setShowResults(false);
//       }
//     };
//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, []);

//   // Form submission
//   const processData = (data) => {
//     data.shippingCost = shippingCost;
//     data.location = location;
//     dispatch(updateCheckoutFormData(data));
//     dispatch(setCurrentStep(currentStep + 1));
//   };

//   return (
//     <form onSubmit={handleSubmit(processData)} className="max-w-4xl mx-auto" dir="rtl">
// <div className="space-y-8">
//         {/* Header */}
//         <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-lime-300 flex items-center gap-3">
//             <MapPin className="w-8 h-8" />
//             تفاصيل الشحن
//           </h2>
//           <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
//             الرجاء إدخال معلومات الشحن والموقع
//           </p>
//         </div>

//         {/* Address Form */}
//         <div className="grid gap-6 md:grid-cols-2">
//           <TextInput
//             lable="العنوان"
//             name="streetAddress"
//             register={register}
//             errors={errors}
//             icon={<Navigation className="w-5 h-5 text-gray-400" />}
//           />
//           <TextInput
//             label="المدينة"
//             name="city"
//             register={register}
//             errors={errors}
//             icon={<Globe className="w-5 h-5 text-gray-400" />}
//           />
//           <TextInput
//             lable="الدولة"
//             name="country"
//             register={register}
//             errors={errors}
//             defaultValue="اليمن"
//             readOnly
//           />
//           <TextInput
//             lable="المحافظة"
//             name="district"
//             register={register}
//             errors={errors}
//           />
//           <TextInput
//             lable="وصف الموقع"
//             name="description"
//             register={register}
//             errors={errors}
//             className="col-span-full"
//           />
//         </div>

//         {/* Map Section */}
//         <div className="space-y-4">
//           <div className="flex items-center justify-between gap-4 flex-wrap">
//             <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
//               <Map className="w-6 h-6" />
//               تحديد موقع التسليم
//             </h3>

//             {/* Search Container */}
//             <div className="search-container relative flex-1 max-w-xl">
//               <div className="relative ">
//                 <input
//                   type="text"
//                   placeholder="ابحث عن موقع..."
//                   value={searchQuery}
//                   onChange={(e) => {
//                     setSearchQuery(e.target.value);
//                     handleSearchInput(e.target.value);
//                   }}
//                   className="w-full pr-4 pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
//                   dir="rtl"
//                   autoComplete="off"
//                 />
//                 <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500 dark:text-gray-400" />
//                 {isSearching && (
//                   <div className="absolute right-3 top-2.5">
//                     <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
//                   </div>
//                 )}
//               </div>

      
//       {/* Search Results */}
//       {showResults && (
//         <div className="absolute z-[1000] w-full mt-2 bg-white rounded-lg shadow-lg dark:bg-gray-800 max-h-60 overflow-y-auto">
//           {searchResults.length > 0 ? (
//             searchResults.map((result) => (
//               <button
//                 key={result.place_id}
//                 type="button"
//                 onClick={() => handleSuggestionSelect(result)}
//                 className="w-full p-3 text-right hover:bg-gray-100 dark:hover:bg-gray-700 border-b dark:border-gray-600"
//               >
//                 <p className="text-sm font-medium dark:text-white">
//                   {result.display_name}
//                 </p>
//                 <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
//                   {result.type}
//                 </p>
//               </button>
//             ))
//           ) : (
//             <div className="p-3 text-gray-500 dark:text-gray-400 text-sm text-right">
//               لا توجد نتائج مطابقة
//             </div>
//           )}
//         </div>
//       )}
//  </div>

// {/* View Toggle */}
// <button
//   type="button"
//   onClick={() => setIsSatellite(!isSatellite)}
//   className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
// >
//   {isSatellite ? (
//     <>
//       <Satellite className="w-5 h-5" />
//       عرض الأقمار الصناعية
//     </>
//   ) : (
//     <>
//       <Map className="w-5 h-5" />
//       عرض الخريطة
//     </>
//   )}
// </button>
// </div>

// {/* Map Container */}
// <div className="relative h-96 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
// <MapContainer
//   ref={mapRef}
//   center={[15.5527, 48.5164]}
//   zoom={6}
//   style={{ height: "100%", width: "100%" }}
//   className="rounded-lg"
//   whenReady={updateMapBounds}
// >
//   {isSatellite ? (
//     <TileLayer
//       url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
//       attribution="Esri"
//       bounds={YEMEN_BOUNDS}
//     />
//   ) : (
//     <TileLayer
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       attribution="OpenStreetMap"
//       bounds={YEMEN_BOUNDS}
//     />
//   )}
//   <LocationPicker
//     onLocationSelect={(latlng) => {
//       setLocation(latlng);
//       fetchAddress(latlng.lat, latlng.lng);
//     }}
//   />
// </MapContainer>

// {location && (
//   <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md text-right">
//     <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
//       الإحداثيات:
//       <span className="block text-blue-600 dark:text-blue-400">
//         {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
//       </span>
//     </p>
//   </div>
// )}
// </div>
// </div>

// {/* Shipping Options */}
// <div className="space-y-4">
// <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
// <Truck className="w-6 h-6" />
// خيارات الشحن
// </h3>
// <div className="grid gap-4 md:grid-cols-2">
// {[8, 20].map((cost) => (
//   <label
//     key={cost}
//     className={`relative p-6 border rounded-xl cursor-pointer transition-all text-right
//       ${shippingCost === cost.toString() 
//         ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 ring-2 ring-blue-500'
//         : 'border-gray-200 hover:border-blue-300 dark:border-gray-700 dark:hover:border-blue-600'}`}
//   >
//     <input
//       type="radio"
//       name="shippingMethod"
//       value={cost}
//       className="absolute opacity-0"
//       onChange={(e) => setShippingCost(e.target.value)}
//     />
//     <div className="flex items-center gap-4">
//       <div className={`p-3 rounded-lg ${
//         shippingCost === cost.toString() 
//           ? 'bg-blue-500 text-white' 
//           : 'bg-gray-100 dark:bg-gray-700 text-gray-600'
//       }`}>
//         <Truck className="w-6 h-6" />
//       </div>
//       <div className="flex-1">
//         <p className="font-medium text-gray-900 dark:text-gray-100">شحن UPS</p>
//         <p className="text-gray-600 dark:text-gray-400">3-5 أيام عمل</p>
//         <p className="mt-2 text-lg font-bold text-blue-600 dark:text-blue-400">
//           ${cost}.00
//         </p>
//       </div>
//       <Circle className={`w-5 h-5 ${
//         shippingCost === cost.toString() 
//           ? 'text-blue-500 fill-blue-500' 
//           : 'text-gray-400 dark:text-gray-500'
//       }`} />
//     </div>
//   </label>
// ))}
// </div>
// </div>

// <NavButtons />
// </div>
// </form>
// );
// }







