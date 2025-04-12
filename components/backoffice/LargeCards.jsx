// import React from 'react'
// import LargeCard from './LargeCard'

// export default function LargeCards({sales}) {
//     const totalSales = sales.reduce((acc, item) =>
//      acc + item.total, 0).toFixed(2) ?? 0;
//     const orderStats=[
//         {
//             period:"Today Orders",
//             sales:1100,
//             color:"bg-green-600"
//         },
//         {
//             period:"Yesterday Orders",
//             sales:1300,
//             color:"bg-blue-600"
//         },
//         {
//             period:"This Month",
//             sales:1100,
//             color:"bg-orange-600"
//         },
//         {
//             period:"All-Time Sales",
//             sales:totalSales,
//             color:"bg-purple-600"
//         },
//     ]
//   return (
//     <div className='grid grid-cols-1 sm:grid-cols-2
//      md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
//            {/*Cards*/}
//            {
//             orderStats.map((item,i)=>{
//              return <LargeCard className='bg-green-600' data={item} key={i }/>

//             })
//            }
          
          
//     </div>
//   );
// }
import React from 'react';
import LargeCard from './LargeCard';

export default function LargeCards({ sales }) {
    const totalSales = sales?.reduce((acc, item) => acc + item.total, 0).toFixed(2) ?? 0;
    
    const orderStats = [
        {
            period: "طلبات اليوم",
            sales: 1100,
            color: " bg-white",
        },
        {
            period: "طلبات الأمس",
            sales: 1300,
            color: " bg-white",
        },
        {
            period: "هذا الشهر",
            sales: 1100,
            color: " bg-white",
        },
        {
            period: "المبيعات الكلية",
            sales: totalSales,
            color: " bg-white",
        },
    ];

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8'>
            {/* البطاقات */}
            {orderStats.map((item, i) => {
                return (
                    <LargeCard 
                        className={item.color} 
                        data={item} 
                        key={i} 
                    />
                );
            })}
        </div>
    );
}
