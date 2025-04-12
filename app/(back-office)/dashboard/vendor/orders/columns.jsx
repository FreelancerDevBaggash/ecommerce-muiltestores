// "use client"
// import { Checkbox } from "@/components/ui/checkbox"
// import React, { useState } from "react";

// import { Button } from "@/components/ui/button";
// import SorttableColumn from '../../../../../components/DateTableColumns/SortableColumn'
// import ImageColumn from '../../../../../components/DateTableColumns/ImageColumn'
// import DateColumn from '../../../../../components/DateTableColumns/DateColumn'
// import ActionColumn from '../../../../../components/DateTableColumns/ActionColumn'
// import SelectInput from '../../../../../components/Forminputs/SelectInput'
// import ModalComponent from '../../../../../components/Actions/ModalComponent'
// import OrderCard from '../../../../../components/Order/OrderCard'
// const OrderStatus = [
//   { id: "PENDING", title: "Pending", color: "bg-yellow-500 text-white" },
//   { id: "PROCESSING", title: "Processing", color: "bg-blue-500 text-white" },
//   { id: "SHIPPED", title: "Shipped", color: "bg-indigo-500 text-white" },
//   { id: "DELIVERED", title: "Delivered", color: "bg-green-500 text-white" },
//   { id: "CANCELED", title: "Canceled", color: "bg-red-500 text-white" },
// ];

// export const columns = [
//     {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         checked={
//           table.getIsAllPageRowsSelected() ||
//           (table.getIsSomePageRowsSelected() && "indeterminate")
//         }
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorKey: "orderNumber",
//     header: ({ column }) => (<SorttableColumn column={column} title="orderNumber"/>)
//   },
//   {
//     accessorKey: "firstName",
//     header: ({ column }) => (<SorttableColumn column={column} title="firstName"/>)
//   },
//   {
//     accessorKey: "phone",
//     header: ({ column }) => (<SorttableColumn column={column} title="phone"/>)
//   },
//   {
//     accessorKey: "paymentMethod",
//     header: ({ column }) => (<SorttableColumn column={column} title="paymentMethod"/>)
//   },
//   {
//     accessorKey: "orderStatus",
//     header: ({ column }) => (
//       <SorttableColumn column={column} title="Order Status" />
//     ),
//     cell: ({ row }) => {
//       const [currentStatus, setCurrentStatus] = useState(row.original.orderStatus);
      
//       const handleChange = async (e) => {
//         const selectedStatus = e.target.value;
//         setCurrentStatus(selectedStatus);

//         try {
//           const response = await fetch("/api/orders", {
//             method: "PATCH",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ id: row.original.id, status: selectedStatus }),
//           });

//           if (response.ok) {
//             console.log("Order status updated successfully");
//           } else {
//             console.error("Failed to update order status");
//           }

//           // حساب المبلغ الإجمالي (totalAmount)
//     const totalAmount = row.original.orderItems.reduce((total, item) => {
//       return total + item.price * item.quantity;
//     }, 0);

//     // التحقق من نوع الدفع وإرسال بيانات المبيعات
//     const { paymentMethod, id, orderNumber, orderItems, customersId, storeId } = row.original;

//     if (
//       (paymentMethod === "Cash On Delivery" && selectedStatus === "DELIVERED") ||
//       (paymentMethod === "ONLINE" && selectedStatus === "PAID")
//     ) {
//       const productQty = orderItems.reduce((total, item) => total + item.quantity, 0);

//       const salesData = {
//         orderId: id,
//         productQty: productQty,
//         username: `${row.original.firstName} ${row.original.lastName}`, // يمكنك إضافة اسم المستخدم
//         invoiceTotal: totalAmount, // المبلغ الإجمالي
//         customersId: row.original.customersId,
//         storeId: row.original.storeId,
//         saleItems: orderItems.map(item => ({
//           productId: item.productId,
//           vendorId: item.vendorId,
//           productTitle: item.title,
//           productImage: item.imageUrl,
//           productPrice: item.price,
//           productQty: item.quantity,
//         })),
//         customersId, // معرف العميل
//         storeId, // معرف المتجر
//         date: new Date().toISOString(),
//       };

//       const salesResponse = await fetch("/api/sales", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(salesData),
//       });

//       if (salesResponse.ok) {
//         console.log("Sales data sent successfully");
//       } else {
//         console.error("Failed to send sales data");
//       }
//     }
//         } catch (error) {
//           console.error("Error updating order status:", error);
//         }
//       };

//       const statusData = OrderStatus.find(
//         (status) => status.id === currentStatus
//       );

//       return (
//         <div className="flex items-center gap-2">
//           <span
//             className={`px-2 py-1 rounded-md text-sm ${
//               statusData?.color || "bg-gray-300 text-black"
//             }`}
//           >
//             {statusData?.title || "Unknown"}
//           </span>
//           <select
//             value={currentStatus}
//             onChange={handleChange}
//             className="border rounded-md px-2 py-1 bg-gray-300 text-black"
//           >
//             {OrderStatus.map((status) => (
//               <option key={status.id} value={status.id}>
//                 {status.title}
//               </option>
//             ))}
//           </select>
//         </div>
//       );
//     },
//   },
//   {
//     accessorKey: "createdAt",
//     header: "Data Created",
//     cell: ({ row }) => (<DateColumn row={row} accessorKey="createdAt" /> ),
//   },
//   {
//     id: "viewOrder",
//     header: "View Order",
//     cell: ({ row }) => {
//       const [isModalOpen, setIsModalOpen] = useState(false);
//       const order = row.original; // الحصول على بيانات الطلب

//       const handleOpenModal = () => setIsModalOpen(true);
//       const handleCloseModal = () => setIsModalOpen(false);

//       return (
//         <>
//           <Button onClick={handleOpenModal}>View Order</Button>
//           <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal}>
//             <OrderCard order={order} />
//           </ModalComponent>
//         </>
//       );
//     },
//   },
//   {
//     id: "actions",
//     cell: ({ row }) => {
//       const coupon =row.original
//       return (<ActionColumn row={row} title="Coupon" editEndpoint = {`coupons/update/${coupon.id}`} endpoint= {`coupons/${coupon.id}`} />);
//      }
//   },
// ];
"use client"
import { Checkbox } from "@/components/ui/checkbox"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import SorttableColumn from '../../../../../components/DateTableColumns/SortableColumn'
import ImageColumn from '../../../../../components/DateTableColumns/ImageColumn'
import DateColumn from '../../../../../components/DateTableColumns/DateColumn'
import ActionColumn from '../../../../../components/DateTableColumns/ActionColumn'
import ModalComponent from '../../../../../components/Actions/ModalComponent'
import OrderCard from '../../../../../components/Order/OrderCard'

const OrderStatus = [
  { id: "PENDING", title: "قيد الانتظار", color: "bg-yellow-500 text-white" },
  { id: "PROCESSING", title: "قيد المعالجة", color: "bg-blue-500 text-white" },
  { id: "SHIPPED", title: "تم الشحن", color: "bg-indigo-500 text-balck dark:text-white" },
  { id: "DELIVERED", title: "تم التوصيل", color: "bg-green-500 text-white" },
  { id: "CANCELED", title: "تم الإلغاء", color: "bg-red-500 text-white" },
];

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="تحديد الكل"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="تحديد الصف"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "orderNumber",
    header: ({ column }) => (<SorttableColumn column={column} title="رقم الطلب" />),
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => (<SorttableColumn column={column} title="الاسم الأول" />),
  },
  {
    accessorKey: "phone",
    header: ({ column }) => (<SorttableColumn column={column} title="رقم الهاتف" />),
  },
  {
    accessorKey: "paymentMethod",
    header: ({ column }) => (<SorttableColumn column={column} title="وسيلة الدفع" />),
  },
  {
    accessorKey: "orderStatus",
    header: ({ column }) => (
      <SorttableColumn column={column} title="حالة الطلب" />
    ),
    cell: ({ row }) => {
      const [currentStatus, setCurrentStatus] = useState(row.original.orderStatus);
      
      const handleChange = async (e) => {
        const selectedStatus = e.target.value;
        setCurrentStatus(selectedStatus);

        try {
          const response = await fetch("/api/orders", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: row.original.id, status: selectedStatus }),
          });

          if (!response.ok) {
            console.error("فشل في تحديث حالة الطلب");
          }

          const totalAmount = row.original.orderItems.reduce((total, item) => {
            return total + item.price * item.quantity;
          }, 0);

          const { paymentMethod, id, orderNumber, orderItems, customersId, storeId } = row.original;

          if (
            (paymentMethod === "Cash On Delivery" && selectedStatus === "DELIVERED") ||
            (paymentMethod === "ONLINE" && selectedStatus === "PAID")
          ) {
            const productQty = orderItems.reduce((total, item) => total + item.quantity, 0);

            const salesData = {
              orderId: id,
              productQty: productQty,
              username: `${row.original.firstName} ${row.original.lastName}`,
              invoiceTotal: totalAmount,
              customersId,
              storeId,
              saleItems: orderItems.map(item => ({
                productId: item.productId,
                vendorId: item.vendorId,
                productTitle: item.title,
                productImage: item.imageUrl,
                productPrice: item.price,
                productQty: item.quantity,
              })),
              date: new Date().toISOString(),
            };

            const salesResponse = await fetch("/api/sales", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(salesData),
            });

            if (!salesResponse.ok) {
              console.error("فشل في إرسال بيانات المبيعات");
            }
          }
        } catch (error) {
          console.error("خطأ في تحديث حالة الطلب:", error);
        }
      };

      const statusData = OrderStatus.find((status) => status.id === currentStatus);

      return (
        <div className="flex items-center gap-2 rtl text-right">
          <span
            className={`px-2 py-1 rounded-md text-sm ${statusData?.color || "bg-gray-300 text-black"}`}
          >
            {statusData?.title || "غير معروف"}
          </span>
          <select
            value={currentStatus}
            onChange={handleChange}
            className="border rounded-md px-1 py-1 bg-gray-300 text-black"
          >
            {OrderStatus.map((status) => (
              <option key={status.id} value={status.id}>
                {status.title}
              </option>
            ))}
          </select>
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "تاريخ الإنشاء",
    cell: ({ row }) => (<DateColumn row={row} accessorKey="createdAt" />),
  },
  {
    id: "viewOrder",
    header: "عرض الطلب",
    cell: ({ row }) => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const order = row.original;

      const handleOpenModal = () => setIsModalOpen(true);
      const handleCloseModal = () => setIsModalOpen(false);

      return (
        <>
          <Button onClick={handleOpenModal}>عرض</Button>
          <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal}>
            <OrderCard order={order} />
          </ModalComponent>
        </>
      );
    },
  },
  {
    id: "actions",
    header: "الإجراءات",
    cell: ({ row }) => {
      const coupon = row.original;
      return (
        <ActionColumn
          row={row}
          title="كوبون"
          editEndpoint={`coupons/update/${coupon.id}`}
          endpoint={`coupons/${coupon.id}`}
        />
      );
    },
  },
];
