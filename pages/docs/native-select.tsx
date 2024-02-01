import React from 'react'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

import { NativeSelect } from '@/components/native-select'

function Page() {
  return (
    <div>
      <div className="space-y-10">
        <div className="space-y-2">
          <div className="text-4xl font-semibold text-gray-700">
            NativeSelect
          </div>
          <div className="text-gray-700">-</div>
        </div>
        <div className="space-y-10">
          <div className="space-y-3">
            <div className="text-xl font-semibold text-gray-700">Variant</div>
            <div className="flex space-x-5 md:w-1/2">
              <NativeSelect fullWidth variant="outline" placeholder="Test">
                <option>Outline</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </NativeSelect>
              <NativeSelect fullWidth variant="filled" placeholder="Test">
                <option>Filled</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </NativeSelect>
            </div>
          </div>
        </div>
        <div className="space-y-10">
          <div className="space-y-3">
            <div className="text-xl font-semibold text-gray-700">Size</div>
            <div className="space-y-5 md:w-1/2">
              <NativeSelect fullWidth size="sm" placeholder="Test">
                <option>sm</option>
              </NativeSelect>
              <NativeSelect fullWidth size="md" placeholder="Testt">
                <option>md</option>
              </NativeSelect>
              <NativeSelect fullWidth size="lg" placeholder="Test">
                <option>lg</option>
              </NativeSelect>
              <NativeSelect fullWidth size="xl" placeholder="Test">
                <option>xl</option>
              </NativeSelect>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-3">
            <div className="text-xl font-semibold text-gray-700">State</div>
            <div className="space-y-5 md:w-1/2">
              <NativeSelect
                fullWidth
                variant="outline"
                error
                placeholder="Test"
              >
                <option>Error</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </NativeSelect>
              <NativeSelect
                fullWidth
                variant="outline"
                disabled
                placeholder="Test"
              >
                <option>Disabled</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </NativeSelect>
            </div>
          </div>
        </div>
        <div className="space-y-10">
          <div className="space-y-3">
            <div className="text-xl font-semibold text-gray-700">Left Icon</div>
            <div className="space-y-5 md:w-1/2">
              <NativeSelect
                fullWidth
                leftIcon={
                  <ArrowLongRightIcon className="h-5 w-5"></ArrowLongRightIcon>
                }
                placeholder="Test"
              >
                <option>Test</option>
              </NativeSelect>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
