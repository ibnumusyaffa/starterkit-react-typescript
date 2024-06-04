import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { resetPassword, resetPasswordErr } from '@/services/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
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
import { useRedirectIfAuthenticated } from '@/store/auth'

const schema = z
  .object({
    new_password: z.string().min(1, { message: 'Password wajib diisi' }),
    confirmation_password: z
      .string()
      .min(1, { message: 'Konfirmasi Password wajib diisi' }),
  })
  .partial()
  .superRefine(({ confirmation_password, new_password }, ctx) => {
    if (confirmation_password !== new_password) {
      ctx.addIssue({
        code: 'custom',
        path: ['confirmation_password'],
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

  useEffect(() => {
    if (router.isReady) {
      const isAllowed = localStorage.getItem('email_verification')
      if (isAllowed !== router.query.email) {
        router.push('/')
      }
    }
  }, [router.isReady])

  const { mutate, status } = useMutation({
    mutationFn: resetPassword,
    onSuccess: (response) => {
      toast.success(response.message)
      localStorage.clear()
      router.push('/')
    },
    onError: (error: AxiosError) => {
      const response = error.response?.data as resetPasswordErr
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
                token: localStorage.getItem(
                  router.query.email as string
                ) as string,
              })
            })}
          >
            <FormControl>
              <FormLabel>Password Baru</FormLabel>
              <InputPassword
                placeholder="Masukkan Password Baru"
                defaultValue=""
                error={Boolean(errors.new_password?.message)}
                {...register('new_password')}
              ></InputPassword>
              {errors.new_password?.message && (
                <FormErrorMessage>
                  {errors.new_password?.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Konfirmasi Password Baru</FormLabel>
              <InputPassword
                placeholder="Masukkan Konfirmasi Password Baru"
                defaultValue=""
                error={Boolean(errors.confirmation_password?.message)}
                {...register('confirmation_password')}
              ></InputPassword>
              {errors.confirmation_password?.message && (
                <FormErrorMessage>
                  {errors.confirmation_password?.message}
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
