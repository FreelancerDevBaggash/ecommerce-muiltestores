import PageHeader from "@/components/backoffice/PageHeader";
import React from "react";
import DataTable from "../../../../components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import { columns } from "./columns";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/authOptions";
import SelectTemplate from './_components/SelectTemplate';
export default async function page() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  // console.log(
  //   "user jhynnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn    id :",
  //   userId
  // );

  let storeId ;
  let templateId;
  if (userId) {
    // استرداد المتجر المرتبط بالمستخدم
    const storeData = await getData(`stores?vendorId=${userId}`, { mode: 'real-time'});
    // console.log(
    //   "user jhynnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn    id :",
    //   storeData
    // );

    if (storeData && storeData.length > 0) {
       storeId = storeData[0].id;
       templateId = storeData[0].templateId;
      // استرداد جميع الفئات المرتبطة بالمتجر مباشرة
    }
   }
  return (
    <div>
      {/*Header*/}
      <PageHeader heading="Templates" href="/dashboard/templates/new" linkTitle="Add Template" />

      <div className="py-8">
        {/* <DataTable data={vendorCategories} columns={columns} /> */}
        <SelectTemplate templateId={templateId} storeId={storeId} />
      </div>
    </div>
  );
}
