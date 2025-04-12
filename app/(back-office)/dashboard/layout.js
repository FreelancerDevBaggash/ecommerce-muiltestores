
// import Navbar from "@/components/backoffice/Navbar";
// import Sidebar from "@/components/backoffice/Sidebar";
// import React, { useState } from "react";

// export default function Layout({ children }) {
//   const [showSidebar, setShowSidebar] = useState(true); // اجعل الافتراضي "مفتوح"

//   return (
//     <div className="flex">
//       {/* الشريط الجانبي */}
//       <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

//       {/* المحتوى الرئيسي */}
//       <div
//         className={`flex-grow bg-slate-100 min-h-screen transition-all duration-300 ${
//           showSidebar ? "lg:ml-64 ml-16" : "ml-16"
//         }`}
//       >
//         {/* الشريط العلوي */}
//         <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

//         {/* المحتوى الأساسي */}
//         <main className="p-8 bg-slate-100 dark:bg-slate-900 min-h-screen text-slate-50 mt-16">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }
"use client";

import Navbar from "../../../components/backoffice/Navbar";
import Sidebar from "@/components/backoffice/Sidebar";
import React, { useState } from 'react';

export default function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div dir="rtl" className="flex">
      {/* الشريط الجانبي */}
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      {/* lg:ml-64 ml-0 flex-grow bg-slate-100 min-h-screen */}

      <div className="lg:mr-64 mr-0 flex-grow   bg-slate-100 min-h-screen">
        {/* الرأس */}
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <main className="p-8 bg-[#dfd7f500] font-arabic dark:bg-slate-900 min-h-screen  rounded-3xl  text-slate-50 mt-16">
          {children}
        </main>
        {/* المحتوى الرئيسي */}
      </div>

      {/* الجسم الرئيسي */}
    </div>
  );
}

