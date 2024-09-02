import usePosts from '../hooks/usePosts'
import '../styles/index.scss'

export default function Posts() {
  const { data, error, isError, isPending } = usePosts()

  if (isPending) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  return (
    <div className="posts-container">
      {data.map((post) => (
        <div key={post.postid} className="post">
          <div className="post-header">
            <img
              src={post.profilePicture}
              alt={`Profile of ${post.userName}`}
              className="profile-picture"
            />
            <p className="username">{post.userName}</p>
          </div>
          <img
            src={post.postImage}
            alt={`Pic of ${post.userName}`}
            className="post-image"
          />
          <div className="likes-section">
            <span className="heart-icon">❤️</span>
            <span className="likes">{post.likes}</span>
          </div>
          <h1 className="caption">{post.caption}</h1>
        </div>
      ))}
    </div>
  )
}
