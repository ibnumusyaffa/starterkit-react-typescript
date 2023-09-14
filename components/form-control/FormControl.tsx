import React from 'react'

export function FormControl({ children }: { children?: React.ReactNode }) {
  return <div className="relative space-y-2">{children}</div>
}

export function FormLabel({
  children,
  required,
  ...props
}: React.ComponentProps<'label'> & {
  children?: React.ReactNode
  required?: boolean
}) {
  return (
    <label
      {...props}
      className="block text-sm font-medium leading-none text-gray-700"
    >
      {children}
      {required ? <span className="ml-1 text-danger-500">*</span> : null}
    </label>
  )
}
export function FormErrorMessage({
  children,
  ...props
}: {
  children?: React.ReactNode
  required?: boolean
}) {
  return (
    <div {...props} className=" text-sm leading-none text-danger-500">
      {children}
    </div>
  )
}

export function FormDescription({ children }: { children?: React.ReactNode }) {
  return <div className=" text-sm leading-none text-gray-600">{children}</div>
}
