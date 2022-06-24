import 'reflect-metadata'
import dataSource from './dataSource'
import { app } from './app'

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`app listening on port ${port}`))

dataSource
	.initialize()
	.then(() => console.log('Database connection success'))
	.catch((err) => console.error(err))
