"use client"
import React from 'react'
import cx from 'clsx'

export type CheckboxProps = Omit<
  React.ComponentPropsWithRef<'input'>,
  'type' | 'size'
> & {
  /** @default "md" */
  size?:  'sm' | 'md' | 'lg' | 'xl'

  /** @default false */
  indeterminate?: boolean

  label?: string
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {
      size = 'sm',
      checked,
      defaultChecked,
      onChange,
      indeterminate = false,
      disabled = false,
      name,
      label,
      ...props
    },
    ref
  ) {
    const id = React.useId()

    const iconStyle = cx(
      'pointer-events-none absolute inset-0 m-auto',
      'opacity-0',
      {
        'text-white peer-checked:opacity-100': !disabled,
        'text-gray-600 peer-checked:opacity-50': disabled,
      },
      {
        'h-3 w-3': size === 'sm',
        'h-3.5 w-3.5': size === 'md',
        'h-4 w-4': size === 'lg',
        'h-5 w-5': size === 'xl',
      }
    )
    return (
      <div className="inline-flex items-center space-x-3">
        <div className="relative leading-[0]">
          <input
            {...props}
            ref={ref}
            name={name}
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            onChange={onChange}
            className={cx(
              'form-checkbox shadow-xs peer appearance-none rounded !bg-none',
              'border-2 border-gray-300 focus:ring-2 focus:!ring-primary-500 focus:!ring-opacity-40',
              'disabled:text-gray-200 disabled:checked:border-gray-300',
              'bg-white checked:border-current checked:bg-current',
              'text-primary-500',
              {
                'h-5 w-5': size === 'sm',
                'h-6 w-6': size === 'md',
                'h-7 w-7': size === 'lg',
                'h-8 w-8': size === 'xl',
              }
            )}
            id={id}
            type="checkbox"
          ></input>

          {indeterminate ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 32 6"
              className={iconStyle}
            >
              <rect width="32" height="6" fill="currentColor" rx="3"></rect>
            </svg>
          ) : (
            <svg
              viewBox="0 0 10 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={iconStyle}
            >
              <path
                d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          )}
        </div>

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
  }
)
