import express from 'express'
import morgan from 'morgan'
import v1Routes from './routes/v1/index.route'

export const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: false }))

// Logger middleware
server.use(morgan('combined'))

// Routes entry
server.use('/api/v1', v1Routes)
