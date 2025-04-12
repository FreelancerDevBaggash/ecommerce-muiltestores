// import React from 'react'

// export default function loading() {
//   return (
//     <div>
//       <p>loading ...</p>
//     </div>
//   )
// }
import React from 'react'

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
  <img src="/images/logingg.gif" alt="Loading..." className="w-24 h-24" />
      
        <p className="text-lg text-gray-700">Loading...</p>
        
      </div>
    </div>
  )
}