import type { Meta, StoryObj } from '@storybook/react'

import { Spinner } from '@/components/spinner'

const meta = {
  title: 'Feedback/Spinner',
  component: Spinner,
} satisfies Meta<typeof Spinner>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  render: () => {
    return (
      <div className="flex flex-wrap gap-5">
        <Spinner className="h-7 w-7 text-primary-500"></Spinner>
        <Spinner className="h-7 w-7 text-secondary-500"></Spinner>
        <Spinner className="h-7 w-7 text-success-500"></Spinner>
        <Spinner className="h-7 w-7 text-info-500"></Spinner>
        <Spinner className="h-7 w-7 text-danger-500"></Spinner>
        <Spinner className="h-7 w-7 text-warning-500"></Spinner>
      </div>
    )
  },
}
