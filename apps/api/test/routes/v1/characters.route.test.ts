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

	describe('PUT /characters/:id', () => {
		const newCharacter = {
			name: 'Vegeta',
			description: `Goku's main rival`,
			image_url: 'someImage.com',
		} as Character

		before(() =>
			charactersService
				.createCharacter(
					newCharacter.name,
					newCharacter.description,
					newCharacter.image_url
				)
				.then(({ id }) => (newCharacter.id = id))
		)

		it('should update a character', () =>
			request
				.put(`/api/v1/characters/${newCharacter.id}`)
				.send({
					...newCharacter,
					description: 'The last prince of the Saiyan warrior people',
					id: undefined,
				})
				.expect(200))

		it('should return BadRequestError if target update id does not exist', () =>
			request
				.put('/api/v1/characters/1000')
				.send(newCharacter)
				.expect(400)
				.expect((res) => {
					const { code, message } = res.body.error
					expect(code).to.equal('BadRequest')
					expect(message).to.equal('No target update')
				}))
	})

	describe('DELETE /characters/:id', () => {
		const newCharacter = {
			name: 'Vegeta2',
			description: `Goku's main rival`,
			image_url: 'someImage.com',
		} as Character

		before(() =>
			charactersService
				.createCharacter(
					newCharacter.name,
					newCharacter.description,
					newCharacter.image_url
				)
				.then(({ id }) => (newCharacter.id = id))
		)

		it('should delete a character', () =>
			request
				.delete(`/api/v1/characters/${newCharacter.id}`)
				.send()
				.expect(200)
				.then(() => charactersService.getCharacters())
				.then((characters) => {
					const isExistingCharacter = characters.some(
						({ id }) => id === newCharacter.id
					)
					expect(isExistingCharacter).equal(false)
				}))

		it('should return ResourceNotFoundError if target update id does not exist', () =>
			request
				.delete('/api/v1/characters/1000')
				.send(newCharacter)
				.expect(404)
				.expect((res) => {
					const { code } = res.body.error
					expect(code).to.equal('ResourceNotFound')
				}))
	})

	after(() => clearAllRepository())
})
