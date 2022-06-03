import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUser1654273366387 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'users',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
					},
					{
						name: 'email',
						isUnique: true,
						isNullable: false,
						type: 'varchar(100)',
					},
					{
						name: 'username',
						isUnique: true,
						isNullable: false,
						type: 'varchar(250)',
					},
				],
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('users')
	}
}
