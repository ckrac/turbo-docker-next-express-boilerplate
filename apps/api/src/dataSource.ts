import { DataSource } from 'typeorm'
import { Character } from '@src/entities/Character'

const dataSource = new DataSource({
	type: 'postgres',
	host: process?.env?.PG_HOST,
	port: process?.env?.PG_PORT ? +process?.env?.PG_PORT : undefined,
	username: process?.env?.POSTGRES_USER,
	password: process?.env?.POSTGRES_PASSWORD,
	database: process?.env?.POSTGRES_DB,
	entities: [__dirname + '/entities/**/*.{js,ts}'],
	logging: true,
	synchronize: false,
	subscribers: [],
	migrations: [__dirname + '/migrations/**/*.{js,ts}'],
})

export const repository = {
	character: dataSource.getRepository(Character),
} as const

export default dataSource
