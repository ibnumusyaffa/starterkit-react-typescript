import React from 'react'
import { useRouter } from 'next/router'
import { forgotPassword } from '@/services/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import AuthLayout from '@/layouts/AuthLayout'
import { Button } from '@/components/button'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@/components/form-control'
import { Input } from '@/components/input'
import Logo from '@/components/Logo'
import toast from '@/components/toast'
import { useRedirectIfAuthenticated } from '@/common/auth'

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email wajib diisi' })
    .email('Format harus email'),
})

type FormData = z.infer<typeof schema>

export default function Page() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  useRedirectIfAuthenticated()

  const { mutate, status } = useMutation({
    mutationFn: forgotPassword,
    onSuccess: (response) => {
      toast.success({
        position:'top-center',
        description: response.message,
      })
      router.push('/')
    },
  })

  return (
    <AuthLayout>
      <div className="flex justify-center">
        <div className="mt-14  w-[360px] space-y-5">
          <div className="flex items-center justify-center">
            <Logo className="h-12" />
          </div>

          <div className="text-center text-3xl font-semibold">
            Reset password
          </div>

          <form
            className="space-y-5"
            onSubmit={handleSubmit((value) => mutate(value))}
          >
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

            <div className="flex justify-end  text-gray-600">
              Link perubahan kata sandi akan dikirim ke email anda
            </div>
            <div>
              <Button loading={status === 'pending'} type="submit" fullWidth>
                Proses
              </Button>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  )
}
