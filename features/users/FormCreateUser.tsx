import React from 'react'
import { useRouter } from 'next/router'
import { roles } from '@/constants/role'
import { createSchema } from '@/features/users/schema'
import { loadProvince } from '@/services/province'
import { loadRegency } from '@/services/regency'
import { createUser, ErrorResponse } from '@/services/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

import { Button } from '@/components/button'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@/components/form-control'
import { Input, InputPassword } from '@/components/input'
import { NativeSelect } from '@/components/native-select'
import { Radio } from '@/components/radio'
import { ReactSelectAsync } from '@/components/react-select'
import { useRequireAuth } from '@/store/auth'

type FormData = z.infer<typeof createSchema>

export function FormCreateUser() {
  useRequireAuth()
  const {
    register,
    control,
    handleSubmit,
    watch,
    setError,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      province_id: null,
      regency_id: null,
      gender: '1',
    },
    resolver: zodResolver(createSchema),
  })

  const router = useRouter()

  const provinceId = watch('province_id')
  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      toast.success('User berhasil dibuat')
      router.push('/users')
    },
    onError: (error: AxiosError) => {
      const response = error.response?.data as ErrorResponse
      toast.error(response.message)
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
      province_id: data.province_id?.value,
      regency_id: data.regency_id?.value,
      role_id: Number(data.role_id),
      profile: {
        phone: data.phone,
        gender: Number(data.gender),
      },
    })
  }

  return (
    <form
      className="grid grid-cols-2 gap-x-5 gap-y-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="col-span-2 font-semibold">Informasi Akun</div>
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
        <FormLabel>No.HP/Telp</FormLabel>
        <Input
          placeholder="No.HP/Telp"
          error={Boolean(errors.phone?.message)}
          {...register('phone')}
        />
        {errors.phone?.message && (
          <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
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
      <div className="col-span-2">
        <FormControl>
          <FormLabel>Role</FormLabel>
          <NativeSelect
            error={Boolean(errors.role_id?.message)}
            {...register('role_id')}
          >
            <option value="">Pilih Role</option>
            {roles.map((item) => {
              return (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              )
            })}
          </NativeSelect>
          {errors.role_id?.message && (
            <FormErrorMessage>{errors.role_id?.message}</FormErrorMessage>
          )}
        </FormControl>
      </div>
      <div className="col-span-2 font-semibold">Informasi Pribadi</div>
      <FormControl>
        <FormLabel>Nama Sesuai KTP</FormLabel>
        <Input
          placeholder="Nama Sesuai KTP"
          error={Boolean(errors.name?.message)}
          {...register('name')}
          name="name"
        />
        {errors.name?.message && (
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl>
        <FormLabel>Jenis Kelamin</FormLabel>
        <div className="flex space-x-5">
          <Radio {...register('gender')} value="1" label="Pria"></Radio>
          <Radio {...register('gender')} value="2" label="Wanita"></Radio>
        </div>
      </FormControl>

      <div className="col-span-2 font-semibold">Lokasi Penugasan</div>
      <FormControl>
        <FormLabel>Provinsi</FormLabel>
        <Controller
          name="province_id"
          control={control}
          render={({ field }) => (
            <ReactSelectAsync
              placeholder="Provinsi"
              value={field.value}
              onChange={(e) => {
                field.onChange(e)
                setValue('regency_id', null)
              }}
              isClearable
              menuPlacement="auto"
              debounceTimeout={200}
              error={Boolean(errors.province_id?.message)}
              loadOptions={loadProvince}
            />
          )}
        />

        {errors.province_id?.message && (
          <FormErrorMessage>{errors.province_id?.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl>
        <FormLabel>Kab./Kota</FormLabel>

        <Controller
          name="regency_id"
          control={control}
          render={({ field }) => (
            <ReactSelectAsync
              placeholder="Kab./Kota"
              key={provinceId?.value}
              disabled={provinceId?.value === undefined}
              value={field.value}
              onChange={field.onChange}
              isClearable
              menuPlacement="auto"
              debounceTimeout={200}
              error={Boolean(errors.regency_id?.message)}
              loadOptions={loadRegency}
              additional={{
                province_id: provinceId?.value,
              }}
            />
          )}
        />

        {errors.regency_id?.message && (
          <FormErrorMessage>{errors.regency_id?.message}</FormErrorMessage>
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
