import { useRef } from 'react'
import cx from '@/lib/cx'
import { useTimeField } from '@react-aria/datepicker'
import { useLocale } from '@react-aria/i18n'
import { useTimeFieldState } from '@react-stately/datepicker'
import { AriaTimeFieldProps, TimeValue } from 'react-aria'

import { DateSegment } from './DateSegment'

type InputTimeProps = AriaTimeFieldProps<TimeValue> & {
  error?: boolean
  required?: boolean
}

export function InputTime(props: InputTimeProps) {
  const { locale } = useLocale()
  const state = useTimeFieldState({
    ...props,
    locale,
  })

  const ref = useRef<HTMLDivElement>(null)
  const { fieldProps } = useTimeField(props, state, ref)
  const allError = state.isInvalid || props.error
  return (
    <div className="relative flex w-full flex-col text-left">
      <div
        {...fieldProps}
        ref={ref}
        className={cx(
          'flex items-center justify-start rounded border px-2',
          'h-10',
          'focus-within:ring-2  focus-within:ring-opacity-25',
          {
            'cursor-not-allowed bg-gray-100 opacity-75': props.isDisabled,
          },
          {
            'border-gray-300': !allError,
            'border-danger-500': allError,
          },
          {
            'focus-within:border-danger-500 focus-within:ring-danger-500':
              allError,
            'focus-within:border-primary-500 focus-within:ring-primary-500':
              !allError,
          }
        )}
      >
        {state.segments.map((segment, i) => (
          <DateSegment key={i} segment={segment} state={state} />
        ))}
      </div>
    </div>
  )
}
