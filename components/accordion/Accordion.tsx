'use client'

import React from 'react'
import cx from '@/lib/cx'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

export const AccordionRoot = AccordionPrimitive.Root

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(function AccordionItem(props, ref) {
  return (
    <AccordionPrimitive.Item
      {...props}
      className={cx('border-b border-gray-200')}
      ref={ref}
    >
      {props.children}
    </AccordionPrimitive.Item>
  )
})

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(function AccordionItem(props, ref) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        {...props}
        className={cx(
          'flex flex-1 items-center justify-between p-3 font-medium text-gray-700 transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-opacity-40 [&[data-state=open]>svg]:rotate-180'
        )}
        ref={ref}
      >
        {props.children}
        <ChevronDownIcon
          className="h-4 w-4 transition-transform duration-200"
          aria-hidden
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(function AccordionContent(props, ref) {
  return (
    <AccordionPrimitive.Content
      {...props}
      className={cx(
        'overflow-hidden text-sm text-gray-700 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
      )}
      ref={ref}
    >
      <div className="px-3 pb-3 pt-2">{props.children}</div>
    </AccordionPrimitive.Content>
  )
})
