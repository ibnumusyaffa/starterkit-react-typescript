import type { StoryObj } from '@storybook/react'

import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
} from '@/components/hover-card'

const meta = {
  title: 'Overlay/HoverCard',
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const BasicUsage: StoryObj = {
  render: () => {
    return (
      <HoverCardRoot defaultOpen={false}>
        <HoverCardTrigger>
          <a className="text-sky-600 underline" href="https://www.google.com">
            Hover me
          </a>
        </HoverCardTrigger>
        <HoverCardContent>
          <HoverCardArrow></HoverCardArrow>
          <div className="w-56 ">This content can by anything</div>
        </HoverCardContent>
      </HoverCardRoot>
    )
  },
}

export const WithoutArrow: StoryObj = {
  render: () => {
    return (
      <HoverCardRoot defaultOpen={false}>
        <HoverCardTrigger>
          <a className="text-sky-600 underline" href="https://www.google.com">
            Hover me
          </a>
        </HoverCardTrigger>
        <HoverCardContent sideOffset={5}>
          <div className="w-56 ">This content can by anything</div>
        </HoverCardContent>
      </HoverCardRoot>
    )
  },
}
