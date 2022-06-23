import { Router } from 'express'
import statusRoute from './status.route'
import usersRoute from './users.route'

const routes = Router()

routes.use('/status', statusRoute)
routes.use('/users', usersRoute)

export default routes
