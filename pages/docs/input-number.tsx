import React from 'react'
import { InputNumber } from '@/components/input-number'
import { CheckIcon } from '@heroicons/react/24/outline'
function Page() {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className="space-y-10">
      <InputNumber ref={inputRef}></InputNumber>

      <InputNumber isDisabled></InputNumber>

      <InputNumber isReadOnly></InputNumber>

      <InputNumber hideStepper></InputNumber>

      <InputNumber
        error
        icon={<CheckIcon className="w-4 h-4"> </CheckIcon>}
      ></InputNumber>

      <button onClick={handleClick}>Focus Input</button>

      <div className='space-y-5'>
        <InputNumber size='xs'></InputNumber>
        <InputNumber size='sm'></InputNumber>
        <InputNumber size='md'></InputNumber>
        <InputNumber size='lg'></InputNumber>
        <InputNumber size='xl'></InputNumber>
      </div>
    </div>
  )
}

export default Page
