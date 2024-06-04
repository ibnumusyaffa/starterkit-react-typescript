import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { roleObj, roles } from '@/constants/role'
import { loadProvince } from '@/services/province'
import { loadRegency } from '@/services/regency'
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
import toast from 'react-hot-toast'

import { useDebounce } from '@/hooks/useDebounce'
import { usePermission } from '@/hooks/usePermission'
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
import { FormControl, FormLabel } from '@/components/form-control'
import { InputSearch } from '@/components/input'
import { Pagination } from '@/components/pagination'
import {
  OptionType,
  ReactSelect,
  ReactSelectAsync,
} from '@/components/react-select'
import { Table, TableEmpty, Tbody, Td, Th, Thead, Tr } from '@/components/table'
import { useRequireAuth } from '@/store/auth'

function Page() {
  useRequireAuth()
  usePermission('user-management')
  const router = useRouter()

  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1))

  const limit = 10
  const [keyword, setKeyword] = useQueryState(
    'keyword',
    parseAsString.withDefault('')
  )

  const [skipResetPage, setSkipResetPage] = useState(true)
  const debouncedKeyword = useDebounce(keyword, 300)

  const [role, setRole] = useQueryStates({
    role_label: parseAsString,
    role_value: parseAsInteger,
  })

  const selectedRole = {
    label: role.role_label,
    value: role.role_value,
  }

  const [province, setProvince] = useQueryStates({
    province_label: parseAsString,
    province_value: parseAsInteger,
  })

  const selectedProvince = {
    label: province.province_label,
    value: province.province_value,
  }

  const [regency, setRegency] = useQueryStates({
    regency_label: parseAsString,
    regency_value: parseAsInteger,
  })

  const selectedRegency = {
    label: regency.regency_label,
    value: regency.regency_value,
  }

  useEffect(() => {
    if (skipResetPage) {
      setSkipResetPage(false)
      return
    }
    setPage(1)
  }, [debouncedKeyword])

  const { data, status, isFetching } = useQuery({
    queryKey: [
      'users',
      page,
      limit,
      debouncedKeyword,
      selectedRole.value,
      selectedProvince.value,
      selectedRegency.value,
    ],
    queryFn: () =>
      getUsers({
        page,
        pagesize: limit,
        keyword: debouncedKeyword,
        role_id: selectedRole.value,
        province_id: selectedProvince.value,
        regency_id: selectedRegency.value,
        status: 1,
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
      toast.success('User berhasil dihapus.')
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
    onError: () => {
      toast.error('User gagal dihapus.')
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
    onSettled: () => {
      setShowAlert(false)
      setPage(1)
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
      <div className="flex h-16 items-center justify-between border-b border-gray-300 px-10">
        <div className="text-lg font-bold text-gray-800">Data User</div>
        <div>
          <Button asChild leftIcon={<PlusIcon className="h-4 w-4"></PlusIcon>}>
            <Link href="/users/create">Buat User</Link>
          </Button>
        </div>
      </div>
      <div className="flex h-28   items-center border-b border-gray-300 px-10">
        <form className="grid w-full grid-cols-[2fr_1fr_1fr_1fr] gap-x-5">
          <FormControl>
            <FormLabel>Cari</FormLabel>
            <InputSearch
              placeholder="Tulis nama, email"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Role Pelapor</FormLabel>
            <ReactSelect
              isClearable
              placeholder="Pilih Role"
              onChange={(option: unknown) => {
                const newOption = option as OptionType | null
                const value = newOption
                  ? { role_value: newOption.value, role_label: newOption.label }
                  : { role_value: null, role_label: '' }

                setRole(value)
                setPage(1)
              }}
              value={
                router.isReady && selectedRole.value ? selectedRole : undefined
              }
              options={roles}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Provinsi</FormLabel>
            <ReactSelectAsync
              placeholder="Pilih Provinsi"
              isClearable
              menuPlacement="auto"
              debounceTimeout={200}
              loadOptions={loadProvince}
              onChange={(option: unknown) => {
                const newOption = option as OptionType | null
                const value = newOption
                  ? {
                      province_value: newOption.value,
                      province_label: newOption.label,
                    }
                  : { province_value: null, province_label: '' }

                setProvince(value)
                setRegency({ regency_value: null, regency_label: '' })
                setPage(1)
              }}
              value={
                router.isReady && selectedProvince.value
                  ? selectedProvince
                  : undefined
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Kab./Kota</FormLabel>
            <ReactSelectAsync
              placeholder="Pilih Kab./Kota"
              key={selectedProvince?.value}
              isClearable
              menuPlacement="auto"
              debounceTimeout={200}
              loadOptions={loadRegency}
              onChange={(option: unknown) => {
                const newOption = option as OptionType | null
                const value = newOption
                  ? {
                      regency_value: newOption.value,
                      regency_label: newOption.label,
                    }
                  : { regency_value: null, regency_label: '' }

                setRegency(value)
                setPage(1)
              }}
              value={
                router.isReady && selectedRegency.value
                  ? selectedRegency
                  : undefined
              }
              additional={{
                province_id: selectedProvince?.value ?? undefined,
              }}
            />
          </FormControl>
        </form>
      </div>
      <div className="px-10 py-10">
        <Table
          empty={data?.data?.length === 0}
          loading={status === 'pending' || isFetching}
        >
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>No.Hp</Th>
              <Th>Role</Th>
              <Th>Lokasi</Th>
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
                      <Td>{item.phone_number ? item.phone_number : '-'}</Td>
                      <Td>{roleObj[item.role_id]}</Td>
                      <Td>
                        {item.regency_name}
                        {item.regency_name ? ',' : null} {item.province_name}
                      </Td>
                      <Td>
                        <div className="flex space-x-1">
                          <Button asChild variant="subtle" size="sm">
                            <Link
                              href={`/users/detail/${item.uuid}`}
                              className="!font-bold text-gray-800"
                            >
                              Detail
                            </Link>
                          </Button>
                          <Button asChild variant="subtle" size="sm">
                            <Link
                              href={`/users/edit/${item.uuid}`}
                              className="!font-bold text-gray-800"
                            >
                              Edit
                            </Link>
                          </Button>
                          <Button
                            onClick={() => {
                              setDeleteId(item.uuid)
                              setShowAlert(true)
                            }}
                            variant="subtle"
                            size="sm"
                          >
                            <span className="font-bold text-gray-500">
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
            <EmptyState withIcon title="Pencarian Tidak Ditemukan"></EmptyState>
          </TableEmpty>
        </Table>

        <div className=" flex items-center justify-between px-5  py-5">
          <div className="flex items-center space-x-3 text-sm text-gray-700"></div>

          <Pagination
            currentPage={page}
            totalPages={data?.total_page ?? 0}
            onPageChange={(page) => {
              setPage(page)
            }}
          ></Pagination>
        </div>
      </div>
    </AppLayout>
  )
}

export default Page
