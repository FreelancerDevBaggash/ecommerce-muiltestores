// import React from 'react'

// export default function loading() {
//   return (
//     <div>
//       <p>loading ...</p>
//     </div>
//   )
// }
import React from 'react'
import Image from 'next/image'
export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
      <Image
          src="/images/logingg.gif"
          alt="Loading..."
          width={96}        // 24 * 4px = 96px
          height={96}       // 24 * 4px = 96px
          className="w-24 h-24"
          unoptimized       // يحافظ على حركة الـ GIF
          priority          // يحملها بأولوية لتحسين LCP
        />      
        <p className="text-lg text-gray-700">Loading...</p>
        
      </div>
    </div>
  )
}