import React from 'react'

import { H1, H2, H3, H4, H5, H6 } from '@/components/heading'

function heading() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <div className="text-4xl font-semibold text-gray-700">Heading</div>
        <div className="text-gray-700">-</div>
      </div>
      <div className="space-y-5">
        <H1>The quick brown fox jumps over the lazy dog</H1>
        <H2>The quick brown fox jumps over the lazy dog2</H2>
        <H3>The quick brown fox jumps over the lazy dog</H3>
        <H4>The quick brown fox jumps over the lazy dog</H4>
        <H5>The quick brown fox jumps over the lazy dog</H5>
        <H6>The quick brown fox jumps over the lazy dog</H6>
      </div>
    </div>
  )
}

export default heading
