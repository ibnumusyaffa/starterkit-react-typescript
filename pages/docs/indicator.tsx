import React from 'react'

import { Indicator } from '@/components/indicator'

function Page() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Indicator</div>
        <div className="text-gray-700">-</div>
      </div>
      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">
          Indicator Only
        </div>
        <div className="flex flex-wrap gap-5">
          <Indicator>
            <div className="h-20 w-20 rounded  bg-gray-300"></div>
          </Indicator>
        </div>
      </div>
      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">Animate Ping</div>
        <div className="flex flex-wrap gap-5">
          <Indicator animatePing>
            <div className="h-20 w-20 rounded  bg-gray-300"></div>
          </Indicator>
        </div>
      </div>

      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">Color</div>
        <div className="flex flex-wrap gap-5">
          <Indicator color="primary">
            <div className="h-20 w-20 rounded  bg-gray-300"></div>
          </Indicator>
          <Indicator color="secondary">
            <div className="h-20 w-20 rounded  bg-gray-300"></div>
          </Indicator>
          <Indicator color="success">
            <div className="h-20 w-20 rounded  bg-gray-300"></div>
          </Indicator>
          <Indicator color="danger">
            <div className="h-20 w-20 rounded  bg-gray-300"></div>
          </Indicator>
          <Indicator color="warning">
            <div className="h-20 w-20 rounded  bg-gray-300"></div>
          </Indicator>
          <Indicator color="info">
            <div className="h-20 w-20 rounded  bg-gray-300"></div>
          </Indicator>
        </div>
      </div>

      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">Count</div>
        <div className="flex flex-wrap gap-5">
          <div className="flex flex-wrap gap-5">
            <Indicator count={0}>
              <div className="h-20 w-20 rounded  bg-gray-300"></div>
            </Indicator>
            <Indicator count={1}>
              <div className="h-20 w-20 rounded  bg-gray-300"></div>
            </Indicator>
            <Indicator count={10}>
              <div className="h-20 w-20 rounded  bg-gray-300"></div>
            </Indicator>
            <Indicator count={99}>
              <div className="h-20 w-20 rounded  bg-gray-300"></div>
            </Indicator>
            <Indicator count={1000}>
              <div className="h-20 w-20 rounded  bg-gray-300"></div>
            </Indicator>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">Label</div>
        <div className="flex flex-wrap gap-5">
          <Indicator label="New">
            <div className="h-20 w-20 rounded  bg-gray-300"></div>
          </Indicator>
        </div>
      </div>

      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">Position</div>
        <div className="space-y-5">
          <div className="flex flex-wrap gap-5">
            <Indicator label="top-left" position="top-left">
              <div className="h-20 w-20 rounded bg-gray-300"></div>
            </Indicator>
            <Indicator label="top-center" position="top-center">
              <div className="h-20 w-20 rounded bg-gray-300"></div>
            </Indicator>
            <Indicator label="top-right" position="top-right">
              <div className="h-20 w-20 rounded bg-gray-300"></div>
            </Indicator>
          </div>
          <div className="flex flex-wrap gap-5">
            <Indicator label="bottom-left" position="bottom-left">
              <div className="h-20 w-20 rounded bg-gray-300"></div>
            </Indicator>
            <Indicator label="bottom-center" position="bottom-center">
              <div className="h-20 w-20 rounded bg-gray-300"></div>
            </Indicator>
            <Indicator label="bottom-right" position="bottom-right">
              <div className="h-20 w-20 rounded bg-gray-300"></div>
            </Indicator>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <div className="text-xl font-semibold text-gray-700">Offset</div>
        <div className="space-y-5">
          <div className="flex flex-wrap gap-5">
            <Indicator
              style={{ left: 15, top: 5 }}
              count={9}
              position="top-left"
            >
              <div className="h-20 w-20 rounded-full  bg-gray-300"></div>
            </Indicator>
            <Indicator count={9} position="top-center">
              <div className="h-20 w-20 rounded-full  bg-gray-300"></div>
            </Indicator>
            <Indicator
              style={{ right: 15, top: 5 }}
              count={9}
              position="top-right"
            >
              <div className="h-20 w-20 rounded-full  bg-gray-300"></div>
            </Indicator>
          </div>
          <div className="flex flex-wrap gap-5">
            <Indicator
              style={{ left: 15, bottom: 5 }}
              count={9}
              position="bottom-left"
            >
              <div className="h-20 w-20 rounded-full  bg-gray-300"></div>
            </Indicator>
            <Indicator count={9} position="bottom-center">
              <div className="h-20 w-20 rounded-full  bg-gray-300"></div>
            </Indicator>
            <Indicator
              style={{ right: 15, bottom: 5 }}
              count={9}
              position="bottom-right"
            >
              <div className="h-20 w-20 rounded-full  bg-gray-300"></div>
            </Indicator>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
