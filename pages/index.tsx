import React from 'react'

import { CircularProgress } from '@/components/circular-progress'

export default function Page() {
  const [value, setValue] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => (value + 1) % 101)
    }, 100)

    return () => clearInterval(interval)
  }, [])
  const colors = ['xs', 'sm', 'md', 'lg', 'xl'] as const

  return (
    <div className="space-y-5">
      {colors.map((item) => {
        return (
          <CircularProgress
            key={item}
            color="primary"
            value={value}
            size={item}
          ></CircularProgress>
        )
      })}
    </div>
  )
}
