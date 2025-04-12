import { ShoppingCart } from 'lucide-react';
import React from 'react'

export default function OverciewCards({sales , products}) {
    const productsCount = products?.length.toString().padStart(
        2, "0"
    );
    const salesCount = sales?.length.toString().padStart(
        2, "0"
    );
    const totalSales = sales?.reduce((acc, item) => acc + item.total, 0);
    const analytics =[
        {
            title:"Products",
            count: productsCount,
            unit:"",
            link:"/dashboard/products",
            icon:"",
        },
        {
            title:"Sales",
            count: salesCount,
            unit:"",
            link:"/dashboard/sales",
            icon:"",
        },
        {
            title:"Total Revenue",
            count: totalSales,
            unit:"",
            link:"/dashboard/sales",
            icon:"",
        },
    ]
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
      {
        analytics.map((item, i) => {
            return (
             
                    <div key={i} className="rounded-lg shadow-lg bg-slate-50 dark:bg-slate-700 p-4 dark:text-slate-50 text-slate-800">
                        <div className="flex space-x-4">                                                      
                              
                              <div className="">
                              <p>{item.title}</p>
                              <h3 className='text-2xl font-bold'>{item.count}</h3>
                
                              </div>
                              <div className={`w-12 h-12 rounded-full   items-center flex justify-center `} >
                              <ShoppingCart className='text-slate-50 dark:text-slate-50'/>
                              </div>
                        </div>
                        </div>
            )
        })
      }
    </div>
  )
}
