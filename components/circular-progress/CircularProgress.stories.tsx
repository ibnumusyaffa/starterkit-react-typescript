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

    return (
      <div className="space-y-5">
        <CircularProgress {...args} value={value}></CircularProgress>
      </div>
    )
  },
}

export const Size: Story = {
  args: {
    color: 'primary',
  },
  render: (args) => {
    return (
      <div className="space-y-5">
        <CircularProgress {...args} size='xs' value={50}></CircularProgress>
        <CircularProgress {...args} size='sm'  value={50}></CircularProgress>
        <CircularProgress {...args} size='md'  value={50}></CircularProgress>
        <CircularProgress {...args} size='lg'  value={50}></CircularProgress>
        <CircularProgress {...args} size='xl'  value={50}></CircularProgress>
      </div>
    )
  },
}
