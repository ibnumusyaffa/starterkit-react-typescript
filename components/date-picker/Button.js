import { useRef } from 'react'
import { useButton, useFocusRing, mergeProps } from 'react-aria'
import cx from 'clsx'
export function CalendarButton(props) {
  let ref = useRef()
  let { buttonProps } = useButton(props, ref)
  let { focusProps, isFocused } = useFocusRing()
  return (
    <button
      {...mergeProps(buttonProps, focusProps)}
      ref={ref}
      className={cx(
        'flex h-6 w-6 items-center justify-center rounded bg-white',
        {
          'hover:bg-gray-100 active:bg-gray-200': !props.isDisabled,
          'cursor-not-allowed opacity-50': props.isDisabled,
          'outline-none ring-2 ring-primary-500 ring-opacity-20': isFocused,
        },
      )}
    >
      {props.children}
    </button>
  )
}

export function FieldButton(props) {
  let ref = useRef()
  let { buttonProps } = useButton(props, ref)
  return (
    <button
      {...buttonProps}
      ref={ref}
      className={cx(
        'h-full rounded-r border-l border-gray-300 bg-gray-50 px-2 outline-none',
        {
          'hover:bg-gray-100  active:bg-gray-200': !props.isDisabled,

          'cursor-not-allowed opacity-50': props.isDisabled,
        },
      )}
    >
      {props.children}
    </button>
  )
}
