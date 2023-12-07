'use client'

import React, { forwardRef } from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import cx from '@/lib/cx'

export type Variant = 'solid' | 'light' | 'light-outline' | 'outline'

export type Color =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'info'
  | 'danger'
  | 'neutral'

function variantStyles({
  variant,
  color,
}: {
  variant: Variant
  color: Color
}): object | string {
  switch (variant) {
    case 'solid':
      return {
        'bg-primary-500 text-white': color === 'primary',
        'bg-secondary-500 text-white': color === 'secondary',
        'bg-success-500 text-white': color === 'success',
        'bg-warning-500 text-white': color === 'warning',
        'bg-info-500 text-white': color === 'info',
        'bg-danger-500 text-white': color === 'danger',
        'bg-gray-500 text-white': color === 'neutral',
      }
    case 'light':
      return {
        'bg-primary-100 text-primary-700': color === 'primary',
        'bg-secondary-100 text-secondary-700': color === 'secondary',
        'bg-success-100 text-success-700': color === 'success',
        'bg-warning-100 text-warning-700': color === 'warning',
        'bg-info-100 text-info-700': color === 'info',
        'bg-danger-100 text-danger-700': color === 'danger',
        'bg-gray-100 text-gray-700': color === 'neutral',
      }
    case 'light-outline':
      return {
        'text-primary-600 bg-primary-50 border border-primary-300':
          color === 'primary',
        'text-secondary-600 bg-secondary-50  border border-secondary-300':
          color === 'secondary',
        'text-success-600 bg-success-50  border border-success-300':
          color === 'success',
        'text-warning-600 bg-warning-50  border border-warning-300':
          color === 'warning',
        'text-info-600 bg-info-50  border border-info-300': color === 'info',
        'text-danger-600 bg-danger-50  border border-danger-300':
          color === 'danger',
        'text-gray-600 bg-neutral-50  border border-gray-300':
          color === 'neutral',
      }
    case 'outline':
      return {
        'text-primary-600 border border-primary-600': color === 'primary',
        'text-secondary-600 border border-secondary-600': color === 'secondary',
        'text-success-600 border border-success-600': color === 'success',
        'text-warning-600 border border-warning-600': color === 'warning',
        'text-info-600 border border-info-600': color === 'info',
        'text-danger-600 border border-danger-600': color === 'danger',
        'text-gray-600 border border-gray-600': color === 'neutral',
      }
    default:
      return ''
  }
}

function dotStyles({
  variant,
  color,
}: {
  variant: Variant
  color: Color
}): object | string {
  switch (variant) {
    case 'solid':
      return {
        'bg-white': true,
      }
    case 'light':
    case 'outline':
    case 'light-outline':
      return {
        'bg-primary-500': color === 'primary',
        'bg-secondary-500': color === 'secondary',
        'bg-success-500': color === 'success',
        'bg-warning-500': color === 'warning',
        'bg-info-500': color === 'info',
        'bg-danger-500': color === 'danger',
        'bg-gray-500': color === 'neutral',
      }
    default:
      return ''
  }
}

type BadgeProps = React.ComponentPropsWithoutRef<'span'> & {
  /** @default "md" */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

  /** @default "md" */
  rounded?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'none'

  /** @default "solid" */
  variant?: Variant

  /** @default "primary" */
  color?: Color

  children?: React.ReactNode
  leftSection?: React.ReactNode
  rightSection?: React.ReactNode

  /** @default false */
  fullWidth?: boolean

  /** @default false */
  withDot?: boolean

  /** @default false */
  asChild?: boolean
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      asChild,
      size = 'sm',
      variant = 'solid',
      color = 'primary',
      children,
      fullWidth = false,
      withDot = false,
      leftSection,
      rightSection,
      rounded = 'sm',
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : 'span'

    return (
      <Component
        {...props}
        className={cx(
          `box-border inline-flex h-fit items-center justify-center whitespace-nowrap  leading-none  focus:outline-none`,
          variantStyles({ variant, color }),
          {
            'rounded-none': rounded === 'none',
            'rounded-sm': rounded === 'xs',
            'rounded': rounded === 'sm',
            'rounded-md': rounded === 'md',
            'rounded-lg': rounded === 'lg',
            'rounded-xl': rounded === 'xl',
            'rounded-full': rounded === 'full',
          },
          {
            'px-2 py-1 text-xs': size === 'xs',
            'px-2.5 py-1 text-sm': size === 'sm',
            'px-3 py-1 text-base': size === 'md',
            'px-4 py-1.5 text-lg': size === 'lg',
            'px-5 py-2 text-xl': size === 'xl',
          },
          {
            'w-full': fullWidth,
          }
        )}
        ref={ref}
      >
        {withDot ? (
          <div
            className={cx(
              'mr-2 rounded-full',
              'h-1.5 w-1.5',
              dotStyles({ variant, color })
            )}
          ></div>
        ) : null}
        {leftSection ? leftSection : null}
        <Slottable>{children}</Slottable>
        {rightSection ? rightSection : null}
      </Component>
    )
  }
)

Badge.displayName = 'Badge'
