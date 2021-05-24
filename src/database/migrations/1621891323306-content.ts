import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
    TableColumn,
} from 'typeorm';

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
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4',
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
            }),
        );
        await queryRunner.addColumn(
            'tb_content',
            new TableColumn({
                name: 'topic_id',
                type: 'uuid',
            }),
        );

        await queryRunner.createForeignKey(
            'tb_content',
            new TableForeignKey({
                columnNames: ['topic_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'tb_topics',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('content');
        const foreignKey = table.foreignKeys.find(
            fk => fk.columnNames.indexOf('topic_id') !== -1,
        );
        await queryRunner.dropForeignKey('tb_content', foreignKey);
        await queryRunner.dropColumn('tb_content', 'topic_id');
        await queryRunner.dropTable('tb_content');
    }
}
