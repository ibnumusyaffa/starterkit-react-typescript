import { useRef } from 'react'
import { useRangeCalendarState } from 'react-stately'
import { useRangeCalendar, useLocale } from 'react-aria'
import { createCalendar } from '@internationalized/date'
import { CalendarButton } from './Button'
import { CalendarGrid } from './CalendarGrid'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
} from '@heroicons/react/24/solid'

export function RangeCalendar(props) {
  let { locale } = useLocale()
  let state = useRangeCalendarState({
    ...props,
    visibleDuration: { months: props.multiCalendar ? 2 : 1 },
    locale,
    createCalendar,
  })

  let ref = useRef()
  let { calendarProps, prevButtonProps, nextButtonProps, title } =
    useRangeCalendar(props, state, ref)

  return (
    <div {...calendarProps} ref={ref} className="px-5 py-5">
      <div className="mb-5 flex items-center justify-between space-x-1">
        <CalendarButton onPress={() => state.focusPreviousSection(true)}>
          <ChevronDoubleLeftIcon className="h-4 w-4 text-gray-600"></ChevronDoubleLeftIcon>
        </CalendarButton>
        <CalendarButton {...prevButtonProps}>
          <ChevronLeftIcon className="h-4 w-4 text-gray-600"></ChevronLeftIcon>
        </CalendarButton>
        <h2 className="flex flex-1 items-center justify-center text-sm font-medium text-gray-800">
          {title}
        </h2>
        <CalendarButton {...nextButtonProps}>
          <ChevronRightIcon className="h-4 w-4 text-gray-600"></ChevronRightIcon>
        </CalendarButton>
        <CalendarButton onPress={() => state.focusNextSection(true)}>
          <ChevronDoubleRightIcon className="h-4 w-4 text-gray-600"></ChevronDoubleRightIcon>
        </CalendarButton>
      </div>
      <div className="flex gap-5">
        <CalendarGrid state={state} />
        {props.multiCalendar ? (
          <CalendarGrid state={state} offset={{ months: 1 }} />
        ) : null}
      </div>
    </div>
  )
}