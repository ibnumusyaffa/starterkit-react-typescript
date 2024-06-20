'use client'

import React, { createContext, useContext } from 'react'
import Link from 'next/link'
import cx from '@/lib/cx'

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

type TabsTriggerProps = React.ComponentProps<typeof Link> & {
  leftSection?: React.ReactNode
  rightSection?: React.ReactNode
  disabled?: boolean
  active?: boolean
}

export function TabsTrigger({
  children,
  href,
  disabled,
  leftSection,
  rightSection,
  active,
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
    <Link
      href={disabled ? '#' : href}
      data-state={active ? 'active' : 'inactive'}
      {...props}
      className={variantStyle[variant]}
    >
      {leftSection ? <div className="mr-2"> {leftSection}</div> : null}
      {children}
      {rightSection ? <div className="ml-2">{rightSection}</div> : null}
    </Link>
  )
}

export function TabsList({ children }: { children?: React.ReactNode }) {
  const { orientation, variant, align } = useContext(TabCtx)
  return (
    <div
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
    </div>
  )
}

type TabsRootProps = Partial<TabsProviderPrams> & { children?: React.ReactNode }

export function TabsRoot({
  orientation = 'horizontal',
  variant = 'default',
  align = 'start',
  grow = false,
  ...props
}: TabsRootProps) {
  return (
    <TabCtx.Provider value={{ orientation, variant, align, grow }}>
      <div
        className={cx({
          'block': orientation === 'horizontal',
          'flex flex-row': orientation === 'vertical',
        })}
      >
        {props.children}
      </div>
    </TabCtx.Provider>
  )
}
