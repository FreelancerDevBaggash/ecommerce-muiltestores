export default function LoadingSpinner({ size = "md", className = "" }) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-12 w-12",
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`animate-spin rounded-full border-4 border-solid border-slate-200 border-t-indigo-600 dark:border-slate-700 dark:border-t-indigo-400 ${
          sizeClasses[size] || sizeClasses.md
        }`}
      ></div>
    </div>
  )
}
