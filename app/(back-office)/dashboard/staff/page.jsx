import PageHeader from "@/components/backoffice/PageHeader"
import TableActions from "@/components/backoffice/TableActions"
import React from "react"



export default function Staff(){
    return(
    
    <div>
{/*Header*/}
<PageHeader heading="Staff"  href="/dashboard/staff/new" linkTitle="Add Staff"/>
{/*Table Actions*/}
{/*Export \\ Search \\ Bulk Delete*/}
<TableActions/>
<div className="py-6">
<h2>Table</h2>
</div>
    </div>
    
    
    )
    }