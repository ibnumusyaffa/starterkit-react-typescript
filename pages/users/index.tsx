import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRequireAuth } from '@/common/auth'
import { deleteUser, getUsers } from '@/services/user'
import { PlusIcon } from '@heroicons/react/24/outline'
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import {
  parseAsInteger,
  parseAsString,
  useQueryState,
  useQueryStates,
} from 'next-usequerystate'

import { useDebounce } from '@/hooks/useDebounce'
import AppLayout from '@/layouts/AppLayout'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
} from '@/components/alert-dialog'
import { Button } from '@/components/button'
import { EmptyState } from '@/components/empty-state'
import { FormControl } from '@/components/form-control'
import { InputSearch } from '@/components/input'
import { Pagination } from '@/components/pagination'
import { Table, TableEmpty, Tbody, Td, Th, Thead, Tr } from '@/components/table'
import toast from '@/components/toast'

function Page() {
  useRequireAuth()
  const router = useRouter()

  const [filter, setFilter] = useQueryStates(
    {
      page: parseAsInteger.withDefault(1),
      limit: parseAsInteger.withDefault(10),
    },
    {
      history: 'push',
    }
  )

  const [keyword, setKeyword] = useQueryState(
    'keyword',
    parseAsString.withDefault('')
  )
  const [skipResetPage, setSkipResetPage] = useState(true)
  const debouncedKeyword = useDebounce(keyword, 300)

  useEffect(() => {
    // skip the reset page on first load only
    if (skipResetPage) {
      setSkipResetPage(false)
      return
    }
    setFilter({ page: 1 })
  }, [debouncedKeyword])

  const { data, status, isFetching } = useQuery({
    queryKey: ['users', debouncedKeyword, filter.page, filter.limit],
    queryFn: () =>
      getUsers({
        page: filter.page,
        limit: filter.limit,
        keyword: debouncedKeyword,
      }),
    placeholderData: keepPreviousData,
    enabled: router.isReady,
  })

  const [showAlert, setShowAlert] = useState(false)
  const [deleteId, setDeleteId] = useState('')
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      toast.success({ description: 'User berhasil dihapus.' })
      setFilter({ page: 1 })
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
    onError: () => {
      toast.danger({ description: 'User gagal dihapus.' })
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
    onSettled: () => {
      setShowAlert(false)
      setFilter({ page: 1 })
    },
  })

  return (
    <AppLayout>
      <AlertDialog
        open={showAlert}
        onOpenChange={(value) => setShowAlert(value)}
      >
        <AlertDialogCloseButton></AlertDialogCloseButton>
        <AlertDialogContent
          title="Hapus User"
          description="Apakah kamu yakin ingin menghapus user ini?"
        ></AlertDialogContent>
        <AlertDialogFooter>
          <AlertDialogCancel>
            <Button variant="default">Tidak</Button>
          </AlertDialogCancel>
          <Button
            loading={mutation.status === 'pending'}
            disabled={mutation.status === 'pending'}
            onClick={() => mutation.mutate(deleteId)}
            color="danger"
            variant="solid"
          >
            Ya, Hapus
          </Button>
        </AlertDialogFooter>
      </AlertDialog>
      <div className="px-10 py-5 ">
        <div className="flex h-16 items-center justify-between ">
          <div className="text-xl font-bold text-gray-800">List Users</div>
          <div>
            <Button
              asChild
              leftIcon={<PlusIcon className="h-4 w-4"></PlusIcon>}
            >
              <Link href="/users/create">Buat User</Link>
            </Button>
          </div>
        </div>
        <div className="flex h-20 items-center">
          <form className="grid w-full grid-cols-[2fr_1fr_1fr_1fr] gap-x-5">
            <FormControl>
              <InputSearch
                placeholder="Tulis nama, email"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </FormControl>
          </form>
        </div>
        <div className="">
          <Table
            withBorder
            empty={data?.data?.length === 0}
            loading={status === 'pending' || isFetching}
          >
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Updated at</Th>
                <Th>Created at</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {status === 'success' ? (
                <React.Fragment>
                  {data?.data?.map((item, index) => {
                    return (
                      <Tr key={index}>
                        <Td>{item.name}</Td>
                        <Td>{item.email}</Td>
                        <Td>{item.updated_at}</Td>
                        <Td>{item.created_at} </Td>

                        <Td>
                          <div className="flex space-x-1">
                            <Button asChild variant="subtle" size="sm">
                              <Link
                                href={`/users/edit/${item.id}`}
                                
                              >
                                Edit
                              </Link>
                            </Button>
                            <Button
                              onClick={() => {
                                setDeleteId(item.id)
                                setShowAlert(true)
                              }}
                              variant="subtle"
                              size="sm"
                            >
                              <span className="text-gray-600">
                                Hapus
                              </span>
                            </Button>
                          </div>
                        </Td>
                      </Tr>
                    )
                  })}
                </React.Fragment>
              ) : null}
            </Tbody>
            <TableEmpty>
              <EmptyState
                withIcon
                title="Pencarian Tidak Ditemukan"
              ></EmptyState>
            </TableEmpty>
          </Table>

          <div className=" flex items-center justify-between h-20">
            <div className="flex items-center space-x-3 text-sm text-gray-700"></div>
            <Pagination
              currentPage={filter.page}
              totalPages={data?.meta.totalPages ?? 0}
              onPageChange={(page) => {
                setFilter({ page: page })
              }}
            ></Pagination>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Page
