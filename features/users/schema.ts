import { z } from 'zod'

export const editSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: 'Email wajib diisi' })
      .email('Format harus email'),
    phone: z.string().min(1, { message: 'No Hp/Telp wajib diisi' }),

    password: z.string(),
    password_confirmation: z.string(),
    province_id: z
      .object({
        label: z.string(), // Ensure label is a non-empty string
        value: z.number(), // You can specify a more specific type for 'value' if needed
      })
      .nullable()
      .refine(
        (province) => {
          return province?.value !== undefined
        },
        { message: 'Provinsi wajib diisi' }
      ),
    regency_id: z
      .object({
        label: z.string(), // Ensure label is a non-empty string
        value: z.number(), // You can specify a more specific type for 'value' if needed
      })
      .nullable()
      .refine(
        (regency) => {
          return regency?.value !== undefined
        },
        { message: 'Kab./Kota wajib diisi' }
      ),

    role_id: z.string().min(1, { message: 'Role wajib dipilih' }),
    name: z.string().min(1, { message: 'Nama wajib diisi' }),
    gender: z.string(),
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

export const createSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: 'Email wajib diisi' })
      .email('Format harus email'),
    phone: z.string().min(1, { message: 'No Hp/Telp wajib diisi' }),
    password: z.string().min(1, { message: 'Password wajib diisi' }),
    password_confirmation: z
      .string()
      .min(1, { message: 'Konfirmasi password wajib diisi' }),

    province_id: z
      .object({
        label: z.string(), // Ensure label is a non-empty string
        value: z.number(), // You can specify a more specific type for 'value' if needed
      })
      .nullable()
      .refine(
        (province) => {
          return province?.value !== undefined
        },
        { message: 'Provinsi wajib diisi' }
      ),
    regency_id: z
      .object({
        label: z.string(), // Ensure label is a non-empty string
        value: z.number(), // You can specify a more specific type for 'value' if needed
      })
      .nullable()
      .refine(
        (regency) => {
          return regency?.value !== undefined
        },
        { message: 'Kab./Kota wajib diisi' }
      ),

    role_id: z.string().min(1, { message: 'Role wajib dipilih' }),
    //address: z.string().min(1, { message: 'Alamat wajib diisi' }),
 //   id_number: z.string().min(1, { message: 'No. Identitas wajib diisi' }),
    name: z.string().min(1, { message: 'Nama Sesuai KTP wajib diisi' }),
   // date_of_birth: z.string().min(2, { message: 'Tanggal lahir wajib diisi' }),
    //place_of_birth: z.string().min(1, { message: 'Tempat lahir wajib diisi' }),
    gender: z.string(),
    //job: z.string().min(1, { message: 'Pekerjaan wajib diisi' }),
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
