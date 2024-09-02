export interface User {
  id: number
  userName: string
  profilePicture: string
  bio?: string
}
export interface PostWithUser {
  postid: number
  userId: number
  userName: string
  profilePicture: string
  postImage: string
  likes: number
  caption: string
}
