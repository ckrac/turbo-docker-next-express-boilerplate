import express from 'express'
import routes from './routes/index.route'

const server = express()

// Routes entry
server.use(routes)

export default server
