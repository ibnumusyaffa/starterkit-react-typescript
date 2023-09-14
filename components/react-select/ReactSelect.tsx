import React from 'react'
import cx from 'clsx'
import Select from 'react-select'

export function ReactSelect(props: React.ComponentProps<typeof Select>) {
  return (
    <Select
      {...props}
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
  )
}
