import clsx from 'clsx'
import React, { useContext, createContext } from 'react'

const BreadcrumbCtx = createContext()

export function Breadcrumb({ children, separator, as }) {
  return (
    <BreadcrumbCtx.Provider value={{ separator, as }}>
      <nav aria-label="breadcrumb">
        <ol className="flex items-center">{children}</ol>
      </nav>
    </BreadcrumbCtx.Provider>
  )
}

export function BreadcrumbItem({ children, ...props }) {
  const { separator, as } = useContext(BreadcrumbCtx)
  const Component = as ? as : 'a'
  return (
    <li
      className={clsx(
        'group inline-flex items-center hover:cursor-pointer',
        'text-gray-600 last:font-medium last:text-gray-700',
      )}
    >
      <Component {...props} className=" hover:text-primary-700 hover:underline">
        {children}
      </Component>
      <div className="pointer-events-none mx-2 group-last:hidden">
        {separator ? separator : '/'}
      </div>
    </li>
  )
}
