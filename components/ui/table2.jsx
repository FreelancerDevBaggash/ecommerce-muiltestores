// import * as React from "react"

// import { cn } from "@/lib/utils"

// const Table = React.forwardRef(({ className, ...props }, ref) => (
//   <div className="relative w-full overflow-auto">
//     <table
//       ref={ref}
//       className={cn("w-full caption-bottom text-sm", className)}
//       {...props} />
//   </div>
// ))
// Table.displayName = "Table"

// const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
//   <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
// ))
// TableHeader.displayName = "TableHeader"

// const TableBody = React.forwardRef(({ className, ...props }, ref) => (
//   <tbody
//     ref={ref}
//     className={cn("[&_tr:last-child]:border-0", className)}
//     {...props} />
// ))
// TableBody.displayName = "TableBody"

// const TableFooter = React.forwardRef(({ className, ...props }, ref) => (
//   <tfoot
//     ref={ref}
//     className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)}
//     {...props} />
// ))
// TableFooter.displayName = "TableFooter"

// const TableRow = React.forwardRef(({ className, ...props }, ref) => (
//   <tr
//     ref={ref}
//     className={cn(
//       "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
//       className
//     )}
//     {...props} />
// ))
// TableRow.displayName = "TableRow"

// const TableHead = React.forwardRef(({ className, ...props }, ref) => (
//   <th
//     ref={ref}
//     className={cn(
//       "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
//       className
//     )}
//     {...props} />
// ))
// TableHead.displayName = "TableHead"

// const TableCell = React.forwardRef(({ className, ...props }, ref) => (
//   <td
//     ref={ref}
//     className={cn("p-2 align-middle [&:has([role=checkbox])]:pr-0", className)}
//     {...props} />
// ))
// TableCell.displayName = "TableCell"

// const TableCaption = React.forwardRef(({ className, ...props }, ref) => (
//   <caption
//     ref={ref}
//     className={cn("mt-2 text-sm text-muted-foreground", className)}
//     {...props} />
// ))
// TableCaption.displayName = "TableCaption"

// export {
//   Table,
//   TableHeader,
//   TableBody,
//   TableFooter,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableCaption,
// }
import * as React from "react"
import { cn } from "@/lib/utils"

// ✅ إطار الجدول
const Table = React.forwardRef(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white dark:bg-gray-900">
    <table
      ref={ref}
      className={cn("w-full text-sm text-gray-700 dark:text-gray-200", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

// ✅ رأس الجدول
const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      "bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-300 uppercase tracking-wider",
      className
    )}
    {...props}
  />
))
TableHeader.displayName = "TableHeader"

// ✅ جسم الجدول
const TableBody = React.forwardRef(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-b-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

// ✅ الفوتر (اختياري)
const TableFooter = React.forwardRef(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("border-t bg-gray-50 dark:bg-gray-800 font-medium", className)}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

// ✅ صف الجدول
const TableRow = React.forwardRef(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-gray-50 dark:hover:bg-gray-700",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

// ✅ رأس العمود
const TableHead = React.forwardRef(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-2 py-2 text-start font-semibold",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

// ✅ خلية البيانات
const TableCell = React.forwardRef(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("px-6 py-4 align-middle whitespace-nowrap", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"

// ✅ الكابتشن (الوصف أسفل الجدول)
const TableCaption = React.forwardRef(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-gray-500 dark:text-gray-400", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
