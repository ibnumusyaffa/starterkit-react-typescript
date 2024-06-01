import * as React from 'react'

import { TabsList, TabsRoot, TabsTrigger } from '@/components/tabs-link'

export default function Index() {
  return (
    <div className="space-y-10 p-10">
      <TabsRoot variant="default">
        <TabsList>
          <TabsTrigger active href="/">General</TabsTrigger>
          <TabsTrigger href="/">Account</TabsTrigger>
          <TabsTrigger href="/">Setting</TabsTrigger>
        </TabsList>
      </TabsRoot>
    </div>
  )
}
