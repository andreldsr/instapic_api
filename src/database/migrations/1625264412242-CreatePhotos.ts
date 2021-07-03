import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePhotos1625264412242 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "photos",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "post_date",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "url",
                    type: "text"
                },
                {
                    name: "description",
                    type: "varchar"
                },
                {
                    name: "allow_comments",
                    type: "boolean"
                },
                {
                    name: "likes",
                    type: "integer",
                    default: 0
                },
                {
                    name: "comments",
                    type: "integer",
                    default: 0
                },
                {
                    name: "user_id",
                    type: "uuid"
                }
            ],
            foreignKeys: [
                {
                    name: "FKPhotoUser",
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    columnNames: ["user_id"],
                    onDelete: "SET NULL"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("photos")
    }

}
