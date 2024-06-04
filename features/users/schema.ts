import { z } from 'zod'

export const editSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: 'Email wajib diisi' })
      .email('Format harus email'),

    name: z.string().min(1, { message: 'Nama wajib diisi' }),
  })
  .partial()

export const createSchema = z
  .object({
    name: z.string().min(1, { message: 'Nama Sesuai KTP wajib diisi' }),
    email: z
      .string()
      .min(1, { message: 'Email wajib diisi' })
      .email('Format harus email'),

    password: z.string().min(1, { message: 'Password wajib diisi' }),
    password_confirmation: z
      .string()
      .min(1, { message: 'Konfirmasi password wajib diisi' }),
  })
  .partial()
  .superRefine(({ password_confirmation, password }, ctx) => {
    if (password_confirmation !== password) {
      ctx.addIssue({
        code: 'custom',
        path: ['password_confirmation'],
        message: 'The passwords did not match',
      })
    }
  })
