import type { Meta, StoryObj } from '@storybook/react'

import { Alert } from '@/components/alert'

const meta = {
  title: 'Feedback/Alert',
  component: Alert,
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  args: {
    withIcon: true,
    title: 'Order Archived',
  },
  render: (args) => {
    return (
      <div className="space-y-5">
        <Alert {...args} type="danger">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Alert>
        <Alert {...args} type="warning">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Alert>
        <Alert {...args} type="success">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Alert>
        <Alert {...args} type="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Alert>
        <Alert {...args} type="neutral">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Alert>
      </div>
    )
  },
}

export const DescriptionOnly: Story = {
  args: {},
  render: (args) => {
    return (
      <Alert {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Alert>
    )
  },
}

export const TitleOnly: Story = {
  args: {},
  render: (args) => {
    return <Alert {...args} title="Order archived"></Alert>
  },
}

export const Closeable: Story = {
  args: {
    closeable: true,
    withIcon: true,
    title: 'Order archived',
  },
  render: (args) => {
    return (
      <Alert {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Alert>
    )
  },
}

export const WithAccent: Story = {
  args: {},
  render: (args) => {
    return (
      <Alert {...args} withAccent title="Order archived">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Alert>
    )
  },
}
