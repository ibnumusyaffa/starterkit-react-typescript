import React from 'react'
import { useControllableState } from '@/hooks'
import cx from '@/lib/cx'
import RootOtpInput from 'react-otp-input'

type InputProps = Omit<React.ComponentProps<'input'>, 'size'> & {
  /** @default false */
  error?: boolean
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { error, disabled, ...props },
  ref
) {
  return (
    <input
      {...props}
      data-error={error}
      ref={ref}
      disabled={disabled}
      className={cx(
        // base style
        'form-input  rounded  px-1  text-gray-700',
        'focus:border-primary-500 focus:placeholder-transparent focus:outline-none focus:ring-primary-500 focus:ring-opacity-25',

        '!py-0',

        'data-[error=true]:border-danger-500 data-[error=true]:focus:ring-danger-500 data-[error=true]:focus:ring-opacity-25',
        // variant style
        {
          'bg-white-100 border border-gray-300 focus:ring-2': true,
          'cursor-not-allowed bg-gray-100 opacity-75': disabled,
        },
        //size style
        {
          'h-11 !w-11 text-base': true,
        },
        '[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
      )}
    />
  )
})

export type OtpInputProps = {
  defaultValue?: string
  value?: string
  onChange?: (otp: string) => void
  numInputs?: number
  error?: boolean
  placeholder?: string
  disabled?: boolean
  type?: 'number' | 'text' | 'password'
}

export function OtpInput({
  defaultValue,
  value,
  onChange,
  numInputs = 4,
  error,
  placeholder = '○',
  disabled,
  type = 'text',
}: OtpInputProps) {
  const [_value, _setValue] = useControllableState<string>({
    value: value,
    onChange: onChange,
    defaultValue: defaultValue,
  })
  return (
    <RootOtpInput
      numInputs={numInputs}
      value={_value}
      inputType={type}
      onChange={_setValue}
      renderSeparator={<span className="px-0.5"></span>}
      renderInput={(inputProps) => (
        <Input
          {...inputProps}
          error={error}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
    />
  )
}
