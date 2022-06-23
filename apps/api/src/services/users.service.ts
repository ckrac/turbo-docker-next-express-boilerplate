import { User } from '../entities/User'
import dataSource from '../dataSource'

const userRepository = dataSource.getRepository(User)

const createUser = async (email: string, username: string) => {
	const newUser = new User()
	newUser.email = email
	newUser.username = username

	return userRepository.save(newUser)
}

const getUsers = async () => {
	return userRepository.find()
}

const usersService = { createUser, getUsers }

export default usersService
