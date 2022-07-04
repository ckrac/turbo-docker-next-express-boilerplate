import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class registerCharacter1654273366387 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'characters',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						isGenerated: true,
					},
					{
						name: 'name',
						isUnique: true,
						isNullable: false,
						type: 'varchar(250)',
					},
					{
						name: 'description',
						isUnique: false,
						isNullable: false,
						type: 'text',
					},
					{
						name: 'image_url',
						isUnique: false,
						isNullable: false,
						type: 'varchar(250)',
					},
				],
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('characters')
	}
}
