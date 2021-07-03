import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity("likes")
class Like {
    @PrimaryColumn()
    readonly id: string
    @Column({ name: "photo_id" })
    photoId: string
    @Column({ name: "user_id" })
    userId: string
    @CreateDateColumn({ name: "like_date" })
    date: Date

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}

export { Like }
