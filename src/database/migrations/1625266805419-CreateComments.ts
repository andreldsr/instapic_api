import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateComments1625266805419 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "comments",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "text",
                    type: "text"
                },
                {
                    name: "photo_id",
                    type: "uuid",
                },
                {
                    name: "user_id",
                    type: "uuid"
                },
                {
                    name: "comment_date",
                    type: "timestamp",
                    default: "now()"
                }
            ],
            foreignKeys: [
                {
                    name: "FKLikePhoto",
                    columnNames: ["photo_id"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "photos",
                    onDelete: "CASCADE"
                },
                {
                    name: "FKLikeUser",
                    columnNames: ["user_id"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "users",
                    onDelete: "SET NULL"
                }

            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("comments")
    }

}
