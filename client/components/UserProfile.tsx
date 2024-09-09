import { useParams } from 'react-router-dom'
import useUserById from '../hooks/useUser'
export default function UserProfile() {
  const { id } = useParams()
  const { data: user, isLoading, error } = useUserById(id)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading user profile.</p>

  return (
    <>
      <h1>{user.userName}</h1>
      <img src={user.profilePicture} alt={`${user.userName}'s profile`} />
      <p>{user.bio}</p>
    </>
  )
}
