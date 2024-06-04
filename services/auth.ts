import axios from '@/lib/axios'
import originalAxios from 'axios'

export type LoginResp = {
  access_token: string
  expires_in: number
  token_type: string
  user: {
    created_at: string
    created_by: string
    email: string
    id: number
    name: string
    profile: {
      address: string
      date_of_birth: string
      gender: number
      id: number
      idcard_name: string
      idcard_number: string
      idcard_type: number
      job: string
      phone: string
      place_of_birth: string
      user_id: number
    }
    province_id: number
    referal_code: string
    regency_id: number
    regency_name: string
    role_id: number
    role_name: string
    status: number
    subdistrict_name: string
    uuid: string
  }
}

export type LoginReq = {
  email: string
  password: string
}

export type LoginRespErr = {
  error: string
  message: string
  path: string
  status: number
  timestamp: string
}

export async function login(data: LoginReq): Promise<LoginResp> {
  const response = await axios.post('/auth/login', data)
  return response.data
}

export async function logout() {
  const response = await axios.post('/auth/logout')
  return response.data
}

export type ForgotPasswordReq = {
  email: string
}

export type ForgotPasswordResp = {
  message: string
}
export async function forgotPassword(
  data: ForgotPasswordReq
): Promise<ForgotPasswordResp> {
  const response = await axios.post('/auth/forget-password', data)
  return response.data
}

export type CheckOTPReq = {
  otp_code: string
  email: string
}

export type CheckOTPResp = {
  access_token: string
  expires_in: number
  token_type: string
}

export type CheckOTPRespErr = {
  message: string
}

export async function CheckOTP(data: CheckOTPReq): Promise<CheckOTPResp> {
  const response = await axios.post('/auth/reset-password/otp', data)
  return response.data
}

export type resetPasswordReq = {
  new_password?: string
  confirmation_password?: string
  token: string
}

export type resetPasswordResp = {
  message: string
}

export type resetPasswordErr = {
  error: string
  errors: Error[]
  message: string
  path: string
  status: number
  timestamp: string
}

export interface Error {
  field: string
  message: string
}

export async function resetPassword(
  data: resetPasswordReq
): Promise<resetPasswordResp> {
  const instance = originalAxios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  })
  instance.defaults.headers.Authorization = `Bearer ${data.token}`
  const response = await instance.post('/auth/reset-password', data)
  return response.data
}
