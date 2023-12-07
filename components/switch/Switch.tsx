'use client'

import React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import cx from '@/lib/cx'
import { motion } from 'framer-motion'

type SwitchProps = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitive.Root
> & {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  label?: string
}

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(function Switch(
  {
    size = 'md',
    defaultChecked,
    checked,
    onCheckedChange,
    disabled,
    required,
    name,
    value,
    label,
    ...props
  },
  ref
) {
  const id = React.useId()
  return (
    <div className="inline-flex items-center space-x-3">
      <SwitchPrimitive.Root
        {...props}
        ref={ref}
        defaultChecked={defaultChecked}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        required={required}
        name={name}
        value={value}
        className={cx(
          'relative rounded-full shadow-inner',
          'focus:outline-none focus:ring-2',
          "flex items-center data-[state='unchecked']:justify-start data-[state='checked']:justify-end data-[state=unchecked]:bg-gray-300",
          {
            'cursor-not-allowed opacity-50': disabled,
          },
          {
            'h-[20px] w-[36px] px-[2.5px]': size === 'sm',
            'h-[24px] w-[44px] px-[3px]': size === 'md',
            'h-[29px] w-[53px] px-[3.5px]': size === 'lg',
            'h-[34px] w-[62px] px-[4px]': size === 'xl',
          },
          {
            'focus:ring-primary-400 focus:ring-opacity-40 data-[state=checked]:bg-primary-500':
              true,
          }
        )}
      >
        <SwitchPrimitive.Thumb asChild>
          <motion.span
            layout
            transition={{ ease: 'easeInOut', duration: 0.15 }}
            className={cx(
              'block',
              'shadow-xs rounded-full bg-white ring-1 ring-black ring-opacity-5  ',
              {
                'h-[15px] w-[15px]': size === 'sm',
                'h-[19px] w-[19px]': size === 'md',
                'h-[23px] w-[23px]': size === 'lg',
                'h-[27px] w-[27px]': size === 'xl',
              }
            )}
          ></motion.span>
        </SwitchPrimitive.Thumb>
      </SwitchPrimitive.Root>

      {label ? (
        <div>
          <label
            className={cx(
              'leading-tight text-gray-700',
              {
                'text-sm': size === 'sm',
                'text-base': size === 'md',
                'text-lg': size === 'lg',
                'text-xl': size === 'xl',
              },
              {
                'cursor-not-allowed  text-gray-600': disabled,
              }
            )}
            htmlFor={id}
          >
            {label}
          </label>
        </div>
      ) : null}
    </div>
  )
})
