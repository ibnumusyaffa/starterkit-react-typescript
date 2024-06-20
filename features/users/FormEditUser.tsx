import React from 'react'
import { useRouter } from 'next/router'
import { editSchema } from '@/features/users/schema'
import { editUser, ErrorResponse, UpdateReqBody, User } from '@/services/user'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Button } from '@/components/button'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@/components/form-control'
import { Input } from '@/components/input'
import toast from '@/components/toast'

type FormData = yup.InferType<typeof editSchema>
export function FormEditUser({
  data,
  disabled,
}: {
  data: User
  disabled?: boolean
}) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: data.email,
      name: data.name,
    },
    resolver: yupResolver(editSchema),
  })

  const router = useRouter()

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (value: UpdateReqBody) =>
      editUser(router.query.id as string, value),
    onSuccess: () => {
      toast.success({ description: 'User berhasil diubah' })
      queryClient.invalidateQueries({ queryKey: ['users'] })
      router.push('/users')
    },
    onError: (error: AxiosError) => {
      const response = error.response?.data as ErrorResponse
      toast.danger({ description: response.message })
      if (response.errors.length > 0) {
        for (const item of response.errors) {
          setError(item.field as keyof FormData, {
            message: item.message,
          })
        }
      }
    },
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    mutation.mutate({
      name: data.name,
      email: data.email,
    })
  }

  return (
    <form
      className="grid grid-cols-2 gap-x-5 gap-y-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Email"
          error={Boolean(errors.email?.message)}
          disabled
          {...register('email')}
        />
        {errors.email?.message && (
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl>
        <FormLabel>Nama</FormLabel>
        <Input
          placeholder="Nama"
          error={Boolean(errors.name?.message)}
          disabled={disabled}
          {...register('name')}
          name="name"
        />
        {errors.name?.message && (
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        )}
      </FormControl>

      <div className="col-span-2 mt-3 flex justify-end">
        <div className="flex gap-x-3">
          <Button
            variant="default"
            onClick={() => {
              router.push('/users')
            }}
            type="button"
            fullWidth
          >
            <span className="px-8">Batal</span>
          </Button>
          <Button
            loading={mutation.status === 'pending'}
            type="submit"
            fullWidth
          >
            <span className="px-8">Simpan</span>
          </Button>
        </div>
      </div>
    </form>
  )
}
