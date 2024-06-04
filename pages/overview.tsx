import React from 'react'

import { usePermission } from '@/hooks/usePermission'
import AppLayout from '@/layouts/AppLayout'
import { useRequireAuth } from '@/store/auth'

export default function Page() {
  useRequireAuth()
  usePermission('overview')

  return (
    <AppLayout>
      <div className="p-10">Overview</div>
    </AppLayout>
  )
}
