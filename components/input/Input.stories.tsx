/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
} from '@heroicons/react/24/outline'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/button'
// import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputPassword,
  InputRightAddon,
} from '@/components/input'
import { NativeSelect } from '@/components/native-select'

const meta = {
  title: 'Forms/Input',
  component: Input,
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const BasicUsage: Story = {
  args: {},
  render: (args) => {
    return <Input {...args} placeholder="Email" type="text" />
  },
}

export const Variant: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="flex space-x-5">
        <Input
          {...args}
          variant="outline"
          placeholder="Outline"
          type="text"
        ></Input>
        <Input
          {...args}
          variant="filled"
          placeholder="Filled"
          type="text"
        ></Input>
      </div>
    )
  },
}

export const Size: Story = {
  render: () => {
    return (
      <div className="space-y-5">
        <Input size="sm" placeholder="sm" type="text"></Input>
        <Input size="md" placeholder="md" type="text"></Input>
        <Input size="lg" placeholder="lg" type="text"></Input>
        <Input size="xl" placeholder="xl" type="text"></Input>
      </div>
    )
  },
}

export const Error: Story = {
  render: () => {
    return (
      <div className="flex space-x-5">
        <Input
          error
          variant="outline"
          placeholder="Outline"
          type="text"
        ></Input>
        <Input error variant="filled" placeholder="Filled" type="text"></Input>
      </div>
    )
  },
}

export const Disable: Story = {
  render: () => {
    return (
      <div className="flex space-x-5">
        <Input
          disabled
          variant="outline"
          placeholder="Outline"
          type="text"
        ></Input>
        <Input
          disabled
          variant="filled"
          placeholder="Filled"
          type="text"
        ></Input>
      </div>
    )
  },
}

export const WithIcon: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="space-y-5 md:w-1/2">
        <Input
          {...args}
          leftIcon={
            <MagnifyingGlassIcon className="h-5 w-5"></MagnifyingGlassIcon>
          }
          placeholder="Type here"
          type="text"
        ></Input>

        <Input
          {...args}
          rightIcon={<MicrophoneIcon className="h-5 w-5"></MicrophoneIcon>}
          placeholder="Type here"
          type="text"
        ></Input>

        <Input
          {...args}
          leftIcon={
            <MagnifyingGlassIcon className="h-5 w-5"></MagnifyingGlassIcon>
          }
          rightIcon={<MicrophoneIcon className="h-5 w-5"></MicrophoneIcon>}
          placeholder="Type here"
          type="text"
        ></Input>

        <Input
          {...args}
          variant="filled"
          leftIcon={
            <MagnifyingGlassIcon className="h-5 w-5"></MagnifyingGlassIcon>
          }
          placeholder="Type here"
          type="text"
        ></Input>

        <Input
          {...args}
          variant="filled"
          rightIcon={<MicrophoneIcon className="h-5 w-5"></MicrophoneIcon>}
          placeholder="Type here"
          type="text"
        ></Input>

        <Input
          {...args}
          variant="filled"
          leftIcon={
            <MagnifyingGlassIcon className="h-5 w-5"></MagnifyingGlassIcon>
          }
          rightIcon={<MicrophoneIcon className="h-5 w-5"></MicrophoneIcon>}
          placeholder="Type here"
          type="text"
        ></Input>
      </div>
    )
  },
}

export const WithAddon: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="space-y-5 md:w-1/2">
        <InputGroup>
          <InputLeftAddon>https://</InputLeftAddon>
          <Input
            {...args}
            variant="outline"
            placeholder="Type here"
            type="text"
          ></Input>
          {/* <InputRightAddon>.com</InputRightAddon> */}
        </InputGroup>
        <InputGroup>
          <Input
            {...args}
            variant="outline"
            placeholder="Type here"
            type="text"
          ></Input>
          <InputRightAddon>.com</InputRightAddon>
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>https://</InputLeftAddon>
          <Input
            {...args}
            variant="outline"
            placeholder="Type here"
            type="text"
          ></Input>
          <InputRightAddon>.com</InputRightAddon>
        </InputGroup>
      </div>
    )
  },
}

export const WithButton: Story = {
  args: {},
  render: (args) => {
    return (
      <div className="space-y-5 md:w-1/2">
        <InputGroup>
          <Input {...args} placeholder="Search..." autoComplete="off"></Input>
          <Button
            variant="outline"
            leftIcon={
              <MagnifyingGlassIcon className="h-5 w-5"></MagnifyingGlassIcon>
            }
          >
            Search
          </Button>
        </InputGroup>

        <InputGroup>
          <Input {...args} placeholder="Search..." autoComplete="off"></Input>
          <Button
            variant="default"
            leftIcon={
              <MagnifyingGlassIcon className="h-5 w-5"></MagnifyingGlassIcon>
            }
          >
            Search
          </Button>
        </InputGroup>

        <InputGroup>
          <Input {...args} placeholder="Search..." autoComplete="off"></Input>
          <Button
            variant="solid"
            leftIcon={
              <MagnifyingGlassIcon className="h-5 w-5"></MagnifyingGlassIcon>
            }
          >
            Search
          </Button>
        </InputGroup>
      </div>
    )
  },
}

export const WithNativeSelect: Story = {
  args: {},
  render: (args) => {
    return (
      <InputGroup>
        <NativeSelect placeholder="Test" >
          <option>All Type</option>
          <option>Type 1</option>
          <option>Type 2</option>
          <option>Type 3</option>
        </NativeSelect>
        <Input {...args} autoComplete="off" placeholder="Search..."></Input>
        <Button variant="default">Search</Button>
      </InputGroup>
    )
  },
}

export const InputPassword_: Story = {
  args: {},
  render: (args) => {
    return <InputPassword {...args} placeholder="Password" />
  },
}

export const InputFile: Story = {
  args: {},
  render: (args) => {
    return <Input {...args} type="file" placeholder="Password" />
  },
}
