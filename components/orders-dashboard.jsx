// // "use client"

// // import { useState, useEffect } from "react"
// // import { Checkbox } from "@/components/ui/checkbox"
// // import { Button } from "@/components/ui/button"
// // import DataTable from "@/components/data-table-components/DataTable"
// // import SortableColumn from "@/components/DateTableColumns/SortableColumn"
// // import DateColumn from "@/components/DateTableColumns/DateColumn"
// // import ActionColumn from "@/components/DateTableColumns/ActionColumn"
// // import ModalComponent from "@/components/Actions/ModalComponent"
// // import OrderCard from "@/components/Order/OrderCard"
// // import SmallCards from "@/components/backoffice/SmallCards"

// // // بيانات الطلبات
// // const orders = [
// //   {
// //     id: "6658658",
// //     client: "Amjd Ibraheem",
// //     orderDate: "2021/4/19",
// //     statusDate: "الآن",
// //     shipping: "طرد",
// //     payment: "دفع عند التوصيل",
// //     status: "جديد",
// //     amount: "SAR 8935.00",
// //     createdAt: "2021-04-19T10:30:00Z",
// //   },
// //   {
// //     id: "6618992",
// //     client: "Amjd Ibraheem",
// //     orderDate: "2021/4/16",
// //     statusDate: "منذ يومين",
// //     shipping: "النوع الأول",
// //     payment: "دفع عند الاستلام",
// //     status: "جاري التجهيز",
// //     amount: "SAR 9500.00",
// //     createdAt: "2021-04-16T14:20:00Z",
// //   },
// //   {
// //     id: "6618993",
// //     client: "Mohammed Ali",
// //     orderDate: "2021/4/15",
// //     statusDate: "منذ 3 أيام",
// //     shipping: "طرد",
// //     payment: "دفع عند التوصيل",
// //     status: "جاهز",
// //     amount: "SAR 4250.00",
// //     createdAt: "2021-04-15T09:15:00Z",
// //   },
// //   {
// //     id: "6618994",
// //     client: "Sara Ahmed",
// //     orderDate: "2021/4/14",
// //     statusDate: "منذ 4 أيام",
// //     shipping: "النوع الأول",
// //     payment: "دفع عند الاستلام",
// //     status: "جاري التوصيل",
// //     amount: "SAR 3750.00",
// //     createdAt: "2021-04-14T16:45:00Z",
// //   },
// //   {
// //     id: "6618995",
// //     client: "Khalid Omar",
// //     orderDate: "2021/4/13",
// //     statusDate: "منذ 5 أيام",
// //     shipping: "طرد",
// //     payment: "دفع عند التوصيل",
// //     status: "تم التوصيل",
// //     amount: "SAR 6200.00",
// //     createdAt: "2021-04-13T11:30:00Z",
// //   },
// //   {
// //     id: "6618996",
// //     client: "Layla Hassan",
// //     orderDate: "2021/4/12",
// //     statusDate: "منذ 6 أيام",
// //     shipping: "النوع الأول",
// //     payment: "دفع عند الاستلام",
// //     status: "ملغي",
// //     amount: "SAR 2100.00",
// //     createdAt: "2021-04-12T13:20:00Z",
// //   },
// // ]
// // // const orders = await getData("orders")

// // export default function OrdersDashboard() {
// //   const [selectedStatus, setSelectedStatus] = useState("all")
// //   const [filteredOrders, setFilteredOrders] = useState(orders)
// //   const [isModalOpen, setIsModalOpen] = useState(false)
// //   const [selectedOrder, setSelectedOrder] = useState(null)

// //   // تصفية الطلبات حسب الحالة المحددة
// //   useEffect(() => {
// //     if (selectedStatus === "all") {
// //       setFilteredOrders(orders)
// //     } else {
// //       setFilteredOrders(orders.filter((order) => order.status === selectedStatus))
// //     }
// //   }, [selectedStatus])

// //   const handleOpenModal = (order) => {
// //     setSelectedOrder(order)
// //     setIsModalOpen(true)
// //   }

// //   const handleCloseModal = () => {
// //     setIsModalOpen(false)
// //     setSelectedOrder(null)
// //   }

// //   // تعريف أعمدة جدول البيانات
// //   const columns = [
// //     {
// //       id: "select",
// //       header: ({ table }) => (
// //         <Checkbox
// //           checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
// //           onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
// //           aria-label="تحديد الكل"
// //         />
// //       ),
// //       cell: ({ row }) => (
// //         <Checkbox
// //           checked={row.getIsSelected()}
// //           onCheckedChange={(value) => row.toggleSelected(!!value)}
// //           aria-label="تحديد صف"
// //         />
// //       ),
// //       enableSorting: false,
// //       enableHiding: false,
// //     },
// //     {
// //       accessorKey: "id",
// //       header: ({ column }) => <SortableColumn column={column} title="رقم الطلب" />,
// //     },
// //     {
// //       accessorKey: "client",
// //       header: ({ column }) => <SortableColumn column={column} title="العميل" />,
// //     },
// //     {
// //       accessorKey: "orderDate",
// //       header: ({ column }) => <SortableColumn column={column} title="تاريخ الطلب" />,
// //     },
// //     {
// //       accessorKey: "payment",
// //       header: ({ column }) => <SortableColumn column={column} title="طريقة الدفع" />,
// //     },
// //     {
// //       accessorKey: "shipping",
// //       header: "طريقة الشحن",
// //       cell: ({ row }) => {
// //         const shipping = row.getValue("shipping")
// //         return (
// //           <div className="flex items-center gap-2">
// //             {shipping === "طرد" ? (
// //               <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-md text-xs">{shipping}</span>
// //             ) : (
// //               <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs">{shipping}</span>
// //             )}
// //           </div>
// //         )
// //       },
// //     },
// //     {
// //       accessorKey: "status",
// //       header: ({ column }) => <SortableColumn column={column} title="حالة الطلب" />,
// //       cell: ({ row }) => {
// //         const status = row.getValue("status")
// //         return (
// //           <div className="flex items-center gap-2">
// //             <span className={`px-2 py-1 rounded-md text-sm ${getStatusColor(status)}`}>{status}</span>
// //           </div>
// //         )
// //       },
// //     },
// //     {
// //       accessorKey: "amount",
// //       header: ({ column }) => <SortableColumn column={column} title="المبلغ" />,
// //     },
// //     {
// //       accessorKey: "createdAt",
// //       header: "تاريخ الإنشاء",
// //       cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
// //     },
// //     {
// //       id: "viewOrder",
// //       header: "عرض الطلب",
// //       cell: ({ row }) => {
// //         const order = row.original

// //         return (
// //           <Button onClick={() => handleOpenModal(order)} variant="outline" size="sm">
// //             عرض الطلب
// //           </Button>
// //         )
// //       },
// //     },
// //     {
// //       id: "actions",
// //       cell: ({ row }) => {
// //         return <ActionColumn row={row} title="الطلب" />
// //       },
// //     },
// //   ]

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <main className="p-6">
// //         <div className="bg-white rounded-lg shadow-sm p-6">
// //           <div className="flex justify-between items-center mb-6">
// //             <div>
// //               <h1 className="text-2xl font-bold text-gray-800">قائمة الطلبات</h1>
// //               <p className="text-gray-500">جميع الطلبات في متجرك هنا</p>
// //             </div>

// //             <Button className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2">
// //               <span>إنشاء طلب جديد</span>
// //               <span className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center">+</span>
// //             </Button>
// //           </div>

// //           {/* بطاقات صغيرة لعرض إحصائيات الطلبات */}
// //           <SmallCards orders={orders} onStatusSelect={setSelectedStatus} selectedStatus={selectedStatus} />

// //           {/* جدول البيانات */}
// //           <DataTable columns={columns} data={filteredOrders} filterKeys={["client"]} />

// //           {/* مودال عرض تفاصيل الطلب */}
// //           {selectedOrder && (
// //             <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal}>
// //               <OrderCard order={selectedOrder} />
// //             </ModalComponent>
// //           )}
// //         </div>
// //       </main>
// //     </div>
// //   )
// // }

// // // دالة للحصول على لون الحالة
// // function getStatusColor(status) {
// //   switch (status) {
// //     case "جديد":
// //       return "text-green-600 bg-green-50"
// //     case "جاري التجهيز":
// //       return "text-purple-600 bg-purple-50"
// //     case "جاهز":
// //       return "text-blue-600 bg-blue-50"
// //     case "جاري التوصيل":
// //       return "text-amber-600 bg-amber-50"
// //     case "تم التوصيل":
// //       return "text-teal-600 bg-teal-50"
// //     case "ملغي":
// //       return "text-red-600 bg-red-50"
// //     default:
// //       return "text-gray-600 bg-gray-50"
// //   }
// // }
// // "use client"

// // import { useState, useEffect } from "react"
// // import { Checkbox } from "@/components/ui/checkbox"
// // import { Button } from "@/components/ui/button"
// // import DataTable from "@/components/data-table-components/DataTable"
// // import SortableColumn from "@/components/DateTableColumns/SortableColumn"
// // import DateColumn from "@/components/DateTableColumns/DateColumn"
// // import ActionColumn from "@/components/DateTableColumns/ActionColumn"
// // import ModalComponent from "@/components/Actions/ModalComponent"
// // import OrderCard from "@/components/Order/OrderCard"
// // import SmallCards from "@/components/backoffice/SmallCards"

// // // تحديث بيانات الطلبات لتتوافق مع نموذج البيانات الجديد
// // const orders = [
// //   {
// //     id: "6658658",
// //     firstName: "أمجد",
// //     lastName: "إبراهيم",
// //     email: "amjd@example.com",
// //     phone: "0501234567",
// //     streetAddress: "شارع الملك فهد",
// //     city: "الرياض",
// //     country: "المملكة العربية اليمنية",
// //     district: "العليا",
// //     shippingCost: 15.0,
// //     orderNumber: "ORD-001",
// //     paymentMethod: "دفع عند التوصيل",
// //     storeId: "store123",
// //     customersId: "cust123",
// //     orderStatus: "جديد",
// //     createdAt: "2021-04-19T10:30:00Z",
// //     updatedAt: "2021-04-19T10:30:00Z",
// //     orderItems: [
// //       { id: "item1", title: "قميص قطني", price: 120, quantity: 2, imageUrl: "/placeholder.svg?height=100&width=100" },
// //       { id: "item2", title: "بنطلون جينز", price: 180, quantity: 1, imageUrl: "/placeholder.svg?height=100&width=100" },
// //     ],
// //     amount: "SAR 435.00",
// //   },
// //   {
// //     id: "6618992",
// //     firstName: "محمد",
// //     lastName: "علي",
// //     email: "mohammed@example.com",
// //     phone: "0559876543",
// //     streetAddress: "شارع التحلية",
// //     city: "جدة",
// //     country: "المملكة العربية اليمنية",
// //     district: "الروضة",
// //     shippingCost: 20.0,
// //     orderNumber: "ORD-002",
// //     paymentMethod: "بطاقة ائتمان",
// //     storeId: "store123",
// //     customersId: "cust456",
// //     orderStatus: "جاري التجهيز",
// //     createdAt: "2021-04-16T14:20:00Z",
// //     updatedAt: "2021-04-17T09:15:00Z",
// //     orderItems: [
// //       { id: "item3", title: "حذاء رياضي", price: 350, quantity: 1, imageUrl: "/placeholder.svg?height=100&width=100" },
// //       { id: "item4", title: "حقيبة ظهر", price: 220, quantity: 1, imageUrl: "/placeholder.svg?height=100&width=100" },
// //     ],
// //     amount: "SAR 590.00",
// //   },
// //   {
// //     id: "6618993",
// //     firstName: "سارة",
// //     lastName: "أحمد",
// //     email: "sara@example.com",
// //     phone: "0561234567",
// //     streetAddress: "شارع الأمير محمد بن فهد",
// //     city: "الدمام",
// //     country: "المملكة العربية اليمنية",
// //     district: "الشاطئ",
// //     shippingCost: 25.0,
// //     orderNumber: "ORD-003",
// //     paymentMethod: "دفع عند التوصيل",
// //     storeId: "store123",
// //     customersId: "cust789",
// //     orderStatus: "جاهز",
// //     createdAt: "2021-04-15T09:15:00Z",
// //     updatedAt: "2021-04-16T11:30:00Z",
// //     orderItems: [
// //       { id: "item5", title: "فستان", price: 450, quantity: 1, imageUrl: "/placeholder.svg?height=100&width=100" },
// //     ],
// //     amount: "SAR 475.00",
// //   },
// //   {
// //     id: "6618994",
// //     firstName: "خالد",
// //     lastName: "عمر",
// //     email: "khalid@example.com",
// //     phone: "0571234567",
// //     streetAddress: "شارع الملك عبدالله",
// //     city: "الرياض",
// //     country: "المملكة العربية اليمنية",
// //     district: "النزهة",
// //     shippingCost: 15.0,
// //     orderNumber: "ORD-004",
// //     paymentMethod: "بطاقة ائتمان",
// //     storeId: "store123",
// //     customersId: "cust101",
// //     orderStatus: "جاري التوصيل",
// //     createdAt: "2021-04-14T16:45:00Z",
// //     updatedAt: "2021-04-15T14:20:00Z",
// //     orderItems: [
// //       { id: "item6", title: "ساعة ذكية", price: 850, quantity: 1, imageUrl: "/placeholder.svg?height=100&width=100" },
// //       {
// //         id: "item7",
// //         title: "سماعات لاسلكية",
// //         price: 320,
// //         quantity: 1,
// //         imageUrl: "/placeholder.svg?height=100&width=100",
// //       },
// //     ],
// //     amount: "SAR 1185.00",
// //   },
// //   {
// //     id: "6618995",
// //     firstName: "ليلى",
// //     lastName: "حسن",
// //     email: "layla@example.com",
// //     phone: "0581234567",
// //     streetAddress: "شارع الأمير سلطان",
// //     city: "جدة",
// //     country: "المملكة العربية اليمنية",
// //     district: "الحمراء",
// //     shippingCost: 20.0,
// //     orderNumber: "ORD-005",
// //     paymentMethod: "دفع عند التوصيل",
// //     storeId: "store123",
// //     customersId: "cust202",
// //     orderStatus: "تم التوصيل",
// //     createdAt: "2021-04-13T11:30:00Z",
// //     updatedAt: "2021-04-14T15:45:00Z",
// //     orderItems: [
// //       { id: "item8", title: "جاكيت شتوي", price: 550, quantity: 1, imageUrl: "/placeholder.svg?height=100&width=100" },
// //       { id: "item9", title: "قفازات", price: 75, quantity: 2, imageUrl: "/placeholder.svg?height=100&width=100" },
// //     ],
// //     amount: "SAR 720.00",
// //   },
// //   {
// //     id: "6618996",
// //     firstName: "عمر",
// //     lastName: "فاروق",
// //     email: "omar@example.com",
// //     phone: "0591234567",
// //     streetAddress: "شارع الستين",
// //     city: "الرياض",
// //     country: "المملكة العربية اليمنية",
// //     district: "المروج",
// //     shippingCost: 15.0,
// //     orderNumber: "ORD-006",
// //     paymentMethod: "بطاقة ائتمان",
// //     storeId: "store123",
// //     customersId: "cust303",
// //     orderStatus: "ملغي",
// //     createdAt: "2021-04-12T13:20:00Z",
// //     updatedAt: "2021-04-13T10:15:00Z",
// //     orderItems: [
// //       { id: "item10", title: "هاتف ذكي", price: 3200, quantity: 1, imageUrl: "/placeholder.svg?height=100&width=100" },
// //     ],
// //     amount: "SAR 3215.00",
// //   },
// // ]

// // export default function OrdersDashboard() {
// //   const [selectedStatus, setSelectedStatus] = useState("all")
// //   const [filteredOrders, setFilteredOrders] = useState(orders)
// //   const [isModalOpen, setIsModalOpen] = useState(false)
// //   const [selectedOrder, setSelectedOrder] = useState(null)

// //   // تحديث دالة تصفية الطلبات حسب الحالة المحددة
// //   useEffect(() => {
// //     if (selectedStatus === "all") {
// //       setFilteredOrders(orders)
// //     } else {
// //       setFilteredOrders(orders.filter((order) => order.orderStatus === selectedStatus))
// //     }
// //   }, [selectedStatus])

// //   const handleOpenModal = (order) => {
// //     setSelectedOrder(order)
// //     setIsModalOpen(true)
// //   }

// //   const handleCloseModal = () => {
// //     setIsModalOpen(false)
// //     setSelectedOrder(null)
// //   }

// //   // تعريف أعمدة جدول البيانات
// //   const columns = [
// //     {
// //       id: "select",
// //       header: ({ table }) => (
// //         <Checkbox
// //           checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
// //           onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
// //           aria-label="تحديد الكل"
// //         />
// //       ),
// //       cell: ({ row }) => (
// //         <Checkbox
// //           checked={row.getIsSelected()}
// //           onCheckedChange={(value) => row.toggleSelected(!!value)}
// //           aria-label="تحديد صف"
// //         />
// //       ),
// //       enableSorting: false,
// //       enableHiding: false,
// //     },
// //     {
// //       accessorKey: "orderNumber",
// //       header: ({ column }) => <SortableColumn column={column} title="رقم الطلب" />,
// //     },
// //     {
// //       accessorKey: "firstName",
// //       header: ({ column }) => <SortableColumn column={column} title="الاسم الأول" />,
// //       cell: ({ row }) => {
// //         const firstName = row.getValue("firstName")
// //         const lastName = row.getValue("lastName")
// //         return (
// //           <div>
// //             {firstName} {lastName}
// //           </div>
// //         )
// //       },
// //     },
// //     {
// //       accessorKey: "lastName",
// //       header: "الاسم الأخير",
// //       cell: () => null, // لا نعرض هذا العمود لكننا نحتاجه للوصول إلى البيانات
// //     },
// //     {
// //       accessorKey: "phone",
// //       header: ({ column }) => <SortableColumn column={column} title="رقم الهاتف" />,
// //     },
// //     {
// //       accessorKey: "paymentMethod",
// //       header: ({ column }) => <SortableColumn column={column} title="طريقة الدفع" />,
// //     },
// //     {
// //       accessorKey: "orderStatus",
// //       header: ({ column }) => <SortableColumn column={column} title="حالة الطلب" />,
// //       cell: ({ row }) => {
// //         const status = row.getValue("orderStatus")
// //         const [currentStatus, setCurrentStatus] = useState(status)

// //         const handleStatusChange = async (e) => {
// //           const newStatus = e.target.value
// //           setCurrentStatus(newStatus)

// //           try {
// //             // هنا يمكن إضافة طلب API لتحديث حالة الطلب
// //             console.log(`تحديث حالة الطلب ${row.original.id} إلى ${newStatus}`)
// //             // مثال على طلب API:
// //             // await fetch(`/api/orders/${row.original.id}`, {
// //             //   method: "PATCH",
// //             //   headers: { "Content-Type": "application/json" },
// //             //   body: JSON.stringify({ orderStatus: newStatus }),
// //             // })
// //           } catch (error) {
// //             console.error("خطأ في تحديث حالة الطلب:", error)
// //           }
// //         }

// //         const statusOptions = [
// //           { id: "جديد", title: "جديد" },
// //           { id: "جاري التجهيز", title: "جاري التجهيز" },
// //           { id: "جاهز", title: "جاهز" },
// //           { id: "جاري التوصيل", title: "جاري التوصيل" },
// //           { id: "تم التوصيل", title: "تم التوصيل" },
// //           { id: "ملغي", title: "ملغي" },
// //         ]

// //         return (
// //           <div className="flex items-center gap-2">
// //             <span className={`px-2 py-1 rounded-md text-sm ${getStatusColor(currentStatus)}`}>{currentStatus}</span>
// //             <select
// //               value={currentStatus}
// //               onChange={handleStatusChange}
// //               className="border rounded-md px-2 py-1 bg-gray-100 text-gray-800 text-sm"
// //             >
// //               {statusOptions.map((option) => (
// //                 <option key={option.id} value={option.id}>
// //                   {option.title}
// //                 </option>
// //               ))}
// //             </select>
// //           </div>
// //         )
// //       },
// //     },
// //     {
// //       accessorKey: "createdAt",
// //       header: "تاريخ الإنشاء",
// //       cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
// //     },
// //     {
// //       id: "viewOrder",
// //       header: "عرض الطلب",
// //       cell: ({ row }) => {
// //         const order = row.original

// //         return (
// //           <Button onClick={() => handleOpenModal(order)} variant="outline" size="sm">
// //             عرض الطلب
// //           </Button>
// //         )
// //       },
// //     },
// //     {
// //       id: "actions",
// //       cell: ({ row }) => {
// //         return (
// //           <ActionColumn
// //             row={row}
// //             title="الطلب"
// //             endpoint={`orders/${row.original.id}`}
// //             editEndpoint={`orders/update/${row.original.id}`}
// //           />
// //         )
// //       },
// //     },
// //   ]

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <main className="p-6">
// //         <div className="bg-white rounded-lg shadow-sm p-6">
// //           <div className="flex justify-between items-center mb-6">
// //             <div>
// //               <h1 className="text-2xl font-bold text-gray-800">قائمة الطلبات</h1>
// //               <p className="text-gray-500">جميع الطلبات في متجرك هنا</p>
// //             </div>

// //             <Button className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2">
// //               <span>إنشاء طلب جديد</span>
// //               <span className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center">+</span>
// //             </Button>
// //           </div>

// //           {/* بطاقات صغيرة لعرض إحصائيات الطلبات */}
// //           <SmallCards orders={orders} onStatusSelect={setSelectedStatus} selectedStatus={selectedStatus} />

// //           {/* جدول البيانات */}
// //           <DataTable columns={columns} data={filteredOrders} filterKeys={["firstName", "lastName"]} />

// //           {/* مودال عرض تفاصيل الطلب */}
// //           {selectedOrder && (
// //             <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal}>
// //               <OrderCard order={selectedOrder} />
// //             </ModalComponent>
// //           )}
// //         </div>
// //       </main>
// //     </div>
// //   )
// // }

// // // دالة للحصول على لون الحالة
// // function getStatusColor(status) {
// //   switch (status) {
// //     case "جديد":
// //       return "text-green-600 bg-green-50"
// //     case "جاري التجهيز":
// //       return "text-purple-600 bg-purple-50"
// //     case "جاهز":
// //       return "text-blue-600 bg-blue-50"
// //     case "جاري التوصيل":
// //       return "text-amber-600 bg-amber-50"
// //     case "تم التوصيل":
// //       return "text-teal-600 bg-teal-50"
// //     case "ملغي":
// //       return "text-red-600 bg-red-50"
// //     default:
// //       return "text-gray-600 bg-gray-50"
// //   }
// // }










// // "use client"

// // import { useState, useEffect } from "react"
// // import { Checkbox } from "@/components/ui/checkbox"
// // import { Button } from "@/components/ui/button"
// // import DataTable from "@/components/data-table-components/DataTable"
// // import SortableColumn from "@/components/DateTableColumns/SortableColumn"
// // import DateColumn from "@/components/DateTableColumns/DateColumn"
// // import ActionColumn from "@/components/DateTableColumns/ActionColumn"
// // import ModalComponent from "@/components/Actions/ModalComponent"
// // import OrderCard from "@/components/Order/OrderCard"
// // import SmallCards from "@/components/backoffice/SmallCards"




// // export  default async  function OrdersDashboard() {
// //   const [selectedStatus, setSelectedStatus] = useState("all")
// //   const [filteredOrders, setFilteredOrders] = useState({})
// //   const [isModalOpen, setIsModalOpen] = useState(false)
// //   const [selectedOrder, setSelectedOrder] = useState(null)

// //   // تحديث دالة تصفية الطلبات حسب الحالة المحددة
// //   useEffect(() => {
// //     if (selectedStatus === "all") {
// //       setFilteredOrders(orders)
// //     } else {
// //       setFilteredOrders(orders.filter((order) => order.orderStatus === selectedStatus))
// //     }
// //   }, [selectedStatus])

// //   const handleOpenModal = (order) => {
// //     setSelectedOrder(order)
// //     setIsModalOpen(true)
// //   }

// //   const handleCloseModal = () => {
// //     setIsModalOpen(false)
// //     setSelectedOrder(null)
// //   }

// //     const orders = await getData("orders")

// //   // الحصول على معرف المستخدم
// //   const session = await getServerSession(authOptions)
// //   if (!session) return

// //   const userId = session?.user?.id
// //   const storeData = await getData(`stores?vendorId=${userId}`)
// //   const storeId = storeData[0].id

// //   if (orders.length === 0 || !orders) {
// //     return <p>لا توجد طلبات بعد</p>
// //   }

// //   // تصفية الطلبات حسب معرف المتجر
// //   const userOrders = orders.filter((order) => order.storeId === storeId)
// // //   تعريف أعمدة جدول البيانات
// //   const columns = [
// //     {
// //       id: "select",
// //       header: ({ table }) => (
// //         <Checkbox
// //           checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
// //           onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
// //           aria-label="تحديد الكل"
// //         />
// //       ),
// //       cell: ({ row }) => (
// //         <Checkbox
// //           checked={row.getIsSelected()}
// //           onCheckedChange={(value) => row.toggleSelected(!!value)}
// //           aria-label="تحديد صف"
// //         />
// //       ),
// //       enableSorting: false,
// //       enableHiding: false,
// //     },
// //     {
// //       accessorKey: "orderNumber",
// //       header: ({ column }) => <SortableColumn column={column} title="رقم الطلب" />,
// //     },
// //     {
// //       accessorKey: "firstName",
// //       header: ({ column }) => <SortableColumn column={column} title="الاسم الأول" />,
// //       cell: ({ row }) => {
// //         const firstName = row.getValue("firstName")
// //         const lastName = row.getValue("lastName")
// //         return (
// //           <div>
// //             {firstName} {lastName}
// //           </div>
// //         )
// //       },
// //     },
// //     {
// //       accessorKey: "lastName",
// //       header: "الاسم الأخير",
// //       cell: () => null, // لا نعرض هذا العمود لكننا نحتاجه للوصول إلى البيانات
// //     },
// //     {
// //       accessorKey: "phone",
// //       header: ({ column }) => <SortableColumn column={column} title="رقم الهاتف" />,
// //     },
// //     {
// //       accessorKey: "paymentMethod",
// //       header: ({ column }) => <SortableColumn column={column} title="طريقة الدفع" />,
// //     },
// //     {
// //       accessorKey: "orderStatus",
// //       header: ({ column }) => <SortableColumn column={column} title="حالة الطلب" />,
// //       cell: ({ row }) => {
// //         const status = row.getValue("orderStatus")
// //         const [currentStatus, setCurrentStatus] = useState(status)

// //         const handleStatusChange = async (e) => {
// //           const newStatus = e.target.value
// //           setCurrentStatus(newStatus)

// //           try {
// //             // هنا يمكن إضافة طلب API لتحديث حالة الطلب
// //             console.log(`تحديث حالة الطلب ${row.original.id} إلى ${newStatus}`)
// //             // مثال على طلب API:
// //             await fetch(`/api/orders/${row.original.id}`, {
// //               method: "PATCH",
// //               headers: { "Content-Type": "application/json" },
// //               body: JSON.stringify({ orderStatus: newStatus }),
// //             })
// //           } catch (error) {
// //             console.error("خطأ في تحديث حالة الطلب:", error)
// //           }
// //         }

// //         const statusOptions = [
// //           { id: "جديد", title: "جديد" },
// //           { id: "جاري التجهيز", title: "جاري التجهيز" },
// //           { id: "جاهز", title: "جاهز" },
// //           { id: "جاري التوصيل", title: "جاري التوصيل" },
// //           { id: "تم التوصيل", title: "تم التوصيل" },
// //           { id: "ملغي", title: "ملغي" },
// //         ]

// //         return (
// //           <div className="flex items-center gap-2">
// //             <span className={`px-2 py-1 rounded-md text-sm ${getStatusColor(currentStatus)}`}>{currentStatus}</span>
// //             <select
// //               value={currentStatus}
// //               onChange={handleStatusChange}
// //               className="border rounded-md px-2 py-1 bg-gray-100 text-gray-800 text-sm"
// //             >
// //               {statusOptions.map((option) => (
// //                 <option key={option.id} value={option.id}>
// //                   {option.title}
// //                 </option>
// //               ))}
// //             </select>
// //           </div>
// //         )
// //       },
// //     },
// //     {
// //       accessorKey: "createdAt",
// //       header: "تاريخ الإنشاء",
// //       cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
// //     },
// //     {
// //       id: "viewOrder",
// //       header: "عرض الطلب",
// //       cell: ({ row }) => {
// //         const order = row.original

// //         return (
// //           <Button onClick={() => handleOpenModal(order)} variant="outline" size="sm">
// //             عرض الطلب
// //           </Button>
// //         )
// //       },
// //     },
// //     {
// //       id: "actions",
// //       cell: ({ row }) => {
// //         return (
// //           <ActionColumn
// //             row={row}
// //             title="الطلب"
// //             endpoint={`orders/${row.original.id}`}
// //             editEndpoint={`orders/update/${row.original.id}`}
// //           />
// //         )
// //       },
// //     },
// //   ]

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <main className="p-6">
// //         <div className="bg-white rounded-lg shadow-sm p-6">
// //           <div className="flex justify-between items-center mb-6">
// //             <div>
// //               <h1 className="text-2xl font-bold text-gray-800">قائمة الطلبات</h1>
// //               <p className="text-gray-500">جميع الطلبات في متجرك هنا</p>
// //             </div>

// //             <Button className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2">
// //               <span>إنشاء طلب جديد</span>
// //               <span className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center">+</span>
// //             </Button>
// //           </div>

// //           {/* بطاقات صغيرة لعرض إحصائيات الطلبات */}
// //           <SmallCards orders={orders} onStatusSelect={setSelectedStatus} selectedStatus={selectedStatus} />

// //           {/* جدول البيانات */}
// //           <DataTable columns={columns} data={filteredOrders} filterKeys={["firstName", "lastName"]} />

// //           {/* مودال عرض تفاصيل الطلب */}
// //           {selectedOrder && (
// //             <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal}>
// //               <OrderCard order={selectedOrder} />
// //             </ModalComponent>
// //           )}
// //         </div>
// //       </main>
// //     </div>
// //   )
// // }

// // // دالة للحصول على لون الحالة
// // function getStatusColor(status) {
// //   switch (status) {
// //     case "جديد":
// //       return "text-green-600 bg-green-50"
// //     case "جاري التجهيز":
// //       return "text-purple-600 bg-purple-50"
// //     case "جاهز":
// //       return "text-blue-600 bg-blue-50"
// //     case "جاري التوصيل":
// //       return "text-amber-600 bg-amber-50"
// //     case "تم التوصيل":
// //       return "text-teal-600 bg-teal-50"
// //     case "ملغي":
// //       return "text-red-600 bg-red-50"
// //     default:
// //       return "text-gray-600 bg-gray-50"
// //   }
// // }

// "use client"

// import { useState, useEffect } from "react"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Button } from "@/components/ui/button"
// import DataTable from "@/components/data-table-components/DataTable"
// import SortableColumn from "@/components/DateTableColumns/SortableColumn"
// import DateColumn from "@/components/DateTableColumns/DateColumn"
// import ActionColumn from "@/components/DateTableColumns/ActionColumn"
// import ModalComponent from "@/components/Actions/ModalComponent"
// import OrderCard from "@/components/Order/OrderCard"
// import SmallCards from "@/components/backoffice/SmallCards"

// export default function OrdersDashboard() {
//   const [orders, setOrders] = useState([])
//   const [selectedStatus, setSelectedStatus] = useState("all")
//   const [filteredOrders, setFilteredOrders] = useState([])
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [selectedOrder, setSelectedOrder] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   // جلب البيانات من API
//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await fetch('/api/orders') // تغيير المسار حسب API الخاص بك
//         if (!response.ok) throw new Error('فشل جلب البيانات')
//         const data = await response.json()
//         setOrders(data)
//         setFilteredOrders(data)
//       } catch (err) {
//         setError(err.message)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchOrders()
//   }, [])

//   // تصفية الطلبات حسب الحالة المحددة
//   useEffect(() => {
//     if (selectedStatus === "all") {
//       setFilteredOrders(orders)
//     } else {
//       setFilteredOrders(orders.filter((order) => order.status === selectedStatus))
//     }
//   }, [selectedStatus, orders])

//   const handleOpenModal = (order) => {
//     setSelectedOrder(order)
//     setIsModalOpen(true)
//   }

//   const handleCloseModal = () => {
//     setIsModalOpen(false)
//     setSelectedOrder(null)
//   }

//   // تعريف أعمدة جدول البيانات
//   const columns = [
//     {
//       id: "select",
//       header: ({ table }) => (
//         <Checkbox
//           checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
//           onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//           aria-label="تحديد الكل"
//         />
//       ),
//       cell: ({ row }) => (
//         <Checkbox
//           checked={row.getIsSelected()}
//           onCheckedChange={(value) => row.toggleSelected(!!value)}
//           aria-label="تحديد صف"
//         />
//       ),
//       enableSorting: false,
//       enableHiding: false,
//     },
//     {
//       accessorKey: "id",
//       header: ({ column }) => <SortableColumn column={column} title="رقم الطلب" />,
//     },
//     {
//       accessorKey: "client",
//       header: ({ column }) => <SortableColumn column={column} title="العميل" />,
//     },
//     {
//       accessorKey: "orderDate",
//       header: ({ column }) => <SortableColumn column={column} title="تاريخ الطلب" />,
//     },
//     {
//       accessorKey: "payment",
//       header: ({ column }) => <SortableColumn column={column} title="طريقة الدفع" />,
//     },
//     {
//       accessorKey: "shipping",
//       header: "طريقة الشحن",
//       cell: ({ row }) => {
//         const shipping = row.getValue("shipping")
//         return (
//           <div className="flex items-center gap-2">
//             {shipping === "طرد" ? (
//               <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-md text-xs">{shipping}</span>
//             ) : (
//               <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs">{shipping}</span>
//             )}
//           </div>
//         )
//       },
//     },
//     {
//       accessorKey: "orderStatus",
//       header: ({ column }) => <SortableColumn column={column} title="حالة الطلب" />,
//       cell: ({ row }) => {
//         const status = row.getValue("orderStatus")
//         return (
//           <div className="flex items-center gap-2">
//             <span className={`px-2 py-1 rounded-md text-sm ${getStatusColor(status)}`}>{status}</span>
//           </div>
//         )
//       },
//     },
//     {
//       accessorKey: "amount",
//       header: ({ column }) => <SortableColumn column={column} title="المبلغ" />,
//       cell: ({ row }) => {
//         const amount = row.getValue("amount")
//         const formatted = new Intl.NumberFormat('en', {
//           style: 'currency',
//           currency: 'SAR',
//           minimumFractionDigits: 2,
//         }).format(amount)
//         return <div className="text-left font-medium">{formatted}</div>
//       },
//     },
//     {
//       accessorKey: "createdAt",
//       header: "تاريخ الإنشاء",
//       cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
//     },
//     {
//       id: "viewOrder",
//       header: "عرض الطلب",
//       cell: ({ row }) => {
//         const order = row.original
//         return (
//           <Button onClick={() => handleOpenModal(order)} variant="outline" size="sm">
//             عرض الطلب
//           </Button>
//         )
//       },
//     },
//     {
//       id: "actions",
//       cell: ({ row }) => {
//         return <ActionColumn row={row} title="الطلب" />
//       },
//     },
//   ]

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-red-500 text-lg">{error}</div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <main className="p-6">
//         <div className="bg-white rounded-lg shadow-sm p-6">
//           <div className="flex justify-between items-center mb-6">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-800">قائمة الطلبات</h1>
//               <p className="text-gray-500">جميع الطلبات في متجرك هنا</p>
//             </div>

//             <Button className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2">
//               <span>إنشاء طلب جديد</span>
//               <span className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center">+</span>
//             </Button>
//           </div>

//           {/* بطاقات صغيرة لعرض إحصائيات الطلبات */}
//           <SmallCards orders={orders} onStatusSelect={setSelectedStatus} selectedStatus={selectedStatus} />

//           {/* جدول البيانات */}
//           <DataTable columns={columns} data={filteredOrders} filterKeys={["client"]} />

//           {/* مودال عرض تفاصيل الطلب */}
//           {selectedOrder && (
//             <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal}>
//               <OrderCard order={selectedOrder} />
//             </ModalComponent>
//           )}
//         </div>
//       </main>
//     </div>
//   )
// }

// // دالة للحصول على لون الحالة
// function getStatusColor(status) {
//   switch (status) {
//     case "جديد": return "text-green-600 bg-green-50"
//     case "جاري التجهيز": return "text-purple-600 bg-purple-50"
//     case "جاهز": return "text-blue-600 bg-blue-50"
//     case "جاري التوصيل": return "text-amber-600 bg-amber-50"
//     case "تم التوصيل": return "text-teal-600 bg-teal-50"
//     case "ملغي": return "text-red-600 bg-red-50"
//     default: return "text-gray-600 bg-gray-50"
//   }
// }

// "use client"

// import React from "react"
// import { useState, useEffect } from "react"
// import { Checkbox } from "../components/ui/checkbox"
// import { Button } from "../components/ui/button"
// import DataTable from "../components/data-table-components/DataTable"
// import SortableColumn from "../components/DateTableColumns/SortableColumn"
// import DateColumn from "../components/DateTableColumns/DateColumn"
// import ActionColumn from "../components/DateTableColumns/ActionColumn"
// import ModalComponent from "../components/Actions/ModalComponent"
// import OrderCard from "../components/Order/OrderCard"
// import SmallCards from "../components/backoffice/SmallCards"
// import { getData } from "../lib/getData"
// import { useSession } from "next-auth/react"

// export default function OrdersDashboard() {
//   const { data: session, status } = useSession()
//   const [selectedStatus, setSelectedStatus] = useState("all")
//   const [filteredOrders, setFilteredOrders] = useState([])
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [selectedOrder, setSelectedOrder] = useState(null)
//   const [orders, setOrders] = useState([])
//   const [storeId, setStoreId] = useState(null)
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     const fetchData = async () => {
//       if (status === "loading") return // إذا كانت الجلسة قيد التحميل

//       try {
//         setIsLoading(true)
        
//         if (session?.user?.id) {
//           // جلب بيانات المتجر
//           const storeData = await getData(`stores?vendorId=${session.user.id}`)
          
//           if (storeData?.length > 0) {
//             setStoreId(storeData[0].id)
            
//             // جلب جميع الطلبات
//             const ordersData = await getData('orders')
            
//             // تصفية الطلبات الخاصة بالمستخدم
//             const userOrders = ordersData.filter(order => 
//               order.storeId === storeData[0].id
//             )
            
//             setOrders(ordersData)
//             setFilteredOrders(ordersData)
//           }
//         }
//       } catch (error) {
//         console.error("حدث خطأ أثناء جلب البيانات:", error)
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     fetchData()
//   }, [session, status])

//   useEffect(() => {
//     if (selectedStatus === "all") {
//       setFilteredOrders(orders)
//     } else {
//       setFilteredOrders(orders.filter(order => 
//         order.orderStatus === selectedStatus
//       ))
//     }
//   }, [selectedStatus, orders])

//   const handleOpenModal = (order) => {
//     setSelectedOrder(order)
//     setIsModalOpen(true)
//   }

//   const handleCloseModal = () => {
//     setIsModalOpen(false)
//     setSelectedOrder(null)
//   }

//   if (status === "loading" || isLoading) {
//     return <p className="p-6 text-gray-500">جارٍ التحميل...</p>
//   }

//   if (!orders || orders.length === 0) {
//     return (
//       <div className="p-6">
//         <p className="text-gray-500">لا توجد طلبات بعد</p>
//         <Button 
//           className="mt-4"
//           onClick={() => window.location.reload()}
//         >
//           إعادة تحميل
//         </Button>
//       </div>
//     )
//   }

//   // تعريف الأعمدة
//   const columns = [
//     {
//       id: "select",
//       header: ({ table }) => (
//         <Checkbox
//           checked={table.getIsAllPageRowsSelected()}
//           onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//           aria-label="تحديد الكل"
//         />
//       ),
//       cell: ({ row }) => (
//         <Checkbox
//           checked={row.getIsSelected()}
//           onCheckedChange={(value) => row.toggleSelected(!!value)}
//           aria-label="تحديد صف"
//         />
//       ),
//       enableSorting: false,
//       enableHiding: false,
//     },
//     {
//       accessorKey: "orderNumber",
//       header: ({ column }) => <SortableColumn column={column} title="رقم الطلب" />,
//     },
//     {
//       accessorKey: "firstName",
//       header: ({ column }) => <SortableColumn column={column} title="الاسم" />,
//       cell: ({ row }) => (
//         <div>
//           {row.getValue("firstName")} {row.getValue("lastName")}
//         </div>
//       ),
//     },
//     {
//       accessorKey: "phone",
//       header: ({ column }) => <SortableColumn column={column} title="الهاتف" />,
//     },
//     {
//       accessorKey: "paymentMethod",
//       header: ({ column }) => <SortableColumn column={column} title="طريقة الدفع" />,
//     },
//     {
//       accessorKey: "orderStatus",
//       header: ({ column }) => <SortableColumn column={column} title="الحالة" />,
//       cell: ({ row }) => {
//         const [currentStatus, setCurrentStatus] = useState(row.getValue("orderStatus"))

//         const handleStatusChange = async (e) => {
//           const newStatus = e.target.value
//           setCurrentStatus(newStatus)

//           try {
//             await fetch(`/api/orders/${row.original.id}`, {
//               method: "PATCH",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify({ orderStatus: newStatus }),
//             })
//             // تحديث الحالة المحلية
//             const updatedOrders = orders.map(order => 
//               order.id === row.original.id 
//                 ? {...order, orderStatus: newStatus} 
//                 : order
//             )
//             setOrders(updatedOrders)
//           } catch (error) {
//             console.error("خطأ في تحديث الحالة:", error)
//           }
//         }

//         const statusOptions = [
//           "جديد",
//           "جاري التجهيز",
//           "جاهز",
//           "جاري التوصيل",
//           "تم التوصيل",
//           "ملغي",
//         ]

//         return (
//           <div className="flex items-center gap-2">
//             <span className={`px-2 py-1 rounded-md text-sm ${getStatusColor(currentStatus)}`}>
//               {currentStatus}
//             </span>
//             <select
//               value={currentStatus}
//               onChange={handleStatusChange}
//               className="border rounded-md px-2 py-1 bg-gray-100 text-gray-800 text-sm"
//             >
//               {statusOptions.map(option => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )
//       },
//     },
//     {
//       accessorKey: "createdAt",
//       header: "التاريخ",
//       cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
//     },
//     {
//       id: "actions",
//       cell: ({ row }) => (
//         <div className="flex gap-2">
//           <Button 
//             onClick={() => handleOpenModal(row.original)}
//             variant="outline"
//             size="sm"
//           >
//             عرض التفاصيل
//           </Button>
//           <ActionColumn
//             row={row}
//             title="الطلب"
//             endpoint={`orders/${row.original.id}`}
//             editEndpoint={`orders/update/${row.original.id}`}
//           />
//         </div>
//       ),
//     },
//   ]

//   return (
//     <div className="min-h-screen font-arabic bg-gray-50">
//       <main className="p-6">
//         <div className="bg-white rounded-lg shadow-sm p-6">
//           <div className="flex text-slate-600 justify-between items-center mb-6">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-800">إدارة الطلبات</h1>
//               <p className="text-gray-500">إجمالي الطلبات: {orders.length}</p>
//             </div>
//             <Button 
//               className="bg-green-500 hover:bg-green-600"
//               onClick={() => window.location.href = '/orders/new'}
//             >
//               إنشاء طلب جديد
//             </Button>
//           </div>

//           <SmallCards 
//             orders={orders} 
//             onStatusSelect={setSelectedStatus} 
//             selectedStatus={selectedStatus}
//           />

//           <DataTable 
//             columns={columns} 
//             data={filteredOrders} 
//             filterKeys={["firstName", "lastName", "phone"]}
//           />

//           <ModalComponent 
//             isOpen={isModalOpen} 
//             onClose={handleCloseModal}
//             title="تفاصيل الطلب"
//           >
//             {selectedOrder && <OrderCard order={selectedOrder} />}
//           </ModalComponent>
//         </div>
//       </main>
//     </div>
//   )
// }

// // دالة مساعدة لتحديد ألوان الحالة
// function getStatusColor(status) {
//   const colors = {
//     "جديد": "text-green-800 bg-green-100",
//     "جاري التجهيز": "text-blue-800 bg-blue-100",
//     "جاهز": "text-purple-800 bg-purple-100",
//     "جاري التوصيل": "text-amber-800 bg-amber-100",
//     "تم التوصيل": "text-teal-800 bg-teal-100",
//     "ملغي": "text-red-800 bg-red-100",
//   }
//   return colors[status] || "text-gray-800 bg-gray-100"
// }


"use client"

import React, { useState, useEffect } from "react"
import { Checkbox } from "../components/ui/checkbox"
import { Button } from "../components/ui/button"
import DataTable from "../components/data-table-components/DataTable"
import SortableColumn from "../components/DateTableColumns/SortableColumn"
import DateColumn from "../components/DateTableColumns/DateColumn"
import ActionColumn from "../components/DateTableColumns/ActionColumn"
import ModalComponent from "../components/Actions/ModalComponent"
import OrderCard from "../components/Order/OrderCard"
import SmallCards from "../components/backoffice/SmallCards"
import { getData } from "../lib/getData"
import { useSession } from "next-auth/react"

export default function OrdersDashboard() {
  const { data: session, status } = useSession()
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [filteredOrders, setFilteredOrders] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [orders, setOrders] = useState([])
  const [storeId, setStoreId] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      if (status === "loading") return

      try {
        setIsLoading(true)
        
        if (session?.user?.id) {
          const storeData = await getData(`stores?vendorId=${session.user.id}`)
          
          if (storeData?.length > 0) {
            setStoreId(storeData[0].id)

            const ordersData = await getData('orders')
            const userOrders = ordersData.filter(order => order.storeId === storeData[0].id)

            setOrders(userOrders)
            setFilteredOrders(userOrders)
          }
        }
      } catch (error) {
        console.error("حدث خطأ أثناء جلب البيانات:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [session, status])

  useEffect(() => {
    if (selectedStatus === "all") {
      setFilteredOrders(orders)
    } else {
      setFilteredOrders(orders.filter(order => order.orderStatus === selectedStatus))
    }
  }, [selectedStatus, orders])

  const handleOpenModal = (order) => {
    setSelectedOrder(order)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedOrder(null)
  }

  if (status === "loading" || isLoading) {
    return <p className="p-6 text-gray-500">جارٍ التحميل...</p>
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="p-6">
        <p className="text-gray-500">لا توجد طلبات بعد</p>
        <Button className="mt-4" onClick={() => window.location.reload()}>
          إعادة تحميل
        </Button>
      </div>
    )
  }

  // دوال الترجمة
  const translateOrderStatus = (status) => {
    const translations = {
      "PENDING": "قيد الانتظار",
      "PROCESSING": "جاري المعالجة",
      "SHIPPED": "تم الشحن",
      "DELIVERED": "تم التوصيل",
      "CANCELED": "ملغي",
    }
    return translations[status] || status
  }

  const reverseTranslateOrderStatus = (arabicStatus) => {
    const reverseTranslations = {
      "قيد الانتظار": "PENDING",
      "جاري المعالجة": "PROCESSING",
      "تم الشحن": "SHIPPED",
      "تم التوصيل": "DELIVERED",
      "ملغي": "CANCELED",
    }
    return reverseTranslations[arabicStatus] || arabicStatus
  }

  const statusOptions = [
    "قيد الانتظار",
    "جاري المعالجة",
    "تم الشحن",
    "تم التوصيل",
    "ملغي",
  ]

  const columns = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="تحديد الكل"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="تحديد صف"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "orderNumber",
      header: ({ column }) => <SortableColumn column={column} title="رقم الطلب" />,
    },
    {
      accessorKey: "firstName",
      header: ({ column }) => <SortableColumn column={column} title="الاسم" />,
      cell: ({ row }) => (
        <div>{row.getValue("firstName")} {row.getValue("lastName")}</div>
      ),
    },
    {
      accessorKey: "phone",
      header: ({ column }) => <SortableColumn column={column} title="الهاتف" />,
    },
    {
      accessorKey: "paymentMethod",
      header: ({ column }) => <SortableColumn column={column} title="طريقة الدفع" />,
    },
    {
      accessorKey: "orderStatus",
      header: ({ column }) => <SortableColumn column={column} title="الحالة" />,
      cell: ({ row }) => {
        const [currentStatus, setCurrentStatus] = useState(row.getValue("orderStatus"))

        // const handleStatusChange = async (e) => {
        //   const arabicStatus = e.target.value
        //   const newStatus = reverseTranslateOrderStatus(arabicStatus)
        //   setCurrentStatus(newStatus)

        //   try {
        //     await fetch(`/api/orders/${row.original.id}`, {
        //       method: "PATCH",
        //       headers: { "Content-Type": "application/json" },
        //       body: JSON.stringify({ orderStatus: newStatus }),
        //     })

        //     const updatedOrders = orders.map(order => 
        //       order.id === row.original.id 
        //         ? { ...order, orderStatus: newStatus }
        //         : order
        //     )
            
        //   const totalAmount = row.original.orderItems.reduce((total, item) => {
        //     return total + item.price * item.quantity;
        //   }, 0);
            
        //   const { paymentMethod, id, orderNumber, orderItems, CustomerStoreId, storeId } = row.original;

        //   if (
        //     (paymentMethod === "الدفع عند الاستلام" && newStatus === "DELIVERED") ||
        //     (paymentMethod === "ONLINE" && selectedStatus === "PAID")
        //   ) {
        //     const productQty = orderItems.reduce((total, item) => total + item.quantity, 0);

        //     const salesData = {
        //       orderId: id,
        //       productQty: productQty,
        //       username: `${row.original.firstName} ${row.original.lastName}`,
        //       invoiceTotal: totalAmount,
        //       customerStoreId : CustomerStoreId,
        //       storeId,
        //       saleItems: orderItems.map(item => ({
        //         productId: item.productId,
        //       //  vendorId: item.vendorId,
        //         productTitle: item.title,
        //         productImage: item.imageUrl,
        //         productPrice: item.price,
        //         productQty: item.quantity,
        //       })),
        //       date: new Date().toISOString(),
        //     };

        //     const salesResponse = await fetch("/api/sales", {
        //       method: "POST",
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //       body: JSON.stringify(salesData),
        //     });

        //     if (!salesResponse.ok) {
        //       console.error("فشل في إرسال بيانات المبيعات");
        //     }
        //   }
      
        //     setOrders(updatedOrders)
        //   } catch (error) {
        //     console.error("خطأ في تحديث الحالة:", error)
        //   }
        // }

        // داخل cell: ({ row }) => { ... }
const handleStatusChange = async (e) => {
  const arabicStatus = e.target.value
  const newStatus = reverseTranslateOrderStatus(arabicStatus)
  setCurrentStatus(newStatus)

  try {
    // 1) حدث حالة الطلب في الـ API
    await fetch(`/api/orders/${row.original.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderStatus: newStatus }),
    })

    // 2) حدّث حالة الواجهة
    const updated = orders.map(o =>
      o.id === row.original.id ? { ...o, orderStatus: newStatus } : o
    )
    setOrders(updated)

    // 3) إذا COD وانتقلنا لـ DELIVERED
    if (row.original.paymentMethod === "COD" && newStatus === "DELIVERED") {
      const resp = await fetch("/api/payments/cod/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId: row.original.id })
      })
      if (!resp.ok) {
        console.error("فشل شحن محفظة COD")
      }
    }

  } catch (err) {
    console.error("خطأ في تحديث الحالة:", err)
  }
}


        return (
          <div className="flex items-center gap-2">
            <span className={`px-2 py-1 rounded-md text-sm ${getStatusColor(currentStatus)}`}>
              {translateOrderStatus(currentStatus)}
            </span>
            <select
              value={translateOrderStatus(currentStatus)}
              onChange={handleStatusChange}
              className="border rounded-md px-2 py-1 bg-gray-100 text-gray-800 text-sm"
            >
              {statusOptions.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )
      },
    },
    {
      accessorKey: "createdAt",
      header: "التاريخ",
      cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Button 
            onClick={() => handleOpenModal(row.original)}
            variant="outline"
            size="sm"
          >
            عرض التفاصيل
          </Button>
          <ActionColumn
            row={row}
            title="الطلب"
            endpoint={`orders/${row.original.id}`}
            editEndpoint={`orders/update/${row.original.id}`}
          />
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen font-arabic bg-gray-50">
      <main className="p-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex text-slate-600 justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">إدارة الطلبات</h1>
              <p className="text-gray-500">إجمالي الطلبات: {orders.length}</p>
            </div>
            <Button 
              className="bg-green-500 hover:bg-green-600"
              onClick={() => window.location.href = '/orders/new'}
            >
              إنشاء طلب جديد
            </Button>
          </div>

          <SmallCards 
            orders={orders} 
            onStatusSelect={setSelectedStatus} 
            selectedStatus={selectedStatus}
          />

          <DataTable 
            columns={columns} 
            data={filteredOrders} 
            filterKeys={["firstName", "lastName", "phone"]}
          />

          <ModalComponent 
            isOpen={isModalOpen} 
            onClose={handleCloseModal}
            title="تفاصيل الطلب"
          >
            {selectedOrder && <OrderCard order={selectedOrder} />}
          </ModalComponent>
        </div>
      </main>
    </div>
  )
}

// دالة تحديد ألوان الحالة
function getStatusColor(status) {
  const colors = {
    "PENDING": "text-green-800 bg-white-700",
    "PROCESSING": "text-blue-800 bg-blue-100",
    "SHIPPED": "text-purple-800 bg-purple-100",
    "DELIVERED": "text-teal-800 bg-teal-100",
    "CANCELED": "text-red-800 bg-red-100",
  }
  return colors[status] || "text-gray-800 bg-gray-100"
}


