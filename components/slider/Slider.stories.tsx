/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from '@/components/slider'

const meta = {
  title: 'Components/Slider',
  component: Slider,
} satisfies Meta<typeof Slider>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  args: {},
  render: (args) => {
    const [value, setValue] = React.useState([50])
    const [commitedValue, setCommitedValue] = React.useState([50])
    return (
      <div className="p-5">
        <div>value : {value}</div>
        <div>commitedValue : {commitedValue}</div>
        <Slider
          {...args}
          min={0}
          max={200}
          value={value}
          onValueChange={setValue}
          onValueCommit={setCommitedValue}
          name="slider"
        />
      </div>
    )
  },
}

export const RangeSlider: Story = {
  args: {},
  render: (args) => {
    const [value, setValue] = React.useState([10, 20])
    return (
      <div className="p-5">
        <Slider
          {...args}
          name="slider"
          value={value}
          onValueChange={setValue}
        />
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    const [value, setValue] = React.useState([10, 20])
    return (
      <div className="p-5">
        <Slider
          {...args}
          name="slider"
          value={value}
          onValueChange={setValue}
        />
      </div>
    )
  },
}

export const ShowLabel: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="space-y-5 p-5">
        <div className="space-y-3">
          <div>Hover</div>
          <div>
            <Slider
              {...args}
              defaultValue={[20]}
              showLabel="hover"
              name="slider"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div>Always</div>
          <div>
            <Slider
              {...args}
              defaultValue={[40]}
              showLabel="always"
              name="slider"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div>None</div>
          <div>
            <Slider
              {...args}
              defaultValue={[60]}
              showLabel="none"
              name="slider"
            />
          </div>
        </div>
      </div>
    )
  },
}

export const FormatLabel: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="space-y-14 p-5">
        <Slider
          {...args}
          defaultValue={[40]}
          showLabel="always"
          name="slider"
          formatLabel={(value) => `${value} °C`}
        />
      </div>
    )
  },
}

export const Step: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="space-y-14 p-5">
        <div className="space-y-3">
          <div>step 25</div>
          <div>
            <Slider
              {...args}
              defaultValue={[50]}
              step={25}
              showLabel="always"
              name="slider"
              formatLabel={(value) => `${value} °C`}
            />
          </div>
        </div>
      </div>
    )
  },
}
