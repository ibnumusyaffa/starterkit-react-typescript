import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useProfile from './useProfile'

export const permissions = {
  1: ['hasil-suara-tps', 'laporan-pelanggaran', 'user-management', 'overview'],
  4: ['hasil-suara-tps', 'laporan-pelanggaran'],
}

export function usePermission(page: string) {
  const profile = useProfile()
  const router = useRouter()
  const roleId = profile.data?.role_id as keyof typeof permissions
  const status = profile.status
  useEffect(() => {
    if (status !== 'success') {
      return
    }

    const allowedPages = permissions[roleId] || []
    if (allowedPages.includes(page)) {
      return
    }

    router.replace('/403')
  }, [roleId, status])
}
