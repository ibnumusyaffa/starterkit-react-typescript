'use client'
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
            {scrollBehavior === 'inside' ? (
              <React.Fragment>
                <DialogPrimitive.Overlay asChild forceMount>
                  <motion.div
                    variants={overlayMotion}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="fixed inset-0 bg-black bg-opacity-50 h-screen"
                  ></motion.div>
                </DialogPrimitive.Overlay>
                <DialogPrimitive.Content asChild forceMount>
                  <motion.div
                    variants={contentMotion}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={cx(
                      'absolute mx-auto flex w-full flex-col',
                      'top-0 left-0 right-0 bottom-0',
                      'rounded-md bg-white h-min',
                      'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
                      {
                        'my-10': !verticalCentered,
                        'my-auto': verticalCentered,
                      },
                      {
                        'max-h-[calc(100%-7.5rem)]':
                          scrollBehavior === 'inside',
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
                </DialogPrimitive.Content>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <DialogPrimitive.Overlay asChild forceMount>
                  <motion.div
                    variants={overlayMotion}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={cx(
                      'fixed top-0 bg-black bg-opacity-50  overflow-y-auto  py-10',
                      'flex w-screen justify-center h-screen items-start'
                    )}
                  >
                    <DialogPrimitive.Content asChild forceMount>
                      <motion.div
                        variants={contentMotion}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className={cx(
                          'relative mx-auto w-full',
                          'rounded-md bg-white',
                          'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',

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
                    </DialogPrimitive.Content>
                  </motion.div>
                </DialogPrimitive.Overlay>
              </React.Fragment>
            )}
          </DialogPrimitive.Portal>
        ) : null}
      </AnimatePresence>
    </DialogPrimitive.Root>
  )
}
