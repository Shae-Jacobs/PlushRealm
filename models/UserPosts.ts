export interface User {
  id: number
  userName: string
  profilePicture: string
  bio?: string
}

export interface Posts {
  id: number
  user: User
}

export interface PostsData {
  likes: number
  postImage: string
  comments: string
}
