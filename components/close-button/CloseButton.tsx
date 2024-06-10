import React, { forwardRef } from 'react'
import cx from '@/lib/cx'
import { XMarkIcon } from '@heroicons/react/24/solid'

type Props = React.ComponentProps<'button'> & {
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const CloseButton = forwardRef<HTMLButtonElement, Props>(
  function CloseButton({ size = 'md', ...props }: Props, ref) {
    return (
      <button
        {...props}
        ref={ref}
        className={cx(
          'h-5 w-5 rounded p-1 text-gray-800 transition-colors hover:bg-gray-100 active:bg-gray-200',
          {
            'h-6 w-6': size === 'sm',
            'h-7 w-7': size === 'md',
            'h-8 w-8': size === 'lg',
            'h-9 w-9': size === 'xl',
          },
          props.className
        )}
      >
        <XMarkIcon className=""></XMarkIcon>
      </button>
    )
  }
)
