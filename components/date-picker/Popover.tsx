'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { DismissButton, Overlay, usePopover } from 'react-aria'
import type { AriaPopoverProps } from 'react-aria'
import type { OverlayTriggerState } from 'react-stately'

const motionVariants = {
  initial: {
    opacity: 0,
    y: '4%',
    x: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: '3%',
    x: 0,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
}

interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
  children: React.ReactNode
  state: OverlayTriggerState
}

export function Popover({ children, state, ...props }: PopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null)
  const { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef,
    },
    state
  )

  const [, forceRender] = React.useState(0)

  useEffect(() => {
    forceRender((prev) => prev + 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Overlay>
      <div {...underlayProps} className="fixed inset-0" />
      <motion.div
        {...(popoverProps as any)}
        ref={popoverRef}
        variants={motionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="pointer-events-auto mt-2  rounded  bg-white shadow-lg outline-none ring-1 ring-black ring-opacity-10"
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </motion.div>
    </Overlay>
  )
}
