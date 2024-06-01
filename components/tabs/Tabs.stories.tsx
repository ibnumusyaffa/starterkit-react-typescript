import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import type { Meta, StoryObj } from '@storybook/react'

import { TabsContent, TabsList, TabsRoot, TabsTrigger } from '@/components/tabs'

const meta = {
  title: 'Navigation/Tabs',
  component: TabsRoot,
} satisfies Meta<typeof TabsRoot>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  args: {
    defaultValue: 'tab1',
  },
  render: (args) => {
    return (
      <TabsRoot {...args} defaultValue="tab1" variant="default">
        <TabsList>
          <TabsTrigger value="tab1">General</TabsTrigger>
          <TabsTrigger value="tab2">Account</TabsTrigger>
          <TabsTrigger value="tab3">Setting</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">General Content</TabsContent>
        <TabsContent value="tab2">Account Content</TabsContent>
        <TabsContent value="tab3">Setting Content</TabsContent>
      </TabsRoot>
    )
  },
}

export const Variant: Story = {
  args: {
    defaultValue: 'tab1',
  },
  render: (args) => {
    return (
      <div className="space-y-20">
        <TabsRoot {...args} variant="default" defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">General</TabsTrigger>
            <TabsTrigger value="tab2">Account</TabsTrigger>
            <TabsTrigger value="tab3">Setting</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">General Content</TabsContent>
          <TabsContent value="tab2">Account Content</TabsContent>
          <TabsContent value="tab3">Setting Content</TabsContent>
        </TabsRoot>

        <TabsRoot {...args} variant="pills" defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">General</TabsTrigger>
            <TabsTrigger value="tab2">Account</TabsTrigger>
            <TabsTrigger value="tab3">Setting</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">General Content</TabsContent>
          <TabsContent value="tab2">Account Content</TabsContent>
          <TabsContent value="tab3">Setting Content</TabsContent>
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
        <TabsRoot {...args} variant="default" defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">General</TabsTrigger>
            <TabsTrigger value="tab2">Account</TabsTrigger>
            <TabsTrigger value="tab3">Setting</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">General Content</TabsContent>
          <TabsContent value="tab2">Account Content</TabsContent>
          <TabsContent value="tab3">Setting Content</TabsContent>
        </TabsRoot>

        <TabsRoot {...args} variant="pills" defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">General</TabsTrigger>
            <TabsTrigger value="tab2">Account</TabsTrigger>
            <TabsTrigger value="tab3">Setting</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">General Content</TabsContent>
          <TabsContent value="tab2">Account Content</TabsContent>
          <TabsContent value="tab3">Setting Content</TabsContent>
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
        <TabsRoot {...args} variant="default" defaultValue="tab1">
          <TabsList>
            <TabsTrigger
              value="tab1"
              leftSection={<Cog6ToothIcon className="h-5 w-5"></Cog6ToothIcon>}
            >
              Left Icon
            </TabsTrigger>
            <TabsTrigger
              value="tab2"
              rightSection={<Cog6ToothIcon className="h-5 w-5"></Cog6ToothIcon>}
            >
              Right Icon
            </TabsTrigger>
            <TabsTrigger
              value="tab3"
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
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
          <TabsContent value="tab3">Content 3</TabsContent>
        </TabsRoot>

        <TabsRoot {...args} variant="pills" defaultValue="tab1">
          <TabsList>
            <TabsTrigger
              value="tab1"
              leftSection={<Cog6ToothIcon className="h-5 w-5"></Cog6ToothIcon>}
            >
              Left Icon
            </TabsTrigger>
            <TabsTrigger
              value="tab2"
              rightSection={<Cog6ToothIcon className="h-5 w-5"></Cog6ToothIcon>}
            >
              Right Icon
            </TabsTrigger>
            <TabsTrigger
              value="tab3"
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
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
          <TabsContent value="tab3">Content 3</TabsContent>
        </TabsRoot>
      </div>
    )
  },
}
