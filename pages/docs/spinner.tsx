import React from 'react'

import { Spinner } from '@/components/spinner'

function Page() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Spinner</div>
        <div className="text-gray-700">-</div>
      </div>
      <div className="flex flex-wrap gap-5">
        <Spinner className="h-10 w-10 text-primary-500"></Spinner>
        <Spinner className="h-10 w-10 text-secondary-500"></Spinner>
        <Spinner className="h-10 w-10 text-success-500"></Spinner>
        <Spinner className="h-10 w-10 text-info-500"></Spinner>
        <Spinner className="h-10 w-10 text-danger-500"></Spinner>
        <Spinner className="h-10 w-10 text-warning-500"></Spinner>
      </div>
    </div>
  )
}

export default Page
