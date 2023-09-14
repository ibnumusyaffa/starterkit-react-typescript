import React, { useState } from 'react'

import { Pagination } from '@/components/pagination'
import { Switch } from '@/components/switch'

function Page() {
  const [page, setPage] = useState(1)
  const [state, setState] = React.useState({
    withEdges: false,
    withPageNumber: true,
    disabled: false,
  })

  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Pagination</div>
        <div className="text-gray-700">-</div>
      </div>
      <div className="space-y-10">
        <div className="flex space-x-5">
          <div className="flex space-x-3">
            <div>
              <Switch
                checked={state.disabled}
                onCheckedChange={(value) =>
                  setState((prev) => ({ ...prev, disabled: value }))
                }
                id="disabled"
              ></Switch>
            </div>
            <label className="text-gray-700" htmlFor="disabled">
              disabled
            </label>
          </div>
          <div className="flex space-x-3">
            <div>
              <Switch
                checked={state.withPageNumber}
                onCheckedChange={(value) =>
                  setState((prev) => ({
                    ...prev,
                    withPageNumber: value,
                  }))
                }
                id="withPageNumber"
              ></Switch>
            </div>
            <label className="text-gray-700" htmlFor="withPageNumber">
              withPageNumber
            </label>
          </div>
        </div>

        <Pagination
          page={page}
          onChange={(page) => setPage(page)}
          total={50}
          {...state}
        ></Pagination>
      </div>
    </div>
  )
}

export default Page
