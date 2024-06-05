import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth, useProfile } from '@/common/auth'
import { logout } from '@/services/auth'
import {
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
import { Avatar } from '@/components/avatar'
import { Button } from '@/components/button'
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu'
import toast from '@/components/toast'

function ProfileButton({ name }: { name: string }) {
  return (
    <div className="flex w-full items-center  focus:outline-none">
      <Avatar size="xs" name={name}></Avatar>
      <div className="flex flex-1 flex-col pl-3 text-sm ">
        <div className="w-36 truncate text-ellipsis text-left font-semibold text-gray-700">
          {name}
        </div>
        <div className="text-left text-gray-600">Admin</div>
      </div>
      <div className="50 pl-3">
        <ChevronDownIcon className="h-4 w-4 text-gray-700"></ChevronDownIcon>
      </div>
    </div>
  )
}

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
      router.push('/login')
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
            <button>
              <ProfileButton name={profile.data.name}></ProfileButton>
            </button>
          ) : (
            <div className="h-8 w-40 animate-pulse rounded bg-gray-200"></div>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            {profile.status === 'success' ? (
              <div className="space-y-0.5">
                <div className="text-sm">Signed in as</div>
                <div className="text-sm font-medium">{profile.data.email}</div>
              </div>
            ) : (
              <div className="h-8 w-40 animate-pulse rounded bg-gray-200"></div>
            )}
          </DropdownMenuItem>
          <DropdownMenuSeparator></DropdownMenuSeparator>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <div className="w-32">Account</div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <div className="w-32">Settings</div>
          </DropdownMenuItem>
          <DropdownMenuItem color="danger" onClick={() => setOpen(true)}>
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

  return (
    <Link
      href={clickable ? href : '#'}
      className={cx('relative flex h-10 !w-full items-center  gap-3  px-7', {
        'bg-primary-100 font-medium text-primary-700': isActive,
        'text-gray-800': !isActive,
      })}
    >
      {isActive ? (
        <div className="absolute left-0 top-0 h-full w-0.5 bg-primary-500"></div>
      ) : null}

      {icon}
      <div className="text-sm">{title}</div>
    </Link>
  )
}

function AppLayout({ children }: { children: React.ReactNode }) {
  const profile = useProfile()

  return (
    <div className="relative z-0 h-full">
      <div className="relative z-10 h-full pl-[250px]">
        <nav className="fixed left-0  min-h-full w-[250px]   bg-gray-50">
          <div className="flex h-16 items-center px-5">
            <ProfileDropdown />
          </div>
          {profile.status === 'success' ? (
            <React.Fragment>
              <Menu
                href="/"
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
            <div className="space-y-1.5 px-5">
              <div className="h-10 animate-pulse rounded bg-gray-200"></div>
              <div className="h-10 animate-pulse rounded bg-gray-200"></div>
              <div className="h-10 animate-pulse rounded bg-gray-200"></div>
              <div className="h-10 animate-pulse rounded bg-gray-200"></div>
            </div>
          )}
        </nav>

        <main className="min-h-full border-l border-gray-300">{children}</main>
      </div>
    </div>
  )
}

export default AppLayout
