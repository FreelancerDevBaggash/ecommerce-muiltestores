// import { ShoppingCart } from 'lucide-react'
// import React from 'react'

// export default function SmallCard({data}) {
//     const{
//         title,
//         number,
//         iconBg,
//         icon:Icon,
//     }=data;
//   return (
//     <div className="rounded-lg shadow-lg bg-slate-50 dark:bg-slate-700 p-4 dark:text-slate-50 text-slate-800">
//         <div className="flex space-x-4">
//             <div className={`w-12 h-12 rounded-full ${iconBg}  items-center flex justify-center `} >
//             <Icon className='text-slate-50 dark:text-slate-50'/>
//             </div>
              
//               <div className=" ml-2s">
//               <p>{title}</p>
//               <h3 className='text-2xl font-bold'>{number}</h3>

//               </div>

//         </div>
//         </div>
//   )
// }

"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function SmallCard({ data, isActive = false, onClick }) {
  const { title, number, iconBg, icon: Icon } = data;

  return (
    <Card
      className={`cursor-pointer transition-all duration-200 ${
        isActive ? "border-orange-500 shadow-md" : "hover:border-gray-300"
      }`}
      onClick={onClick}
    >
      <CardContent className="p-4 flex flex-col items-center">
        <div className={`${iconBg} p-2 rounded-full mb-2`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="font-bold text-xl">{number}</h3>
        <p className="text-sm text-gray-500 text-center">{title}</p>
      </CardContent>
    </Card>
  );
}
