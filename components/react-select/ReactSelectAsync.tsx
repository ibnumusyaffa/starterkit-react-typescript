import React from 'react'
import cx from 'clsx'
import type { GroupBase, OptionsOrGroups } from 'react-select'
import {
  AsyncPaginate,
  WithAsyncPaginateType,
} from 'react-select-async-paginate'

export type OptionType = {
  value: number
  label: string
}

export type LoadedOptions = OptionsOrGroups<OptionType, GroupBase<OptionType>>

function _ReactSelectAsync(props: React.ComponentProps<typeof AsyncPaginate>) {
  return (
    <AsyncPaginate
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

export const ReactSelectAsync = _ReactSelectAsync as WithAsyncPaginateType
