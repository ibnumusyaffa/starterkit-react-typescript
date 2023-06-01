import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from 'react'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import cx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import { useControllableState } from '@/hooks'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

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
const ContextCtx = createContext(false)
const ContextSubCtx = createContext(false)

export const ContextMenuGroup = ContextMenuPrimitive.Group

export function ContextMenuTrigger({ children }) {
  return (
    <ContextMenuPrimitive.Trigger asChild>
      {children}
    </ContextMenuPrimitive.Trigger>
  )
}

export function ContextMenuArrow() {
  return (
    <ContextMenuPrimitive.Arrow asChild>
      <div className="relative h-[7px] w-[13px]">
        <div
          className={cx(
            'absolute h-2 w-2 rotate-45 bg-white',
            'border-r border-b border-gray-300 border-opacity-50',
            'top-[-3px] left-0 right-0 ml-auto mr-auto',
          )}
        ></div>
      </div>
    </ContextMenuPrimitive.Arrow>
  )
}

export function ContextMenuRoot({
  children,
  open,
  onOpenChange,
  defaultOpen = false,
}) {
  const [_open, _setOpen] = useControllableState({
    value: open,
    onChange: onOpenChange,
    defaultValue: defaultOpen,
  })
  return (
    <ContextCtx.Provider value={{ open: _open, setOpen: _setOpen }}>
      <ContextMenuPrimitive.Root
        open={_open}
        defaultOpen={_open}
        onOpenChange={(value) => _setOpen(value)}
      >
        {children}
      </ContextMenuPrimitive.Root>
    </ContextCtx.Provider>
  )
}

export const ContextMenuContent = React.forwardRef(function Button(
  { children, side = 'bottom', align = 'center', ...props },
  forwardedRef,
) {
  const { open } = useContext(ContextCtx)

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
        <ContextMenuPrimitive.Portal
          container={containerRef.current}
          forceMount
        >
          <ContextMenuPrimitive.Content
            asChild
            {...props}
            side={side}
            align={align}
            ref={forwardedRef}
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

export function ContextMenuItem({
  disabled,
  leftIcon,
  rightIcon,
  color = 'primary',
  onSelect,
  ...props
}) {
  return (
    <ContextMenuPrimitive.Item
      forceMount
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
        ],
      )}
    >
      {leftIcon ? <div>{leftIcon}</div> : null}
      <div className="flex-1">{props.children}</div>
      {rightIcon ? <div>{rightIcon}</div> : null}
    </ContextMenuPrimitive.Item>
  )
}

export function ContextMenuLabel(props) {
  return (
    <ContextMenuPrimitive.Label
      forceMount
      className="mt-1.5 mb-2 flex items-center px-3 text-xs font-semibold text-gray-500 "
    >
      {props.children}
    </ContextMenuPrimitive.Label>
  )
}

export function ContextMenuSeparator() {
  return (
    <ContextMenuPrimitive.Separator
      forceMount
      className="mx-[-2px] my-2 border-b border-gray-300"
    ></ContextMenuPrimitive.Separator>
  )
}

export function ContextMenuSub({ children }) {
  let [open, setOpen] = useState(false)
  return (
    <ContextSubCtx.Provider value={{ open, setOpen }}>
      <ContextMenuPrimitive.Sub
        open={open}
        defaultOpen={open}
        onOpenChange={(value) => setOpen(value)}
      >
        {children}
      </ContextMenuPrimitive.Sub>
    </ContextSubCtx.Provider>
  )
}
export function ContextMenuSubTrigger({ disabled, leftIcon, ...props }) {
  return (
    <ContextMenuPrimitive.SubTrigger
      forceMount
      disabled={disabled}
      className={cx(
        'relative flex items-center space-x-2 rounded px-3 py-2',
        'cursor-pointer  text-sm focus:outline-none',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        'text-gray-900',
        'data-[highlighted]:bg-primary-500 data-[highlighted]:text-white',
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

export const ContextMenuSubContent = React.forwardRef(function Button(
  { children, ...props },
  forwardedRef,
) {
  const { open } = useContext(ContextSubCtx)

  return (
    <AnimatePresence>
      {open ? (
        <ContextMenuPrimitive.Portal forceMount>
          <ContextMenuPrimitive.SubContent
            {...props}
            asChild
            ref={forwardedRef}
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
