import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useControllableState } from '@/hooks'
import cx from 'clsx'

const TooltipCtx = createContext(false)

export function TooltipTrigger({ children }) {
  return <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
}

export function TooltipRoot({
  children,
  open,
  onOpenChange,
  defaultOpen = false,
  delayDuration = 700,
  skipDelayDuration = 300,
}) {
  const [_open, _setOpen] = useControllableState({
    value: open,
    onChange: onOpenChange,
    defaultValue: defaultOpen,
  })
  return (
    <span>
      <TooltipCtx.Provider value={{ open: _open, setOpen: _setOpen }}>
        <TooltipPrimitive.Provider
          delayDuration={delayDuration}
          skipDelayDuration={skipDelayDuration}
        >
          <TooltipPrimitive.Root
            open={_open}
            defaultOpen={_open}
            onOpenChange={(value) => _setOpen(value)}
          >
            {children}
          </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
      </TooltipCtx.Provider>
    </span>
  )
}

export function TooltipContent({
  children,
  color = 'light',
  side = 'top',
  sideOffset = 4,
  align = 'center',
  alignOffset = 0,
  ...props
}) {
  const { open } = useContext(TooltipCtx)

  //workaround for radix bug
  const [, forceRender] = useState(0)
  const containerRef = useRef(0)
  useEffect(() => {
    containerRef.current = document.body
    forceRender((prev) => prev + 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AnimatePresence>
      {open ? (
        <TooltipPrimitive.Portal container={containerRef.current} forceMount>
          <TooltipPrimitive.Content
            forceMount
            side={side}
            align={align}
            sideOffset={sideOffset}
            alignOffset={alignOffset}
            {...props}
          >
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15, ease: 'easeOut' },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.1, ease: 'easeIn' },
              }}
              className={cx('relative rounded px-2 py-2', {
                'bg-gray-800 text-white': color === 'dark',
                'bg-white text-gray-700 shadow-md ring-1 ring-black ring-opacity-5':
                  color === 'light',
              })}
            >
              <TooltipPrimitive.Arrow forceMount asChild>
                <div className="relative h-[4px] w-[13px]">
                  <div
                    className={cx(
                      'absolute h-2 w-2 rotate-45',
                      ' left-0 right-0 ml-auto mr-auto',
                      {
                        'top-[-4px] bg-gray-800': color === 'dark',
                        'top-[-3.5px] border-r border-b border-black border-opacity-[0.15] bg-white shadow-md':
                          color === 'light',
                      },
                    )}
                  ></div>
                </div>
              </TooltipPrimitive.Arrow>
              <span className="block text-sm">{children}</span>
            </motion.div>
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      ) : null}
    </AnimatePresence>
  )
}
