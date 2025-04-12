import PageHeader from "@/components/backoffice/PageHeader"
import TableActions from "@/components/backoffice/TableActions"
import React from "react"
import DataTable from "../../../../components/data-table-components/DataTable"
import { getData } from '@/lib/getData'
import {columns} from "./columns"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"

export default async function Sales(){
    const session = await getServerSession(authOptions);
    const role = session?.user?.role;
    const sales = await getData("sales")

    //Fetch all the Sales
    //Filter by vendorId => to get sales for this vendor
    //Fetch Order by Id
    //Customer Name. email , phone, OrderNumber
    const userId = session?.user?.id;
    console.log(userId)
   const storeData = await getData(`stores?vendorId=${userId}`);
    const storeId = storeData[0].id;
  
    if(sales.length === 0|| !sales){
      return <p>No Orders Yet</p>
    }
    //Filter By User Id
    const vendorSales = sales.filter((sale) => sale.storeId === storeId);
    return(
    
    <div>
{/*Header*/}
{/* <PageHeader heading="Coupons"  href="/dashboard/coupons/new" linkTitle="Add Coupons"/> */}

<div className="py-8">
{role === "ADMIN" ? (
    <DataTable data={sales} columns={columns} />
    ):(
     <DataTable data={vendorSales} columns={columns} />
    )}
</div>
    </div>
    
    
    )
    }