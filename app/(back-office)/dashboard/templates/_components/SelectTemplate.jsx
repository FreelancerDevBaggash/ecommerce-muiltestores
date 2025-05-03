// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// import NewTemplateForm from '../new/page'
// export default function SelectTemplate({templateId , storeId}) {
//     const [templates, setTemplates] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const router = useRouter();
  
//     // جلب بيانات القوالب عند تحميل الصفحة
//     useEffect(() => {
//       async function fetchTemplates() {
//         try {
//           const res = await fetch("/api/templates"); // المسار API لجلب القوالب
//           if (!res.ok) {
//             throw new Error("فشل في جلب بيانات القوالب");
//           }
//           const data = await res.json();
//           setTemplates(data);
//         } catch (error) {
//           console.error("خطأ:", error);
//         } finally {
//           setLoading(false);
//         }
//       }
//       fetchTemplates();
//     }, []);
  
//     // عند اختيار القالب، يتم توجيه المستخدم مثلاً لصفحة التحديث أو التفعيل
//     const handleSelectTemplate = (templateId) => {
//       // يمكنك تغيير المسار حسب احتياجك
//       router.push(`/dashboard/templates/update/${templateId}`);
//     };
  
//     // حالة التحميل
//     if (loading) {
//       return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-800" dir="rtl">
//           <p className="text-gray-600 dark:text-gray-200">جاري التحميل...</p>
//         </div>
//       );
//     }
  
//     return (
//       <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-8" dir="rtl">
//         <div className="max-w-7xl mx-auto">
//           {/* عنوان الصفحة */}
//           <header className="mb-8 text-center">
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
//               اختر القالب المناسب لمتجرك
//             </h1>
//             <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
//               يمكنك اختيار القالب المناسب وتخصيصه بما يناسب هويتك التجارية
//             </p>
//           </header>
  
//           {/* شبكة عرض القوالب */}
//           {templates.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//               {templates.map((template) => (
//                 <div
//                   key={template.id}
//                   className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
//                 >
//                   <div className="relative w-full h-56">
//                     <Image
//                       src={template.thumbnail || "/placeholder.svg"}
//                       alt={template.title}
//                       fill
//                       className="object-cover"
//                     />
//                     {/* شريط أعلى الصورة (إن رغبت بإضافة عبارة "مجاني" أو "افتراضي") */}
//                     {template.isDefault && (
//                       <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 text-xs rounded shadow">
//                         افتراضي
//                       </div>
//                     )}
//                   </div>
//                   <div className="p-4 flex flex-col h-full">
//                     <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
//                       {template.title}
//                     </h2>
//                     <p className="text-sm text-gray-600 dark:text-gray-300 flex-1">
//                       {template.description || "لا يوجد وصف لهذا القالب"}
//                     </p>
  
//                     <div className="mt-4 flex justify-between items-center">
//                       <button
//                         onClick={() => handleSelectTemplate(template.id)}
//                         className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
//                       >
//                         اختر هذا القالب
//                       </button>
//                       <a
//                         href={`/templates/${template.id}`}
//                         className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
//                       >
//                         معاينة
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
//               لا توجد قوالب متاحة حاليًا
//             </p>
//           )}
  
         
//         </div>
//       </div>
//     );
//   }


  "use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SelectTemplate({ templateId, storeId }) {
  const [templates, setTemplates] = useState([]);
  const [currentTemplate, setCurrentTemplate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updatingTemplateId, setUpdatingTemplateId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchTemplates() {
      try {
        const res = await fetch("/api/templates");
        const data = await res.json();
        setTemplates(data);
        const found = data.find((t) => t.id === templateId);
        setCurrentTemplate(found || null);
      } catch (error) {
        console.error("فشل في جلب القوالب:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTemplates();
  }, [templateId]);

  const handleSelectTemplate = async (newTemplateId) => {
    if (newTemplateId === templateId) return;

    setUpdatingTemplateId(newTemplateId);
    try {
      const res = await fetch(`/api/stores/${storeId}/template`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ templateId: newTemplateId }),
      });

      if (!res.ok) throw new Error("فشل في تحديث القالب");

      const updated = templates.find((t) => t.id === newTemplateId);
      setCurrentTemplate(updated);
      alert("تم تحديث القالب بنجاح");
      router.refresh(); // إعادة تحميل البيانات
    } catch (error) {
      console.error("خطأ أثناء التحديث:", error);
      alert("حدث خطأ أثناء تحديث القالب");
    } finally {
      setUpdatingTemplateId(null);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-800" dir="rtl">
        <p className="text-gray-600 dark:text-gray-200">جاري تحميل القوالب...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-10" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* عرض القالب الحالي */}
        {currentTemplate && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">
              القالب الحالي لمتجرك
            </h2>
            <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg border border-gray-300 dark:border-gray-700">
              <Image
                src={currentTemplate.thumbnail || "/placeholder.svg"}
                alt={currentTemplate.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black/50 text-white px-4 py-2 backdrop-blur">
                <h3 className="text-lg font-semibold">{currentTemplate.title}</h3>
              </div>
            </div>
          </section>
        )}

        {/* عرض كل القوالب */}
        <h2 className="text-xl font-bold text-gray-700 dark:text-white mb-6 text-center">
          اختر قالبًا مختلفًا من القوالب المتاحة:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              className={`relative bg-white dark:bg-gray-800 border-2 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] ${
                template.id === templateId
                  ? "border-blue-600"
                  : "border-gray-200 dark:border-gray-700"
              }`}
            >
              <div className="relative w-full h-56">
                <Image
                  src={template.thumbnail || "/placeholder.svg"}
                  alt={template.title}
                  fill
                  className="object-cover"
                />
                {template.id === templateId && (
                  <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 text-xs rounded shadow">
                    القالب المستخدم
                  </div>
                )}
              </div>
              <div className="p-4 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                  {template.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {template.description || "لا يوجد وصف"}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  {template.id !== templateId && (
                    <button
                      onClick={() => handleSelectTemplate(template.id)}
                      disabled={updatingTemplateId === template.id}
                      className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition disabled:opacity-50"
                    >
                      {updatingTemplateId === template.id ? "جاري التحديث..." : "اختر هذا القالب"}
                    </button>
                  )}
                  <a
                    href={`/templates/${template.id}`}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    target="_blank"
                  >
                    معاينة
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
