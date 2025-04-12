import React, { useState } from 'react';
const TemplateSelectionScreen = ({ templates, register, onSelectTemplate }) => {
    const [selectedTemplate, setSelectedTemplate] = useState(null);
  
    const handleSelection = (id) => {
      setSelectedTemplate(id); // تحديث حالة القالب المختار باستخدام id
      onSelectTemplate(id);    // تمرير id إلى المكون الأب
    };
  
    return (
      <div className="h-auto bg-gray-100 p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">اختر قالبًا</h1>
        </div>
  
        <div className="grid grid-cols-2 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              className={`border-2 rounded-lg shadow-md p-4 ${
                selectedTemplate === template.id ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => handleSelection(template.id)} // استخدام id القالب
            >
              <img
                src={template.thumbnail}
                alt={template.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <div className="flex items-center justify-center">
                <input
                  type="radio"
                  name="template"
                  value={template.id} // إرسال id كقيمة
                  checked={selectedTemplate === template.id}
                  onChange={() => handleSelection(template.id)}
                  {...register("selectedTemplate", { required: true })}
                  className="mr-2"
                />
                <span className="text-gray-700">{template.title}</span>
              </div>
            </div>
          ))}
        </div>
  
        <div className="mt-8 text-center">
          <button
            onClick={() => alert(`تم اختيار القالب ID: ${selectedTemplate}`)}
            className={`px-6 py-2 rounded-lg text-white font-bold ${
              selectedTemplate !== null
                ? "bg-indigo-500 hover:bg-indigo-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={selectedTemplate === null}
          >
            تأكيد الاختيار
          </button>
        </div>
      </div>
    );
  };
  
  export default TemplateSelectionScreen;
  
  
// import { useState } from "react";

// const TemplateSelectionScreen = ({
//     label,
//     name,
//     register,
//     errors,
//     image,
//     isRequired = true,
//     className = "sm:col-span-2",
// }) => {
//   // حالة القالب المختار
//   const [selectedTemplate, setSelectedTemplate] = useState(null);

//   // تأكيد القالب المختار
//   const confirmSelection = () => {
//     if (selectedTemplate !== null) {
//       alert(`تم اختيار ${templates[selectedTemplate].name}`);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       {/* شريط العنوان */}
//       <div className="text-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">اختر قالبًا</h1>
//       </div>

//       {/* شبكة القوالب */}
//       <div className="grid grid-cols-2 gap-6">
     
//           <div
            
//             className="border-2 rounded-lg shadow-md p-4"
//             //      ${
//             //   selectedTemplate === index ? "border-blue-500" : "border-gray-300"
//             // }`}
//             onClick={() => setSelectedTemplate(index)}
//           >
//             <img
//              {...register(name, { required: isRequired })}
//               src={image}
//               alt={label}
//               className="w-full h-48 object-cover rounded-md mb-4"
//             />
//             <div className="flex items-center justify-center">
//               <input
//                 type="radio"
//                 name="template"
//                 value={index}
//                 checked={selectedTemplate === index}
//                 onChange={() => setSelectedTemplate(index)}
//                 className="mr-2"
//               />
//                {errors[name] && (
//           <span className="text-sm text-red-600">
//             {label} {isRequired && "is required"}
//           </span>
//         )}
//               {/* <span className="text-gray-700">{label}</span> */}
//             </div>
//           </div>
        
//       </div>

//       {/* زر تأكيد الاختيار */}
//       <div className="mt-8 text-center">
//         <button
//           onClick={confirmSelection}
//           className="px-6 py-2 rounded-lg text-white font-bold "
//         //     ${
//         //     selectedTemplate !== null
//         //       ? "bg-blue-500 hover:bg-blue-600"
//         //       : "bg-gray-400 cursor-not-allowed"
//         //   }`}
//         //   disabled={selectedTemplate === null}
//         >
//           تأكيد الاختيار
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TemplateSelectionScreen;
