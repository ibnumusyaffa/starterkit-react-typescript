import React from 'react'

import { InputPassword } from '@/components/input'

function Page() {
  return (
    <div>
      <div className="space-y-10">
        <div className="space-y-2">
          <div className="text-4xl font-semibold text-gray-700">
            Input Password
          </div>
          <div className="text-gray-700">-</div>
        </div>

        <div className="space-y-10">
          <div className="space-y-3">
            <div className="text-xl font-semibold text-gray-700">Size</div>
            <div className="space-y-5 md:w-1/2">
              <InputPassword size="sm" placeholder="sm"></InputPassword>
              <InputPassword size="md" placeholder="md"></InputPassword>
              <InputPassword size="lg" placeholder="lg"></InputPassword>
              <InputPassword size="xl" placeholder="xl"></InputPassword>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
