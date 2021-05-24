import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class content1621891323306 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_content',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                    },
                    {
                        name: 'video_link',
                        type: 'varchar',
                    },
                    {
                        name: 'archives',
                        type: 'varchar',
                    },
                    {
                        name: 'topics_id',
                        type: 'uuid',
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
                        name: 'FKTopics',
                        referencedTableName: 'tb_topics',
                        referencedColumnNames: ['id'],
                        columnNames: ['topics_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_content');
    }
}
