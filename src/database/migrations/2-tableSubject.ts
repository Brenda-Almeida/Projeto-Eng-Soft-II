import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class tableSubject1621891753103 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_subjects',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'id_teacher',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'period',
                        type: 'varchar',
                    },
                    {
                        name: 'status',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
                foreignKeys: [
                    {
                        name: 'FKIdTeacher',
                        referencedTableName: 'tb_users',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_teacher'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_subjects');
    }
}
