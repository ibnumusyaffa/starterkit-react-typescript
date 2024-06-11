import React from 'react'
import { useRouter } from 'next/router'
import { useRequireAuth } from '@/common/auth'
import { FormEditUser } from '@/features/users/FormEditUser'
import { getUserById } from '@/services/user'
import { useQuery } from '@tanstack/react-query'

import AppLayout from '@/layouts/AppLayout'
import { Spinner } from '@/components/spinner'

function Page() {
  useRequireAuth()

  const router = useRouter()

  const { data, status } = useQuery({
    queryKey: ['users', router.query.id],
    queryFn: () => getUserById(router.query.id as string),
    enabled: router.isReady,
  })

  return (
    <AppLayout>
      <div className="px-10 py-5">
        <div className="flex h-16 items-center justify-between ">
          <div className="text-xl font-bold text-gray-800">Edit User</div>
        </div>
        <div className="mt-5">
          {status === 'success' ? (
            <FormEditUser data={data}></FormEditUser>
          ) : null}
          {status === 'pending' ? (
            <div className="mt-10 flex h-full flex-col items-center justify-center space-y-3">
              <Spinner className="h-7 w-7"></Spinner>
              <span className="text-gray-700">Loading...</span>
            </div>
          ) : null}
        </div>
      </div>
    </AppLayout>
  )
}

export default Page
