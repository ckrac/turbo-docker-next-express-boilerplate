import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { components } from '@src/types/schema'

@Entity('characters')
export class Character implements Required<components['schemas']['Character']> {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({
		unique: true,
	})
	name!: string

	@Column({
		unique: false,
	})
	description!: string

	@Column({
		unique: false,
	})
	image_url!: string
}
