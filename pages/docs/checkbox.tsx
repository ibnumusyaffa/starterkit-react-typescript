import React from 'react'
import { Checkbox } from '@/components/checkbox'

function Page() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Checkbox</div>
        <div className="text-gray-700">-</div>
      </div>
      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">State</div>
        <div className="flex flex-wrap gap-5">
          <Checkbox label="disabled" name="name" value="1" disabled></Checkbox>
          <Checkbox label="enable" name="name" value="1"></Checkbox>
          <Checkbox
            label="disabled checked"
            checked
            name="name"
            value="1"
            disabled
          ></Checkbox>
          <Checkbox
            label="enable checked"
            name="name"
            checked
            value="2"
          ></Checkbox>
        </div>
        <div className="flex flex-wrap gap-5">
          <Checkbox
            indeterminate
            label="disabled indeterminate"
            name="name"
            value="1"
            disabled
          ></Checkbox>
          <Checkbox
            indeterminate
            label="enable indeterminate"
            name="name"
            value="1"
          ></Checkbox>
          <Checkbox
            indeterminate
            label="disabled indeterminate"
            checked
            name="name"
            value="1"
            disabled
          ></Checkbox>
          <Checkbox
            indeterminate
            label="enable indeterminate"
            name="name"
            checked
            value="2"
          ></Checkbox>
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-xl font-semibold text-gray-700">Size</div>
        <div className="flex flex-wrap gap-5">
          <Checkbox
            label="size sm"
            name="name"
            value="1"
            defaultChecked
            size="sm"
          ></Checkbox>
          <Checkbox
            label="size md"
            name="name"
            value="1"
            defaultChecked
            size="md"
          ></Checkbox>
          <Checkbox
            label="size lg"
            name="name"
            value="1"
            defaultChecked
            size="lg"
          ></Checkbox>
          <Checkbox
            label="size xl"
            name="name"
            value="1"
            defaultChecked
            size="xl"
          ></Checkbox>
        </div>
      </div>
    </div>
  )
}

export default Page
