import { AriaButtonProps, AriaNumberFieldProps, useButton } from 'react-aria'
import React, { useRef, useState } from 'react'
import { useNumberFieldState } from 'react-stately'
import { useLocale, useNumberField, useFocusWithin } from 'react-aria'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import cx from 'clsx'

function Button(props: AriaButtonProps<'button'>) {
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, ref)
  const { children } = props

  return (
    <button
      {...buttonProps}
      ref={ref}
      className="h-full w-6 leading-none flex items-center justify-center disabled:opacity-50 disabled:bg-gray-100 active:bg-gray-100"
    >
      {children}
    </button>
  )
}

type InputNumberProps = AriaNumberFieldProps & {
  hideStepper?: boolean
  icon?: React.ReactNode
  error?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}
export const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  ({ error, size = 'md', icon, hideStepper, ...props }, ref) => {
    const { locale } = useLocale()
    const state = useNumberFieldState({ ...props, locale })

    const fallbackRef = useRef<HTMLInputElement>(null)
    const inputRef = (ref as React.RefObject<HTMLInputElement>) || fallbackRef

    const {
      groupProps,
      inputProps,
      incrementButtonProps,
      decrementButtonProps,
    } = useNumberField(props, state, inputRef)

    const [isFocusWithin, setFocusWithin] = useState(false)
    const { focusWithinProps } = useFocusWithin({
      onFocusWithinChange: (isFocusWithin) => setFocusWithin(isFocusWithin),
    })

    return (
      <div {...groupProps}>
        <div
          {...focusWithinProps}
          className={cx(
            'flex border rounded relative overflow-hidden text-gray-800',
            {
              'border-primary-500  ring-2 ring-primary-500 ring-opacity-25':
                isFocusWithin && !error,

              'border-danger-500  ring-2 ring-danger-500 ring-opacity-25':
                isFocusWithin && error,

              'border-gray-300': !isFocusWithin && !error,

              'border-danger-500': !isFocusWithin && error,
            },
            {
              'h-6 text-xs': size === 'xs',
              'h-8 text-sm': size === 'sm',
              'h-10 text-base': size === 'md',
              'h-12 text-lg': size === 'lg',
              'h-14 text-xl': size === 'xl',
            }
          )}
        >
          {icon ? (
            <div
              className={cx('flex items-center justify-center px-2', {
                'bg-gray-100 opacity-75': props.isDisabled,
              })}
            >
              {icon}
            </div>
          ) : null}

          <input
            {...inputProps}
            className={cx(
              'w-full border-none focus:outline-none focus:ring-0 disabled:opacity-75 disabled:bg-gray-100 ',
              {
                'px-3': !icon,
                'pl-0 pr-3': icon,
              },
              {
                'text-xs': size === 'xs',
                'text-sm': size === 'sm',
                'text-base': size === 'md',
                'text-lg': size === 'lg',
                'text-xl': size === 'xl',
              }
            )}
            ref={inputRef}
          />
          {hideStepper ? null : (
            <div className={`flex flex-col border-l border-inherit`}>
              <Button {...decrementButtonProps}>
                <ChevronUpIcon className="w-3 h-3"></ChevronUpIcon>
              </Button>
              <div className="border-t border-inherit"></div>
              <Button {...incrementButtonProps}>
                <ChevronDownIcon className="w-3 h-3"></ChevronDownIcon>
              </Button>
            </div>
          )}
        </div>
      </div>
    )
  }
)

InputNumber.displayName = 'InputNumber'
