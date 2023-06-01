import { DateRangePicker } from '@/components/date-picker'

import React from 'react'

function Page() {
  const [value, setValue] = React.useState({ start: null, end: null })
  return (
    <div className="flex flex-col space-y-5 ">
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
      <div className="space-y-5 md:w-1/2">
        <DateRangePicker
          value={value}
          onChange={setValue}
          label="Single Calendar"
        ></DateRangePicker>
        <DateRangePicker
          value={value}
          onChange={setValue}
          multiCalendar
          label="Multiple Calendar"
        ></DateRangePicker>
      </div>
    </div>
  )
}

export default Page
