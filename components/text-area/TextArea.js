import React from 'react'
import cx from 'clsx'

export const TextArea = React.forwardRef(function TextArea(
  {
    error,
    disabled = false,
    size = 'md',
    variant = 'outline',
    rows = '4',
    ...props
  },
  forwardedRef,
) {
  return (
    <textarea
      {...props}
      data-error={error}
      ref={forwardedRef}
      disabled={disabled}
      rows={rows}
      className={cx(
        // base style
        'w-full rounded text-gray-800',
        'focus:border-primary-500 focus:outline-none focus:ring-primary-500 focus:ring-opacity-25',

        'data-[error]:border-danger-500 data-[error]:focus:ring-danger-500 data-[error]:focus:ring-opacity-25',
        {
          'border-0 bg-gray-100 focus:border focus:border-gray-300 focus:bg-white focus:ring-2':
            variant === 'filled',
          'bg-white-100 border border-gray-300 focus:ring-2':
            variant === 'outline',

          'cursor-not-allowed bg-gray-100 opacity-75': disabled,
        },

        //size style
        {
          'text-xs': size === 'xs',
          'text-sm': size === 'sm',
          'text-base': size === 'md',
          'text-lg': size === 'lg',
          'text-xl': size === 'xl',
        },
      )}
    />
  )
})
