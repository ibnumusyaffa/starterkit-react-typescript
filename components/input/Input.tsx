'use client'

import React, { createContext, useContext } from 'react'
import cx from 'clsx'

export type InputProps = Omit<React.ComponentProps<'input'>, 'size'> & {
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg' | 'xl'

  /** @default "solid" */
  variant?: 'filled' | 'outline'

  children?: React.ReactNode
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode

  /** @default false */
  error?: boolean
}

export const InputGroupCtx = createContext(false)

function DefaultContainer({ children }: { children: React.ReactNode }) {
  return <div className="relative flex w-full">{children}</div>
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      error,
      disabled,
      leftIcon,
      rightIcon,
      size = 'md',
      variant = 'outline',
      ...props
    },
    ref
  ) => {
    const isGroup = useContext(InputGroupCtx)
    const Root = isGroup ? React.Fragment : DefaultContainer
    return (
      <Root>
        {leftIcon ? (
          <div className="leading-1 absolute left-0 top-0 z-10 flex h-full items-center justify-center px-2 text-gray-600">
            {leftIcon}
          </div>
        ) : null}

        <input
          {...props}
          data-error={error}
          ref={ref}
          disabled={disabled}
          className={cx(
            // base style
            'form-input w-full rounded text-gray-800',
            'focus:border-primary-500 focus:outline-none focus:ring-primary-500 focus:ring-opacity-25',

            //type="file"
            'file:-ml-3 file:mr-3 file:h-full !py-0',
            'file:px-4 file:py-2',
            'file:font-medium file:leading-none file:text-gray-700',
            'file:border-0 file:bg-gray-100 file:ring-1 file:ring-gray-300 ',

            'data-[error]:border-danger-500 data-[error]:focus:ring-danger-500 data-[error]:focus:ring-opacity-25',

            // variant style
            {
              'border-0 bg-gray-100 focus:border focus:border-gray-300 focus:bg-white focus:ring-2':
                variant === 'filled',
              'bg-white-100 border border-gray-300 focus:ring-2':
                variant === 'outline',
              'cursor-not-allowed bg-gray-100 opacity-75': disabled,
            },
            //size style
            {
              'h-8 text-sm file:text-sm': size === 'sm',
              'h-10 text-base file:text-base': size === 'md',
              'h-12 text-lg file:text-lg': size === 'lg',
              'h-14 text-xl file:text-xl': size === 'xl',
            },
            {
              //add padding to left side when leftIcon is true
              'pl-3': !leftIcon,

              'pl-8': size === 'sm' && leftIcon,
              'pl-9': size === 'md' && leftIcon,
              'pl-10': size === 'lg' && leftIcon,
              'pl-11': size === 'xl' && leftIcon,

              //add padding to right side when rightIcon is true
              'pr-3': !leftIcon,
              'pr-8': size === 'sm' && rightIcon,
              'pr-9': size === 'md' && rightIcon,
              'pr-10': size === 'lg' && rightIcon,
              'pr-11': size === 'xl' && rightIcon,
            },
            // group
            'group-[.is-group]:focus:z-10',
            'group-[.is-group]:first:!rounded-r-none',
            'group-[.is-group]:[&:not(:first-child):not(:last-child)]:!rounded-none',
            'group-[.is-group]:last:!rounded-l-none',

            'group-[.is-group]:[&:not(:first-child):not(:last-child)]:!border-l-0',
            'group-[.is-group]:last:!border-l-0'
          )}
        />

        {rightIcon ? (
          <div className="leading-1 absolute right-0 top-0 z-10 flex h-full items-center justify-center px-2 text-gray-600">
            {rightIcon}
          </div>
        ) : null}
      </Root>
    )
  }
)

Input.displayName = 'Input'

export function InputLeftAddon({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cx(
        'leading-1 flex items-center justify-center rounded-l text-gray-700',
        'border border-l border-gray-300 bg-gray-100 px-3'
      )}
    >
      {children}
    </div>
  )
}

export function InputRightAddon({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cx(
        'leading-1 flex items-center justify-center rounded-r text-gray-700',
        'border-y border-r border-gray-300 bg-gray-100 px-3'
      )}
    >
      {children}
    </div>
  )
}
export function InputGroup({ children }: { children: React.ReactNode }) {
  return (
    <InputGroupCtx.Provider value={true}>
      <div className="is-group group relative flex w-full">{children}</div>
    </InputGroupCtx.Provider>
  )
}
