'use client'

import React from 'react'
import cx from '@/lib/cx'
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'

export type AlertType = 'danger' | 'warning' | 'success' | 'info' | 'neutral'

type CloseButtonProps = {
  type?: AlertType
  onClick: React.MouseEventHandler<HTMLButtonElement>
}
function CloseButton({ type = 'danger', onClick }: CloseButtonProps) {
  return (
    <div className="absolute right-2.5 top-2">
      <button
        className={cx('h-7 w-7 rounded p-1 transition-all', {
          'text-warning-700 hover:bg-warning-200 active:bg-warning-300':
            type === 'warning',
          'text-danger-700 hover:bg-danger-200 active:bg-danger-300':
            type === 'danger',
          'text-success-700 hover:bg-success-200 active:bg-success-300':
            type === 'success',
          'text-info-700 hover:bg-info-200 active:bg-info-300': type === 'info',
          'text-gray-700 hover:bg-gray-200 active:bg-gray-300':
            type === 'neutral',
        })}
        onClick={onClick}
      >
        <XMarkIcon></XMarkIcon>
      </button>
    </div>
  )
}

function Icon({ type = 'danger' }: { type?: AlertType }) {
  const icon = {
    success: <CheckCircleIcon></CheckCircleIcon>,
    danger: <XCircleIcon></XCircleIcon>,
    info: <InformationCircleIcon></InformationCircleIcon>,
    warning: <ExclamationTriangleIcon></ExclamationTriangleIcon>,
    neutral: <InformationCircleIcon></InformationCircleIcon>,
  }
  return (
    <div
      className={cx('h-5 w-5', {
        'text-warning-500': type === 'warning',
        'text-danger-500': type === 'danger',
        'text-success-500': type === 'success',
        'text-info-500': type === 'info',
        'text-gray-500': type === 'neutral',
      })}
    >
      {icon[type]}
    </div>
  )
}

export type AlertProps = {
  type?: AlertType
  title?: string
  children?: React.ReactNode
  closeable?: boolean
  withIcon?: boolean
  withAccent?: boolean
}
export function Alert({
  type = 'danger',
  title,
  children,
  closeable = false,
  withIcon,
  withAccent = false,
}: AlertProps) {
  const [show, setShow] = React.useState(true)

  if (!show) {
    return null
  }

  return (
    <div
      className={cx(
        'relative flex items-start space-x-3 rounded-r  px-3 py-3 ',
        {
          'border-warning-500 bg-warning-50': type === 'warning',
          'border-danger-500 bg-danger-50': type === 'danger',
          'border-success-500 bg-success-50': type === 'success',
          'border-info-500 bg-info-50': type === 'info',
          'border-gray-500 bg-gray-100': type === 'neutral',
        },
        {
          'rounded-l': !withAccent,
          'border-l-2': withAccent,
        }
      )}
    >
      {withIcon ? <Icon type={type}></Icon> : null}
      <div
        className={cx('flex-1 space-y-1.5', {
          'text-warning-800': type === 'warning',
          'text-danger-800': type === 'danger',
          'text-success-800': type === 'success',
          'text-info-800': type === 'info',
          'text-gray-800': type === 'neutral',
        })}
      >
        {title ? (
          <div className="text-sm font-semibold leading-tight">{title}</div>
        ) : null}
        {children ? <div className="text-sm">{children}</div> : null}
      </div>
      {closeable ? (
        <CloseButton type={type} onClick={() => setShow(false)}></CloseButton>
      ) : null}
    </div>
  )
}
