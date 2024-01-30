'use client'

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useControllableState } from '@/hooks'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import cx from '@/lib/cx'
import { AnimatePresence, motion } from 'framer-motion'

type ProviderParams = {
  open?: boolean
  setOpen?: (value: boolean) => void
}

const TooltipCtx = createContext<ProviderParams>({})

export function TooltipTrigger(props: { children: React.ReactNode }) {
  return (
    <TooltipPrimitive.Trigger asChild>
      {props.children}
    </TooltipPrimitive.Trigger>
  )
}

export type TooltipRootProps = TooltipPrimitive.TooltipProviderProps &
  TooltipPrimitive.TooltipProps

export function TooltipRoot({
  children,
  open,
  onOpenChange,
  defaultOpen = false,
  delayDuration = 700,
  skipDelayDuration = 300,
  disableHoverableContent,
}: TooltipRootProps) {
  const [_open, _setOpen] = useControllableState<boolean>({
    value: open,
    onChange: onOpenChange,
    defaultValue: defaultOpen,
  })
  return (
    <span>
      <TooltipCtx.Provider value={{ open: _open, setOpen: _setOpen }}>
        <TooltipPrimitive.Provider skipDelayDuration={skipDelayDuration}>
          <TooltipPrimitive.Root
            open={_open}
            defaultOpen={_open}
            onOpenChange={(value) => _setOpen(value)}
            delayDuration={delayDuration}
            disableHoverableContent={disableHoverableContent}
          >
            {children}
          </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
      </TooltipCtx.Provider>
    </span>
  )
}

export type TooltipContentProps = React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Content
> & {
  color?: 'dark' | 'light'
}

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(
  (
    {
      children,
      color = 'light',
      side = 'top',
      sideOffset = 4,
      align = 'center',
      alignOffset = 0,
      ...props
    },
    ref
  ) => {
    const { open } = useContext(TooltipCtx)

    //workaround for radix bug
    const [, forceRender] = useState(0)
    const containerRef = useRef<HTMLElement | null>(null)
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
              ref={ref}
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
                  'bg-white text-gray-700  border border-gray-300 shadow':
                    color === 'light',
                })}
              >
                <TooltipPrimitive.Arrow asChild>
                  <div className="relative h-[4px] w-[13px]">
                    <div
                      className={cx(
                        'absolute h-2 w-2 rotate-45',
                        ' left-0 right-0 ml-auto mr-auto',
                        {
                          'top-[-4px] bg-gray-800': color === 'dark',
                          'top-[-3.5px] border-b border-r border-gray-300 bg-white shadow-sm':
                            color === 'light',
                        }
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
)
TooltipContent.displayName = TooltipPrimitive.Content.displayName
