import React from 'react'
import { useRouter } from 'next/router'
import { useRequireAuth } from '@/common/auth'
import { createSchema } from '@/features/users/schema'
import { createUser, ErrorResponse } from '@/services/user'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Button } from '@/components/button'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@/components/form-control'
import { Input, InputPassword } from '@/components/input'
import toast from '@/components/toast'

type FormData = yup.InferType<typeof createSchema>

export function FormCreateUser() {
  useRequireAuth()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {},
    resolver: yupResolver(createSchema),
  })

  const router = useRouter()

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      toast.success({ description: 'User berhasil dibuat' })
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
      password: data.password,
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
        <FormLabel>Nama</FormLabel>
        <Input
          placeholder="Nama"
          error={Boolean(errors.name?.message)}
          {...register('name')}
          name="name"
        />
        {errors.name?.message && (
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Email"
          autoComplete="new-password"
          aria-autocomplete="none"
          error={Boolean(errors.email?.message)}
          {...register('email')}
        />
        {errors.email?.message && (
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl>
        <FormLabel>Password</FormLabel>
        <InputPassword
          placeholder="Password"
          autoComplete="new-password"
          aria-autocomplete="none"
          error={Boolean(errors.password?.message)}
          {...register('password')}
        />
        {errors.password?.message && (
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl>
        <FormLabel>Konfirmasi Password</FormLabel>
        <InputPassword
          placeholder="Konfirmasi password"
          autoComplete="new-password"
          aria-autocomplete="none"
          error={Boolean(errors.password_confirmation?.message)}
          {...register('password_confirmation')}
        />
        {errors.password_confirmation?.message && (
          <FormErrorMessage>
            {errors.password_confirmation?.message}
          </FormErrorMessage>
        )}
      </FormControl>

      <div className="col-span-2 mt-3 flex justify-end">
        <div className="flex gap-x-3">
          <Button
            variant="default"
            type="button"
            fullWidth
            onClick={() => {
              router.push('/users')
            }}
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
