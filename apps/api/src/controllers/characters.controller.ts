import { BadRequestError, InternalServerError } from 'restify-errors'
import { Request, Response, NextFunction } from 'express'
import { TypedRequestBody } from '@src/types/Request'
import { Character } from '@src/entities/Character'
import charactersService from '@src/services/characters.service'

const registerCharacter = async (
	req: TypedRequestBody<Omit<Character, 'id'>>,
	res: Response,
	next: NextFunction
) => {
	const { description, image_url, name } = req.body
	try {
		const character = await charactersService.createCharacter(
			name,
			description,
			image_url
		)
		res.status(201).send({ data: character })
	} catch (error) {
		next(new BadRequestError('Invalid name'))
	}
}

const getCharacters = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const characters = await charactersService.getCharacters()
		res.status(200).send({ data: characters })
	} catch (error) {
		next(new InternalServerError())
	}
}

const charactersController = { registerCharacter, getCharacters }

export default charactersController
