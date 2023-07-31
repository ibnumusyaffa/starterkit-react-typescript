import { Button } from '@/components/button'
import {
  FormControl,
  FormErrorMessage,
  FormDescription,
  FormLabel,
} from '@/components/form-control'
import { Input } from '@/components/input'
import React from 'react'

function Page() {
  return (
    <div className="space-y-5 w-full md:w-1/2">
      <form className="space-y-7">
        <FormControl>
          <FormLabel required>Email</FormLabel>
          <Input type="text" placeholder="Email"></Input>
          <FormDescription>Well never share your email.</FormDescription>
        </FormControl>
        <FormControl>
          <FormLabel required>First name</FormLabel>
          <Input name="first_name" placeholder="First name" error></Input>
          <FormErrorMessage>First name is required.</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel>Last name</FormLabel>
          <Input name="first_name" placeholder="Last name" ></Input>
        </FormControl>
        <div>
          <Button type="button" fullWidth>
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Page
