import connection from './connection.ts'
import { PostWithUser } from '../../models/UserPosts.ts'

export async function getAllPosts(): Promise<PostWithUser[]> {
  return connection('posts')
    .join('users', 'posts.user_id', 'users.id')
    .select(
      'posts.id as postid',
      'users.id as userId',
      'users.user_name as userName',
      'users.profile_picture as profilePicture',
      'posts.post_image as postImage',
      'posts.likes as likes',
      'posts.caption as caption',
    )
}
