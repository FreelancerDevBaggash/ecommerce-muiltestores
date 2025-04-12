// import PageHeader from "@/components/backoffice/PageHeader"
// import TableActions from "@/components/backoffice/TableActions"
import React from "react"
import DataTable from "../../../../../components/data-table-components/DataTable"
import { getData } from '@/lib/getData'
import {columns} from "./columns"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"
import PageHeader from "@/components/backoffice/PageHeader"


export default async function Coupons(){
    const session = await getServerSession(authOptions);
    const allCoupons = await getData("coupons");
    console.log("allCoupons:", allCoupons);
    console.log("Type of allCoupons:", typeof allCoupons);
    const id = session?.user?.id; 
    const role = session?.user?.role;
    const vendorCoupons = allCoupons.filter((coupon) =>
    coupon.vendorId === id);
    return(
    
    <div>
{/*Header*/}
<PageHeader heading="Coupons"  href="/dashboard/coupons/new" linkTitle="Add Coupons"/>

<div className="py-8">
{role === "ADMIN" ? (
    <DataTable data={allCoupons} columns={columns} />
    ):(
     <DataTable data={vendorCoupons} columns={columns} />
    )}
</div>
    </div>
    
    
    )
    }