import { useState } from 'react'
import { Time } from '@internationalized/date'
import { TimeValue } from 'react-aria'
import { InputTime } from '@/components/input-time'

export default function Home() {
  const [value, setValue] = useState<TimeValue>(new Time(11, 45))
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">InputTime</div>
        <div className="text-gray-700">-</div>
      </div>

      <div className="space-y-10">
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Value</div>
          <div className="flex flex-col gap-5 md:flex-row">
            <InputTime
              name="some_name"
              label="Controlled"
              value={value}
              onChange={setValue}
            ></InputTime>
            <InputTime
              name="some_name"
              label="Uncontrolled"
              defaultValue={new Time(11, 45)}
            ></InputTime>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">State</div>
          <div className="flex flex-col gap-5 md:flex-row">
            <InputTime
              name="some_name"
              label="Disabled"
              isDisabled
              defaultValue={new Time(11, 45)}
            ></InputTime>
            <InputTime
              name="some_name"
              label="Error"
              error
              defaultValue={new Time(11, 45)}
            ></InputTime>
            <InputTime
              name="some_name"
              label="Read Only"
              isReadOnly
              defaultValue={new Time(11, 45)}
            ></InputTime>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Granularity</div>
          <div className="flex flex-col gap-5 md:flex-row">
            <InputTime
              name="some_name"
              label="hour"
              granularity="hour"
              defaultValue={new Time(11, 45)}
            ></InputTime>
            <InputTime
              name="some_name"
              label="minute (default)"
              defaultValue={new Time(11, 45)}
            ></InputTime>
            <InputTime
              name="some_name"
              label="second"
              granularity="second"
              defaultValue={new Time(11, 45, 29)}
            ></InputTime>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Min/Max</div>
          <div className="flex flex-col gap-5 md:flex-row">
            <InputTime
              name="some_name"
              label="min 9, max 17"
              minValue={new Time(9)}
              maxValue={new Time(17)}
              defaultValue={new Time(10)}
            ></InputTime>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Hour Cycle</div>
          <div className="flex flex-col gap-5 md:flex-row">
            <InputTime
              name="some_name"
              label="24"
              hourCycle={24}
              defaultValue={new Time(10)}
            ></InputTime>

            <InputTime
              name="some_name"
              label="12"
              hourCycle={12}
              defaultValue={new Time(10)}
            ></InputTime>
          </div>
        </div>
      </div>
    </div>
  )
}
