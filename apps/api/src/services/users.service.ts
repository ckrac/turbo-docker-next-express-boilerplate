import { User } from '@src/entities/User'
import { repository } from '@src/dataSource'

const createUser = async (email: string, username: string) => {
	const newUser = new User()
	newUser.email = email
	newUser.username = username

	return repository.user.save(newUser)
}

const getUsers = async () => {
	return repository.user.find()
}

const usersService = { createUser, getUsers }

export default usersService
