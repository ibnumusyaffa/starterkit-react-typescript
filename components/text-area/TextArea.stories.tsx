/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { TextArea } from '@/components/text-area'

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
} satisfies Meta<typeof TextArea>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  args: {},
  render: (args) => {
    return <TextArea {...args} placeholder="Email" />
  },
}

export const Variant: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="flex flex-wrap gap-5 md:w-1/2">
        <TextArea {...args} variant="outline" placeholder="outline"></TextArea>
        <TextArea {...args} variant="filled" placeholder="filled"></TextArea>
      </div>
    )
  },
}

export const Disable: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="flex flex-wrap gap-5 md:w-1/2">
        <TextArea
          {...args}
          disabled
          variant="outline"
          placeholder="outline"
        ></TextArea>
        <TextArea
          {...args}
          disabled
          variant="filled"
          placeholder="filled"
        ></TextArea>
      </div>
    )
  },
}

export const Error: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="flex flex-wrap gap-5 md:w-1/2">
        <TextArea
          {...args}
          error
          variant="outline"
          placeholder="outline"
        ></TextArea>
        <TextArea
          {...args}
          error
          variant="filled"
          placeholder="filled"
        ></TextArea>
      </div>
    )
  },
}

export const Size: Story = {
  render: () => {
    return (
      <div className="flex flex-wrap gap-5 md:w-1/2">
        <TextArea size="sm" placeholder="sm"></TextArea>
        <TextArea size="md" placeholder="md"></TextArea>
        <TextArea size="lg" placeholder="lg"></TextArea>
        <TextArea size="xl" placeholder="xl"></TextArea>
      </div>
    )
  },
}
