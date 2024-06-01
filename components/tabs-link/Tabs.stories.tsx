import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import type { Meta, StoryObj } from '@storybook/react'

import { TabsList, TabsRoot, TabsTrigger } from '@/components/tabs-link'

const meta = {
  title: 'Navigation/TabsLink',
  component: TabsRoot,
} satisfies Meta<typeof TabsRoot>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  args: {},
  render: (args) => {
    return (
      <TabsRoot {...args} variant="default">
        <TabsList>
          <TabsTrigger active href="/">
            General
          </TabsTrigger>
          <TabsTrigger href="/">Account</TabsTrigger>
          <TabsTrigger href="/">Setting</TabsTrigger>
        </TabsList>
      </TabsRoot>
    )
  },
}

export const Variant: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="space-y-20">
        <TabsRoot {...args} variant="default">
          <TabsList>
            <TabsTrigger active href="/">
              General
            </TabsTrigger>
            <TabsTrigger href="/">Account</TabsTrigger>
            <TabsTrigger href="/">Setting</TabsTrigger>
          </TabsList>
        </TabsRoot>

        <TabsRoot {...args} variant="pills">
          <TabsList>
            <TabsTrigger active href="/">
              General
            </TabsTrigger>
            <TabsTrigger href="/">Account</TabsTrigger>
            <TabsTrigger href="/">Setting</TabsTrigger>
          </TabsList>
        </TabsRoot>
      </div>
    )
  },
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => {
    return (
      <div className="space-y-20">
        <TabsRoot {...args} variant="default">
          <TabsList>
            <TabsTrigger active href="/">
              General
            </TabsTrigger>
            <TabsTrigger href="/">Account</TabsTrigger>
            <TabsTrigger href="/">Setting</TabsTrigger>
          </TabsList>
        </TabsRoot>

        <TabsRoot {...args} variant="pills">
          <TabsList>
            <TabsTrigger active href="/">
              General
            </TabsTrigger>
            <TabsTrigger href="/">Account</TabsTrigger>
            <TabsTrigger href="/">Setting</TabsTrigger>
          </TabsList>
        </TabsRoot>
      </div>
    )
  },
}

export const WithIcon: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => {
    return (
      <div className="space-y-20">
        <TabsRoot {...args} variant="default">
          <TabsList>
            <TabsTrigger
              href="/"
              leftSection={<Cog6ToothIcon className="h-5 w-5"></Cog6ToothIcon>}
            >
              Left Icon
            </TabsTrigger>
            <TabsTrigger
              href="/"
              rightSection={<Cog6ToothIcon className="h-5 w-5"></Cog6ToothIcon>}
            >
              Right Icon
            </TabsTrigger>
            <TabsTrigger
              href="/"
              active
              rightSection={
                <div className="flex items-center justify-center">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs text-white group-data-[state=active]:bg-primary-500">
                    <div>3</div>
                  </div>
                </div>
              }
            >
              Label
            </TabsTrigger>
          </TabsList>
        </TabsRoot>

        <TabsRoot {...args} variant="pills">
          <TabsList>
            <TabsTrigger
              href="/"
              leftSection={<Cog6ToothIcon className="h-5 w-5"></Cog6ToothIcon>}
            >
              Left Icon
            </TabsTrigger>
            <TabsTrigger
              href="/"
              rightSection={<Cog6ToothIcon className="h-5 w-5"></Cog6ToothIcon>}
            >
              Right Icon
            </TabsTrigger>
            <TabsTrigger
              href="/"
              active
              rightSection={
                <div className="flex items-center justify-center">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs leading-none text-white group-data-[state=active]:bg-white group-data-[state=active]:text-primary-500">
                    <div>3</div>
                  </div>
                </div>
              }
            >
              Label
            </TabsTrigger>
          </TabsList>
        </TabsRoot>
      </div>
    )
  },
}
