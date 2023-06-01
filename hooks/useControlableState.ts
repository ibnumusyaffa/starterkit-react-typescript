import { useState } from 'react'

interface UseControllableProps<T> {
  /** Value for controlled state */
  value?: T

  /** Initial value for uncontrolled state */
  defaultValue?: T

  /** Final value for uncontrolled state when value and defaultValue are not provided */
  finalValue?: T

  /** Controlled state onChange handler */
  onChange?(value: T): void
}

export function useControllableState<T>({
  value,
  defaultValue,
  finalValue,
  onChange = () => {},
}: UseControllableProps<T>): [T, (value: T) => void, boolean] {
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue !== undefined ? defaultValue : finalValue
  )

  const handleUncontrolledChange = (val: T) => {
    setUncontrolledValue(val)
    onChange?.(val)
  }

  if (value !== undefined) {
    return [value as T, onChange, true]
  }

  return [uncontrolledValue as T, handleUncontrolledChange, false]
}
