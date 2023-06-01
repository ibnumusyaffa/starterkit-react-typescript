import * as ProgressPrimitive from '@radix-ui/react-progress'
import cx from 'clsx'
import React from 'react'

export const Progress = ({ value, withStripe, size = 'sm' }) => {
  const stripedStyle = withStripe
    ? {
        backgroundSize: '20px 20px',
        backgroundImage:
          'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
      }
    : {}

  return (
    <ProgressPrimitive.Root
      value={value}
      className={cx('w-full overflow-hidden rounded bg-gray-200', {
        'h-1': size === 'xs',
        'h-2': size === 'sm',
        'h-3': size === 'md',
        'h-4': size === 'lg',
        'h-5': size === 'xl',
      })}
    >
      <ProgressPrimitive.Indicator
        style={{
          width: `${value}%`,
          ...stripedStyle,
        }}
        className={cx('h-full bg-primary-500 duration-300 ease-in-out')}
      />
    </ProgressPrimitive.Root>
  )
}
