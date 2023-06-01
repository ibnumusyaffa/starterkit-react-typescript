import { useRef } from 'react'
import { useDateFieldState } from 'react-stately'
import { useDateField, useDateSegment, useLocale } from 'react-aria'
import { createCalendar } from '@internationalized/date'
import cx from 'clsx'

export function DateField(props) {
  let { locale } = useLocale()
  let state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  })

  let ref = useRef()
  let { fieldProps } = useDateField(props, state, ref)

  return (
    <div {...fieldProps} ref={ref} className="flex">
      {state.segments.map((segment, i) => (
        <DateSegment key={i} segment={segment} state={state} />
      ))}
    </div>
  )
}
function DateSegment({ segment, state }) {
  let ref = useRef()
  let { segmentProps } = useDateSegment(segment, state, ref)

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
        },
      )}
    >
      {/* Always reserve space for the placeholder, to prevent layout shift when editing. */}

      {segment.isPlaceholder ? segment.placeholder : segment.text}
    </div>
  )
}
