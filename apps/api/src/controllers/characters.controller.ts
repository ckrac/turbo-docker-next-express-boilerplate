import {
	BadRequestError,
	InternalServerError,
	ResourceNotFoundError,
} from 'restify-errors'
import { Request, Response, NextFunction } from 'express'
import charactersService from '@src/services/characters.service'
import { operations } from '@src/types/schema'

const registerCharacter = async (
	req: Request<
		operations['addCharacter']['requestBody']['content']['application/json']
	>,
	res: Response<
		operations['addCharacter']['responses']['201']['content']['application/json']
	>,
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
	res: Response<
		operations['getCharacters']['responses']['200']['content']['application/json']
	>,
	next: NextFunction
) => {
	try {
		const characters = await charactersService.getCharacters()
		res.status(200).send({ data: characters })
	} catch (error) {
		next(new InternalServerError())
	}
}

const updateCharacter = async (
	req: Request<
		operations['updateCharacter']['parameters']['path'],
		{},
		operations['updateCharacter']['requestBody']['content']['application/json']
	>,
	// req: Request<{ id: string }, {}, Omit<Character, 'id'>>,
	res: Response,
	next: NextFunction
) => {
	try {
		const updateResult = await charactersService.updateCharacter(
			Number(req.params.id),
			req.body
		)

		if (updateResult.affected === 0) {
			return next(new ResourceNotFoundError())
		}

		res.status(200).send()
	} catch (error) {
		next(new BadRequestError())
	}
}

const deleteCharacter = async (
	req: Request<operations['deleteCharacter']['parameters']['path']>,
	res: Response,
	next: NextFunction
) => {
	try {
		const deleteResult = await charactersService.deleteCharacter(
			Number(req.params.id)
		)

		if (deleteResult.affected === 0) {
			return next(new ResourceNotFoundError())
		}

		res.status(200).send()
	} catch (error) {
		next(new BadRequestError())
	}
}

const charactersController = {
	registerCharacter,
	getCharacters,
	updateCharacter,
	deleteCharacter,
}

export default charactersController
