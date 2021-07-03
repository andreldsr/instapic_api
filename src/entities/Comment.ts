import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity("comments")
export class Comment {
    @PrimaryColumn()
    readonly id: string
    @Column()
    text: string
    @Column({ name: "photo_id" })
    photoId: string
    @Column({ name: "user_id" })
    userId: string
    @CreateDateColumn({ name: "comment_date" })
    date: Date

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}
