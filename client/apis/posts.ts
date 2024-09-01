import request from 'superagent'
import { PostWithUser } from '../../models/UserPosts'
export async function getAllPosts() {
  try {
    const result = await request.get('/api/v1/plushiepals/posts')
    return result.body as PostWithUser[]
  } catch (error) {
    throw new Error('Failed to fetch posts')
  }
}
