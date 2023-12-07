import React, { useRef, useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import cx from '@/lib/cx'
import {
  AriaButtonProps,
  AriaNumberFieldProps,
  useButton,
  useFocusWithin,
  useLocale,
  useNumberField,
} from 'react-aria'
import { useNumberFieldState } from 'react-stately'

function Button(props: AriaButtonProps<'button'>) {
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, ref)
  const { children } = props

  return (
    <button
      {...buttonProps}
      ref={ref}
      className="flex h-full w-6 items-center justify-center leading-none active:bg-gray-100 disabled:bg-gray-100 disabled:opacity-50"
    >
      {children}
    </button>
  )
}

type InputNumberProps = AriaNumberFieldProps & {
  hideStepper?: boolean
  icon?: React.ReactNode
  error?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  locale?: string
}
export const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  ({ error, size = 'md', icon, hideStepper, locale, ...props }, ref) => {
    const defaultLocale = useLocale()
    const state = useNumberFieldState({
      ...props,
      locale: locale ? locale : defaultLocale.locale,
    })

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
            'relative flex overflow-hidden rounded border text-gray-800',
            {
              'border-primary-500  ring-2 ring-primary-500 ring-opacity-25':
                isFocusWithin && !error,

              'border-danger-500  ring-2 ring-danger-500 ring-opacity-25':
                isFocusWithin && error,

              'border-gray-300': !isFocusWithin && !error,

              'border-danger-500': !isFocusWithin && error,
            },
            {
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
              'w-full border-none focus:outline-none focus:ring-0 disabled:bg-gray-100 disabled:opacity-75 ',
              {
                'px-3': !icon,
                'pl-0 pr-3': icon,
              },
              {
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
              <Button {...incrementButtonProps}>
                <ChevronUpIcon
                  className={cx({
                    'h-2.5 w-2.5': size === 'sm',
                    'h-3 w-3': size === 'md',
                    'h-4 w-4': size === 'xl' || size === 'lg',
                  })}
                ></ChevronUpIcon>
              </Button>
              <div className="border-t border-inherit"></div>
              <Button {...decrementButtonProps}>
                <ChevronDownIcon
                  className={cx({
                    'h-2.5 w-2.5': size === 'sm',
                    'h-3 w-3': size === 'md',
                    'h-4 w-4': size === 'xl' || size === 'lg',
                  })}
                ></ChevronDownIcon>
              </Button>
            </div>
          )}
        </div>
      </div>
    )
  }
)

InputNumber.displayName = 'InputNumber'
