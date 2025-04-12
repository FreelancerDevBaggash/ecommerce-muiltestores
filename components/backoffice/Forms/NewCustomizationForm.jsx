// import { useState, useEffect } from 'react';

// export default function NewCustomizationForm({ updateData, storeId }) {
//   const [formData, setFormData] = useState({
//     primaryColor: "",
//     secondaryColor: "",
//     accentColor: "",
//     backgroundColor: "",
//     fontFamily: "",
//     isActive: true,
//   });

//   useEffect(() => {
//     if (updateData) {
//       setFormData({
//         primaryColor: updateData.primaryColor,
//         secondaryColor: updateData.secondaryColor,
//         accentColor: updateData.accentColor,
//         backgroundColor: updateData.backgroundColor,
//         fontFamily: updateData.fontFamily || "",
//         isActive: updateData.isActive,
//       });
//     }
//   }, [updateData]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // هنا يتم إرسال البيانات لتحديث التخصيص
//     const response = await fetch(`/api/customizations/${updateData.id}`, {
//       method: 'PUT',
//       body: JSON.stringify(formData),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     if (response.ok) {
//       // يمكنك إضافة رسالة نجاح أو إعادة التوجيه
//       console.log('Customization updated successfully');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Primary Color:</label>
//         <input
//           type="color"
//           value={formData.primaryColor}
//           onChange={(e) => setFormData({ ...formData, primaryColor: e.target.value })}
//         />
//       </div>
//       <div>
//         <label>Secondary Color:</label>
//         <input
//           type="color"
//           value={formData.secondaryColor}
//           onChange={(e) => setFormData({ ...formData, secondaryColor: e.target.value })}
//         />
//       </div>
//       <div>
//         <label>Accent Color:</label>
//         <input
//           type="color"
//           value={formData.accentColor}
//           onChange={(e) => setFormData({ ...formData, accentColor: e.target.value })}
//         />
//       </div>
//       <div>
//         <label>Background Color:</label>
//         <input
//           type="color"
//           value={formData.backgroundColor}
//           onChange={(e) => setFormData({ ...formData, backgroundColor: e.target.value })}
//         />
//       </div>
//       <div>
//         <label>Font Family:</label>
//         <input
//           type="text"
//           value={formData.fontFamily}
//           onChange={(e) => setFormData({ ...formData, fontFamily: e.target.value })}
//         />
//       </div>
//       <div>
//         <label>Active:</label>
//         <input
//           type="checkbox"
//           checked={formData.isActive}
//           onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
//         />
//       </div>
//       <button type="submit">Update Customization</button>
//     </form>
//   );
// }
