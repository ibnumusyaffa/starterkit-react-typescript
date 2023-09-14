'use client'

import React, { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import cx from 'clsx'

import { Input } from './Input'

type InputPasswordProps = Omit<React.ComponentProps<typeof Input>, 'type'>

export const InputPassword = React.forwardRef<
  HTMLInputElement,
  InputPasswordProps
>((props, ref) => {
  const [type, setType] = useState('password')
  const size = props.size ? props.size : 'md'
  return (
    <Input
      {...props}
      ref={ref}
      type={type}
      rightIcon={
        <button
          type="button"
          onClick={() => setType(type === 'password' ? 'text' : 'password')}
        >
          {type === 'password' ? (
            <EyeIcon
              className={cx({
                'h-3.5 w-3.5': size === 'sm',
                'h-4 w-4': size === 'md',
                'h-5 w-5': size === 'lg',
                'h-6 w-6': size === 'xl',
              })}
            ></EyeIcon>
          ) : (
            <EyeSlashIcon
              className={cx({
                'h-3.5 w-3.5': size === 'sm',
                'h-4 w-4': size === 'md',
                'h-5 w-5': size === 'lg',
                'h-6 w-6': size === 'xl',
              })}
            ></EyeSlashIcon>
          )}
        </button>
      }
    ></Input>
  )
})

InputPassword.displayName = 'InputPassword'
