import React from 'react'
import { Radio } from '@/components/radio'

function Page() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Radio Button</div>
        <div className="text-gray-700">-</div>
      </div>
      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">State</div>
        <div className="flex flex-wrap gap-5">
          <Radio
            color="sky"
            checked={false}
            label="unchecked"
            value="1"
          ></Radio>
          <Radio color="sky" checked label="checked" value="2"></Radio>
          <Radio color="sky" disabled label="disabled" value="3"></Radio>
          <Radio
            color="sky"
            checked
            disabled
            label="disabled checked"
            value="3"
          ></Radio>
        </div>
      </div>

      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">Size</div>
        <div className="flex flex-wrap gap-5">
          <Radio
            size="sm"
            color="sky"
            name="t"
            label="size sm"
            value="2"
          ></Radio>
          <Radio
            size="md"
            color="sky"
            name="t"
            label="size md"
            value="3"
          ></Radio>
          <Radio
            size="lg"
            color="sky"
            name="t"
            label="size lg"
            value="4"
          ></Radio>
          <Radio
            size="xl"
            color="sky"
            name="t"
            label="size xl"
            defaultChecked
            value="5"
          ></Radio>
        </div>
      </div>
    </div>
  )
}

export default Page
