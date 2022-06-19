import { DataSource } from 'typeorm'
import { User } from './entities/User'

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
	migrations: ['src/migrations/**/*.ts'],
})

export default dataSource
