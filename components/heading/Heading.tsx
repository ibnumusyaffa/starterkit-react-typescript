import React from 'react'

type HeadingProps = {
  children?: React.ReactNode
}

export function H1({ children }: HeadingProps) {
  return <h1 className="text-3xl font-bold text-gray-800">{children}</h1>
}

export function H2({ children }: HeadingProps) {
  return <h1 className="text-2xl font-bold text-gray-800">{children}</h1>
}

export function H3({ children }: HeadingProps) {
  return <h1 className="text-xl font-bold text-gray-800">{children}</h1>
}

export function H4({ children }: HeadingProps) {
  return <h1 className="text-lg font-bold text-gray-800">{children}</h1>
}

export function H5({ children }: HeadingProps) {
  return <h1 className="text-base font-bold text-gray-800">{children}</h1>
}

export function H6({ children }: HeadingProps) {
  return <h1 className="text-sm font-bold text-gray-800">{children}</h1>
}
