import * as React from 'react'

import { Button } from '@/components/button'
import { useToast } from '@/components/toast'

export default function App() {
  const toast = useToast()
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Toast</div>
        <div className="text-gray-700">-</div>
      </div>

      <div className="space-y-3">
        <div className="text-xl font-semibold text-gray-700">Type</div>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="default"
            onClick={() =>
              toast.success({
                title: 'Account created.',
                description: "We've created your account for you",
              })
            }
          >
            Success
          </Button>
          <Button
            variant="default"
            onClick={() =>
              toast.danger({
                title: 'Account created.',
                description: "We've created your account for you",
              })
            }
          >
            Danger
          </Button>
          <Button
            variant="default"
            onClick={() =>
              toast.info({
                title: 'Account created.',
                description: "We've created your account for you",
              })
            }
          >
            Info
          </Button>
          <Button
            variant="default"
            onClick={() =>
              toast.warning({
                title: 'Account created.',
                description: "We've created your account for you",
              })
            }
          >
            Warning
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-xl font-semibold text-gray-700">Position</div>
        <div className="grid grid-cols-2 gap-5">
          <Button
            variant="default"
            onClick={() =>
              toast.success({
                title: 'Account created.',
                description: "We've created your account for you",
                position: 'top-left',
              })
            }
          >
            Top Left
          </Button>

          <Button
            variant="default"
            onClick={() =>
              toast.success({
                title: 'Account created.',
                description: "We've created your account for you",
                position: 'top',
              })
            }
          >
            Top
          </Button>
          <Button
            variant="default"
            onClick={() =>
              toast.success({
                title: 'Account created.',
                description: "We've created your account for you",
                position: 'top-right',
              })
            }
          >
            Top Right
          </Button>

          <Button
            variant="default"
            onClick={() =>
              toast.success({
                title: 'Account created.',
                description: "We've created your account for you",
                position: 'bottom-left',
              })
            }
          >
            bottom Left
          </Button>

          <Button
            variant="default"
            onClick={() =>
              toast.success({
                title: 'Account created.',
                description: "We've created your account for you",
                position: 'bottom',
              })
            }
          >
            bottom
          </Button>
          <Button
            variant="default"
            onClick={() =>
              toast.success({
                title: 'Account created.',
                description: "We've created your account for you",
                position: 'bottom-right',
              })
            }
          >
            bottom Right
          </Button>
        </div>
      </div>
    </div>
  )
}
