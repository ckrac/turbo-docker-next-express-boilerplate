import { expect } from 'chai'
import { request } from '@test/utils/request'

describe('Route v1 status', () => {
	describe('GET /status', () => {
		it('Returns app version', () =>
			request
				.get('/api/v1/status')
				.expect(200)
				.expect((res) => expect(res.text).to.equal('ok')))
	})
})
