import React from 'react'
import { InputNumber } from '@/components/input-number'
import { CheckIcon } from '@heroicons/react/24/outline'
import { FormControl, FormLabel } from '@/components/form-control'
function Page() {
  const [value1, setValue1] = React.useState(0)
  const [value2, setValue2] = React.useState(10)
  const [value3, setValue3] = React.useState(0)
  const [value4, setValue4] = React.useState(0)
  const [value5, setValue5] = React.useState(0)
  const [value6, setValue6] = React.useState(0)
  const [value7, setValue7] = React.useState(0)
  const [value8, setValue8] = React.useState(10000)
  const [value9, setValue9] = React.useState(10000)
  const [value10, setValue10] = React.useState(10000)
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Input Number</div>
      </div>

      <div className="space-y-10">
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Value</div>
          <div className="flex space-x-5 md:w-1/2">
            <InputNumber value={value1} onChange={setValue1}></InputNumber>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Disabled</div>
          <div className="flex space-x-5 md:w-1/2">
            <InputNumber isDisabled></InputNumber>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Read Only</div>
          <div className="flex space-x-5 md:w-1/2">
            <InputNumber value={10} isReadOnly></InputNumber>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">
            Hide Stepper
          </div>
          <div className="flex space-x-5 md:w-1/2">
            <InputNumber
              value={value1}
              onChange={setValue1}
              hideStepper
            ></InputNumber>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Error</div>
          <div className="flex space-x-5 md:w-1/2">
            <InputNumber error></InputNumber>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">With Icon</div>
          <div className="flex space-x-5 md:w-1/2">
            <InputNumber
              icon={<CheckIcon className="w-4 h-4"> </CheckIcon>}
            ></InputNumber>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">
            Maximum/Minimum value
          </div>
          <div className="flex space-x-5 md:w-1/2">
            <InputNumber
              value={value2}
              onChange={setValue2}
              minValue={10}
              maxValue={15}
            ></InputNumber>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Step</div>
          <div className="flex space-x-5 md:w-1/2">
            <InputNumber
              value={value3}
              onChange={setValue3}
              step={5}
            ></InputNumber>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Size</div>
          <div className="space-y-3 md:w-1/2">
          
            <FormControl>
              <FormLabel>sm</FormLabel>
              <InputNumber size="sm"></InputNumber>
            </FormControl>
            <FormControl>
              <FormLabel>md</FormLabel>
              <InputNumber size="md"></InputNumber>
            </FormControl>
            <FormControl>
              <FormLabel>lg</FormLabel>
              <InputNumber size="lg"></InputNumber>
            </FormControl>
            <FormControl>
              <FormLabel>xl</FormLabel>
              <InputNumber size="xl"></InputNumber>
            </FormControl>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Decimals</div>
          <div className="flex space-x-5 md:w-1/2">
            <InputNumber
              formatOptions={{
                signDisplay: 'always',
                minimumFractionDigits: 2,
                maximumFractionDigits: 3,
              }}
              value={value4}
              onChange={setValue4}
            ></InputNumber>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Percentages</div>
          <div className="flex space-x-5 md:w-1/2">
            <InputNumber
              value={value5}
              onChange={setValue5}
              formatOptions={{ style: 'percent' }}
            ></InputNumber>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Currency</div>
          <div className="flex space-x-5 md:w-1/2">
            <InputNumber
              value={value6}
              onChange={setValue6}
              formatOptions={{
                style: 'currency',
                currency: 'IDR',
                currencyDisplay: 'narrowSymbol',
                currencySign: 'standard',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }}
            ></InputNumber>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Unit</div>
          <div className="flex space-x-5 md:w-1/2">
            <InputNumber
              value={value7}
              onChange={setValue7}
              formatOptions={{
                style: 'unit',
                unit: 'inch',
                unitDisplay: 'long',
              }}
            ></InputNumber>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Locale</div>
          <div className="space-y-3 md:w-1/2">
            <FormControl>
              <FormLabel>default</FormLabel>
              <InputNumber value={value8} onChange={setValue8}></InputNumber>
            </FormControl>
            <FormControl>
              <FormLabel>id-ID</FormLabel>
              <InputNumber locale='id-ID' value={value9} onChange={setValue9}></InputNumber>
            </FormControl>
            <FormControl>
              <FormLabel>en-US</FormLabel>
              <InputNumber locale='en-US'  value={value10} onChange={setValue10}></InputNumber>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
