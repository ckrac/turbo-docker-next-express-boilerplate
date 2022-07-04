import { Character } from '@src/entities/Character'
import { repository } from '@src/dataSource'

const createCharacter = async (
	name: string,
	description: string,
	imageUrl: string
) => {
	const newCharacter = new Character()
	newCharacter.name = name
	newCharacter.description = description
	newCharacter.image_url = imageUrl

	return repository.character.save(newCharacter)
}

const getCharacters = async () => {
	return repository.character.find()
}

const charactersService = { createCharacter, getCharacters }

export default charactersService
