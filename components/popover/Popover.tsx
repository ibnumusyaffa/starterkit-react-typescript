'use client'

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useControllableState } from '@/hooks'
import cx from '@/lib/cx'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { AnimatePresence, motion } from 'framer-motion'

type PopoverProviderParams = {
  open?: boolean
  setOpen?: (value: boolean) => void
}

const PopoverCtx = createContext<PopoverProviderParams>({})
function usePopover() {
  const context = useContext(PopoverCtx)
  if (context === undefined) {
    throw new Error('usePopover must be used within a PopoverCtx.Provider')
  }
  return context
}

export function PopoverTrigger({ children }: { children?: React.ReactNode }) {
  return <PopoverPrimitive.Trigger asChild>{children}</PopoverPrimitive.Trigger>
}

export function PopoverRoot({
  children,
  open,
  onOpenChange,
  defaultOpen = false,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  const [_open, _setOpen] = useControllableState({
    value: open,
    onChange: onOpenChange,
    defaultValue: defaultOpen,
  })

  return (
    <PopoverCtx.Provider value={{ open: _open, setOpen: _setOpen }}>
      <PopoverPrimitive.Root
        {...props}
        open={_open}
        defaultOpen={_open}
        onOpenChange={(value) => _setOpen(value)}
      >
        {children}
      </PopoverPrimitive.Root>
    </PopoverCtx.Provider>
  )
}

export function PopoverArrow() {
  return (
    <PopoverPrimitive.Arrow asChild>
      <div className="relative h-[4px] w-[13px]">
        <div
          className={cx(
            'absolute h-2 w-2 rotate-45',
            'left-0 right-0 ml-auto mr-auto',
            'top-[-4px] border-b border-r border-gray-300 bg-white shadow-sm'
          )}
        ></div>
      </div>
    </PopoverPrimitive.Arrow>
  )
}

export function PopoverContent({
  children,
  side = 'bottom',
  align = 'center',
  sideOffset = 2,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  const { open } = usePopover()

  //workaround for radix bug
  const [, forceRender] = useState(0)
  const containerRef = useRef<HTMLElement>()
  useEffect(() => {
    containerRef.current = document.body
    forceRender((prev) => prev + 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AnimatePresence>
      {open ? (
        <PopoverPrimitive.Portal forceMount container={containerRef.current}>
          <PopoverPrimitive.Content
            {...props}
            side={side}
            align={align}
            sideOffset={sideOffset}
            asChild
            forceMount
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.15, ease: 'easeOut' },
              }}
              exit={{
                opacity: 0,
                scale: 0.97,
                transition: { duration: 0.1, ease: 'easeIn' },
              }}
              className="rounded  border border-gray-300 bg-white  p-3 text-gray-700 shadow"
            >
              {children}
            </motion.div>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      ) : null}
    </AnimatePresence>
  )
}
