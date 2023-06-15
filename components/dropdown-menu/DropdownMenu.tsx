"use client"
import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import cx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import { useControllableState } from '@/hooks'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

const motionVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.15, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    transition: { duration: 0.1, ease: 'easeIn' },
  },
}
type DropdownMenuProviderParams = {
  open?: boolean
  setOpen?: (value: boolean) => void
}
const DropdownCtx = createContext<DropdownMenuProviderParams>({})
const DropdownSubCtx = createContext<DropdownMenuProviderParams>({})

export const DropdownMenuGroup = DropdownMenuPrimitive.Group

export function DropdownMenuTrigger({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <DropdownMenuPrimitive.Trigger asChild>
      {children}
    </DropdownMenuPrimitive.Trigger>
  )
}

export function DropdownMenuArrow() {
  return (
    <DropdownMenuPrimitive.Arrow asChild>
      <div className="relative h-[7px] w-[13px]">
        <div
          className={cx(
            'absolute h-2 w-2 rotate-45 bg-white',
            'border-r border-b border-gray-300 border-opacity-50',
            'top-[-3px] left-0 right-0 ml-auto mr-auto'
          )}
        ></div>
      </div>
    </DropdownMenuPrimitive.Arrow>
  )
}

export function DropdownMenuRoot({
  children,
  open,
  onOpenChange,
  defaultOpen = false,
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  const [_open, _setOpen] = useControllableState({
    value: open,
    onChange: onOpenChange,
    defaultValue: defaultOpen,
  })
  return (
    <DropdownCtx.Provider value={{ open: _open, setOpen: _setOpen }}>
      <DropdownMenuPrimitive.Root
        open={_open}
        defaultOpen={_open}
        onOpenChange={(value) => _setOpen(value)}
      >
        {children}
      </DropdownMenuPrimitive.Root>
    </DropdownCtx.Provider>
  )
}

type DropdownMenuContentProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Content
>

export const DropdownMenuContent = React.forwardRef<
  HTMLDivElement,
  DropdownMenuContentProps
>(function DropdownMenuContent(
  { children, side = 'bottom', align = 'center', ...props },
  ref
) {
  const { open } = useContext(DropdownCtx)

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
        <DropdownMenuPrimitive.Portal
          container={containerRef.current}
          forceMount
        >
          <DropdownMenuPrimitive.Content
            {...props}
            asChild
            side={side}
            align={align}
            ref={ref}
            className="rounded bg-white px-0.5 py-0.5 shadow-lg ring-1 ring-black ring-opacity-10 focus:outline-none"
          >
            <motion.div
              variants={motionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {children}
            </motion.div>
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      ) : null}
    </AnimatePresence>
  )
})

type DropdownMenuItemProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.Item
> & {
  color?: 'primary' | 'danger'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export function DropdownMenuItem({
  disabled,
  leftIcon,
  rightIcon,
  color = 'primary',
  onSelect,
  ...props
}: DropdownMenuItemProps) {
  return (
    <DropdownMenuPrimitive.Item
      disabled={disabled}
      onSelect={onSelect}
      className={cx(
        'relative flex items-center space-x-2 rounded px-3 py-2',
        'cursor-pointer  text-sm focus:outline-none',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        color === 'primary' && [
          'text-gray-700',
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
    </DropdownMenuPrimitive.Item>
  )
}

export function DropdownMenuLabel({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <DropdownMenuPrimitive.Label className="mt-1.5 mb-2 flex items-center px-3 text-xs font-semibold text-gray-500 ">
      {children}
    </DropdownMenuPrimitive.Label>
  )
}

export function DropdownMenuSeparator() {
  return (
    <DropdownMenuPrimitive.Separator className="mx-[-2px] my-2 border-b border-gray-300"></DropdownMenuPrimitive.Separator>
  )
}

export function DropdownMenuSub({ children }: { children?: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <DropdownSubCtx.Provider value={{ open, setOpen }}>
      <DropdownMenuPrimitive.Sub
        open={open}
        defaultOpen={open}
        onOpenChange={(value) => setOpen(value)}
      >
        {children}
      </DropdownMenuPrimitive.Sub>
    </DropdownSubCtx.Provider>
  )
}

type DropdownMenuSubTriggerProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.SubTrigger
> & {
  leftIcon?: React.ReactNode
}
export function DropdownMenuSubTrigger({
  disabled,
  leftIcon,
  children,
}: DropdownMenuSubTriggerProps) {
  return (
    <DropdownMenuPrimitive.SubTrigger
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
      <div className="flex-1">{children}</div>
      <div className="h-3.5 w-3.5">
        <ChevronRightIcon></ChevronRightIcon>
      </div>
    </DropdownMenuPrimitive.SubTrigger>
  )
}

type DropdownMenuSubContentProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.SubContent
>
export const DropdownMenuSubContent = React.forwardRef<
  HTMLDivElement,
  DropdownMenuSubContentProps
>(function DropdownMenuSubContent({ children, ...props }, ref) {
  const { open } = useContext(DropdownSubCtx)
  return (
    <AnimatePresence>
      {open ? (
        <DropdownMenuPrimitive.Portal forceMount>
          <DropdownMenuPrimitive.SubContent
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
          </DropdownMenuPrimitive.SubContent>
        </DropdownMenuPrimitive.Portal>
      ) : null}
    </AnimatePresence>
  )
})
