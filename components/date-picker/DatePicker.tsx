"use client"
import React from 'react'
import { useDatePicker, I18nProvider, AriaDatePickerProps } from 'react-aria'
import { useDatePickerState } from 'react-stately'
import cx from 'clsx'
import { FieldButton } from './Button'
import { Calendar } from './Calendar'
import { DateField } from './DateField'
import { Dialog } from './Dialog'
import { Popover } from './Popover'
import { CalendarIcon } from '@heroicons/react/24/outline'
import { AnimatePresence } from 'framer-motion'
import { DateValue } from '@internationalized/date'


export function DatePicker<T extends DateValue>(
  props: AriaDatePickerProps<T> & { error?: boolean; required?: boolean }
) {
  const state = useDatePickerState(props)
  const ref = React.useRef(null)
  const {
    groupProps,
    labelProps,
    fieldProps,
    buttonProps,
    dialogProps,
    calendarProps,
  } = useDatePicker(props, state, ref)

  const allError = state.validationState === 'invalid' || props.error

  return (
    <I18nProvider locale="en-UK">
      <div className="relative flex w-full flex-col text-left">
        <div {...labelProps} className="mb-2 block font-medium text-gray-700">
          {props.label}
          {props.required ? (
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
          <div className="flex-1 px-2">
            <DateField {...fieldProps} />
          </div>
          <FieldButton isDisabled={props.isDisabled} {...buttonProps}>
            <CalendarIcon className="h-4 w-4 text-gray-700"></CalendarIcon>
          </FieldButton>
        </div>
        <AnimatePresence>
          {state.isOpen && (
            <Popover state={state} triggerRef={ref} placement="bottom start">
              <Dialog {...dialogProps}>
                <Calendar {...calendarProps} />
              </Dialog>
            </Popover>
          )}
        </AnimatePresence>
      </div>
    </I18nProvider>
  )
}
