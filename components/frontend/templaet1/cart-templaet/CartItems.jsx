// import React from 'react'
// import EmptyCart from './EmptyCart';
// import CartProduct from './CartProduct'
// import { Minus, Plus, Trash2 } from 'lucide-react';

// export default function CartItems({cartItems}) {
//     return (
//         <div className="md:col-span-8 col-span-full ">
// {cartItems.length>0 && (<>
//     <h2 className='py-2 mb-6 text-2xl'> Your Cart</h2>
//         <div className="flex items-center justify-between
//         border-b border-slate-400 text-slate-400
//          pb-3 font-semibold text-sm mb-4">
//           <h2 className="uppercase">Product </h2>
//           <h2 className="uppercase"> Quantity </h2>
//           <h2 className="uppercase">Price </h2>
// </div>

// </>)}


//         <div className="">{cartItems.length> 0 ? (cartItems.map((item,i)=>{
//           return<CartProduct cartItem={item} key={i}/>;

//         })
//         ) : (
//           <EmptyCart/>
//       )}
      

//          <div/>
//               {/* <div className="rounded-xl border
//                 border-gray-400 flex gap-3 items-center ">
//                   <button className='border-r
//                  border-gray-400 py-2 px-4'>
//                     <Minus/>
                    
//                   </button>
//                    <p className='flex-grow py-2 px-4'>
//                     1
//                   </p>
//                    <button className='border-l
//                     border-gray-400 py-2 px-4'>
//                     <Plus/>
//                    </button>
//               </div>
               
//                <div className="flex items-center gap-2">
//                 <h4>$259.00</h4>
//                 <button>
//                 <Trash2 className='text-red-600 w-5 h-5'/>
//                 </button>
//                </div> */}

//           </div>
        

//         {/* COUPON Form */}
//         <div className="flex items-center gap-2 py-8">
//         <input type="email" id="email" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-1/2" placeholder="Enter Coupon"/>
//         <button className='shrink-0 py-2.5 px-4 rounded-lg bg-lime-600 '>
//           Apply Coupon
//         </button>
//         </div>
//     </div>
    
//     )
// }


// import React, { useEffect } from 'react';
// import EmptyCart from './EmptyCart';
// import CartProduct from './CartProduct';
// import { Minus, Plus, Trash2 } from 'lucide-react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// export default function CartItems({ cartItems }) {
//     useEffect(() => {
//         AOS.init({
//             duration: 1000,
//         });
//     }, []);

//     return (
//         <div className="md:col-span-8 col-span-full p-6 bg-white rounded-lg shadow-md" data-aos="fade-up">
//             {cartItems.length > 0 && (
//                 <>
//                     <h2 className='py-4 mb-6 text-3xl font-bold text-gray-800' data-aos="fade-right">Your Cart</h2>
//                     <div className="flex items-center justify-between border-b border-gray-300 text-gray-600 pb-3 font-medium text-sm mb-6" data-aos="fade-left">
//                         <h2 className="uppercase">Product</h2>
//                         <h2 className="uppercase">Quantity</h2>
//                         <h2 className="uppercase">Price</h2>
//                     </div>
//                 </>
//             )}

//             <div>
//                 {cartItems.length > 0 ? (
//                     cartItems.map((item, i) => (
//                         <CartProduct cartItem={item} key={i} data-aos="zoom-in" />
//                     ))
//                 ) : (
//                     <EmptyCart data-aos="fade-up" />
//                 )}
//             </div>

//             {cartItems.length > 0 && (
//                 <div className="flex flex-col items-end mt-8 space-y-4">
//                     <div className="flex items-center gap-2 w-full sm:w-auto" data-aos="fade-up">
//                         <input 
//                             type="text" 
//                             id="coupon" 
//                             placeholder="Enter Coupon" 
//                             className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
//                         />
//                         <button className='shrink-0 py-3 px-6 text-white bg-lime-600 rounded-lg hover:bg-lime-700 focus:ring-4 focus:ring-lime-400 transition-all'>
//                             Apply Coupon
//                         </button>
//                     </div>

//                     <div className="flex items-center gap-4 text-lg font-semibold" data-aos="fade-up">
//                         <span>Total:</span>
//                         <span className="text-gray-800">$500.00</span>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

import React, { useEffect } from 'react';
import EmptyCart from './EmptyCart';
import CartProduct from './CartProduct';
import { Minus, Plus, Trash2 } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CartItems({ cartItems,  customization = {} }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    const primaryColor = customization?.primaryColor || '#4CAF50'; // اللون الأساسي
    const secondaryColor = customization?.secondaryColor || '#2C3E50'; // اللون الثانوي
    const accentColor = customization?.accentColor || '#FFC107'; // اللون المميز
    const backgroundColor = customization?.backgroundColor || '#FFFFFF'; // لون الخلفية
    const fontFamily = customization?.fontFamily || 'sans-serif'; // نوع الخط
    const isActive = customization?.isActive ?? true;
    return (
        <div dir='rtl'className="md:col-span-8 col-span-full p-4 ml-4 border   border-gray-300 dark:bg-slate-900  bg-white rounded-lg shadow-md" data-aos="fade-up">
            {cartItems.length > 0 && (
                <>
                    <h2 className='py-4 mb-6 text-3xl font-bold dark:text-slate-50 text-gray-800' data-aos="fade-right">Your Cart</h2>
                    <div className="flex items-center justify-between border-b border-gray-300 text-gray-600 pb-3 m-2 font-medium text-sm mb-6" data-aos="fade-left">
                        <h2 className="uppercase">Product</h2>
                        <h2 className="uppercase">Quantity</h2>
                        <h2 className="uppercase">Price</h2>
                    </div>
                </>
            )}

            <div>
                {cartItems.length > 0 ? (
                    cartItems.map((item, i) => (
                        <CartProduct cartItem={item} key={i} data-aos="zoom-in"   customization={customization}/>
                    ))
                ) : (
                    <EmptyCart data-aos="fade-up" />
                )}
            </div>

            {cartItems.length > 0 && (
                <div className="flex flex-col items-end mt-8 space-y-4">
                    <div className="flex items-center gap-2 w-full sm:w-auto" data-aos="fade-up">
                        <input 
                            type="text" 
                            id="coupon" 
                            placeholder="Enter Coupon" 
                            className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        />
                        <button className='shrink-0 py-3 px-6 text-white bg-lime-600 rounded-lg hover:bg-lime-700 focus:ring-4 focus:ring-lime-400 transition-all' style={{ backgroundColor: primaryColor }}>
                            Apply Coupon
                        </button>
                    </div>

                    <div className="flex items-center gap-4 text-lg font-semibold" data-aos="fade-up">
                        <span>Total:</span>
                        <span className="text-gray-800">$500.00</span>
                    </div>
                </div>
            )}
        </div>
    );
}
