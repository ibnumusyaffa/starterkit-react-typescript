'use client'

import React, { createContext, useContext } from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import cx from '@/lib/cx'

export type Variant = 'default' | 'outline' | 'pills'

type TabsProviderPrams = {
  variant: Variant
  orientation?: 'vertical' | 'horizontal'
  grow?: boolean
  align?: 'start' | 'center' | 'end'
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
  asChild?: boolean
  leftSection?: React.ReactNode
  rightSection?: React.ReactNode
}

export function TabsTrigger({
  children,
  asChild,
  disabled,
  leftSection,
  rightSection,
  ...props
}: TabsTriggerProps) {
  const Component = asChild ? Slot : 'button'
  const { orientation, variant, grow } = useContext(TabCtx)

  const variantStyle: Record<Variant, string> = {
    default: cx(
      'flex items-center px-5 py-3 font-medium text-gray-700  border-transparent group ',
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
    outline: cx(
      'flex items-center px-3 py-3 font-medium text-gray-700 border-transparent group',
      'data-[state=active]:bg-white data-[state=active]:border-gray-300',
      {
        '-mb-[1px] rounded-tl rounded-tr border-t border-l border-r':
          orientation === 'horizontal',
        '-mr-[1px] rounded-tl rounded-bl border-t border-l border-b':
          orientation === 'vertical',
        'flex-1': grow,
      },
      {
        'cursor-not-allowed opacity-50': disabled,
      }
    ),
    pills: cx(
      'flex items-center px-3 py-2 font-medium rounded text-gray-500 group',
      'data-[state=active]:bg-primary-500 data-[state=active]:text-white',
      'data-[state=active]:ring-1 ring-black ring-opacity-5 data-[state=active]:shadow-sm',
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
      <Component className={variantStyle[variant]}>
        <div className="mr-2"> {leftSection}</div>
        <Slottable>{children}</Slottable>
        <div className="ml-2"> {rightSection}</div>
      </Component>
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
        variant === 'outline' && {
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

type TabsRootProps = React.ComponentProps<typeof TabsPrimitive.Tabs> &
  TabsProviderPrams

export function TabsRoot({
  orientation,
  variant,
  align,
  grow,
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
  return (
    <TabsPrimitive.Content className="p-3" {...props}>
      {props.children}
    </TabsPrimitive.Content>
  )
}
