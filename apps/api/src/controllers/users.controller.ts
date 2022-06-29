import { BadRequestError, InternalServerError } from 'restify-errors'
import { Request, Response, NextFunction } from 'express'
import { TypedRequestBody } from '@src/types/Request'
import { User } from '@src/entities/User'
import usersService from '@src/services/users.service'

const registerUser = async (
	req: TypedRequestBody<Omit<User, 'id'>>,
	res: Response,
	next: NextFunction
) => {
	const { email, username } = req.body
	try {
		const user = await usersService.createUser(email, username)
		res.status(201).send({ data: user })
	} catch (error) {
		next(new BadRequestError('Invalid username or email'))
	}
}

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const users = await usersService.getUsers()
		res.status(200).send({ data: users })
	} catch (error) {
		next(new InternalServerError())
	}
}

const usersController = { registerUser, getUsers }

export default usersController
