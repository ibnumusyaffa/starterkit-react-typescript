import React, { useState } from 'react'
import { Input } from './Input'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

export function InputPassword(props) {
  const [type, setType] = useState('password')
  return (
    <Input
      {...props}
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
}
