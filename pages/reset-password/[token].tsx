import React from 'react'
import { useRouter } from 'next/router'
import { resetPassword, resetPasswordErr } from '@/services/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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
import { useRedirectIfAuthenticated } from '@/common/auth'

const schema = z
  .object({
    password: z.string().min(1, { message: 'Password wajib diisi' }),
    password_confirmation: z
      .string()
      .min(1, { message: 'Konfirmasi Password wajib diisi' }),
  })
  .partial()
  .superRefine(({ password_confirmation, password }, ctx) => {
    if (password_confirmation !== password) {
      ctx.addIssue({
        code: 'custom',
        path: ['password_confirmation'],
        message: 'Konfirmasi password tidak sama',
      })
    }
  })

type FormData = z.infer<typeof schema>

export default function Page() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const router = useRouter()
  useRedirectIfAuthenticated()

  const { mutate, status } = useMutation({
    mutationFn: resetPassword,
    onSuccess: (response) => {
      toast.success({
        position: 'top-center',
        description: response.message,
      })
      localStorage.clear()
      router.push('/')
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
              Gunakan kombinasi huruf, angka, simbol, dan memuat huruf kapital
              untuk kombinasi yang kuat. Serta panjang kata sandi setidaknya 8
              karakter.
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
