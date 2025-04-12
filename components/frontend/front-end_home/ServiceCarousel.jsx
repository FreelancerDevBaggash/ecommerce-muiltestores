// "use client"

// import Image from "next/image"
// import { useEffect, useState } from "react"

// export default function ServiceCarousel({ images }) {
//   const [duplicatedImages, setDuplicatedImages] = useState([])

//   useEffect(() => {
//     setDuplicatedImages([...images, ...images])
//   }, [images])

//   return (
//     <div className="h-64 overflow-hidden rounded-lg relative">
//       <div className="flex flex-col animate-scroll">
//         {duplicatedImages.map((image, index) => (
//           <div key={index} className="mb-4">
//             <Image
//               src={image}
//               alt={`صورة ${index + 1}`}
//               width={300}
//               height={200}
//               className="w-full h-64 object-cover rounded-lg"
//             />
//           </div>
//         ))}
//       </div>

//       {/* إضافة الأنميشن داخل JSX */}
//       <style jsx>{`
//         @keyframes scroll {
//           0% {
//             transform: translateY(0%);
//           }
//           100% {
//             transform: translateY(-50%);
//           }
//         }
//         .animate-scroll {
//           animation: scroll 30s linear infinite;
//         }
//       `}</style>
//     </div>
//   )
// }
"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"

export default function ServiceCarousel({ images }) {
  const [duplicatedImages, setDuplicatedImages] = useState([])
  const controls = useAnimation()

  useEffect(() => {
    setDuplicatedImages([...images, ...images]) // تكرار الصور للحركة اللانهائية

    // بدء الحركة
    controls.start({
      y: ["0%", "-50%"],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    })
  }, [images, controls])

  return (
    <div
      className="h-[200px] md:h-[400px] lg:h-[400px] overflow-hidden rounded-2xl relative group"
      onMouseEnter={() => controls.stop()} // وقف الحركة عند المرور
      onMouseLeave={() =>
        controls.start({
          y: ["0%", "-50%"],
          transition: {
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          },
        })
      }
    >
      <motion.div animate={controls} className="flex flex-col  ">
        {duplicatedImages.map((image, index) => (
          <div key={index} className="mb-4 px-2">
            <Image
              src={image || "/placeholder.svg"}
              alt={`صورة ${index + 1}`}
              width={200}
              height={200}
              className="w-[400px] h-[200px] md:h-[250px] lg:h-[300px] object-cover rounded-xl shadow-md"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
