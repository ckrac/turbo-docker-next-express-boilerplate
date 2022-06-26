import 'reflect-metadata'
import { app } from './app'
import dataSource from './dataSource'

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`app listening on port ${port}`))

dataSource
	.initialize()
	.then(() => console.log('Database connection success'))
	.catch((err) => console.error('Database initialization error: ', err))
