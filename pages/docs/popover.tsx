import React from 'react'
import { Button } from '@/components/button'
import {
  PopoverArrow,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from '@/components/popover'

function Page() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Popover</div>
        <div className="text-gray-700">-</div>
      </div>

      <PopoverRoot defaultOpen={false}>
        <PopoverTrigger>
          <Button>Click Me</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow></PopoverArrow>
          <div className="w-56 ">This Content can by anything</div>
        </PopoverContent>
      </PopoverRoot>
    </div>
  )
}

export default Page
