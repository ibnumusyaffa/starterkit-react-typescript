import React from 'react'
import { Button } from '@/components/button'
import {
  TooltipContent,
  TooltipRoot,
  TooltipTrigger,
} from '@/components/tooltip'

function Page() {
  const sides = ['top', 'right', 'bottom', 'left'] as const
  const aligns = ['start', 'center', 'end'] as const
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Tooltip</div>
        <div className="text-gray-700">-</div>
      </div>
      <div className="space-y-3">
        <div className="text-xl font-semibold text-gray-700">Color</div>
        <div className="flex space-x-5">
          <TooltipRoot>
            <TooltipTrigger>
              <Button variant="default">Light Tooltip</Button>
            </TooltipTrigger>
            <TooltipContent color="light">
              Lorem Ipsum is simply dummy text.
            </TooltipContent>
          </TooltipRoot>

          <TooltipRoot>
            <TooltipTrigger>
              <Button variant="default">Dark Tooltip</Button>
            </TooltipTrigger>
            <TooltipContent color="dark">
              Lorem Ipsum is simply dummy text.
            </TooltipContent>
          </TooltipRoot>
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-xl font-semibold text-gray-700">Positioning</div>
        <div className="grid grid-cols-2 gap-5 md:w-3/4 md:grid-cols-5">
          {sides.map((side, sideIndex) => {
            return aligns.map((align, alignIndex) => {
              return (
                <TooltipRoot key={`${sideIndex}-${alignIndex}`}>
                  <TooltipTrigger>
                    <Button size="sm" variant="default">
                      {side} - {align}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side={side} align={align} color="light">
                    <p>Lorem ipsum simply dummy text</p>
                    <p>Lorem ipsum simply dummy text</p>
                    <p>Lorem ipsum simply dummy text</p>
                  </TooltipContent>
                </TooltipRoot>
              )
            })
          })}
        </div>
      </div>
    </div>
  )
}
export default Page
