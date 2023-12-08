import React from 'react'
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import cx from '@/lib/cx'
import toast, { ToastPosition } from 'react-hot-toast'

type Status = 'success' | 'danger' | 'info' | 'warning'
type Toast = {
  title?: string
  description?: string
  position?: ToastPosition
  status?: Status
  duration?: number
}
const base = ({
  status = 'success',
  description,
  title,
  position = 'top-right',
  duration,
}: Toast) => {
  toast.custom(
    (t) => (
      <div
        className={cx(
          'pointer-events-auto relative',
          'lg:w-[360px] w-full',
          'rounded py-3 pl-3 pr-9',
          {
            'bg-success-600 text-white': status === 'success',
            'bg-danger-600 text-white': status === 'danger',
            'bg-warning-600 text-white': status === 'warning',
            'bg-info-600 text-white': status === 'info',
          },
          {
            'animate-enter': t.visible,
            'animate-leave': !t.visible,
          }
        )}
      >
        <div className="flex">
          <div className="flex justify-center pr-2">
            {status === 'success' ? (
              <CheckCircleIcon className="h-5 w-5"></CheckCircleIcon>
            ) : null}
            {status === 'danger' ? (
              <XCircleIcon className="h-5 w-5"></XCircleIcon>
            ) : null}
            {status === 'warning' ? (
              <ExclamationCircleIcon className="h-5 w-5"></ExclamationCircleIcon>
            ) : null}
            {status === 'info' ? (
              <InformationCircleIcon className="h-5 w-5"></InformationCircleIcon>
            ) : null}
          </div>
          <div className="p-0">
            {title && (
              <div className="font-semibold leading-tight">{title}</div>
            )}
            {description && <div className="leading-tight">{description}</div>}
          </div>
        </div>

        <button
          className={cx('absolute right-1.5 top-1.5 rounded p-0.5', {
            'hover:bg-success-700 active:bg-success-800': status === 'success',
            'hover:bg-danger-700 active:bg-danger-800': status === 'danger',
            'hover:bg-warning-700 active:bg-warning-800': status === 'warning',
            'hover:bg-info-700 active:bg-info-800': status === 'info',
          })}
          onClick={() => toast.dismiss(t.id)}
        >
          <XMarkIcon className="h-4 w-4"></XMarkIcon>
        </button>
      </div>
    ),
    {
      position: position,
      duration: duration,
    }
  )
}

type ToastProps = Omit<Toast, 'status'>
const custom = {
  success: (params: ToastProps) => base({ ...params, status: 'success' }),
  danger: (params: ToastProps) => base({ ...params, status: 'danger' }),
  info: (params: ToastProps) => base({ ...params, status: 'info' }),
  warning: (params: ToastProps) => base({ ...params, status: 'warning' }),
}

export default custom
