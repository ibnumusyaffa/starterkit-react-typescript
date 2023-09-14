import React from 'react'

import { Alert } from '@/components/alert'

function Page() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Alert</div>
        <div className="text-gray-700">-</div>
      </div>
      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">
          Icon & Title & Description
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Alert withIcon type="danger" title="Order archived">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Alert>
          <Alert withIcon type="warning" title="Order archived">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Alert>
          <Alert withIcon type="success" title="Order archived">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Alert>
          <Alert withIcon type="info" title="Order archived">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Alert>
          <Alert withIcon type="neutral" title="Order archived">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Alert>
        </div>
      </div>

      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">
          Description Only
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Alert type="danger">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Alert>
          <Alert type="warning">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Alert>
          <Alert type="success">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Alert>
          <Alert type="info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Alert>
          <Alert type="neutral">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Alert>
        </div>
      </div>

      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">Title Only</div>
        <div className="grid grid-cols-2 gap-5">
          <Alert type="danger" title="Order archived"></Alert>
          <Alert type="warning" title="Order archived"></Alert>
          <Alert type="success" title="Order archived"></Alert>
          <Alert type="info" title="Order archived"></Alert>
          <Alert type="neutral" title="Order archived"></Alert>
        </div>
      </div>

      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">Closable</div>
        <div className="grid gap-5 md:grid-cols-2">
          <Alert withIcon type="danger" title="Order archived" closeable>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Alert>
          <Alert withIcon type="warning" title="Order archived" closeable>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Alert>
          <Alert withIcon type="success" title="Order archived" closeable>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Alert>
          <Alert withIcon type="info" title="Order archived" closeable>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Alert>
          <Alert withIcon type="neutral" title="Order archived" closeable>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dod
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Alert>
        </div>
      </div>
    </div>
  )
}

export default Page
