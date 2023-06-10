import React from 'react'
import { InputNumber } from '@/components/input-number'
import { CheckIcon } from '@heroicons/react/24/outline'
function Page() {
  return (
    <div className="space-y-10">
      <InputNumber></InputNumber>

      <InputNumber isDisabled></InputNumber>

      <InputNumber isReadOnly></InputNumber>

      <InputNumber hideStepper></InputNumber>

      <InputNumber
        error
        icon={<CheckIcon className="w-4 h-4"> </CheckIcon>}
      ></InputNumber>
    </div>
  )
}

export default Page
