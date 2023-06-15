"use client"
import { useRef } from 'react'
import { useDateFieldState } from 'react-stately'
import {
  AriaDateFieldProps,
  DateValue,
  useDateField,
  useDateSegment,
  useLocale,
} from 'react-aria'
import { createCalendar } from '@internationalized/date'
import type { DateSegment, DateFieldState } from 'react-stately'
import cx from 'clsx'

export function DateField<T extends DateValue>(props: AriaDateFieldProps<T>) {
  const { locale } = useLocale()
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  })

  const ref = useRef<HTMLDivElement>(null)
  const { fieldProps } = useDateField(props, state, ref)

  return (
    <div {...fieldProps} ref={ref} className="flex">
      {state.segments.map((segment, i) => (
        <DateSegment key={i} segment={segment} state={state} />
      ))}
    </div>
  )
}
function DateSegment({
  segment,
  state,
}: {
  segment: DateSegment
  state: DateFieldState
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { segmentProps } = useDateSegment(segment, state, ref)

  return (
    <div
      {...segmentProps}
      ref={ref}
      style={{
        ...segmentProps.style,
      }}
      className={cx(
        'group box-content  leading-none outline-none ',
        'py-1  focus:bg-primary-500 focus:text-white',
        'text-right text-sm tabular-nums',
        {
          'text-gray-500': !segment.isEditable,
          'text-gray-800': segment.isEditable,
        }
      )}
    >
      {/* Always reserve space for the placeholder, to prevent layout shift when editing. */}

      {segment.isPlaceholder ? segment.placeholder : segment.text}
    </div>
  )
}
