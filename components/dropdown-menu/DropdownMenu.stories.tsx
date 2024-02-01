import {
  ArrowRightStartOnRectangleIcon,
  Cog6ToothIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import type { StoryObj } from '@storybook/react'

import { Button, ButtonGroup } from '@/components/button'
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu'

const meta = {
  title: 'Overlay/DropdownMenu',
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: StoryObj = {
  render: () => {
    return (
      <DropdownMenuRoot>
        <DropdownMenuTrigger>
          <Button variant="default">Dropdown Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Account Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    )
  },
}

export const WithLeftIcon: Story = {
  render: () => {
    return (
      <DropdownMenuRoot>
        <DropdownMenuTrigger>
          <Button variant="default">Dropdown Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem leftIcon={<Cog6ToothIcon className="h-5 w-5" />}>
            Account Settings
          </DropdownMenuItem>
          <DropdownMenuItem leftIcon={<HeartIcon className="h-5 w-5" />}>
            Support
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    )
  },
}

export const WithRightIcon: Story = {
  render: () => {
    return (
      <DropdownMenuRoot>
        <DropdownMenuTrigger>
          <Button variant="default">Dropdown Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem rightIcon={<Cog6ToothIcon className="h-5 w-5" />}>
            Account Settings
          </DropdownMenuItem>
          <DropdownMenuItem rightIcon={<HeartIcon className="h-5 w-5" />}>
            Support
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    )
  },
}

export const GroupMenu: Story = {
  render: () => {
    return (
      <DropdownMenuRoot>
        <DropdownMenuTrigger>
          <Button variant="default">Dropdown Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Application</DropdownMenuLabel>
            <DropdownMenuItem>Account Settings</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator></DropdownMenuSeparator>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Danger Zone</DropdownMenuLabel>
            <DropdownMenuItem>License</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    )
  },
}

export const SubMenu: Story = {
  render: () => {
    return (
      <DropdownMenuRoot>
        <DropdownMenuTrigger>
          <Button variant="default">Dropdown Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Account Settings</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>SubMenu Item 1</DropdownMenuItem>
              <DropdownMenuItem>SubMenu Item 2</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    )
  },
}

export const NestedSubMenu: Story = {
  render: () => {
    return (
      <DropdownMenuRoot>
        <DropdownMenuTrigger>
          <Button variant="default">Dropdown Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Account Settings</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>SubMenu Item 1</DropdownMenuItem>
              <DropdownMenuItem>SubMenu Item 2</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>SubMenu Item 1</DropdownMenuItem>
                  <DropdownMenuItem>SubMenu Item 2</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    )
  },
}

export const DisableItem: Story = {
  render: () => {
    return (
      <DropdownMenuRoot>
        <DropdownMenuTrigger>
          <Button variant="default">Dropdown Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem disabled>Disabled Item</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    )
  },
}

export const DangerItem: Story = {
  render: () => {
    return (
      <DropdownMenuRoot>
        <DropdownMenuTrigger>
          <Button variant="default">Dropdown Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem leftIcon={<Cog6ToothIcon className="h-5 w-5" />}>
            Setting
          </DropdownMenuItem>
          <DropdownMenuItem
            leftIcon={<ArrowRightStartOnRectangleIcon className="h-5 w-5" />}
            color="danger"
          >
            Danger Item
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    )
  },
}

export const SideOffsetAlign = {
  name: 'Side, Align and SideOffset',
  args: {
    side: 'top',
    align: 'center',
  },
  argTypes: {
    side: {
      control: 'inline-radio',
      options: ['top', 'right', 'bottom', 'left'],
    },
    align: {
      control: 'inline-radio',
      options: ['center', 'start', 'end'],
    },
    sideOffset: { control: { type: 'number' } },
  },
  //@ts-ignore
  render: (args) => {
    return (
      <div className="flex h-screen items-center justify-center">
        <DropdownMenuRoot>
          <DropdownMenuTrigger>
            <Button variant="default">Dropdown Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side={args.side}
            sideOffset={args.sideOffset}
            align={args.align}
          >
            <DropdownMenuItem leftIcon={<Cog6ToothIcon className="h-5 w-5" />}>
              Disabled Item
            </DropdownMenuItem>
            <DropdownMenuItem
              leftIcon={<ArrowRightStartOnRectangleIcon className="h-5 w-5" />}
              color="danger"
            >
              Support
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuRoot>
      </div>
    )
  },
}

export const WithButtonGroup: Story = {
  render: () => {
    return (
      <ButtonGroup>
        <Button  variant="default">Download</Button>
        <DropdownMenuRoot>
          <DropdownMenuTrigger>
            <Button variant="default">
              <ChevronDownIcon className="h-4 w-4"></ChevronDownIcon>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem leftIcon={<Cog6ToothIcon className="h-5 w-5" />}>
              Setting
            </DropdownMenuItem>
            <DropdownMenuItem
              leftIcon={<ArrowRightStartOnRectangleIcon className="h-5 w-5" />}
              color="danger"
            >
              Danger Item
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuRoot>
      </ButtonGroup>
    )
  },
}
