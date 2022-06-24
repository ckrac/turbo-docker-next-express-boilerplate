import { Request, Response } from 'express'
import { TypedRequestBody } from '../types/Request'
import { User } from '../entities/User'
import usersService from '../services/users.service'

const registerUser = async (
	req: TypedRequestBody<Omit<User, 'id'>>,
	res: Response
) => {
	const { email, username } = req.body
	try {
		const user = await usersService.createUser(email, username)
		return res.status(201).send({ ...user })
	} catch (error) {
		return res.status(400).send(error)
	}
}

const getUsers = async (req: Request, res: Response) => {
	try {
		const users = await usersService.getUsers()
		return res.status(200).send({ data: users })
	} catch (error) {
		return res.status(400).send(error)
	}
}

const usersController = { registerUser, getUsers }

export default usersController