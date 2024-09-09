import request from 'superagent'

export async function getUserById(id: number) {
  const res = await request.get(`/api/v1/users/${id}`)
  return res.body
}
