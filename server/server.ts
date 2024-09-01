import express from 'express'
import * as Path from 'node:path'

import postRoutes from './routes/posts.ts'
import userRoutes from './routes/user.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/plushiepals', postRoutes)
server.use('/api/v1/plushiepals', userRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
