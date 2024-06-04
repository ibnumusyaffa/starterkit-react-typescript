import axios from '@/lib/axios'

//login
export type LoginResp = {
  token: string
}

export type LoginReq = {
  email: string
  password: string
}

export type LoginRespErr = {
  message: string
}

export async function login(data: LoginReq): Promise<LoginResp> {
  const response = await axios.post('/auth/login', data)
  return response.data
}
//logout
export async function logout() {
  return true
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
  const response = await axios.post('/auth/forgot-password', data)
  return response.data
}

export type resetPasswordBody = {
  password?: string
  password_confirmation?: string
  token: string
  email: string
}

export type resetPasswordResp = {
  message: string
}

export type resetPasswordErr = {
  errors: Error[]
  message: string
}

export interface Error {
  field: string
  message: string
}

export async function resetPassword(
  data: resetPasswordBody
): Promise<resetPasswordResp> {
  const response = await axios.post('/auth/reset-password', data)
  return response.data
}
