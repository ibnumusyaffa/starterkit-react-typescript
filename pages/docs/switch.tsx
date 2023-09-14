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
            <Switch size="md" checked={false}></Switch>
            <label>unchecked</label>
          </div>
          <div className="text-md flex items-center justify-center space-x-3 text-gray-700">
            <Switch size="md" disabled></Switch>
            <label>disabled unchecked</label>
          </div>
          <div className="text-md flex items-center justify-center space-x-3 text-gray-700">
            <Switch size="md" checked></Switch>
            <label>checked</label>
          </div>
          <div className="text-md flex items-center justify-center space-x-3 text-gray-700">
            <Switch size="md" checked disabled></Switch>
            <label>disable checked</label>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-xl font-semibold text-gray-700">Size</div>
        <div className="flex flex-wrap gap-5">
          <div className="flex items-center justify-center space-x-3 text-sm text-gray-700">
            <Switch size="sm"></Switch>
            <label>sm</label>
          </div>

          <div className="text-md flex items-center justify-center space-x-3 text-gray-700">
            <Switch size="md"></Switch>
            <label>md</label>
          </div>

          <div className="flex items-center justify-center space-x-3 text-lg text-gray-700">
            <Switch size="lg"></Switch>
            <label>lg</label>
          </div>

          <div className="flex items-center justify-center space-x-3 text-xl text-gray-700">
            <Switch size="xl"></Switch>
            <label>xl</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Demo
