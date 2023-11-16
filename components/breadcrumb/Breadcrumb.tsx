'use client'

import React, { createContext, useContext } from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import clsx from 'clsx'

type BreadcrumbProps = {
  children?: React.ReactNode
  separator?: React.ReactNode
}
const BreadcrumbCtx = createContext<BreadcrumbProps>({})

export function Breadcrumb({ children, separator }: BreadcrumbProps) {
  return (
    <BreadcrumbCtx.Provider value={{ separator }}>
      <nav aria-label="breadcrumb">
        <ol className="flex items-center">{children}</ol>
      </nav>
    </BreadcrumbCtx.Provider>
  )
}

export function BreadcrumbItem({
  children,
  asChild,
  ...props
}: {
  children: React.ReactNode
  asChild?: boolean
}) {
  const { separator } = useContext(BreadcrumbCtx)
  const Component = asChild ? Slot : 'button'
  return (
    <li
      className={clsx(
        'group inline-flex items-center hover:cursor-pointer',
        'text-gray-600 last:font-medium last:text-gray-700'
      )}
    >
      <Component {...props} className=" hover:text-primary-700 hover:underline">
        <Slottable>{children}</Slottable>
      </Component>
      <div className="pointer-events-none mx-2 group-last:hidden">
        {separator ? separator : '/'}
      </div>
    </li>
  )
}
