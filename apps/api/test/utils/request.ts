import _request from 'supertest'

const serverUrl = process.env.PORT
	? `http://localhost:${process.env.PORT}`
	: 'http://localhost:3000'

const request = _request(serverUrl)

export { request }
