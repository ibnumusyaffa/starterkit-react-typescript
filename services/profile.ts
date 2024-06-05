import axios from '@/lib/axios'

export type ProfileResponse = {
  created_at: string
  updated_at: string
  email: string
  name: string
  id: string
}

export async function getProfile(): Promise<ProfileResponse> {
  const response = await axios.get(`/auth/profile`)
  return response.data
}
