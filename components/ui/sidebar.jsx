"use client"

import * as React from "react"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"

const SidebarContext = React.createContext({})

function useSidebarContext() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebarContext should be used within the SidebarProvider")
  }
  return context
}

function SidebarProvider({ children, ...props }) {
  const [isOpen, setIsOpen] = React.useState(true)
  const [isHovered, setIsHovered] = React.useState(false)
  const [isRail, setIsRail] = React.useState(false)

  const value = React.useMemo(
    () => ({
      isOpen,
      setIsOpen,
      isHovered,
      setIsHovered,
      isRail,
      setIsRail,
    }),
    [isOpen, isHovered, isRail],
  )

  return (
    <SidebarContext.Provider {...props} value={value}>
      {children}
    </SidebarContext.Provider>
  )
}

const Sidebar = React.forwardRef(({ className, children, ...props }, ref) => {
  const { isOpen, setIsHovered, isRail } = useSidebarContext()

  return (
    <aside
      ref={ref}
      data-state={isOpen ? "open" : "closed"}
      className={cn(
        "sidebar relative inset-y-0 flex h-full max-h-screen min-h-screen w-full flex-col border-r bg-sidebar text-sidebar-foreground",
        isRail && "sidebar-rail",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </aside>
  )
})
Sidebar.displayName = "Sidebar"

const SidebarHeader = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("sidebar-header border-b px-4 py-4", className)} {...props}>
      {children}
    </div>
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarContent = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("sidebar-content flex-1 overflow-auto py-2", className)} {...props}>
      {children}
    </div>
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarFooter = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("sidebar-footer border-t p-4", className)} {...props}>
      {children}
    </div>
  )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarGroup = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("sidebar-group py-2", className)} {...props}>
      {children}
    </div>
  )
})
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("sidebar-group-label px-4 py-2 text-xs font-medium text-sidebar-muted-foreground", className)}
      {...props}
    >
      {children}
    </div>
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupContent = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("sidebar-group-content", className)} {...props}>
      {children}
    </div>
  )
})
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("sidebar-menu", className)} {...props}>
      {children}
    </div>
  )
})
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("sidebar-menu-item px-2", className)} {...props}>
      {children}
    </div>
  )
})
SidebarMenuItem.displayName = "SidebarMenuItem"

const SidebarMenuButton = React.forwardRef(
  ({ className, children, isActive, size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button"
    return (
      <Comp
        ref={ref}
        data-state={isActive ? "active" : "inactive"}
        className={cn(
          "sidebar-menu-button group flex w-full cursor-pointer items-center gap-2 rounded-md px-2 text-sidebar-foreground transition-colors hover:bg-sidebar-hover hover:text-sidebar-hover-foreground focus:bg-sidebar-hover focus:text-sidebar-hover-foreground focus:outline-none",
          size === "default" && "h-10",
          size === "sm" && "h-8",
          size === "lg" && "h-12",
          isActive && "bg-sidebar-active text-sidebar-active-foreground",
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    )
  },
)
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarInput = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "sidebar-input flex h-10 w-full rounded-md border border-input bg-sidebar-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-sidebar-input-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  )
})
SidebarInput.displayName = "SidebarInput"

const SidebarTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  const { setIsOpen } = useSidebarContext()

  return (
    <button
      ref={ref}
      className={cn(
        "sidebar-trigger inline-flex h-10 w-10 items-center justify-center rounded-md text-sidebar-foreground transition-colors hover:bg-sidebar-hover hover:text-sidebar-hover-foreground focus:bg-sidebar-hover focus:text-sidebar-hover-foreground focus:outline-none",
        className,
      )}
      onClick={() => setIsOpen((prev) => !prev)}
      {...props}
    >
      {children || <Menu className="h-5 w-5" />}
    </button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarRail = React.forwardRef(({ className, ...props }, ref) => {
  const { setIsRail } = useSidebarContext()

  React.useEffect(() => {
    setIsRail(true)
    return () => setIsRail(false)
  }, [setIsRail])

  return (
    <div
      ref={ref}
      className={cn(
        "sidebar-rail absolute inset-y-0 right-0 z-10 w-1 cursor-col-resize bg-transparent transition-colors hover:bg-border",
        className,
      )}
      {...props}
    />
  )
})
SidebarRail.displayName = "SidebarRail"

const SidebarInset = React.forwardRef(({ className, children, ...props }, ref) => {
  const { isOpen, isHovered, isRail } = useSidebarContext()

  return (
    <div
      ref={ref}
      data-state={isOpen ? "open" : "closed"}
      className={cn(
        "sidebar-inset flex h-full max-h-screen min-h-screen flex-1 flex-col",
        isRail && "sidebar-rail-inset",
        isOpen && !isRail && "md:mr-[--sidebar-width]",
        isRail && isHovered && "md:mr-[--sidebar-width]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
})
SidebarInset.displayName = "SidebarInset"

export {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInput,
  SidebarTrigger,
  SidebarRail,
  SidebarInset,
}
