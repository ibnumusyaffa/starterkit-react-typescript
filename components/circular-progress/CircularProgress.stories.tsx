/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { CircularProgress } from '@/components/circular-progress'

const meta = {
  title: 'Data Display/CircularProgress',
  component: CircularProgress,
} satisfies Meta<typeof CircularProgress>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  args: {
    color: 'primary',
  },
  render: (args) => {
    const [value, setValue] = React.useState(0)

    React.useEffect(() => {
      const interval = setInterval(() => {
        setValue((value) => (value + 1) % 101)
      }, 100)

      return () => clearInterval(interval)
    }, [])
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

    return (
      <div className="space-y-5">
        {sizes.map((size) => {
          return (
            <CircularProgress
              key={size}
              {...args}
              value={value}
              size={size}
            ></CircularProgress>
          )
        })}
      </div>
    )
  },
}
