'use client'

import * as React from 'react'
import { useControllableState } from '@/hooks'
import cx from '@/lib/cx'
import * as SliderPrimitive from '@radix-ui/react-slider'

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    showLabel?: 'always' | 'hover' | 'none'
    formatLabel?: (value: number) => string
  }
>(
  (
    {
      value,
      onValueChange,
      defaultValue,
      disabled,
      showLabel = 'hover',
      formatLabel,
      ...props
    },
    ref
  ) => {
    const [_value, _onValueChange] = useControllableState({
      value: value,
      onChange: onValueChange,
      defaultValue: defaultValue ? defaultValue : [0],
    })

    const [showTooltip, setShowTooltip] = React.useState(false)
    return (
      <SliderPrimitive.Root
        ref={ref}
        {...props}
        disabled={disabled}
        value={_value}
        onValueChange={_onValueChange}
        className={cx(
          'relative flex w-full  touch-none select-none items-center data-[disabled]:opacity-50'
        )}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full  bg-gray-200 shadow-inner">
          <SliderPrimitive.Range className="absolute h-full bg-primary-500  " />
        </SliderPrimitive.Track>

        {_value.map((value, index) => (
          <SliderPrimitive.Thumb key={index} asChild>
            <span
              onMouseEnter={() => {
                if (disabled || showLabel === 'none') {
                  return
                }
                setShowTooltip(true)
              }}
              onMouseLeave={() => {
                if (disabled || showLabel === 'none') {
                  return
                }
                setShowTooltip(false)
              }}
              className="relative block h-5 w-5 rounded-full border-[3px] border-primary-500 bg-white text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-25 focus:ring-offset-1"
            >
              <div
                data-show={showTooltip || showLabel === 'always'}
                className="absolute inset-0 -top-7 flex justify-center opacity-0 transition-opacity  duration-150  data-[show=true]:opacity-100"
              >
                <div className="flex h-5 min-w-max items-center rounded bg-black px-1 text-center text-xs leading-none text-white ring-1 ring-white">
                  {formatLabel ? formatLabel(value) : value}
                </div>
              </div>
            </span>
          </SliderPrimitive.Thumb>
        ))}
      </SliderPrimitive.Root>
    )
  }
)

Slider.displayName = SliderPrimitive.Root.displayName
