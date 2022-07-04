import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('characters')
export class Character {
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
