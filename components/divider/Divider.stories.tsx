/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/button'
import { Divider } from '@/components/divider'

const meta = {
  title: 'Data Display/Divider',
  component: Divider,
} satisfies Meta<typeof Divider>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  args: {},
  render: () => {
    return (
      <div className="space-y-5">
        <Divider></Divider>
        <Divider position="center">
          <div className="text-sm text-gray-700">Center</div>
        </Divider>
        <Divider position="left">
          <div className="text-sm text-gray-700">Left</div>
        </Divider>
        <Divider position="right">
          <div className="text-sm text-gray-700">Right</div>
        </Divider>
        <Divider position="center" withGap={false}>
          <Button variant="default" size="sm">
            Read More
          </Button>
        </Divider>
      </div>
    )
  },
}
