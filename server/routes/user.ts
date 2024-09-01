import { Router } from 'express'

import * as db from '../db/user.ts'

const router = Router()

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await db.getUserById(Number(id))
    res.json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to get user' })
  }
})

export default router
