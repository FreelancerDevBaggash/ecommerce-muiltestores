// "use client"
// import React from 'react';
// import {Chart as ChartJS, ArcElement, Tooltip,Legend } from "chart.js";
// import {Pie} from 'react-chartjs-2';

// ChartJS.register(ArcElement , Tooltip ,Legend);

// export default function BestSellingProductsChart() {
//   const data = {
//     labels :['Cabbage-Green ', 'Watermelon-blue' ,
//     'Brocooli-Yellow' , 'Maize-Red' ],
//     datasets:[
//       {
//         label:'# of Votes',
//         data:[50,10,20,20],
//         backgroundColor:[
//           'rgba(0, 0, 255, 0.7)',
//           'rgba(255, 0, 221, 0.7)',
//           'rgba(2, 139, 71, 0.7)',
//           'rgba(0, 0, 0, 0.7)',
//         ],
//         borderColor:[
//           'rgba(255, 99, 132, 1)',
//           'rgba(255, 0, 221, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//         ],
//         borderWidth:1,
//       },
//     ],
//   };
//   return (
//     <div className='dark:bg-slate-700 bg-slate-50 p-8 rounded-lg shadow-xl'>
//         <h2 className='text-xl font-bold mb-4 text-slate-800 dark:text-slate-50'>Best Selling Charts</h2>
//         {/*Chart*/}
//         <div className='p-4'>
//         <Pie data={data}/>
//         </div>
//     </div>
//   )
// }

"use client"
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProductsChart() {
  const data = {
    labels: ['الملفوف الأخضر', 'البطيخ الأزرق', 'البروكلي الأصفر', 'الذرة الحمراء'],
    datasets: [
      {
        label: '# الأصوات',
        data: [50, 10, 20, 20],
        backgroundColor: [
          'rgba(0, 0, 255, 0.7)',
          'rgba(255, 0, 221, 0.7)',
          'rgba(2, 139, 71, 0.7)',
          'rgba(0, 0, 0, 0.7)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 0, 221, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='dark:bg-slate-700 font-arabic bg-slate-50 p-8 rounded-lg shadow-xl rtl'>
        <h2 className='text-xl font-bold mb-4 text-slate-800 dark:text-slate-50 text-right'>أفضل المنتجات مبيعًا</h2>
        {/*Chart*/}
        <div className='p-4 '>
          <Pie data={data} />
        </div>
    </div>
  );
}
