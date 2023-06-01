import React from 'react'
import { useDateRangePicker, I18nProvider } from 'react-aria'
import { useDateRangePickerState } from 'react-stately'
import cx from 'clsx'
import { FieldButton } from './Button'
import { RangeCalendar } from './RangeCalendar'
import { DateField } from './DateField'
import { Dialog } from './Dialog'
import { Popover } from './Popover'
import { CalendarIcon } from '@heroicons/react/24/outline'
import { AnimatePresence } from 'framer-motion'
import { parseDateTime, parseDate } from '@internationalized/date'

function modifyProps(props) {
  let defaultParser = ['hour', 'minute', 'second'].includes(props.granularity)
    ? parseDateTime
    : parseDate

  function parse(value) {
    return {
      start: value.start ? defaultParser(value.start) : value.start,
      end: value.end ? defaultParser(value.end) : value.end,
    }
  }
  return {
    ...props,
    isDisabled: props.disabled,
    value: props.value ? parse(props.value) : undefined,
    defaultValue: props.defaultValue ? parse(props.defaultValue) : undefined,
    onChange: props.onChange
      ? (value) =>
          props.onChange({
            start: value.start.toString(),
            end: value.end.toString(),
          })
      : undefined,
    minValue: props.minValue ? defaultParser(props.minValue) : undefined,
    maxValue: props.maxValue ? defaultParser(props.maxValue) : undefined,
  }
}

export function DateRangePicker(props) {
  const newProps = modifyProps(props)

  let state = useDateRangePickerState(newProps)
  let ref = React.useRef(null)
  let {
    groupProps,
    labelProps,
    startFieldProps,
    endFieldProps,
    buttonProps,
    dialogProps,
    calendarProps,
  } = useDateRangePicker(newProps, state, ref)

  const allError = state.validationState === 'invalid' || newProps.error

  return (
    <I18nProvider locale="en-UK">
      <div className="relative flex w-full flex-col text-left">
        <div {...labelProps} className="mb-2 block font-medium text-gray-700">
          {newProps.label}
          {newProps.required ? (
            <span className="ml-1 text-danger-500">*</span>
          ) : null}
        </div>
        <div
          {...groupProps}
          ref={ref}
          className={cx(
            'flex items-center justify-center rounded border ',
            'h-10',
            'focus-within:ring-2  focus-within:ring-opacity-25',
            {
              'cursor-not-allowed bg-gray-100 opacity-75': newProps.isDisabled,
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
            },
          )}
        >
          <div className="flex flex-1 px-2">
            <DateField {...startFieldProps} />
            <span aria-hidden="true" className="px-2">
              –
            </span>
            <DateField {...endFieldProps} />
          </div>
          <FieldButton
            isDisabled={newProps.isDisabled}
            {...buttonProps}
            isPressed={state.isOpen}
          >
            <CalendarIcon className="h-4 w-4 text-gray-700"></CalendarIcon>
          </FieldButton>
        </div>
        <AnimatePresence>
          {state.isOpen && (
            <Popover state={state} triggerRef={ref} placement="bottom start">
              <Dialog {...dialogProps}>
                <RangeCalendar
                  multiCalendar={newProps.multiCalendar}
                  {...calendarProps}
                />
              </Dialog>
            </Popover>
          )}
        </AnimatePresence>
      </div>
    </I18nProvider>
  )
}
