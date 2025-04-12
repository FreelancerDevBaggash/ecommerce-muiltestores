import PageHeader from "@/components/backoffice/PageHeader"
import TableActions from "@/components/backoffice/TableActions"
import React from "react"
import DataTable from "../../../../components/data-table-components/DataTable"
import { getData } from '@/lib/getData'
import {columns} from "./columns"


export default async function page(){
    const mainCategories = await getData("mainCategories")
    return(
    
    <div>
{/*Header*/}
<PageHeader heading="MainCategory"  href="/dashboard/mainCategory/new" linkTitle="Add MainCategory"/>



<div className="py-0">
<DataTable data={mainCategories} columns={columns}  filterKeys={["name"]} />
</div>
    </div>
    
    
    )
    }