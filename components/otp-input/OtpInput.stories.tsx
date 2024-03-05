import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { OtpInput } from '@/components/otp-input'

const meta = {
  title: 'Components/OtpInput',
  component: OtpInput,
} satisfies Meta<typeof OtpInput>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  args: {},
  render: (args) => {
    const [value, setValue] = React.useState('')
    return <OtpInput {...args} value={value} onChange={setValue} />
  },
}

export const Error: Story = {
  args: {},
  render: (args) => {
    const [value, setValue] = React.useState('')
    return <OtpInput {...args} error value={value} onChange={setValue} />
  },
}


export const Disabled: Story = {
  args: {},
  render: (args) => {
    const [value, setValue] = React.useState('')
    return <OtpInput {...args} disabled  value={value} onChange={setValue} />
  },
}

