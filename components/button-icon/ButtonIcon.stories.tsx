import Link from 'next/link'
import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import type { Meta, StoryObj } from '@storybook/react'

import { ButtonGroup } from '@/components/button'
import { ButtonIcon } from '@/components/button-icon'

const meta = {
  title: 'Forms/ButtonIcon',
  component: ButtonIcon,
} satisfies Meta<typeof ButtonIcon>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  render: () => {
    return (
      <div className="flex gap-3">
        <ButtonIcon size="sm" color="danger" variant="subtle">
          <TrashIcon className="h-4 w-4"></TrashIcon>
        </ButtonIcon>
        <ButtonIcon size="sm" color="success" variant="subtle">
          <PencilIcon className="h-4 w-4"></PencilIcon>
        </ButtonIcon>
        <ButtonIcon size="sm" color="info" variant="subtle">
          <EyeIcon className="h-4 w-4"></EyeIcon>
        </ButtonIcon>
      </div>
    )
  },
}

export const Variant: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="flex space-x-3">
        <ButtonIcon {...args} variant="solid">
          <PencilIcon className="h-4 w-4"></PencilIcon>
        </ButtonIcon>
        <ButtonIcon {...args} variant="light">
          <PencilIcon className="h-4 w-4"></PencilIcon>
        </ButtonIcon>
        <ButtonIcon {...args} variant="outline">
          <PencilIcon className="h-4 w-4"></PencilIcon>
        </ButtonIcon>
        <ButtonIcon {...args} variant="subtle">
          <PencilIcon className="h-4 w-4"></PencilIcon>
        </ButtonIcon>
        <ButtonIcon {...args} variant="default">
          <PencilIcon className="h-4 w-4"></PencilIcon>
        </ButtonIcon>
      </div>
    )
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
  render: (args) => {
    return (
      <div className="flex space-x-3">
        <ButtonIcon {...args} variant="solid">
          <PencilIcon className="h-4 w-4"></PencilIcon>
        </ButtonIcon>
        <ButtonIcon {...args} variant="light">
          <PencilIcon className="h-4 w-4"></PencilIcon>
        </ButtonIcon>
        <ButtonIcon {...args} variant="outline">
          <PencilIcon className="h-4 w-4"></PencilIcon>
        </ButtonIcon>
        <ButtonIcon {...args} variant="subtle">
          <PencilIcon className="h-4 w-4"></PencilIcon>
        </ButtonIcon>
        <ButtonIcon {...args} variant="default">
          <PencilIcon className="h-4 w-4"></PencilIcon>
        </ButtonIcon>
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    return (
      <div className="flex space-x-3">
        <ButtonIcon {...args} variant="solid">
          <PencilIcon className="h-4 w-4"></PencilIcon>
        </ButtonIcon>
        <ButtonIcon {...args} variant="light">
          <PencilIcon className="h-4 w-4"></PencilIcon>
        </ButtonIcon>
        <ButtonIcon {...args} variant="outline">
          <PencilIcon className="h-4 w-4"></PencilIcon>
        </ButtonIcon>
        <ButtonIcon {...args} variant="subtle">
          <PencilIcon className="h-4 w-4"></PencilIcon>
        </ButtonIcon>
        <ButtonIcon {...args} variant="default">
          <PencilIcon className="h-4 w-4"></PencilIcon>
        </ButtonIcon>
      </div>
    )
  },
}

export const Size: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="flex space-x-3">
        <ButtonIcon {...args} size="sm">
          <PencilIcon className="h-4 w-4"></PencilIcon>
        </ButtonIcon>
        <ButtonIcon {...args} size="md">
          <PencilIcon className="h-5 w-5"></PencilIcon>
        </ButtonIcon>
        <ButtonIcon {...args} size="lg">
          <PencilIcon className="h-6 w-6"></PencilIcon>
        </ButtonIcon>
        <ButtonIcon {...args} size="xl">
          <PencilIcon className="h-7 w-7"></PencilIcon>
        </ButtonIcon>
      </div>
    )
  },
}

export const ButtonIconGroup_: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="space-y-3">
        <div className="space-y-3">
          <ButtonGroup>
            <ButtonIcon {...args} variant="outline">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
            <ButtonIcon {...args} variant="outline">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
            <ButtonIcon {...args} variant="outline">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
          </ButtonGroup>

          <ButtonGroup>
            <ButtonIcon {...args} variant="light">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
            <ButtonIcon {...args} variant="light">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
            <ButtonIcon {...args} variant="light">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonIcon {...args} variant="solid">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
            <ButtonIcon {...args} variant="solid">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
            <ButtonIcon {...args} variant="solid">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
          </ButtonGroup>
          <ButtonGroup>
            <ButtonIcon {...args} variant="subtle">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
            <ButtonIcon {...args} variant="subtle">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
            <ButtonIcon {...args} variant="subtle">
              <PencilIcon className="h-5 w-5"></PencilIcon>
            </ButtonIcon>
          </ButtonGroup>
        </div>
      </div>
    )
  },
}

export const RenderAsLink: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="flex space-x-3">
        <ButtonIcon {...args} asChild>
          <a href="http://google.com" target="_blank">
            <PencilIcon className="h-5 w-5"></PencilIcon>
          </a>
        </ButtonIcon>
        <ButtonIcon {...args} asChild>
          <Link href="/docs/checkbox">
            <PencilIcon className="h-5 w-5"></PencilIcon>
          </Link>
        </ButtonIcon>
      </div>
    )
  },
}
