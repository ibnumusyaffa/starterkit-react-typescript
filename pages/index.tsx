import React from 'react'

import { ProgressCircle } from '@/components/progress-circle'

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
          <ProgressCircle
            key={item}
            color="primary"
            value={value}
            size={item}
          ></ProgressCircle>
        )
      })}
    </div>
  )
}
