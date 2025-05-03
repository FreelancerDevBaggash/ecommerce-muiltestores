import PageHeader from "../../../../../components/backoffice/PageHeader"
import React from "react"
import DataTable from "../../../../../components/data-table-components/DataTable"
import { getData } from '../../../../../lib/getData'
import {columns} from "./columns"
import { getServerSession } from "next-auth"
import { authOptions } from '../../../../../lib/authOptions'



export default async function page(){
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    let subcategory=[];
    if (userId) { 
        // استرداد المتجر المرتبط بالمستخدم
        const storeData = await getData(`stores?vendorId=${userId}`, { mode: 'real-time' });
        
        if (storeData && storeData.length > 0) {
            const storeId = storeData[0].id;
    
            // استرداد جميع المنتجات
            subcategory = await getData(`subcategory?storeId=${storeId}`, { mode: 'real-time' });
    
            // تصفية المنتجات حسب معرف المتجر
            if (subcategory && subcategory.length > 0) {
                // console.log("subcategory of store:", subcategory);
              } else {
                console.log("No subcategory found for the store.");
              }
        } else {
            console.log("No store found for the user.");
        }
    } else {
        console.log("User session not found.");
    }
     
   

 
    return(
    
    <div>
{/*Header*/}
<PageHeader heading="الفئات الفرعية"  href="/dashboard/subcategory/new" linkTitle="اضافة فئة فرعية"/>


<div className="py-8">
 
     <DataTable data={subcategory} columns={columns} />
</div>
    </div>
    
    
    )
    }