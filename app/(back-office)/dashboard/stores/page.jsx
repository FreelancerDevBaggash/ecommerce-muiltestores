 import PageHeader from "@/components/backoffice/PageHeader"
// import TableActions from "@/components/backoffice/TableActions"
import React from "react"
import DataTable from "../../../../components/data-table-components/DataTable"
import { getData } from '@/lib/getData'
import {columns} from "./columns"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"


export default async function Store(){
   // const session = await getServerSession(authOptions);
    const allStores = await getData("stores");
   // console.log("allCoupons:", allStores);
    //console.log("Type of allCoupons:", typeof allStores);
    // const id = session?.user?.id; 
    // const role = session?.user?.role;
    // const vendorStore = allStores.filter((store) =>
    // store.vendorId === id);
    return(
    
    <div>
{/*Header*/}
<PageHeader heading="Store"  href="/dashboard/stores/new" linkTitle="Add Store"/>

<div className="py-8">
{/* {role === "ADMIN" ? ( */}
    <DataTable data={allStores} columns={columns} />
    {/* // ):(
    //  <DataTable data={vendorStore} columns={columns} />
    // )} */}
</div>
    </div>
    
    
    )
    }