// components/ui/date-picker.jsx
'use client'
import React from 'react'
import ReactDatePicker from 'react-datepicker'
import { registerLocale } from 'react-datepicker'
import ar from 'date-fns/locale/ar'
import 'react-datepicker/dist/react-datepicker.css'

registerLocale('ar', ar)

const isValidDate = (date) => {
  return date && date instanceof Date && !isNaN(date)
}

export const DatePicker = ({ 
  selected,
  onSelect,
  mode = 'single',
  ...props 
}) => {
  const handleDateChange = (date) => {
    if (!date) {
      onSelect(mode === 'range' ? { start: null, end: null } : null)
      return
    }

    if (mode === 'range') {
      const [start = null, end = null] = Array.isArray(date) ? date : []
      onSelect({
        start: isValidDate(start) ? start : null,
        end: isValidDate(end) ? end : null
      })
    } else {
      onSelect(isValidDate(date) ? date : null)
    }
  }

  const dateFormat = mode === 'range' ? 'dd/MM/yyyy' : 'dd/MM/yyyy HH:mm'

  return (
    <ReactDatePicker
      selectsRange={mode === 'range'}
      selected={mode === 'range' ? selected?.start : selected}
      startDate={mode === 'range' ? selected?.start : null}
      endDate={mode === 'range' ? selected?.end : null}
      onChange={handleDateChange}
      locale="ar"
      dateFormat={dateFormat}
      isClearable
      className="w-full p-2 border rounded-md text-sm
                dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      calendarClassName="font-sans rtl:right-0 ltr:left-0 
                        dark:bg-slate-800 dark:text-slate-200
                        border border-slate-200 dark:border-slate-700"
      popperPlacement="auto"
      showTimeInput={mode !== 'range'}
      {...props}
    />
  )
}