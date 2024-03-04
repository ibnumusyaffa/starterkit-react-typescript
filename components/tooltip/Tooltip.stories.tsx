import type { StoryObj } from '@storybook/react'

import { Button } from '@/components/button'
import {
  TooltipContent,
  TooltipRoot,
  TooltipTrigger,
} from '@/components/tooltip'

const meta = {
  title: 'Components/Tooltip',
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const LightTooltip: StoryObj = {
  render: () => {
    return (
      <TooltipRoot>
        <TooltipTrigger>
          <Button variant="default">Light Tooltip</Button>
        </TooltipTrigger>
        <TooltipContent color="light">
          Lorem Ipsum is simply dummy text.
        </TooltipContent>
      </TooltipRoot>
    )
  },
}

export const DarkTooltip: StoryObj = {
  render: () => {
    return (
      <TooltipRoot>
        <TooltipTrigger>
          <Button variant="default">Dark Tooltip</Button>
        </TooltipTrigger>
        <TooltipContent color="dark">
          Lorem Ipsum is simply dummy text.
        </TooltipContent>
      </TooltipRoot>
    )
  },
}

export const WithoutDelay: StoryObj = {
  render: () => {
    return (
      <TooltipRoot delayDuration={0}>
        <TooltipTrigger>
          <Button variant="default">Dark Tooltip</Button>
        </TooltipTrigger>
        <TooltipContent>Lorem Ipsum is simply dummy text.</TooltipContent>
      </TooltipRoot>
    )
  },
}

export const Position: StoryObj = {
  
  render: () => {
    const sides = ['top', 'right', 'bottom', 'left'] as const
    const aligns = ['start', 'center', 'end'] as const
    return (
      <div className="flex gap-5 flex-wrap">
        {sides.map((side, sideIndex) => {
          return aligns.map((align, alignIndex) => {
            return (
              <TooltipRoot delayDuration={0} key={`${sideIndex}-${alignIndex}`}>
                <TooltipTrigger>
                  <Button size="sm" variant="default">
                    {side} - {align}
                  </Button>
                </TooltipTrigger>
                <TooltipContent color="dark" side={side} align={align}>
                  <p>Lorem ipsum simply dummy text</p>
                  <p>Lorem ipsum simply dummy text</p>
                  <p>Lorem ipsum simply dummy text</p>
                </TooltipContent>
              </TooltipRoot>
            )
          })
        })}
      </div>
    )
  },
}
