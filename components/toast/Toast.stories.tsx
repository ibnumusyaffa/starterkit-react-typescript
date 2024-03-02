import type { StoryObj } from '@storybook/react'
import { Toaster } from 'react-hot-toast'

import { Button } from '@/components/button'
import toast from '@/components/toast'

const meta = {
  title: 'Feedback/Toast',
}

export default meta

export const BasicUsage: StoryObj = {
  render: () => {
    return (
      <div className="space-x-5">
        <Toaster gutter={12} />
        <Button
          variant="default"
          onClick={() =>
            toast.success({
              title: 'Account created.',
              description: "We've created your account for you",
            })
          }
        >
          Click Me
        </Button>
      </div>
    )
  },
}

export const Variant: StoryObj = {
  render: () => {
    return (
      <div className="space-x-5">
        <Toaster gutter={12} />
        <Button
          variant="default"
          onClick={() =>
            toast.success({
              title: 'Account created.',
              description: "We've created your account for you",
            })
          }
        >
          Success
        </Button>
        <Button
          variant="default"
          onClick={() =>
            toast.danger({
              title: 'Account created.',
              description: "We've created your account for you",
            })
          }
        >
          Danger
        </Button>
        <Button
          variant="default"
          onClick={() =>
            toast.info({
              title: 'Account created.',
              description: "We've created your account for you",
            })
          }
        >
          Info
        </Button>
        <Button
          variant="default"
          onClick={() =>
            toast.warning({
              title: 'Account created.',
              description: "We've created your account for you",
            })
          }
        >
          Warning
        </Button>
      </div>
    )
  },
}

export const Position: StoryObj = {
  render: () => {
    return (
      <div className="grid grid-cols-2 gap-5">
        <Toaster gutter={12} />
        <Button
          variant="default"
          onClick={() =>
            toast.success({
              title: 'Account created.',
              description: "We've created your account for you",
              position: 'top-left',
            })
          }
        >
          Top Left
        </Button>

        <Button
          variant="default"
          onClick={() =>
            toast.success({
              title: 'Account created.',
              description: "We've created your account for you",
              position: 'top-center',
            })
          }
        >
          Top center
        </Button>
        <Button
          variant="default"
          onClick={() =>
            toast.success({
              title: 'Account created.',
              description: "We've created your account for you",
              position: 'top-right',
            })
          }
        >
          Top Right
        </Button>

        <Button
          variant="default"
          onClick={() =>
            toast.success({
              title: 'Account created.',
              description: "We've created your account for you",
              position: 'bottom-left',
            })
          }
        >
          bottom Left
        </Button>

        <Button
          variant="default"
          onClick={() =>
            toast.success({
              title: 'Account created.',
              description: "We've created your account for you",
              position: 'bottom-center',
            })
          }
        >
          bottom center
        </Button>
        <Button
          variant="default"
          onClick={() =>
            toast.success({
              title: 'Account created.',
              description: "We've created your account for you",
              position: 'bottom-right',
            })
          }
        >
          bottom Right
        </Button>
      </div>
    )
  },
}

export const TitleOnly: StoryObj = {
  render: () => {
    return (
      <div className="space-x-5">
        <Toaster gutter={12} />
        <Button
          variant="default"
          onClick={() =>
            toast.success({
              title: 'Account created.',
            })
          }
        >
          Click Me
        </Button>
      </div>
    )
  },
}

export const DescriptionOnly: StoryObj = {
  render: () => {
    return (
      <div className="space-x-5">
        <Toaster gutter={12} />
        <Button
          variant="default"
          onClick={() =>
            toast.success({
              description: "We've created your account for you",
            })
          }
        >
          Click Me
        </Button>
      </div>
    )
  },
}

