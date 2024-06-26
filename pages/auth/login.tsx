import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '@/common/auth'
import { login, LoginRespErr } from '@/services/auth'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

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

const schema = yup.object({
  email: yup.string().email('Email tidak valid').required('Email wajib diisi'),
  password: yup.string().required('Password wajib diisi'),
})

type FormData = yup.InferType<typeof schema>

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const [errorMessage, setErrorMessage] = useState('')
  const { setAuth } = useAuth()
  const router = useRouter()

  const { mutate, status } = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      setAuth(response.token)
      router.push('/')
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
              <Link href="/auth/forgot-password">
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
