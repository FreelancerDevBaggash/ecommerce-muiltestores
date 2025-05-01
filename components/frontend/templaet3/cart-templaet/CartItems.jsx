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
// import React, { useEffect } from 'react';
// import EmptyCart from './EmptyCart';
// import CartProduct from './CartProduct';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// export default function CartItems({ cartItems, customization = {} }) {
//     useEffect(() => {
//         AOS.init({ duration: 1000 });
//     }, []);

//     // تخصيص المظهر
    // const primaryColor = customization?.primaryColor || '#4CAF50';
    // const accentColor = customization?.accentColor || '#FFC107';
    // const fontFamily = customization?.fontFamily || 'sans-serif';

//     // حساب المجموع الكلي
//     const subTotal = cartItems.reduce((acc, item) => 
//         acc + (item.salePrice * item.qty), 0
//     ).toFixed(2);

//     return (
//         <div 
//             dir='rtl'
//             className="flex-1 p-4 md:p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm"
//             style={{ 
//                 backgroundColor: customization?.backgroundColor || '#FFFFFF',
//                 fontFamily
//             }}
//             data-aos="fade-up"
//         >
//             {cartItems.length > 0 ? (
//                 <>
//                     العنوان ورؤوس الأعمدة
//                     <div className="mb-8 space-y-6">
//                         {/* <h2 
//                             className="text-2xl md:text-3xl font-bold"
//                             style={{ color: accentColor }}
//                             data-aos="fade-right"
//                         >
//                             سلة التسوق
//                         </h2> */}
                        
//                         {/* رؤوس الأعمدة (مخفية في الجوال) */}
//                         {/* <div 
//                             className="hidden md:flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-700"
//                             data-aos="fade-left"
//                         >
//                             <span className="text-sm font-medium">المنتج</span>
//                             <span className="text-sm font-medium">الكمية</span>
//                             <span className="text-sm font-medium">السعر</span>
//                         </div> */}
//                     </div>

//                     {/* قائمة المنتجات */}
//                     <div className="space-y-4">
//                         {cartItems.map((item, i) => (
//                             <CartProduct 
//                                 key={item.id} 
//                                 cartItem={item} 
//                                 data-aos="zoom-in"
//                                 customization={customization}
//                             />
//                         ))}
//                     </div>

//                     {/* قسم الكوبون والمجموع */}
//                     <div className="mt-8 space-y-6">
//                         <div 
//                             className="flex flex-col sm:flex-row gap-4"
//                             data-aos="fade-up"
//                         >
//                             <input
//                                 type="text"
//                                 placeholder="كود الخصم"
//                                 className="flex-grow px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-lime-400"
//                                 style={{ 
//                                     color: customization?.secondaryColor || '#2C3E50',
//                                     borderColor: accentColor
//                                 }}
//                             />
//                             <button
//                                 className="w-full sm:w-auto px-6 py-3 text-white rounded-lg transition-all hover:opacity-90"
//                                 style={{ backgroundColor: primaryColor }}
//                             >
//                                 تطبيق الكود
//                             </button>
//                         </div>

//                         <div 
//                             className="flex justify-between items-center text-lg font-semibold"
//                             data-aos="fade-up"
//                         >
//                             <span>المجموع الكلي:</span>
//                             <span style={{ color: accentColor }}>
//                                 ${subTotal}
//                             </span>
//                         </div>
//                     </div>
//                 </>
//             ) : (
//                 <EmptyCart data-aos="fade-up" customization={customization} />
//             )}
//         </div>
//     );
// }
import React, { useEffect } from 'react';
import EmptyCart from './EmptyCart';
import CartProduct from './CartProduct';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CartItems({ cartItems, customization = {} }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out-cubic' });
  }, []);

  const themeConfig = {
    primaryColor: customization?.primaryColor || '#4CAF50',
    secondaryColor: customization?.secondaryColor || '#2C3E50',
    accentColor: customization?.accentColor || '#FFC107',
    fontFamily: customization?.fontFamily || 'Tajawal, sans-serif',
    borderColor: `${customization?.primaryColor || '#4CAF50'}20`,
  };

  const subTotal = cartItems
    .reduce((acc, item) => acc + item.salePrice * item.qty, 0)
    .toFixed(2);

  return (
    <div
      dir="rtl"
      className="flex-1 p-6 rounded-2xl shadow-sm backdrop-blur-sm"
      style={{
        fontFamily: themeConfig.fontFamily,
      
      
      }}
      data-aos="fade-up"
    >
      {cartItems.length > 0 ? (
        <div className="space-y-8">
          {/* قائمة المنتجات */}
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div 
                key={item.id} 
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <CartProduct
                  cartItem={item}
                  customization={customization}
                />
              </div>
            ))}
          </div>

                   <div 
  className="mt-8 flex  flex-col md:flex-row justify-between items-center gap-6"
  data-aos="fade-up"
>
  {/* كود الخصم */}
  <div className="flex-1 relative w-full md:max-w-xl">
    <input
      type="text"
      placeholder="أدخل كود الخصم هنا..."
      className="w-full px-6 py-4 pr-24 rounded-xl border-0 focus:ring-0 bg-opacity-10 shadow-sm hover:shadow-md transition-all placeholder-opacity-70"
      style={{
        backgroundColor: `${themeConfig.accentColor}15`,
        color: themeConfig.secondaryColor,
      }}
    />
    <button
      className="absolute left-2 top-1/2 -translate-y-1/2 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
      style={{
        backgroundColor: themeConfig.primaryColor,
        color: '#FFFFFF',
        boxShadow: `0 4px 12px ${themeConfig.primaryColor}40`
      }}
    >
      تفعيل الكود
      <span className="mr-2">🎁</span>
    </button>
  </div>

  {/* السعر النهائي */}
  <div
    className="flex items-center justify-between md:justify-start gap-4 px-6 py-4 rounded-2xl backdrop-blur-sm hover:shadow-lg transition-all"
    style={{
      background: `linear-gradient(45deg, ${themeConfig.accentColor}08, ${themeConfig.primaryColor}03)`,
      border: `2px solid ${themeConfig.accentColor}20`
    }}
  >
    <div 
      className="p-3 rounded-xl"
      style={{
        backgroundColor: `${themeConfig.primaryColor}15`
      }}
    >
      <svg className="w-6 h-6" style={{ color: themeConfig.primaryColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
    </div>
    <div>
      <h3 className="text-xl font-bold" style={{ color: themeConfig.secondaryColor }}>
        الإجمالي النهائي
      </h3>
      <div className="flex items-center gap-2 mt-1">
        <span 
          className="text-xl font-black tracking-tight"
          style={{ 
            color: themeConfig.primaryColor,
            textShadow: `0 2px 8px ${themeConfig.primaryColor}20`
          }}
        >
          {subTotal}
        </span>
        <span 
          className="text-lg font-medium"
          style={{ color: themeConfig.accentColor }}
        >
          ر.ي
        </span>
      </div>
    </div>
  </div>
</div>



        </div>
      ) : (
        <EmptyCart data-aos="fade-up" customization={customization} />
      )}
    </div>
  );
}