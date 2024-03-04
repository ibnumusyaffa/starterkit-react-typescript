import type { Meta, StoryObj } from '@storybook/react'

import { Badge } from '@/components/badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  args: {
    children: 'Badge',
  },
  render: (args) => {
    return <Badge {...args} />
  },
}

export const Variant: Story = {
  args: {
    size: 'sm',
  },
  render: (args) => {
    const colors = [
      'primary',
      'secondary',
      'success',
      'warning',
      'info',
      'danger',
      'neutral',
    ] as const
    return (
      <div className="space-y-5">
        {colors.map((item) => (
          <div key={item} className="space-x-5">
            <Badge {...args} color={item} variant="solid">
              solid
            </Badge>
            <Badge {...args} color={item} variant="light">
              light
            </Badge>
            <Badge {...args} color={item} variant="light-outline">
              light-outline
            </Badge>
            <Badge {...args} color={item} variant="outline">
              outline
            </Badge>
          </div>
        ))}
      </div>
    )
  },
}

export const Size: Story = {
  args: {
    size: 'sm',
    variant: 'solid',
  },
  render: (args) => {
    return (
      <div className="space-x-5">
        <Badge {...args} size="xs">
          Badge xs
        </Badge>
        <Badge {...args} size="sm">
          Badge sm
        </Badge>
        <Badge {...args} size="md">
          Badge md
        </Badge>
        <Badge {...args} size="lg">
          Badge lg
        </Badge>
        <Badge {...args} size="xl">
          Badge xl
        </Badge>
      </div>
    )
  },
}

export const WithDot: Story = {
  args: {
    size: 'sm',
  },
  render: (args) => {
    const colors = [
      'primary',
      'secondary',
      'success',
      'warning',
      'info',
      'danger',
      'neutral',
    ] as const
    return (
      <div className="space-y-5">
        {colors.map((item) => (
          <div key={item} className="space-x-5">
            <Badge {...args} color={item} withDot variant="solid">
              solid
            </Badge>
            <Badge {...args} color={item} withDot variant="light">
              light
            </Badge>
            <Badge {...args} color={item} withDot variant="light-outline">
              light-outline
            </Badge>
            <Badge {...args} color={item} withDot variant="outline">
              outline
            </Badge>
          </div>
        ))}
      </div>
    )
  },
}

export const Rounded: Story = {
  args: {
    size: 'sm',
  },
  render: (args) => {
    return (
      <div className="space-x-5">
        <Badge {...args} rounded="none">
          rounded none
        </Badge>
        <Badge {...args} rounded="xs">
          rounded xs
        </Badge>
        <Badge {...args} rounded="sm">
          rounded sm
        </Badge>
        <Badge {...args} rounded="md">
          rounded md
        </Badge>
        <Badge {...args} rounded="lg">
          rounded lg
        </Badge>
        <Badge {...args} rounded="xl">
          rounded xl
        </Badge>
        <Badge {...args} rounded="full">
          rounded full
        </Badge>
      </div>
    )
  },
}

export const RenderAsChild: Story = {
  args: {
    size: 'sm',
  },
  render: (args) => {
    return (
      <div className="space-x-5">
        <Badge {...args} variant="light" asChild>
          <button>render as button</button>
        </Badge>
        <Badge {...args} variant="light" asChild>
          <a href="http://google.com" target="_blank">
            rendar as link (a)
          </a>
        </Badge>
      </div>
    )
  },
}
