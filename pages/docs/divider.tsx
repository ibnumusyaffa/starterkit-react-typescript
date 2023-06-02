import React from 'react'
import { Divider } from '@/components/divider'
import { Button } from '@/components/button'

function Page() {
  return (
    <div className="">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Divider</div>
        <div className="text-gray-700">-</div>
      </div>
      <Divider></Divider>
      <Divider position="center">
        <div className="text-sm text-gray-700">Center</div>
      </Divider>
      <Divider position="left">
        <div className="text-sm text-gray-700">Left</div>
      </Divider>
      <Divider position="right">
        <div className="text-sm text-gray-700">Right</div>
      </Divider>
      <Divider position="center" withGap={false}>
        <Button variant="default" size="sm">
          Read More
        </Button>
      </Divider>
    </div>
  )
}

export default Page
