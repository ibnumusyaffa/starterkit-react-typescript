'use client'
import React from 'react'
import cx from 'clsx'

export type RadioProps = Omit<
  React.ComponentPropsWithRef<'input'>,
  'type' | 'size'
> & {
  /** @default "sm" */
  size?: 'sm' | 'md' | 'lg' | 'xl'

  label?: string
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  function Radio(
    {
      size = 'sm',
      disabled,
      label,
      name,
      value,
      checked,
      defaultChecked,
      onChange,
      ...props
    },
    ref
  ) {
    return (
      <label className="relative flex items-center justify-center space-x-3 leading-tight">
        <input
          {...props}
          ref={ref}
          name={name}
          value={value}
          disabled={disabled}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          className={cx(
            'form-radio border-2 border-gray-300',
            'text-primary-500 focus:ring-primary-500 focus:ring-opacity-40',
            {
              'cursor-not-allowed bg-gray-100 checked:opacity-50': disabled,
            },
            {
              'h-5 w-5': size === 'sm',
              'h-6 w-6': size === 'md',
              'h-7 w-7': size === 'lg',
              'h-8 w-8': size === 'xl',
            }
          )}
          type="radio"
        ></input>

        <span
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
        >
          {label}
        </span>
      </label>
    )
  }
)

export function RadioGroup({ children }: { children: React.ReactNode }) {
  return <div className="flex space-x-3">{children}</div>
}
