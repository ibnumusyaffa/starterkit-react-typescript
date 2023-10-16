import React from 'react'
import {
  ArrowLeftOnRectangleIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline'

import { Button } from '@/components/button'
import {
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu'

function Page() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">
          Dropdown Menu
        </div>
        <div className="text-gray-700">-</div>
      </div>
      <div className="flex items-center justify-center border border-gray-300 bg-gray-50 py-20">
        <DropdownMenuRoot onOpenChange={setOpen} open={open}>
          <DropdownMenuTrigger>
            <Button>Trigger</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuArrow></DropdownMenuArrow>
            <DropdownMenuGroup>
              <DropdownMenuLabel>Application</DropdownMenuLabel>
              <DropdownMenuItem
                leftIcon={<Cog6ToothIcon className="h-5 w-5" />}
              >
                Account Settings
              </DropdownMenuItem>
              <DropdownMenuItem
                leftIcon={<Cog6ToothIcon className="h-5 w-5" />}
              >
                Support
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger
                  leftIcon={<Cog6ToothIcon className="h-5 w-5" />}
                >
                  More
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem
                    leftIcon={<Cog6ToothIcon className="h-5 w-5" />}
                  >
                    Support
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    leftIcon={<Cog6ToothIcon className="h-5 w-5" />}
                  >
                    Support
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator></DropdownMenuSeparator>
            <DropdownMenuGroup>
              <DropdownMenuLabel>Danger Zone</DropdownMenuLabel>
              <DropdownMenuItem
                disabled
                leftIcon={<Cog6ToothIcon className="h-5 w-5" />}
              >
                License
              </DropdownMenuItem>
              <DropdownMenuItem
                color="danger"
                leftIcon={
                  <ArrowLeftOnRectangleIcon className="h-5 w-5"></ArrowLeftOnRectangleIcon>
                }
              >
                Sign out
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenuRoot>
      </div>
    </div>
  )
}

export default Page
