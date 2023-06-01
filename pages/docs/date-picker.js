import { DatePicker } from '@/components/date-picker'

import React from 'react'

function Page() {
  const [value1, setValue1] = React.useState(null)
  const [value2, setValue2] = React.useState(null)
  const [value3, setValue3] = React.useState(null)
  const [value4, setValue4] = React.useState(null)
  const [value5, setValue5] = React.useState(null)
  const [value6, setValue6] = React.useState(null)
  const [value7, setValue7] = React.useState(null)
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Date Picker</div>
        <div className="text-gray-700">-</div>
      </div>
      {/*
    value x
    defaultValue x
    onChange x
    minValuex
    maxValue x
    disabled x
    granularity x

    disableRangeDates
    timezone
    locale
    hourCycle
    
  */}

      <div className="space-y-10">
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Value</div>
          <div className="flex flex-col gap-5 md:flex-row">
            <DatePicker
              value={value1}
              onChange={setValue1}
              label="Controlled"
            ></DatePicker>
            <DatePicker
              defaultValue="2023-01-01"
              label="Uncontrolled"
            ></DatePicker>
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">State</div>
          <div className="flex flex-col gap-5 md:flex-row">
            <DatePicker disabled label="Disabled"></DatePicker>
            <DatePicker error label="Error"></DatePicker>
            <DatePicker
              value="2023-01-01"
              label="ReadOnly"
              readOnly
            ></DatePicker>
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Granularity</div>
          <div className="space-y-3">
            <DatePicker
              value={value2}
              onChange={setValue2}
              granularity="day"
              label="day (default)"
            ></DatePicker>
            <DatePicker
              value={value3}
              onChange={setValue3}
              granularity="hour"
              label="hour"
            ></DatePicker>
            <DatePicker
              value={value4}
              onChange={setValue4}
              granularity="minute"
              label="minute"
            ></DatePicker>
            <DatePicker
              value={value5}
              onChange={setValue5}
              granularity="second"
              label="second"
            ></DatePicker>
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">
            MinValue/MaxValue
          </div>
          <div className="space-y-3">
            <DatePicker
              value={value6}
              onChange={setValue6}
              minValue="2023-01-10"
              maxValue="2023-01-20"
            ></DatePicker>
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">
            <div>placeholderValue</div>
            <div className="text-sm font-normal">
              {' '}
              default values of each segment when the user first interacts with
              them, e.g. using the up and down arrow keys, as well as the
              default month shown in the calendar popover.
            </div>
          </div>
          <div className="space-y-3">
            <DatePicker
              value={value7}
              onChange={setValue7}
              placeholderValue="1990-12-31"
            ></DatePicker>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
