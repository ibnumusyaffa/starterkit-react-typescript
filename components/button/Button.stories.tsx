import Link from 'next/link'
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline'
import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonGroup } from '@/components/button'

const meta = {
  title: 'Components/Button',
  component: Button,
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  args: {
    children: 'Button',
  },
  render: (args) => {
    return <Button {...args}>{args.children}</Button>
  },
}

export const Variant: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => {
    return (
      <div className="space-x-3">
        <Button {...args} variant="solid">
          Solid
        </Button>
        <Button {...args} variant="light">
          Light
        </Button>
        <Button {...args} variant="outline">
          Outline
        </Button>
        <Button {...args} variant="subtle">
          Subtle
        </Button>
        <Button {...args} variant="default">
          Default
        </Button>
      </div>
    )
  },
}

export const LoadingState: Story = {
  args: {
    loading: true,
  },
  render: (args) => {
    return (
      <div className="space-x-3">
        <Button {...args} variant="solid">
          Loading
        </Button>
        <Button {...args} variant="light">
          Loading
        </Button>
        <Button {...args} variant="outline">
          Loading
        </Button>
        <Button {...args} variant="subtle">
          Loading
        </Button>
        <Button {...args} variant="default">
          Loading
        </Button>
      </div>
    )
  },
}

export const DisableState: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    return (
      <div className="space-x-3">
        <Button {...args} variant="solid">
          Loading
        </Button>
        <Button {...args} variant="light">
          Loading
        </Button>
        <Button {...args} variant="outline">
          Loading
        </Button>
        <Button {...args} variant="subtle">
          Loading
        </Button>
        <Button {...args} variant="default">
          Loading
        </Button>
      </div>
    )
  },
}

export const Size: Story = {
  render: (args) => {
    return (
      <div className="space-x-3">
        <Button {...args} size="sm">
          Button sm
        </Button>
        <Button {...args} size="md">
          Button md
        </Button>
        <Button {...args} size="lg">
          Button lg
        </Button>
        <Button {...args} size="xl">
          Button xl
        </Button>
      </div>
    )
  },
}

export const ButtonGroup_: Story = {
  render: (args) => {
    return (
      <div className="space-y-3">
        <ButtonGroup>
          <Button {...args} variant="outline">
            Button 1
          </Button>
          <Button {...args} variant="outline">
            Button 2
          </Button>
          <Button {...args} variant="outline">
            Button 3
          </Button>
          <Button {...args} variant="outline">
            Button 4
          </Button>
          <Button {...args} variant="outline">
            Button 4
          </Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button {...args} variant="light">
            Button 1
          </Button>
          <Button {...args} variant="light">
            Button 2
          </Button>
          <Button {...args} variant="light">
            Button 3
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button {...args} variant="solid">
            Button 1
          </Button>
          <Button {...args} variant="solid">
            Button 2
          </Button>
          <Button {...args} variant="solid">
            Button 3
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button {...args} variant="subtle">
            Button 1
          </Button>
          <Button {...args} variant="subtle">
            Button 2
          </Button>
          <Button {...args} variant="subtle">
            Button 3
          </Button>
        </ButtonGroup>
      </div>
    )
  },
}

export const WithIcon: Story = {
  render: (args) => {
    return (
      <div className="space-y-5">
        <div className="flex flex-wrap gap-5">
          <Button
            {...args}
            variant="light"
            leftIcon={
              <ArrowLongLeftIcon className="h-5 w-5"></ArrowLongLeftIcon>
            }
          >
            Left Icon
          </Button>
          <Button
            {...args}
            variant="light"
            leftIcon={
              <ArrowLongLeftIcon className="h-5 w-5"></ArrowLongLeftIcon>
            }
            rightIcon={
              <ArrowLongRightIcon className="h-5 w-5"></ArrowLongRightIcon>
            }
          >
            Left Right Icon
          </Button>
          <Button
            {...args}
            variant="light"
            rightIcon={
              <ArrowLongRightIcon className="h-5 w-5"></ArrowLongRightIcon>
            }
          >
            Right icon
          </Button>
        </div>
        <div className="flex flex-wrap gap-5">
          <Button
            {...args}
            variant="outline"
            leftIcon={
              <ArrowLongLeftIcon className="h-5 w-5"></ArrowLongLeftIcon>
            }
          >
            Left Icon
          </Button>
          <Button
            {...args}
            variant="outline"
            leftIcon={
              <ArrowLongLeftIcon className="h-5 w-5"></ArrowLongLeftIcon>
            }
            rightIcon={
              <ArrowLongRightIcon className="h-5 w-5"></ArrowLongRightIcon>
            }
          >
            Left Right Icon
          </Button>
          <Button
            {...args}
            variant="outline"
            rightIcon={
              <ArrowLongRightIcon className="h-5 w-5"></ArrowLongRightIcon>
            }
          >
            Right icon
          </Button>
        </div>
        <div className="flex flex-wrap gap-5">
          <Button
            {...args}
            variant="solid"
            leftIcon={
              <ArrowLongLeftIcon className="h-5 w-5"></ArrowLongLeftIcon>
            }
          >
            Left Icon
          </Button>
          <Button
            {...args}
            variant="solid"
            leftIcon={
              <ArrowLongLeftIcon className="h-5 w-5"></ArrowLongLeftIcon>
            }
            rightIcon={
              <ArrowLongRightIcon className="h-5 w-5"></ArrowLongRightIcon>
            }
          >
            Left Right Icon
          </Button>
          <Button
            {...args}
            variant="solid"
            rightIcon={
              <ArrowLongRightIcon className="h-5 w-5"></ArrowLongRightIcon>
            }
          >
            Right icon
          </Button>
        </div>
        <div className="flex flex-wrap gap-5">
          <Button
            {...args}
            variant="subtle"
            leftIcon={
              <ArrowLongLeftIcon className="h-5 w-5"></ArrowLongLeftIcon>
            }
          >
            Left Icon
          </Button>
          <Button
            {...args}
            variant="subtle"
            leftIcon={
              <ArrowLongLeftIcon className="h-5 w-5"></ArrowLongLeftIcon>
            }
            rightIcon={
              <ArrowLongRightIcon className="h-5 w-5"></ArrowLongRightIcon>
            }
          >
            Left Right Icon
          </Button>
          <Button
            {...args}
            variant="subtle"
            rightIcon={
              <ArrowLongRightIcon className="h-5 w-5"></ArrowLongRightIcon>
            }
          >
            Right icon
          </Button>
        </div>
      </div>
    )
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Button',
    fullWidth: true,
  },
  render: (args) => {
    return <Button {...args}>{args.children}</Button>
  },
}

export const RenderAsChild: Story = {
  args: {},
  render: () => {
    return (
      <div className="flex space-x-5">
        <Button asChild>
          <a href="http://google.com" target="_blank">
            Render as link (a)
          </a>
        </Button>
        <Button asChild>
          <Link href="/docs/checkbox"> Render as next/link</Link>
        </Button>
      </div>
    )
  },
}
