import { request } from '../../utils/request'
import { expect } from 'chai'
import { User } from '../../../src/entities/User'
import { clearAllRepository } from '../../utils/db'
import usersService from '../../../src/services/users.service'

describe('Route v1 users', () => {
	describe('GET /users', () => {
		before(() => usersService.createUser('getUser0@email.com', 'getUser'))

		it('Returns users list', () =>
			request
				.get('/api/v1/users')
				.expect(200)
				.expect((res) => {
					const createdUserExist = res.body.data.some(
						({ email, username, id }: User) =>
							email === 'getUser0@email.com' &&
							username === 'getUser' &&
							id !== undefined
					)
					expect(createdUserExist).to.equal(true)
				}))
	})

	describe('POST /users', () => {
		it('Creates a user', () =>
			request
				.post('/api/v1/users')
				.send({ email: 'postUser@email.com', username: 'postUser' } as User)
				.expect(201)
				.expect((res) => {
					const { email, username, id } = res.body.data
					expect(email).to.equal('postUser@email.com')
					expect(username).to.equal('postUser')
					expect(id).to.exist
				}))
	})

	after(() => clearAllRepository())
})
