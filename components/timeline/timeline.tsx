'use client'

import React from 'react'
import cx from 'clsx'

export function TimelineBullet({
  color = 'neutral',
  children,
}: {
  color?: 'warning' | 'danger' | 'success' | 'info' | 'neutral'
  children: React.ReactNode
}) {
  return (
    <div
      className={cx(
        'z-10 flex h-8 w-8 items-center justify-center rounded-full border',
        {
          'border-warning-300 bg-warning-100 text-warning-700':
            color === 'warning',
          ' border-danger-300 bg-danger-100 text-danger-700':
            color === 'danger',
          'border-success-300 bg-success-100 text-success-700':
            color === 'success',
          'border-info-300 bg-info-100 text-indigo-700': color === 'info',
          'border-neutral-300 bg-gray-100 text-gray-700': color === 'neutral',
        }
      )}
    >
      {children}
    </div>
  )
}

export function TimelineContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 items-center text-sm">
      <div className="space-y-1">{children}</div>
    </div>
  )
}

export function TimelineItem({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cx(
        'timeline relative mb-5 flex space-x-3',
        'before:absolute before:-bottom-5 before:left-4 before:top-0',
        'before:border-l-2 before:border-gray-300 before:[&:last-child]:border-transparent'
      )}
    >
      {children}
    </div>
  )
}

export function Timeline({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
