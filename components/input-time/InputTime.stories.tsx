/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
import { Time } from '@internationalized/date'
import type { Meta, StoryObj } from '@storybook/react'
import { TimeValue } from 'react-aria'

import { FormControl, FormLabel } from '@/components/form-control'
import { InputTime } from '@/components/input-time'

const meta = {
  title: 'Components/InputTime',
  component: InputTime,
} satisfies Meta<typeof InputTime>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  args: {},
  render: (args) => {
    const [value, setValue] = useState<TimeValue>(new Time(11, 45))
    return <InputTime {...args} value={value} onChange={setValue} />
  },
}

export const State: Story = {
  args: {},
  render: () => {
    return (
      <div className="space-y-3">
        <FormControl>
          <FormLabel>Disable</FormLabel>
          <InputTime
            name="some_name"
            isDisabled
            defaultValue={new Time(11, 45)}
          ></InputTime>
        </FormControl>
        <FormControl>
          <FormLabel>Error</FormLabel>
          <InputTime
            name="some_name"
            error
            defaultValue={new Time(11, 45)}
          ></InputTime>
        </FormControl>
        <FormControl>
          <FormLabel>Read Only</FormLabel>
          <InputTime
            name="some_name"
            isReadOnly
            defaultValue={new Time(11, 45)}
          ></InputTime>
        </FormControl>
      </div>
    )
  },
}

export const Granularity: Story = {
  args: {},
  render: () => {
    return (
      <div className="space-y-3">
        <FormControl>
          <FormLabel>Hour</FormLabel>
          <InputTime
            name="some_name"
            granularity="hour"
            defaultValue={new Time(11, 45)}
          ></InputTime>
        </FormControl>
        <FormControl>
          <FormLabel>Minute (default)</FormLabel>
          <InputTime
            name="some_name"
            granularity="minute"
            defaultValue={new Time(11, 45)}
          ></InputTime>
        </FormControl>
        <FormControl>
          <FormLabel>Second</FormLabel>
          <InputTime
            name="some_name"
            granularity="second"
            defaultValue={new Time(11, 45)}
          ></InputTime>
        </FormControl>
      </div>
    )
  },
}

export const MinMax: Story = {
  args: {},
  render: () => {
    return (
      <div className="space-y-3">
        <FormControl>
          <FormLabel>Min Max Value</FormLabel>
          <InputTime
            name="some_name"
            minValue={new Time(9)}
            maxValue={new Time(17)}
            defaultValue={new Time(10)}
          ></InputTime>
        </FormControl>
      </div>
    )
  },
}

export const HourCycle: Story = {
  args: {},
  render: () => {
    return (
      <div className="space-y-3">
        <FormControl>
          <FormLabel>24 Hour</FormLabel>
          <InputTime
            name="some_name"
            hourCycle={24}
            defaultValue={new Time(10)}
          ></InputTime>
        </FormControl>
        <FormControl>
          <FormLabel>12 Hour</FormLabel>
          <InputTime
            name="some_name"
            hourCycle={12}
            defaultValue={new Time(10)}
          ></InputTime>
        </FormControl>
      </div>
    )
  },
}
