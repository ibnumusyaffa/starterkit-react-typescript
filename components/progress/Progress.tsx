'use client'

import React from 'react'
import cx from '@/lib/cx'
import * as ProgressPrimitive from '@radix-ui/react-progress'

const stripedStyle: React.CSSProperties = {
  backgroundSize: '20px 20px',
  backgroundImage:
    'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
}

type ProgressProps = React.ComponentPropsWithoutRef<
  typeof ProgressPrimitive.Root
> & {
  withStripe?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ value, withStripe, size = 'sm', ...props }, ref) => {
  const style = withStripe ? stripedStyle : {}
  return (
    <ProgressPrimitive.Root
      ref={ref}
      value={value}
      className={cx('w-full overflow-hidden rounded bg-gray-200', {
        'h-2': size === 'sm',
        'h-3': size === 'md',
        'h-4': size === 'lg',
        'h-5': size === 'xl',
      })}
      {...props}
    >
      <ProgressPrimitive.Indicator
        style={{
          width: `${value}%`,
          ...style,
        }}
        className={cx('h-full bg-primary-500 duration-300 ease-in-out')}
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
