"use client"

import { useState } from "react"
import { Calendar, Download, Filter, Search } from "lucide-react"
import { format } from "date-fns"
import { ar } from "date-fns/locale"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FilterBar({ date, setDate, onSearch, onExport, filters = [], searchPlaceholder = "بحث..." }) {
  const [searchQuery, setSearchQuery] = useState("")

  // تنسيق نطاق التاريخ للعرض
  const formatDateRange = (range) => {
    if (!range.from) return ""
    if (!range.to) {
      return format(range.from, "d MMMM, yyyy", { locale: ar })
    }
    return `${format(range.from, "d MMMM, yyyy", { locale: ar })} - ${format(range.to, "d MMMM, yyyy", {
      locale: ar,
    })}`
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (onSearch) onSearch(searchQuery)
  }

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 mb-6">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {date && setDate && (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Calendar className="h-4 w-4" />
                  {formatDateRange(date)}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  initialFocus
                  mode="range"
                  defaultMonth={date.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                  locale={ar}
                />
              </PopoverContent>
            </Popover>
          )}

          {filters.length > 0 && (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  فلتر
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="start">
                <div className="space-y-4">
                  <h4 className="font-medium text-sm">تصفية البيانات</h4>
                  <div className="space-y-2">
                    {filters.map((filter) => (
                      <div key={filter.id} className="grid gap-2">
                        <label htmlFor={filter.id} className="text-sm font-medium">
                          {filter.label}
                        </label>
                        <Select onValueChange={filter.onChange} defaultValue={filter.defaultValue}>
                          <SelectTrigger id={filter.id}>
                            <SelectValue placeholder={filter.placeholder} />
                          </SelectTrigger>
                          <SelectContent>
                            {filter.options.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <Button size="sm">تطبيق</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}

          {/* يمكن إضافة المزيد من عناصر التصفية هنا */}
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          <form onSubmit={handleSearch} className="relative flex-1 md:flex-none">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              type="search"
              placeholder={searchPlaceholder}
              className="pl-3 pr-10 w-full md:w-[200px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          {onExport && (
            <Button variant="outline" className="gap-2" onClick={onExport}>
              <Download className="h-4 w-4" />
              تصدير
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
