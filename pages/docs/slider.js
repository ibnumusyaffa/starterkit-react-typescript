import React from 'react'
import { Slider } from '@/components/slider'
function Page() {
  let [value1, setValue1] = React.useState([10])
  let [value2, setValue2] = React.useState([0, 50])
  let [value3, setValue3] = React.useState([20])
  let [value4, setValue4] = React.useState(value3)
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Slider</div>
        <div className="text-gray-700">-</div>
      </div>
      <div className="space-y-3">
        <div className="text-xl font-semibold text-gray-700">Single</div>
        <div className="flex flex-wrap gap-5">
          <Slider name="slider1" value={value1} onValueChange={setValue1} />
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-xl font-semibold text-gray-700">Range</div>
        <div className="flex flex-wrap gap-5">
          <Slider name="slider2" value={value2} onValueChange={setValue2} />
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-xl font-semibold text-gray-700">Disabled</div>
        <div className="flex flex-wrap gap-5">
          <Slider name="slider3" disabled />
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-xl font-semibold text-gray-700">onValueCommit</div>
        <div className="space-y-3 text-gray-700">
          <div>actual value : {value3[0]}</div>
          <div>commit value : {value4[0]}</div>
          <Slider
            name="slider4"
            value={value3}
            onValueChange={setValue3}
            onValueCommit={setValue4}
          />
        </div>
      </div>
    </div>
  )
}

export default Page
