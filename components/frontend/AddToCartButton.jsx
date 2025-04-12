"use client"
import React from 'react'
import { BaggageClaim } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice'
import { toast } from 'react-hot-toast'


export default function AddToCartButton({product}) {
    const dispatch =useDispatch();
    function handleAddToCart(){
        dispatch(addToCart(product)); 
        toast.success("Item added SuccessFully");
    }
    return (
//         <button  dir='rtl' onClick={() =>handleAddToCart()} className='flex 
//         items-center space-x-2 bg-lime-600
//          px-4 py-2 rounded-xd text-white'>
//         <BaggageClaim/>
//         <span>اضافة الئ السلة</span>
//    </button>
<button
  dir="rtl"
  onClick={handleAddToCart}
  className="flex items-center space-x-2 bg-gradient-to-r from-indigo-400 to-green-300-600 px-6 py-3 rounded-xl text-white shadow-lg transform transition duration-300 ease-in-out hover:scale-105 active:translate-y-1"
>
  <BaggageClaim className="w-6 h-6" />
  <span className="font-bold">اضافة الى السلة</span>
</button>

    )
}

{/* <button className='flex items-center space-x-2
bg-lime-600 px-4 py-2 rounded-md text-white'>
<BaggageClaim/>
<span>Add to Cart</span>
</button> */}