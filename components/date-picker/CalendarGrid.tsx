"use client"
import React from 'react'
import { useCalendarGrid, useLocale } from 'react-aria'
import {
  getWeeksInMonth,
  endOfMonth,
  DateDuration,
} from '@internationalized/date'
import { CalendarCell } from './CalendarCell'
import { CalendarState, RangeCalendarState } from 'react-stately'

export function CalendarGrid({
  state,
  offset = {},
}: {
  state: CalendarState | RangeCalendarState
  offset?: DateDuration
}) {
  const { locale } = useLocale()
  const startDate = state.visibleRange.start.add(offset)
  const endDate = endOfMonth(startDate)

  const { gridProps, headerProps, weekDays } = useCalendarGrid(
    {
      startDate,
      endDate,
    },
    state
  )

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale)

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
        {[...new Array(weeksInMonth)].map((_, weekIndex) => (
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
                )
              )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
