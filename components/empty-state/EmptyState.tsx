import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

type EmptyStateProps = {
  title?: string
  description?: string
  secondaryAction?: React.ReactNode
  primaryAction?: React.ReactNode
  withIcon?: boolean
}
export function EmptyState({
  title,
  description,
  secondaryAction,
  primaryAction,
  withIcon,
}: EmptyStateProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-5">
      {withIcon ? (
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
            <MagnifyingGlassIcon className="h-7 w-7 text-primary-600"></MagnifyingGlassIcon>
          </div>
        </div>
      ) : null}

      <div className="mt-3 flex flex-col items-center space-y-1">
        <div className="text-lg font-medium text-gray-700">{title}</div>
        <div className="text-center text-gray-600">{description}</div>
      </div>
      {secondaryAction || primaryAction ? (
        <div className="mt-5">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {secondaryAction}
            {primaryAction}
          </div>
        </div>
      ) : null}
    </div>
  )
}
