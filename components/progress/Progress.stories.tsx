/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Progress } from '@/components/progress'

const meta = {
  title: 'Components/Progress',
  component: Progress,
} satisfies Meta<typeof Progress>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  args: {
    color: 'primary',
    max: 100,
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
        <Progress {...args} value={50}></Progress>
        <Progress {...args} value={value}></Progress>
      </div>
    )
  },
}

export const WithStripe: Story = {
  args: {
    color: 'primary',
    max: 100,
    value: 50,
    withStripe: true,
  },
  render: (args) => {
    return (
      <div className="space-y-5">
        <Progress {...args}></Progress>
      </div>
    )
  },
}

export const Size: Story = {
  args: {
    color: 'primary',
    max: 100,
    value: 50,
    withStripe: true,
  },
  render: (args) => {
    return (
      <div className="space-y-5">
        <Progress {...args} size="sm"></Progress>
        <Progress {...args} size="md"></Progress>
        <Progress {...args} size="lg"></Progress>
        <Progress {...args} size="xl"></Progress>
      </div>
    )
  },
}
