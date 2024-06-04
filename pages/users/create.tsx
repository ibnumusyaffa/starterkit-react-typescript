import React from 'react'
import { FormCreateUser } from '@/features/users/FormCreateUser'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

import AppLayout from '@/layouts/AppLayout'
import { useRequireAuth } from '@/store/auth'
import { useRouter } from 'next/router'
import { usePermission } from '@/hooks/usePermission'

function Page() {
  useRequireAuth()
  usePermission('user-management')
  const router = useRouter()
  return (
    <AppLayout>
      <div className="flex h-16 items-center justify-between border-b border-gray-300 px-10">
        <div className="flex items-center space-x-3 text-lg font-semibold">
          <button onClick={() => router.push('/users')}>
            <ChevronLeftIcon className="h-5 w-5"></ChevronLeftIcon>
          </button>

          <div className="text-lg font-bold text-gray-800">Buat User</div>
        </div>
        <div></div>
      </div>
      <div className="p-10">
        <FormCreateUser></FormCreateUser>
      </div>
    </AppLayout>
  )
}

export default Page
