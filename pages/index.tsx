import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { login, LoginRespErr } from '@/services/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import AuthLayout from '@/layouts/AuthLayout'
import { Alert } from '@/components/alert'
import { Button } from '@/components/button'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@/components/form-control'
import { Input, InputPassword } from '@/components/input'
import Logo from '@/components/Logo'
import { useAuth, useRedirectIfAuthenticated } from '@/common/auth'

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email wajib diisi' })
    .email('Email tidak valid'),
  password: z.string().min(1, { message: 'Password wajib diisi' }),
})

type FormData = z.infer<typeof schema>

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const [errorMessage, setErrorMessage] = useState('')
  const { setAuth } = useAuth()
  const router = useRouter()

  useRedirectIfAuthenticated()

  const { mutate, status } = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      setAuth(response.token)
      router.push('/overview')
    },
    onError: (error: AxiosError) => {
      const response = error.response?.data as LoginRespErr
      setErrorMessage(response.message)
    },
  })

  return (
    <AuthLayout>
      <div className="flex justify-center">
        <div className="mt-14 w-[360px] space-y-5">
          <div className="flex items-center justify-center">
            <Logo className="h-12" />
          </div>

          <div className="text-center text-3xl font-semibold">Welcome Back</div>

          <form
            className="space-y-5"
            onSubmit={handleSubmit((value) => mutate(value))}
          >
            {errorMessage ? <Alert>{errorMessage}</Alert> : null}
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Masukkan email anda"
                defaultValue=""
                error={Boolean(errors.email?.message)}
                {...register('email')}
              ></Input>
              {errors.email?.message && (
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <InputPassword
                placeholder="Masukkan password anda"
                defaultValue=""
                error={Boolean(errors.password?.message)}
                {...register('password')}
              ></InputPassword>

              {errors.password?.message && (
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              )}
            </FormControl>
            <div className="flex justify-end">
              <Link href="/forgot-password">
                <div className="text-sm font-bold text-primary-800">
                  Forgot Password
                </div>
              </Link>
            </div>
            <div>
              <Button loading={status === 'pending'} type="submit" fullWidth>
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  )
}
