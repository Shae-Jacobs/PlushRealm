import usePosts from '../hooks/usePosts'

export default function Posts() {
  const { data, error, isError, isPending } = usePosts()

  if (isPending) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  return (
    <>
      <h1>Posts:</h1>
      {data.map((post) => (
        <div key={post.postid}>
          <p>{post.userName}</p>
        </div>
      ))}
    </>
  )
}
