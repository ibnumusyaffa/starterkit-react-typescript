import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '@/components/checkbox'

const meta = {
  title: 'Forms/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  args: {
    label: 'Label',
    name: 'example',
    value: '1',
  },
  render: (args) => {
    return <Checkbox {...args}></Checkbox>
  },
}

export const State: Story = {
  render: () => {
    return (
      <div className="flex flex-wrap gap-5">
        <Checkbox label="disabled" name="name" value="1" disabled></Checkbox>
        <Checkbox label="enable" name="name" value="1"></Checkbox>
        <Checkbox
          label="disabled checked"
          checked
          name="name"
          value="1"
          disabled
        ></Checkbox>
        <Checkbox
          label="enable checked"
          name="name"
          checked
          value="2"
        ></Checkbox>
      </div>
    )
  },
}

export const IndeterminateState: Story = {
  render: () => {
    return (
      <div className="flex flex-wrap gap-5">
        <Checkbox
          indeterminate
          label="disabled indeterminate"
          name="name"
          value="1"
          disabled
        ></Checkbox>
        <Checkbox
          indeterminate
          label="enable indeterminate"
          name="name"
          value="1"
        ></Checkbox>
        <Checkbox
          indeterminate
          label="disabled indeterminate"
          checked
          name="name"
          value="1"
          disabled
        ></Checkbox>
        <Checkbox
          indeterminate
          label="enable indeterminate"
          name="name"
          checked
          value="2"
        ></Checkbox>
      </div>
    )
  },
}

export const Size: Story = {
  render: () => {
    return (
      <div className="flex space-x-5 align-top">
        <Checkbox
          label="size sm"
          name="name"
          value="1"
          defaultChecked
          size="sm"
        ></Checkbox>
        <Checkbox
          label="size md"
          name="name"
          value="1"
          defaultChecked
          size="md"
        ></Checkbox>
        <Checkbox
          label="size lg"
          name="name"
          value="1"
          defaultChecked
          size="lg"
        ></Checkbox>
        <Checkbox
          label="size xl"
          name="name"
          value="1"
          defaultChecked
          size="xl"
        ></Checkbox>
      </div>
    )
  },
}
