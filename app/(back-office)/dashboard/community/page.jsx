import PageHeader from "@/components/backoffice/PageHeader"
import TableActions from "@/components/backoffice/TableActions"
import React from "react"
import DataTable from "../../../../components/data-table-components/DataTable"
import { getData } from '@/lib/getData'
import {columns} from "./columns"


export default async function page(){
    const trainings = await getData("trainings")
    return(
    
    <div>
{/*Header*/}
<PageHeader heading="Limi Coummunity Trainings"  href="/dashboard/community/new" linkTitle="Add Training"/>


<div className="py-0">
<DataTable data={trainings} columns={columns} />
</div>
    </div>
    
    
    )
    }