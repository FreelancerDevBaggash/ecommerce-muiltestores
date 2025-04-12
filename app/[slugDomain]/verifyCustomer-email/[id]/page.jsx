// import { Info } from 'lucide-react'
// import React from 'react'
// //import { getData } from "../../../lib/getData"

// export default  function VerifyMail(
//   //{searchParams}
// ){
//   // const { userId } = searchParams;
//   // const user = await getData(`users/${userId}`)
//   // const { email} = user;
//   // console.log(userId)
//     return (
//         <div className='max-w-2xl mx-auto min-h-screen mt-8 '>
            
//             <div id="alert-additional-content-1"
//              className="p-4 mb-4 text-lime-800 border border-lime-300
//               rounded-lg bg-lime-50 dark:bg-gray-800
//                dark:text-lime-400 dark:border-lime-800" 
//                role="alert">
//   <div className="flex items-center">
//   <Info className="flex-shrink-0 w-4 h-4 me-2"/>
//     <span className="sr-only">Info</span>
//     <h3 className="text-lg font-medium">Emali Sent-Verify your account</h3>
//   </div>
//   <div className="mt-2 mb-4 text-sm">
//   Thank you for creating an account with Us,we have sent 
//    you an email,
//    {/* //<span className='font-bold'>{email}</span> */}
// check in your inbox and click on the link to complete
//  your onbor your inbox ading components Actionsbeckoffice
// process
//    <button className='mx-4 text-white'> Change email</button>
//   </div>

// </div>
// </div>
// )
// }


// app/verify/page.tsx (أو أي مكان يناسب مشروعك Next.js)

import { getData } from '@/lib/getData'
import VerifyCustomerEmail from "../../../../components/frontend/front-end_home/VerifyCustomerEmail"
export default async function OTPVerificationPage({ params, searchParams }) {
  const { id } = params;
  const slugDomain = searchParams.slug;

  const customers = await getData(`customers/${id}`);

  return (
    <div className="">
      <VerifyCustomerEmail
        verificationToken={customers.verificationToken}
        customerId={customers.id}
        slugDomain={slugDomain} // إذا كنت تحتاجه هناك
      />
    </div>
  );
}

