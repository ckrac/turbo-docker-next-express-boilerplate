import { request } from '../utils/request'
import { expect } from 'chai'

describe('Route status', () => {
	describe('GET /status', () => {
		it('Returns app version', () => {
			return request
				.get('/status')
				.expect((res) => expect(res.body.version).to.equal('2'))
				.expect(200)
		})
	})
})
