import { expect } from 'chai'
import { User } from '@src/entities/User'
import usersService from '@src/services/users.service'
import { clearAllRepository } from '@test/utils/db'
import { request } from '@test/utils/request'

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
		const newUser = {
			email: 'postUser@email.com',
			username: 'postUser',
		} as User

		it('should create a user', () =>
			request
				.post('/api/v1/users')
				.send(newUser)
				.expect(201)
				.expect((res) => {
					const { email, username, id } = res.body.data
					expect(email).to.equal('postUser@email.com')
					expect(username).to.equal('postUser')
					expect(id).to.exist
				}))

		it('should return BadRequestError if email is exist', () =>
			request
				.post('/api/v1/users')
				.send({
					email: newUser.email,
					username: newUser.username + 'new',
				} as User)
				.expect(400)
				.expect((res) => {
					const { code, message } = res.body.error
					expect(code).to.equal('BadRequest')
					expect(message).to.equal('Invalid username or email')
				}))

		it('should return BadRequestError if username is exist', () =>
			request
				.post('/api/v1/users')
				.send({
					email: newUser.email + 'new',
					username: newUser.username,
				} as User)
				.expect(400)
				.expect((res) => {
					const { code, message } = res.body.error
					expect(code).to.equal('BadRequest')
					expect(message).to.equal('Invalid username or email')
				}))
	})

	after(() => clearAllRepository())
})
