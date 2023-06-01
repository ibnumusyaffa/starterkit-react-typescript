import { useCalendar, useLocale } from 'react-aria'
import { useCalendarState } from 'react-stately'
import { GregorianCalendar } from '@internationalized/date'
import { CalendarButton } from './Button'
import { CalendarGrid } from './CalendarGrid'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
} from '@heroicons/react/24/solid'

function createCalendar(identifier) {
  switch (identifier) {
    case 'gregory':
      return new GregorianCalendar()
    default:
      throw new Error(`Unsupported calendar ${identifier}`)
  }
}

export function Calendar(props) {
  let { locale } = useLocale()
  let state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  })

  let { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(
    props,
    state,
  )

  return (
    <div {...calendarProps} className="px-3.5 py-3.5">
      {/* {JSON.stringify(state)} */}
      <div className="mb-5 flex items-center justify-between space-x-1">
        <CalendarButton
          isDisabled={state.focusedDate?.year <= state.minValue?.year}
          onPress={() => state.focusPreviousSection(true)}
        >
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
        <CalendarButton
          isDisabled={state.focusedDate?.year >= state.maxValue?.year}
          onPress={() => state.focusNextSection(true)}
        >
          <ChevronDoubleRightIcon className="h-4 w-4 text-gray-600"></ChevronDoubleRightIcon>
        </CalendarButton>
      </div>
      <CalendarGrid state={state} />
    </div>
  )
}
