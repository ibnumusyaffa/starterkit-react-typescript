import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEditUser } from '@/features/users/FormEditUser'
import { getUserById } from '@/services/user'
import { ChevronLeftIcon, PencilIcon } from '@heroicons/react/24/outline'
import { useQuery } from '@tanstack/react-query'

import { usePermission } from '@/hooks/usePermission'
import AppLayout from '@/layouts/AppLayout'
import { Button } from '@/components/button'
import { Spinner } from '@/components/spinner'
import { useRequireAuth } from '@/store/auth'

function Page() {
  useRequireAuth()
  usePermission('user-management')
  const router = useRouter()

  const { data, status } = useQuery({
    queryKey: ['users', router.query.id],
    queryFn: () => getUserById(router.query.id as string),
    enabled: router.isReady,
  })

  return (
    <AppLayout>
      <div className="flex h-16 items-center justify-between border-b border-gray-300 px-10">
        <div className="flex items-center space-x-3 text-lg font-semibold">
          <button onClick={() => router.push('/users')}>
            <ChevronLeftIcon className="h-5 w-5"></ChevronLeftIcon>
          </button>

          <div className="text-lg font-bold text-gray-800">Detail User</div>
        </div>
        <div>
          <Button
            asChild
            size="sm"
            leftIcon={<PencilIcon className="h-4 w-4"></PencilIcon>}
            variant="subtle"
          >
            <Link href={`/users/edit/${router.query.id}`}>
              <span className="font-bold">Edit User</span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="p-10">
        {status === 'success' ? (
          <FormEditUser disabled data={data}></FormEditUser>
        ) : null}
        {status === 'pending' ? (
          <div className="mt-10 flex h-full flex-col items-center justify-center space-y-3">
            <Spinner className="h-7 w-7"></Spinner>
            <span className="text-gray-700">Loading...</span>
          </div>
        ) : null}
      </div>
    </AppLayout>
  )
}

export default Page
