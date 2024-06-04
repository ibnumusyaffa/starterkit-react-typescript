import React from 'react'
import { useRequireAuth } from '@/common/auth'

import AppLayout from '@/layouts/AppLayout'

export default function Page() {
  useRequireAuth()

  return (
    <AppLayout>
      <div className="p-10">Overview</div>
    </AppLayout>
  )
}
