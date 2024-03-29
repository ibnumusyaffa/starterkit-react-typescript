'use client'

import React, { useContext } from 'react'
import cx from '@/lib/cx'

import { InputGroupCtx } from '@/components/input/Input'

export type Variant = 'filled' | 'outline'

export type NativeSelectProps = Omit<React.ComponentProps<'select'>, 'size'> & {
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg' | 'xl'

  /** @default "outline" */
  variant?: Variant

  children?: React.ReactNode
  leftIcon?: React.ReactNode

  /** @default false */
  fullWidth?: boolean

  /** @default false */
  disabled?: boolean

  /** @default false */
  error?: boolean
}

function DefaultContainer({
  children,
  fullWidth,
}: {
  children: React.ReactNode
  fullWidth?: boolean
}) {
  return (
    <div
      className={cx('relative flex', {
        'w-full': fullWidth,
      })}
    >
      {children}
    </div>
  )
}

export const NativeSelect = React.forwardRef<
  HTMLSelectElement,
  NativeSelectProps
>(function NativeSelect(
  {
    error,
    disabled,
    leftIcon,
    size = 'md',
    variant = 'outline',
    children,
    fullWidth,
    ...props
  },
  ref
) {
  const isGroup = useContext(InputGroupCtx)
  const Root = isGroup ? React.Fragment : DefaultContainer

  return (
    <Root fullWidth={isGroup ? fullWidth : undefined}>
      {leftIcon ? (
        <div className="leading-1 absolute left-0 top-0 z-20 flex h-full items-center justify-center px-2 text-gray-700">
          <div>{leftIcon}</div>
        </div>
      ) : null}

      <select
        {...props}
        data-error={error}
        ref={ref}
        disabled={disabled}
        className={cx(
          // base style
          'form-select rounded pr-10 leading-tight text-gray-800',
          '!py-0 focus:border-primary-500 focus:outline-none focus:ring-primary-500 focus:ring-opacity-25',

          {
            //disable w-full when is group
            'w-full': fullWidth,
          },
          // variant style
          {
            'border-0 bg-gray-100 focus:border focus:ring-2':
              variant === 'filled',
            'bg-white-100 border border-gray-300 focus:ring-2':
              variant === 'outline',

            'cursor-not-allowed bg-gray-100 opacity-75': disabled,
          },
          'data-[error=true]:border data-[error=true]:border-danger-500 data-[error=true]:focus:ring-danger-500 data-[error=true]:focus:ring-opacity-25',
          //size style
          {
            'h-8 text-sm': size === 'sm',
            'h-10 text-base': size === 'md',
            'h-12 text-lg': size === 'lg',
            'h-14 text-xl': size === 'xl',
          },
          {
            //add padding to left side when leftIcon is true

            'pl-8': size === 'sm' && leftIcon,
            'pl-9': size === 'md' && leftIcon,
            'pl-10': size === 'lg' && leftIcon,
            'pl-11': size === 'xl' && leftIcon,
          },

          // group
          'group-[.is-group]:focus:z-10',
          'group-[.is-group]:first:!rounded-r-none',
          'group-[.is-group]:[&:not(:first-child):not(:last-child)]:!rounded-none',
          'group-[.is-group]:last:!rounded-l-none',

          // 'group-[.is-group]:[&:not(:first-child):not(:last-child)]:!border-l-0',
          // 'group-[.is-group]:last:!border-l-0'

          'group-[.is-group]:[&:not(:first-child):not(:last-child)]:!-mr-[1px]',
          'group-[.is-group]:last:!-ml-[1px]',
          'group-[.is-group]:first:!-mr-[1px]'
        )}
      >
        {children}
      </select>
    </Root>
  )
})
