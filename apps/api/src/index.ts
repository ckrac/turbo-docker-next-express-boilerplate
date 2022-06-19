import 'reflect-metadata'
import dataSource from './dataSource'
import { server } from './server'

const port = process.env.PORT || 3000
server.listen(port, () => console.log(`Server listening on port ${port}`))

dataSource
	.initialize()
	.then(() => console.log('Database connection success'))
	.catch((err) => console.error(err))
