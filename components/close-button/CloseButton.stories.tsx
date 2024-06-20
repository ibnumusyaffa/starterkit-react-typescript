import type { Meta, StoryObj } from '@storybook/react'

import { CloseButton } from '@/components/close-button'

const meta = {
  title: 'Forms/CloseButton',
  component: CloseButton,
} satisfies Meta<typeof CloseButton>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  args: {},
  render: (args) => {
    return <CloseButton {...args}></CloseButton>
  },
}

export const Size: Story = {
  args: {},
  render: () => {
    return (
      <div className="flex flex-col">
        <CloseButton size="sm"></CloseButton>
        <CloseButton size="md"></CloseButton>
        <CloseButton size="lg"></CloseButton>
        <CloseButton size="xl"></CloseButton>
      </div>
    )
  },
}
