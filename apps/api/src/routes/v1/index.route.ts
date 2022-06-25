import { Router } from 'express'
import statusRoute from './status.route'
import usersRoute from './users.route'

const v1Routes = Router()

v1Routes.use('/status', statusRoute)
v1Routes.use('/users', usersRoute)

export { v1Routes }
