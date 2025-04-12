// "use client"
// import React, { useState } from 'react';
// import Image from 'next/image';

// export default function ProductimageCarousel({ productImages = [], thumbnail }) {
//     // تحديد الصورة الرئيسية القابلة للتغيير
//     const [mainImage, setMainImage] = useState(thumbnail || '/default-image.jpg');

//     return (
//         <div className="col-span-3">
//             {/* عرض الصورة الرئيسية */}
//             <div className="border rounded-lg overflow-hidden">
//                 <Image
//                     src={mainImage}
//                     alt="Product Image"
//                     width={556}
//                     height={556}
//                     className="w-full h-auto object-cover rounded-lg"
//                     priority
//                 />
//             </div>

//             {/* عرض الصور الإضافية عند توفرها */}
//             {productImages.length > 0 && (
//                 <div className="grid grid-cols-4 gap-2 mt-4">
//                     {productImages.map((image, index) => (
//                         <div
//                             key={index}
//                             className="border rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
//                             onClick={() => setMainImage(image)} // تغيير الصورة الرئيسية عند الضغط
//                         >
//                             <Image
//                                 src={image}
//                                 alt={`Product Image ${index + 1}`}
//                                 width={100}
//                                 height={100}
//                                 className="w-full h-auto object-cover"
//                             />
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }
// "use client"
// import React, { useState } from 'react';
// import Image from 'next/image';

// export default function ProductImageCarousel({ productImages = [], thumbnail }) {
//     const [selectedImage, setSelectedImage] = useState(thumbnail || '/default-image.jpg');
//     const [activeIndex, setActiveIndex] = useState(0);

//     const handleThumbnailClick = (index, image) => {
//         setSelectedImage(image);
//         setActiveIndex(index);
//     };

//     return (
//         <div className="max-w-3xl mx-auto">
//             {/* Main Image Container */}
//             <div className="rounded-2xl overflow-hidden shadow-lg mb-6 bg-gray-100">
//                 <Image
//                     src={selectedImage}
//                     alt="Product Main"
//                     width={800}
//                     height={800}
//                     className="w-full h-auto aspect-square object-cover"
//                     priority
//                     sizes="(max-width: 768px) 100vw, 50vw"
//                 />
//             </div>

//             {/* Thumbnails Container */}
//             <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
//                 {productImages.map((image, index) => (
//                     <div
//                         key={index}
//                         className={`overflow-hidden rounded-lg cursor-pointer transition-all 
//                             ${activeIndex === index ? 'ring-2 ring-primary-500' : 'hover:scale-105'}`}
//                         onClick={() => handleThumbnailClick(index, image)}
//                     >
//                         <Image
//                             src={image}
//                             alt={`Thumbnail ${index + 1}`}
//                             width={150}
//                             height={150}
//                             className="w-full h-auto aspect-square object-cover"
//                             sizes="(max-width: 640px) 20vw, 10vw"
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// "use client"
// import React, { useState, useCallback } from 'react'
// import Image from 'next/image'
// import { motion, AnimatePresence } from 'framer-motion'

// export default function ProductImageCarousel({ productImages = [], thumbnail }) {
//   const [selectedImage, setSelectedImage] = useState(thumbnail || '/default-image.jpg')
//   const [activeIndex, setActiveIndex] = useState(0)

//   const handleThumbnailClick = useCallback((index, image) => {
//     setSelectedImage(image)
//     setActiveIndex(index)
//   }, [])

//   // تأثيرات الحركة
//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { opacity: 1, scale: 1 },
//     exit: { opacity: 0, scale: 1.05 }
//   }

//   return (
//     <div className="max-w-4xl mx-auto group">
//       {/* الصورة الرئيسية مع تأثيرات الحركة */}
//       <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-100 dark:bg-gray-800 mb-4 transition-all duration-300 hover:shadow-2xl">
//         <AnimatePresence mode='wait'>
//           <motion.div
//             key={selectedImage}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={imageVariants}
//             transition={{ duration: 0.2 }}
//           >
//             <Image
//               src={selectedImage}
//               alt="Product Main"
//               width={1200}
//               height={1200}
//               className="w-full h-auto aspect-square object-contain"
//               priority
//               sizes="(max-width: 768px) 100vw, 75vw"
//             />
            
//             {/* Badge للصورة الحالية */}
//             <span className="absolute bottom-2 right-2 bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
//               {activeIndex + 1}/{productImages.length}
//             </span>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* معرض الصور المصغرة */}
//       <div className="grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 md:grid-cols-7 gap-2 px-2">
//         {productImages.map((image, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className={`relative aspect-square overflow-hidden rounded-xl cursor-pointer transition-all
//               ${activeIndex === index 
//                 ? 'ring-3 ring-primary-500 dark:ring-primary-400' 
//                 : 'ring-1 ring-gray-200 dark:ring-gray-700'}`}
//             onClick={() => handleThumbnailClick(index, image)}
//           >
//             <Image
//               src={image}
//               alt={`Thumbnail ${index + 1}`}
//               fill
//               className="object-cover hover:opacity-90 transition-opacity"
//               sizes="(max-width: 640px) 20vw, 15vw"
//               quality={50}
//             />
            
//             {/* Overlay عند التمرير */}
//             <div className={`absolute inset-0 transition-colors 
//               ${activeIndex === index 
//                 ? 'bg-primary-500/20' 
//                 : 'bg-transparent hover:bg-gray-100/30 dark:hover:bg-gray-900/30'}`}
//             />
//           </motion.div>
//         ))}
//       </div>

//       {/* حالة عدم وجود صور */}
//       {productImages.length === 0 && (
//           <span className="text-gray-400 dark:text-gray-600">لا توجد صور متاحة</span>
//       )}
//     </div>
//   )
// }
"use client"
import React, { useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useDragControls } from 'framer-motion'

export default function ProductImageCarousel({ productImages = [], thumbnail }) {
  const [selectedImage, setSelectedImage] = useState(thumbnail || '/default-logo.png')
  const [activeIndex, setActiveIndex] = useState(0)
  const dragControls = useDragControls()
  const [dragDirection, setDragDirection] = useState(null)

  const handleThumbnailClick = useCallback((index, image) => {
    setSelectedImage(image)
    setActiveIndex(index)
  }, [])

  const handleDragEnd = useCallback((event, info) => {
    const offset = info.offset.x
    const velocity = info.velocity.x

    if (Math.abs(offset) > 100 || Math.abs(velocity) > 500) {
      const direction = offset > 0 ? 'right' : 'left'
      setDragDirection(direction)
      
      let newIndex = activeIndex
      if (direction === 'left') {
        newIndex = Math.min(activeIndex + 1, productImages.length - 1)
      } else {
        newIndex = Math.max(activeIndex - 1, 0)
      }

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex)
        setSelectedImage(productImages[newIndex])
      }
    }

    setTimeout(() => setDragDirection(null), 300)
  }, [activeIndex, productImages])

  // تأثيرات الحركة
  const imageVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === 'left' ? 100 : -100,
      scale: 0.95
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction === 'left' ? -100 : 100,
      scale: 1.05
    })
  }

  return (
    <div className="max-w-4xl mx-auto group">
      {/* الصورة الرئيسية مع دعم السحب */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-100 dark:bg-gray-800 mb-4 
        touch-pan-y select-none">
        <AnimatePresence mode='popLayout' custom={dragDirection}>
          <motion.div
            key={activeIndex}
            custom={dragDirection}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            dragControls={dragControls}
            onDragEnd={handleDragEnd}
            className="w-full h-full"
          >
            <Image
              src={selectedImage}
              alt="Product Main"
              width={1200}
              height={1200}
              className="w-full h-auto aspect-square object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 75vw"
            />
            
            {/* Badge للصورة الحالية */}
            <span className="absolute bottom-2 right-2 bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              {activeIndex + 1}/{productImages.length}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* مؤشرات التمرير */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {productImages.map((_, idx) => (
            <motion.div
              key={idx}
              className={`w-2 h-2 rounded-full ${
                activeIndex === idx 
                  ? 'bg-primary-500' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              animate={{ scale: activeIndex === idx ? 1.2 : 1 }}
              transition={{ type: 'spring', stiffness: 500 }}
            />
          ))}
        </div>
      </div>

      {/* معرض الصور المصغرة */}
      <div className="grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 md:grid-cols-7 gap-2 px-2">
        {productImages.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative aspect-square overflow-hidden rounded-xl cursor-pointer transition-all
              ${activeIndex === index 
                ? 'ring-3 ring-primary-500 dark:ring-primary-400' 
                : 'ring-1 ring-gray-200 dark:ring-gray-700'}`}
            onClick={() => handleThumbnailClick(index, image)}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover hover:opacity-90 transition-opacity"
              sizes="(max-width: 640px) 20vw, 15vw"
              quality={50}
            />
            
            <div className={`absolute inset-0 transition-colors 
              ${activeIndex === index 
                ? 'bg-primary-500/20' 
                : 'bg-transparent hover:bg-gray-100/30 dark:hover:bg-gray-900/30'}`}
            />
          </motion.div>
        ))}
      </div>

      {productImages.length === 0 && (
        // <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
          <span className="text-gray-400 dark:text-gray-600">لا توجد صور متاحة</span>
        // </div>
      )}
    </div>
  )
}