import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import React from "react";
import DataTable from "../../../../components/data-table-components/DataTable";
import { getData } from '@/lib/getData';
import { columns } from "./columns";

export default async function page() {
  // جلب بيانات مزودي خدمات الشحن بدلاً من الفئات الرئيسية
  const deliveringProviders = await getData("deliveringProviders");

  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Delivering Providers"
        href="/dashboard/deliveringProviders/new"
        linkTitle="Add Delivering Provider"
      />

      <div className="py-0">
        {/* عرض جدول بيانات مزودي الخدمة */}
        <DataTable
          data={deliveringProviders}
          columns={columns}
          filterKeys={["name"]}
        />
      </div>
    </div>
  );
}
