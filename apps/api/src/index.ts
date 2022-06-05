import 'reflect-metadata'
import AppDataSource from './dataSource'
import server from './server'

const port = process.env.PORT || 3000

AppDataSource.initialize()
	.then(() => {
		console.log('Database connection success')

		server.listen(port, () => console.log(`Server listening on port ${port}`))
	})
	.catch((err) => {
		console.error(err)
	})
