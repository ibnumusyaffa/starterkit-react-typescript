import React from 'react'
import { InputSearch } from '@/components/input'

function Page() {
  return (
    <div>
      <div className="space-y-10">
        <div className="space-y-2">
          <div className="text-4xl font-semibold text-gray-700">
            Input Search
          </div>
          <div className="text-gray-700">-</div>
        </div>

        <div className="space-y-10">
          <div className="space-y-3">
            <div className="text-xl font-semibold text-gray-700">Size</div>
            <div className="space-y-5 md:w-1/2">
              <InputSearch size="sm" placeholder="sm"></InputSearch>
              <InputSearch size="md" placeholder="md"></InputSearch>
              <InputSearch size="lg" placeholder="lg"></InputSearch>
              <InputSearch size="xl" placeholder="xl"></InputSearch>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
