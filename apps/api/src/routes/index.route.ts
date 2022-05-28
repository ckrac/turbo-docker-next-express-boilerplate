import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => {
	res.send('Hello World!')
})

routes.get('/status', (req, res) => {
	res.json({ version: '1' })
})

export default routes
