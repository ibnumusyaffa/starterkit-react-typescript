import { getProfile } from '@/services/profile'
import { useQuery } from '@tanstack/react-query'

function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfile(),
    staleTime: 1000 * 60 * 5, //5 minutes
  })
}

export default useProfile
