import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'
import { User } from "./User";

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
    @JoinColumn({ name: "user_id", referencedColumnName: "id" })
    @ManyToOne(() => User)
    user: User
    @CreateDateColumn({ name: "comment_date" })
    date: Date

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}
