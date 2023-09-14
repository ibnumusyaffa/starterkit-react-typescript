import { useRef } from 'react'
import { useDateSegment } from '@react-aria/datepicker'
import cx from 'clsx'
import type {
  DateFieldState,
  DateSegment as DateSegmentType,
} from 'react-stately'

export function DateSegment({
  segment,
  state,
}: {
  segment: DateSegmentType
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
