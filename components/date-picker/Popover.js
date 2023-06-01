import React, { useEffect } from 'react'
import { DismissButton, Overlay, usePopover } from 'react-aria'
import { motion } from 'framer-motion'
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
    transition: { duration: 0.1, ease: 'easeIn' },
  },
}

export function Popover({ children, state, ...props }) {
  let popoverRef = React.useRef(null)
  let { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef,
    },
    state,
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
        {...popoverProps}
        ref={popoverRef}
        variants={motionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="mt-2 rounded  bg-white  shadow-lg outline-none ring-1 ring-black ring-opacity-10"
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </motion.div>
    </Overlay>
  )
}
