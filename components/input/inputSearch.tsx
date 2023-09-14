'use client'

import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import cx from 'clsx'

import { Input } from './Input'

type InputSearchProps = Omit<React.ComponentProps<typeof Input>, 'type'>

export const InputSearch = React.forwardRef<HTMLInputElement, InputSearchProps>(
  (props: InputSearchProps, ref) => {
    const size = props.size ? props.size : 'md'
    return (
      <Input
        {...props}
        ref={ref}
        type="text"
        leftIcon={
          <MagnifyingGlassIcon
            className={cx({
              'h-3.5 w-3.5': size === 'sm',
              'h-4 w-4': size === 'md',
              'h-5 w-5': size === 'lg',
              'h-6 w-6': size === 'xl',
            })}
          ></MagnifyingGlassIcon>
        }
      ></Input>
    )
  }
)

InputSearch.displayName = 'InputSearch'
