import React from 'react'
import {
  ArrowLeftOnRectangleIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline'
import {
  ContextMenuArrow,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/context-menu'

function Page() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Context Menu</div>
        <div className="text-gray-700">-</div>
      </div>
      <ContextMenuRoot>
        <ContextMenuTrigger>
          <div className="flex h-56 w-full items-center justify-center border border-gray-300 bg-gray-50 p-5">
            <div>Click right here</div>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuArrow></ContextMenuArrow>
          <ContextMenuGroup>
            <ContextMenuLabel>Application</ContextMenuLabel>
            <ContextMenuItem leftIcon={<Cog6ToothIcon className="h-5 w-5" />}>
              Account Settings
            </ContextMenuItem>
            <ContextMenuItem leftIcon={<Cog6ToothIcon className="h-5 w-5" />}>
              Support
            </ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger
                leftIcon={<Cog6ToothIcon className="h-5 w-5" />}
              >
                More
              </ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem
                  leftIcon={<Cog6ToothIcon className="h-5 w-5" />}
                >
                  Support
                </ContextMenuItem>
                <ContextMenuItem
                  leftIcon={<Cog6ToothIcon className="h-5 w-5" />}
                >
                  Support
                </ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuGroup>
          <ContextMenuSeparator></ContextMenuSeparator>
          <ContextMenuGroup>
            <ContextMenuLabel>Danger Zone</ContextMenuLabel>
            <ContextMenuItem leftIcon={<Cog6ToothIcon className="h-5 w-5" />}>
              License
            </ContextMenuItem>
            <ContextMenuItem
              disabled
              color="danger"
              leftIcon={
                <ArrowLeftOnRectangleIcon className="h-5 w-5"></ArrowLeftOnRectangleIcon>
              }
            >
              Sign out
            </ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenuRoot>
    </div>
  )
}

export default Page
