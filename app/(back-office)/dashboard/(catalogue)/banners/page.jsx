import PageHeader from "@/components/backoffice/PageHeader"
import TableActions from "@/components/backoffice/TableActions"
import React from "react"
import DataTable from "../../../../../components/data-table-components/DataTable"
import { getData } from '@/lib/getData'
import {columns} from "./columns"
import { getServerSession } from "next-auth"
import { authOptions } from '../../../../../lib/authOptions'

export default async function page(){
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    let banners=[];
    if (userId) { 
        // استرداد المتجر المرتبط بالمستخدم
        const storeData = await getData(`stores?vendorId=${userId}`, { mode: 'real-time' } );
        
        if (storeData && storeData.length > 0) {
            const storeId = storeData[0].id;

     banners = await getData(`banners?storeId=${storeId}` , { mode: 'real-time' })
        }}
    return(
    
    <div>
{/*Header*/}
<PageHeader heading="Banners"  href="/dashboard/banners/new" linkTitle="Add Banner"/>



<div className="py-8">
<DataTable data={banners} columns={columns} />
</div>
    </div>
    
    
    )
    }