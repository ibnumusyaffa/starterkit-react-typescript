"use client"
import React from 'react'
import cx from 'clsx'
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'

export type AlertType = 'danger' | 'warning' | 'success' | 'info' | 'neutral'

type CloseButtonProps = {
  type?: AlertType
  onClick: React.MouseEventHandler<HTMLButtonElement>
}
function CloseButton({ type = 'danger', onClick }: CloseButtonProps) {
  return (
    <div className="absolute right-1.5 top-1.5">
      <button
        className={cx('h-5 w-5 rounded transition-all', {
          'text-warning-800 hover:bg-warning-200 active:bg-warning-300':
            type === 'warning',
          'text-danger-800 hover:bg-danger-200 active:bg-danger-300':
            type === 'danger',
          'text-success-800 hover:bg-success-200 active:bg-success-300':
            type === 'success',
          'text-info-800 hover:bg-info-200 active:bg-info-300': type === 'info',
          'text-gray-800 hover:bg-gray-200 active:bg-gray-300':
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
}
export function Alert({
  type = 'danger',
  title,
  children,
  closeable = false,
  withIcon,
}: AlertProps) {
  const [show, setShow] = React.useState(true)

  if (!show) {
    return null
  }
  return (
    <div
      className={cx('relative rounded p-3 flex items-start space-x-3', {
        'bg-warning-50 border-[1px] border-warning-300': type === 'warning',
        'bg-danger-50 border-[1px] border-danger-300': type === 'danger',
        'bg-success-50 border-[1px] border-success-300': type === 'success',
        'bg-info-50 border-[1px] border-info-300': type === 'info',
        'bg-gray-50 border-[1px] border-gray-300': type === 'neutral',
      })}
    >
      {withIcon ? <Icon type={type}></Icon> : null}
      <div
        className={cx('flex-1  space-y-1', {
          'text-warning-800': type === 'warning',
          'text-danger-800': type === 'danger',
          'text-success-800': type === 'success',
          'text-info-800': type === 'info',
          'text-gray-800': type === 'neutral',
        })}
      >
        {title ? (
          <div className="font-medium leading-tight">{title}</div>
        ) : null}
        {children ? <div className="text-sm">{children}</div> : null}
      </div>
      {closeable ? (
        <CloseButton type={type} onClick={() => setShow(false)}></CloseButton>
      ) : null}
    </div>
  )
}
