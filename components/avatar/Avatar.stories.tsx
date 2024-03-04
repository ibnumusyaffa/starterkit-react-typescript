import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarGroup, AvatarMore } from '@/components/avatar'
import {
  TooltipContent,
  TooltipRoot,
  TooltipTrigger,
} from '@/components/tooltip'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  args: {
    name: 'John Doe',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    size: 'lg',
  },
  render: (args) => {
    return <Avatar {...args}></Avatar>
  },
}

export const Fallback: Story = {
  render: () => {
    const src =
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    const srcNotFound = 'http://img.com/not-found'
    return (
      <div className="space-y-3 text-gray-800">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <Avatar src={src} name="Ibnu M"></Avatar>
          <div>Render image when available</div>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <Avatar src={srcNotFound} name="Ibnu Musyaffa"></Avatar>
          <div>Fallback to name when image failed to load</div>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <Avatar src={srcNotFound}></Avatar>
          <div>
            Fallback to icon when image is empty/not loaded and name is
            undefined
          </div>
        </div>
      </div>
    )
  },
}

export const Size: Story = {
  render: () => {
    return (
      <div className="flex space-x-5">
        <Avatar size="xs" name="xtra small"></Avatar>
        <Avatar size="sm" name="s mall"></Avatar>
        <Avatar size="md" name="medium dium"></Avatar>
        <Avatar size="lg" name="large ge"></Avatar>
        <Avatar size="xl" name="xtra large"></Avatar>
      </div>
    )
  },
}

export const WithTooltip: Story = {
  render: () => {
    return (
      <TooltipRoot delayDuration={0}>
        <TooltipTrigger>
          <Avatar size="md" name="John Doe"></Avatar>
        </TooltipTrigger>
        <TooltipContent color="dark">John Doe</TooltipContent>
      </TooltipRoot>
    )
  },
}

export const WithAvatarGroup: Story = {
  render: () => {
    return (
      <AvatarGroup>
        <Avatar name="xtra small"></Avatar>
        <Avatar name="s mall"></Avatar>
        <Avatar name="medium dium"></Avatar>
        <Avatar name="large ge"></Avatar>
        <Avatar name="xtra large"></Avatar>
        <AvatarMore>+4</AvatarMore>
      </AvatarGroup>
    )
  },
}

export const GroupTooltip: Story = {
  render: () => {
    return (
      <AvatarGroup>
        <TooltipRoot delayDuration={0}>
          <TooltipTrigger>
            <Avatar name="xtra small"></Avatar>
          </TooltipTrigger>
          <TooltipContent color="dark">John Doe</TooltipContent>
        </TooltipRoot>
        <TooltipRoot delayDuration={0}>
          <TooltipTrigger>
            <Avatar name="s mall"></Avatar>
          </TooltipTrigger>
          <TooltipContent color="dark">Billy</TooltipContent>
        </TooltipRoot>
        <TooltipRoot delayDuration={0}>
          <TooltipTrigger>
            <Avatar name="medium dium"></Avatar>
          </TooltipTrigger>
          <TooltipContent color="dark">Michael</TooltipContent>
        </TooltipRoot>
        <TooltipRoot delayDuration={0}>
          <TooltipTrigger>
            <Avatar name="large ge"></Avatar>
          </TooltipTrigger>
          <TooltipContent color="dark">Jordan</TooltipContent>
        </TooltipRoot>
        <AvatarMore>+4</AvatarMore>
      </AvatarGroup>
    )
  },
}

export const RenderAsChild: Story = {
  render: () => {
    return (
      <div className="flex space-x-5">
        <div className="flex items-center space-x-4">
          <Avatar src="https://google.com/not-found" name="Ibnu M" asChild>
            <button onClick={() => alert('clicked')}></button>
          </Avatar>
          <div>Render as button</div>
        </div>
        <div className="flex items-center space-x-4">
          <Avatar asChild>
            <a href="http://google.com" target="_blank"></a>
          </Avatar>
          <div>Render as link (a)</div>
        </div>
      </div>
    )
  },
}
