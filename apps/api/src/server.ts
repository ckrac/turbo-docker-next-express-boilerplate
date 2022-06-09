import express from 'express'
import routes from './routes/index.route'
import bodyParser from 'body-parser'
import morgan from 'morgan'

export const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))

// Logger middleware
server.use(morgan('combined'))

// Routes entry
server.use(routes)
