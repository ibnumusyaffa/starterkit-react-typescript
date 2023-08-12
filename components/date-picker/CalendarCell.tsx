'use client'
/* eslint-disable prefer-const */
import React from 'react'
import {
  useCalendarCell,
  useLocale,
  useFocusRing,
  mergeProps,
} from 'react-aria'
import {
  isWeekend,
  isSameDay,
  getDayOfWeek,
  isSameMonth,
  CalendarDate,
  DateValue,
} from '@internationalized/date'
import cx from 'clsx'
import type { CalendarState, RangeCalendarState } from 'react-stately'
export function CalendarCell({
  state,
  date,
  currentMonth,
}: {
  date: CalendarDate
  state: CalendarState | RangeCalendarState
  currentMonth: DateValue
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const { locale } = useLocale()
  const {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate,
  } = useCalendarCell({ date }, state, ref)

  const allDisabled = isDisabled || isUnavailable || isOutsideVisibleRange

  // The start and end date of the selected range will have
  // an emphasized appearance.
  let isSelectionStart = false
  let isSelectionEnd = false
  let isRange = 'highlightedRange' in state && state.highlightedRange ? true :false
  if ('highlightedRange' in state && state.highlightedRange) {
    isRange = true
    isSelectionStart = isSameDay(date, state.highlightedRange.start)
    isSelectionEnd = isSameDay(date, state.highlightedRange.end)
  }

  const dayOfWeek = getDayOfWeek(date, locale)


  const isRoundedLeft =
    isSelected && (isSelectionStart || dayOfWeek === 0 || date.day === 1)
  const isRoundedRight =
    isSelected &&
    (isSelectionEnd ||
      dayOfWeek === 6 ||
      date.day === date.calendar.getDaysInMonth(date))

  const { focusProps, isFocusVisible, isFocused } = useFocusRing()

  const isOutsideMonth = !isSameMonth(currentMonth, date)

  return (
    <td
      {...cellProps}
      className={cx('relative py-0.5', {
        'z-10': isFocusVisible || isFocused,
      })}
    >
      <div
        {...mergeProps(buttonProps, focusProps)}
        ref={ref}
        className={cx('group h-8 w-8 outline-none', {
          'bg-primary-100': isSelected,
          '!hidden': isOutsideVisibleRange || isOutsideMonth,
          'rounded-l': isRoundedLeft,
          'rounded-r': isRoundedRight,
        })}
      >
        <div
          className={cx(
            'flex h-full w-full items-center justify-center rounded text-sm',
            {
              'ring-2 ring-primary-300  group-focus:z-10 ring-offset-1':
                isFocusVisible || isFocused,

              //selected in start or end
              'bg-primary-500 hover:bg-primary-600 text-white':
                (isSelected && !isRange) || isSelectionStart || isSelectionEnd,

              //selected but not in start or end
              'hover:bg-primary-200':
                isSelected && isRange && !(isSelectionStart || isSelectionEnd),

              'text-gray-700 hover:bg-gray-100': !allDisabled && !isSelected,
              'cursor-default text-gray-300': allDisabled,

              'text-red-600': isWeekend(date, locale) && !allDisabled,
            }
          )}
        >
          {formattedDate}
        </div>
      </div>
    </td>
  )
}
