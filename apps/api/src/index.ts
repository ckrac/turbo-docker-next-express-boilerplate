import express from 'express'
import routes from './routes/index.route'

const app = express()
const port = process.env.PORT || 3000

// Routes entry
app.use(routes)

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})
