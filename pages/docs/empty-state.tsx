import React from 'react'
import { EmptyState } from '@/components/empty-state'
import { PlusIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/button'

function Page() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Empty State</div>
        <div className="text-gray-700">-</div>
      </div>

      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">Title</div>
        <div className="border border-gray-300 py-24">
          <EmptyState title="No project found"></EmptyState>
        </div>
      </div>

      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">Description</div>
        <div className="border border-gray-300 py-24">
          <EmptyState
            title="No project found"
            description="Your search did not match any project. Please try again or create project."
          ></EmptyState>
        </div>
      </div>

      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">Action</div>
        <div className="border border-gray-300 py-24">
          <EmptyState
            title="No project found"
            description="Your search did not match any project. Please try again or create project."
            primaryAction={
              <Button leftIcon={<PlusIcon className="h-5 w-5"></PlusIcon>}>
                Create project
              </Button>
            }
            secondaryAction={<Button variant="default">Clear search</Button>}
          ></EmptyState>
        </div>
      </div>
      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">Icon</div>
        <div className="border border-gray-300 py-24">
          <EmptyState
            title="No project found"
            description="Your search did not match any project. Please try again or create project."
            primaryAction={
              <Button leftIcon={<PlusIcon className="h-5 w-5"></PlusIcon>}>
                Create project
              </Button>
            }
            secondaryAction={<Button variant="default">Clear search</Button>}
            withIcon
          ></EmptyState>
        </div>
      </div>
    </div>
  )
}

export default Page
