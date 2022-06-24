import _request from 'supertest'
import { app } from '../../src/app'

const request = _request(app)

export { request }
