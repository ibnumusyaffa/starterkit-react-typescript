import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Switch } from '@/components/switch'

const meta = {
  title: 'Forms/Switch',
  component: Switch,
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  args: {
    defaultChecked: false,
  },
  render: (args) => {
    return <Switch {...args} />
  },
}

export const State: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="space-x-5">
        <Switch {...args} size="md" checked={false} label="unchecked"></Switch>
        <Switch
          {...args}
          id="switch-1"
          size="md"
          disabled
          label="disabled unchecked"
        ></Switch>

        <Switch {...args} size="md" checked label="checked"></Switch>

        <Switch
          {...args}
          size="md"
          checked
          disabled
          label="disable checked"
        ></Switch>
      </div>
    )
  },
}

export const Size: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="grid gap-5">
        <Switch {...args} size="sm" label="sm label"></Switch>
        <Switch {...args} size="md" label="md label"></Switch>
        <Switch {...args} size="lg" label="lg label"></Switch>
        <Switch {...args} size="xl" label="xl label"></Switch>
      </div>
    )
  },
}
