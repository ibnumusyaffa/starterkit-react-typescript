'use client'

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import cx from '@/lib/cx'
import { AnimatePresence, motion } from 'framer-motion'

const motionVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.1, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.09, ease: 'easeIn' },
  },
}

type ContexMenuProviderParams = {
  open?: boolean
  setOpen?: (value: boolean) => void
}
const ContextCtx = createContext<ContexMenuProviderParams>({})
const ContextSubCtx = createContext<ContexMenuProviderParams>({})

export const ContextMenuGroup = ContextMenuPrimitive.Group

export function ContextMenuTrigger({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ContextMenuPrimitive.Trigger asChild>
      {children}
    </ContextMenuPrimitive.Trigger>
  )
}



export function ContextMenuRoot({
  children,
  onOpenChange,
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  const [open, setOpen] = useState(false)

  return (
    <ContextCtx.Provider value={{ open }}>
      <ContextMenuPrimitive.Root
        onOpenChange={(value) => {
          setOpen(value)
          onOpenChange?.(value)
        }}
      >
        {children}
      </ContextMenuPrimitive.Root>
    </ContextCtx.Provider>
  )
}

type ContextMenuContentProps = React.ComponentProps<
  typeof ContextMenuPrimitive.Content
>

export const ContextMenuContent = React.forwardRef<
  HTMLDivElement,
  ContextMenuContentProps
>(function ContextMenuContent({ children, ...props }, ref) {
  const { open } = useContext(ContextCtx)

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
        <ContextMenuPrimitive.Portal
          container={containerRef.current}
          forceMount
        >
          <ContextMenuPrimitive.Content
            asChild
            {...props}
            ref={ref}
            className="rounded bg-white px-0.5 py-0.5 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <motion.div
              variants={motionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {children}
            </motion.div>
          </ContextMenuPrimitive.Content>
        </ContextMenuPrimitive.Portal>
      ) : null}
    </AnimatePresence>
  )
})

type ContextMenuItemProps = React.ComponentProps<
  typeof ContextMenuPrimitive.Item
> & {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  color?: 'primary' | 'danger'
}

export function ContextMenuItem({
  disabled,
  leftIcon,
  rightIcon,
  color = 'primary',
  onSelect,
  ...props
}: ContextMenuItemProps) {
  return (
    <ContextMenuPrimitive.Item
      disabled={disabled}
      onSelect={onSelect}
      className={cx(
        'relative flex items-center space-x-2 rounded px-3 py-2',
        'cursor-pointer  text-sm focus:outline-none',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        color === 'primary' && [
          'text-gray-900',
          'data-[highlighted]:bg-primary-500 data-[highlighted]:text-white',
        ],
        color === 'danger' && [
          'text-danger-600',
          'data-[highlighted]:bg-danger-500 data-[highlighted]:text-white',
        ]
      )}
    >
      {leftIcon ? <div>{leftIcon}</div> : null}
      <div className="flex-1">{props.children}</div>
      {rightIcon ? <div>{rightIcon}</div> : null}
    </ContextMenuPrimitive.Item>
  )
}

export function ContextMenuLabel(props: { children: React.ReactNode }) {
  return (
    <ContextMenuPrimitive.Label className="mb-2 mt-1.5 flex items-center px-3 text-xs font-semibold text-gray-500 ">
      {props.children}
    </ContextMenuPrimitive.Label>
  )
}

export function ContextMenuSeparator() {
  return (
    <ContextMenuPrimitive.Separator className="mx-[-2px] my-2 border-b border-gray-300"></ContextMenuPrimitive.Separator>
  )
}

export function ContextMenuSub({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <ContextSubCtx.Provider value={{ open, setOpen }}>
      <ContextMenuPrimitive.Sub
        open={open}
        onOpenChange={(value) => setOpen(value)}
      >
        {children}
      </ContextMenuPrimitive.Sub>
    </ContextSubCtx.Provider>
  )
}

type ContextMenuSubTriggerProps = React.ComponentProps<
  typeof ContextMenuPrimitive.SubTrigger
> & {
  leftIcon?: React.ReactNode
}

export function ContextMenuSubTrigger({
  disabled,
  leftIcon,
  ...props
}: ContextMenuSubTriggerProps) {
  return (
    <ContextMenuPrimitive.SubTrigger
      disabled={disabled}
      className={cx(
        'relative flex items-center space-x-2 rounded px-3 py-2',
        'cursor-pointer  text-sm focus:outline-none',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        'text-gray-900',
        'data-[highlighted]:bg-primary-500 data-[highlighted]:text-white'
      )}
    >
      {leftIcon ? <div>{leftIcon}</div> : null}
      <div className="flex-1">{props.children}</div>
      <div className="h-3.5 w-3.5">
        <ChevronRightIcon></ChevronRightIcon>
      </div>
    </ContextMenuPrimitive.SubTrigger>
  )
}

type ContextMenuSubContentProps = React.ComponentProps<
  typeof ContextMenuPrimitive.SubContent
>

export const ContextMenuSubContent = React.forwardRef<
  HTMLDivElement,
  ContextMenuSubContentProps
>(function ContextMenuSubContent({ children, ...props }, ref) {
  const { open } = useContext(ContextSubCtx)

  return (
    <AnimatePresence>
      {open ? (
        <ContextMenuPrimitive.Portal forceMount>
          <ContextMenuPrimitive.SubContent
            {...props}
            asChild
            ref={ref}
            className="rounded bg-white px-0.5 py-0.5 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <motion.div
              variants={motionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {children}
            </motion.div>
          </ContextMenuPrimitive.SubContent>
        </ContextMenuPrimitive.Portal>
      ) : null}
    </AnimatePresence>
  )
})
