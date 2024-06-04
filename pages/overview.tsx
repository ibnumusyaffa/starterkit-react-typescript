import React from 'react'

import AppLayout from '@/layouts/AppLayout'
import { useRequireAuth } from '@/common/auth'

export default function Page() {
  useRequireAuth()

  return (
    <AppLayout>
      <div className="p-10">Overview</div>
    </AppLayout>
  )
}
