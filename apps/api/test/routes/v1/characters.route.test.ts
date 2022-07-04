import { expect } from 'chai'
import { Character } from '@src/entities/Character'
import charactersService from '@src/services/characters.service'
import { clearAllRepository } from '@test/utils/db'
import { request } from '@test/utils/request'

describe('Route v1 characters', () => {
	describe('GET /characters', () => {
		before(() =>
			charactersService.createCharacter(
				'Goku',
				'A strong saiyan',
				'someImageUrl.com'
			)
		)

		it('Returns characters list', () =>
			request
				.get('/api/v1/characters')
				.expect(200)
				.expect((res) => {
					const createdCharacterExist = res.body.data.some(
						({ description, image_url, name, id }: Character) =>
							description === 'A strong saiyan' &&
							image_url === 'someImageUrl.com' &&
							name === 'Goku' &&
							id !== undefined
					)
					expect(createdCharacterExist).to.equal(true)
				}))
	})

	describe('POST /characters', () => {
		const newCharacter = {
			description: 'A nameikan who can regenerate body parts',
			image_url: 'someImageUrl.com',
			name: 'Piccolo',
		} as Character

		it('should create a character', () =>
			request
				.post('/api/v1/characters')
				.send(newCharacter)
				.expect(201)
				.expect((res) => {
					const { description, image_url, name, id } = res.body.data
					expect(description).to.equal(newCharacter.description)
					expect(image_url).to.equal(newCharacter.image_url)
					expect(name).to.equal(newCharacter.name)
					expect(id).to.exist
				}))

		it('should return BadRequestError if name is exist', () =>
			request
				.post('/api/v1/characters')
				.send(newCharacter)
				.expect(400)
				.expect((res) => {
					const { code, message } = res.body.error
					expect(code).to.equal('BadRequest')
					expect(message).to.equal('Invalid name')
				}))
	})

	after(() => clearAllRepository())
})
