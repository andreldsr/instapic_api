import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLikes1625266772282 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "likes",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
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
                    name: "like_date",
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
                    onDelete: "CASCADE"
                }

            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("likes")
    }

}
