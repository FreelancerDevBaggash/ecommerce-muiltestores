"use client"

import React from 'react'
import Breadcrumb from '../../../components/frontend/Breadcrumb'
import Image from 'next/image'
import { Minus, Plus, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import CartSubTotalCard from '../../../components/frontend/CartSubTotalCard'
import CartProduct from '../../../components/frontend/CartProduct'
import EmptyCart from '../../../components/frontend/EmptyCart'
import CartItems from '../../../components/frontend/CartItems'


export default function Cart() {
  const cartItems =useSelector((store)=> store.cart);
  console.log(cartItems)
  const subTotal=cartItems.reduce((acc, currentItem) => {return acc + (currentItem.salePrice * currentItem.qty ) },0).toFixed(2) ?? 0;
  console.log(subTotal);

  return (
    <div>
      <Breadcrumb />
      <div className="grid grid-cols-12 gap-6 md:gap-14">
        <CartItems cartItems={cartItems} />
        <CartSubTotalCard subTotal={subTotal} />
      </div>  
      {/* {cartItems.length > 0 ? ( ):(
        <EmptyCart/>
      )} */}
    </div>
  );
}










// "use client"
// import React from 'react'
// import Breadcrumb from '../../../components/frontend/Breadcrumb'
// import Image from 'next/image'
// import { Minus, Plus, Trash2 } from 'lucide-react'
// import Link from 'next/link'
// import { useSelector } from 'react-redux'

// export default function Cart() {
//   const cartItems = useSelector((store)=>store.cart);
//   return (
//     <div>
//        <Breadcrumb/>
//        <div className="grid grid-cols-12 gap-14">
//         <div className="col-span-8 ">
//             <h2 className='py-2 mb-6 text-2xl'> Your Cart</h2>
//             <div className="flex items-center justify-between
//             border-b border-slate-400 text-slate-400
//              pb-3 font-semibold text-sm mb-4">
//               <h2 className="uppercase">
//                 Product
//               </h2>

//               <h2 className="uppercase">
//                 Quantity
//               </h2>

//               <h2 className="uppercase">
//                 Price
//               </h2>

//             </div>


//             <div className="">
          

//                   {/*Cart1 */}
//                 border-b border-slate-400 
//                  pb-3 font-semibold text-sm mb-4">
//                    <div className="flex items-center gap-3">
//                         <Image src='/meat.webp'
//                         width={249}
//                         height={249}
//                         alt='Alt text' 
//                         className='rounded-xl w-20 h-20'/>

//                         <div className="flex flex-col">
//                           <h2>Apple Watch Series 7 - 44m</h2>
//                           <small>Golden</small>
//                         </div>
//                    </div> 
//                    <div className="rounded-xl border
//                     border-gray-400 flex gap-3 items-center ">
//                       <button className='border-r
//                      border-gray-400 py-2 px-4'>
//                         <Minus/>
//                       </button>
//                        <p className='flex-grow py-2 px-4'>
//                         1
//                       </p>
//                        <button className='border-l
//                         border-gray-400 py-2 px-4'>
//                         <Plus/>
//                        </button>
//                   </div>
                   
//                    <div className="flex items-center gap-2">
//                     <h4>$259.00</h4>
//                     <button>
//                     <Trash2 className='text-red-600 w-5 h-5'/>
//                     </button>
//                    </div>
//                    </div> 

//                     {/*Cart2 */}
//                     <div className="flex items-center justify-between
//                 border-b border-slate-400 
//                  pb-3 font-semibold text-sm">
//                    <div className="flex items-center gap-3">
//                         <Image src='/meat.webp'
//                         width={249}
//                         height={249}
//                         alt='Alt text' 
//                         className='rounded-xl w-20 h-20'/>

//                         <div className="flex flex-col">
//                           <h2>Apple Watch Series 7 - 44m</h2>
//                           <small>Golden</small>
//                         </div>
               
//                    </div> 

//                   <div className="rounded-xl border
//                     border-gray-400 flex gap-3 items-center ">
//                       <button className='border-r
//                      border-gray-400 py-2 px-4'>
//                         <Minus/>
//                       </button>
//                        <p className='flex-grow py-2 px-4'>
//                         1
//                       </p>
//                        <button className='border-l
//                         border-gray-400 py-2 px-4'>
//                         <Plus/>
//                        </button>
//                   </div>
                   
//                    <div className="flex items-center gap-2">
//                     <h4>$259.00</h4>
//                     <button>
//                     <Trash2 className='text-red-600 w-5 h-5'/>
//                     </button>
//                    </div>

//               </div>
//             </div>

//             {/* COUPON Form */}
//             <div className="flex items-center gap-2 py-8">
//             <input type="email" id="email" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-1/2" placeholder="Enter Coupon"/>
//             <button className='shrink-0 py-2.5 px-4 rounded-lg bg-lime-600 '>
//               Apply Coupon
//             </button>
//             </div>
//         </div>
//         <div className="col-span-4 sm:block bg-white border 
//          border-gray-300 rounded-lg dark:bg-gray-700 
//             dark:border-gray-700 dark:text-slate-100
//             ovreflow-hidden hidden p-5 font-bold">
//             <h2 className="text-2xl pb-3">Cart total</h2>
//            <div className="flex items-center justify-between border-b border-slate-500 pb-6">
//            <span>Subtotal </span>
//            <span>$589</span>
//            </div>

//            <div className="flex items-center j500ustify-between pb-4 mt-2">
//            <span>Tax </span>
//            <span>$0</span>
//            </div>

//            <div className="flex items-center j500ustify-between pb-4">
//            <span>Shapping </span>
//            <span>$10</span>
//            </div>

//            <p className='border-b border-slate-500 pb-6 text-slate-400 font-normal'>we only charge for shipping when you have over 
//             2kg items
//            </p>

//            <div className="flex items-center j500ustify-between py-4 font-bold">
//            <span>Total </span>
//            <span>$1000</span>
//            </div>

//            <Link href="#" className="bg-slate-200 
//            text-slate-900 rounded-lg py-2 px-4 font-normal">Continue to Payment</Link>
//         </div>

//        </div>
//     </div>
//   )
// }
