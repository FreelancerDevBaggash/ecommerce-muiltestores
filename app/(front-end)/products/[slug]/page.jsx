// import React from 'react'
// import Breadcrumb from '../../../../components/frontend/Breadcrumb'
// import AddToCartButton from '../../../../components/frontend/AddToCartButton'
// import CategoryCarousel from '../../../../components/frontend/CategoryCarousel'
// import ProductShareButton from '../../../../components/frontend/ProductShareButton'
// import Image from 'next/image'
// import { Minus, Plus, Share2, Tag, BaggageClaim, Send } from 'lucide-react'
// import {getData} from '../../../../lib/getData'
// import Link from 'next/link'


// export default async function ProductDetailPage({params:{slug}}) {
//     const product = await getData(`/products/product/${slug}`)
//     const {id} = product;
//     const catId = product.categoryId;
//     const category = await getData(`categories/${catId}`);
//     const categoryProducts = category.products;
//     const products = categoryProducts.filter((product)=>product.id !== id);
//   return (
//     <div className='mt-2'>
//         <Breadcrumb/>
// <div>
// <p className='py-4 '>
//               {product.descripti}
//              </p>
// </div>
        
//      <div className="grid grid-cols-12 gap-7">




//         {/* <div className="col-span-3">
//             <Image src={product.imageUrl}
//              alt={product.title}
//              width={240}
//              height={240}
//              className='w-full '/>
//         </div> */}
// {/* <div className="lg:col-span-4">
//   <div className="grid sm:grid-cols-4 gap-4 text-center">
//     <div className="sm:col-span-3 bg-gray-100 dark:bg-slate-950 p-2 flex items-center rounded">
//     <Image src={product.imageUrl} 
//      alt={product.title}

//      width={240}
//              height={240}
//     className="w-full rounded-sm  h-full" />
//     </div>

//     <div className="sm:space-y-2 w-full h-full max-sm:grid max-sm:grid-cols-2 max-sm:gap-2">
//       <div className="bg-gray-100 p-2 dark:bg-slate-950 flex items-center rounded w-full h-[140px] sm:h-[200px]">
//       <Image src={product.imageUrl} 
//      alt={product.title} 
//   width={500}
//   height={400}
//          className="w-full max-h-full object-contain object-top" />
//       </div>

//       <div className="bg-gray-100 dark:bg-slate-950 p-2 flex items-center rounded w-full h-[140px] sm:h-[200px]">
    
//     <Image src={product.imageUrl} 
//     alt={product.title}

//   width={500}
//   height={400}
//        className="w-auto h-full " />
//       </div>
//     </div>
//   </div>
// </div> */}
// <div className="lg:col-span-4">
//   <div className="grid sm:grid-cols-4 gap-4 text-center">
//     {/* الصورة الرئيسية */}
//     <div className="sm:col-span-3 bg-gray-100 dark:bg-slate-800 p-2 flex items-center justify-center rounded-lg shadow-md">
//       <Image
//         src={product.imageUrl || '/default-image.jpg'} // صورة افتراضية في حال عدم وجود صورة
//         alt={product.title || 'Default Image'}
//         width={240}
//         height={240}
//         className="w-full h-full object-cover   rounded-lg"
//       />
//     </div>

//     {/* الصور المصغرة */}
//     <div className="sm:space-y-2 w-full h-full max-sm:grid max-sm:grid-cols-3 max-sm:gap-2">
//       {product.productImages && product.productImages.length > 0 ? (
//         product.productImages.map((image, index) => (
//           <div
//             key={index}
//             className="bg-gray-100 dark:bg-slate-800 p-2 flex items-center justify-center rounded-lg shadow-md w-full h-[140px] sm:h-[200px]"
//           >
//             <Image
//               src={image || '/default-thumbnail.jpg'} // صورة افتراضية للصور المصغرة
//               alt={`${product.title || 'Default Title'} - Image ${index + 1}`}
//               width={500}
//               height={400}
//               className="w-full h-full object-cover rounded-md"
//             />
//           </div>
//         ))
//       ) : (
//         <div className="text-gray-500 dark:text-gray-400 w-full text-center">
//           لا توجد صور إضافية.
//         </div>
//       )}
//     </div>
//   </div>
// </div>




//          {/* <div className="col-span-6">
//             <div className="flex items-center justify-between mb-6">
//             <h2 className='text-xl lg:text-4xl  text-slate-800 dark:text-slate-50 font-semibold'> 
//             {product.title}</h2>
//              <ProductShareButton />
//             </div>
//         <div className="border-b border-gray-500">
//               <p className='py-4 '>
//               {product.description}
//              </p>
//                 <div className="flex items-center gap-8 mb-4">
//                 <p>SKU: {product.sku}</p>
//                 <p className='bg-lime-200 py-2 
//                 px-6 rounded-full text-slate-900'>
//                 <b>Stock</b>: {product.productStock}</p>
//                 </div>
//           </div>
//           <div className="flex items-center justify-between
//                gap-4 pt-4 border-b border-gray-500 pb-4">
//                  <div className="flex items-center gap-6 ">
//                     <h4 className='text-3xl'>UGX {product.salePrice}</h4>
//                     <del className='text-slate-400 text-sm'>
//                         UGX {product.productPrice}</del>
//                  </div>
//                     <p className='flex items-center '>
//                         <Tag className=' w-6 h-6 text-slate-400 me-2'/>
//                         <span> Save 50% right now</span>
//                        </p>
//                  </div>
//           <div className="flex justify-between items-center py-6">
//                <AddToCartButton product={product} />
            
//                    <p>Something Here</p>
//              </div>
//         </div> */}

// <div className="col-span-5">
//             <div className="flex items-center justify-between mb-6">
//             <h2 className='text-xl lg:text-4xl  text-slate-800 dark:text-slate-50 font-semibold'> 
//             {product.title}</h2>
//              <ProductShareButton />
//             </div>
//         <div className="border-b border-gray-500">
//               <p className='py-4 '>
//               {product.description}
//              </p>
//                 <div className="flex items-center gap-8 mb-4">
//                 <p>SKU: {product.sku}</p>
//                 <p className='bg-lime-200 py-2 
//                 px-6 rounded-full text-slate-900'>
//                 <b>Stock</b>: {product.productStock}</p>
//                 </div>
//           </div>
//           <div className="flex items-center justify-between
//                gap-4 pt-4 border-b border-gray-500 pb-4">
//                  <div className="flex items-center gap-6 ">
//                     <h4 className='text-3xl'>UGX {product.salePrice}</h4>
//                     <del className='text-slate-400 text-sm'>
//                         UGX {product.productPrice}</del>
//                  </div>
//                     <p className='flex items-center '>
//                         <Tag className=' w-6 h-6 text-slate-400 me-2'/>
//                         <span> Save 50% right now</span>
//                        </p>
//                  </div>
//           <div className="flex justify-between items-center py-6">
//                <AddToCartButton product={product} />
            
//                    <p>Something Here</p>
//              </div>
//         </div>

//         <div className="col-span-3 sm:block bg-white border 
//          border-gray-300 rounded-lg dark:bg-gray-700 
//             dark:border-gray-700 text-slate-800
//             ovreflow-hidden hidden">
//           <h2 className='bg-slate-100 dark:bg-gray-800 py-2 px-2 font-semibold
//             border-b border-gray-300 text-slate-800 dark:border-gray-600 dark:text-slate-100'>
//              DELIVERY $ RETURNS
//               </h2>    

//             <div className="p-4">
//               <div className="flex rounded-lg py-2 px-4 bg-orange-400
//                text-slate-50 items-center gap-3 ">
//                 <span>Limi Express</span>
//                 <Send/>
//                 </div> 
//                 <div className='py-3 text-slate-100 
//                 border-b border-gray-500'> 
//                 Eligible for free delivery.
//                     <Link href='#'> View Details</Link>
//                     </div> 
//                     <h2 className='text-slate-200 py-2'>Chooce your Location</h2>
//                     <div className="pb-3">
//                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//                             <option selected>Choose a country</option>
//                                 <option value="US">United States</option>
//                                  <option value="CA">Canada</option>
//                               <option value="FR">France</option>
//                              <option value="DE">Germany</option>
//                        </select>
//                     </div>

//                     <div className="pb-3">
//                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//                             <option selected>Choose a country</option>
//                                 <option value="US">United States</option>
//                                  <option value="CA">Canada</option>
//                               <option value="FR">France</option>
//                              <option value="DE">Germany</option>
//                        </select>
//                     </div>



//                     <div className="pb-3">
//                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//                             <option selected>Choose a country</option>
//                                 <option value="US">United States</option>
//                                  <option value="CA">Canada</option>
//                               <option value="FR">France</option>
//                              <option value="DE">Germany</option>
//                        </select>
//                     </div>
//             </div>
//           </div>


//      </div>

//      <div className="bg-white dark:bg-slate-700 my-4 rounded-xl p-4 ">
//      <h2 className='mb-4 text-xl font-semibold text-slate-200 ml-2 '>Simillar Products</h2>
//           <CategoryCarousel products={products} />
//            </div>
//     </div>
//   )
// }
import React from 'react';
import Breadcrumb from '../../../../components/frontend/Breadcrumb';
import AddToCartButton from '../../../../components/frontend/AddToCartButton';
import CategoryCarousel from '../../../../components/frontend/templaet1/CategoryCarousel-store';
import ProductShareButton from '../../../../components/frontend/ProductShareButton';
import ProductimageCarousel from '../../../../components/frontend/ProductimageCarousel';
import { Tag, Send } from 'lucide-react';
import { getData } from '../../../../lib/getData';
import Link from 'next/link';

export default async function ProductDetailPage({ params: { slug } }) {
  const product = await getData(`/products/product/${slug}`);
  const { id, categoryId, productImages = [], imageUrl, title, description, sku, productStock, salePrice, productPrice } = product;
  const category = await getData(`categories/${categoryId}`);
  const categoryProducts = category.products;
  const products = categoryProducts.filter((item) => item.id !== id);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const urlToShare = `${baseUrl}/products/${slug}`;

  return (
    <div className="mt-2">
      <Breadcrumb />
      <div className="grid grid-cols-12 gap-7">
        {/* عرض الصور باستخدام Swiper */}
        <ProductimageCarousel productImages={productImages} thumbnail={imageUrl} />

        {/* تفاصيل المنتج */}
        <div className="col-span-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl lg:text-4xl text-slate-800 dark:text-slate-50 font-semibold">{title}</h2>
            <ProductShareButton urlToShare={urlToShare} />
          </div>
          <div className="border-b border-gray-500">
            <p className="py-4">{description}</p>
            <div className="flex items-center gap-8 mb-4">
              <p>SKU: {sku}</p>
              <p className="bg-lime-200 py-2 px-6 rounded-full text-slate-900">
                <b>Stock:</b> {productStock}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 pt-4 border-b border-gray-500 pb-4">
            <div className="flex items-center gap-6">
              <h4 className="text-3xl">UGX {salePrice}</h4>
              <del className="text-slate-400 text-sm">UGX {productPrice}</del>
            </div>
            <p className="flex items-center">
              <Tag className="w-6 h-6 text-slate-400 me-2" />
              <span>Save 50% right now</span>
            </p>
          </div>
          <div className="flex justify-between items-center py-6">
            <AddToCartButton product={product} />
            <p>Something Here</p>
          </div>
        </div>

        {/* تفاصيل التوصيل */}
        <div className="col-span-3 sm:block bg-white border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden hidden">
          <h2 className="bg-slate-100 dark:bg-gray-800 py-2 px-2 font-semibold border-b border-gray-300 text-slate-800 dark:border-gray-600 dark:text-slate-100">
            DELIVERY & RETURNS
          </h2>
          <div className="p-4">
            <div className="flex rounded-lg py-2 px-4 bg-orange-400 text-slate-50 items-center gap-3">
              <span>Limi Express</span>
              <Send />
            </div>
            <div className="py-3 text-slate-100 border-b border-gray-500">
              Eligible for free delivery.
              <Link href="#"> View Details</Link>
            </div>
            <h2 className="text-slate-200 py-2">Choose your Location</h2>
            <div className="pb-3">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* عرض المنتجات المشابهة */}
      <div className="bg-white dark:bg-slate-700 my-4 rounded-xl p-4">
        <h2 className="mb-4 text-xl font-semibold text-slate-200 ml-2">Similar Products</h2>
        <CategoryCarousel products={products} />
      </div>
    </div>
  );
}

// import React from 'react';
// import Breadcrumb from '../../../../components/frontend/Breadcrumb';
// import AddToCartButton from '../../../../components/frontend/AddToCartButton';
// import CategoryCarousel from '../../../../components/frontend/templaet1/CategoryCarousel-store';
// import ProductShareButton from '../../../../components/frontend/ProductShareButton';
// import ProductimageCarousel from '../../../../components/frontend/ProductimageCarousel';
// import Image from 'next/image';
// import { Tag, Send } from 'lucide-react';
// import { getData } from '../../../../lib/getData';
// import Link from 'next/link';

// export default async function ProductDetailPage({ params: { slug } }) {
//     // جلب بيانات المنتج
//     const product = await getData(`/products/product/${slug}`);
//     const { id, categoryId, productImages = [], imageUrl, title, description, sku, productStock, salePrice, productPrice } = product;

//     // جلب بيانات الفئة والمنتجات المشابهة
//     const category = await getData(`categories/${categoryId}`);
//     const products = category.products.filter((p) => p.id !== id);

//     // إنشاء رابط المشاركة
//     const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//     const urlToShare = `${baseUrl}/products/${slug}`;

//     return (
//         <div className="mt-2">
//             <Breadcrumb />

//             <div className="grid grid-cols-12 gap-7">
//                 {/* ✅ عرض الصور باستخدام الكومبوننت المحسن */}
//                 <ProductimageCarousel ProductImages={productImages} thumbnail={imageUrl} />

//                 {/* ✅ تفاصيل المنتج */}
//                 <div className="col-span-5">
//                     <div className="flex items-center justify-between mb-6">
//                         <h2 className="text-xl lg:text-4xl text-slate-800 dark:text-slate-50 font-semibold">{title}</h2>
//                         <ProductShareButton urlToShare={urlToShare} />
//                     </div>

//                     <div className="border-b border-gray-500">
//                         <p className="py-4">{description}</p>
//                         <div className="flex items-center gap-8 mb-4">
//                             <p>SKU: {sku}</p>
//                             <p className="bg-lime-200 py-2 px-6 rounded-full text-slate-900">
//                                 <b>Stock:</b> {productStock}
//                             </p>
//                         </div>
//                     </div>

//                     <div className="flex items-center justify-between gap-4 pt-4 border-b border-gray-500 pb-4">
//                         <div className="flex items-center gap-6">
//                             <h4 className="text-3xl">UGX {salePrice}</h4>
//                             <del className="text-slate-400 text-sm">UGX {productPrice}</del>
//                         </div>
//                         <p className="flex items-center">
//                             <Tag className="w-6 h-6 text-slate-400 me-2" />
//                             <span>Save 50% right now</span>
//                         </p>
//                     </div>

//                     <div className="flex justify-between items-center py-6">
//                         <AddToCartButton product={product} />
//                     </div>
//                 </div>

//                 {/* ✅ عرض تفاصيل التوصيل */}
//                 <div className="col-span-3 sm:block bg-white border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden hidden">
//                     <h2 className="bg-slate-100 dark:bg-gray-800 py-2 px-2 font-semibold border-b border-gray-300 text-slate-800 dark:border-gray-600 dark:text-slate-100">
//                         DELIVERY & RETURNS
//                     </h2>
//                     <div className="p-4">
//                         <div className="flex rounded-lg py-2 px-4 bg-orange-400 text-slate-50 items-center gap-3">
//                             <span>Limi Express</span>
//                             <Send />
//                         </div>
//                         <div className="py-3 text-slate-100 border-b border-gray-500">
//                             Eligible for free delivery.
//                             <Link href="#"> View Details</Link>
//                         </div>
//                         <h2 className="text-slate-200 py-2">Choose your Location</h2>
//                         <div className="pb-3">
//                             <select
//                                 id="countries"
//                                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                             >
//                                 <option selected>Choose a country</option>
//                                 <option value="US">United States</option>
//                                 <option value="CA">Canada</option>
//                                 <option value="FR">France</option>
//                                 <option value="DE">Germany</option>
//                             </select>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* ✅ عرض المنتجات المشابهة */}
//             <div className="bg-white dark:bg-slate-700 my-4 rounded-xl p-4">
//                 <h2 className="mb-4 text-xl font-semibold text-slate-200 ml-2">Similar Products</h2>
//                 <CategoryCarousel products={products} />
//             </div>
//         </div>
//     );
// }
