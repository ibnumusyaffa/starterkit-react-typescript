import axios, { AxiosError } from 'axios'
import Cookies from 'js-cookie'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export function setToken(token: string) {
  instance.defaults.headers.Authorization = `Bearer ${token}`
}

export function removeToken() {
  instance.defaults.headers.Authorization = ''
}

instance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      Cookies.remove('token')
      localStorage.clear()
      if (window.location.pathname !== '/') {
        window.location.href = '/'
      }
    }
    return Promise.reject(error)
  }
)

export default instance
