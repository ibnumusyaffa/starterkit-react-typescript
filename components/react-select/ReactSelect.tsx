import React from 'react'
import cx from '@/lib/cx'
import Select from 'react-select'

type ReactSelectProps = Omit<
  React.ComponentProps<typeof Select>,
  'isDisable'
> & {
  error?: boolean
  disabled?: boolean
}

export function ReactSelect(props: ReactSelectProps) {
  return (
    <Select
      {...props}
      isDisabled={props.disabled}
      classNames={{
        control: ({ isFocused }) =>
          cx('!h-10  !rounded !border !shadow-none', {
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
