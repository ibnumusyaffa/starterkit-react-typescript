'use client'

import React, { forwardRef } from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import cx from 'clsx'

import { Spinner } from '@/components/spinner'

import { Color, Variant } from './button-types'

export type ButtonProps = React.ComponentProps<'button'> & {
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg' | 'xl'

  /** @default "solid" */
  variant?: Variant

  /** @default "primary" */
  color?: Color

  children?: React.ReactNode
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode

  /** @default false */
  fullWidth?: boolean

  /** @default false */
  loading?: boolean

  /** @default false */
  disabled?: boolean

  /** @default false */
  asChild?: boolean
}

function variantStyles({
  variant,
  color,
}: {
  variant: Variant
  color: Color
}): object | string {
  if (variant === 'solid') {
    return {
      'focus:ring text-white focus:ring-opacity-40': true,
      'bg-primary-500 enabled:hover:bg-primary-600 enabled:active:bg-primary-700  focus:ring-primary-400':
        color === 'primary',
      'bg-secondary-500 enabled:hover:bg-secondary-600 enabled:active:bg-secondary-700  focus:ring-secondary-400':
        color === 'secondary',
      'bg-success-500 enabled:hover:bg-success-600 enabled:active:bg-success-700  focus:ring-success-400':
        color === 'success',
      'bg-warning-500 enabled:hover:bg-warning-600 enabled:active:bg-warning-700  focus:ring-warning-400':
        color === 'warning',
      'bg-info-500 enabled:hover:bg-info-600 enabled:active:bg-info-700  focus:ring-info-400':
        color === 'info',
      'bg-danger-500 enabled:hover:bg-danger-600 enabled:active:bg-danger-700  focus:ring-danger-400':
        color === 'danger',
    }
  }

  if (variant === 'light') {
    return {
      'focus:ring-2 focus:ring-offset-2  focus:ring-opacity-50': true,
      'bg-primary-50 enabled:hover:bg-primary-100 enabled:active:bg-primary-200 focus:ring-primary-300 text-primary-600':
        color === 'primary',
      'bg-secondary-50 enabled:hover:bg-secondary-100 enabled:active:bg-secondary-200 focus:ring-secondary-300 text-secondary-600':
        color === 'secondary',
      'bg-success-50 enabled:hover:bg-success-100 enabled:active:bg-success-200 focus:ring-success-300 text-success-600':
        color === 'success',
      'bg-warning-50 enabled:hover:bg-warning-100 enabled:active:bg-warning-200 focus:ring-warning-300 text-warning-600':
        color === 'warning',
      'bg-info-50 enabled:hover:bg-info-100 enabled:active:bg-info-200 focus:ring-info-300 text-info-600':
        color === 'info',
      'bg-danger-50 enabled:hover:bg-danger-100 enabled:active:bg-danger-200 focus:ring-danger-300 text-danger-600':
        color === 'danger',
    }
  }

  if (variant === 'default') {
    return 'enabled:hover:bg-gray-50 enabled:active:bg-gray-100 bg-white focus:ring-2 focus:border-primary-300 focus:ring-primary-500 focus:ring-opacity-25 text-gray-700 border border-gray-300 shadow-xs'
  }

  if (variant === 'outline') {
    return {
      'focus:ring focus:ring-opacity-40 bg-white': true,
      'enabled:hover:bg-primary-50 enabled:active:bg-primary-100 focus:ring-primary-200 text-primary-600 border border-primary-600':
        color === 'primary',
      'enabled:hover:bg-secondary-50 enabled:active:bg-secondary-100 focus:ring-secondary-200 text-secondary-600 border border-secondary-600':
        color === 'secondary',
      'enabled:hover:bg-success-50 enabled:active:bg-success-100 focus:ring-success-200 text-success-600 border border-success-600':
        color === 'success',
      'enabled:hover:bg-warning-50 enabled:active:bg-warning-100 focus:ring-warning-200 text-warning-600 border border-warning-600':
        color === 'warning',
      'enabled:hover:bg-info-50 enabled:active:bg-info-100 focus:ring-info-200 text-info-600 border border-info-600':
        color === 'info',
      'enabled:hover:bg-danger-50 enabled:active:bg-danger-100 focus:ring-danger-200 text-danger-600 border border-danger-600':
        color === 'danger',
    }
  }

  if (variant === 'subtle') {
    return {
      'focus:ring-2 focus:ring-offset-2 focus:ring-opacity-40': true,
      'enabled:hover:bg-primary-50 enabled:active:bg-primary-100 focus:ring-primary-300 text-primary-600':
        color === 'primary',
      'enabled:hover:bg-secondary-50 enabled:active:bg-secondary-100 focus:ring-secondary-300 text-secondary-600':
        color === 'secondary',
      'enabled:hover:bg-success-50 enabled:active:bg-success-100 focus:ring-success-300 text-success-600':
        color === 'success',
      'enabled:hover:bg-warning-50 enabled:active:bg-warning-100 focus:ring-warning-300 text-warning-600':
        color === 'warning',
      'enabled:hover:bg-info-50 enabled:active:bg-info-100 focus:ring-info-300 text-info-600':
        color === 'info',
      'enabled:hover:bg-danger-50 enabled:active:bg-danger-100 focus:ring-danger-300 text-danger-600':
        color === 'danger',
    }
  }

  return ''
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = 'md',
      variant = 'solid',
      color = 'primary',
      children,
      leftIcon,
      rightIcon,
      fullWidth = false,
      loading = false,
      disabled = false,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : 'button'

    const buttonStyle = cx(
      // base style
      'inline-flex items-center justify-center px-3 focus:outline-none font-medium rounded',
      {
        'opacity-50 cursor-not-allowed': disabled,
        'cursor-not-allowed': loading,
        'w-full': fullWidth,
      },
      variantStyles({ variant, color }),
      // size style
      {
        'h-8 text-sm': size === 'sm',
        'h-10 text-base': size === 'md',
        'h-12 text-lg': size === 'lg',
        'h-14 text-xl': size === 'xl',
      },

      //button group
      'group-[.is-group]:focus:z-10',
      'group-[.is-group]:first:!rounded-r-none',
      'group-[.is-group]:[&:not(:first-child):not(:last-child)]:!rounded-none',
      'group-[.is-group]:last:!rounded-l-none',

      'group-[.is-group]:[&:not(:first-child):not(:last-child)]:!border-l-0',
      'group-[.is-group]:last:!border-l-0'
    )

    return (
      <Component
        {...props}
        ref={ref}
        disabled={disabled || loading}
        className={buttonStyle}
      >
        {loading ? (
          <Spinner
            className={cx('mr-2', {
              'h-4 w-4': size === 'sm',
              'h-5 w-5': size === 'md',
              'h-6 w-6': size === 'lg',
              'h-7 w-7': size === 'xl',
            })}
          ></Spinner>
        ) : null}
        {leftIcon && !loading ? <div className="mr-2">{leftIcon}</div> : null}
        {children ? <Slottable>{children}</Slottable> : null}
        {rightIcon ? <div className="ml-2">{rightIcon}</div> : null}
      </Component>
    )
  }
)

Button.displayName = 'Button'

export function ButtonGroup({ children }: { children: React.ReactNode }) {
  return <div className="is-group group relative flex">{children}</div>
}
