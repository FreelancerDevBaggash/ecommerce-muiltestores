// import PageHeader from "@/components/backoffice/PageHeader";
// import { Wallet, Truck, Settings, Globe, Bell, ShoppingCart, Award } from "lucide-react";
// import SettingCard from "@/components/backoffice/SettingCard";

// export default function Setting() {
//   return (
//     <div>
//       {/* Header */}
//       <PageHeader heading="Basic Settings" href="/dashboard/setting" linkTitle="Settings" />

//       {/* Content */}
//       <div className="py-2">
//         {/* <h2 className="text-2xl font-bold mb-8 dark:text-lime-400 text-gray-800">Basic Settings</h2> */}
//         <div className="min-h-screen dark:bg-slate-900 bg-gray-50">
//           <main className="container mx-auto px-6 py-8">
//             <section>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                 <SettingCard
//                   href="/dashboard/wallet-invoices"
//                   icon={<Wallet className="text-green-500" />}
//                   title="Wallet & Invoices"
//                   description="Manage wallet balance, invoices, and subscriptions."
//                 />
//                 <SettingCard
//                   href="/dashboard/payment-methods"
//                   icon={<Wallet className="text-blue-500" />}
//                   title="Payment Methods"
//                   description="Enable online payment gateways."
//                 />
//                 <SettingCard
//                   href="/dashboard/shipping-options"
//                   icon={<Truck className="text-purple-500" />}
//                   title="Shipping Options"
//                   description="Connect with shipping providers."
//                 />
//                 <SettingCard
//                   href="/dashboard/setting/storesetting"
//                   icon={<Settings className="text-red-500" />}
//                   title="Basic Settings"
//                   description="Manage store link, logo, and main category."
//                 />
//                 <SettingCard
//                   href="/rating-settings"
//                   icon={<Award className="text-yellow-500" />}
//                   title="Rating Settings"
//                   description="Customize your store's rating system."
//                 />
//                 <SettingCard
//                   href="/domain-settings"
//                   icon={<Globe className="text-green-500" />}
//                   title="Domain Settings"
//                   description="Manage your store's domain settings."
//                 />
//                 <SettingCard
//                   href="/notifications"
//                   icon={<Bell className="text-red-500" />}
//                   title="Notifications"
//                   description="Set up your notification preferences."
//                 />
//                 <SettingCard
//                   href="/order-options"
//                   icon={<ShoppingCart className="text-yellow-500" />}
//                   title="Order Options"
//                   description="Add custom fields to your shopping cart."
//                 />
//               </div>
//             </section>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }

//rtl
import PageHeader from "@/components/backoffice/PageHeader";
import { Wallet, Truck, Settings, Globe, Bell, ShoppingCart, Award , BadgeDollarSignIcon } from "lucide-react";
import SettingCard from "@/components/backoffice/SettingCard";
import Heading from "@/components/backoffice/Heading";

export default function Setting() {
  return (
    <div dir="rtl">
      {/* رأس الصفحة */}
      <div className="flex  justify-between py-4 mb-4  ">
       <Heading title="الإعدادات الأساسية"/>
    
        </div>
      {/* المحتوى */}
      <div className="py-2">
        <div className="min-h-screen dark:bg-slate-900 bg-gray-50">
          <main className="container mx-auto px-6 py-8">
            <section>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <SettingCard
                  href="/dashboard/wallet"
                  icon={<Wallet className="text-green-500" />}
                  title="المحفظة والفواتير"
                  description="إدارة رصيد المحفظة والفواتير والاشتراكات."
                />
                <SettingCard
                  href="/dashboard/payment-methods"
                  icon={<Wallet className="text-blue-500" />}
                  title="طرق الدفع"
                  description="تفعيل بوابات الدفع الإلكتروني."
                />
                <SettingCard
                  href="/dashboard/setting/delivering"
                  icon={<Truck className="text-purple-500" />}
                  title="خيارات الشحن والتوصيل"
                  description="الاتصال بمزودي الشحن والتوصيل."
                />
                <SettingCard
                  href="/dashboard/setting/storesetting"
                  icon={<Settings className="text-red-500" />}
                  title="الإعدادات الأساسية"
                  description="إدارة رابط المتجر والشعار والفئة الرئيسية."
                />
                <SettingCard
                  href="/rating-settings"
                  icon={<Award className="text-yellow-500" />}
                  title="إعدادات التقييم"
                  description="تخصيص نظام التقييم لمتجرك."
                />
                
                <SettingCard
                href="/dashboard/setting/currencies"
                icon={<BadgeDollarSignIcon className="text-yellow-500" />}
                title=" ادارة العملات "
                description="العملات المتاحه متجرك"
                soon={true}
              />
                <SettingCard
                  href="/domain-settings"
                  icon={<Globe className="text-green-500" />}
                  title="إعدادات النطاق"
                  description="إدارة إعدادات نطاق متجرك."
                />
                <SettingCard
                  href="/notifications"
                  icon={<Bell className="text-red-500" />}
                  title="الإشعارات"
                  description="ضبط تفضيلات الإشعارات."
                />
                <SettingCard
                  href="/order-options"
                  icon={<ShoppingCart className="text-yellow-500" />}
                  title="خيارات الطلب"
                  description="إضافة حقول مخصصة لعربة التسوق."
                />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
