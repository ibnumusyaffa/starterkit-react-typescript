import { Button } from '@/components/button'
import * as React from 'react'

export default function Home() {
  return (
    <div className="p-5">
      <Button type="button">button</Button>
      <div>
        <Button asChild>
          <a href="https://google.com">Link</a>
        </Button>
      </div>
    </div>
  )
}
