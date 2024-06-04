import { RoleKey } from '@/constants/role'
import axios from '@/lib/axios'

type User = {
  id: number
  uuid: string
  name: string
  email: string
  role_id: RoleKey
  referal_code: string
  status: number
  province_id: number
  province_name: string
  regency_id: number
  regency_name: string
  phone_number: string
}

type UserList = {
  page: number
  pagination: number
  total_page: number
  data: User[]
}

type getUserParams = {
  page: number | null
  pagesize: number
  keyword: string | null
  role_id: number | null
  province_id: number | null
  regency_id: number | null
  status: number
}

export async function getUsers(params: getUserParams): Promise<UserList> {
  const response = await axios.get('/users', {
    params,
  })
  return response.data
}

export type UserDetail = {
  created_at: string
  email: string
  id: number
  name: string
  profile: {
    address: string
    date_of_birth: string
    gender: number
    id: number
    idcard_number: string
    idcard_type: number
    job: string
    phone: string
    place_of_birth: string
    user_id: number
  }
  province_id: number
  province_name: string
  referal_code: string
  regency_id: number
  regency_name: string
  role_id: number
  status: number
  updated_at: string
  uuid: string
}

export async function getUserById(id: string): Promise<UserDetail> {
  const response = await axios.get(`/user/${id}`)
  return response.data
}

export async function deleteUser(id: string) {
  return axios.delete(`/user/${id}`)
}

export type RequestBody = {
  password?: string
  name?: string
  email?: string
  province_id?: number
  regency_id?: number
  role_id?: number
  profile?: {
    phone?: string
    gender?: number
  }
}

export type ErrorResponse = {
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

export async function createUser(data: RequestBody) {
  return axios.post(`/user`, data)
}

export async function editUser(id: string, data: RequestBody) {
  const response = await axios.put(`/user/${id}`, data)

  return response.data
}
