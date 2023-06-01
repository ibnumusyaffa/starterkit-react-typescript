import React from 'react'
import { useCalendarGrid, useLocale } from 'react-aria'
import { getWeeksInMonth, endOfMonth } from '@internationalized/date'
import { CalendarCell } from './CalendarCell'

export function CalendarGrid({ state, offset = {} }) {
  let { locale } = useLocale()
  let startDate = state.visibleRange.start.add(offset)
  let endDate = endOfMonth(startDate)

  let { gridProps, headerProps, weekDays } = useCalendarGrid(
    {
      startDate,
      endDate,
    },
    state,
  )

  // Get the number of weeks in the month so we can render the proper number of rows.
  let weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale)

  return (
    <table {...gridProps} cellPadding="0">
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <th
              className="pb-0.5 text-sm font-medium text-gray-500"
              key={index}
            >
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex, startDate)
              .map((date, i) =>
                date ? (
                  <CalendarCell
                    key={i}
                    state={state}
                    date={date}
                    currentMonth={startDate}
                  />
                ) : (
                  <td key={i} />
                ),
              )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
