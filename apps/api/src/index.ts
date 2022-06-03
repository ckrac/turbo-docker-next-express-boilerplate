import 'reflect-metadata'
import express from 'express'
import routes from './routes/index.route'
import AppDataSource from './dataSource'

const app = express()
const port = process.env.PORT || 3000

// Routes entry
app.use(routes)

app.listen(port, () => console.log(`Server listening on port ${port}`))

AppDataSource.initialize()
	.then(() => console.log('Database connection success'))
	.catch((err) => {
		console.log('Database connection error')
		console.error(err)
	})
