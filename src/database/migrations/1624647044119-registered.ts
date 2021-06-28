import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class registered1624647044119 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tb_registered",
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'id_student',
                        type: 'uuid',
                    },
                    {
                        name: 'id_subject',
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
                    }
                ],
                foreignKeys:[
                    {
                        name: 'FKUsers',
                        referencedTableName: 'tb_users',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_student'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL',
                    },
                    {
                        name: 'FKSubject',
                        referencedTableName:'tb_subjects',
                        referencedColumnNames: ['id'],
                        columnNames:['id_subject'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL',
                    }
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_registered');
    }

}
