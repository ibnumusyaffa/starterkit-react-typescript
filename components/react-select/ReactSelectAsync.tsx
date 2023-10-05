/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useId } from 'react'
import cx from 'clsx'
import type { GroupBase, OptionsOrGroups } from 'react-select'
import { AsyncPaginate, AsyncPaginateProps } from 'react-select-async-paginate'

export type OptionType = {
  value: any
  label: string
}

export type LoadedOptions = OptionsOrGroups<OptionType, GroupBase<OptionType>>

type WithAsyncPaginateType = <
  OptionType,
  Group extends GroupBase<OptionType>,
  Additional,
  IsMulti extends boolean = false,
>(
  props: AsyncPaginateProps<OptionType, Group, Additional, IsMulti> & {
    disabled?: boolean
    error?: boolean
  }
) => React.ReactElement

export const ReactSelectAsync: WithAsyncPaginateType = (props) => {
  const id = useId()
  return (
    <AsyncPaginate
      {...props}
      instanceId={id}
      isDisabled={props.disabled}
      classNames={{
        control: ({ isFocused }) =>
          cx('!border  !rounded !shadow-none !h-10', {
            '!border-gray-300': !props.error,
            '!border-danger-500': props.error,
            '!border-primary-500 !outline-none !ring-2 !ring-primary-500 !ring-opacity-25':
              isFocused && !props.error,
            '!border-danger-500 !outline-none !ring-2 !ring-danger-500 !ring-opacity-25':
              isFocused && props.error,
            '!cursor-not-allowed !bg-gray-100 !opacity-75': props.disabled,
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
