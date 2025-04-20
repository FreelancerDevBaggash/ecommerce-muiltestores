"use client"

import React, { createContext, useContext, useId, useMemo, useCallback, useEffect, forwardRef } from "react"
import * as RechartsPrimitive from "recharts"
import useEmblaCarousel from "embla-carousel-react" // Note: imported above by mistake; remove this line if unused
import { cn } from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" }

const ChartContext = createContext(null)
function useChart() {
  const context = useContext(ChartContext)
  if (!context) throw new Error("useChart must be used within a <ChartContainer />")
  return context
}

export const ChartContainer = forwardRef(({
  id,
  className,
  children,
  config,
  ...props
}, ref) => {
  const uniqueId = useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs \
           [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground \
           [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 \
           [&_.recharts-tooltip-cursor]:stroke-border \
           [&_.recharts-dot[stroke='#fff']]:stroke-transparent \
           [&_.recharts-layer]:outline-none \
           [&_.recharts-radial-bar-background-sector]:fill-muted \
           [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted \
           [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border \
           [&_.recharts-sector[stroke='#fff']]:stroke-transparent \
           [&_.recharts-sector]:outline-none \
           [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "ChartContainer"

export function ChartStyle({ id, config }) {
  const entries = Object.entries(config).filter(([, c]) => c.theme || c.color)
  if (!entries.length) return null

  const cssVars = entries.map(([key, cfg]) => {
    const lines = Object.entries(THEMES).map(([theme, prefix]) => {
      const color = cfg.theme?.[theme] || cfg.color
      return color ? `${prefix} [data-chart=${id}] { --color-${key}: ${color}; }` : null
    }).filter(Boolean)
    return lines.join("\n")
  }).join("\n")

  return <style dangerouslySetInnerHTML={{ __html: cssVars }} />
}

export const ChartTooltip = RechartsPrimitive.Tooltip
export const ChartLegend = RechartsPrimitive.Legend

export const ChartTooltipContent = forwardRef(({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}, ref) => {
  const { config } = useChart()

  const tooltipLabel = useMemo(() => {
    if (hideLabel || !payload?.length) return null
    const item = payload[0]
    const key = labelKey || item.dataKey || item.name || "value"
    const cfg = getPayloadConfigFromPayload(config, item, key)
    const value = !labelKey && typeof label === "string"
      ? config[label]?.label || label
      : cfg?.label

    if (labelFormatter) return <div className={cn("font-medium", labelClassName)}>{labelFormatter(value, payload)}</div>
    return value ? <div className={cn("font-medium", labelClassName)}>{value}</div> : null
  }, [hideLabel, label, labelFormatter, labelClassName, payload, config, labelKey])

  if (!active || !payload?.length) return null

  const nestLabel = payload.length === 1 && indicator !== "dot"
  return (
    <div ref={ref} className={cn("grid min-w-[8rem] items-start gap-1.5 rounded-lg border bg-background px-2.5 py-1.5 text-xs shadow-xl", className)}>
      {!nestLabel && tooltipLabel}
      <div className="grid gap-1.5">
        {payload.map((item, i) => {
          const key = nameKey || item.name || item.dataKey || "value"
          const cfg = getPayloadConfigFromPayload(config, item, key)
          const indColor = color || item.payload.fill || item.color
          return (
            <div key={item.dataKey || i} className={cn("flex w-full flex-wrap gap-2", indicator === "dot" ? "items-center" : "items-stretch", "[&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground")}>
              {formatter && item.value != null && item.name
                ? formatter(item.value, item.name, item, i, item.payload)
                : (
                  <>
                    {cfg?.icon ? <cfg.icon /> : !hideIndicator && (
                      <div className={cn("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", indicator === "dot" ? "h-2.5 w-2.5" : indicator === "line" ? "w-1" : "w-0 border-[1.5px] border-dashed bg-transparent my-0.5")} style={{ "--color-bg": indColor, "--color-border": indColor }} />
                    )}
                    <div className={cn("flex flex-1 justify-between leading-none", nestLabel ? "items-end" : "items-center")}>
                      <div className="grid gap-1.5">
                        {nestLabel && tooltipLabel}
                        <span className="text-muted-foreground">{cfg?.label || item.name}</span>
                      </div>
                      {item.value != null && <span className="font-mono font-medium tabular-nums text-foreground">{item.value.toLocaleString()}</span>}
                    </div>
                  </>
                )}
            </div>
          )
        })}
      </div>
    </div>
  )
})
ChartTooltipContent.displayName = "ChartTooltipContent"

export const ChartLegendContent = forwardRef(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart()
  if (!payload?.length) return null
  return (
    <div ref={ref} className={cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className)}>
      {payload.map(item => {
        const key = nameKey || item.dataKey || "value"
        const cfg = getPayloadConfigFromPayload(config, item, key)
        return (
          <div key={item.value} className="flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground">
            {cfg?.icon && !hideIcon ? <cfg.icon /> : <div className="h-2 w-2 shrink-0 rounded-[2px]" style={{ backgroundColor: item.color }} />}
            {cfg?.label}
          </div>
        )
      })}
    </div>
  )
})
ChartLegendContent.displayName = "ChartLegendContent"

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config, payload, key) {
  const payloadObj = payload && typeof payload === "object" && payload.payload ? payload.payload : payload
  let configKey = key
  if (payload[key] && typeof payload[key] === "string") configKey = payload[key]
  else if (payloadObj[key] && typeof payloadObj[key] === "string") configKey = payloadObj[key]
  return config[configKey] || config[key]
}
