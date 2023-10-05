import axios from '@/lib/axios'

type LoginResponse = {
  message: string
}

type LoginRequest = {
  email: string
  password: string
}

export async function login(data: LoginRequest): Promise<LoginResponse> {
  const response = await axios.post('login', data)
  return response.data
}
