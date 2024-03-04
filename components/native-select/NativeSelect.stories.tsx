/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import type { Meta, StoryObj } from '@storybook/react'

import { NativeSelect } from '@/components/native-select'

const meta = {
  title: 'Components/NativeSelect',
  component: NativeSelect,
} satisfies Meta<typeof NativeSelect>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  args: {},
  render: (args) => {
    return (
      <NativeSelect {...args}>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
      </NativeSelect>
    )
  },
}

export const Variant: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="space-y-5">
        <NativeSelect {...args} fullWidth variant="outline">
          <option>Outline</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
        </NativeSelect>
        <NativeSelect {...args} fullWidth variant="filled">
          <option>Filled</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
        </NativeSelect>
      </div>
    )
  },
}

export const Size: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="space-y-5">
        <NativeSelect {...args} fullWidth size="sm">
          <option>sm</option>
        </NativeSelect>
        <NativeSelect {...args} fullWidth size="md" placeholder="Testt">
          <option>md</option>
        </NativeSelect>
        <NativeSelect {...args} fullWidth size="lg">
          <option>lg</option>
        </NativeSelect>
        <NativeSelect {...args} fullWidth size="xl">
          <option>xl</option>
        </NativeSelect>
      </div>
    )
  },
}

export const Error: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="space-y-5">
        <NativeSelect {...args} fullWidth error variant="outline">
          <option>Outline</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
        </NativeSelect>
        <NativeSelect {...args} fullWidth error variant="filled">
          <option>Filled</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
        </NativeSelect>
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="space-y-5">
        <NativeSelect {...args} fullWidth disabled variant="outline">
          <option>Outline</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
        </NativeSelect>
        <NativeSelect {...args} fullWidth disabled variant="filled">
          <option>Filled</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
        </NativeSelect>
      </div>
    )
  },
}

export const WithLeftIcon: Story = {
  args: {},
  render: (args) => {
    return (
      <NativeSelect
        {...args}
        fullWidth
        leftIcon={<ArrowLongRightIcon className="h-5 w-5"></ArrowLongRightIcon>}
      >
        <option>Test</option>
      </NativeSelect>
    )
  },
}
