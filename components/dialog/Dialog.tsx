"use client"
import * as DialogPrimitive from '@radix-ui/react-dialog'
import React, { useState, useRef, useEffect } from 'react'
import cx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useOnClickOutside } from '@/hooks'

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

const contentMotion = {
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

export function DialogHeader({ children }: { children?: React.ReactNode }) {
  return (
    <div className="px-5 py-3 ">
      <div className="text-lg font-semibold text-gray-800">{children}</div>
    </div>
  )
}

export function DialogContent({ children }: { children?: React.ReactNode }) {
  return <div className="flex-1 overflow-auto px-5 py-2">{children}</div>
}

export function DialogFooter({ children }: { children?: React.ReactNode }) {
  return <div className="flex justify-end space-x-3 px-5 py-3">{children}</div>
}

export function DialogCloseButton() {
  return (
    <DialogPrimitive.Close asChild>
      <button
        className={cx(
          'absolute top-2 right-2 rounded p-0.5 text-gray-800 hover:bg-gray-200 active:bg-gray-300'
        )}
      >
        <XMarkIcon className="h-5 w-5"></XMarkIcon>
      </button>
    </DialogPrimitive.Close>
  )
}

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type DialogProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
  closeOnOverlayClick?: boolean
  verticalCentered?: boolean
  scrollBehavior?: 'inside' | 'outside'
  size?: Size
}

export function Dialog({
  open,
  onOpenChange,
  children,
  closeOnOverlayClick = true,
  verticalCentered = false,
  scrollBehavior = 'inside',
  size = 'md',
  ...props
}: DialogProps) {
  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, () => {
    if (!closeOnOverlayClick) {
      return
    }
    onOpenChange?.(false)
  })

  //workaround for radix bug
  const [, forceRender] = useState(0)
  const containerRef = useRef<HTMLElement | null>(null)
  useEffect(() => {
    containerRef.current = document.body
    forceRender((prev) => prev + 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <DialogPrimitive.Root {...props} open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open ? (
          <DialogPrimitive.Portal forceMount container={containerRef.current}>
            <DialogPrimitive.Overlay asChild forceMount>
              <motion.div
                variants={overlayMotion}
                initial="initial"
                animate="animate"
                exit="exit"
                className="fixed inset-0 bg-black bg-opacity-50"
              ></motion.div>
            </DialogPrimitive.Overlay>
            <DialogPrimitive.Content asChild forceMount>
              <div
                className={cx(
                  'fixed top-0 left-0 flex w-screen  justify-center overflow-y-auto ',
                  {
                    'h-screen': scrollBehavior === 'outside',
                    'h-screen items-center': verticalCentered,
                    'h-screen items-start': !verticalCentered,
                  }
                )}
              >
                <motion.div
                  ref={ref}
                  variants={contentMotion}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className={cx(
                    'relative my-[3.75rem] flex w-full flex-col',
                    'rounded-md bg-white',
                    'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',

                    {
                      'max-h-[calc(100%-7.5rem)]': scrollBehavior === 'inside',
                    },
                    {
                      'max-w-[20rem]': size === 'xs',
                      'max-w-[25rem]': size === 'sm',
                      'max-w-[30rem]': size === 'md',
                      'max-w-[35rem]': size === 'lg',
                      'max-w-[45rem]': size === 'xl',
                    }
                  )}
                >
                  {children}
                </motion.div>
              </div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        ) : null}
      </AnimatePresence>
    </DialogPrimitive.Root>
  )
}
