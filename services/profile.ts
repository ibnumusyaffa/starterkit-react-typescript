import { RoleKey } from '@/constants/role'
import axios from '@/lib/axios'

export type ProfileResponse = {
  created_at: string
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
  province_name: string
  referal_code: string
  regency_id: number
  regency_name: string
  role_id: RoleKey
  status: number
  updated_at: string
  uuid: string
}

export async function getProfile(): Promise<ProfileResponse> {
  const response = await axios.get(`/profile/`)
  localStorage.setItem('role_id',response.data.role_id)
  return response.data
}
