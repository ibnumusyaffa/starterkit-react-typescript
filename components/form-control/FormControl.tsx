import React from 'react'

export function FormControl({ children }: { children: React.ReactNode }) {
  return <div className="relative">{children}</div>
}

export function FormLabel({
  children,
  required,
  ...props
}: {
  children: React.ReactNode
  required?: boolean
}) {
  return (
    <label {...props} className="mb-2 block font-medium text-gray-700">
      {children}
      {required ? <span className="ml-1 text-danger-500">*</span> : null}
    </label>
  )
}
export function FormErrorMessage({
  children,
  ...props
}: {
  children: React.ReactNode
  required?: boolean
}) {
  return (
    <div {...props} className="mt-2 text-sm text-danger-500">
      {children}
    </div>
  )
}

export function FormHelperText({
  children,
  ...props
}: {
  children: React.ReactNode
  required?: boolean
}) {
  return (
    <div {...props} className="mt-2 text-sm text-gray-600">
      {children}
    </div>
  )
}
