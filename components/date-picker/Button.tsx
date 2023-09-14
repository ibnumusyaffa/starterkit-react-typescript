'use client'

import React, { useRef } from 'react'
import cx from 'clsx'
import {
  AriaButtonProps,
  mergeProps,
  useButton,
  useFocusRing,
} from 'react-aria'

export function CalendarButton(props: AriaButtonProps<'button'>) {
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, ref)
  const { focusProps, isFocused } = useFocusRing()
  return (
    <button
      {...mergeProps(buttonProps, focusProps)}
      ref={ref}
      className={cx(
        'shadow-xs flex h-6 w-6 items-center justify-center rounded border border-gray-300 bg-white',
        {
          'hover:bg-primary-50 active:bg-primary-100': !props.isDisabled,
          'cursor-not-allowed opacity-30': props.isDisabled,
          'outline-none ring-2 ring-primary-500 ring-opacity-20': isFocused,
        }
      )}
    >
      {props.children}
    </button>
  )
}

export function FieldButton(props: AriaButtonProps<'button'>) {
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, ref)
  return (
    <button
      {...buttonProps}
      ref={ref}
      className={cx('h-8 rounded px-2 outline-none', {
        'hover:bg-gray-100  active:bg-gray-200': !props.isDisabled,
        'cursor-not-allowed opacity-50': props.isDisabled,
      })}
    >
      {props.children}
    </button>
  )
}
