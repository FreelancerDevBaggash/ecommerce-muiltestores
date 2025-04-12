// import React from 'react' ;
// // 6.9k (gzipped: 2.7k)

// export default function UpdateMainCategory(){

//     return(
//         <div>
//            <h2>Update MainCategory</h2> 
//         </div>
//     )
// }
import React from 'react';
import FormHeader from '../../../../../../components/backoffice/FormHeader';
// import FastDeliveringProvider from "@/components/backoffice/FastDeliveringProvider"; // تعديل اسم المكون إلى FastDeliveringProvider
import { getData } from '@/lib/getData';
// import FastDeliveringProviderPage from "@/deliveringProviders/backoffice/FastDeliveringProvider";
// import FastDeliveringProviderPage from "../../../../../../components/backoffice/Forms/FastDeliveringProvider";
import NewDeliveringProvider from '../../../../../../components/backoffice/Forms/NewDeliveringProvider  ';
export default async function FastDeliveringProviderPage({ params }) {
    const { id } = params; // الحصول على معرف مزود خدمة الشحن من معلمات URL
    const updateData = await getData(`deliveringProviders/${id}`); // جلب بيانات مزود خدمة الشحن باستخدام المعرف

    return (
        <div>
            <FormHeader title="Update Delivering Provider" />
            <NewDeliveringProvider updateData={updateData} /> {/* استخدام المكون FastDeliveringProvider */}
        </div>
    );
}
