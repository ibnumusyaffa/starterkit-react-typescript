import type { Meta, StoryObj } from '@storybook/react'

import { Radio } from '@/components/radio'

const meta = {
  title: 'Forms/Radio',
  component: Radio,
} satisfies Meta<typeof Radio>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  args: {
    label: 'This is a label',
    value: '1',
    name: 'example',
    size: 'sm',
  },
  render: (args) => {
    return <Radio {...args}></Radio>
  },
}

export const State: Story = {
  render: () => {
    return (
      <div className="flex flex-wrap gap-5">
        <Radio checked={false} label="unchecked" value="1"></Radio>
        <Radio checked label="checked" value="2"></Radio>
        <Radio disabled label="disabled" value="3"></Radio>
        <Radio checked disabled label="disabled checked" value="3"></Radio>
      </div>
    )
  },
}

export const Size: Story = {
  render: () => {
    return (
      <div className="flex space-x-5 align-top">
        <Radio
          size="sm"
          name="example"
          label="size sm"
          value="1"
          defaultChecked
        ></Radio>
        <Radio size="md" name="example" label="size md" value="2"></Radio>
        <Radio size="lg" name="example" label="size lg" value="3"></Radio>
        <Radio size="xl" name="example" label="size xl" value="4"></Radio>
      </div>
    )
  },
}
