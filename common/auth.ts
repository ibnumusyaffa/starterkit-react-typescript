import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as axios from '@/lib/axios'
import { getProfile } from '@/services/profile'
import { useQuery } from '@tanstack/react-query'
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
    Cookies.remove('token')
    if (typeof window !== 'undefined') {
      localStorage.clear()
    }
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
  const { setAuth, initialized, removeAuth } = useAuth()
  const token = Cookies.get('token')

  if (initialized) {
    return
  }
  if (token) {
    setAuth(token)
  }
  if (!token) {
    removeAuth()
  }
}

export function useRequireAuth() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, router])
}

export function useRedirectIfAuthenticated() {
  const { isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/')
      return
    }
  }, [isAuthenticated, router])
}

export function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfile(),
    staleTime: 1000 * 60 * 5, //5 minutes
  })
}
