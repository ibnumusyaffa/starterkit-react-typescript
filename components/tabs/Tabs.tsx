'use client'

import React, { createContext, useContext } from 'react'
import cx from '@/lib/cx'
import * as TabsPrimitive from '@radix-ui/react-tabs'

export type Variant = 'default' | 'pills'

type TabsProviderPrams = {
  variant: Variant
  orientation: 'vertical' | 'horizontal'
  grow: boolean
  align: 'start' | 'center' | 'end'
}

const TabCtx = createContext<TabsProviderPrams>({
  orientation: 'horizontal',
  variant: 'default',
  grow: true,
  align: 'start',
})

type TabsTriggerProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Trigger
> & {
  leftSection?: React.ReactNode
  rightSection?: React.ReactNode
}

export function TabsTrigger({
  children,
  disabled,
  leftSection,
  rightSection,
  ...props
}: TabsTriggerProps) {
  const { orientation, variant, grow } = useContext(TabCtx)

  const variantStyle: Record<Variant, string> = {
    default: cx(
      'group flex items-center border-transparent px-3 py-3  font-medium text-gray-700 ',
      'data-[state=active]:text-primary-700',
      {
        'border-b-[3px] data-[state=active]:border-b-primary-500':
          orientation === 'horizontal',
        'border-r-[3px] data-[state=active]:border-r-primary-500':
          orientation === 'vertical',
        'flex-1': grow,
      },
      {
        'hover:bg-gray-50': !disabled,
        'cursor-not-allowed opacity-50': disabled,
      }
    ),
    pills: cx(
      'group flex items-center rounded px-3 py-2 font-medium text-gray-500',
      'data-[state=active]:bg-primary-500 data-[state=active]:text-white',
      'ring-black ring-opacity-5 data-[state=active]:shadow-sm data-[state=active]:ring-1',
      {
        'flex-1': grow,
      },
      {
        'cursor-not-allowed opacity-50': disabled,
      }
    ),
  }
  return (
    <TabsPrimitive.Trigger {...props} asChild disabled={disabled}>
      <button className={variantStyle[variant]}>
        {leftSection ? <div className="mr-2"> {leftSection}</div> : null}
        {children}
        {rightSection ? <div className="ml-2">{rightSection}</div> : null}
      </button>
    </TabsPrimitive.Trigger>
  )
}

export function TabsList({ children }: { children?: React.ReactNode }) {
  const { orientation, variant, align } = useContext(TabCtx)
  return (
    <TabsPrimitive.List
      className={cx(
        'flex max-w-full',
        {
          'justify-start': align === 'start',
          'justify-center': align === 'center',
          'justify-end': align === 'end',
        },
        variant === 'default' && {
          'border-gray-200': true,
          'flex-row border-b': orientation === 'horizontal',
          'flex-col border-r': orientation === 'vertical',
        },

        variant === 'pills' && {
          // 'rounded border border-gray-200 bg-gray-50 p-1.5': true,
          'flex-row': orientation === 'horizontal',
          'flex-col': orientation === 'vertical',
        }
      )}
    >
      {children}
    </TabsPrimitive.List>
  )
}

type TabsRootProps = React.ComponentProps<typeof TabsPrimitive.Root> &
  Partial<TabsProviderPrams>

export function TabsRoot({
  orientation = 'horizontal',
  variant = 'default',
  align = 'start',
  grow = false,
  activationMode = 'manual',
  ...props
}: TabsRootProps) {
  return (
    <TabCtx.Provider value={{ orientation, variant, align, grow }}>
      <TabsPrimitive.Root
        {...props}
        activationMode={activationMode}
        orientation={orientation}
        className={cx({
          'block': orientation === 'horizontal',
          'flex flex-row': orientation === 'vertical',
        })}
      >
        {props.children}
      </TabsPrimitive.Root>
    </TabCtx.Provider>
  )
}

export function TabsContent(
  props: React.ComponentProps<typeof TabsPrimitive.Content>
) {
  const { orientation } = useContext(TabCtx)
  return (
    <TabsPrimitive.Content
      className={cx({
        'py-3': orientation === 'horizontal',
        'px-3': orientation === 'vertical',
      })}
      {...props}
    >
      {props.children}
    </TabsPrimitive.Content>
  )
}
