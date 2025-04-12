// // import React from "react";

// // const ModalComponent = ({ isOpen, onClose, children }) => {
// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
// //       <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full">
// //         <div className="flex justify-end p-2">
// //           <button
// //             className="text-gray-500 hover:text-gray-700"
// //             onClick={onClose}
// //           >
// //             ✕
// //           </button>
// //         </div>
// //         <div className="p-6">{children}</div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ModalComponent;
// import React, { useEffect, useState } from "react";

// const ModalComponent = ({ isOpen, onClose, children, triggerRef }) => {
//   const [modalStyles, setModalStyles] = useState({});

//   useEffect(() => {
//     if (triggerRef?.current && isOpen) {
//       const rect = triggerRef.current.getBoundingClientRect();
//       setModalStyles({
//         top: rect.top + window.scrollY,
//         left: rect.left + window.scrollX,
//         width: rect.width,
//         height: rect.height,
//       });
//     }
//   }, [isOpen, triggerRef]);

//   if (!isOpen) return null;

//   return (
//     // <div
//     //   className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
//     //   onClick={onClose}
//     // >
//     //   <div
//     //     className=" bg-purple-100 rounded-lg shadow-lg overflow-auto"
//     //     style={modalStyles}
//     //     onClick={(e) => e.stopPropagation()} // لمنع إغلاق القائمة عند النقر داخلها
//     //   >
//     //     <div className="flex justify-end p-2">
//     //       <button
//     //         className="text-gray-500 hover:text-gray-700"
//     //         onClick={onClose}
//     //       >
//     //         ✕
//     //       </button>
//     //     </div>
//     //     <div className="p-6">{children}</div>
//     //   </div>
//     // </div>
//     <div
//   className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
//   onClick={onClose}
// >
//   <div
//     className="bg-purple-100 rounded-xl shadow-xl overflow-y-auto max-h-[90vh] w-full  mx-4"
//     onClick={(e) => e.stopPropagation()} // لمنع إغلاق المودال عند النقر داخلها
//   >
//     {/* زر الإغلاق */}
//     <div className="flex justify-end p-2">
//       <button
//         className="text-gray-500 hover:text-gray-700 text-xl"
//         onClick={onClose}
//         aria-label="إغلاق"
//       >
//         ✕
//       </button>
//     </div>

//     {/* محتوى المودال */}
//     <div className="p-5">
//       {children}
//     </div>
//   </div>
// </div>

//   );
// };

// export default ModalComponent;
"use client"

import React, { useEffect, useState } from "react"

const ModalComponent = ({ isOpen, onClose, children, triggerRef }) => {
  const [modalStyles, setModalStyles] = useState({})

  useEffect(() => {
    if (triggerRef?.current && isOpen) {
      const rect = triggerRef.current.getBoundingClientRect()
      setModalStyles({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        height: rect.height,
      })
    }
  }, [isOpen, triggerRef])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center" onClick={onClose}>
      <div
        className="bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-y-auto max-h-[90vh] w-full max-w-3xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end p-2">
          <button
            className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 text-xl"
            onClick={onClose}
            aria-label="إغلاق"
          >
            ✕
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  )
}

export default ModalComponent
