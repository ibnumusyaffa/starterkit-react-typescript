import React, { useState } from 'react'
import {
  LoadedOptions,
  OptionType,
  ReactSelect,
  ReactSelectAsync,
} from '@/components/react-select'

const options: OptionType[] = []
for (let i = 0; i < 50; ++i) {
  options.push({
    value: i + 1,
    label: `Option ${i + 1}`,
  })
}

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined)
    }, ms)
  })

export const loadOptions = async (
  search: string,
  prevOptions: LoadedOptions
) => {
  await sleep(500)

  let filteredOptions: OptionType[]
  if (!search) {
    filteredOptions = options
  } else {
    const searchLower = search.toLowerCase()

    filteredOptions = options.filter(({ label }) =>
      label.toLowerCase().includes(searchLower)
    )
  }

  const hasMore = filteredOptions.length > prevOptions.length + 10
  const slicedOptions = filteredOptions.slice(
    prevOptions.length,
    prevOptions.length + 10
  )

  return {
    options: slicedOptions,
    hasMore,
  }
}

function Page() {
  const [value, onChange] = useState<OptionType | null>(null)
  return (
    <div>
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">React Select</div>
        <div className="text-gray-700">-</div>
      </div>
      <div className="space-y-10">
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">Default</div>
          <div className="md:w-1/2">
            <ReactSelect
              options={[
                { label: 'Option 1', value: '1' },
                { label: 'Option 2', value: '2' },
                { label: 'Option 3', value: '3' },
              ]}
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-700">
            Async + Pagination
          </div>
          <div className="md:w-1/2">
            <ReactSelectAsync
              value={value}
              loadOptions={loadOptions}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
