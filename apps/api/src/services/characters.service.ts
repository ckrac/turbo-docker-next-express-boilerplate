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

const getCharacters = async () => repository.character.find()

const updateCharacter = (id: number, update: Omit<Character, 'id'>) =>
	repository.character.update({ id }, update)

const charactersService = { createCharacter, getCharacters, updateCharacter }

export default charactersService
