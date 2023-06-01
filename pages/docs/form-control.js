import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from '@/components/form-control'
import { Input } from '@/components/input'
import React from 'react'

function Page() {
  return (
    <div className="space-y-5">
      <FormControl>
        <FormLabel required>Email address</FormLabel>
        <Input placeholder="Email"></Input>
        <FormHelperText>Well never share your email.</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel required>Address</FormLabel>
        <Input placeholder="Address" error></Input>
        <FormErrorMessage>Address is required.</FormErrorMessage>
      </FormControl>
    </div>
  )
}

export default Page
