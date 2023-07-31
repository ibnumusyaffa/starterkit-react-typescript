import React from 'react'
import {
  Input,
  InputGroup,
  InputRightAddon,
  InputLeftAddon,
  InputPassword,
} from '@/components/input'
import { Button } from '@/components/button'
import { NativeSelect } from '@/components/native-select'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { MicrophoneIcon } from '@heroicons/react/24/outline'

function Page() {
  return (
    <div>
      <div className="space-y-10">
        <div className="space-y-2">
          <div className="text-4xl font-semibold text-gray-700">Input</div>
          <div className="text-gray-700">
            Input component is a component that is used to get user input in a
            text field.
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-3">
            <div className="text-xl font-semibold text-gray-700">Variant</div>
            <div className="flex space-x-5 md:w-1/2">
              <Input
                variant="outline"
                placeholder="Outline"
                type="text"
              ></Input>
              <Input variant="filled" placeholder="Filled" type="text"></Input>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-3">
            <div className="text-xl font-semibold text-gray-700">Size</div>
            <div className="space-y-5 md:w-1/2">
           
              <Input size="sm" placeholder="sm" type="text"></Input>
              <Input size="md" placeholder="md" type="text"></Input>
              <Input size="lg" placeholder="lg" type="text"></Input>
              <Input size="xl" placeholder="xl" type="text"></Input>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-3">
            <div className="text-xl font-semibold text-gray-700">State</div>
            <div className="space-y-5 md:w-1/2">
              <Input error placeholder="Error" type="text"></Input>
              <Input disabled placeholder="Disabled" type="text"></Input>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-3">
            <div className="text-xl font-semibold text-gray-700">
              Left/Right Icon
            </div>
            <div className="space-y-5 md:w-1/2">
              <Input
                leftIcon={
                  <MagnifyingGlassIcon className="h-5 w-5"></MagnifyingGlassIcon>
                }
                placeholder="Type here"
                type="text"
              ></Input>

              <Input
                rightIcon={
                  <MicrophoneIcon className="h-5 w-5"></MicrophoneIcon>
                }
                placeholder="Type here"
                type="text"
              ></Input>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-3">
            <div className="text-xl font-semibold text-gray-700">
              Left/Right Addon
            </div>
            <div className="space-y-5 md:w-1/2">
              <InputGroup>
                <InputLeftAddon>https://</InputLeftAddon>
                <Input placeholder="Type here" type="text"></Input>
                <InputRightAddon>.com</InputRightAddon>
              </InputGroup>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-3">
            <div className="text-xl font-semibold text-gray-700">
              Input File
            </div>
            <div className="space-y-5 md:w-1/2">
              <Input type="file" placeholder="Type here"></Input>
            </div>
          </div>
        </div>
        <div className="space-y-10">
          <div className="space-y-3">
            <div className="text-xl font-semibold text-gray-700">
              With Select Example
            </div>
            <div className="flex space-x-5 md:w-1/2">
              <InputGroup>
                <NativeSelect placeholder="Test">
                  <option>All Type</option>
                  <option>Type 1</option>
                  <option>Type 2</option>
                  <option>Type 3</option>
                </NativeSelect>
                <Input autoComplete="off" placeholder="Search..."></Input>
                <Button variant="default">Search</Button>
              </InputGroup>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-3">
            <div className="text-xl font-semibold text-gray-700">
              With Button Example
            </div>
            <div className="flex space-x-5 md:w-1/2">
              <InputGroup>
                <Input autoComplete="off"></Input>
                <Button variant="default">Button</Button>
              </InputGroup>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-3">
            <div className="text-xl font-semibold text-gray-700">
              Password Input Example
            </div>
            <div className="space-y-5 md:w-1/2">
              <InputPassword
                placeholder="Type here"
                autoComplete="off"
              ></InputPassword>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
