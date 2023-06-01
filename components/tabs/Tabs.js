import React, { createContext, useContext } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import cx from 'clsx'
const TabCtx = createContext({ orientation: 'horizontal' })

export function TabsTrigger({
  children,
  as,
  disabled,
  leftSection,
  rightSection,
  ...props
}) {
  const Component = as ? as : 'button'
  const { orientation, variant, grow } = useContext(TabCtx)

  const variantStyle = {
    default: cx(
      'px-5 py-3 font-medium text-gray-700  border-transparent group ',
      'data-[state=active]:bg-primary-50 data-[state=active]:text-primary-700',
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
      },
    ),
    outline: cx(
      'px-5 py-3 font-medium text-gray-700 border-transparent group',
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
      },
    ),
    pills: cx(
      'px-5 py-2 font-medium rounded text-gray-500 group',
      'data-[state=active]:bg-primary-500 data-[state=active]:text-white',
      'data-[state=active]:ring-1 ring-black ring-opacity-5 data-[state=active]:shadow-sm',
      {
        'flex-1': grow,
      },
      {
        'cursor-not-allowed opacity-50': disabled,
      },
    ),
  }
  return (
    <Tabs.Trigger {...props} asChild disabled={disabled}>
      <Component className={variantStyle[variant]}>
        <span className="flex space-x-3">
          {leftSection}
          <span className="whitespace-nowrap">{children}</span>
          {rightSection}
        </span>
      </Component>
    </Tabs.Trigger>
  )
}

export function TabsList({ children }) {
  const { orientation, variant, align } = useContext(TabCtx)
  return (
    <Tabs.List
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
        },
      )}
    >
      {children}
    </Tabs.List>
  )
}

export function TabsRoot({
  orientation,
  variant,
  align,
  grow,
  activationMode = 'manual',
  ...props
}) {
  return (
    <TabCtx.Provider value={{ orientation, variant, align, grow }}>
      <Tabs.Root
        {...props}
        activationMode={activationMode}
        orientation={orientation}
        className={cx({
          'block': orientation === 'horizontal',
          'flex flex-row': orientation === 'vertical',
        })}
      >
        {props.children}
      </Tabs.Root>
    </TabCtx.Provider>
  )
}

export function TabsContent(props) {
  return (
    <Tabs.Content className="p-3" {...props}>
      {props.children}
    </Tabs.Content>
  )
}
