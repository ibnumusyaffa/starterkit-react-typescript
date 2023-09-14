import React from 'react'
import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
} from '@/components/hover-card'

function Page() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Hover Card</div>
        <div className="text-gray-700">-</div>
      </div>
      <div>
        <HoverCardRoot defaultOpen={false}>
          <HoverCardTrigger>
            <a className="text-sky-600 underline" href="https://www.google.com">
              Hover me
            </a>
          </HoverCardTrigger>
          <HoverCardContent>
            <HoverCardArrow></HoverCardArrow>
            <div className="w-56 ">This content can by anything</div>
          </HoverCardContent>
        </HoverCardRoot>
      </div>
    </div>
  )
}

export default Page
