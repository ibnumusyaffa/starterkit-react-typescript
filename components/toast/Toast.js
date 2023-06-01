import React, { useState, createContext, useContext } from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { motion, AnimatePresence } from 'framer-motion'
import cx from 'clsx'
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'

const ToasCtx = createContext()

const toastMotionVariants = {
  initial: (props) => {
    const { position } = props
    const dir = ['top', 'bottom'].includes(position) ? 'y' : 'x'

    let factor = ['top-right', 'bottom-right'].includes(position) ? 1 : -1
    if (position === 'bottom') factor = 1

    return {
      opacity: 0,
      [dir]: factor * 24,
    }
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
}

function Toast({ title, description, position, status, duration, onClose }) {
  return (
    <ToastPrimitive.Root
      duration={duration}
      asChild
      forceMount
      onOpenChange={(value) => {
        if (value === false) {
          onClose()
        }
      }}
    >
      <motion.li
        layout
        variants={toastMotionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        custom={{ position }}
        className={cx(
          'pointer-events-auto relative',
          'min-w-[300px] max-w-[560px] ',
          'rounded py-3 pl-3 pr-9',
          {
            'bg-success-600 text-white': status === 'success',
            'bg-danger-600 text-white': status === 'danger',
            'bg-warning-600 text-white': status === 'warning',
            'bg-info-600 text-white': status === 'info',
          },
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
              <ToastPrimitive.Title className="font-semibold leading-tight">
                {title}
              </ToastPrimitive.Title>
            )}
            {description && (
              <ToastPrimitive.Description className="leading-tight">
                {description}
              </ToastPrimitive.Description>
            )}
          </div>
        </div>

        <ToastPrimitive.Close asChild>
          <button
            className={cx('absolute top-1.5 right-1.5 rounded p-0.5', {
              'hover:bg-success-700 active:bg-success-800':
                status === 'success',
              'hover:bg-danger-700 active:bg-danger-800': status === 'danger',
              'hover:bg-warning-700 active:bg-warning-800':
                status === 'warning',
              'hover:bg-info-700 active:bg-info-800': status === 'info',
            })}
            onClick={onClose}
          >
            <XMarkIcon className="h-4 w-4"></XMarkIcon>
          </button>
        </ToastPrimitive.Close>
      </motion.li>
    </ToastPrimitive.Root>
  )
}
export function useToast() {
  return useContext(ToasCtx)
}

let nextId = 0
const positions = [
  'top',
  'top-left',
  'top-right',
  'bottom',
  'bottom-left',
  'bottom-right',
]
export function ToastProvider({ children, duration = 5000 }) {
  const [queue, setQueue] = useState({
    'top': [],
    'top-left': [],
    'top-right': [],
    'bottom': [],
    'bottom-left': [],
    'bottom-right': [],
  })

  function toast({
    title = '',
    description = '',
    position = 'top-right',
    status = 'success',
    duration,
  }) {
    setQueue((prev) => {
      const newToast = {
        id: nextId++,
        title,
        description,
        status,
        duration,
        position,
      }
      const toasts = [...prev[position], newToast]

      return {
        ...prev,
        [position]: toasts,
      }
    })
  }

  function removeToast(id, position) {
    setQueue((prevState) => ({
      ...prevState,
      [position]: prevState[position].filter((i) => i.id !== id),
    }))
  }

  return (
    <ToasCtx.Provider
      value={{
        success: (params) => toast({ ...params, status: 'success' }),
        danger: (params) => toast({ ...params, status: 'danger' }),
        info: (params) => toast({ ...params, status: 'info' }),
        warning: (params) => toast({ ...params, status: 'warning' }),
      }}
    >
      {children}
      {positions.map((position) => {
        return (
          <ToastPrimitive.Provider key={position} duration={duration}>
            <AnimatePresence>
              {queue[position].map((item) => (
                <Toast
                  {...item}
                  key={item.id}
                  onClose={() => removeToast(item.id, position)}
                ></Toast>
              ))}
            </AnimatePresence>

            <ToastPrimitive.Viewport asChild>
              <ul
                className={cx('fixed z-20 flex gap-y-5', {
                  'top-5 right-5 flex-col-reverse items-end':
                    position === 'top-right',
                  'top-5 left-5 flex-col-reverse items-start':
                    position === 'top-left',
                  'top-5 left-1/2 -translate-x-1/2 flex-col-reverse items-center':
                    position === 'top',
                  'bottom-5 right-10 flex-col items-end':
                    position === 'bottom-right',
                  'bottom-5 left-10 flex-col items-start':
                    position === 'bottom-left',
                  'bottom-5 left-1/2 -translate-x-1/2 flex-col items-center':
                    position === 'bottom',
                })}
              ></ul>
            </ToastPrimitive.Viewport>
          </ToastPrimitive.Provider>
        )
      })}
    </ToasCtx.Provider>
  )
}
