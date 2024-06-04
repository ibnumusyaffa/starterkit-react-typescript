import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth, useProfile } from '@/common/auth'
import { logout } from '@/services/auth'
import {
  ArrowLeftOnRectangleIcon,
  ChartBarIcon,
  ChevronDownIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import cx from 'clsx'

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
} from '@/components/alert-dialog'
import { Button } from '@/components/button'
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu'
import Logo from '@/components/Logo'
import toast from '@/components/toast'

function ProfileDropdown() {
  const { removeAuth } = useAuth()
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const queryClient = useQueryClient()

  const { mutate, status } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      removeAuth()
      queryClient.clear()
      router.push('/')
    },
    onError: () => {
      toast.danger({ description: 'Logout gagal' })
    },
  })

  const profile = useProfile()
  return (
    <React.Fragment>
      <AlertDialog open={open} onOpenChange={(value) => setOpen(value)}>
        <AlertDialogCloseButton></AlertDialogCloseButton>
        <AlertDialogContent
          title="Logout"
          description="Apakah anda yakin untuk keluar?"
        ></AlertDialogContent>
        <AlertDialogFooter>
          <AlertDialogCancel>
            <Button variant="default">Batal</Button>
          </AlertDialogCancel>
          <Button
            onClick={() => mutate()}
            loading={status === 'pending'}
            color="danger"
            variant="solid"
          >
            Ya, Keluar
          </Button>
        </AlertDialogFooter>
      </AlertDialog>
      <DropdownMenuRoot>
        <DropdownMenuTrigger>
          {profile.status === 'success' ? (
            <button className="flex items-center justify-between gap-3 focus:outline-none">
              <div className="flex flex-col justify-start text-sm">
                <div className="text-left font-semibold text-gray-700">
                  Admin
                </div>
                <div className="text-gray-600">{profile.data?.email}</div>
              </div>
              <div>
                <ChevronDownIcon className="h-5 w-5 text-gray-700"></ChevronDownIcon>
              </div>
            </button>
          ) : (
            <div className="h-8 w-40 animate-pulse rounded bg-gray-200"></div>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            color="danger"
            onClick={() => setOpen(true)}
            leftIcon={<ArrowLeftOnRectangleIcon className="h-5 w-5" />}
          >
            <div className="w-32">Logout</div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    </React.Fragment>
  )
}

function Menu({
  href,
  title,
  icon,
  clickable = true,
}: {
  href: string
  title: string
  icon: React.ReactNode
  clickable?: boolean
}) {
  const router = useRouter()
  const isActive =
    router.pathname === href || router.pathname.startsWith(`${href}/`)

  if (!clickable) {
    return (
      <div
        className={cx(
          'flex h-10 !w-full items-center gap-3 rounded px-3  font-medium ',
          {
            'bg-primary-500 text-white': isActive,
            'text-gray-800': !isActive,
          }
        )}
      >
        {icon}
        <div className="text-sm">{title}</div>
      </div>
    )
  }
  return (
    <Link
      href={clickable ? href : '#'}
      className={cx(
        'flex h-10 !w-full items-center gap-3 rounded px-3  font-medium ',
        {
          'bg-primary-500 text-white': isActive,
          'text-gray-800': !isActive,
        }
      )}
    >
      {icon}
      <div className="text-sm">{title}</div>
    </Link>
  )
}

function AppLayout({ children }: { children: React.ReactNode }) {
  const profile = useProfile()

  return (
    <div className="relative z-0 h-full">
      {/* TopBar */}
      <div
        className={cx(
          'fixed top-0 z-20 flex h-14 w-[calc(100%-var(--removed-body-scroll-bar-size,0%))] items-center  justify-between border-b border-gray-300  bg-white px-5'
        )}
      >
        <Logo className="h-8"></Logo>
        <ProfileDropdown />
      </div>
      <div className="relative z-10 pl-[250px] pt-14">
        {/* Sidebar */}
        <nav className="fixed left-0 top-14 min-h-full w-[250px] space-y-0.5 border-r border-gray-300 p-5">
          {profile.status === 'success' ? (
            <React.Fragment>
              <Menu
                href="/overview"
                title="Overview"
                icon={<ChartBarIcon className="h-5 w-5 " />}
              />

              <Menu
                href="/users"
                title="User Management"
                icon={<UsersIcon className="h-5 w-5 " />}
              />
            </React.Fragment>
          ) : (
            <div className="space-y-1.5">
              <div className="h-10 animate-pulse rounded bg-gray-200"></div>
              <div className="h-10 animate-pulse rounded bg-gray-200"></div>
              <div className="h-10 animate-pulse rounded bg-gray-200"></div>
              <div className="h-10 animate-pulse rounded bg-gray-200"></div>
            </div>
          )}
        </nav>

        <main className="">{children}</main>
      </div>
    </div>
  )
}

export default AppLayout
