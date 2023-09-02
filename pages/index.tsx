import React from 'react'

import Select from 'react-select'
import cx from 'clsx'
import { NativeSelect } from '@/components/native-select'
// import { Button } from '@/components/button'

export default function Page() {
  return (
    <div className="flex space-x-5">
      <NativeSelect>
        <option>sdsdsdsd</option>
      </NativeSelect>
      <Select
        
        options={[
          {
            label: 'option 1',
            value: 1,
          },
          {
            label: 'option 2',
            value: 2,
          },
          {
            label: 'option 3',
            value: 3,
          },
        ]}
        classNames={{
          control: ({ isFocused }) =>
            cx('!border !border-gray-300 !rounded !shadow-none !h-10', {
              '!border-primary-500 !outline-none !ring-2 !ring-primary-500 !ring-opacity-25':
                isFocused,
            }),
          option: ({ isSelected, isFocused }) =>
            cx('', {
              '!bg-primary-500': isSelected,
              '!bg-primary-100': isFocused && !isSelected,
            }),
        }}
      />
    </div>
  )
}
