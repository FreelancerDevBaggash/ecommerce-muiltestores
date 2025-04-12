import PageHeader from "@/components/backoffice/PageHeader"
import TableActions from "@/components/backoffice/TableActions"
import React from "react"
import DataTable from "../../../../components/data-table-components/DataTable"
import { getData } from '@/lib/getData'
import {columns} from "./columns"


export default async function Vendors(){
    const vendors = await getData("vendors")
    return(
    
    <div>
{/*Header*/}
<PageHeader heading="Vendors"  href="/dashboard/vendors/new" linkTitle="Add Vendor"/>


<div className="py-0">
<DataTable data={vendors} columns={columns}  filterKeys={["name"]} />
</div>
    </div>
    
    
    )
    }