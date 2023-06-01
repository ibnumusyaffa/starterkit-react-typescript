import React from 'react'
import { Progress } from '@/components/progress'
import { Button } from '@/components/button'

function Page() {
  let [progress, setProgress] = React.useState(25)
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Progress</div>
        <div className="text-gray-700">-</div>
      </div>

      <Progress value={progress}></Progress>
      <div className="flex gap-2">
        <Button variant="default" onClick={() => setProgress(0)}>
          0%
        </Button>
        <Button variant="default" onClick={() => setProgress(25)}>
          25%
        </Button>
        <Button variant="default" onClick={() => setProgress(50)}>
          50%
        </Button>
        <Button variant="default" onClick={() => setProgress(75)}>
          75%
        </Button>
        <Button variant="default" onClick={() => setProgress(100)}>
          100%
        </Button>
      </div>
    </div>
  )
}

export default Page
