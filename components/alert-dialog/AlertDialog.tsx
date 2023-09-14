'use client'

import React, { useEffect, useRef, useState } from 'react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/solid'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import cx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

const panelMotion = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.15, ease: 'easeIn' },
  },
}

const overlayMotion = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15, ease: 'easeIn' },
  },
}

function IconSection() {
  return (
    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-danger-50 ">
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-danger-100 ">
        <ExclamationTriangleIcon className="h-5 w-5 text-danger-600"></ExclamationTriangleIcon>
      </div>
    </div>
  )
}

export function AlertDialogCloseButton() {
  return (
    <AlertDialogPrimitive.Cancel asChild>
      <button
        className={cx(
          'absolute right-2 top-2 rounded p-0.5 text-gray-800 hover:bg-gray-200 active:bg-gray-300'
        )}
      >
        <XMarkIcon className="h-5 w-5"></XMarkIcon>
      </button>
    </AlertDialogPrimitive.Cancel>
  )
}

export function AlertDialogCancel({ children }: { children: React.ReactNode }) {
  return (
    <AlertDialogPrimitive.Cancel asChild>
      {children}
    </AlertDialogPrimitive.Cancel>
  )
}
export function AlertDialogFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col-reverse justify-end  gap-3 bg-gray-50 px-4 py-3 sm:flex-row">
      {children}
    </div>
  )
}

export function AlertDialogContent({
  title,
  description,
}: {
  title?: string
  description?: string
}) {
  return (
    <div className="px-4 py-4">
      <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:text-left">
        <IconSection></IconSection>
        <div>
          <AlertDialogPrimitive.Title className="text-lg font-semibold leading-6 text-gray-800">
            {title}
          </AlertDialogPrimitive.Title>
          <AlertDialogPrimitive.Description className="mt-2 text-base  text-gray-600">
            {description}
          </AlertDialogPrimitive.Description>
        </div>
      </div>
    </div>
  )
}

export type AlertDialogProps = React.ComponentProps<
  typeof AlertDialogPrimitive.Root
>

export function AlertDialog(props: AlertDialogProps) {
  //workaround for radix bug
  const [, forceRender] = useState(0)
  const containerRef = useRef<HTMLElement | null>(null)
  useEffect(() => {
    containerRef.current = document.body
    forceRender((prev) => prev + 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AlertDialogPrimitive.Root {...props}>
      <AnimatePresence>
        {props.open ? (
          <AlertDialogPrimitive.Portal
            container={containerRef.current}
            forceMount
          >
            <AlertDialogPrimitive.Overlay asChild forceMount>
              <motion.div
                variants={overlayMotion}
                initial="initial"
                animate="animate"
                exit="exit"
                className="fixed inset-0 bg-black bg-opacity-50"
              ></motion.div>
            </AlertDialogPrimitive.Overlay>

            <AlertDialogPrimitive.Content
              forceMount
              className="fixed inset-0 flex items-center overflow-y-auto sm:items-start"
            >
              <div className="mt-[3.75rem] flex w-full justify-center">
                <motion.div
                  variants={panelMotion}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className={cx(
                    'relative top-0',
                    'w-11/12 rounded-md bg-white shadow-xl sm:w-4/5 md:w-4/6 lg:w-1/3',
                    'overflow-hidden text-left'
                  )}
                >
                  {props.children}
                </motion.div>
              </div>
            </AlertDialogPrimitive.Content>
          </AlertDialogPrimitive.Portal>
        ) : null}
      </AnimatePresence>
    </AlertDialogPrimitive.Root>
  )
}
