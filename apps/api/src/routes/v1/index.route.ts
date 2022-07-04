import { Router } from 'express'
import statusRoute from './status.route'
import charactersRoute from './characters.route'

const v1Routes = Router()

v1Routes.use('/status', statusRoute)
v1Routes.use('/characters', charactersRoute)

export { v1Routes }
