"use client"

import { useState } from "react"
import Link from "next/link"
import { signOut } from "next-auth/react"
import { LogOut, Settings, User } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function UserAvatar({ user }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleSignOut = async () => {
    setIsLoading(true)
    await signOut({ callbackUrl: "/" })
  }

  if (!user) return null

  const getInitials = (name) => {
    if (!name) return "U"
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <Avatar className="h-8 w-8 border border-slate-200 dark:border-slate-800">
          <AvatarImage src={user.image || ""} alt={user.name || "المستخدم"} />
          <AvatarFallback className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
            {getInitials(user.name || "U")}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="flex items-center gap-3 p-3">
          <Avatar className="h-10 w-10 border border-slate-200 dark:border-slate-800">
            <AvatarImage src={user.image || ""} alt={user.name || "المستخدم"} />
            <AvatarFallback className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
              {getInitials(user.name || "U")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{user.name || "المستخدم"}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{user.email}</p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/dashboard/profile" className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>الملف الشخصي</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard/settings" className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>الإعدادات</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleSignOut}
          disabled={isLoading}
          className="text-red-600 dark:text-red-400 focus:text-red-700 dark:focus:text-red-300 cursor-pointer"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>{isLoading ? "جاري تسجيل الخروج..." : "تسجيل الخروج"}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
