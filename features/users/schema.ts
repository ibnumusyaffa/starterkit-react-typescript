import * as yup from 'yup'

export const editSchema = yup.object({
  email: yup
    .string()
    .required('Email wajib diisi')
    .email('Format email tidak valid'),
  name: yup.string().required('Nama wajib diisi'),
})

export const createSchema = yup.object({
  email: yup
    .string()
    .required('Email wajib diisi')
    .email('Format email tidak valid'),
  name: yup.string().required('Nama wajib diisi'),

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
