// import React from 'react'
// import OrderCard from '../../../../components/Order/OrderCard'
// import { getData } from '@/lib/getData'
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/lib/authOptions';
// export default async function page() {
//   //Fetch All Orders 
//   const orders = await getData("orders");
//   //Get the User Id
//   const session = await getServerSession(authOptions);
//   if(!session) return

//   const userId = session?.user?.id;
//   console.log(userId)
//  // const storeData = await getData(`stores?vendorId=${userId}`);
//   //const storeId = storeData[0].id;

//   if(orders.length === 0|| !orders){
//     return <p>No Orders Yet</p>
//   }
//   //Filter By User Id
//   const userOrders = orders.filter((order) => order.customersId === userId);
//   // console.log(userOrders)
//   return (
//     <section className="py-12 bg-white sm:py-16 lg:py-20">
//     <div className="px-4 m-auto sm:px-6 lg:px-8 max-w-7xl">
//         <div className="max-w-6xl mx-auto">
//             <div>
//                 <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Your Order </h1>
//                 <p className="mt-2 text-sm font-normal text-gray-600">Check the status of recent and old orders & discover more products</p>
//             </div>

//             <ul className="mt-8 space-y-5 lg:mt-12 sm:space-y-6 lg:space-y-10">
//             {
//               userOrders.map((order, i) => {
//                 return  <OrderCard key={i} order={order} />
//               })
//             }
//             </ul>
//         </div>
//     </div>
// </section>
//   )
// }
// import React from 'react'
// import OrderCard from '@/components/Order/OrderCard'
// import { getData } from '@/lib/getData'
// import { getServerSession } from 'next-auth'
// import { authOptions } from '@/lib/authOptions'

// export default async function page() {
//   // Fetch All Orders 
//   const orders = await getData("orders" , { mode: 'real-time'});

//   // Get the User Id
//   const session = await getServerSession(authOptions);
//   if (!session) return;

//   const userId = session?.user?.id;

//   if (!orders || orders.length === 0) {
//     return <p className="text-center text-gray-700 mt-6">لا توجد طلبات حتى الآن</p>
//   }

//   // Filter By User Id
//   const userOrders = orders.filter((order) => order.customersId === userId);
  
//   return (
//     <section dir="rtl" className="py-16 bg-white sm:py-16 lg:py-20">
//       <div className="px-4 m-auto sm:px-6 lg:px-6 max-w-7xl">
//         <div className="max-w-6xl mx-auto">
//           <div>
//             <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">طلباتي</h1>
//             <p className="mt-2 text-sm font-normal text-gray-600">
//               تابع حالة طلباتك السابقة والجديدة، واستكشف المزيد من المنتجات
//             </p>
//           </div>

//           <ul className="mt-8 space-y-5 lg:mt-8 sm:space-y-6 lg:space-y-10">
//             {
//               userOrders.map((order, i) => (
//                 <OrderCard key={i} order={order} userId={userId} />
//               ))
//             }
//           </ul>
//         </div>
//       </div>
//     </section>
//   )
// }



import React from 'react';
import OrderCard from '@/components/Order/OrderCard';
import { getData } from '@/lib/getData';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

export default async function page() {
  // Fetch All Orders 
  const orders = await getData("orders", { mode: 'real-time' });

  // Get the User Id
  const session = await getServerSession(authOptions);
  if (!session) return;

  const userId = session?.user?.id;

  if (!orders || orders.length === 0) {
    return <p className="text-center text-gray-700 mt-6">لا توجد طلبات حتى الآن</p>
  }

  // Filter By User Id
  const userOrders = orders.filter((order) => order.customersId === userId);
  
  return (
    <section dir="rtl" className="py-16 bg-white sm:py-16 lg:py-20">
      <div className="px-4 m-auto sm:px-6 lg:px-6 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">طلباتي</h1>
            <p className="mt-2 text-sm font-normal text-gray-600">
              تابع حالة طلباتك السابقة والجديدة، واستكشف المزيد من المنتجات
            </p>
          </div>

          <ul className="mt-8 space-y-5 lg:mt-8 sm:space-y-6 lg:space-y-10">
            {
              userOrders.map((order, i) => (
                <OrderCard key={i} order={order} userId={userId} />
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

// "use client"
// import React, { useState, useEffect } from "react";

// // مكون قائمة Main Categories
// const MainCategoryList = () => {
//   const [mainCategories, setMainCategories] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     title: "",
//     slug: "",
//     logoUrl: "",
//     description: "",
//     isActive: true,
//   });

//   // جلب البيانات من API عند تحميل المكون (يجب تعديل الرابط ليناسب مشروعك)
//   useEffect(() => {
//     async function fetchMainCategories() {
//       try {
//         const res = await fetch("/api/main-categories");
//         const data = await res.json();
//         setMainCategories(data);
//       } catch (error) {
//         console.error("Error fetching main categories:", error);
//       }
//     }
//     fetchMainCategories();
//   }, []);

//   const handleInputChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   // دالة لإنشاء MainCategory جديدة
//   const handleCreate = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("/api/main-categories", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       if (res.ok) {
//         const newCategory = await res.json();
//         setMainCategories([...mainCategories, newCategory]);
//         setFormData({ title: "", slug: "", logoUrl: "", description: "", isActive: true });
//         setShowForm(false);
//       } else {
//         console.error("Error creating main category");
//       }
//     } catch (error) {
//       console.error("Error creating main category:", error);
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Main Categories</h2>
//       <button
//         onClick={() => setShowForm(!showForm)}
//         className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
//       >
//         {showForm ? "إخفاء النموذج" : "إضافة Main Category"}
//       </button>
//       {showForm && (
//         <form onSubmit={handleCreate} className="mb-6 p-4 border rounded">
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">العنوان</label>
//             <input
//               name="title"
//               value={formData.title}
//               onChange={handleInputChange}
//               className="w-full border px-3 py-2 rounded"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">Slug</label>
//             <input
//               name="slug"
//               value={formData.slug}
//               onChange={handleInputChange}
//               className="w-full border px-3 py-2 rounded"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">Logo URL</label>
//             <input
//               name="logoUrl"
//               value={formData.logoUrl}
//               onChange={handleInputChange}
//               className="w-full border px-3 py-2 rounded"
//             />
//           </div>
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">الوصف</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleInputChange}
//               className="w-full border px-3 py-2 rounded"
//             />
//           </div>
//           <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
//             إنشاء Main Category
//           </button>
//         </form>
//       )}
//       {/* قائمة العرض */}
//       <table className="w-full border-collapse">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="border p-2">العنوان</th>
//             <th className="border p-2">Slug</th>
//             <th className="border p-2">الحالة</th>
//           </tr>
//         </thead>
//         <tbody>
//           {mainCategories.map((cat) => (
//             <tr key={cat.id} className="hover:bg-gray-100">
//               <td className="border p-2">{cat.title}</td>
//               <td className="border p-2">{cat.slug}</td>
//               <td className="border p-2">{cat.isActive ? "نشط" : "غير نشط"}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// // مكون قائمة Categories
// const CategoryList = () => {
//   const [categories, setCategories] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     title: "",
//     slug: "",
//     imageUrl: "",
//     description: "",
//     isActive: true,
//     mainCategoryId: "", // يجب التأكد من صحة القيمة هنا، يمكن تحديدها من قائمة MainCategory
//     storeId: "",
//   });

//   useEffect(() => {
//     async function fetchCategories() {
//       try {
//         const res = await fetch("/api/categories");
//         const data = await res.json();
//         setCategories(data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     }
//     fetchCategories();
//   }, []);

//   const handleInputChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleCreate = async (e) => {
//     e.preventDefault();
//     // تحقق من صحة mainCategoryId قبل الإرسال:
//     if (!formData.mainCategoryId.trim()) {
//       console.error("mainCategoryId مطلوب");
//       return;
//     }
//     try {
//       const res = await fetch("/api/categories", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       if (res.ok) {
//         const newCategory = await res.json();
//         setCategories([...categories, newCategory]);
//         setFormData({
//           title: "",
//           slug: "",
//           imageUrl: "",
//           description: "",
//           isActive: true,
//           mainCategoryId: "",
//           storeId: "",
//         });
//         setShowForm(false);
//       } else {
//         console.error("Error creating category");
//       }
//     } catch (error) {
//       console.error("Error creating category:", error);
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Categories</h2>
//       <button
//         onClick={() => setShowForm(!showForm)}
//         className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
//       >
//         {showForm ? "إخفاء النموذج" : "إضافة Category"}
//       </button>
//       {showForm && (
//         <form onSubmit={handleCreate} className="mb-6 p-4 border rounded">
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">العنوان</label>
//             <input
//               name="title"
//               value={formData.title}
//               onChange={handleInputChange}
//               className="w-full border px-3 py-2 rounded"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">Slug</label>
//             <input
//               name="slug"
//               value={formData.slug}
//               onChange={handleInputChange}
//               className="w-full border px-3 py-2 rounded"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">Image URL</label>
//             <input
//               name="imageUrl"
//               value={formData.imageUrl}
//               onChange={handleInputChange}
//               className="w-full border px-3 py-2 rounded"
//             />
//           </div>
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">الوصف</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleInputChange}
//               className="w-full border px-3 py-2 rounded"
//             />
//           </div>
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">mainCategoryId</label>
//             <input
//               name="mainCategoryId"
//               value={formData.mainCategoryId}
//               onChange={handleInputChange}
//               className="w-full border px-3 py-2 rounded"
//               placeholder="أدخل معرف Main Category"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">storeId</label>
//             <input
//               name="storeId"
//               value={formData.storeId}
//               onChange={handleInputChange}
//               className="w-full border px-3 py-2 rounded"
//               placeholder="أدخل معرف المتجر"
//               required
//             />
//           </div>
//           <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
//             إنشاء Category
//           </button>
//         </form>
//       )}
//       {/* عرض القائمة */}
//       <table className="w-full border-collapse">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="border p-2">العنوان</th>
//             <th className="border p-2">Slug</th>
//             <th className="border p-2">الحالة</th>
//           </tr>
//         </thead>
//         <tbody>
//           {categories.map((cat) => (
//             <tr key={cat.id} className="hover:bg-gray-100">
//               <td className="border p-2">{cat.title}</td>
//               <td className="border p-2">{cat.slug}</td>
//               <td className="border p-2">{cat.isActive ? "نشط" : "غير نشط"}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// // مكون قائمة Sub Categories
// const SubCategoryList = () => {
//   const [subCategories, setSubCategories] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     title: "",
//     slug: "",
//     imageUrl: "",
//     description: "",
//     isActive: true,
//     categoryId: "",
//     storeId: "",
//   });

//   useEffect(() => {
//     async function fetchSubCategories() {
//       try {
//         const res = await fetch("/api/sub-categories");
//         const data = await res.json();
//         setSubCategories(data);
//       } catch (error) {
//         console.error("Error fetching sub categories:", error);
//       }
//     }
//     fetchSubCategories();
//   }, []);

//   const handleInputChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleCreate = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("/api/sub-categories", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       if (res.ok) {
//         const newSubCategory = await res.json();
//         setSubCategories([...subCategories, newSubCategory]);
//         setFormData({
//           title: "",
//           slug: "",
//           imageUrl: "",
//           description: "",
//           isActive: true,
//           categoryId: "",
//           storeId: "",
//         });
//         setShowForm(false);
//       } else {
//         console.error("Error creating sub category");
//       }
//     } catch (error) {
//       console.error("Error creating sub category:", error);
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Sub Categories</h2>
//       <button
//         onClick={() => setShowForm(!showForm)}
//         className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
//       >
//         {showForm ? "إخفاء النموذج" : "إضافة Sub Category"}
//       </button>
//       {showForm && (
//         <form onSubmit={handleCreate} className="mb-6 p-4 border rounded">
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">العنوان</label>
//             <input
//               name="title"
//               value={formData.title}
//               onChange={handleInputChange}
//               className="w-full border px-3 py-2 rounded"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">Slug</label>
//             <input
//               name="slug"
//               value={formData.slug}
//               onChange={handleInputChange}
//               className="w-full border px-3 py-2 rounded"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">Image URL</label>
//             <input
//               name="imageUrl"
//               value={formData.imageUrl}
//               onChange={handleInputChange}
//               className="w-full border px-3 py-2 rounded"
//             />
//           </div>
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">الوصف</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleInputChange}
//               className="w-full border px-3 py-2 rounded"
//             />
//           </div>
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">categoryId</label>
//             <input
//               name="categoryId"
//               value={formData.categoryId}
//               onChange={handleInputChange}
//               className="w-full border px-3 py-2 rounded"
//               placeholder="أدخل معرف Category"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label className="block text-sm font-medium mb-1">storeId</label>
//             <input
//               name="storeId"
//               value={formData.storeId}
//               onChange={handleInputChange}
//               className="w-full border px-3 py-2 rounded"
//               placeholder="أدخل معرف المتجر"
//               required
//             />
//           </div>
//           <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
//             إنشاء Sub Category
//           </button>
//         </form>
//       )}
//       {/* عرض القائمة */}
//       <table className="w-full border-collapse">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="border p-2">العنوان</th>
//             <th className="border p-2">Slug</th>
//             <th className="border p-2">الحالة</th>
//           </tr>
//         </thead>
//         <tbody>
//           {subCategories.map((sub) => (
//             <tr key={sub.id} className="hover:bg-gray-100">
//               <td className="border p-2">{sub.title}</td>
//               <td className="border p-2">{sub.slug}</td>
//               <td className="border p-2">{sub.isActive ? "نشط" : "غير نشط"}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// // المكون الرئيسي للوحة الإدارة مع تبويبات لكل مجموعة
// export default function AdminPanel() {
//   const [activeTab, setActiveTab] = useState("mainCategories");

//   return (
//     <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
//       <div className="mb-6 border-b border-gray-300 dark:border-gray-700">
//         <nav className="flex space-x-4">
//           <button
//             onClick={() => setActiveTab("mainCategories")}
//             className={`px-4 py-2 ${
//               activeTab === "mainCategories"
//                 ? "border-b-2 border-blue-500 text-blue-500"
//                 : "text-gray-500"
//             }`}
//           >
//             Main Categories
//           </button>
//           <button
//             onClick={() => setActiveTab("categories")}
//             className={`px-4 py-2 ${
//               activeTab === "categories"
//                 ? "border-b-2 border-blue-500 text-blue-500"
//                 : "text-gray-500"
//             }`}
//           >
//             Categories
//           </button>
//           <button
//             onClick={() => setActiveTab("subCategories")}
//             className={`px-4 py-2 ${
//               activeTab === "subCategories"
//                 ? "border-b-2 border-blue-500 text-blue-500"
//                 : "text-gray-500"
//             }`}
//           >
//             Sub Categories
//           </button>
//         </nav>
//       </div>
//       <div>
//         {activeTab === "mainCategories" && <MainCategoryList />}
//         {activeTab === "categories" && <CategoryList />}
//         {activeTab === "subCategories" && <SubCategoryList />}
//       </div>
//     </div>
//   );
// }
