import React from 'react'
import { TextArea } from '@/components/text-area'

function Page() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Text Area</div>
        <div className="text-gray-700">-</div>
      </div>

      <div className="space-y-3">
        <div className="text-xl font-semibold text-gray-700">Variant</div>
        <div className="flex flex-wrap gap-5 md:w-1/2">
          <TextArea
            variant="outline"
            placeholder="outline"
            type="text"
          ></TextArea>
          <TextArea
            variant="filled"
            placeholder="filled"
            type="text"
          ></TextArea>
        </div>
      </div>
      <div className="space-y-3">
        <div className="text-xl font-semibold text-gray-700">State</div>
        <div className="flex flex-wrap gap-3 md:w-1/2">
          <TextArea placeholder="disabled" disabled type="text"></TextArea>
          <TextArea error placeholder="error" type="text"></TextArea>
        </div>
      </div>
      <div className="space-y-3">
        <div className="text-xl font-semibold text-gray-700">Size</div>
        <div className="space-y-5 md:w-1/2">
          <TextArea size="xs" placeholder="xs" type="text"></TextArea>
          <TextArea size="sm" placeholder="sm" type="text"></TextArea>
          <TextArea size="md" placeholder="md" type="text"></TextArea>
          <TextArea size="lg" placeholder="lg" type="text"></TextArea>
          <TextArea size="xl" placeholder="xl" type="text"></TextArea>
        </div>
      </div>
    </div>
  )
}

export default Page
