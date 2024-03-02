/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react'
import { parseDate, parseDateTime } from '@internationalized/date'
import type { DateValue } from '@internationalized/date'
import type { Meta, StoryObj } from '@storybook/react'
import { DateRange } from 'react-aria'

import { DatePicker, DateRangePicker } from '@/components/date-picker'
import {
  FormControl,
  FormDescription,
  FormLabel,
} from '@/components/form-control'

import { InputGroup } from '../input'
import { NativeSelect } from '../native-select'

const meta = {
  title: 'Forms/DatePicker',
  component: DatePicker,
} satisfies Meta<typeof DatePicker>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  args: {},
  render: (args) => {
    const [value, setValue] = React.useState<DateValue | null>(
      parseDate('2023-01-01')
    )
    return <DatePicker {...args} value={value} onChange={setValue}></DatePicker>
  },
}

export const Uncontrolled: Story = {
  args: {},
  render: (args) => {
    return (
      <DatePicker {...args} defaultValue={parseDate('2024-01-01')}></DatePicker>
    )
  },
}

export const State: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="space-y-3">
        <FormControl>
          <FormLabel>Disabled</FormLabel>
          <DatePicker {...args} isDisabled></DatePicker>
        </FormControl>
        <FormControl>
          <FormLabel>Error</FormLabel>
          <DatePicker {...args} error></DatePicker>
        </FormControl>
        <FormControl>
          <FormLabel>Read Only</FormLabel>
          <DatePicker {...args} isReadOnly></DatePicker>
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
          <FormLabel>Day</FormLabel>
          <DatePicker
            defaultValue={parseDate('2024-01-01')}
            granularity="day"
          ></DatePicker>
        </FormControl>
        <FormControl>
          <FormLabel>Hour</FormLabel>
          <DatePicker
            defaultValue={parseDateTime('2024-03-01T15:00:00')}
            granularity="hour"
          ></DatePicker>
        </FormControl>
        <FormControl>
          <FormLabel>Minute</FormLabel>
          <DatePicker
            defaultValue={parseDateTime('2024-03-01T15:30:00')}
            granularity="minute"
          ></DatePicker>
        </FormControl>
        <FormControl>
          <FormLabel>Second</FormLabel>
          <DatePicker
            defaultValue={parseDateTime('2024-03-01T15:30:20')}
            granularity="second"
          ></DatePicker>
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
          <FormLabel>Min Max</FormLabel>
          <DatePicker
            granularity="second"
            minValue={parseDateTime('2024-03-01T00:00:00')}
            maxValue={parseDateTime('2024-03-05T12:00:00')}
          ></DatePicker>
        </FormControl>
      </div>
    )
  },
}

export const PlaceholderValue: Story = {
  args: {},
  render: () => {
    return (
      <div className="space-y-3">
        <FormControl>
          <FormLabel>Placeholder Value</FormLabel>
          <DatePicker placeholderValue={parseDate('1990-12-31')}></DatePicker>
          <FormDescription>
            First focus value when user interact with Datepicker
          </FormDescription>
        </FormControl>
      </div>
    )
  },
}

export const DateRangePicker_: StoryObj = {
  args: {},
  render: () => {
    const [value, setValue] = React.useState<DateRange>()
    return (
      <div className="space-y-3">
        <FormControl>
          <FormLabel>Single Calendar</FormLabel>
          <DateRangePicker value={value} onChange={setValue}></DateRangePicker>
        </FormControl>
        <FormControl>
          <FormLabel>Multiple Calendar</FormLabel>
          <DateRangePicker
            value={value}
            onChange={setValue}
            multiCalendar
          ></DateRangePicker>
        </FormControl>
        <FormControl>
          <FormLabel>With Preset</FormLabel>
          <InputGroup>
            <NativeSelect>
              <option>Select Period</option>
              <option>Today</option>
              <option>Yesterday</option>
              <option>Last 7 Days</option>
              <option>Last 14 Days</option>
              <option>Last Month</option>
            </NativeSelect>
            <DateRangePicker
              value={value}
              onChange={setValue}
              multiCalendar
            ></DateRangePicker>
          </InputGroup>
        </FormControl>
      </div>
    )
  },
}
