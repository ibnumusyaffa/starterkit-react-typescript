import type { StoryObj } from '@storybook/react'

import { Button } from '@/components/button'
import {
  PopoverArrow,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from '@/components/popover'

const meta = {
  title: 'Components/Popover',
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const BasicUsage: StoryObj = {
  render: () => {
    return (
      <PopoverRoot>
        <PopoverTrigger>
          <Button variant="default">Click Me</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow></PopoverArrow>
          <div className="w-56 ">This Content can by anything</div>
        </PopoverContent>
      </PopoverRoot>
    )
  },
}

export const WithoutArrow: StoryObj = {
  render: () => {
    return (
      <PopoverRoot>
        <PopoverTrigger>
          <Button variant="default">Click Me</Button>
        </PopoverTrigger>
        <PopoverContent sideOffset={5}>
          <div className="w-56 ">This Content can by anything</div>
        </PopoverContent>
      </PopoverRoot>
    )
  },
}
