import express from 'express'
import morgan from 'morgan'
import { v1Routes } from '@src/routes/v1/index.route'
import { errorHandler } from './middleware/errorHandler'
import cors from 'cors'
import helmet from 'helmet'

export const app = express()

app.use(cors())
app.use(helmet())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Logger middleware
app.use(morgan('combined'))

// Routes entry
app.use('/api/v1', v1Routes)

app.use(errorHandler)
