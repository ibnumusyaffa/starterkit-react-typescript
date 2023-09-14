'use client'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { GregorianCalendar } from '@internationalized/date'
import { CalendarProps, DateValue, useCalendar, useLocale } from 'react-aria'
import { useCalendarState } from 'react-stately'

import { CalendarButton } from './Button'
import { CalendarGrid } from './CalendarGrid'

function createCalendar(identifier: string) {
  switch (identifier) {
    case 'gregory':
      return new GregorianCalendar()
    default:
      throw new Error(`Unsupported calendar ${identifier}`)
  }
}

export function Calendar<T extends DateValue>(props: CalendarProps<T>) {
  const { locale } = useLocale()
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  })

  const { calendarProps, prevButtonProps, nextButtonProps, title } =
    useCalendar(props, state)

  return (
    <div {...calendarProps} className="px-3.5 py-3.5">
      <div className="mb-5 flex items-center justify-between space-x-1">
        <CalendarButton {...prevButtonProps}>
          <ChevronLeftIcon className="h-4 w-4 text-gray-600"></ChevronLeftIcon>
        </CalendarButton>
        <h2 className="flex flex-1 items-center justify-center text-sm font-medium text-gray-800">
          {title}
        </h2>
        <CalendarButton {...nextButtonProps}>
          <ChevronRightIcon className="h-4 w-4 text-gray-600"></ChevronRightIcon>
        </CalendarButton>
      </div>
      <CalendarGrid state={state} />
    </div>
  )
}
