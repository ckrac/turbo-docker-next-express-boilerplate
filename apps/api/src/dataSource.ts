import { DataSource } from 'typeorm'
import { User } from '@src/entities/User'

const isRunningBuild = process?.env?.NODE_ENV === 'production'

const dataSource = new DataSource({
	type: 'postgres',
	host: process?.env?.PG_HOST,
	port: process?.env?.PG_PORT ? +process?.env?.PG_PORT : undefined,
	username: process?.env?.POSTGRES_USER,
	password: process?.env?.POSTGRES_PASSWORD,
	database: process?.env?.POSTGRES_DB,
	entities: [User],
	logging: true,
	synchronize: false,
	subscribers: [],
	migrations: [
		isRunningBuild ? 'dist/src/migrations/**/*.js' : 'src/migrations/**/*.ts',
	],
})

export const repository = {
	user: dataSource.getRepository(User),
} as const

export default dataSource
