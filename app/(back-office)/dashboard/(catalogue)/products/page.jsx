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
    let products=[];
    if (userId) { 
        // استرداد المتجر المرتبط بالمستخدم
        const storeData = await getData(`stores?vendorId=${userId}`, { mode: 'real-time' });
        
        if (storeData && storeData.length > 0) {
            const storeId = storeData[0].id;
    
            // استرداد جميع المنتجات
             products = await getData(`products?storeId=${storeId}`, { mode: 'real-time' });
    
            // تصفية المنتجات حسب معرف المتجر
            if (products && products.length > 0) {
                console.log("products of store:", products);
              } else {
                console.log("No products found for the store.");
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
<PageHeader heading="Products"  href="/dashboard/products/new" linkTitle="Add Product"/>


<div className="py-8">
 
     <DataTable data={products} columns={columns} />
</div>
    </div>
    
    
    )
    }