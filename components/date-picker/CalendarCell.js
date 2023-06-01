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
} from '@internationalized/date'
import cx from 'clsx'
export function CalendarCell({ state, date, currentMonth }) {
  let ref = React.useRef(null)
  let { locale } = useLocale()
  let {
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
  let isSelectionStart = state.highlightedRange
    ? isSameDay(date, state.highlightedRange.start)
    : isSelected
  let isSelectionEnd = state.highlightedRange
    ? isSameDay(date, state.highlightedRange.end)
    : isSelected

  let dayOfWeek = getDayOfWeek(date, locale)
  let isRoundedLeft =
    isSelected && (isSelectionStart || dayOfWeek === 0 || date.day === 1)
  let isRoundedRight =
    isSelected &&
    (isSelectionEnd ||
      dayOfWeek === 6 ||
      date.day === date.calendar.getDaysInMonth(date))

  let { focusProps, isFocusVisible, isFocused } = useFocusRing()

  let isOutsideMonth = !isSameMonth(currentMonth, date)

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
          'bg-primary-50': isSelected,
          '!hidden': isOutsideVisibleRange || isOutsideMonth,
          'rounded-l': isRoundedLeft,
          'rounded-r': isRoundedRight,
        })}
      >
        <div
          className={cx(
            'flex h-full w-full items-center justify-center rounded text-sm',
            {
              'ring-2 ring-primary-300  group-focus:z-10':
                isFocusVisible || isFocused,
              'text-gray-700 hover:bg-gray-100': !allDisabled && !isSelected,
              'cursor-default text-gray-300': allDisabled,
              'text-red-600': isWeekend(date, locale) && !allDisabled,
              'bg-primary-500 text-white': isSelectionStart || isSelectionEnd,
            },
          )}
        >
          {formattedDate}
        </div>
      </div>
    </td>
  )
}
