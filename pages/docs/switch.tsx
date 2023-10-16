import React from 'react'

import { Switch } from '@/components/switch'

function Demo() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Switch</div>
        <div className="text-gray-700">-</div>
      </div>
      <div className="space-y-3">
        <div className="text-xl font-semibold text-gray-700">State</div>
        <div className="flex flex-wrap gap-5">
          <div className="text-md flex items-center justify-center space-x-3 text-gray-700">
            <Switch size="md" checked={false} label="unchecked"></Switch>
          </div>
          <div className="text-md flex items-center justify-center space-x-3 text-gray-700">
            <Switch id="switch-1" size="md" label="disabled unchecked"></Switch>
          </div>
          <div className="text-md flex items-center justify-center space-x-3 text-gray-700">
            <Switch size="md" checked label="checked"></Switch>
          </div>
          <div className="text-md flex items-center justify-center space-x-3 text-gray-700">
            <Switch size="md" checked disabled label="disable checked"></Switch>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-xl font-semibold text-gray-700">Size</div>
        <div className="flex flex-wrap gap-5">
          <div className="flex items-center justify-center space-x-3 text-sm text-gray-700">
            <Switch size="sm" label="sm"></Switch>
          </div>

          <div className="text-md flex items-center justify-center space-x-3 text-gray-700">
            <Switch size="md" label="md"></Switch>
          </div>

          <div className="flex items-center justify-center space-x-3 text-lg text-gray-700">
            <Switch size="lg" label="lg"></Switch>
          </div>

          <div className="flex items-center justify-center space-x-3 text-xl text-gray-700">
            <Switch size="xl" label="xl"></Switch>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Demo
