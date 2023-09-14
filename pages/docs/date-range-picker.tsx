import React from 'react'
import { DateRange } from 'react-aria'
import { DateRangePicker } from '@/components/date-picker'

function Page() {
  const [value, setValue] = React.useState<DateRange>()
  return (
    <div className="flex flex-col space-y-5 ">
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
