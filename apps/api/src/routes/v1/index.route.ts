import { Router } from 'express'
import statusRoute from './status.route'

const routes = Router()

routes.get('/', (req, res) => {
	res.send('Hello World!')
})

routes.use('/status', statusRoute)

export default routes
