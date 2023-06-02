import React, { useState } from 'react'
import { Input } from './Input'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

type InputPasswordProps = Omit<React.ComponentProps<typeof Input>, 'type'>

export const InputPassword = React.forwardRef<
  HTMLInputElement,
  InputPasswordProps
>((props: InputPasswordProps, ref) => {
  const [type, setType] = useState('password')
  return (
    <Input
      {...props}
      ref={ref}
      type={type}
      rightIcon={
        <button
          onClick={() => setType(type === 'password' ? 'text' : 'password')}
        >
          {type === 'password' ? (
            <EyeIcon className="h-4 w-4"></EyeIcon>
          ) : (
            <EyeSlashIcon className="h-4 w-4"></EyeSlashIcon>
          )}
        </button>
      }
    ></Input>
  )
})

InputPassword.displayName = 'InputPassword'
