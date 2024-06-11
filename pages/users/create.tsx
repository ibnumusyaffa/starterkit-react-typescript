import React from 'react'
import { useRequireAuth } from '@/common/auth'
import { FormCreateUser } from '@/features/users/FormCreateUser'

import AppLayout from '@/layouts/AppLayout'

function Page() {
  useRequireAuth()

  return (
    <AppLayout>
      <div className="px-10 py-5">
        <div className="flex h-16 items-center justify-between ">
          <div className="text-xl font-bold text-gray-800">Create User</div>
        </div>
        <div className="mt-5">
          <FormCreateUser></FormCreateUser>
        </div>
      </div>
    </AppLayout>
  )
}

export default Page
