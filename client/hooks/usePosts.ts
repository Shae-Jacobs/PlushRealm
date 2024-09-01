import { useQuery } from '@tanstack/react-query'
import { getAllPosts } from '../apis/posts'

export default function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => getAllPosts(),
  })
}
