import Link from "next/link"

export default function SettingCard({ href, icon: Icon, title, description }) {
  return (
    <Link
      href={href}
      className="bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 rounded-lg p-6 flex flex-col items-center text-center transition-all hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800"
    >
      <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-full text-indigo-600 dark:text-indigo-400 mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
    </Link>
  )
}
