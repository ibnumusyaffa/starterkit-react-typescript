import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as axios from '@/lib/axios'
import Cookies from 'js-cookie'
import { create } from 'zustand'

type AuthStore = {
  initialized: boolean
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
}

const useAuthStore = create<AuthStore>((set) => ({
  initialized: false,
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => {
    set({ isAuthenticated: value, initialized: true })
  },
}))

export function useAuth() {
  const { isAuthenticated, setIsAuthenticated, initialized } = useAuthStore()

  function setAuth(token: string) {
    axios.setToken(token)
    setIsAuthenticated(true)
    Cookies.set('token', token)
  }

  function removeAuth() {
    axios.removeToken()
    setIsAuthenticated(false)
    localStorage.clear()
    Cookies.remove('token')
  }

  return {
    isAuthenticated,
    setIsAuthenticated,
    initialized,
    setAuth,
    removeAuth,
  }
}

export function useAuthSetup() {
  const { setAuth, initialized, setIsAuthenticated } = useAuth()
  const token = Cookies.get('token')
  if (token && !initialized) {
    setAuth(token)
  }
  if (!token && !initialized) {
    setIsAuthenticated(false)
  }
}

export function useRequireAuth() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated, router])
}

export function useRedirectIfAuthenticated() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const roleId = parseInt(localStorage.getItem('role_id') as string)
    if (isAuthenticated) {
      if (roleId === 1) {
        router.push('/overview')
        return
      }

      if (roleId === 4) {
        router.push('/hasil-suara-tps')
        return
      }
    }
  }, [isAuthenticated, router])
}
