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
  orderby?: string
  order?: string
}

export async function getRegister(params: getUserParams): Promise<UserList> {
  const response = await axios.get('/registers', {
    params,
  })
  return response.data
}

export async function activateUser(id: string) {
  return axios.put(`/register/${id}/status`, { status: 1 })
}
