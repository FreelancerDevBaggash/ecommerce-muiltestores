"use client"

import { useState } from "react"
import { ChevronRight, ChevronLeft, Search, Edit, Eye, MoreHorizontal } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface RecentOrdersTableProps {
  orders: any[]
}

export default function RecentOrdersTable({ orders }: RecentOrdersTableProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const PAGE_SIZE = 10

  // Filter orders based on search term
  const filteredOrders = orders.filter(
    (order) =>
      order.id?.toString().includes(searchTerm) ||
      order.customer?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.orderStatus?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Calculate pagination
  const totalPages = Math.ceil(filteredOrders.length / PAGE_SIZE)
  const startIndex = (currentPage - 1) * PAGE_SIZE
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + PAGE_SIZE)

  // Format date
  const formatDate = (dateString: string) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("ar-SA", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  // Status badge styles
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "جديد":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      case "جاري التجهيز":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
      case "تم التوصيل":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "ملغي":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden mb-6">
      <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">أحدث الطلبات</h3>

        <div className="relative w-full sm:w-64">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="بحث..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-3 pr-10 w-full"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px] text-right">رقم الطلب</TableHead>
              <TableHead className="text-right">العميل</TableHead>
              <TableHead className="text-right">التاريخ</TableHead>
              <TableHead className="text-right">المبلغ</TableHead>
              <TableHead className="text-right">الحالة</TableHead>
              <TableHead className="text-right w-[80px]">إجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedOrders.length > 0 ? (
              paginatedOrders.map((order, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">#{order.id || index + 1}</TableCell>
                  <TableCell>{order.customer?.name || "عميل غير معروف"}</TableCell>
                  <TableCell>{formatDate(order.createdAt) || "غير متوفر"}</TableCell>
                  <TableCell>{order.total?.toLocaleString("ar-SA") || 0} ر.ي</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyles(order.orderStatus)}`}
                    >
                      {order.orderStatus || "غير معروف"}
                    </span>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">القائمة</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          <span>عرض</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          <span>تعديل</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-6 text-gray-500 dark:text-gray-400">
                  لا توجد طلبات للعرض
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {filteredOrders.length > 0 && (
        <div className="p-4 border-t border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            عرض {startIndex + 1}-{Math.min(startIndex + PAGE_SIZE, filteredOrders.length)} من {filteredOrders.length}{" "}
            طلب
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">السابق</span>
            </Button>

            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                const pageNumber = i + 1
                return (
                  <Button
                    key={i}
                    variant={currentPage === pageNumber ? "default" : "outline"}
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => setCurrentPage(pageNumber)}
                  >
                    {pageNumber}
                  </Button>
                )
              })}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">التالي</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
