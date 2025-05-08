
import PageHeader from "../../../../components/backoffice/PageHeader";
import DataTable from "../../../../components/data-table-components/DataTable";
import { getData } from "../../../../lib/getData";
import { columns } from "./columns";

export default async function Page() {
  // جلب البيانات من الـ API
  const SubscriptionPlan = await getData("subscriptionPlan", { mode: "real-time" });
  console.log("SubscriptionPlan", SubscriptionPlan);

  return (
    <div dir="rtl">
      {/* رأس الصفحة */}
      <PageHeader
        heading="باقات اشتراك"
        href="/dashboard/subscriptionPlan/new"
        linkTitle="إضافة باقة "
      />

      <div className="py-0">
        {/* جدول البيانات */}
        <DataTable 
          data={SubscriptionPlan}
          columns={columns}
          filterKeys={["name"]}
        />
      </div>
    </div>
  );
}
