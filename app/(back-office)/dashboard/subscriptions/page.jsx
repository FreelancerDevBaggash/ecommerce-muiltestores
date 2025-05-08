import React from "react";
import PageHeader from "../../../../components/backoffice/PageHeader";
import DataTable from "../../../../components/data-table-components/DataTable";
import { columns } from "./columns";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import db from "@/lib/db";

export default async function Page() {
  // 1. جلب الجلسة لمعرفة الدور والمعرّف
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p className="text-center py-20">غير مصرح بالدخول.</p>;
  }

  // 2. جلب rawSubs بناءً على الدور
  let rawSubs;
  if (session.user.role === "ADMIN") {
    rawSubs = await db.subscription.findMany({
      include: { subscriptionPlan: true, store: true },
      orderBy: { createdAt: "desc" },
    });
  } else {  
    rawSubs = await db.subscription.findMany({
      where: { store: { is: { vendorId: session.user.id } } },
      include: { subscriptionPlan: true, store: true },
      orderBy: { createdAt: "desc" },
    });
  }

  // 3. تحويل الشكل ليتوافق مع DataTable
  const subscriptions = rawSubs.map((s) => ({
    id: s.id,
    name: s.subscriptionPlan.name,
    description: s.subscriptionPlan.description,
    billingCycle: s.billingCycle,
    startDate: s.startDate,
    endDate: s.endDate,
    status: s.status,
    features: s.subscriptionPlan.features || [],
    limitations: s.subscriptionPlan.limitations || [],
  }));

  return (
    <div dir="rtl">
      <PageHeader
        heading="باقات اشتراك"
        href="/dashboard/subscriptions/new"
        linkTitle="إضافة باقة"
      />

      <div className="py-4">
        <DataTable
          data={subscriptions}
          columns={columns}
          filterKeys={["name", "status"]}
        />
      </div>
    </div>
  );
}
