"use client"

import React, { useContext, createContext, useRef } from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

// إنشاء السياق لتخزين خصائص التخصيص (variant, size)
const ToggleGroupContext = createContext({
  size: "default",
  variant: "default",
})

export function ToggleGroup({ className, variant = "default", size = "default", children, ...props }) {
  const groupRef = useRef(null)

  return (
    <ToggleGroupPrimitive.Root
      ref={groupRef}
      className={cn("flex items-center justify-center gap-1", className)}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

export function ToggleGroupItem({ className, children, variant, size, ...props }) {
  const context = useContext(ToggleGroupContext)
  const itemRef = useRef(null)

  return (
    <ToggleGroupPrimitive.Item
      ref={itemRef}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
}
