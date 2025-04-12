// "use client"
// import React, {useState} from 'react'
// import { Chart as ChartJS } from 'chart.js/auto'
// import {
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';
// import {Line} from 'react-chartjs-2';
// // import faker from 'faker';
// import { faker } from '@faker-js/faker';

// export default function WeeklySalesChart() {
//     ChartJS.register(
//         CategoryScale,
//         LinearScale,
//         PointElement,
//         LineElement,
//         Title,
//         Tooltip,
//         Legend,
    
    
//     );
//     const options = {
//         responsive: true,
//         plugins: {
//             lengend: {
//                 position: 'top' 

//             },
//             title:{
//                 display:false,
//                 text: 'Chart.js Line Chart',
//             },
//         },

//     };
//     const labels =[
//         'January',
//         'February',
//         'March',
//         'April',
//         'May',
//         'June',
//         'July'
//     ];
//     const data ={
//         labels,
//         datasets: [
//             {
//                 label:' Sales',
//                 data: labels.map(()=>faker.datatype.number({ min: -1000, max:1000})),
//                 borderColor: 'rgb(255, 99, 132)',
//                 backgroundColor:'rgba(255, 99, 132,0.5)',
//             }, 
      
//         ],
//     };
    
//     const tabs =[
//         {
//             title:"Sales",
//             type:"sales",
//             data:{
//                 labels,
//                 datasets: [
//                     {
//                         label:' Sales',
//                         data: labels.map(()=>faker.datatype.number({ min: -1000, max:1000})),
//                         borderColor: 'rgb(255, 99, 132)',
//                         backgroundColor:'rgba(255, 99, 132,0.5)',
//                     }, 
              
//                 ],
//             }
//         },{
//             title:"Order",
//             type:"order ",
//             data:{
//                 labels,
//                 datasets: [
//                     {
//                         label:' Orders',
//                         data: labels.map(()=>faker.datatype.number({ min: -1000, max:1000})),
//                         borderColor: 'rgb(0, 137, 132)',
//                         backgroundColor:'rgba(0, 137, 132,0.5)',
//                     }, 
              
//                 ],
//             }
//         }
//     ];
//     const [chartTodDisplay,setChatTodDisplay]= useState(tabs[0].type);
//   return (
//     <div className='dark:bg-slate-700 bg-slate-50 p-8 rounded-lg shadow-xl'>
//       <h2 className='text-xl font-bold mb-4 text-slate-800 dark:text-slate-50'>Weekly Charts</h2>
//       <div className="p-4">
//         {/*Tabs*/}
        

// <div className="text-sm font-medium text-center text-gray-200 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
//     <ul className="flex flex-wrap -mb-px">
//         {
//             tabs.map((tab,i)=>{
//                 return(
//                     <li className="me-2" key={i}>
//                     <button onClick={()=>setChatTodDisplay(tab.type)} className={chartTodDisplay==tab.type? "inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500":"inline-block p-4 border-b-2 border-transparent rounded-t-lg text-slate-800 hover:text-gray-700 hover:border-gray-100 dark:hover:text-gray-100"}>{tab.title}</button >
//                 </li>
//                 )
//             })
//         }
       
          
//     </ul>
// </div>

//         {/*Content to display*/}
//       { tabs.map((tab,i)=> {
//         if(chartTodDisplay === tab.type){
//             return <Line options={options} data={ tab.data}/>;
                
            
//         }
//         return( null);

//        })}
//       </div>
//     </div>
//   )
// }
// "use client"
// import React, { useState } from 'react'
// import { Chart as ChartJS } from 'chart.js/auto'
// import {
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import { faker } from '@faker-js/faker';

// export default function WeeklySalesChart() {
//     ChartJS.register(
//         CategoryScale,
//         LinearScale,
//         PointElement,
//         LineElement,
//         Title,
//         Tooltip,
//         Legend,
//     );

//     const options = {
//         responsive: true,
//         plugins: {
//             legend: { // تم تصحيح الخطأ هنا
//                 position: 'top'
//             },
//             title: {
//                 display: false,
//                 text: 'Chart.js Line Chart',
//             },
//         },
//     };

//     const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

//     const tabs = [
//         {
//             title: "Sales",
//             type: "sales",
//             data: {
//                 labels,
//                 datasets: [
//                     {
//                         label: 'Sales',
//                         data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })), // تصحيح `faker`
//                         borderColor: 'rgb(255, 99, 132)',
//                         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//                     },
//                 ],
//             }
//         },
//         {
//             title: "Order",
//             type: "order",
//             data: {
//                 labels,
//                 datasets: [
//                     {
//                         label: 'Orders',
//                         data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })), // تصحيح `faker`
//                         borderColor: 'rgb(0, 137, 132)',
//                         backgroundColor: 'rgba(0, 137, 132, 0.5)',
//                     },
//                 ],
//             }
//         }
//     ];

//     const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type); // تصحيح اسم المتغير

//     return (
//         <div className='dark:bg-slate-700 bg-slate-50 p-8 rounded-lg shadow-xl'>
//             <h2 className='text-xl font-bold mb-4 text-slate-800 dark:text-slate-50'>Weekly Charts</h2>
//             <div className="p-4">
//                 {/* Tabs */}
//                 <div className="text-sm font-medium text-center text-gray-200 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
//                     <ul className="flex flex-wrap -mb-px">
//                         {
//                             tabs.map((tab, i) => (
//                                 <li className="me-2" key={i}>
//                                     <button 
//                                         onClick={() => setChartToDisplay(tab.type)} 
//                                         className={chartToDisplay === tab.type
//                                             ? "inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500"
//                                             : "inline-block p-4 border-b-2 border-transparent rounded-t-lg text-slate-800 hover:text-gray-700 hover:border-gray-100 dark:hover:text-gray-100"}
//                                     >
//                                         {tab.title}
//                                     </button>
//                                 </li>
//                             ))
//                         }
//                     </ul>
//                 </div>

//                 {/* Content to display */}
//                 {tabs.map((tab, i) => {
//                     if (chartToDisplay === tab.type) {
//                         return <Line key={i} options={options} data={tab.data} />;
//                     }
//                     return null;
//                 })}
//             </div>
//         </div>
//     );
// }
"use client"
import React, { useState } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import {
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

export default function WeeklySalesChart() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: false,
                text: 'مخطط الخط البياني',
            },
        },
    };

    const labels = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو'];

    const tabs = [
        {
            title: "المبيعات",
            type: "sales",
            data: {
                labels,
                datasets: [
                    {
                        label: 'المبيعات',
                        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                ],
            }
        },
        {
            title: "الطلبات",
            type: "order",
            data: {
                labels,
                datasets: [
                    {
                        label: 'الطلبات',
                        data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
                        borderColor: 'rgb(0, 137, 132)',
                        backgroundColor: 'rgba(0, 137, 132, 0.5)',
                    },
                ],
            }
        }
    ];

    const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);

    return (
        <div className='dark:bg-slate-700 bg-slate-50 p-8 rounded-lg shadow-xl rtl'>
            <h2 className='text-xl font-bold mb-4 text-slate-800 dark:text-slate-50 text-right'>مخططات أسبوعية</h2>
            <div className="p-4">
                {/* Tabs */}
                <div className="text-sm font-medium text-right text-gray-200 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                    <ul className="flex flex-wrap -mb-px justify-end">
                        {
                            tabs.map((tab, i) => (
                                <li className="me-2" key={i}>
                                    <button 
                                        onClick={() => setChartToDisplay(tab.type)} 
                                        className={chartToDisplay === tab.type
                                            ? "inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500"
                                            : "inline-block p-4 border-b-2 border-transparent rounded-t-lg text-slate-800 hover:text-gray-700 hover:border-gray-100 dark:hover:text-gray-100"}
                                    >
                                        {tab.title}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* Content to display */}
                {tabs.map((tab, i) => {
                    if (chartToDisplay === tab.type) {
                        return <Line key={i} options={options} data={tab.data} />;
                    }
                    return null;
                })}
            </div>
        </div>
    );
}
