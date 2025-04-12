import PageHeader from "@/components/backoffice/PageHeader"
import TableActions from "@/components/backoffice/TableActions"
import React from "react"
import DataTable from "../../../../components/data-table-components/DataTable"
import { getData } from '@/lib/getData'
import {columns} from "./columns"


export default async function Customers(){
 
    //Fetch all the Sales
    //Filter by vendorId => to get sales for this vendor
    //Fetch Order by Id
    //Customer Name. email , phone, OrderNumber
    const customers =await getData("customers")
    return(
    
    <div>
{/*Header*/}
{/* <PageHeader heading="Coupons"  href="/dashboard/coupons/new" linkTitle="Add Coupons"/> */}

<div className="py-8">
<DataTable data={customers} columns={columns} />
</div>
    </div>
    
    
    )
    }