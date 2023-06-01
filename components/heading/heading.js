export function H1({ children, ...props }) {
  return (
    <h1 {...props} className="text-3xl font-bold text-gray-800">
      {children}
    </h1>
  )
}

export function H2({ children, ...props }) {
  return (
    <h1 {...props} className="text-2xl font-bold text-gray-800">
      {children}
    </h1>
  )
}

export function H3({ children, ...props }) {
  return (
    <h1 {...props} className="text-xl font-bold text-gray-800">
      {children}
    </h1>
  )
}

export function H4({ children, ...props }) {
  return (
    <h1 {...props} className="text-lg font-bold text-gray-800">
      {children}
    </h1>
  )
}

export function H5({ children, ...props }) {
  return (
    <h1 {...props} className="text-base font-bold text-gray-800">
      {children}
    </h1>
  )
}

export function H6({ children, ...props }) {
  return (
    <h1 {...props} className="text-sm font-bold text-gray-800">
      {children}
    </h1>
  )
}
