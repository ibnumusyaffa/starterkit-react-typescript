import React from 'react'
import { useRouter } from 'next/router'
import { resetPassword, resetPasswordErr } from '@/services/auth'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import AuthLayout from '@/layouts/AuthLayout'
import { Button } from '@/components/button'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@/components/form-control'
import { InputPassword } from '@/components/input'
import Logo from '@/components/Logo'
import toast from '@/components/toast'

const schema = yup.object({
  password: yup
    .string()
    .required('Password wajib diisi')
    .min(6, 'Password minimal karakter adalah 6'),
  password_confirmation: yup
    .string()
    .required('Konfirmasi password wajib diisi')
    .test(
      'passwords-match',
      'Konfirmasi password harus sama dengan password',
      function (value, context) {
        return value === context.parent.password
      }
    ),
})

type FormData = yup.InferType<typeof schema>

export default function Page() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const router = useRouter()

  const { mutate, status } = useMutation({
    mutationFn: resetPassword,
    onSuccess: (response) => {
      toast.success({
        position: 'top-center',
        description: response.message,
      })
      localStorage.clear()
      router.push('/auth/login')
    },
    onError: (error: AxiosError) => {
      const response = error.response?.data as resetPasswordErr

      toast.danger({
        position: 'top-center',
        description: response.message,
      })
      if (response.errors.length > 0) {
        for (const item of response.errors) {
          setError(item.field as keyof FormData, {
            message: item.message,
          })
        }
      }
    },
  })

  return (
    <AuthLayout>
      <div className="flex justify-center">
        <div className="mt-12 w-[360px] space-y-7 ">
          <div className="flex items-center justify-center">
            <Logo className="h-12" />
          </div>

          <div className="text-center text-3xl font-semibold">
            Atur Password Baru
          </div>

          <form
            className="space-y-5"
            onSubmit={handleSubmit((value) => {
              mutate({
                ...value,
                email: router.query.email as string,
                token: router.query.token as string,
              })
            })}
          >
            <FormControl>
              <FormLabel>Password Baru</FormLabel>
              <InputPassword
                placeholder="Masukkan Password Baru"
                defaultValue=""
                error={Boolean(errors.password?.message)}
                {...register('password')}
              ></InputPassword>
              {errors.password?.message && (
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Konfirmasi Password Baru</FormLabel>
              <InputPassword
                placeholder="Masukkan Konfirmasi Password Baru"
                defaultValue=""
                error={Boolean(errors.password_confirmation?.message)}
                {...register('password_confirmation')}
              ></InputPassword>
              {errors.password_confirmation?.message && (
                <FormErrorMessage>
                  {errors.password_confirmation?.message}
                </FormErrorMessage>
              )}
            </FormControl>

            <div className="flex justify-end text-sm text-gray-700">
              Gunakan kombinasi huruf, angka, simbol, termasuk huruf kapital,
              dengan panjang minimal 8 karakter untuk kata sandi yang kuat.
            </div>
            <div>
              <Button loading={status === 'pending'} type="submit" fullWidth>
                Simpan
              </Button>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  )
}
