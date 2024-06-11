import axios from '@/lib/axios'

export type User = {
  created_at: string
  updated_at: string
  email: string
  name: string
  id: string
}

type Users = {
  meta: {
    totalPages: number
    total: number
    page: number
    limit: number
  }
  data: User[]
}

type UserParams = {
  page?: number
  limit?: number
  keyword?: string
  sort_column?: string
  sort_direction?: string
}

export async function getUsers(params: UserParams): Promise<Users> {
  const response = await axios.get('/users', {
    params,
  })
  return response.data
}

export async function getUserById(id: string): Promise<User> {
  const response = await axios.get(`/users/${id}`)
  return response.data
}

export async function deleteUser(id: string) {
  return axios.delete(`/users/${id}`)
}

export type CreateReqBody = {
  password?: string
  name?: string
  email?: string
}

export type ErrorResponse = {
  errors: Error[]
  message: string
}

export interface Error {
  field: string
  message: string
}

export async function createUser(data: CreateReqBody) {
  return axios.post(`/users`, data)
}

export type UpdateReqBody = {
  name?: string
  email?: string
}
export async function editUser(id: string, data: UpdateReqBody) {
  const response = await axios.put(`/users/${id}`, data)
  return response.data
}
