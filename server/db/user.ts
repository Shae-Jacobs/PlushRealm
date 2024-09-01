import connection from './connection.ts'
export const getUserById = async (id: number) => {
  return connection('user')
    .select(
      'id',
      'user_name as userName',
      'profile_picture as profilePicture',
      'bio',
    )
    .where({ id })
    .first()
}
