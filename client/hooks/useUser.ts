import { useQuery } from '@tanstack/react-query'
import { getUserById } from '../apis/user'

export default function useUserById(id: number) {
  const query = useQuery({
    queryKey: ['user', id],
    queryFn: () => getUserById(Number(id)),
  })
  return { ...query }
}
